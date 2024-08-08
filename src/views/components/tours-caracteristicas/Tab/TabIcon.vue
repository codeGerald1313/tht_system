<template>
  <TabGroup>
    <TabList class="lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse">
      <Tab v-slot="{ selected }" as="template" v-for="(item, i) in buttons" :key="i">
        <button :class="[
          selected
            ? 'text-primary-500 before:w-full'
            : 'text-slate-500 before:w-0 dark:text-slate-300',
        ]"
          class="inline-flex items-start text-sm font-medium mb-7 capitalize bg-white dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-2 transition duration-150 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-primary-500 before:-translate-x-1/2">
          <span class="text-base relative top-[1px] ltr:mr-1 rtl:ml-1">
            <Icon :icon="item.icon" />
          </span>{{ item.title }}
        </button>
      </Tab>
    </TabList>

    <TabPanels>
      <!-- TabPanel para "Registro de datos" -->
      <TabPanel>
        <div class="text-slate-600 dark:text-slate-400 text-sm font-normal">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Primera columna -->
            <div>
              <!-- Primera fila: Nombre del Paquete y Slug -->
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <InputGroup label="Nombre del Paquete" id="nombre_pack" name="nombre_pack" placeholder="Pack 001"
                    required />
                </div>
                <div>
                  <InputGroup label="Slug" id="slug" name="slug" placeholder="Slug" required />
                </div>
              </div>

              <!-- Tercera fila: Imágenes -->
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <VueSelect label="Img Perfil" id="imgPerfil" name="imgPerfil" required />
                </div>
                <div>
                  <VueSelect label="Img Portada" id="imgPortada" name="imgPortada" required />
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4 mb-4">
                <Select label="Alimentación" id="tiempo" placeholder="Seleccionar" name="tiempo" :options="[
                  { value: 'Desayuno + Almuerzo y Cena', label: 'Desayuno + Almuerzo y Cena' },
                  { value: 'Almuerzo a la Carta en Tour', label: 'Almuerzo a la Carta en Tour' },
                  { value: 'Desayunos + Almuerzo a la Carta', label: 'Desayunos + Almuerzo a la Carta' },
                ]" required />
                <Select label="Hotel" id="con_hotal" name="con_hotal" placeholder="Seleccionar" :options="[
                  { value: 'NO', label: 'NO' },
                  { value: 'SI', label: 'SI' },
                ]" required />
                <Select label="Tours" id="tours" name="tours" placeholder="Seleccionar" :options="[
                  { value: '3 Tours', label: '3 Tours' },
                  { value: '4 Tours', label: '4 Tours' },
                  { value: '5 Tours', label: '5 Tours' },
                  { value: '6 Tours', label: '6 Tours' },
                  { value: '7 Tours', label: '7 Tours' },
                  { value: '8 Tours', label: '8 Tours' },
                ]" required />
              </div>
              <!-- Quinta fila: Pasaje Aéreos y Precio -->
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Select label="Pasaje Aéreos" id="pasaje" placeholder="Seleccionar" name="pasaje" :options="[
                    { value: 'NO', label: 'NO' },
                    { value: 'SI', label: 'SI' },
                  ]" required />
                </div>
                <div>
                  <InputGroup label="Precio" id="precio" name="precio" type="number" min="1" max="99" value="S/0.00"
                    required />
                </div>
              </div>


              <div class="flex justify-end mt-4">
                <Button @click="handleRegisterPack" class="btn-success">
                  Registrar Pack
                </Button>
              </div>
            </div>

            <!-- Segunda columna -->
            <div>

              <div class="mb-4">
                <VueSelect label="Tours" id="selelectTours" name="selelectTours" :options="[
                  { value: '', label: 'Seleccionar' },
                ]" required />
              </div>
              <div class="overflow-x-auto">
                <Etable />
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      <!-- TabPanel para "Lista de Packs" -->
      <TabPanel>
        <div class="overflow-x-auto">
          <PacksTable />
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Card from "@/components/Card";
import InputGroup from "@/components/InputGroup";
import Select from "@/components/Select";
import VueSelect from "@/components/Select/VueSelect";
import { ref } from 'vue';
import PacksTable from "../PacksTable";
import Etable from "../Etable";

const buttons = [
  { title: "Registro de datos", icon: "heroicons-outline:home" },
  { title: "Lista de Packs", icon: "heroicons-outline:user" },
];

const handleRegisterPack = () => {
  // Lógica para registrar el pack
};
</script>
