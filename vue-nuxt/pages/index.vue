<script lang="ts">
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
  TypingAnimation,
}

export default {
  data() {
    return {
      currentComponent: Components.HelloWorld,
      componentsEnum: Components,
      // A list of each component based on the enum options above
      componentsList: [
        Components.HelloWorld,
        Components.Styling,
        Components.NestingComponents,
        Components.Props,
        Components.HTML,
        Components.BasicVariables,
        Components.DependentVariables,
        Components.ConditionalRendering,
        Components.ListLooping,
        Components.TypingAnimation,
      ],
      menuOpen: false,
    };
  },
  methods: {
    /**
     * Method which converts an option of the Components enum into
     * a string to display a title for a component.
     * @param {Components} component
     * @returns {string}
     */
    getComponentTitle(component: Components): string {
      switch (component) {
        case Components.HelloWorld:
          return "Hello World";
        case Components.Styling:
          return "Styling";
        case Components.NestingComponents:
          return "Nesting Components";
        case Components.Props:
          return "Passing Props";
        case Components.HTML:
          return "HTML Tags";
        case Components.BasicVariables:
          return "Basic Variables";
        case Components.DependentVariables:
          return "Dependent Variables";
        case Components.ConditionalRendering:
          return "Conditional Rendering";
        case Components.ListLooping:
          return "List Looping";
        case Components.TypingAnimation:
          return "Typing Animation";
      }
    },
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
      <HelloWorld v-if="currentComponent === componentsEnum.HelloWorld" />
      <Styling v-if="currentComponent === componentsEnum.Styling" />
      <NestingComponents
        v-if="currentComponent === componentsEnum.NestingComponents"
      />
      <Props v-if="currentComponent === componentsEnum.Props" />
      <div v-if="currentComponent === componentsEnum.HTML">To be completed</div>
      <BasicVariables
        v-if="currentComponent === componentsEnum.BasicVariables"
      />
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
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

.container {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.links {
  display: flex;
  flex-direction: column;
  background-color: rgba(67, 72, 229, 0.4);
  padding: 16px 8px;
  height: 100vh;
  overflow-y: scroll;
}
.links button {
  background-color: transparent;
   color: rgb(37, 33, 151);
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
