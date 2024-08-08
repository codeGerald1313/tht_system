<template>
  <div>
    <div class="flex flex-wrap justify-between items-center mb-4">
      <div class="md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse"
        :class="width < 768 ? 'space-x-rb' : ''">
        <Button icon="heroicons:list-bullet" text="Vista de lista" :btnClass="`${fillter === 'list'
            ? 'bg-slate-900 dark:bg-slate-700  text-white'
            : ' bg-white dark:bg-slate-800 dark:text-slate-300'
          }   h-min text-sm font-normal`" iconClass=" text-lg" @click="fillter = 'list'" :isLoading="isSkeletionList"
          :isDisabled="isSkeletionList" />

        <!--<Button
          icon="heroicons-outline:view-grid"
          text="Vista de cuadrícula"
          :btnClass="`${
            fillter === 'grid'
              ? 'bg-slate-900 dark:bg-slate-700 text-white'
              : ' bg-white dark:bg-slate-800 dark:text-slate-300'
          }   h-min text-sm font-normal`"
          iconClass=" text-lg"
          @click="fillter = 'grid'"
          :isLoading="isSkeletionGrid"
          :isDisabled="isSkeletionGrid"
        /> -->

        <div class="flex justify-end">
          <Button icon="heroicons-outline:plus" text="Agregar Empleado"
            btnClass="btn-dark dark:bg-slate-800 h-min text-sm font-normal" iconClass="text-lg" @click="openProject"
            :isLoading="store.isLoading" />
        </div>
      </div>
    </div>

    <TableSkeltion :count="projects.length" v-if="isSkeletionList" />
    <Grid v-if="fillter === 'grid' && !isSkeletionGrid" />
    <List v-if="fillter === 'list' && !isSkeletionList" />

    <ProjectAddmodal />
    <updateModal />
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import TableSkeltion from "@/components/Skeleton/Table";
import { computed, ref, watch, onMounted } from "vue";
import ProjectAddmodal from "./AddProject";
import updateModal from "./EditProject";
import List from "./Project-list";
import Grid from "./Projects-grid";
import { useProjectStore } from "@/store/project";

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

<style lang="scss">
[data-headlessui-state="open"] {
  label {
    @apply ring-0 outline-none;
  }

  .card-title2 {
    @apply text-base text-slate-600 dark:text-slate-400 font-medium leading-5 mb-2;
  }
}

.btn-link {
  @apply text-slate-900 font-medium underline text-sm dark:text-white;

  &.white {
    @apply text-white;
  }
}

.card-text {
  @apply text-slate-600 dark:text-slate-300 text-sm font-normal leading-5;
}

.card {
  @apply h-min;
}
</style>
