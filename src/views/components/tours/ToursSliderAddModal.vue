<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Sliders Imágenes"
      sizeClass="max-w-6xl" centered>
      <form id="formSliderImg" name="formSliderImg" autocomplete="off" class="space-y-4">
        <div class="grid grid-cols-1 gap-4">

       <TableSliderToursAdd/>

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
import Modal from "@/components/Modal";
import { ref } from "vue";
import axios from "axios";
import { useAuth } from "../../../store/auth";
import { useToast } from "vue-toastification";
import TableSliderToursAdd from "./TableSliderToursAdd";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación
const toast = useToast();

const props = defineProps({
  activeModal: Boolean,
  transportData: Object
});

const emits = defineEmits(['close', 'updateTransportList']);

const images = ref([{}, {}, {}, {}]); // Inicializa con cuatro objetos vacíos, uno por cada input de imagen

const closeEditModal = () => {
  emits('close'); // Emitir evento para cerrar el modal
};

const save = () => {
  // Aquí puedes manejar la lógica de guardado para las imágenes
  axios.post(`${import.meta.env.VITE_API_URL}/transports/edit/${transport.value.id}`, transport.value, {
    ...headers
  })
    .then(response => {
      emits('updateTransportList'); // Emitir el evento personalizado al componente padre
      closeEditModal();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
    });
};
</script>

<style lang="scss" scoped>
// Estilos personalizados si es necesario
</style>
