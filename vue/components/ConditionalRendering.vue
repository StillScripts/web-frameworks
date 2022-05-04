<script lang='ts'>
export default {
	data() {
		return {
			x: 7
		}
	}
}
	let x = 7;
</script>

<template>
	<p v-if="x > 10">{{ x }} is greater than 10</p>
	<p v-else-if="5 > x">{{ x }} is less than 5</p>
  <p v-else>{{ x }} is between 5 and 10</p>
</template>