import { useState } from "react";

const HelloWorld: React.FC = () => {
  const [name, setName] = useState("world");

  return <p>Hello {name}!</p>;
};

export default HelloWorld;
