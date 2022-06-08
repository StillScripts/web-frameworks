<script lang="ts">
	import { Components, componentsList, getComponentTitle } from '../../routes/index.svelte';
	export let action: (component?: Components) => void;
	export let currentComponent: number;
	export let menuOpen: boolean;
</script>

<nav class="links" style={menuOpen ? 'display: flex;' : ''}>
	<div class="close">
		<div on:click={() => action()}>x</div>
	</div>
	{#each componentsList as component}
		<button
			style={component === currentComponent ? 'background-color:rgb(56, 78, 189)' : ''}
			on:click={() => action(component)}>{getComponentTitle(component)}</button
		>
	{/each}
</nav>

<style>
	.links {
		display: flex;
		flex-direction: column;
		background-color: rgba(84, 105, 215, 0.5);
		padding: 16px 8px;
		height: 100vh;
		overflow-y: scroll;
	}
	.links button {
		background-color: rgba(84, 105, 215, 1);
		color: white;
		margin: 12px;
		padding: 12px 6px;
		border-radius: 16px;
		text-transform: uppercase;
		list-style: none;
		cursor: pointer;
		border: none;
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	}

	.links button:hover {
		background-color: rgb(56, 78, 189);
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
	}

	.close {
		display: none;
	}

	@media screen and (max-width: 480px) {
		.links {
			display: none;
			width: 100%;
			height: 100%;
		}

		.close {
			display: flex;
			justify-content: flex-end;
			padding-right: 16px;
		}
	}
</style>
