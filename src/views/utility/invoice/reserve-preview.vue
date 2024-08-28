<template>
  <div>
    <div class="flex justify-between items-center flex-wrap mb-4">
      <div>
        <button @click="retroceder"
          class="invocie-btn inline-flex btn btn-lg whitespace-nowrap space-x-1 cursor-pointer bg-slate-700 dark:bg-white-700 btn-md h-min text-sm font-normal text-white rtl:space-x-reverse">
          <span class="text-xl">
            <Icon icon="heroicons:arrow-left" />
          </span>
          <span>Retroceder</span>
        </button>
      </div>
      <div class="flex justify-end items-center flex-wrap space-x-2">
        <button type="button" @click="print"
          class="invocie-btn inline-flex btn btn-lg whitespace-nowrap space-x-1 cursor-pointer bg-slate-700  dark:bg-white-700 btn-md h-min text-sm font-normal text-white rtl:space-x-reverse">
          <span class="text-xl">
            <Icon icon="heroicons:printer" />
          </span>
          <span>Imprimir</span>
        </button>
        <!--
        <button
            class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse">
            <span class="text-lg ">
                <Icon icon="heroicons-solid:check" />
            </span>
            <span>Check-Out</span>
        </button> -->
        <button
          class="invocie-btn inline-flex btn btn-lg whitespace-nowrap space-x-1 cursor-pointer bg-slate-700  dark:bg-white-700 btn-md h-min text-sm font-normal text-white rtl:space-x-reverse"
          @click="openModalComisionar()">
          <span class="text-xl">
            <Icon icon="heroicons-solid:cash" />
          </span>
          <span>Comisionar</span>
        </button>
        <button v-if="this.deuda !== 0 && this.deuda !== '0.00'"
          class="invocie-btn inline-flex btn btn-lg whitespace-nowrap space-x-1 cursor-pointer bg-slate-700  dark:bg-white-700 btn-md h-min text-sm font-normal text-white rtl:space-x-reverse"
          @click="openModalAmortizar()">
          <span class="text-xl">
            <Icon icon="heroicons-solid:banknotes" />
          </span>
          <span>Amortizar({{ this.deuda }})</span>
        </button>
        <button @click="editar"
          class="invocie-btn inline-flex btn btn-lg whitespace-nowrap space-x-1 cursor-pointer bg-slate-700  dark:bg-white-700 btn-md h-min text-sm font-normal text-white rtl:space-x-reverse">
          <span class="text-xl">
            <Icon icon="heroicons:pencil-square" />
          </span>
          <span>Editar</span>
        </button>
      </div>
    </div>


    <Card bodyClass="p-0" noborder>


      <div class="max-w-[980px] mx-auto shadow-base dark:shadow-none my-8 rounded-md overflow-x-auto mt-5">
        <div class="lg:col-span-4 col-span-12">
          <Card title="Detalle Reserva" class="border">
            <div class="grid grid-cols-3 gap-8">
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <!-- Cambia 'heroicons:envelope' por el nombre del icono que deseas usar para representar el estado -->
                      <Icon icon="heroicons:check-circle" />
                    </div>

                    <!-- Contenedor del texto del estado -->
                    <div class="flex-1">
                      <!-- Etiqueta de estado -->
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Estado
                      </div>

                      <!-- Texto del estado con color y estilo -->
                      <div class="text-base text-green-700 dark:text-green-300 font-semibold">
                        Confirmado
                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:newspaper" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Código reserva
                      </div>
                      <a href="tel:0189749676767" class="text-base text-slate-600 dark:text-slate-50 font-bold">
                        {{ booking.code }}
                      </a>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>

              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:calendar" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Fecha de llegada
                      </div>
                      <div class="text-base text-slate-600 dark:text-slate-50">
                        {{ booking.dateArrivalFormatted }}
                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:user" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Responsable
                      </div>
                      <div class="text-base text-slate-600 dark:text-slate-50">
                        {{ booking.fullName }}
                        <br>
                        <span class="font-bold">DNI : {{ booking.clientDocument }}</span>



                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:user-group" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        N° PAX
                      </div>
                      <!-- Condición para mostrar el contenido dinámicamente -->
                      <div class="text-base text-slate-600 dark:text-slate-50">
                        {{ booking.nro_pax }} (personas)
                        <!-- Mostrar referencia solo si booking.is_reference_pax está definido y es igual a 1 -->
                        <template v-if="booking.is_reference_pax !== undefined && booking.is_reference_pax === 1">
                          REF: Niños ({{ booking.nro_pax_childs }}), Adultos ({{ booking.nro_pax_adults }}), Ancianos
                          ({{ booking.nro_pax_olds }})
                        </template>
                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:phone" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Teléfonos
                      </div>
                      <div class="text-base text-slate-600 dark:text-slate-50">
                        {{ booking.clientCellphone }}
                        - {{ booking.clientTelephone }}

                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>

              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:map-pin" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Referencia llegada
                      </div>
                      <div class="text-base text-slate-600 dark:text-slate-50">
                        <!-- Utilizar estructuras condicionales para mostrar el texto según las condiciones -->
                        <template v-if="booking.typearrival !== undefined">
                          {{ booking.typearrival }}
                          <template v-if="booking.arrival_place !== null">
                            ({{ booking.arrival_place }})
                          </template>
                        </template>
                        <template v-else>
                          Sin asignar
                        </template>
                      </div>

                    </div>

                  </li>
                  <!-- end single list -->
                </ul>
              </div>
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:map" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Referencia comprobante
                      </div>
                      <div class="text-base text-slate-600 dark:text-slate-50">
                        {{ booking.reference_voucher }}
                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
              <div>
                <ul class="list space-y-8">
                  <li class="flex space-x-3 rtl:space-x-reverse">
                    <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:link" />
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        Referencia Para Recojo Del Turista
                      </div>
                      <div class="text-base text-slate-600 dark:text-slate-50">
                        {{ booking.reference_location }}
                      </div>
                    </div>
                  </li>
                  <!-- end single list -->
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>



      <div class="md:flex pb-6 items-center">
        <h6 class="flex-1 md:mb-0 mb-3 ml-2">Datos de tours</h6>
        <div class="md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse">

        </div>
      </div>
      <vue-good-table :columns="columnsTraspase" styleClass=" vgt-table  table-head   v-middle striped  listview"
        :rows="this.projects" :pagination-options="{
          enabled: false,

        }" :sort-options="{
          enabled: false,
        }">



        <template v-slot:table-row="props">
          <span v-if="props.column.field === 'tour'">
            <template v-if="props.row.is_open === 1">
              <span :style="{ color: props.row.description ? 'red' : '' }"
                :class="{ 'text-underline-red': props.row.description }" class="text-slate-500 dark:text-slate-400">{{
                  props.row.description }} (Estado abierto)</span>
            </template>
            <template v-else-if="props.row.is_transfer === 1">
              <span style="color: red;" class="text-underline-red">{{ props.row.description }} Traspasado</span>
            </template>
            <template v-else>
              <span class="text-slate-500 dark:text-slate-400">{{ props.row.description }}</span>
            </template>
          </span>

          <!-- Columna "pasajerosdetail" -->
          <span v-if="props.column.field === 'pasajerosdetail'">
            <template v-if="props.row.is_open === 1">
              <span :style="{ color: props.row.quantity ? 'red' : '' }"
                :class="{ 'text-underline-red': props.row.quantity }"
                class="text-slate-500 dark:text-slate-400 text-underline-red">{{ props.row.quantity }}</span>
            </template>
            <template v-else>
              <span class="text-slate-500 dark:text-slate-400">{{ props.row.quantity }}</span>
            </template>
          </span>

          <span v-if="props.column.field == 'vehiculo'"
            :class="{ 'text-yellow-500 font-bold': props.row.vehicle_tour === 2, 'text-blue-500 font-bold': props.row.vehicle_tour === 1 }">
            {{ props.row.vehicle_tour === 2 ? 'Privado' : 'Compartido' }}
          </span>


          <!-- Columna "turno" -->
          <span v-if="props.column.field === 'turno'" style="font-weight: bold;">
            <template v-if="props.row.is_open === 1">
              <span :style="{ color: props.row.shift_tour ? 'red' : '' }"
                :class="{ 'text-underline-red': props.row.shift_tour }">
                {{ props.row.shift_tour === 1 ? 'Full Day' : props.row.shift_tour === 2 ? 'Mañana' :
                  props.row.shift_tour === 3 ? 'Tarde' : 'Noche' }}
              </span>
            </template>
            <template v-else>
              {{ props.row.shift_tour === 1 ? 'Full Day' : props.row.shift_tour === 2 ? 'Mañana' : props.row.shift_tour
                === 3 ? 'Tarde' : 'Noche' }}
            </template>
          </span>



          <span v-if="props.column.field === 'fasignada'">
            <span>
              <template v-if="props.row.is_transfer === 1">
                <span
                  class="bg-green-400 border border-green-400 px-2 py-1 font-bold rounded text-white dark:text-slate-800">Confirmado</span>
              </template>
              <template v-else-if="props.row.date_assigned === null">
                <span style="color: red; font-weight: bold; text-decoration: underline;">Sin fecha</span>
              </template>
              <template v-else>
                <span class="text-slate-500 dark:text-slate-400">{{ props.row.date_assigned }}</span>
              </template>
            </span>
          </span>



          <div class="flex items-center"> <!-- Flexbox para centrar verticalmente -->
            <span v-if="props.column.field == 'estado'" class="text-center !important">
              <!-- Aplicar estilos condicionales -->
              <span v-if="props.row.group_assigned === null || props.row.group_assigned === 0"
                class="bg-yellow-400 border border-yellow-400 px-2 py-1 font-bold rounded text-white dark:text-slate-800 ">
                Pendiente
              </span>
              <!-- Si `group_assigned` no es null o 0, mostrar "Asignado" -->
              <div v-else
                class="bg-purple-400 border border-purple-400 px-2 py-1 font-bold rounded text-white dark:text-slate-800">
                Asignado
                <Button @click="openModal(props.row.group_assigned.id)" btnClass="btn-dark btn-sm block mx-auto">{{
                  props.row.group_assigned.group_code }}</Button>
                <!-- Agregado mx-auto para centrar el botón horizontalmente -->
              </div>
            </span>
          </div>
          <!-- Agregar el botón solo si `group_assigned` no es null o 0 -->





          <span v-if="props.column.field == 'obs'">
            {{ props.row.observation }}

          </span>



        </template>

      </vue-good-table>


      <div class="md:flex pb-6 items-center mt-12">
        <h6 class="flex-1 md:mb-0 mb-3  ml-2">Reservas de Alojamiento</h6>
        <div class="md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse">

          <Button icon="heroicons-outline:plus-sm" text="Agregar Reserva" btnClass=" btn-dark font-normal btn-sm mr-5"
            iconClass="text-lg" @click.prevent="openModalReservaHotel" />
        </div>
      </div>

      <vue-good-table :columns="columnsReservasAlojamiento"
        styleClass="vgt-table table-head bordered v-middle striped listview" :rows="reservasInfo"
        :sort-options="{ enabled: false }">
        <template v-slot:table-row="props">
          <!-- Codigo -->
          <span v-if="props.column.field == 'codigo'" class="text-blue-900 font-bold">
            {{ props.row.hotelsbooking.code }}
          </span>

          <!-- Nombre del Hotel -->
          <span v-if="props.column.field == 'nombreHotel'"
            class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
            <span class="font-bold">{{ props.row.hotel?.tradename }}</span>
            ({{ props.row.hotel?.citie_turistic?.description }})
            <br>
            Cell: {{ props.row.hotel?.cellphone }}
          </span>

          <!-- Detalle del Hotel -->
          <span v-if="props.column.field == 'detallehotel'"
            class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
            {{ `${props.row.typebedroom.description} (${props.row.quantity} hab. x ${props.row.nights} noches)` }}

          </span>

          <!-- Acciones -->
          <template v-if="props.column.field === 'action'">
            <div class="action-btn text-end mr-3">
              <div class="text-xl">
                <Icon icon="heroicons-outline:trash" class="text-danger-500" @click="confirmDelete(props.row.id)" />
              </div>
            </div>
          </template>
        </template>
      </vue-good-table>






      <div class="md:flex pb-6 items-center mt-12">
        <h6 class="flex-1 md:mb-0 mb-3 ml-2">Resumen Total S/</h6>

      </div>

      <vue-good-table :columns="columnsResumenTotal"
        styleClass="vgt-table table-head bordered v-middle striped listview" :rows="this.resumenTotal"
        :pagination-options="{ enabled: false }" :sort-options="{ enabled: false }">
        <template v-slot:table-row="props">
          <span v-if="props.column.field == 'totaltours'">
            <span>S/ {{ props.row.totaltours }} </span>
          </span>
          <span v-if="props.column.field == 'totalhotel'">
            <span>S/ {{ props.row.totalhotel }}</span>
          </span>
          <span v-if="props.column.field == 'totalpagar'">
            <span>S/ {{ props.row.totalpagar }}</span>
          </span>
          <span v-if="props.column.field == 'pagado'" class="block w-full">
            <span>S/ {{ props.row.pagado }}</span>
          </span>
          <span v-if="props.column.field == 'deuda'">
            <span>S/ {{ props.row.deuda }}</span>
          </span>
          <span v-if="props.column.field == 'facturado'">
            <span>{{ props.row.facturado }}</span>
          </span>

          <!-- Nuevo campo para el botón de edición usando heroicons -->
          <span v-if="props.column.field == 'opciones'">
            <button @click="editRow(props.row)" class="btn btn-icon">
              <Icon icon="heroicons-outline:pencil-alt" class="h-7 w-7 text-gray-500" />
            </button>
          </span>
        </template>
      </vue-good-table>



      <div class="md:flex pb-6 items-center mt-12">
        <h6 class="flex-1 md:mb-0 mb-3 ml-2">Comprobantes y cobros realizados</h6>

      </div>

      <vue-good-table :columns="columnsComprobantes" styleClass=" vgt-table  table-head   v-middle striped  listview"
        :rows="this.movimientosInfo" :pagination-options="{
          enabled: false,
        }" :sort-options="{
          enabled: false,
        }">
        <template v-slot:table-row="props">
          <span v-if="props.column.field == 'tipocomprobante'">
            <span>{{ props.row.voucher.description }}</span>
          </span>

          <span v-if="props.column.field == 'ncomprobante'">
            <span>{{ props.row.nro_voucher }} </span>
          </span>

          <span v-if="props.column.field == 'fecha'">
            <span>{{ props.row.date_movement }} </span>
          </span>

          <span v-if="props.column.field == 'metodopago'">
            <span>{{ props.row.payment_method.description }} </span>
          </span>

          <span v-if="props.column.field == 'pagadoc'">
            <span>{{ props.row.amount }}</span>
          </span>



        </template>


      </vue-good-table>


      <div class="md:flex pb-6 items-center mt-12">
        <h6 class="flex-1 md:mb-0 mb-3 ml-2">Comisiones</h6>

      </div>

      <vue-good-table :columns="columnsComisiones" styleClass=" vgt-table  table-head   v-middle striped  listview"
        :rows="this.commisionInfo" :pagination-options="{
          enabled: false,
        }" :sort-options="{
          enabled: false,
        }">
        <template v-slot:table-row="props">
          <div class="flex items-center">
            <span v-if="props.column.field == 'mototaxista'">
              <span class="font-bold"> {{ props.row.collaborator.fullname }}

              </span>
              <br>
              Cell: {{ props.row.collaborator.cellphone }}
            </span>
          </div>


          <span v-if="props.column.field == 'empresa'">
            <span>{{ props.row.collaborator.partnercompany }} </span>
          </span>
          <span v-if="props.column.field == 'fechacomision'"  class="font-bold">
            {{ props.row.formatted_date_commision }}
          </span>


          <span v-if="props.column.field == 'comisionhotel'">
            {{ props.row.total_tour }}

          </span>

          <span v-if="props.column.field == 'comisiontours'">
            {{ props.row.total_hotel }}

          </span>


          <span class="font-bold" v-if="props.column.field == 'branch.description'">
            {{ props.row.branch?.description }}

          </span>


          <span v-if="props.column.field == 'totalcomision'">
            {{ (parseFloat(props.row.total_tour) + parseFloat(props.row.total_hotel)).toFixed(2) }}
          </span>



        </template>

      </vue-good-table>


    </Card>

    <EditProject2 :activeModal="showReserveModal" title="Actualizar Registro de Colaborador" @postComplete="fetchData"
      :code="code" :idCliente="idCliente" :idBooking="idBooking" @close="showReserveModal = false"></EditProject2>


    <ComisionarModal :activeModal="showComisionar" title="Actualizar Registro de Colaborador"
      @commissionProcessed="fetchData" :code="code" :idBooking="idBooking" @close="showComisionar = false">
    </ComisionarModal>

    <ResumenPagosModal :activeModal="showResumenPagos" :selectedRow="selectedRow" @pagosProcesados="fetchData"
      :idBooking="idBooking" @close="showResumenPagos = false">
    </ResumenPagosModal>


    <AmortizarModal :activeModal="showAmortizar" title="Actualizar Registro de Colaborador" @form-submitted="fetchData"
      :idCliente="idCliente" :code="code" :idBooking="idBooking" :totalBooking="deuda" @close="showAmortizar = false">
    </AmortizarModal>
  </div>

</template>
<script>
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import FromGroup from "@/components/FromGroup";
import InputGroup from "@/components/InputGroup";
import VueSelect from "../../../components/Select/VueSelect.vue";
import TotalTable from "./module/TotalTable.vue";
import { mapState } from 'pinia';
import Modal from '@/components/Modal';
import Select from '@/components/Select';
import Textinput from '@/components/Textinput';
import Dropdown from '@/components/Dropdown';
import { MenuItem } from "@headlessui/vue";
import { format } from 'date-fns'; // Importa la función format de date-fns

import ComisionarModal from "./ComisionarAddModal";
import ResumenPagosModal from "./ResumenPagosModal";

import AmortizarModal from "./AmortizarAddAmodal";

import EditProject2 from "./ModalAddReserve";

import { useToast } from "vue-toastification";

import Button from '@/components/Button';
import { useProjectStore } from "../../../store/project";
import { useAuth } from "../../../store/auth";
import axios from "axios";
const store = useProjectStore();
const headers = useAuth().headers(); // Obtiene los encabezados de autenticación


export default {

  components: {
    Card,
    Icon,
    ComisionarModal,
    AmortizarModal,
    FromGroup,
    Button,
    ResumenPagosModal,
    EditProject2,
    Dropdown,
    InputGroup,
    Textinput,
    Select,
    VueSelect,
    TotalTable,
    MenuItem,
    Modal,
    Breadcrumb,
  },
  methods: {
    print() {
      window.print();
    },

    /*handlePostComplete(data) {

      // console.log(data);
      // Obtener los datos de la reserva de hotel
      const hotelBookingData = data.data;

      // Verifica si hotelBookingData es un array
      if (Array.isArray(hotelBookingData)) {
        // Itera sobre cada elemento de hotelBookingData y agrégalo a reservasHotel
        hotelBookingData.forEach(reserva => {
          this.reservasHotel.push(reserva);
        });
      } else {
        // Si hotelBookingData no es un array, agrega el elemento único a reservasHotel
        this.reservasHotel.push(hotelBookingData);
      }


      const ids = this.reservasHotel.map(reserva => reserva.id);

      this.idsReservesHotels = ids;

      // console.log(this.idsReservesHotels);
    },*/

    handleCommissionProcessed(response) {
      // Capturar el ID de la comisión
      const commissionId = response.data.data.id;

      // Formatear el ID como un array
      const formattedId = [commissionId];
      this.commissionIds = formattedId;

      // Hacer algo con el ID, por ejemplo, imprimir en la consola
      // console.log('ID de la comisión:', this.commissionIds);
    },

    handleFormSubmitted(responseData) {
      const moneyId = responseData.data.id;

      // Formatear el ID como un array
      const formattedId = [moneyId];
      this.moneyIds = formattedId;

      // Hacer algo con el ID, por ejemplo, imprimir en la consola
      // console.log('ID del ingreso amortización:', this.moneyIds);
    },
    editar() {

      let routeName = 'invoice-edit'; // Ruta por defecto

      // console.log(this.booking.type_booking); 

      if (this.booking.type_booking === 2) {
        routeName = 'invoice-edit2'; // Cambiar la ruta si booking es igual a 2
      }


      this.$router.push({
        name: routeName,
        params: {
          id: this.booking.id,
        },
        query: {
          otherData: JSON.stringify(this.otherData)
        }
      });
    },
    openModal(groupId) {
      this.$router.push({
        name: 'grupo-preview',
        params: {
          group_id: groupId,
        },

      });
      /*
      this.$router.push({
        name: 'grupo-edit',
        params: {
          group_id: groupId,
        },
        query: {
          group_data: JSON.stringify(this.otherData2)
        }
      });*/
    },

    openModalComisionar() {
      this.showComisionar = true;
    },

    formatDate(dateString) {
      // Formatea la fecha utilizando la función format de date-fns
      return format(new Date(dateString), 'd MMM. yyyy \'Hora:\''); // Formato personalizado
    },

    openModalAmortizar() {
      this.showAmortizar = !this.showAmortizar;
    },
    confirmDelete(itemId) {
      // Mostrar un cuadro de diálogo de confirmación
      if (confirm('¿Estás seguro de que quieres eliminar este elemento?')) {
        // Si el usuario confirma la eliminación, llamar al método deleteItem
        this.deleteItem(itemId);
      } else {
        // Si el usuario cancela, no hacer nada o mostrar un mensaje opcional
        // console.log('Eliminación cancelada');
      }
    },
    async deleteItem(id) {
      const toast = useToast();

      try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/hotelsbookings/destroy/${id}`, headers);
        // console.log(response.data.message); // Mensaje de éxito desde el backend
        toast.success(response.data.message); // Mostrar mensaje de éxito

        this.fetchData();
        // Aquí puedes actualizar tu vista o hacer cualquier otra acción necesaria
      } catch (error) {
        console.error('Error deleting booking:', error.response.data.message);
        toast.error('Error al eliminar la reserva');

        // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
      }
    },

    openModalEdit() {
      this.showEdit = !this.showEdit;
    },

    openModalReservaHotel() {
      this.showReserveModal = true;
    },
    fetchData() {
      const id = this.$route.params.id;
      axios.get(`${import.meta.env.VITE_API_URL}/bookings/record/${id}`, headers)
        .then(response => {
          // Aquí manejas la respuesta del servidor
          // console.log(response);
          const data = response.data.data;

          this.booking.id = data.book.id;
          this.idBooking = data.book.id;
          this.booking.code = data.book.code;
          this.booking.nro_pax = data.book.nro_pax;
          this.booking.is_reference_pax = data.book.is_reference_pax;
          this.booking.nro_pax_childs = data.book.nro_pax_childs;
          this.booking.nro_pax_adults = data.book.nro_pax_adults;
          this.booking.nro_pax_olds = data.book.nro_pax_olds;
          this.booking.type_booking = data.book.type_booking;

          if (data.book.arrivalplace_id) {
            switch (data.book.arrivalplace_id) {
              case 5:
                this.booking.typearrival = "Sin Asignar";
                break;
              case 1:
                this.booking.typearrival = "Aeropuerto";
                break;
              case 2:
                this.booking.typearrival = "Terminal Terrestre";
                break;
              case 3:
                this.booking.typearrival = "Otros";
                break;
              default:
                this.booking.typearrival = null; // Valor por defecto si no coincide con ninguno
                break;
            }
          } else {
            this.booking.typearrival = null; // Valor por defecto si no hay arrivalplace_id
          }
          if (data.book.arrival_place2) {
            this.booking.arrival_place = data.book.arrival_place2;
          } else {
            this.booking.arrival_place = null; // Asigna un valor predeterminado o maneja el caso vacío
          }

          this.booking.reference_voucher = data.book.reference_voucher;
          this.booking.reference_location = data.book.reference_location;

          this.booking.fullName = data.book.client.fullname;
          this.booking.clientDocument = data.book.client.document;
          this.booking.clientCellphone = data.book.client.cellphone;
          this.booking.clientTelephone = data.book.client.telephone;

          this.idCliente = parseInt(data.book.client.id);
          this.code = data.book.code;
          this.booking.subtotal_tour = parseFloat(data.book.subtotal_tour).toFixed(2);
          this.booking.subtotal_flight = parseFloat(data.book.subtotal_flight).toFixed(2);
          this.booking.subtotal_catalog = parseFloat(data.book.subtotal_catalog).toFixed(2);
          this.booking.discount = parseFloat(data.book.discount).toFixed(2);
          this.booking.total = parseFloat(data.book.total).toFixed(2);
          this.booking.total_paid = parseFloat(data.book.total_paid).toFixed(2);
          this.booking.total_billing = parseFloat(data.book.total_billing).toFixed(2);

          // Asumiendo que `data` es el objeto que contiene los valores que deseas asignar
          this.resumenTotal = data.resumenTotal;

          this.deuda = this.resumenTotal[0].deuda;


          data.tours.forEach(item => {
            if (item.group_assigned) {
              item.group_assigned = JSON.parse(item.group_assigned);
              this.grupoId = item.group_assigned.id;

              axios.get(`${import.meta.env.VITE_API_URL}/groups/record-edit-grupo/${this.grupoId}`, headers)
                .then(response => {

                  this.otherData2 = response.data.data;

                })
                .catch(error => {
                  // Aquí manejas errores si la solicitud falla
                  console.error('Error fetching invoice data:', error);
                });


              // console.log(this.booking.typearrival)
            }
          });


          this.projects = data.tours;
          if (data.hotels != null && data.hotels.length > 0) {
            // Si hay hoteles en data.hotels y no es null
            this.reservasInfo = []; // Inicializar reservasInfo como un array vacío

            // Iterar sobre cada hotel en data.hotels
            data.hotels.forEach(hotel => {
              // Agregar cada detailbedrooms del hotel a this.reservasInfo
              if (hotel.detailbedrooms && hotel.detailbedrooms.length > 0) {
                this.reservasInfo.push(...hotel.detailbedrooms);
              }
            });
          } else {
            this.reservasInfo = []; // Si no hay hoteles en data.hotels, asignar un array vacío
          }


          this.movimientosInfo = data.movements;
          this.commisionInfo = data.commissions;
          this.booking.dateArrivalFormatted = data.created_at; // Formatea la fecha de llegada

          console.log(this.reservasInfo);
        })
        .catch(error => {
          // Aquí manejas errores si la solicitud falla
          console.error('Error fetching invoice data:', error);
        });
    },
    retroceder() {
      window.location.href = '/app/products';
    },
    fetchDataEditGrupo() {
      const id = this.$route.params.id;

    },
    editRow(row) {
      console.log('Editar fila:', row);
      this.selectedRow = { ...row }; // Guardamos una copia de la fila seleccionada
      this.showResumenPagos = true;
      // Aquí puedes agregar la lógica para abrir un modal o realizar la acción de edición
    },
    fetchEditData() {
      const id = this.$route.params.id;
      axios.get(`${import.meta.env.VITE_API_URL}/bookings/open-edit/${id}`, headers)
        .then(response => {

          this.otherData = response.data.data;
          // console.log(this.otherData);

        })
        .catch(error => {

          console.error('Error fetching invoice data:', error);
        });
    }
  },

  data() {
    return {
      grupoId: null,
      projects: [], // Inicialmente vacío, se llenará con los datos que obtengas
      resumenTotal: [], // Inicialmente vacío, se llenará con los datos que obtengas
      movimientosInfo: [],
      code: null,
      idBooking: null,
      selectedRow: null,
      commisionInfo: [],
      otherData: {},  // Declara otherData en los datos del componente
      otherData2: {},  // Declara otherData en los datos del componente
      showResumenPagos: false,
      idCliente: null,
      showReserveModal: false,  // Nueva propiedad para controlar el modal de edición
      deuda: null,
      reservasInfo: [], // Inicialmente vacío, se llenará con los datos que obtengas
      booking: {
        id: '',
        code: '', // Propiedad para almacenar el código de reserva
        phone: '', // Propiedad para almacenar el número de teléfono
        dateArrivalFormatted: '', // Propiedad para almacenar la fecha de llegada formateada
        nro_pax: '', // Propiedad para almacenar el número de pasajeros
        fullName: '', // Propiedad para almacenar el nombre completo del cliente
        clientDocument: '',
        clientCellphone: '', // Propiedad para almacenar
        clientTelephone: '',
        // Aquí van las demás propiedades
        type_booking: '',
        user_id: '',
        bookingorigin_id: '',
        arrivalplace_id: '',
        client_id: '',
        agency_id: '',
        origintransfer_id: '',
        correlative: '',
        date_arrival: '',
        time_arrival: '',
        is_reference_pax: '',
        nro_pax_childs: '',
        nro_pax_adults: '',
        nro_pax_olds: '',
        reference_voucher: '',
        observations: '',
        arrival_place: '',
        typearrival: '',
        contact_emergency: '',
        telephone_emergency: '',
        reference_location: '',
        is_igv: '',
        igv: '',
        is_detail_subtotaltour: '',
        subtotal_tour: '',
        subtotal_hotel: '',
        subtotal_flight: '',
        subtotal_catalog: '',
        discount: '',
        total: '',
        total_paid: '',
        total_billing: '',
        is_grouped: '',
        description_grouped: '',
        is_checkin: '',
        is_checkout: '',
        is_postponed: '',
        user_id_postponed: '',
        postponed_description: '',
        text_amount: '',
        register_flight: '',
        is_favorite: '',
        is_breakfast: '',
        nro_breakfast: '',
        start_breakfast: '',
        end_breakfast: '',
        pending_tours: '',
        origintransfer: '',
        program_transfer: ''
      },

      tours: {
        id: "",
        booking_id: "",
        tour_id: "",
        vehicle_tour: "",
        shift_tour: "",
        agency_id: "",
        operator_id: "",
        transfer_id: "",
        bookingtransfer_id: "",
        quantity: "",
        assigned_payment: "",
        delegated_payment: "",
        description: "",
        date_assigned: "",
        observation: "",
        is_received: "",
        is_transfer: "",
        is_realized: "",
        status_realized: "",
        date_realized: "",
        is_paid: "",
        is_open: "",
        is_canceled: "",
        created_at: "",
        updated_at: ""
      },

      hotels: {
        id: "",
        hotel_id: "",
        booking_id: "",
        client_id: "",
        collaborator_id: null,
        code: "",
        correlative: "",
        reference_voucher: "",
        is_external: "",
        observation: "",
        created_at: "",
        updated_at: "",
        deleted_at: null
      },

      movements: {
        id: "",
        receptor_module: "",
        receptor_fullname: "",
        receptor_document: "",
        is_paycredit: "",
        available_edit: "",
        user_id: "",
        moneybox_id: null,
        concept_id: "",
        paymentmethod_id: "",
        currency_id: "",
        voucher_id: "",
        client_id: "",
        employee_id: null,
        accountbank_id: null,
        date_movement: null,
        amount: null,
        text_amount: null,
        gloss: null,
        reference_operation: null,
        nro_voucher: null,
        serie: null,
        correlative: null,
        billing_external_id: null,
        billing_hash: null,
        motive_cancelled: null,
        billing_cancelled: null,
        date_repayment: null,
        repaymentmovement_id: null,
        dischargedocument_id: null,
        is_voucher_external: null,
        voucher_external: null,
        nro_voucher_external: null,
        booking_id: "",
        commision_id: null,
        observation: null,
        is_visible: null,

      },

      commissions: {
        id: "",
        user_id: "",
        booking_id: "",
        collaborator_id: "",
        date_commision: "",
        total_hotel: "",
        total_tour: "",
        observation: "",
        is_paid: "",
        created_at: "",
        updated_at: "",
        deleted_at: null
      }
      ,


      show: false,
      show2: false,
      showEdit: false,
      showComisionar: false,
      showAmortizar: false,
      columnsReservasAlojamiento: [
        {
          label: "Código",
          field: "codigo",
        },
        {
          label: "Nombre Hotel",
          field: "nombreHotel",
        },

        {
          label: "Detalle Hab.	",
          field: "detallehotel",
        },
        {
          label: "Action",
          field: "action",
        },
      ],
      columnsTraspase: [
        {
          label: "Nombre Tours",
          field: "tour",
        },
        {
          label: "N° PAX	",
          field: "pasajerosdetail",
        },
        {
          label: "Vehículo",
          field: "vehiculo",
        },
        {
          label: "Turno",
          field: "turno",
        },
        {
          label: "F. asignada",
          field: "fasignada",
        },
        {
          label: "Estado	",
          field: "estado",
        },

        {
          label: "Obs.	",
          field: "obs",
        },
      ],


      columnsTraspase2: [
        {
          label: "N° PAX	",
          field: "pasajerosdetailgrupo",
        },
        {
          label: "Resonsable y Código",
          field: "responsablegrupo",
        },
        {
          label: "Proforma",
          field: "proformagrupo",
        },
        {
          label: "Hotel/ Ubicación",
          field: "hotelgrupo",
        },
        {
          label: "TELÉFONOS	",
          field: "telefonosgrupo",
        },
        {
          label: "OBSERVACIONES	",
          field: "observacionesgrupo",
        },
        {
          label: "DEUDA.	",
          field: "deudagrupo",
        },
      ],

      actions: [

        {
          name: "edit",
          icon: "heroicons:pencil-square",
          doit: (data) => {
            this.openModalEdit(data);
          },
        },
        {
          name: "delete",
          icon: "heroicons-outline:trash",
          doit: (data) => {
            this.removeProject(data)
          },
        },
      ],

      columnsResumenTotal: [
        {
          label: "TOTAL TOURS	",
          field: "totaltours",
        },
        {
          label: "TOTAL HOTEL",
          field: "totalhotel",
        },

        {
          label: "TOTAL PAGAR",
          field: "totalpagar",
        },
        {
          label: "PAGADO",
          field: "pagado",
        },
        {
          label: "DEUDA",
          field: "deuda",
        },

        {
          label: "FACTURADO",
          field: "facturado",
        },
        {
          label: "Opciones",
          field: "opciones",
        },
      ],

      columnsReservaHotelExpense: [
        {
          label: "Habitacion",
          field: "habitacion",
        },
        {
          label: "N° PAX	",
          field: "pasajeross",
        },

        {
          label: "Cant. HAB",
          field: "cantidad",
        },

        {
          label: "Check-In",
          field: "checkin",
        },
        {
          label: "Check-out",
          field: "checkout",
        },

        {
          label: "#Noches",
          field: "noches",
        },


        {
          label: "Precio",
          field: "precio",
        },

        {
          label: "Descuento",
          field: "descuento",
        },
        {
          label: "Adicional",
          field: "adicional",
        },

        {
          label: "Observación",
          field: "observacion",
        },

        {
          label: "Subtotal",
          field: "subtotal",
        },

        {
          label: "",
          field: "action",
        },
      ],

      columnsComprobantes: [
        {
          label: "Tipo comprobante	",
          field: "tipocomprobante",
        },
        {
          label: "N° comprobante	",
          field: "ncomprobante",
        },
        {
          label: "Fecha",
          field: "fecha",
        },
        {
          label: "Método pago	",
          field: "metodopago",
        },
        {
          label: "Pagado",
          field: "pagadoc",
        },
        {
          label: "",
          field: "filedocumentcomrobante",
        },

      ],

      columnsComisiones: [
        {
          label: "Nombre mototaxista",
          field: "mototaxista",
        },
        {
          label: "Empresa",
          field: "empresa",
        },
        {
          label: "Fecha",
          field: "fechacomision",
        },
        {
          label: "COMISIÓN HOTEL	",
          field: "comisionhotel",
        },
        {
          label: "COMISIÓN TOURS	",
          field: "comisiontours",
        },
        {
          label: "CAJA	",
          field: "branch.description",
        },
        {
          label: "TOTAL COMISIÓN",
          field: "totalcomision",
        },
      ],


    }
  },







  mounted() {
    this.fetchData();
    // console.log(this.booking.id);
    this.fetchEditData();
  }
};
</script>
<style lang="scss">
.vgt-wrap__actions-footer {
  border: none !important;
}

.invocie-btn {
  @apply hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-600 mr-3 mb-4;
}

@media print {
  .invocie-btn {
    display: none;
  }

  .sidebar-wrapper,
  .app-header,
  .site-footer,
  .shadow-deep {
    @apply hidden;
  }

  .content-wrapper {
    @apply w-full ml-0;
  }
}


.text-underline-red {
  border-bottom: 1px solid red;
}
</style>
