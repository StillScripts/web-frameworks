import { component$, useStore } from "@builder.io/qwik";

const HelloWorld = component$(() => {
  const store = useStore({ name: "world" });
  return <p>Hello {store.name}!</p>;
});

export default HelloWorld;

// const App = component$(() => {
//   const store = useStore({ a: 0, b: 0, c: 0 });

//   return (
//     <>
//       <button onClick$={() => store.a++}>a++</button>
//       <button onClick$={() => store.b++}>b++</button>
//       <button onClick$={() => store.c++}>c++</button>
//       {JSON.stringify(store)}

//       <Child count={store.a} />
//       <Child count={store.b} />
//     </>
//   );
// });

// export default App;

