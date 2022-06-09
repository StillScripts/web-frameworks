import { component$, useStore } from "@builder.io/qwik";

const BasicVariables = component$(() => {
  const store = useStore({ count: 0 });

  return (
    <button onClick$={()=>store.count++}>
      Clicked {store.count} {store.count === 1 ? "time" : "times"}
    </button>
  );
});

export default BasicVariables;
