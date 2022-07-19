<script lang="ts">
export default {
  props: {
    componentsList: Array,
    currentComponent: Number,
    menuOpen: Boolean,
    action: Function,
  },
};
</script>

<template>
<div>hey</div>
  <!-- <nav class="links">
    <button
      v-for="component of componentsList"
      :key="component"
      @click="() => action(component)"
    >
      {{ getComponentTitle(component) }}
    </button>
  </nav> -->
</template>