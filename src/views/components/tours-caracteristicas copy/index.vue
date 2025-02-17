<template>
  <div>
    <div class="flex flex-wrap justify-between items-center mb-4">
      <div class="md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse"
        :class="width < 768 ? 'space-x-rb' : ''">


        <Button icon="heroicons-outline:plus" text="Nuevo"
          btnClass="btn-dark dark:bg-slate-800  h-min text-sm font-normal" iconClass=" text-lg" @click="openProject"
          :isLoading="store.isLoading" />
      </div>
    </div>

    <Grid v-if="fillter === 'grid' && !isSkeletionGrid" />
    <List v-if="fillter === 'list' && !isSkeletionList" />

    <TransportAddModal @updateTransportList="reloadCaracteristicasTable" />
    <TransportEditModal />
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import TableSkeltion from "@/components/Skeleton/Table";
import { computed, ref, watch, onMounted } from "vue";
import List from "./Project-list";
import Grid from "./Projects-grid";
import { useProjectStore } from "@/store/project";
import TransportEditModal from "./TransportEditModal.vue";
import TransportAddModal from "./TransportAddModal.vue";
import { useCaracteristicaStore } from "@/store/useCaracteristicaStore";


const store = useCaracteristicaStore();
const store2 = useProjectStore();

let fillter = ref("list"); // Inicia con 'list'
const openProject = () => {
  store2.openProject();
};

const reloadCaracteristicasTable = () => {
  try {
    const store = useCaracteristicaStore();
    store.listarCaracteristicas();
  } catch (error) {
    console.error('Error al recargar Características:', error);
  }
}

const width = ref(0);
const handleResize = () => {
  width.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

const projects = computed(() => store.projects);

const isSkeletionList = ref(true);
const isSkeletionGrid = ref(false);

setTimeout(() => {
  isSkeletionList.value = false;
}, 1000);

watch(fillter, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    if (newValue === 'list') {
      isSkeletionList.value = true;
      isSkeletionGrid.value = false;
    } else {
      isSkeletionList.value = false;
      isSkeletionGrid.value = true;
    }
    setTimeout(() => {
      isSkeletionList.value = false;
      isSkeletionGrid.value = false;
    }, 1000);
  }
});
</script>

<style lang="">

</style>
