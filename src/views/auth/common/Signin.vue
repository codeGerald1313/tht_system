<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <Textinput v-model="state.email" label="Email" type="email" placeholder="Type your email" name="email"
      classInput="h-[48px]" />
    <Textinput v-model="state.password" label="Password" type="password" placeholder="8+ characters, 1 capital letter"
      name="password" :error="passwordError" hasicon classInput="h-[48px]" />
    <button type="submit" class="btn btn-dark block w-full text-center">
      Sign in
    </button>
  </form>
</template>

<script>
import Textinput from "@/components/Textinput";
import { useAuth } from "../../../store/auth";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { reactive } from 'vue';

export default {
  components: {
    Textinput,
  },
  setup() {
    const { login } = useAuth();
    const router = useRouter();
    const toast = useToast();

    const state = reactive({
      email: '',
      password: '',
    });

    const handleSubmit = async () => {
  const { email, password } = state;

  console.log(email, password);
  if (!email || !password) {
    toast.warning('Ingrese sus credenciales');
    return;
  }
  try {
    await login(email, password);
    router.push("/app/home"); // Redirige solo si el inicio de sesión es exitoso
  } catch (error) {
    console.log(error);
    // Aquí podrías mostrar un mensaje de error específico para el inicio de sesión fallido
  }
};


    return {
      state,
      handleSubmit,
    };
  },
};
</script>

<style lang="scss"></style>
