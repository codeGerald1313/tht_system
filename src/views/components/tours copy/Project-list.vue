<template>
  <div>
    <Card noborder>
      <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
        <h5>Todos los Hoteles</h5>

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
            <span v-if="props.column.field === 'nombre'">
              {{ props.row.nombre }}
            </span>

            <!-- Columna de Precio Online -->
            <span v-if="props.column.field === 'direccion'">
              {{ props.row.direccion }}
            </span>

            <!-- Columna de Precio Agencia -->
            <span v-if="props.column.field === 'city_touristic'">
              {{ props.row.city_touristic }}
            </span>



            <!-- Columna de Configuración -->
            <span v-if="props.column.field === 'action'" class="flex items-center justify-center p-2 space-x-2">
              <!-- Botón de Agregar Servicio -->
              <button type="button" class="bg-neutral-900 text-white p-3 rounded flex items-center justify-center"
                @click="handleAddServices(props.row)">
                <Icon icon="heroicons:cog" class="w-7 h-7" />
                <span class="ml-2">Agregar Servicio</span>
              </button>


              <!-- Botón de Editar -->
              <button type="button" class="bg-blue-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleEdit(props.row)">
                <Icon icon="heroicons:pencil-square" class="w-7 h-7" />
              </button>

              <!-- Botón de Imágenes -->
              <button type="button" class="bg-yellow-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleAddsurroundings(props.row)">
                <Icon icon="heroicons:map" class="w-7 h-7" />
                <span class="ml-2">Registrar Alrededor</span>

              </button>
              <!-- Botón de Registrar Regla -->
              <button type="button" class="bg-green-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleAddRules(props.row)">
                <Icon icon="heroicons:document-text" class="w-7 h-7" />
                <span class="ml-2">Registrar Regla</span>
              </button>


              <!-- Botón de Tipos de Habitación -->
              <button type="button" class="bg-purple-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleTypesBedrooms(props.row)">
                <Icon icon="heroicons:home" class="w-7 h-7" />
                <span class="ml-2">Tipos de Habitación</span>
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
        <HotelsAddTypeBedroomModal :activeModal="addmodalTypeBedroom" @close="addmodalTypeBedroom = false"
          :idHotel="idHotel" />
        <HotelsAddServices :activeModal="addmodalServices" @close="addmodalServices = false" :idHotel="idHotel" />
        <HotelsEditModal :activeModal="showEditModal" @close="showEditModal = false" :dataEditModal="dataEditModal"
          @updateHotelsList="fetchHotels" />
        <HotelsAddSurroundingsModal :activeModal="showAddSurroundingsModal" @close="showAddSurroundingsModal = false" :hotelName="hotelName"
          :idHotelSurroundingsModal="idHotelSurroundingsModal" />
        <HotelsRulesAddModal :activeModal="showRulesAddModal" @close="showRulesAddModal = false" :idHotel="idHotel" />
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
      searchTerm: "",
      hotelName: '',
      idHotelSurroundingsModal: null,
      dataEditModal: {},
      addmodalServices: false,
      addmodalTypeBedroom: false,
      showEditModal: false,
      idHotel: null,
      showRulesAddModal: false,
      showAddSurroundingsModal: false,
      columns: [
        { label: "Nombre", field: "nombre" },
        { label: "Dirección", field: "direccion" },
        { label: "Ciudad", field: "city_touristic" },
        { label: "Config", field: "action" },
      ],
    };
  },

  created() {
    this.fetchHotels();
  },

  computed: {
    rows() {
      const store = useHotelStore();
      return store.hotels;
    },
  },
  methods: {
    async fetchHotels() {
      const store = useHotelStore();
      try {
        await store.fetchHotels();
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
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

    handleTypesBedrooms(row) {
      this.idHotel = row.id;
      this.addmodalTypeBedroom = true;
    },

    handleEdit(row) {
      this.dataEditModal = row; // Asigna los datos del empleado
      this.showEditModal = true;
    },

    handleAddsurroundings(row) {
      // console.log(row);

      this.idHotelSurroundingsModal = row.id;
      this.hotelName = row.nombre; // Asigna el nombre del hotel a una propiedad
      this.showAddSurroundingsModal = true;
    },

    handleAddRules(row) {
      this.idHotel = row.id;

      this.showRulesAddModal = true;
    },

    async handleDelete(id) {
      const confirmation = window.confirm('¿Estás seguro de que deseas eliminar este hotel?');
      if (confirmation) {
        try {
          const store = useHotelStore();

          const result = await store.deleteHotel(id);
          if (result.success) {
            alert(result.message);
            // Opcional: Emitir un evento o realizar una acción adicional después de la eliminación
            // Ejemplo: this.$emit('updateHotelList');
          } else {
            alert(result.message);
          }
        } catch (error) {
          console.error('Error al eliminar el hotel:', error);
          alert('Error al eliminar el hotel');
        }
      }

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