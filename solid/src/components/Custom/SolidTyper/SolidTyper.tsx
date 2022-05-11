import { Component, createEffect, createSignal, JSX, onMount } from "solid-js";
import "./styles.css";

type TypewriterDirection = "forward" | "backward";
export interface SolidTyperProps {
  // Styling
  className?: string; // The outer class that wraps all the text.
  style?: JSX.CSSProperties; // An optional style object to pass directly to the outer span.

  // Common parameters
  text: string | string[]; // A word/sentence or a group of word/sentences that get typed out.
  loop?: boolean; // Control whether the typing animation occurs once or continuosly.
  start?: boolean; // Determine whether the animation should start.
  cursor?: boolean; // Whether or not to show the cursor
  startDelay?: number; // An optional amount of time to wait before the animation starts.

  // Parameters related to forward and backward typing.
  typingSpeed?: number; // The speed at which the cursor types text forward.
  backspaceSpeed?: number; // The speed at which the cursor deletes text.
  typingPause?: number; // A time to pause before beginning to type
  backspacePause?: number; // A time to pause before backspacing.

  // Methods to call at different times related to 
  onTypingEnd?: () => void; // A method which can be called when the typing reaches the end of the line
  onBackspaceEnd?: () => void; // A method which can be called when the backspace typing reaches the beginning of the line
  onFinish?: () => void; // A method from the parent component to call when the typing animation is finished
}

const TextTyping: Component<SolidTyperProps> = ({
  className,
  style,
  text,
  loop,
  start = true,
  cursor = true,
  startDelay,
  typingSpeed = 120,
  backspaceSpeed = 80,
  typingPause = 1000,
  backspacePause = 200,
  onTypingEnd,
  onBackspaceEnd,
  onFinish,
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
      if (startDelay)
        setTimeout(() => {
          timeLoop(typingSpeed);
        }, startDelay);
      else timeLoop(typingSpeed);
    }
  });

  /**
   * Loop that runs continuously or until the typewrite is finished.
   * @param {number} intervalTime - The time of each timeout interval.
   */
  function timeLoop(intervalTime: number) {
    if (!finished()) {
      // Run timeout interval unless the animation is finished
      setTimeout(() => {
        if (paused()) {
          setPaused(false); // Ensure next interval is not paused
          timeLoop(direction() === "forward" ? backspacePause : typingPause);
        } else {
          typewrite();
          timeLoop(direction() === "forward" ? typingSpeed : backspaceSpeed);
        }
      }, intervalTime);
    } else {
      console.log("Program finished");
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
          onFinish && onFinish();
        }
      } else {
        // It must be in a loop, so we can confidently shift to backspace typing...
        setDirection("backward");
        // Since we have changed direction, we could run a pause here...
        setPaused(true);
      }
      // If there is a lineAction provided, here is where to call it...
      onTypingEnd && onTypingEnd();
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
      // Backspace ended, now at start of line
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
      // We are at the beginning so we need to change direction, and switch lines if using multiple lines
      setDirection("forward"); // Change direction
      // Since we have changed direction, we could run a pause here...
      setPaused(true);
      // Call the onBackspaceEnd() method if it exists.
      onBackspaceEnd && onBackspaceEnd();
    } else {
      // Since we are not at the beginning, simply remove a character.
      setCurrentText(currentLine().substring(0, currentText().length - 1)); // Update the displayed text
    }
  }

  function cursorStyles(): JSX.CSSProperties {
    return {
      opacity: 0,
      visibility: !finished() && cursor ? "visible" : "hidden",
      animation: `fade 800ms steps(1) infinite`,
      animationDelay: `100ms`,
    };
  }
  return (
    <span class={className} style={style}>
      {currentText()}
      <span style={cursorStyles()}>|</span>
    </span>
  );
};

export default TextTyping;
