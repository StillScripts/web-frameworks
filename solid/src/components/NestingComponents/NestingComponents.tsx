import { Component, JSX } from "solid-js";
import Nested from "./Nested";

const styles: JSX.CSSProperties = {
  "color": "purple",
  "font-family": "'Comic Sans MS', cursive",
  "font-size": "2em",
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
