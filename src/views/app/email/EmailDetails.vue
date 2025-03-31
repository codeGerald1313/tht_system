<template>
  <div class="absolute left-0 top-0 w-full h-full bg-white dark:bg-slate-800 z-[55] rounded-md p-6 overflow-y-auto">
    <div class="flex items-center justify-start border-b border-slate-100 dark:border-slate-700 pb-6 mb-6 px-6">
      <div class="flex items-center space-x-4">
        <!-- Icono de regreso -->
        <Tooltip placement="top" arrow>
          <template #button>
            <div class="email-icon" @click="closeDetailsEmail">
              <Icon icon="heroicons-outline:arrow-left" />
            </div>
          </template>
          <span>Back</span>
        </Tooltip>

        <!-- Título según el tipo de reserva -->
        <div v-if="email">
          <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-300">
            {{ email.hotel_nombre || email.tour_name || email.pack_name || "Reserva" }}
          </h1>
        </div>
      </div>
    </div>

    <!-- Contenido del Email -->
    <div v-if="email" class="grid grid-cols-1 gap-6 text-left text-sm text-slate-600 dark:text-slate-300 w-full">

      <!-- 🏨 Detalles si es Hotel -->
      <div v-if="email.booking_type === 'hotel'" class="col-span-1">
        <Card title="Detalles de la Reserva" :class="{
          'border border-yellow-500': email.status === 'Pendiente',
          'border border-blue-500': email.status === 'Realizado'
        }">
          <div class="grid grid-cols-3 gap-8">
            <!-- Columna 1: Datos del Cliente -->
            <div>
              <ul class="list space-y-8">
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:user" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Nombre</div>
                    <div class="text-base text-slate-600 dark:text-slate-50 font-bold">
                      {{ email.customer_detail?.nombre ?? "N/A" }} {{ email.customer_detail?.apellidos ?? "" }}
                    </div>
                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:phone" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Teléfono</div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      {{ email.customer_detail?.telefono ?? "N/A" }}
                    </div>
                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:at-symbol" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Email</div>
                    <div class="text-base text-blue-900 dark:text-blue-300 font-bold">
                      {{ email.customer_detail?.email ?? "N/A" }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Columna 2: Detalles de la Reserva -->
            <div>
              <ul class="list space-y-8">
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:calendar" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Check-in</div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      {{ email.selected_date ?? "N/A" }}
                    </div>
                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:calendar" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Check-out
                    </div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      {{ email.check_out_date ?? "N/A" }}
                    </div>
                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:clock" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Total Noches
                    </div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      {{ email.total_nights ?? 1 }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Columna 3: Información Adicional -->
            <div>
              <ul class="list space-y-8">
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:home" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Hotel</div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      {{ email.hotel_direccion ?? "N/A" }}
                    </div>
                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:currency-dollar" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Precio Total
                    </div>
                    <div class="text-base text-green-600 dark:text-green-300 font-bold">
                      S/.{{ email.total_price }}
                    </div>
                  </div>
                </li>

                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl">
                    <Icon icon="heroicons:check-circle" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Estado</div>
                    <div class="text-base font-bold px-3 py-1 rounded" :class="statusClass">

                      {{ getStatusText(email.status_booking) }}
                    </div>
                    <button v-if="email.status_booking === 1" @click="updateStatus(email.id, 2)"
                      class="mt-2 px-2 py-1 text-sm text-white bg-blue-600 rounded">
                      Marcar como Realizado
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <h2 class="text-xl font-bold text-gray-700 dark:text-white border-b-2 border-gray-300 pb-2 mt-6 mb-4">
            Detalles del Pago
          </h2>

          <div class="grid grid-cols-3 gap-4 mt-6">
            <div>
              <ul class="list space-y-8">
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:credit-card" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Método de Pago
                    </div>
                    <div class="text-base text-slate-600 dark:text-slate-50 font-bold">
                      {{ email.payment_detail?.card_name ?? "N/A" }} ({{ email.payment_detail?.payment_method ?? "N/A"
                      }})
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul class="list space-y-8">
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:presentation-chart-line" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Estado del
                      Pago
                    </div>
                    <div class="text-base font-bold px-3 py-1 rounded"
                      :class="email.payment_detail?.payment_completed ? 'bg-green-500 text-white' : 'bg-red-500 text-white'">
                      {{ email.payment_detail?.payment_completed ? 'Completado' : 'Pendiente' }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul class="list space-y-8">
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:information-circle" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Nota</div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      Verifica los detalles del pago antes de confirmar la reserva.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <!-- ✈️ Detalles si es Tour o Pack -->
      <div v-else class="col-span-1">
        <Card title="Detalles de la Reserva" :class="{
          'border border-yellow-500': email.status === 'Pendiente',
          'border border-blue-500': email.status === 'Realizado'
        }">
          <div class="grid grid-cols-3 gap-8">
            <!-- Columna 1: Nombre, Teléfono, Email, Hotel -->
            <div>
              <ul class="list space-y-8">
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:user" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Nombre</div>
                    <div class="text-base text-slate-600 dark:text-slate-50 font-bold">
                      {{ email.customer_detail?.nombre ?? "N/A" }} {{ email.customer_detail?.apellidos ?? "" }}
                    </div>
                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:phone" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Teléfono</div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      {{ email.customer_detail?.telefono ?? "N/A" }}
                    </div>
                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:at-symbol" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Email</div>
                    <div class="text-base text-blue-900 dark:text-blue-300 font-bold">
                      {{ email.customer_detail?.email ?? "N/A" }}
                    </div>
                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:building-office" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Hotel</div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      {{ email.customer_detail?.hotel ?? "N/A" }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Columna 2: Fecha Seleccionada, Hora Seleccionada, Idioma, Adultos / Niños -->
            <div>
              <ul class="list space-y-8">
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:calendar" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Fecha
                      Seleccionada
                    </div>
                    <div class="text-base font-bold text-slate-600 dark:text-slate-50">
                      {{ email.formatted_eslet_date ?? "N/A" }}
                    </div>

                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:clock" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Hora
                      Seleccionada
                    </div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      {{ email.selected_time ?? "N/A" }}
                    </div>
                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:globe-alt" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Idioma</div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      {{ email.language ?? "N/A" }}
                    </div>
                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:user-group" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Adultos /
                      Niños
                    </div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      {{ email.adults ?? 1 }} adultos / {{ email.children ?? 0 }} niños
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Columna 3: Precio Total, Cancelación Disponible, Última Actualización -->
            <!-- Columna 3: Precio, Cancelación y Estado -->
            <div>
              <ul class="list space-y-8">
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:currency-dollar" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Precio Total
                    </div>
                    <div class="text-base text-green-600 dark:text-green-300 font-bold">
                      S/. {{ email.total_price ?? "0.00" }}
                    </div>
                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:shield-check" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Cancelación
                      Disponible</div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      {{ email.cancellation_available ? 'Sí' : 'No' }}
                    </div>
                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:clock" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      Última Actualización
                    </div>
                    <div class="text-base text-slate-600 dark:text-slate-50 font-bold">
                      {{ email.formatted_updated_at ?? "N/A" }}
                    </div>

                  </div>
                </li>
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl">
                    <Icon icon="heroicons:check-circle" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">Estado</div>
                    <div class="text-base font-bold px-3 py-1 rounded" :class="statusClass">

                      {{ getStatusText(email.status_booking) }}
                    </div>
                    <button v-if="email.status_booking === 1" @click="updateStatus(email.id, 2)"
                      class="mt-2 px-2 py-1 text-sm text-white bg-blue-600 rounded">
                      Marcar como Realizado
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <h2 class="text-xl font-bold text-gray-700 dark:text-white border-b-2 border-gray-300 pb-2 mt-6 mb-4">
            Detalles del Pago
          </h2>

          <!-- Segunda Fila: Detalles de Pago -->
          <div class="grid grid-cols-3 gap-4 mt-6">
            <!-- Columna 1: Método de Pago -->
            <div>
              <ul class="list space-y-8">
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:credit-card" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      Método de Pago
                    </div>
                    <div class="text-base text-slate-600 dark:text-slate-50 font-bold">
                      {{ email.payment_detail?.card_name ?? "N/A" }} ({{ email.payment_detail?.payment_method ?? "N/A"
                      }})
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Columna 2: Estado del Pago -->
            <div>
              <ul class="list space-y-8">
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:presentation-chart-line" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      Estado del Pago
                    </div>
                    <div class="text-base font-bold px-3 py-1 rounded"
                      :class="email.payment_detail?.payment_completed ? 'bg-green-500 text-white' : 'bg-red-500 text-white'">
                      {{ email.payment_detail?.payment_completed ? 'Completado' : 'Pendiente' }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Columna 3: Espacio vacío o Nota -->
            <div>
              <ul class="list space-y-8">
                <li class="flex space-x-3 rtl:space-x-reverse">
                  <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:information-circle" />
                  </div>
                  <div class="flex-1">
                    <div class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      Nota
                    </div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      Verifica los detalles del pago antes de confirmar la reserva.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Card>

      </div>





    </div>

    <!-- Botón de Sincronizar -->
    <div class="text-right mt-6">
      <Button icon="heroicons-outline:refresh" :text="loading ? 'Sincronizando...' : 'Sincronizar con THT ADMIN'"
        :disabled="loading" @click="sincronizar" :class="{ 'cursor-not-allowed opacity-50': loading }"
        btnClass="bg-red-100 text-red-900 dark:text-slate-300 hover:bg-slate-300 dark:bg-slate-900 btn-sm" />
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button";
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";
import { ref, computed } from "vue";
import { useEmailStore } from "@/store/email";
import Card from "@/components/Card";
import axios from "axios";
import { useToast } from "vue-toastification"; // Importa Vue Toastification
import Swal from 'sweetalert2'; // Importa SweetAlert2

const toast = useToast(); // Inicializa el toast

const store = useEmailStore();

const email = computed(() => {
  const data = store.singleEmail;
  console.log("Email data:", data); // Imprime los datos de `email` en la consola
  return data;
});

const loading = ref(false);

const sincronizar = () => {
  console.log("Email data:", email.value); // Imprime el contenido actual de `email`

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 4000); // Simula la carga de 4 segundos
};
const getStatusText = (status) => {
  switch (status) {
    case 1:
      return "Pendiente";
    case 2:
      return "Realizado";
    case 0:
      return "Baja/Historial";
    default:
      return "Desconocido";
  }
};

const updateStatus = async (id, status) => {
  try {
    // Mostrar alerta de confirmación antes de actualizar
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres marcar esta reserva como realizada?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, actualizar",
      cancelButtonText: "Cancelar"
    });

    // Si el usuario cancela, no hacer nada
    if (!result.isConfirmed) return;

    // Realizar la actualización si el usuario acepta
    const response = await axios.put("https://apidev.guarosgroup.com/api/v1/booking-admin/update-status", {
      id,
      status
    });

    console.log("Estado después de actualizar:", response.data.booking.status_booking);

    // Mostrar un toast de éxito
    toast.success("El estado se actualizó correctamente");
    email.value.status_booking = response.data.booking.status_booking === 2 ? 2 : 1;


  } catch (error) {
    console.error("Error al actualizar el estado:", error);
    toast.error("Hubo un error al actualizar el estado");
  }
};


// Clases dinámicas para cambiar el color de fondo
const statusClass = computed(() => {
  return email.value.status_booking === 1
    ? "bg-yellow-400 text-black"
    : "bg-blue-600 text-white"; // Cambia a azul cuando es "Realizado"
});

const closeDetailsEmail = () => {
  store.closeDetailsEmail();
};
</script>
<style lang="scss" scoped>
.email-icon {
  @apply h-8 w-8 bg-slate-100 dark:bg-slate-900 dark:text-slate-200 text-slate-600 flex flex-col justify-center items-center text-base rounded-full cursor-pointer;
}

.info-500-list {
  @apply text-xs text-slate-600;

  li {
    @apply flex space-x-2;

    span:nth-child(1) {
      @apply font-medium flex-none text-right;
    }

    span:nth-child(2) {
      @apply flex-1 text-right;
    }
  }
}
</style>
