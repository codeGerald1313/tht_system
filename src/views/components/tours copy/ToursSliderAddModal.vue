<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="close" :title="'Registrar Alrededor de ' + hotelName"  sizeClass="max-w-3xl"
      centered>
      <form name="form_surroundings" id="form_surroundings" autocomplete="off" class="space-y-6 p-6">
        <!-- Sección del formulario -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <!-- Nombre del Lugar -->
          <FromGroup label="Nombre del Lugar" class="flex flex-col">
            <InputGroup type="text" v-model.trim="surroundingStore.surrounding.place_name" />
          </FromGroup>

          <!-- Categoría -->
          <FromGroup label="Categoría" class="flex flex-col">
            <Select :options="categories" v-model="surroundingStore.surrounding.category" placeholder="Seleccionar Categoría" />
          </FromGroup>

        </div>

        <div class="grid grid-cols-1 gap-6">

          <!-- Descripción -->
          <FromGroup label="Descripción" class="flex flex-col">
            <Textarea v-model.trim="surroundingStore.surrounding.description" />
          </FromGroup>

        </div>

        <!-- Botones de Acción -->
        <div class="flex justify-end mt-6">
          <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="close" />
          <Button text="Guardar" btnClass="btn-dark" @click.prevent="handleSaveSurrounding" />
        </div>
      </form>
    </Modal>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import InputGroup from "@/components/InputGroup";
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";
import { useSurroundingStore } from '@/store/surrounding';
import { useProjectStore } from "@/store/project";

const store = useProjectStore();
const surroundingStore = useSurroundingStore();

// Opciones para el select de categoría
const categories = ref([
  { value: '¿Qué hay cerca?', label: '¿Qué hay cerca?' },
  { value: 'Restaurantes y cafeterías', label: 'Restaurantes y cafeterías' },
  { value: 'Atracciones turísticas destacadas', label: 'Atracciones turísticas destacadas' },
  { value: 'Transporte público', label: 'Transporte público' },
  { value: 'Aeropuertos más cercanos', label: 'Aeropuertos más cercanos' },

]);

const props = defineProps({
  activeModal: Boolean,
  idHotelSurroundingsModal: Number,
  hotelName: String, // Añade esta prop para recibir el nombre del hotel
});

// Emitir eventos para cerrar el modal y actualizar datos
const emits = defineEmits(['close', 'updateSurroundingsList']);

const close = () => {
  emits('close');
};

const handleSaveSurrounding = async () => {
  try {
    await surroundingStore.saveSurrounding();
    surroundingStore.clearForm();  // Limpiar el formulario en el store
    close(); // Cerrar el modal
  } catch (error) {
    close(); // Cerrar el modal
    // Manejo de errores si es necesario
  }
};
// Computed property para verificar si el modal está activo
const isActive = computed(() => props.activeModal);

// Watcher para escuchar cambios en idHotel solo si el modal está activo
watch(
  () => props.idHotelSurroundingsModal,
  (newData) => {
    if (isActive.value && newData) {
      console.log(newData);
      surroundingStore.surrounding.hotel_id = newData; // Establece el ID del hotel en el store
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* Estilos personalizados */
</style>
