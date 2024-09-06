<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="close" title="Registrar Tipos de Habitación"
      sizeClass="max-w-6xl" centered>
      <form name="form_typebedrooms" id="form_typebedrooms" autocomplete="off" class="space-y-4">
        <div v-for="(typebedroom, index) in typeBedroomStore.typebedrooms" :key="index" class="border p-4 rounded-lg">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

            <!-- Descripción del Tipo de Habitación -->
            <FromGroup label="Descripción del Tipo de Habitación">
              <InputGroup type="text" v-model.trim="typebedroom.typebedroom_description" />
            </FromGroup>

            <!-- Abreviatura -->
            <FromGroup label="Abreviatura">
              <InputGroup type="text" v-model.trim="typebedroom.typebedroom_abbreviation" />
            </FromGroup>

            <!-- Precio -->
            <FromGroup label="Precio">
              <InputGroup type="number" v-model.number="typebedroom.price" />
            </FromGroup>

          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

            <!-- Observación -->
            <FromGroup label="Observación">
              <InputGroup type="text" v-model.trim="typebedroom.observation" />
            </FromGroup>

            <!-- Descripción -->
            <FromGroup label="Descripción">
              <Textarea v-model.trim="typebedroom.description" />
            </FromGroup>

            <!-- Selección de Opción -->
            <FromGroup label="Opción">
              <Select :options="optionStore.options" v-model="typebedroom.option_id" />
            </FromGroup>

          </div>

          <div class="flex justify-end mt-4">
            <Button text="Eliminar" btnClass="bg-red-500 text-white" @click.prevent="removeTypeBedroom(index)" />
          </div>
        </div>
  
        <!-- Botón para Agregar Nuevos Tipos de Habitación -->
        <div class="text-right mt-4">
          <Button text="Agregar Tipo de Habitación" btnClass="btn-dark" @click.prevent="addTypeBedroom" />
        </div>

        <!-- Botones de Acción -->
        <div class="form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="close" />
            <Button text="Guardar" btnClass="btn-dark" @click.prevent="saveTypeBedrooms" />
          </div>
        </div>

      </form>
    </Modal>
  </div>
</template>

<script setup>
import { ref, watch  } from 'vue';
import Button from '@/components/Button';
import FromGroup from '@/components/FromGroup';
import InputGroup from '@/components/InputGroup';
import Modal from '@/components/Modal';
import Textarea from '@/components/Textarea';
import Select from '@/components/Select';
import { useTypeBedroomStore } from '@/store/typebedroom';
import { useProjectStore } from '@/store/project';
import { useOptionStore } from '@/store/option';

const store = useProjectStore();
const typeBedroomStore = useTypeBedroomStore();
const optionStore = useOptionStore();

const props = defineProps({
  activeModal: Boolean,
  idHotel: Number
});

// Emitir eventos para cerrar el modal y actualizar datos
const emits = defineEmits(['close']);

const close = () => {
  emits('close');
};

const addTypeBedroom = () => {
  typeBedroomStore.addTypeBedroom();
};

const removeTypeBedroom = (index) => {
  typeBedroomStore.removeTypeBedroom(index);
};

const saveTypeBedrooms = async () => {
  try {
    await typeBedroomStore.saveTypeBedrooms();
    close(); // Cierra el modal después de guardar
  } catch (error) {
    // Manejo de errores si es necesario
  }
};

watch(
  () => props.activeModal,
  async (isActive) => {
    if (isActive) {
      await optionStore.fetchOptions(); // Llama a fetchOptions solo cuando el modal se activa
    }
  }
);

// Watcher para escuchar cambios en transportData y actualizar el store
watch(
  () => props.idHotel,
  (newData) => {
    if (newData) {
      typeBedroomStore.typebedrooms.forEach(tb => tb.hotel_id = newData); // Establece el ID del hotel en cada tipo de habitación
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* Estilos personalizados */
</style>
