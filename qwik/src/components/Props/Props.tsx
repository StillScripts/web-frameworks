import { component$ } from "@builder.io/qwik";
import Child from "./Child";

const Props = component$(() => {
  return (
    <>
      <Child />
      <Child answer={42} />
    </>
  );
});

export default Props;
