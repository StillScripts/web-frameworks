import { Components } from "../../../pages";
import styles from "./Navbar.module.css";

interface NavbarProps {
  menuOpen: boolean;
  action: (option: Components) => void;
}

const Navbar = ({ menuOpen, action }: NavbarProps) => {
  return (
    <nav className={styles.links} style={menuOpen ? { display: "flex" } : {}}>
      <button onClick={() => action(Components.HelloWorld)}>Hello World</button>
      <button onClick={() => action(Components.Styling)}>Styling</button>
      <button onClick={() => action(Components.NestingComponents)}>
        Nesting Components
      </button>
      <button onClick={() => action(Components.Props)}>Props</button>
      <button onClick={() => action(Components.HTML)}>HTML Tags</button>
      <button onClick={() => action(Components.BasicVariables)}>
        Basic Variables
      </button>
      <button onClick={() => action(Components.DependentVariables)}>
        Dependent Variables
      </button>
      <button onClick={() => action(Components.ConditionalRendering)}>
        Conditional Rendering
      </button>
      <button onClick={() => action(Components.ListLooping)}>
        List Looping
      </button>
      <button onClick={() => action(Components.TypingAnimation)}>
        Rainbow Typewriter
      </button>
    </nav>
  );
};

export default Navbar;
