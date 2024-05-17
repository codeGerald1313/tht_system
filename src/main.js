import "animate.css";
import "flatpickr/dist/flatpickr.css";
import "sweetalert2/dist/sweetalert2.min.css";
import { createApp } from "vue";
import "simplebar-vue/dist/simplebar.min.css";
import VueFlatPickr from "vue-flatpickr-component";
import VueGoodTablePlugin from "vue-good-table-next";
import "vue-good-table-next/dist/vue-good-table-next.css";
import VueSweetalert2 from "vue-sweetalert2";
import VueTippy from "vue-tippy";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueApexCharts from "vue3-apexcharts";
import VueClickAway from "vue3-click-away";
import App from "./App.vue";
import "./assets/scss/auth.scss";
import "./assets/scss/tailwind.scss";
import router from "./router";
import VCalendar from "v-calendar";
import { createPinia } from "pinia";
import "v-calendar/dist/style.css";
import { VueQueryPlugin } from "@tanstack/vue-query";
// import Echo from 'laravel-echo'
// import Pusher from 'pusher-js'; // Asegúrate de importar Pusher

// window.Pusher = Pusher;

// perfect scrollbar
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

const pinia = createPinia();

// vue use
const app = createApp(App)
  .use(pinia)
  .use(VueSweetalert2)
  .use(Toast, {
    toastClassName: "dashcode-toast",
    bodyClassName: "dashcode-toast-body",
  })
  .use(router)
  .use(VueClickAway)
  .use(VueTippy)
  .use(VueFlatPickr)
  .use(VueGoodTablePlugin)
  .use(VueApexCharts)
  .use(PerfectScrollbar)
  .use(VCalendar);

/*
  window.Echo = new Echo({
    broadcaster: 'pusher',
     key: 'ASDASD2121',
     wsHost: '127.0.0.1',
     wsPort: 6001,
     cluster: 'mt1',
     forceTLS: false,
     disableStats: true,
    encrypted: false,
     authEndpoint: import.meta.env.VITE_API_URL + '/custom-broadcasting-auth',
     auth:{
         headers: {
             'Content-Type': 'application/json',
             Authorization: 'Bearer ' + useAuth().token
         }
    },
     logToConsole: true
 }); */ 


// app.config.globalProperties.$store = {};

// Desactiva la advertencia específica sobre el acceso al $store desde las plantillas
app.config.warnHandler = (msg, vm, trace) => {
  // Ignora la advertencia específica sobre el acceso al $store
  if (msg.includes("Property '$store' was accessed via 'this'")) {
    return;
  }
  
  // Loguea todas las demás advertencias en la consola
  console.warn(msg, vm, trace);
};


function setupStores() {
  const stores = {
    themeSettings: useThemeSettingsStore(),
    // Otros stores si los tienes
  };

  // Asigna los stores a $store
  app.config.globalProperties.$store = stores;
}

// Configura los stores antes de montar la aplicación
setupStores();
app.mount("#app");
app.use(VueQueryPlugin);



import { useThemeSettingsStore } from "@/store/themeSettings";
import { useAuth } from "./store/auth";

const themeSettingsStore = useThemeSettingsStore();
if (localStorage.users === undefined) {
  let users = [
    {
      name: "dashcode",
      email: "dashcode@gmail.com",
      password: "dashcode",
    },
  ];
  localStorage.setItem("users", JSON.stringify(users));
}

// check localStorage theme for dark light bordered
if (localStorage.theme === "dark") {
  document.body.classList.add("dark");
  themeSettingsStore.theme = "dark";
  themeSettingsStore.isDark = true;
} else {
  document.body.classList.add("light");
  themeSettingsStore.theme = "light";
  themeSettingsStore.isDark = false;
}
if (localStorage.semiDark === "true") {
  document.body.classList.add("semi-dark");
  themeSettingsStore.semidark = true;
  themeSettingsStore.semiDarkTheme = "semi-dark";
} else {
  document.body.classList.add("semi-light");
  themeSettingsStore.semidark = false;
  themeSettingsStore.semiDarkTheme = "semi-light";
}
// check loacl storege for menuLayout
if (localStorage.menuLayout === "horizontal") {
  themeSettingsStore.menuLayout = "horizontal";
} else {
  themeSettingsStore.menuLayout = "vertical";
}

// check skin  for localstorage
if (localStorage.skin === "bordered") {
  themeSettingsStore.skin = "bordered";
  document.body.classList.add("skin--bordered");
} else {
  themeSettingsStore.skin = "default";
  document.body.classList.add("skin--default");
}
// check direction for localstorage
if (localStorage.direction === "true") {
  themeSettingsStore.direction = true;
  document.documentElement.setAttribute("dir", "rtl");
} else {
  themeSettingsStore.direction = false;
  document.documentElement.setAttribute("dir", "ltr");
}

// Check if the monochrome mode is set or not
if (localStorage.getItem("monochrome") !== null) {
  themeSettingsStore.monochrome = true;
  document.getElementsByTagName("html")[0].classList.add("grayscale");
}
// fake server
//makeServer();
