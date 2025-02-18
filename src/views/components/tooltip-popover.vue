<template>
  <div>
    <Card noborder>
      <div class="md:flex pb-6 items-center">
        <h6 class="flex-1 md:mb-0 mb-3">Reservas</h6>
        <div class="md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse"
          :class="window.width < 768 ? 'space-x-rb' : ''">
          <InputGroup v-model="searchTerm" placeholder="Escriba para buscar" type="text"
            prependIcon="heroicons-outline:search" merged />
          <div class="w-[370px]">
            <VueTailwindDatePicker v-model="dateValue" input-classes="form-control " />
          </div>
          <Button icon="heroicons-outline:arrows-up-down"
            btnClass=" btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm "
            iconClass="text-lg" @click="reloadCrmTable" />
          <Button icon="heroicons-outline:plus-sm" text="Agregar Reserva" btnClass=" btn-dark font-normal btn-sm "
            iconClass="text-lg" link="invoice-add" />
        </div>
      </div>
      <div class="-mx-6">
        <vue-good-table :columns="columns" styleClass=" vgt-table  centered " :rows="advancedTable" :sort-options="{
          enabled: false,
        }" :pagination-options="{
          enabled: true,
          perPage: perpage,
        }" :search-options="{
          enabled: true,
          externalQuery: searchTerm,
        }">
          <template v-slot:table-row="props">


            <span v-if="props.column.field === 'code'" class="font-medium w-[140px]" @click="openModal(props.row.id)"
              style="display: flex; flex-direction: column;">
              <span v-if="props.row.is_checkout !== 1" class="text-success-600 font-bold">{{ props.row.code }}</span>
              <span v-else class="text-red-500 font-bold">{{ props.row.code }}(Anulado)</span>
              <!-- Color verde oscuro y fosforescente -->
              <span v-if="props.row.is_checkout !== 1" style="margin-top: 5px;" class="font-bold">Reg: {{
                props.row.formatted_created_at }}</span>
              <span v-else style="margin-top: 5px;" class="text-red-500 font-bold">Reg: {{
                props.row.formatted_created_at }}</span>
            </span>



            <span v-if="props.column.field == 'user_id'" class="text-slate-500 dark:text-slate-400"
              :style="{ color: props.row.is_checkout === 1 ? 'red' : 'inherit' }">
              {{ props.row.user.name }}
              <br>
            </span>
            <span v-if="props.column.field == 'client.fullname'" class="text-slate-500 dark:text-slate-400"
              :style="{ color: props.row.is_checkout === 1 ? 'red' : 'inherit', display: 'flex', flexDirection: 'column' }">
              <span>{{ props.row.client.fullname }}</span>
              <span class="font-bold">{{ props.row.client.document }}</span>
            </span>


            <span v-if="props.column.field === 'client.cellphone'"
              :style="{ color: props.row.is_checkout === 1 ? 'red' : 'inherit', display: 'flex', flexDirection: 'column' }">
              <span>Teléfono: {{ props.row.client.telephone }}</span>
              <span style="margin-top: 5px;">Celular: {{ props.row.client.cellphone }}</span>
            </span>


            <!-- Campo de estado -->
            <span v-if="props.column.field == 'status'" class="text-slate-500 dark:text-slate-400">
              <!-- Mostrar solo si is_checkout no es igual a 1 -->
              <span v-if="props.row.is_checkout !== 1 && props.row.pending_tours > 0"
                class="bg-blue-200 py-1 px-2 rounded-full text-blue-600 font-semibold inline-block"
                style="width: 160px;">
                Por Realizar {{ props.row.pending_tours }} Tours
              </span>
              <span v-else-if="props.row.is_checkout !== 1"
                class="flex items-center text-yellow-600 bg-yellow-100 py-1 px-2 rounded-full" style="width: 120px;">
                <svg class="h-4 w-4 mr-2 fill-current" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M19.707 3.293a1 1 0 00-1.414 0l-10 10-4-4a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l11-11a1 1 0 000-1.414z"
                    clip-rule="evenodd" />
                </svg>
                <span class="flex items-center font-semibold">
                  Completados
                </span>
              </span>
              <!-- Mostrar "Anulados" cuando is_checkout es igual a 1 -->
              <span v-else class="bg-red-200 py-1 px-2 rounded-full text-red-600 font-semibold inline-block"
                style="width: 120px;">
                Anulados
              </span>
            </span>
            <span v-if="props.column.field == 'checking'" class="text-slate-500 dark:text-slate-400">
              <span v-if="props.row.is_checkin === 1" class="flex items-center bg-green-200 py-1 px-2 rounded-full">
                <span class="text-green-600 font-semibold">Confirmado</span>
              </span>
              <span v-else-if="props.row.is_checkout === 1" class="text-red-600 font-semibold">
                Reserva Anulada
              </span>
              <span v-else-if="props.row.is_checkin === 0" class="text-red-600 font-semibold">
                Pendiente
              </span>
              <span v-else class="text-red-600 font-semibold">
                Reserva Anulada
              </span>
            </span>

            <span v-if="props.column.field === 'debe'" class="text-red-500 dark:text-slate-400 font-bold">
              S/.{{
                ((parseFloat(props.row.total) || 0) - (parseFloat(props.row.total_paid) || 0)).toFixed(2)
              }}
            </span>


            <div v-if="props.column.field == 'action' && props.row.is_checkout !== 1" class="action-btn text-end mr-3">
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
              <Pagination :total="advancedTable.length" :current="current" :per-page="perpage" :pageRange="pageRange"
                @page-changed="current = $event" :pageChanged="props.pageChanged" :perPageChanged="props.perPageChanged"
                enableSearch enableSelect :options="options">
                >
              </Pagination>
            </div>
          </template>
        </vue-good-table>
      </div>
    </Card>

    <Modal title="Datos de reserva | R2024-000643" label="Modal title" :activeModal="show" @close="show = false"
      sizeClass="max-w-4xl">
      <form name="client_form" id="client_form" autocomplete="off" class="mx-auto space-y-4">
        <!-- Tipo de cliente, Tipo de documento, N° Documento -->

        <!-- Nuevo contenedor para los botones -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
          <div class="lg:col-span-1"></div> <!-- Columna vacía para mantener la alineación -->
          <div class="lg:col-span-3 flex justify-end">
            <!-- Botones -->
            <Button text="Cancelar" btnClass="btn-light mr-2" />
            <Button type="submit" text="Guardar Cambios" btnClass="btn-dark" />
          </div>
        </div>
      </form>
    </Modal>

  </div>
</template>
<script>
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import InputGroup from "@/components/InputGroup";
import Pagination from "@/components/Pagination";
import { MenuItem } from "@headlessui/vue";
import { advancedTable } from "../../constant/basic-tablle-data";
import window from "@/mixins/window";
import Modal from '@/components/Modal';
import axios from "axios";
import { useAuth } from "../../store/auth";
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import { useToast } from "vue-toastification";
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importa el idioma español

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación



export default {
  mixins: [window],
  components: {
    Pagination,
    InputGroup,
    Dropdown,
    Icon,
    VueTailwindDatePicker,
    Card,
    MenuItem,
    Button,
    Modal
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
      advancedTable: [], // Inicializa la tabla vacía
      current: 1,
      perpage: 25,
      show: false,
      startDateVariable: "",
      endDateVariable: "",
      dateValue: {
        startDate: formattedFirstDay,
        endDate: formattedLastDay
      }, pageRange: 5,
      searchTerm: "",
      actions: [

        {
          name: "edit",
          icon: "heroicons:pencil-square",
          doit: (data) => {
            const id = data.id; // Acceder al id desde los datos pasados
            const otherData = data; // Acceder a otros datos que deseas enviar

            // Enviar el ID y otros datos a través de la URL como parámetros de ruta
            this.$router.push({
              name: 'invoice-edit',
              params: {
                id: id,
              },
              query: {
                otherData: JSON.stringify(otherData) // Convertir la data del grupo a cadena JSON
              }
            });

          },
        },
        {
          name: "delete",
          icon: "heroicons-outline:trash",
          doit: (data) => {
            // Realiza la solicitud HTTP POST al backend para eliminar el booking
            axios.post(`${import.meta.env.VITE_API_URL}/bookings/anular`, {
              booking_id: data.id  // Incluye el ID del booking en el cuerpo de la solicitud
            }, {
              ...headers
            })
              .then((response) => {
                // Extrae el mensaje de éxito de la respuesta del backend
                const successMessage = response.data.message;

                // Si la solicitud se completa con éxito, muestra un toast de éxito
                const toast = useToast();
                toast.success(successMessage, {
                  timeout: 1500, // Cierre automático después de 1.5 segundos
                });

                // Aquí podrías actualizar la lista de empleados en tu frontend si lo deseas
                // Por ejemplo, puedes llamar a this.listarEmpleados() para obtener la lista actualizada
                this.listarEmpleados();
              })
              .catch((error) => {
                console.error('Error al eliminar empleado:', error);
              });
          }
        },


      ],
      options: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "5",
          label: "5",
        },
      ],
      columns: [
        {
          label: "N° reserva	",
          field: "code",
        },
        {
          label: "Usuario r.	",
          field: "user_id",
        },
        {
          label: "Proforma",
          field: "reference_voucher",
        },
        {
          label: "Reponsable	",
          field: "client.fullname",
        },
        {
          label: "N° pax	",
          field: "nro_pax",
        },
        {
          label: "Teléfonos	",
          field: "client.cellphone",
        },
        {
          label: "Sobre tours	",
          field: "status",
        },
        {
          label: "Check-in	",
          field: "checking",
        },
        {
          label: "Total	",
          field: "total",
        },
        {
          label: "Debe	",
          field: "debe",
        },
        {
          label: "Action",
          field: "action",
        },
      ],
    };
  },

  methods: {


    async reloadCrmTable() {
      axios.get(`${import.meta.env.VITE_API_URL}/bookings/list?start_date=${this.dateValue.startDate}&end_date=${this.dateValue.endDate}`, headers)
        .then(response => {
          console.log("API Response:", response.data); // 👈 Ver qué estructura tiene la respuesta

if (response.data && Array.isArray(response.data.data)) {
  this.advancedTable = response.data.data.map(item => ({
    ...item,
    formatted_created_at: dayjs(item.created_at).locale("es").format("DD MMM. YYYY")
  }));
} else {
  console.error("⚠️ La estructura de la API no es la esperada:", response.data);
  this.advancedTable = []; // Evita errores si la API devuelve algo incorrecto
}

          const toast = useToast();
          toast.success(response.data.message);
          // console.log(response);
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
    },
    openModal(id) {
      this.$router.push(`/app/reserve-preview/${id}`);
    }
    ,


  },



  watch: {
    dateValue(newValue, oldValue) {
      if (!newValue.startDate || !newValue.endDate) {
        // Si están vacíos, establecer la tabla avanzada en vacío
        this.advancedTable = [];
      } else {
        const startDateOnly = newValue.startDate.split(' ')[0];
        const endDateOnly = newValue.endDate.split(' ')[0];

        axios.get(`${import.meta.env.VITE_API_URL}/bookings/list?start_date=${startDateOnly}&end_date=${endDateOnly}`, headers)
          .then(response => {
            console.log("API Response:", response.data); // 👈 Ver qué estructura tiene la respuesta

if (response.data && Array.isArray(response.data.data)) {
  this.advancedTable = response.data.data.map(item => ({
    ...item,
    formatted_created_at: dayjs(item.created_at).locale("es").format("DD MMM. YYYY")
  }));
} else {
  console.error("⚠️ La estructura de la API no es la esperada:", response.data);
  this.advancedTable = []; // Evita errores si la API devuelve algo incorrecto
}

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


  }

  ,
  mounted() {
    axios.get(`${import.meta.env.VITE_API_URL}/bookings/list?start_date=${this.dateValue.startDate}&end_date=${this.dateValue.endDate}`, headers)
      .then(response => {
        // console.log(response.data);

        const toast = useToast();
        toast.success(response.data.message);
        console.log("API Response:", response.data); // 👈 Ver qué estructura tiene la respuesta

 if (response.data && Array.isArray(response.data.data)) {
  this.advancedTable = response.data.data.map(item => ({
    ...item,
    formatted_created_at: dayjs(item.created_at).locale("es").format("DD MMM. YYYY")
  }));
} else {
  console.error("⚠️ La estructura de la API no es la esperada:", response.data);
  this.advancedTable = []; // Evita errores si la API devuelve algo incorrecto
}

        // console.log(this.advancedTable);
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
      });
  },

};
</script>
<style lang="scss"></style>
