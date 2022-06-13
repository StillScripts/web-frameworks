<script lang="ts">
	import { Components, componentsList, getComponentTitle } from '../../routes/index.svelte';
	export let action: (component?: Components) => void;
	export let currentComponent: number;
	export let menuOpen: boolean;
</script>

<nav class="links" style={menuOpen ? 'display: flex;' : ''}>
	<div class="close">
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
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</div>
	</div>
	{#each componentsList as component}
		<button
			style={component === currentComponent ? 'background-color:rgb(37, 33, 151)' : ''}
			on:click={() => action(component)}>{getComponentTitle(component)}</button
		>
	{/each}
</nav>

<style>
	.links {
		display: flex;
		flex-direction: column;
		background-color: rgba(67, 72, 229, 0.4);
		padding: 16px 8px;
		height: 100vh;
		overflow-y: scroll;
	}
	.links button {
		background-color: rgba(67, 72, 229, 1);
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
		background-color: rgb(37, 33, 151);
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
