<template>
  <div>
    <Card noborder>
      <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
        <h5>Todos las Reservas de Hotel</h5>

        <div class="flex items-center space-x-3"> <!-- Contenedor flex para alinear los elementos -->
          <Button icon="heroicons-outline:arrows-up-down"
            btnClass="btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm"
            iconClass="text-lg" @click="reloadCrmTable" />
          <div class="w-[370px]">
            <VueTailwindDatePicker v-model="dateValue" input-classes="form-control " />
          </div>
          <InputGroup v-model="searchTerm" placeholder="Buscar por cualquier dato" type="text"
            prependIcon="heroicons-outline:search" merged />
        </div>
      </div>
      <vue-good-table class="-mx-6" :columns="columns" styleClass=" vgt-table  table-head   v-middle striped  listview"
        :rows="this.projects" :pagination-options="{
          enabled: true,
          perPage: perpage,
        }" :search-options="{
              enabled: true,
              externalQuery: searchTerm,
            }" :sort-options="{
              enabled: false,
            }">
        <template v-slot:table-row="props">
          <span v-if="props.column.field == 'name'">
            <div class="flex space-x-3 items-center text-left rtl:space-x-reverse">
              <div class="flex-none">
                <div
                  class="h-10 w-10 rounded-full text-sm bg-[#E0EAFF] dark:bg-slate-700 flex flex-col items-center justify-center font-medium -tracking-[1px]">
                  {{
                    props.row.name.charAt(0) +
                    props.row.name.charAt(props.row.name.length - 1)
                  }}
                </div>
              </div>
              <div class="flex-1 font-medium text-sm leading-4 whitespace-nowrap">
                {{
                  props.row.name.length > 20
                    ? props.row.name.substring(0, 20) + "..."
                    : props.row.name
                }}
              </div>
            </div>
          </span>

          <span v-if="props.column.field == 'startDate'" class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
            {{ props.row.startDate }}
          </span>
          <span v-if="props.column.field == 'endDate'" class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
            {{ props.row.endDate }}
          </span>
          <span v-if="props.column.field == 'assignto'" class="block w-full">
            <div
              class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1 rtl:space-x-reverse">
              <div class="h-6 w-6 rounded-full ring-1 ring-slate-100" v-for="(user, userIndex) in props.row.assignto"
                :key="userIndex">
                <img :src="user.image" :alt="user.title" class="w-full h-full rounded-full" />
              </div>
              <div
                class="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center">
                +2
              </div>
            </div>
          </span>
          <span v-if="props.column.field == 'progress'" class="min-w-[220px] block">
            <ProgressBar :value="props.row.progress" barColor="bg-primary-500" />
            <span class="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium mt-3">
              <span class="font-normal">12/15 Task Completed</span>
              {{ props.row.progress }}%
            </span>
          </span>

          <div v-if="props.column.field == 'action'" class="action-btn text-end mr-3">
            <Dropdown classMenuItems=" w-[140px]">
              <div class="text-xl">
                <Icon icon="heroicons-outline:dots-vertical" />
              </div>
              <template v-slot:menus>
                <MenuItem v-for="(item, i) in actions" :key="i">
                <div @click="item.doit(props.row)"
                  :class="`
                
                  ${item.name === 'delete'
                      ? 'bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white'
                      : 'hover:bg-slate-900 hover:text-white'
                    }
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center `">
                  <span class="text-base">
                    <Icon :icon="item.icon" />
                  </span>
                  <span>{{ item.name }}</span>
                </div>
                </MenuItem>
              </template>
            </Dropdown>
          </div>
        </template>

        <template #pagination-bottom="props">
          <div class="py-4 px-3">
            <Pagination :total="projects.length" :current="current" :per-page="perpage" :pageRange="pageRange"
              @page-changed="current = $event" :pageChanged="props.pageChanged" :perPageChanged="props.perPageChanged"
              enableSearch enableSelect />
          </div>
        </template>
      </vue-good-table>

      <EditProject :activeModal="showEditModal" @close="showEditModal = false" :clientData="clientData"
        title="Actualizar Datos Cliente" @updateClientList="listarClientes"></EditProject>

    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import Pagination from "@/components/Pagination";
import ProgressBar from "@/components/ProgressBar";
import { MenuItem } from "@headlessui/vue";
import { advancedTable } from "../../constant/basic-tablle-data";
import { mapState, mapActions } from "pinia";
import { useProjectStore } from "@/store/project";
import InputGroup from "@/components/InputGroup";
import Button from "@/components/Button";
import { useAuth } from "../../store/auth";
import { useToast } from "vue-toastification";
import axios from "axios";
import EditProject from "./ReservaHotelEditModal";
import VueTailwindDatePicker from "vue-tailwind-datepicker";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

export default {
  components: {
    InputGroup,
    Button,
    Pagination,
    VueTailwindDatePicker,
    Dropdown,
    Icon,
    MenuItem,
    EditProject,
    Card,
    ProgressBar,
  },

  data() {

    const currentDate = new Date();

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const formattedFirstDay = firstDayOfMonth.toISOString().split('T')[0] + " 00:00:00";

    // Obtener el último día del mes actual
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const formattedLastDay = lastDayOfMonth.toISOString().split('T')[0] + " 23:59:59";

    return {
      searchTerm: "",
      clientData: {},
      showEditModal: false,  // Nueva propiedad para controlar el modal de edición
      advancedTable,
      current: 1,
      perpage: 10,
      dateValue: {
        startDate: formattedFirstDay,
        endDate: formattedLastDay
      },
      pageRange: 10,
      actions: [
        {
          name: "edit",
          icon: "heroicons:pencil-square",
          doit: (data) => {
            console.log(data);
            this.clientData = data; // Asigna los datos del empleado
            this.showEditModal = true; // Mostrar el modal de edición
          }
        },
        {
          name: "delete",
          icon: "heroicons-outline:trash",
          doit: async (data) => {
            try {
              // Realiza la solicitud HTTP DELETE al backend para eliminar el empleado
              await axios.delete(`${import.meta.env.VITE_API_URL}/clients/delete/${data.id}`, headers);

              // Si la solicitud se completa con éxito, muestra un toast de éxito
              const toast = useToast();
              toast.success('Cliente eliminado correctamente', {
                timeout: 1500, // Cierre automático después de 1.5 segundos
              });

              // Aquí podrías actualizar la lista de empleados en tu frontend si lo deseas
              // Por ejemplo, puedes llamar a this.listarEmpleados() para obtener la lista actualizada
              this.listarHoteles();

            } catch (error) {
              console.error('Error al eliminar empleado:', error);
            }
          },
        },
      ],


      columns: [
        {
          label: "Codigo",
          field: "code",
        },

        {
          label: "Nombre Hotel",
          field: "hotel_data.tradename",
        },

        {
          label: "Reponsable",
          field: "client_data.fullname",
        },
        {
          label: "Comprobante",
          field: "reference_voucher",
        },
        {
          label: "Reserva Asociada",
          field: "booking_data.code",
        },
        {
          label: "Total ",
          field: "total",
        },
        {


          label: "Action",
          field: "action",
        },
      ],
      projects: [], // Inicializa como una matriz vacía para evitar problemas de datos no definidos

    };
  },

  methods: {

    async reloadCrmTable() {
      try {
        await this.listarClientes(); // Llama al método listarEmpleados()

        // Puedes agregar aquí cualquier otra lógica que necesites después de listar los empleados
      } catch (error) {
        console.error('Error al recargar Clientes :', error);
      }
    },

    async listarClientes() {
      try {
        const params = {
          start_date: this.dateValue.startDate,
          end_date: this.dateValue.endDate,
        };
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/hotelsbookings/list-all`, {
          ...headers,
          params,
        });
        const results = response.data.results; // Accedes directamente a 'results' en la respuesta
        this.projects = results.map(result => ({
          id: result.id ?? null,
          hotel_id: result.hotel_data?.id ?? null,
          booking_id: result.booking_id ?? null,
          client_id: result.client_data?.id ?? null,
          collaborator_id: result.collaborator_id ?? null,
          code: result.code ?? null,
          total: result.total ?? null,

          correlative: result.correlative ?? null,
          reference_voucher: result.reference_voucher ?? null,
          is_external: result.is_external ?? null,
          observation: result.observation ?? null,
          created_at: result.created_at ?? null,
          updated_at: result.updated_at ?? null,
          deleted_at: result.deleted_at ?? null,
          hotel_description: result.hotel_description ?? null,
          client_fullname: result.client_fullname ?? null,
          client_document: result.client_document ?? null,
          client_cellphone: result.client_cellphone ?? null,
          client_telephone: result.client_telephone ?? null,
          hotel_data: {
            id: result.hotel_data?.id ?? null,
            tourismcitie_id: result.hotel_data?.tourismcitie_id ?? null,
            tradename: result.hotel_data?.tradename ?? null,
            document: result.hotel_data?.document ?? null,
            fullname: result.hotel_data?.fullname ?? null,
            // Agrega más propiedades de hotel_data según sea necesario
          },
          client_data: {
            id: result.client_data?.id ?? null,
            typedocument_id: result.client_data?.typedocument_id ?? null,
            type_client: result.client_data?.type_client ?? null,
            fullname: result.client_data?.fullname ?? null,
            document: result.client_data?.document ?? null,
            // Agrega más propiedades de client_data según sea necesario
          },
          booking_data: {
            id: result.booking_data?.id ?? null,
            type_booking: result.booking_data?.type_booking ?? null,
            user_id: result.booking_data?.user_id ?? null,
            code: result.booking_data?.code ?? null,

            // Agrega más propiedades de booking_data según sea necesario
          },
          detailbedrooms_data: result.detailbedrooms_data?.map(detail => ({
            id: detail.id ?? null,
            hotelsbooking_id: detail.hotelsbooking_id ?? null,
            typebedroom_id: detail.typebedroom_id ?? null,
            date_checkin: detail.date_checkin ?? null,
            date_checkout: detail.date_checkout ?? null,
            quantity: detail.quantity ?? null,
            guests: detail.guests ?? null,
            nights: detail.nights ?? null,
            hotel_id: detail.hotel_id ?? null,
            price: detail.price ?? null,
            additional: detail.additional ?? null,
            discount: detail.discount ?? null,
            observation: detail.observation ?? null,
            typebedroom: detail.typebedroom ?? null,
            // Agrega más propiedades de detailbedrooms_data según sea necesario
          })) ?? [],
          detailbedrooms_paid_data: result.detailbedrooms_paid_data?.map(detail => ({
            id: detail.id ?? null,
            // Agrega más propiedades de detailbedrooms_paid_data según sea necesario
          })) ?? [],
          // Agrega más propiedades según sea necesario
        }));


        console.log(this.projects);
        const toast = useToast();
        toast.success('Reservas de hotel listadas correctamente', { timeout: 1500 });
      } catch (error) {
        console.error('Error al obtener los datos de los empleados:', error);
      }
    }
  },

  watch: {
    dateValue(newValue, oldValue) {
      if (!newValue.startDate || !newValue.endDate) {
        // Si están vacíos, establecer la tabla avanzada en vacío
        this.advancedTable = [];
      } else {
        const startDateOnly = newValue.startDate.split(' ')[0];
        const endDateOnly = newValue.endDate.split(' ')[0];

        axios.get(`${import.meta.env.VITE_API_URL}/hotelsbookings/list-all?start_date=${startDateOnly}&end_date=${endDateOnly}`, headers)
          .then(response => {
            const results = response.data.results; // Accedes directamente a 'results' en la respuesta
        this.projects = results.map(result => ({
          id: result.id ?? null,
          hotel_id: result.hotel_data?.id ?? null,
          booking_id: result.booking_id ?? null,
          client_id: result.client_data?.id ?? null,
          collaborator_id: result.collaborator_id ?? null,
          code: result.code ?? null,
          total: result.total ?? null,

          correlative: result.correlative ?? null,
          reference_voucher: result.reference_voucher ?? null,
          is_external: result.is_external ?? null,
          observation: result.observation ?? null,
          created_at: result.created_at ?? null,
          updated_at: result.updated_at ?? null,
          deleted_at: result.deleted_at ?? null,
          hotel_description: result.hotel_description ?? null,
          client_fullname: result.client_fullname ?? null,
          client_document: result.client_document ?? null,
          client_cellphone: result.client_cellphone ?? null,
          client_telephone: result.client_telephone ?? null,
          hotel_data: {
            id: result.hotel_data?.id ?? null,
            tourismcitie_id: result.hotel_data?.tourismcitie_id ?? null,
            tradename: result.hotel_data?.tradename ?? null,
            document: result.hotel_data?.document ?? null,
            fullname: result.hotel_data?.fullname ?? null,
            // Agrega más propiedades de hotel_data según sea necesario
          },
          client_data: {
            id: result.client_data?.id ?? null,
            typedocument_id: result.client_data?.typedocument_id ?? null,
            type_client: result.client_data?.type_client ?? null,
            fullname: result.client_data?.fullname ?? null,
            document: result.client_data?.document ?? null,
            // Agrega más propiedades de client_data según sea necesario
          },
          booking_data: {
            id: result.booking_data?.id ?? null,
            type_booking: result.booking_data?.type_booking ?? null,
            user_id: result.booking_data?.user_id ?? null,
            code: result.booking_data?.code ?? null,

            // Agrega más propiedades de booking_data según sea necesario
          },
          detailbedrooms_data: result.detailbedrooms_data?.map(detail => ({
            id: detail.id ?? null,
            hotelsbooking_id: detail.hotelsbooking_id ?? null,
            typebedroom_id: detail.typebedroom_id ?? null,
            date_checkin: detail.date_checkin ?? null,
            date_checkout: detail.date_checkout ?? null,
            quantity: detail.quantity ?? null,
            guests: detail.guests ?? null,
            nights: detail.nights ?? null,
            price: detail.price ?? null,
            additional: detail.additional ?? null,
            discount: detail.discount ?? null,
            observation: detail.observation ?? null,
            typebedroom: detail.typebedroom ?? null,
            // Agrega más propiedades de detailbedrooms_data según sea necesario
          })) ?? [],
          detailbedrooms_paid_data: result.detailbedrooms_paid_data?.map(detail => ({
            id: detail.id ?? null,
            // Agrega más propiedades de detailbedrooms_paid_data según sea necesario
          })) ?? [],
          // Agrega más propiedades según sea necesario
        }));


        console.log(this.projects);
        const toast = useToast();


        toast.success('Reservas de hotel listadas correctamente', { timeout: 1500 });

      
          })
          .catch(error => {
            console.error(error);
            if (error.response && error.response.status === 404) {
              // Si el error es 404 (No encontrado), mostrar un toast con el mensaje del backend
              const toast = useToast();
              toast.info('No se encontraron reservas dentro del rango de fechas proporcionado.');
            } else {
              // Si es otro tipo de error, mostrar un toast genérico de error
              const toast = useToast();
              toast.error('Ocurrió un error al obtener las reservas.');
            }
            // Vaciar la tabla avanzada
            this.advancedTable = [];
          });
      }
    }


  },
  mounted() {
    this.listarClientes();
  }
};
</script>

<style lang="scss">
.listview {
  th {
    @apply last:text-end;
  }
}
</style>
