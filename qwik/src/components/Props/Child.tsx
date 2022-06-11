import { component$ } from "@builder.io/qwik";

interface NestedProps {
  answer?: number | string;
}

const Child = component$<NestedProps>(({ answer = "a mystery" }) => {
  return <p>The answer is {answer}</p>;
});

export default Child;
