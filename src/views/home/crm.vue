<template>
  <div>
    <!--<Breadcrumb />-->
    <div class="card-auto space-y-5">
      <div class="grid grid-cols-12 gap-5">
        <div class="lg:col-span-12 col-span-12 space-y-5">
          <Card>
            <div class="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
              <div v-for="(item, i) in statisticsLegal" :key="i" :class="item.bg"
                class="rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1] flex flex-col justify-center items-center">

                <span class="block mb-8 text-lg font-bold text-slate-900 dark:text-white">{{ item.title }}</span>
                <span class="block mb- text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                  {{ item.count }}
                </span>
                <div class="flex-none text-1xl">
                  <span @click="redirectToLink(item.link)" class="cursor-pointer font-semibold underline text-blue-500">
                    Ir al módulo
                  </span>
                </div>
                <!-- Contenedor del icono -->
                <div class="flex items-center justify-center mt-auto">
                  <!-- Utiliza mt-auto para empujar el icono hacia abajo -->
                  <div :style="{ fontSize: item.iconSize || '4rem' }">
                    <!-- Ajusta el tamaño del icono según sea necesario -->
                    <Icon :icon="item.icon" class="text-slate-500 dark:text-white" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

        </div>

      </div>
      <div class="grid grid-cols-12 gap-5">
        <div class="lg:col-span-6 col-span-12 space-y-5">
          <Card title="Tours Túristicos más populares">
            <apexchart type="bar" height="350" :options="this.$store.themeSettingsStore.isDark
              ? basicBarDark.chartOptions
              : basicBar.chartOptions
              " :series="basicBar.series"></apexchart>
          </Card>
        </div>

        <div class="xl:col-span-6 col-span-12">
          <Card title="Porcentaje de Ingreso Vs Porcentaje De Egreso">
            <apexchart type="radialBar" height="360" :options="this.$store.themeSettingsStore.isDark
              ? MultipleRadialbarsDark.chartOptions
              : MultipleRadialbars.chartOptions
              " :series="MultipleRadialbars.series" />
          </Card>
        </div>
      </div>

      <div class="lg:col-span-8 col-span-12">
        <div class="space-y-5 bank-table">

          <Card title="Ingresos & Egresos por Día">

            <div class="legend-ring4">
              <apexchart type="area" height="340" :options="this.$store.themeSettingsStore.isDark
                ? basicArea2Dark.chartOptions
                : basicArea2.chartOptions
                " :series="basicArea2.series" />
            </div>
          </Card>
        </div>
      </div>


      <!--<div class="grid grid-cols-12 gap-5">


        <div class="lg:col-span-12 col-span-12 space-y-5">
          <Card title="Reservas por número de pasajeros">
            <apexchart type="bubble" height="350" :options="this.$store.themeSettingsStore.isDark
                ? bubboleChartDark.chartOptions
                : bubboleChart.chartOptions
                " :series="bubboleChart.series"></apexchart>
          </Card>
        </div>
      </div> -->

      <div class="grid grid-cols-12 gap-5">


        <div class="lg:col-span-12 col-span-12 space-y-5">
          <Card title="Ingresos & Egresos por Metodo de pago ">
            <!-- <template #header>
              <div>
                <Listbox v-model="selectedMonth">
                  <div class="relative z-[22]">
                    <ListboxButton
                      class="relative w-full flex justify-between cursor-pointer rounded-md bg-white items-center min-w-[110px] form-control py-2 px-3 dark:text-slate-300">
                      <span class="text-sm">{{ selectedMonth.name }}</span>
                      <span>
                        <Icon icon="heroicons-outline:chevron-down" />
                      </span>
                    </ListboxButton>

                    <Transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                      leave-to-class="opacity-0">
                      <ListboxOptions
                        class="absolute max-h-60 w-full overflow-auto border border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded bg-white mt-1">
                        <ListboxOption v-slot="{ active }" v-for="item in months" :key="item.name" :value="item"
                          as="template">
                          <li :class="[
                active
                  ? 'bg-secondary-500 text-white dark:bg-slate-600 dark:bg-opacity-60'
                  : 'text-slate-600 dark:text-slate-300',
                'w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 last:border-none text-sm last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex space-x-2 items-center rtl:space-x-reverse',
              ]">
                            {{ item.name }}
                          </li>
                        </ListboxOption>
                      </ListboxOptions>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </template> -->
            <apexchart type="bar" height="350" :options="this.$store.themeSettingsStore.isDark
              ? columnChartDark.chartOptions
              : columnChart.chartOptions
              " :series="columnChart.series"></apexchart>
          </Card>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-5">
        <div class="lg:col-span-12 col-span-12 space-y-5">
          <Card title="Ingresos & Egresos por Concepto">
            <template #header>
              <div>
                <Select :options="moneysOptions" v-model="moneysSelected" class="state-select"
                  placeholder="Seleccione" />
              </div>
            </template>
            <div>

              <apexchart type="bar" height="350" :options="this.$store.themeSettingsStore.isDark
                ? stackChartDark.chartOptions
                : stackChart.chartOptions
                " :series="stackChart.series"></apexchart>

            </div>



          </Card>
        </div>


      </div>

      <div class="grid grid-cols-12 gap-5">

        <div class="xl:col-span-12 col-span-12 ">
          <Card title="Mejores Vendedores">
            <template #header>
              <DropEvent />
            </template>
            <div>
              <div class="grid md:grid-cols-3 grid-cols-1 gap-5">
                <div v-for="(item, i) in customers" :key="i"
                  class="relative z-[1] text-center p-4 rounded before:w-full before:h-[calc(100%-60px)] before:absolute before:left-0 before:top-[60px] before:rounded before:z-[-1] before:bg-opacity-[0.1]"
                  :class="item.bg">
                  <div class="h-[70px] w-[70px] rounded-full mx-auto mb-4 relative"
                    :class="item.active ? 'ring-2 ring-[#FFC155]' : ''">
                    <span class="crown absolute -top-[24px] left-1/2 -translate-x-1/2" v-if="item.active"><img
                        src="@/assets/images/icon/crown.svg" alt="" /></span>
                    <img :src="item.img" alt="" class="w-full h-full rounded-full" />
                    <span
                      class="h-[27px] w-[27px] absolute right-0 bottom-0 rounded-full bg-[#FFC155] border border-white flex flex-col items-center justify-center text-white text-xs font-medium">{{
                        item.number }}</span>
                  </div>
                  <h4 class="text-sm text-slate-600 font-semibold mb-4">
                    {{ item.title }}
                  </h4>
                  <div
                    class="inline-block bg-slate-900 text-white px-[10px] py-[6px] text-xs font-medium rounded-full min-w-[60px]">
                    S/. {{ item.total_amount }}
                  </div>
                  <div class="flex justify-between text-sm font-normal dark:text-slate-300 mb-3 mt-4">
                    <span>Progress</span>
                    <span class="font-normal"
                      :class="{ 'text-yellow-500': isRecordReached(item), 'text-blue-500': !isRecordReached(item) }">
                      {{ getProgressMessage(item) }}
                    </span>
                  </div>
                  <div style="height: 20px; background-color: #E2E8F0; border-radius: 4px; overflow: hidden;">
                    <div
                      :style="{ width: getProgressPercentage(item) + '%', backgroundColor: getProgressBarColor(item), height: '100%' }">
                      <span class="text-white text-xs px-1">{{ getProgressPercentage(item) }}%</span>
                      <span class="text-white text-xs px-1">Total de ventas: ${{ item.value }}</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </Card>
        </div>




      </div>


      <div class="grid grid-cols-12 gap-5">

        <div class="xl:col-span-6 col-span-12 ">

          <Card title="Cantidad de Reservas Por Hotel">

            <div class="legend-ring3">
              <apexchart type="donut" height="335" :options="this.$store.themeSettingsStore.isDark
                ? pieChartDark.chartOptions
                : pieChart.chartOptions
                " :series="pieChart.series" />
            </div>
          </Card>



        </div>

        <div class="xl:col-span-6 col-span-12 ">

          <Card title="Reservas de Hotel por tipo de Dormitorio">

            <div class="legend-ring3">
              <apexchart type="pie" height="335" :options="this.$store.themeSettingsStore.isDark
                ? pieChartDarkBedrooms.chartOptions
                : pieChartBedrooms.chartOptions
                " :series="pieChartBedrooms.series" />
            </div>
          </Card>



        </div>
      </div>



    </div>
  </div>
</template>
<script>
import Breadcrumb from "./Analytics-Component/Breadcrumbs";
import Card from "@/components/Card";
import Button from "@/components/Button";
import window from "@/mixins/window";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import FromGroup from "@/components/FromGroup";
import Icon from "@/components/Icon";
import CrmTable from "./Analytics-Component/CrmTable";

import DropEvent from "./Analytics-Component/DropEvent";
import SelectMonth from "./Analytics-Component/SelectMonth";

import {
  pieChart,
  pieChartDark,
  pieChartDarkBedrooms,
  pieChartBedrooms,
  stacked,
  stackedDark,
  columnChart,
  columnChartDark,
  basicBar,
  basicBarDark,
  bubboleChart,
  bubboleChartDark,
  donutChart,
  donutChartDark,
  stackChart,
  stackChartDark,
  MultipleRadialbars,
  MultipleRadialbarsDark,

  basicArea,
  basicAreaDark,

  basicArea2,
  basicArea2Dark,
} from "../grafics/grafics.js";

// Import Images
import shade1 from "@/assets/images/all-img/shade-1.png"
import shade2 from "@/assets/images/all-img/shade-2.png"
import shade3 from "@/assets/images/all-img/shade-3.png"
import shade4 from "@/assets/images/all-img/shade-4.png"
import ProgressBar from "@/components/ProgressBar";
// Image Import
import customer1 from "@/assets/images/all-img/cus-1.png"
import customer2 from "@/assets/images/all-img/cus-2.png"
import customer3 from "@/assets/images/all-img/cus-3.png"
import customer4 from "@/assets/images/users/user-1.jpg"
import customer5 from "@/assets/images/users/user-2.jpg"
import { useAuth } from "../../store/auth";
import axios from 'axios';
import { useThemeSettingsStore } from "../../store/themeSettings";
import Select from '@/components/Select';

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

export default {
  mixins: [window],
  components: {
    Card,
    Icon,
    CrmTable,
    Select,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    DropEvent,
    ProgressBar,
    FromGroup,
    SelectMonth,
    Breadcrumb,
  },
  data() {

    return {
      stacked,
      basicArea,
      basicAreaDark,
      columnChart,
      columnChartDark,
      MultipleRadialbars,
      MultipleRadialbarsDark,
      stackedDark,
      donutChart,

      moneysSelected: 1,
      stackChart,
      stackChartDark,
      bubboleChart,
      bubboleChartDark,
      basicArea2,
      basicArea2Dark,
      donutChartDark,
      rangeDate: null,
      pieChart,
      pieChartDark,
      pieChartBedrooms,
      pieChartDarkBedrooms,
      basicBar,
      months: [{ name: "Ingresos" }, { name: "Egresos" }],
      selectedMonth: '',
      statisticsLegal: [],

      basicBarDark,
      customers: [
        {
          title: "Nicole Kidman",
          img: customer1,
          value: 70,
          bg: "before:bg-info-500",
          barColor: "bg-info-500",
          number: 2,
        },
        {
          title: "Monica Bellucci",
          img: customer2,
          value: 80,
          bg: "before:bg-warning-500",
          barColor: "bg-warning-500",
          active: true,
          number: 1,
        },
        {
          title: "Pamela Anderson",
          img: customer3,
          value: 65,
          bg: "before:bg-success-500",
          barColor: "bg-success-500",
          number: 3,
        },
      ],
      customers2: [
        {
          title: "Dianne Russell",
          img: customer4,
          value: 60,
          bg: "before:bg-info-500",
          barColor: "bg-info-500",
          number: 4,
        },
        {
          title: "Robert De Niro",
          img: customer5,
          value: 50,
          bg: "before:bg-warning-500",
          barColor: "bg-warning-500",
          number: 5,
        },
      ],
      moneysOptions: [
        { value: 1, label: "Ingreso" },
        { value: 2, label: "Egreso" },
        // Agregar más opciones según sea necesario
      ],
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



      Campaigns: [
        {
          name: "Channel",
          value: "roi",
        },
        {
          name: "Email",
          value: "40%",
        },
        {
          name: "Website",
          value: "28%",
        },
        {
          name: "Facebook",
          value: "34%",
        },
        {
          name: "Offline",
          value: "17%",
        },
      ],
    };
  },
  created() {
    this.selectedMonth = this.months[0];
  },
  mounted() {
    this.fetchStatistics();
    this.basicBar;
    this.fetchBestSellingCustomers();

    // console.log(basicBar);
  },

  methods: {
    fetchStatistics() {
      axios.get(`${import.meta.env.VITE_API_URL}/reports/list-stadistics`, headers)
        .then(response => {
          this.statisticsLegal = response.data.statistics;
          // console.log(this.statisticsLegal);

          // Captura de la imagen del primer registro
          this.statisticsLegal[0].img = shade1;
          this.statisticsLegal[1].img = shade2;
          this.statisticsLegal[2].img = shade3;
          this.statisticsLegal[3].img = shade4;

        })
        .catch(error => {
          console.error('Error fetching statistics:', error);
        });
    },

    async fetchBestSellingCustomers() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/mejores-vendedores`, headers);

        if (response && response.data && response.data.customers) {
          // Actualizar la lista de customers con los datos obtenidos del backend
          this.customers = response.data.customers;

          // console.log(this.customers);
        } else {
          console.error('Datos incompletos en la respuesta del backend.');
        }
      } catch (error) {
        console.error('Error al obtener datos desde el backend:', error);
        // Manejar el error, mostrar un mensaje al usuario, etc.
      }
    },
    getProgressPercentage(item) {
      const value = parseFloat(item.value);
      const maxValue = 20; // Supongamos que el máximo es 20 para representar el 100%
      return ((value / maxValue) * 100).toFixed(2);
    },
    getProgressBarColor(item) {
      const progress = parseFloat(this.getProgressPercentage(item));
      return progress >= 100 ? 'yellow' : 'blue';
    },
    isRecordReached(item) {
      const progress = parseFloat(this.getProgressPercentage(item));
      return progress >= 100;
    },
    getProgressMessage(item) {
      const progress = parseFloat(this.getProgressPercentage(item));
      return progress >= 100 ? '¡Récord de ventas alcanzado! Se limpia el récord de ventas por hoy.' : 'El usuario todavía está en proceso de romper el récord.';
    },

    redirectToLink(link) {
      // Obtén acceso al router desde $router
      this.$router.push(link); // Esto navegará a la ruta especificada por 'link'
    }
  },

  watch: {
    moneysSelected(newValue, oldValue) {
      // Lógica para actualizar las opciones y series del gráfico según moneysSelected

      // console.log(newValue);
      // Puedes agregar más condiciones según sea necesario para otras opciones
    },
  },

};
</script>
<style lang="">


</style>
