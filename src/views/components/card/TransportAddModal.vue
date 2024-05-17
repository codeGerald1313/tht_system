<template>
  <div>
    <Modal :activeModal="store.addmodal" @close="store.closeModal" title="Registrar Nuevo Transporte"
      sizeClass="max-w-6xl" centered>
      <form name="object_form" id="object_form" autocomplete="off" class="space-y-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div>
            <FromGroup label="N° Documento">
              <InputGroup type="text" placeholder="DNI" v-model="transport.document">
        
              </InputGroup>
              <span v-if="!isValidField('document')" class="text-red-500">Por favor ingresa un número válido</span>

            </FromGroup>
            <span v-if="showAlert" class="ml-auto text-red-500">* Debe tener 8 dígitos</span>
          </div>


          <div>
            <FromGroup label="Propietario">
              <InputGroup type="text" v-model.trim="transport.owner" placeholder="Ingrese el propietario" />
              <span v-if="!isValidField('owner')" class="text-red-500">Por favor ingresa un nombre válido</span>
            </FromGroup>
          </div>


          <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <!-- Formulario de Tipo vehículo -->
            <div class="lg:col-span-2">
              <!-- Este formulario ocupará dos columnas en pantallas grandes y tendrá menos espacio a la derecha -->
              <FromGroup label="Tipo vehículo">
                <InputGroup type="text" v-model.trim="transport.vehicle_type"
                  placeholder="Ingrese el tipo de vehículo" />
                <span v-if="!isValidField('vehicle_type')" class="text-red-500">Por favor ingresa un tipo válido</span>

              </FromGroup>
            </div>

            <!-- Formulario de Capacidad -->
            <div class="flex justify-between">
              <FromGroup label="Capacidad">
                <div class="relative">
                  <Icon icon="heroicons-outline:information-circle"
                    class="h-5 w-5 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
                  <InputGroup type="number" v-model.trim="transport.capacity" placeholder="Ingrese la capacidad"
                    class="pl-10" />
                </div>
              </FromGroup>
              <span v-if="!isValidField('capacity')" class="text-red-500 ml-auto mr-3">*</span>
            </div>


            <!-- Formulario de N° placa -->
            <FromGroup label="N° placa">
              <InputGroup type="text" v-model.trim="transport.license_plate" placeholder="Ingrese el número de placa" />
            </FromGroup>
          </div>

          <!-- Espacio extra a la izquierda para el formulario de Nombre referencial -->
          <FromGroup label="Nombre referencial">
            <!-- Este formulario tendrá más espacio a la izquierda en pantallas grandes -->
            <InputGroup type="text" v-model.trim="transport.reference_name"
              placeholder="Ingrese el nombre referencial" />
          </FromGroup>

        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <FromGroup label="Celular">
            <InputGroup type="text" v-model.trim="transport.cellphone" placeholder="Ingrese el número de celular" />
            <span v-if="!isValidField('cellphone')" class="text-red-500">Por favor ingresa un número de celular
              válido</span>

          </FromGroup>

          <FromGroup label="Teléfono fijo">
            <InputGroup type="text" v-model.trim="transport.telephone"
              placeholder="Ingrese el número de teléfono fijo" />
          </FromGroup>

          <FromGroup label="Correo electrónico">
            <InputGroup type="email" v-model.trim="transport.email" placeholder="Ingrese el correo electrónico" />
          </FromGroup>

        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">


          <FromGroup label="Dirección">
            <Textarea v-model.trim="transport.address" placeholder="Ingrese la dirección" />
          </FromGroup>

          <FromGroup label="Características vehículo">
            <Textarea v-model.trim="transport.characteristic" placeholder="Ingrese las características del vehículo" />
          </FromGroup>

        </div>



        <!-- Botones -->
        <div class="form-group col-lg-12 form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="close" />
            <Button text="Guardar" btnClass="btn-dark"   @click.prevent="save" />
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
import { ref, computed } from "vue";
import { useProjectStore } from "@/store/project";
import axios from "axios";
import { useAuth } from "../../../store/auth";
import { useToast } from "vue-toastification";

let store = useProjectStore();
const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

const toast = useToast();

const showAlert = ref(null);


// Método para validar un campo específico
const validateField = (fieldName) => {
  return !!transport.value[fieldName];
};

// Método para verificar si un campo específico es válido
const isValidField = (fieldName) => {
  return validateField(fieldName);
};


const transport = ref({
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
  characteristic: ""
});

const close = () => {
  store.closeModal();
};

const save = () => {
  // Realiza la solicitud POST utilizando axios, pasando directamente object.value
  axios.post(`${import.meta.env.VITE_API_URL}/transports/create`, transport.value, {
    ...headers
  })
    .then(response => {
      console.log('Datos guardados exitosamente:', response.data);
      close();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
};


</script>

<style lang="scss" scoped>
// Agrega estilos personalizados si es necesario</style>
