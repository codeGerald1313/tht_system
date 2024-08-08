<template>
  <div>
    <Card noborder>
      <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
        <h5>Todos los Tours</h5>

        <div class="flex items-center space-x-3"> <!-- Contenedor flex para alinear los elementos -->
          <Button icon="heroicons-outline:arrows-up-down"
            btnClass="btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm"
            iconClass="text-lg" @click="reloadCrmTable" />
          <InputGroup v-model="searchTerm" placeholder="Buscar Tour" type="text"
            prependIcon="heroicons-outline:search" merged />
        </div>
      </div>

      <div class="overflow-x-auto">
        <PacksTable />
      </div>


      <EditProject :activeModal="showEditModal" @close="showEditModal = false" :transportData="transportData"
        title="Actualizar Datos Empleado" @updateTransportList="listarTransportes"></EditProject>


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
import { advancedTable } from "../../../constant/basic-tablle-data";
import { mapState, mapActions } from "pinia";
import { useProjectStore } from "@/store/project";
import InputGroup from "@/components/InputGroup";
import Button from "@/components/Button";
import axios from "axios";
import { useAuth } from "../../../store/auth";
import { useToast } from "vue-toastification";
import EditProject from "./TransportEditModal.vue";
import PacksTable from "./PacksTable";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

export default {
  components: {
    Button,
    InputGroup,
    Pagination,
    PacksTable,
    Dropdown,
    Icon,
    MenuItem,
    EditProject,
    Card,
    ProgressBar,
  },

  data() {
    return {
      searchTerm: "",
      transportData: {},
      showEditModal: false,  // Nueva propiedad para controlar el modal de edición
      advancedTable,
      current: 1,
      perpage: 10,
      pageRange: 10,
      actions: [
        {
          name: "edit",
          icon: "heroicons:pencil-square",
          doit: (data) => {
            // console.log(data);
            this.transportData = data; // Asigna los datos del empleado
            this.showEditModal = true; // Mostrar el modal de edición
          }
        },
        {
          name: "delete",
          icon: "heroicons-outline:trash",
          doit: async (data) => {
            try {
              // Realiza la solicitud HTTP DELETE al backend para eliminar el empleado
              await axios.delete(`${import.meta.env.VITE_API_URL}/transports/delete/${data.id}`, headers);

              // Si la solicitud se completa con éxito, muestra un toast de éxito
              const toast = useToast();
              toast.success('Transporte eliminado correctamente', {
                timeout: 1500, // Cierre automático después de 1.5 segundos
              });

              // Aquí podrías actualizar la lista de empleados en tu frontend si lo deseas
              // Por ejemplo, puedes llamar a this.listarEmpleados() para obtener la lista actualizada
              this.listarTransportes();

            } catch (error) {
              console.error('Error al eliminar empleado:', error);
            }
          },
        },
      ],


      columns: [
        {
          label: "Propietario	",
          field: "owner",
        },

        {
          label: "Tipo vehículo	",
          field: "vehicle_type",
        },

        {
          label: "Capacidad",
          field: "capacity",
        },
        {
          label: "Celular",
          field: "cellphone",
        },

        {
          label: "Teléfono",
          field: "telephone",
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
        await this.listarTransportes(); // Llama al método listarEmpleados()

        // Puedes agregar aquí cualquier otra lógica que necesites después de listar los empleados
      } catch (error) {
        console.error('Error al recargar Transportes :', error);
      }
    },
    async listarTransportes() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/transports/list`, headers);
        this.projects = response.data.data;

        const toast = useToast();
        toast.success('Trasportes listados correctamente', {
          timeout: 1500, // Cierre automático después de 1.5 segundos
        });

        // console.log(this.projects);
      } catch (error) {
        console.error('Error al obtener los datos de los empleados:', error);
      }
    }
  },

  mounted() {
    this.listarTransportes();
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
