import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import BasicVariables from "../src/components/BasicVariables";
import ConditionalRendering from "../src/components/ConditionalRendering";
import DependentVariables from "../src/components/DependentVariables";
import HelloWorld from "../src/components/HelloWorld";
import HTML from "../src/components/HTML";
import ListLooping from "../src/components/ListLooping";
import NestingComponents from "../src/components/NestingComponents";
import Props from "../src/components/Props";
import Styling from "../src/components/Styling";
import styles from "../styles/Home.module.css";

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

const Home: NextPage = () => {
  const [currentComponent, setCurrentComponent] = useState<Components>(
    Components.HelloWorld
  );

  const handleSwitch = (newComponent: Components) => {
    setCurrentComponent(newComponent);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>React Basic Framework Concepts</title>
        <meta name="description" content="A list of basic React components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        {currentComponent === Components.HelloWorld ? (
          <HelloWorld />
        ) : currentComponent === Components.Styling ? (
          <Styling />
        ) : currentComponent === Components.NestingComponents ? (
          <NestingComponents />
        ) : currentComponent === Components.HTML ? (
          <HTML />
        ) : currentComponent === Components.BasicVariables ? (
          <BasicVariables />
        ) : currentComponent === Components.DependentVariables ? (
          <DependentVariables />
        ) : currentComponent === Components.Props ? (
          <Props />
        ) : currentComponent === Components.ConditionalRendering ? (
          <ConditionalRendering />
        ) : currentComponent === Components.ListLooping ? (
          <ListLooping />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
