import { CSSProperties, useCallback } from "react";
import { Components } from "../../../pages";
import styles from "./Navbar.module.css";

interface NavbarProps {
  currentComponent: Components;
  menuOpen: boolean;
  action: (option?: Components) => void;
}

const Navbar = ({ currentComponent, menuOpen, action }: NavbarProps) => {
  const checkActiveBackground = useCallback(
    (component: Components): CSSProperties => {
      if (currentComponent === component)
        return { backgroundColor: "rgb(56, 78, 189)" };
      return {};
    },
    [currentComponent]
  );

  return (
    <nav className={styles.links} style={menuOpen ? { display: "flex" } : {}}>
      <div className={styles.close} onClick={() => action()}>
        <div>x</div>
      </div>
      <button
        type="button"
        style={checkActiveBackground(Components.HelloWorld)}
        onClick={() => action(Components.HelloWorld)}
      >
        Hello World
      </button>
      <button
        type="button"
        style={checkActiveBackground(Components.Styling)}
        onClick={() => action(Components.Styling)}
      >
        Styling
      </button>
      <button
        type="button"
        style={checkActiveBackground(Components.NestingComponents)}
        onClick={() => action(Components.NestingComponents)}
      >
        Nesting Components
      </button>
      <button
        type="button"
        style={checkActiveBackground(Components.Props)}
        onClick={() => action(Components.Props)}
      >
        Props
      </button>
      <button
        type="button"
        style={checkActiveBackground(Components.HTML)}
        onClick={() => action(Components.HTML)}
      >
        HTML Tags
      </button>
      <button
        type="button"
        style={checkActiveBackground(Components.BasicVariables)}
        onClick={() => action(Components.BasicVariables)}
      >
        Basic Variables
      </button>
      <button
        type="button"
        style={checkActiveBackground(Components.DependentVariables)}
        onClick={() => action(Components.DependentVariables)}
      >
        Dependent Variables
      </button>
      <button
        type="button"
        style={checkActiveBackground(Components.ConditionalRendering)}
        onClick={() => action(Components.ConditionalRendering)}
      >
        Conditional Rendering
      </button>
      <button
        type="button"
        style={checkActiveBackground(Components.ListLooping)}
        onClick={() => action(Components.ListLooping)}
      >
        List Looping
      </button>
      <button
        type="button"
        style={checkActiveBackground(Components.TypingAnimation)}
        onClick={() => action(Components.TypingAnimation)}
      >
        Typing Animation
      </button>
    </nav>
  );
};

export default Navbar;
