<template>
  <div>
    <Modal :activeModal="store.addmodal" @close="store.closeModal" title="Registrar nuevo empleado"
      sizeClass="max-w-4xl" centered>
      <div class="grid lg:grid-cols-3 gap-4">
        <!-- Formulario -->
        <form @submit.prevent="saveEmployee" class="space-y-4 col-span-3">
          <div class="grid lg:grid-cols-3 gap-4">


            <div class="flex items-center">
              <FromGroup label="Puesto de trabajo" class="flex-1">
                <VueSelect :options="jobOptions" v-model="formData.jobSelected" class="w-full job-select" />

              </FromGroup>

              <button @click.prevent="openModal" class="ml-2 mt-7 p-2 btn-outline-dark ">+</button>
            </div>

            <FromGroup label="Tipo documento" >
              <Select :options="typeDocumentOptions" v-model="selected" disabled class="type-document-select" />
              <span id="type-document-error" class="text-red-500" style="display: none">Debe seleccionar un tipo de
                documento</span>
            </FromGroup>
            <div>
              <FromGroup label="N° Documento">
                <InputGroup type="text" placeholder="DNI" v-model="formData.inputValue" @input="handleInput">
                  <template v-slot:append>
                    <Button text="RENIEC" btnClass="btn-outline-dark" @click.prevent="fetchDniData" />
                  </template>
                </InputGroup>
              </FromGroup>
              <span v-if="showAlert" class="ml-auto text-red-500">* Debe tener 8 dígitos</span>
              <span id="input-value-error" class="text-red-500" style="display: none">El número de documento es
                requerido</span>
            </div>

          </div>
          <Card v-if="showForm" title="Nuevo Registro" class="bg-slate-800" titleClass="text-white" noborder>
            <div class="space-y-4">
              <InputGroup label="Descripcion" name="hi_Fullname" type="text" placeholder="Puesto de Trabajo" horizontal
                prependIcon="heroicons-outline:user" merged v-model="jobDescription" />

              <!-- Botones -->
              <div class="flex justify-end space-x-2">
                <Button text="Cancelar" btnClass="btn-light mr-2" @click="cancel2" />
                <Button text="Guardar" btnClass="btn-dark" @click.prevent="saveJob" />
                <!-- Asociar el método saveJob al evento click -->
              </div>
            </div>
          </Card>


          <!-- Nombre del empleado -->
          <FromGroup label="Nombre del empleado">
            <TextInput v-model="formData.clientFullname" placeholder="Ingrese nombre del empleado"
              @input="handleInput" />
            <span id="client-fullname-error" class="text-red-500" style="display: none">El nombre del empleado es
              requerido</span>
          </FromGroup>

          <!-- Dirección -->
          <FromGroup label="Dirección">
            <Textarea v-model="formData.clientAddress" placeholder="Ingrese direción" />
          </FromGroup>

          <div class="grid lg:grid-cols-3 gap-4 grid-cols-1">
            <!-- Celular -->
            <FromGroup label="Celular">
              <TextInput v-model="formData.clientCellphone" placeholder="Ingrese celular" />
            </FromGroup>
            <!-- Teléfono fijo -->
            <FromGroup label="Teléfono fijo">
              <TextInput v-model="formData.clientTelephone" placeholder="Ingrese telefóno fijo" />
            </FromGroup>
            <!-- Correo electrónico -->
            <FromGroup label="Correo electrónico">
              <TextInput v-model="formData.clientEmail" placeholder="Ingrese correo electrónico" />
            </FromGroup>
            <!-- Fecha de nacimiento -->
            <FromGroup label="Fecha de nacimiento">
              <flat-pickr v-model="formData.dateBirthday" class="form-control" id="date_birthday"
                placeholder="yyyy, dd M" :config="{
      altInput: true,
      altFormat: 'F j, Y',
      dateFormat: 'Y-m-d',
    }" />
            </FromGroup>
            <!-- Estado -->
            <FromGroup label="Estado">
              <VueSelect :options="statusOptions" v-model="formData.statusSelected" class="estado-select" />
            </FromGroup>
            <!-- Sexo -->
            <FromGroup label="Sexo">
              <VueSelect :options="sexOptions" v-model="formData.sexSelected" class="sexo-select" />
            </FromGroup>
          </div>
        </form>

      </div>

      <!-- Asignar sucursal 
      <div class="col-lg-12 mt-6 mr-4">
        <div class="row">
          <div class="col-lg-4" v-for="(item, index) in branchoffices" :key="index">
            <div class="custom-control custom-checkbox m-t-5">
              <Card bodyClass="p-0" noborder>
                <header class="border-b px-4 pt-4 pb-3 flex items-center border-info-500">
                  <span class="text-3xl inline-block ltr:mr-2 rtl:ml-2 text-info-500">
                    <Icon icon="heroicons-outline:information-circle" />
                  </span>
                  <h6 class="card-title mb-0 text-info-500">Asignar Empleado</h6>
                </header>
                <div class="py-3 px-5">
                  <div class="flex space-x-rb flex-wrap">
                    <Checkbox label="Oficina Principal" activeClass="ring-info-500 bg-info-500" checked />
                  </div>
                </div>
              </Card>



            </div>
          </div>
        </div>
      </div>
-->

      <!-- Botones -->
      <div class="form-group col-lg-12 form__footerBtn mt-4">
        <div class="text-right">
          <Button text="Cancelar" btnClass="btn-light mr-2" @click="cancel" />
          <Button type="submit" text="Guardar Cambios" btnClass="btn-dark" @click="saveEmployee" />
          <!-- Botón Submit -->
        </div>
      </div>
    </Modal>

  </div>
</template>

<script setup>
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import InputGroup from "@/components/InputGroup";
import Card from "@/components/Card";
import Icon from "@/components/Icon";

import Checkbox from "@/components/Checkbox";

import Modal from "@/components/Modal";
import VueSelect from "@/components/Select/VueSelect";
import Textarea from "@/components/Textarea";
import TextInput from "@/components/Textinput";
import { ref, onMounted, watch } from 'vue';
import { useProjectStore } from "@/store/project";
import { v4 as uuidv4 } from "uuid";
import DropZone from "../../forms/file-input/DropZoneEmpleado.vue";
import { useAuth } from "../../../store/auth";


import { useToast } from 'vue-toastification';
import axios from "axios";
import Select from '@/components/Select';


const selectedSexLabel = ref('');
const selectedStatusLabel = ref('');


const emits = defineEmits(['createEmployeeList']);

let store = useProjectStore();

const jobOptions = ref([]);

// Método para realizar la solicitud GET
const fetchDniData = () => {
  if (formData.value.inputValue.length !== 8) {
    showAlert.value = true;
    return;
  }

  axios.post(`${import.meta.env.VITE_API_URL}/getDniData`, {
      dni: formData.value.inputValue
    })
    .then(response => {
      // console.log('Respuesta de la API DNI:', response.data.nombre_completo);
      // Asignar nombres, apellidoPaterno y apellidoMaterno a clientFullname
      formData.clientFullname = response.data.data.nombre_completo;
    })
    .catch(error => {
      console.error('Error al obtener datos del DNI:', error);
      // Aquí puedes manejar errores, como mostrar un mensaje al usuario
    });
};




const fetchJobs = () => {
  axios.get(`${import.meta.env.VITE_API_URL}/jobs/list`, headers)
    .then(response => {
      // Extrayendo los datos de la respuesta
      const responseData = response.data.data;

      // Adaptando la estructura de los datos al formato de jobOptions
      jobOptions.value = responseData.map(item => ({
        id: item.id,
        label: item.description
      }));
    })
    .catch(error => {
      console.error('Error al obtener la lista de trabajos:', error);
    });
};



const cancel = () => {
  store.closeModal(); // Cierra el modal al hacer clic en el botón "Cancelar"
};


// Variable para controlar la visualización de la alerta
const showAlert = ref(false);


const jobDescription = ref('');

const headers = useAuth().headersMultipart(); // Obtiene los encabezados de autenticación

const toast = useToast();


const typeDocumentOptions = [
  { id: 1, label: "DNI" },
  { id: 2, label: "RUC" },
  // Agrega más opciones según sea necesario
];


const selected = ref("DNI"); // Inicializar con el valor "DNI"


const formData = ref({
  jobSelected: '',
  typeDocumentSelected: '',
  inputValue: '',
  description: '',
  clientFullname: '',
  clientAddress: '',
  clientCellphone: '',
  clientTelephone: '',
  clientEmail: '',
  dateBirthday: '',
  statusSelected: '',
  sexSelected: ''
});


formData.value.typeDocumentSelected = selected;


const selectedJob = ref(null);
const selectTipoDocumento = ref(null);
const selectSexo = ref(null);
const selectEstado = ref(null);


const saveEmployee = () => {



  const formDataToSend = new FormData();

  // Función para obtener y procesar la opción seleccionada de un VueSelect
  const processSelectedOption = (selectElement, options, selectedValueRef, formDataField) => {
    if (selectElement) {
      const selectedText = selectElement.textContent.trim();
      const selectedOption = options.find(option => option.label === selectedText);

      if (selectedOption) {
        selectedValueRef.value = selectedOption.id;
        // Asignar el valor directamente al objeto formData
        if (formDataField === 'sexSelected') {
          selectedSexLabel.value = selectedOption.label;
        } else if (formDataField === 'statusSelected') {
          selectedStatusLabel.value = selectedOption.label;
        }
        // Mostrar el valor seleccionado en la consola
        // console.log(`Valor seleccionado para ${formDataField}:`, selectedOption);

        // Agregar el valor al objeto formDataToSend
        formDataToSend.append(formDataField, selectedOption.id);
      } else {
        // console.log(`No se ha seleccionado ningún ${formDataField.toLowerCase()}.`);
      }
    } else {
      // console.log(`No se ha encontrado ningún elemento para el ${formDataField.toLowerCase()}.`);
    }
  };

  // Procesar la opción seleccionada para el puesto de trabajo
  const selectElementJob = document.querySelector('.job-select .vs__selected-options');
  processSelectedOption(selectElementJob, jobOptions.value, selectedJob, 'jobSelected');


  // Procesar la opción seleccionada para el puesto de trabajo
  const selectElemenSexo = document.querySelector('.sexo-select .vs__selected-options');
  processSelectedOption(selectElemenSexo, sexOptions, selectSexo, 'sexSelected');

  // Procesar la opción seleccionada para el tipo de documento
  const selectElementEstado = document.querySelector('.estado-select .vs__selected-options');
  processSelectedOption(selectElementEstado, statusOptions, selectEstado, 'statusSelected');

  const selectedTypeDocumentOption = typeDocumentOptions.find(option => option.label === selected.value);

// Verificar si se encontró la opción seleccionada y asignar su ID a formData.value.typeDocumentSelected
if (selectedTypeDocumentOption) {
  formData.value.typeDocumentSelected = selectedTypeDocumentOption.id;
}



  // Asignar valores seleccionados a formData
  formData.value.jobSelected = selectedJob.value;
  // formData.value.typeDocumentSelected = selectTipoDocumento.value;
  formData.value.sexSelected = selectedSexLabel.value;
  formData.value.statusSelected = selectedStatusLabel.value;


  // console.log(formData.value.typeDocumentSelected);


  let validationFailed = false;

  if (!formData.value.inputValue) {
    document.getElementById('input-value-error').style.display = 'block';
    validationFailed = true;
  } else {
    document.getElementById('input-value-error').style.display = 'none';
  }
  if (!formData.value.clientFullname) {
    document.getElementById('client-fullname-error').style.display = 'block';
    validationFailed = true;
  } else {
    document.getElementById('client-fullname-error').style.display = 'none';
  }

  // Si la validación falla, no continúes con el guardado
  if (validationFailed) {
    return;
  }



  // console.log(formData.value.typeDocumentSelected);

  // Agregar otros datos del formulario al objeto FormData
  formDataToSend.append('companyjob_id', formData.value.jobSelected);
  formDataToSend.append('typedocument_id', formData.value.typeDocumentSelected);
  formDataToSend.append('fullname', formData.value.clientFullname);
  formDataToSend.append('document', formData.value.inputValue);
  formDataToSend.append('address', formData.value.clientAddress);
  formDataToSend.append('email', formData.value.clientEmail);
  formDataToSend.append('telephone', formData.value.clientTelephone);
  formDataToSend.append('cellphone', formData.value.clientCellphone);
  formDataToSend.append('date_birthday', formData.value.dateBirthday);
  formDataToSend.append('sex', formData.value.sexSelected);
  formDataToSend.append('status', formData.value.statusSelected);


  // Continuar con el envío del formulario...
  axios.post(`${import.meta.env.VITE_API_URL}/employees/create`, formDataToSend, {
    ...headers
  })
    .then(response => {
      // console.log('Success:', response.data);
      emits('createEmployeeList'); // Emitir el evento personalizado al componente padre
      cancel();
      toast.success(response.data.message); // Mostrar el mensaje de la respuesta del servidor en el toast
      // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
    })
    .catch(error => {
      console.error('Error:', error);
      // Aquí puedes manejar errores, por ejemplo, mostrar un mensaje de error al usuario
    });


};




const saveJob = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/jobs/create`, { description: jobDescription.value }, {
    ...headers
  })
    .then(response => {
      // console.log('Success:', response.data);
      toast.success(response.data.message);

      // Después de guardar el trabajo exitosamente, actualizar la lista de trabajos
      fetchJobs();
    })
    .catch(error => {
      console.error('Error:', error);
      toast.error('Error al crear el trabajo.');
    });
};


const handleInput = () => {

  if (formData.value.inputValue) {
    document.getElementById('input-value-error').style.display = 'none';
  }
  if (formData.value.clientFullname) {
    document.getElementById('client-fullname-error').style.display = 'none';
  }
};


const cancel2 = () => {
  showForm.value = false; // Cuando se hace clic en el botón "Cancelar", se oculta el formulario
};


const statusOptions = [
  { id: 1, label: "Seleccione" },
  { id: 2, label: "Soltero" },
  { id: 3, label: "Casado" },
  // Agrega más opciones según sea necesario
];


const showForm = ref(false); // Estado para controlar si se muestra el formulario o no

const openModal = () => {
  showForm.value = true; // Cuando se hace clic en el botón, se muestra el formulario
};

const sexOptions = [
  { id: 1, label: "Seleccione" },
  { id: 2, label: "Masculino" },
  { id: 3, label: "Femenino" },
  // Agrega más opciones según sea necesario
];

const branchoffices = [
  { id: 1, name: "Oficina Principal" },
  // Agrega más sucursales según sea necesario
];




onMounted(() => {
  fetchJobs();
  // console.log(formData.value.typeDocumentSelected);
});




watch(selected, (newValue, oldValue) => {
  // Realizar la lógica necesaria para actualizar la interfaz aquí
  // console.log('selected changed:', newValue);
});

</script>

<style lang="scss">
// Agrega estilos adicionales según sea necesario

.card-auto-height3 {
  .card {
    @apply h-min;
  }
}
</style>
