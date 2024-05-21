<template>
  <Modal :activeModal="store.addmodal" @close="store.closeModal" title="Registrar nuevo Colaborador"
    sizeClass="max-w-5xl" centered>
    <form @submit.prevent="addProject" class="space-y-4 col-span-3">

      <!-- Primera fila -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <FromGroup label="N° Documento">
            <InputGroup type="text" placeholder="DNI" v-model="formData.document">
              <template v-slot:append>
                <Button text="RENIEC" btnClass="btn-outline-dark " @click.prevent="fetchDniData" />
              </template>
            </InputGroup>
            <span v-if="!isValidField('document')" class="text-red-500">Por favor ingresa un número válido</span>

          </FromGroup>
        </div>

        <div>
          <FromGroup label="Nombres completos">
            <Textinput type="text" v-model.trim="formData.fullname" placeholder="Ingresar nombre completo" />
            <span v-if="!isValidField('fullname')" class="text-red-500">Por favor ingresa un nombre válido</span>

          </FromGroup>
        </div>
      </div>

      <!-- Segunda fila -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <FromGroup>
            <Select :options="partnercompanies" label="Empresa socia" v-model="parterCompanySelected"
              class="partercompany-select" placeholder="Seleccione Empresa" />
          </FromGroup>
        </div>

        <div>
          <FromGroup>
            <Select :options="vehicletypes" label="Tipo vehículo" v-model="typeVeiSelected" class="typevehiculo-select"
              placeholder="Seleccione Vehículo" />
          </FromGroup>
        </div>
      </div>

      <!-- Tercera fila -->
      <div class="grid lg:grid-cols-3 gap-4">
        <div>
          <FromGroup label="Celular">
            <Textinput type="text" v-model.trim="formData.cellphone" placeholder="Ingrese número de celular" />
            <span v-if="!isValidField('cellphone')" class="text-red-500">Por favor ingrese número valido</span>
          </FromGroup>
        </div>
        <div>
          <FromGroup label="Dirección">
            <Textinput type="text" placeholder="Ingrese dirección" name="client_direccion"
              v-model.trim="formData.address" />
          </FromGroup>
        </div>
        <div>
          <FromGroup label="Correo electrónico">
            <Textinput type="email" placeholder="Ingrese el correo electrónico" name="client_email"
              v-model.trim="formData.email" />
          </FromGroup>
        </div>
      </div>

      <!-- Cuarta fila -->
      <div class="grid lg:grid-cols-3 gap-4">
        <div>
          <FromGroup label="Fecha de nacimiento">
            <flat-pickr v-model="formData.date_birthday" class="form-control" id="date_birthday"
              placeholder="yyyy, dd M" :config="{
    altInput: true,
    altFormat: 'F j, Y',
    dateFormat: 'Y-m-d',
  }" />
          </FromGroup>
        </div>
        <div>
          <FromGroup>
            <Select :options="status" label="Estado" v-model="statusSelected" class="state-select"
              placeholder="Seleccione" />
          </FromGroup>
        </div>
        <div>
          <FromGroup>
            <Select :options="sexs" label="Sexo" v-model="sexSelected" class="sexo-select" placeholder="Seleccione" />
          </FromGroup>
        </div>
      </div>

      <!-- Botones -->
      <div class="form-group col-lg-12 form__footerBtn ">
        <div class="text-right mt-6">
          <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="cancel" />
          <Button type="submit" text="Guardar Cambios" btnClass="btn-dark" @click="saveCollaborator" />
          <!-- Botón Submit -->
        </div>
      </div>
    </form>
  </Modal>
</template>

<script setup>
import Button from "@/components/Button";
import InputGroup from "@/components/InputGroup";
import FromGroup from "@/components/FromGroup";
import Modal from "@/components/Modal";
import Textinput from "@/components/Textinput";
import { ref, watch, onMounted } from 'vue';
import { useProjectStore } from "../../../store/project";
import Select from '@/components/Select';
import axios from "axios";
import { useToast } from "vue-toastification";
import { useAuth } from "../../../store/auth";

const store = useProjectStore();
const toast = useToast();
const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

// Definir formData para cada campo del formulario
const formData = ref({
  partnercompany_id: '',
  vehicletype_id: '',
  fullname: '',
  document: '',
  cellphone: '',
  email: '',
  address: '',
  date_birthday: '',
  sex: '',
  status: '',
  partnercompany: '',
  vehicletype: '',
});


const statusSelected = ref(null);
const sexSelected = ref(null);
const parterCompanySelected = ref(null);
const typeVeiSelected = ref(null);


// Definir las opciones para Estado y Sexo
const status = [
  { label: "Seleccione" },
  { label: "Soltero" },
  { label: "Casado" },
  { label: "Otros" },
];

const sexs = [
  { label: "Seleccione" },
  { label: "Masculino" },
  { label: "Femenino" },
  { label: "Otros" },
];

// Mock data para vehicletypes
const vehicletypes = [
  { label: "Mototaxi", value: "Mototaxi" },
  { label: "Auto", value: "Auto" },
  { label: "H350", value: "H350" },
  { label: "Techo Alto", value: "Techo Alto" },
];

const cancel = () => {
  store.closeModal(); // Cierra el modal al hacer clic en el botón "Cancelar"
};

// Método para validar un campo específico
const validateField = (fieldName) => {
  return !!formData.value[fieldName];
};

// Método para verificar si un campo específico es válido
const isValidField = (fieldName) => {
  return validateField(fieldName);
};


const saveCollaborator = () => {
  // Realiza la solicitud POST utilizando axios, pasando directamente object.value
  axios.post(`${import.meta.env.VITE_API_URL}/collaborators/create`, formData.value, {
    ...headers
  })
    .then(response => {
      console.log('Datos guardados exitosamente:', response.data);
      cancel();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
};

// Mock data para partnercompanies
const partnercompanies = ref([]);



// Método para realizar la solicitud GET
const fetchDniData = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/getDniData`, {
      dni: formData.value.document
    })
    .then(response => {
      // Asignar nombres, apellidoPaterno y apellidoMaterno a clientFullname
      formData.value.fullname = response.data.data.nombre_completo;
    })
    .catch(error => {
      console.error('Error al obtener datos del DNI:', error);
      // Aquí puedes manejar errores, como mostrar un mensaje al usuario
    });
};

// Método para realizar la solicitud GET
const fetchAgencies = () => {
  // Realizar la solicitud HTTP usando axios
  axios.get(`${import.meta.env.VITE_API_URL}/agencies/list`, headers)
    .then(response => {
      // Obtener los datos del response
      const agencies = response.data.data;

      // Mapear los datos de las agencias al formato necesario para partnercompanies
      const mappedAgencies = agencies.map(agency => ({
        label: agency.tradename,
        value: agency.id
      }));

      // Asignar los datos mapeados a partnercompanies
      partnercompanies.value = mappedAgencies;

      console.log( partnercompanies.value);
    })
    .catch(error => {
      console.error('Error al obtener las agencias:', error);
    });
};






watch(() => statusSelected.value, (newValue, oldValue) => {

  const selectElement = document.querySelector('.state-select select');

  if (selectElement) {
    const selectedIndex = selectElement.selectedIndex;

    const selectedLabel = selectElement.options[selectedIndex].text;

    formData.value.status = selectedLabel;

    console.log('Label seleccionado:', formData.value.status);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }

});

watch(() => sexSelected.value, (newValue, oldValue) => {

  const selectElement = document.querySelector('.sexo-select select');

  if (selectElement) {
    const selectedIndex = selectElement.selectedIndex;

    const selectedLabel = selectElement.options[selectedIndex].text;

    formData.value.sex = selectedLabel;

    console.log('Label seleccionado:', formData.value.sex);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }

});


watch(() => parterCompanySelected.value, (newValue, oldValue) => {
  const selectElement = document.querySelector('.partercompany-select select');

  if (selectElement) {
    const selectedIndex = selectElement.selectedIndex;

    const selectedLabel = selectElement.options[selectedIndex].text;

    formData.value.partnercompany_id = selectedIndex;
    formData.value.partnercompany = selectedLabel;


    console.log('Label seleccionado:', formData.value.partnercompany_id, formData.value.partnercompany);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }

});


watch(() => typeVeiSelected.value, (newValue, oldValue) => {
  const selectElement = document.querySelector('.typevehiculo-select select');

  if (selectElement) {
    const selectedIndex = selectElement.selectedIndex;

    const selectedLabel = selectElement.options[selectedIndex].text;

    formData.value.vehicletype_id = selectedIndex;
    formData.value.vehicletype = selectedLabel;

    console.log('Label seleccionado:', formData.value.vehicletype_id, formData.value.vehicletype);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }

});



onMounted(() => {
  fetchAgencies();
});
</script>

<style></style>
