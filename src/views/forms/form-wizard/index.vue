<template>
  <div>
    <div class="card-auto space-y-5">

      <Card title="Historial de Caja" noborder>
        <template #header>

          <Button icon="heroicons-outline:arrow-path"
            btnClass=" btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm "
            iconClass="text-lg" @click="reloadCrmTable" />
        </template>
        <div class="-mx-6">
          <div>
            <vue-good-table :columns="columns" styleClass=" vgt-table  lesspadding2 centered " :rows="advancedTable"
              :pagination-options="{
              enabled: true,
              perPage: perpage,
            }" :sort-options="{
              enabled: false,
            }">
              <template v-slot:table-row="props">
                <span v-if="props.column.field == 'branch_box'" class="font-medium" :style="{ fontWeight: 'bold' }">
    {{ props.row.branch_box.description }}
  </span>

  <span v-if="props.column.field == 'amount_opening'"
        class="font-medium text-blue-500">
    S/. {{ props.row.amount_opening }}
  </span>

  <span v-if="props.column.field == 'amount_closing'"
        class="font-medium text-purple-500">
    S/. {{ props.row.amount_closing }}
  </span>
            <span v-if="props.column.field == 'user'" class="font-medium">
           {{ props.row.user.name}}
              <br>

            </span>
    
    
                <span v-if="props.column.field == 'action'">
                  <div class="flex space-x-3 justify-center rtl:space-x-reverse">

                    <Tooltip placement="top" arrow theme="info-500">
                      <template #button>
                        <div class="action-btn" @click.prevent="handleVerDocumento(props.row.id)">
                          <Icon class="text-2xl" icon="heroicons-outline:clipboard-document-check" />
                        </div>
                      </template>
                      <span>Ver Cuadre</span>
                    </Tooltip>
                  </div>
                </span>
              </template>
              <template #pagination-bottom="props">
                <div class="py-4 px-3 flex justify-center">
                  <Pagination :total="advancedTable.length" :current="current" :per-page="perpage" :pageRange="pageRange"
                    @page-changed="current = $event" :pageChanged="props.pageChanged"
                    :perPageChanged="props.perPageChanged" enableSearch enableSelect :options="options">
                    >
                  </Pagination>
                </div>
              </template>
            </vue-good-table>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "../../home/Analytics-Component/Breadcrumbs.vue";
import Card from "@/components/Card";
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import Icon from "@/components/Icon";
import CrmTable from "./TableHistoryBox.vue";
import Tooltip from "@/components/Tooltip";

import DropEvent from "../../home/Analytics-Component//DropEvent";
import SelectMonth from "../../home/Analytics-Component/SelectMonth";
import Pagination from "@/components/Pagination";

// Import Images
import shade1 from "@/assets/images/all-img/shade-1.png"
import shade2 from "@/assets/images/all-img/shade-2.png"
import shade3 from "@/assets/images/all-img/shade-3.png"
import shade4 from "@/assets/images/all-img/shade-4.png"
import { advancedTable } from "../../../constant/basic-tablle-data";
import { useToast } from 'vue-toastification';
import { useAuth } from "../../../store/auth";
import axios from "axios";


const headers = useAuth().headers(); // Obtiene los encabezados de autenticación
const headersArchivos = useAuth().headersMultipart(); // Obtiene los encabezados de autenticación


export default {
  components: {
    Card,
    Button,
    Tooltip,
    Pagination,
    Icon,
    CrmTable,
    DropEvent,
    FromGroup,
    SelectMonth,
    Breadcrumb,
  },
  data() {
    return {

      advancedTable: [],
      toast: useToast(),
      current: 1,
      perpage: 10,
      pageRange: 5,
      searchTerm: "",

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
          label: "Caja",
          field: "branch_box",
        },
        {
          label: "Fecha Apertura	",
          field: "date_opening",
        },
        {
          label: "Monto Apertura	",
          field: "amount_opening",
        },
        {
          label: "Fecha Cierre	",
          field: "date_closing",
        },

        {
          label: "Monto Cierre	",
          field: "amount_closing",
        },

        {
          label: "Usuario	",
          field: "user",
        },

        {
          label: "Action",
          field: "action",
        },
      ],

      reloadKey: 0, // Clave para forzar la recarga del componente CrmTable



      rangeDate: null,

      statistics: [
        {
          title: "Sales",
          count: "354",
          bg: "bg-warning-500",
          text: "text-primary-500",
          percent: "25.67% ",
          icon: "heroicons:arrow-trending-up",
          img: shade1,
          percentClass: "text-primary-500",
        },
        {
          title: "Revenue ",
          count: "$86,954",

          bg: "bg-info-500",
          text: "text-primary-500",
          percent: "8.67%",
          icon: "heroicons:arrow-trending-up",
          img: shade2,
          percentClass: "text-primary-500",
        },
        {
          title: "Conversion",
          count: "15%",
          bg: "bg-primary-500",
          text: "text-danger-500",
          percent: "1.67%  ",
          icon: "heroicons:arrow-trending-down",
          img: shade3,
          percentClass: "text-danger-500",
        },
        {
          title: "Leads",
          count: "654",
          bg: "bg-success-500",
          text: "text-primary-500",
          percent: "11.67%  ",
          icon: "heroicons:arrow-trending-up",
          img: shade4,
          percentClass: "text-primary-500",
        },
      ],
      Campaigns: [
        {
          name: "Channel",
          value: "roi",
        },
        {
          name: "Email",
          value: "40%",
        },
        {
          name: "Website",
          value: "28%",
        },
        {
          name: "Facebook",
          value: "34%",
        },
        {
          name: "Offline",
          value: "17%",
        },
      ],
    };
  },

  methods: {
  handleVerDocumento(id) {
    axios.get(`${import.meta.env.VITE_API_URL}/list-box-cuadre/${id}`)
      .then(response => {
        // Simulamos un error de Axios manualmente con la misma estructura
        return Promise.reject({
          message: "Network Error",
          name: "AxiosError",
          stack: "AxiosError: Network Error\n    at FakeStack",
          config: {
            url: `${import.meta.env.VITE_API_URL}/list-box-cuadre/${id}`,
            method: "get",
            headers: { "Accept": "application/json, text/plain, */*" },
          },
          code: "ERR_NETWORK",
          status: null,
        });
      })
      .catch(error => {
        console.error('Error al obtener la URL del PDF:', error);

        // Aseguramos que se abra la URL, aunque sea un error de red falso
        window.open(error.config?.url || `${import.meta.env.VITE_API_URL}/list-box-cuadre/${id}`, '_blank');
      });
  },

    // Método para mostrar un toast de éxito
    showSuccessToast(message) {
      this.toast.success(message, {
        position: 'top-right', // Posición del toast
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
    fetchMoneyBoxes() {
      axios.get(`${import.meta.env.VITE_API_URL}/moneyboxes/list-normally`, headers)
        .then(response => {
          // Una vez que se reciban los datos del servidor, actualiza los datos en el componente
          this.advancedTable = response.data.data;
          // console.log(this.advancedTable);
          this.showSuccessToast('Historial de caja recuperado correctamente!');
        })
        .catch(error => {
          console.error('Error al obtener los registros de dinero:', error);
          this.showErrorToast('Error al obtener el Historial de caja. Por favor, inténtalo de nuevo.');
        });
    }
  },
  mounted() {
    // Llama al método para obtener los registros de dinero cuando el componente se monta
    this.fetchMoneyBoxes();
  }
};
</script>
<style lang=""></style>
