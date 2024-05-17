<template>
  <div>
    <Card class="mb-0" title="Editar Traspaso">
      <div class="grid grid-cols-2 gap-0">

        <FromGroup label="Seleccionar Reserva" class="mr-4">

          <!-- Select de opciones filtradas -->
          <Select v-model="booking.tour_id" :options="filteredOptions" disabled />
        </FromGroup>



        <FromGroup>
          <Select v-model="booking.agency_id" :options="agencyOptions" label="Agencia que va operar" />
        </FromGroup>
        <ul class="list space-y-8 mt-5">
          <li class="flex space-x-3 rtl:space-x-reverse">
            <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
              <Icon icon="heroicons:envelope" />
            </div>
            <div class="flex-1">
              <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                N° paxs
              </div>
              <a href="mailto:someone@example.com" class="text-base text-slate-600 dark:text-slate-50">
                {{ booking.nro_pax }}
              </a>
            </div>
          </li>
          <!-- end single list -->
          <li class="flex space-x-3 rtl:space-x-reverse">
            <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
              <Icon icon="heroicons:phone-arrow-up-right" />
            </div>
            <div class="flex-1">
              <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                Cel
              </div>
              <a href="tel:0189749676767" class="text-base text-slate-600 dark:text-slate-50">
                {{ cellClient }}
              </a>
            </div>
          </li>
          <!-- end single list -->
          <li class="flex space-x-3 rtl:space-x-reverse">
            <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
              <Icon icon="heroicons:map" />
            </div>
            <div class="flex-1">
              <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                Referencia ubicación
              </div>
              <div class="text-base text-slate-600 dark:text-slate-50">
                {{ booking.reference_location }}
              </div>
            </div>
          </li>
          <!-- end single list -->
        </ul>

        <FromGroup label="Observaciones">
          <Textinput v-model="booking.observations" type="text" placeholder="Ingrese el número de teléfono fijo" />
        </FromGroup>

      </div>

      <div class="grid grid-cols-1">
        <div class="flex flex-col">

          <vue-good-table class="-mx-6 mt-6 mb-5" :columns="columnsTraspase"
            styleClass=" vgt-table  table-head   v-middle striped  listview" :rows="this.tours" :pagination-options="{
              enabled: false,
              perPage: perpage,
            }" :sort-options="{
              enabled: false,
            }">



            <template v-slot:table-row="props">

              <span v-if="props.column.field == 'abierto'">
                <div class="flex space-x-3 items-center text-left rtl:space-x-reverse">
                  <Checkbox v-model="selectedTours" @change="handleCheckboxChange(props.row.id)" />

                </div>
              </span>
              <span v-if="props.column.field == 'tour'" class="text-slate-500 dark:text-slate-400 block min-w-[208px]">
                {{ props.row.description }}
              </span>

              <span v-if="props.column.field == 'vehiculo'"
                :class="{ 'text-yellow-500 font-bold': props.row.pivot.vehicle_tour === 2, 'text-blue-500 font-bold': props.row.pivot.vehicle_tour === 1 }">
                {{ props.row.pivot.vehicle_tour === 2 ? 'Privado' : 'Compartido' }}
              </span>
              <span v-if="props.column.field == 'turno'" style="font-weight: bold;">
                {{ props.row.pivot.shift_tour === 1 ? 'Full Day' : props.row.pivot.shift_tour === 2 ? 'Mañana' :
                  props.row.pivot.shift_tour === 3 ? 'Tarde' :
                    'Noche' }}
              </span>
              <span v-if="props.column.field == 'pasajero'" class="block w-full">
                {{ props.row.pivot.quantity }}

              </span>

              <span v-if="props.column.field == 'fecha'">
                {{ fechas[props.index]?.created_at }}

              </span>

              <span v-if="props.column.field == 'preciocorporativo'">
                <Textinput type="text" placeholder="Precio corporativo" v-model="tours[props.index].price_corporate" />
                <span></span>

              </span>

              <span v-if="props.column.field == 'realizado'">
                <Textinput type="text" placeholder="Gaaaaaaa" v-model="realizado" disabled />

              </span>
              <span v-if="props.column.field == 'cobranza'">
                <Textinput type="text" placeholder="-" v-model="cobranzas[props.index]" />

              </span>
            </template>

          </vue-good-table>
          <div class="mt-1 self-end">

            <InputGroup label="T. TOURS S/. " v-model="totalCobranza" class="append" name="hi_Fullname" type="text"
              placeholder="" horizontal appendIcon="heroicons-outline:cash" classInput="text-right" />
          </div>

        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
        <div class="lg:col-span-1"></div> <!-- Columna vacía para mantener la alineación -->
        <div class="lg:col-span-3 flex justify-end">
          <!-- Botones -->
          <Button text="Cancelar" btnClass="btn-light mr-2" @click="closeModal()" />
          <Button type="submit" text="Guardar Traspaso" btnClass="btn-dark" @click="handleGuardarTraspaso" />
        </div>
      </div>
    </Card>

  </div>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import FromGroup from "@/components/FromGroup";
import InputGroup from "@/components/InputGroup";
import { advancedTable } from "../../../constant/basic-tablle-data";
import { useProjectStore } from "../../../store/project";

import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import Repeater from "./module/repeater";
import VueSelect from '@/components/Select/VueSelect';
import { mapState } from 'pinia';
import Icon from '@/components/Icon';
import Checkbox from '@/components/Checkbox';
import { ref, watch } from "vue";
import Select from '@/components/Select';
import axios from "axios";
import { useAuth } from "../../../store/auth";
import { useToast } from "vue-toastification";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación



export default {





  components: {
    Button,
    VueSelect,
    id: null,
    otherData: null,
    Card,
    Checkbox,
    Textinput,
    Select,
    InputGroup,
    FromGroup,
    Icon,
    Textarea,
    Repeater,
  },

  data() {
    return {
      advancedTable,
      store: null,
      cellClient: null,
      totalCobranza: null,
      tours: [],
      fechas: [],
      agencyOptions: [],
      booking: {
        id: '',
        type_booking: "",
        user_id: "",
        tour_id: "",
        bookingorigin_id: "",
        arrivalplace_id: "",
        client_id: "",
        agency_id: "",
        origintransfer_id: "",
        code: "",
        correlative: "",
        date_arrival: "",
        time_arrival: "",
        nro_pax: "",
        is_reference_pax: "",
        nro_pax_childs: "",
        nro_pax_adults: "",
        nro_pax_olds: "",
        reference_voucher: "",
        observations: "",
        arrival_place: "",
        contact_emergency: "",
        telephone_emergency: "",
        reference_location: "",
        is_igv: "",
        igv: "",
        is_detail_subtotaltour: "",
        subtotal_tour: "",
        subtotal_hotel: "",
        subtotal_flight: "",
        subtotal_catalog: "",
        discount: "",
        total: "",
        total_paid: "",
        total_billing: "",
        is_grouped: "",
        description_grouped: "",
        is_checkin: "",
        is_checkout: "",
        is_postponed: "",
        user_id_postponed: "",
        postponed_description: "",
        text_amount: "",
        register_flight: "",
        is_favorite: "",
        is_breakfast: "",
        nro_breakfast: "",
        start_breakfast: "",
        end_breakfast: "",
        pending_tours: "",
        origintransfer: "",
        program_transfer: ""
      },
      current: 1,
      cobranzas: [], // Array para almacenar los valores de cobranza
      tourIds: [], // Array para almacenar los valores de cobranza

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
      // 
      modelValue: false,
      perpage: 3,
      show: false,
      showEdit: false,
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
        { value: 1, label: "Privado" }
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
          label: "Realizado",
          field: "realizado",
        },
        {
          label: "Action",
          field: "action",
        },
      ],


      columnsTraspase: [


        {
          label: "N° pax",
          field: "pasajero",
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
          label: "Fecha Asigsnada",
          field: "fecha",
        },

        {
          label: "Precio corporativo	",
          field: "preciocorporativo",
        },
        {
          label: "Cobranza	",
          field: "cobranza",
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
      selectedBooking: null, // Variable para almacenar la reserva seleccionada
      searchTerm: '',
      filteredOptions: [], // Debe estar definida aquí
      bookingsOptions: [],
      bedroomOptions: [
        { value: 'simple', label: 'HAB. SIMPLE' },
        { value: 'simple_ac', label: 'HAB. SIMPLE (AC)' },
        { value: 'matrimonial', label: 'HAB. MATRIMONIAL' },
        { value: 'matrimonial_ac', label: 'HAB. MATRIMONIAL (AC)' },
        { value: 'doble', label: 'HAB. DOBLE' },
        { value: 'doble_ac', label: 'HAB. DOBLE (AC)' },
        { value: 'triple', label: 'HAB. TRIPLE' },
        { value: 'triple_ac', label: 'HAB. TRIPLE (AC)' },
        { value: 'grupal', label: 'HAB. GRUPAL' },
        { value: 'grupal_ac', label: 'HAB. GRUPAL (AC)' }
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
      selectedTours: [], // Array para almacenar los IDs de los tours seleccionados
      columnsReservasAlojamiento: [
        {
          label: "Código",
          field: "codigo",
        },
        {
          label: "Nombre Hotel",
          field: "nombreHotel",
        },

        {
          label: "Detalle Hab.	",
          field: "detallehotel",
        },
        {
          label: "Action",
          field: "action",
        },
      ],
    };
  },


  setup(props) {
    const modelValue = ref(null);

    watch(() => modelValue.value, (newValue, oldValue) => {
      console.log('El valor ha cambiado de', oldValue, 'a', newValue);
      // Aquí puedes realizar acciones adicionales cuando el valor cambie
    });

    return {
      modelValue
    };
  },
  methods: {
    handleSelectionChange(selectedValue) {
      // Realizar acciones con el valor seleccionado
      console.log('Valor seleccionado:', selectedValue);
    },

    handleCheckboxChange(tourId) {
      // Manejar cambios en los checkboxes
      console.log("Se seleccionó el tour con ID:", tourId);
      // Agregar o eliminar el ID del tour seleccionado del array
      const index = this.selectedTours.indexOf(tourId);
      if (index !== -1) {
        this.selectedTours.splice(index, 1); // Eliminar el ID del tour deseleccionado
        console.log(this.selectedTours);
      } else {
        this.selectedTours.push(tourId); // Agregar el ID del tour seleccionado
        console.log(this.selectedTours);
      }
    },
    handleGuardarTraspaso() {
      // Acceder al valor de 'booking'
      console.log('Valor de booking:', this.booking);

      // Construir el objeto de datos a enviar
      const dataToSend = {
        agency_id: this.booking.agency_id,
        // origintransfer_id: this.booking.tour_id,
        observations: this.booking.observations,
        //tours: this.selectedTours // Agregar los IDs de los tours seleccionados
        // Puedes incluir otras propiedades de 'booking' si es necesario
      };


      axios.post(`${import.meta.env.VITE_API_URL}/bookings/update-traspase/${this.booking.id}`, dataToSend, headers)
        .then(response => {
          // Manejar la respuesta del backend si es necesario
          console.log(response.data);
          const toast = useToast();

          toast.success(response.data.message);

          setTimeout(() => {
            this.$router.push('/app/wishlist');
          }, 3000);

        })
        .catch(error => {
          // Manejar cualquier error que ocurra durante la solicitud
          console.error('Error al guardar el traspaso:', error);
        });


      const filteredTourIds = [];
      const tourIds = this.tourIds;

      tourIds.forEach(id => {
        // Verificar si el id existe en el array de this.tours
        const tourExists = this.tours.some(tour => tour.id === id);
        if (tourExists) {
          filteredTourIds.push(id);
        }
      });

      console.log(filteredTourIds);



      console.log("Jiji", this.tours);


      console.log(dataToSend);
      console.log(this.cobranzas);

      console.log(this.tourIds);
      console.log(this.tours);


      axios.post(`${import.meta.env.VITE_API_URL}/bookings/update-delegated-payments-transfer`, {
        ids: filteredTourIds,
        delegated_payments: this.cobranzas,
        agency_id: this.booking.agency_id,
        booking_id: this.booking.id
      }, headers)
        .then(response => {

          // Manejar la respuesta del backend si es necesario
          console.log(response.data);
          // toast.success("Pagos delegados actualizados correctamente");
        })
        .catch(error => {
          const toast = useToast();

          // Manejar cualquier error que ocurra durante la solicitud
          console.error('Error al guardar el traspaso:', error);
          toast.error("Error al guardar el traspaso");
        });
    },



    filterOptions() {
      const searchTerm = this.searchTerm.toLowerCase();
      if (this.bookingsOptions) {
        this.filteredOptions = this.bookingsOptions.filter(option => option.label.toLowerCase().includes(searchTerm));
        console.log(this.filteredOptions);
      }
    },





  },




  watch: {
    modelValue(newValue, oldValue) {
      console.log('Valor seleccionado:', newValue);
    },

    // Observa los cambios en el valor de booking.tour_id
    'booking.tour_id': function (newValue, oldValue) {
      console.log('ID:', newValue);

      // Realiza acciones en respuesta al cambio de valor
      axios.get(`${import.meta.env.VITE_API_URL}/bookings/record/${newValue}`, headers)
        .then(response => {
          // Manejar la respuesta del backend
          // this.tours = response.data.data.tours;

          this.cellClient = response.data.data.book.client.cellphone;

          this.fechas = response.data.data.tours;
          console.log('Registro cargado:', response);


          // Almacena los valores de delegated_payment en un array
          // Almacena los valores de delegated_payment en un array, eliminando los valores null
          this.cobranzas = response.data.data.tours.map(tour => tour.delegated_payment).filter(payment => payment !== null);

          console.log("Cobrii", this.cobranzas);



          console.log("Cobrii", this.cobranzas);

          // Almacena los IDs de los tours en un array
          this.tourIds = response.data.data.tours.map(tour => {
            return tour.id;
          });
          // this.booking.observations = response.data.data.book.observations;

          // Aquí puedes actualizar los datos del componente con la respuesta del backend
        })
        .catch(error => {
          // Manejar errores en la solicitud
          console.error('Error al cargar el registro:', error);
        });
    },

    '$route': {
      immediate: true,
      handler(to, from) {
        const id = to.params.id;

        this.booking.id = id;

        const otherData = JSON.parse(to.query.otherData); // Convertir la cadena JSON a objeto
        this.booking.tour_id = otherData.origintransfer_id;
        this.booking.observations = otherData.observations;
        this.tours = otherData.program_transfer;
        this.booking.nro_pax = otherData.origintransfer.nro_pax;
        this.booking.reference_location = otherData.origintransfer.reference_location;
        this.totalCobranza = otherData.total;
        this.booking.agency_id = otherData.agency_id;
        console.log(otherData);

      }
    },
    'tours': {
      deep: true,
      handler(newTours, oldTours) {
        console.log(newTours);
        let totalCobranza = 0; // Variable para almacenar la suma total de cobranzas
        for (let i = 0; i < newTours.length; i++) {
          const tour = newTours[i];
          const quantity = parseFloat(tour.pivot.quantity);
          const priceCorporate = parseFloat(tour.price_corporate);
          if (!isNaN(quantity) && !isNaN(priceCorporate)) {
            this.cobranzas[i] = quantity * priceCorporate; // Asignar el valor de cobranza al índice correspondiente del array cobranzas
            totalCobranza += this.cobranzas[i]; // Sumar la cobranza actual al total
          }
        }
        // Actualizar el valor total de cobranza en algún lugar de tu componente
        this.totalCobranza = totalCobranza;
      }
    }


  }
  ,
  created() {
    this.store = useProjectStore();

    console.log(this.booking.id);
  },
  mounted() {

    axios.get(`${import.meta.env.VITE_API_URL}/bookings/code-list`, headers)
      .then(response => {
        // Extraer las reservas del response y mapearlas a bookingsOptions
        this.bookingsOptions = response.data.bookings.map(booking => ({
          value: booking.id,
          label: `${booking.code}\n${booking.client}`
        }));

        // Filtrar opciones si existen
        if (this.bookingsOptions.length > 0) {
          this.filterOptions();
        }
      })
      .catch(error => {
        console.error('Error al obtener las reservas:', error);
      });


    axios.get(`${import.meta.env.VITE_API_URL}/agencies/list-formated`, headers)
      .then(response => {
        // Extraer las agencias del response y mapearlas a agencyOptions
        this.agencyOptions = response.data.agencies.map(agency => ({
          value: agency.id,
          label: `${agency.firstName}\n${agency.document}`
        }));

        // Llamar a filterOptions si agencyOptions tiene datos
        if (this.agencyOptions.length > 0) {
          this.filterOptions();
        }
      })
      .catch(error => {
        console.error('Error al obtener las agencias:', error);
      });


  }


};
</script>
<style lang="scss">
.flex-container {
  display: flex;
  justify-content: space-between;
}

.flex-item {
  width: 48%;
  /* Ajusta el ancho de cada elemento */
}
</style>
