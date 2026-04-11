import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Code } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import '../styles/About.css';

const StatCard = ({ end, label, index }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 50);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 50);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    
    return () => observer.disconnect();
  }, [end]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SpotlightCard className="glass-card stat-card" spotlightColor="rgba(168, 85, 247, 0.2)">
        <div className="stat-number text-gradient">{count}+</div>
        <div className="stat-label">{label}</div>
      </SpotlightCard>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate AI/ML Engineer driving innovation through code</p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SpotlightCard className="glass-card about-text" spotlightColor="rgba(0, 212, 255, 0.2)">
              <p>
                I'm a pre-final year B.Tech IT student at Techno India College of Technology, specializing in AI/ML and Computer Vision. As Team Lead for Dot Slash, I've guided our team to victory in multiple competitions.
              </p>
              <p>
                With a strong foundation in machine learning, computer vision, and full-stack development, I focus on building production-ready AI systems that solve real-world problems.
              </p>
              
              <div className="about-highlights">
                <div className="highlight">
                  <div className="highlight-icon"><Trophy size={20} /></div>
                  <span>Competition Winner</span>
                </div>
                <div className="highlight">
                  <div className="highlight-icon"><Users size={20} /></div>
                  <span>Team Leadership</span>
                </div>
                <div className="highlight">
                  <div className="highlight-icon"><Code size={20} /></div>
                  <span>Production AI Systems</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          <div className="stats-grid">
            <StatCard end={8} label="Completed Projects" index={0} />
            <StatCard end={3} label="Active Projects" index={1} />
            <StatCard end={2178} label="LinkedIn Followers" index={2} />
            <StatCard end={800} label="Teams Competed Against" index={3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
