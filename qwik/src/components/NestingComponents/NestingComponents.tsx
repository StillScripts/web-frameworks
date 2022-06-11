import { component$, useScopedStyles$ } from "@builder.io/qwik";
import Nested from "./Nested";
import styles from "./NestingComponents.css?inline";

const NestingComponents = component$(() => {
	useScopedStyles$(styles);
	
  return (
    <>
      <p class="text">These styles...</p>
			<Nested/>
    </>
  );
});

export default NestingComponents;
