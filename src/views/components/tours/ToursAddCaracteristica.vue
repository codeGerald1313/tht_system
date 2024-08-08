<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Actualizar Característica" sizeClass="max-w-6xl" centered>
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

    
        <div class="overflow-x-auto">
        <PacksTable />
      </div>

      </form>
    </Modal>
  </div>
</template>

<script setup>
import Modal from "@/components/Modal";
import FromGroup from "@/components/FromGroup";
import Select from "@/components/Select";
import { ref } from "vue";
import PacksTable from "./TableAddCaracteristica";

const props = defineProps({
  activeModal: Boolean,
});

const emits = defineEmits(['close']);

const selectedType = ref('');
const selectedCharacteristic = ref('');

const typeOptions = [
  { value: 0, label: "Selecciona" },
  { value: 1, label: "Itinerario" },
  { value: 2, label: "Actividades" },
  { value: 3, label: "Adicionales" },
  { value: 4, label: "Recomendaciones" },
  { value: 5, label: "Incluye" },
  { value: 6, label: "No Incluye" }
];

const characteristicOptions = [
  { value: "", label: "Característica1" }
];

const tableData = ref([
  { type: "Itinerario", category: "Categoría1", option: "Opción1" },
  // Más datos aquí...
]);

const closeEditModal = () => {
  emits('close');
};
</script>

<style lang="scss" scoped>
/* Agrega estilos personalizados si es necesario */
</style>
