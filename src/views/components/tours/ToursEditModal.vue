<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Editar Tour" sizeClass="max-w-6xl" centered>
      <form name="form_tours" id="form_tours" autocomplete="off" class="space-y-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <!-- Nombre Tour -->
          <FromGroup label="Nombre Tour">
            <InputGroup type="text" v-model.trim="tourStore.tour.nombre" />
          </FromGroup>

          <!-- Nombre Corto -->
          <FromGroup label="Nombre Corto">
            <InputGroup type="text" v-model.trim="tourStore.tour.nombre_corto" />
          </FromGroup>

          <!-- Etiqueta Baja -->
          <FromGroup label="Etiqueta Baja">
            <InputGroup type="text" v-model.trim="tourStore.tour.etiqueta_al" />
          </FromGroup>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <!-- Imagen Portada -->
          <FromGroup label="Imagen Portada">
            <InputGroup type="file" @change="onFileChange($event, 'imagen_portada')" />
          </FromGroup>

          <!-- Imagen Perfil -->
          <FromGroup label="Imagen Perfil">
            <InputGroup type="file" @change="onFileChange($event, 'imagen_perfil')" />
          </FromGroup>

          <!-- Idioma -->
          <FromGroup label="Idioma">
            <InputGroup type="text" v-model.trim="tourStore.tour.idioma" value="Español - English" />
          </FromGroup>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <!-- Texto Portada -->
          <FromGroup label="Texto Portada">
            <InputGroup type="text" v-model.trim="tourStore.tour.detail_portada" />
          </FromGroup>

          <!-- Link Video -->
          <FromGroup label="Link Video">
            <InputGroup type="text" v-model.trim="tourStore.tour.link_video" />
          </FromGroup>

          <!-- Slug -->
          <FromGroup label="Slug">
            <InputGroup type="text" v-model.trim="tourStore.tour.slug" />
          </FromGroup>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <FromGroup label="Precio Online">
            <InputGroup type="text" v-model.trim="tourStore.tour.price_agencia" />
          </FromGroup>
          <FromGroup label="Precio Oficina">
            <InputGroup type="text" v-model.trim="tourStore.tour.price_online" />
          </FromGroup>
          <FromGroup label="Duración">
            <Select :options="[{ label: 'Full Day', value: 'Full Day' }, { label: 'Part Day', value: 'Part Day' }]"
              v-model="tourStore.tour.duracion" />
          </FromGroup>
          <FromGroup label="Agencia">
            <Select :options="[{ label: 'Guaros Tours', value: '1' }]" v-model="tourStore.tour.id_company" />
          </FromGroup>
        </div>

        <div class="grid grid-cols-1 gap-4">
          <!-- Historia -->
          <FromGroup label="Historia">
            <Textarea v-model.trim="tourStore.tour.historia"  />
          </FromGroup>
        </div>

        <!-- Botones -->
        <div class="form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModal" />
            <Button text="Guardar" btnClass="btn-dark" @click.prevent="saveTour" />
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
import { useTourStore } from '@/store/tour';
import { useProjectStore } from '@/store/project';

const props = defineProps({
  activeModal: Boolean,
  dataEditModal: Object
});

const emits = defineEmits(['close', 'updateListTours']);

const store = useProjectStore();
const tourStore = useTourStore();

const closeEditModal = () => {
  emits('close');
};

const saveTour = () => {
  if (tourStore.tour.id_tour) {
    tourStore.updateTour();  // Si existe un id_tour, actualiza el tour
    emits('close');
    emits('updateListTours');
  } else {
    tourStore.saveTour();  // Si no existe, guarda un nuevo tour
  }
};

const onFileChange = (event, key) => {
  const file = event.target.files[0];
  tourStore.tour[key] = file;
};

// Watcher to set values when sliderData changes
watch(() => props.dataEditModal, (newData) => {
  if (newData && Object.keys(newData).length > 0) {
    // console.log(newData);
    tourStore.tour = { ...newData }; // Assuming sliderData has the same structure as tourStore.tour
  }
}, { immediate: true });


</script>
