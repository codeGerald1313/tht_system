<template>
  <div>
    <div class="flex flex-wrap justify-between items-center mb-4">
      <div
        class="md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse"
        :class="width < 768 ? 'space-x-rb' : ''"
      >
        <Button
          icon="heroicons:list-bullet"
          text="Vista de Lista"
          :btnClass="`${
            fillter === 'list'
              ? 'bg-slate-900 dark:bg-slate-700  text-white'
              : ' bg-white dark:bg-slate-800 dark:text-slate-300'
          }   h-min text-sm font-normal`"
          iconClass=" text-lg"
          @click="fillter = 'list'"
          :isLoading="isSkeletionList"
          :isDisabled="isSkeletionList"
        />
 
        <Button
          icon="heroicons-outline:plus"
          text="Agregar Ingreso"
          btnClass="btn-dark dark:bg-slate-800  h-min text-sm font-normal"
          iconClass=" text-lg"
          @click="openProject"
          :isLoading="store.isLoading"
        />
      </div>
    </div>

    <TableSkeltion :count="projects.length" v-if="isSkeletionList" />
    <Grid v-if="fillter === 'grid' && !isSkeletionGrid" />
    <List v-if="fillter === 'list' && !isSkeletionList" />

    <ClientAddModal />
    <ClientEditModal />
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
import ClientAddModal from "./ClientAddModal.vue";
import ClientEditModal from "./ClientEditModal.vue";

const store = useProjectStore();

let fillter = ref("list"); // Inicia con 'list'
const openProject = () => {
  store.openProject();
};

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

<style lang=""></style>
