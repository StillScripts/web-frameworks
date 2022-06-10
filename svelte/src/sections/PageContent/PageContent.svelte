<script lang="ts">
	import { Components, getComponentTitle } from '../../routes/index.svelte';
	import BasicVariables from '../../components/BasicVariables';
	import ConditionalRendering from '../../components/ConditionalRendering';
	import DependentVariables from '../../components/DependentVariables';
	import HelloWorld from '../../components/HelloWorld';
	import HTML from '../../components/HTML';
	import ListLooping from '../../components/ListLooping';
	import NestingComponents from '../../components/NestingComponents';
	import Props from '../../components/Props';
	import Styling from '../../components/Styling';

	export let action: (component?: Components) => void;
	export let currentComponent: number;
	export let menuOpen: boolean;
</script>

<div class="components" style={menuOpen ? 'display: none;' : ''}>
	<div class="mobile">
		<div on:click={() => action()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="32px"
				width="32px"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</div>
	</div>
	<h1 class="heading">
		{getComponentTitle(currentComponent)}
	</h1>
	<div>
		{#if currentComponent === Components.HelloWorld}
			<HelloWorld />
		{:else if currentComponent === Components.Styling}
			<Styling />
		{:else if currentComponent === Components.NestingComponents}
			<NestingComponents />
		{:else if currentComponent === Components.Props}
			<Props />
		{:else if currentComponent === Components.HTML}
			<HTML />
		{:else if currentComponent === Components.BasicVariables}
			<BasicVariables />
		{:else if currentComponent === Components.DependentVariables}
			<DependentVariables />
		{:else if currentComponent === Components.ConditionalRendering}
			<ConditionalRendering />
		{:else if currentComponent === Components.ListLooping}
			<ListLooping />
		{/if}
	</div>
</div>

<style>
	.components {
		width: 100%;
		min-height: 100vh;
		background-color: rgba(100, 80, 180, 0.1);
		padding: 24px;
	}

	.mobile {
		display: none;
	}

	.heading {
		font-size: 2.5rem;
		font-weight: 800;
		color: rgb(0, 0, 92);
	}

	@media screen and (max-width: 480px) {
		.mobile {
			display: flex;
			justify-content: flex-end;
		}

		.heading {
			font-size: 2rem;
		}
	}
</style>
