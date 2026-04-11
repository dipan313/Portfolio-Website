import React, { useEffect } from 'react';
import '../styles/BackgroundParticles.css';

const BackgroundParticles = () => {
  // Using a lightweight CSS approach for particles to avoid canvas overhead in React
  // We'll generate an array of 30 items
  const particles = Array.from({ length: 30 });

  return (
    <div className="particles-container">
      {particles.map((_, i) => {
        // Randomize size and animation duration statically for each span
        const size = Math.random() * 5 + 2; 
        const style = {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}vw`,
          top: `${Math.random() * 100}vh`,
          animationDuration: `${Math.random() * 20 + 10}s`,
          animationDelay: `${Math.random() * 5}s`
        };

        return <span key={i} className="particle" style={style} />;
      })}
    </div>
  );
};

export default BackgroundParticles;
