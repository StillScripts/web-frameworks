import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

function useRecursiveTimeout<T>(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout loop.
  useEffect(() => {
    let id: NodeJS.Timeout;
    function tick() {
      const ret = savedCallback.current();

      if (delay !== null) {
        id = setTimeout(tick, delay);
      }
    }
    if (delay !== null) {
      id = setTimeout(tick, delay);
      return () => id && clearTimeout(id);
    }
  }, [delay]);
}

type TypewriterDirection = "forward" | "backward";
export interface ReactTyperProps {
  // Styling
  className?: string; // The outer class that wraps all the text.
  style?: CSSProperties; // An optional style object to pass directly to the outer span.

  // Common general parameters
  text: string | string[]; // A word/sentence or a group of word/sentences that get typed out.
  loop?: boolean; // Control whether the typing animation occurs once or continuosly.
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

const ReactTyper = ({
  className,
  style,
  text,
  loop,
  cursor,
  startDelay,
  typingSpeed = 120,
  backspaceSpeed = 70,
  typingPause = 1200,
  backspacePause = 400,
  onTypingEnd,
  onBackspaceEnd,
  onFinish,
}: ReactTyperProps) => {
  const singleLine: boolean = typeof text === "string";
  const [currentText, setCurrentText] = useState<string>(""); // The current text displayed within the <span>
  const [currentLine, setCurrentLine] = useState<string>(
    typeof text === "string" ? text : text[0]
  ); // The current line selected from the text prop.
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0); // The index number used to select the current line.
  const [currentSpeed, setCurrentSpeed] = useState(
    startDelay ? startDelay : 50
  ); // The current speed

  const [direction, setDirection] = useState<TypewriterDirection>("forward"); // The typing direction
  const [finished, setFinished] = useState(false); // Variable for when the typing has finished
  const [paused, setPaused] = useState(false); // Variable for when the typing is paused

  /**
   * A method which checks if the typewriter is at the end of the line and handle this
   * appropriately.
   */
  const handleForwardTyping = useCallback(() => {
    // Currently typing forward, so check if it is at the end of the line.
    if (currentText.length === currentLine.length) {
      // The current line is finished, check what needs to be done next.
      if (singleLine || currentLineIndex + 1 === text.length) {
        // Currently on final line, so loop it or finish...
        if (loop) {
          // Looping so change the direction to backspace typing
          setDirection("backward");
          setPaused(true);
          setCurrentSpeed(typingPause);
        } else {
          setFinished(true);
          onFinish && onFinish();
        }
      } else {
        // It must be in a loop, so we can confidently shift to backspace typing...
        setDirection("backward");
        setPaused(true);
        setCurrentSpeed(typingPause);
      }
      // If there is a lineAction provided, here is where to call it...
      onTypingEnd && onTypingEnd();
    } else {
      // Since we are not at the beginning, simply add a character
      setCurrentText(currentLine.substring(0, currentText.length + 1)); // Update the displayed text
    }
  }, [
    currentLine,
    currentLineIndex,
    currentText.length,
    loop,
    onFinish,
    onTypingEnd,
    setCurrentSpeed,
    typingPause,
    singleLine,
    text.length,
  ]);

  /**
   * Control actions of the typewriter typing backwards. It removes a single character if characters exist,
   * otherwise it changes direction to begin typing forward and switches to the appropriate line if using
   * multiple lines.
   */
  const handleBackSpace = useCallback(() => {
    // Currently typing backward, so check if a line is back at the start.
    if (currentText.length === 0) {
      // Backspace ended, now at start of line
      if (!singleLine) {
        // Multiple lines, so we need to change lines.
        if (currentLineIndex + 1 === text.length) {
          // Reset back to the first line
          setCurrentLineIndex(0);
          setCurrentLine(text[0]);
        } else {
          // Move to the next line...
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentLine(text[currentLineIndex+1]);
        }
      }
      // We are at the beginning so we need to change direction, and switch lines if using multiple lines
      setDirection("forward"); // Change direction
      setPaused(true);
      setCurrentSpeed(backspacePause);
      // Call the onBackspaceEnd() method if it exists.
      onBackspaceEnd && onBackspaceEnd();
    } else {
      // Since we are not at the beginning, simply remove a character.
      setCurrentText(currentLine.substring(0, currentText.length - 1)); // Update the displayed text
    }
  }, [
    currentLine,
    currentLineIndex,
    currentText.length,
    backspacePause,
    onBackspaceEnd,
    setCurrentSpeed,
    singleLine,
    text,
  ]);

  /**
   * Run the typewriter
   */
  const typewrite = useCallback(() => {
    if (direction === "forward") {
      handleForwardTyping();
    } else {
      handleBackSpace();
    }
  }, [direction, handleBackSpace, handleForwardTyping]);

  useRecursiveTimeout(() => {
    if (!finished) {
      // Run timeout interval unless the animation is finished
      if (paused) {
        setPaused(false); // Ensure next interval is not paused
        if (direction === "forward" && currentSpeed !== typingSpeed)
          setCurrentSpeed(typingSpeed);
        else if (direction === "backward" && currentSpeed !== backspaceSpeed)
          setCurrentSpeed(backspaceSpeed);
      } else {
        typewrite();
      }
    } else {
      console.log("Program finished");
    }
  }, currentSpeed);

  return (
    <span className={className} style={style}>
      {currentText}
      {cursor && !finished && <span className={styles.cursor}>|</span>}
    </span>
  );
};

export default ReactTyper;
