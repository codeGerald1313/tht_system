<template>
  <div class="overflow-x-auto">
    <vue-good-table :columns="columns" :rows="rows" :sort-options="{ enabled: false }" class="custom-table">
      <template v-slot:table-row="props">
        <!-- Columna de Numeración -->
        <span v-if="props.column.field === 'number'" class="flex items-center justify-center p-2">
          {{ props.row.number }}
        </span>

        <!-- Columna de Nombre -->
        <span v-if="props.column.field === 'name'" class="flex items-center justify-center p-2">
          {{ props.row.nombre }}
        </span>

        <!-- Columna de Tiempo -->
        <span v-if="props.column.field === 'time'" class="flex items-center justify-center p-2">
          {{ props.row.tiempo }}
        </span>

        <!-- Columna de Hotel -->
        <span v-if="props.column.field === 'hotel'" class="flex items-center justify-center p-2">
          {{ props.row.con_hotel }}
        </span>

        <!-- Columna de Tours -->
        <span v-if="props.column.field === 'tours'" class="flex items-center justify-center p-2">
          {{ props.row.con_turs }}
        </span>

        <!-- Columna de Pasaje -->
        <span v-if="props.column.field === 'passage'" class="flex items-center justify-center p-2">
          {{ props.row.con_pasaje }}
        </span>

        <!-- Columna de Precio -->
        <span v-if="props.column.field === 'price'" class="flex items-center justify-center p-2">
          {{ props.row.precio }}
        </span>

        <!-- Columna de Acción (Opciones) -->
        <span v-if="props.column.field === 'action'" class="flex items-center justify-center p-2 space-x-2">
          <!-- Botón de Detalle -->
          <button type="button" class="btn btn-outline-dark" @click="handleDetail(props.row)">
            <Icon icon="heroicons:document-text" class="w-8 h-8" />
          </button>

          <!-- Botón de Eliminar -->
          <button type="button" class="btn btn-danger" @click="handleDelete(props.row.id_pack)">
            <Icon icon="heroicons:pencil-square" class="w-8 h-8" />
          </button>
        </span>
      </template>
    </vue-good-table>

    <EditProject :activeModal="showEditModal" @close="showEditModal = false" :detailData="detailData"></EditProject>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { usePackStore } from '@/store/usePackStore';
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";
import EditProject from "./TransportEditModal.vue";

export default {
  components: {
    Tooltip,
    Icon,
    EditProject
  },

  setup() {
  const packStore = usePackStore();
  const showEditModal = ref(false);
  const detailData = ref(null); // Esto almacenará los datos del pack seleccionado

  // Define the columns of the table
  const columns = [
    { label: "#", field: "number" },
    { label: "Nombre", field: "name" },
    { label: "Tiempo", field: "time" },
    { label: "Hotel", field: "hotel" },
    { label: "Tours", field: "tours" },
    { label: "Pasaje", field: "passage" },
    { label: "Precio", field: "price" },
    { label: "Opciones", field: "action" }
  ];

  // Define a computed property to reflect the rows from the store
  const rows = computed(() => {
    return packStore.packs.map(pack => ({
      number: pack.id_pack, // Column for numbering
      nombre: pack.nombre,
      tiempo: pack.tiempo,
      con_hotel: pack.con_hotel,
      con_turs: pack.con_turs,
      con_pasaje: pack.con_pasaje,
      precio: pack.precio,
      id_pack: pack.id_pack // For handling actions
    }));
  });

  // Fetch packs when component is mounted
  onMounted(() => {
    packStore.fetchPacks();
  });

  const handleDetail = async (pack) => {
    // Buscas el pack y sus detalles antes de abrir el modal de edición
    const selectedPack = await packStore.fetchPackWithTours(pack.id_pack);
    detailData.value = selectedPack;
    showEditModal.value = true;
  };

  const handleDelete = (id) => {
    console.log(`Eliminar registro con ID: ${id}`);
    // Implement the delete logic here
  };

  return {
    columns,
    rows,
    showEditModal,
    handleDetail,
    handleDelete,
    detailData // Asegúrate de devolverlo para usarlo en el template
  };
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
  @apply px-4 py-2; /* Ajusta el padding según sea necesario */
  max-width: 200px; /* Ajusta el ancho máximo según sea necesario */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
