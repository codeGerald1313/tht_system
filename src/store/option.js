import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification'; // Importa useToast

export const useOptionStore = defineStore('option', {
  state: () => ({
    options: [], // Estado para almacenar las opciones en formato { value, label }
  }),
  actions: {
    async fetchOptions() {
      const toast = useToast(); // Inicializa el toast

      try {
        // Reemplaza la URL con tu endpoint real
        const response = await axios.get(`${import.meta.env.VITE_API_URL_MAIN}/option-typebedrooms/list`);
        
        // Formatea los datos en el formato esperado por Select
        this.options = response.data.data.map(option => ({
          value: option.id, // O el campo que represente el valor
          label: option.name // O el campo que represente la etiqueta
        }));

        // Muestra un mensaje de éxito
        // toast.success('Opciones cargadas con éxito');
      } catch (error) {
        // Muestra un mensaje de error
        toast.error('Error al obtener las opciones');
        console.error('Error al obtener las opciones', error);
      }
    }
  }
});
