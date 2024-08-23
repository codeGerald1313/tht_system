import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification';

export const useSurroundingStore = defineStore('surrounding', {
  state: () => ({
    surrounding: {
      hotel_id: null,
      place_name: '',
      category: '',
      description: '',
    },
  }),
  actions: {
    async saveSurrounding() {
      const toast = useToast(); // Inicializa el toast

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL_MAIN}/surroundings-hotel/create`, this.surrounding);
        
        // Maneja la respuesta después de guardar el alrededor
        toast.success(response.data.message || 'Alrededor registrado con éxito');
        
        // Retorna los datos de la respuesta para que el componente pueda manejar el cierre del modal y otras acciones
        return response.data;
      } catch (error) {
        // Muestra el mensaje de error
        const errorMessage = error.response?.data?.message || 'Error al guardar el alrededor';
        toast.error(errorMessage);
        
        console.error('Error al guardar el alrededor', error);
        throw error; // Lanza el error para que pueda ser manejado en el componente
      }
    },
    clearForm() {
      this.surrounding = {
        hotel_id: null,
        place_name: '',
        category: '',
        description: '',
      };
    },
    closeModal() {
      // Lógica para cerrar el modal, si es necesario
    }
  }
});
