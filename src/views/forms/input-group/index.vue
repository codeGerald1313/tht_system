<template>
  <div>
    <Card noborder>
      <div class="md:flex pb-6 items-center">
        <h6 class="flex-1 md:mb-0 mb-3">Movimientos de Caja</h6>
        <div class="md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse">

          <Button icon="heroicons-outline:arrow-path"
            btnClass=" btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm "
            iconClass="text-lg" @click="reloadCrmTable" />

          <FromGroup name="d1">

            <flat-pickr v-model="dateDefault" class="form-control" id="d1" placeholder="yyyy, dd M" />
          </FromGroup>

          <InputGroup v-model="searchTerm"
            placeholder="Ingrese el N° de voucher, ó N° de venta, ó datos del emisor o receptor" type="text"
            prependIcon="heroicons-outline:search" merged class="ml-3  w-[513px]" />
          <Button icon="heroicons-outline:download" btnClass="bg-green-700 text-white ml-4 text-sm"
            @click.prevent="downloadFile" iconClass="text-lg" />

        </div>
      </div>
      <div class="-mx-6">
        <vue-good-table :columns="columns" styleClass=" vgt-table bordered centered " :rows="filteredRows"
          :sort-options="{
            enabled: false,
          }" :pagination-options="{
            enabled: true,
            perPage: perpage,
          }" :search-options="{
            enabled: true,
            externalQuery: searchTerm,
          }">
          <template v-slot:table-row="props">

            <span v-if="props.column.field == 'nro_voucher'" class="font-medium"
              :class="{ 'bg-red-100': props.row.is_visible === 0, 'text-red-600': props.row.is_visible === 0 }">
              {{ props.row.voucher?.description }}
              <br>
              <span class="font-bold">{{ props.row.nro_voucher }}</span>
              <span v-if="props.row.is_visible === 0" class="ml-1 text-red-600 font-bold">(ANULADO)</span>
            </span>


            <span v-if="props.column.field == 'concept'" class="font-medium">
              {{ props.row.concept?.description }}
              <br>

            </span>

            <div v-if="props.column.field == 'amount'" class="font-medium w-[100px]"
              :class="{ 'bg-red-100': props.row.is_visible === 0, 'text-red-600': props.row.is_visible === 0 }">
              <span>S/ {{ props.row.amount }}</span>
            </div>


            <span v-if="props.column.field == 'client.fullname'" class="font-medium">
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


            <span v-if="props.column.field == 'payment_method.description'" class="font-bold">
              {{ props.row.payment_method?.description }}
            </span>


            <span v-if="props.column.field == 'action' && props.row.is_visible === 1" class="flex items-center">
              <Dropdown classMenuItems="w-[140px]">
                <span class="text-xl">
                  <Icon icon="heroicons-outline:dots-vertical" />
                </span>
                <template v-slot:menus>
                  <MenuItem v-for="(item, i) in actions" :key="i">
                  <div @click="item.doit(props.row)"
                    :class="`
            ${item.name === 'anular'
                        ? 'bg-danger-500 text-danger-500 bg-opacity-30 hover:bg-opacity-100 hover:text-white'
                        : 'hover:bg-slate-900 hover:text-white'
                      }
            w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex space-x-2 items-center rtl:space-x-reverse `">
                    <span class="text-base">
                      <Icon :icon="item.icon" />
                    </span>
                    <span>{{ item.name }}</span>
                  </div>
                  </MenuItem>
                </template>
              </Dropdown>
              <Tooltip placement="top" arrow theme="info-500">
                <template #button>
                  <div class="action-btn" @click.prevent="handleVerDocumento(props.row.id)">
                    <Icon class="text-2xl" icon="heroicons-outline:arrow-down-on-square-stack" />
                  </div>
                </template>
                <span>Ver Documento</span>
              </Tooltip>
            </span>

          </template>
          <template #pagination-bottom="props">
            <div class="py-4 px-3">
              <Pagination :total="this.advancedTable.length" :current="current" :per-page="perpage"
                :pageRange="pageRange" @page-changed="current = $event" :pageChanged="props.pageChanged"
                :perPageChanged="props.perPageChanged" enableSearch enableSelect :options="options">
                >
              </Pagination>
            </div>
          </template>
        </vue-good-table>
      </div>
    </Card>
  </div>
</template>
<script>
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import FromGroup from "@/components/FromGroup";

import InputGroup from "@/components/InputGroup";
import Pagination from "@/components/Pagination";
import { MenuItem } from "@headlessui/vue";
import { advancedTable } from "../../../constant/basic-tablle-data";
import Tooltip from "@/components/Tooltip";
import { useToast } from 'vue-toastification';
import axios from "axios";
import { useAuth } from "../../../store/auth";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

export default {
  components: {
    Pagination,
    InputGroup,
    Tooltip,
    Dropdown,
    FromGroup,
    Icon,
    Card,
    MenuItem,
    Button,
  },

  data() {

    const timeZoneOffset = -5 * 60; // Esto representa UTC-5 (en minutos)
    const now = new Date();
    const currentDateTimePeru = new Date(now.getTime() + timeZoneOffset * 60000);

    // Formatear la fecha en el formato deseado (por ejemplo, YYYY-MM-DD)
    const formattedDate = currentDateTimePeru.toISOString().split('T')[0];


    return {
      advancedTable: [],
      toast: useToast(),
      current: 1,
      perpage: 10,
      dateDefault: formattedDate, // Establecer la fecha actual en formato YYYY-MM-DD
      pageRange: 5,
      searchTerm: "",
      actions: [


        {
          name: "anular",
          icon: "heroicons-outline:trash",
          doit: (row) => {
            // Obtener id y booking_id desde el objeto row
            const id = row.id;
            const booking_id = row.booking_id;

            // Realizar la petición DELETE con id en la ruta y booking_id en el cuerpo
            axios.delete(`${import.meta.env.VITE_API_URL}/moneys/delete/${id}`, {
              ...headers, // Aquí puedes incluir tus cabeceras si son necesarias
              data: { booking_id } // El cuerpo del request con booking_id
            })
              .then(response => {
                // Mostrar éxito en la respuesta
                this.toast.success(response.data.message);
              })
              .catch(error => {
                // Manejar cualquier error durante la eliminación
                console.error("Error al eliminar el elemento", error);
              });
          },
        }



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
          label: "Tipo de Vaucher",
          field: "nro_voucher",
        },
        {
          label: "Concepto",
          field: "concept.description",
        },
        {
          label: "Responsable",
          field: "client.fullname",
        },
        {
          label: "Monto",
          field: "amount",
        },

        {
          label: "Metódo de pago",
          field: "payment_method.description",
        },

        {
          label: "Fecha del movimiento",
          field: "date_movement",
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
      try {
        await this.fetchMoneyRecords(this.dateDefault);// Llama al método listarEmpleados()

        // Puedes agregar aquí cualquier otra lógica que necesites después de listar los empleados
      } catch (error) {
        console.error('Error al recargar Movimientos :', error);
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
    // Método para mostrar un toast de éxito
    showSuccessToast(message) {
      this.toast.success(message, {
        position: 'top-right', // Cambia la posición del toast a la parte superior derecha
        timeout: 3000 // Duración del toast en milisegundos
      });
    },

    // Método para mostrar un toast de error
    showErrorToast(message) {
      this.toast.error(message, {
        position: 'top-right', // Posición del toast
        timeout: 3000 // Duración del toast en milisegundos
      });
    },

    showInfoToast(message) {
      this.toast.info(message, {
        position: 'top-right', // Posición del toast
        timeout: 5000 // Duración del toast en milisegundos
      });
    },
    fetchMoneyRecords(date) {
      // Realiza la solicitud para obtener los registros de dinero con la nueva fecha
      axios.get(`${import.meta.env.VITE_API_URL}/moneys/list-movements/`, {
        ...headers,
        params: {
          date: date
        },
      })
        .then(response => {
          // Verificar si la respuesta es un array y tiene datos
          if (Array.isArray(response.data) && response.data.length > 0) {
            this.advancedTable = response.data; // Guardar los datos correctamente
            this.showSuccessToast('¡Registros de dinero obtenidos correctamente!');
          } else {
            // Si la respuesta está vacía o nula, mostrar mensaje informativo
            this.advancedTable = []; // Evita errores al iterar en la vista
            this.showInfoToast('No se registraron movimientos de dinero para este día o aún no hay registros.');
          }
        })

        .catch(error => {
          console.error('Error al obtener los registros de dinero:', error);
          this.showErrorToast('Error al obtener los registros de dinero. Por favor, inténtalo de nuevo.');
        });
    },

    async downloadFile() {
      try {

        // Realizar la solicitud GET al backend con los datos
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/export-money-por-dia-income-and-expense`,
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

  },
  mounted() {
    // Llama al método para obtener los registros de dinero cuando el componente se monta
    this.fetchMoneyRecords(this.dateDefault);
  },
  watch: {
    dateDefault(newValue, oldValue) {
      // Acciones que deseas realizar cuando cambia el valor de dateDefault
      // console.log('Nuevo valor de dateDefault:', newValue);
      this.fetchMoneyRecords(newValue);

      // Por ejemplo, podrías llamar a una función o realizar otra lógica aquí
    }
  },
  computed: {
    filteredRows() {
      if (!this.searchTerm) {
        return this.advancedTable;
      }
      const term = this.searchTerm.toLowerCase();
      return this.advancedTable.filter(row => {
        return (
          row.concept.description.toLowerCase().includes(term) || // Filtrar por la descripción del concepto
          String(row.amount).toLowerCase().includes(term) || // Filtrar por el monto
          String(row.client?.fullname).toLowerCase().includes(term) || // Filtrar por el nombre del cliente
          row.payment_method?.description.toLowerCase().includes(term) || // Filtrar por el método de pago
          row.voucher.description.toLowerCase().includes(term) || // Filtrar por el método de pago
          row.nro_voucher.toLowerCase().includes(term) || // Filtrar por el método de pago
          row.date_movement.toLowerCase().includes(term) // Filtrar por la fecha del movimiento
        );
      });
    }
  }



};
</script>
<style lang="scss"></style>
