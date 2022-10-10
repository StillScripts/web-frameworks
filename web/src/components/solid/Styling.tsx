/** @jsxImportSource solid-js */
import type { Component, JSX } from "solid-js";

const styles: JSX.CSSProperties = {
  color: "purple",
  "font-family": "'Comic Sans MS', cursive",
  "font-size": "2em",
};

const Styling: Component = () => <p style={styles}>Styled!</p>;

export default Styling;
