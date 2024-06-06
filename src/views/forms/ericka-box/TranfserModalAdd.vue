<template>
  <div>
    <Modal :activeModal="store.addmodalTrasnfer" @close="store.closeModalTransfer" title="Transferir a Caja General"
      centered>
      <form @submit.prevent="saveTransfer" class="space-y-4">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="form-group col-lg-6 relative">
                <FromGroup label="Monto de Transferencia" name="d2">

                  <InputGroup type="text" appendIcon="heroicons-outline:cash" placeholder="Ingresar Monto"
                    name="object_description" v-model.trim="object.description" />
                  <!-- Mensaje de error -->
                  <span class="absolute top-full left-0 text-red-500 mt-4" v-if="!object.description">
                    Este valor es obligatorio
                  </span>

                </FromGroup>

              </div>

            </div>
          </div>
          <!-- Botones -->
          <div class="form-group col-lg-12 form__footerBtn mt-12">
            <div class="text-right">
              <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="cancel" />
              <Button text="Trasnferir" btnClass="btn-dark" />
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
import { useAuth } from "../../../store/auth";
import { useToast } from "vue-toastification";
import InputGroup from '@/components/InputGroup';
import FromGroup from '@/components/FromGroup';

const store = useProjectStore();
const toast = useToast();

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

const emits = defineEmits(['guardadoExitoso']);


// Define el objeto 'object' con la propiedad 'description'
const object = ref({
  description: ''
});

// Método para guardar los datos y realizar la solicitud POST
const saveTransfer = () => {
  // Realiza la solicitud POST utilizando axios
  axios.post(`${import.meta.env.VITE_API_URL}/transfers-moneyboxes-ericka/transfer`, {
    amount: object.value.description,
  }, {
    ...headers
  })
    .then(response => {
      // console.log('Datos de transferencia guardados exitosamente:', response.data);
      cancel();
      toast.success(response.data.message);

      // Espera 1 segundo antes de recargar la página
      setTimeout(() => {
        emits('guardadoExitoso', response.data);
        location.reload(true);
      }, 2500); // Tiempo de espera en milisegundos (4000 ms = 4 segundos)
    })
    .catch(error => {
      if (error.response) {
        if (error.response.status === 400) {
          cancel();
          // Si el error es un error 400 y el mensaje indica que la caja general no está abierta
          toast.error(error.response.data.message);
        } else if (error.response.status === 500) {
          cancel();

          // Si el error es un error 500, muestra un mensaje genérico de error
          toast.error(error.response.data.message);
        } else {
          // Para otros errores, simplemente muestra el error en la consola
          console.error('Error al realizar la transferencia:', error);
        }
      } else {
        // Si no hay respuesta, muestra el error en la consola
        console.error('Error al realizar la transferencia:', error);
      }
    });


};

const cancel = () => {
  store.closeModalTransfer(); // Cierra el modal al hacer clic en el botón "Cancelar"
};

</script>
