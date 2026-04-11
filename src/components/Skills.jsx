import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import '../styles/Skills.css';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'SRGAN', 'YOLO', 'GANs', 'Deep Learning']
  },
  {
    title: 'Computer Vision',
    skills: ['MediaPipe', 'OpenCV', 'Image Processing', 'Real-time Detection', 'Pose Estimation']
  },
  {
    title: 'Programming',
    skills: ['Python', 'C', 'Java', 'JavaScript', 'Data Structures', 'Algorithms']
  },
  {
    title: 'Web Development',
    skills: ['React', 'Node.js', 'Django', 'TailwindCSS', 'Full-Stack', 'RESTful APIs']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git/GitHub', 'AWS', 'Docker', 'TensorFlow Lite', 'Linux']
  },
  {
    title: 'Leadership',
    skills: ['Team Leadership', 'Competition Strategy', 'Problem Solving', 'Mentoring']
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: 'easeOut' }
  })
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Expertise across the AI/ML technology stack</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <SpotlightCard className="glass-card skill-card" spotlightColor="rgba(0, 212, 255, 0.15)">
                <h3 className="skill-category-title text-gradient">{category.title}</h3>
                <div className="skill-items">
                  {category.skills.map(skill => (
                    <span className="skill-badge" key={skill}>{skill}</span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
