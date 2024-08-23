<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Agregar Característica" sizeClass="max-w-6xl"
      centered>
      <form name="object_form" id="object_form" autocomplete="off" class="space-y-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <!-- Select Tipo -->
          <div>
            <FromGroup label="Seleccione Tipo">
              <Select v-model="selectedType" :options="typeOptions" />
            </FromGroup>
          </div>

          <!-- Select Característica -->
          <div>
            <FromGroup label="Característica">
              <Select v-model="selectedCharacteristic" :options="characteristicOptions" />
            </FromGroup>
          </div>

        </div>

        <!-- Tabla Integrada -->
        <div class="overflow-x-auto">
          <vue-good-table :columns="columns" :rows="tableData" :sort-options="{ enabled: false }" class="custom-table">
            <template v-slot:table-row="props">
              <!-- Columna de Tipo -->

              <span v-if="props.column.field === 'tours'" class="flex items-center justify-center p-2 center-content">
                {{ props.row.id_type }}
              </span>

              <span v-if="props.column.field === 'type'" class="flex items-center justify-center p-2 center-content">
                {{ props.row.type }}
              </span>

              <!-- Columna de Categoría -->
              <span v-if="props.column.field === 'category'"
                class="flex items-center justify-center p-2 center-content">
                {{ props.row.category }}
              </span>

              <!-- Columna de Opción (Acciones) -->
              <span v-if="props.column.field === 'action'" class="flex items-center justify-center p-2 space-x-2">
                <!-- Botón de Eliminar -->
                <button type="button" class="bg-red-500 text-white p-3 rounded flex items-center justify-center"
                  @click="handleDelete(props.row.id)">
                  <Icon icon="heroicons:trash" class="w-7 h-7" />
                </button>
              </span>
            </template>
          </vue-good-table>
        </div>

      </form>

      <!-- Botones -->
      <div class="form__footerBtn mt-4">
        <div class="text-right">
          <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModal" />
          <Button text="Guardar Múltiples" btnClass="btn-dark" @click.prevent="guardarMultiplesCaracteristicas" />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import Modal from "@/components/Modal";
import FromGroup from "@/components/FromGroup";
import Button from "@/components/Button";
import Select from "@/components/Select";
import Icon from "@/components/Icon";
import { ref, watch, onMounted } from "vue";
import { useCaracteristicaStore } from "@/store/tours";
import { useCaracteristicaStore as Xd } from "@/store/useCaracteristicaStore";

const props = defineProps({
  activeModal: Boolean,
  idTour: Number,  // Define 'idTour' como un valor numérico
});

const emits = defineEmits(['close', 'updateListTours']);

const toursStore = useCaracteristicaStore();
const caracteristicaStore = Xd();

const selectedType = ref('');
const selectedCharacteristic = ref('');

const typeOptions = ref([]);
const characteristicOptions = ref([]);

const tableData = ref([]); // Cambié la inicialización para que sea un array vacío

const columns = [
  { label: "#", field: "tours" },
  { label: "Tipo", field: "type" },
  { label: "Categoría", field: "category" },
  { label: "Opción", field: "action" }
];


const guardarMultiplesCaracteristicas = () => {
  const characteristicsList = tableData.value.map(item => ({
    id_type_characteristic: item.id_type,  // Incluye el id_type_characteristic en cada objeto
    icono: "default-icono",                // Asigna un valor por defecto para el icono (puedes cambiarlo según sea necesario)
    descripcion: item.category,            // Asigna category como descripcion
  }));

  const payload = {
    id_tour: props.idTour, // Incluir id_tour en el nivel superior
    characteristics: characteristicsList,
  };

  // Llamar al método del store para guardar las características
  caracteristicaStore.saveMultipleCharacteristics(payload);
  emits('close');
  emits('updateListTours');
};




// Llamar al método `getTypes` cuando el componente se monte
onMounted(async () => {
  try {
    const response = await toursStore.fetchTypes();
    if (response && response.status === 'success') {
      typeOptions.value = response.data.map(type => ({
        value: type.id_type,
        label: type.type
      }));

    } else if (response) {
      console.error(response.message);
    } else {
      console.error('No response from fetchTypes');
    }
  } catch (error) {
    console.error("Error fetching types:", error);
  }
});

// Watcher para idTour
watch(() => props.idTour, (newValue, oldValue) => {
  // console.log('idTour ha cambiado:', oldValue, '=>', newValue);
  // Aquí puedes agregar la lógica que quieras ejecutar cuando idTour cambie
});


// Watcher para escuchar cambios en `selectedType`
watch(selectedType, async (newType) => {
  if (newType) {
    try {
      const response = await toursStore.fetchCharacteristicsByType(newType);
      if (response && response.status === 'success') {
        characteristicOptions.value = response.data.map(characteristic => ({
          value: characteristic.id_characteristic,
          label: characteristic.descripcion,
        }));

        console.log(characteristicOptions.value);
      } else {
        characteristicOptions.value = []; // Limpiar si no hay resultados
        console.error(response.message);
      }
    } catch (error) {
      console.error("Error fetching characteristics:", error);
    }
  } else {
    characteristicOptions.value = []; // Limpiar si no hay tipo seleccionado
  }
});

watch(selectedCharacteristic, async (newCharacteristic) => {
  if (newCharacteristic) {
    try {
      // Llama al método del store para obtener los detalles de la característica
      const response = await toursStore.fetchCharacteristicDetails(newCharacteristic);

      // Verifica si la respuesta contiene los datos esperados
      if (response && response.type_characteristic) {
        // Extrae la información de la respuesta
        const { descripcion, type_characteristic } = response;

        // Agrega la fila a la tabla
        tableData.value.push({
          id_type: type_characteristic.id_type, // Usa un identificador único para cada fila
          type: type_characteristic.type, // label del tipo de característica
          category: descripcion, // descripción de la característica
          action: "Acción"
        });
      }
    } catch (error) {
      console.error('Error fetching characteristic details:', error);
    }
  }
});


const handleDelete = (id) => {
  // Remover el elemento con el ID proporcionado (esto es solo un ejemplo, deberías adaptar el código)
  tableData.value = tableData.value.filter(row => row.id !== id);
};

const closeEditModal = () => {
  emits('close');
};
</script>

<style lang="scss" scoped>
/* Estilos personalizados */
.custom-table {
  border-radius: 5px;
  overflow: hidden;
}

.custom-table th,
.custom-table td {
  border: 1px solid #e0e0e0;
  text-align: center;
}

.custom-table thead {
  background-color: #f9f9f9;
}

.custom-table tbody tr:hover {
  background-color: #f1f1f1;
}

/* Centrando el contenido */
.custom-table .center-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
