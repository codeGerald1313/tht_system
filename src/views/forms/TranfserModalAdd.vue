<template>
  <div>
    <Modal :activeModal="store.addmodalTrasnfer" @close="store.closeModalTransfer" title="Transferir a Caja Principal"
      class="max-w-xs mx-auto" centered>
      <form @submit.prevent="save" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div class="md:col-span-2">
            <div class="form-group relative">
              <FromGroup label="¿De donde se descontara el dinero?" name="d2">
                <Select id="payment-type" :options="paymentMethods" v-model="selectedPaymentType" class="pago-select" />
              </FromGroup>
            </div>
          </div>
          <div>
            <div class="form-group relative">
              <div class="md:col-span-2">
                <div class="form-group relative">
                  <FromGroup label="Seleccionar cuenta bancaria" name="account" v-if="showAmountInputs">
                    <Select id="bank-account" :options="bankAccounts" v-model="selectedBankAccount"
                      class="account-select" />
                  </FromGroup>
                </div>
              </div>

              <FromGroup label="Monto de transferencia" name="d2" class="mt-3" v-if="showAmountInputs2">
                <InputGroup type="text" appendIcon="heroicons-outline:cash" placeholder="Ingresar Monto"
                  v-model.trim="object.description" />
              </FromGroup>
              <FromGroup label="Monto de transferencia" name="d2" class="mt-3" v-if="showAmountInputs3">
                <InputGroup type="text" appendIcon="heroicons-outline:cash" placeholder="Ingresar Monto"
                  v-model.trim="object.description" />
              </FromGroup>
              <span class="absolute top-full left-0 text-red-500 mt-4" v-if="!object.description">
                El valor monto a transferir es obligatorio
              </span>
            </div>
          </div>
          <div>



            <div class="form-group relative">
              <FromGroup label="Total de dinero en la" name="d3" class="mt-3  text-center" v-if="showAmountInputs2">
                <span class="text-red-500 text-4xl text-center">{{ object.totalAcumlado }}</span>
              </FromGroup>

              <FromGroup label="Total de dinero en la" name="d3" class="mt-3  text-center" v-if="showAmountInputs3">
                <span class="text-red-500 text-4xl text-center">{{ object.totalAcumlado }}</span>
              </FromGroup>
            </div>


          </div>
          <!-- Botones -->
          <div class="col-span-2 text-right">
            <div class="buttons-container">
              <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="cancel" />
              <Button text="Transferir" btnClass="btn-dark" />
            </div>
          </div>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script setup>
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Textinput from "@/components/Textinput";
import { useProjectStore } from "@/store/project";
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import { useAuth } from "@/store/auth";
import { useToast } from "vue-toastification";
import InputGroup from '@/components/InputGroup';
import FromGroup from '@/components/FromGroup';
import Select from '@/components/Select';

const store = useProjectStore();
const toast = useToast();
const headers = useAuth().headers();

const emits = defineEmits(['guardadoExitoso']);

const object = ref({
  description: '',
  totalAcumlado: ''
});


const props = defineProps({
  id: String // Puedes ajustar el tipo de dato según el tipo esperado del prop 'id'
});

const bankAccounts = ref([]);

const paymentMethods = [
  { value: 1, label: "Efectivo" },
  { value: 2, label: "Visa" },
  { value: 3, label: "Cheque" },
  { value: 4, label: "Depósito a cuenta" }
];
const selectedBankAccount = ref(null);
const selectedPaymentType = ref(null);

const showAmountInputs = ref(false);
const showAmountInputs2 = ref(false);
const showAmountInputs3 = ref(false);

// Método para guardar los datos y realizar la solicitud POST
const save = () => {
  // console.log(object.value);
  axios.post(`${import.meta.env.VITE_API_URL}/transfers-moneyboxes/transfer-caja-principal`, {
    amount: object.value.description,
    paymentmethod_id: selectedPaymentType.value,
    accountbank_id: selectedBankAccount.value
  }, {
    ...headers
  })
    .then(response => {
      // console.log('Datos guardados exitosamente:', response.data);
      cancel();
      toast.success(response.data.message);

      setTimeout(() => {
        emits('guardadoExitoso', response.data);
        location.reload(true);
      }, 2500); // Tiempo de espera en milisegundos (4000 ms = 4 segundos)

    })
    .catch(error => {
      if (error.response) {
        if (error.response.status === 400) {
          cancel();
          // Si el error es un error 400 y el mensaje indica que la caja general no está abierta
          toast.error(error.response.data.message);
        } else if (error.response.status === 500) {
          cancel();

          // Si el error es un error 500, muestra un mensaje genérico de error
          toast.error(error.response.data.message);
        } else {
          // Para otros errores, simplemente muestra el error en la consola
          console.error('Error al realizar la transferencia:', error);
        }
      } else {
        // Si no hay respuesta, muestra el error en la consola
        console.error('Error al realizar la transferencia:', error);
      }
    });
};

const cancel = () => {
  store.closeModalTransfer();
};

watch(selectedPaymentType, (newValue, oldValue) => {
  console.log('Valor seleccionado:', newValue);
  
  // Condición para establecer showAmountInputs
  if (newValue === '4') {
    showAmountInputs.value = true;
  } else {
    showAmountInputs.value = false;
  }

  // Condición para activar el método y establecer showAmountInputs3
  if (['1', '2', '3'].includes(newValue)) {
    showAmountInputs3.value = true;

    if (newValue !== null) {
      // Realizar la solicitud al backend para obtener el total del dinero en la caja
      axios.post(`${import.meta.env.VITE_API_URL}/transfers-moneyboxes/calculate-totals`, {
        moneybox_id: props.id, // ID de la caja de dinero (en duro por ahora)
        paymentmethod_id: selectedPaymentType.value, // ID del método de pago seleccionado
      }, {
        ...headers
      })
        .then(response => {
          // Actualizar el valor de object.totalAcumlado con el total obtenido del backend
          object.value.totalAcumlado = response.data.total;
        })
        .catch(error => {
          console.error('Error al obtener el total del dinero en caja:', error);
        });
    }
  } else {
    showAmountInputs3.value = false;
  }
});


watch(selectedBankAccount, (newValue, oldValue) => {
  // console.log('Valor seleccionado:', newValue);
  showAmountInputs2.value = newValue !== null;

  // Llamar al método para obtener el total del dinero en caja cada vez que se active el watcher
  if (newValue !== null) {
    // Realizar la solicitud al backend para obtener el total del dinero en la caja
    axios.post(`${import.meta.env.VITE_API_URL}/transfers-moneyboxes/calculate-totals-for-account`, {
      moneybox_id: props.id, // ID de la caja de dinero (en duro por ahora)
      accountbank_id: selectedBankAccount.value, // ID del método de pago seleccionado
    }, {
      ...headers
    })
      .then(response => {
        // console.log('Total del dinero en caja:', response.data.total);
        // Actualizar el valor de object.totalAcumlado con el total obtenido del backend
        object.value.totalAcumlado = response.data.total;

        // console.log(object.value.totalAcumlado);
      })
      .catch(error => {
        console.error('Error al obtener el total del dinero en caja:', error);
      });
  }

});
const inputValue = ref('');
const inputTimeout = ref(null);

// Observa cambios en object.description y actualiza inputValue
watch(() => object.value.description, (newValue, oldValue) => {
  inputValue.value = newValue;
});

// Función para realizar el cálculo después de un breve retraso
const performCalculation = () => {
  if (!isNaN(inputValue.value) && !isNaN(object.value.totalAcumlado)) {
    const updatedTotal = parseFloat(object.value.totalAcumlado) - parseFloat(inputValue.value);
    const updatedTotalFixed = updatedTotal.toFixed(2);
    object.value.totalAcumlado = updatedTotalFixed;
  }
};

// Observa cambios en inputValue y realiza el cálculo después de un breve retraso
watch(() => inputValue.value, (newValue, oldValue) => {
  clearTimeout(inputTimeout.value);
  inputTimeout.value = setTimeout(() => {
    performCalculation();
  }, 500); // Espera 500 milisegundos después de la última entrada
});

// Función para manejar el evento input y actualizar inputValue en tiempo real
const handleInput = (event) => {
  inputValue.value = event.target.value;
};


// Método para obtener los métodos de pago desde el backend
const fetchAccountBanks = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/accountbanks/list`, { ...headers });

    console.log(response);
    bankAccounts.value = response.data.data.map(method => ({
      value: method.id,
      label: method.name
    }));
  } catch (error) {
    console.error('Error al obtener los métodos de pago:', error);
    toast.error('Error al obtener los métodos de pago');
  }
};


onMounted(() => {
  fetchAccountBanks();
});


</script>
