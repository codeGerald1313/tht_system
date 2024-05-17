<template>
  <div>
    <div class="flex justify-end space-x-4 mb-3">
      <button
        class="invoice-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse"
        @click="openModalComisionar()">
        <span class="text-lg ">
          <Icon icon="heroicons-solid:cash" />
        </span>
        <span>Comisionar</span>
      </button>
      <button
        class="invoice-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse"
        @click="openModalAmortizar()">
        <span class="text-lg ">
          <Icon icon="heroicons-solid:banknotes" />
        </span>
        <span>Amortizar(Total)</span>
      </button>
    </div>

    <Card title="Recibir Reserva - Datos Generales">


      <div class="grid grid-cols-1 lg:grid-cols-1 gap-5">
        <!-- Primera fila -->
        <div class="grid grid-cols-2 gap-5">

          <div class="my-custom-design">
            <div class="grid grid-cols-1 lg:grid-cols-1 gap-4">
              <!-- Utiliza el v-for para iterar sobre los elementos en 'agencies' -->
              <div class="lg:col-span-1">
                <div class="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
                  :style="{ backgroundImage: 'url(' + widgetBg2 + ')', height: '100px' }">
                  <div class="flex flex-col justify-center items-center h-full">
                    <!-- Flexbox para centrar contenido -->
                    <div>
                      <h4 class="text-2xl font-medium text-white mb-2 text-center">
                        <span class="block">Agencia: <strong>{{ fullNameAgency }}</strong></span>
                      </h4>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <FromGroup label="Clientes" class="flex-1">
              <Select :options="limitedCustomerOptions" v-model="booking.clients" class="client-select" />
            </FromGroup>
            <button @click="openModal" class="ml-2 mt-7 p-2 btn-outline-dark">+</button>
          </div>
        </div>
        <!-- Segunda fila -->
        <div class="grid grid-cols-3 gap-5">
          <div>
            <Textinput label="Tel. emergencia" type="text" placeholder="Tel. emergencia"
              v-model="booking.emergencyPhone" />


            <!-- <Checkbox label="¿Referenciar?" @click="toggleReferences" v-model="booking.referenciar" /> -->
          </div>


          <div v-if="booking.referenciar">
            <FromGroup label="Referencia de pasajeros:" class="flex-1">
              <div class="flex items-center">
                <InputGroup name="nro_pax_childs" type="text" placeholder="N° niños" v-model="booking.numChildren"
                  prepend="#Niños" />
                <InputGroup name="nro_pax_adults" type="text" placeholder="N° adultos" v-model="booking.numAdults"
                  prepend="#Adultos" />
                <InputGroup name="nro_pax_olds" type="text" placeholder="N° ancianos" v-model="booking.numSeniors"
                  prepend="#Ancianos" />
              </div>
            </FromGroup>
          </div>

          <Textinput label="N° Pax" type="text" placeholder="N° pax" v-model="booking.numPassengers" />


          <FromGroup label="Observaciones">

            <Textinput type="text" placeholder="Observaciones" v-model="booking.observations" />

            <!--<flat-pickr v-model="booking.dateTimeArrival" class="form-control" placeholder="Date & Time" id="d2"
              :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }" />-->
          </FromGroup>


          <!--<FromGroup label="Llegada por">
            <Select :options="originsReserve" v-model="booking.arrivalBy" class="client-select" />
          </FromGroup>
          <Textinput label="Referencia lugar llegada" type="text" placeholder="Referencia lugar llegada"
            v-model="booking.placeArrivalReference" />-->
        </div>
        <!-- 
        <div class="grid grid-cols-4 gap-5">
          <Textinput label="N° ref. comprobante" type="text" placeholder="N° ref. comprobante"
            v-model="booking.voucherReference" />
          <Textinput label="Contacto emergencia" type="text" placeholder="Contacto emergencia"
            v-model="booking.emergencyContact" />
          <Textinput label="Tel. emergencia" type="text" placeholder="Tel. emergencia"
            v-model="booking.emergencyPhone" />
          <Textinput label="Observaciones" type="text" placeholder="Observaciones" v-model="booking.observations" />
        </div>
     
        <div class="grid grid-cols-3 gap-5">
          <div>
            <Checkbox label="¿Es favorito (reserva)?" v-model="booking.isFavorite" />
          </div>
          <div>
            <Checkbox label="¿Incluye desayuno?" v-model="booking.includeBreakfast" />
          </div>
          <div v-if="booking.includeBreakfast" class="form-group col-lg-9">
            <div class="flex">
              <div class="flex flex-col w-1/2 mr-4">
                <Textinput label="N° Desayunos" type="text" placeholder="Ingrese número"
                  v-model="booking.numBreakfasts" />
              </div>
              <div class="flex flex-col w-1/2">
                <FromGroup label="Fecha Inicio" name="d1">
                  <flat-pickr v-model="booking.startDate" class="form-control" id="d1" placeholder="yyyy, dd M" />
                </FromGroup>
              </div>
              <div class="flex flex-col w-1/2">
                <FromGroup label="Fecha Fin" name="d1">
                  <flat-pickr v-model="booking.endDate" class="form-control" id="d1" placeholder="yyyy, dd M" />
                </FromGroup>
              </div>
            </div>
          </div>
        </div>
          -->
      </div>
    </Card>


    <Card class="mt-4" noborder>


      <div class="grid grid-cols-1">
        <div class="flex flex-col">
          <header class="border-b border-slate-100 dark:border-slate-700 pb-3 flex justify-between items-center">
            <div class="flex items-center"> <!-- Contenedor flex -->
              <h6 class="card-title mb-0">Datos de Tours turístico</h6>
            </div>
            <div class="flex items-center">
              <div class="flex-grow mr-2">
                <Select :options="tourOptions" v-model="selectedTour" placeholder="Seleccionar Tipo" class="w-full" />

              </div>
            </div>
          </header>
          <vue-good-table class="-mx-6 mb-5" :columns="columns"
            styleClass=" vgt-table  table-head   v-middle striped lesspadding2 listview" :rows="projects"
            :pagination-options="{
              enabled: false,
              perPage: perpage,
            }" :sort-options="{
              enabled: false,
            }">

            <template v-slot:table-row="props">
              <!-- Checkbox para esAbierto -->
              <span v-if="props.column.field == 'abierto'">
                <div class="flex space-x-3 items-center text-left rtl:space-x-reverse">
                  <Checkbox v-model="projects[props.index].esAbierto" />
                </div>
              </span>

              <!-- Descripción del tour -->
              <span v-if="props.column.field == 'tour'" class="text-slate-500 dark:text-slate-400 block min-w-[208px]">
                {{ props.row.description }}
              </span>

              <!-- Selección de vehículo -->
              <span v-if="props.column.field == 'vehiculo'"
                class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                <Select :options="vehiculos" v-model="projects[props.index].vehiculo" />
              </span>

              <!-- Selección de turno -->
              <span v-if="props.column.field == 'turno'" class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                <Select :options="turnos" v-model="projects[props.index].turno" />
              </span>

              <!-- Input para el número de pasajeros -->
              <span v-if="props.column.field == 'pasajero'" class="block w-full">
                <Textinput type="text" placeholder="N° pax" v-model="projects[props.index].nPasajseros" />
              </span>

              <!-- Selector de fecha -->
              <span v-if="props.column.field == 'fecha'">
                <flat-pickr class="form-control" id="d1" placeholder="yyyy, dd M"
                  v-model="projects[props.index].date_assigned" />
              </span>

              <!-- Input para la observación -->
              <span v-if="props.column.field == 'observation'">
                <Textinput type="text" placeholder="Observación" v-model="projects[props.index].observacion" />
              </span>

              <!-- Input para la observación -->
              <span v-if="props.column.field == 'precio_corporativo'" >
                <Textinput type="text" placeholder="S/." v-model="projects[props.index].precio_corporate" /> 
              </span>

              <span v-if="props.column.field == 'cobranza'">
                <Textinput type="text" placeholder="S/."  v-model="projects[props.index].cobranza" />
              </span>

              <!-- Input para el campo realizado -->
              <span v-if="props.column.field == 'realizado'">
                <Textinput type="text" placeholder="-"  />
              </span>

              <!-- Botón de acción para eliminar -->
              <div v-if="props.column.field == 'action'" class="action-btn text-end mr-3">
                <div class="text-xl" @click="deleteProject(props.index)">
                  <Icon icon="heroicons-outline:trash" class="text-danger-500" />
                </div>
              </div>
            </template>


          </vue-good-table>
          <!-- Fin Vue Good Table -->

          <!-- InputGroup -->
          <div class="mt-5 self-end">

            <InputGroup label="T. TOURS S/. " class="append" name="hi_Fullname" v-model="tour.totalTour" type="text"
              placeholder="" horizontal appendIcon="heroicons-outline:cash" classInput="text-right" />
          </div>
        </div>
      </div>
    </Card>


    <Card class="mt-4" noborder>
      <div class="grid grid-cols-1">
        <div class="flex flex-col">
          <div class="md:flex pb-6 items-center">
            <h6 class="flex-1 md:mb-0 mb-3">Reservas de Alojamiento</h6>
            <div class="md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse">

              <Button icon="heroicons-outline:plus-sm" text="Agregar Reserva" btnClass=" btn-dark font-normal btn-sm "
                iconClass="text-lg" @click.prevent="openModalReservaHotel" />
            </div>
          </div>

          <vue-good-table class="-mx-6" :columns="columnsReservasAlojamiento"
            styleClass=" vgt-table  table-head   v-middle striped  listview" :rows="this.reservasHotel" :sort-options="{
              enabled: false,
            }">
            <template v-slot:table-row="props">
              <span v-if="props.column.field == 'code'" class="text-blue-900 font-bold">
                {{ props.row.code }}
              </span>


              <span v-if="props.column.field == 'nombreHotel'"
                class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                <span class="font-bold">{{ props.row.hotel.tradename }}</span>({{
                  props.row.hotel.citie_turistic.description }})
                <br>
                Cell: {{ props.row.hotel.cellphone }}
              </span>
              <span v-if="props.column.field == 'detallehotel'"
                class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                {{ props.row.typebedrooms.map(bedroom => `${bedroom.typebedroom.description} (${bedroom.quantity} hab. x
                ${bedroom.nights} noches)`).join(', ') }}
              </span>

              <template v-if="props.column.field === 'action'">
                <div class="action-btn text-end mr-3">
                  <div class="text-xl">
                    <Icon icon="heroicons-outline:trash" class="text-danger-500" @click="deleteItem(props.row.id)" />
                  </div>
                </div>
              </template>


            </template>

          </vue-good-table>

          <!-- InputGroup -->
          <div class="mt-5 self-end">

            <InputGroup label="T. HOTEL S/. " class="append" name="hi_Fullname" v-model="totalHotelValue" type="text"
              placeholder="" horizontal appendIcon="heroicons-outline:cash" classInput="text-right" />
          </div>

        </div>

      </div>
    </Card>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
      <div class="lg:col-span-1"></div> <!-- Columna vacía para mantener la alineación -->
      <div class="lg:col-span-3 flex justify-end">
        <!-- Botones -->
        <Button text="Cancelar" btnClass="btn-light mr-2" @click="closeModal()" />
        <Button type="submit" text="Guardar Reserva" @click="saveReserva()" btnClass="btn-dark" />
      </div>
    </div>


    <div class="flex justify-center"> <!-- Centrar el contenido a la izquierda -->
      <Card class="mb-0 book__summary max-w-md"> <!-- Aplicar un ancho máximo -->
        <div class="flex justify-center"> <!-- Centrar el contenido de la tabla -->
          <table class="w-full">
            <tr>
              <th>Total tours</th>
              <td>{{ formattedTotal }}</td>
            </tr>
            <tr>
              <th>Total hotel</th>
              <td>{{ formattedTotalHotel }}</td>
            </tr>

            <tr>
              <td colspan="2">
                <hr class="book__summary__hrdivider">
              </td>
            </tr>
            <tr>
              <th class="text-primary bold text-uppercase f-s-15">Total reserva</th>
              <td class="text-primary bold f-s-15">{{ totalReserva }}</td>
            </tr>
          </table>
        </div>


      </Card>
    </div>

    <EditProject :activeModal="showEditModal" @close="showEditModal = false" title="Actualizar Registro de Colaborador"
      @updateClientList="fetchClients"></EditProject>

    <EditProject2 :activeModal="showReserveModal" title="Actualizar Registro de Colaborador"
      @postComplete="handlePostComplete" @close="showReserveModal = false"></EditProject2>

    <ComisionarModal :activeModal="showComisionar" title="Actualizar Registro de Colaborador"
      @commissionProcessed="handleCommissionProcessed" @close="showComisionar = false"></ComisionarModal>


    <AmortizarModal :activeModal="showAmortizar" title="Actualizar Registro de Colaborador"
      @form-submitted="handleFormSubmitted" :idCliente="idCliente" :totalBooking="booking.total"
      @close="showAmortizar = false">
    </AmortizarModal>



  </div>



</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import FromGroup from "@/components/FromGroup";
import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import Repeater from "./module/repeater";
import Checkbox from '@/components/Checkbox';
import InputGroup from '@/components/InputGroup';
import Select from "@/components/Select";
import ComisionarModal from "./ComisionarAddModal";
import AmortizarModal from "./AmortizarAddAmodal";

import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import ProgressBar from "@/components/ProgressBar";
import { MenuItem } from "@headlessui/vue";
import { mapState, mapActions } from "pinia";
import { useProjectStore } from "../../../store/project";
import VueSelect from "../../../components/Select/VueSelect.vue";
import Modal from "@/components/Modal";
import { advancedTable } from "../../../constant/basic-tablle-data";
import axios from "axios";
import { useAuth } from "../../../store/auth";
import { useToast } from "vue-toastification";

import EditProject from "./ClientAddModal";
import EditProject2 from "./ModalAddReserve";
import widgetBg2 from "@/assets/images/all-img/widget-bg-2.png";


const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

export default {
  components: {
    Dropdown,
    Select,
    Button,
    widgetBg2,
    FromGroup,
    EditProject,
    ComisionarModal,
    AmortizarModal,
    EditProject2,
    Textinput,
    Modal,
    Checkbox,
    InputGroup,
    Icon,
    VueSelect,
    MenuItem,
    Card,
    ProgressBar,
  },
  data() {
    return {
      idRecibied: null,
      advancedTable,
      idsReservesHotels: [],
      commissionIds: [],
      moneyIds: [],
      searchTerm: '',
      fullNameAgency: null,
      widgetBg2,
      showEditModal: false,  // Nueva propiedad para controlar el modal de edición
      showReserveModal: false,  // Nueva propiedad para controlar el modal de edición
      selectedTour: null,
      store: null,
      formattedTotal: 'S/.0.00',
      formattedTotalHotel: 'S/.0.00', // Valor inicial del Total hotel
      totalHotelValue: '0.00', // Inicializa el total de hotel en 0.00
      reservasHotel: [],
      projects: [], // Tu objeto rows
      filteredRows: [], // Objeto filtrado para mostrar en la tabla
      includeBreakfast: false,
      book: {
        is_breakfast: false,
        nro_breakfast: '',
        start_breakfast: '',
        end_breakfast: ''
      },

      originsbooking: [], // Array vacío para almacenar las opciones de agencias

      originsReserve: [
        { value: 1, label: 'Sin Asignar' },
        { value: 2, label: 'Aeropuerto' },
        { value: 3, label: 'Terminar Terrestre' },
        { value: 4, label: 'Otros' }
      ],
      toursOptions: [],
      customerOptions: [],
      showReferences: false,
      nro_pax_childs: '',
      nro_pax_adults: '',
      nro_pax_olds: '',
      current: 1,
      basicTableData: [
        {
          codigo: "HRS2024-000231",
          nombreHotel: "HOTEL POSADA LODGE (TARAPOTO)",
          detallehotel: "HAB. TRIPLE (AC) (2 hab. x 6 noches)",
          contacto: "Cel: 963122673"
        }
        // Agrega más objetos al array si lo necesitas
      ],
      client: {
        document: "",
        fullname: "",
        tradename: "",
        address: "",
        cellphone: "",
        telephone: "",
        email: "",
        date_birthday: ""
      },

      tour: {
        esAbierto: null,
        tourDescription: null,
        vehiculo: null,
        turno: null,
        nPasajseros: null,
        fechaTour: null,
        observacion: null,
        realizado: null,
        totalTour: '0.00' // Inicializa el total de tours en 0.00
      },
      // 

      booking: {
        clients: null,
        agency_id: null,
        phoneNumber: null,
        originReserve: null,
        numPassengers: null,
        referenciar: false,
        numChildren: null,
        numAdults: null,
        numSeniors: null,
        dateTimeArrival: null,
        dateArrival: null, // Para almacenar solo la fecha
        timeArrival: null, // Para almacenar solo la horA
        arrivalBy: null,
        placeArrivalReference: null,
        voucherReference: null,
        emergencyContact: null,
        emergencyPhone: null,
        observations: null,
        isFavorite: false,
        includeBreakfast: false,
        numBreakfasts: null,
        startDate: null,
        endDate: null,
        total: null,
      }
      ,
      perpage: 3,
      idCliente: null,
      show: false,
      showEdit: false,
      showAmortizar: false,
      showComisionar: false,
      show2: false,
      realizado: "--",
      pageRange: 10,
      actions: [

        {
          name: "edit",
          icon: "heroicons:pencil-square",
          doit: (data) => {
            this.openModalEdit(data);
          },
        },
        {
          name: "delete",
          icon: "heroicons-outline:trash",
          doit: (data) => {
            this.removeProject(data)
          },
        },
      ],



      vehiculos: [
        { value: 1, label: "Compartido" },
        { value: 2, label: "Privado" }
      ],


      turnos: [
        { value: 1, label: "Full Day" },
        { value: 2, label: "Mañana" },
        { value: 3, label: "Tarde" },
        { value: 4, label: "Noche" }

      ],

      columns: [
        {
          label: "¿Es Abierto?",
          field: "abierto",
        },
        {
          label: "Tours Turístico",
          field: "tour",
        },

        {
          label: "Vehículo",
          field: "vehiculo",
        },

        {
          label: "Turno",
          field: "turno",
        },
        {
          label: "N° pax",
          field: "pasajero",
        },

        {
          label: "Fecha",
          field: "fecha",
        },


        {
          label: "Observación",
          field: "observation",
        },
        {
          label: "Precio Coorporativo",
          field: "precio_corporativo",
        }, 
        {
          label: "Cobranza",
          field: "cobranza",
        },
        {
          label: "Realizado",
          field: "realizado",
        },
        {
          label: "Action",
          field: "action",
        },
      ],

      columnsReservaHotelExpense: [
        {
          label: "Habitacion",
          field: "habitacion",
        },
        {
          label: "N° PAX	",
          field: "pasajeross",
        },

        {
          label: "Cant. HAB",
          field: "cantidad",
        },

        {
          label: "Check-In",
          field: "checkin",
        },
        {
          label: "Check-out",
          field: "checkout",
        },

        {
          label: "#Noches",
          field: "noches",
        },


        {
          label: "Precio",
          field: "precio",
        },

        {
          label: "Descuento",
          field: "descuento",
        },
        {
          label: "Adicional",
          field: "adicional",
        },

        {
          label: "Observación",
          field: "observacion",
        },

        {
          label: "Subtotal",
          field: "subtotal",
        },

        {
          label: "",
          field: "action",
        },
      ],

      selectedTourDescription: '', // Agrega esta variable para almacenar la descripción seleccionada

      tourOptions: [
      ],

      totalBooking: null,
      bedroomOptions: [
      ],
      rows: [
        {
          item: "Headphone",
          qty: 2,
          price: "$600.25",
          total: "$1200.50",
        },
        {
          item: "Headphone",
          qty: 2,
          price: "$600.25",
          total: "$1200.50",
        },
        {
          item: "Headphone",
          qty: 2,
          price: "$600.25",
          total: "$1200.50",
        },
        {
          item: "Headphone",
          qty: 2,
          price: "$600.25",
          total: "$1200.50",
        },
      ],
      columnsReservasAlojamiento: [
        {
          label: 'Código',
          field: 'code',
          type: 'text',
          html: true, // Indica que el contenido será HTML
          width: '100px' // Ancho de la columna
        },
        {
          label: 'Nombre del Hotel',
          field: 'nombreHotel',
          type: 'text',
          html: true, // Indica que el contenido será HTML
          width: '150px' // Ancho de la columna
        },
        {
          label: 'Detalle del Hotel',
          field: 'detallehotel',
          type: 'text',
          html: true, // Indica que el contenido será HTML
          width: '250px' // Ancho de la columna
        },
        {
          label: 'Acciones',
          field: 'action',
          type: 'text',
          html: true, // Indica que el contenido será HTML
          width: '120px' // Ancho de la columna
        }
      ],
    };
  },

  watch: {
    selectedTour(newTour, oldTour) {
      if (newTour !== oldTour) {
        // Verificar si el ID ya está seleccionado
        const existingProject = this.projects.find(project => project.id === newTour);
        if (!existingProject) {
          axios.get(`${import.meta.env.VITE_API_URL}/tours/description/${newTour}`, headers)
            .then(response => {
              const newProject = {
                id: newTour,
                description: response.data.data.description,
                esAbierto: null,
                vehiculo: null,
                turno: null,
                nPasajseros: null,
                fechaTour: null,
                observacion: null,
                realizado: null,
                totalTour: null,
                precio_corporate: response.data.data.price_corporate,
                cobranza: null
              };
              this.projects.push(newProject);
              console.log(this.projects);
            })
            .catch(error => {
              console.error('Error al obtener la descripción del tour:', error);
            });
        } else {
          const toast = useToast();
          toast.warning('¡Este tour ya está seleccionado!');
        }
      }
    },
    'projects': {
        deep: true,
        handler(newProjects, oldProjects) {
            let totalCobranza = 0; // Variable para almacenar la suma total de cobranzas
            for (let i = 0; i < newProjects.length; i++) {
                const project = newProjects[i];
                const nPasajeros = parseFloat(project.nPasajseros);
                const precioCorporate = parseFloat(project.precio_corporate);
                if (!isNaN(nPasajeros) && !isNaN(precioCorporate)) {
                    this.projects[i].cobranza = nPasajeros * precioCorporate;
                    totalCobranza += this.projects[i].cobranza; // Sumar la cobranza actual al total
                }

                this.tour.totalTour = totalCobranza; // Actualizar el valor total del tour

            }
        }
    },
    'booking.clients': function (newValue, oldValue) {
      this.idCliente = newValue;

      console.log(this.idCliente);
      axios.get(`${import.meta.env.VITE_API_URL}/clients/cellphone&telephone/${newValue}`, headers)
        .then(response => {
          console.log(response);

          this.booking.phoneNumber = response.data.contact_numbers;
        })
        .catch(error => {
          console.error('Error al obtener la descripción del tour:', error);
        });
    },

    'booking.dateTimeArrival'(newValue) {
      if (newValue) {
        // Dividir la fecha y la hora en dos partes separadas
        const [datePart, timePart] = newValue.split(' ');
        // Asignar los valores a las propiedades correspondientes
        this.booking.dateArrival = datePart;
        this.booking.timeArrival = timePart;

        console.log(this.booking.dateArrival);
        console.log(this.booking.timeArrival);
      } else {
        // Si el valor es nulo, establecer las propiedades en nulo también
        this.booking.dateArrival = null;
        this.booking.timeArrival = null;
      }
    },

    'tour.totalTour': function (newValue) {
      // Convertir newValue a un número usando parseFloat y luego aplicar toFixed()
      const numericValue = parseFloat(newValue);
      // Verificar si numericValue es un número válido
      if (!isNaN(numericValue) || newValue === '') {
        // Actualizar la variable 'formattedTotal' con el nuevo valor formateado
        this.formattedTotal = 'S/.' + (newValue === '' ? '0.00' : numericValue.toFixed(2));
      }
    },
    totalHotelValue(newValue) {
      const numericValue = parseFloat(newValue);
      if (!isNaN(numericValue) || newValue === '') {
        this.formattedTotalHotel = 'S/.' + (newValue === '' ? '0.00' : numericValue.toFixed(2));
      }
    },

  },
  async created() {
    await this.fetchClients();
  },

  computed: {
    totalReserva() {
      // Convertir formattedTotal y formattedTotalHotel a números
      const formattedTotalNumber = isNaN(parseFloat(this.formattedTotal.substring(3))) ? 0 : parseFloat(this.formattedTotal.substring(3));
      const formattedTotalHotelNumber = isNaN(parseFloat(this.formattedTotalHotel.substring(3))) ? 0 : parseFloat(this.formattedTotalHotel.substring(3));

      // Calcular la suma total
      const sumaTotal = formattedTotalNumber + formattedTotalHotelNumber;

      const totalReserva = sumaTotal.toFixed(2);

      this.booking.total = totalReserva;

      console.log(this.booking.total);

      // Formatear la suma total como 'S/.0.00'
      return 'S/.' + sumaTotal.toFixed(2);
    },


    limitedCustomerOptions() {
      return this.customerOptions.slice(0, 6);
    }



  },
  methods: {
    capturarDatos() {
      // Imprimir la lista de proyectos en la consola
      console.log(this.projects);

      // O cualquier otra acción que desees realizar con la lista de proyectos
    },

    fetchAgencies() {
      axios.get(`${import.meta.env.VITE_API_URL}/agencies/list`, headers)
        .then(response => {
          this.originsbooking = response.data.data.map(agency => ({
            value: agency.id,
            label: agency.fullname // Asume que la agencia tiene un campo 'name' que se utilizará como etiqueta
          }));

          console.log(response);
        })
        .catch(error => {
          console.error('Error al obtener las agencias:', error);
        });
    },

    handleCommissionProcessed(response) {
      // Capturar el ID de la comisión
      const commissionId = response.data.data.id;

      // Formatear el ID como un array
      const formattedId = [commissionId];
      this.commissionIds = formattedId;

      // Hacer algo con el ID, por ejemplo, imprimir en la consola
      console.log('ID de la comisión:', this.commissionIds);
    },

    handleFormSubmitted(responseData) {
      const moneyId = responseData.data.id;

      // Formatear el ID como un array
      const formattedId = [moneyId];
      this.moneyIds = formattedId;

      // Hacer algo con el ID, por ejemplo, imprimir en la consola
      console.log('ID del ingreso amortización:', this.moneyIds);
    },

    deleteProject(index) {
      // Eliminar el proyecto del índice proporcionado
      this.projects.splice(index, 1);
      console.log(this.projects);

        if (this.projects.length === 0) {
    this.tour.totalTour = 0;
  }
    },
    deleteItem(id, index) {
      // Mostrar un cuadro de diálogo de confirmación nativo del navegador
      if (window.confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
        // El usuario ha confirmado la eliminación

        // Realizar la solicitud HTTP DELETE al backend para eliminar el elemento
        axios.delete(`${import.meta.env.VITE_API_URL}/hotelsbookings/destroy/${id}`, headers)
          .then(response => {
            // El elemento se ha eliminado correctamente en el backend
            console.log("El elemento con ID:", id, "se ha eliminado correctamente en el backend");

            this.reservasHotel.splice(index, 1); // Elimina 1 elemento en la posición 'index'

            // Una vez eliminado el elemento, mostrar un toast de éxito
            const toast = useToast();
            toast.success('Elemento eliminado con éxito', { position: 'top-right' });
          })
          .catch(error => {
            // Ocurrió un error al intentar eliminar el elemento en el backend
            console.error("Error al eliminar el elemento:", error);

            // Mostrar un toast de error
            const toast = useToast();
            toast.error('Error al eliminar el elemento', { position: 'top-right' });
          });
      } else {
        // El usuario ha cancelado la eliminación
        console.log("El usuario ha cancelado la eliminación del elemento con ID:", id);
      }
    },
    handlePostComplete(data) {
      // Obtener los datos de la reserva de hotel
      const hotelBookingData = data.data;

      // Verifica si hotelBookingData es un array
      if (Array.isArray(hotelBookingData)) {
        // Itera sobre cada elemento de hotelBookingData y agrégalo a reservasHotel
        hotelBookingData.forEach(reserva => {
          this.reservasHotel.push(reserva);
        });
      } else {
        // Si hotelBookingData no es un array, agrega el elemento único a reservasHotel
        this.reservasHotel.push(hotelBookingData);
      }

      // Actualiza los totales y los IDs de las reservas
      const totals = this.reservasHotel.map(reserva => parseFloat(reserva.total));
      const ids = this.reservasHotel.map(reserva => reserva.id);

      // Suma todos los totales de las reservas
      this.totalHotelValue = totals.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      this.idsReservesHotels = ids;

      console.log(this.idsReservesHotels);
    }

    ,
    handleAction(item) {
      if (item.name === 'edit') {
        this.openModalEdit();
      } else {
        // Maneja otros tipos de acciones aquí
      }
    },

    saveReserva() {
      // Construye el objeto de datos a enviar al backend
      const dataToSend = {
        bookingorigin_id: this.booking.originReserve,
        client_id: this.booking.clients,
        agency_id: this.idRecibied,
        arrivalplace_id: this.booking.arrivalBy,
        arrival_place: this.booking.placeArrivalReference,
        date_arrival: this.booking.dateArrival,
        time_arrival: this.booking.timeArrival,
        nro_pax: this.booking.numPassengers,
        is_reference_pax: this.booking.referenciar,
        nro_pax_childs: this.booking.numChildren,
        nro_pax_adults: this.booking.numAdults,
        nro_pax_olds: this.booking.numSeniors,
        reference_voucher: this.booking.voucherReference,
        observations: this.booking.observations,
        contact_emergency: this.booking.emergencyContact,
        telephone_emergency: this.booking.emergencyPhone,
        // reference_location: null,
        subtotal_tour: this.tour.totalTour,
        subtotal_hotel: this.totalHotelValue,
        total: this.booking.total,
        is_favorite: this.booking.isFavorite,
        is_breakfast: this.booking.includeBreakfast,
        nro_breakfast: this.booking.numBreakfasts,
        start_breakfast: this.booking.startDate,
        end_breakfast: this.booking.endDate,
        tours: this.projects.map(tour => {
          return {
            id: tour.id,
            vehicle_tour: tour.vehiculo,
            shift_tour: tour.turno,
            quantity: tour.nPasajseros,
            date_assigned: tour.date_assigned,
            observation: tour.observacion,
            is_open: tour.esAbierto,
            delegated_payment: tour.cobranza
            // is_realized: tour.realizado,
            // Agrega otros campos del tour según sea necesario
          };
        }),
        hotelsbooking_ids: this.idsReservesHotels,
        commission_ids: this.commissionIds,  // Aquí se agregan los IDs de las comisiones
        money_ids: this.moneyIds
      };

      console.log(dataToSend);

      // Realiza la solicitud HTTP POST al backend
      axios.post(`${import.meta.env.VITE_API_URL}/bookings/create-recivied`, dataToSend, {
        ...headers
      })
        .then(response => {
          const toast = useToast();

          // Maneja la respuesta del backend según sea necesario
          console.log(response.data);

          toast.success(response.data.message, { duration: 3000 });

          setTimeout(() => {
            this.$router.push('/app/wishlist');
          }, 3000);


        })
        .catch(error => {
          const toast = useToast();
          // Maneja cualquier error de la solicitud
          toast.error('Error al enviar los datos al backend', { duration: 3000 });
        });
    }
    ,
    toggleReferences() {
      this.showReferences = !this.showReferences;
    },
    openModal() {
      this.showEditModal = true; // Mostrar el modal de edición
    },

    openModalEdit() {
      this.showEdit = !this.showEdit;
    },

    openModalComisionar() {
      this.showComisionar = true;
    },

    openModalAmortizar() {
      this.idCliente = this.idCliente;
      this.totalBooking = this.booking.total;
      this.showAmortizar = true;
      console.log(this.idCliente);
    },

    handleComisionEnviada(comisionData) {
      // Recibir los datos de la comisión y mostrarlos en la consola
      console.log('Datos de la comisión recibidos en el componente padre:', comisionData);
    },

    openModalReservaHotel() {
      this.showReserveModal = true;
    },

    async fetchClients() {
      console.log("Fetching clients...");
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/clients/list`, headers);
        this.customerOptions = response.data.data.map(customer => ({
          value: customer.id,
          label: customer.fullname
        }));
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    },

    async fetchHotelsBooking() {
      console.log("Fetching HotelsBooking...");
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/clients/list`, headers);
        this.customerOptions = response.data.data.map(customer => ({
          value: customer.id,
          label: customer.fullname
        }));
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    },

    async fetchTours() {
      console.log("Fetching tours...");
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/tours/list`, headers);
        console.log(response);

        // this.projects = response.data.data;

        this.tourOptions = response.data.data.map(customer => ({
          value: customer.id,
          label: customer.description
        }));

        console.log(this.projects)
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    },


  },
  created() {
    this.store = useProjectStore();

    const id = this.$route.params.id;
    const fullname = this.$route.params.fullname;

    this.idRecibied = id;
    this.fullNameAgency = fullname;

    // Haz lo que necesites con 'id' y 'fullname' en este componente
    console.log('ID:', this.idRecibied);
    console.log('Fullname:', fullname);
  },

  mounted() {
    this.fetchClients();
    this.fetchTours();
    // this.fetchColumnsReserveHotel();
    this.fetchAgencies();
  }
};


</script>
<style lang="scss" scoped>
th {
  @apply bg-slate-50 dark:bg-slate-700 dark:text-slate-300 text-xs font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left;

  >span {
    @apply block px-6 py-5 font-semibold;
  }
}

td {
  @apply text-slate-900 dark:text-slate-300 text-sm font-normal ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left px-6 py-4;
}
</style>
