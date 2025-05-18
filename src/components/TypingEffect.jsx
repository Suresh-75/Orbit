import React, { useState, useEffect } from "react";

const TypewriterEffect = ({
  text = "PUSHING EVERY LIMIT.",
  speed = 80,
  showCursor = true,
  hideCursorOnComplete = false,
  cursorClassName = "",
  onComplete = null,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText === text) {
      setIsComplete(true);
      if (onComplete) onComplete();
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(text.substring(0, displayedText.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, text, speed, onComplete]);

  return (
    <span className="flex items-center justify-center  text-center max-lg:text-2xl">
      {displayedText}
      {showCursor && (!hideCursorOnComplete || !isComplete) && (
        <span
          className={`inline-block w-0.5 h-15 ml-3 mb-2 bg-current 
           animate-pulse  max-lg:w-0.2 max-lg:h-8 
           ${cursorClassName}`}
        ></span>
      )}
    </span>
  );
};

export default TypewriterEffect;
