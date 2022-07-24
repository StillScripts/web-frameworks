import Link from "next/link";

const cats = [
  { id: "J---aiyznGQ", name: "Keyboard Cat" },
  { id: "z_AbfPXTKms", name: "Maru" },
  { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
];

const ListLooping: React.FC = () => {
  return (
    <>
      <h1>The Famous Cats of YouTube</h1>
      <ul>
        {cats.map(({ id, name }, i) => (
          <li key={id}>
            <Link href={`https://www.youtube.com/watch?v=${id}`}>
              <a target="_blank">
                {i + 1}: {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListLooping;
