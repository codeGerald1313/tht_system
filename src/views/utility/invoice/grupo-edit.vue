<template>
  <div>
    <Card title="Actualizar Registro de grupo">
      <div>
        <!-- Elementos en la parte superior -->
        <div class="grid lg:grid-cols-5 grid-cols-1 gap-5">
          <FromGroup label="Transporte">
            <VueSelect>
              <vSelect :options="trasnportOptions" v-model="group.transport_id" placeholder="Seleccione Transporte" />
            </VueSelect>

            <span v-if="!group.transport_id" class="text-red-500">Seleccione un transporte</span>


          </FromGroup>
          <Textinput disabled v-model="group.capacity_vehicle" label="N° asientos" type="number"
            placeholder="Número de asientos" />
          <Textinput disabled v-model="group.capacity_selected" label="Seleccionados" type="number" :placeholder="''"
            class="bg-green-200 dark:bg-green-700 border-green-500 dark:border-green-600 rounded-md text-center" />
          <Textinput disabled v-model="group.capacity_available" label="Disponibles" type="number" :placeholder="''"
            class="bg-blue-200 dark:bg-blue-700 border-blue-500 dark:border-blue-600 rounded-md text-center" />
          <Textinput disabled v-model="group.capacity_exceeded" label="Excedidos" type="number" :placeholder="''"
            class="bg-red-200 dark:bg-red-700 border-red-500 dark:border-red-600 rounded-md text-center" />

        </div>

        <!-- Elementos en la parte inferior -->
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 my-6">
          <FromGroup label="Guía Turístico">
            <VueSelect>
              <vSelect :options="guiaOptions" v-model="group.guide_id" placeholder="Seleccione Guía" />
            </VueSelect>

            <span v-if="!group.guide_id" class="text-red-500">Seleccione un guía de viaje</span>

          </FromGroup>

          <FromGroup label="Fecha de partida" name="d1">
            <flat-pickr v-model="group.date_departure" class="form-control" id="d1" placeholder="Fecha de partida" />
          </FromGroup>
          <div class="flex items-center ">
            <!-- Componente Select alineado a la izquierda -->
            <Select :options="tourOptions" v-model="group.tour_id" label="Destino turístico"
              placeholder="Seleccione Tour" />
            <span v-if="!group.tour_id" class="text-red-500 ml-6">Seleccione un destino turístico</span>

            <!-- Botón con icono de X en rojo alineado a la derecha -->
            <button @click.prevent="resetSelectAndTable" class="ml-2 mt-7 p-2 btn-outline-dark border border-red-500">
              <Icon icon="heroicons-outline:x-circle" class="w-6 h-6 text-red-500" />
            </button>
          </div>

        </div>
      </div>


      <vue-good-table class="-mx-6 mt-6 mb-5" :columns="columnsTraspase"
        styleClass=" vgt-table  table-head   v-middle striped  listview" :rows="this.projects" :sort-options="{
          enabled: false,
        }">



        <template v-slot:table-row="props">

          <span v-if="props.column.field == 'abierto'">
            <div class="flex space-x-3 items-center text-left rtl:space-x-reverse">
              <Checkbox :checked="props.row.group_assigned !== null"
                @change="updateCapacitySelected(props.row)" />
            </div>
          </span>

          <span v-if="props.column.field == 'pasajero'" class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
            {{ props.row.booking_tour.booking.nro_pax }}
          </span>
          <span v-if="props.column.field == 'vehiculo'" class="block min-w-[108px]">
            <span
              :class="{ 'font-bold': true, 'text-blue-500': props.row.vehicle_tour === 1, 'text-yellow-500': props.row.vehicle_tour === 2 }"
              class="border rounded-full px-2 py-1"
              :style="{ backgroundColor: props.row.vehicle_tour === 1 ? '#90cdf4' : '#fff9db', borderColor: 'transparent' }">
              {{ props.row.vehicle_tour === 1 ? 'Compartido' : 'Privado' }}
            </span>
          </span>



          <span v-if="props.column.field == 'turno'" class="font-bold">
            <b>{{ getTurnoTexto(props.row.booking_tour.vehicle_tour) }}</b>
          </span>

          <span v-if="props.column.field == 'proforma'" class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
            {{ props.row.booking_tour.booking.reference_voucher }}

          </span>
          <span v-if="props.column.field == 'responsablecode'" class="block min-w-[208px]">
            <div class="flex flex-col">
              <div>     {{ 
        props.row.booking_tour.client?.fullname || 
        props.row.booking_tour.booking?.client?.fullname || 
        'Nombre no disponible' 
      }}</div>
              <div class="text-blue-900 dark:text-blue-300 font-bold underline cursor-pointer"
                @click.prevent="capturarValor(props.row.booking_id)">
                {{ props.row.booking_tour.booking.code }}
              </div>
            </div>
          </span>
          <span v-if="props.column.field == 'hotelubi'">
            {{ props.row.booking_tour.booking.reference_location }}
          </span>
          <span v-if="props.column.field == 'telephone'">
  <div class="flex flex-col">
    <div>
      {{
        (props.row.booking_tour.client?.telephone || props.row.booking_tour.booking?.client?.telephone) || 'Teléfono no disponible'
      }}
    </div>
    <div>
      {{
        (props.row.booking_tour.client?.cellphone || props.row.booking_tour.booking?.client?.cellphone) || 'Celular no disponible'
      }}
    </div>
  </div>
</span>


          <span v-if="props.column.field == 'observaciones'">
            <div class="font-bold">{{ props.row.observation?.toUpperCase() }}</div>
          </span>


          <span v-if="props.column.field == 'deuda'">
            S/ 0.00

          </span>


        </template>

        <template #no-data>
          <div class="text-center text-gray-500 py-4">
            <p>No hay datos disponibles en este momento.</p>
            <p>Por favor, vuelva a intentarlo más tarde.</p>
          </div>
        </template>
      </vue-good-table>

      <template v-if="!this.projects || this.projects.length === 0">
        <div class="text-red-500">Debe seleccionar el tour para cargar los pasajeros de las reservas pendientes.</div>
      </template>
      <Textarea label="Observaciones" type="text" placeholder="Observaciones" v-model="group.observations"
        class="lg:w-1/2 my-6" />
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
        <div class="lg:col-span-1"></div> <!-- Columna vacía para mantener la alineación -->
        <div class="lg:col-span-3 flex justify-end">
          <!-- Botones -->
          <Button text="Cancelar" btnClass="btn-light mr-2" link="/app/grupo" />
          <Button @click.prevent="storeGroup" text="Generar" btnClass="btn-dark" />
        </div>
      </div>
    </Card>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import FromGroup from "@/components/FromGroup";
import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import Repeater from "./module/repeater";
import Icon from "@/components/Icon";

import { useProjectStore } from "../../../store/project";
import { mapState } from 'pinia';
import Checkbox from '@/components/Checkbox';
import VueSelect from '@/components/Select/VueSelect';
import Select from '@/components/Select';
import { useAuth } from "../../../store/auth";
import { useToast } from "vue-toastification";
import axios from "axios";
import vSelect from "vue-select";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

export default {
  components: {
    Button,
    Checkbox,
    Icon,
    VueSelect,
    vSelect,
    Select,
    Card,
    Textinput,
    FromGroup,
    Textarea,
    Repeater,
    noDataTemplate: {
      template: '<div class="custom-no-data">Tu diseño personalizado aquí</div>'
    },
  },

  data() {
    return {
      currentDate: this.getCurrentDate(),
      wasChecked: false, // Indicador para verificar si el checkbox estaba marcado previamente
    isChecked: false,
      shouldWatchTourId: false, // Bandera para controlar si se debe observar el cambio de tour_id
      isChecked: false,
      trasnportOptions: [],
      tourOptions: [],
      guiaOptions: [],
      idGrupo: null,
      bookingTourIds: [],
      projects: [], // Tu objeto rows
      group: {
        user_id: null,
        tour_id: null,
        transport_id: null,
        guide_id: null,
        transport_idReal: null,
        guide_idReal: null,
        date_departure: new Date().toISOString(), // Asigna la fecha actual en formato YYYY-MM-DD
        code: '',
        correlative: null,
        capacity_vehicle: null,
        capacity_selected: null,
        viatic_assigned: null,
        is_generated: false,
        is_confirmed: false,
        observations: ''
      },

      columnsTraspase: [
        {
          label: "",
          field: "abierto",
        },

        {
          label: "N° pax",
          field: "pasajero",
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
          label: "Porforma",
          field: "proforma",
        },

        {
          label: "Responsable y Código	",
          field: "responsablecode",
        },

        {
          label: "Hotel / Ubicacion	",
          field: "hotelubi",
        },


        {
          label: "Teléfonos",
          field: "telephone",
        },

        {
          label: "Observaciones	",
          field: "observaciones",
        },

        {
          label: "Deuda	",
          field: "deuda",
        },
      ],
      shouldWatchGroupTransportId: false, // Inicialmente deshabilitado

    }
  },
  watch: {
    'group.transport_id': function (newVal, oldVal) {
      if (!this.shouldWatchGroupTransportId) {
        // Si shouldWatchGroupTransportId es falso, sal de la función sin hacer nada
        return;
      }
      // Esta función se ejecutará solo si shouldWatchGroupTransportId es verdadero
      // console.log('Nuevo valor de transport_id:', newVal.value);

      axios.get(`${import.meta.env.VITE_API_URL}/transports/record-capacity/${newVal.value}`, headers)
        .then(response => {
          // Manejar la respuesta del backend
          // console.log(response.data); // Aquí puedes ver la respuesta del backend

          this.group.capacity_vehicle = response.data.data.capacity;
          // Puedes hacer más cosas con los datos devueltos si lo necesitas

          this.group.capacity_available = this.group.capacity_vehicle - this.group.capacity_selected;

        })
        .catch(error => {
          // Manejar errores
          console.error('Error al llamar al método en el backend:', error);
        });
    },
    'group.tour_id': async function (newVal, oldVal) {
      if (!this.shouldWatchTourId) {
        // Si la bandera indica que no se debe observar el cambio de tour_id, sal de la función
        return;
      }

      // Llama al método para obtener los tours de reserva
      await this.fetchBookingTours(newVal);
    },
    '$route': {
      immediate: true,
      handler(to, from) {
        const groupId = to.params.group_id;

        this.idGrupo = groupId;
        const groupData = JSON.parse(to.query.group_data); // Convertir la cadena JSON a objeto
        // console.log('ID del grupo:', groupId);
        // console.log('Data del grupo:', groupData);

        // Establecer las propiedades del objeto group con los valores correspondientes de groupData
        if (groupData) {
          this.group.user_id = groupData.group_user_id || null;
          this.group.tour_id = groupData.group_tour_id || null;
          this.group.transport_id = groupData.transport_owner || null;
          this.group.guide_id = groupData.guide_fullname || null;

          this.group.transport_idReal = groupData.transport_id || null;
          this.group.guide_idReal = groupData.guide_id || null;
          this.group.date_departure = groupData.group_date_departure || new Date().toISOString();
          this.group.code = groupData.group_code || '';
          this.group.correlative = groupData.group_correlative || null;
          this.group.capacity_vehicle = groupData.group_capacity_vehicle || null;
          this.group.capacity_selected = groupData.group_capacity_selected || null;
          this.group.viatic_assigned = groupData.group_viatic_assigned || null;
          this.group.is_generated = groupData.group_is_generated || false;
          this.group.is_confirmed = groupData.group_is_confirmed || false;
          this.group.observations = groupData.group_observations || '';

          // console.log(this.group.observations);
        }
      }
    }


  },

  props: {
    groupId: {
      type: String,
      required: true
    }
  },
  methods: {
    async fetchTransports() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/transports/list`, headers);
        this.trasnportOptions = response.data.data.map(customer => ({
          value: customer.id,
          label: customer.owner
        }));
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    },
    async fetchBookingTours(newVal) {
      const toast = useToast();

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/bookings/booking-tours/${newVal}`, {
          ...headers,
          params: {
            date: this.currentDate
          },
        });
        if (response.data && response.data.data.length > 0) {
          toast.info('Tours Pendientes encontrados con éxito');

          // Mapear la estructura de datos
          const mappedData = response.data.data.map(item => ({
            booking_id: item.booking_id,
            observation: item.booking_observations,
            booking: {
              id: item.booking_id,
              type_booking: item.booking_type_booking,
              user_id: item.booking_user_id,
              bookingorigin_id: item.booking_bookingorigin_id,
              arrivalplace_id: item.booking_arrivalplace_id,
              client_id: item.booking_client_id,
              agency_id: item.booking_agency_id,
              origintransfer_id: item.booking_origintransfer_id,
              code: item.booking_code,
              correlative: item.booking_correlative,
              date_arrival: item.booking_date_arrival,
              time_arrival: item.booking_time_arrival,
              nro_pax: item.booking_nro_pax,
              is_reference_pax: item.booking_is_reference_pax,
              nro_pax_childs: item.booking_nro_pax_childs,
              nro_pax_adults: item.booking_nro_pax_adults,
              nro_pax_olds: item.booking_nro_pax_olds,
              reference_voucher: item.booking_reference_voucher,
              observations: item.booking_observations,
              arrival_place: item.booking_arrival_place,
              contact_emergency: item.booking_contact_emergency,
              telephone_emergency: item.booking_telephone_emergency,
              reference_location: item.booking_reference_location,
              is_igv: item.booking_is_igv,
              igv: item.booking_igv,
              is_detail_subtotaltour: item.booking_is_detail_subtotaltour,
              subtotal_tour: item.booking_subtotal_tour,
              subtotal_hotel: item.booking_subtotal_hotel,
              subtotal_flight: item.booking_subtotal_flight,
              subtotal_catalog: item.booking_subtotal_catalog,
              discount: item.booking_discount,
              total: item.booking_total,
              total_paid: item.booking_total_paid,
              total_billing: item.booking_total_billing,
              is_grouped: item.booking_is_grouped,
              description_grouped: item.booking_description_grouped,
              is_checkin: item.booking_is_checkin,
              is_checkout: item.booking_is_checkout,
              is_postponed: item.booking_is_postponed,
              user_id_postponed: item.booking_user_id_postponed,
              postponed_description: item.booking_postponed_description,
              text_amount: item.booking_text_amount,
              register_flight: item.booking_register_flight,
              is_favorite: item.booking_is_favorite,
              is_breakfast: item.booking_is_breakfast,
              nro_breakfast: item.booking_nro_breakfast,
              start_breakfast: item.booking_start_breakfast,
              end_breakfast: item.booking_end_breakfast,
              pending_tours: item.booking_pending_tours,
              origintransfer: item.booking_origintransfer,
              program_transfer: item.booking_program_transfer,
              created_at: item.booking_created_at,
              updated_at: item.booking_updated_at,
              deleted_at: item.booking_deleted_at
            },
            booking_tour: {
              id: item.booking_tour_id,
              booking_id: item.booking_tour_booking_id,
              tour_id: item.booking_tour_tour_id,
              vehicle_tour: item.booking_tour_vehicle_tour,
              shift_tour: item.booking_tour_shift_tour,
              agency_id: item.booking_tour_agency_id,
              operator_id: item.booking_tour_operator_id,
              transfer_id: item.booking_tour_transfer_id,
              bookingtransfer_id: item.booking_tour_bookingtransfer_id,
              quantity: item.booking_tour_quantity,
              assigned_payment: item.booking_tour_assigned_payment,
              delegated_payment: item.booking_tour_delegated_payment,
              date_assigned: item.booking_tour_date_assigned,
              observation: item.booking_tour_observation,
              is_received: item.booking_tour_is_received,
              is_transfer: item.booking_tour_is_transfer,
              is_realized: item.booking_tour_is_realized,
              status_realized: item.booking_tour_status_realized,
              date_realized: item.booking_tour_date_realized,
              is_paid: item.booking_tour_is_paid,
              is_open: item.booking_tour_is_open,
              is_canceled: item.booking_tour_is_canceled,
              created_at: item.booking_tour_created_at,
              updated_at: item.booking_tour_updated_at,
              client: {
                id: item.client_id,
                typedocument_id: item.client_typedocument_id,
                type_client: item.client_type_client,
                fullname: item.client_fullname,
                document: item.client_document,
                typeDocument: item.client_typeDocument,
                tradename: item.client_tradename,
                address: item.client_address,
                email: item.client_email,
                telephone: item.client_telephone,
                cellphone: item.clientcellphone,
                date_birthday: item.client_date_birthday,
                sex: item.client_sex,
                status: item.client_status,
                url_image: item.client_url_image,
                created_at: item.client_created_at,
                updated_at: item.client_updated_at,
                deleted_at: item.client_deleted_at,
                urlImageBase: item.client_urlImageBase,
                typeDocumentCode: item.client_typeDocumentCode,
                department_id: item.client_department_id,
                province_id: item.client_province_id,
                district_id: item.client_district_id
              },
              booking: {
                id: item.booking_id,
                type_booking: item.booking_type_booking,
                user_id: item.booking_user_id,
                bookingorigin_id: item.booking_bookingorigin_id,
                arrivalplace_id: item.booking_arrivalplace_id,
                client_id: item.booking_client_id,
                agency_id: item.booking_agency_id,
                origintransfer_id: item.booking_origintransfer_id,
                code: item.booking_code,
                correlative: item.booking_correlative,
                date_arrival: item.booking_date_arrival,
                time_arrival: item.booking_time_arrival,
                nro_pax: item.booking_nro_pax,
                is_reference_pax: item.booking_is_reference_pax,
                nro_pax_childs: item.booking_nro_pax_childs,
                nro_pax_adults: item.booking_nro_pax_adults,
                nro_pax_olds: item.booking_nro_pax_olds,
                reference_voucher: item.booking_reference_voucher,
                observations: item.booking_observations,
                arrival_place: item.booking_arrival_place,
                contact_emergency: item.booking_contact_emergency,
                telephone_emergency: item.booking_telephone_emergency,
                reference_location: item.booking_reference_location,
                is_igv: item.booking_is_igv,
                igv: item.booking_igv,
                is_detail_subtotaltour: item.booking_is_detail_subtotaltour,
                subtotal_tour: item.booking_subtotal_tour,
                subtotal_hotel: item.booking_subtotal_hotel,
                subtotal_flight: item.booking_subtotal_flight,
                subtotal_catalog: item.booking_subtotal_catalog,
                discount: item.booking_discount,
                total: item.booking_total,
                total_paid: item.booking_total_paid,
                total_billing: item.booking_total_billing,
                is_grouped: item.booking_is_grouped,
                description_grouped: item.booking_description_grouped,
                is_checkin: item.booking_is_checkin,
                is_checkout: item.booking_is_checkout,
                is_postponed: item.booking_is_postponed,
                user_id_postponed: item.booking_user_id_postponed,
                postponed_description: item.booking_postponed_description,
                text_amount: item.booking_text_amount,
                register_flight: item.booking_register_flight,
                is_favorite: item.booking_is_favorite,
                is_breakfast: item.booking_is_breakfast,
                nro_breakfast: item.booking_nro_breakfast,
                start_breakfast: item.booking_start_breakfast,
                end_breakfast: item.booking_end_breakfast,
                pending_tours: item.booking_pending_tours,
                origintransfer: item.booking_origintransfer,
                program_transfer: item.booking_program_transfer,
                created_at: item.booking_created_at,
                updated_at: item.booking_updated_at,
                deleted_at: item.booking_deleted_at
              },
            },
            tour_id: item.tour_id,
            tour: {
              id: item.tour_id,
              tourismcitie_id: item.tour_tourismcitie_id,
              shift: item.tour_shift,
              description: item.tour_description,
              comment: item.tour_comment,
              price_public: item.tour_price_public,
              price_corporate: item.tour_price_corporate,
              price_utility: item.tour_price_utility,
              created_at: item.tour_created_at,
              updated_at: item.tour_updated_at,
              deleted_at: item.tour_deleted_at,
              shiftour: item.tour_shiftour
            },
            client_id: item.client_id,
            client: {
              id: item.client_id,
              typedocument_id: item.client_typedocument_id,
              type_client: item.client_type_client,
              fullname: item.client_fullname,
              document: item.client_document,
              typeDocument: item.client_typeDocument,
              tradename: item.client_tradename,
              address: item.client_address,
              email: item.client_email,
              telephone: item.client_telephone,
              cellphone: item.clientcellphone,
              date_birthday: item.client_date_birthday,
              sex: item.client_sex,
              status: item.client_status,
              url_image: item.client_url_image,
              created_at: item.client_created_at,
              updated_at: item.client_updated_at,
              deleted_at: item.client_deleted_at,
              urlImageBase: item.client_urlImageBase,
              typeDocumentCode: item.client_typeDocumentCode,
              department_id: item.client_department_id,
              province_id: item.client_province_id,
              district_id: item.client_district_id
            }
          }));

          this.projects = mappedData;
          // this.bookingTourIds = this.projects.map(project => project.booking_tour.id);


          // console.log("Gaaaaaaaaaaa", this.bookingTourIds);
        } else {
          toast.info('Este Tour no tiene Reservas Pendientes');
          this.projects = [];
        }
      } catch (error) {
        toast.error('Error al cargar las reservas pendientes para este tour o Este Tour no tiene Reservas Pendientes');
        console.error('Error al llamar al método en el backend:', error);
        this.projects = [];
      }
    },
    resetSelectAndTable() {
      // Restablece el valor del Select a null
      this.group.tour_id = null;

      // Restablece los datos de la tabla a un array vacío
      this.projects = [];

      // Restablece los valores de capacidad a cero (o cualquier otro valor predeterminado)
      this.group.capacity_selected = 0;
      this.group.capacity_available = 0;
      this.group.capacity_exceeded = 0;

      this.shouldWatchTourId = false;
      // Vuelve a activar el watch de group.tour_id después de un breve retraso
      setTimeout(() => {
        this.shouldWatchTourId = true;
      }, 100);
    },


    capturarValor(reservaId) {
      // console.log("Valor capturado:", reservaId);
      this.$router.push({ name: 'reserve-preview', params: { id: reservaId } });
    },
    updateCapacitySelected(row) {
      // console.log(row);
      const bookingId = row.booking_tour.id;

      // Variable booleana para verificar si el checkbox está marcado
      const isChecked = row.booking_tour.group_assigned !== null;

      // Variable booleana para verificar si group_assigned tiene un valor
      const hasGroupAssigned = row.booking_tour.group_assigned !== null;


      // console.log("Ga1",bookingId);
      // console.log("Ga2",hasGroupAssigned);


      if (isChecked && hasGroupAssigned) {
        // Si está marcado y group_assigned tiene un valor, se resta
        this.group.capacity_selected -= row.booking_tour.booking.nro_pax;
        const index = this.bookingTourIds.indexOf(bookingId);
        if (index !== -1) {
          this.bookingTourIds.splice(index, 1);
        }
      } else if (!isChecked && row.booking_tour.group_assigned === null) {
        // Si está desmarcado y group_assigned es null, se suma
        this.group.capacity_selected += row.booking_tour.booking.nro_pax;
        if (!this.bookingTourIds.includes(bookingId)) {
          this.bookingTourIds.push(bookingId);
        }
      }

      // console.log(this.bookingTourIds);

      // Calcular la cantidad disponible restando la capacidad total del vehículo menos la cantidad seleccionada
      this.group.capacity_available = this.group.capacity_vehicle - this.group.capacity_selected;
    },




    getCurrentDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },

    async storeGroup() {
      const toast = useToast();

      // console.log(this.bookingTourIds);
      // console.log(this.group.transport_id);

      try {
        const data = {
          tour_id: this.group.tour_id,
          transport_id: this.group.transport_idReal,
          guide_id: this.group.guide_idReal,
          date_departure: this.group.date_departure,
          capacity_vehicle: this.group.capacity_vehicle,
          capacity_selected: this.group.capacity_selected,
          is_generated: this.group.is_generated,
          is_confirmed: this.group.is_confirmed,
          observations: this.group.observations,
          bookings: this.bookingTourIds // IDs de las reservas que deseas asignar al grupo
        };

        // console.log(data);


        const response = await axios.post(`${import.meta.env.VITE_API_URL}/groups/edit/${this.idGrupo}`, data, headers);



        const groupId = response.data.data.id; // Captura el ID del grupo de la respuesta del backend
        // Muestra un mensaje de éxito
        toast.success('El grupo se creó exitosamente', {
          position: 'top-right',
          timeout: 2000 // Duración del mensaje en milisegundos
        });

        // Redirige al usuario a otra vista con el ID del grupo
        setTimeout(() => {
          this.$router.push({ name: 'grupo-preview', params: { group_id: groupId } });
        }, 3000);


        // console.log(response.data); // Puedes manejar la respuesta del backend aquí si lo deseas
        // Si el grupo se creó con éxito, puedes redirigir al usuario a otra página o realizar alguna acción adicional.
      } catch (error) {
        console.error('Error al almacenar el grupo:', error);
        // Puedes manejar los errores aquí, por ejemplo, mostrar un mensaje al usuario
      }
    },



    getTurnoTexto(shift_tour) {
      switch (shift_tour) {
        case 1:
          return 'Full Day';
        case 2:
          return 'Mañana';
        case 3:
          return 'Tarde';
        case 4:
          return 'Noche';
        default:
          return '';
      }
    },

    async fethById() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/groups/record-formated/${this.idGrupo}`, headers);

        this.projects = response.data.data.group.bookings;

        // Filtrar solo los proyectos que tienen un valor en group_assigned y mapear los IDs
        this.bookingTourIds = this.projects
          .filter(project => project.booking_tour && project.booking_tour.group_assigned !== null)
          .map(project => project.id);

        // console.log("Ids Ga", this.projects );

      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    },





    async fetchGuides() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/guides/list`, headers);
        this.guiaOptions = response.data.data.map(customer => ({
          value: customer.id,
          label: customer.fullname
        }));
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    },

    async fetchTours() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/tours/list`, headers);
        this.tourOptions = response.data.data.map(customer => ({
          value: customer.id,
          label: customer.description
        }));
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    }
  },
  mounted() {
    this.group.capacity_available = this.group.capacity_vehicle - this.group.capacity_selected;


    // Después de cargar la aplicación, cambia shouldWatchTourId a true
    this.shouldWatchGroupTransportId = true;
  },
  created() {
    this.store = useProjectStore();
    this.fetchTransports();
    this.fetchGuides();
    this.fetchTours();
    this.fethById();
  }
};
</script>
<style lang=""></style>
