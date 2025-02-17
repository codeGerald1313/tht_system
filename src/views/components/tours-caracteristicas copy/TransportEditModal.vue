<template>
  <div>
    <Modal :activeModal="props.activeModal" @close="closeEditModal" title="Editar Característica" sizeClass="max-w-4xl"
      centered>
      <form name="formModalCaracteristica" id="formModalCaracteristica" autocomplete="off" class="space-y-4">

        <div class="grid grid-cols-1 gap-4">
          <!-- Nombre de la Característica -->
          <FromGroup label="Nombres">
            <InputGroup type="text" placeholder="Nombre Caracteristica"
              v-model="caracteristicaStore.caracteristica.descripcion" />
            <span v-if="!caracteristicaStore.isValidField('descripcion')" class="text-red-500">Por favor ingresa un
              nombre
              válido</span>
          </FromGroup>

          <!-- Icono de la Característica -->
          <FromGroup label="Icono">
            <InputGroup type="text" placeholder="Icono" v-model="caracteristicaStore.caracteristica.icono" />
          </FromGroup>

          <!-- Tipo de Característica -->
          <FromGroup label="Tipo Caracteristica">
            <div class="relative">
              <Select id="tipo" name="tipo" v-model="caracteristicaStore.caracteristica.id_type_characteristic"
                :options="caracteristicaStore.tipoCaracteristicaOptions" />
            </div>
          </FromGroup>
        </div>

        <!-- Botones -->
        <div class="form-group col-lg-12 form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModal" />
            <Button text="Guardar" btnClass="btn-dark" @click.prevent="updateCaracteristica" />
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
import Select from "@/components/Select";
import { watch, defineProps } from "vue";
import { useCaracteristicaStore } from "@/store/useCaracteristicaStore";

const props = defineProps({
  activeModal: Boolean,
  caracteristicaData: Object,
});

const caracteristicaStore = useCaracteristicaStore();

const emits = defineEmits(["close", "updateTransportList"]);

const closeEditModal = () => {
  emits("close");
};

const updateCaracteristica = () => {
  caracteristicaStore.update() // Llama al método update del store
  emits('close'); // Emite el evento para cerrar el modal
  emits('updateTransportList'); // Emite el evento después de una actualización exitosa
};


watch(
  () => props.caracteristicaData,
  (newData) => {
    if (newData && Object.keys(newData).length > 0) { // Verifica que newData tenga algún valor
      // console.log(newData);
      caracteristicaStore.caracteristica.id = newData.id || null;
      caracteristicaStore.caracteristica.descripcion = newData.name || "";
      caracteristicaStore.caracteristica.icono = newData.icono || "icon-fab";
      caracteristicaStore.caracteristica.id_type_characteristic = newData.id_type_characteristic || null;
    }
  },
  { immediate: true }
);


</script>

<style lang="scss" scoped>
// Agrega estilos personalizados si es necesario</style>
