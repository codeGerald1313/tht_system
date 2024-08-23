<template>
  <div>
    <vue-good-table :columns="columns" :rows="recetOrder" :sort-options="{ enabled: false }" class="custom-table">
      <template v-slot:table-row="props">
        <!-- Columna de Numeración -->
        <span v-if="props.column.field == 'index'" class="flex items-center justify-center p-2">
          {{ props.row.index }}
        </span>

        <!-- Columna de Imagen -->
        <span v-if="props.column.field == 'image'" class="flex items-center justify-center p-2">
          <div
            class="w-32 h-20 border border-gray-300 overflow-hidden rounded-lg transition-all duration-300 hover:border-2 hover:border-gray-500">
            <img :src="props.row.user.image" alt="Image" class="w-full h-full object-cover" />
          </div>
        </span>


        <!-- Columna de Acción (solo Editar) -->
        <span v-if="props.column.field == 'action'" class="flex items-center justify-center p-2">
          <Tooltip placement="top" arrow theme="dark">
            <template #button>
              <div class="action-btn bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                @click.prevent="handleEdit(props.row)">
                <Icon icon="heroicons:pencil-square" class="w-6 h-6" />
              </div>
            </template>
            <span>Edit</span>
          </Tooltip>
        </span>
      </template>
    </vue-good-table>

    <EditProject :activeModal="showEditModal" @close="showEditModal = false"></EditProject>
  </div>
</template>

<script>
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";
import { recetOrder } from "../../../constant/basic-tablle-data";
import EditProject from "./TransportEditModal.vue";

export default {
  components: {
    Tooltip,
    Icon,
    EditProject,
  },

  data() {
    return {
      recetOrder: recetOrder.map((item, index) => ({
        ...item,
        index: index + 1,
      })),
      showEditModal: false,
      columns: [
        { label: "#", field: "index" },
        { label: "Imagen", field: "image" },
        { label: "Opciones", field: "action" },
      ],
    };
  },
  methods: {
    handleEdit(row) {
      console.log(row);
      this.showEditModal = true;
    },
  },
};
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
  padding: 6px;
  border-radius: 50%;
  transition: background-color 0.3s, transform 0.3s;
}

.action-btn:hover {
  background-color: #2563eb;
  transform: scale(1.05);
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
  padding: 8px;
  /* Ajuste de padding */
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
