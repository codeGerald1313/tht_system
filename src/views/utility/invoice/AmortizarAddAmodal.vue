<template>
    <div>
        <Modal :title="'Amortizar reserva | ' + valorCode" label="Modal title" :activeModal="activeModal"
            @close="closeEditModal" sizeClass="max-w-4xl">
            <form name="book_form" id="book_form" autocomplete="off" class="mx-auto space-y-4"
                @submit.prevent="submitForm">
                <!-- Primera fila -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <div class="flex items-center">

                            <FromGroup label="Clientes" class="flex-1">
                                <Select :options="limitedCustomerOptions" v-model="income.client_id"
                                    class="client-select" placeholder="Cliente Reponsable" />
                            </FromGroup>
                            <button @click.prevent="openModal" class="ml-2 mt-7 p-2 btn-outline-dark">+</button>
                        </div>
                        <span v-if="!income.client_id" class="text-red-600">¡Selecciona un cliente!</span>

                    </div>
                    <div>
                        <FromGroup label="Caja aperturada">
                            <Select v-model="branchoffice_id" :options="boxesOptions" disabled
                                placeholder="Seleccionar caja" />
                        </FromGroup>
                        <span v-if="!branchoffice_id" class="text-red-600">¡Selecciona una caja!</span>

                    </div>
                </div>

                <!-- Segunda fila -->
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div>
                        <FromGroup label="Método de pago">
                            <Select v-model="income.paymentmethod_id" :options="paymentMethods"
                                placeholder="Seleccionar método de pago" />
                        </FromGroup>
                        <span v-if="!income.paymentmethod_id" class="text-red-600">¡Selecciona un método de pago!</span>
                    </div>


                    <template v-if="income.paymentmethod_id === 4">
                        <div class="flex items-center">
                            <FromGroup label="Cuenta destino" class="flex-1">
                                <Select :options="accountOptions" v-model="income.accountbank_id"
                                    class="cuentadestino-select" placeholder="Seleccione" />
                            </FromGroup>

                            <button @click.prevent="openModaalBanckAccount"
                                class="ml-2 mt-7 p-2 btn-outline-dark">+</button>
                        </div>
                        <FromGroup label="N° de Operación">
                            <Textinput type="text" v-model="income.nro_voucher_external"
                                placeholder="Ingrese N° de Operación" />
                        </FromGroup>
                    </template>
                    <div>
                        <FromGroup label="TOTAL A PAGAR" class=" text-center">
                            <span class="text-[32px] leading-10 font-medium text-blue-800">S/ {{ income.totalAPagar
                                }}</span>
                        </FromGroup>


                    </div>
                    <div>
                        <FromGroup label="Monto">
                            <Textinput v-model="income.amount" type="text" placeholder="Comisión Tours" />
                        </FromGroup>
                        <span v-if="!income.amount" class="text-red-600">¡Ingresa un monto!</span>


                    </div>
                    <div>
                        <FromGroup label="TOTAL RESTANTE" class=" text-center">
                            <span class="text-[32px] leading-10 font-medium text-red-800">S/ {{ income.totalRestante
                                }}</span>
                        </FromGroup>

                    </div>
                </div>

                <!-- Tercera fila -->
                <div class="grid grid-cols-1">
                    <div>
                        <FromGroup label="Observación">
                            <Textinput v-model="income.observation" type="textarea" placeholder="Observaciones" />
                        </FromGroup>
                    </div>
                </div>

                <!-- Botones -->
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                    <div class="lg:col-span-1"></div>
                    <div class="lg:col-span-3 flex justify-end">
                        <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeEditModal()" />
                        <Button type="submit" text="Amortizar reserva" btnClass="btn-dark" />
                    </div>
                </div>
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
                                <button @click.prevent="openModalBanck"
                                    class="ml-2 mt-7 p-2 btn-outline-dark">+</button>
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
                                    <Textinput v-model="accountBank.number_account" placeholder="N° de cuenta"
                                        required />
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
                                    <Button text="Cancelar" btnClass="btn-light mr-2"
                                        @click.prevent="closeEditModalBank" />
                                    <Button type="submit" text="Guardar Cambios" @click.prevent="guardarCambiosBank"
                                        btnClass="btn-dark" />
                                </div>
                            </div>
                        </form>
                    </Modal>
                </Modal>
            </form>

            <EditProject :activeModal="showEditModal" @close="showEditModal = false"
                title="Actualizar Registro de Colaborador" @updateClientList="fetchClients"></EditProject>


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
import EditProject from "./ClientAddModal";

import Button from '@/components/Button';
import { useProjectStore } from "../../../store/project";
import Textarea from '@/components/Textarea';
import axios from "axios";
import { useAuth } from "../../../store/auth";
import { useToast } from "vue-toastification";

const store = useProjectStore();
const headers = useAuth().headers(); // Obtiene los encabezados de autenticación


export default {
    data() {
        return {
            show3: false,
            show4: false,
            showEditModal: false,
            branchoffice_id: 1, // Inicializado con el valor predeterminado
            income: {
                totalAPagar: 0.00, // Valor inicial de TOTAL A PAGAR
                totalRestante: 0.00, // Valor inicial de TOTAL RESTANTE
                receptor_module: null,
                receptor_fullname: null,
                receptor_document: null,
                is_paycredit: null,
                available_edit: null,
                user_id: null,
                concept_id: null,
                paymentmethod_id: null,
                currency_id: null,
                voucher_id: null,
                client_id: null,
                provider_id: null,
                employee_id: null,
                accountbank_id: null,
                date_movement: null,
                amount: null,
                text_amount: null,
                gloss: '',
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
                booking_id: null,
                commission_id: null,
                observation: null,
                is_visible: null
            },
            paymentMethods: [
                { value: 1, label: "Efectivo" },
                { value: 2, label: "Visa" },
                { value: 3, label: "Cheque" },
                { value: 4, label: "Depósito a cuenta" }
            ],
            clienteOptions: [
                { value: 1, label: 'Cliente 1' },
                { value: 2, label: 'Cliente 2' },
                { value: 3, label: 'Cliente 3' }
            ],
            branchboxOptions: [
                { value: 1, label: 'Caja 1' },
                { value: 2, label: 'Caja 2' },
                { value: 3, label: 'Caja 3' }
            ],

            branchoffices: [
                { value: 1, label: 'Oficina Principal' }
            ],
            typeaccount: [
                { value: 1, label: 'CUENTA SIMPLE' },
                { value: 2, label: 'CUENTA CORRIENTE' },
                { value: 3, label: 'TARJETA DE CRÉDITO' }
            ],

            currency: [
                { value: 1, label: 'SOL' },
                { value: 2, label: 'DÓLAR' },
                { value: 3, label: 'EURO' }
            ],
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
            boxesOptions: [
                { value: 1, label: "Caja Principal" },
                // Agregar más opciones según sea necesario
            ],
            banks: [], // Inicializamos banks como un array vacío
            valorCode: '', // Variable para almacenar el valor del código

            accountOptions: [],
            customerOptions: []

        }
    },

    components: {
        Card,
        Icon,
        FromGroup,
        Button,
        Dropdown,
        EditProject,
        InputGroup,
        Textinput,
        Select,
        VueSelect,
        Textarea,
        TotalTable,
        MenuItem,
        Modal,
        Breadcrumb,
    },

    props: {
        activeModal: Boolean, // Definir prop
        idCliente: String, // Suponiendo que idCliente es de tipo String, puedes cambiarlo según corresponda
        totalBooking: String,
        code: String,
        idBooking: String,
    },

    emits: ['close'],

    methods: {
        closeEditModal() {
            this.$emit('close'); // Emitir evento para cerrar el modal
        },

        openModal() {
            this.showEditModal = true; // Mostrar el modal de edición
        },

        openModalBanck() {
            this.show4 = true;
        },

        closeEditModalBank() {
            this.show4 = false;
        },

        openModaalBanckAccount() {
            this.show3 = true;
        },

        closeModalEditAccountBank() {
            this.show3 = false;
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
        },

        submitForm() {


            this.income.paymentmethod_id = parseInt(this.income.paymentmethod_id);

            // console.log(this.income);

            // Realiza la solicitud HTTP POST al backend
            axios.post(`${import.meta.env.VITE_API_URL}/moneys/create-booking-income`, this.income, { ...headers })
                .then(response => {

                    const toast = useToast()
            this.$emit('income-submitted', this.income);


                    this.$emit('form-submitted', response.data);

                    this.closeEditModal();
                    toast.success(response.data.message)

                    // Maneja la respuesta del backend según sea necesario
                    // console.log('Respuesta del servidor:', response.data);

                    // Opcional: Realiza otras acciones después del éxito


                    this.income.amount  =  null,
                    this.income.paymentmethod_id=  null,
                    this.income.observation =  null;

  
                })
                .catch(error => {
                    console.error('Error al guardar los datos:', error);
                    if (error.response && error.response.data && error.response.data.message) {
                        const toast = useToast()

                        this.closeEditModal();

                        const errorMessage = error.response.data.message;
                        toast.error(errorMessage);
                    } else {
                        // Si no se puede acceder al mensaje de error específico, muestra un mensaje genérico
                        toast.error('Ha ocurrido un error al guardar los datos. Por favor, inténtalo de nuevo.');
                    }
                });
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
        async fetchClients() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/clients/list`, headers);
                this.customerOptions = response.data.data.map(customer => ({
                    value: customer.id,
                    label: customer.fullname
                }));

                // console.log("Chi");
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        },
    },
    mounted() {
        this.fetchAccountBanks();
        this.fetchClients();
        this.fetchBanks(); // Llama a la función fetchBanks cuando el componente se monta

    },


    watch: {
        'income.amount': function (newAmount, oldAmount) {

            // console.log(newAmount);
            // Calcular el valor de TOTAL RESTANTE
            this.income.totalRestante = this.income.totalAPagar - newAmount;

        },

        idCliente: function (newIdClienteValue, oldIdClienteValue) {
            // Hacer algo cuando 'idCliente' cambie, por ejemplo:
            this.fetchClients();
            this.income.client_id = newIdClienteValue;
        },
        totalBooking: function (newValue, oldIdClienteValue) {
            // Convertir el valor de newValue a un entero
            const integerValue = parseInt(newValue.replace(',', ''), 10);

            // Hacer algo cuando 'idCliente' cambie, por ejemplo:
            // console.log(integerValue);
            this.income.totalAPagar = integerValue;
        },

        code: function (newValorCode, oldValueCode) {
            this.valorCode = newValorCode; // Almacenar el valor del código en la variable

        },

        idBooking: function (newValueIdBooking, oldValueIdBooking) {

            this.income.booking_id = newValueIdBooking;
            // console.log('El valor idBooking es', newValueIdBooking);
        },
        'income.paymentmethod_id': function (newVal, oldVal) {
            // Verifica si el nuevo valor es una cadena no vacía
            if (newVal !== null && newVal !== undefined && newVal !== '') {
                // Convierte el nuevo valor a entero y asignalo de nuevo a income.paymentmethod_id
                this.income.paymentmethod_id = parseInt(newVal);
            }
        }
    },

    computed: {

        limitedCustomerOptions() {
            return this.customerOptions.slice(0, 6);
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