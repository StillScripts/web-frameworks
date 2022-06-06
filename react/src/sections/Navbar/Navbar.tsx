import { CSSProperties, useCallback } from "react";
import { Components, componentsList, getComponentTitle } from "../../../pages";
import styles from "./Navbar.module.css";

export interface NavbarProps {
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
      {componentsList.map((component) => (
        <button
          key={`link-${component}`}
          type="button"
          style={checkActiveBackground(component)}
          onClick={() => action(component)}
        >
          {getComponentTitle(component)}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
