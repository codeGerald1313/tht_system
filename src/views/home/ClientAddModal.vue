<template>
  <div>
    <Modal :activeModal="store.addmodal" @close="store.closeModal" title="Registrar nuevo Cliente" sizeClass="max-w-4xl"
      centered>
      <form name="client_form" id="client_form" autocomplete="off" class="mx-auto space-y-4">
        <!-- Nombre ó Razón Social -->
        <div class="grid grid-cols-3 lg:grid-cols-3 gap-4">
          <!-- Tipo de cliente -->
          <div>
            <FromGroup label="Tipo de cliente">
              <Select :options="customerTypeOptions" v-model="customerTypeSelected" class="typecliente-select"
                placeholder="Seleccione Cliente" />
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
              <InputGroup type="text" :placeholder="placeholderText" v-model="client.document">
                <template v-slot:append>
                  <Button :text="buttonText" btnClass="btn-outline-dark" @click.prevent="fetchDniData" />
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
  { value: 3, label: "PASAPORTE" },

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
  store.closeModal(); // Cierra el modal al hacer clic en el botón "Cancelar"
};

const save = () => {


  // console.log(client.value);

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
    // console.log('Label seleccionado:', client.value.type_client);
    // console.log('Índice seleccionado como cadena:', selectedIndexString);
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
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
    // console.log('Id & Label seleccionado:', client.value.type_client);
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }




  axios.post(`${import.meta.env.VITE_API_URL}/clients/create`, client.value, {
    ...headers
  })
    .then(response => {
      // console.log('Datos guardados exitosamente:', response.data);
      close();
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


watch(() => sexSelected.value, (newValue, oldValue) => {
  // Tu lógica aquí para manejar los cambios en selectedCity

  // Encuentra el elemento del select en el DOM
  const selectElement = document.querySelector('.sexo-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement.options[selectedIndex].text;

    client.value.sex = selectedLabel;


    // Imprime el label seleccionado
    // console.log('Label seleccionado:', client.value.sex);
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }

});

watch(() => statusSelected.value, (newValue, oldValue) => {
  // Tu lógica aquí para manejar los cambios en selectedCity

  // Encuentra el elemento del select en el DOM
  const selectElement = document.querySelector('.state-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement.options[selectedIndex].text;

    client.value.status = selectedLabel;


    // Imprime el label seleccionado
    // console.log('Label seleccionado:', client.value.status);
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }

});

watch(() => districtSelected.value, (newValue, oldValue) => {
  // Encuentra el elemento del select en el DOM
  const selectElement = document.querySelector('.district-select select');

  if (selectElement) {
    // Obtiene el valor del distrito seleccionado
    const selectedValue = newValue.toString().padStart(6, '0'); // Asegura que tenga seis dígitos

    // Imprime el valor seleccionado
    // console.log('Id seleccionado:', selectedValue);

    // Asigna el valor seleccionado al cliente
    client.value.district_id = selectedValue;
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }
});


watch(() => provinceSelected.value, (newValue, oldValue) => {
  // Encuentra el elemento del select en el DOM
  const selectElement = document.querySelector('.province-select select');

  if (selectElement) {
    // Obtiene el valor de la provincia seleccionada
    const selectedValue = newValue.toString().padStart(4, '0'); // Asegura que tenga cuatro dígitos

    // Imprime el valor seleccionado
    // console.log('Id seleccionado:', selectedValue);

    // Asigna el valor seleccionado al cliente
    client.value.province_id = selectedValue;
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }
});


watch(() => departmentSelected.value, (newValue, oldValue) => {
  // Encuentra el elemento del select en el DOM
  const selectElement = document.querySelector('.department-select select');

  if (selectElement) {
    // Obtiene el valor del departamento seleccionado
    const selectedValue = newValue.toString().padStart(2, '0'); // Asegura que tenga dos dígitos

    // Imprime el valor seleccionado
    // console.log('Id seleccionado:', selectedValue);

    // Asigna el valor seleccionado al cliente
    client.value.department_id = selectedValue;
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }
});

const placeholderText = ref("N° DNI"); // Placeholder inicial como "N° DNI"
const buttonText = ref("RENIEC");

// Crea un watcher para la variable documentTypeSelected.value
watch(() => documentTypeSelected.value, (newValue) => {
  const selectElement = document.querySelector('.typedocument-select select');
  if (selectElement) {
    const selectedIndex = selectElement.selectedIndex;
    const selectedOption = selectElement.options[selectedIndex];

    const selectedOptionLabel = selectElement.options[selectedIndex].text;

    client.value.typedocument_id = selectedIndex;
    client.value.typeDocument = selectedOptionLabel;
    // Actualiza el placeholder y el texto del botón
    placeholderText.value = `N° ${selectedOption.textContent}`;
    buttonText.value = newValue === '1' ? 'RENIEC' : newValue === '2' ? 'SUNAT' : 'Validar';

    // console.log(client.value.typeDocument)
  } else {
    // console.log('No se ha encontrado el elemento del selector.');
  }
});



watch(() => customerTypeSelected.value, (newValue, oldValue) => {
  // Tu lógica aquí para manejar los cambios en selectedCity

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
    // console.log('Label seleccionado:', client.value.type_client);
    // console.log('Índice seleccionado como cadena:', selectedIndexString);
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }

});


onMounted(() => {
  fetchDepartments();
});
</script>

<style lang=""></style>
