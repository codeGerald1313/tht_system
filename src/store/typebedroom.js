import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification';

export const useTypeBedroomStore = defineStore('typebedroom', {
  state: () => ({
    typebedrooms: [
      {
        hotel_id: null,
        option_id: null,
        typebedroom_description: '',
        typebedroom_abbreviation: '',
        price: 0.00,
        observation: '',
        description: '',
      }
    ],
  }),
  actions: {
    async saveTypeBedrooms() {
      const toast = useToast(); // Inicializa el toast

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL_MAIN}/hotel_typebedrooms`, this.typebedrooms);
        toast.success(response.data.message || 'Tipos de habitación registrados con éxito');
        this.clearForm();
        this.closeModal();
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error al guardar los tipos de habitación';
        toast.error(errorMessage);
        console.error('Error al guardar los tipos de habitación', error);
      }
    },
    addTypeBedroom() {
      this.typebedrooms.push({
        hotel_id: null,
        option_id: null,
        typebedroom_description: '',
        typebedroom_abbreviation: '',
        price: 0.00,
        observation: '',
        description: '',
      });

      console.log(this.typebedrooms);
    },
    removeTypeBedroom(index) {
      this.typebedrooms.splice(index, 1);
    },
    clearForm() {
      this.typebedrooms = [
        {
          hotel_id: null,
          option_id: null,
          typebedroom_description: '',
          typebedroom_abbreviation: '',
          price: 0.00,
          observation: '',
          description: '',
        }
      ];
    },
    closeModal() {
      // Lógica para cerrar el modal
    }
  }
});
