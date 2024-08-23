<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="close" title="Registrar Nueva Regla"
      sizeClass="max-w-3xl" centered>
      <form name="form_rules" id="form_rules" autocomplete="off" class="space-y-6 p-6">
        <!-- Sección del formulario -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <!-- Categoría -->
          <FromGroup label="Categoría" class="flex flex-col">
            <Select :options="categories" v-model="ruleStore.rule.category" />
          </FromGroup>

          <!-- Texto de la Regla -->
          <FromGroup label="Texto de la Regla" class="flex flex-col">
            <InputGroup type="text" v-model.trim="ruleStore.rule.rule_text" />
          </FromGroup>

        </div>

        <!-- Descripción en toda la fila -->
        <div class="grid grid-cols-1 gap-6 mt-4">
          <FromGroup label="Descripción" class="flex flex-col col-span-2">
            <Textarea v-model.trim="ruleStore.rule.description" rows="4" />
          </FromGroup>
        </div>

        <!-- Botones de Acción -->
        <div class="flex justify-end mt-6">
          <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="close" />
          <Button text="Guardar" btnClass="btn-dark" @click.prevent="handleSaveRule" />
        </div>
      </form>
    </Modal>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import InputGroup from "@/components/InputGroup";
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";
import { useRuleStore } from '@/store/rule';
import { useProjectStore } from "@/store/project";

const store = useProjectStore();
const ruleStore = useRuleStore();

// Opciones de categoría
const categories = ref([
  { value: 'General', label: 'General' },
  { value: 'Check-in/Check-out', label: 'Check-in/Check-out' },
  { value: 'Política de Cancelación', label: 'Política de Cancelación' },
]);

const props = defineProps({
  activeModal: Boolean,
  transportData: Object
});

// Emitir eventos para cerrar el modal y actualizar datos
const emits = defineEmits(['close', 'updateRulesList']);

const close = () => {
  emits('close');
};

const handleSaveRule = async () => {
  try {
    await ruleStore.saveRule();
    emits('updateRulesList'); // Emitir evento para actualizar la lista de reglas
    ruleStore.clearForm();  // Limpiar el formulario en el store
    close(); // Cerrar el modal
  } catch (error) {
    // Manejo de errores si es necesario
  }
};

// Watcher para escuchar cambios en transportData y actualizar el store
watch(
  () => props.transportData,
  (newData) => {
    if (newData && newData.hotel_id) {
      ruleStore.rule.hotel_id = newData.hotel_id; // Establece el ID del hotel en el store
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* Puedes añadir estilos personalizados aquí */
</style>
