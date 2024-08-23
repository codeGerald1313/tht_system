<template>
  <div>
    <Card noborder>
      <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
        <h5>Todos los Tours</h5>

        <div class="flex items-center space-x-3"> <!-- Contenedor flex para alinear los elementos -->
          <Button icon="heroicons-outline:arrows-up-down"
            btnClass="btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm"
            iconClass="text-lg" @click="fetchTours" />
          <InputGroup v-model="searchTerm" placeholder="Buscar Tour" type="text" prependIcon="heroicons-outline:search"
            merged />
        </div>
      </div>

      <div class="overflow-x-auto">
        <vue-good-table :columns="columns" :rows="rows" :search-options="{
          enabled: true,
          externalQuery: searchTerm,
        }" :sort-options="{ enabled: false }" class="custom-table">
          <template v-slot:table-row="props">
            <!-- Columna de Numeración -->


            <span v-if="props.column.field === 'number'" class="flex items-center justify-center p-2">
              {{ props.row.number }}
            </span>

            <!-- Columna de Nombre -->
            <span v-if="props.column.field === 'nombre'" class="flex items-center justify-center p-2">
              {{ props.row.nombre }}
            </span>

            <!-- Columna de Precio Online -->
            <span v-if="props.column.field === 'price_online'" class="flex items-center justify-center p-2">
              {{ props.row.price_online }}
            </span>

            <!-- Columna de Precio Agencia -->
            <span v-if="props.column.field === 'price_agencia'" class="flex items-center justify-center p-2">
              {{ props.row.price_agencia }}
            </span>

            <!-- Columna de Tiempo -->
            <span v-if="props.column.field === 'duracion'" class="flex items-center justify-center p-2">
              {{ props.row.duracion }}
            </span>

            <!-- Columna de Configuración -->
            <span v-if="props.column.field === 'action'" class="flex items-center justify-center p-2 space-x-2">
              <!-- Botón de Agregar -->
              <button type="button" class="bg-neutral-900 text-white p-3 rounded flex items-center justify-center"
                @click="handleAdd(props.row)">
                <Icon icon="heroicons:plus" class="w-7 h-7" />
              </button>

              <!-- Botón de Editar -->
              <button type="button" class="bg-blue-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleEdit(props.row)">
                <Icon icon="heroicons:pencil-square" class="w-7 h-7" />
              </button>

              <!-- Botón de Imágenes -->
              <button type="button" class="bg-yellow-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleImages(props.row)">
                <Icon icon="heroicons:photo" class="w-7 h-7" />
              </button>

              <!-- Botón de Slider -->
              <button type="button" class="bg-green-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleSlider(props.row)">
                <Icon icon="heroicons:camera" class="w-7 h-7" />
              </button>

              <!-- Botón de Eliminar -->
              <button type="button" class="bg-red-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleDelete(props.row.id)">
                <Icon icon="heroicons:trash" class="w-7 h-7" />
              </button>
            </span>
          </template>
        </vue-good-table>

        <ToursAddCaracteristica :activeModal="addmodalCaracteristica" @close="addmodalCaracteristica = false"
          :idTour="idTour" @updateListTours="fetchTours" />
        <ToursEditModal :activeModal="showEditModal" @close="showEditModal = false" :dataEditModal="dataEditModal" @updateListTours="fetchTours" />
        <ToursSliderAddModal :activeModal="showSliderAddModal" @close="showSliderAddModal = false"
          :sliderDataAddModal="sliderDataAddModal" />
        <ToursSliderEditModal :activeModal="showSliderEditModal" @close="showSliderEditModal = false"
          :sliderDataEditModal="sliderDataEditModal" />
      </div>
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
import ToursAddCaracteristica from "./ToursAddCaracteristica.vue";
import ToursEditModal from "./ToursEditModal.vue";
import ToursSliderAddModal from "./ToursSliderAddModal.vue";
import ToursSliderEditModal from "./ToursSliderEditModal.vue";
import { useCaracteristicaStore } from "@/store/tours";


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
    ToursAddCaracteristica,
    ToursSliderAddModal,
    ToursSliderEditModal,
    ToursEditModal,
    ProgressBar,
  },

  data() {
    return {
      rows: [],
      transportData: {},
      dataEditModal: {},
      sliderDataEditModal: {},
      sliderDataAddModal: {},
      idTour: null,
      searchTerm: "",
      addmodalCaracteristica: false,
      showEditModal: false,
      showSliderEditModal: false,
      showSliderAddModal: false,
      columns: [
        { label: "#", field: "number" },
        { label: "Nombre", field: "nombre" },
        { label: "P Oline", field: "price_agencia" },
        { label: "P Agencia", field: "price_online" },
        { label: "Tiempo", field: "duracion" },
        { label: "Config", field: "action" },
      ],
    };
  },

  created() {
    this.fetchTours();
  },

  methods: {
    async fetchTours() {
      const store = useCaracteristicaStore();
      const tours = await store.fetchTours(); // Llamada al store para obtener los tours
      this.rows = tours.map((tour, index) => ({
        ...tour,
        number: index + 1,
      }));
    },

    handleAdd(row) {
      this.idTour = row.id_tour;
      // console.log(this.idTour);
      this.addmodalCaracteristica = true;
    },

    handleEdit(row) {
      this.dataEditModal = row; // Asigna los datos del empleado
      this.showEditModal = true;
    },

    handleImages(row) {
      this.sliderDataEditModal = row; // Asigna los datos del empleado
      this.showSliderEditModal = true;
    },

    handleSlider(row) {
      this.sliderDataAddModal = row; // Asigna los datos del empleado
      this.showSliderAddModal = true;
    },

    handleDelete(id) {
      // Lógica para eliminar el registro con el ID proporcionado
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
