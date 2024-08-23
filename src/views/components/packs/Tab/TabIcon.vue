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
      <TabPanel>
        <div class="text-slate-600 dark:text-slate-400 text-sm font-normal">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <InputGroup label="Nombre del Paquete" v-model="packStore.formData.nombre" placeholder="Pack 001" required />
                </div>
                <div>
                  <InputGroup label="Slug" v-model="packStore.formData.slug" placeholder="Slug" required />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 mb-4">
                <FromGroup label="Imagen de Perfil">
                  <input type="file" @change="handleFileChange('img_perfil', $event)" required />
                </FromGroup>
                <FromGroup label="Imagen de Portada">
                  <input type="file" @change="handleFileChange('img_portada', $event)" required />
                </FromGroup>
              </div>
              <div class="grid grid-cols-3 gap-4 mb-4">
                <Select label="Alimentación" v-model="packStore.formData.tiempo" placeholder="Seleccionar" :options="[
                  { value: 'Desayuno + Almuerzo y Cena', label: 'Desayuno + Almuerzo y Cena' },
                  { value: 'Almuerzo a la Carta en Tour', label: 'Almuerzo a la Carta en Tour' },
                  { value: 'Desayunos + Almuerzo a la Carta', label: 'Desayunos + Almuerzo a la Carta' },
                ]" required />
                <Select label="Hotel" v-model="packStore.formData.con_hotel" placeholder="Seleccionar" :options="[
                  { value: 'NO', label: 'NO' },
                  { value: 'SI', label: 'SI' },
                ]" required />
         <Select label="Tours" v-model="packStore.formData.con_turs" placeholder="Seleccionar" :options="[
  { value: '3 Tours', label: '3 Tours' },
  { value: '4 Tours', label: '4 Tours' },
  { value: '5 Tours', label: '5 Tours' },
  { value: '6 Tours', label: '6 Tours' },
  { value: '7 Tours', label: '7 Tours' },
  { value: '8 Tours', label: '8 Tours' },
]" required />

              </div>
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Select label="Pasaje Aéreos" v-model="packStore.formData.con_pasaje" placeholder="Seleccionar" :options="[
                    { value: 'NO', label: 'NO' },
                    { value: 'SI', label: 'SI' },
                  ]" required />
                </div>
                <div>
                  <InputGroup label="Precio" v-model="packStore.formData.precio" type="number" min="1" max="999999" step="0.01" required />
                </div>
              </div>

              <div class="flex justify-end mt-4">
                <Button @click="handleCreatePack" class="btn-success">
                  Registrar Pack
                </Button>
              </div>
            </div>
            <div>
              <div class="mb-4">
                <FromGroup label="Busqueda de Reservas" class="flex-1">
                  <VueSelect>
                    <vSelect :options="packStore.tourOptions" v-model="selectedTour" placeholder="Seleccionar" @search="handleSelectChange" />
                  </VueSelect>
                </FromGroup>
              </div>
              <div class="overflow-x-auto">
                <vue-good-table :columns="columns" :rows="recetOrderSueperGa" :sort-options="{ enabled: false }" class="custom-table">
                  <template v-slot:table-row="props">
                    <span v-if="props.column.field == 'num'" class="flex items-center justify-center p-2 center-content">
                      {{ props.row.id_tour }}
                    </span>
                    <span v-if="props.column.field == 'tours'" class="flex items-center justify-center p-2 center-content">
                      {{ props.row.tours }}
                    </span>
                    <span v-if="props.column.field == 'action'" class="flex items-center justify-center p-2 center-content">
                      <Tooltip placement="top" arrow theme="dark">
                        <template #button>
                          <div @click="handleDelete(props.row.id_tour)" class="action-btn bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors">
                            <Icon icon="heroicons:trash" class="w-8 h-8" />
                          </div>
                        </template>
                        <span>Eliminar</span>
                      </Tooltip>
                    </span>
                  </template>
                </vue-good-table>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div class="overflow-x-auto">
          <PacksTable :packs="packStore.packs" />
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import InputGroup from "@/components/InputGroup";
import Select from "@/components/Select";
import VueSelect from "@/components/Select/VueSelect";
import { usePackStore } from '@/store/usePackStore';
import PacksTable from "../PacksTable";
import { ref } from "vue";
import Tooltip from '@/components/Tooltip';
import FromGroup from '@/components/FromGroup';
import { onMounted, watch } from "vue";
import vSelect from "vue-select";

const columns = ref([
  { label: "#", field: "num" },
  { label: "Tours", field: "tours" },
  { label: "Acciones", field: "action" }
]);

const buttons = [
  { title: "Registro de datos", icon: "heroicons-outline:home" },
  { title: "Lista de Packs", icon: "heroicons-outline:user" },
];

const recetOrderSueperGa = ref([]);

const packStore = usePackStore();

function handleFileChange(field, event) {
  const file = event.target.files[0];
  if (file) {
    packStore.formData[field] = file;
  }
}

const selectedTour = ref(packStore.formData.tours);

watch(selectedTour, (newValue) => {
  const tours = Array.isArray(newValue) ? newValue : [newValue];

  const newTours = tours.map(tour => ({
    id_tour: tour.value,
    tours: tour.label
  }));

  newTours.forEach(newTour => {
    if (!recetOrderSueperGa.value.find(tour => tour.id_tour === newTour.id_tour)) {
      recetOrderSueperGa.value.push(newTour);
    }
  });

});

const handleSelectChange = (value) => {
  console.log('Selected tour value:', value);
};

const handleDelete = (id) => {
  recetOrderSueperGa.value = recetOrderSueperGa.value.filter(tour => tour.id_tour !== id);
  console.log('Updated tours:', recetOrderSueperGa.value);
};

async function handleCreatePack() {
  try {
    packStore.formData.tours = recetOrderSueperGa.value.map(tour => tour.id_tour);

    await packStore.createPack();
    recetOrderSueperGa.value = [];
  } catch (error) {
    console.error('Error creating pack:', error);
  }
}

onMounted(() => {
  packStore.fetchTours();
});
</script>