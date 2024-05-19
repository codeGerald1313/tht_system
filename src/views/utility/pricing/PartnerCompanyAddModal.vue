<template>
  <Modal :activeModal="store.addmodal" @close="store.closeModal" title="Registrar nueva Empresa Socia"
    sizeClass="max-w-4xl" centered>
    <form @submit.prevent="saveCompany" class="space-y-4">
      <!-- Primera fila -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <FromGroup label="N° RUC">
            <InputGroup type="text" placeholder="Ingrese el número de RUC" v-model.trim="formData.document">
              <template v-slot:append>
                <Button text="Sunat" btnClass="btn-outline-dark " @click.prevent="extractRuc" />
              </template>
            </InputGroup>

            <span v-if="!isValidField('document')" class="text-red-500">Por favor ingresa un RUC valido</span>

          </FromGroup>

      
   
        </div>
        <div>
          <FromGroup label="Razón social">
            <Textinput type="text" placeholder="Ingrese la razón social" name="client_fullname"
              v-model.trim="formData.fullname" />
          </FromGroup>
        </div>
      </div>

      <!-- Segunda fila -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div>
          <FromGroup label="Nombre de la empresa">
            <Textinput type="text" placeholder="Ingrese el nombre de la empresa" name="client_tradename"
              v-model.trim="formData.tradename"  />
              <span v-if="!isValidField('tradename')" class="text-red-500">Por favor ingresa un nombre valido</span>

          </FromGroup>
        </div>
        <div>
          <FromGroup label="Celular">
            <Textinput type="text" placeholder="Ingrese el número de celular" v-model.trim="formData.cellphone"
               />
              <span v-if="!isValidField('cellphone')" class="text-red-500">Por favor ingresa un número valido</span>
          </FromGroup>
        </div>
        <div>
          <FromGroup label="Teléfono fijo">
            <Textinput type="text" placeholder="Ingrese el número de teléfono fijo" name="client_telephone"
              v-model.trim="formData.telephone" />

          </FromGroup>
        </div>
      </div>

      <!-- Tercera fila -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <FromGroup label="Correo electrónico">
            <Textinput type="email" placeholder="Ingrese el correo electrónico" name="client_email"
              v-model.trim="formData.email" />
          </FromGroup>
        </div>
        <div>
          <FromGroup label="Dirección">
            <Textinput type="text" placeholder="Dirección Completa" name="client_address"
              v-model.trim="formData.address" />
          </FromGroup>
        </div>
      </div>

      <!-- Botones -->
      <div class="form-group col-lg-12 form__footerBtn">
        <div class="text-right">
          <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="cancel" />
          <Button type="submit" text="Guardar" btnClass="btn-dark"  />
        </div>
      </div>
    </form>


  </Modal>
</template>

<script setup>
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import InputGroup from "@/components/InputGroup";
import { ref } from "vue";
import { useProjectStore } from "../../../store/project";
import axios from "axios";
import { useToast } from "vue-toastification";
import { useAuth } from "../../../store/auth";

const store = useProjectStore();
const toast = useToast();
const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

const formData = ref({
  tradename: "",
  document: "",
  fullname: "",
  cellphone: "",
  telephone: "",
  email: "",
  address: "",
});

const tradenameError = ref(null);
const cellphoneError = ref(null);

const saveCompany = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/partnercompanies/create`, formData.value, {
    ...headers
  })
    .then(response => {
      console.log('Datos guardados exitosamente:', response.data);
      cancel();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
};

// Método para validar un campo específico
const validateField = (fieldName) => {
  return !!formData.value[fieldName];
};

// Método para verificar si un campo específico es válido
const isValidField = (fieldName) => {
  return validateField(fieldName);
};


const cancel = () => {
  store.closeModal();
};

const formIsValid = ref(false); // Lógica para validar el formulario

const extractRuc = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/getRucData`, {
      ruc: formData.value.document
    })
    .then(response => {
      console.log('Respuesta de la API RUC:', response.data);
   
      formData.value.fullname = response.data.data.nombre_o_razon_social;
      formData.value.address = response.data.data.direccion;
    })
    .catch(error => {
      console.error('Error al obtener datos del RUC:', error);
      // Aquí puedes manejar errores, como mostrar un mensaje al usuario
    });
};

</script>

<style>
/* Estilos personalizados si es necesario */
</style>
