<template>
  <div class="md:flex md:space-x-5 email_height overflow-hidden relative rtl:space-x-reverse">
    <div class="transition-all duration-150" :class="[
      width < 1280
        ? ' absolute h-full top-0 md:w-[260px] w-[200px] z-[999]'
        : 'flex-none min-w-[260px]',
      width < 1280 && mobileEmailSidebar
        ? 'ltr:left-0  rtl:right-0'
        : 'ltr:-left-full rtl:-right-full ',
    ]">
      <Card bodyClass=" h-full flex flex-col " class="h-full">
        <div class="flex-1 h-full">
          <div class="bg-white dark:bg-slate-900 rounded-md sticky top-0 mx-6 mt-6">
            <Button icon="heroicons-outline:plus" text="Crear Recurso" btnClass="btn-dark w-full block  "
              @click="openEmail" />
          </div>

          <perfect-scrollbar class="h-full pb-10 px-6">
            <ul class="list mt-6">
  <li v-for="item in filters.slice(0, 3)" :key="item.label">
    <label class="flex items-center cursor-pointer px-2 py-3 rounded" 
      @click="selectFilter(item.value)" 
      :class="fillter === item.value
        ? 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-200'
        : 'text-slate-600 dark:text-slate-300'"
    >
      <div class="flex-1 flex space-x-2 rtl:space-x-reverse">
        <span class="text-xl" :class="[item.value === 'sent' ? 'transform rotate-[30deg]' : '',
            fillter === item.value ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400 dark:text-slate-400']">
          <Icon :icon="item.icon" />
        </span>
        <span class="capitalize text-sm" :class="fillter === item.value ? 'font-medium' : 'font-normal'">
          {{ item.name }}
        </span>
      </div>
      <span class="flex-none font-normal capitalize text-sm">
        {{ item.count }}
      </span>
    </label>
  </li>
</ul>

            <div class="block py-4 text-slate-800 dark:text-slate-400 font-semibold text-xs uppercase">
              Estados de Reservas
            </div>
            <ul>
              <li v-for="item in filters.slice(3)" :key="item.label" @click="fillter = item.value"
                class="flex space-x-2 text-sm capitalize py-2 cursor-pointer items-center rtl:space-x-reverse" :class="fillter === item.value
                  ? ' text-slate-900 dark:text-white'
                  : '  text-slate-600 dark:text-slate-300'
                  ">
                <span class="inline-block h-2 w-2 rounded-full ring-opacity-30 transition-all duration-150" :class="`
                  ${item.value === 'attended'
                    ? 'bg-danger-500 ring-danger-500'
                    : ''
                  }
                  ${item.value === 'processed'
                    ? 'bg-success-500 ring-success-500'
                    : ''
                  }
                  ${item.value === 'cancelled'
                    ? 'bg-warning-500 ring-warning-500'
                    : ''
                  }
                  ${item.value === 'completed'
                    ? 'bg-primary-500 ring-primary-500'
                    : ''
                  }
                  ${fillter === item.value ? 'ring-4' : 'ring-0'}
                  
                  `"></span>
                <span> {{ item.name }}</span>
              </li>
            </ul>
          </perfect-scrollbar>
        </div>
      </Card>
    </div>
    <Transition name="overlay-fade">
      <div v-if="width < 1280 && mobileEmailSidebar"
        class="overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md"
        @click="closeMobileEmailSidebar"></div>
    </Transition>
    <div class="flex-1 md:w-[calc(100%-320px)]" :class="width < 768 ? 'h-full' : ''">
      <Card bodyClass="p-0 h-full  relative" :class="width < 1024 ? 'h-full' : ' h-full'">
        <div class="all-allEmails px-6 h-full flex flex-col">
          <div
            class="flex justify-between items-center sticky bg-white dark:bg-slate-800 top-0 pt-6 pb-4 px-6 z-[44] border-b border-slate-100 dark:border-slate-700 -mx-6 rounded-t-md">
            <hidden-tools />
            <div class="flex-none flex items-center space-x-2 rtl:space-x-reverse">
              <Tooltip placement="top" arrow theme="dark">
                <template #button>
                  <div
                    class="h-8 w-8 bg-slate-100 dark:text-slate-300 dark:bg-slate-900 flex flex-col justify-center items-center text-lg rounded-full cursor-pointer">
                    <Icon icon="heroicons-outline:sort-descending" />
                  </div>
                </template>
                <span> Sorting </span>
              </Tooltip>
              <Tooltip placement="top" arrow theme="dark">
                <template #button>
                  <div
                    class="h-8 w-8 bg-slate-100 dark:text-slate-300 dark:bg-slate-900 flex flex-col justify-center items-center text-lg rounded-full cursor-pointer">
                    <Icon icon="heroicons-outline:dots-horizontal" />
                  </div>
                </template>
                <span> Action </span>
              </Tooltip>
            </div>
          </div>

          <Loading :count="1" v-if="emailLoading" />
          <Loading :count="isSkeletonLength" v-if="isSkeleton" class="flex-1" />
          <Emails v-if="!isSkeleton" :emails="selectedEmails" />
          <div class="flex-none">
            <Pagination class="py-6" :current="current" :total="total" :per-page="perPage" :pageRange="pageRange"
              @page-changed="current = $event" enableSelect enableSearch :options="options" />
          </div>
          <Transition name="singleEmail">
            <EmailDetailsVue v-if="singleEmailModal" />
          </Transition>
        </div>
      </Card>
    </div>
    <SendMail />
  </div>
</template>
<script setup>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import { useEmailStore } from '@/store/email'; // Asegúrate de que la ruta sea correcta
import Pagination from "@/components/Pagination";
import Loading from "@/components/Skeleton/Todo";
import Tooltip from "@/components/Tooltip";
import { computed, ref, watch, onMounted } from "vue";
import Emails from "./Eamils";
import EmailDetailsVue from "./EmailDetails.vue";
import HiddenTools from "./HiddenTools.vue";
import SendMail from "./SendMail.vue";

const width = ref(0);
const handleResize = () => {
  width.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

const bookingStore = useEmailStore();


const selectFilter = (value) => {
  fillter.value = value;
  console.log("Selected filter:", value); // Muestra el valor seleccionado en la consola

  // Llamar a la acción del store para obtener las reservas basadas en el filtro seleccionado
  bookingStore.fetchBookingsByType(value);
};


const options = ref([
  {
    value: "1",
    label: "1",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "5",
    label: "5",
  },
]);

let store = useEmailStore();
const openEmail = () => {
  store.openEmail();
};

// store  computed
const singleEmailModal = computed(() => store.singleEmailModal);
const mobileEmailSidebar = computed(() => store.mobileEmailSidebar);

// dispatch closeMobileEmailSidebar
const closeMobileEmailSidebar = () => {
  store.closeMobileEmailSidebar();
};

// loading
const emailLoading = computed(() => store.emailLoading);

const fillter = ref("all");

const allEmails = computed(() => store.emailsGet);
const favEmails = computed(() => store.favEmails);
const sentEmails = computed(() => store.sentEmails);
const personalEmails = computed(() => store.personalEmails);
const socialEmails = computed(() => store.socialEmails);
const promotionsEmails = computed(() => store.promotionsEmails);

const isSkeletonLength = ref(allEmails.value.length);

const isSkeleton = ref(null);
const filters = ref([
  {
    name: "Reservas Túristícas",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "Reservas de Paquetes",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "Reservas de Hotel",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },


  {
    name: "Atendidas",
    value: "attended",
    icon: "heroicons-outline:check-circle",
  },
  {
    name: "Procesadas",
    value: "processed",
    icon: "heroicons-outline:document-duplicate",
  },
  {
    name: "Canceladas",
    value: "cancelled",
    icon: "heroicons-outline:x-circle",
  },

]);

// eslint-disable-next-line vue/return-in-computed-property
const selectedEmails = computed(() => {
  if (fillter.value === "all") {
    return allEmails.value;
  } else if (fillter.value === "fav") {
    return favEmails.value;
  } else if (fillter.value === "sent") {
    return sentEmails.value;
  } else if (fillter.value === "attended") {
    return personalEmails.value;
  } else if (fillter.value === "processed") {
    return socialEmails.value;
  } else if (fillter.value === "cancelled") {
    return promotionsEmails.value;
  }
});
watch(
  fillter,
  () => {
    console.log(fillter.value);
    switch (fillter.value) {
      case "all":
        fillter.value = "all";
        isSkeleton.value = true;
        isSkeletonLength.value = allEmails.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        // if mobile email sidebar is open close it
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "fav":
        fillter.value = "fav";
        isSkeleton.value = true;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        isSkeletonLength.value = favEmails.value.length;

        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "sent":
        fillter.value = "sent";
        isSkeleton.value = true;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }

        isSkeletonLength.value = sentEmails.value.length;

        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "attended":
        fillter.value = "attended";
        isSkeleton.value = true;
        isSkeletonLength.value = personalEmails.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "processed":
        fillter.value = "processed";
        isSkeleton.value = true;
        isSkeletonLength.value = socialEmails.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "cancelled":
        fillter.value = "cancelled";
        isSkeleton.value = true;
        isSkeletonLength.value = promotionsEmails.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      default:
        fillter.value = "all";
        isSkeletonLength.value = promotionsEmails.value.length;
        isSkeleton.value = true;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
    }
  },
  { deep: true }
);

// pagination options
const current = ref(1);
const perPage = ref(1);
const pageRange = ref(2);
const total = ref(isSkeletonLength);
</script>
<style lang="scss">
.singleEmail-enter-active {
  animation: fade-in-left 0.44s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

.singleEmail-leave-active {
  animation: fade-in-left 0.34s cubic-bezier(0.39, 0.575, 0.565, 1) both reverse;
}

@keyframes fade-in-left {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.email_height {
  height: calc(var(--vh, 1vh) * 100 - 12.1rem);
}

@media (max-width: 768px) {
  .email_height {
    height: calc(var(--vh, 1vh) * 100 - 10.5rem);
  }
}
</style>
