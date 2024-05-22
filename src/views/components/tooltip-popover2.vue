<template>
  <div>
    <Card noborder>
      <div class="md:flex pb-6 items-center">
        <h6 class="flex-1 md:mb-0 mb-3">Traspasos</h6>
        <div class="md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse"
          :class="window.width < 768 ? 'space-x-rb' : ''">
          <InputGroup v-model="searchTerm" placeholder="Search" type="text" prependIcon="heroicons-outline:search"
            merged />
          <div>
            <VueTailwindDatePicker v-model="dateValue" input-classes="form-control" />
          </div>
          <Button icon="heroicons-outline:arrows-up-down"
            btnClass=" btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm "
            iconClass="text-lg" @click="reloadCrmTable" />

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
            <span v-if="props.column.field == 'code'" class="font-medium" @click="openModal(props.row.id)"
              :style="{ color: props.row.is_checkout === 1 ? 'red' : 'inherit', display: 'flex', flexDirection: 'column' }">
              <span>{{ props.row.code }}</span>
              <span style="margin-top: 5px; font-weight: bold;">Reg: {{ props.row.date_arrival }}{{
                props.row.is_checkout === 1 ? ' (ANULADO)' : '' }}</span>
            </span>




            <span v-if="props.column.field == 'nro_pax'" class="text-slate-500 dark:text-slate-400"
              :style="{ color: props.row.is_checkout === 1 ? 'red' : 'inherit' }">
              {{ props.row.origintransfer ? props.row.origintransfer.code : 'Sin reserva de origen' }}
              <br>
            </span>

            <span v-if="props.column.field == 'client_id'" class="text-slate-500 dark:text-slate-400"
              :style="{ color: props.row.is_checkout === 1 ? 'red' : 'inherit', display: 'flex', flexDirection: 'column' }">
              <span>{{ props.row.agency?.fullname }}</span>
              <span>{{ props.row.agency?.document }}</span>
            </span>

            <template v-if="props.column.field === 'amount'">
              <div v-if="!props.row.program_transfer || props.row.is_checkout === 1">
                <span style="color: red; font-weight: bold;">Tours Anulados</span>
              </div>
              <div v-else>
                <div v-for="(transfer, index) in props.row.program_transfer" :key="index"
                  style="display: flex; flex-direction: column; margin-bottom: 10px;">
                  <span>{{ transfer.description }} ({{ transfer.pivot.quantity }} pax) {{ transfer.pivot.date_assigned
                    }}</span>
                </div>
              </div>
            </template>



            <span v-if="props.column.field == 'checking'" class="text-slate-500 dark:text-slate-400">
              <span v-if="props.row.is_checkin" class="text-success-500">
                Confirmado
              </span>
              <span v-else-if="props.row.is_checkout" class="font-bold">
                Checkou
              </span>
              <span v-else>
                Pendiente
              </span>
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
      perpage: 10,
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
              name: 'traspaso-edit',
              params: {
                id: id,
              },
              query: {
                otherData: JSON.stringify(otherData)
              }
            });

          },
        },
        {
          name: "delete",
          icon: "heroicons-outline:trash",
          doit: (data) => {

            // console.log(data);
            // Realiza la solicitud HTTP POST al backend para eliminar el booking
            axios.post(`${import.meta.env.VITE_API_URL}/bookings/anular-traspase`, {
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
          label: "Código",
          field: "code",
        },

        {
          label: "Agencia Operador	",
          field: "client_id",
        },
        {
          label: "Reserva",
          field: "nro_pax",
        },
        {
          label: "Programa	",
          field: "amount",
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
      axios.get(`${import.meta.env.VITE_API_URL}/bookings/list-traspase?start_date=${this.dateValue.startDate}&end_date=${this.dateValue.endDate}`, headers)
        .then(response => {
          // console.log(response.data);

      

          const toast = useToast();
          toast.success(response.data.message);
          // console.log(response);
          this.advancedTable = response.data.data;

        })
        .catch(error => {
          console.error(error);
          if (error.response && error.response.status === 404) {
            // Si el error es 404 (No encontrado), mostrar un toast con el mensaje del backend
            const toast = useToast();
            toast.info('No se encontraron reservas traspasadas dentro del rango de fechas proporcionado.');
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

        axios.get(`${import.meta.env.VITE_API_URL}/bookings/list-traspase?start_date=${startDateOnly}&end_date=${endDateOnly}`, headers)
          .then(response => {
            // console.log(response.data);


            const toast = useToast();
            toast.success(response.data.message);

            // Si la respuesta es exitosa, establecer la tabla avanzada con los datos recibidos
            this.advancedTable = response.data.data;
          })
          .catch(error => {
            console.error(error);
            if (error.response && error.response.status === 404) {
              // Si el error es 404 (No encontrado), mostrar un toast con el mensaje del backend
              const toast = useToast();
              toast.info('No se encontraron reservas traspasadas dentro del rango de fechas proporcionado.');
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
    axios.get(`${import.meta.env.VITE_API_URL}/bookings/list-traspase?start_date=${this.dateValue.startDate}&end_date=${this.dateValue.endDate}`, headers)
      .then(response => {
        // console.log(response.data);

        const toast = useToast();
        toast.success(response.data.message);
        this.advancedTable = response.data.data;
      })
      .catch(error => {
        console.error(error);
        if (error.response && error.response.status === 404) {
          // Si el error es 404 (No encontrado), mostrar un toast con el mensaje del backend
          const toast = useToast();
          toast.info('No se encontraron reservas traspasadas dentro del rango de fechas proporcionado.');
        } else {
          // Si es otro tipo de error, mostrar un toast genérico de error
          const toast = useToast();
          toast.error('Ocurrió un error al obtener las reservas.');
        }
        // Vaciar la tabla avanzada
        this.advancedTable = [];
      });
  },

};
</script>
<style lang="scss"></style>
