import { Components } from "../../../pages";
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
import styles from "./PageContent.module.css";

interface PageContentProps {
  currentComponent: Components;
  menuOpen: boolean;
  setMenuOpen: () => void;
}

const PageContent = ({
  currentComponent,
  menuOpen,
  setMenuOpen,
}: PageContentProps) => {
  return (
    <div
      className={styles.components}
      style={menuOpen ? { display: "none" } : {}}
    >
      <div className={styles.mobile}>
        <div onClick={setMenuOpen}>=</div>
      </div>
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
