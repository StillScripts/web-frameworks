import { component$, useStore } from "@builder.io/qwik";

const HelloWorld = component$(() => {
  const store = useStore({ name: "world" });
  return <h1>Hello {store.name}!</h1>;
});

export default HelloWorld;
