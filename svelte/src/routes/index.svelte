<script context="module" lang="ts">
	// An enum containing an option for each component example
	export enum Components {
		HelloWorld,
		Styling,
		NestingComponents,
		Props,
		HTML,
		BasicVariables,
		DependentVariables,
		ConditionalRendering,
		ListLooping,
		TypingAnimation
	}

	// A list of each component based on the enum options above
	export const componentsList: Components[] = [
		Components.HelloWorld,
		Components.Styling,
		Components.NestingComponents,
		Components.Props,
		Components.HTML,
		Components.BasicVariables,
		Components.DependentVariables,
		Components.ConditionalRendering,
		Components.ListLooping
		//Components.TypingAnimation,
	];

	/**
	 * Method which converts an option of the Components enum into
	 * a string to display a title for a component.
	 * @param {Components} component
	 * @returns {string}
	 */
	export const getComponentTitle = (component: Components): string => {
		switch (component) {
			case Components.HelloWorld:
				return 'Hello World';
			case Components.Styling:
				return 'Styling';
			case Components.NestingComponents:
				return 'Nesting Components';
			case Components.Props:
				return 'Props';
			case Components.HTML:
				return 'HTML Tags';
			case Components.BasicVariables:
				return 'Basic Variables';
			case Components.DependentVariables:
				return 'Dependent Variables';
			case Components.ConditionalRendering:
				return 'Conditional Rendering';
			case Components.ListLooping:
				return 'List Looping';
			case Components.TypingAnimation:
				return 'Typing Animation';
		}
	};
</script>

<script lang="ts">
	import Navbar from '../sections/Navbar/Navbar.svelte';
	import PageContent from '../sections/PageContent/PageContent.svelte';

	let currentComponent = Components.HelloWorld;
	let menuOpen = false;

	const handleSwitch = (newComponent?: Components) => {
		if (typeof newComponent === 'number') {
			currentComponent = newComponent;
		}
		menuOpen = false;
	};
</script>

<svelte:head>
	<title>Svelte Basic Framework Concepts</title>
	<meta type="description" content="A list of basic Svelte components" />
	<html lang="en" />
</svelte:head>

<div class="container">
	<Navbar action={handleSwitch} {currentComponent} {menuOpen} />
	<PageContent
		action={() => {
			menuOpen = true;
		}}
		{currentComponent}
		{menuOpen}
	/>
</div>

<style>
	:global(html, body) {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		overflow-x: hidden;
	}

	:global(*) {
		box-sizing: border-box;
	}

	.container {
		display: flex;
		width: 100vw;
		height: 100%;
	}
</style>
