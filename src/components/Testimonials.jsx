import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    quote: "Dipan's leadership in Team Dot Slash was exceptional. His technical expertise and problem-solving abilities led us to victory among 140+ teams. He has an incredible ability to break down complex problems and mentor team members.",
    initials: 'S',
    role: 'Computer Vision Developer',
    subtitle: 'Co-lead, Team Dot Slash'
  },
  {
    quote: "Outstanding performance in the hackathon. The SARATHI project showed mature understanding of AI applications in real-world scenarios. The implementation was clean, professional and demonstrated production-ready thinking.",
    initials: 'D',
    role: 'Technical Judge',
    subtitle: 'Senior AI Researcher, Hack4Bengal Judge'
  },
  {
    quote: "A dedicated student with remarkable grasp of advanced concepts. His projects demonstrate real-world problem-solving skills beyond typical academic work. Dipan consistently goes above and beyond in his learning journey.",
    initials: 'P',
    role: 'HOD, IT Department',
    subtitle: 'Professor, TINT'
  }
];

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 })
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">Testimonials from teammates, judges, and professors</p>
        </motion.div>

        <div className="testimonials-carousel">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card testimonial-card"
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{current.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{current.initials}</div>
                <div className="author-info">
                  <h4>{current.role}</h4>
                  <p>{current.subtitle}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="testimonial-nav">
            {testimonialsData.map((_, index) => (
              <button 
                key={index} 
                className={`nav-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
