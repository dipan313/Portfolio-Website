import React, { useState, useEffect } from 'react';
import '../styles/Preloader.css';

const greetings = [
  "Namaskar",
  "Hello",
  "Hola",
  "Bonjour",
  "Konnichiwa",
  "Ciao",
  "Namaste"
];

const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (index < greetings.length) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 300); // Super fast 300ms per greeting
      return () => clearTimeout(timer);
    } else {
      setFade(true);
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 800); // CSS fadeout timeout
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <div className={`preloader ${fade ? 'fade-out' : ''}`}>
      <h1 className="preloader-text text-gradient">
        {greetings[Math.min(index, greetings.length - 1)]}
      </h1>
    </div>
  );
};

export default Preloader;
