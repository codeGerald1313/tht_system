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
        price: '0.00',
        observation: '',
        description: '',
      }
    ],
  }),
  actions: {
 async saveTypeBedrooms() {
  const toast = useToast(); // Inicializa el toast

  try {
    // Formatear los datos en la estructura esperada por el backend
    const payload = {
      hotel_typebedrooms: this.typebedrooms.map(typeBedroom => ({
        hotel_id: typeBedroom.hotel_id,
        option_id: typeBedroom.option_id,
        typebedroom_description: typeBedroom.typebedroom_description,
        typebedroom_abbreviation: typeBedroom.typebedroom_abbreviation || null,
        price: typeBedroom.price,
        observation: typeBedroom.observation || null,
        description: typeBedroom.description || null,
      }))
    };

    // Enviar los datos formateados al backend
    const response = await axios.post(`${import.meta.env.VITE_API_URL_MAIN}/hotel-typebedrooms/create/`, payload);
    
    // Mostrar mensaje de éxito
    toast.success(response.data.message || 'Tipos de habitación registrados con éxito');
    
    // Limpiar formulario y cerrar modal
    this.clearForm();
    this.closeModal();
  } catch (error) {
    // Manejo de errores
    const errorMessage = error.response?.data?.message || 'Error al guardar los tipos de habitación';
    toast.error(errorMessage);
    console.error('Error al guardar los tipos de habitación:', error);
  }
},

    addTypeBedroom() {
      this.typebedrooms.push({
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
