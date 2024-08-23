import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification';

export const useServiceStore = defineStore('service', {
  state: () => ({
    service: {
      hotel_id: null,
      name: '',
      category: '',
      description: '',
    },
  }),
  actions: {
    async saveService() {
      const toast = useToast(); // Inicializa el toast

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL_MAIN}/services-hotel/create`, this.service);
        
        // Maneja la respuesta después de guardar el servicio
        toast.success(response.data.message || 'Servicio registrado con éxito');
        
        // Deja el manejo de cierre de modal y actualización de la lista de hoteles al componente
        return response.data;
      } catch (error) {
        // Muestra el mensaje de error
        const errorMessage = error.response?.data?.message || 'Error al guardar el servicio';
        toast.error(errorMessage);
        
        console.error('Error al guardar el servicio', error);
        throw error; // Lanza el error para que pueda ser manejado en el componente
      }
    },
    clearForm() {
      this.service = {
        hotel_id: null,
        name: '',
        category: '',
        description: '',
      };
    }
  }
});
