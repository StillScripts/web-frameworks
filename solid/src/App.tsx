import { Component, createSignal, Match, Switch } from "solid-js";

import styles from "./App.module.css";
import {
  BasicVariables,
  ConditionalRendering,
  DependentVariables,
  HelloWorld,
  ListLooping,
  NestingComponents,
  Props,
  Styling,
} from "./components";

enum Components {
  HelloWorld,
  Styling,
  NestingComponents,
  HTML,
  BasicVariables,
  DependentVariables,
  Props,
  ConditionalRendering,
  ListLooping,
}

const App: Component = () => {
  const [currentComponent, setCurrentComponent] = createSignal<Components>(
    Components.HelloWorld
  );

  const handleSwitch = (newComponent: Components) => {
    setCurrentComponent(newComponent);
  };

  return (
    <div class={styles.container}>
      <nav className={styles.links}>
        <button onClick={() => handleSwitch(Components.HelloWorld)}>
          Hello World
        </button>
        <button onClick={() => handleSwitch(Components.Styling)}>
          Styling
        </button>
        <button onClick={() => handleSwitch(Components.NestingComponents)}>
          Nesting Components
        </button>
        <button onClick={() => handleSwitch(Components.HTML)}>HTML Tags</button>
        <button onClick={() => handleSwitch(Components.BasicVariables)}>
          Basic Variables
        </button>
        <button onClick={() => handleSwitch(Components.DependentVariables)}>
          Dependent Variables
        </button>
        <button onClick={() => handleSwitch(Components.Props)}>Props</button>
        <button onClick={() => handleSwitch(Components.ConditionalRendering)}>
          Conditional Rendering
        </button>
        <button onClick={() => handleSwitch(Components.ListLooping)}>
          List Looping
        </button>
      </nav>
      <div className={styles.components}>
        <Switch fallback={<p>Switch is out of range</p>}>
          <Match when={currentComponent() === Components.HelloWorld}>
            <HelloWorld />
          </Match>
          <Match when={currentComponent() === Components.Styling}>
            <Styling />
          </Match>
          <Match when={currentComponent() === Components.NestingComponents}>
            <NestingComponents />
          </Match>
          <Match when={currentComponent() === Components.HTML}>
            <p>To be determined</p>
          </Match>
          <Match when={currentComponent() === Components.BasicVariables}>
            <BasicVariables />
          </Match>
          <Match when={currentComponent() === Components.Props}>
            <Props />
          </Match>
          <Match when={currentComponent() === Components.DependentVariables}>
            <DependentVariables />
          </Match>
          <Match when={currentComponent() === Components.ConditionalRendering}>
            <ConditionalRendering />
          </Match>
          <Match when={currentComponent() === Components.ListLooping}>
            <ListLooping />
          </Match>
        </Switch>
      </div>
    </div>
  );
};

export default App;
