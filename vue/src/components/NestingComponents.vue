<script lang="ts">
import Unstyled from "./child/Unstyled.vue";

export default {
  components: {
    Unstyled,
  },
};
</script>

<template>
  <div>
    <p class="text">These styles...</p>
    <Unstyled />
  </div>
</template>

<style scoped>
.text {
  color: purple;
  font-family: "Comic Sans MS", cursive;
  font-size: 2em;
}
</style>
