<template>
    <div>
        <Modal :title="'Comisionar reserva | ' + valorCode" label="Modal title" :activeModal="activeModal"
            @close="closeEditModal" sizeClass="max-w-4xl">
            <form name="book_form" id="book_form" autocomplete="off" class="mx-auto space-y-4"
                @submit.prevent="submitForm">
                <!-- Primera fila -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="flex items-center">
                        <FromGroup label="Colaborador" class="flex-1">

                            <VueSelect>
                                <vSelect :options="colaboratorOptions" v-model="commission_data.collaborator_id" />
                            </VueSelect>

                     
                        </FromGroup>

                        <button @click.prevent="openModalColaborador" class="ml-2 mt-7 p-2 btn-outline-dark">+</button>
                    </div>
                    <div>
                        <FromGroup label="Caja aperturada">
                            <Select :options="boxesOptions" v-model="commission_data.branchoffice_id" disabled
                                placeholder="Seleccionar caja" />
                        </FromGroup>
                    </div>
                </div>

                <!-- Segunda fila -->
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div>
                        <FromGroup label="Método de pago">
                            <Select v-model="commission_data.paymentmethod_id" :options="paymentMethods"
                                placeholder="Seleccionar método de pago" />
                        </FromGroup>
                    </div>



                    <template v-if="commission_data.paymentmethod_id === 4">
                        <div class="flex items-center">
                            <FromGroup label="Cuenta destino" class="flex-1">
                                <Select :options="accountOptions" v-model="commission_data.accountbank_id"
                                    class="cuentadestino-select" placeholder="Seleccione" />
                            </FromGroup>

                            <button @click.prevent="openModaalBanckAccount"
                                class="ml-2 mt-7 p-2 btn-outline-dark">+</button>
                        </div>
                        <FromGroup label="N° de Operación">
                            <Textinput type="text" v-model="commission_data.nro_voucher_external"
                                placeholder="Ingrese N° de Operación" />
                        </FromGroup>
                    </template>
                    <div>
                        <FromGroup label="Comisión Hotel">
                            <Textinput v-model="commission_data.total_hotel" type="text" placeholder="Comisión Hotel" />
                        </FromGroup>
                    </div>
                    <div>
                        <FromGroup label="Comisión Tours">
                            <Textinput v-model="commission_data.total_tour" type="text" placeholder="Comisión Tours" />
                        </FromGroup>
                    </div>
                    <div>
                        <FromGroup label="TOTAL COMISIÓN" class="text-center">
                            <p>
                                <span class="text-[32px] leading-10 font-medium text-blue-800">S/ {{
                                    commission_data.total_commission
                                }}</span>
                            </p>
                        </FromGroup>

                    </div>
                </div>

                <!-- Tercera fila -->
                <div class="grid grid-cols-1">
                    <div>
                        <FromGroup label="Observación">
                            <Textinput v-model="commission_data.observation" type="textarea"
                                placeholder="Observaciones" />
                        </FromGroup>
                    </div>
                </div>

                <!-- Botones -->
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                    <div class="lg:col-span-1"></div>
                    <div class="lg:col-span-3 flex justify-end">
                        <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModal()" />
                        <Button type="submit" text="Procesar Comisión" btnClass="btn-dark" />
                    </div>
                </div>
            </form>


            <Modal title="Registrar cuenta bancaria" label="Modal title" :activeModal="show3"
                @close="closeModalEditAccountBank">
                <form name="banks_form" id="banks_form" autocomplete="off" class="space-y-4">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <FromGroup label="Sucursal" class="block">
                                <Select v-model="accountBank.branchoffice_id" :options="branchoffices" required
                                    class="oficinaprincipal-select" />
                            </FromGroup>
                        </div>
                        <div>
                            <FromGroup label="Tipo de cuenta" class="block">
                                <Select v-model="accountBank.typeaccount_id" :options="typeaccount" required
                                    class="typeaccount-select" />
                            </FromGroup>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div class="flex items-center">
                            <FromGroup label="Banco" class="flex-1">
                                <Select :options="banks" v-model="accountBank.bank_id" class="banck-select"
                                    placeholder="Seleccione" />
                            </FromGroup>
                            <button @click.prevent="openModalBanck" class="ml-2 mt-7 p-2 btn-outline-dark">+</button>
                        </div>
                        <div>
                            <FromGroup label="Moneda" class="block">
                                <Select v-model="accountBank.currency_id" :options="currency" required
                                    class="money-select" />
                            </FromGroup>
                        </div>
                    </div>

                    <div>
                        <FromGroup label="Nombre cuenta" class="block">
                            <Textinput v-model="accountBank.name" placeholder="Nombre cuenta" required />
                        </FromGroup>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <FromGroup label="N° de cuenta" class="block">
                                <Textinput v-model="accountBank.number_account" placeholder="N° de cuenta" required />
                            </FromGroup>
                        </div>
                        <div>
                            <FromGroup label="N° CCI (Código interbancario)" class="block">
                                <Textinput v-model="accountBank.cci_account" placeholder="N° CCI" required />
                            </FromGroup>
                        </div>
                    </div>

                    <div>
                        <FromGroup label="Titular cuenta" class="block">
                            <Textinput v-model="accountBank.headline" placeholder="Titular cuenta" required />
                        </FromGroup>
                    </div>

                    <div>
                        <FromGroup label="Descripción" class="block">
                            <Textarea v-model="accountBank.description" placeholder="Descripción" />
                        </FromGroup>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                        <div class="lg:col-span-3"></div>
                        <div class="lg:col-span-1 flex justify-end">
                            <Button text="Cancelar" btnClass="btn-light mr-2"
                                @click.prevent="closeModalEditAccountBank" />
                            <Button type="submit" text="Guardar Cambios" @click.prevent="guardarCambiosAccountBank"
                                btnClass="btn-dark" />
                        </div>
                    </div>
                </form>

                <Modal title="Registrar banco" label="Modal title" :activeModal="show4" @close="show4 = false">
                    <form name="banks_form" id="banks_form" autocomplete="off" class="space-y-4">
                        <Textinput v-model="bank.description" label="Nombre" name="pn" type="text"
                            placeholder="Ingresar nombre " />
                        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                            <div class="lg:col-span-3"></div>
                            <div class="lg:col-span-1 flex justify-end">
                                <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModalBank" />
                                <Button type="submit" text="Guardar Cambios" @click.prevent="guardarCambiosBank"
                                    btnClass="btn-dark" />
                            </div>
                        </div>
                    </form>
                </Modal>
            </Modal>

            <EditProject2 :activeModal="showColabardorModal" title="Registrar nuevo Colaborador"
                @updateColaboradorList="listarColaboradores" @close="showColabardorModal = false"></EditProject2>
        </Modal>

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
import EditProject2 from "./CollaboratorAddModalCommision";
import vSelect from "vue-select";

import Button from '@/components/Button';
import { useProjectStore } from "../../../store/project";
import Textarea from '@/components/Textarea';
import { useAuth } from "../../../store/auth";
import axios from "axios";
import { useToast } from "vue-toastification";

const store = useProjectStore();
const headers = useAuth().headers(); // Obtiene los encabezados de autenticación


export default {
    data() {
        return {
            show3: false,
            show4: false,
            valorCode: '', // Variable para almacenar el valor del código

            showColabardorModal: false,
            commission_data: {
                user_id: null,
                nro_voucher_external: null,
                accountbank_id: null,

                booking_id: null,
                collaborator_id: null,
                paymentmethod_id: null,
                branchoffice_id: null,
                total_hotel: '0.00', // Inicializado en 0.00
                total_tour: '0.00', // Inicializado en 0.00
                observation: null,
                branchoffice_id: 1,
                is_paid: null,
                total_commission: '0.00' // Agrega la propiedad total_commission
            },
            bank: {
                description: ""
            },

            accountBank: {
                branchoffice_id: 0,
                bank_id: 0,
                typeaccount_id: 0,
                currency_id: 0,
                name: "",
                number_account: "",
                cci_account: "",
                balance: 0,
                headline: "",
                description: ""
            },

            currency: [
                { value: 1, label: 'SOL' },
                { value: 2, label: 'DÓLAR' },
                { value: 3, label: 'EURO' }
            ],

            branchoffices: [
                { value: 1, label: 'Oficina Principal' }
            ],

            typeaccount: [
                { value: 1, label: 'CUENTA SIMPLE' },
                { value: 2, label: 'CUENTA CORRIENTE' },
                { value: 3, label: 'TARJETA DE CRÉDITO' }
            ],

            paymentMethods: [
                { value: 1, label: "Efectivo" },
                { value: 2, label: "Visa" },
                { value: 3, label: "Cheque" },
                { value: 4, label: "Depósito a cuenta" }
            ],
            boxesOptions: [
                { value: 1, label: "Caja Principal" },
                // Agregar más opciones según sea necesario
            ],
            colaboratorOptions: [],
            accountOptions: [],
            banks: [] // Inicializamos banks como un array vacío

        };

    },

    components: {
        Card,
        Icon,
        FromGroup,
        Button,
        Dropdown,
        EditProject2,
        InputGroup,
        Textinput,
        Select,
        VueSelect,
        vSelect,
        TotalTable,
        Textarea,
        MenuItem,
        Modal,
        Breadcrumb,
    },

    props: {
        activeModal: Boolean, // Definir prop
        code: String,
        idBooking: String
    },
    watch: {
        'commission_data.total_hotel': function (newHotelValue, oldHotelValue) {
            this.calculateTotalCommission();
        },
        'commission_data.total_tour': function (newTourValue, oldTourValue) {
            this.calculateTotalCommission();
        },
        code: function (newValorCode, oldValueCode) {
            this.valorCode = newValorCode; // Almacenar el valor del código en la variable
        },
        idBooking: function (newValueIdBooking, oldValueIdBooking) {

            this.commission_data.booking_id = newValueIdBooking;
            // console.log('El valor idBooking es', newValueIdBooking);
        },

        'commission_data.paymentmethod_id': function (newVal, oldVal) {
            // Verifica si el nuevo valor es una cadena no vacía
            if (newVal !== null && newVal !== undefined && newVal !== '') {
                // Convierte el nuevo valor a entero y asignalo de nuevo a income.paymentmethod_id
                this.commission_data.paymentmethod_id = parseInt(newVal);
            }
        }
    },
    emits: ['close'],

    methods: {
        closeEditModal() {
            this.$emit('close'); // Emitir evento para cerrar el modal
        },
        calculateTotalCommission() {
            // Obtiene los valores de total_hotel y total_tour
            const totalHotel = parseFloat(this.commission_data.total_hotel);
            const totalTour = parseFloat(this.commission_data.total_tour);

            // Verifica si alguno de los valores es NaN o null, o si el valor es una cadena vacía
            if (isNaN(totalHotel) || isNaN(totalTour) || totalHotel === null || totalTour === null || totalHotel.toString().trim() === '' || totalTour.toString().trim() === '') {
                // Si alguno de los valores no es un número o es nulo, o el valor es una cadena vacía, muestra un mensaje de error
                this.commission_data.total_commission = 'Error: Los valores deben ser numéricos';
            } else {
                // Calcula la suma si ambos valores son números válidos
                this.commission_data.total_commission = totalHotel + totalTour;
            }
        }
        ,

        openModalBanck() {
            this.show4 = true;
        },
        async guardarCambiosAccountBank() {
            const toast = useToast();
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/accountbanks/create`, this.accountBank, {
                    ...headers
                });

                this.fetchAccountBanks();
                this.closeModalEditAccountBank();
                toast.success('¡Cambios guardados en la cuenta bancaria exitosamente!');
                // console.log('Respuesta de la solicitud POST para guardar cambios en la cuenta bancaria:', response.data);
            } catch (error) {
                toast.error('Error al guardar cambios en la cuenta bancaria. Por favor, intenta nuevamente.');
                console.error('Error al enviar la solicitud POST para guardar cambios en la cuenta bancaria:', error);
            }
        },
        async guardarCambiosBank() {
            const toast = useToast();
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/banks/create`, this.bank, {
                    ...headers
                });
                this.fetchBanks();
                this.closeEditModalBank();

                toast.success('¡Cambios guardados en el banco exitosamente!');
                // console.log('Respuesta de la solicitud POST para guardar cambios en el banco:', response.data);
            } catch (error) {
                toast.error('Error al guardar cambios en el banco. Por favor, intenta nuevamente.');
                console.error('Error al enviar la solicitud POST para guardar cambios en el banco:', error);
            }
        },

        closeEditModalBank() {
            this.show4 = false;
        },

        openModaalBanckAccount() {
            this.show3 = true;
        },

        openModalColaborador() {
            this.showColabardorModal = true;
        },

        closeModalEditAccountBank() {
            this.show3 = false;
        },

        submitForm() {
            const toast = useToast();


            this.commission_data.paymentmethod_id = parseInt(this.commission_data.paymentmethod_id);

            // console.log(this.commission_data);
            let dataToSend = { ...this.commission_data };


            // Asignar el valor de colaborator_id a partir de this.commission_data.collaborator_id.value
            if (this.commission_data.collaborator_id.value) {
                dataToSend.collaborator_id = this.commission_data.collaborator_id.value;
            }

            // Realizar la solicitud POST utilizando Axios
            axios.post(`${import.meta.env.VITE_API_URL}/commisions/create`, dataToSend, { ...headers })
                .then(response => {
                    // Mostrar mensaje de éxito
                    this.$emit('commissionProcessed', response);

                    this.closeEditModal();
                    toast.success('¡La comisión se procesó exitosamente!');

                    this.commission_data.collaborator_id = null;
                    this.commission_data.paymentmethod_id = null;
                    this.commission_data.total_commission = '0.00'; // Agrega la propiedad total_commission
                    this.commission_data.total_tour = '0.00'; // Inicializado en 0.00
                    this.commission_data.total_hotel = '0.00'; // Inicializado en 0.00
                    this.commission_data.observation = null;

                    // Opcional: realizar otras acciones después del éxito
                })
                .catch(error => {
                    console.error('Error al guardar los datos:', error);
                    if (error.response && error.response.data && error.response.data.message) {
                        const toast = useToast();



                        this.closeEditModal();

                        const errorMessage = error.response.data.message;
                        toast.error(errorMessage);
                    } else {
                        // Si no se puede acceder al mensaje de error específico, muestra un mensaje genérico
                        toast.error('Ha ocurrido un error al guardar los datos. Por favor, inténtalo de nuevo.');
                    }
                });
        },
        async listarColaboradores() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/collaborators/list`, headers);

                this.colaboratorOptions = response.data.data.map(customer => ({
                    value: customer.id,
                    label: customer.fullname
                }));

            } catch (error) {
                console.error('Error al obtener los datos de los empleados:', error);
            }
        },
        async fetchAccountBanks() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/accountbanks/list`, headers); // Cambia la ruta '/api/departments' por la ruta real de tu API
                this.accountOptions = response.data.data.map(concept => ({
                    value: concept.id, // Cambiamos id por value
                    label: concept.name // Cambiamos name por label
                }));

            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        },

        async fetchBanks() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/banks/list`, headers);
                this.banks = response.data.data.map(concept => ({
                    value: concept.id,
                    label: concept.description
                }));
            } catch (error) {
                console.error('Error fetching banks:', error);
            }
        }
    },

    mounted() {
        this.fetchBanks(); // Llama a la función fetchBanks cuando el componente se monta
        this.listarColaboradores();
        this.fetchAccountBanks()
    },
    computed: {


        limitedCustomerOptions() {
            return this.colaboratorOptions.slice(0, 6);
        }



    },
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
</style>