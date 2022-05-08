import { Component, For } from "solid-js";

const cats = [
  { id: "J---aiyznGQ", name: "Keyboard Cat" },
  { id: "z_AbfPXTKms", name: "Maru" },
  { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
];

const ListLooping: Component = () => {
  return (
    <>
      <h1>The Famous Cats of YouTube</h1>
      <ul>
        <For each={cats}>
          {(cat, i) => (
            <li>
              <a
                target="_blank"
                href={`https://www.youtube.com/watch?v=${cat.id}`}
              >
                {i() + 1}: {cat.name}
              </a>
            </li>
          )}
        </For>
      </ul>
    </>
  );
};

export default ListLooping;
