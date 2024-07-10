<template>

  <div>
    <div class="flex justify-between flex-wrap items-center">


      <div class="flex sm:space-x-4 space-x-2 sm:justify-end items-center md:mb-6 mb-4 rtl:space-x-reverse">
        <span
          class="input-group-prepend w-full  bg-gray-200 bg-opacity-25 px-2 py-1 rounded-lg font-bold text-slate-600 dark:text-slate-300">
          Caja seleccionada
        </span>

        <Select :options="boxesOptions" v-model="selected" class="w-full rounded-lg shadow-md px-4 py-2 bg-white"
          placeholder="Caja Seleccionada" />

        <Button icon="heroicons-outline:plus" text="Agregar Ingreso"
          btnClass="btn-dark dark:bg-slate-800 h-min text-sm font-normal" iconClass="text-lg" @click="openProject" />


        <Button icon="heroicons-outline:plus" text="Agregar Egreso"
          btnClass="btn-dark dark:bg-slate-800 h-min text-sm font-normal" iconClass="text-lg" @click="openEgreso" />


        <!-- Ajusta el tamaño deseado aquí -->
      </div>



      <div class="space-y-5 card-auto">

        <div class="grid grid-cols-12 gap-5">
          <template v-if="id">
            <!-- Si hay un id, mostrar el card con datos de moneybox -->
            <div class="lg:col-span-6 col-span-12 space-y-5" v-for="(box, index) in moneybox" :key="index">
              <Card :title="box.date_opening">
                <template #header>
                  <span
                    class="text-lg flex uppercase text-slate-500 dark:text-slate-300 mb-1 leading-[12px] items-center font-bold">
                    <span v-if="authenticatedUser">{{ boldUpperCase(authenticatedUser.name) }}</span>
                    <Icon icon="heroicons-solid:user"></Icon>
                  </span>
                </template>
                <div class="max-w-[90%] mx-auto mt-2">
                  <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
                    <!-- Slide 1 -->
                    <swiper-slide>
                      <!-- Contenido del slide -->
                      <div
                        class="h-[150px] bg-gradient-to-r relative rounded-md z-[1] p-4 text-white from-teal-500 to-orange-300">
                        <!-- Título -->
                        <div class="font-bold text-lg mb-2">Caja abierta</div>

                        <!-- Texto en el centro -->
                        <div class="text-center mt-4">
                          <div class="font-bold text-4xl"> S/. {{ monto }}</div>
                        </div>

                        <!-- Contenido adicional si es necesario -->
                        <div class="overlay absolute left-0 top-0 h-full w-full -z-[1]">
                          <img src="@/assets/images/all-img/visa-card-bg.png" alt=""
                            class="h-full w-full object-cover" />
                        </div>

                      </div>
                    </swiper-slide>


                    <!-- Slide 2, si es necesario agregar más slides, puedes seguir el mismo patrón -->
                    <swiper-slide>
                      <!-- Contenido del segundo slide -->
                    </swiper-slide>
                  </swiper>

                </div>
                <div class="flex justify-center mt-6">
                <!-- Texto "Caja inicial S/. 325.20" -->
                <span class="font-bold mr-5 text-slate-600 dark:text-slate-300">Caja inicial S/ {{ cajaInicial }}</span>

                <!-- Botones -->
                <button
                  class="inline-flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 mr-5"
                  @click.prevent="handleVerDocumento()">
                  <span class="text-lg">
                    <Icon icon="heroicons:arrow-down-tray" />
                  </span>
                  <span class="ml-2">Arquero</span>
                </button>
                <button
                  class="inline-flex items-center justify-center py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 mr-5"
                  @click.prevent="openBoxClosed()">
                  <span class="text-lg">
                    <Icon icon="heroicons:lock-closed" />
                  </span>
                  <span class="ml-2">Cerrar Caja</span>
                </button>

                <!-- Nuevo botón -->
                <button
                  class="inline-flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
                  @click.prevent="transferirCajaGeneral()">
                  <span class="text-lg">
                    <!-- Puedes cambiar el icono según lo necesites -->
                    <Icon icon="heroicons:currency-dollar" />
                  </span>
                  <span class="ml-2">Transferir a Caja Principal</span>
                </button>
              </div>
              </Card>
            </div>
          </template>
          <template v-else>
            <div class="lg:col-span-6 col-span-12 space-y-5 " v-for="(box, index) in moneybox" :key="index">
              <Card :title="box.date_opening">
                <template #header>
                  <span
                    class="text-lg flex uppercase text-slate-500 dark:text-slate-300 mb-1 leading-[12px] items-center font-bold">
                    <span v-if="authenticatedUser">{{ boldUpperCase(authenticatedUser.name) }}</span>
                    <Icon icon="heroicons-solid:user"></Icon>
                  </span>
                </template>

                <div class="flex justify-center items-center mt-6">

                  <span class="text-8xl">
                    <Icon icon="heroicons-solid:cube" />
                  </span>
                </div>
                <div class="text-center text-slate-500 dark:text-slate-300  mt-4 font-bold">
                  Aún no tiene abierto la caja para la fecha actual
                </div>
                <div class="flex justify-center mt-6">
                  <button
                    class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-green-900 dark:bg-green-700 btn-md h-min text-sm font-normal text-white rtl:space-x-reverse"
                    @click.prevent="openBox()">
                    <span class="text-lg">
                      <Icon icon="heroicons:lock-open" />
                    </span>
                    <span>Abrir Caja</span>
                  </button>
                </div>
              </Card>
            </div>
          </template>


          <div class="lg:col-span-6 col-span-12">

            <Card title="Especificaciones">

              <div class="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
                <div v-for="(item, i) in summary_paymethods" :key="i" :class="item.bg"
                  class="rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1]">
                  <div class="overlay absolute left-0 top-0 w-full h-full z-[-1]" v-for="(item, i) in statistics"
                    :key="i">
                  </div>
                  <span class="block mb-6 text-sm text-slate-900 dark:text-white font-bold">{{ item.title }}</span>
                  <span class="block mb- text-2xl text-slate-900 dark:text-white font-bold mb-14">S/. {{ item.count
                    }}</span>
                  <div class="flex space-x-2 rtl:space-x-reverse">
                    <div class="flex-none text-xl" :class="item.text">
                      <Icon :icon="item.icon" />
                    </div>
                    <div class="flex-1 text-sm">
                      <span class="block mb-[2px]" :class="item.percentClass">{{
                        item.percent
                      }}</span>
                      <span class="block mb-1 text-slate-600 dark:text-slate-300">N° transacciones</span>
                    </div>
                  </div>
                </div>
              </div>

            </Card>
          </div>


        </div>

      </div>

      <CityTouristicAddModal @guardadoExitoso="handleGuardadoExitoso" />
      <TransferirCajaModal :id="id"   @guardadoExitoso="handleGuardadoExitosoTransferCajaPrincipal"/>

      <ClientAddModal />
      <ClientEditModal />

      <ClientAddModalEgresoA />
      <ClientEditModalEgresoA />

      <ModalCierreCaja :activeModal="showModalCierre" :id="id" :monto="monto" @close="showModalCierre = false" />


    </div>

    <div class="mt-3 flex justify-start items-start">
      <div class="mr-5">

        <Switch label="Ver Historial" v-model="applyForHistory" class="mr-2" @change="handleSwitchChange" />
      </div>


    </div>

    <div class="mt-3 flex justify-between items-start">
      <div class="w-full"> <!-- Contenedor para List con ancho completo -->

        <!-- Mostrar solo si applyForEntireMonth es false -->
        <ListIngresoEgreso v-if="applyForEntireMonth && !applyForHistory" class="mt-5" />
        <CajaHistorialA v-if="applyForHistory" class="mt-5" />

        <!-- Mostrar solo si applyForEntireMonth es true -->
      </div>
    </div>


  </div>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Textinput from "@/components/Textinput";
import { useToast } from 'vue-toastification'; // Importa el hook useToast de vue-toastification
import List from "./Project-list";
import ListEgreso from "./Project-list-Egreso-A";
import CajaHistorialA from "./HistorialCaja";

import ListIngresoEgreso from "./MovimientosCajaA";
import TransferirCajaModal from "./TranfserModalAdd";

import VueTailwindDatePicker from "vue-tailwind-datepicker";
import Breadcrumb from "@/components/Breadcrumbs";
import CityTouristicAddModal from "./CityTouristicAddModal";
import ModalCierreCaja from "./ModalCierreCaja";
import ClientAddModal from "./ClientAddModal.vue";
import ClientEditModal from "./ClientEditModal.vue";


import ClientAddModalEgresoA from "./ClientAddModal-Egreso-A.vue";
import ClientEditModalEgresoA from "./ClientEditModal-Egreso-A.vue";


import shade1 from "@/assets/images/all-img/shade-1.png"
import shade2 from "@/assets/images/all-img/shade-2.png"
import shade3 from "@/assets/images/all-img/shade-3.png"
import shade4 from "@/assets/images/all-img/shade-4.png"
import Icon from '@/components/Icon';
import Select from '@/components/Select';
import { useProjectStore } from "@/store/project";
import { useAuth } from "@/store/auth"
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import Switch from '@/components/Switch';
const headers = useAuth().headers(); // Obtiene los encabezados de autenticación
const store = useProjectStore();


export default {
  components: {
    Card,
    Icon,
    Breadcrumb,
    ListIngresoEgreso,
    Switch,
    CajaHistorialA,
    ClientAddModal,
    ClientEditModal,
    ClientEditModalEgresoA,
    ClientAddModalEgresoA,
    TransferirCajaModal,
    ListEgreso,
    List,
    ModalCierreCaja,
    VueTailwindDatePicker,
    CityTouristicAddModal,
    Swiper,
    SwiperSlide,
    Select,
    Button,
    Textinput,
  },
  data() {
    return {
      id: "", // Puedes cambiar este valor a undefined o false según necesites
      summary_paymethods: [], // inicializar como un arreglo vacío
      moneybox: {}, // Inicializamos moneybox como un objeto vacío
      selected: 2, // Establece el valor inicial aquí
      activeIndex: null,
      monto: "2,447.700", // Valor estático inicial
      cajaInicial: '',
      authStore: useAuth(),
      applyForEntireMonth: true,
      applyForHistory: false,
      idBoxed: "1",
      showModalCierre: false,
      cards: [
        {
          bg: "from-[#1EABEC] to-primary-500 ",
          cardNo: "****  ****  **** 3945",
        },

      ],
      statistics: [
        {
          title: "Sales",
          count: "354",
          bg: "bg-warning-500",
          text: "text-primary-500",
          percent: "25.67% ",
          icon: "heroicons:arrow-trending-up",
          img: shade1,
          percentClass: "text-primary-500",
        },
        {
          title: "Revenue ",
          count: "$86,954",

          bg: "bg-info-500",
          text: "text-primary-500",
          percent: "8.67%",
          icon: "heroicons:arrow-trending-up",
          img: shade2,
          percentClass: "text-primary-500",
        },
        {
          title: "Conversion",
          count: "15%",
          bg: "bg-primary-500",
          text: "text-danger-500",
          percent: "1.67%  ",
          icon: "heroicons:arrow-trending-down",
          img: shade3,
          percentClass: "text-danger-500",
        },
        {
          title: "Leads",
          count: "654",
          bg: "bg-success-500",
          text: "text-primary-500",
          percent: "11.67%  ",
          icon: "heroicons:arrow-trending-up",
          img: shade4,
          percentClass: "text-primary-500",
        },
      ],

      boxesOptions: [
        { value: 2, label: "Caja General" },

        // Agregar más opciones según sea necesario
      ],

    };
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
  props: {
    activeModal: Boolean,
  },

  methods: {
    openBox() {
      store.openProject();
    },
    handleSwitchChange() {
      // Al cambiar el switch, actualiza applyForEntireMonth según applyForHistory
      this.applyForEntireMonth = !this.applyForHistory;
    },
    handleVerDocumento() {
      axios.get(`${import.meta.env.VITE_API_URL}/list-box-cuadre-akemy/${this.id}`)
        .then(response => {

        })
        .catch(error => {
          console.error('Error al obtener la URL del PDF:', error);
          // Abrir una nueva página con la URL capturada
          window.open(error.config.url, '_blank');
        });

    },

    openBoxClosed() {
      // Asigna el valor de idBoxed antes de abrir el modal
      this.id = this.moneybox[0].id; // Puedes asignar el valor que necesites aquí


      this.monto = this.monto;
      // console.log(this.monto)
      // Abre el modal
      this.showModalCierre = true;
    },

    transferirCajaGeneral() {
      store.openTransfer();
    },


    async fetchSummaryPaymethods(id) {
      try {
        // Llamar al backend para obtener los datos
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/moneyboxes-akemy/list/${id}`, headers); // Reemplaza 'URL_DEL_BACKEND' con la URL correcta de tu backend y '${id}' con el ID que deseas obtener
        // Asignar los datos obtenidos a summary_paymethods
        this.moneybox = [response.data.moneybox]; // Convertimos el moneybox en un arreglo de un solo elemento

        this.id = this.moneybox[0].id; // Puedes asignar el valor que necesites aquí
        this.monto = this.moneybox[0].balance; // Puedes asignar el valor que necesites aquí
        this.cajaInicial = response.data.penultimate_amount_closing; // Puedes asignar el valor que necesites aquí



        this.summary_paymethods = response.data.summary_paymethods;

        // console.log(this.moneybox);
      } catch (error) {
        console.error("Error fetching summary_paymethods:", error);
      }
    },
    async fetchSummaryPaymethodsInit() {
      try {
        // Llamar al backend para obtener los datos
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/moneyboxes-akemy/list`, headers); // Reemplaza 'URL_DEL_BACKEND' con la URL correcta de tu backend y '${id}' con el ID que deseas obtener

        this.summary_paymethods = response.data.summary_paymethods;

        // Verificar si moneybox es false
        if (response.data.moneybox === false) {
          // Si moneybox es false, asignar un valor predeterminado para mostrar dos tarjetas ficticias
          this.moneybox = [
            { date_opening: response.data.date }, // Datos ficticios para la primera tarjeta
          ];
        } else {
          // Si moneybox no es false, asignar los datos obtenidos
          this.moneybox = [response.data.moneybox];
        }

        //console.log(response);
      } catch (error) {
        console.error("Error fetching summary_paymethods:", error);
      }
    },
    handleGuardadoExitosoTransferCajaPrincipal() {
  // Aquí puedes realizar cualquier lógica adicional con el ID capturado
  
  // Forzar la recarga de la página
  location.reload(true); // El parámetro true fuerza la recarga desde el servidor
},

    handleGuardadoExitoso(data) {
      // console.log('Datos guardados exitosamente en el componente padre:', data);
      const id = data.data.moneybox_id;
      this.id = id;


      this.fetchSummaryPaymethods(this.id);

      // console.log('ID capturado:', id);
      // Aquí puedes realizar cualquier lógica adicional con el ID capturado
    },
    openProject() {
      store.openProject2(); // Llama al método openProject del store
    },
    openEgreso() {
      store.openProject3(); // Llama al método openProject del store
    },

    boldUpperCase(text) {
      return text.toUpperCase();
    },
  },

  mounted() {
// Realizar la solicitud HTTP GET para obtener el último ID con owner_type = 'other'
axios.get(`${import.meta.env.VITE_API_URL}/moneyboxes-akemy/last-id-with-socia-owner`, headers)
  .then(response => {
    // Obtener el último ID y el estado de has_null_date_closing desde la respuesta
    const { last_id, has_null_date_closing } = response.data;

    // Asignar el último ID obtenido del backend a this.id
    this.id = last_id;

    // console.log(this.id);

    // Activar el método correspondiente según el estado de has_null_date_closing
    if (has_null_date_closing) {
      // Llamar al método para obtener los datos del backend con el ID proporcionado
      this.fetchSummaryPaymethods(this.id);
    } else {
      // Llamar al método para obtener los datos del backend sin un ID específico
      this.id = null;

      this.fetchSummaryPaymethodsInit();
    }
  })
  .catch(error => {
    console.error('Error al obtener el último ID:', error);
    // Asignar this.id = null y llamar al método para obtener los datos del backend sin un ID específico
    this.id = null;
    this.fetchSummaryPaymethodsInit();
  });


  },

  watch: {
    id(newValue, oldValue) {
      // Aquí puedes ejecutar acciones cuando la variable idBoxed cambia
      // console.log('Nuevo valor de idBoxed:', newValue);
      // También puedes realizar alguna acción adicional, como cargar datos o llamar a métodos
    },


  },
  computed: {
    authenticatedUser() {
      // Utiliza el método computed para obtener el usuario autenticado desde el store de autenticación
      return useAuth().user;
    }
  },

};
</script>
<style lang="scss">
.bank-table {
  tr {
    &:last-child {
      td {
        border-bottom: 0 !important;
      }
    }
  }
}

.dark {
  .bank-table table.vgt-table {
    border-bottom: none;
  }
}
</style>
