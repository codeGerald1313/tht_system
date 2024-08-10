<template>
  <div>
    <Card noborder>
      <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
        <h5>Ingresos Caja General</h5>

        <div class="flex items-center"> <!-- Nuevo contenedor para los elementos alineados horizontalmente -->
          <Button icon="heroicons-outline:arrow-path"
            btnClass=" btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm mr-3"
            iconClass="text-lg" @click="reloadCrmTable" />



            <FromGroup name="d1">

<div class="w-[370px]">
  <VueTailwindDatePicker v-model="dateValue" input-classes="form-control " />
</div>
</FromGroup>

          <InputGroup v-model="searchTerm" placeholder="Ingrese N° de recibo para buscar" type="text"
            prependIcon="heroicons-outline:search" merged class="ml-3  w-[280px]" />


          <Button icon="heroicons-outline:download" btnClass="bg-green-700 text-white ml-4 text-sm" iconClass="text-lg"
            @click.prevent="downloadFile2" />
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
          <span v-if="props.column.field == 'nro_voucher'">
            <div class="flex space-x-3 items-center text-left rtl:space-x-reverse">
              <span class="font-bold text-blue-700">{{ props.row.nro_voucher }}</span>
            </div>
          </span>



          <span v-if="props.column.field == 'branch_office'">
            <div class="flex space-x-3 items-center text-left rtl:space-x-reverse">
              {{ props.row.branch_office.description }}

            </div>
          </span>

          <span v-if="props.column.field === 'client'" class="block">
            <div>
              <!-- Mostrar información del cliente si está definido -->
              <template v-if="props.row.client">
                C- {{ props.row.client.fullname }}<br>
                <span class="font-bold" v-html="'N° Doc ' + props.row.client.document"></span>
              </template>
              <!-- Mostrar información del empleado si está definido -->
              <template v-else-if="props.row.employee">
                E- {{ props.row.employee.fullname }}<br>
                <span class="font-bold" v-html="'N° Doc ' + props.row.employee.document"></span>
              </template>
              <!-- Mostrar información del proveedor si está definido -->
              <template v-else-if="props.row.provider">
                P- {{ props.row.provider.fullname }}<br>
                <span class="font-bold" v-html="'N° Doc ' + props.row.provider.document"></span>
              </template>
              <!-- Mostrar mensaje de falta de información si ninguno está definido -->
              <template v-else>
                No hay información disponible
              </template>
            </div>
          </span>


          <span v-if="props.column.field == 'concept'">
            <div class="flex space-x-3 items-center text-left rtl:space-x-reverse">
              {{ props.row.concept.description }}


            </div>
          </span>

          <span v-if="props.column.field == 'payment_method'">
            <div class="flex space-x-3 items-center text-left rtl:space-x-reverse">
              {{ props.row.payment_method.description }}


            </div>
          </span>



          <div v-if="props.column.field == 'action'" class="action-btn text-end mr-3">

            <Tooltip placement="top" arrow theme="info-500">
              <template #button>
                <div class="action-btn" @click.prevent="handleVerDocumento(props.row.id)">
                  <Icon class="text-2xl" icon="heroicons:clipboard-document-list" />
                </div>
              </template>
              <span>Ver documento</span>
            </Tooltip>
            <Dropdown classMenuItems=" w-[150px]">
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


      <EditProject :activeModal="showEditModal" @close="showEditModal = false" :ingresoData="ingresoData"
        title="Actualizar Datos Ingreso" @updateIngresoList="listarIngresos"></EditProject>


    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import Pagination from "@/components/Pagination";
import ProgressBar from "@/components/ProgressBar";
import Tooltip from "@/components/Tooltip";

import EditProject from "./ClientEditModal.vue";

import { MenuItem } from "@headlessui/vue";
import { mapState, mapActions } from "pinia";
import { useProjectStore } from "@/store/project";
import InputGroup from "@/components/InputGroup";
import Button from '@/components/Button';
import FromGroup from '@/components/FromGroup';
import { useAuth } from "@/store/auth"
import { useToast } from "vue-toastification";
import axios from "axios";

import VueTailwindDatePicker from "vue-tailwind-datepicker";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación
function obtenerFechaActual() {
  const fecha = new Date();
  fecha.setHours(fecha.getHours() - 5); // Ajusta la hora para el huso horario de Perú (UTC-5)
  return fecha.toISOString().slice(0, 10);
}

export default {
  components: {
    InputGroup,
    Tooltip,
    FromGroup,
    Button,
    Pagination,
    Dropdown,
    Icon,
    EditProject,
    VueTailwindDatePicker,
    MenuItem,
    Card,
    ProgressBar,
  },

  data() {

    const timeZoneOffset = -5 * 60; // Esto representa UTC-5 (en minutos)
    const now = new Date();
    const currentDateTimePeru = new Date(now.getTime() + timeZoneOffset * 60000);

    // Formatear la fecha en el formato deseado (por ejemplo, YYYY-MM-DD)
    const formattedDate = currentDateTimePeru.toISOString().split('T')[0];

    const currentDate = new Date();

    // Obtener el primer día del mes actual
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const formattedFirstDay = firstDayOfMonth.toISOString().split('T')[0] + " 00:00:00";

    // Obtener el último día del mes actual
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const formattedLastDay = lastDayOfMonth.toISOString().split('T')[0] + " 23:59:59";

    
    return {
      searchTerm: "",
      ingresoData: {},
      showEditModal: false,  // Nueva propiedad para controlar el modal de edición
      current: 1,
      perpage: 10,
      dateDefault: obtenerFechaActual(), // Inicializa con la fecha actual en formato 'yyyy-mm-dd' (hora local de Perú)
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
            // console.log(data);
            this.ingresoData = data; // Asigna los datos del empleado
            this.showEditModal = true; // Mostrar el modal de edición
          }
        },
        {
          name: "delete",
          icon: "heroicons-outline:trash",
          doit: async (data) => {
            try {
              // Realiza la solicitud HTTP DELETE al backend para eliminar el empleado
              await axios.delete(`${import.meta.env.VITE_API_URL}/hotels/delete/${data.id}`, headers);

              // Si la solicitud se completa con éxito, muestra un toast de éxito
              const toast = useToast();
              toast.success('Hotel eliminado correctamente', {
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
          label: "N° ingreso",
          field: "nro_voucher",
        },

        {
          label: "Fecha",
          field: "date_movement",
        },

        {
          label: "Caja",
          field: "branch_office",
        },
        {
          label: "Emisor",
          field: "client",
        },

        {
          label: "Concepto",
          field: "concept",
        },

        {
          label: "Método pago	",
          field: "payment_method",
        },


        {
          label: "Monto ",
          field: "amount",
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
        await this.listarIngresos(); // Llama al método listarEmpleados()

        // Puedes agregar aquí cualquier otra lógica que necesites después de listar los empleados
      } catch (error) {
        console.error('Error al recargar Ingresos :', error);
      }
    },

    handleVerDocumento(id) {
      axios.get(`${import.meta.env.VITE_API_URL}/list-movements-pdf/${id}`)
        .then(response => {

        })
        .catch(error => {
          console.error('Error al obtener la URL del PDF:', error);
          // Abrir una nueva página con la URL capturada
          window.open(error.config.url, '_blank');
        });

    },

    async downloadFile2() {
      try {

        // Realizar la solicitud GET al backend con los datos
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/export-money-por-dia`,
          {
            params: {
              date: this.dateDefault
            },
            responseType: 'blob' // Especifica responseType como 'blob' para manejar archivos binarios
          }
        );

        // console.log(response);

        // Obtener la URL de respuesta
        const responseURL = response.request.responseURL;

        // Crear un objeto URL para la URL de respuesta
        const url = new URL(responseURL);

        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'archivo.xlsx'); // Nombre del archivo que se descargará
        link.style.display = 'none';

        // Agregar el enlace al documento
        document.body.appendChild(link);

        // Simular un clic en el enlace para iniciar la descarga
        link.click();

        // Eliminar el enlace del documento después de la descarga
        document.body.removeChild(link);

        // console.log('Descarga iniciada automáticamente.');

      } catch (error) {
        console.error('Error al descargar el archivo:', error);
      }
    },
    async listarIngresos() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/moneys-akemy/list`, {
          params: {
          start_date: this.dateValue.startDate,
          end_date: this.dateValue.endDate
        },
          ...headers
        });

        this.projects = response.data;

        // console.log(this.projects);

        // Verificar si this.projects está vacío o no tiene elementos
        if (this.projects && this.projects.length > 0) {
          // Mostrar un toast de éxito indicando que los ingresos fueron listados correctamente
          const toast = useToast();
          toast.success('Ingresos listados correctamente', {
            timeout: 1500, // Cierre automático después de 1.5 segundos
          });
        } else {
          // Mostrar un toast informativo indicando que no se registraron ingresos para el día de hoy
          const toast = useToast();
          toast.info('Para el día de hoy, todavía no exiten registros de ingreso', {
            timeout: 2500, // Cierre automático después de 1.5 segundos
          });
        }
      } catch (error) {
        console.error('Error al obtener los datos de los ingresos:', error);

        // En caso de error, mostrar un toast de error
        const toast = useToast();
        toast.error('Ocurrió un error al obtener los ingresos. Por favor, inténtalo de nuevo.', {
          timeout: 1500, // Cierre automático después de 1.5 segundos
        });
      }
    }
  },


  mounted() {
    Promise.all([
      this.listarIngresos()
    ]).then(() => {
      // console.log("Todas las llamadas a la API han sido completadas.");
    }).catch(error => {
      console.error("Error al realizar llamadas a la API:", error);
    });


    // console.log(this.dateDefault);

  },
  watch: {
    async dateValue(newValue, oldValue) {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/moneys-akemy/list`, {
          params: {
          start_date: this.dateValue.startDate,
          end_date: this.dateValue.endDate
        },
          ...headers
        });


        this.projects = response.data;

        // console.log(newValue);

        // Verificar si this.projects está vacío o no tiene elementos
        if (this.projects && this.projects.length > 0) {
          // Mostrar un toast de éxito indicando que los ingresos fueron listados correctamente
          const toast = useToast();
          toast.success('Ingresos listados correctamente', {
            timeout: 1500, // Cierre automático después de 1.5 segundos
          });
        } else {
          // Mostrar un toast informativo indicando que no se registraron ingresos para el día de hoy
          const toast = useToast();
          toast.info('Para este día, no hay registros de ingreso', {
            timeout: 2500, // Cierre automático después de 1.5 segundos
          });
        }
      } catch (error) {
        console.error('Error al obtener los datos de los empleados:', error);

        // En caso de error, mostrar un toast de error
        const toast = useToast();
        toast.error('Ocurrió un error al obtener los ingresos. Por favor, inténtalo de nuevo.', {
          timeout: 1500, // Cierre automático después de 1.5 segundos
        });
      }
    },
  },

};
</script>
<style lang="scss">
.listview {
  th {
    @apply last:text-end;
  }
}
</style>
