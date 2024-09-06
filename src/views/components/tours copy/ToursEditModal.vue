<template>
  <div>
    <Modal :activeModal="activeModal" @close="closeModal" title="Editar Registro de Hotel" sizeClass="max-w-6xl" centered>
      <form name="form_hotels" id="form_hotels" autocomplete="off" class="space-y-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <!-- Nombre del Hotel -->
          <FromGroup label="Nombre del Hotel">
            <InputGroup type="text" v-model.trim="hotel.nombre" />
          </FromGroup>

          <!-- Dirección -->
          <FromGroup label="Dirección">
            <InputGroup type="text" v-model.trim="hotel.direccion" />
          </FromGroup>

          <!-- Ciudad -->
          <FromGroup>
            <Select v-model="hotel.tourismcitie_id" placeholder="Seleccionar Ciudad" class="w-full"
              :options="cities" label="nombre" value="id" />
          </FromGroup>

        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <!-- Imagen Principal -->
          <FromGroup label="Imagen Principal">
            <InputGroup type="file" @change="onFileChange($event, 'imagen_principal')" />
          </FromGroup>

          <!-- Imagen Galería -->
          <FromGroup label="Imagen Galería">
            <InputGroup type="file" @change="onFileChange($event, 'imagen_galeria')" />
          </FromGroup>

          <!-- Teléfono -->
          <FromGroup label="Teléfono">
            <InputGroup type="text" v-model.trim="hotel.telefono" />
          </FromGroup>

        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <!-- Email -->
          <FromGroup label="Email">
            <InputGroup type="email" v-model.trim="hotel.email" />
          </FromGroup>

          <!-- Sitio Web -->
          <FromGroup label="Sitio Web">
            <InputGroup type="text" v-model.trim="hotel.sitio_web" />
          </FromGroup>

          <!-- Descripción -->
          <FromGroup label="Descripción">
            <Textarea v-model.trim="hotel.descripcion" />
          </FromGroup>

        </div>

        <!-- Botones -->
        <div class="form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeModal" />
            <Button text="Guardar" btnClass="btn-dark" @click.prevent="saveHotel" />
          </div>
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
import Select from '@/components/Select';
import { useHotelStore } from '@/store/hotel';

const props = defineProps({
  activeModal: Boolean,
  dataEditModal: Object
});

const emits = defineEmits(['close', 'updateHotelsList']);

const hotelStore = useHotelStore();
const cities = ref([
  { value: 1, label: 'Tarapoto' },
  { value: 2, label: 'Lima' },
  { value: 3, label: 'Cusco' },
  { value: 4, label: 'Arequipa' },
]);

const hotel = ref({ ...props.dataEditModal });

watch(() => props.dataEditModal, (newValue) => {
  hotel.value = { ...newValue };
});

const closeModal = () => {
  emits('close');
};

const saveHotel = async () => {
  try {
   
      await hotelStore.updateHotel(hotel.value);

    closeModal();
    emits('updateHotelsList');
  } catch (error) {
    console.error('Error al guardar el hotel:', error);
  }
};

const onFileChange = (event, key) => {
  const file = event.target.files[0];
  hotel.value[key] = file;
};
</script>

<style scoped>
/* Estilos personalizados */
</style>
