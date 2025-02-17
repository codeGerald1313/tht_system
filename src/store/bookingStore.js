import { defineStore } from 'pinia';
import axios from 'axios';

export const useBookingStore = defineStore('booking', {
  state: () => ({
    bookings: [], // Almacena las reservas obtenidas
    isLoading: false, // Para mostrar una indicación de carga
    error: null, // Para manejar errores
  }),

  actions: {
    async fetchBookingsByType(bookingType) {
      this.isLoading = true; // Indicar que se está cargando
      this.error = null; // Reiniciar el error

      try {
        const response = await axios.get('http://127.0.0.1:8001/api/v1/booking-client/list-type', {
          params: {
            booking_type: bookingType, // Enviar el tipo de reserva como parámetro
          }
        });
        
        // Si la respuesta es exitosa, actualizamos el estado con los datos
        if (response.data.status === 200) {
          this.bookings = response.data.data;

          console.log(this.bookings);
        } else {
          // Si hay un error en la respuesta, lo manejamos aquí
          this.error = response.data.message;
        }
      } catch (error) {
        // Capturar cualquier error de la petición
        this.error = 'Hubo un problema al obtener los datos.';
        console.error(error);
      } finally {
        this.isLoading = false; // Termina la carga
      }
    }
  }
});
