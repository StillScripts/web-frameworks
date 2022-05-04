<script lang="ts">
	import BasicVariables from '../components/BasicVariables';
	import ConditionalRendering from '../components/ConditionalRendering';
	import DependentVariables from '../components/DependentVariables';
	import HelloWorld from '../components/HelloWorld';
	import HTML from '../components/HTML';
	import ListLooping from '../components/ListLooping';
	import NestingComponents from '../components/NestingComponents';
	import Props from '../components/Props';
	import Styling from '../components/Styling';

	enum Components {
		HelloWorld,
		Styling,
		NestingComponents,
		HTML,
		BasicVariables,
		DependentVariables,
		Props,
		ConditionalRendering,
		ListLooping
	}

	let currentComponent = Components.HelloWorld;

	const handleSwitch = (newComponent: Components) => {
		currentComponent = newComponent;
	};
</script>

<svelte:head>
	<title>Svelte Basic Framework Concepts</title>
	<meta type="description" content="A list of basic Svelte components" />
	<html lang="en" />
</svelte:head>

<div class="container">
	<nav class="links">
		<button on:click={() => handleSwitch(Components.HelloWorld)}>Hello World</button>
		<button on:click={() => handleSwitch(Components.Styling)}>Styling</button>
		<button on:click={() => handleSwitch(Components.NestingComponents)}>Nesting Components</button>
		<button on:click={() => handleSwitch(Components.HTML)}>HTML Tags</button>
		<button on:click={() => handleSwitch(Components.BasicVariables)}>Basic Variables</button>
		<button on:click={() => handleSwitch(Components.DependentVariables)}>Dependent Variables</button
		>
		<button on:click={() => handleSwitch(Components.Props)}>Props</button>
		<button on:click={() => handleSwitch(Components.ConditionalRendering)}
			>Conditional Rendering</button
		>
		<button on:click={() => handleSwitch(Components.ListLooping)}>List Looping</button>
	</nav>
	<div class="components">
		{#if currentComponent === Components.HelloWorld}
			<HelloWorld />
		{:else if currentComponent === Components.Styling}
			<Styling />
		{:else if currentComponent === Components.NestingComponents}
			<NestingComponents />
		{:else if currentComponent === Components.HTML}
			<HTML />
		{:else if currentComponent === Components.BasicVariables}
			<BasicVariables />
		{:else if currentComponent === Components.DependentVariables}
			<DependentVariables />
		{:else if currentComponent === Components.Props}
			<Props />
		{:else if currentComponent === Components.ConditionalRendering}
			<ConditionalRendering />
		{:else if currentComponent === Components.ListLooping}
			<ListLooping />
		{/if}
	</div>
</div>

<style global>
	:global(html, body) {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(*) {
		box-sizing: border-box;
	}

	.container {
		display: flex;
		height: 100%;
	}

	.links {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: rgba(84, 105, 215, 0.5);
		border-radius: 16px;
	}
	.links button {
		background-color: rgba(84, 105, 215, 1);
		color: white;
		margin: 8px;
		padding: 16px 8px;
		border-radius: 8px;
		list-style: none;
		cursor: pointer;
		border: none;
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	}

	.links button:hover {
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
	}

	.components {
		padding: 8px 24px;
	}
</style>
