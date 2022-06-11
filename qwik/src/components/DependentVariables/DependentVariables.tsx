import { component$, useStore, useWatch$ } from "@builder.io/qwik";

const DependentVariables = component$(() => {
  const store = useStore({ count: 1, doubled: 2, quadrupled: 4 });

  useWatch$((track) => {
    const count = track(store, "count");
    store.doubled = 2 * count;
    store.quadrupled = 4 * count;
  });

  return (
    <>
      <button onClick$={() => store.count++}>Count: {store.count}</button>
      <p>
        {store.count} * 2 = {store.doubled}
      </p>
      <p>
        {store.doubled} * 2 = {store.quadrupled}
      </p>
    </>
  );
});

export default DependentVariables;
