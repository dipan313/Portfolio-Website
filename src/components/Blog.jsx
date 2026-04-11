import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, XCircle, Car, Activity, Trophy, Code, Lightbulb, Users } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import '../styles/Blog.css';

const blogData = [
  {
    id: 1,
    title: 'Building SARATHI: Real-time Computer Vision for Driver Safety',
    category: 'Computer Vision',
    excerpt: 'Deep dive into building a production-ready driver attention monitoring system using MediaPipe and OpenCV',
    date: 'March 2024',
    readTime: '8 min read',
    link: 'https://www.kaggle.com/writeups/dipanmazumder/sarathi-unified-attention-monitoring-for-transpo#3301512',
    isComingSoon: false,
    icon: Car
  },
  {
    id: 2,
    title: 'SRGAN in Medical Imaging: Enhancing Low-Quality Scans',
    category: 'AI/ML',
    excerpt: 'How we used SRGAN to improve medical image quality in resource-constrained healthcare environments',
    date: '...',
    readTime: '...',
    isComingSoon: true,
    icon: Activity
  },
  {
    id: 3,
    title: 'Winning Strategies: How We Took 1st Place at College Hackathon',
    category: 'Hackathons',
    excerpt: 'Behind the scenes of Team Dot Slash\'s victory strategy, technical decisions and team coordination',
    date: 'October 2025',
    readTime: '6 min read',
    link: 'https://www.linkedin.com/posts/dipanmazumder_smartindiahackathon-sih2025-hackathonwinner-activity-7375085121793671168-1c3h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPgLo8B6vtvx502HiV7pthxr1PTf3twvvs',
    isComingSoon: false,
    icon: Trophy
  },
  {
    id: 4,
    title: 'What is the best tutorial for making X?',
    category: 'Career',
    excerpt: 'Sharing the experience, how to build Projects',
    date: 'June 2025',
    readTime: '10 min read',
    link: 'https://www.linkedin.com/posts/dipanmazumder_learninginpublic-buildtolearn-engineeringlife-activity-7356392462052929538-Z0cz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPgLo8B6vtvx502HiV7pthxr1PTf3twvvs',
    isComingSoon: false,
    icon: Code
  },
  {
    id: 5,
    title: 'Secure 1st place in the College Internal Jury Round',
    category: 'Ideathon',
    excerpt: 'Behind the scenes of Team Porjoton Sathi\'s victory strategy, technical decisions and team coordination',
    date: 'September 2025',
    readTime: '5 min read',
    link: 'https://www.linkedin.com/posts/dipanmazumder_technovateforindia-innovation-teamwork-activity-7363967752732061697-ddqT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPgLo8B6vtvx502HiV7pthxr1PTf3twvvs',
    isComingSoon: false,
    icon: Lightbulb
  },
  {
    id: 6,
    title: 'Leading Tech Teams: Lessons from Competition Success',
    category: 'Leadership',
    excerpt: 'Key learnings about technical leadership, team dynamics and managing multiple projects simultaneously',
    date: '...',
    readTime: '7 min read',
    isComingSoon: true,
    icon: Users
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' }
  })
};

const Blog = () => {
  const [notification, setNotification] = useState(null);

  const handleCardClick = (e, blog) => {
    if (blog.isComingSoon) {
      e.preventDefault();
      setNotification(`"${blog.title}" is currently being written and will be published soon!`);
      setTimeout(() => setNotification(null), 4000);
    }
  };

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Technical Blog</h2>
          <p className="section-subtitle">Sharing insights from AI/ML development and competition experiences</p>
        </motion.div>

        <div className="blog-grid">
          {blogData.map((blog, index) => {
            const IconComponent = blog.icon;
            return (
              <motion.div
                key={blog.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <SpotlightCard className="glass-card blog-card animated-blog-card" spotlightColor="rgba(168, 85, 247, 0.2)">
                  <a 
                    href={blog.link || '#'}
                    target={!blog.isComingSoon ? "_blank" : undefined}
                    rel={!blog.isComingSoon ? "noopener noreferrer" : undefined}
                    className="blog-card-inner"
                    onClick={(e) => handleCardClick(e, blog)}
                  >
                    <div className="blog-image">
                      <IconComponent size={48} className="blog-hero-icon" color="white" strokeWidth={1.5} />
                      <div className="blog-category">{blog.category}</div>
                      {blog.isComingSoon && <div className="coming-soon-badge">📝 Coming Soon</div>}
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-title">{blog.title}</h3>
                      <p className="blog-excerpt">{blog.excerpt}</p>
                      <div className="blog-meta">
                        <span>{blog.date}</span>
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </a>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="coming-soon-notification">
            <div className="notification-content">
              <div className="notification-icon">📝</div>
              <div className="notification-text">
                <h4>Coming Soon</h4>
                <p>{notification}</p>
              </div>
              <button className="notification-close" onClick={() => setNotification(null)}>
                <XCircle size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
