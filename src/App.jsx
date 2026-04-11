import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Competitions from './components/Competitions';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  return (
    <>
      <CustomCursor />
      <BackgroundParticles />
      
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {/* Hide the main content until preloader finishes fading out to avoid messy scrollbars */}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.8s ease' }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Education />
          <Competitions />
          <Projects />
          <Skills />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
