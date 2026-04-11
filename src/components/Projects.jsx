import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Car, Activity, Leaf, Target, MapPin, User } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import '../styles/Projects.css';

const projects = [
  {
    id: 'sarathi',
    title: 'SARATHI',
    subtitle: 'Driver Attention Monitoring System',
    description: 'AI-based driver safety system using computer vision. Finalist at Hack4Bengal.',
    tags: ['Computer Vision', 'MediaPipe', 'IoT', 'Real-time'],
    highlight: 'Hack4Bengal Finalist',
    github: 'https://github.com/dipan313/SARATHI',
    status: 'completed',
    icon: Car
  },
  {
    id: 'medlens',
    title: 'Medlens AI',
    subtitle: 'Medical Image Enhancement',
    description: 'SRGAN-based super-resolution for medical imaging in resource-constrained environments.',
    tags: ['SRGAN', 'Healthcare AI', 'TensorFlow'],
    highlight: 'SIH 2025 • Healthcare AI',
    status: 'in-development',
    icon: Activity
  },
  {
    id: 'vrinda',
    title: 'Vrinda',
    subtitle: 'Agricultural Intelligence Platform',
    description: 'Complete agricultural disease detection platform with community features.',
    tags: ['Full-Stack', 'AI Detection', 'MongoDB'],
    highlight: 'Hack This Fall 2024',
    github: 'https://github.com/dipan313/Vrinda',
    status: 'completed',
    icon: Leaf
  },
  {
    id: 'khelo',
    title: 'Khelo Sathi',
    subtitle: 'Sports Assessment Platform',
    description: 'AI-powered sports performance analysis for India\'s 792M smartphone users.',
    tags: ['Computer Vision', 'Height Calc', 'Mobile App', 'Sports Tech'],
    highlight: 'SIH 2025 • Sports Analytics',
    status: 'in-development',
    icon: Target
  },
  {
    id: 'geoshare',
    title: 'GeoShare',
    subtitle: 'Real-Time Geolocation sharing',
    description: 'Django-based web application that allows users to generate and share their real-time geolocation.',
    tags: ['Django', 'Leaflet JS', 'API'],
    highlight: 'Full-Stack Solo Project',
    github: 'https://github.com/dipan313/GeoShare',
    status: 'completed',
    icon: MapPin
  },
  {
    id: 'pose-estimation',
    title: 'Pose Estimation',
    subtitle: 'Detecting Human Pose',
    description: 'Foundation in Computer Vision world with detecting the human pose using Mediapipe',
    tags: ['Computer Vision', 'MediaPipe', 'Python'],
    highlight: 'Solo Project • Real Time',
    github: 'https://github.com/dipan313/PoseEstimation',
    status: 'completed',
    icon: User
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' }
  })
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Building the future with AI and innovation</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <SpotlightCard className="glass-card project-card animated-card" spotlightColor="rgba(0, 212, 255, 0.25)">
                  <div className="project-status-badge">
                    {project.status === 'in-development' ? 'In Development' : 'Completed'}
                  </div>
                  
                  <div className="project-icon-wrapper">
                    <IconComponent size={32} className="project-icon-svg" />
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <h4 className="project-subtitle">{project.subtitle}</h4>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    
                    <div className="project-highlight text-gradient">
                      ★ {project.highlight}
                    </div>
                  </div>

                  <div className="project-actions">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-icon" aria-label="GitHub Repository">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.6 4.9 4.9 0 0 0-.12-3.51s-1.13-.36-3.7 1.36a12.3 12.3 0 0 0-6.7 0 12.3 12.3 0 0 0-3.7-1.36 4.9 4.9 0 0 0-.12 3.51 5.2 5.2 0 0 0-1.39 3.6c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path></svg> Code
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
