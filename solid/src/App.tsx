import { Component, createSignal } from "solid-js";
import styles from "./App.module.css";
import { Navbar, PageContent } from "./sections";

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

const App: Component = () => {
  const [currentComponent, setCurrentComponent] = createSignal<Components>(
    Components.HelloWorld
  );
  const [menuOpen, setMenuOpen] = createSignal(false);

  const handleSwitch = (newComponent?: Components) => {
    typeof newComponent === "number" && setCurrentComponent(newComponent);
    setMenuOpen(false);
  };

  return (
    <div class={styles.container}>
      <Navbar
        currentComponent={currentComponent}
        menuOpen={menuOpen}
        action={handleSwitch}
      />
      <PageContent
        currentComponent={currentComponent}
        menuOpen={menuOpen}
        action={() => setMenuOpen(!menuOpen())}
      />
    </div>
  );
};

export default App;
