<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Actualizar Datos del Clientesss"
      sizeClass="max-w-6xl" centered>
      <form name="client_form" id="client_form" autocomplete="off" class="mx-auto space-y-4">
        <!-- Nombre ó Razón Social -->
        <div class="grid grid-cols-3 lg:grid-cols-3 gap-4">
          <!-- Tipo de cliente -->
          <div>
            <FromGroup label="Tipo de cliente">
              <Select :options="customerTypeOptions" v-model="customerTypeSelected" class="typecliente-select"
                placeholder="Selccione Cliente" />
            </FromGroup>
          </div>
          <!-- Tipo de documento -->
          <div>
            <FromGroup label="Tipo documento">
              <Select :options="documentTypeOptions" v-model="documentTypeSelected" class="typedocument-select" />
            </FromGroup>
          </div>
          <!-- N° Documento -->
          <div>
            <FromGroup label="N° Documento">
              <InputGroup type="text" placeholder="DNI" v-model="client.document">
                <template v-slot:append>
                  <Button text="RENIEC" btnClass="btn-outline-dark" @click.prevent="fetchDniData" />
                </template>
              </InputGroup>
            </FromGroup>
          </div>



        </div>



        <!-- Nombre ó Razón Social -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div class="lg:col-span-3">
            <FromGroup label="Nombre ó Razón Social">
              <Textinput type="text" id="client_fullname" v-model.trim="client.fullname"
                placeholder="Ingrese Nombre ó Razón Social " />
            </FromGroup>

          </div>

          <!-- Espacio en blanco para el DropZone -->
          <div class="lg:hidden"></div>
        </div>

        <!-- Departamento, Provincias, Distritos -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <FromGroup>
              <Select :options="departments" label="Departamento" v-model="departmentSelected" class="department-select"
                @change="handleDepartmentChange" />
            </FromGroup>
          </div>
          <div>
            <FromGroup>
              <Select :options="provinces" label="Provincias" v-model="provinceSelected" class="province-select"
                @change="handleProvinceChange" :placeholder='""' />
            </FromGroup>
          </div>
          <div>
            <FromGroup>
              <Select :options="districts" label="Distritos" v-model="districtSelected" class="district-select"
                :placeholder='""' />
            </FromGroup>
          </div>
        </div>

        <!-- Dirección -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div class="lg:col-span-3">
            <FromGroup label="Dirección">
              <Textinput type="text" v-model.trim="client.address" placeholder="Ingrese Direción" />
            </FromGroup>
          </div>


          <!-- Espacio en blanco en pantallas pequeñas -->
          <div class="lg:hidden"></div>
        </div>

        <!-- Celular, Teléfono fijo, Correo electrónico -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <FromGroup label="Celular">
              <Textinput type="text" v-model.trim="client.cellphone" placeholder="Ingrese N° de celular" />
            </FromGroup>
          </div>
          <div>
            <FromGroup label="Teléfono fijo">
              <Textinput type="text" v-model.trim="client.telephone" placeholder="Ingrese N° de telefono fijo" />
            </FromGroup>
          </div>
          <div>
            <FromGroup label="Correo electrónico">
              <Textinput type="email" v-model.trim="client.email" placeholder="Ingrese correo electrónico" />
            </FromGroup>
          </div>
        </div>

        <!-- Fecha nacimiento, Estado, Sexo -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <FromGroup label="Fecha de nacimiento">
              <flat-pickr v-model="client.date_birthday" class="form-control" id="date_birthday"
                placeholder="yyyy, dd M" :config="{
                  altInput: true,
                  altFormat: 'F j, Y',
                  dateFormat: 'Y-m-d',
                }" />
            </FromGroup>
          </div>
          <div>
            <FromGroup>
              <Select :options="statusOptions" label="Estado" v-model="statusSelected" class="state-select"
                placeholder="Seleccione" />
            </FromGroup>
          </div>
          <div>
            <FromGroup>
              <Select :options="sexOptions" label="Sexo" v-model="sexSelected" class="sexo-select"
                placeholder="Seleccione" />
            </FromGroup>
          </div>
        </div>

        <!-- Nuevo contenedor para los botones -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
          <div class="lg:col-span-1"></div> <!-- Columna vacía para mantener la alineación -->
          <div class="lg:col-span-3 flex justify-end">
            <!-- Botones -->
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="cancel" />
            <Button type="submit" text="Guardar Cambios" btnClass="btn-dark" @click.prevent="save" />
          </div>
        </div>


      </form>

    </Modal>
  </div>
</template>

<script setup>
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import InputGroup from "@/components/InputGroup";
import Textinput from "@/components/Textinput";
import { onMounted, ref, watch } from 'vue';
import { useProjectStore } from "@/store/project";
import Modal from "@/components/Modal";
import Select from "@/components/Select";
import axios from "axios";
import { useAuth } from "../../store/auth";
import { useToast } from "vue-toastification";

let store = useProjectStore();
const headers = useAuth().headers(); // Obtiene los encabezados de autenticación
const toast = useToast();

const cancel = () => {
  store.closeModal(); // Cierra el modal al hacer clic en el botón "Cancelar"
};


const props = defineProps({
  activeModal: Boolean,
  clientData: Object // Se espera que la data del empleado venga como objeto
})

const emits = defineEmits(['close', 'updateClientList']);


const closeEditModal = () => {
  emits('close') // Emitir evento para cerrar el modal
}



const departments = ref([]);
const districts = ref([]);

const provinces = ref([]);

const fetchDepartments = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/ubigeo/departments`, headers); // Cambia la ruta '/api/departments' por la ruta real de tu API
    departments.value = response.data.data.map(department => ({
      value: department.id, // Cambiamos id por value
      label: department.name // Cambiamos name por label
    }));


  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};

// Variables de datos
const customerTypeOptions = [
  { value: 1, label: "Natural" },
  { value: 2, label: "Jurídico" },
  // Agregar más opciones según sea necesario
];
const documentTypeOptions = [
  { value: 1, label: "DNI" },
  { value: 2, label: "RUC" },
  // Agregar más opciones según sea necesario
];

const statusOptions = [
  { id: 1, label: "Soltero" },
  { id: 2, label: "Casado" },
  { id: 2, label: "Viudo" },
  { id: 2, label: "Divorciado" },
  // Agregar más opciones según sea necesario
];
const sexOptions = [
  { id: 1, label: "Masculino" },
  { id: 2, label: "Femenino" },
  // Agregar más opciones según sea necesario
];

// Datos del cliente
const client = ref({
  id: "",
  typedocument_id: "",
  department_id: '',
  province_id: '',
  district_id: '',
  type_client: "",
  fullname: "",
  document: "",
  tradename: "",
  address: "",
  email: "",
  telephone: "",
  cellphone: "",
  date_birthday: "",
  sex: "",
  status: "",
  typeDocument: "",
});

// Selecciones
const customerTypeSelected = ref(customerTypeOptions[0].value); // Aquí seleccionamos "Jurídico" como opción inicial
const documentTypeSelected = ref(documentTypeOptions[0].value); // Aquí seleccionamos "Jurídico" como opción inicial
let departmentSelected = ref(null);
let provinceSelected = ref(null);
let districtSelected = ref(null);
let statusSelected = ref(null);
let sexSelected = ref(null);

// Métodos
const close = () => {
  store.closeModal();
};

const save = () => {

  // Encuentra el elemento del select en el DOM
  const selectElement = document.querySelector('.typecliente-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement.selectedIndex;

    // Convierte el índice seleccionado en una cadena
    const selectedIndexString = selectedIndex.toString();

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement.options[selectedIndex].text;

    client.value.type_client = selectedIndexString;

    // Imprime el label seleccionado
    console.log('Label seleccionado:', client.value.type_client);
    console.log('Índice seleccionado como cadena:', selectedIndexString);
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
    console.log('Label seleccionado:', client.value.status);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }

  // Encuentra el elemento del select en el DOM
  const selectElement3 = document.querySelector('.sexo-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement3.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement3.options[selectedIndex].text;

    client.value.sex = selectedLabel;


    // Imprime el label seleccionado
    console.log('Label seleccionado:', client.value.sex);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }




  // Encuentra el elemento del select en el DOM
  const selectElement4 = document.querySelector('.typedocument-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement4.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement4.options[selectedIndex].text;

    client.value.typedocument_id = selectedIndex;
    client.value.typeDocument = selectedLabel;


    // Imprime el label seleccionado
    console.log('Id & Label seleccionado:', client.value.type_client);
  } else {
    console.log('No se ha seleccionado ninguna opción.');
  }


  client.value.type_client = customerTypeSelected.value;


  console.log(client.value);

  axios.post(`${import.meta.env.VITE_API_URL}/clients/edit/${client.value.id}`, client.value, {
    ...headers
  })
    .then(response => {
      console.log('Datos guardados exitosamente:', response.data);
      emits('updateClientList'); // Emitir el evento personalizado al componente padre
      closeEditModal();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
};

const onFileSelected = (file) => {
  // Lógica para manejar la selección de archivos
};

// Método para realizar la solicitud GET
const fetchDniData = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/getDniData`, {
      dni: client.value.document
    })
    .then(response => {
      // Asignar nombres, apellidoPaterno y apellidoMaterno a clientFullname
      client.value.fullname = response.data.data.nombre_completo;
    })
    .catch(error => {
      console.error('Error al obtener datos del DNI:', error);
      // Aquí puedes manejar errores, como mostrar un mensaje al usuario
    });
};



const handleDepartmentChange = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/ubigeo/provinces/${client.value.department_id}`, headers); // Cambia la ruta '/api/departments' por la ruta real de tu API
    provinces.value = response.data.data.map(province => ({
      value: province.id, // Cambiamos id por value
      label: province.name // Cambiamos name por label
    }));


  } catch (error) {
    console.error('Error fetching provinces:', error);
  }
};

const handleProvinceChange = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/ubigeo/districts/${client.value.province_id}`, headers); // Cambia la ruta '/api/departments' por la ruta real de tu API
    districts.value = response.data.data.map(district => ({
      value: district.id, // Cambiamos id por value
      label: district.name // Cambiamos name por label
    }));


  } catch (error) {
    console.error('Error fetching provinces:', error);
  }
};


watch(() => props.clientData, (newData) => {
  if (newData) {


    client.value.id = newData.id
    client.value.fullname = newData.fullname
    client.value.document = newData.document
    client.value.address = newData.address
    client.value.tradename = newData.tradename
    client.value.email = newData.email
    client.value.telephone = newData.telephone
    client.value.cellphone = newData.cellphone
    client.value.date_birthday = newData.date_birthday
    sexSelected.value = newData.sex
    statusSelected.value = newData.status
    customerTypeSelected.value = newData.type_client
    documentTypeSelected.value = newData.typedocument_id

    // Asigna el valor del departamento y asegura que tenga dos dígitos
    departmentSelected.value = (newData.department_id ?? '').toString().padStart(2, '0');

    // Asigna el valor de la provincia y asegura que tenga cuatro dígitos
    provinceSelected.value = (newData.province_id ?? '').toString().padStart(4, '0');

    // Asigna el valor del distrito y asegura que tenga seis dígitos
    districtSelected.value = (newData.district_id ?? '').toString().padStart(6, '0');


    console.log(client.value.id);
  }
});

onMounted(() => {
  fetchDepartments();
});
</script>

<style lang=""></style>
const customerTypeSelected = ref(customerTypeOptions[0].value); // Aquí seleccionamos "Jurídico" como opción inicial
const documentTypeSelected = ref(documentTypeOptions[0].value); // Aquí seleccionamos "Jurídico" como opción inicial
let departmentSelected = ref(null);
let provinceSelected = ref(null);
let districtSelected = ref(null);
let statusSelected = ref(null);
let sexSelected = ref(null);