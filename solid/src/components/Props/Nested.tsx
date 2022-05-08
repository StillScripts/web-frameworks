import { Component } from "solid-js";

interface NestedProps {
  answer?: number | string;
}

const Nested: Component<NestedProps> = ({ answer = "a mystery" }) => (
  <p>The answer is {answer}</p>
);

export default Nested;
