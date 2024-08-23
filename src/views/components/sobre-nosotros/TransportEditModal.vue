<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Actualizar Slider" sizeClass="max-w-3xl" centered>
      <form @submit.prevent="updateSlider" name="object_form" id="object_form" autocomplete="off" class="space-y-4">
        <div class="grid grid-cols-1 lg:grid-cols-1 gap-4">
          <!-- Campo de subida de imagen -->
          <div>
            <FromGroup label="Imagen del Slider">
              <input type="file" class="form-control" id="sliderImg" name="sliderImg" @change="onFileChange">
              <input type="hidden" id="id_imagen_slider" name="id_imagen_slider" v-model="slider.id">
            </FromGroup>
          </div>
        </div>

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
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import Modal from "@/components/Modal";
import { ref, watch } from "vue";
import { useSliderStore } from "@/store/sliderStore";
import { useToast } from "vue-toastification";

const props = defineProps({
  activeModal: Boolean,
  sliderData: Object,
});

const emits = defineEmits(["close", "updateTransportList"]);

const sliderStore = useSliderStore();
const toast = useToast();

const slider = ref({
  id: null,
  imageFile: null,
});



watch(() => props.sliderData, (newData) => {
    console.log(props.sliderData);

    if (newData && newData.id_slider_inicios) {
      slider.value.id = newData.id_slider_inicios;
      console.log(slider.value.id);
    }
  },

);

const closeEditModal = () => {
  emits("close");
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  slider.value.imageFile = file;  // Almacena el archivo completo
};

const updateSlider = async () => {
  if (!slider.value.imageFile) {
    toast.error("Por favor, selecciona una imagen antes de guardar.");
    return;
  }

  try {
   
    await sliderStore.storeSlider(slider.value);
    emits("updateTransportList");
    closeEditModal();
  } catch (error) {
    console.error("Error al actualizar el slider:", error);
    toast.error("Ocurrió un error al actualizar el slider.");
  }
};
</script>
