<template>
  <div>
    <Modal :activeModal="store.addmodal" @close="store.closeModal" title="Registrar Nuevo Tour" sizeClass="max-w-6xl"
      centered>
      <form name="form_tours" id="form_tours" autocomplete="off" class="space-y-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <!-- Nombre Tour -->
          <FromGroup label="Nombre Tour">
            <InputGroup type="text" v-model.trim="tour.nombre" />
          </FromGroup>

          <!-- Nombre Corto -->
          <FromGroup label="Nombre Corto">
            <InputGroup type="text" v-model.trim="tour.nombre_corto" />
          </FromGroup>

          <!-- Etiqueta Baja -->
          <FromGroup label="Etiqueta Baja">
            <InputGroup type="text" v-model.trim="tour.etiqueta" />
          </FromGroup>

        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <!-- Imagen Portada -->
          <FromGroup label="Imagen Portada">
            <InputGroup type="file" v-model="tour.imagen_portada" />
          </FromGroup>

          <!-- Imagen Perfil -->
          <FromGroup label="Imagen Perfil">
            <InputGroup type="file" v-model="tour.imagen_perfil" />
          </FromGroup>

          <!-- Idioma -->
          <FromGroup label="Idioma">
            <InputGroup type="text" v-model.trim="tour.idioma" value="Español - English" />
          </FromGroup>

        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <!-- Texto Portada -->
          <FromGroup label="Texto Portada">
            <InputGroup type="text" v-model.trim="tour.detail_portada" />
          </FromGroup>

          <!-- Link Video -->
          <FromGroup label="Link Video">
            <InputGroup type="text" v-model.trim="tour.link_video" />
          </FromGroup>

          <!-- Slug -->
          <FromGroup label="Slug">
            <InputGroup type="text" v-model.trim="tour.slug" />
          </FromGroup>

        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <FromGroup label="Precio Online">
            <InputGroup type="text" v-model.trim="tour.price_agencia" />
          </FromGroup>
          <FromGroup label="Precio Oficina">
            <InputGroup type="text" v-model.trim="tour.price_online" />
          </FromGroup>
          <FromGroup label="Duración">
            <Select :options="[{ label: 'Full Day', value: 'Full Day' }, { label: 'Part Day', value: 'Part Day' }]"
              v-model="tour.duracion" />
          </FromGroup>
          <FromGroup label="Agencia">
            <Select :options="[{ label: 'Guaros Tours', value: '1' }]" v-model="tour.id_compani" />
          </FromGroup>
        </div>

        <div class="grid grid-cols-1 gap-4">

          <!-- Historia -->
          <FromGroup label="Historia">
            <Textarea v-model.trim="tour.historia" rows="3" />
          </FromGroup>

        </div>

        <!-- Botones -->
        <div class="form__footerBtn mt-4">
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
import { ref } from "vue";
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import InputGroup from "@/components/InputGroup";
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";
import { useProjectStore } from "@/store/project";
import axios from "axios";
import { useToast } from "vue-toastification";
import Select from '@/components/Select';

const store = useProjectStore();
const toast = useToast();

const tour = ref({
  id_tour: "",
  nombre: "",
  nombre_corto: "",
  etiqueta: "",
  imagen_portada: null,
  imagen_perfil: null,
  idioma: "Español - English",
  detail_portada: "",
  link_video: "",
  slug: "",
  price_agencia: "",
  price_online: "",
  duracion: "",
  id_compani: "1",
  historia: ""
});

const close = () => {
  store.closeModal();
};

const save = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/tours/create`, tour.value)
    .then(response => {
      close();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
    });
};
</script>

<style scoped>
/* Estilos personalizados */
</style>
