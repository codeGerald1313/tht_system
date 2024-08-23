<template>
  <div>
    <vue-good-table :columns="columns" :rows="sliders" :sort-options="{ enabled: false }" class="custom-table">
      <template v-slot:table-row="props">
        <!-- Columna de Imagen -->
        <span v-if="props.column.field == 'image'" class="flex items-center justify-center p-2 center-content">
          <div class="w-28 h-28 border border-gray-300 overflow-hidden rounded-lg transition-all duration-300 hover:border-2 hover:border-gray-500">
            <img :src="props.row.imagen" alt="Image" class="w-full h-full object-cover" />
          </div>
        </span>

        <!-- Columna de Acción (solo Editar) -->
        <span v-if="props.column.field == 'action'" class="flex items-center justify-center p-2 center-content">
          <Tooltip placement="top" arrow theme="dark">
            <template #button>
              <div 
                class="action-btn bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                @click="openEditModal(props.row)"
              >
                <Icon icon="heroicons:pencil-square" class="w-8 h-8" />
              </div>
            </template>
            <span>Edit</span>
          </Tooltip>
        </span>
      </template>
    </vue-good-table>

    <EditProject :activeModal="showEditModal" :sliderData="selectedSlider" @close="closeEditModal" @updateTransportList="refreshSliders" />
  </div>
</template>

<script setup>
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";
import EditProject from "./TransportEditModal.vue";
import { ref, onMounted } from 'vue';
import { useSliderStore } from "@/store/sliderStore";

// Inicializa el store
const sliderStore = useSliderStore();
const sliders = ref([]);

// Variables para el modal de edición
const showEditModal = ref(false);
const selectedSlider = ref({});

// Cargar sliders al montar el componente
onMounted(async () => {
  await sliderStore.fetchSliders();
  sliders.value = sliderStore.sliders;
});

// Abrir modal de edición
const openEditModal = (row) => {
  selectedSlider.value = row;
  showEditModal.value = true;
};

// Cerrar modal de edición
const closeEditModal = () => {
  showEditModal.value = false;
};

// Refrescar lista de sliders después de la actualización
const refreshSliders = async () => {
  await sliderStore.fetchSliders();
  sliders.value = sliderStore.sliders;
};

const columns = [
  { label: "Imagen", field: "imagen" },
  { label: "Opciones", field: "action" }
];
</script>

<style lang="scss">
/* Estilos personalizados */
.vgt-table {
  /* Personaliza la tabla si es necesario */
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s, transform 0.3s;
}

.action-btn:hover {
  background-color: #2563eb;
  transform: scale(1.1);
}

/* Tabla personalizada */
.custom-table {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}

.custom-table th,
.custom-table td {
  border: 1px solid #e0e0e0;
  text-align: center;
}

.custom-table thead {
  background-color: #f9f9f9;
}

.custom-table tbody tr:hover {
  background-color: #f1f1f1;
}

/* Centrando el contenido */
.custom-table .center-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
