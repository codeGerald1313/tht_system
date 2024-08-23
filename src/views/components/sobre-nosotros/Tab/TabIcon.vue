<template>
  <TabGroup>
    <TabList class="lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse">
      <Tab v-slot="{ selected }" as="template" v-for="(item, i) in buttons" :key="i">
        <button :class="[
          selected
            ? 'text-primary-500 before:w-full'
            : 'text-slate-500 before:w-0 dark:text-slate-300',
        ]"
          class="inline-flex items-center text-sm font-medium mb-7 capitalize bg-white dark:bg-slate-800 ring-0 focus:ring-0 focus:outline-none px-2 transition duration-150 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-primary-500 before:-translate-x-1/2">
          <span class="text-base relative top-[1px] ltr:mr-1 rtl:ml-1">
            <Icon :icon="item.icon" />
          </span>{{ item.title }}
        </button>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <div class="flex flex-wrap">
          <!-- Sección de inputs -->
          <div class="w-full md:w-1/2 p-4">
            <div class="space-y-4">
              <FromGroup label="Nombre Empresa">
                <Textinput
                  type="text"
                  placeholder="Ingresar nombre de empresa"
                  v-model="nosotros.nom_empresa" 
                />
              </FromGroup>
              <FromGroup label="Nota">
                <Textarea
                  type="text"
                  placeholder="Ingrese la nota"
                  v-model="nosotros.nota" 
                />
              </FromGroup>
              <FromGroup label="Misión">
                <Textarea
                  type="text"
                  placeholder="Ingrese la misión"
                  v-model="nosotros.mision"
                />
              </FromGroup>
              <FromGroup label="Visión">
                <Textarea
                  type="text"
                  placeholder="Ingrese la visión"
                  v-model="nosotros.vision" 
                />
              </FromGroup>
              <FromGroup label="Link Video">
                <Textinput
                  type="text"
                  placeholder="Ingrese el link del video"
                  v-model="nosotros.video"
                />
              </FromGroup>
              <div>
                <Button
                  type="button"
                  text="Actualizar"
                  btnClass="btn-success"
                  @click="updateRecord"
                />
              </div>
            </div>
          </div>

          <!-- Sección de imágenes -->
          <div class="w-full md:w-1/2 p-4">
            <div class="overflow-x-auto">
              <Etable />
            </div>
          </div>
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useNosotrosStore } from '@/store/nosotros';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Textinput from "@/components/Textinput";
import Textarea from "@/components/Textarea";
import Etable from "../Etable";
import FromGroup from "@/components/FromGroup";

const store = useNosotrosStore();
const nosotros = computed(() => store.nosotros); // Cambiado de `form` a `nosotros`

const fetchData = async () => {
  await store.getRecord();
};

onMounted(async () => {
  await fetchData();
});

const updateRecord = () => {
  store.updateRecord();
};

const buttons = [
  {
    title: "Nuevo Sector",
    icon: "heroicons-outline:information-circle",
  },
];
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
