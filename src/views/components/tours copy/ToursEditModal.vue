<template>
  <div>
    <Modal :activeModal="activeModal" @close="closeModal" title="Editar Registro de Hotel" sizeClass="max-w-6xl" centered>
      <form name="form_hotels" id="form_hotels" autocomplete="off" class="space-y-4">
        
        <!-- Checkbox para gestionar imágenes -->
        <div class="mb-4">
          <Checkbox label="Gestionar Imágenes" v-model="isManagingImages" />
        </div>

        <!-- Mostrar el formulario normal cuando no se gestionan imágenes -->
        <div v-if="!isManagingImages">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <FromGroup label="Nombre del Hotel">
              <InputGroup type="text" v-model.trim="hotel.nombre" />
            </FromGroup>
            <FromGroup label="Dirección">
              <InputGroup type="text" v-model.trim="hotel.direccion" />
            </FromGroup>
            <FromGroup>
              <Select v-model="hotel.tourismcitie_id" placeholder="Seleccionar Ciudad" class="w-full"
                :options="cities" label="nombre" value="id" />
            </FromGroup>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <FromGroup label="Imagen Principal">
              <InputGroup type="file" @change="onFileChange($event, 'imagen_principal')" />
            </FromGroup>
            <FromGroup label="Imagen Galería">
              <InputGroup type="file" @change="onFileChange($event, 'imagen_galeria')" />
            </FromGroup>
            <FromGroup label="Teléfono">
              <InputGroup type="text" v-model.trim="hotel.telefono" />
            </FromGroup>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <FromGroup label="Email">
              <InputGroup type="email" v-model.trim="hotel.email" />
            </FromGroup>
            <FromGroup label="Sitio Web">
              <InputGroup type="text" v-model.trim="hotel.sitio_web" />
            </FromGroup>
            <FromGroup label="Descripción">
              <Textarea v-model.trim="hotel.descripcion" />
            </FromGroup>
          </div>
        </div>

        <!-- Mostrar el formulario de imágenes cuando el checkbox esté activado -->
        <div v-else>
          <vue-good-table
            :columns="columns"
            :rows="imageRows"
            :sort-options="{ enabled: false }"
            class="rounded-lg overflow-hidden"
          >
            <template v-slot:table-row="props">
              <span v-if="props.column.field === 'index'">{{ props.row.index }}</span>
              <span v-if="props.column.field === 'image'">
                <InputGroup type="file" @change="onImageChange($event, props.row.index - 1)" />
                <p v-if="imageRows[props.row.index - 1].image">{{ imageRows[props.row.index - 1].image.name }}</p>
              </span>
            </template>
          </vue-good-table>
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
import { ref, watch, reactive } from 'vue';
import Button from '@/components/Button';
import FromGroup from '@/components/FromGroup';
import InputGroup from '@/components/InputGroup';
import Modal from '@/components/Modal';
import Textarea from '@/components/Textarea';
import Select from '@/components/Select';
import { useHotelStore } from '@/store/hotel';
import Checkbox from '@/components/Checkbox';

const props = defineProps({
  activeModal: Boolean,
  dataEditModal: Object
});

const emits = defineEmits(['close', 'updateHotelsList']);

const columns = [
  { label: "#", field: "index" },
  { label: "Imagen", field: "image" },
];
const imageRows = reactive([
  { index: 1, image: null },
  { index: 2, image: null },
  { index: 3, image: null },
  { index: 4, image: null },
]);


const hotelStore = useHotelStore();
const cities = ref([
  { value: 1, label: 'Tarapoto' },
  { value: 2, label: 'Lima' },
  { value: 3, label: 'Cusco' },
  { value: 4, label: 'Arequipa' },
]);

const isManagingImages = ref(false); // Controla el estado del checkbox


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

const onImageChange = (event, index) => {
  const file = event.target.files[0];
  if (file) {
    imageRows[index].image = file;
    console.log(imageRows);
  }
};


</script>

<style scoped>
/* Estilos personalizados */
</style>
