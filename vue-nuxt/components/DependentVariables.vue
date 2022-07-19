<script lang="ts">
export default {
	data() {
		return {
			count: 1,
			doubled: 2,
			quadrupled: 4
		}
	},
	watch: {
		count(newCount: number, oldCount: number) {
			this.doubled = newCount * 2;
			this.quadrupled = newCount * 4;
		}
  }
}
</script>

<template>
	<button @click="count++">Count {{ count }}</button>
	<p>{{count}} * 2 = {{doubled}}</p>
	<p>{{doubled}} * 2 = {{quadrupled}}</p>
</template>
