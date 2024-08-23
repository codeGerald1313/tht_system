// stores/sliderStore.js (con Pinia)
import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification';

export const useSliderStore = defineStore('slider', {
  state: () => ({
    sliders: [],
  }),
  actions: {
    async fetchSliders() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL_MAIN}/slider-inicios/list`);
        if (response.data.status === 'success') {
          this.sliders = response.data.data;
        } else {
          console.error('Error al obtener sliders:', response.data.message);
        }
      } catch (error) {
        console.error('Error en la solicitud de sliders:', error);
      }
    },

    async storeSlider(slider) {
        console.log(slider);
        const toast = useToast();
        const formData = new FormData();
        formData.append('image', slider.imageFile); // Asegúrate de enviar el archivo completo
        // formData.append('_method', 'PUT'); // Si es un PUT, puedes agregar esto para que Laravel lo reconozca como una actualización
      
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL_MAIN}/slider-inicios/edit/${slider.id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
      
          if (response.data.status === 'success') {
            toast.success(response.data.message);
            this.fetchSliders();  // Refrescar la lista de sliders
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          console.error('Error al actualizar el slider:', error);
          toast.error('Ocurrió un error al actualizar el slider.');
        }
      }
      
  },
});
