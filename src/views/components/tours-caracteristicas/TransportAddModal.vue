<template>
  <div>
    <Modal :activeModal="store.addmodal" @close="store.closeModal" title="Registrar Característica"
      sizeClass="max-w-4xl" centered>
      <form name="formModalCaracteristica" id="formModalCaracteristica" autocomplete="off" class="space-y-4">

        <div class="grid grid-cols-1 gap-4">
          <!-- Nombre de la Característica -->
          <FromGroup label="Nombres">
            <InputGroup type="text" placeholder="Nombre Caracteristica" v-model="caracteristica.nombreCaracteristica" />
            <span v-if="!isValidField('nombreCaracteristica')" class="text-red-500">Por favor ingresa un nombre válido</span>
          </FromGroup>

          <!-- Icono de la Característica -->
          <FromGroup label="Icono">
            <InputGroup type="text" placeholder="Icono" v-model="caracteristica.iconoCaracteristica" />
          </FromGroup>

       <!-- Tipo de Característica -->
<FromGroup label="Tipo Caracteristica">
  <div class="relative">
    <Select 
      id="tipo" 
      name="tipo" 
      v-model="caracteristica.tipo"
      :options="tipoCaracteristicaOptions"
    />
  </div>
</FromGroup>


        </div>

        <!-- Botones -->
        <div class="form-group col-lg-12 form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="close" />
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
import { ref } from "vue";
import { useProjectStore } from "@/store/project";
import { useToast } from "vue-toastification";
import axios from "axios";
import { useAuth } from "@/store/auth";
import Select from "@/components/Select";

const store = useProjectStore();
const headers = useAuth().headers(); // Obtiene los encabezados de autenticación
const toast = useToast();

const caracteristica = ref({
  idCaracteristica: "",
  nombreCaracteristica: "",
  iconoCaracteristica: "icon-fab",
  tipo: ""
});

// Opciones para el Select
const tipoCaracteristicaOptions = [
  { value: 1, label: 'Itinerario' },
  { value: 2, label: 'Actividades' },
  { value: 3, label: 'Adicionales' },
  { value: 4, label: 'Recomendaciones' },
  { value: 5, label: 'Incluye' },
  { value: 6, label: 'No Incluye' }
];

const close = () => {
  store.closeModal();
};

const save = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/caracteristicas/create`, caracteristica.value, {
    ...headers
  })
    .then(response => {
      close();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Mostrar un mensaje de error si es necesario
    });
};

// Método para verificar si un campo específico es válido
const isValidField = (fieldName) => {
  return !!caracteristica.value[fieldName];
};

</script>

<style lang="scss" scoped>
// Agrega estilos personalizados si es necesario
</style>
