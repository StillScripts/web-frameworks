import { Accessor, Component, For } from "solid-js";
import { Components, componentsList, getComponentTitle } from "../../App";
import styles from "./Navbar.module.css";

export interface NavbarProps {
  currentComponent: Accessor<Components>;
  menuOpen: Accessor<boolean>;
  action: (option?: Components) => void;
}

const Navbar: Component<NavbarProps> = ({
  currentComponent,
  menuOpen,
  action,
}) => {
  return (
    <nav className={styles.links} style={menuOpen() ? { display: "flex" } : {}}>
      <div className={styles.close} onClick={() => action()}>
        <div>x</div>
      </div>
      <For each={componentsList}>
        {(component) => (
          <button
            type="button"
            style={
              component === currentComponent()
                ? { backgroundColor: "rgb(56, 78, 189)" }
                : {}
            }
            onClick={() => action(component)}
          >
            {getComponentTitle(component)}
            {component === currentComponent()
              ? ` backgroundColor: "rgb(56, 78, 189)" `
              : ``}
          </button>
        )}
      </For>
    </nav>
  );
};

export default Navbar;
