import { CSSProperties } from "react";
import Nested from "./Nested";

const styles: CSSProperties = {
  color: "purple",
  fontFamily: "'Comic Sans MS', cursive",
  fontSize: "2em",
};

const NestingComponents: React.FC = () => {
  return (
    <>
      <p style={styles}>These styles...</p>
      <Nested />
    </>
  );
};

export default NestingComponents;
