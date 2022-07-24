import { Components, getComponentTitle } from "../../../pages";
import {
  BasicVariables,
  ConditionalRendering,
  DependentVariables,
  HelloWorld,
  HTML,
  ListLooping,
  NestingComponents,
  Props,
  Styling,
} from "../../components";
import RainbowTypewriter from "../../components/Custom/Examples/RainbowTypewriter";
import { NavbarProps } from "../Navbar/Navbar";
import styles from "./PageContent.module.css";

interface PageContentProps extends NavbarProps {}

const PageContent = ({
  currentComponent,
  menuOpen,
  action,
}: PageContentProps) => {
  return (
    <div
      className={styles.components}
      style={menuOpen ? { display: "none" } : {}}
    >
      <div className={styles.mobile}>
        <div onClick={() => action()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            width="32px"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <h1 className={styles.heading}>{getComponentTitle(currentComponent)}</h1>
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
          <HTML />
        ) : currentComponent === Components.BasicVariables ? (
          <BasicVariables />
        ) : currentComponent === Components.DependentVariables ? (
          <DependentVariables />
        ) : currentComponent === Components.ConditionalRendering ? (
          <ConditionalRendering />
        ) : currentComponent === Components.ListLooping ? (
          <ListLooping />
        ) : (
          <RainbowTypewriter />
        )}
      </div>
    </div>
  );
};

export default PageContent;
