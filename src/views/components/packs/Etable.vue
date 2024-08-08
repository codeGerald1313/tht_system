<template>
  <div>
    <vue-good-table :columns="columns" :rows="recetOrderSueperGa" :sort-options="{ enabled: false }" class="custom-table">
      <template v-slot:table-row="props">
        <!-- Columna de Tours -->
        <span v-if="props.column.field == 'tours'" class="flex items-center justify-center p-2 center-content">
          {{ props.row.tours }}
        </span>

        <!-- Columna de Acción (Eliminar) -->
        <span v-if="props.column.field == 'action'" class="flex items-center justify-center p-2 center-content">
          <Tooltip placement="top" arrow theme="dark">
            <template #button>
              <div @click="handleDelete(props.row.id)" class="action-btn bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors">
                <Icon icon="heroicons:trash" class="w-8 h-8" />
              </div>
            </template>
            <span>Eliminar</span>
          </Tooltip>
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";
import { recetOrderSueperGa } from "../../../constant/basic-tablle-data";

export default {
  components: {
    Tooltip,
    Icon
  },

  data() {
    return {
      recetOrderSueperGa,
      current: 1,
      perpage: 6,
      pageRange: 5,
      options: [
        { value: "1", label: "1" },
        { value: "3", label: "3" },
        { value: "5", label: "5" }
      ],
      columns: [
        { label: "Tours", field: "tours" },
        { label: "Acciones", field: "action" }
      ]
    };
  },

  methods: {
    handleDelete(id) {
      // Lógica para eliminar el registro con el ID proporcionado
      console.log(`Eliminar registro con ID: ${id}`);
    }
  }
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
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s, transform 0.3s;
}

.action-btn:hover {
  background-color: #dc2626;
  transform: scale(1.1);
}

/* Tabla personalizada */
.custom-table {
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
