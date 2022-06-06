import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Navbar, PageContent } from "../src/sections";
import styles from "../styles/HomePage.module.css";

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

export const getComponentTitle = (component: Components) => {
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
      return "HTML";
    case Components.BasicVariables:
      return "Basic Variables";
    case Components.DependentVariables:
      return "Dependent Variables";
    case Components.ConditionalRendering:
      return "Conditional Rendering";
    case Components.ListLooping:
      return "Dependent Variables";
    case Components.TypingAnimation:
      return "Typing Animation";
  }
};

const Home: NextPage = () => {
  const [currentComponent, setCurrentComponent] = useState<Components>(
    Components.HelloWorld
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSwitch = (newComponent?: Components) => {
    typeof newComponent === "number" && setCurrentComponent(newComponent);
    setMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>React Basic Framework Concepts</title>
        <meta name="description" content="A list of basic React components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentComponent={currentComponent} menuOpen={menuOpen} action={handleSwitch} />
      <PageContent
        currentComponent={currentComponent}
        menuOpen={menuOpen}
        setMenuOpen={() => setMenuOpen(!menuOpen)}
      />
    </div>
  );
};

export default Home;
