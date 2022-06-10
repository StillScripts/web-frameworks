import { Component, createSignal } from "solid-js";

const HelloWorld: Component = () => {
  const [name, setName] = createSignal("world");

  return <p>Hello {name}!</p>;
};

export default HelloWorld;
