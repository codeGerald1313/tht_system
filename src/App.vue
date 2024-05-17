<template>
  <router-view v-if="isAuthenticated" />
  <router-view v-else />
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from './store/auth'; // Asegúrate de ajustar la ruta según la ubicación de tu archivo de autenticación.

const route = useRoute();
const authStore = useAuth();

const isAuthenticated = computed(() => authStore.isAuthenticated);

onMounted(() => {
  // Aquí puedes agregar código que se ejecutará después de que el componente se monte
});
</script>

<script>
import { useThemeSettingsStore } from './store/themeSettings';

export default {
  mounted() {
    this.$store.themeSettingsStore = useThemeSettingsStore()
  }
}
</script>

<style></style>
