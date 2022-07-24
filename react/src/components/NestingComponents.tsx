import { CSSProperties } from "react";

const styles: CSSProperties = {
  color: "purple",
  fontFamily: "'Comic Sans MS', cursive",
  fontSize: "2em",
};

const Nested = () => <p>{`...don't affect this element`}</p>;

const NestingComponents = () => {
  return (
    <>
      <p style={styles}>These styles...</p>
      <Nested />
    </>
  );
};

export default NestingComponents;
