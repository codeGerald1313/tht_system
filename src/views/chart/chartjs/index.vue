<template>
  <div class="grid grid-cols-1 gap-5 charts">
    <Card title="Reportes de Reservas">
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
                <div v-if="item.title === 'Recibidos'">

                  <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                    <!-- Selección de Sucursal -->
                    <Select label="Agencia" name="branch" :options="branchOptions" v-model="selectedBranch" />

                    <!-- Selección de Rango de Fechas -->
                    <FromGroup label="Rango de Fechas" name="d1">
                      <VueTailwindDatePicker v-model="dateValue" input-classes="form-control" />
                    </FromGroup>


                  </div>
                  <div>



                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
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

                      <span v-if="props.column.field == 'code'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.code }}
                      </span>
                      <span v-if="props.column.field == 'agency_cargo'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.agency.tradename }}
                      </span>

                      <span v-if="props.column.field == 'nro_pax'"
                        class="text-slate-500 dark:text-slate-400 ">
                        {{ props.row.nro_pax }}
                      </span>
                      <span v-if="props.column.field == 'cliente_responsable'"
                        class="text-slate-500 dark:text-slate-400 block  min-w-[128px]" >
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
                      <span v-if="props.column.field == 'sobre_tours'" class="text-slate-500 dark:text-slate-400">
                        <ul>
                          <li v-for="tour in props.row.tours" :key="tour.id">{{ tour.description }}</li>
                        </ul>
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
                <div v-else-if="item.title === 'Traspasos'">


                  <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                    <!-- Selección de Sucursal -->
                    <Select label="Agencia" name="branch" :options="branchOptions" v-model="selectedBranch" />

                    <!-- Selección de Rango de Fechas -->
                    <FromGroup label="Rango de Fechas" name="d1">
                      <VueTailwindDatePicker v-model="dateValue" input-classes="form-control" />
                    </FromGroup>


                  </div>


                  <div>

                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
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

                      <span v-if="props.column.field == 'codigo_traspaso'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.code }}
                      </span>
                      <span v-if="props.column.field == 'agencya_operator'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.agency.tradename }}
                      </span>
                      <span v-if="props.column.field == 'booking_reserve'"
      class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
      {{ JSON.parse(props.row.origintransfer).code }}
</span>

<span v-if="props.column.field == 'tours'"
      class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
      <ul>
          <li v-for="tour in JSON.parse(props.row.program_transfer)">
              {{ tour.description }}
          </li>
      </ul>
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
                <div v-else-if="item.title === 'Recibidos & Traspasos'">


                  <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                    <!-- Selección de Sucursal -->
                    <Select label="Agencia" name="branch" :options="branchOptions" v-model="selectedBranch" />

                    <!-- Selección de Rango de Fechas -->
                    <FromGroup label="Rango de Fechas" name="d1">
                      <VueTailwindDatePicker v-model="dateValue" input-classes="form-control" />
                    </FromGroup>


                  </div>


                  <div>

                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                      <div class="col-span-full flex justify-center items-center">
                        <!-- Columna que abarca toda la fila y centra su contenido -->
                        <Button icon="heroicons-outline:filter" text="Filtar"
                          @click.prevent="getDataIncomeAndExpensePorMes" btnClass="bg-green-500 text-white mr-4 text-sm"
                          iconClass="text-lg" />
                        <Select name="documentType" :options="documentTypeOptions" v-model="selectedDocumentType" />

                        <Button icon="heroicons-outline:download" btnClass="bg-green-700 text-white ml-4 text-sm"
                          iconClass="text-lg" @click.prevent="downloadFileIncomeAndExpense" />
                      </div>
                    </div>
                  </div>

                  <vue-good-table class="-mx-6 mt-5" :columns="columnsRecibidoAndTraspase"
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

                      <span v-if="props.column.field == 'codigo'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.code }}
                      </span>
                      <span v-if="props.column.field == 'agencyr'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ props.row.agency.tradename }}
                      </span>
                      <span v-if="props.column.field == 'booking_reserve'"
                        class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                        {{ JSON.parse(props.row.origintransfer)?.code }}
                      </span>
                      <span v-if="props.column.field == 'tours'"
      class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
      <ul>
          <li v-for="tour in JSON.parse(props.row.program_transfer)">
              {{ tour.description }}
          </li>
      </ul>
</span>
                      <span v-if="props.column.field == 'cliente_responsable'"
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
                      <span v-if="props.column.field == 'sobre_tours'" class="text-slate-500 dark:text-slate-400">
                        <ul>
                          <li v-for="tour in props.row.tours" :key="tour.id">{{ tour.description }}</li>
                        </ul>
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
                    Reportes de Reservas
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

      branchOptions: [
        { value: 1, label: 'Caja  Principal' },

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
      selectedBranch: null,
      selectedConcept: '',
      selectedPaymentMethod: '',
      selectedDocumentType: 1,
      includeVoucher: false, // Para manejar si se incluye el comprobante

      buttons: [
        {
          title: "Recibidos",
          icon: "heroicons-outline:currency-dollar",
          content: "Contenido de la pestaña Ingresos",
        },
        {
          title: "Traspasos",
          icon: "heroicons-outline:arrow-circle-down",
          content: "Contenido de la pestaña Egresos",
        },
        {
          title: "Recibidos & Traspasos",
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
          label: "CÓDIGO	",
          field: "code",
        },

        {
          label: "AGENCIA A CARGO	",
          field: "agency_cargo",
        },
        {
          label: "CLIENTE RESPONSABLE	",
          field: "cliente_responsable",
        },

        {
          label: "N° PAX	",
          field: "nro_pax",
        },
        {
          label: "TOURS TURÍSTICOS	",
          field: "sobre_tours",
        },




      ],
      columnsExpense: [
        {
          label: "CÓDIGO	",
          field: "codigo_traspaso",
        },

        {
          label: "AGENCIA OPERADOR	",
          field: "agencya_operator",
        },
        {
          label: "RESERVA	",
          field: "booking_reserve",
        },

        {
          label: "PROGRAMA	",
          field: "tours",
        },
      ],
      columnsRecibidoAndTraspase: [
        {
          label: "CÓDIGO	",
          field: "codigo",
        },

        {
          label: "AGENCIA OPERADOR	",
          field: "agencyr",
        },
        {
          label: "RESERVA	",
          field: "booking_reserve",
        },

        {
          label: "PROGRAMA	",
          field: "tours",
        },
        {
          label: "CLIENTE RESPONSABLE	",
          field: "cliente_responsable",
        },

        {
          label: "N° PAX	",
          field: "nro_pax",
        },
        {
          label: "SOBRE TOURS	",
          field: "sobre_tours",
        },




      ],
      isVoucherChecked: false,

    };
  },

  methods: {
    async getData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/exports-booking/filters-recibido`, {
          params: {
            start_range: this.dateValue.startDate,
            end_range: this.dateValue.endDate,
            agency_id: this.selectedBranch,
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
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/exports-booking/filters-recibido-and-traspase`, {
          params: {
            start_range: this.dateValue.startDate,
            end_range: this.dateValue.endDate,
            agency_id: this.selectedBranch,
          },
          ...headers
        });
        // Actualizar los datos en el componente con la respuesta recibida
        this.incomeexpense = response.data;

        console.log(this.incomeexpense);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },

    async getDataExpense() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/exports-booking/filters-traspase`, {
          params: {
            start_range: this.dateValue.startDate,
            end_range: this.dateValue.endDate,
            agency_id: this.selectedBranch,
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



    fetchAgencies() {
      axios.get(`${import.meta.env.VITE_API_URL}/agencies/list`, headers)
        .then(response => {
          this.branchOptions = response.data.data.map(agency => ({
            value: agency.id,
            label: agency.fullname // Asume que la agencia tiene un campo 'name' que se utilizará como etiqueta
          }));

          console.log(response);
        })
        .catch(error => {
          console.error('Error al obtener las agencias:', error);
        });
    },
    async downloadFile() {
      try {

        // Realizar la solicitud GET al backend con los datos
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/export-booking-recibido-excel`,
          {
            params: {
              start_range: this.dateValue.startDate,
              end_range: this.dateValue.endDate,
              agency_id: this.selectedBranch,
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
          `${import.meta.env.VITE_API_URL}/export-booking-traspaso-excel`,
          {
            params: {
              start_range: this.dateValue.startDate,
              end_range: this.dateValue.endDate,
              agency_id: this.selectedBranch,
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
          `${import.meta.env.VITE_API_URL}/export-booking-mensual-recibido-and-traspaso`,
          {
            params: {
              start_range: this.dateValue.startDate,
              end_range: this.dateValue.endDate,
              agency_id: this.selectedBranch,
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




  },

  mounted() {

    this.fetchAgencies();

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
