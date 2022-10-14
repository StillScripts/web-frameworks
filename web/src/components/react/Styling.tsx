import type { CSSProperties } from "react";

const styles: CSSProperties = {
  color: "purple",
  fontFamily: "Comic Sans MS', cursive",
  fontSize: "2em",
};

const Styling = () => <p style={styles}>Styled!</p>;

export default Styling;
