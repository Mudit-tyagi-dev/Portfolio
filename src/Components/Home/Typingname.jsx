import React, { useEffect, useState } from "react";
import "./TypingName.css";

export default function TypingName() {
  const text = "Hi, I'm Mudit Tyagi.";
  const [i, setI] = useState(0);
  const [erase, setErase] = useState(false);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const delay = erase ? 180: 250;
    const timer = setTimeout(() => {
      if (!erase && i <= text.length) {
        setDisplay(text.slice(0, i));
        setI(i + 1);
      } else if (erase && i >= 0) {
        setDisplay(text.slice(0, i));
        setI(i - 1);
      } else {
        setErase(!erase);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [i, erase]);

  return (
    <div className="typing-box">
      <span>{display}</span>
      <span className="cursor">|</span>
    </div>
  );
}
