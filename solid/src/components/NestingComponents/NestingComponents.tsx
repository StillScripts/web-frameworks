import { Component } from "solid-js";
import Nested from "./Nested";

const styles: CSSModuleClasses = {
  color: "purple",
  fontFamily: "'Comic Sans MS', cursive",
  fontSize: "2em",
};

const NestingComponents: Component = () => {
  return (
    <>
      <p style={styles}>These styles...</p>
      <Nested />
    </>
  );
};

export default NestingComponents;
