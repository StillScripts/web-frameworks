import { Component, createSignal } from "solid-js";

const HelloWorld: Component = () => {
  const [name, setName] = createSignal("world");

  return <h1>Hello {name}!</h1>;
};

export default HelloWorld;
