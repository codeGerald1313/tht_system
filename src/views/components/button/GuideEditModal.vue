<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Actualizar Registro de Guía"
      sizeClass="max-w-3xl" centered>
      <form @submit.prevent="addProject" name="object_form" id="object_form" autocomplete="off" class="space-y-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <FromGroup label="N° Documento">
              <InputGroup type="text" placeholder="DNI" v-model="client.document" @input="handleInput">
                <template v-slot:append>
                  <Button text="RENIEC" btnClass="btn-outline-dark " @click.prevent="fetchDniData" />
                </template>
              </InputGroup>
              <span v-if="!isValidField('document')" class="text-red-500">Por favor ingresa un número válido</span>

            </FromGroup>
            <span v-if="showAlert" class="ml-auto text-red-500">* Debe tener 8 dígitos</span>
          </div>

          <FromGroup label="Nombres completos">
            <Textinput v-model.trim="client.fullname" type="text" placeholder="Ingrese los nombres completos" />
            <span v-if="!isValidField('fullname')" class="text-red-500">Por favor ingresa un nombre válido</span>

          </FromGroup>

          <FromGroup label="Celular">
            <Textinput v-model.trim="client.cellphone" type="text" placeholder="Ingrese el número de celular" />
            <span v-if="!isValidField('cellphone')" class="text-red-500">Por favor ingresa un número celular válido</span>
          </FromGroup>

          <FromGroup label="Teléfono fijo">
            <Textinput v-model.trim="client.telephone" type="text" placeholder="Ingrese el número de teléfono fijo" />
          </FromGroup>

          <FromGroup label="Correo electrónico">
            <Textinput v-model.trim="client.email" type="email" placeholder="Ingrese el correo electrónico" />
          </FromGroup>

          <FromGroup label="Fecha de nacimiento">
            <Textinput v-model.trim="client.date_birthday" type="date" placeholder="yyyy-mm-dd" />
          </FromGroup>

          <FromGroup label="Estado">
            <Select :options="status" v-model="statusSelected" placeholder="Seleccionar Estado" class="state-select" />
          </FromGroup>

          <FromGroup label="Sexo">
            <Select :options="sexs" v-model="sexSelected" placeholder="Seleccionar Sexo" class="sexo-select" />
          </FromGroup>


        </div>
        <FromGroup label="Dirección">
          <Textarea v-model.trim="client.address" placeholder="Ingrese la dirección" />
        </FromGroup>
        <!-- Botones -->
        <div class="form-group col-lg-12 form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click="closeEditModal" />
            <Button text="Guardar" btnClass="btn-dark" @click.prevent="save" />
          </div>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script setup>
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import Modal from "@/components/Modal";
import InputGroup from "@/components/InputGroup";

import VueSelect from "@/components/Select/VueSelect";
import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import { computed, ref, watch } from "vue";
import { useProjectStore } from "@/store/project";
import Select from '@/components/Select';
import axios from "axios";
import { useAuth } from "../../../store/auth";
import { useToast } from "vue-toastification";

let store = useProjectStore();
const toast = useToast();

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

const clientDocumentError = ref(false);
const clientFullnameError = ref(false);
const clientCellphoneError = ref(false);
// Agrega aquí más refs para los errores de los campos necesarios

// Variable para controlar la visualización de la alerta
const showAlert = ref(false);

const handleInput = () => {
  showAlert.value = client.value.document.length !== 8;
};


const props = defineProps({
  activeModal: Boolean,
  guideData: Object // Se espera que la data del empleado venga como objeto
})

const emits = defineEmits(['close', 'updateGuideList']);

const closeEditModal = () => {
  emits('close') // Emitir evento para cerrar el modal
}


const client = ref({
  id: '',
  document: "",
  inputValue: '',
  fullname: "",
  cellphone: "",
  telephone: "",
  email: "",
  date_birthday: "",
  address: "",
  sex: '',
  status: ''
});

const status = [
  { value: "Seleccione", label: "Seleccione" },
  { value: "Soltero", label: "Soltero" },
  { value: "Casado", label: "Casado" },
  { value: "Otros", label: "Otros" },
];

const sexs = [
  { value: "Seleccione", label: "Seleccione" },
  { value: "Masculino", label: "Masculino" },
  { value: "Femenino", label: "Femenino" },
  { value: "Otros", label: "Otros" },
];

const statusSelected = ref(null);
const sexSelected = ref(null);

const extractDni = () => {
  // Lógica para extraer el DNI
};

const close = () => {
  store.closeModal();
};

// Método para validar un campo específico
const validateField = (fieldName) => {
  return !!client.value[fieldName];
};

// Método para verificar si un campo específico es válido
const isValidField = (fieldName) => {
  return validateField(fieldName);
};



const save = () => {

  // Encuentra el elemento del select en el DOM
  const selectElement = document.querySelector('.sexo-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement.options[selectedIndex].text;

    client.value.sex = selectedLabel;


    // Imprime el label seleccionado
    // console.log('Label seleccionado:', selectedIndex, selectedLabel);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }

  // Encuentra el elemento del select en el DOM
  const selectElement2 = document.querySelector('.state-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement2.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement2.options[selectedIndex].text;

    client.value.status = selectedLabel;

    // Imprime el label seleccionado
    // console.log('Label seleccionado:', selectedIndex, selectedLabel);
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }



  // Realiza la solicitud POST utilizando axios, pasando directamente object.value
  axios.post(`${import.meta.env.VITE_API_URL}/guides/edit/${client.value.id}`, client.value, {
    ...headers
  })
    .then(response => {
      // console.log('Datos guardados exitosamente:', response.data);
      emits('updateGuideList'); // Emitir el evento personalizado al componente padre
      closeEditModal();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
};

const isFormValid = computed(() => {
  // Lógica para verificar si el formulario es válido
});

// Método para realizar la solicitud GET

const fetchDniData = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/getDniData`, {
      dni: client.value.document
    })
    .then(response => {
      // console.log('Respuesta de la API DNI:', response.data.nombre_completo);
      // Asignar nombres, apellidoPaterno y apellidoMaterno a clientFullname
      client.value.fullname = response.data.data.nombre_completo;
    })
    .catch(error => {
      console.error('Error al obtener datos del DNI:', error);
      // Aquí puedes manejar errores, como mostrar un mensaje al usuario
    });
};


watch(() => props.guideData, (newData) => {
  if (newData) {
    client.value.id = newData.id;
    statusSelected.value = newData.status;
    sexSelected.value = newData.sex;
    client.value.fullname = newData.fullname;
    client.value.document = newData.document;
    client.value.email = newData.email;
    client.value.cellphone = newData.cellphone;
    client.value.telephone = newData.telephone;
    client.value.date_birthday = newData.date_birthday;
    client.value.address = newData.address;

    // console.log(client.value.id)
  }
});



</script>

<style lang="scss" scoped>
// Agrega estilos personalizados si es necesario</style>