<template>
  <div class="overflow-x-auto">
    <vue-good-table :columns="columns" :rows="rows"  :sort-options="{ enabled: false }" class="custom-table">
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

   

       

        <span v-if="props.column.field === 'action'" class="flex items-center justify-center p-2 space-x-2">


          <!-- Botón de Editar -->
          <button type="button" class="bg-blue-500 text-white p-3 rounded flex items-center justify-center"
            @click="handleEdit(props.row.id)">
            <Icon icon="heroicons:pencil-square" class="w-7 h-7" />
          </button>


          <!-- Botón de Eliminar -->
          <button type="button" class="bg-red-500 text-white p-3 rounded flex items-center justify-center"
            @click="handleDelete(props.row.id)">
            <Icon icon="heroicons:trash" class="w-7 h-7" />
          </button>
        </span>

      </template>
    </vue-good-table>

    
    <EditProject :activeModal="showEditModal" @close="showEditModal = false" ></EditProject>

  </div>
</template>

<script>
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";
import { recetOrderSueperGa } from "../../../constant/basic-tablle-data";
import EditProject from "./TransportEditModal.vue";

export default {
  components: {
    Tooltip,
    Icon,
    EditProject
  },

  data() {
    return {
      rows: recetOrderSueperGa,
      showEditModal: false,
      columns: [
        { label: "#", field: "number" },
        { label: "Nombre", field: "name" },
        { label: "Icono", field: "time" },
        { label: "Tipo", field: "hotel" },

        { label: "Opciones", field: "action" }
      ]
    };
  },

  methods: {
    handleDetail(id) {
      // Lógica para ver detalles del registro con el ID proporcionado
      console.log(`Ver detalles del registro con ID: ${id}`);
    },
    handleEdit(id) {
      this.showEditModal = true; // Mostrar el modal de edición
    },
    handleDelete(id) {
      // Lógica para eliminar el registro con el ID proporcionado
      console.log(`Eliminar registro con ID: ${id}`);
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

