import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useHotelStore = defineStore("hotel", {
  state: () => ({
    hotels: [],
    loading: false,
    error: null,
    hotel: {
      nombre: "",
      direccion: "",
      ciudad: "",
      telefono: "",
      email: "",
      sitio_web: "",
      descripcion: "",
      precio_noche: "",
      numero_habitaciones: "",
      estrellas: "",
      tipo_habitacion: "",
      servicios: "",
      imagen_principal: null,
      imagen_galeria: null,
    },
  }),
  actions: {
    async fetchHotels() {
      const toast = useToast();
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL_MAIN}/hotels/list`
        );
        this.hotels = response.data.data;
        // Mostrar el mensaje de éxito proporcionado por el backend
        toast.success(response.data.message || "Hoteles cargados exitosamente.");
        return this.hotels;
      } catch (error) {
        // Mostrar el mensaje de error proporcionado por el backend
        this.error = error.response?.data?.message || "Error al cargar los hoteles";
        toast.error(this.error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async saveHotel() {
      const toast = useToast();
      this.loading = true;
      this.error = null;

      try {
        const formData = new FormData();
        for (const key in this.hotel) {
          if (this.hotel[key] !== null && this.hotel[key] !== "") {
            formData.append(key, this.hotel[key]);
          }
        }

        const response = await axios.post("/api/hotels", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        this.hotels.push(response.data.data);
        // Mostrar el mensaje de éxito proporcionado por el backend
        toast.success(response.data.message || "Hotel guardado exitosamente.");
        return response.data;
      } catch (error) {
        // Mostrar el mensaje de error proporcionado por el backend
        this.error = error.response?.data?.message || "Error al guardar el hotel";
        toast.error(this.error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    resetForm() {
      this.hotel = {
        nombre: "",
        direccion: "",
        ciudad: "",
        telefono: "",
        email: "",
        sitio_web: "",
        descripcion: "",
        precio_noche: "",
        numero_habitaciones: "",
        estrellas: "",
        tipo_habitacion: "",
        servicios: "",
        imagen_principal: null,
        imagen_galeria: null,
      };
    },
  },
});
