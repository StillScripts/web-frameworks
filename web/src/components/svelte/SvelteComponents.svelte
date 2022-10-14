<script lang="ts">
  import { Components } from "../../utils/components";
  import BasicVariables from "./BasicVariables.svelte";
  import ConditionalRendering from "./ConditionalRendering.svelte";
  import DependentVariables from "./DependentVariables.svelte";
  import HelloWorld from "./HelloWorld.svelte";
  import HTML from "./HTML.svelte";
  import ListLooping from "./ListLooping.svelte";
  import Props from "./Props.svelte";
  import Styling from "./Styling.svelte";

  export let currentComponent: Components = Components.HelloWorld;
</script>

<div>
  {#if currentComponent === Components.HelloWorld}
    <HelloWorld />
  {:else if currentComponent === Components.Styling}
    <Styling />
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
