/** @jsxImportSource react */
import BasicVariables from "./BasicVariables";
import ConditionalRendering from "./ConditionalRendering";
import DependentVariables from "./DependentVariables";
import HelloWorld from "./HelloWorld";
import HTML from "./HTML";
import ListLooping from "./ListLooping";
import Styling from "./Styling";
import { Components } from "../../utils/components";

const ReactComponents = ({ currentComponent }) => {
  return (
    <div>
      {currentComponent === Components.HelloWorld ? (
        <HelloWorld />
      ) : currentComponent === Components.Styling ? (
        <Styling />
      ) : currentComponent === Components.HTML ? (
        <HTML />
      ) : currentComponent === Components.BasicVariables ? (
        <BasicVariables />
      ) : currentComponent === Components.DependentVariables ? (
        <DependentVariables />
      ) : currentComponent === Components.ConditionalRendering ? (
        <ConditionalRendering />
      ) : (
        <ListLooping />
      )}
    </div>
  );
};

export default ReactComponents;
