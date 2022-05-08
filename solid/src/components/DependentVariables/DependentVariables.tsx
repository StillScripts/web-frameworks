import { Component, createEffect, createSignal } from "solid-js";

const DependentVariables: Component = () => {
  const [count, setCount] = createSignal(1);
  const [doubled, setDoubled] = createSignal(count() * 2);
  const [quadrupled, setQuadrupled] = createSignal(doubled() * 2);

  createEffect(() => {
    setDoubled(count() * 2);
    setQuadrupled(doubled() * 2);
  });

  function handleClick() {
    setCount(count() + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Count: {count}</button>
      <p>
        {count} * 2 = {doubled}
      </p>
      <p>
        {doubled} * 2 = {quadrupled}
      </p>
    </>
  );
};

export default DependentVariables;
