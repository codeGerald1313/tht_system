<template>
  <div>
    <Card title="Registrar grupo">
      <div>
        <!-- Elementos en la parte superior -->
        <div class="grid lg:grid-cols-5 grid-cols-1 gap-5">
          <FromGroup label="Transporte">
            <VueSelect>
              <vSelect :options="trasnportOptions" v-model="group.transport_id" />
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
        styleClass=" vgt-table  table-head   v-middle striped  listview" :no-data-template="noDataTemplate"
        :rows="this.projects" :sort-options="{
          enabled: false,
        }">



        <template v-slot:table-row="props">

          <span v-if="props.column.field == 'abierto'">
            <div class="flex space-x-3 items-center text-left rtl:space-x-reverse">
              <Checkbox v-model="props.row.booking_is_grouped" @change="updateCapacitySelected(props.row)" />

            </div>
          </span>

          <span v-if="props.column.field == 'pasajero'" class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
            {{ props.row.booking_nro_pax }}
          </span>
          <span v-if="props.column.field == 'vehiculo'" class="block min-w-[108px]">
            <span
              :class="{ 'font-bold': true, 'text-blue-500': props.row.booking_tour_vehicle_tour === 1, 'text-yellow-500': props.row.booking_tour_vehicle_tour === 2 }"
              class="border rounded-full px-2 py-1"
              :style="{ backgroundColor: props.row.booking_tour_vehicle_tour === 1 ? '#90cdf4' : '#fff9db', borderColor: 'transparent' }">
              {{ props.row.booking_tour_vehicle_tour === 1 ? 'Compartido' : 'Privado' }}
            </span>
          </span>



          <span v-if="props.column.field == 'turno'" class="font-bold">
            <b>{{ getTurnoTexto(props.row.booking_tour_shift_tour) }}</b>
          </span>

          <span v-if="props.column.field == 'proforma'" class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
            {{ props.row.booking_reference_voucher }}

          </span>
          <span v-if="props.column.field == 'responsablecode'" class="block min-w-[208px]">
            <div class="flex flex-col">
              <div>{{ props.row.client_fullname }}</div>
              <div class="text-blue-900 dark:text-blue-300 font-bold underline cursor-pointer"
                @click.prevent="capturarValor(props.row.booking_id)">
                {{ props.row.booking_code }}
              </div>
            </div>
          </span>

          <span v-if="props.column.field == 'hotelubi'">
            <!-- Verificar si hay información disponible para el hotel -->
            <div>
              <!-- Mostrar los detalles del hotel -->
              <div>{{ props.row.booking_reference_location }}</div>

            </div>

          </span>
          <span v-if="props.column.field == 'telephone'">
            <div class="flex flex-col">
              <div>{{ props.row.client_telephone }}</div>
              <div>{{ props.row.client_cellphone }}</div>
            </div>

          </span>

          <span v-if="props.column.field == 'observaciones'" class=" uppercase">
            <!-- Verificar si hay información del tour -->
            <template v-if="hasTourInformation(props.row)">
              <!-- Iterar sobre la lista de tours y encontrar el tour correspondiente al group_tour_id -->
              <template v-for="tour in props.row.tours">
                <template v-if="tour.id === groupTourIdFromPivot(props.row)">
                  <!-- Mostrar la observación del tour si está presente -->
                  <template v-if="tour.pivot.observation">
                    {{ tour.pivot.observation }}
                  </template>
                  <!-- Mostrar mensaje si no hay observación disponible para el tour -->
                  <template v-else>
                    - No hay información disponible
                  </template>
                </template>
              </template>
            </template>
            <!-- Mostrar mensaje si no hay información de tours -->
            <template v-else>
              - No hay información disponible
            </template>
          </span>
          <span v-if="props.column.field === 'deuda'" style="color: red; font-weight: bold;">
            {{ props.row.deuda }}

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
    vSelect,
    Icon,
    VueSelect,
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
      shouldWatchTourId: true, // Bandera para controlar si se debe observar el cambio de tour_id
      isChecked: false,
      trasnportOptions: [],
      tourOptions: [],
      currentDate: this.getCurrentDate(),
      guiaOptions: [],
      bookingTourIds: [],
      projects: [], // Tu objeto rows
      group: {
        user_id: null,
        tour_id: null,
        transport_id: null,
        guide_id: null,
        date_departure: this.getCurrentDate(), // Asigna la fecha actual en formato YYYY-MM-DD
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

    }
  },
  watch: {
    'group.transport_id': function (newVal, oldVal) {
      // Esta función se ejecutará cada vez que haya un cambio en group.transport_id
      // console.log('Nuevo valor de transport_id:', newVal);

      axios.get(`${import.meta.env.VITE_API_URL}/transports/record-capacity/${newVal.value}`, headers)
        .then(response => {
          // Manejar la respuesta del backend
          // console.log(response.data); // Aquí puedes ver la respuesta del backend

          this.group.capacity_vehicle = response.data.data.capacity;
          // Puedes hacer más cosas con los datos devueltos si lo necesitas
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

        // console.log(this.trasnportOptions);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    },
    hasHotelInfo(row) {
      return (
        row.hotel_tradename ||
        row.hotel_document ||
        row.hotel_address
      );
    },
    getCurrentDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    async fetchBookingTours(newVal) {
      const toast = useToast();

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/bookings/booking-tours/${newVal}`, {
          ...headers,
          params: {
            date: this.group.date_departure
          },
        });
        if (response.data && response.data.data && response.data.data.length > 0) {
          this.projects = response.data.data;
          // this.bookingTourIds = this.projects.map(project => project.booking_tour_id);
          toast.info('Tours Pendientes encontrados con éxito');

          // console.log(this.bookingTourIds);
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

    hasTourInformation(row) {
      return row.tours && Array.isArray(row.tours) && row.tours.length > 0;
    },
    // Método para obtener el group_tour_id desde el pivot de la fila actual
    groupTourIdFromPivot(row) {
      if (row.tours && Array.isArray(row.tours) && row.tours.length > 0) {
        const tour = row.tours.find(tour => tour.id === row.booking_tour_tour_id);
        return tour ? tour.id : null;
      }
      return null;
    },

    capturarValor(reservaId) {
      // console.log("Valor capturado:", reservaId);
      this.$router.push({ name: 'reserve-preview', params: { id: reservaId } });
    },
    updateCapacitySelected(row) {
      // console.log(row);

      if (row.booking_is_grouped) {
        // Si está marcado, añadir el valor de nro_pax y el booking_id al array
        this.group.capacity_selected += row.booking_nro_pax;
        this.bookingTourIds.push(row.booking_tour_id);

        // console.log(this.bookingTourIds);
      } else {
        // Si está desmarcado, restar el valor de nro_pax y eliminar el booking_id del array
        this.group.capacity_selected -= row.booking_nro_pax;
        const index = this.bookingTourIds.indexOf(row.booking_tour_id);
        if (index !== -1) {
          this.bookingTourIds.splice(index, 1);
        }
        // console.log(this.bookingTourIds);

      }

      // Calcular la cantidad disponible restando la capacidad total del vehículo menos la cantidad seleccionada
      this.group.capacity_available = this.group.capacity_vehicle - this.group.capacity_selected;
    },


    async storeGroup() {
      const toast = useToast();

      try {
        const data = {
          tour_id: this.group.tour_id,
          transport_id: this.group.transport_id.value,
          guide_id: this.group.guide_id.value,
          date_departure: this.group.date_departure,
          capacity_vehicle: this.group.capacity_vehicle,
          observations: this.group.observations,
          capacity_selected: this.group.capacity_selected,
          is_generated: this.group.is_generated,
          is_confirmed: this.group.is_confirmed,
          bookings: this.bookingTourIds // IDs de las reservas que deseas asignar al grupo
        };

        // console.log(data);
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/groups/create`, data, headers);



        const groupId = response.data.data.id; // Captura el ID del grupo de la respuesta del backend
        // console.log(groupId);
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


  created() {
    this.store = useProjectStore();
    this.fetchTransports();
    this.fetchGuides();
    this.fetchTours();

    // console.log(this.currentDate);
  }
};
</script>
<style lang=""></style>
