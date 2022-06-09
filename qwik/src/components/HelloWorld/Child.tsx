import { component$ } from "@builder.io/qwik";

const Child = component$((props: { count: number }) => {
  return <span>{props.count}</span>;
});

export default Child;