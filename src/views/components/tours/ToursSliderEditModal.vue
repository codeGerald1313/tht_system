<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Actualizar Sliders Imágenes"
      sizeClass="max-w-2xl" centered>
      <form id="formSliderImg" name="formSliderImg" autocomplete="off" class="space-y-4">
        <div class="grid grid-cols-1 gap-4">
          <vue-good-table :columns="columns" :rows="recetOrders" :sort-options="{ enabled: false }"
            class="custom-table">
            <template v-slot:table-row="props">
              <span v-if="props.column.field == 'index'" class="flex items-center justify-center p-2">
                {{ props.row.index }}
              </span>
              <span v-if="props.column.field == 'image'" class="flex items-center justify-center p-2">
                <div
                  class="w-32 h-20 border border-gray-300 overflow-hidden rounded-lg transition-all duration-300 hover:border-2 hover:border-gray-500">
                  <img :src="props.row.image" alt="Image" class="w-full h-full object-cover" />
                </div>
              </span>
              <span v-if="props.column.field == 'action'" class="flex items-center justify-center p-2">
                <Tooltip placement="top" arrow theme="dark">
                  <template #button>
                    <div class="action-btn bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                      @click.prevent="triggerFileInput(props.row, props.row.index)">
                      <Icon icon="heroicons:pencil-square" class="w-6 h-6" />
                    </div>
                  </template>
                  <span>Edit</span>
                </Tooltip>
              </span>
            </template>
          </vue-good-table>
        </div>
        <div class="form-group col-lg-12 form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModal" />
            <Button text="Guardar" btnClass="btn-dark" @click.prevent="saveChanges" />
          </div>
        </div>
        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" accept="image/*" />
      </form>
    </Modal>
  </div>
</template>

<script setup>
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";
import { ref, computed, watch } from "vue";
import { useSlidersToursStore } from "@/store/slidersToursStore";
import { useToast } from "vue-toastification";

const toast = useToast();
const store = useSlidersToursStore();

const props = defineProps({
  activeModal: Boolean,
  sliderDataEditModal: Object,
});

const emits = defineEmits(['close']);

const columns = ref([
  { label: "#", field: "index" },
  { label: "Imagen", field: "image" },
  { label: "Opciones", field: "action" },
]);

const updatedImages = ref([]);

const recetOrders = computed(() =>
  store.sliders.map((item, index) => ({
    index: index + 1,
    image: updatedImages.value[index] || `http://127.0.0.1:8001/storage/${item.imagen}`,
    id_slider_tours: item.id_slider_tours,
  }))
);

const fileInput = ref(null);
let currentRowIndex = null;

const triggerFileInput = (row, index) => {
  currentRowIndex = index - 1;
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      updatedImages.value[currentRowIndex] = reader.result;
      console.log('Imágenes actualizadas:', updatedImages.value);
    };
    reader.readAsDataURL(file);
  }
};

const closeEditModal = () => {
  emits('close');
};

const saveChanges = () => {
  const updatedSliderData = {
    id_tour: props.sliderDataEditModal.id_tour,
    sliders: updatedImages.value
      .map((image, index) => {
        if (image !== null) {
          const blob = dataURLToBlob(image);
          return {
            image: new File([blob], 'image.jpg', { type: 'image/jpeg' }),
            id_slider_tours: store.sliders[index].id_slider_tours, // Aquí se agrega el id_slider_tours
          };
        }
        return null;
      })
      .filter(slider => slider !== null), // Filtramos los valores null para no enviarlos
    descripcion: props.sliderDataEditModal.descripcion,
  };

  console.log(updatedSliderData);

  store.updateSlider(updatedSliderData)
    .then(() => {
      closeEditModal();
    })
    .catch((error) => {
      console.error('Error saving changes:', error);
      toast.error('Error saving changes.');
    });
};



// Ejemplo de función para convertir DataURL a Blob
function dataURLToBlob(dataURL) {
  const [header, data] = dataURL.split(',');
  const mime = header.match(/:(.*?);/)[1];
  const binary = atob(data);
  const array = [];
  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], { type: mime });
}


watch(() => props.sliderDataEditModal, (newValue) => {
  if (newValue && newValue.id_tour) {
    store.fetchSliders(newValue.id_tour);
  }
}, { immediate: true });
</script>
