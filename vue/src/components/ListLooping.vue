<script lang="ts">
export default {
  data() {
    return {
      cats: [
        { id: "J---aiyznGQ", name: "Keyboard Cat" },
        { id: "z_AbfPXTKms", name: "Maru" },
        { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
      ],
    };
  },
};
</script>

<template>
  <div>
    <h1>The Famous Cats of YouTube</h1>
    <ul>
      <li v-for="(cat, index) of cats" :key="cat.id">
        <a target="_blank" :href="'https://www.youtube.com/watch?v=' + cat.id">
          {{ index + 1 }}: {{ cat.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
