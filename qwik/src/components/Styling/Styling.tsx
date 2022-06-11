import { component$, useScopedStyles$ } from "@builder.io/qwik";
import styles from "./Styling.css?inline";

const Styling = component$(() => {
  useScopedStyles$(styles);

  return <p class="styled">Styled!</p>;
});

export default Styling;
