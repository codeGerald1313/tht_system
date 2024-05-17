<template>

</template>
<script>
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import Pagination from "@/components/Pagination";
import { advancedTable } from "../../../constant/basic-tablle-data";
export default {
  components: {
    Pagination,
    Icon,
    Tooltip,
  },

  data() {
    return {
    
    };
  },
};
</script>
<style lang="scss" scoped>
.action-btn {
  @apply h-6 w-6 flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 rounded;
}
</style>
