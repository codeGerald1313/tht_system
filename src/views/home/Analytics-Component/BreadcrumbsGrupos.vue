<template>
  <div class="flex justify-between flex-wrap items-center">
    <div class="flex items-center"> <!-- Contenedor principal con ml-auto -->
      <Breadcrumb /> <!-- Breadcrumb -->

    </div>

    <div class="flex items-center ml-auto"> <!-- Contenedor principal con ml-auto -->
      <Button
        icon="heroicons-outline:plus"
        text="Agregar Grupo"
        btnClass="btn-dark dark:bg-slate-800 h-min text-sm font-normal ml-auto" 
        iconClass="text-lg"
        link="grupo-add"
      />
    </div>
    <div class="flex justify-between items-center md:mb-6 mb-4 rtl:space-x-reverse w-full"> <!-- Ajustar el ancho del contenedor para que abarque toda la pantalla -->
      <VueTailwindDatePicker
        v-model="dateValue2"
        as-single
        v-slot="{ clear }"
        class="mr-2 flex-1" 
      >
        <div
          class="date-btn inline-flex btn btn-md whitespace-nowrap space-x-2 rtl:space-x-reverse cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900"
          @click="clear"
        >
          <span class="text-lg">
            <Icon icon="heroicons-outline:filter" />
          </span>
          <span>Select date</span>
        </div>
      </VueTailwindDatePicker>
        <InputGroup type="text" prependIcon="heroicons-outline:search" class="input-group flex-1 " /> <!-- Ajustar el ancho del segundo elemento -->
    </div>
  </div>
</template>

<script setup>
import InputGroup from "@/components/InputGroup";
import Breadcrumb from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import Button from "@/components/Button";
import { ref } from "vue";

const dateValue = ref("");
const dateValue2 = ref("");
const searchTerm = ref("");

const handleSearchInput = (event) => {
  searchTerm.value = event.target.value;
};
</script>

<style lang="scss">
[data-headlessui-state="open"] {
  label {
    @apply ring-0 outline-none;
  }

  .date-btn {
    @apply dark:bg-slate-700 bg-slate-900 text-white;
  }
};
</style>
