import { useState } from "react";

const HelloWorld = () => {
  const [name, setName] = useState("world");

  return <p>Hello {name}!</p>;
};

export default HelloWorld;
