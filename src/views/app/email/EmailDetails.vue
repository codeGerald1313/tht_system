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
    <div v-if="email" class="grid grid-cols-3 gap-6 text-left text-sm text-slate-600 dark:text-slate-300 w-full">
      
      <!-- 🏨 Detalles si es Hotel -->
      <div v-if="email.booking_type === 'hotel'" class="col-span-1">
        <strong>Nombre del Cliente:</strong> {{ email.nombre ?? "N/A" }} {{ email.apellido ?? "" }}<br />
        <strong>Email:</strong> {{ email.email ?? "N/A" }}<br />
        <strong>Teléfono:</strong> {{ email.telefono ?? "N/A" }}<br />
        <strong>Dirección:</strong> {{ email.hotel_direccion ?? "N/A" }}<br />
        <strong>Check-in:</strong> {{ email.check_in_date ?? "N/A" }}<br />
        <strong>Check-out:</strong> {{ email.check_out_date ?? "N/A" }}<br />
        <strong>Total Noches:</strong> {{ email.total_nights ?? 1 }}<br />
        <strong>Precio Total:</strong> {{ email.total_price ?? "0.00" }}
      </div>

      <!-- ✈️ Detalles si es Tour o Pack -->
      <div v-else class="col-span-1">
        <strong>Nombre del Cliente:</strong> {{ email.customer_detail?.nombre ?? "N/A" }} {{ email.customer_detail?.apellidos ?? "" }}<br />
        <strong>Email:</strong> {{ email.customer_detail?.email ?? "N/A" }}<br />
        <strong>Teléfono:</strong> {{ email.customer_detail?.telefono ?? "N/A" }}<br />
        <strong>Hotel:</strong> {{ email.customer_detail?.hotel ?? "N/A" }}
      </div>

      <!-- 📌 Segunda columna - Hoteles -->
      <div v-if="email.booking_type === 'hotel'" class="col-span-1">
        <strong>Habitaciones:</strong> {{ email.rooms ?? "N/A" }}<br />
        <strong>Adultos:</strong> {{ email.guests_adults ?? 0 }}<br />
        <strong>Niños:</strong> {{ email.guests_children ?? 0 }}<br />
        <strong>Precio Final:</strong> {{ email.final_price ?? "N/A" }}<br />
        <strong>Precio en USD:</strong> {{ email.usd_price ?? "N/A" }}<br />
        <strong>Cargos Adicionales:</strong> {{ email.additional_charges ?? "N/A" }}
      </div>

      <!-- 🎟️ Detalles Tour o Pack -->
      <div v-else class="col-span-1">
        <strong>Fecha Seleccionada:</strong> {{ email.selected_date ?? "N/A" }}<br />
        <strong>Hora Seleccionada:</strong> {{ email.selected_time ?? "N/A" }}<br />
        <strong>Idioma:</strong> {{ email.language ?? "N/A" }}<br />
        <strong>Adultos:</strong> {{ email.adults ?? 1 }}<br />
        <strong>Niños:</strong> {{ email.children ?? 0 }}<br />
        <strong>Precio Total:</strong> {{ email.total_price ?? "0.00" }}<br />
        <strong>Cancelación Disponible:</strong> {{ email.cancellation_available ? 'Sí' : 'No' }}
      </div>

      <!-- 📌 Última actualización para todos -->
      <div class="col-span-1">
        <strong>Última Actualización:</strong> {{ email.updated_at ?? "N/A" }}
      </div>
    </div>

    <!-- Botón de Sincronizar -->
    <div class="text-right mt-6">
      <Button
        icon="heroicons-outline:refresh"
        :text="loading ? 'Sincronizando...' : 'Sincronizar con THT ADMIN'"
        :disabled="loading"
        @click="sincronizar"
        :class="{ 'cursor-not-allowed opacity-50': loading }"
        btnClass="bg-red-100 text-red-900 dark:text-slate-300 hover:bg-slate-300 dark:bg-slate-900 btn-sm"
      />
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button";
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";
import { ref, computed } from "vue";
import { useEmailStore } from "@/store/email";

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
