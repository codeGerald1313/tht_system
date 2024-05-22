<template>
  <div>
    <Card noborder>
      <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
        <h5>Todos los Guías Turísticos</h5>

        <div class="flex items-center space-x-3"> <!-- Contenedor flex para alinear los elementos -->
          <Button icon="heroicons-outline:arrows-up-down"
            btnClass="btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm"
            iconClass="text-lg" @click="reloadCrmTable" />
          <InputGroup v-model="searchTerm" placeholder="Buscar guía" type="text" prependIcon="heroicons-outline:search"
            merged />
        </div>
      </div>

      <vue-good-table class="-mx-6" :columns="columns"
        styleClass=" vgt-table  table-head   v-middle striped  listview" :rows="this.projects"
        :pagination-options="{
              enabled: true,
              perPage: perpage,
            }" :search-options="{
              enabled: true,
              externalQuery: searchTerm,
            }" :sort-options="{
              enabled: false,
            }">
        <template v-slot:table-row="props">
 
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


      
      <EditProject :activeModal="showEditModal" @close="showEditModal = false" :guideData="guideData"
        title="Actualizar Datos Empleado" @updateGuideList="listarGuide"></EditProject>


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
import { useAuth } from "../../../store/auth";
import axios from "axios";
import { useToast } from "vue-toastification";

import EditProject from "./GuideEditModal.vue";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación


export default {
  components: {
    Button,
    InputGroup,
    Pagination,
    Dropdown,
    Icon,
    EditProject,
    MenuItem,
    Card,
    ProgressBar,
  },

  data() {
    return {
      searchTerm: "",
      advancedTable,
      guideData: {},
      showEditModal: false,  // Nueva propiedad para controlar el modal de edición
      current: 1,
      perpage: 10,
      pageRange: 10,
      actions: [
        {
          name: "edit",
          icon: "heroicons:pencil-square",
          doit: (data) => {
            // console.log(data);
            this.guideData = data; // Asigna los datos del empleado
            this.showEditModal = true; // Mostrar el modal de edición
          }
        },
        {
          name: "delete",
          icon: "heroicons-outline:trash",
          doit: async (data) => {
            try {
              // Realiza la solicitud HTTP DELETE al backend para eliminar el empleado
              await axios.delete(`${import.meta.env.VITE_API_URL}/guides/delete/${data.id}`, headers);

              // Si la solicitud se completa con éxito, muestra un toast de éxito
              const toast = useToast();
              toast.success('Guía Turístico eliminado correctamente', {
                timeout: 1500, // Cierre automático después de 1.5 segundos
              });

              // Aquí podrías actualizar la lista de empleados en tu frontend si lo deseas
              // Por ejemplo, puedes llamar a this.listarEmpleados() para obtener la lista actualizada
              this.listarGuide();

            } catch (error) {
              console.error('Error al eliminar empleado:', error);
            }
          },
        },
      ],

      columns: [
        {
          label: "Nombres	",
          field: "fullname",
        },
        {
          label: "N° documento	",
          field: "document",
        },
        {
          label: "Celular",
          field: "cellphone",
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
        await this.listarGuide(); // Llama al método listarEmpleados()

        // Puedes agregar aquí cualquier otra lógica que necesites después de listar los empleados
      } catch (error) {
        console.error('Error al recargar Guías :', error);
      }
    },
    async listarGuide() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/guides/list`, headers);
        this.projects = response.data.data;

        const toast = useToast();
        toast.success('Guías Turísticos listados correctamente', {
          timeout: 1500, // Cierre automático después de 1.5 segundos
        });

        // console.log(this.projects);
      } catch (error) {
        console.error('Error al obtener los datos de los empleados:', error);
      }
    }
  },

  
  mounted() {
    this.listarGuide();
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
