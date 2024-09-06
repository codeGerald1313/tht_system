<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="close" title="Registrar Nueva Regla" sizeClass="max-w-3xl" centered>
      <form name="form_rules" id="form_rules" autocomplete="off" class="space-y-6">
        <!-- Sección del formulario -->
        <div class="space-y-6">
          <!-- Categoría (Siempre ocupa la primera fila completa) -->
          <div class="grid grid-cols-1">
            <FromGroup label="Categoría" class="flex flex-col">
              <Select :options="ruleStore.categories" v-model="ruleStore.rule.category_id" />
            </FromGroup>
          </div>

          <!-- Campos específicos según la categoría -->
          <div
            v-if="ruleStore.rule.category_id == 1 || ruleStore.rule.category_id == 2 || ruleStore.rule.category_id == 5 || ruleStore.rule.category_id == 6 || ruleStore.rule.category_id == 8"
            class="grid grid-cols-1 gap-6">
            <!-- Texto de la Regla (para categoría 1 y 2, ocupa toda la fila) -->
            <FromGroup label="Texto de la Regla" class="flex flex-col">
              <InputGroup type="text" v-model.trim="ruleStore.rule.rule_text" />
            </FromGroup>
          </div>

          <div v-if="ruleStore.rule.category_id == 3" class="grid grid-cols-1">
            <!-- Texto de la Regla como Textarea (para categoría 3) -->
            <FromGroup label="Descripción de la Regla" class="flex flex-col">
              <Textarea v-model.trim="ruleStore.rule.rule_text" />
            </FromGroup>
          </div>

          <!-- Campos específicos según la categoría -->
          <div v-if="ruleStore.rule.category_id == 4" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Título (InputGroup) -->
            <FromGroup label="Título de la Regla" class="flex flex-col">
              <InputGroup type="text" v-model.trim="ruleStore.rule.rule_text.first_description" />
            </FromGroup>
            <FromGroup label="Descripción de la Regla" class="flex flex-col">
              <Textarea v-model.trim="ruleStore.rule.rule_text.second_description" />
            </FromGroup>


          </div>

          <template v-if="ruleStore.rule.category_id == 7">
            <FromGroup label="Métodos de Pago" class="flex flex-col">
              <!-- Input para agregar métodos de pago -->
              <div class="flex items-center space-x-4">
                <InputGroup type="text" v-model.trim="newPaymentMethod" placeholder="Agregar método de pago" />
                <Button text="Añadir" btnClass="btn-dark" @click.prevent="addPaymentMethod" />
              </div>

              <!-- Lista dinámica de métodos de pago -->
              <ul class="list-disc list-inside space-y-2">
                <li v-for="(method, index) in ruleStore.rule.paymentMethods" :key="index"
                  class="flex justify-between items-center">
                  <span class="text-slate-500 dark:text-slate-400">{{ method }}</span>
                  <button @click.prevent="removePaymentMethod(index)" class="text-red-500 hover:text-red-700">
                    <Icon icon="heroicons:trash" class="w-7 h-7" />
                  </button>
                </li>
              </ul>
            </FromGroup>
          </template>

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
import { computed, ref, watch } from "vue";
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import InputGroup from "@/components/InputGroup";
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";
import { useRuleStore } from '@/store/rule';
import { useProjectStore } from "@/store/project";
import Icon from "@/components/Icon";

const store = useProjectStore();
const ruleStore = useRuleStore();

const props = defineProps({
  activeModal: Boolean,
  idHotel: Number
});

// Emitir eventos para cerrar el modal y actualizar datos
const emits = defineEmits(['close', 'updateRulesList']);

const close = () => {
  emits('close');
};

const newPaymentMethod = ref("");


// Agregar método de pago a la lista
const addPaymentMethod = () => {
  if (newPaymentMethod.value.trim() !== "") {
    ruleStore.rule.paymentMethods.push(newPaymentMethod.value.trim());
    newPaymentMethod.value = "";
  }
};

// Eliminar método de pago de la lista
const removePaymentMethod = (index) => {
  ruleStore.rule.paymentMethods.splice(index, 1);
};


// Asegurar que `rule_text` sea siempre un objeto cuando sea necesario
const ensureRuleTextObject = () => {
  if (typeof ruleStore.rule.rule_text !== 'object' || ruleStore.rule.rule_text === null) {
    ruleStore.rule.rule_text = {};
  }
};


const handleSaveRule = async () => {
  try {
    let ruleTextObject;

    // Lógica condicional según category_id
    switch (ruleStore.rule.category_id) {
      case 1:
      case 2:
      case 3:
      case 5:
      case 6:
      case 8:
        // Para estas categorías, `rule_text` es solo texto.
        ruleTextObject = ruleStore.rule.rule_text;
        break;

      case 4:
        // Para la categoría 4, es un objeto con `first_description` y `second_description`.
        ruleTextObject = {
          first_description: ruleStore.rule.first_description,
          second_description: ruleStore.rule.second_description
        };
        break;

      case 7:
        // Para la categoría 7, incluye métodos de pago.
        ruleTextObject = {
          paymentMethods: ruleStore.rule.paymentMethods
        };
        break;

      default:
        // En caso de que `category_id` no coincida con ninguno de los casos.
        ruleTextObject = ruleStore.rule.rule_text;
    }

    // Convertir a JSON y asignar a `rule_text`
    ruleStore.rule.rule_text = JSON.stringify(ruleTextObject);

    // Guardar la regla
    await ruleStore.saveRule();
    ruleStore.clearForm();  // Limpiar el formulario en el store

    emits('updateRulesList'); // Emitir evento para actualizar la lista de reglas
    close(); // Cerrar el modal
  } catch (error) {
    console.error("Error al guardar la regla:", error);
  }
};

// Adaptar `rule_text` según la categoría seleccionada
const adaptRuleTextByCategory = (category) => {
  switch (category) {
    case "1":
    case "2":
    case "3":
    case "5":
    case "6":
    case "8":
      // Para estas categorías, `rule_text` es solo un texto
      if (typeof ruleStore.rule.rule_text === 'object') {
        ruleStore.rule.rule_text = ""; // Convertir a cadena si es un objeto
      }
      break;
    case "4":
      // Asegurarse que `rule_text` sea un objeto con las propiedades requeridas
      ensureRuleTextObject();
      ruleStore.rule.rule_text.first_description = ruleStore.rule.rule_text.first_description || "";
      ruleStore.rule.rule_text.second_description = ruleStore.rule.rule_text.second_description || "";
      break;
    case "7":
      // Asegurarse que `rule_text` sea un objeto que maneje métodos de pago
      ensureRuleTextObject();
      ruleStore.rule.rule_text.paymentMethods = ruleStore.rule.paymentMethods || [];
      break;
    default:
      ensureRuleTextObject();
  }
};



watch(
  () => props.activeModal,
  (isActive) => {
    // console.log(isActive);

    if (isActive) {
      ruleStore.fetchCategories(); // Carga las categorías cuando el modal se abre
      ensureRuleTextObject(); // Ensure rule_text is an object

    }
  }
);


const isActive = computed(() => props.activeModal);

watch(
  () => props.idHotel,
  (newData) => {
    if (isActive.value && newData) {
      console.log(newData);
      ruleStore.rule.hotel_id = newData; // Establece el ID del hotel en el store
    }
  },
  { immediate: true }
);



// Reaccionar a cambios en `category_id`
watch(() => ruleStore.rule.category_id, (newCategory) => {
  adaptRuleTextByCategory(newCategory); // Adaptar `rule_text` usando la nueva categoría
});

</script>

<style scoped>
/* Puedes añadir estilos personalizados aquí */
</style>
