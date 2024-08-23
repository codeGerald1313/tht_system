<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Actualizar Slider" sizeClass="max-w-3xl" centered>
      <form name="object_form" id="object_form" autocomplete="off" class="space-y-4">
        <div class="grid grid-cols-1 lg:grid-cols-1 gap-4">

          <!-- Resto de los formularios -->

          <!-- Campo de subida de imagen -->
          <div>
            <FromGroup label="Imagen del Slider">
              <input type="file" class="form-control" id="sliderImg" name="sliderImg" @change="handleImageUpload">
              <input type="hidden" id="id_imagen_slider" name="id_imagen_slider" v-model="transport.image_id">
            </FromGroup>
          </div>

        </div>

        <!-- Botones -->
        <div class="form-group col-lg-12 form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModal" />
            <Button text="Guardar" btnClass="btn-dark" @click.prevent="save" />
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
import InputGroup from "@/components/InputGroup";
import Icon from "@/components/Icon";
import Textarea from "@/components/Textarea";
import { ref, watch } from "vue";
import { useProjectStore } from "@/store/project";
import axios from "axios";
import { useAuth } from "../../../store/auth";
import { useToast } from "vue-toastification";

let store = useProjectStore();
const headers = useAuth().headers();
const toast = useToast();

const showAlert = ref(null);

const props = defineProps({
  activeModal: Boolean,
  transportData: Object,
});

const emits = defineEmits(["close", "updateTransportList"]);

const closeEditModal = () => {
  emits("close");
};

const transport = ref({
  id: '',
  owner: "",
  document: "",
  vehicle_type: "",
  capacity: "",
  license_plate: "",
  reference_name: "",
  cellphone: "",
  telephone: "",
  email: "",
  address: "",
  characteristic: "",
  image_id: 1, // Valor inicial o dinámico
});

// Método para manejar la subida de imagen
const handleImageUpload = (event) => {
  const file = event.target.files[0];
  // Aquí podrías realizar alguna acción con el archivo, como subirlo al servidor
  console.log('Archivo seleccionado:', file);
};

const save = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/transports/edit/${transport.value.id}`, transport.value, {
    ...headers,
  })
    .then((response) => {
      emits("updateTransportList");
      closeEditModal();
      toast.success(response.data.message);
    })
    .catch((error) => {
      console.error("Error al guardar los datos:", error);
    });
};

watch(
  () => props.transportData,
  (newData) => {
    if (newData) {
      transport.value = { ...newData, image_id: 1 }; // Actualiza según los datos recibidos
    }
  }
);
</script>

<style lang="scss" scoped>
/* Agrega estilos personalizados si es necesario */
</style>
