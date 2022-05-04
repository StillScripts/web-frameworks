import { useState } from "react";

const HelloWorld: React.FC = () => {
  const [name, setName] = useState("world");

  return <h1>Hello {name}!</h1>;
};

export default HelloWorld;
