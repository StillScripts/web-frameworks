<script lang="ts">
	import { HelloWorld } from "~~/.nuxt/components";
</script>
<template>
	<div class="components">
		<HelloWorld v-if="currentComponent === 0" />
		<Styling v-if="currentComponent === 1" />
		<NestingComponents v-if="currentComponent === 2" />
		<Props v-if="currentComponent === 3" />
		<BasicVariables v-if="currentComponent === 5" />
		<DependentVariables v-if="currentComponent === 6" />
		<ConditionalRendering v-if="currentComponent === 7" />
		<ListLooping v-if="currentComponent === 8" />
	</div>
</template>

<style scoped>
	.components {
		width: 100%;
		margin: 16px;
		background-color: rgba(100, 80, 180, 0.1);
		border-radius: 8px;
		padding: 8px 24px;
	}
</style>