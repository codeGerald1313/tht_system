import { createRouter, createWebHistory } from "vue-router";
import middlewarePipeline from "../middleware/middlewarePipeline";
import routes from "./route";
import { useAuth } from "../store/auth";

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  base: import.meta.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});


router.beforeEach((to, from, next) => {
  const titleText = to.name;
  const words = titleText.split(" ");
  const wordslength = words.length;
  for (let i = 0; i < wordslength; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  document.title = "ThtSystem  - " + words;

  const authStore = useAuth(); // Obtener el almacenamiento de autenticación
  const isAuthenticated = authStore.isAuthenticated; // Verificar si el usuario está autenticado

  // Si la ruta requiere autenticación y el usuario no está autenticado, redirige al login
  if (to.meta.requireAuth && !isAuthenticated) {
    return next('/'); // Cambia '/login' por la ruta real de tu página de inicio de sesión
  }

  // Si la ruta no requiere autenticación y el usuario está autenticado, redirige a una ruta diferente, por ejemplo, la página principal
  if (!to.meta.requireAuth && isAuthenticated) {
    if (to.path === '/app/home') {
      // Evitar que se acceda a '/app/home' antes de completar el cierre de sesión
      return;
    }
    return next('/app/home'); // Cambia '/' por la ruta real de la página principal de tu aplicación
  }

  // Si la ruta requiere autenticación o el usuario ya está autenticado, sigue adelante
  next();
});


router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
  // makeServer();
});

export default router;
