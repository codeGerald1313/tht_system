// stores/nosotros.js
import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useNosotrosStore = defineStore("nosotros", {
  state: () => ({
    nosotros: {
      id: null,
      nom_empresa: "",
      nota: "",
      mision: "",
      vision: "",
      video: "",
    },
    toast: useToast(), 
  }),
  actions: {
    async getRecord() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL_MAIN}/nosotros/list`
        );
        if (response.data.status === "success") {
          this.toast.success(response.data.message);

          const data = response.data.data;
          this.nosotros = {
            id: data.id_nosotros,
            nom_empresa: data.nom_empresa || "",
            nota: data.nota || "",
            mision: data.mision || "",
            vision: data.vision || "",
            video: data.video || "",
          };
        } else {
          console.error("No se encontró el registro");
        }
      } catch (error) {
        console.error("Error al obtener el registro:", error);
      }
    },
    async updateRecord() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL_MAIN}/nosotros/edit/${this.nosotros.id}`,
          this.form
        );
        if (response.data.status === "success") {
          this.toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("Error al actualizar el registro:", error);
      }
    },
  },
});
