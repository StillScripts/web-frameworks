<script lang="ts">
import CustomAnswer from "./child/CustomAnswer.vue";

export default {
  components: {
    CustomAnswer,
  },
};
</script>

<template>
  <div>
    <CustomAnswer answer="42" />
  </div>
</template>
