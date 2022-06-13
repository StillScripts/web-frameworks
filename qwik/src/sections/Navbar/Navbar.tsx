import { component$, Host, useScopedStyles$ } from "@builder.io/qwik";
import { usePage } from "@builder.io/qwik-city";
import { Components, componentsList, getComponentTitle } from "../../layouts/default/default";
import styles from "./Navbar.css?inline";

export interface NavbarProps {
  currentComponent: Components;
  menuOpen: boolean;
  action: (option?: Components) => void;
}

const Navbar = component$<NavbarProps>(
  (props) => {
    const { currentComponent, menuOpen, action } = props;

    useScopedStyles$(styles);
    const page = usePage();
    //const navIndex = usePageIndex();
    if (!page) {
      return null;
    }

    return (
      <Host class="navbar">
        <nav class="links" style={menuOpen ? { display: "flex" } : {}}>
          <div class="close" onClick$={() => action()}>
            <div>x</div>
          </div>
          {componentsList.map((component) => (
            <button
              type="button"
              style={
                component === currentComponent
                  ? { backgroundColor: "rgb(37, 33, 151)", color: "white" }
                  : {}
              }
              onClick$={() => action(component)}
            >
              {getComponentTitle(component)}
            </button>
          ))}
        </nav>
      </Host>
    );
  },
  { tagName: "aside" }
);

export default Navbar;
