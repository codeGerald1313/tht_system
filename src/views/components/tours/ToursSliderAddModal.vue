<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Agregar Sliders" sizeClass="max-w-6xl" centered>
      <form id="formSliderImg" name="formSliderImg" autocomplete="off" class="space-y-4" @submit.prevent="handleSubmit">
        <!-- Aquí se muestra la tabla de imágenes -->
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
                @change="onImageChange($event, props.row.index - 1)"
              />
              <p v-if="imageRows[props.row.index - 1].image">
                {{ imageRows[props.row.index - 1].image.name }}
              </p>
            </span>
          </template>
        </vue-good-table>

        <!-- Botones -->
        <div class="form-group col-lg-12 form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModal" />
            <Button text="Guardar" btnClass="btn-dark" type="submit" />
          </div>
        </div>
      </form>
    </Modal>
  </div>
</template>


<script setup>
import { reactive } from "vue";
import { useSlidersToursStore } from "@/store/slidersToursStore";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Textinput from "@/components/Textinput";

const props = defineProps({
  activeModal: Boolean,
  sliderDataAddModal: Object
});

const emits = defineEmits(['close', 'updateTransportList']);

// Columnas para la tabla
const columns = [
  { label: "#", field: "index" },
  { label: "Imagen", field: "image" },
];

// Filas iniciales para la tabla
const imageRows = reactive([
  { index: 1, image: null },
  { index: 2, image: null },
  { index: 3, image: null },
  { index: 4, image: null },
]);

const closeEditModal = () => {
  emits('close'); // Emitir evento para cerrar el modal
};

// Manejar el cambio de imagen
const onImageChange = (event, index) => {
  const file = event.target.files[0];
  if (file) {
    imageRows[index].image = file;

    console.log(imageRows);
  }
};

// Manejar el envío del formulario
const handleSubmit = async () => {
  const store = useSlidersToursStore();
  
  // Filtrar las imágenes que no están vacías
  const validImages = imageRows.filter(row => row.image !== null);

  if (validImages.length === 0) {
    alert('Por favor selecciona al menos una imagen');
    return;
  }

  const sliderData = {
    images: validImages.map(row => row.image),
    id_tour: props.sliderDataAddModal.id_tour, // Asumiendo que tienes el ID del tour
    descripcion: props.sliderDataAddModal.descripcion, // Asumiendo que tienes una descripción
  };

  await store.uploadSliderImages(sliderData);
  emits('updateTransportList');
  closeEditModal();
};

</script>


<style lang="scss" scoped>
// Estilos personalizados si es necesario
</style>
