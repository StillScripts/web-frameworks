/** @jsxImportSource react */
import { useState } from "react";

const BasicVariables = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} {count === 1 ? "time" : "times"}
    </button>
  );
};

export default BasicVariables;
