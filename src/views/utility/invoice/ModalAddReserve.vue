<template>
    <div>

        <Modal title="Registrar reserva de hotel" label="Modal title" :activeModal="activeModal" @close="closeEditModal"
            sizeClass="max-w-8xl">
            <form name="book_form" id="book_form" autocomplete="off" class="mx-auto space-y-4">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                        <FromGroup label="Asociar reserva">
                            <InputGroup type="tel" v-model="bookinghotel.booking_id" placeholder="Reserva" />
                        </FromGroup>
                    </div>
                    <div>
                        <div class="flex items-center">
                            <FromGroup label="Cliente Responsable" class="flex-1">
                                <Select :options="limitedCustomerOptions" v-model="bookinghotel.client_id"
                                    class="client-select" />
                            </FromGroup>
                            <button @click.prevent="openModal" class="ml-2 mt-7 p-2 btn-outline-dark">+</button>
                        </div>
                    </div>
                    <div>
                        <FromGroup label="Número teléfono">
                            <!-- Componente InputGroup -->
                            <InputGroup type="tel" v-model="tellephonAndCellphone" placeholder="Número de teléfono" />
                        </FromGroup>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div>
                        <FromGroup label="Búsqueda de hotel">
                            <!-- Componente VueSelect -->
                            <Select :options="hotelOptions" v-model="bookinghotel.hotel_id"
                                placeholder="Buscar hotel" />
                        </FromGroup>
                    </div>
                    <div>
                        <FromGroup label="Asignar habitación">
                            <!-- Componente Select -->
                            <div class="flex items-center"> <!-- Utilizamos flex para alinear los elementos -->
                                <div class="flex-grow mr-2">
                                    <!-- Utilizamos flex-grow para que el VueSelect ocupe todo el ancho disponible -->
                                    <Select :options="bedroomOptions" v-model="selectedAsignHotel"
                                        placeholder="Seleccionar Hotel" class="w-full" />
                                </div>

                            </div>
                        </FromGroup>
                    </div>
                    <div>
                        <FromGroup label="N° ref. comprobante">
                            <!-- Componente Textinput -->
                            <Textinput type="text" v-model="bookinghotel.reference_voucher"
                                placeholder="Número de referencia del comprobante" />
                        </FromGroup>
                    </div>
                    <div>
                        <FromGroup label="Observaciones">
                            <!-- Componente Textinput -->
                            <Textinput type="text" v-model="bookinghotel.observation" placeholder="Observaciones" />
                        </FromGroup>
                    </div>
                </div>


                <div class="grid grid-cols-1">
                    <div class="flex flex-col">

                        <vue-good-table class="-mx-6 mb-5" :columns="columnsReservaHotelExpense"
                            styleClass=" vgt-table  table-head   v-middle striped lesspadding2 listview"
                            :rows="this.projects" :sort-options="{
                                enabled: false,
                            }">


                            <template v-slot:table-row="props">

                                <span v-if="props.column.field == 'habitacion'">
                                    <div class="flex space-x-3 items-center text-left rtl:space-x-reverse">
                                        {{ props.row.description }}

                                    </div>
                                </span>
                                <span v-if="props.column.field == 'pasajeross'">
                                    <Textinput type="text" placeholder="N° pax"
                                        v-model="projects[props.index].guests" />

                                </span>

                                <span v-if="props.column.field == 'cantidad'"
                                    class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                                    <Textinput type="text" placeholder="Cant. HAB"
                                        v-model="projects[props.index].quantity" />

                                </span>
                                <span v-if="props.column.field == 'checkin'"
                                    class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                                    <flat-pickr class="form-control" id="d1" placeholder="yyyy, dd M"
                                        v-model="projects[props.index].date_checkin" />

                                </span>
                                <span v-if="props.column.field == 'checkout'" class="block w-full">
                                    <flat-pickr class="form-control" id="d1" placeholder="yyyy, dd M"
                                        v-model="projects[props.index].date_checkout"
                                        @change="updateNights(props.index)" />

                                </span>
                                <span v-if="props.column.field == 'noches'">
                                    <Textinput type="text" placeholder="#Noches" v-model="projects[props.index].nights"
                                        @change="calculateTotal(props.index)" />
                                </span>

                                <span v-if="props.column.field == 'precio'">
                                    <Textinput type="text" placeholder="Precio" v-model="projects[props.index].price"
                                        @change="calculateTotal(props.index)" />

                                </span>
                                <span v-if="props.column.field == 'descuento'">
                                    <Textinput type="text" placeholder="Descuento"
                                        v-model="projects[props.index].discount" />

                                </span> <span v-if="props.column.field == 'adicional'">
                                    <Textinput type="text" placeholder="Adicional"
                                        v-model="projects[props.index].additional" />

                                </span>

                                <span v-if="props.column.field == 'observacion'">
                                    <Textinput type="text" placeholder="Observacion"
                                        v-model="projects[props.index].observation" />

                                </span>

                                <span v-if="props.column.field == 'subtotal'">
                                    <Textinput type="text" placeholder="Subtotal"
                                        v-model="projects[props.index].subtotal" />

                                </span>

                                <!-- Botón de acción para eliminar -->
                                <div v-if="props.column.field == 'action'" class="action-btn text-end mr-3">
                                    <div class="text-xl" @click="deleteProject(props.index)">
                                        <Icon icon="heroicons-outline:trash" class="text-danger-500" />
                                    </div>
                                </div>

                            </template>

                        </vue-good-table>
                        <!-- Fin Vue Good Table -->

                        <!-- InputGroup -->
                        <div class="mt-5 self-end">
                            <InputGroup label="T. RESERVA S/." class="append" name="hi_Fullname" type="number"
                                placeholder="" v-model="bookinghotel.total" horizontal
                                appendIcon="heroicons-outline:cash" classInput="text-right" />
                        </div>
                    </div>
                </div>
                <!-- Aquí podrías colocar la tabla de detalles de habitaciones -->

                <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                    <div class="lg:col-span-1"></div> <!-- Columna vacía para mantener la alineación -->
                    <div class="lg:col-span-3 flex justify-end">
                        <!-- Botones -->
                        <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModal()" />
                        <Button type="submit" text="Guardar Reserva" btnClass="btn-dark"
                            @click.prevent="saveReservaHotel()" />
                    </div>
                </div>
            </form>
            <EditProject :activeModal="showEditModal" @close="showEditModal = false"
                title="Actualizar Registro de Colaborador" @updateClientList="fetchClients"></EditProject>
        </Modal>




    </div>



</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import FromGroup from "@/components/FromGroup";
import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import Repeater from "./module/repeater";
import Checkbox from '@/components/Checkbox';
import InputGroup from '@/components/InputGroup';
import Select from "@/components/Select";
import EditProject from "./ClientAddModal";

import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import ProgressBar from "@/components/ProgressBar";
import { MenuItem } from "@headlessui/vue";
import { mapState, mapActions } from "pinia";
import { useProjectStore } from "../../../store/project";
import VueSelect from "../../../components/Select/VueSelect.vue";
import Modal from "@/components/Modal";
import { advancedTable } from "../../../constant/basic-tablle-data";
import axios from "axios";
import { useAuth } from "../../../store/auth";
import { defineProps } from 'vue';

import { useToast } from "vue-toastification";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación

export default {
    components: {
        Dropdown,
        Select,
        Button,
        FromGroup,
        EditProject,
        Textinput,
        Modal,
        Checkbox,
        InputGroup,
        Icon,
        VueSelect,
        MenuItem,
        Card,
        ProgressBar,
    },
    data() {
        return {
            idBookingg: null,
            advancedTable,
            searchTerm: '',
            tellephonAndCellphone: '',
            selectedAsignHotel: false,
            selectedHotel: false,
            showEditModal: false,  // Nueva propiedad para controlar el modal de edición
            store: null,
            customerOptions: [],
            hotelOptions: [],
            projects: [], // Tu objeto rows
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
            bookinghotel: {
                id: null,
                hotel_id: null,
                booking_id: null,
                client_id: null,
                collaborator_id: null,
                code: null,
                correlative: null,
                reference_voucher: null,
                is_external: null,
                total: null,
                observation: null,
                created_at: null,
                updated_at: null,
                deleted_at: null,
                hotel_description: null,
                client_fullname: null,
                client_document: null,
                client_cellphone: null,
                client_telephone: null
            },
            bedroomOptions: [
                { value: 1, label: 'HAB. SIMPLE' },
                { value: 2, label: 'HAB. SIMPLE (AC)' },
                { value: 3, label: 'HAB. MATRIMONIAL' },
                { value: 4, label: 'HAB. MATRIMONIAL (AC)' },
                { value: 5, label: 'HAB. DOBLE' },
                { value: 6, label: 'HAB. DOBLE (AC)' },
                { value: 7, label: 'HAB. TRIPLE' },
                { value: 8, label: 'HAB. TRIPLE (AC)' },
                { value: 9, label: 'HAB. GRUPAL' },
                { value: 10, label: 'HAB. GRUPAL (AC)' }
            ],
        };
    },

    props: {
        activeModal: Boolean, // Definir prop
        code: String,
        idCliente: String,
        idBooking: String
    },

    emits: ['close'],


    created() {
        // Método que se ejecuta cuando el componente se crea
        this.fetchHotels(); // Llamada al método para obtener los colaboradores
        this.fetchClients();
    },

    watch: {
        selectedAsignHotel(newTour, oldTour) {
            if (newTour !== oldTour) {
                // Verificar si el ID ya está seleccionado
                const existingProjectIndex = this.projects.findIndex(project => project.id === newTour);
                if (existingProjectIndex === -1) {
                    axios.get(`${import.meta.env.VITE_API_URL}/typebedrooms/description/${newTour}`, headers)
                        .then(response => {
                            const newProject = {
                                id: newTour,
                                description: response.data.data,
                            };
                            this.projects.push(newProject);
                            this.calculateTotal(this.projects.length - 1); // Calcular total para el nuevo proyecto
                        });
                } else {
                    // Actualizar proyecto existente
                    axios.get(`${import.meta.env.VITE_API_URL}/typebedrooms/description/${newTour}`, headers)
                        .then(response => {
                            this.projects[existingProjectIndex].description = response.data.data;
                            this.calculateTotal(existingProjectIndex); // Recalcular total para el proyecto existente
                        });
                }
            }
        },
        'bookinghotel.client_id'(newClientId, oldClientId) {
            axios.get(`${import.meta.env.VITE_API_URL}/clients/cellphone&telephone/${newClientId}`, headers)
                .then(response => {
                    // console.log(response);

                    this.tellephonAndCellphone = response.data.contact_numbers;
                })
                .catch(error => {
                    console.error('Error al obtener la descripción del tour:', error);
                });
            // Aquí puedes realizar cualquier lógica adicional que necesites
        },


        'projects': {
            deep: true,
            handler(newValue, oldValue) {
                // Recalcula el total cuando se produzca un cambio en los proyectos
                this.calculateTotalForAllProjects();
            },
        },

        code: function (newValorCode, oldValueCode) {

            this.bookinghotel.booking_id = newValorCode;

            // console.log('El valor del code es', newValorCode);
        },
        idCliente: function (newValueIdClient, oldValueIdClient) {

            this.fetchClients();
            this.bookinghotel.client_id = newValueIdClient;
            // console.log('El valor del idCliente es', newValueIdClient);
        },
        idBooking: function (newValueIdBooking, oldValueIdBooking) {

            this.idBookingg = newValueIdBooking;
            // console.log('El valor idBooking es', newValueIdBooking);
        },
    },


    methods: {
        closeEditModal() {
            this.$emit('close'); // Emitir evento para cerrar el modal
        },
        updateNights(index) {
            const checkinDate = new Date(this.projects[index].date_checkin);
            const checkoutDate = new Date(this.projects[index].date_checkout);
            const timeDifference = checkoutDate.getTime() - checkinDate.getTime();
            const nightCount = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Calcula la diferencia en días y redondea hacia arriba
            this.projects[index].nights = nightCount;
        },

        calculateTotalForAllProjects() {
            let total = 0;
            this.projects.forEach(project => {
                const price = project.price || 0;
                const nights = project.nights || 0;
                const quantity = project.quantity || 1;
                project.subtotal = price * nights * quantity; // Calcula y asigna el subtotal al proyecto
                total += price * nights * quantity;
            });
            this.bookinghotel.total = total;
        },
        calculateTotal(index) {
            const currentProject = this.projects[index];
            const price = currentProject.price || 0;
            const nights = currentProject.nights || 0;
            const quantity = currentProject.quantity || 1;
            currentProject.total = price * nights * quantity;
            this.calculateTotalForAllProjects();
        },

        saveReservaHotel() {
            // Construye el objeto de datos a enviar al backend
            const dataToSend = {
                hotel_id: this.bookinghotel.hotel_id,
                client_id: this.bookinghotel.client_id,
                booking_id: this.idBookingg,
                collaborator_id: this.bookinghotel.collaborator_id,
                code: this.bookinghotel.code,
                correlative: this.bookinghotel.correlative,
                reference_voucher: this.bookinghotel.reference_voucher,
                is_external: this.bookinghotel.is_external,
                observation: this.bookinghotel.observation,
                total: this.bookinghotel.total,
                detailbedrooms: this.projects.map(detail => {
                    return {
                        typebedroom_id: detail.id,
                        date_checkin: detail.date_checkin,
                        date_checkout: detail.date_checkout,
                        quantity: detail.quantity,
                        guests: detail.guests,
                        nights: detail.nights,
                        price: detail.price,
                        additional: detail.additional,
                        discount: detail.discount,
                        observation: detail.observation
                    };
                })
            };

            // console.log(dataToSend);

            // Realiza la solicitud HTTP POST al backend
            axios.post(`${import.meta.env.VITE_API_URL}/hotelsbookings/create`, dataToSend, {
                ...headers
            })
                .then(response => {
                    this.$emit('postComplete', response.data);
                    const toast = useToast();
                    this.closeEditModal();
                    toast.success(response.data.message);
                })
                .catch(error => {
                    // Maneja cualquier error de la solicitud
                    console.error('Error al enviar los datos al backend:', error);
                });
        }

        ,
        openModal() {
            this.showEditModal = true; // Mostrar el modal de edición
        },

        deleteProject(index) {
            // Eliminar el proyecto del índice proporcionado
            this.projects.splice(index, 1);
            // console.log(this.projects);
        },
        async fetchHotels() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/hotels/list`, headers);

                // console.log(response);

                this.hotelOptions = response.data.data.map(customer => ({
                    value: customer.id,
                    label: customer.tradename
                }));


            } catch (error) {
                console.error('Error al obtener los datos de los colaboradores:', error);
            }
        },

        async fetchClients() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/clients/list`, headers);
                this.customerOptions = response.data.data.map(customer => ({
                    value: customer.id,
                    label: customer.fullname
                }));
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        },

    },

    computed: {


        limitedCustomerOptions() {
            return this.customerOptions.slice(0, 6);
        }



    },
};


</script>
<style lang="scss" scoped>
th {
    @apply bg-slate-50 dark:bg-slate-700 dark:text-slate-300 text-xs font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left;

    >span {
        @apply block px-6 py-5 font-semibold;
    }
}

td {
    @apply text-slate-900 dark:text-slate-300 text-sm font-normal ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left px-6 py-4;
}
</style>