<template>
  <div>
    <Modal :activeModal="store.addmodal" @close="store.closeModal" title="Registrar Característica"
      sizeClass="max-w-4xl" centered>
      <form name="formModalCaracteristica" id="formModalCaracteristica" autocomplete="off" class="space-y-4">

        <div class="grid grid-cols-1 gap-4">
          <!-- Nombre de la Característica -->
          <FromGroup label="Nombres">
            <InputGroup type="text" placeholder="Nombre Caracteristica" v-model="caracteristicaStore.caracteristica.descripcion" />
            <span v-if="!caracteristicaStore.isValidField('descripcion')" class="text-red-500">Por favor ingresa un nombre
              válido</span>
          </FromGroup>

          <!-- Icono de la Característica -->
          <FromGroup label="Icono">
            <InputGroup type="text" placeholder="Icono" v-model="caracteristicaStore.caracteristica.icono" />
          </FromGroup>

          <!-- Tipo de Característica -->
          <FromGroup label="Tipo Caracteristica">
            <div class="relative">
              <Select id="tipo" placeholder="Seleccionar Opción" name="tipo" v-model="caracteristicaStore.caracteristica.id_type_characteristic" :options="caracteristicaStore.tipoCaracteristicaOptions" />
            </div>
          </FromGroup>

        </div>

        <!-- Botones -->
        <div class="form-group col-lg-12 form__footerBtn mt-4">
          <div class="text-right">
            <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="caracteristicaStore.close" />
            <Button text="Guardar" btnClass="btn-dark" @click.prevent="handleSave" />
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
import { useCaracteristicaStore } from "@/store/useCaracteristicaStore";
import { useProjectStore } from "@/store/project";



const caracteristicaStore = useCaracteristicaStore();
const store = useProjectStore();

const emits = defineEmits(["close", "updateTransportList"]);


const handleSave =  () => {
  try {
     caracteristicaStore.save(); // Llama al método save del store
     emits('close'); // Emite el evento para cerrar el modal
     emits('updateTransportList'); // Emite el evento después de una actualización exitosa
  } catch (error) {
    console.error('Error al guardar:', error);
    emits('saveError'); // Emite un evento en caso de error si es necesario
  }
};



</script>

<style lang="scss" scoped>
// Agrega estilos personalizados si es necesario
</style>
