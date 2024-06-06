<template>
  <div>
    <Modal :activeModal="store.addmodal2" @close="store.closeModal2" title="Registrar Nuevo Ingreso Caja - Ericka"
      centered>
      <form @submit.prevent="addProject" class="space-y-4">
        <div class="grid lg:grid-cols-2 gap-4 grid-cols-1">
          <FromGroup name="d1" :error="boxSelectedError">
            <Select label="Caja aperturada" :options="boxesOptions" v-model="selectedBox" disabled
              class="cajonci-select" />

          </FromGroup>
          <FromGroup label="Descripción ingreso" name="d2">
            <Textinput type="text" placeholder="Descripción ingreso" v-model.trim="income.gloss" />

            <span v-if="!isValidField('gloss')" class="text-red-500">Por favor ingrese descripción</span>

          </FromGroup>
        </div>
        <div class="grid lg:grid-cols-2 gap-4 grid-cols-1">
          <FromGroup name="d3">
            <Select label="Emisor (opcional)" :options="userposition" v-model="selected" class="emisor-select" />
          </FromGroup>
          <FromGroup name="d4">
            <Select label="Concepto ingreso" :options="concepts" v-model="conceptSelected" class="concept-select"
              placeholder="Seleccione ingreso" />
            <span v-if="!conceptSelected" class="text-red-500">Por favor selecciona un concepto</span>
          </FromGroup>
        </div>

        <div class="grid lg:grid-cols-1 gap-4 grid-cols-1">
          <div v-if="selected === 'clients'" class="flex items-center">
            <FromGroup label="Clientes" class="flex-1">
              <Select :options="limitedCustomerOptions" v-model="selectedCustomer" class="client-select" />
            </FromGroup>

            <button @click="openModal" class="ml-2 mt-7 p-2 btn-outline-dark">+</button>
          </div>
          <div v-else-if="selected === 'providers'" class="flex items-center">
            <FromGroup label="Proveedores" class="flex-1">
              <Select :options="providerOptions" v-model="selectedProvider" class="provider-select" />
            </FromGroup>
            <button @click="openModalProvider" class="ml-2 mt-7 p-2 btn-outline-dark">+</button>
          </div>
          <div v-else-if="selected === 'employees'" class="flex items-center">
            <FromGroup label="Empleados" class="flex-1">
              <Select :options="employeeOptions" v-model="selectedEmployee" class="employee-select" />
            </FromGroup>
          </div>
        </div>

        <FromGroup label="Fecha del movimiento" name="d1">
          <flat-pickr v-model="income.date_movement" class="form-control" id="d1" placeholder="yyyy, dd M" />
        </FromGroup>


        <Modal title="Registrar nuevo Cliente" label="Modal title" :activeModal="show" @close="show = false"
          sizeClass="max-w-4xl">
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
                  <Select :options="departments" label="Departamento" v-model="departmentSelected"
                    class="department-select" @change="handleDepartmentChange" placeholder="Seleccione" />
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
                <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeModal" />
                <Button type="submit" text="Guardar Cambios" btnClass="btn-dark" @click.prevent="save" />
              </div>
            </div>


          </form>
        </Modal>

        <Modal title="Registrar nuevo Proveedor" label="Modal title" :activeModal="show2" @close="show2 = false"
          sizeClass="max-w-4xl">
          <form name="providerForm" id="providerForm" autocomplete="off" class="space-y-4">
            <!-- Segunda fila -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <FromGroup label="N° RUC">
                  <InputGroup type="text" placeholder="RUC" v-model.trim="provider.document">

                    <template v-slot:append>
                      <Button text="SUNAT" btnClass="btn-outline-dark " @click.prevent="fetchRucData" />
                    </template>
                  </InputGroup>
                </FromGroup>
              </div>
              <div class="md:col-span-1 lg:col-span-2">
                <FromGroup label="Razón social del proveedor">
                  <Textinput v-model.trim="provider.fullname" placeholder="Razón social del proveedor" required
                    class="w-full" />
                </FromGroup>
              </div>
            </div>

            <!-- Tercera fila -->
            <div>
              <FromGroup label="Nombre comercial">
                <Textinput v-model.trim="provider.tradename" placeholder="Nombre comercial" class="w-full" />
              </FromGroup>
            </div>


            <!-- Departamento, Provincias, Distritos -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <FromGroup>
                  <Select :options="departments" label="Departamento" v-model="departmentSelected"
                    class="department-select" @change="handleDepartmentChange" placeholder="Seleccione" />
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


            <!-- Quinta fila -->
            <div>
              <FromGroup label="Dirección">
                <Textinput v-model.trim="provider.address" placeholder="Dirección" required class="w-full" />
              </FromGroup>
            </div>

            <!-- Sexta fila -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <FromGroup label="Celular">
                  <Textinput v-model.trim="provider.cellphone" placeholder="Celular" allow-only-numbers
                    class="w-full" />
                </FromGroup>
              </div>
              <div>
                <FromGroup label="Teléfono">
                  <Textinput v-model.trim="provider.telephone" placeholder="Teléfono" allow-only-numbers
                    class="w-full" />
                </FromGroup>
              </div>
              <div>
                <FromGroup label="Correo electrónico">
                  <Textinput v-model.trim="provider.email" placeholder="Correo electrónico" type="email"
                    class="w-full" />
                </FromGroup>
              </div>
            </div>

            <!-- Nuevo contenedor para los botones -->
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
              <div class="lg:col-span-3"></div> <!-- Columnas vacías para mantener la alineación -->
              <div class="lg:col-span-1 flex justify-end">
                <!-- Botones -->
                <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeModalProvider" />
                <Button type="submit" text="Guardar Cambios" btnClass="btn-dark" @click.prevent="saveProvider" />
              </div>
            </div>
          </form>
        </Modal>


        <Modal title="Registrar cuenta bancaria" label="Modal title" :activeModal="show3" @close="show3 = false">
          <form name="banks_form" id="banks_form" autocomplete="off" class="space-y-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <FromGroup label="Sucursal" class="block">
                  <!-- Reemplaza este comentario con tu componente de select para la sucursal -->
                  <Select v-model="branchSelected" :options="branchoffices" required class="oficinaprincipal-select" />
                </FromGroup>
              </div>
              <div>
                <FromGroup label="Tipo de cuenta" class="block">
                  <!-- Reemplaza este comentario con tu componente de select para el tipo de cuenta -->
                  <Select v-model="typeAccountSelected" :options="typeaccount" required class="typeaccount-select" />
                </FromGroup>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div class="flex items-center">
                <FromGroup label="Banco" class="flex-1">
                  <Select :options="banks" v-model="selectedBank" class="banck-select" placeholder="Seleccione" />
                </FromGroup>

                <button @click.prevent="openModalBanck" class="ml-2 mt-7 p-2 btn-outline-dark">+</button>
              </div>

              <div>
                <FromGroup label="Moneda" class="block">
                  <!-- Reemplaza este comentario con tu componente de select para la moneda -->
                  <Select v-model="currencySelected" :options="currency" required class="money-select" />
                </FromGroup>
              </div>
            </div>

            <div>
              <FromGroup label="Nombre cuenta" class="block">
                <!-- Reemplaza este comentario con tu componente de input para el nombre de la cuenta -->
                <Textinput v-model.trim="account.name" placeholder="Nombre cuenta" required />
              </FromGroup>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <FromGroup label="N° de cuenta" class="block">
                  <!-- Reemplaza este comentario con tu componente de input para el número de cuenta -->
                  <Textinput v-model.trim="account.number_account" placeholder="N° de cuenta" required />
                </FromGroup>
              </div>
              <div>
                <FromGroup label="N° CCI (Código interbancario)" class="block">
                  <!-- Reemplaza este comentario con tu componente de input para el código CCI -->
                  <Textinput v-model.trim="account.cci_account" placeholder="N° CCI" required />
                </FromGroup>
              </div>
            </div>

            <div>
              <FromGroup label="Titular cuenta" class="block">
                <!-- Reemplaza este comentario con tu componente de input para el titular de la cuenta -->
                <Textinput v-model.trim="account.headline" placeholder="Titular cuenta" required />
              </FromGroup>
            </div>

            <div>
              <FromGroup label="Descripción" class="block">
                <!-- Reemplaza este comentario con tu componente de textarea para la descripción -->
                <Textarea v-model.trim="account.description" placeholder="Descripción" />
              </FromGroup>
            </div>

            <!-- Nuevo contenedor para los botones -->
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
              <div class="lg:col-span-3"></div> <!-- Columnas vacías para mantener la alineación -->
              <div class="lg:col-span-1 flex justify-end">
                <!-- Botones -->
                <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeModalEditAccountBank" />
                <Button type="submit" text="Guardar Cambios" btnClass="btn-dark" @click.prevent="saveAccountBank" />
              </div>
            </div>
          </form>

          <Modal title="Registrar banco" label="Modal title" :activeModal="show4" @close="show4 = false">
            <form name="banks_form" id="banks_form" autocomplete="off" class="space-y-4">

              <Textinput label="Nombre" name="pn" type="text" placeholder="Ingresar nombre "
                v-model="bank.description" />

              <!-- Nuevo contenedor para los botones -->
              <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                <div class="lg:col-span-3"></div> <!-- Columnas vacías para mantener la alineación -->
                <div class="lg:col-span-1 flex justify-end">
                  <!-- Botones -->
                  <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModalBank" />
                  <Button type="submit" text="Guardar Cambios" btnClass="btn-dark" @click.prevent="saveBank" />
                </div>
              </div>
            </form>
          </Modal>

        </Modal>


        <div class="grid lg:grid-cols-2 gap-4 grid-cols-1">
          <FromGroup name="d5" class="mt-1">
            <label for="payment-type" class="block text-sm font-medium text-gray-700 flex items-center">
              Método de pago
              <span class="text-red-500 ml-1">*</span>
            </label>
            <Select id="payment-type" :options="paymentMethods" v-model="selectedPaymentType"
              class="pago-select mt-2" />
          </FromGroup>



          <!-- Si se selecciona "Depósito a cuenta", se muestra el VueSelect y el FormGroup -->

          <template v-if="selectedPaymentType === 'account_deposit'">
            <div class="flex items-center">
              <FromGroup label="Cuenta destino" class="flex-1">
                <Select :options="accountOptions" v-model="selectedAccount" class="cuentadestino-select"
                  placeholder="Seleccione" />
              </FromGroup>

              <button @click="openModaalBanckAccount" class="ml-2 mt-7 p-2 btn-outline-dark">+</button>
            </div>
            <FromGroup label="N° de Operación">
              <Textinput type="text" v-model.trim="income.reference_operation" placeholder="Ingrese N° de Operación" />
            </FromGroup>
          </template>

          <FromGroup label="Monto" name="d6">
            <Textinput type="text" placeholder="Monto" v-model.trim="income.amount" />
            <span v-if="!isValidField('amount')" class="text-red-500">Por favor ingrese monto</span>
          </FromGroup>
        </div>
        <!-- Botones -->
        <div class="form-group col-lg-12 form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click="cancel" />
            <Button type="submit" text="Guardar Cambios" btnClass="btn-dark" @click="saveIngreso" />
            <!-- Botón Submit -->
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

import Modal from "@/components/Modal";
import Textinput from "@/components/Textinput";

import { useField, useForm } from "vee-validate";
import { useProjectStore } from "@/store/project";
import Select from '@/components/Select';
import { onMounted, ref, watch, computed } from 'vue';
import Textarea from '@/components/Textarea';
import axios from "axios";
import { useAuth } from "@/store/auth"
import { useToast } from "vue-toastification";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

let store = useProjectStore();

const toast = useToast();

const show = ref(false);

const show2 = ref(false);
const show3 = ref(false);

const show4 = ref(false);


const departments = ref([]);
const districts = ref([]);

const provinces = ref([]);


const cancel = () => {
  store.closeModal2(); // Cierra el modal al hacer clic en el botón "Cancelar"
};


const income = ref({
  receptor_module: '',
  receptor_fullname: '',
  receptor_document: '',
  is_paycredit: '',
  available_edit: '',
  user_id: '',
  branchoffice_id: '',
  concept_id: '',
  paymentmethod_id: '',
  currency_id: '',
  voucher_id: '',
  client_id: '',
  provider_id: '',
  employee_id: '',
  accountbank_id: '',
  date_movement: '',
  amount: '',
  text_amount: '',
  gloss: '',
  reference_operation: '',
  nro_voucher: '',
  serie: '',
  correlative: '',
  billing_external_id: '',
  billing_hash: '',
  motive_cancelled: '',
  billing_cancelled: '',
  date_repayment: '',
  repaymentmovement_id: '',
  dischargedocument_id: '',
  is_voucher_external: '',
  voucher_external: '',
  nro_voucher_external: '',
  booking_id: '',
  commision_id: '',
  observation: '',
  is_visible: '',
});

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

const fetchClients = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/clients/list`, headers); // Cambia la ruta '/api/departments' por la ruta real de tu API
    customerOptions.value = response.data.data.map(customer => ({
      value: customer.id, // Cambiamos id por value
      label: customer.fullname // Cambiamos name por label
    }));

  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};


const fetchConceptsIncome = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/moneys/income-concepts`, headers); // Cambia la ruta '/api/departments' por la ruta real de tu API
    concepts.value = response.data.data.map(concept => ({
      value: concept.id, // Cambiamos id por value
      label: concept.description // Cambiamos name por label
    }));

  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};

const fetchBanks = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/banks/list`, headers); // Cambia la ruta '/api/departments' por la ruta real de tu API
    banks.value = response.data.data.map(concept => ({
      value: concept.id, // Cambiamos id por value
      label: concept.description // Cambiamos name por label
    }));

  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};


const fetchAccountBanks = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/accountbanks/list`, headers); // Cambia la ruta '/api/departments' por la ruta real de tu API
    accountOptions.value = response.data.data.map(concept => ({
      value: concept.id, // Cambiamos id por value
      label: concept.name // Cambiamos name por label
    }));

  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};


const fetchProviders = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/providers/list`, headers); // Cambia la ruta '/api/departments' por la ruta real de tu API
    providerOptions.value = response.data.data.map(provider => ({
      value: provider.id, // Cambiamos id por value
      label: provider.fullname // Cambiamos name por label
    }));

  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};


const fetchEmployees = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/employees/list`, headers); // Cambia la ruta '/api/departments' por la ruta real de tu API
    employeeOptions.value = response.data.data.map(employee => ({
      value: employee.id, // Cambiamos id por value
      label: employee.fullname // Cambiamos name por label
    }));


  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};


const currency = [
  { value: 501, label: 'SOL' },
  { value: 502, label: 'DÓLAR' },
  { value: 503, label: 'EURO' }
];


const providerOptions = ref([]);
const employeeOptions = ref([]);


const bank = ref({
  description: ''
});


const account = ref({
  branchoffice_id: '',
  bank_id: '',
  typeaccount_id: '',
  currency_id: '',
  name: '',
  number_account: '',
  cci_account: '',
  balance: '',
  headline: '',
  description: ''
});

const customerOptions = ref([]);


const boxesOptions = [
  { value: 2, label: "Caja General" },
  // Agregar más opciones según sea necesario
];

const branchoffices = [
  { value: 500, label: 'Oficina Principal' }
];

const typeaccount = [
  { value: 504, label: 'CUENTA SIMPLE' },
  { value: 505, label: 'CUENTA CORRIENTE' },
  { value: 506, label: 'TARJETA DE CRÉDITO' }
];


const selectedCustomer = ref(null);
const selectedProvider = ref(null);
const selectedEmployee = ref(null);
const conceptSelected = ref(null);
const selectedAccount = ref(null);
const selectedBank = ref(null);

const currencySelected = ref(currency[0].value);
const typeAccountSelected = ref(typeaccount[0].value);
const branchSelected = ref(branchoffices[0].value);
const selectedBox = ref(boxesOptions[0].value); // Asignando el primer elemento de boxesOptions como valor inicial

const addProject = () => {
  // console.log()
};

const openModal = () => {
  show.value = !show.value;
};


const closeModal = () => {
  show.value = false;
};


const closeModalProvider = () => {
  show2.value = false;
};


const closeModalEditAccountBank = () => {
  show3.value = false;
};

const closeEditModalBank = () => {
  show4.value = false;
};

const openModalProvider = () => {
  show2.value = !show2.value;
};

const openModaalBanckAccount = () => {
  show3.value = !show3.value;
};

const limitedCustomerOptions = computed(() => customerOptions.value.slice(0, 6));

const saveIngreso = () => {


  const selectElement = document.querySelector('.cajonci-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement.options[selectedIndex].text;

    income.value.branchoffice_id = selectedIndex;
    income.value.branchbox = selectedLabel;

    // Imprime el label seleccionado
    // console.log('Label seleccionado:', selectedIndex, selectedLabel);
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }

  const selectElement2 = document.querySelector('.pago-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement2.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement2.options[selectedIndex].text;

    income.value.paymentmethod_id = selectedIndex;
    income.value.paymethod = selectedLabel;

    // Imprime el label seleccionado
    // console.log('Label seleccionado:', selectedIndex, selectedLabel);
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }

  // Accede al ID del concepto seleccionado desde conceptSelected
  const selectedConceptIdCliente = selectedCustomer.value;

  // Asigna el ID del concepto seleccionado al campo concept_id de income.value
  income.value.client_id = selectedConceptIdCliente;
  // También puedes asignar la descripción del concepto seleccionado al campo concept

  // Accede al ID del concepto seleccionado desde conceptSelected
  const selectedConceptIdProvider = selectedProvider.value;

  // Asigna el ID del concepto seleccionado al campo concept_id de income.value
  income.value.provider_id = selectedConceptIdProvider;
  // También puedes asignar la descripción del concepto seleccionado al campo concept

  // Accede al ID del concepto seleccionado desde conceptSelected
  const selectedConceptIdEmployee = selectedEmployee.value;

  // Asigna el ID del concepto seleccionado al campo concept_id de income.value
  income.value.employee_id = selectedConceptIdEmployee;
  // También puedes asignar la descripción del concepto seleccionado al campo concept

  // Accede al ID del concepto seleccionado desde conceptSelected
  const selectedConceptId = conceptSelected.value;

  // Asigna el ID del concepto seleccionado al campo concept_id de income.value
  income.value.concept_id = selectedConceptId;
  // También puedes asignar la descripción del concepto seleccionado al campo concept

  const selectedConceptAccountBankId = selectedAccount.value;
  // Asigna el ID del concepto seleccionado al campo concept_id de income.value
  income.value.accountbank_id = selectedConceptAccountBankId;
  // También puedes asignar la descripción del concepto seleccionado al campo concept


  console.log(income.value)

  axios.post(`${import.meta.env.VITE_API_URL}/moneys-ericka/create`, income.value, {
    ...headers
  })
    .then(response => {
      // console.log('Datos guardados exitosamente:', response.data);
      cancel();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      if (error.response && error.response.data && error.response.data.message) {
        cancel();

        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        // Si no se puede acceder al mensaje de error específico, muestra un mensaje genérico
        toast.error('Ha ocurrido un error al guardar los datos. Por favor, inténtalo de nuevo.');
      }
    });


};

const dateDefault = ref(null);

const openModalBanck = () => {
  show4.value = !show4.value;
};

const provider = ref({
  typedocument_id: "",
  document: "",
  department_id: '',
  province_id: '',
  district_id: '',
  fullname: "",
  tradename: "",
  address: "",
  cellphone: "",
  telephone: "",
  email: ""
});


const selectedPaymentType = ref('cash'); // Por defecto se inicia en "Efectivo"




const banks = ref([]);



// Método para validar un campo específico
const validateField = (fieldName) => {
  return !!income.value[fieldName];
};

// Método para verificar si un campo específico es válido
const isValidField = (fieldName) => {
  return validateField(fieldName);
};


// Opciones para las cuentas destino
const accountOptions = ref([]);



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


let boxSelected = "";
let boxSelectedError = "";
let incomeGloss = "";
let incomeGlossError = "";
let positionSelected = null;
let conceptSelectedError = "";
let paymentSelected = null;
let incomeAmount = "";
let incomeAmountError = "";

const userposition = [
  { value: "clients", label: "Clientes" },
  { value: "providers", label: "Proveedores" },
  { value: "employees", label: "Empleados" }
];

const selected = ref(userposition[0].value); // Inicializar con el valor de la primera opción



const is_employee = "employees";


const concepts = ref([]);


const paymentMethods = [
  { value: "cash", label: "Efectivo" },
  { value: "visa", label: "Visa" },
  { value: "check", label: "Cheque" },
  { value: "account_deposit", label: "Depósito a cuenta" }
];


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

const fetchRucData = () => {

  axios.post(`${import.meta.env.VITE_API_URL}/getRucData`, {
    ruc: provider.value.document
  })
    .then(response => {
      // console.log('Respuesta de la API RUC:', response.data);

      provider.value.fullname = response.data.data.nombre_o_razon_social;
      provider.value.address = response.data.data.direccion;
    })
    .catch(error => {
      console.error('Error al obtener datos del RUC:', error);
      // Aquí puedes manejar errores, como mostrar un mensaje al usuario
    });
};



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





const saveBank = () => {

  // console.log(bank.value);

  axios.post(`${import.meta.env.VITE_API_URL}/banks/create`, bank.value, {
    ...headers
  })
    .then(response => {
      // console.log('Datos guardados exitosamente:', response.data);
      closeEditModalBank();
      fetchBanks();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
};


const saveProvider = () => {

  axios.post(`${import.meta.env.VITE_API_URL}/providers/create`, provider.value, {
    ...headers
  })
    .then(response => {
      // console.log('Datos guardados exitosamente:', response.data);
      closeModalProvider();
      fetchProviders();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
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
      closeModal();
      fetchClients();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
};

const saveAccountBank = () => {


  const selectElement = document.querySelector('.oficinaprincipal-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement.options[selectedIndex].text;

    account.value.branchoffice_id = selectedIndex;

    // Imprime el label seleccionado
    // console.log('Label seleccionado:', selectedIndex, selectedLabel);
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }

  const selectElement2 = document.querySelector('.typeaccount-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement2.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement2.options[selectedIndex].text;

    account.value.typeaccount_id = selectedIndex;


    // Imprime el label seleccionado
    // console.log('Label seleccionado:', selectedIndex, selectedLabel);
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }




  const selectElement3 = document.querySelector('.banck-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement3.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement3.options[selectedIndex].text;

    account.value.bank_id = selectedIndex;


    // Imprime el label seleccionado
    // console.log('Label seleccionado:', selectedIndex, selectedLabel);
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }


  const selectElement4 = document.querySelector('.money-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement4.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement4.options[selectedIndex].text;

    account.value.currency_id = selectedIndex;


    // Imprime el label seleccionado
    // console.log('Label seleccionado:', selectedIndex, selectedLabel);
  } else {
    // console.log('No se ha seleccionado ninguna opción.');
  }




  // console.log(account.value);


  axios.post(`${import.meta.env.VITE_API_URL}/accountbanks/create`, account.value, {
    ...headers
  })
    .then(response => {
      // console.log('Datos guardados exitosamente:', response.data);
      closeModalEditAccountBank();
      fetchAccountBanks();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });



};

watch(() => selectedCustomer.value, (newValue, oldValue) => {



});


watch(() => selectedBox.value, (newValue, oldValue) => {



});


watch(() => conceptSelected.value, (newValue, oldValue) => {


});


watch(() => currencySelected.value, (newValue, oldValue) => {



});





watch(() => selectedProvider.value, (newValue, oldValue) => {


});

watch(() => selectedPaymentType.value, (newValue, oldValue) => {


});

watch(() => selectedAccount.value, (newValue, oldValue) => {



});




watch(() => typeAccountSelected.value, (newValue, oldValue) => {



});


watch(() => selectedBank.value, (newValue, oldValue) => {


});


watch(() => selectedEmployee.value, (newValue, oldValue) => {


});


watch(() => branchSelected.value, (newValue, oldValue) => {

});


// Watcher para detectar cambios en selected
watch(selected, (newValue, oldValue) => {
  const selectElement = document.querySelector('.emisor-select select');

  if (selectElement) {
    // Obtiene el índice del option seleccionado
    const selectedIndex = selectElement.selectedIndex;

    // Obtiene el texto del label seleccionado usando el índice
    const selectedLabel = selectElement.options[selectedIndex].text;

    // Imprime el label seleccionado
    // console.log('Label seleccionado:', selectedIndex, selectedLabel);
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
    provider.value.district_id = selectedValue;
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
    provider.value.province_id = selectedValue;

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
    provider.value.department_id = selectedValue;

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


onMounted(async () => {
  try {
    await fetchConceptsIncome();
    await fetchAccountBanks();
    await fetchProviders();
    await fetchBanks();
    await fetchClients();
    await fetchEmployees();
    await fetchDepartments();
  } catch (error) {
    console.error("Error al realizar llamadas a la API:", error);
  }
});


</script>

<style lang="scss">
// Estilos específicos si es necesario</style>
