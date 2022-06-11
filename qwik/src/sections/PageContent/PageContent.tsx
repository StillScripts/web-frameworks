import { component$, Host, useScopedStyles$ } from "@builder.io/qwik";
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
import { Components, getComponentTitle } from "../../layouts/default/default";
import { NavbarProps } from "../Navbar/Navbar";
import styles from "./PageContent.css?inline";

interface PageContentProps extends NavbarProps {}

const PageContent = component$<PageContentProps>(
  ({ currentComponent, menuOpen, action }) => {
    useScopedStyles$(styles);

    return (
      <Host style={{ width: "100%" }}>
        <div className="components" style={menuOpen ? { display: "none" } : {}}>
          <div className="mobile">
            <div onClick$={() => action()}>=</div>
          </div>
          <h1 className="heading">
            {getComponentTitle(currentComponent)}
          </h1>
          <div>
            {currentComponent === Components.HelloWorld ? (
              <HelloWorld />
            ) : currentComponent === Components.Styling ? (
              <Styling />
            ) : currentComponent === Components.NestingComponents ? (
              <NestingComponents />
            ) : currentComponent === Components.Props ? (
              <Props />
            ) : currentComponent === Components.HTML ? (
              <p>To be completed</p>
            ) : currentComponent === Components.BasicVariables ? (
              <BasicVariables />
            ) : currentComponent === Components.DependentVariables ? (
              <DependentVariables />
            ) : currentComponent === Components.ConditionalRendering ? (
              <ConditionalRendering />
            ) : currentComponent === Components.ListLooping ? (
              <ListLooping />
            ) : currentComponent === Components.TypingAnimation ? (
              <p>To be completed</p>
            ) : (
              <HelloWorld />
            )}
          </div>
        </div>
      </Host>
    );
  }
);

export default PageContent;
