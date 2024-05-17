<template>
  <div>
    <div class="lg:flex justify-end flex-wrap items-center">
  <div class="flex lg:justify-end items-center flex-wrap">
    <button class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-red-500 dark:bg-red-700 btn-md h-min text-sm font-normal text-white rtl:space-x-reverse">
      <span class="text-lg">
        <Icon icon="heroicons:trash" />
      </span>
      <span>Borrar</span>
    </button>
    <button type="button" @click="print" class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse">
      <span class="text-lg">
        <Icon icon="heroicons:printer" />
      </span>
      <span>Imprimir</span>
    </button>


    <button @click="editar"
        class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse">
        <span class="text-lg">
          <Icon icon="heroicons:pencil-square" />
        </span>
        <span>Editar</span>
      </button>
  </div>
</div>



    <Card bodyClass="p-0" noborder>


      <div class="max-w-[980px] mx-auto shadow-base dark:shadow-none my-8 rounded-md overflow-x-auto mt-5">
        <div class="lg:col-span-4 col-span-12">
          <Card title="Detalle Grupo"
            :class="{ 'border  border-yellow-500': !group.group_is_confirmed, 'border border-blue-500 ': group.group_is_confirmed }">
            <div class="grid grid-cols-3 gap-8">
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:paper-airplane" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Destino
                      </div>
                 

                      <div class="text-base text-slate-600 dark:text-slate-50 font-bold">
                        {{ group.destino}}
                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:exclamation-circle" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Estado
                      </div>
                      <template v-if="group.group_is_confirmed === false">
                        <div
                          class="text-base text-slate-600 dark:text-slate-50 bg-yellow-500 border border-yellow-500 px-3 py-1 rounded">
                          Pendiente
                        </div>
                      </template>
                      <template v-else>
                        <div
                          class="text-base text-slate-600 dark:text-slate-50 bg-blue-500 border border-blue-500 px-3 py-1 rounded">
                          Confirmado
                        </div>
                      </template>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:map" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Codigo
                      </div>
                      <div class="text-base text-blue-900 dark:text-blue-300 font-bold">
  {{ group.code }}
</div>

                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:calendar" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Fecha de Salida
                      </div>
                      <div class="text-base text-slate-600 dark:text-slate-50">
                        {{ group.date_departure }}
                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="bi:person-circle" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Guía de viaje
                      </div>
                      <div class="text-base text-slate-600 dark:text-slate-50">
                        {{ group.guide }} {{ group.cellphoneGuide }}
                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>

              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:truck" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Transporte
                      </div>
                      <div class="text-base text-slate-600 dark:text-slate-50">
                        {{ group.trasnport }}
                        - CEL: {{ group.cellPhoneTransport }}
                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>

              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons-outline:cube" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Capacidad Transporte
                      </div>
                      <div class="text-base text-slate-600 dark:text-slate-50">
                        {{ group.capacityTransport
                        }} - placa: {{ group.placaTranport }}
                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:user-group" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Pasajeros
                      </div>
                      <div class="text-base text-slate-600 dark:text-slate-50 font-bold">
                        {{ group.pasajerosSeleccionados }} Seleccionados
                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:eye" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Observaciones
                      </div>
                      <div class="text-base text-slate-600 dark:text-slate-50">
                        {{ group.observations }}
                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>



      <vue-good-table class="mt-5" :columns="columnsTraspase"
        styleClass=" vgt-table  table-head   v-middle striped  listview" :rows="this.responseData" :pagination-options="{
          enabled: false,
        }" :sort-options="{
          enabled: false,
        }">



        <template v-slot:table-row="props">

          <span v-if="props.column.field == 'pasajero'">
            {{ props.row.booking_nro_pax }}

          </span>

          <span v-if="props.column.field == 'proforma'" class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
            {{ props.row.booking_reference_voucher }}

          </span>
          <span v-if="props.column.field == 'responsablecode'" class="block min-w-[208px]">
            <div class="flex flex-col">
              <div>{{ props.row.client_fullname }}</div>
              <div class="text-blue-900 dark:text-blue-300 font-bold underline cursor-pointer"
                @click.prevent="openModal(props.row.booking_id)">
                {{ props.row.booking_code }}
              </div>
            </div>
          </span>


          <span v-if="props.column.field == 'hotelubi'">
            {{ props.row.booking_reference_location }}

  </span>
          <span v-if="props.column.field == 'telephone'">
            {{ props.row.client_telephone }}
            <br>
            {{ props.row.client_cellphone }}

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


  <span v-if="props.column.field == 'deuda'"
      class="text-red-500 font-bold">
  S/. {{ props.row.deuda }}
</span>





        </template>

      </vue-good-table>

    </Card>




  </div>
</template>
<script>
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import TotalTable from "./module/TotalTable.vue";
import { mapState } from 'pinia';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import { useProjectStore } from "../../../store/project";
import axios from "axios";
import { useAuth } from "../../../store/auth";
const store = useProjectStore();

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

export default {
  data() {
    return {
      show: false,
      responseData: [], // Cambiar a un array vacío para almacenar múltiples elementos
      responseDataGroup: [], // Inicialmente como un array vacío
      columnsTraspase: [

        {
          label: "N° pax",
          field: "pasajero",
        },

        {
          label: "Responsable y Código	",
          field: "responsablecode",
        },

        {
          label: "Porforma",
          field: "proforma",
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
      columnsTraspase2: [
        {
          label: "Nombre Tours",
          field: "tour",
        },
        {
          label: "N° PAX	",
          field: "pasajerosdetail",
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
          label: "F. asignada",
          field: "fasignada",
        },
        {
          label: "Estado	",
          field: "estado",
        },
        {
          label: "F. realizada	",
          field: "frealizada",
        },
        {
          label: "Obs.	",
          field: "obs",
        },
      ],

      columnsResumenTotal: [
        {
          label: "TOTAL TOURS	",
          field: "totaltours",
        },
        {
          label: "TOTAL HOTEL",
          field: "totalhotel",
        },

        {
          label: "TOTAL PAGAR",
          field: "totalpagar",
        },
        {
          label: "PAGADO",
          field: "pagado",
        },
        {
          label: "DEUDA",
          field: "deuda",
        },

        {
          label: "FACTURADO",
          field: "facturado",
        },
      ],


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

      columnsComprobantes: [
        {
          label: "Tipo comprobante	",
          field: "tipocomprobante",
        },
        {
          label: "N° comprobante	",
          field: "ncomprobante",
        },
        {
          label: "Fecha",
          field: "fecha",
        },
        {
          label: "Método pago	",
          field: "metodopago",
        },
        {
          label: "Pagado",
          field: "pagadoc",
        },
        {
          label: "",
          field: "filedocumentcomrobante",
        },
      ],
      group: {
        destino: null,
        group_tour_id: null, // Inicializar group_tour_id como null

        tour_id: null,
        transport_id: null,
        guide: null,
        cellphoneGuide: null,
        cellPhoneTransport: null,
        trasnport: null,
        capacityTransport: null,
        placaTranport: null,
        date_departure: null, // Asigna la fecha actual en formato YYYY-MM-DD
        code: '',
        pasajerosSeleccionados: null,
        
        correlative: null,
        capacity_vehicle: null,
        capacity_selected: null,
        viatic_assigned: null,
        is_generated: false,
        is_confirmed: false,
        observations: '',
        group_is_confirmed: null
      },
      otherData2: {},  // Declara otherData en los datos del componente

      columnsComisiones: [
        {
          label: "Nombre mototaxista",
          field: "mototaxista",
        },
        {
          label: "Empresa",
          field: "empresa",
        },
        {
          label: "Fecha",
          field: "fechacomision",
        },
        {
          label: "COMISIÓN HOTEL	",
          field: "comisionhotel",
        },
        {
          label: "COMISIÓN TOURS	",
          field: "comisiontours",
        },

        {
          label: "TOTAL COMISIÓN",
          field: "totalcomision",
        },
      ],

      idGrupo: null,


    }
  },

  components: {
    Card,
    Icon,
    Button,
    TotalTable,
    Modal,
    Breadcrumb,
  },
  methods: {
    print() {
      window.print();
    },
    hasHotelInfo(row) {
      return (
        row.hotel_tradename || 
        row.hotel_document || 
        row.hotel_address
      );
    },

    openModal(bookingId) {
      console.log('Booking ID:', bookingId);
      this.$router.push({ name: 'reserve-preview', params: { id: bookingId } });
    },
  editar() {
    this.$router.push({
        name: 'grupo-edit',
        params: {
          group_id: this.idGrupo,
        },
        query: {
          group_data: JSON.stringify(this.otherData2)
        }
      });
    },

    hasTourInformation(row) {
      return row.tours && Array.isArray(row.tours) && row.tours.length > 0;
    },
    // Método para obtener el group_tour_id desde el pivot de la fila actual
    groupTourIdFromPivot(row) {
      if (row.tours && Array.isArray(row.tours) && row.tours.length > 0) {
        const tour = row.tours.find(tour => tour.id === this.group.group_tour_id);
        return tour ? tour.id : null;
      }
      return null;
    }

  },


  created() {
    this.store = useProjectStore();
  },
  mounted() {
    // Obtener el group_id de los parámetros de la ruta
    const group_id = this.$route.params.group_id;
    this.idGrupo = group_id;
    console.log('ID del grupo:', group_id);


    // Llamar al backend para obtener los datos del grupo
    axios.get(`${import.meta.env.VITE_API_URL}/groups/record/${group_id}`, headers)
      .then(response => {

        this.responseData = response.data.data.bookingTours;
        this.group.destino = response.data.data.group.tour_description;
        this.group.group_tour_id = response.data.data.group.group_tour_id; // Asignar group_tour_id desde la respuesta

        this.group.code = response.data.data.group.group_code;
        this.group.date_departure = response.data.data.groupCreatedAt;
        this.group.pasajerosSeleccionados = response.data.data.group.group_capacity_selected;
        this.group.cellphoneGuide = response.data.data.group.guide_cellphone;
        this.group.cellPhoneTransport = response.data.data.group.transport_cellphone;
        this.group.guide = response.data.data.group.guide_fullname;
        this.group.trasnport = response.data.data.group.transport_owner;
        this.group.placaTranport = response.data.data.group.transport_license_plate;
        this.group.capacityTransport = response.data.data.group.transport_capacity;
        this.group.observations = response.data.data.group.group_observations;
        this.group.group_is_confirmed = response.data.data.group.group_is_confirmed;
        console.log('Datos para la tabla :', response);
        // Aquí puedes hacer lo que necesites con los datos del grupo

      });


      
      axios.get(`${import.meta.env.VITE_API_URL}/groups/record-edit-grupo/${group_id}`, headers)
        .then(response => {

          this.otherData2  = response.data.data;
        
        })
        .catch(error => {
          // Aquí manejas errores si la solicitud falla
          console.error('Error fetching invoice data:', error);
        });


    // Ahora puedes usar este group_id para hacer lo que necesites en tu componente
  }
};
</script>
<style lang="scss">
.vgt-wrap__actions-footer {
  border: none !important;
}

.invocie-btn {
  @apply hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-600 mr-3 mb-4;
}

@media print {
  .invocie-btn {
    display: none;
  }

  .sidebar-wrapper,
  .app-header,
  .site-footer,
  .shadow-deep {
    @apply hidden;
  }

  .content-wrapper {
    @apply w-full ml-0;
  }
}
</style>
