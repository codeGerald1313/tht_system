<template>
  <div>
    <div v-if="
  (emails.filter(email => email.status_booking === 1).length === 0 && this.search !== '') || 
  emails.filter(email => email.status_booking === 1).length === 0
">
  <Badge
    label="No se encontraron registros."
    badgeClass="bg-danger-500 text-white w-full block text-center mt-10"
  />
</div>

  </div>
</template>
<script>
import Badge from "@/components/Badge";
import {mapWritableState} from "pinia";
import {useEmailStore} from "@/store/email";

export default {
  components: {
    Badge,
  },
  computed:{
    ...mapWritableState(useEmailStore, ['search'])
  },
  props: {
    emails: {
      type: Array,
    },
  },
};
</script>
<style></style>
