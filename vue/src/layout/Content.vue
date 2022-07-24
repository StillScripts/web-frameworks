<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Styling from "./components/Styling.vue";
import Props from "./components/Props.vue";
import DependentVariables from "./components/DependentVariables.vue";
import ConditionalRendering from "./components/ConditionalRendering.vue";
import ListLooping from "./components/ListLooping.vue";
import NestingComponents from "./components/NestingComponents.vue";
import BasicVariables from "./components/BasicVariables.vue";
import {
  Components,
  componentsList,
  getComponentTitle,
} from "../utils/components";

export default {
  components: {
    HelloWorld,
    ListLooping,
    NestingComponents,
    BasicVariables,
    Styling,
    DependentVariables,
    ConditionalRendering,
    Props,
  },
  data() {
    return {
      currentComponent: Components.HelloWorld,
      componentsEnum: Components,
      // A list of each component based on the enum options above
      componentsList,
      menuOpen: false,
    };
  },
  methods: {
    getComponentTitle,
    open() {
      this.menuOpen = true;
    },
  },
};
</script>

<template>
  <div class="components" v-bind:style="menuOpen ? 'display:none;' : ''">
    <div class="mobile">
      <div @click="open">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          width="32px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
    <h1 class="heading">{{ getComponentTitle(currentComponent) }}</h1>

    <HelloWorld v-if="currentComponent === componentsEnum.HelloWorld" />
    <Styling v-if="currentComponent === componentsEnum.Styling" />
    <NestingComponents
      v-if="currentComponent === componentsEnum.NestingComponents"
    />
    <Props v-if="currentComponent === componentsEnum.Props" />
    <div v-if="currentComponent === componentsEnum.HTML">To be completed</div>
    <BasicVariables v-if="currentComponent === componentsEnum.BasicVariables" />
    <DependentVariables
      v-if="currentComponent === componentsEnum.DependentVariables"
    />
    <ConditionalRendering
      v-if="currentComponent === componentsEnum.ConditionalRendering"
    />
    <ListLooping v-if="currentComponent === componentsEnum.ListLooping" />
    <div v-if="currentComponent === componentsEnum.TypingAnimation">
      To be completed
    </div>
  </div>
</template>

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
