import { component$, useStore } from "@builder.io/qwik";

const ListLooping = component$(() => {
  const { cats } = useStore({
    cats: [
      { id: "J---aiyznGQ", name: "Keyboard Cat" },
      { id: "z_AbfPXTKms", name: "Maru" },
      { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    ],
  });
  return (
    <>
      <h1>The Famous Cats of YouTube</h1>
      <ul>
        {cats.map(({ id, name }, i) => (
          <li key={id}>
            <a target="_blank" href={`https://www.youtube.com/watch?v=${id}`}>
              {i + 1}: {name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
});

export default ListLooping;
