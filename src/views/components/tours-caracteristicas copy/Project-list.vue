<template>
  <div>
    <Card noborder>
      <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
        <h5>Detalles de Hoteles</h5>

        <div class="flex items-center space-x-3">
          <Button icon="heroicons-outline:arrows-up-down"
            btnClass="btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm"
            iconClass="text-lg" @click="reloadCaracteristicasTable" />
          <InputGroup v-model="searchTerm" placeholder="Buscar Caracteristica" type="text"
            prependIcon="heroicons-outline:search" merged />
        </div>
      </div>

      <div class="overflow-x-auto">
        <vue-good-table :columns="columns" :rows="rows" :search-options="{
          enabled: true,
          externalQuery: searchTerm,
        }" :sort-options="{ enabled: false }" class="custom-table">
          <template v-slot:table-row="props">
            <!-- Columna # -->
            <span v-if="props.column.field === 'number'" class="flex items-center justify-center p-2">
              {{ props.row.number }}
            </span>

            <!-- Columna Nombre -->
            <span v-if="props.column.field === 'name'" class="flex items-center justify-center p-2">
              {{ props.row.name }}
            </span>

            <!-- Columna Icono -->
            <span v-if="props.column.field === 'icono'" class="flex items-center justify-center p-2">
              {{ props.row.icono }}
            </span>

            <!-- Columna Tipo -->
            <span v-if="props.column.field === 'tipo'" class="flex items-center justify-center p-2">
              {{ props.row.tipo }}
            </span>

            <!-- Columna Opciones -->
            <span v-if="props.column.field === 'action'" class="flex items-center justify-center p-2 space-x-2">
              <button type="button" class="bg-blue-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleEdit(props.row)">
                <Icon icon="heroicons:pencil-square" class="w-7 h-7" />
              </button>
              <button type="button" class="bg-red-500 text-white p-3 rounded flex items-center justify-center"
                @click="handleDelete(props.row.id)">
                <Icon icon="heroicons:trash" class="w-7 h-7" />
              </button>
            </span>
          </template>
        </vue-good-table>

        <!-- Pasar la fila seleccionada como caracteristicaData -->
        <EditProject :activeModal="showEditModal" @close="showEditModal = false"
          :caracteristicaData="selectedCaracteristica" @updateTransportList="reloadCaracteristicasTable" />
      </div>
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Button from "@/components/Button";
import InputGroup from "@/components/InputGroup";
import Icon from "@/components/Icon";
import { useCaracteristicaStore } from "@/store/useCaracteristicaStore";
import EditProject from "./TransportEditModal.vue";

export default {
  components: {
    Button,
    InputGroup,
    Icon,
    Card,
    EditProject
  },

  data() {
    return {
      searchTerm: "",
      showEditModal: false,
      selectedCaracteristica: null, // Aquí se guardará la característica seleccionada para editar
      columns: [
        { label: "#", field: "number" },
        { label: "Nombre", field: "name" },
        { label: "Icono", field: "icono" },
        { label: "Tipo", field: "tipo" },
        { label: "Opciones", field: "action" },
      ],
    };
  },

  computed: {
    rows() {
      const store = useCaracteristicaStore();
      return store.caracteristicas.map((caracteristica, index) => ({
        number: index + 1,
        name: caracteristica.descripcion,
        icono: caracteristica.icono,
        tipo: store.tipoCaracteristicaOptions.find(option => option.value === caracteristica.id_type_characteristic)?.label,
        id: caracteristica.id_characteristic,
        id_type_characteristic: caracteristica.id_type_characteristic,

      }));
    },
  },

  methods: {
    handleEdit(row) {
      // console.log(row);
      this.selectedCaracteristica = row; // Asigna la fila seleccionada
      this.showEditModal = true;
    },
    handleDelete(id) {
      const confirmation = confirm('¿Estás seguro de que deseas eliminar este registro?');

      if (confirmation) {
        const store = useCaracteristicaStore();
        store.deleteCaracteristica(id);  // Llamada al método del store para eliminar
        store.listarCaracteristicas();
        console.log(`Registro con ID: ${id} ha sido eliminado.`);
      } else {
        console.log('Eliminación cancelada.');
      }
    },
    async reloadCaracteristicasTable() {
      try {
        const store = useCaracteristicaStore();
        await store.listarCaracteristicas();
      } catch (error) {
        console.error('Error al recargar Características:', error);
      }
    },
  },

  mounted() {
    const store = useCaracteristicaStore();
    store.listarCaracteristicas();
  }
};
</script>
