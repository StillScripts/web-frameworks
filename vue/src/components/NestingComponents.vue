<script lang="ts">
import Nested from './Nested/Nested.vue'

export default {
	components: {
		Nested
	}
}
</script>

<template>
	<p class="text">These styles...</p>
	<Nested />
</template>

<style scoped>
.text {
	color: purple;
	font-family: 'Comic Sans MS', cursive;
	font-size: 2em;
}
</style>