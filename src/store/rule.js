import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification';

export const useRuleStore = defineStore('rule', {
  state: () => ({
    rule: {
      hotel_id: null,
      category: '',
      rule_text: '',
      description: '',
    },
  }),
  actions: {
    async saveRule() {
      const toast = useToast(); // Inicializa el toast

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL_MAIN}/rules`, this.rule);
        
        // Maneja la respuesta después de guardar la regla
        toast.success(response.data.message || 'Regla registrada con éxito');
        
        // Retorna los datos de la respuesta para que el componente pueda manejar el cierre del modal y otras acciones
        return response.data;
      } catch (error) {
        // Muestra el mensaje de error
        const errorMessage = error.response?.data?.message || 'Error al guardar la regla';
        toast.error(errorMessage);
        
        console.error('Error al guardar la regla', error);
        throw error; // Lanza el error para que pueda ser manejado en el componente
      }
    },
    clearForm() {
      this.rule = {
        hotel_id: null,
        category: '',
        rule_text: '',
        description: '',
      };
    },
    closeModal() {
      // Lógica para cerrar el modal, si es necesario
    }
  }
});
