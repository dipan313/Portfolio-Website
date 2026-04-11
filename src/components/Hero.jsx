import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // 3D Tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const roles = [
    "AI/ML Engineer",
    "Team Leader",
    "Hackathon Winner",
    "Innovation Driver",
    "Problem Solver",
    "Competition Expert"
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum]);

  const handleTyping = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
      setTypingSpeed(50);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  // 3D Mouse tracking for tilt
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -12;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 12;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={heroRef}>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.15s ease-out'
            }}
          >
            <div className="hero-image-border">
              <img src="/assets/dipan.jpg" alt="Dipan Mazumder" className="hero-img" onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('fallback-avatar');
              }} />
            </div>
          </motion.div>
          
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient">DIPAN MAZUMDER</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Building Production AI Systems & Winning Competitions
          </motion.p>
          
          <motion.div 
            className="typing-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#projects" className="btn btn-primary magnetic-btn">View Projects</a>
            <a href="/assets/Dipan_Mazumder_CV(2).pdf" download className="btn btn-outline magnetic-btn">
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="https://github.com/dipan313" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.6 4.9 4.9 0 0 0-.12-3.51s-1.13-.36-3.7 1.36a12.3 12.3 0 0 0-6.7 0 12.3 12.3 0 0 0-3.7-1.36 4.9 4.9 0 0 0-.12 3.51 5.2 5.2 0 0 0-1.39 3.6c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path></svg>
            </a>
            <a href="https://linkedin.com/in/dipanmazumder" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:dipanmazumder313@gmail.com" className="social-link" aria-label="Email">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
