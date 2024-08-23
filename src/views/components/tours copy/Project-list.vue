<template>
  <div>
    <Card noborder>
      <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
        <h5>Todos los Tours</h5>

        <div class="flex items-center space-x-3"> <!-- Contenedor flex para alinear los elementos -->
          <Button icon="heroicons-outline:arrows-up-down"
            btnClass="btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm"
            iconClass="text-lg" @click="reloadCrmTable" />
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
            <!-- Columna de Nombre -->
            <span v-if="props.column.field === 'nombre'" class="flex items-center justify-center p-2">
              {{ props.row.nombre }}
            </span>

            <!-- Columna de Precio Online -->
            <span v-if="props.column.field === 'direccion'" class="flex items-center justify-center p-2">
              {{ props.row.direccion }}
            </span>

            <!-- Columna de Precio Agencia -->
            <span v-if="props.column.field === 'price_agencia'" class="flex items-center justify-center p-2">
              {{ props.row.price_agencia }}
            </span>

            <!-- Columna de Tiempo -->
            <span v-if="props.column.field === 'time'" class="flex items-center justify-center p-2">
              {{ props.row.duracion }}
            </span>

            <!-- Columna de Configuración -->
            <span v-if="props.column.field === 'action'" class="flex items-center justify-center p-2 space-x-2">
              <!-- Botón de Agregar -->
              <button type="button" class="bg-neutral-900 text-white p-3 rounded flex items-center justify-center"
                @click="handleAddServices(props.row)">
                <Icon icon="heroicons:plus" class="w-7 h-7" />
              </button>

              <!-- Botón de Editar -->
              <button type="button" class="bg-blue-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleEdit(props.row.id)">
                <Icon icon="heroicons:pencil-square" class="w-7 h-7" />
              </button>

              <!-- Botón de Imágenes -->
              <button type="button" class="bg-yellow-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleAddsurroundings(props.row)">
                <Icon icon="heroicons:photo" class="w-7 h-7" />
              </button>

              <!-- Botón de Slider -->
              <button type="button" class="bg-green-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleAddRules(props.row.id)">
                <Icon icon="heroicons:camera" class="w-7 h-7" />
              </button>

              <!-- Botón de Detalles -->
              <button type="button" class="bg-purple-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleTypesBedrooms(props.row.id)">
                <Icon icon="heroicons:information-circle" class="w-7 h-7" />
              </button>

              <!-- Botón de Eliminar -->
              <button type="button" class="bg-red-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleDelete(props.row.id)">
                <Icon icon="heroicons:trash" class="w-7 h-7" />
              </button>
            </span>
          </template>
        </vue-good-table>

        <!-- Modales para las diferentes acciones -->
        <HotelsAddTypeBedroomModal :activeModal="addmodalTypeBedroom" @close="addmodalTypeBedroom = false" :idHotel="idHotel" />
        <HotelsAddServices :activeModal="addmodalServices" @close="addmodalServices = false"  :idHotel="idHotel" />
        <HotelsEditModal :activeModal="showEditModal" @close="showEditModal = false" @updateHotelsList="fetchHotels" />
        <HotelsAddSurroundingsModal :activeModal="showAddSurroundingsModal" @close="showAddSurroundingsModal = false"  :idHotel="idHotel" />
        <HotelsRulesAddModal :activeModal="showRulesAddModal" @close="showRulesAddModal = false" />
      </div>

    </Card>
  </div>
</template>

<script>
import { useHotelStore } from "@/store/hotel";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import InputGroup from "@/components/InputGroup";

import HotelsAddServices from "./ToursAddCaracteristica.vue";
import HotelsEditModal from "./ToursEditModal.vue";
import HotelsAddSurroundingsModal from "./ToursSliderAddModal.vue";
import HotelsRulesAddModal from "./ToursSliderEditModal.vue";
import HotelsAddTypeBedroomModal from "./HotelsAddTypeBedroomModal.vue";
import Card from '@/components/Card';

export default {
  components: {
    Icon,
    Card,
    HotelsAddServices,
    InputGroup,
    Button,
    HotelsAddSurroundingsModal,
    HotelsAddTypeBedroomModal,
    HotelsRulesAddModal,
    HotelsEditModal,
  },

  data() {
    return {
      rows: [],
      searchTerm: "",
      addmodalServices: false,
      addmodalTypeBedroom: false,
      showEditModal: false,
      idHotel: null,
      showRulesAddModal: false,
      showAddSurroundingsModal: false,
      columns: [
        { label: "Nombre", field: "nombre" },
        { label: "Dirección", field: "direccion" },
        { label: "Ciudad", field: "city_touristic.description" },
        { label: "Config", field: "action" },
      ],
    };
  },

  created() {
    this.fetchHotels();
  },

  methods: {
    async fetchHotels() {
      const store = useHotelStore();
      const hotels = await store.fetchHotels();
      this.rows = hotels.map((hotel, index) => ({
        ...hotel,
        number: index + 1,
      }));

      // console.log(this.rows);
    },

    handleAddServices(row) {
      this.idHotel = row.id;
      this.addmodalServices = true;
    },
    reloadCrmTable() {
      this.fetchHotels();
    },

    reloadHotelTable() {
      this.fetchHotels();
    },

    handleTypesBedrooms(id) {
      this.addmodalTypeBedroom = true;
    },

    handleEdit(id) {
      this.showEditModal = true;
    },

    handleAddsurroundings(row) {
      console.log(row);

      this.idHotel = row.id;
      this.showAddSurroundingsModal = true;
    },

    handleAddRules(id) {
      this.showRulesAddModal = true;
    },

    handleDelete(id) {
      // Lógica para eliminar el registro con el ID proporcionado
    },
  },
};
</script>

<style scoped>
.custom-table {
  @apply rounded-lg overflow-hidden border border-gray-200;
}

.custom-table th,
.custom-table td {
  @apply border-b border-gray-200 text-center;
}

.custom-table thead {
  @apply bg-gray-100;
}

.custom-table thead th {
  font-weight: bold;
}

.custom-table tbody tr:hover {
  @apply bg-gray-50;
}
</style>