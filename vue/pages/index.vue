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
  Components.ListLooping,
  Components.TypingAnimation,
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
      return "Hello World";
    case Components.Styling:
      return "Styling";
    case Components.NestingComponents:
      return "Nesting Components";
    case Components.Props:
      return "Props";
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
};

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
          return "Props";
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
      console.log(this.currentComponent);
      this.menuOpen = false;
    },
    close() {
      this.menuOpen = false;
    },
    open() {
      this.menuOpen = true;
    }
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
        <div @click="close">x</div>
      </div>
      <button
        v-for="component of componentsList"
        :key="component"
        @click="() => handleSwitch(component)"
        v-bind:style="
          component === currentComponent
            ? 'background-color:rgb(56, 78, 189)'
            : ''
        "
      >
        {{ getComponentTitle(component) }}
      </button>
    </nav>
    <div class="components" v-bind:style="menuOpen ? 'display:none;' : ''">
      <div class="mobile">
        <div
          @click="open"
        >
          =
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
  height: 100%;
}

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
