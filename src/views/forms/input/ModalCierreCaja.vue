<template>
  <div>
    <Modal :activeModal="activeModal" @close="closeEditModal" title="CIERE DE CAJA" sizeClass="max-w-2xl" centered>
      <form  class="space-y-4">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="form-group col-lg-6 relative">
                <!-- Aquí se reemplaza el InputGroup por el Alert -->
                <Alert type="warning">
                  <div class="text-3xl font-bold">
                    ¿Estás seguro(a)? Está por cerrar la caja con S/ {{monto}}, antes le recomendamos realizar su arqueo
                    !!

                  </div>
                </Alert>
                <!-- Fin del reemplazo -->


              </div>


            </div>
          </div>
          <!-- Botones -->
          <div class="form-group col-lg-12 form__footerBtn mt-8">
            <div class="text-right">
              <button
                class="invocie-btn mr-3 inline-flex btn whitespace-nowrap space-x-1 cursor-pointer bg-red-700 dark:bg-red-700 btn-md h-min text-sm font-normal text-white rtl:space-x-reverse"
                @click.prevent="openBox()">


                <span>Confirmar Cierre</span>
              </button>
              <button @click.prevent="closeEditModal()"
                class="invocie-btn mr-3  inline-flex btn whitespace-nowrap space-x-1 cursor-pointer bg-green-900 dark:bg-green-700 btn-md h-min text-sm font-normal text-white rtl:space-x-reverse">

                <span>Cancelar</span>
              </button>

            </div>
          </div>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script>
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
import Alert from '@/components/Alert';

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

export default {
  components: {
    Button,
    Modal,
    Textinput,
    InputGroup,
    FromGroup,
    Alert
  },
  props: {
    activeModal: Boolean,
    id: String,
    monto: String
  },
  data() {
    return {
      object: {
        description: ''
      }
    };
  },
  methods: {
    closeEditModal() {
      this.$emit('close');
    },
    async openBox() {
  // Implementa la lógica para abrir la caja
  console.log("id", this.id);
  console.log("monto", this.monto);

  try {


    localStorage.removeItem('idValue');

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/moneyboxes/update-closed/${this.id}`,
      {
        amount_closing: this.monto,
        balance: this.monto
      },
      {
        ...useAuth().headers()
      }
    );

    window.location.reload();


    console.log(response.data.message); // Mensaje de respuesta del servidor
  } catch (error) {
    console.error('Error al actualizar la MoneyBox:', error);
  }
},

    save() {
      axios.post(`${import.meta.env.VITE_API_URL}/moneyboxes/create`, {
        amount_opening: this.object.description,
      }, {
        ...useAuth().headers()
      })
        .then(response => {
          console.log('Datos guardados exitosamente:', response.data);
          this.cancel();
          this.toast.success(response.data.message);
          this.$emit('guardadoExitoso', response.data);
        })
        .catch(error => {
          console.error('Error al guardar los datos:', error);
          // Muestra un mensaje de error al usuario
        });
    },
    cancel() {
      useProjectStore().closeModal();
    }
  },

  watch: {
    id(newValue, oldValue) {
      console.log('Nuevo valor de message:', newValue);
      console.log('Valor anterior de message:', oldValue);
      // Puedes realizar acciones aquí cuando message cambie
    }
  }
};
</script>
