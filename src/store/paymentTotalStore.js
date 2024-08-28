// store/paymentTotalStore.js
import { defineStore } from 'pinia';
import axios from 'axios';
import { useAuth } from '@/store/auth'; // Importa el store de autenticación

export const usePaymentStore = defineStore('payment', {
    state: () => ({
        payment_summary: {
            total_hotel: '',
            total_tour: '',
            total_pagar: '',
            pagado: '',
            deuda: '',
        },
        idBooking: null
    }),
    actions: {
        setPaymentSummary(data) {
            this.payment_summary = { ...this.payment_summary, ...data };
        },
        setIdBooking(id) {
            this.idBooking = id;
        },
        async updatePaymentSummary() {
            const authStore = useAuth(); // Obtén el store de autenticación
            const headers = authStore.headers(); // Obtén los encabezados de autenticación
            
            try {
                const response = await axios.put(
                    `${import.meta.env.VITE_API_URL}/bookings/payment-summary/${this.idBooking}`,
                    this.payment_summary,
                    { ...headers } // Pasa los encabezados a Axios
                );
                return response.data;
            } catch (error) {
                console.error('Error updating payment summary:', error);
                throw error;
            }
        }
    }
});
