<template>
  <div :class="parentClass">
    <div
      class="accordion shadow-base dark:shadow-none rounded-md"
      v-for="(item, i) in items"
      :key="i"
    >
      <div
       :class="cn(
          'flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4',
          activeIndex === i ? 'bg-slate-50 dark:bg-slate-700 dark:bg-opacity-60 rounded-t-md' : 'bg-white dark:bg-slate-700 rounded-md'
        )"
        @click="activeIndex = activeIndex === i ? null : i"
      >
        {{ item.title }}

        <span
         :class="cn(
            'text-slate-900 dark:text-white text-[22px] transition-all duration-300 h-5',
            activeIndex === i ? 'rotate-180 transform' : ''
          )"
          ><Icon icon="heroicons-outline:chevron-down"
        /></span>
      </div>
      <Transition
        enter-active-class="submenu_enter-active"
        leave-active-class="submenu_leave-active"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div
        v-if="i === activeIndex"
          :class="cn(
            'text-sm text-slate-600 font-normal bg-white dark:bg-slate-900 dark:text-slate-300 rounded-b-md',
            i === activeIndex ? 'dark:border dark:border-slate-700 dark:border-t-0' : ''
          )"
        >
        <div class="px-8 py-4 w-full">
            <!-- Mostrar contenido personalizado para ítems específicos -->
            <template v-if="i === 0">
              <slot name="customContentFirstItem"></slot>
            </template>
            <template v-else-if="i === 1">
              <slot name="customContentSecondItem"></slot>
            </template>
            <!-- Mostrar contenido normal para los demás ítems -->
            <template v-else>
              {{ item.content }}
            </template>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";

const activeIndex = ref(0);
const props = defineProps({
  parentClass: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const beforeEnter = (element) => {
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = "0px";
    }
    element.style.display = null;
  });
};
const enter = (element) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = `${element.scrollHeight}px`;
    });
  });
};
const afterEnter = (element) => {
  element.style.height = null;
};
const beforeLeave = (element) => {
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = `${element.offsetHeight}px`;
    }
  });
};
const leave = (element) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = "0px";
    });
  });
};
const afterLeave = (element) => {
  element.style.height = null;
};
</script>
