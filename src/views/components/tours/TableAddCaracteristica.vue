<template>
  <div>
    <vue-good-table :columns="columns" :rows="recetOrderSueperGa" :sort-options="{ enabled: false }" class="custom-table">
      <template v-slot:table-row="props">
        <!-- Columna de Tours -->
        <span v-if="props.column.field === 'tours'" class="flex items-center justify-center p-2 center-content">
          {{ props.row.tours }}
        </span>

        <!-- Columna de Tipo -->
        <span v-if="props.column.field === 'type'" class="flex items-center justify-center p-2 center-content">
          {{ props.row.type }}
        </span>

        <!-- Columna de Categoría -->
        <span v-if="props.column.field === 'category'" class="flex items-center justify-center p-2 center-content">
          {{ props.row.category }}
        </span>

        <!-- Columna de Opción (Acciones) -->
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
        { label: "#", field: "tours" },
        { label: "Tipo", field: "type" },
        { label: "Categoría", field: "category" },
        { label: "Opción", field: "action" }
      ]
    };
  },

  methods: {
    handleAdd(id) {
      console.log(`Agregar registro con ID: ${id}`);
    },
    handleEdit(id) {
      console.log(`Editar registro con ID: ${id}`);
    },
    handleImages(id) {
      console.log(`Gestionar imágenes para el registro con ID: ${id}`);
    },
    handleSlider(id) {
      console.log(`Gestionar slider para el registro con ID: ${id}`);
    },
    handleDelete(id) {
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
