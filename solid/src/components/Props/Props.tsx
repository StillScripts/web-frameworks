import { Component } from "solid-js";
import Nested from "./Nested";

const Props: Component = () => (
  <>
    <Nested answer={42} />
    <Nested />
  </>
);

export default Props;
