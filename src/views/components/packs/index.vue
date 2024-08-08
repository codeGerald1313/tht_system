<template>
  <div class="grid xl:grid-cols-1 grid-cols-1 gap-6 full-height">
    <Card title="Gestión de Paquetes">
      <TabIcon />
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card";
import TabIcon from "./Tab/TabIcon";

export default {
  components: {
    Card,
    TabIcon,
  },
};
</script>

<style lang="scss"></style>
