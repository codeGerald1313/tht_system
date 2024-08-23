<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="close" title="Registrar Nuevo Servicio" sizeClass="max-w-3xl"
      centered>
      <form name="form_services" id="form_services" autocomplete="off" class="space-y-6 p-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <!-- Nombre del Servicio -->
          <FromGroup label="Nombre del Servicio">
            <InputGroup type="text" v-model.trim="serviceStore.service.name" />
          </FromGroup>

          <!-- Categoría del Servicio -->
          <FromGroup label="Categoría">
            <Select :options="categories" v-model="serviceStore.service.category" />
          </FromGroup>

        </div>

        <div class="grid grid-cols-1 gap-6">

          <!-- Descripción -->
          <FromGroup label="Descripción">
            <Textarea v-model.trim="serviceStore.service.description" />
          </FromGroup>

        </div>

        <!-- Botones -->
        <div class="form__footerBtn mt-4 text-right">
          <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="close" />
          <Button text="Guardar" btnClass="btn-dark" @click.prevent="handleSaveService" />
        </div>

      </form>
    </Modal>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Button from '@/components/Button';
import FromGroup from '@/components/FromGroup';
import InputGroup from '@/components/InputGroup';
import Modal from '@/components/Modal';
import Textarea from '@/components/Textarea';
import { useServiceStore } from '@/store/service';
import { useProjectStore } from '@/store/project';
import Select from '@/components/Select';

const store = useProjectStore();
const serviceStore = useServiceStore();

// Opciones de categoría
const categories = ref([
  { value: 'Spa', label: 'Spa' },
  { value: 'Restaurante', label: 'Restaurante' },
  { value: 'Piscina', label: 'Piscina' },
  { value: 'Gimnasio', label: 'Gimnasio' },
  { value: 'Servicio a la Habitación', label: 'Servicio a la Habitación' },
]);

const props = defineProps({
  activeModal: Boolean,
  idHotel: Number
});

const emits = defineEmits(['close', 'updateHotelsList']);

const close = () => {
  emits('close');
};

const handleSaveService = async () => {
  try {
    const response = await serviceStore.saveService();
    serviceStore.clearForm();  // Limpiar el formulario en el store
    close(); // Cerrar el modal
  } catch (error) {
    close(); // Cerrar el modal
    // Manejo de errores si es necesario
  }
};

// Watcher para escuchar los cambios en idHotel y actualizar el store
watch(
  () => props.idHotel,
  (newIdHotel) => {
    if (newIdHotel) {
      serviceStore.service.hotel_id = newIdHotel; // Establece el ID del hotel en el store
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* Estilos personalizados */
.form__footerBtn {
  padding-top: 1rem;
}

textarea {
  resize: none;
}
</style>
