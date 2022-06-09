import { component$, useScopedStyles$ } from "@builder.io/qwik";
import BasicVariables from "../../components/BasicVariables";
import HelloWorld from "../../components/HelloWorld";
import { Components, getComponentTitle } from "../../layouts/default/default";
import { NavbarProps } from "../Navbar/Navbar";
import styles from "./PageContent.css?inline";

interface PageContentProps extends NavbarProps {}

const PageContent = component$<PageContentProps>(
  ({ currentComponent, menuOpen, action }) => {
    useScopedStyles$(styles);
    return (
      <div className="components" style={menuOpen ? { display: "none" } : {}}>
        <div className="mobile">
          <div onClick$={() => action()}>=</div>
        </div>
        <h1 className="heading">{getComponentTitle(currentComponent)} {currentComponent}</h1>
        <div>
          {currentComponent === Components.HelloWorld ? (
            <HelloWorld />
          ) : currentComponent === Components.BasicVariables ? (
            <BasicVariables />
          ) : (
            <div>To be completed...</div>
          )}
        </div>
      </div>
    );
  }
);

export default PageContent;
