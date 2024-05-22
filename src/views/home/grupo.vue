<template>
  <div>
    <div class="flex justify-between flex-wrap items-center">
      <div class="flex items-center"> <!-- Contenedor principal con ml-auto -->
        <Breadcrumb /> <!-- Breadcrumb -->

      </div>

      <div class="flex items-center ml-auto"> <!-- Contenedor principal con ml-auto -->
        <Button icon="heroicons-outline:arrow-path"
            btnClass=" btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm mr-3"
            iconClass="text-lg" @click.prevent="fetchGroups" />

        <Button icon="heroicons-outline:plus" text="Agregar Grupo"
          btnClass="btn-dark dark:bg-slate-800 h-min text-sm font-normal ml-auto" iconClass="text-lg"
          link="grupo-add" />
      </div>
      <div class="flex justify-between items-center md:mb-6 mb-4 rtl:space-x-reverse w-full">
        <FromGroup name="d1" class="flex-2 mr-6 border border-white bg-gray-200 p-4 rounded-lg">
          <div class="flex items-center">
            <span class="mr-2 text-sm font-bold uppercase text-gray-600 dark:text-gray-800">Fecha</span>
            <span class="mr-2">
              <Icon icon="heroicons-outline:calendar" class="h-6 w-6 text-gray-400" />
            </span>
            <flat-pickr v-model="dateDefault" class="form-control font-bold border border-gray-300" id="d1"
              placeholder="yyyy, dd M" />
          </div>
        </FromGroup>


        <InputGroup type="text" prependIcon="heroicons-outline:search" v-model="searchValue"
          placeholder="Buscar por codígo o tour turístico" class="w-1/2" />
        <!-- Ajustar el ancho del segundo elemento -->
      </div>
    </div>
    <div class="lg:col-span-6 col-span-12"> <!-- Modifica el tamaño de la columna según tus necesidades -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


        <template v-if="filteredGroups.length === 0">
          <div class="text-center py-8">
            <p class="text-lg text-gray-600 dark:text-gray-400">No se han encontrado grupos creados.</p>
          </div>
        </template>
        <!-- Cambia el número de columnas para diferentes tamaños de pantalla -->
        <div v-for="(group, index) in filteredGroups" :key="index" class="mb-6">
          <Card :title="group.group_code" class="border border-gray-200 shadow-md">
            <template #header>
              <div class="flex items-center">
                <span class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal">
                  <Icon icon="heroicons-outline:calendar" class="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg" />
                  {{ group.group_date_departure }}
                </span>
              </div>
            </template>
            <ul class="list space-y-8">
              <li class="flex space-x-3 rtl:space-x-reverse">
                <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                  <Icon icon="heroicons:envelope" />
                </div>
                <div class="flex-1">
                  <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                    Descripción
                  </div>
                  <p class="text-base text-slate-600 dark:text-slate-50">{{ group.tour_description }}</p>
                </div>
              </li>
              <!-- end single list -->
              <li class="flex space-x-3 rtl:space-x-reverse">
                <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                  <Icon icon="heroicons:phone-arrow-up-right" />
                </div>
                <div class="flex-1">
                  <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                    OWNER
                  </div>
                  <p class="text-base text-slate-600 dark:text-slate-50">{{ group.transport_owner }}</p>
                </div>
              </li>
              <!-- end single list -->
              <li class="flex space-x-3 rtl:space-x-reverse">
                <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                  <Icon icon="heroicons:map" />
                </div>
                <div class="flex-1">
                  <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                    FULLNAME
                  </div>
                  <p class="text-base text-slate-600 dark:text-slate-50">{{ group.guide_fullname }}</p>
                  <span class="text-xs text-slate-500 dark:text-slate-300 ml-auto">{{ group.guide_cellphone }}</span>
                </div>
              </li>
              <li class="flex space-x-3 rtl:space-x-reverse">
                <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                  <Icon icon="heroicons:users" />
                </div>
                <div class="flex-1">
                  <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                    CAPACITY SELECTED
                  </div>
                  <p class="text-base text-slate-600 dark:text-slate-50">{{ group.group_capacity_selected }} pasajeros
                  </p>
                </div>
              </li>
              <!-- end single list -->
            </ul>
            <div class="mt-9 flex justify-center"> <!-- Contenedor de los botones, centrados horizontalmente -->
              <!-- Botones adicionales -->
              <Button icon="heroicons:eye" @click="verVistaPrevia(group.group_id)" btnClass="btn-info mr-3" />
              <Button icon="heroicons:arrow-path" @click="editarGrupo(group.group_id, group)"
                btnClass="btn-success mr-3" />
              <Button icon="heroicons:trash" @click="eliminarGrupo(group.group_id)" btnClass="btn-danger" />

            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import Card from "@/components/Card";

import CompanyTable from "./Analytics-Component/CompanyTable";
import {
  columnCharthome,
  columnCharthomeDark,
  shapeLine1,
  shapeLine2,
  shapeLine3,
  mostSales,
} from "./Analytics-Component/data";
import DropEvent from "./Analytics-Component/DropEvent";
import Map from "./Analytics-Component/Map";
import SelectMonth from "./Analytics-Component/SelectMonth";
import Breadcrumb from "@/components/Breadcrumbs";

// image import
import widget1 from "@/assets/images/all-img/widget-bg-1.png"
import activity1 from "@/assets/images/users/user-1.jpg"
import activity2 from "@/assets/images/users/user-2.jpg"
import activity3 from "@/assets/images/users/user-3.jpg"
import activity4 from "@/assets/images/users/user-4.jpg"
import activity5 from "@/assets/images/users/user-5.jpg"
import activity6 from "@/assets/images/users/user-6.jpg"
import Icon from '@/components/Icon';
import Button from "@/components/Button";
import { useAuth } from "../../store/auth";
import axios from "axios";
import { format } from 'date-fns-tz';
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import InputGroup from "@/components/InputGroup";
import FromGroup from "@/components/FromGroup";
import { useToast } from "vue-toastification";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación


function obtenerFechaActual() {
  const fecha = new Date();
  fecha.setHours(fecha.getHours() - 5); // Ajusta la hora para el huso horario de Perú (UTC-5)
  return fecha.toISOString().slice(0, 10);
}


export default {
  components: {
    VueTailwindDatePicker,
    InputGroup,
    Button,
    Icon,
    FromGroup,
    Card,
    CompanyTable,
    Map,
    DropEvent,
    SelectMonth,
    Breadcrumb,
  },
  data() {
    return {
      widget1,
      columnCharthome,
      columnCharthomeDark,
      groups: [],
      filteredProjects: [], // Proyectos filtrados
      searchValue: '', // Valor para buscar
      dateDefault: obtenerFechaActual(), // Inicializa con la fecha actual en formato 'yyyy-mm-dd' (hora local de Perú)

      mostSales,
      fillterMap: "usa",
      statistics: [
        {
          name: shapeLine1,
          title: "Totel revenue",
          count: "3,564",
          bg: "bg-[#E5F9FF] dark:bg-slate-900	",
        },
        {
          name: shapeLine2,
          title: "Products sold",
          count: "564",
          bg: "bg-[#FFEDE5] dark:bg-slate-900	",
        },
        {
          name: shapeLine3,
          title: "Growth",
          count: "+5.0%",
          bg: "bg-[#EAE5FF] dark:bg-slate-900	",
        },
      ],
      activity: [
        {
          id: 1,
          img: activity1,
        },
        {
          id: 2,
          img: activity2,
        },
        {
          id: 3,
          img: activity3,
        },
        {
          id: 4,
          img: activity4,
        },
        {
          id: 5,
          img: activity5,
        },
        {
          id: 6,
          img: activity6,
        },
        {
          id: 7,
          img: activity1,
        },
        {
          id: 8,
          img: activity4,
        },
        {
          id: 9,
          img: activity3,
        },
      ],
    };
  },

  computed: {
    columnCharthomeComputed() {
      return {
        series: [
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          },
          {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              endingShape: "rounded",
              columnWidth: "45%",
            },
          },
          legend: {
            show: true,
            position: "top",
            horizontalAlign: "right",
            fontSize: "12px",
            fontFamily: "Inter",
            offsetY: -30,
            markers: {
              width: 8,
              height: 8,
              offsetY: -1,
              offsetX: -5,
              radius: 12,
            },
            labels: {
              colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
            },
            itemMargin: {
              horizontal: 18,
              vertical: 0,
            },
          },
          title: {
            text: "Revenue Report",
            align: "left",

            offsetX: this.$store.themeSettingsStore.direction ? "0%" : 0,
            offsetY: 13,
            floating: false,
            style: {
              fontSize: "20px",
              fontWeight: "500",
              fontFamily: "Inter",
              color: this.$store.themeSettingsStore.isDark ? "#fff" : "#0f172a",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          yaxis: {
            opposite: this.$store.themeSettingsStore.direction ? true : false,
            labels: {
              style: {
                colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
                fontFamily: "Inter",
              },
            },
          },
          xaxis: {
            categories: [
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
            ],
            labels: {
              style: {
                colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
                fontFamily: "Inter",
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },

          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands";
              },
            },
          },
          colors: ["#4669FA", "#0CE7FA", "#FA916B"],
          grid: {
            show: true,
            borderColor: this.$store.themeSettingsStore.isDark ? "#334155" : "#E2E8F0",
            strokeDashArray: 10,
            position: "back",
          },
          responsive: [
            {
              breakpoint: 600,
              options: {
                legend: {
                  position: "bottom",
                  offsetY: 8,
                  horizontalAlign: "center",
                },
                plotOptions: {
                  bar: {
                    columnWidth: "80%",
                  },
                },
              },
            },
          ],
        },
      };
    },

    filteredGroups() {
      // Filtrar los grupos según la consulta de búsqueda
      return this.groups.filter(group =>
        group.group_code.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        group.tour_description.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
  },

  watch: {
    dateDefault(newValue, oldValue) {
      // Realiza acciones cuando cambia el valor de dateDefault


      axios.get(`${import.meta.env.VITE_API_URL}/groups/list?date_range=${newValue}`, headers)
        .then(response => {
          // Manejar la respuesta exitosa
          this.groups = response.data.data;
          // Verificar si this.groups tiene datos después de la asignación
          if (this.groups && this.groups.length > 0) {
            const toast = useToast();
            toast.success('Grupos recuperados exitosamente');
            // console.log(response);
          } else {
            const toast = useToast();
            toast.info('Para este día no hay grupos registrados');
          }
        })
        .catch(error => {
          // Manejar el error
          console.error('Error al obtener grupos:', error);
        });



      // Puedes llamar a métodos o realizar otras acciones aquí
    },

    searchValue(newValue) {
      // console.log(newValue);
      // Filtrar this.projects por group_code o tour_description que coincidan con searchValue


      // console.log(this.filteredProjects);
    },
  },

  methods: {
    fetchGroups() {
      axios.get(`${import.meta.env.VITE_API_URL}/groups/list?date_range=${this.dateDefault}`, headers)
        .then(response => {
          // Manejar la respuesta exitosa
          this.groups = response.data.data;

          if (this.groups && this.groups.length > 0) {
            const toast = useToast();
            toast.success('Grupos recuperados exitosamente');
          } else {
            const toast = useToast();
            toast.info('Para el día de actual no exiten registraros de grupos');
          }

          // console.log('Grupos recuperados exitosamente:', this.groups);
        })
        .catch(error => {
          // Manejar el error
          console.error('Error al obtener grupos:', error);
        });
    }
    ,
    formatDate(date) {
      const formattedDate = new Date(date);
      const options = { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'America/Lima' };
      return format(formattedDate, 'dd MMM yyyy', options);
    },
    editarGrupo(groupId, groupData) {



      this.$router.push({
        name: 'grupo-edit',
        params: {
          group_id: groupId
        },
        query: {
          group_data: JSON.stringify(groupData) // Convertir la data del grupo a cadena JSON
        }
      });
    },

    verVistaPrevia(group_id) {
      // Redirigir a la ruta de vista previa con el ID del grupo como parámetro
      this.$router.push({ name: 'grupo-preview', params: { group_id: group_id } });
    },
    eliminarGrupo(group_id) {
      // Encuentra el índice del grupo con el group_id proporcionado
      const index = this.groups.findIndex(group => group.id === group_id);

      // Verifica si se encontró el grupo
      if (index !== -1) {
        // Elimina el grupo del array this.groups

      } else {
        // Mostrar un cuadro de diálogo modal para confirmar la eliminación
        if (window.confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
          // El usuario ha confirmado la eliminación
          // Realizar la solicitud HTTP DELETE al backend para eliminar el elemento
          axios.delete(`${import.meta.env.VITE_API_URL}/groups/delete/${group_id}`, headers)
            .then(response => {
              // El elemento se ha eliminado correctamente en el backend
              // console.log("El elemento con ID:", group_id, "se ha eliminado correctamente en el backend");

              this.groups.splice(index, 1); // Elimina 1 elemento en la posición 'index'

              // Una vez eliminado el elemento, mostrar un toast de éxito
              const toast = useToast();
              toast.success('Elemento eliminado con éxito', { position: 'top-right' });
            })
            .catch(error => {
              // Ocurrió un error al intentar eliminar el elemento en el backend
              console.error("Error al eliminar el elemento:", error);

              // Mostrar un toast de error
              const toast = useToast();
              toast.error('Error al eliminar el elemento', { position: 'top-right' });
            });
        } else {
          // El usuario ha cancelado la eliminación
          // console.log("El usuario ha cancelado la eliminación del elemento con ID:", group_id);
        }


        // Actualiza filteredGroups después de eliminar el grupo
        this.filteredGroups = this.filteredGroups.filter(group => group.id !== group_id);
      }

      // Llamar a alguna función de actualización de datos si es necesario
    }




  },

  mounted() {
    this.fetchGroups();

  },
};
</script>
<style lang=""></style>
