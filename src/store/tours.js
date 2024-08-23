import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification"; // Asegúrate de que vue-toastification esté instalado

export const useCaracteristicaStore = defineStore("caracteristicas", {
  state: () => ({
    tours: [],
    typeOptions: [],
    characteristicOptions: [],
  }),

  actions: {
    async fetchTours() {
      const toast = useToast(); // Obtén la instancia de toast

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL_MAIN}/tours/list`
        );
        this.tours = response.data.data;
        toast.success(response.data.message); // Muestra un mensaje de éxito

        return this.tours;
      } catch (error) {
        console.error("Error fetching tours:", error);

        // Si el backend devuelve un mensaje de error
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message); // Muestra el mensaje de error del backend
        } else {
          toast.error("An unexpected error occurred."); // Mensaje de error genérico
        }

        return [];
      }
    },
    // Nuevo método para obtener detalles de una característica del tour
    async fetchCharacteristicDetails(id) {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL_MAIN
          }/caracteristicas/tour-characteristic/${id}`
        );
        if (response && response.data) {
          return response.data; // Devuelve la respuesta completa
        }
        return null;
      } catch (error) {
        console.error("Error fetching characteristic details:", error);
        return null;
      }
    },
    // Método para obtener tipos de características
    async fetchTypes() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL_MAIN}/caracteristicas/types`
        );
        if (response && response.data) {
          return response.data; // Asegúrate de devolver la respuesta completa
        }
        return null;
      } catch (error) {
        console.error("Error fetching types:", error);
        return null;
      }
    },

    // Método para obtener características por tipo
    async fetchCharacteristicsByType(typeId) {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL_MAIN
          }/caracteristicas/filter-type/${typeId}`
        );
        if (response && response.data) {
          // Asegúrate de que `data` contiene la estructura esperada
          return response.data; // Devuelve la respuesta completa
        }
        return null;
      } catch (error) {
        console.error("Error fetching characteristics:", error);
        return null;
      }
    },
  },
});
