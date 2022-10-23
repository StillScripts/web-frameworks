<script>
export default {
	data() {
		return {
			count: 0
		}
	}
}
</script>

<template>
	<button @click="count++">Clicked {{ count }} {{ count === 1 ? 'time' : 'times' }}</button>
</template>

