<script>
export default {
	data() {
		return {
			count: 1,
			doubled: 2,
			quadrupled: 4
		}
	},
	watch: {
		count(newCount, oldCount) {
			this.doubled = newCount * 2;
			this.quadrupled = newCount * 4;
		}
  }
}
</script>

<template>
	<div>
		<button @click="count++">Count {{ count }}</button>
		<p>{{count}} * 2 = {{doubled}}</p>
		<p>{{doubled}} * 2 = {{quadrupled}}</p>
	</div>
</template>
