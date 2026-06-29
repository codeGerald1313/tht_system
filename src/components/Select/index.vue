<template>
  <div
    class="fromGroup relative"
    :class="`${error ? 'has-error' : ''}  ${horizontal ? 'flex' : ''}  ${
      validate ? 'is-valid' : ''
    } `"
  >
    <label
      v-if="label"
      :class="`${classLabel} inline-block input-label `"
      :for="name"
    >
      {{ label }}</label
    >
    <div class="relative w-full">
      
      <div v-if="searchable && !$slots.default">
        <vSelect
          :name="name"
          :id="name"
          :disabled="disabled"
          :multiple="multiple"
          :options="options"
          :placeholder="placeholder"
          :get-option-label="(option) => option.label || option"
          :reduce="(option) => option.value !== undefined ? option.value : option"
          :model-value="modelValue"
          @update:modelValue="onVueSelectChange"
        >
        </vSelect>
      </div>

      <div v-else-if="!$slots.default && options">
        <select
          :name="name"
          :class="`${classInput} input-control block w-full focus:outline-none min-h-[40px] `"
          :value="modelValue"
          @input="onNativeSelectChange"
          :error="error"
          :id="name"
          :readonly="isReadonly"
          :disabled="disabled"
          :validate="validate"
          :formatter="formatter"
          :size="size"
          :multiple="multiple"
        >
          <option value="" disabled selected>{{ placeholder }}</option>
          <option
            v-for="(item, index) in options"
            :value="item.value"
            :key="index"
          >
            {{ item.label }}
          </option>
        </select>
      </div>

      <slot v-if="$slots.default"></slot>

      <div class="flex text-xl absolute right-[30px] top-1/2 -translate-y-1/2 pointer-events-none z-10">
        <span v-if="error" class="text-danger-500">
          <Icon icon="heroicons-outline:information-circle" />
        </span>
        <span v-if="validate" class="text-success-500">
          <Icon icon="bi:check-lg" />
        </span>
      </div>
    </div>

    <span v-if="error" class="mt-2" :class="msgTooltip ? 'inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded' : 'text-danger-500 block text-sm'">{{ error }}</span>
    <span v-if="validate" class="mt-2" :class="msgTooltip ? 'inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded' : 'text-success-500 block text-sm'">{{ validate }}</span>
    <span class="block text-secondary-500 font-light leading-4 text-xs mt-2" v-if="description">{{ description }}</span>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Icon from "@/components/Icon";

export default {
  components: {
    vSelect,
    Icon,
  },
  props: {
    // NUEVO PROP: Por defecto es false para mantener compatibilidad absoluta
    searchable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Select Option",
    },
    label: {
      type: String,
    },
    classLabel: {
      type: String,
      default: " ",
    },
    classInput: {
      type: String,
      default: "classinput",
    },
    name: {
      type: String,
    },
    modelValue: {
      default: "",
    },
    error: {
      type: String,
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    validate: {
      type: String,
    },
    msgTooltip: {
      type: Boolean,
      default: false,
    },
    formatter: {
      type: Function,
      default: (value) => value,
    },
    description: {
      type: String,
    },
    size: {
      type: String,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // Handler para cuando se usa el Select Nativo original
    onNativeSelectChange(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    // Handler mágico para cuando se activa vue-select (Simula el evento por si acaso)
    onVueSelectChange(val) {
      const finalValue = val !== null && val !== undefined ? val : "";
      this.$emit('update:modelValue', finalValue);
      this.$emit('input', { target: { value: finalValue } });
    }
  }
};
</script>

<style lang="scss">
// Mantenemos tus estilos scss personalizados de vue-select intactos
.fromGroup {
  .vs__dropdown-toggle {
    @apply bg-transparent dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-white min-h-[40px] text-slate-900 text-sm;
  }
  .v-select {
    @apply dark:text-slate-300;
  }
  &.has-error {
    .vs__dropdown-toggle {
      @apply border-danger-500;
    }
  }
  .vs__dropdown-option {
    @apply dark:text-slate-100;
  }
  .vs__dropdown-option--highlight {
    @apply bg-slate-900 dark:bg-slate-600 dark:bg-opacity-20 py-2 text-sm;
  }
  .vs__dropdown-menu {
    li { @apply capitalize; }
    @apply shadow-dropdown bg-white dark:bg-slate-800 text-sm border-[0px] dark:border-[1px] dark:border-slate-700;
  }
  .vs__search::placeholder { @apply text-secondary-500; }
  .vs__actions svg { @apply fill-secondary-500 w-[15px] h-[15px] mt-[6px] scale-[.8]; }
  
  select {
    @apply appearance-none bg-[url('https://api.iconify.design/akar-icons/chevron-down.svg')] bg-no-repeat bg-right;
    background-position-x: 98%;
  }
  [dir="rtl"] select { background-position-x: 2%; }
  option { @apply capitalize; }
}
</style>