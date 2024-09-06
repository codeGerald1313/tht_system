<template>
  <div>
    <Modal :activeModal="store.addmodal" @close="store.closeModal" title="Registrar Nuevo Hotel" sizeClass="max-w-6xl"
      centered>
      <form name="form_hotels" id="form_hotels" autocomplete="off" class="space-y-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <!-- Nombre del Hotel -->
          <FromGroup label="Nombre del Hotel">
            <InputGroup type="text" v-model.trim="hotelStore.hotel.nombre" />
          </FromGroup>

          <!-- Dirección -->
          <FromGroup label="Dirección">
            <InputGroup type="text" v-model.trim="hotelStore.hotel.direccion" />
          </FromGroup>

          <!-- Ciudad -->
          <FromGroup>
            <Select v-model="hotelStore.hotel.tourismcitie_id" placeholder="Seleccionar Ciudad" class="w-full"
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
            <InputGroup type="text" v-model.trim="hotelStore.hotel.telefono" />
          </FromGroup>

        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <!-- Email -->
          <FromGroup label="Email">
            <InputGroup type="email" v-model.trim="hotelStore.hotel.email" />
          </FromGroup>

          <!-- Sitio Web -->
          <FromGroup label="Sitio Web">
            <InputGroup type="text" v-model.trim="hotelStore.hotel.sitio_web" />
          </FromGroup>

          <!-- Descripción -->
          <FromGroup label="Descripción">
            <Textarea v-model.trim="hotelStore.hotel.descripcion" />
          </FromGroup>

        </div>

        <!-- Botones -->
        <div class="form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="close" />
            <Button text="Guardar" btnClass="btn-dark" @click.prevent="saveHotel" />
          </div>
        </div>

      </form>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import InputGroup from "@/components/InputGroup";
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";
import Select from '@/components/Select';
import { useHotelStore } from '@/store/hotel';
import { useProjectStore } from "@/store/project";

const store = useProjectStore();
const hotelStore = useHotelStore();

// Definir los eventos que se emitirán
const emits = defineEmits(["close", "updateHotelList"]);

// Lista de ciudades (puedes cargar esta lista dinámicamente desde una API)
const cities = ref([
  { value: 1, label: 'Tarapoto' },
  { value: 2, label: 'Lima' },
  { value: 3, label: 'Cusco' },
  { value: 4, label: 'Arequipa' },
]);

const close = () => {
  store.closeModal();
};
// Función para guardar el hotel y emitir eventos después de guardar
const saveHotel = async () => {
  try {
    await hotelStore.saveHotel();  // Usar el método saveHotel desde el store
    close();

    // Emitir evento para actualizar la lista de hoteles después de guardar
    emits("updateHotelList");

    
  } catch (error) {
    console.error("Error al guardar el hotel:", error);
  }
};

const onFileChange = (event, key) => {
  const file = event.target.files[0];
  hotelStore.hotel[key] = file;
};
</script>

<style scoped>
/* Estilos personalizados */
</style>
