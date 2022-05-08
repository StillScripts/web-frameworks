import { Component, createSignal } from "solid-js";

const BasicVariables: Component = () => {
  const [count, setCount] = createSignal(0);

  function handleClick() {
    setCount(count() + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {count()} {count() === 1 ? "time" : "times"}
    </button>
  );
};

export default BasicVariables;
