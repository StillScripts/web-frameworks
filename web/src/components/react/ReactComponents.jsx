import React from "react";
import BasicVariables from "./BasicVariables";
import ConditionalRendering from "./ConditionalRendering";
import DependentVariables from "./DependentVariables";
import HelloWorld from "./HelloWorld";
import HTML from "./HTML";
import ListLooping from "./ListLooping";
import Props from "./Props";
import Styling from "./Styling";
import { Components } from "../../utils/components";

const ReactComponents = ({ currentComponent }) => {
  return (
    <>
      {currentComponent === Components.HelloWorld ? (
        <HelloWorld />
      ) : currentComponent === Components.Styling ? (
        <Styling />
      ) : currentComponent === Components.Props ? (
        <Props answer="42" />
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
    </>
  );
};

export default ReactComponents;
