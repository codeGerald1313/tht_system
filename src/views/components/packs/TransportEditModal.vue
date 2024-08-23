<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Detalle de Packs"
      sizeClass="max-w-3xl" centered>
      <form name="object_form" id="object_form" autocomplete="off" class="space-y-4">
        <!-- Sección para la tabla -->
        <div class="space-y-4">
          <FromGroup label="Detalles del transporte">
            <vue-good-table :columns="columns" :rows="rows" :sort-options="{ enabled: false }" class="custom-table">
              <template v-slot:table-row="props">
                <span v-if="props.column.field === 'number'">
                  {{ props.row.number }}
                </span>
                <span v-if="props.column.field === 'name'" >
                  {{ props.row.tour_name }}
                </span>
                <span v-if="props.column.field === 'price'">
                  {{ props.row.price }}
                </span>
              </template>
            </vue-good-table>
          </FromGroup>
        </div>
      </form>
    </Modal>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useAuth } from '@/store/auth';
import { useToast } from 'vue-toastification';
import Modal from "@/components/Modal";

const toast = useToast();
const headers = useAuth().headers(); // Autenticación
const props = defineProps({
  activeModal: Boolean,
  detailData: Object
});
const emits = defineEmits(['close', 'updateTransportList']);

const transport = ref({
  tours: []
});

const columns = ref([
  { label: '#', field: 'number' },
  { label: 'Nombre', field: 'name' },
  { label: 'Precio', field: 'price' }
]);

const rows = ref([]);

const closeEditModal = () => {
  emits('close');
};

watch(() => props.detailData, (newData) => {
  if (newData) {
    transport.value = { ...newData };
    rows.value = transport.value.tours.map((tour, index) => ({
      number: index + 1,
      tour_name: tour.tour_name,
      price: tour.price || 'No especificado' // Asegúrate de que el campo `price` esté en tus datos
    }));
  }
});
</script>
<style scoped>
.custom-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.custom-table thead {
  background-color: #f8f9fa;
}

.custom-table th {
  padding: 12px;
  text-align: left;
  font-weight: bold;
  color: #495057;
  border-bottom: 2px solid #dee2e6;
}

.custom-table td {
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
}

.custom-table tr:hover {
  background-color: #f1f3f5;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}
</style>

