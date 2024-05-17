<template>
  <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6">

    <Card
      :title="item.title"
      :class="`ring-1 ${item.ring}`"
      v-for="(item, i) in cardsColor2"
      :key="i"
      noborder
    >
      Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
      tempor incididun ut labore et dolor magna aliqua.
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {

      cardsColor2: [
  
      {
          title: "Info Card",
          border: "border-info-500",
          color: "text-info-500",
          icon: "heroicons-outline:information-circle",
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
