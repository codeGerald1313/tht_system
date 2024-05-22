<template>
  <div>
    <Card noborder>
      <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
        <h5>Todas las Ciudades turísticas</h5>

        <div class="flex items-center space-x-3"> <!-- Contenedor flex para alinear los elementos -->
          <Button icon="heroicons-outline:arrows-up-down"
            btnClass="btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm"
            iconClass="text-lg" @click="reloadCrmTable" />
          <InputGroup v-model="searchTerm" placeholder="Buscar ciudad" type="text" prependIcon="heroicons-outline:search"
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

          <span v-if="props.column.field == 'id'" class="text-slate-500 dark:text-slate-400 block min-w-[50px]">
            {{ '-' }}
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
          <div v-if="props.column.field == 'action'" class="action-btn text-end mr-8">
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

      <EditProject :activeModal="showEditModal" @close="showEditModal = false" :CityTouristicData="CityTouristicData" 
        title="Actualizar Datos Empleado"  @updateCityTouristicList="listarHoteles"></EditProject>


    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import Pagination from "@/components/Pagination";
import ProgressBar from "@/components/ProgressBar";
import { MenuItem } from "@headlessui/vue";
import { advancedTable } from "../../constant/basic-tablle-data";
import { mapState, mapActions } from "pinia";
import { useProjectStore } from "@/store/project";
import InputGroup from "@/components/InputGroup";
import { useToast } from "vue-toastification";
import axios from "axios";
import { useAuth } from "../../store/auth";

import EditProject from "./CityTouristicEditModal.vue";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

export default {
  components: {
    Button,
    InputGroup,
    Pagination,
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
      CityTouristicData: {},
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
            this.CityTouristicData = data; // Asigna los datos del empleado
            this.showEditModal = true; // Mostrar el modal de edición
          }
        },
        {
          name: "delete",
          icon: "heroicons-outline:trash",
          doit: async (data) => {
            try {
              // Realiza la solicitud HTTP DELETE al backend para eliminar el empleado
              await axios.delete(`${import.meta.env.VITE_API_URL}/citytouristics/delete/${data.id}`, headers);

              // Si la solicitud se completa con éxito, muestra un toast de éxito
              const toast = useToast();
              toast.success('Ciudad Turística eliminado correctamente', {
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
          label: "#	",
          field: "id",
        },

        {
          label: "Nombre ciudad	",
          field: "description",
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
        await this.listarHoteles(); // Llama al método listarEmpleados()

        // Puedes agregar aquí cualquier otra lógica que necesites después de listar los empleados
      } catch (error) {
        console.error('Error al recargar Ciudades Turísticas :', error);
      }
    },
    async listarHoteles() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/citytouristics/list`, headers);
        this.projects = response.data.data;

        const toast = useToast();
        toast.success('Ciudades Turísticas listadas correctamente', {
          timeout: 1500, // Cierre automático después de 1.5 segundos
        });

        

        // console.log(this.projects);
      } catch (error) {
        console.error('Error al obtener los datos de los empleados:', error);
      }
    },


  },

  mounted() {
    this.listarHoteles();
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
