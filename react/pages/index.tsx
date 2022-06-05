import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
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
} from "../src/components";
import Navbar from "../src/containers/Navbar";
import RainbowTypewriter from "../src/containers/RainbowTypewriter";
import styles from "../styles/Home.module.css";

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
  TypingAnimation
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
      <Navbar action={handleSwitch} />
      <div className={styles.mobile}>
        <button>open</button>
      </div>
      <div className={styles.components}>
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
          <RainbowTypewriter />
        )}
      </div>
    </div>
  );
};

export default Home;
