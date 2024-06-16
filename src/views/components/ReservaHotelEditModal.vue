<template>
    <div>

        <Modal title="Editar reserva de hotel" label="Modal title" :activeModal="activeModal" @close="closeEditModal"
            sizeClass="max-w-8xl">
            <form name="book_form" id="book_form" autocomplete="off" class="mx-auto space-y-4">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                        <FromGroup label="Reserva">
                            <VueSelect>
                                <vSelect :options="bookingsOptions" v-model="bookinghotel.booking_id"
                                    placeholder="Reserva" />
                            </VueSelect>
                        </FromGroup>
                    </div>
                    <div>
                        <div class="flex items-center">
                            <FromGroup label="Cliente Responsable" class="flex-1">

                                <VueSelect>
                                    <vSelect :options="customerOptions" v-model="bookinghotel.client_id" />
                                </VueSelect>

                            </FromGroup>
                        </div>
                    </div>
                    <div>
                        <FromGroup label="Número teléfono">
                            <!-- Componente InputGroup -->
                            <InputGroup type="tel" v-model="tellephonAndCellphone" placeholder="Número de teléfono" />
                        </FromGroup>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    
                    <!--
                        <FromGroup label="Búsqueda de hotel">
                           
                            <Select :options="hotelOptions" v-model="bookinghotel.hotel_id"
                                placeholder="Buscar hotel" />
                        </FromGroup> -->
                   
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

                                <span v-if="props.column.field == 'hotel'"
                                class="text-slate-500 dark:text-slate-400 block min-w-[108px]">
                                <Select :options="hotelOptions" v-model="projects[props.index].hotel" />
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
import Checkbox from '@/components/Checkbox';
import InputGroup from '@/components/InputGroup';
import Select from "@/components/Select";
import EditProject from "./ClientAddModal";
import { useProjectStore } from "@/store/project";
import vSelect from "vue-select";

import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import ProgressBar from "@/components/ProgressBar";
import { MenuItem } from "@headlessui/vue";
import { mapState, mapActions } from "pinia";
import VueSelect from "@/components/Select/VueSelect.vue";
import Modal from "@/components/Modal";
import axios from "axios";
import { useAuth } from "@/store/auth";
import { defineProps } from 'vue';

import { useToast } from "vue-toastification";

const headers = useAuth().headers(); // Obtiene los encabezados de autenticación
let store

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
        vSelect,
        Icon,
        VueSelect,
        MenuItem,
        Card,
        ProgressBar,
    },
    data() {
        return {
            idBookingg: null,
            searchTerm: '',
            tellephonAndCellphone: '',
            selectedAsignHotel: false,
            selectedHotel: false,
            showEditModal: false,  // Nueva propiedad para controlar el modal de edición
            store: useProjectStore(),
            bookingsOptions: [],
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
                    label: "Hotel",
                    field: "hotel",
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
            id: null,
            bookinghotel: {
                id: null,
                hotel_id: null,
                booking_id_number: null,
                client_id_number: null,

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
        idBooking: String,
        clientData: Object // Se espera que la data del empleado venga como objeto

    },

    emits: ['close'],


    created() {
        // Método que se ejecuta cuando el componente se crea
        this.fetchHotels(); // Llamada al método para obtener los colaboradores
        this.fetchClients();

        this.fetchBookings();
        console.log(this.clientData);
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
                                typebedroom_id: newTour,
                                description: response.data.data,
                            };
                            this.projects.push(newProject);

                            console.log(this.projects);
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
        'bookinghotel.client_id'(newClientId) {
            if (newClientId) {
                const { value, label } = newClientId;
                console.log(`Nuevo cliente seleccionado: ${value}, ${label}`);

                if (value !== undefined) {
                    this.bookinghotel.client_id_number = value;
                    this.fetchContactNumbers(value);
                } else {
                    this.fetchContactNumbers(this.bookinghotel.client_id_number);
                }
            } else {
                this.bookinghotel.client_id_number = null;
            }
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

        clientData: {
            handler(newData) {

                this.id = newData?.id !== undefined ? newData?.id : '';

                console.log(this.id);

                const bookingCode = newData?.booking_data?.code;
                const clientFullname = newData?.client_data?.fullname;
                const concatenatedInfo = `${clientFullname}-${bookingCode}`;


                // Asignar los valores recibidos a bookinghotel u otras variables según sea necesario
                this.bookinghotel.booking_id = concatenatedInfo;
                this.bookinghotel.booking_id_number = newData?.booking_data?.id !== undefined ? newData?.booking_data?.id : '';
                this.bookinghotel.client_id_number = newData?.client_data?.id !== undefined ? newData?.client_data?.id : '';

                this.bookinghotel.client_id = newData?.client_data?.fullname !== undefined ? newData?.client_data?.fullname : '';
                this.bookinghotel.hotel_id = newData?.hotel_data?.id !== undefined ? newData?.hotel_data?.id : '';
                this.bookinghotel.reference_voucher = newData?.reference_voucher !== null ? newData?.reference_voucher : '';
                this.bookinghotel.observation = newData?.observation !== null ? newData?.observation : '';
                this.bookinghotel.total = newData?.total !== null ? parseFloat(newData?.total).toFixed(2) : '';


                // Verificar si detailbedrooms_data existe y no es nulo
                if (newData?.detailbedrooms_data) {
                    this.projects = newData.detailbedrooms_data.map(detail => ({
                        // id: detail.id ?? null,
                        hotelsbooking_id: detail.hotelsbooking_id ?? null,
                        typebedroom_id: detail.typebedroom_id === null ? detail.id : detail.typebedroom_id,
                        date_checkin: detail.date_checkin ?? null,
                        date_checkout: detail.date_checkout ?? null,
                        quantity: detail.quantity ?? null,
                        hotel: detail.hotel_id ?? null,
                        guests: detail.guests ?? null,
                        nights: detail.nights ?? null,
                        price: detail.price ?? null,
                        description: detail.typebedroom ?? null,
                        additional: detail.additional ?? null,
                        discount: detail.discount ?? null,
                        observation: detail.observation ?? null,
                    }));
                } else {
                    this.projects = [];
                }
                // this.projects = newData?.observation !== null ? newData?.observation : '';
                // Otros campos según sea necesario
                console.log("Id Booking ", this.bookinghotel.booking_id_number);
                console.log("Id Cliente ", this.bookinghotel.client_id_number);

                // Puedes ajustar otros campos específicos del formulario aquí si es necesario
            },
            immediate: true, // Para que se ejecute inmediatamente al inicio
            deep: true // Para vigilar cambios profundos en el objeto clientData
        },
        'bookinghotel.booking_id'(newVal, oldVal) {
            if (newVal) {
                const { value, label } = newVal;
                this.bookinghotel.booking_id_number = value;
                console.log(`Booking ID Number set to ${value} from selected booking with label: ${label}`);
            } else {
                this.bookinghotel.booking_id_number = null;
            }
            // Aquí puedes realizar cualquier acción adicional que necesites
        }
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
        async fetchContactNumbers(clientIdNumber) {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/clients/cellphone&telephone/${clientIdNumber}`, headers);
                this.tellephonAndCellphone = response.data.contact_numbers;
            } catch (error) {
                console.error('Error al obtener los números de contacto:', error);
            }
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
                client_id: this.bookinghotel.client_id_number,
                booking_id: this.bookinghotel.booking_id_number,
                collaborator_id: this.bookinghotel.collaborator_id,
                code: this.bookinghotel.code,
                correlative: this.bookinghotel.correlative,
                reference_voucher: this.bookinghotel.reference_voucher,
                is_external: this.bookinghotel.is_external,
                observation: this.bookinghotel.observation,
                total: this.bookinghotel.total,
                detailbedrooms: this.projects.map(detail => {
                    return {
                        typebedroom_id: detail.typebedroom_id === null ? detail.id : detail.typebedroom_id,
                        date_checkin: detail.date_checkin,
                        date_checkout: detail.date_checkout,
                        quantity: detail.quantity,
                        guests: detail.guests,
                        hotel_id: detail.hotel,
                        nights: detail.nights,
                        price: detail.price,
                        additional: detail.additional,
                        discount: detail.discount,
                        observation: detail.observation
                    };
                })
            };

            console.log(dataToSend);

            // Realiza la solicitud HTTP POST al backend
            axios.post(`${import.meta.env.VITE_API_URL}/hotelsbookings/update/${this.id}`, dataToSend, {
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

        async fetchBookings() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/hotelsbookings/list-vselect`, headers);
                console.log(response);
                this.bookingsOptions = response.data.map(booking => ({
                    value: booking.id,
                    label: booking.client_booking_info
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