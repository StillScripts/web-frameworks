import { Component, createEffect, createSignal, JSX, onMount } from "solid-js";
import "./styles.css";

interface TyperProps {
  sentences: string[];
  startDelay?: number;
  cursorDelay?: number;
  className?: string;
  cursorClassName?: string;
  cursorColor?: string;
  cursorBlinkSpeed?: number;
  showCursor?: boolean;
  hideCursorOnFinish?: boolean;
  cursorSmooth?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
  //style?: React.CSSProperties;
  defaultText?: string;
}

export type TypewriterDirection = "forward" | "backward";

export interface TextTypingProps {
  className?: string; // The outer class that wraps all the text.

  // Play around with possible options
  text: string | string[]; // A word/sentence or a group of word/sentences that get typed out.
  loop?: boolean; // Control whether the typing animation occurs once or continuosly.
  start?: boolean; // Determine whether the animation should start.

  // Parameters related to forward and backward typing.
  typingSpeed?: number; // The speed at which the cursor types text forward.
  backspaceSpeed?: number; // The speed at which the cursor deletes text.
  typingPause?: number; // A time to pause between words
  backspacePause?: number; // A time to pause before
  cursor?: boolean; // Whether or not to show the cursor

  finalAction?: () => void; // A method from the parent component to call when the typing animation is finished
}

const TextTyping: Component<TextTypingProps> = ({
  text,
  loop,
  start = true,
  cursor,
  finalAction,
}) => {
  const singleLine: boolean = typeof text === "string";
  const [currentText, setCurrentText] = createSignal<string>(""); // The current text displayed within the <span>
  const [currentLine, setCurrentLine] = createSignal<string>(""); // The current line selected from the text prop.
  const [currentLineIndex, setCurrentLineIndex] = createSignal<number>(0); // The index number used to select the current line.
  const [direction, setDirection] =
    createSignal<TypewriterDirection>("forward");

  const [finished, setFinished] = createSignal(false); // Variable for when the typing has finished
  const [paused, setPaused] = createSignal(false);

  onMount(() => {
    // Initialise the current line
    setCurrentLine(typeof text === "string" ? text : text[0]);
  });

  createEffect(() => {
    // Run the interval when start is true
    if (start) {
      timeLoop(400);
    }
  });

  createEffect(() => {
    // Handle animation being completed
    if (finished()) {
      finalAction && finalAction();
      alert("Finished");
    }
  });

  /**
   * Loop that runs continuously or until the typewrite is finished
   * @param intervalTime
   */
  function timeLoop(intervalTime: number) {
    if (!finished()) {
      setTimeout(() => {
        if (paused()) {
          setPaused(false);
          timeLoop(2000);
        } else {
          typewrite();
          timeLoop(100);
        }
      }, intervalTime);
    }
  }

  /**
   * Run the typewriter
   */
  function typewrite() {
    if (direction() === "forward") {
      handleForwardTyping();
    } else {
      handleBackSpace();
    }
  }

  /**
   * A method which checks if the typewriter is at the end of the line and handle this
   * appropriately.
   */
  function handleForwardTyping() {
    // Currently typing forward, so check if it is at the end of the line.
    if (currentText().length === currentLine().length) {
      // The current line is finished, check what needs to be done next.
      if (singleLine || currentLineIndex() + 1 === text.length) {
        // Currently on final line, so loop it or finish...
        if (loop) {
          // Looping so change the direction to backspace typing
          setDirection("backward");
          // Since we have changed direction, we could run a pause here...
          setPaused(true);
        } else {
          setFinished(true);
        }
      } else {
        // It must be in a loop, so we can confidently shift to backspace typing...
        setDirection("backward");
        // Since we have changed direction, we could run a pause here...
        setPaused(true);
      }
    } else {
      // Since we are not at the beginning, simply add a character
      setCurrentText(currentLine().substring(0, currentText().length + 1)); // Update the displayed text
    }
  }

  /**
   * Control actions of the typewriter typing backwards. It removes a single character if characters exist,
   * otherwise it changes direction to begin typing forward and switches to the appropriate line if using
   * multiple lines.
   */
  function handleBackSpace() {
    // Currently typing backward, so check if a line is back at the start.
    if (currentText().length === 0) {
      // We are at the beginning so we need to change direction, and switch lines if using multiple lines
      setDirection("forward"); // Change direction
      if (!singleLine) {
        // Multiple lines, so we need to change lines.
        if (currentLineIndex() + 1 === text.length) {
          // Reset back to the first line
          setCurrentLineIndex(0);
          setCurrentLine(text[0]);
        } else {
          // Move to the next line...
          setCurrentLineIndex(currentLineIndex() + 1);
          setCurrentLine(text[currentLineIndex()]);
        }
      }
      // Since we have changed direction, we could run a pause here...
      setPaused(true);
    } else {
      // Since we are not at the beginning, simply remove a character.
      setCurrentText(currentLine().substring(0, currentText().length - 1)); // Update the displayed text
    }
  }

  function cursorStyles(): JSX.CSSProperties {
    return {
      opacity: 0,
      visibility: cursor ? "visible" : "hidden",
      animation: `blink 800ms steps(1) infinite`,
      animationDelay: `100ms`,
    };
  }
  return (
    <span>
      {currentText()}
      <span style={cursorStyles()}>|</span>
    </span>
  );
};

export default TextTyping;
