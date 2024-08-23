import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";
import { useAuth } from "@/store/auth";
import { useProjectStore } from "@/store/project";

export const useCaracteristicaStore = defineStore("caracteristica", () => {
  const toast = useToast();
  const authStore = useAuth();
  const projectStore = useProjectStore();

  const headers = authStore.headers();
  const caracteristica = ref({
    descripcion: "",
    icono: "icon-fab",
    id_type_characteristic: ""
  });

  const caracteristicas = ref([]);

  // Opciones para el Select
  const tipoCaracteristicaOptions = [
    { value: 1, label: 'Itinerario' },
    { value: 2, label: 'Actividades' },
    { value: 3, label: 'Adicionales' },
    { value: 4, label: 'Recomendaciones' },
    { value: 5, label: 'Incluye' },
    { value: 6, label: 'No Incluye' }
  ];

  // Método para cerrar el modal
  const close = () => {
    projectStore.closeModal();
  };

  // Método para guardar la característica
  const save = () => {
    axios.post(`${import.meta.env.VITE_API_URL_MAIN}/caracteristicas/create`, caracteristica.value, {
      ...headers
    })
      .then(response => {
        close();
        toast.success(response.data.message);
      })
      .catch(error => {
        console.error('Error al guardar los datos:', error);
      });
  };



  const saveMultipleCharacteristics = (payload) => {
    axios.post(`${import.meta.env.VITE_API_URL_MAIN}/caracteristicas/create-multiple`, payload, {
      ...headers
    })
    .then(response => {
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error.response.data);
      toast.error('Hubo un error al guardar las características.');
    });
  };
  


  // Método para actualizar una característica
  const update = () => {
    axios.post(`${import.meta.env.VITE_API_URL_MAIN}/caracteristicas/edit/${caracteristica.value.id}`, caracteristica.value, {
      ...headers
    })
      .then(response => {
        close();
        toast.success(response.data.message);
      })
      .catch(error => {
        console.error('Error al actualizar los datos:', error);
        toast.error("Hubo un error al actualizar la característica.");
      });
  };

  // Método para listar características
  const listarCaracteristicas = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL_MAIN}/caracteristicas/list`, { headers });
      caracteristicas.value = response.data.data;

      toast.success('Características listadas correctamente', {
        timeout: 1500,
      });
    } catch (error) {
      console.error('Error al obtener los datos de las características:', error);
    }
  };


  const deleteCaracteristica = (id) => {
    axios.delete(`${import.meta.env.VITE_API_URL_MAIN}/caracteristicas/delete/${id}`, { headers })
      .then(response => {
        toast.success('Característica eliminada correctamente');
        // Elimina la característica del arreglo local si es necesario
        caracteristicas.value = caracteristicas.value.filter(item => item.id !== id);
      })
      .catch(error => {
        console.error('Error al eliminar la característica:', error);
        toast.error('Hubo un error al eliminar la característica.');
      });
  };

  // Método para verificar si un campo específico es válido
  const isValidField = (fieldName) => {
    return !!caracteristica.value[fieldName];
  };

  return {
    caracteristica,
    caracteristicas,
    tipoCaracteristicaOptions,
    close,
    save,
    update,  // Agregado método update
    listarCaracteristicas,
    deleteCaracteristica,
    isValidField,
    saveMultipleCharacteristics,
  };
});
