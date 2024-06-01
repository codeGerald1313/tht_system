<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-3xl font-bold mb-4">Cronograma de salidas</h1>
    <div class="flex flex-col justify-center items-center w-full mt-4">
      <span class="mb-2">Seleccionar fecha</span>
      <div class="flex items-center" prependIcon="heroicons-outline:search"> <!-- Envoltura del componente -->


        <Button icon="heroicons-outline:calendar-days"
          btnClass=" btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm mr-3"
          iconClass="text-lg" />
        <flat-pickr class="form-control " id="date_birthday" placeholder="yyyy, dd M" :config="{
          altInput: true,
          altFormat: 'F j, Y',
          dateFormat: 'Y-m-d',
        }" v-model="dateValue2" />

        <div class="ml-3">
          <Button icon="heroicons-outline:arrows-up-down"
            btnClass="btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm "
            iconClass="text-lg" @click="recargarDatos" />

        </div>

      </div>
    </div>
  </div>

  <!-- Diseño de estadísticas -->
  <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 mt-8">
    <div v-for="(item, i) in statistics" :key="i" :class="item.bg"
      class="rounded-md p-4 bg-opacity-25 dark:bg-opacity-25 relative z-10 cursor-pointer" @click="openModal(item.id)">

      <span class="block mb-6 text-sm text-slate-900 dark:text-white font-bold">{{ item.title }}</span>
      <span class="block mb- text-2xl text-purple-600 dark:text-purple-300 font-bold mb-6">{{ item.count }}</span>
      <div class="flex space-x-2 rtl:space-x-reverse">
        <div class="flex-none text-4xl text-purple-600 dark:text-purple-300">
          <Icon :icon="item.icon" class="text-purple-600 dark:text-purple-300" />
        </div>
        <div class="flex-1">
          <span
            class="block mb-[2px] bg-blue-200 dark:bg-blue-300 bg-opacity-25 dark:bg-opacity-50 border-dotted border-blue-500 border rounded-full py-1 px-3 text-blue-600 dark:text-blue-300">{{
              item.percent }} Compartidos</span>
          <span
            class="block mb-[2px] bg-yellow-200 dark:bg-yellow-300 bg-opacity-25 dark:bg-opacity-50 border-dotted border-yellow-500 border rounded-full py-1 px-3 text-yellow-600 dark:text-yellow-300">{{
              item.private }} Privado</span>
          <span class="block mb-1 text-slate-600 dark:text-slate-300">Click para ver detalles</span>
        </div>
      </div>
    </div>
  </div>


  <!-- Diseño de cartas -->
  <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6">
    <div @click="openModalDos">
      <Card bodyClass="p-0" v-for="(item, i) in cards" :key="i" noborder>
        <header class="border-b px-4 pt-4 pb-3 flex items-center" :class="item.border">
          <span class="text-3xl inline-block ltr:mr-2 rtl:ml-2" :class="item.color">
            <Icon :icon="item.icon" />
          </span>
          <h6 class="card-title mb-0" :class="item.color">{{ item.title }}</h6>
        </header>
        <div class="py-3 px-5">
          {{ formattedTours }}
        </div>
      </Card>
    </div>

    <Modal :title="modalTitle" label="Modal title" :activeModal="show" @close="show = false" sizeClass="max-w-7xl">
      <vue-good-table :columns="columnsTraspase" styleClass=" vgt-table  table-head   v-middle striped  listview"
        :rows="projects" :pagination-options="{
          enabled: false,

        }" :sort-options="{
          enabled: false,
        }">



        <template v-slot:table-row="props">

          <span v-if="props.column.field == 'pasajero'">
            {{ props.row.booking_nro_pax }}

          </span>

          <span v-if="props.column.field == 'vehiculo'"
            :class="{ 'text-yellow-500': props.row.booking_tour_vehicle_tour === 2, 'text-blue-500': props.row.booking_tour_vehicle_tour === 1 }">
            {{ props.row.booking_tour_vehicle_tour === 2 ? 'Privado' : 'Compartido' }}
          </span>


          <span v-if="props.column.field == 'turno'" style="font-weight: bold;">
            {{ props.row.booking_tour_shift_tour === 1 ? 'Full Day' : props.row.booking_tour_shift_tour === 2 ? 'Mañana'
              : props.row.booking_tour_shift_tour === 3 ? 'Tarde' :
                'Noche' }}
          </span>




          <span v-if="props.column.field == 'proforma'" class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
            {{ props.row.booking_reference_voucher }}

          </span>
          <span v-if="props.column.field == 'responsablecode'" class="flex flex-col items-center">
            <span> {{ props.row.client_fullname }}</span>
            <router-link :to="'reserve-preview/' + props.row.booking_id">
              <Button btnClass="btn-dark btn-sm">{{ props.row.booking_code }}</Button>
            </router-link>
          </span>

          <span v-if="props.column.field == 'hotelubi'">
            <!-- Verificar si hay información disponible para el hotel -->
            <div>
              <!-- Mostrar los detalles del hotel -->
              <div>{{ props.row.booking_reference_location }}</div>

            </div>

          </span>

          <span v-if="props.column.field == 'telephone'">
            <strong>Cliente C:</strong> {{ props.row.client_cellphone }}

  <template v-if="props.row.booking_telephone_emergency">
    <strong>Teléfono E:</strong> {{ props.row.booking_telephone_emergency }}
    <br>
  </template>
  <template v-else-if="props.row.booking_contact_emergency">
    <strong>Contacto E:</strong> {{ props.row.booking_contact_emergency }}
    <br>
  </template>
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

      </vue-good-table>
    </Modal>


    <Modal :title="`RESERVAS ABIERTAS (Pendientes de asignar fechas)`" label="Modal title" :activeModal="show2"
      @close="show2 = false" sizeClass="max-w-6xl">

      <vue-good-table :columns="columnsPendenting" styleClass=" vgt-table  table-head   v-middle striped  listview"
        :rows="projectsOpen" :pagination-options="{
          enabled: false,
        }" :sort-options="{
          enabled: false,
        }">



        <template v-slot:table-row="props">

          <span v-if="props.column.field == 'tourp'">
            {{ props.row.tour_description }}

          </span>

          <span v-if="props.column.field == 'pasajerop'">
            {{ props.row.booking_nro_pax }}


          </span>



          <span v-if="props.column.field == 'proformap'" class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
            {{ props.row.booking_reference_voucher }}


          </span>
          <span v-if="props.column.field == 'responsablecodep'" class="flex flex-col items-center">
            <span> {{ props.row.client_fullname }}</span>
            <router-link :to="'reserve-preview/' + props.row.booking_id">
              <Button btnClass="btn-dark btn-sm">{{ props.row.booking_code }}</Button>
            </router-link>
          </span>


          <span v-if="props.column.field == 'hotelubip'">
            <!-- Verificar si hay información disponible para el hotel -->
            <div>
              <!-- Mostrar los detalles del hotel -->
              <div>{{ props.row.booking_reference_location }}</div>

            </div>

          </span>

          <span v-if="props.column.field == 'telephonep'">
            {{ props.row.client_cellphone }}

          </span>

          <span v-if="props.column.field == 'observacionesp'" class=" uppercase">
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


          <span v-if="props.column.field == 'deudap'">
            {{ props.row.deuda }}

          </span>


        </template>

      </vue-good-table>
    </Modal>

  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Card from "@/components/Card";

import dayjs from "dayjs";
import statisticsImg1 from "@/assets/images/all-img/shade-1.png";
import statisticsImg2 from "@/assets/images/all-img/shade-2.png";
import statisticsImg3 from "@/assets/images/all-img/shade-3.png";
import statisticsImg4 from "@/assets/images/all-img/shade-4.png";
import Modal from '@/components/Modal';
const dateValue22222 = ref(null);
const calendarIcon = "heroicons-solid:calendar"; // Icono de calendario
import { useProjectStore } from "../../../store/project";
import { useAuth } from '../../../store/auth';
import axios from 'axios';
import { useToast } from 'vue-toastification';


const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

const store = useProjectStore();
const dateValue2 = ref(obtenerFechaActual()); // Inicializar dateValue2 con la fecha actual

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const monthIndex = now.getMonth(); // Obtener el índice del mes (0-11)
  const day = String(now.getDate()).padStart(2, '0');

  // Nombres de los meses en español para formato peruano
  const monthNames = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  // Obtener el nombre del mes correspondiente
  const monthName = monthNames[monthIndex];

  return `${day} de ${monthName} de ${year}`;
}

function obtenerFechaActual() {
  const fecha = new Date();
  fecha.setHours(fecha.getHours() - 5); // Ajusta la hora para el huso horario de Perú (UTC-5)
  return fecha.toISOString().slice(0, 10);
}


const projects = ref([]);

const projectsOpen = ref([]);

const hasHotelInfo = (row) => {
  return (
    row.hotel_tradename ||
    row.hotel_document ||
    row.hotel_address
  );
};


onMounted(() => {
  const currentDate = dayjs().format('YYYY-MM-DD'); // Formato de fecha para América Latina
  dateValue22222.value = currentDate;
});

const dateFormatter = {
  date: 'YYYY-MM-DD' // Formato de fecha para el componente
};


const formattedTours = computed(() => {
  return tours_open.value.map(tour => `${tour.description} (${tour.total} pax)`).join(', ');
});



const columnsTraspase = [
  { label: "N° pax", field: "pasajero" },
  { label: "Vehículo", field: "vehiculo" },
  { label: "Turno", field: "turno" },
  { label: "Responsable y Código", field: "responsablecode" },
  { label: "Porforma", field: "proforma" },
  { label: "Hotel / Ubicacion", field: "hotelubi" },
  { label: "Teléfonos", field: "telephone" },
  { label: "Observaciones", field: "observaciones" },
  { label: "Deuda", field: "deuda" }
];
const tours_open = ref([]);

const getMonthName = (monthIndex) => {
  const monthNames = [
    'ene', 'feb', 'mar', 'abr', 'may', 'jun',
    'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
  ];
  return monthNames[monthIndex];
};
const columnsPendenting = [
  { label: "Nombre de Tours", field: "tourp" },
  { label: "N° pax", field: "pasajerop" },
  { label: "Proforma", field: "proformap" },
  { label: "Responsable y Código", field: "responsablecodep" },
  { label: "Hotel / Ubicacion", field: "hotelubip" },
  { label: "Teléfonos", field: "telephonep" },
  { label: "Observaciones", field: "observacionesp" },
  { label: "Deuda", field: "deudap" }
];

const handleDateChange = (newValue) => {
  // console.log('Nuevo valor del calendario:', newValue);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const monthIndex = date.getMonth() + 1; // Sumar 1 para obtener el mes correcto
  const day = String(date.getDate()).padStart(2, '0');

  // Nombres de los meses en español para formato peruano
  const monthNames = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  // Obtener el nombre del mes correspondiente
  const monthName = monthNames[monthIndex - 1]; // Restar 1 para acceder al índice correcto

  return `${day} de ${monthName} de ${year}`;
};
const show = ref(false);
const show2 = ref(false);

const openModal = async (id) => {
  show.value = !show.value;

  const toast = useToast();

  // console.log(dateValue22222.value);
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/bookings/booking-tours/${id}`,
      {
        ...headers, // Asegúrate de definir 'headers' según sea necesario
        params: {
          date: dateValue22222.value, // Pasar el parámetro 'date' como parte de la solicitud
        },
      }
    );

    if (response.data && response.data.data && response.data.data.length > 0) {
      projects.value = response.data.data;

      // Inicializar la suma de pasajeros
      let totalPassengers = 0;

      // Iterar sobre cada proyecto y sumar los pasajeros
      projects.value.forEach(project => {
        totalPassengers += project.booking_nro_pax;
      });

      const { tour_description, booking_tour_date_assigned } = projects.value[0];
      const formattedDate = booking_tour_date_assigned;

      // Utilizar la suma total de pasajeros en el título del modal
      modalTitle.value = `Datos de salida | ${tour_description} (${formattedDate}) ${totalPassengers} PASAJEROS`;

      toast.info('Tours Pendientes encontrados con éxito');

      // console.log(response);
    } else {
      toast.info('Este Tour no tiene Reservas Pendientes');
      this.projects = [];
    }

  } catch (error) {
    toast.error('Error al cargar las reservas pendientes para este tour o Este Tour no tiene Reservas Pendientes');
    console.error('Error al llamar al método en el backend:', error);
    this.projects = [];
  }

  // console.log('ID del registro:', id);
};

const modalTitle = ref('');

const openModalDos = async () => {
  show2.value = !show2.value;


  const toast = useToast();

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/bookings/booking-tours-open`,
      {
        ...headers, // Asegúrate de definir 'headers' según sea necesario
        params: {
          date: dateValue22222.value, // Pasar el parámetro 'date' como parte de la solicitud
        },
      }
    );
    if (response.data && response.data.data && response.data.data.length > 0) {

      projectsOpen.value = response.data.data;



      toast.info('Tours Pendientes encontrados con éxito');

      // console.log(projectsOpen.value);
    } else {
      toast.info('Este Tour no tiene Reservas Pendientes');
      this.projects = [];
    }
  } catch (error) {
    toast.error('Error al cargar las reservas pendientes para este tour o Este Tour no tiene Reservas Pendientes');
    console.error('Error al llamar al método en el backend:', error);
    this.projects = [];
  }


  // console.log("gaa");
};


const recargarDatos = () => {
  fetchData(); // Llama a fetchData con el valor de dateValue22222
};

const statistics = ref([]);

const fetchData = () => {
  axios.get(`${import.meta.env.VITE_API_URL}/bookings/cronograma/${dateValue22222.value}`, headers)
    .then(response => {
      const results = response.data.results;
      tours_open.value = response.data.tours_open;

      // Verificar si hay datos en results y tours_open
      if (results && results.length > 0) {
        // Si hay datos en results y tours_open, asignar los valores a statistics.value
        statistics.value = results.map((item, index) => ({
          id: item.id,
          title: `${item.description}`,
          count: `${item.total} PASAJEROS`,
          bg: getBgColor(index),
          text: '',
          percent: item.vehicle_shared,
          private: item.vehicle_private,
          icon: getIcon(item.vehicle_shared),
          percentClass: 'text-slate-500 dark:text-slate-400 font-bold',
        }));


        // Mostrar un toast informativo sobre tours abiertos encontrados
        const toastToursOpen = useToast();
        toastToursOpen.success('Tours normales y abiertos encontrados para este día');
      } else {
        const toast = useToast();


        // Mostrar un toast informativo si no hay datos disponibles o tours abiertos
        if (!results || results.length === 0) {
          toast.info('Para este día no hay salidas programadas');
          statistics.value = [];
        }

      }

    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};


// Define la función `hasTourInformation` que acepta un parámetro `row`
const hasTourInformation = (row) => {
  return row.tours && Array.isArray(row.tours) && row.tours.length > 0;
};

// Define la función `groupTourIdFromPivot` que acepta un parámetro `row`
const groupTourIdFromPivot = (row) => {
  if (row.tours && Array.isArray(row.tours) && row.tours.length > 0) {
    const tour = row.tours.find(tour => tour.id === row.tour_id);
    return tour ? tour.id : null;
  }
  return null;
};

const getBgColor = (index) => {
  // Define una lista de colores de fondo
  const bgColors = [
    'bg-yellow-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-red-500',
    'bg-teal-500',
    'bg-pink-500',
    'bg-orange-500',
    'bg-indigo-500',
    'bg-cyan-500',
    'bg-amber-500',
    'bg-lime-500',
    'bg-emerald-500',
    'bg-violet-500',
    'bg-fuchsia-500',
    'bg-rose-500',

  ];
  // Elige un color de fondo aleatorio
  const randomColorIndex = Math.floor(Math.random() * bgColors.length);
  return bgColors[randomColorIndex];
};


const getIcon = (vehicleShared) => {
  // Define la lógica para elegir el icono basado en el número de pasajeros compartidos
  if (vehicleShared > 0) {
    return 'heroicons:users';
  } else {
    return 'heroicons:user';
  }
};

const getPercentText = (vehicleShared) => {
  // Define la lógica para el texto de "Compartido" o "Privado" basado en el número de pasajeros compartidos
  if (vehicleShared > 0) {
    return `${vehicleShared} Compartido${vehicleShared > 1 ? 's' : ''}`;
  } else {
    return 'Privado';
  }
};

const cards = [
  {
    title: "Reservas Abiertas(Pendientes de asignar fecha)",
    border: "border-info-500",
    color: "text-info-500",
    icon: "heroicons-outline:information-circle",
  },
];

watch(dateValue2, async (newValue) => {
  // console.log('Nuevo valor del calendario:', newValue);

  dateValue22222.value = newValue;
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/bookings/cronograma/${newValue}`, headers);

    const results = response.data.results;
    tours_open.value = response.data.tours_open;

    // Verificar si hay datos en results y tours_open
    if (results && results.length > 0) {
      // Si hay datos en results y tours_open, asignar los valores a statistics.value
      statistics.value = results.map((item, index) => ({
        id: item.id,
        title: `${item.description}`,
        count: `${item.total} PASAJEROS`,
        bg: getBgColor(index),
        text: '',
        percent: item.vehicle_shared,
        private: item.vehicle_private,
        icon: getIcon(item.vehicle_shared),
        percentClass: 'text-slate-500 dark:text-slate-400 font-bold',
      }));


      // Mostrar un toast informativo sobre tours abiertos encontrados
      const toastToursOpen = useToast();
      toastToursOpen.success('Tours normales y abiertos encontrados para este día');
    } else {
      // Mostrar un toast informativo si no hay datos disponibles o tours abiertos
      const toast = useToast();


      // Mostrar un toast informativo si no hay datos disponibles o tours abiertos
      if (!results || results.length === 0) {
        toast.info('Para este día no hay salidas programadas');
        statistics.value = [];
      }
    }

    // console.log(statistics.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});


onMounted(() => {
  const now = new Date();
  fetchData();

  // Obtén la fecha actual y asígnala a dateValue2
  // dateValue2.value = `${now.toISOString().slice(0, 10)}T${now.toTimeString().slice(0, 8)}`;

  // /console.log( dateValue2.value);
});
</script>

<style lang="scss">
[data-headlessui-state="open"] {
  label {
    @apply ring-0 outline-none;
  }

  .card-title2 {
    @apply text-base text-slate-600 dark:text-slate-400 font-medium leading-5 mb-2;
  }
}

.btn-link {
  @apply text-slate-900 font-medium underline text-sm dark:text-white;

  &.white {
    @apply text-white;
  }
}

.card-text {
  @apply text-slate-600 dark:text-slate-300 text-sm font-normal leading-5;
}

.card {
  @apply h-min;
}
</style>
