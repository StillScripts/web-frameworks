<script lang="ts">
import HelloWorld from "./HelloWorld.vue"
import Styling from "./Styling.vue"
import Props from "./Props.vue"
import DependentVariables from "./DependentVariables.vue"
import ConditionalRendering from "./ConditionalRendering.vue"
import ListLooping from "./ListLooping.vue"
import BasicVariables from "./BasicVariables.vue"
import { Components } from "../../utils/components"

export default {
  components: {
    HelloWorld,
    ListLooping,
    BasicVariables,
    Styling,
    DependentVariables,
    ConditionalRendering,
    Props,
  },
  data() {
    return {
      Components: Components,
    }
  },
  props: {
    currentComponent: Components,
  },
}
</script>
<template>
  <div>
    <HelloWorld v-if="currentComponent === Components.HelloWorld" />
    <Styling v-if="currentComponent === Components.Styling" />
    <Props v-if="currentComponent === Components.Props" />
    <div v-if="currentComponent === Components.HTML">To be completed</div>
    <BasicVariables v-if="currentComponent === Components.BasicVariables" />
    <DependentVariables
      v-if="currentComponent === Components.DependentVariables"
    />
    <ConditionalRendering
      v-if="currentComponent === Components.ConditionalRendering"
    />
    <ListLooping v-if="currentComponent === Components.ListLooping" />
  </div>
</template>
