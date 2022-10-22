/** @jsxImportSource solid-js */
import { Match, Switch } from "solid-js";
import BasicVariables from "./BasicVariables";
import ConditionalRendering from "./ConditionalRendering";
import DependentVariables from "./DependentVariables";
import HelloWorld from "./HelloWorld";
import ListLooping from "./ListLooping";
import Styling from "./Styling";
import { Components } from "../../utils/components";

const SolidComponents = ({ currentComponent }) => {
  return (
    <Switch fallback={<p>Switch is out of range</p>}>
      <Match when={currentComponent === Components.HelloWorld}>
        <HelloWorld />
      </Match>
      <Match when={currentComponent === Components.Styling}>
        <Styling />
      </Match>
      <Match when={currentComponent === Components.Props}>
        <p>To be determined</p>
      </Match>
      <Match when={currentComponent === Components.HTML}>
        <p>To be determined</p>
      </Match>
      <Match when={currentComponent === Components.BasicVariables}>
        <BasicVariables />
      </Match>
      <Match when={currentComponent === Components.DependentVariables}>
        <DependentVariables />
      </Match>
      <Match when={currentComponent === Components.ConditionalRendering}>
        <ConditionalRendering />
      </Match>
      <Match when={currentComponent === Components.ListLooping}>
        <ListLooping />
      </Match>
    </Switch>
  );
};

export default SolidComponents;
