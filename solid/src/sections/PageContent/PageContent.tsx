import { Component, Match, Switch } from "solid-js";
import styles from "./PageContent.module.css";
import { Components, getComponentTitle } from "../../App";
import {
  BasicVariables,
  ConditionalRendering,
  DependentVariables,
  HelloWorld,
  ListLooping,
  NestingComponents,
  Props,
  Styling,
} from "../../components";
import { NavbarProps } from "../Navbar/Navbar";

interface PageContentProps extends NavbarProps {}

const PageContent: Component<PageContentProps> = ({
  currentComponent,
  menuOpen,
  action,
}) => {
  return (
    <div
      className={styles.components}
      style={menuOpen() ? { display: "none" } : {}}
    >
      <div className={styles.mobile}>
        <div onClick={() => action()}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            width="32px"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <h1 className={styles.heading}>
        {getComponentTitle(currentComponent())}
      </h1>
      <div>
        <Switch fallback={<p>Switch is out of range</p>}>
          <Match when={currentComponent() === Components.HelloWorld}>
            <HelloWorld />
          </Match>
          <Match when={currentComponent() === Components.Styling}>
            <Styling />
          </Match>
          <Match when={currentComponent() === Components.NestingComponents}>
            <NestingComponents />
          </Match>
          <Match when={currentComponent() === Components.Props}>
            <Props />
          </Match>
          <Match when={currentComponent() === Components.HTML}>
            <p>To be determined</p>
          </Match>
          <Match when={currentComponent() === Components.BasicVariables}>
            <BasicVariables />
          </Match>
          <Match when={currentComponent() === Components.DependentVariables}>
            <DependentVariables />
          </Match>
          <Match when={currentComponent() === Components.ConditionalRendering}>
            <ConditionalRendering />
          </Match>
          <Match when={currentComponent() === Components.ListLooping}>
            <ListLooping />
          </Match>
          {/* <Match when={currentComponent() === Components.RainbowTypewriter}>
            <RainbowTypewriter />
          </Match>
          <Match when={currentComponent() === Components.SentenceTypewriter}>
            <SentenceTypewriter />
          </Match> */}
        </Switch>
      </div>
    </div>
  );
};

export default PageContent;
