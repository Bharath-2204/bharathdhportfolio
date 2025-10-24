import { useEffect, useState } from "react";

interface TerminalTextProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

export const TerminalText = ({ text, delay = 50, onComplete }: TerminalTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, delay, onComplete]);

  return (
    <span className="font-mono">
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-blink ml-1 inline-block w-2 h-5 bg-primary align-middle" />
      )}
    </span>
  );
};
