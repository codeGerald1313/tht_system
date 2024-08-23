// src/store/useTourStore.js
import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification';

export const useTourStore = defineStore('tour', {
  state: () => ({
    tour: {
      id_tour: "",
      nombre: "",
      nombre_corto: "",
      etiqueta_al: "",
      imagen_portada: null,
      imagen_perfil: null,
      idioma: "Español - English",
      detail_portada: "",
      link_video: "",
      slug: "",
      price_agencia: "",
      price_online: "",
      duracion: "",
      id_company: "1",
      historia: ""
    }
  }),
  actions: {
    async saveTour() {
      console.log(this.tour);
      const toast = useToast();
      try {
        const formData = new FormData();
        for (const key in this.tour) {
          formData.append(key, this.tour[key]);
        }

        const response = await axios.post(`${import.meta.env.VITE_API_URL_MAIN}/tours/create`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success(response.data.message);
        this.resetTour();
      } catch (error) {
        console.error('Error al guardar los datos:', error);
        toast.error('Error al guardar el tour');
      }
    },

    async updateTour() {
      // console.log(this.tour);
      const toast = useToast();
      try {
        const formData = new FormData();
    
        // Añadir todos los campos excepto `id_tour`
        for (const key in this.tour) {
          if (key !== 'id_tour') {
            formData.append(key, this.tour[key]);
          }
        }
    
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL_MAIN}/tours/edit/${this.tour.id_tour}`, // Aquí todavía usas `id_tour` en la URL
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
    
        toast.success(response.data.message);
        this.resetTour();
      } catch (error) {
        console.error('Error al actualizar los datos:', error);
        toast.error('Error al actualizar el tour');
      }
    },
    
    resetTour() {
      this.tour = {
        id_tour: "",
        nombre: "",
        nombre_corto: "",
        etiqueta_al: "",
        imagen_portada: null,
        imagen_perfil: null,
        idioma: "Español - English",
        detail_portada: "",
        link_video: "",
        slug: "",
        price_agencia: "",
        price_online: "",
        duracion: "",
        id_company: "1",
        historia: ""
      };
    }
  }
});
