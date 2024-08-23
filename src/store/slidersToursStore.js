// store/slidersToursStore.js

import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification';

export const useSlidersToursStore = defineStore('slidersTours', {
  state: () => ({
    sliders: [],
  }),

  actions: {
    async fetchSliders(id_tour) {
        this.loading = true; // Activar el estado de carga
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL_MAIN}/sliders-tours/list-edit/${id_tour}`);
          if (response.data.status === 'success') {
            this.sliders = response.data.data; // Actualizar los sliders con la respuesta
          } else {
            useToast().error('No sliders found for the specified tour ID');
          }
        } catch (error) {
          useToast().error('Error fetching sliders');
          console.error('Error:', error);
        } finally {
          this.loading = false; // Desactivar el estado de carga
        }
      },
    async uploadSliderImages(sliderData) {
      const toast = useToast();
      try {
        const formData = new FormData();
        sliderData.images.forEach((image, index) => {
          formData.append(`imagenes[${index}]`, image);
        });
        formData.append('id_tour', sliderData.id_tour);
        if (sliderData.descripcion) {
          formData.append('descripcion', sliderData.descripcion);
        }

        const response = await axios.post(`${import.meta.env.VITE_API_URL_MAIN}/sliders-tours/create`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        this.sliders = response.data.data;
        toast.success('Slider images uploaded successfully!');
      } catch (error) {
        console.error('Error uploading slider images:', error);
        toast.error('Failed to upload slider images.');
      }
    },

    async updateSlider(sliderData) {
      const toast = useToast();
      try {
        const formData = new FormData();
        sliderData.sliders.forEach((slider, index) => {
          if (slider && slider.image) { // Verificar que el slider no sea null y tenga una imagen
            formData.append(`imagenes[${index}][imagen]`, slider.image);
            formData.append(`imagenes[${index}][id_slider_tours]`, slider.id_slider_tours); // Enviar el id_slider_tours
          }
        });
        formData.append('id_tour', sliderData.id_tour);
        if (sliderData.descripcion) {
          formData.append('descripcion', sliderData.descripcion);
        }
    
        const response = await axios.post(`${import.meta.env.VITE_API_URL_MAIN}/sliders-tours/edit`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        // Actualizar los sliders con la respuesta
        this.sliders = this.sliders.map(slider => 
          slider.id_tour === sliderData.id_tour ? response.data.data : slider
        );
    
        toast.success('Slider updated successfully!');
      } catch (error) {
        console.error('Error updating slider:', error);
        toast.error('Failed to update slider.');
      }
    }
    
    
    
  },
});
