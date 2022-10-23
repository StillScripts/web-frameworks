<script>
export default {
	data() {
		return {
			x: Math.floor(Math.random() * 15)
		}
	}
}
</script>

<template>
	<p v-if="x > 10">{{ x }} is greater than 10</p>
	<p v-else-if="5 > x">{{ x }} is less than 5</p>
  <p v-else>{{ x }} is between 5 and 10</p>
</template>