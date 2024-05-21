<template>
  <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Actualizar Registro de Colaborador"
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
          <Button text="Cancelar" btnClass="btn-light mr-2" @click="closeEditModal" />
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

const props = defineProps({
  activeModal: Boolean,
  colaboradorData: Object // Se espera que la data del empleado venga como objeto
})

const emits = defineEmits(['close', 'updateColaboradorList']);

const closeEditModal = () => {
  emits('close') // Emitir evento para cerrar el modal
}

// Definir formData para cada campo del formulario
const formData = ref({
  id: '',
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
// Mock data para vehicletypes
const vehicletypes = [
  { label: "Mototaxi", value: "Mototaxi" },
  { label: "Auto", value: "Auto" },
  { label: "H350", value: "H350" },
  { label: "Techo Alto", value: "Techo Alto" },
];

const cancel = () => {
  store.closeEditModal(); // Cierra el modal al hacer clic en el botón "Cancelar"
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


  const selectElement = document.querySelector('.state-select select');

  if (selectElement) {
    const selectedIndex = selectElement.selectedIndex;

    const selectedLabel = selectElement.options[selectedIndex].text;

    formData.value.status = selectedLabel;

    console.log('Label seleccionado:', formData.value.status);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }


  const selectElement2 = document.querySelector('.sexo-select select');

  if (selectElement) {
    const selectedIndex = selectElement2.selectedIndex;

    const selectedLabel = selectElement2.options[selectedIndex].text;

    formData.value.sex = selectedLabel;

    console.log('Label seleccionado:', formData.value.sex);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }


  const selectElement3 = document.querySelector('.partercompany-select select');

  if (selectElement) {
    const selectedIndex = selectElement3.selectedIndex;

    const selectedLabel = selectElement3.options[selectedIndex].text;

    formData.value.partnercompany_id = selectedIndex;
    formData.value.partnercompany = selectedLabel;


    console.log('Label seleccionado:', formData.value.partnercompany_id, formData.value.partnercompany);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }



  const selectElement4 = document.querySelector('.typevehiculo-select select');

  if (selectElement) {
    const selectedIndex = selectElement4.selectedIndex;

    const selectedLabel = selectElement4.options[selectedIndex].text;

    formData.value.vehicletype_id = selectedIndex;
    formData.value.vehicletype = selectedLabel;

    console.log('Label seleccionado:', formData.value.vehicletype_id, formData.value.vehicletype);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }



  // Realiza la solicitud POST utilizando axios, pasando directamente object.value
  axios.post(`${import.meta.env.VITE_API_URL}/collaborators/edit/${formData.value.id}`, formData.value, {
    ...headers
  })
    .then(response => {
      console.log('Datos guardados exitosamente:', response.data);
      emits('updateColaboradorList'); // Emitir el evento personalizado al componente padre
      closeEditModal();
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



watch(() => props.colaboradorData, (newData) => {
  if (newData) {
    formData.value.id = newData.id
    formData.value.fullname = newData.fullname
    formData.value.document = newData.document
    statusSelected.value = newData.status;
    sexSelected.value = newData.sex;
    parterCompanySelected.value = newData.partnercompany_id;
    typeVeiSelected.value = newData.vehicletype;
    formData.value.cellphone = newData.cellphone
    formData.value.address = newData.address
    formData.value.date_birthday = newData.date_birthday
    formData.value.email = newData.email
    console.log(parterCompanySelected.value);
  }
});






onMounted(() => {
  fetchAgencies();
});
</script>

<style></style>
