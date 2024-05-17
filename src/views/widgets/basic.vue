<template>
  <div class="flex justify-between flex-wrap items-center">

    <div class="flex items-center"> <!-- Contenedor principal con ml-auto -->
      <Breadcrumb /> <!-- Breadcrumb -->

    </div>

    <div class="flex sm:space-x-4 space-x-2 sm:justify-end items-center md:mb-6 mb-4 rtl:space-x-reverse">
      <span
        class="input-group-prepend  bg-gray-200 bg-opacity-25 px-2 py-1 rounded-lg font-bold text-slate-600 dark:text-slate-300">
        Caja seleccionadadsssssssssssssssssssssssssssssssssssssssssssssssss
      </span>

      <Select :options="boxesOptions" v-model="selected" class="w-48" :placeholder="''" />
      <!-- Ajusta el tamaño deseado aquí -->
    </div>

    <div class="space-y-5 card-auto">

      <div class="grid grid-cols-12 gap-5">
        <div class="lg:col-span-4 col-span-12 space-y-5">
          <Card title="My card">
            <template #header>
              <Button icon="heroicons-outline:plus" text="Add card" btnClass="btn-dark btn-sm "  />
            </template>
       


            <div class="flex justify-center mt-6">
              <Button icon="heroicons-outline:plus" text="Add card" btnClass="btn-dark btn-sm mr-5" />
              <Button icon="heroicons-outline:plus" text="Add card" btnClass="btn-dark btn-sm " />
            </div>
          </Card>

        </div>
        <div class="lg:col-span-8 col-span-12">
          <Card title="My card">
            <template #header>
              <Button icon="heroicons-outline:plus" text="Add card" btnClass="btn-dark btn-sm " />
            </template>
            <div class="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
              <div v-for="(item, i) in statistics" :key="i" :class="item.bg"
                class="rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1]">
                <div class="overlay absolute left-0 top-0 w-full h-full z-[-1]">
                  <img :src="item.img" alt="" draggable="false" class="w-full h-full object-contain" />
                </div>
                <span class="block mb-6 text-sm text-slate-900 dark:text-white font-medium">{{ item.title }}</span>
                <span class="block mb- text-2xl text-slate-900 dark:text-white font-medium mb-14">{{ item.count
                  }}</span>
                <div class="flex space-x-2 rtl:space-x-reverse">
                  <div class="flex-none text-xl" :class="item.text">
                    <Icon :icon="item.icon" />
                  </div>
                  <div class="flex-1 text-sm">
                    <span class="block mb-[2px]" :class="item.percentClass">{{
        item.percent
      }}</span>
                    <span class="block mb-1 text-slate-600 dark:text-slate-300">From last week</span>
                  </div>
                </div>
              </div>
            </div>

          </Card>
        </div>
      </div>

    </div>
  </div>

  <CityTouristicAddModal />


</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Textinput from "@/components/Textinput";

import VueTailwindDatePicker from "vue-tailwind-datepicker";
import Breadcrumb from "@/components/Breadcrumbs";

import shade1 from "@/assets/images/all-img/shade-1.png"
import shade2 from "@/assets/images/all-img/shade-2.png"
import shade3 from "@/assets/images/all-img/shade-3.png"
import shade4 from "@/assets/images/all-img/shade-4.png"
import Icon from '@/components/Icon';
import Select from '@/components/Select';

export default {
  components: {
    Card,
    Icon,
    Breadcrumb,
    VueTailwindDatePicker,
    Select,
    Button,
    Textinput,
  },
  data() {
    return {
      selected: 1, // Establece el valor inicial aquí
      activeIndex: null,

      statistics: [
        {
          title: "Sales",
          count: "354",
          bg: "bg-warning-500",
          text: "text-primary-500",
          percent: "25.67% ",
          icon: "heroicons:arrow-trending-up",
          img: shade1,
          percentClass: "text-primary-500",
        },
        {
          title: "Revenue ",
          count: "$86,954",

          bg: "bg-info-500",
          text: "text-primary-500",
          percent: "8.67%",
          icon: "heroicons:arrow-trending-up",
          img: shade2,
          percentClass: "text-primary-500",
        },
        {
          title: "Conversion",
          count: "15%",
          bg: "bg-primary-500",
          text: "text-danger-500",
          percent: "1.67%  ",
          icon: "heroicons:arrow-trending-down",
          img: shade3,
          percentClass: "text-danger-500",
        },
        {
          title: "Leads",
          count: "654",
          bg: "bg-success-500",
          text: "text-primary-500",
          percent: "11.67%  ",
          icon: "heroicons:arrow-trending-up",
          img: shade4,
          percentClass: "text-primary-500",
        },
      ],

      boxesOptions: [
        { value: 1, label: "Caja Principal" },
        // Agregar más opciones según sea necesario
      ],

    };
  },

};
</script>
<style lang="scss">
.bank-table {
  tr {
    &:last-child {
      td {
        border-bottom: 0 !important;
      }
    }
  }
}

.dark {
  .bank-table table.vgt-table {
    border-bottom: none;
  }
}
</style>
