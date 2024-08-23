import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification"; // Asegúrate de tener instalado y configurado vue-toastification

export const usePackStore = defineStore("pack", {
    state: () => ({
        packs: [],
        tourOptions: [], // Nueva propiedad para las opciones de tours
        loading: false,
        error: null,
        formData: {
            nombre: "",         // Corresponde a 'nombre' en la validación del backend
            slug: "",           // Corresponde a 'slug' en la validación del backend
            imgPerfil: null,    // Corresponde a 'img_perfil' en la validación del backend
            imgPortada: null,   // Corresponde a 'img_portada' en la validación del backend
            tiempo: "",         // Corresponde a 'tiempo' en la validación del backend
            con_hotel: "",      // Corresponde a 'con_hotel' en la validación del backend
            tours: [],          // Corresponde a 'id_tour' en la validación del backend (es un array)
            con_turs: "",       // Corresponde a 'con_turs' en la validación del backend
            pasaje: "",         // Corresponde a 'con_pasaje' en la validación del backend
            precio: "",         // Corresponde a 'precio' en la validación del backend
        }
    }),
    actions: {
        async fetchPacks() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL_MAIN}/packs/list`
                );
                if (response.data.status === "success") {
                    this.packs = response.data.data;
                }
            } catch (error) {
                this.error = error.response?.data?.message || "Error fetching packs";
            } finally {
                this.loading = false;
            }
        },
        async createPack() {
            const toast = useToast(); // Inicializa el uso de toast
            this.loading = true;
            this.error = null;

            console.log(this.formData);
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL_MAIN}/packs/create`, this.formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                this.packs.push(response.data.data);
                
                // Mostrar mensaje de éxito
                toast.success("¡El pack se ha creado exitosamente!");

                this.resetForm();  // Resetea el formulario
                return response.data;
            } catch (error) {
                this.error = error.response?.data?.message || "Error creating pack";
                toast.error(this.error); // Mostrar mensaje de error si ocurre
                throw error;
            } finally {
                this.loading = false;
            }
        },
        async fetchPackWithTours(id_pack) {
            try {
              const response = await axios.get(`${import.meta.env.VITE_API_URL_MAIN}/packs/tours/${id_pack}`);
              return response.data.data; // Asume que aquí tienes el pack y sus tours
            } catch (error) {
              console.error('Error fetching pack with tours:', error);
              return null;
            }
          },
        async fetchTours() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL_MAIN}/tours/list-select`
                );
                if (response.data.status === "success") {
                    this.tourOptions = response.data.data.map((tour) => ({
                        value: tour.id_tour,
                        label: tour.nombre,
                    }));
                }
            } catch (error) {
                this.error = error.response?.data?.message || "Error fetching tours";
            }
        },
        resetForm() {
            this.formData = {
                nombre_pack: "",
                slug: "",
                imgPerfil: "",
                imgPortada: "",
                tiempo: "",
                con_hotal: "",
                tours: "",
                pasaje: "",
                precio: "",
            };
        },
    },
});
