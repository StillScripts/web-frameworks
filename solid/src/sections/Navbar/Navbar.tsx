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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <For each={componentsList}>
        {(component) => (
          <button
            type="button"
            style={
              component === currentComponent()
                ? { backgroundColor: "rgb(37, 33, 151)", color: "white" }
                : {}
            }
            onClick={() => action(component)}
          >
            {getComponentTitle(component)}
          </button>
        )}
      </For>
    </nav>
  );
};

export default Navbar;
