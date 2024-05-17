<template>
  <div>
    <Modal :activeModal="store.addmodal" @close="store.closeModal" title="Registrar ciudad turística" centered>
      <form @submit.prevent="save" class="space-y-4">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="form-group col-lg-6 relative">
                <Textinput label="Nombre ciudad" type="text" placeholder="Nombre" name="object_description"
                  v-model.trim="object.description" />
                <!-- Mensaje de error -->
                <span class="absolute top-full left-0 text-red-500" v-if="!object.description">
                  El campo Nombre ciudad es obligatorio
                </span>
              </div>

            </div>
          </div>
          <!-- Botones -->
          <div class="form-group col-lg-12 form__footerBtn mt-4">
            <div class="text-right">
              <Button text="Cancelar" btnClass="btn-light mr-2" @click="cancel" />
              <Button text="Guardar" btnClass="btn-dark" @cick="save" />
            </div>
          </div>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script setup>
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Textinput from "@/components/Textinput";
import { useProjectStore } from "@/store/project";
import { ref } from "vue";
import axios from "axios"; // Asegúrate de importar axios
import { useAuth } from "../../store/auth";
import { useToast } from "vue-toastification";

const store = useProjectStore();
const toast = useToast();

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

// Define el objeto 'object' con la propiedad 'description'
const object = ref({
  description: ''
});

// Método para guardar los datos y realizar la solicitud POST
const save = () => {
  // Realiza la solicitud POST utilizando axios, pasando directamente object.value
  axios.post(`${import.meta.env.VITE_API_URL}/citytouristics/create`, object.value, {
    ...headers
  })
    .then(response => {
      console.log('Datos guardados exitosamente:', response.data);
      cancel(); // Cierra el modal al guardar exitosamente
      toast.success(response.data.message);

      // Aquí podrías mostrar un mensaje de éxito al usuario
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
};

const cancel = () => {
  store.closeModal(); // Cierra el modal al hacer clic en el botón "Cancelar"
};

</script>
