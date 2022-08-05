import { useState } from "react";
import Layout from "../src/layout/Layout";
import {
  BasicVariables,
  ConditionalRendering,
  DependentVariables,
  HelloWorld,
  HTML,
  ListLooping,
  NestingComponents,
  Props,
  Styling,
} from "./components";

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
};

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState<Components>(
    Components.HelloWorld
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSwitch = (newComponent?: Components) => {
    typeof newComponent === "number" && setCurrentComponent(newComponent);
    setMenuOpen(false);
  };

  return (
    <Layout
      currentComponent={currentComponent}
      action={() => setMenuOpen(false)}
      handleSwitch={handleSwitch}
      menuOpen={menuOpen}
    >
      <div>
        {currentComponent === Components.HelloWorld ? (
          <HelloWorld />
        ) : currentComponent === Components.Styling ? (
          <Styling />
        ) : currentComponent === Components.NestingComponents ? (
          <NestingComponents />
        ) : currentComponent === Components.Props ? (
          <Props />
        ) : currentComponent === Components.HTML ? (
          <HTML />
        ) : currentComponent === Components.BasicVariables ? (
          <BasicVariables />
        ) : currentComponent === Components.DependentVariables ? (
          <DependentVariables />
        ) : currentComponent === Components.ConditionalRendering ? (
          <ConditionalRendering />
        ) : currentComponent === Components.ListLooping ? (
          <ListLooping />
        ) : (
          "empty..."
        )}
      </div>
    </Layout>
  );
};

export default Home;
