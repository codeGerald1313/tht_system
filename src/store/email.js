import { defineStore } from "pinia";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { useToast } from "vue-toastification";
import av1Img from "@/assets/images/avatar/av-1.svg";
import av2Img from "@/assets/images/avatar/av-2.svg";
import av3Img from "@/assets/images/avatar/av-3.svg";
const toast = useToast();

export const useEmailStore = defineStore("email", {
  state: () => {
    return {
      isLoading: false, // Para mostrar una indicación de carga
      error: null, // Para manejar errores
      image: av1Img,
      addModal: false,
      storeEmail: null, // Aquí almacenamos el email seleccionado
      search: "",
      singleEmail: null,
      singleEmailModal: false,
      mobileEmailSidebar: false,
      storeEmail: {},
      isCheckAll: false,
      emailLoading: false,
      trashEmails: [],
      emails: [
        {
          id: 1,
          isCancel: false,
          isTour: true,
          isAtented: true,
          title: "Tours Lamas nativo",
          desc: " - Code geradlsYou made no space for excuses and you decided on a healthier and happier life...",
          isfav: false,
          sent: false,
          isProcess: false,
          isBookingHotel: false,
          isPack: false,
          draft: true,
          spam: false,
          trash: false,
          personal: false,
          social: true,
          promotions: true,
          lastime: "12:20 pm",
          busines: true,
          checked: false,
          isread: false,
          isspam: true,
          isdelate: false,
        },
        {
          id: 2,
          title: "Paquetes 3 Días y 2 noches ",
          desc: " - Congratulations on your Code Coach subscription. You made no space for excuses and you decided on a healthier and happier life...",
          isPack: true,
          isCancel: false,
          isfav: true,
          isAtented: false,
          isTour: false,
          sent: false,
          draft: false,
          spam: false,
          isProcess: false,
          isBookingHotel: false,
          trash: false,
          personal: false,
          social: false,
          promotions: false,
          lastime: "12:20 pm",
          checked: false,
          busines: false,
          isread: false,
          isspam: true,
          isdelate: false,
        },
        {
          id: uuidv4(),
          title: "Tours Laguna Azul ",
          desc: " - Congratulations on your iRun Coach subscription. You made no space for excuses and you decided on a healthier and happier life...",
          isfav: false,
          isTour: true,
          sent: false,
          isCancel: false,
          isBookingHotel: false,
          isAtented: false,
          isProcess: true,
          draft: true,
          isPack: false,
          spam: false,
          trash: false,
          personal: true,
          social: false,
          promotions: false,
          lastime: "12:20 pm",
          checked: false,
          busines: false,
          isread: false,
          isspam: false,
          isdelate: false,
        },
        {
          id: uuidv4(),
          title: "Hotel Rivera Colonial",
          desc: " - Congratulations on your iRun Sent subscription. You made no space for excuses and you decided on a healthier and happier life...",
          isfav: true,
          isTour: false,
          isCancel: true,
          sent: true,
          draft: false,
          isBookingHotel: true,
          isAtented: false,
          spam: false,
          trash: false,
          isProcess: false,
          personal: true,
          isPack: false,
          social: false,
          promotions: false,
          lastime: "12:20 pm",
          checked: false,
          busines: false,
          isread: false,
          isspam: false,
          isdelate: false,
        },
      ],
    };
  },
  getters: {
    // emails with search and tour condition
    emailsGet: (state) =>
      state.search === ""
        ? state.emails.filter((item) => item.isTour === true)
        : state.emails.filter((item) => {
          return (
            item.toures === true &&
            item.title
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(state.search.toLowerCase().replace(/\s+/g, ""))
          );
        }),

    // fav email with search
    favEmails: (state) =>
      state.search === ""
        ? state.emails.filter((item) => item.isPack === true)
        : state.emails
          .filter((item) => item.isPack === true)
          .filter((item) => {
            return item.title
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(state.search.toLowerCase().replace(/\s+/g, ""));
          }),
    // sent email with search
    sentEmails: (state) =>
      state.search === ""
        ? state.emails.filter((item) => item.isBookingHotel === true)
        : state.emails
          .filter((item) => item.isBookingHotel === true)
          .filter((item) => {
            return item.title
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(state.search.toLowerCase().replace(/\s+/g, ""));
          }),

    // personal email with search
    personalEmails: (state) =>
      state.search === ""
        ? state.emails.filter((item) => item.isAtented === true)
        : state.emails
          .filter((item) => item.isAtented === true)
          .filter((item) => {
            return item.title
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(state.search.toLowerCase().replace(/\s+/g, ""));
          }),
    // social email with search
    socialEmails: (state) =>
      state.search === ""
        ? state.emails.filter((item) => item.isProcess === true)
        : state.emails
          .filter((item) => item.isProcess === true)
          .filter((item) => {
            return item.title
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(state.search.toLowerCase().replace(/\s+/g, ""));
          }),
    // promotions email with search
    promotionsEmails: (state) =>
      state.search === ""
        ? state.emails.filter((item) => item.isCancel === true)
        : state.emails
          .filter((item) => item.isCancel === true)
          .filter((item) => {
            return item.title
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(state.search.toLowerCase().replace(/\s+/g, ""));
          }),
  },
  actions: {
    //openEmail
    openEmail() {
      this.addModal = true;
    },
    // Método para obtener las reservas y setear en la estructura emails
    async fetchBookingsByType(bookingType) {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await axios.get('http://192.168.101.10:8001/api/v1/booking-client/list-type', {
          params: {
            booking_type: bookingType,
          }
        });

        if (response.data.status === 200) {
          if (bookingType === "all" || bookingType === "fav" || bookingType === "hotel") {
            this.emails = response.data.data.map((booking) => {
              return {
                id: booking.id,
                title: booking.tour_name || booking.pack_name || booking.hotel_nombre ,  // Título según sea tour o pack
                desc: `Fecha seleccionada: ${booking.selected_date}, Hora: ${booking.selected_time}`,  // Descripción
                isTour: booking.booking_type === 'tour',  // Determinar si es un tour
                isPack: booking.booking_type === 'pack',  // Determinar si es un pack
                isCancel: booking.cancellation_available === 1,  // Cancelación disponible
                isBookingHotel: booking.booking_type === 'hotel',  // Mantenemos como false si no es un hotel
                isfav: bookingType === "fav",  // Si es tipo fav, marcar como favorito
                sent: false,
                draft: false,
                spam: false,
                trash: false,
                isProcess: false,
                personal: false,
                social: false,
                promotions: false,
                lastime: new Date(booking.updated_at).toLocaleTimeString(),
                checked: false,
                busines: false,
                isread: false,
                isspam: false,
                isdelate: false,
                isAtented: false,
              };
            });
          }

          console.log(this.emails); // Ver los datos actualizados
        } else {
          this.error = response.data.message;
        }
      } catch (error) {
        this.error = 'Hubo un problema al obtener los datos.';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchBookings() {
      this.isLoading = true;
      this.error = null;

      try {
        // Llama al endpoint que devuelve todas las reservas
        const response = await axios.get("http://192.168.101.10:8001/api/v1/booking-admin/listV2");
        console.log(response);

        if (response.data.status === 200) {
          // Asigna los datos a `emails` en el estado
          this.emails = response.data.data;
        } else {
          this.error = response.data.message;
        }
      } catch (error) {
        this.error = "Hubo un problema al obtener los datos.";
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    // sendEmail
    sendEmail(payload) {
      this.emails.unshift(payload);
      this.emailLoading = true;
      setTimeout(() => {
        this.emailLoading = false;
        toast.success("Email Send", {
          timeout: 2000,
        });
      }, 1500);
    },
    // deleteEmail
    deleteEmail(payload) {
      var emails = this.emails;
      emails.splice(emails.indexOf(payload), 1);
      // store email delatedEmails
      this.trashEmails.unshift(payload);
      toast.error("Email Delate", {
        timeout: 2000,
      });
    },
    // checkAll
    checkAll() {
      this.isCheckAll = !this.isCheckAll;
      this.emails.forEach((item) => {
        item.checked = this.isCheckAll;
      });
    },
    openSingle(payload) {
      console.log('openSingle', payload);
      this.singleEmailModal = true;

      // Determinar el tipo de reserva basado en el payload
      let bookingType = null;
      if (payload.isBookingHotel) bookingType = 'hotel';
      else if (payload.isTour) bookingType = 'tour';
      else if (payload.isPack) bookingType = 'pack';

      // Llamamos a la función que realiza la petición al backend, incluyendo el tipo de reserva
      this.fetchEmail(payload.id, bookingType);
    },

    async fetchEmail(id, bookingType) {
      try {
        // Enviar el tipo de reserva como un parámetro en la URL
        const response = await axios.get(`http://192.168.101.10:8001/api/v1/booking-client/record/${id}`, {
          params: { booking_type: bookingType }
        });
        this.singleEmail = response.data.data;
        this.image = this.singleEmail.customerDetail?.image_url; // Suponiendo que `image_url` está en los detalles del cliente
      } catch (error) {
        console.error("Error al obtener la reserva:", error);
      }
    },

    openMobileEmailSidebar() {
      this.mobileEmailSidebar = !this.mobileEmailSidebar;
    },
    closeMobileEmailSidebar() {
      this.mobileEmailSidebar = false;
    },
    closeDetailsEmail() {
      this.singleEmailModal = false;
    },
  },
});
