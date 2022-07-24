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
        return { backgroundColor: "rgb(37, 33, 151)", color: "white" };
      return {};
    },
    [currentComponent]
  );

  return (
    <nav className={styles.links} style={menuOpen ? { display: "flex" } : {}}>
      <div className={styles.close} onClick={() => action()}>
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
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
