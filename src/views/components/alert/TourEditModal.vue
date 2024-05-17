<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Actualizar Registro de Tours" centered>
      <form @submit.prevent="addProject" class="space-y-4">
        <Textinput label="Nombre tours" type="text" placeholder="Nombre" v-model.trim="object.description" />
        <span v-if="!isValidField('description')" class="text-red-500">Por favor ingresa un nombre válido</span>

        <div class="grid lg:grid-cols-2 gap-4">
          <FromGroup>
            <Select :options="shiftTourOptions" v-model="shiftTourSelected" label="Turno" class="shift-select"
              placeholder="Seleccione Turno" />
          </FromGroup>

          <FromGroup>
            <Select :options="cityOptions" ref="citySelect" v-model="selectedCity" label="Ciudad Turística"
              placeholder="Seleccione ciudad" class="city-select" />
          </FromGroup>
        </div>

        <div class="grid lg:grid-cols-2 gap-4">
          <FromGroup label="Precio público">
            <div class="input-group">
              <div class="input-group-prepend flex justify-center items-center">
                <Button icon="heroicons-outline:currency-dollar"
                  btnClass="btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm pointer-events-none"
                  iconClass="text-lg" disabled />
              </div>
              <Textinput v-model.trim="object.price_public" type="number"  />
            </div>
            <span v-if="!isValidField('price_public')" class="text-red-500">Por favor ingresa un precio público
            válido</span>
          </FromGroup>
     

          <FromGroup label="Precio corporativo">
            <div class="input-group">
              <div class="input-group-prepend flex justify-center items-center">
                <Button icon="heroicons-outline:currency-dollar"
                  btnClass="btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm pointer-events-none"
                  iconClass="text-lg" disabled />
              </div>
              <Textinput v-model.trim="object.price_corporate" type="number" 
                @input="validateField('price_corporate')" />
            </div>

            <span v-if="!isValidField('price_corporate')" class="text-red-500">Por favor ingresa un precio corporativo
            válido</span>
          </FromGroup>
        
        </div>

        <Textarea label="Descripción" placeholder="Project description" v-model.trim="object.comment" />

        <!-- Botones -->
        <div class="form-group col-lg-12 form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModal" />
            <Button text="Guardar" btnClass="btn-dark" @click="save" />
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
import VueSelect from "@/components/Select/VueSelect";
import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import Icon from "@/components/Icon";

import { useProjectStore } from "@/store/project";
import { ref, watch } from "vue";
import Select from '@/components/Select';
import { selectCategory } from "../../../constant/data";
import { useAuth } from "../../../store/auth";
import axios from "axios";
import { useToast } from "vue-toastification";

let store = useProjectStore();
const toast = useToast();

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación


const props = defineProps({
  activeModal: Boolean,
  tourData: Object // Se espera que la data del empleado venga como objeto
})


const emits = defineEmits(['close', 'updateToursList']);


const closeEditModal = () => {
  emits('close') // Emitir evento para cerrar el modal
}



// Define un objeto para almacenar los datos del formulario
const object = ref({
  id: '',
  tourismcitie_id: '',
  shift: '',
  name: '',
  comment: '',
  description: '',
  price_public: '0.00', // Inicializa con 0.00
  price_corporate: '0.00', // Inicializa con 0.00
  shiftour: ''
});

// Define las opciones para los VueSelect
const shiftTourOptions = [
  { value: 1, label: 'Full Day' },
  { value: 2, label: 'Mañana' },
  { value: 3, label: 'Tarde' },
  { value: 4, label: 'Noche' }
];

const cityOptions = [
  { value: 1, label: 'TARAPOTO' },
  { value: 2, label: 'MOYOBAMBA' },
  { value: 3, label: 'SAUCE' }
];

// Método para validar un campo específico
const validateField = (fieldName) => {
  return !!object.value[fieldName];
};

// Método para verificar si un campo específico es válido
const isValidField = (fieldName) => {
  return validateField(fieldName);
};



// Define las variables para almacenar las selecciones de los VueSelect
const shiftTourSelected = ref(null);
const selectedCity = ref(null);

const save = () => {

  const selectElement = document.querySelector('.shift-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement.options[selectedIndex].text;

    object.value.shift = selectedIndex;
    object.value.shiftour = selectedLabel;

    // Imprime el label seleccionado
    console.log('Label seleccionado:', object.value.shift, object.value.shiftour);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }


  // Encuentra el elemento del select en el DOM
  const selectElement2 = document.querySelector('.city-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement2.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement2.options[selectedIndex].text;

    object.value.tourismcitie_id = selectedIndex;

    // Imprime el label seleccionado
    console.log('Label seleccionado:', object.value.tourismcitie_id);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }





  // Realiza la solicitud POST utilizando axios, pasando directamente object.value
  axios.post(`${import.meta.env.VITE_API_URL}/tours/edit/${object.value.id}`, object.value, {
    ...headers
  })
    .then(response => {
      console.log('Datos guardados exitosamente:', response.data);
      emits('updateToursList'); // Emitir el evento personalizado al componente padre
      closeEditModal();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
};


// Método para cancelar y cerrar el modal
const cancel = () => {
  store.closeEditModal(); // Cierra el modal al hacer clic en el botón "Cancelar"
};


watch(() => selectedCity.value, (newValue, oldValue) => {
  // Tu lógica aquí para manejar los cambios en selectedCity


});





watch(() => props.tourData, (newData) => {

  console.log(newData.description);
  if (newData) {
    object.value.id = newData.id;
    selectedCity.value = newData.tourismcitie_id;
    shiftTourSelected.value = newData.shift;
    object.value.name = newData.name;
    object.value.description = newData.description;
    object.value.price_public = newData.price_public;
    object.value.price_corporate = newData.price_corporate;
    object.value.comment = newData.comment;

    console.log(object.value.id)
  }
});


watch(() => shiftTourSelected.value, (newValue, oldValue) => {
  // Tu lógica aquí para manejar los cambios en selectedCity

  // Encuentra el elemento del select en el DOM


});
</script>

<style lang=""></style>
