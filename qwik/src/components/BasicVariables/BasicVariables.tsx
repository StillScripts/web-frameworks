import { component$, useStore } from "@builder.io/qwik";

const BasicVariables = component$(() => {
  const store = useStore({ count: 0 });

  function handleClick() {
    store.count++;
  }

  return (
    <button onClick$={handleClick}>
      Clicked {store.count} {store.count === 1 ? "time" : "times"}
    </button>
  );
});

export default BasicVariables;
