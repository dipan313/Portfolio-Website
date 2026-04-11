import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Competitions.css';

const timelineData = [
  {
    icon: '🥇',
    title: '1st Place - College Internal Hackathon',
    subtitle: 'Team Dot Slash',
    description: 'Won among 140+ teams with innovative AI solution',
    date: '2025'
  },
  {
    icon: '🏆',
    title: 'Finalist - Hack4Bengal',
    subtitle: 'Eastern India\'s Largest Hackathon',
    description: 'SARATHI project gained recognition for driver safety innovation',
    date: '2024'
  },
  {
    icon: '🌍',
    title: 'Global Recognition - Hack This Fall',
    subtitle: 'International Hackathon',
    description: 'Vrinda agricultural platform received global recognition',
    date: '2024'
  },
  {
    icon: '🎯',
    title: 'SIH 2025 Participant',
    subtitle: 'Smart India Hackathon',
    description: '2 Projects nominated - Sports & Public Safety domains',
    date: '2025'
  }
];

const Competitions = () => {
  return (
    <section id="competitions" className="competitions-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Competition Achievements</h2>
          <p className="section-subtitle">Recognition for technical excellence and innovation</p>
        </motion.div>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <motion.div 
              className="timeline-item" 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="timeline-icon">{item.icon}</div>
              <div className="glass-card timeline-content">
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
                <span className="timeline-date">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
