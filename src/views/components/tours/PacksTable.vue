<template>
  <div class="overflow-x-auto">
    <vue-good-table :columns="columns" :rows="rows" :sort-options="{ enabled: false }" class="custom-table">
      <template v-slot:table-row="props">
        <!-- Columna de Numeración -->
        <span v-if="props.column.field === 'number'"  class="flex items-center justify-center p-2">
          9
        </span>

        <!-- Columna de Nombre -->
        <!-- Columna de Nombre -->
        <span v-if="props.column.field === 'name'"  class="flex items-center justify-center p-2">
          Paquete 3 Dias 2 Noches
        </span>

        <!-- Columna de Tiempo -->
        <span v-if="props.column.field === 'time'"  class="flex items-center justify-center p-2">
          3 DIAS
        </span>

        <!-- Columna de Hotel -->
        <span v-if="props.column.field === 'hotel'" class="flex items-center justify-center p-2">
          SI
        </span>

        <!-- Columna de Tours -->
        <span v-if="props.column.field === 'tours'" class="flex items-center justify-center p-2">
          SI
        </span>

        <!-- Columna de Pasaje -->
        <span v-if="props.column.field === 'passage'" class="flex items-center justify-center p-2">
          NO
        </span>

        <!-- Columna de Precio -->
        <span v-if="props.column.field === 'price'" class="flex items-center justify-center p-2">
          299.00

        </span>

        <span v-if="props.column.field === 'action'" class="flex items-center justify-center p-2 space-x-2">
          <!-- Botón de Agregar -->
          <button type="button" class="bg-neutral-900 text-white p-3 rounded flex items-center justify-center"
            @click="handleAdd(props.row.id)">
            <Icon icon="heroicons:plus" class="w-7 h-7" />
          </button>

          <!-- Botón de Editar -->
          <button type="button" class="bg-blue-500 text-white p-3 rounded flex items-center justify-center"
            @click="handleEdit(props.row.id)">
            <Icon icon="heroicons:pencil-square" class="w-7 h-7" />
          </button>

       <!-- Botón de Imágenes -->
          <button type="button" class="bg-yellow-500 text-white p-3 rounded flex items-center justify-center"
            @click="handleImages(props.row.id)">
            <Icon icon="heroicons:photo" class="w-7 h-7" />
          </button>

          <!-- Botón de Slider -->
          <button type="button" class="bg-green-500 text-white p-3 rounded flex items-center justify-center"
            @click="handleSlider(props.row.id)">
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

    
    <ToursAddCaracteristica  :activeModal="addmodalCaracteristica" @close="addmodalCaracteristica = false"></ToursAddCaracteristica>
    <ToursEditModal  :activeModal="showEditModal" @close="showEditModal = false"></ToursEditModal>
    <ToursSliderAddModal  :activeModal="showSliderAddModal" @close="showSliderAddModal = false"></ToursSliderAddModal>
    <ToursSliderEditModal  :activeModal="showSliderEditModal" @close="showSliderEditModal = false"></ToursSliderEditModal>

  </div>
</template>

<script>
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";
import { recetOrderSueperGa } from "../../../constant/basic-tablle-data";
import { useProjectStore } from "@/store/project";
import ToursAddCaracteristica from "./ToursAddCaracteristica.vue";
import ToursEditModal from "./ToursEditModal.vue";
import ToursSliderAddModal from "./ToursSliderAddModal.vue";
import ToursSliderEditModal from "./ToursSliderEditModal.vue";

export default {
  components: {
    Tooltip,
    Icon,
    ToursAddCaracteristica,
    ToursSliderAddModal,
    ToursSliderEditModal,
    ToursEditModal
  },

  data() {
    return {
      rows: recetOrderSueperGa,
      modalStore: useProjectStore(), // Usa el store dentro de data
      addmodalCaracteristica: false,
      showEditModal: false,
      showSliderEditModal: false,
      showSliderAddModal: false,
      columns: [
        { label: "#", field: "number" },
        { label: "Nombre", field: "name" },
        { label: "P Oline", field: "time" },
        { label: "P Agencia", field: "hotel" },
        { label: "Tiempo", field: "tours" },
        { label: "Config", field: "action" }
      ]
    };
  },

  methods: {
    handleAdd(id) {
      this.addmodalCaracteristica = true; // Mostrar el modal de edición
    },
    handleEdit(id) {
      this.showEditModal = true; // Mostrar el modal de edición
    },
    handleImages(id) {
      this.showSliderEditModal = true; // Mostrar el modal de edición
    },
    handleSlider(id) {
      this.showSliderAddModal = true; // Mostrar el modal de edición
    },
    handleDelete(id) {
      // Lógica para eliminar el registro con el ID proporcionado
    }
  }
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

.custom-table tbody tr:hover {
  @apply bg-gray-50;
}

.btn-group {
  @apply flex space-x-2;
}

.btn {
  @apply cursor-pointer px-2 py-1 rounded-md transition-colors;
}

.btn-outline-dark {
  @apply border border-gray-700 text-gray-700 bg-transparent;
}

.btn-outline-dark:hover {
  @apply bg-gray-700 text-white;
}

.btn-danger {
  @apply bg-red-500 text-white;
}

.btn-danger:hover {
  @apply bg-red-600;
}

.column-name {
  @apply px-4 py-2;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

