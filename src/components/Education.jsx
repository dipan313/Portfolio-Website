import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, Award } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import '../styles/Education.css';

const educationData = [
  {
    title: 'B.Tech in Information Technology',
    institution: 'Techno India College of Technology, New Town',
    period: '2023 - 2027 (Pre-Final Year)',
    specialization: 'Specialization: AI/ML and Computer Vision'
  },
  {
    title: 'Higher Secondary Education',
    institution: 'Bongaon High School, Bongaon, North 24 PGS, West Bengal',
    period: '2021 - 2023'
  },
  {
    title: 'Secondary Education',
    institution: 'Bongaon High School, Bongaon, North 24 PGS, West Bengal',
    period: '2015 - 2021'
  }
];

const certificationsData = [
  {
    title: 'Google Data Analytics Capstone',
    link: 'https://www.coursera.org/account/accomplishments/verify/FH853M2C1COD'
  },
  {
    title: 'Machine Learning with Python (IBM)',
    link: 'https://www.coursera.org/account/accomplishments/verify/7BKVGY98KO06'
  },
  {
    title: 'Machine Learning Using Python (NPTEL)',
    link: 'https://www.credly.com/badges/30dd9507-0426-4f31-809c-2620dd029517/linked_in_profile'
  }
];

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' }
  })
};

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">Building strong foundations in technology</p>
        </motion.div>

        <div className="education-content">
          <div className="education-column">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <SpotlightCard className="glass-card education-card animated-card" spotlightColor="rgba(0, 212, 255, 0.2)">
                  <div className="education-icon-wrapper">
                    <GraduationCap size={28} className="edu-icon" />
                  </div>
                  <div className="education-details">
                    <h3>{edu.title}</h3>
                    <h4>{edu.institution}</h4>
                    <p className="education-period">{edu.period}</p>
                    {edu.specialization && (
                      <p className="education-specialization">{edu.specialization}</p>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <SpotlightCard className="glass-card certifications-card animated-card" spotlightColor="rgba(40, 167, 69, 0.25)">
              <h3><Award className="cert-header-icon" size={24} /> Official Certifications</h3>
              <div className="cert-list">
                {certificationsData.map((cert, index) => (
                  <a 
                    key={index} 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-item"
                  >
                    <Award size={18} className="cert-icon" />
                    <span>{cert.title}</span>
                    <ExternalLink size={14} className="ext-icon" />
                  </a>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
