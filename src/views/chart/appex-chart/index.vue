<template>
  <div class="grid grid-cols-1 gap-5 charts">
    <Card title="Reportes">
      <TabGroup>
        <TabList class="lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse">
          <Tab v-for="(item, index) in buttons" :key="index">
            <button :class="{
              'text-primary-500': selectedTabIndex === index,
              'text-slate-500 dark:text-slate-300': selectedTabIndex !== index,
              'font-bold': selectedTabIndex === index,
              'font-normal': selectedTabIndex !== index,
            }"
              class="inline-flex items-start text-sm mb-7 capitalize bg-white dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-2 transition duration-150 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-primary-500 before:-translate-x-1/2"
              @click="selectedTabIndex = index">
              <span class="text-base relative top-[1px] ltr:mr-1 rtl:ml-1">
                <Icon :icon="item.icon" />
              </span>
              {{ item.title }}
            </button>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel v-for="(item, index) in buttons" :key="index">
            <div v-if="selectedTabIndex === index" class="text-slate-600 dark:text-slate-400 text-sm font-normal">
              <div class="row">

                <!-- Contenido específico para el tab de Ingresos -->
                <div v-if="item.title === 'Ingresos'">

                  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <!-- Selección de Sucursal -->
                    <Select label="Sucursal" name="branch" :options="branchOptions" v-model="selectedBranch" />

                    <!-- Selección de Rango de Fechas -->
                    <FromGroup label="Rango de Fechas" name="d1">
                      <VueTailwindDatePicker v-model="dateValue" input-classes="form-control" />
                    </FromGroup>

                    <!-- Selección de Concepto de Ingreso -->
                    <Select label="Concepto de Ingreso" name="incomeConcept" :options="conceptOptions"
                      v-model="selectedConcept" />

                    <!-- Selección de Método de Pago -->
                    <Select label="Método de Pago" name="paymentMethod" :options="paymentOptions"
                      v-model="selectedPaymentMethod" />

                    <Switch label="Aplicar para todos del Mes" v-model="applyForEntireMonth" class="mb-5" />

                  </div>
                  <div>


                    <!-- Bloque de contenido adicional condicional -->
                    <div v-if="applyForEntireMonth" class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                      <div class="col-span-full flex justify-center items-center">
                        <!-- Botón de filtro -->
                        <Button icon="heroicons-outline:filter" text="Filtrar por Mes" @click.prevent="getDataPorMes"
                          btnClass="bg-green-500 text-white mr-4 text-sm" iconClass="text-lg" />

                        <!-- Selector de tipo de documento -->
                        <Select name="documentType" :options="documentTypeOptions" v-model="selectedDocumentType" />

                        <!-- Botón de descarga -->
                        <Button icon="heroicons-outline:download" btnClass="bg-green-700 text-white ml-4 text-sm"
                          @click.prevent="downloadFilePorMes" iconClass="text-lg" />
                      </div>
                    </div>
                    <div v-else class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                      <div class="col-span-full flex justify-center items-center">
                        <!-- Columna que abarca toda la fila y centra su contenido -->
                        <Button icon="heroicons-outline:filter" text="Filtar" @click.prevent="getData"
                          btnClass="bg-green-500 text-white mr-4 text-sm" iconClass="text-lg" />
                        <Select name="documentType" :options="documentTypeOptions" v-model="selectedDocumentType" />


                        <Button icon="heroicons-outline:download" btnClass="bg-green-700 text-white ml-4 text-sm"
                          @click.prevent="downloadFile" iconClass="text-lg" />
                      </div>
                    </div>
                  </div>




                  <vue-good-table class="-mx-6 mt-5" :columns="columns"
                    styleClass=" vgt-table  table-head   v-middle striped  listview" :rows="this.ingresos"
                    :pagination-options="{
                      enabled: true,
                      perPage: perpage,
                    }" :search-options="{
                      enabled: true,
                      externalQuery: searchTerm,
                    }" :sort-options="{
                      enabled: false,
                    }">
                    <template v-slot:table-row="props">

                      <span v-if="props.column.field == 'NumeroIngreso'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.nro_voucher }}
                      </span>
                      <span v-if="props.column.field == 'Usuario'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.user.name }}
                      </span>
                      <span v-if="props.column.field == 'Fecha'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.date_movement }}
                      </span>
                      <span v-if="props.column.field == 'Caja'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.branch_office.description }}
                      </span>
                      <span v-if="props.column.field == 'Emisor'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        <div>
                          <!-- Mostrar información del cliente si está definido -->
                          <template v-if="props.row.client">
                            C- {{ props.row.client.fullname }}<br>
                            <span class="font-bold" v-html="'N° Doc ' + props.row.client.document"></span>
                          </template>
                          <!-- Mostrar información del empleado si está definido -->
                          <template v-else-if="props.row.employee">
                            E- {{ props.row.employee.fullname }}<br>
                            <span class="font-bold" v-html="'N° Doc ' + props.row.employee.document"></span>
                          </template>
                          <!-- Mostrar información del proveedor si está definido -->
                          <template v-else-if="props.row.provider">
                            P- {{ props.row.provider.fullname }}<br>
                            <span class="font-bold" v-html="'N° Doc ' + props.row.provider.document"></span>
                          </template>
                          <!-- Mostrar mensaje de falta de información si ninguno está definido -->
                          <template v-else>
                            No hay información disponible
                          </template>
                        </div>
                      </span>
                      <span v-if="props.column.field == 'Concepto'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.concept.description }}
                      </span>
                      <span v-if="props.column.field == 'MetodoPago'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.payment_method.description }}
                      </span>
                      <span v-if="props.column.field == 'Monto'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.amount }}
                      </span>

                    </template>
                    <template #pagination-bottom="props">
                      <div class="py-4 px-3">
                        <Pagination :total="ingresos.length" :current="current" :per-page="perpage"
                          :pageRange="pageRange" @page-changed="current = $event" :pageChanged="props.pageChanged"
                          :perPageChanged="props.perPageChanged" enableSearch enableSelect />
                      </div>
                    </template>
                  </vue-good-table>

                </div>

                <!-- Contenido específico para el tab de Egresos -->
                <div v-else-if="item.title === 'Egresos'">


                  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <!-- Selección de Sucursal -->
                    <Select label="Sucursal" name="branch" :options="branchOptions" v-model="selectedBranch" />

                    <!-- Selección de Rango de Fechas -->
                    <FromGroup label="Rango de Fechas" name="d1">
                      <VueTailwindDatePicker v-model="dateValue" input-classes="form-control" />
                    </FromGroup>

                    <!-- Selección de Concepto de Ingreso -->
                    <Select label="Concepto de Egreso" name="incomeConcept" :options="conceptExpenseOptions"
                      v-model="selectedConcept" />

                    <!-- Selección de Método de Pago -->
                    <Select label="Método de Pago" name="paymentMethod" :options="paymentOptions"
                      v-model="selectedPaymentMethod" />

                    <!-- Checkbox para Incluir Comprobante -->
                    <FromGroup label="Comprobante" class="block">
                      <Checkbox label="Incluye Comprobante" :checked="isVoucherChecked" @change="toggleVoucher" />
                    </FromGroup>

                    <Switch label="Aplicar para todos del Mes" v-model="applyForEntireMonth" class="mb-5" />

                  </div>


                  <div>
                    <!-- Bloque de contenido adicional condicional -->
                    <div v-if="applyForEntireMonth" class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                      <div class="col-span-full flex justify-center items-center">
                        <!-- Botón de filtro -->
                        <Button icon="heroicons-outline:filter" text="Filtrar por Mes"
                          @click.prevent="getDataExpensePorMes" btnClass="bg-green-500 text-white mr-4 text-sm"
                          iconClass="text-lg" />

                        <!-- Selector de tipo de documento -->
                        <Select name="documentType" :options="documentTypeOptions" v-model="selectedDocumentType" />

                        <!-- Botón de descarga -->
                        <Button icon="heroicons-outline:download" btnClass="bg-green-700 text-white ml-4 text-sm"
                          @click.prevent="downloadFile2PorMes" iconClass="text-lg" />
                      </div>
                    </div>

                    <div v-else class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                      <div class="col-span-full flex justify-center items-center">
                        <!-- Columna que abarca toda la fila y centra su contenido -->
                        <Button icon="heroicons-outline:filter" text="Filtar" @click.prevent="getDataExpense"
                          btnClass="bg-green-500 text-white mr-4 text-sm" iconClass="text-lg" />
                        <Select name="documentType" :options="documentTypeOptions" v-model="selectedDocumentType" />

                        <Button icon="heroicons-outline:download" btnClass="bg-green-700 text-white ml-4 text-sm"
                          iconClass="text-lg" @click.prevent="downloadFile2" />
                      </div>
                    </div>
                  </div>

                  <vue-good-table class="-mx-6 mt-5" :columns="columnsExpense"
                    styleClass=" vgt-table  table-head   v-middle striped  listview" :rows="this.egresos"
                    :pagination-options="{
                      enabled: true,
                      perPage: perpage,
                    }" :search-options="{
                      enabled: true,
                      externalQuery: searchTerm,
                    }" :sort-options="{
                      enabled: false,
                    }">
                    <template v-slot:table-row="props">

                      <span v-if="props.column.field == 'NumeroIngreso'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.nro_voucher }}
                      </span>
                      <span v-if="props.column.field == 'Usuario'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.user.name }}
                      </span>
                      <span v-if="props.column.field == 'Fecha'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.date_movement }}
                      </span>
                      <span v-if="props.column.field == 'Caja'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.branch_office.description }}
                      </span>
                      <span v-if="props.column.field == 'Receptor'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        <div>
                          <!-- Mostrar información del cliente si está definido -->
                          <template v-if="props.row.client">
                            C- {{ props.row.client.fullname }}<br>
                            <span class="font-bold" v-html="'N° Doc ' + props.row.client.document"></span>
                          </template>
                          <!-- Mostrar información del empleado si está definido -->
                          <template v-else-if="props.row.employee">
                            E- {{ props.row.employee.fullname }}<br>
                            <span class="font-bold" v-html="'N° Doc ' + props.row.employee.document"></span>
                          </template>
                          <!-- Mostrar información del proveedor si está definido -->
                          <template v-else-if="props.row.provider">
                            P- {{ props.row.provider.fullname }}<br>
                            <span class="font-bold" v-html="'N° Doc ' + props.row.provider.document"></span>
                          </template>
                          <!-- Mostrar mensaje de falta de información si ninguno está definido -->
                          <template v-else>
                            No hay información disponible
                          </template>
                        </div>
                      </span>
                      <span v-if="props.column.field == 'Concepto'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.concept.description }}
                      </span>
                      <span v-if="props.column.field == 'MetodoPago'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.payment_method.description }}
                      </span>
                      <span v-if="props.column.field == 'Monto'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.amount }}
                      </span>

                    </template>
                    <template #pagination-bottom="props">
                      <div class="py-4 px-3">
                        <Pagination :total="egresos.length" :current="current" :per-page="perpage"
                          :pageRange="pageRange" @page-changed="current = $event" :pageChanged="props.pageChanged"
                          :perPageChanged="props.perPageChanged" enableSearch enableSelect />
                      </div>
                    </template>
                  </vue-good-table>

                </div>
                <!-- Contenido específico para el tab de Egresos -->
                <div v-else-if="item.title === 'Ingresos & Egresos'">


                  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <!-- Selección de Sucursal -->
                    <Select label="Sucursal" name="branch" :options="branchOptions" v-model="selectedBranch" />

                    <!-- Selección de Rango de Fechas -->
                    <FromGroup label="Rango de Fechas" name="d1">
                      <VueTailwindDatePicker v-model="dateValue" input-classes="form-control" />
                    </FromGroup>
          
                    <!-- Selección de Método de Pago -->
                    <Select label="Método de Pago" name="paymentMethod" :options="paymentOptions"
                      v-model="selectedPaymentMethod" />

                  </div>


                  <div>

                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                      <div class="col-span-full flex justify-center items-center">
                        <!-- Columna que abarca toda la fila y centra su contenido -->
                        <Button icon="heroicons-outline:filter" text="Filtar" @click.prevent="getDataIncomeAndExpensePorMes"
                          btnClass="bg-green-500 text-white mr-4 text-sm" iconClass="text-lg" />
                        <Select name="documentType" :options="documentTypeOptions" v-model="selectedDocumentType" />

                        <Button icon="heroicons-outline:download" btnClass="bg-green-700 text-white ml-4 text-sm"
                          iconClass="text-lg" @click.prevent="downloadFileIncomeAndExpense" />
                      </div>
                    </div>
                  </div>

                  <vue-good-table class="-mx-6 mt-5" :columns="columnsExpense"
                    styleClass=" vgt-table  table-head   v-middle striped  listview" :rows="this.incomeexpense"
                    :pagination-options="{
                      enabled: true,
                      perPage: perpage,
                    }" :search-options="{
    enabled: true,
    externalQuery: searchTerm,
  }" :sort-options="{
    enabled: false,
  }">
                    <template v-slot:table-row="props">

                      <span v-if="props.column.field == 'NumeroIngreso'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.nro_voucher }}
                      </span>
                      <span v-if="props.column.field == 'Usuario'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.user.name }}
                      </span>
                      <span v-if="props.column.field == 'Fecha'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.date_movement }}
                      </span>
                      <span v-if="props.column.field == 'Caja'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.branch_office.description }}
                      </span>
                      <span v-if="props.column.field == 'Receptor'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        <div>
                          <!-- Mostrar información del cliente si está definido -->
                          <template v-if="props.row.client">
                            C- {{ props.row.client.fullname }}<br>
                            <span class="font-bold" v-html="'N° Doc ' + props.row.client.document"></span>
                          </template>
                          <!-- Mostrar información del empleado si está definido -->
                          <template v-else-if="props.row.employee">
                            E- {{ props.row.employee.fullname }}<br>
                            <span class="font-bold" v-html="'N° Doc ' + props.row.employee.document"></span>
                          </template>
                          <!-- Mostrar información del proveedor si está definido -->
                          <template v-else-if="props.row.provider">
                            P- {{ props.row.provider.fullname }}<br>
                            <span class="font-bold" v-html="'N° Doc ' + props.row.provider.document"></span>
                          </template>
                          <!-- Mostrar mensaje de falta de información si ninguno está definido -->
                          <template v-else>
                            No hay información disponible
                          </template>
                        </div>
                      </span>
                      <span v-if="props.column.field == 'Concepto'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.concept.description }}
                      </span>
                      <span v-if="props.column.field == 'MetodoPago'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.payment_method.description }}
                      </span>
                      <span v-if="props.column.field == 'Monto'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.amount }}
                      </span>

                    </template>
                    <template #pagination-bottom="props">
                      <div class="py-4 px-3">
                        <Pagination :total="incomeexpense.length" :current="current" :per-page="perpage"
                          :pageRange="pageRange" @page-changed="current = $event" :pageChanged="props.pageChanged"
                          :perPageChanged="props.perPageChanged" enableSearch enableSelect />
                      </div>
                    </template>
                  </vue-good-table>

                </div>

              </div>


            </div>


            <!-- Contenido cuando no hay ningún tab seleccionado -->
            <Card v-else>
              <div class="space-y-6">
                <div class="flex space-x-3 items-center rtl:space-x-reverse">
                  <div
                    class="flex-none h-8 w-8 rounded-full bg-slate-800 dark:bg-slate-700 text-slate-300 flex flex-col items-center justify-center text-lg">
                    <Icon icon="heroicons-outline:cash" class="m-l-5" />
                  </div>
                  <div class="flex-1 text-base text-slate-900 dark:text-white font-medium">
                    Reportes control de Caja
                  </div>
                </div>
                <div class="text-slate-600 dark:text-slate-300 text-sm">
                  Seleccione una opción de reporte
                </div>
              </div>
            </Card>

          </TabPanel>
        </TabPanels>

      </TabGroup>




    </Card>



  </div>
</template>

<script>
import Card from "@/components/Card";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import Icon from "@/components/Icon";
import Select from '@/components/Select';
import Textinput from "@/components/Textinput";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import { useAuth } from "../../../store/auth";
import axios from "axios";
import Pagination from "@/components/Pagination";
import Switch from '@/components/Switch';
import { useToast } from "vue-toastification";

import { mapState } from "pinia";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación


export default {


  components: {
    Switch,

    Card,
    TabGroup,
    Textinput,
    FromGroup,
    VueTailwindDatePicker,
    Checkbox,
    Button,
    TabList,
    Tab,
    Pagination,
    TabPanels,
    TabPanel,
    Select,
    Icon,
  },
  data() {

    const currentDate = new Date();

    // Obtener el primer día del mes actual
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const formattedFirstDay = firstDayOfMonth.toISOString().split('T')[0] + " 00:00:00";

    // Obtener el último día del mes actual
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const formattedLastDay = lastDayOfMonth.toISOString().split('T')[0] + " 23:59:59";


    return {
      searchTerm: "",
      current: 1,
      perpage: 10,
      pageRange: 10,
      applyForEntireMonth: false,

      branchOptions: [
        { value: 1, label: 'Caja  Principal' },
        { value: 2, label: 'Caja  General' },

      ],
      // Opciones de Concepto de ingreso
      conceptOptions: [],
      conceptExpenseOptions: [],
      // Opciones de Método de pago
      paymentOptions: [],
      // Opciones de Tipo de Documento
      documentTypeOptions: [
        { value: 1, label: 'EXCEL' },

      ],
      // Selecciones actuales
      selectedBranch: 1,
      previousBranch: null,

      selectedConcept: '',
      selectedPaymentMethod: '',
      selectedDocumentType: 1,
      includeVoucher: false, // Para manejar si se incluye el comprobante

      buttons: [
        {
          title: "Ingresos",
          icon: "heroicons-outline:currency-dollar",
          content: "Contenido de la pestaña Ingresos",
        },
        {
          title: "Egresos",
          icon: "heroicons-outline:arrow-circle-down",
          content: "Contenido de la pestaña Egresos",
        },
        {
          title: "Ingresos & Egresos",
          icon: "heroicons-outline:arrow-circle-down",
          content: "Contenido de la pestaña Egresos",
        },

      ],
      dateValue: {
        startDate: formattedFirstDay,
        endDate: formattedLastDay
      },
      selectedTabIndex: null,
      ingresos: [], // Inicializa como una matriz vacía para evitar problemas de datos no definidos
      egresos: [],
      incomeexpense: [],
      columns: [
        {
          label: "N° ingreso",
          field: "NumeroIngreso",
        },

        {
          label: "Usuario",
          field: "Usuario",
        },
        {
          label: "Fecha",
          field: "Fecha",
        },

        {
          label: "Caja",
          field: "Caja",
        },
        {
          label: "Emisor",
          field: "Emisor",
        },

        {
          label: "Concepto",
          field: "Concepto",
        },

        {
          label: "Método pago	",
          field: "MetodoPago",
        },

        {
          label: "Monto ",
          field: "Monto",
        },

      ],
      columnsExpense: [
        {
          label: "N° egreso",
          field: "NumeroIngreso",
        },

        {
          label: "Usuario",
          field: "Usuario",
        },
        {
          label: "Fecha",
          field: "Fecha",
        },

        {
          label: "Caja",
          field: "Caja",
        },
        {
          label: "Receptor",
          field: "Receptor",
        },

        {
          label: "Concepto",
          field: "Concepto",
        },

        {
          label: "Método pago	",
          field: "MetodoPago",
        },

        {
          label: "Monto ",
          field: "Monto",
        },

      ],
      isVoucherChecked: false,

    };
  },

  methods: {
    async getData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/exports/filters-income`, {
          params: {
            start_range: this.dateValue.startDate,
            end_range: this.dateValue.endDate,
            branchoffice: this.selectedBranch,
            is_voucher_external: this.isVoucherChecked ? 1 : 0, // Usar isVoucherChecked para determinar el estado
            concept_income: this.selectedConcept,
            payment_method: this.selectedPaymentMethod
            // Otros parámetros de filtro si es necesario
          },
          ...headers
        });
        // Actualizar los datos en el componente con la respuesta recibida
        this.ingresos = response.data;

        console.log(response);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },
    async getDataPorMes() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/exports/filters-todos`, {
          params: {
            start_range: this.dateValue.startDate,
            end_range: this.dateValue.endDate,
            branchoffice: this.selectedBranch,
          },
          ...headers
        });
        // Actualizar los datos en el componente con la respuesta recibida
        this.ingresos = response.data;

        console.log(response);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },

    
    async getDataIncomeAndExpensePorMes() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/exports/filters-income-and-expense`, {
          params: {
            start_range: this.dateValue.startDate,
            end_range: this.dateValue.endDate,
            branchoffice: this.selectedBranch,
            payment_method: this.selectedPaymentMethod

          },
          ...headers
        });
        // Actualizar los datos en el componente con la respuesta recibida
        this.incomeexpense = response.data;

        console.log( this.ingresos );
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },
    async getDataExpense() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/exports/filters-expense`, {
          params: {
            start_range: this.dateValue.startDate,
            end_range: this.dateValue.endDate,
            branchoffice: this.selectedBranch,
            is_voucher_external: this.isVoucherChecked ? 1 : 0, // Usar isVoucherChecked para determinar el estado
            concept_income: this.selectedConcept,
            payment_method: this.selectedPaymentMethod
            // Otros parámetros de filtro si es necesario
          },
          ...headers
        });
        // Actualizar los datos en el componente con la respuesta recibida
        this.egresos = response.data;

        console.log(response);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },
    async getDataExpensePorMes() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/exports/filters-todos-expense`, {
          params: {
            start_range: this.dateValue.startDate,
            end_range: this.dateValue.endDate,
            branchoffice: this.selectedBranch,
          },
          ...headers
        });
        // Actualizar los datos en el componente con la respuesta recibida
        this.egresos = response.data;

        console.log(response);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },
    async downloadFile() {
      try {

        // Realizar la solicitud GET al backend con los datos
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/export-money-excel`,
          {
            params: {
              start_range: this.dateValue.startDate,
              end_range: this.dateValue.endDate,
              branchoffice: this.selectedBranch,
              is_voucher_external: this.isVoucherChecked ? 1 : 0, // Usar isVoucherChecked para determinar el estado
              concept_income: this.selectedConcept,
              payment_method: this.selectedPaymentMethod
              // Otros parámetros de filtro si es necesario
            },
            responseType: 'blob' // Especifica responseType como 'blob' para manejar archivos binarios
          }
        );

        console.log(response);

        // Obtener la URL de respuesta
        const responseURL = response.request.responseURL;

        // Crear un objeto URL para la URL de respuesta
        const url = new URL(responseURL);

        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'archivo.xlsx'); // Nombre del archivo que se descargará
        link.style.display = 'none';

        // Agregar el enlace al documento
        document.body.appendChild(link);

        // Simular un clic en el enlace para iniciar la descarga
        link.click();

        // Eliminar el enlace del documento después de la descarga
        document.body.removeChild(link);

        console.log('Descarga iniciada automáticamente.');

      } catch (error) {
        console.error('Error al descargar el archivo:', error);
      }
    },
    async downloadFilePorMes() {
      try {

        // Realizar la solicitud GET al backend con los datos
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/export-money-excel-todos`,
          {
            params: {
              start_range: this.dateValue.startDate,
              end_range: this.dateValue.endDate,
              branchoffice: this.selectedBranch,
            },
            responseType: 'blob' // Especifica responseType como 'blob' para manejar archivos binarios
          }
        );

        console.log(response);

        // Obtener la URL de respuesta
        const responseURL = response.request.responseURL;

        // Crear un objeto URL para la URL de respuesta
        const url = new URL(responseURL);

        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'archivo.xlsx'); // Nombre del archivo que se descargará
        link.style.display = 'none';

        // Agregar el enlace al documento
        document.body.appendChild(link);

        // Simular un clic en el enlace para iniciar la descarga
        link.click();

        // Eliminar el enlace del documento después de la descarga
        document.body.removeChild(link);

        console.log('Descarga iniciada automáticamente.');

      } catch (error) {
        console.error('Error al descargar el archivo:', error);
      }
    },
    async downloadFile2() {
      try {

        // Realizar la solicitud GET al backend con los datos
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/export-money-excel-expense`,
          {
            params: {
              start_range: this.dateValue.startDate,
              end_range: this.dateValue.endDate,
              branchoffice: this.selectedBranch,
              is_voucher_external: this.isVoucherChecked ? 1 : 0, // Usar isVoucherChecked para determinar el estado
              concept_income: this.selectedConcept,
              payment_method: this.selectedPaymentMethod
              // Otros parámetros de filtro si es necesario
            },
            responseType: 'blob' // Especifica responseType como 'blob' para manejar archivos binarios
          }
        );

        console.log(response);

        // Obtener la URL de respuesta
        const responseURL = response.request.responseURL;

        // Crear un objeto URL para la URL de respuesta
        const url = new URL(responseURL);

        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'archivo.xlsx'); // Nombre del archivo que se descargará
        link.style.display = 'none';

        // Agregar el enlace al documento
        document.body.appendChild(link);

        // Simular un clic en el enlace para iniciar la descarga
        link.click();

        // Eliminar el enlace del documento después de la descarga
        document.body.removeChild(link);

        console.log('Descarga iniciada automáticamente.');

      } catch (error) {
        console.error('Error al descargar el archivo:', error);
      }
    },
    async downloadFile2PorMes() {
      try {

        // Realizar la solicitud GET al backend con los datos
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/export-money-excel-expense-todos`,
          {
            params: {
              start_range: this.dateValue.startDate,
              end_range: this.dateValue.endDate,
              branchoffice: this.selectedBranch,
            },
            responseType: 'blob' // Especifica responseType como 'blob' para manejar archivos binarios
          }
        );

        console.log(response);

        // Obtener la URL de respuesta
        const responseURL = response.request.responseURL;

        // Crear un objeto URL para la URL de respuesta
        const url = new URL(responseURL);

        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'archivo.xlsx'); // Nombre del archivo que se descargará
        link.style.display = 'none';

        // Agregar el enlace al documento
        document.body.appendChild(link);

        // Simular un clic en el enlace para iniciar la descarga
        link.click();

        // Eliminar el enlace del documento después de la descarga
        document.body.removeChild(link);

        console.log('Descarga iniciada automáticamente.');

      } catch (error) {
        console.error('Error al descargar el archivo:', error);
      }
    },

    async downloadFileIncomeAndExpense() {
      try {

        // Realizar la solicitud GET al backend con los datos
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/export-money-por-mensual-income-and-expense`,
          {
            params: {
              start_range: this.dateValue.startDate,
              end_range: this.dateValue.endDate,
              branchoffice: this.selectedBranch,
              payment_method: this.selectedPaymentMethod
            },
            responseType: 'blob' // Especifica responseType como 'blob' para manejar archivos binarios
          }
        );

        console.log(response);

        // Obtener la URL de respuesta
        const responseURL = response.request.responseURL;

        // Crear un objeto URL para la URL de respuesta
        const url = new URL(responseURL);

        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'archivo.xlsx'); // Nombre del archivo que se descargará
        link.style.display = 'none';

        // Agregar el enlace al documento
        document.body.appendChild(link);

        // Simular un clic en el enlace para iniciar la descarga
        link.click();

        // Eliminar el enlace del documento después de la descarga
        document.body.removeChild(link);

        console.log('Descarga iniciada automáticamente.');

      } catch (error) {
        console.error('Error al descargar el archivo:', error);
      }
    },
    toggleVoucher() {
      this.isVoucherChecked = !this.isVoucherChecked;
      console.log(this.isVoucherChecked);
    },
    async fetchConceptsIncome() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/moneys/income-concepts`,
          headers
        );

        const formattedData = response.data.data.map(concept => ({
          value: concept.id,
          label: concept.description
        }));
        console.log(formattedData);
        // Actualizar el estado o la variable de conceptOptions con los datos formateados
        this.conceptOptions = formattedData;
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },

    async fetchConceptsExpense() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/moneys/expense-concepts`,
          headers
        );

        const formattedData = response.data.data.map(concept => ({
          value: concept.id,
          label: concept.description
        }));
        console.log(formattedData);
        // Actualizar el estado o la variable de conceptOptions con los datos formateados
        this.conceptExpenseOptions = formattedData;
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },

    async fetchMetodosPago() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/paymentmethods/list`, headers);
        const formattedData = response.data.data.map(paymentMethod => ({
          value: paymentMethod.id,
          label: paymentMethod.description
        }));
        console.log(formattedData);
        // Actualizar el estado o la variable de documentTypeOptions con los datos formateados
        this.paymentOptions = formattedData;
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }
    ,
    handleBranchChange(newBranch) {
           // Convert newBranch to a number if it's a string
           const branchValue = parseInt(newBranch, 10);

      console.log(this.user.id, branchValue);
      if (branchValue === 2 &&  ![6, 10].includes(this.user.id)) {
        // Usuario no tiene permiso para seleccionar 'Caja General'
        const toast = useToast();

        console.log(newBranch);
        toast.error('No tienes permiso para seleccionar esta sucursal.');
        this.selectedBranch = this.previousBranch; // Revertir a la selección anterior
      } else {
        this.previousBranch = branchValue; // Actualizar la selección anterior
      }
    },

  },

  mounted() {
    this.fetchConceptsIncome();
    this.fetchConceptsExpense();

    this.fetchMetodosPago();
  },

  watch: {
    applyForEntireMonth(newValue) {
      if (newValue) {
        // Realizar acciones cuando applyForEntireMonth cambia a true
        console.log('Aplicar para todos del Mes activado');
        // Llamar a métodos u otras funciones aquí
      } else {
        // Realizar acciones cuando applyForEntireMonth cambia a false
        console.log('Aplicar para todos del Mes desactivado');
        // Llamar a métodos u otras funciones aquí
      }
    }
  },
  watch: {
    selectedBranch(newBranch) {
      this.handleBranchChange(newBranch);
    },
  },
  computed: {
    ...mapState(useAuth, ['user']),
  },

};
</script>

<style lang="scss">
// Estilos específicos para los botones de los tabs
.tab-button {
  &.text-primary-500 {
    // Estilos para el botón seleccionado
    font-weight: bold;
  }

  &.text-slate-500 {
    // Estilos para el botón no seleccionado
    font-weight: normal;
  }
}

.report__empty__content {
  // Agrega estilos según sea necesario
}
</style>
