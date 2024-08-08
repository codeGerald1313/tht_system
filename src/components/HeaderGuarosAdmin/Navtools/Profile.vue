<template>
  <Dropdown classMenuItems="w-[180px] top-[58px]">
    <div class="flex items-center">
      <div class="flex-1 ltr:mr-[10px] rtl:ml-[10px]">
        <Icon icon="heroicons-outline:user-circle" class="lg:h-8 lg:w-8 h-7 w-7 rounded-full text-gray-600 dark:text-white" />

      </div>
      <div
        class="flex-none text-slate-600 dark:text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap"
      >
        <span
          class="overflow-hidden text-ellipsis whitespace-nowrap w-[85px] block"
          >{{userName}}</span
        >
        <span class="text-base inline-block ltr:ml-[10px] rtl:mr-[10px]"
          ><Icon icon="heroicons-outline:chevron-down"></Icon
        ></span>
      </div>
    </div>
    <template #menus>
      <MenuItem v-slot="{ active }" v-for="(item, i) in ProfileMenu" :key="i">
        <div
          type="button"
          :class="`${
            active
              ? 'bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 text-slate-900 dark:text-slate-300'
              : 'text-slate-600 dark:text-slate-300'
          } `"
          class="inline-flex items-center space-x-2 rtl:space-x-reverse w-full px-4 py-2 first:rounded-t last:rounded-b font-normal cursor-pointer"
          @click="item.link()"
        >
          <div class="flex-none text-lg">
            <Icon :icon="item.icon" />
          </div>
          <div class="flex-1 text-sm">
            {{ item.label }}
          </div>
        </div>
      </MenuItem>
    </template>
  </Dropdown>
</template>

<script>
import { MenuItem } from "@headlessui/vue";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import profileImg from "@/assets/images/all-img/user.png";
import { useAuth } from "../../../store/auth";
import { useRouter } from 'vue-router'; // Importa useRouter


export default {
  components: {
    Icon,
    Dropdown,
    MenuItem,
  },
  data() {
    return {
      profileImg,
      userName: '',
      ProfileMenu: [
      {
          label: "Guaros Group",
          icon: "heroicons-outline:shield-check",
          link: this.redirectToGuaros,
        },
        {
          label: "Cerrar Sesión",
          icon: "heroicons-outline:login",
          link: this.handleLogout,
        },
        
      ],
    };
  },
  methods: {
    handleLogout() {
      const router = this.$router; // Usa this.$router directamente
      const auth = useAuth();
      auth.logout();

    },
    redirectToGuaros() {
      this.$router.push('/login3');
    }
  },
  created() {
    const authStore = useAuth(); // Obtener la instancia del store useAuth

    // Asignar datos del usuario autenticado a la variable local
    this.userName = authStore.user.name;
  },
};
</script>



<style lang=""></style>
