<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Actualizar Registro Hotel"
      sizeClass="max-w-5xl" centered>
      <form @submit.prevent="saveHotel" class="space-y-4">
        <!-- Grupo 1: Ciudad turística, Nombre del hotel, N° RUC, Razón social -->
        <div class="grid lg:grid-cols-3 gap-4">
          <FromGroup label="Ciudad turística">
            <Select :options="cityOptions" ref="citySelect" v-model="selectedCity" placeholder="Seleccione ciudad"
              class="city-select" />
            <span v-if="!selectedCity" class="ml-auto text-red-500">Este campo es obligatorio.</span>

          </FromGroup>


          <div>
            <Textinput label="Nombre del hotel" required type="text" placeholder="Nombre del hotel"
              v-model.trim="form.tradename" />
            <!-- Mostrar mensaje de error si el campo está vacío -->
            <span v-if="!form.tradename" class="ml-auto text-red-500">Este campo es obligatorio.</span>
          </div>

          <div>
            <FromGroup label="N° RUC">
              <InputGroup type="text" placeholder="RUC" v-model="form.document" @input="handleInput">
                <template v-slot:append>
                  <Button text="SUNAT" btnClass="btn-outline-dark " @click.prevent="fetchDniData" />
                </template>
              </InputGroup>
            </FromGroup>
            <span v-if="showAlert" class="ml-auto text-red-500">* Debe tener 11 dígitos</span>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-4">
          <Textinput label="Razón social" type="text" placeholder="Razón social" v-model.trim="form.fullname" />

          <Select label="Categoría" :options="categoryOptions" v-model="form.category" class="category-select">

          </Select>
        </div>
        <!-- Grupo 2: Categoría, Celular, Teléfono fijo, Correo electrónico -->
        <div class="grid lg:grid-cols-2 gap-4">


          <div>
            <Textinput label="Celular" type="text" placeholder="Celular" v-model.trim="form.cellphone" />
            <!-- Mostrar mensaje de error si el campo está vacío -->
            <span v-if="!form.cellphone" class="text-red-500">Este campo es obligatorio.</span>
          </div>
          <Textinput label="Teléfono fijo" type="text" placeholder="Teléfono fijo" v-model.trim="form.telephone" />

        </div>


        <div class="grid lg:grid-cols-2 gap-4">
          <Textinput label="Correo electrónico" type="email" placeholder="Correo electrónico"
            v-model.trim="form.email" />
          <!-- Dirección -->
          <Textinput label="Dirección" placeholder="Dirección" v-model.trim="form.address" />
        </div>

        <div class="mt-3">
          <Card bodyClass="p-0 mt-7">
            <header
              class="border-b px-4 border-slate-100 dark:border-slate-700 pt-4 pb-3 flex justify-between items-center">
              <div class="flex items-center"> <!-- Contenedor flex -->
                <h6 class="card-title mb-0">Tarifas de habitación</h6>
              </div>
              <div class="flex items-center">
                <div class="flex-grow mr-2">
                  <Select :options="bedroomOptions" placeholder="Seleccionar Tipo"  class="w-full"
                    @change="updateRoomType" />

                </div>
                <Button icon="heroicons-outline:plus" btnClass="btn-outline-dark h-[45px] w-[45px]"
                  @click.prevent="addRoom" />
              </div>
            </header>

            <div class="p-6">
              <form @submit.prevent="onSubmit" novalidate>
                <div v-if="showInputs" v-for="(field, idx) in fields" :key="field.key"
                  class="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 mb-5 last:mb-0">
                  <Textinput v-model="field.roomType" class="room-type-input" label="Habitación" type="text"
                    placeholder="Tipo de Habitación" />

                  <Textinput v-model="field.price_sale" label="Precio Normal" type="text" :name="`name[${idx}]`"
                    placeholder="S/" class="priceSaleInput" />
                  <div class="flex justify-between items-end space-x-5">
                    <Textinput v-model="field.price_corporate" label="Precio Corporativo" type="text"
                      :name="`name[${idx}]`" placeholder="S/" class="priceCorporateInput" />

                    <div class="flex-none relative">
                      <button type="button"
                        class="inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white"
                        @click="remove(idx)">
                        <Icon icon="heroicons-outline:trash" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Card>
        </div>
        <!-- Botones -->
        <div class="form-group col-lg-12 form__footerBtn">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="cancel" />
            <Button text="Guardar" btnClass="btn-dark" @cick="saveHotel" />
          </div>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script setup>
// Importa las librerías y componentes necesarios
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Card from "@/components/Card";

import FromGroup from "@/components/FromGroup";
import InputGroup from "@/components/InputGroup";
import { useForm, useFieldArray } from "vee-validate";
import Select from "@/components/Select";

import Modal from "@/components/Modal";
import VueSelect from "@/components/Select/VueSelect";

import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import { v4 as uuidv4 } from "uuid";
import { useProjectStore } from "@/store/project";
import { ref, watch } from 'vue';
import { useAuth } from "../../store/auth";
import axios from "axios";
import { useToast } from "vue-toastification";
// Declaración de variables y funciones necesarias
let store = useProjectStore();
const selectedCity = ref(null);

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

const toast = useToast();

const props = defineProps({
  activeModal: Boolean,
  hotelData: Object // Se espera que la data del empleado venga como objeto
})


const emits = defineEmits(['close', 'updateHotelList']);


const closeEditModal = () => {
  emits('close') // Emitir evento para cerrar el modal
}
// Opciones de la ciudad
const cityOptions = [
  { value: 1, label: 'TARAPOTO' },
  { value: 2, label: 'MOYOBAMBA' },
  { value: 3, label: 'SAUCE' }
];
const isFormValid = ref(true); // Asume que has definido isFormValid correctamente

const selectedCategory = ref(null);

const saveHotel = () => {
  // Captura el valor seleccionado de la ciudad
  const citySelectElement = document.querySelector('.city-select .vs__selected-options');
  if (citySelectElement) {
    const selectedCityText = citySelectElement.textContent.trim();
    const selectedCityOption = cityOptions.find(option => option.label === selectedCityText);

    if (selectedCityOption) {
      selectedCity.value = selectedCityOption.value;
      form.value.tourismcitie_id = selectedCityOption.value;
      console.log('Ciudad seleccionada - Valor:', selectedCity.value);
      console.log('Ciudad seleccionada - Etiqueta:', selectedCityOption.label);
    } else {
      console.log('No se ha seleccionado ninguna ciudad.');
    }
  } else {
    console.log('No se ha seleccionado ninguna ciudad.');
  }

  // Captura el valor seleccionado de la categoría
  const categorySelectElement = document.querySelector('.category-select .vs__selected-options');
  if (categorySelectElement) {
    const selectedCategoryText = categorySelectElement.textContent.trim();
    selectedCategory.value = selectedCategoryText; // Asigna el valor seleccionado

    form.value.category = selectedCategory.value;

    console.log('Categoría seleccionada:', form.value.category);
  } else {
    console.log('No se ha seleccionado ninguna categoría.');
  }

  form.value.hotelprices.forEach(room => {
    const priceSale = room.price_sale;
    const priceCorporate = room.price_corporate;

    // Aquí puedes hacer lo que necesites con los valores capturados
    console.log("Precio normal:", priceSale);
    console.log("Precio corporativo:", priceCorporate);

    // Por ejemplo, podrías enviar estos valores a través de una solicitud HTTP para guardarlos en el servidor
    // axios.post(`${import.meta.env.VITE_API_URL}/guardar-precios`, { price_sale, price_corporate })
    //   .then(response => {
    //     console.log('Precios guardados exitosamente:', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error al guardar los precios:', error);
    //   });
  });


  axios.post(`${import.meta.env.VITE_API_URL}/hotels/${form.value.id}/update-asing`, form.value, {
    ...headers
  })
    .then(response => {
      console.log('Hotel guardado exitosamente:', response.data);
      emits('updateHotelList'); // Emitir el evento personalizado al componente padre
      closeEditModal();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar el hotel:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
};

const cancel = () => {
  closeEditModal();
};

const fetchDniData = () => {


  axios.get(`${import.meta.env.VITE_API_URL}/apiruc/${form.value.document}`)
    .then(response => {
      console.log('Respuesta de la API RUC:', response.data);
      // Asignar nombres, apellidoPaterno y apellidoMaterno a clientFullname
      form.value.fullname = response.data.razonSocial;
      form.value.address = response.data.direccion;

    })
    .catch(error => {
      console.error('Error al obtener datos del RUC:', error);
      // Aquí puedes manejar errores, como mostrar un mensaje al usuario
    });
};

const showError = ref(true); // Variable para controlar la visibilidad del mensaje de error


const categoryOptions = [
  { value: 'Sin asignar', label: 'Sin asignar' },
  { value: '1 estrella', label: '1 estrella' },
  { value: '2 estrellas', label: '2 estrellas' },
  { value: '3 estrellas', label: '3 estrellas' },
  { value: '4 estrellas', label: '4 estrellas' },
  { value: '5 estrellas', label: '5 estrellas' }
];
const bedroomOptions = [
  { id: 1, label: 'HAB. SIMPLE' },
  { id: 2, label: 'HAB. SIMPLE (AC)' },
  { id: 3, label: 'HAB. MATRIMONIAL' },
  { id: 4, label: 'HAB. MATRIMONIAL (AC)' },
  { id: 5, label: 'HAB. DOBLE' },
  { id: 6, label: 'HAB. DOBLE (AC)' },
  { id: 7, label: 'HAB. TRIPLE' },
  { id: 8, label: 'HAB. TRIPLE (AC)' },
  { id: 9, label: 'HAB. GRUPAL' },
  { id: 10, label: 'HAB. GRUPAL (AC)' }
];


const form = ref({
  id: "",
  tourismcitie_id: null,
  document: '',
  tradename: '',
  rucNumber: '',
  fullname: '',
  category: '',
  cellphone: '',
  telephone: '',
  email: '',
  address: '',
  hotelprices: [  // Agregar el objeto hotelprices al formulario
    {
      typebedroom_id: null,
      price_sale: '',
      price_corporate: '',
      description: ''
    }
  ]
});


const fields = ref([]);
const roomType = ref('');
const showInputs = ref(false);
const roomId = ref(null);


const updateRoomType = (event) => {
  const selectedLabel = event.target.value;
  const selectedOption = bedroomOptions.find(option => option.label === selectedLabel);

  if (selectedOption) {
    roomType.value = selectedOption.label;
    roomId.value = selectedOption.id;
    console.log("Valor seleccionado:", roomType.value);
    console.log("ID seleccionado:", roomId.value);
    showInputs.value = true;
    showError.value = false; // Ocultar el mensaje de error cuando se selecciona un hotel
  } else {
    roomType.value = '';
    roomId.value = null;
    showInputs.value = false;
  }
};



const addRoom = () => {
  const newField = {
    key: fields.value.length + 1,
    roomType: roomType.value,
    typebedroom_id: roomId.value,
    price_sale: '',
    price_corporate: '',
    description: roomType.value
  };

  fields.value.push(newField); // Agregar el nuevo campo al array de fields

  // Si ya hay elementos en fields.value o si es el primer clic, actualizar form.value.hotelprices
  if (fields.value.length > 0 || form.value.hotelprices.length === 0) {
    form.value.hotelprices = fields.value;
  }

  // Mostrar los campos de entrada si hay habitaciones en el formulario
  showInputs.value = fields.value.length > 0;

  roomType.value = '';
  roomId.value = null;

  console.log('Hotel prices:', form.value.hotelprices);
};





const remove = (index) => {
  fields.value.splice(index, 1);
};
const showAlert = ref(false);

const inputValue = ref('');

// Función para manejar el evento de entrada
const handleInput = () => {
  showAlert.value = form.value.inputValue.length !== 11;
};


const { handleSubmit } = useForm({
  initialValues: {
    links: ["https://github.com/logaretm"],
  },
});


watch(() => selectedCity.value, (newValue, oldValue) => {
  // Tu lógica aquí para manejar los cambios en selectedCity


  form.value.tourismcitie_id = selectedCity.value;
  console.log(form.value.tourismcitie_id);


});


watch(() => props.hotelData, (newData) => {
  if (newData) {
    selectedCity.value = newData.tourismcitie_id;
    form.value.document = newData.document;
    form.value.tradename = newData.tradename;
    form.value.rucNumber = newData.rucNumber;
    form.value.fullname = newData.fullname;
    form.value.category = newData.category;
    form.value.cellphone = newData.cellphone;
    form.value.telephone = newData.telephone;
    form.value.email = newData.email;
    form.value.address = newData.address;


    form.value.id = newData.id;


    // Establecer los datos de hotel_prices
    if (newData.hotel_prices && newData.hotel_prices.length > 0) {
      const hotelPrices = newData.hotel_prices.map(price => ({
        typebedroom_id: price.typebedroom_id,
        price_sale: price.price_sale,
        price_corporate: price.price_corporate,
        description: bedroomOptions.find(option => option.id === price.typebedroom_id).label // Aquí se obtiene el label correspondiente al typebedroom_id
      }));
      form.value.hotelprices = hotelPrices;

      // Establecer los datos en los campos de repetición
      fields.value = hotelPrices.map((price, index) => ({
        key: index + 1,
        roomType: price.description,
        typebedroom_id: price.typebedroom_id,
        price_sale: price.price_sale,
        price_corporate: price.price_corporate,
        description: price.description
      }));
      
      // Actualizar showInputs.value basado en si hay habitaciones en el formulario
      showInputs.value = true;
    } else {
      showInputs.value = false;
    }

    console.log(form.value.id);
  }
});







</script>

<style lang=""></style>
