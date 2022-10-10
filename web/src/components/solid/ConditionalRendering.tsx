/** @jsxImportSource solid-js */
import { Component, createSignal, Match, Switch } from "solid-js";

const ConditionalRendering: Component = () => {
  const [x] = createSignal(Math.floor(Math.random() * 15));

  return (
    <Switch fallback={<p>{x()} is between 5 and 10</p>}>
      <Match when={x() > 10}>
        <p>{x()} is greater than 10</p>
      </Match>
      <Match when={5 > x()}>
        <p>{x()} is less than 5</p>
      </Match>
    </Switch>
  );
};

export default ConditionalRendering;
