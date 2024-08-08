<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Actualizar registro de Transporte"
      sizeClass="max-w-6xl" centered>
      <form name="object_form" id="object_form" autocomplete="off" class="space-y-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <!-- Resto de los campos del formulario -->

        </div>

        <!-- Nueva sección para la tabla -->
        <div class="space-y-4">
          <FromGroup label="Detalles del transporte">
            <table class="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-200">
                  <th class="border border-gray-300 px-4 py-2">#</th>
                  <th class="border border-gray-300 px-4 py-2">Nombre</th>
                  <th class="border border-gray-300 px-4 py-2">Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(detalle, index) in transport.detalles" :key="index">
                  <td class="border border-gray-300 px-4 py-2">{{ index + 1 }}</td>
                  <td class="border border-gray-300 px-4 py-2">{{ detalle.nombre }}</td>
                  <td class="border border-gray-300 px-4 py-2">{{ detalle.precio }}</td>
                </tr>
              </tbody>
            </table>
          </FromGroup>
        </div>

        <!-- Botones -->
        <div class="form-group col-lg-12 form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModal" />
            <Button text="Guardar" btnClass="btn-dark" @click.prevent="save" />
          </div>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script setup>
import Button from "@/components/Button";
import FromGroup from "@/components/FromGroup";
import Modal from "@/components/Modal";
import InputGroup from "@/components/InputGroup";
import { ref, watch } from "vue";
import axios from "axios";
import { useAuth } from "@/store/auth";
import { useToast } from "vue-toastification";

const toast = useToast();
const headers = useAuth().headers(); // Autenticación
const props = defineProps({
  activeModal: Boolean,
  transportData: Object
});
const emits = defineEmits(['close', 'updateTransportList']);

const transport = ref({
  id: '',
  owner: "",
  document: "",
  vehicle_type: "",
  capacity: "",
  license_plate: "",
  reference_name: "",
  cellphone: "",
  telephone: "",
  email: "",
  address: "",
  characteristic: "",
  detalles: [
    { nombre: "Lamas Nativo", precio: 40.00 },
    { nombre: "Laguna Azul", precio: 100.00 },
    { nombre: "Catarata de Ahuashiyacu", precio: 40.00 },
  ]
});

const closeEditModal = () => {
  emits('close');
};

const save = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/transports/edit/${transport.value.id}`, transport.value, { ...headers })
    .then(response => {
      emits('updateTransportList');
      closeEditModal();
      toast.success(response.data.message);
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
    });
};

watch(() => props.transportData, (newData) => {
  if (newData) {
    transport.value = { ...newData, detalles: newData.detalles || [] };
  }
});

</script>

<style scoped>
/* Estilos personalizados */
.table-auto {
  width: 100%;
  border-collapse: collapse;
}
.table-auto th,
.table-auto td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.table-auto thead {
  background-color: #f2f2f2;
}
</style>
