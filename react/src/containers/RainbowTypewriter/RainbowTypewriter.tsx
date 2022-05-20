import { useState } from "react";
import ReactTyper from "../../components/Custom/ReactTyper";

// Types and variables for the rainbow typing animation
type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";
const rainbowColors: Rainbow[] = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
const rainbowWords = rainbowColors.map((word) => `${word}...`);

const RainbowTypewriter = () => {
  const [colorIndex, setColorIndex] = useState<number>(0);
	return (
    <h2>
    Rainbow typewriter:{" "}
    <span style={{ color: `${rainbowColors[colorIndex % 7]}` }}>
      <ReactTyper
        text={rainbowWords}
        cursor
        loop
        onBackspaceEnd={() => {
          setColorIndex(colorIndex + 1);
        }}
      />
    </span>
  </h2>
  )
}

export default RainbowTypewriter;