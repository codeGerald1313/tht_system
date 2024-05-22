<template>
  <div class="grid grid-cols-1 gap-5 charts">
    <Card title="Control de Reservas de Hotel">


      <div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <!-- Selección de Sucursal -->
          <VueSelect label="Buscar Hotel" >
      <vSelect :options="hotelsOptions" v-model="selectedHotel" />
    </VueSelect>

          <!-- Selección de Rango de Fechas -->
          <FromGroup label="Rango de Fechas" name="d1">
            <VueTailwindDatePicker v-model="dateValue" input-classes="form-control" />
          </FromGroup>

          <!-- Selección de Concepto de Ingreso -->
          <Select label="Tipo de Habitación" name="incomeConcept" :options="typeBedromsOptions"
            v-model="selectedTypeBedroom" />

        </div>

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



        <vue-good-table class="-mx-6 mt-5" :columns="columns" :rows="this.ingresos" :pagination-options="{
          enabled: true,
          perPage: perpage,
        }" :search-options="{
    enabled: true,
    externalQuery: searchTerm,
  }" :sort-options="{
    enabled: false,
  }">

          <template v-slot:table-row="props">

            <span v-if="props.column.field == 'hotelsbooking'"
              class="text-base font-bold text-gray-800 dark:text-gray-400 block min-w-[108px]">
              {{ props.row.hotelsbooking.code }}
            </span>

            <span v-if="props.column.field == 'check_in'"
              class="text-base text-gray-800 dark:text-gray-400 block min-w-[108px]">
              {{ props.row.date_checkin }}
            </span>

            <span v-if="props.column.field == 'check_out'"
              class="text-base text-gray-800 dark:text-gray-400 block min-w-[108px]">
              {{ props.row.date_checkout }}
            </span>

            <span v-if="props.column.field == 'cantidad'"
              class="text-base font-bold text-center text-gray-800 dark:text-gray-400 block min-w-[40px]">
              {{ props.row.quantity }}
            </span>

            <span v-if="props.column.field == 'noches'"
              class="text-base font-bold text-center text-gray-800 dark:text-gray-400 block min-w-[40px]">
              {{ props.row.nights }}
            </span>

            <span v-if="props.column.field == 'price'"
              class="text-base font-bold text-center text-gray-800 dark:text-gray-400 block min-w-[80px]">
              S/. {{ props.row.price }}
            </span>

            <span v-if="props.column.field == 'client'"
              class="text-base font-bold text-gray-800 dark:text-gray-400 block min-w-[108px]">
              {{ props.row.hotelsbooking.client }}
            </span>

            <span v-if="props.column.field == 'hotel'"
              class="text-base font-bold text-gray-800 dark:text-gray-400 block min-w-[108px]">
              {{ props.row.hotelsbooking.hotel }}
            </span>

            <span v-if="props.column.field == 'decrip_abitacion'"
              class="text-base font-bold text-gray-800 dark:text-gray-400 block min-w-[108px]">
              {{ props.row.room_descriptions }}
            </span>

            <span v-if="props.column.field == 'total'"
            class="text-base font-bold text-center text-gray-800 dark:text-gray-400 block min-w-[80px]">
              S/.  {{ props.row.total }}
            </span>

          </template>

          <template #pagination-bottom="props">
            <div class="py-4 px-3">
              <Pagination :total="ingresos.length" :current="current" :per-page="perpage" :pageRange="pageRange"
                @page-changed="current = $event" :pageChanged="props.pageChanged" :perPageChanged="props.perPageChanged"
                enableSearch enableSelect />
            </div>
          </template>
        </vue-good-table>


      </div>






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

import VueSelect from "@/components/Select/VueSelect";
import vSelect from "vue-select";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación


export default {


  components: {
    vSelect,
    VueSelect,
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
      perpage: 3,
      pageRange: 10,
      selectedHotel: null,
      dateValue: null,
      selectedTypeBedroom: null,
      hotelsOptions: [
        { label: 'Hotel A', value: 'hotel_a_id' },
        { label: 'Hotel B', value: 'hotel_b_id' },
        { label: 'Hotel C', value: 'hotel_c_id' },
        // Agrega más hoteles según tus necesidades
      ],
      typeBedromsOptions: [
        { label: 'Suite', value: 'suite_id' },
        { label: 'Standard', value: 'standard_id' },
        { label: 'Económica', value: 'economic_id' },
        // Agrega más tipos de habitación según tus necesidades
      ],
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
        { value: 'tipo1', label: 'Tipo 1' },
        { value: 'tipo2', label: 'Tipo 2' },
        { value: 'tipo3', label: 'Tipo 3' }
      ],
      // Selecciones actuales
      selectedBranch: 1,
      selectedConcept: '',
      selectedPaymentMethod: '',
      selectedDocumentType: '',
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


      ],
      dateValue: {
        startDate: formattedFirstDay,
        endDate: formattedLastDay
      },
      selectedTabIndex: null,
      ingresos: [], // Inicializa como una matriz vacía para evitar problemas de datos no definidos
      egresos: [],
      columns: [
        {
          label: "Codigo",
          field: "hotelsbooking",
        },

        {
          label: "Fecha de Entrada",
          field: "check_in",
        },
        {
          label: "Fecha de Salida",
          field: "check_out",
        },

        {
          label: " Cantidad",
          field: "cantidad",
        },
        {
          label: "Noches",
          field: "noches",
        },
        {
          label: "Precio",
          field: "price",
        },

        {
          label: "Cliente",
          field: "client",
        },

        {
          label: "Hotel",
          field: "hotel",
        },

        {
          label: "  Descripción de la Habitación",
          field: "decrip_abitacion",
        },


        {
          label: "Total ",
          field: "total",
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

    
      const selectedHotelValue = this.selectedHotel ? this.selectedHotel.label : null;

      // console.log(selectedHotelValue);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/exports-hotelsbooking/filters-reservas-hotel`, {
          params: {
            start_range: this.dateValue.startDate,
              end_range: this.dateValue.endDate,
              tradename: selectedHotelValue,
              typebedroom_id: this.selectedTypeBedroom,
              // Otros parámetros de filtro si es necesario
            // Otros parámetros de filtro si es necesario
          },
          ...headers
        });
        // Actualizar los datos en el componente con la respuesta recibida
        this.ingresos = Object.values(response.data);

        // (response);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },

    async downloadFile() {
      try {
        const selectedHotelValue = this.selectedHotel ? this.selectedHotel.label : null;

        // Realizar la solicitud GET al backend con los datos
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/export-reservas-hotel`,
          {
            params: {
              start_range: this.dateValue.startDate,
              end_range: this.dateValue.endDate,
              tradename: selectedHotelValue,
              typebedroom_id: this.selectedTypeBedroom,
              // Otros parámetros de filtro si es necesario
            },
            responseType: 'blob' // Especifica responseType como 'blob' para manejar archivos binarios
          }
        );

        // console.log(response);

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

        // console.log('Descarga iniciada automáticamente.');

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

        // console.log(response);

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

        // console.log('Descarga iniciada automáticamente.');

      } catch (error) {
        console.error('Error al descargar el archivo:', error);
      }
    }
    ,
    toggleVoucher() {
      this.isVoucherChecked = !this.isVoucherChecked;
      // console.log(this.isVoucherChecked);
    },
    async fetchTypeBedroms() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/typebedrooms/list`,
          headers
        );

        const formattedData = response.data.data.map(concept => ({
          value: concept.id,
          label: concept.description
        }));
        // console.log(formattedData);
        // Actualizar el estado o la variable de conceptOptions con los datos formateados
        this.typeBedromsOptions = formattedData;
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },

    async fetchHotels() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/exports-hotelsbooking/hotels`,
          headers
        );

        const formattedData = response.data.map(concept => ({
          value: concept.hotelsbooking_id,
          label: concept.tradename
        }));
        // console.log(response);
        // Actualizar el estado o la variable de conceptOptions con los datos formateados
        this.hotelsOptions = formattedData;
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },



  },

  mounted() {
    this.fetchTypeBedroms();
    this.fetchHotels();

  },

  watch: {
    selectedHotel(newHotel, oldHotel) {
      // Watcher para la propiedad selectedHotel
      // console.log("Hotel seleccionado:", newHotel);
      
      // Aquí puedes realizar acciones adicionales según el cambio de selectedHotel
      // Por ejemplo, puedes realizar una llamada a una función o método
      // this.handleHotelChange(newHotel);
    },
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
