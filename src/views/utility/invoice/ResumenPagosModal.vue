<template>
    <div>
        <Modal title="Resumen de Pagos" :activeModal="activeModal" @close="closeModal" sizeClass="max-w-4xl">
            <form name="payment_form" id="payment_form" autocomplete="off" class="grid grid-cols-2 gap-4" @submit.prevent="submitForm">

                <!-- Fila 1 -->
                <FromGroup label="Total Pagos Hotel" class="col-span-1">
                    <Textinput v-model="paymentStore.payment_summary.total_hotel" type="text" placeholder="Total Pagos Hotel" class="w-full" />
                </FromGroup>

                <FromGroup label="Total Pagos Tours" class="col-span-1">
                    <Textinput v-model="paymentStore.payment_summary.total_tour" type="text" placeholder="Total Pagos Tours" class="w-full" />
                </FromGroup>

                <!-- Fila 2 -->
                <FromGroup label="Total a Pagar" class="col-span-1">
                    <Textinput v-model="paymentStore.payment_summary.total_pagar" type="text" placeholder="Total a Pagar" class="w-full" />
                </FromGroup>

                <FromGroup label="Total Pagado" class="col-span-1">
                    <Textinput v-model="paymentStore.payment_summary.pagado" type="text" placeholder="Total Pagado" class="w-full" />
                </FromGroup>

                <!-- Fila 3 -->
                <FromGroup label="Deuda" class="col-span-1">
                    <Textinput v-model="paymentStore.payment_summary.deuda" type="text" placeholder="Deuda" class="w-full" />
                </FromGroup>

                <FromGroup label="Facturado" class="col-span-1">
                    <Textinput v-model="paymentStore.payment_summary.facturado" type="text" placeholder="Facturado" class="w-full" />
                </FromGroup>

                <!-- Botones -->
                <div class="col-span-2 flex justify-end mt-4">
                    <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="closeModal" />
                    <Button type="submit" text="Guardar Cambios" btnClass="btn-dark" />
                </div>
            </form>
        </Modal>
    </div>
</template>

<script>
import { ref, watch, defineComponent } from 'vue';
import { usePaymentStore } from '@/store/paymentTotalStore';
import FromGroup from "@/components/FromGroup";
import Textinput from "@/components/Textinput";
import Modal from '@/components/Modal';
import Button from '@/components/Button';

export default defineComponent({
    components: {
        FromGroup,
        Textinput,
        Modal,
        Button
    },
    props: {
        activeModal: Boolean,
        selectedRow: Object
    },
    setup(props, { emit }) {
        const paymentStore = usePaymentStore();

        // Refs para props
        const selectedRow = ref(props.selectedRow);

        // Watch para detectar cambios en selectedRow
        watch(() => props.selectedRow, (newVal) => {
            if (newVal) {
                paymentStore.setPaymentSummary({
                    total_hotel: newVal.totalhotel || '',
                    total_tour: newVal.totaltours || '',
                    total_pagar: newVal.totalpagar || '',
                    pagado: newVal.pagado || '',
                    deuda: newVal.deuda || '',
                    facturado: newVal.facturado || ''
                });
                paymentStore.setIdBooking(newVal.id);  // Asigna el ID de la reserva al store
            }
        }, { immediate: true });  // Ejecuta el watcher inmediatamente con el valor inicial

        const closeModal = () => {
            emit('close');
        };

        const submitForm = async () => {
            try {
                const result = await paymentStore.updatePaymentSummary();
                // Maneja el resultado, muestra un mensaje o redirige según sea necesario
                console.log('Update successful:', result);
                emit('pagosProcesados'); // Emite el evento con el nombre adecuado
                emit('close'); // Cierra el modal si el envío es exitoso
            } catch (error) {
                console.error('Update failed:', error);
                // Maneja el error, muestra un mensaje de error
            }
        };

        return {
            paymentStore,
            closeModal,
            submitForm
        };
    }
});
</script>
