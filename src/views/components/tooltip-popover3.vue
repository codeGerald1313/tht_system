<template>

  <div>
    <TabGroup>
      <div class="grid gap-5 grid-cols-12">
        <div class="xl:col-span-2 lg:col-span-4 col-span-12 card-auto-height">
          <Card>
            <TabList class="flex flex-col space-y-1 text-start items-start">
              <Tab v-for="(item, i) in faqmenus" :key="i" v-slot="{ selected }" as="template">
                <button type="button"
                  class="focus:ring-0 focus:outline-none space-x-2 text-sm flex items-center w-full transition duration-150 px-3 py-4 rounded-[6px] rtl:space-x-reverse"
                  :class="selected
                    ? 'bg-slate-100 dark:bg-slate-900 dark:text-white'
                    : 'bg-white dark:bg-slate-800 dark:text-slate-300'
                    ">
                  <Icon icon="heroicons:chevron-double-right-solid" class="text-lg" :class="selected ? ' opacity-100' : 'opacity-50 dark:opacity-100'
                    " />
                  <span> {{ item.title }}</span>
                </button>
              </Tab>
            </TabList>
          </Card>
        </div>
        <div class="xl:col-span-10 lg:col-span-8 col-span-12">
          <TabPanels>
            <TabPanel>
              <Accordion :items="items" parentClass="space-y-5">
                <template v-slot:customContentFirstItem>
                  <div class="my-custom-design">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <!-- Utiliza el v-for para iterar sobre los elementos en 'agencies' -->
                      <div class="lg:col-span-1" v-for="(item, index) in agencies" :key="index">
                        <div class="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
                          :style="{ backgroundImage: 'url(' + widgetBg2 + ')', height: '200px' }">
                          <div class="flex flex-col justify-center items-center h-full">
                            <!-- Flexbox para centrar contenido -->
                            <div>
                              <h4 class="text-2xl font-medium text-white mb-2 text-center">
                                <span class="block">{{ getShortName(item.fullname) }}</span>
                              </h4>
                            </div>
                            <div>
                              <Button icon="heroicons-outline:receipt-refund" text="Recibir"
                                @click="handleViewDetails(item.id, item.fullname)"
                                btnClass="btn-light bg-white btn-sm" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>

                <template v-slot:customContentSecondItem>
                  <div class="my-custom-design">
                    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
                      <div class="lg:col-span-4 flex justify-start">
                        <Card noborder class="w-full">
                          <div class="md:flex pb-6 items-center ">
                            <h6 class="flex-1 md:mb-0 mb-3">Recibidos</h6>
                            <div class="md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse"
                              :class="window.width < 768 ? 'space-x-rb' : ''">
                              <InputGroup v-model="searchTerm" placeholder="Search" type="text"
                                prependIcon="heroicons-outline:search" merged />
                              <div>
                                <VueTailwindDatePicker v-model="dateValue" input-classes="form-control" />
                              </div>
                              <Button icon="heroicons-outline:arrows-up-down"
                                btnClass=" btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm "
                                iconClass="text-lg" @click="reloadCrmTable" />
                      
                            </div>
                          </div>
                          <div class="-mx-6">
                            <vue-good-table :columns="columns" styleClass=" vgt-table  centered " :rows="advancedTable"
                              :sort-options="{
                                enabled: false,
                              }" :pagination-options="{
                                enabled: true,
                                perPage: perpage,
                              }" :search-options="{
                                enabled: true,
                                externalQuery: searchTerm,
                              }">
                              <template v-slot:table-row="props">

                                <span v-if="props.column.field === 'code'" class="font-medium "
                                  @click="openModal(props.row.id)" style="display: flex; flex-direction: column;">
                                  <span v-if="props.row.is_checkout !== 1" class="text-success-600 font-bold">{{
                                    props.row.code }}</span>
                                  <span v-else class="text-red-500 font-bold">{{ props.row.code }}(Anulado)</span>
                                  <!-- Color verde oscuro y fosforescente -->
                                  <span v-if="props.row.is_checkout !== 1" style="margin-top: 5px;"
                                    class="font-bold">Reg: {{
                                      props.row.formatted_created_at }}</span>
                                  <span v-else style="margin-top: 5px;" class="text-red-500 font-bold">Reg: {{
                                    props.row.formatted_created_at }}</span>
                                </span>



                                <span v-if="props.column.field == 'nroPax'" class="text-slate-500 dark:text-slate-400">
                                  {{ props.row.nro_pax }}
                                  <br>
                                </span>

                                <span v-if="props.column.field == 'clientRes'"
                                  class="text-slate-500 dark:text-slate-400"
                                  :style="{ color: props.row.is_checkout === 1 ? 'red' : 'inherit', display: 'flex', flexDirection: 'column' }">
                                  <span>{{ props.row.client.fullname }}</span>
                                  <span class="font-bold">{{ props.row.client.document }}</span>
                                </span>


                                <span v-if="props.column.field == 'client_id'"
                                  class="text-slate-500 dark:text-slate-400"
                                  :style="{ color: props.row.is_checkout === 1 ? 'red' : 'inherit', display: 'flex', flexDirection: 'column' }">
                                  <span>{{ props.row.agency.fullname }}</span>
                                  <span class="font-bold">{{ props.row.agency.document }}</span>
                                </span>


                                <template v-if="props.column.field === 'amount'">
                                  <div v-for="(transfer, index) in props.row.program_transfer" :key="index"
                                    style="display: flex; flex-direction: column; margin-bottom: 10px;">
                                    <span>{{ transfer.description }} ({{ transfer.pivot.quantity }} pax) {{
                                      transfer.pivot.date_assigned
                                    }}</span>
                                  </div>
                                </template>


                                <!-- Campo de estado -->
                                <span v-if="props.column.field == 'estadito'"
                                  class="text-slate-500 dark:text-slate-400">
                                  <!-- Mostrar solo si is_checkout no es igual a 1 -->
                                  <span v-if="props.row.is_checkout !== 1 && props.row.pending_tours > 0"
                                    class="bg-blue-200 py-1 px-2 rounded-full text-blue-600 font-semibold inline-block"
                                    style="width: 160px;">
                                    Por Realizar {{ props.row.pending_tours }} Tours
                                  </span>
                                  <span v-else-if="props.row.is_checkout !== 1"
                                    class="flex items-center text-yellow-600 bg-yellow-100 py-1 px-2 rounded-full"
                                    style="width: 120px;">
                                    <svg class="h-4 w-4 mr-2 fill-current" viewBox="0 0 20 20">
                                      <path fill-rule="evenodd"
                                        d="M19.707 3.293a1 1 0 00-1.414 0l-10 10-4-4a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l11-11a1 1 0 000-1.414z"
                                        clip-rule="evenodd" />
                                    </svg>
                                    <span class="flex items-center font-semibold">
                                      Completados
                                    </span>
                                  </span>
                                  <!-- Mostrar "Anulados" cuando is_checkout es igual a 1 -->
                                  <span v-else
                                    class="bg-red-200 py-1 px-2 rounded-full text-red-600 font-semibold inline-block"
                                    style="width: 120px;">
                                    Anulados
                                  </span>
                                </span>
                                <span v-if="props.column.field == 'sobreTours'"
                                  class="text-slate-500 dark:text-slate-400">
                                  <span v-if="props.row.is_checkin === 1"
                                    class="flex items-center bg-green-200 py-1 px-2 rounded-full">
                                    <span class="text-green-600 font-semibold">Confirmado</span>
                                  </span>
                                  <span v-else-if="props.row.is_checkout === 1" class="text-red-600 font-semibold">
                                    Reserva Anulada
                                  </span>
                                  <span v-else-if="props.row.is_checkin === 0" class="text-red-600 font-semibold">
                                    Pendiente
                                  </span>
                                  <span v-else class="text-red-600 font-semibold">
                                    Reserva Anulada
                                  </span>
                                </span>


                                <div v-if="props.column.field == 'action' && props.row.is_checkout !== 1"
                                  class="action-btn text-end mr-3">
                                  <Dropdown classMenuItems=" w-[140px]">
                                    <div class="text-xl">
                                      <Icon icon="heroicons-outline:dots-vertical" />
                                    </div>
                                    <template v-slot:menus>
                                      <MenuItem v-for="(item, i) in actions" :key="i">
                                      <div @click="item.doit(props.row)"
                                        :class="`
                
                  ${item.name === 'delete'
                                            ? 'bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white'
                                            : 'hover:bg-slate-900 hover:text-white'
                                          }
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center `">
                                        <span class="text-base">
                                          <Icon :icon="item.icon" />
                                        </span>
                                        <span>{{ item.name }}</span>
                                      </div>
                                      </MenuItem>
                                    </template>
                                  </Dropdown>
                                </div>
                              </template>
                              <template #pagination-bottom="props">
                                <div class="py-4 px-3">
                                  <Pagination :total="advancedTable.length" :current="current" :per-page="perpage"
                                    :pageRange="pageRange" @page-changed="current = $event"
                                    :pageChanged="props.pageChanged" :perPageChanged="props.perPageChanged" enableSearch
                                    enableSelect :options="options">
                                    >
                                  </Pagination>
                                </div>
                              </template>
                            </vue-good-table>
                          </div>
                        </Card>

                      </div>
                    </div>

                    <!-- Aquí va tu diseño personalizado -->
                  </div>
                </template>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion :items="items2" parentClass="space-y-5">
                <template v-slot:customContentFirstItem>
                  <div class="my-custom-design">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <!-- Utiliza el v-for para iterar sobre los elementos en 'agencies' -->
                      <div class="lg:col-span-1" v-for="(item, index) in agencies" :key="index">
                        <div class="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
                          :style="{ backgroundImage: 'url(' + widgetBg2 + ')', height: '200px' }">
                          <div class="flex flex-col justify-center items-center h-full">
                            <!-- Flexbox para centrar contenido -->
                            <div>
                              <h4 class="text-2xl font-medium text-white mb-2 text-center">
                                <span class="block">{{ getShortName(item.fullname) }}</span>
                              </h4>
                            </div>
                            <div>
                              <Button icon="heroicons-outline:play-pause" text="Pasar"
                                @click="handleViewDetailsTraspase(item.id, item.fullname)"
                                btnClass="btn-light bg-white btn-sm" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>

                <template v-slot:customContentSecondItem>
                  <div class="my-custom-design">
                    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
                      <div class="lg:col-span-4 flex justify-start">
                        <Traspasos class="w-full"></Traspasos>


                      </div>
                    </div>

                    <!-- Aquí va tu diseño personalizado -->
                  </div>
                </template>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion :items="items3" parentClass="space-y-5" />
            </TabPanel>
          </TabPanels>
        </div>
      </div>
    </TabGroup>



  </div>
</template>
<script>
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import InputGroup from "@/components/InputGroup";
import Pagination from "@/components/Pagination";
import { MenuItem } from "@headlessui/vue";
import { advancedTable } from "../../constant/basic-tablle-data";
import window from "@/mixins/window";
import Modal from '@/components/Modal';
import axios from "axios";
import { useAuth } from "../../store/auth";
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import { useToast } from "vue-toastification";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import Accordion from "@/components/Accordion";
import widgetBg2 from "@/assets/images/all-img/widget-bg-2.png";

import Traspasos from "./tooltip-popover2";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación



export default {
  mixins: [window],
  components: {
    Pagination,
    TabGroup,
    Accordion,
    widgetBg2,
    Traspasos,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    InputGroup,
    Dropdown,
    Icon,
    VueTailwindDatePicker,
    Card,
    MenuItem,
    Button,
    Modal
  },

  data() {

    const currentDate = new Date();

    // Obtener el primer día del mes actual
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const formattedFirstDay = firstDayOfMonth.toISOString().split('T')[0] + " 00:00:00";

    // Obtener el último día del mes actual
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const formattedLastDay = lastDayOfMonth.toISOString().split('T')[0] + " 23:59:59";


    return {
      advancedTable: [], // Inicializa la tabla vacía
      current: 1,
      perpage: 10,
      widgetBg2,
      show: false,
      startDateVariable: "",
      endDateVariable: "",
      dateValue: {
        startDate: formattedFirstDay,
        endDate: formattedLastDay
      }, pageRange: 5,
      searchTerm: "",
      actions: [

        {
          name: "delete",
          icon: "heroicons-outline:trash",
          doit: (data) => {
            // Realiza la solicitud HTTP POST al backend para eliminar el booking
            axios.post(`${import.meta.env.VITE_API_URL}/bookings/anular`, {
              booking_id: data.id  // Incluye el ID del booking en el cuerpo de la solicitud
            }, {
              ...headers
            })
              .then((response) => {
                // Extrae el mensaje de éxito de la respuesta del backend
                const successMessage = response.data.message;

                // Si la solicitud se completa con éxito, muestra un toast de éxito
                const toast = useToast();
                toast.success(successMessage, {
                  timeout: 1500, // Cierre automático después de 1.5 segundos
                });

                // Aquí podrías actualizar la lista de empleados en tu frontend si lo deseas
                // Por ejemplo, puedes llamar a this.listarEmpleados() para obtener la lista actualizada
                this.listarEmpleados();
              })
              .catch((error) => {
                console.error('Error al eliminar empleado:', error);
              });
          }
        },


      ],
      options: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "5",
          label: "5",
        },
      ],
      columns: [
        {
          label: "Código",
          field: "code",
        },

        {
          label: "Agencia a Cargo		",
          field: "client_id",
        },

        {
          label: "Cliente Responsable	",
          field: "clientRes",
        },
        {
          label: "N° pax	",
          field: "nroPax",
        },
        {
          label: "Sobre tours	",
          field: "sobreTours",
        },
        {
          label: "Estado",
          field: "estadito",
        },
        {
          label: "Action",
          field: "action",
        },
      ],
      agencies: [],

      faqmenus: [
        {
          title: "Recibidos",
        },
        {
          title: "Traspasos",
        },

      ],
      items: [
        {
          title: "Escoger Agencia",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
        {
          title: "Tabla de Cuadre & Exports",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
      ],
      items2: [
        {
          title: "Escoger Agencia",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
        {
          title: "Tabla de Cuadre & Exports",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
      ],
      items3: [
        {
          title: "Escoger Agencia",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
        {
          title: "Tabla de Cuadre & Exports",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
      ],
    };
  },

  methods: {
    async reloadCrmTable() {
      axios.get(`${import.meta.env.VITE_API_URL}/bookings/list-recivied?start_date=${this.dateValue.startDate}&end_date=${this.dateValue.endDate}`, headers)
        .then(response => {
          // console.log(response.data);

        
          const toast = useToast();
          toast.success(response.data.message);

          this.advancedTable = response.data.data;

          // console.log(response);
        })
        .catch(error => {
          console.error(error);
          if (error.response && error.response.status === 404) {
            // Si el error es 404 (No encontrado), mostrar un toast con el mensaje del backend
            const toast = useToast();
            toast.info('No se encontraron reservas recibidas dentro del rango de fechas proporcionado.');
          } else {
            // Si es otro tipo de error, mostrar un toast genérico de error
            const toast = useToast();
            toast.error('Ocurrió un error al obtener las reservas.');
          }
          // Vaciar la tabla avanzada
          this.advancedTable = [];
        });
    },
    async fetchData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/agencies/list`, headers);
        this.agencies = response.data.data;

        // console.log(this.agencies);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    },
    openModal(id) {
      this.$router.push(`/app/reserve-preview/${id}`);
    }
    ,

    handleViewDetails(id, fullname) {
      // Navega a la ruta 'recibido-add' con los parámetros 'id' y 'fullname'
      this.$router.push({ name: 'recibido-add', params: { id, fullname } });
    },

    handleViewDetailsTraspase(id, fullname) {
      // Navega a la ruta 'recibido-add' con los parámetros 'id' y 'fullname'
      this.$router.push({ name: 'traspaso-add', params: { id, fullname } });
    },
    getShortName(fullname) {
      // Divide la cadena fullname en palabras
      const words = fullname.split(' ');

      // Toma las primeras dos palabras y únelas de nuevo
      const shortName = words.slice(0, 2).join(' ');

      return shortName;
    },

  },



  watch: {
    dateValue(newValue, oldValue) {
      if (!newValue.startDate || !newValue.endDate) {
        // Si están vacíos, establecer la tabla avanzada en vacío
        this.advancedTable = [];
      } else {
        const startDateOnly = newValue.startDate.split(' ')[0];
        const endDateOnly = newValue.endDate.split(' ')[0];

        axios.get(`${import.meta.env.VITE_API_URL}/bookings/list-recivied?start_date=${startDateOnly}&end_date=${endDateOnly}`, headers)
          .then(response => {
            const toast = useToast();

            // console.log(response.data);
            toast.success(response.data.message);

            // Si la respuesta es exitosa, establecer la tabla avanzada con los datos recibidos
            this.advancedTable = response.data.data;
          })
          .catch(error => {
            console.error(error);
            if (error.response && error.response.status === 404) {
              // Si el error es 404 (No encontrado), mostrar un toast con el mensaje del backend
              const toast = useToast();
              toast.info('No se encontraron reservas recibidas dentro del rango de fechas proporcionado.');
            } else {
              // Si es otro tipo de error, mostrar un toast genérico de error
              const toast = useToast();
              toast.error('Ocurrió un error al obtener las reservas.');
            }
            // Vaciar la tabla avanzada
            this.advancedTable = [];
          });
      }
    }

  }

  ,
  mounted() {
    axios.get(`${import.meta.env.VITE_API_URL}/bookings/list-recivied?start_date=${this.dateValue.startDate}&end_date=${this.dateValue.endDate}`, headers)
      .then(response => {
        // console.log(response.data);

        const toast = useToast();

        toast.success(response.data.message);

        this.advancedTable = response.data.data;
      })
      .catch(error => {
        console.error(error);
        if (error.response && error.response.status === 404) {
          // Si el error es 404 (No encontrado), mostrar un toast con el mensaje del backend
          const toast = useToast();
          toast.info('No se encontraron reservas recibidas dentro del rango de fechas proporcionado.');
        } else {
          // Si es otro tipo de error, mostrar un toast genérico de error
          const toast = useToast();
          toast.error('Ocurrió un error al obtener las reservas.');
        }
        // Vaciar la tabla avanzada
        this.advancedTable = [];
      });

    this.fetchData();



  },

};
</script>
<style lang="scss">
.card-height {
  .card {
    @apply h-[248px] overflow-auto;
  }
}

.card-auto-height {
  .card {
    @apply h-auto;
  }
}
</style>
