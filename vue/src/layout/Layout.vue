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
    handleSwitch(newComponent: Components) {
      this.currentComponent = newComponent;
      this.menuOpen = false;
    },
    close() {
      this.menuOpen = false;
    },
    open() {
      this.menuOpen = true;
    },
  },
  head() {
    return {
      title: "Vue Basic Framework Concepts",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "A list of basic Vue components",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- <Layout> -->
  <div class="container">
    <nav class="links" v-bind:style="menuOpen ? 'display: flex;' : ''">
      <div class="close">
        <div @click="close">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <button
        v-for="component of componentsList"
        :key="component"
        @click="() => handleSwitch(component)"
        v-bind:style="
          component === currentComponent
            ? 'background-color:rgb(37, 33, 151); color:white;'
            : ''
        "
      >
        {{ getComponentTitle(component) }}
      </button>
    </nav>
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
      <div>component</div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.links {
  display: flex;
  flex-direction: column;
  background-color: #b4b6f5;
  padding: 16px 8px;
  height: 100vh;
  overflow-y: scroll;
}
.links button {
  background-color: transparent;
  color: rgb(37, 33, 151);
  font-size: 14px;
  font-weight: 600;
  margin: 12px;
  padding: 12px 6px;
  border-radius: 12px;
  text-transform: uppercase;
  list-style: none;
  cursor: pointer;

  border: 2px solid rgb(37, 33, 151);
}

.links button:hover {
  background-color: rgb(37, 33, 151);
  color: rgba(255, 255, 255, 0.8);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
}

.links button:focus,
button:focus-visible {
  outline: none;
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
  /*color: rgb(0, 0, 92);*/
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
