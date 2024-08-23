<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <vue-good-table
        :columns="columns"
        :rows="imageRows"
        :sort-options="{ enabled: false }"
        class="rounded-lg overflow-hidden"
      >
        <template v-slot:table-row="props">
          <!-- Columna para la numeración -->
          <span v-if="props.column.field === 'index'">
            {{ props.row.index }}
          </span>
          <!-- Columna para subir la imagen -->
          <span v-if="props.column.field === 'image'">
            <Textinput
              label=""
              type="file"
              v-model="imageRows[props.row.index - 1].image"
            />
          </span>
        </template>
      </vue-good-table>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
import Textinput from "@/components/Textinput";

export default {
  components: {
    Textinput,
  },
  data() {
    return {
      // Columnas para la tabla
      columns: [
        { label: "#", field: "index" },
        { label: "Imagen", field: "image" },
      ],
      // Filas iniciales para la tabla
      imageRows: reactive([
        { index: 1, image: null },
        { index: 2, image: null },
        { index: 3, image: null },
        { index: 4, image: null },
      ]),
    };
  },
  methods: {
    // Método para manejar la sumisión del formulario
    handleSubmit() {
      console.log("Formulario enviado con las siguientes imágenes:", this.imageRows);
      // Lógica para procesar el formulario
    },
  },
};
</script>

<style>
/* Puedes añadir estilos adicionales si es necesario, pero Tailwind debería cubrir la mayoría de los casos. */
</style>
