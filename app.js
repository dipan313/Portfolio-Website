// Enhanced Portfolio with Premium Animations
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Premium Portfolio Loading...');
    
    // Initialize theme toggle
    initializeThemeToggle();
    
    // Create floating particles
    createFloatingParticles();
    
    // Initialize premium effects
    initializePremiumEffects();
    
    // Initialize testimonials carousel
    initializeTestimonials();
    
    // Initialize project modals
    initializeProjectModals();
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

// Premium Animation Functions
function createFloatingParticles() {
    const particleCount = 50;
    window.particles = []; // Store globally for theme updates
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${getRandomColor()};
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            opacity: ${Math.random() * 0.6 + 0.2};
            animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            box-shadow: 0 0 10px currentColor;
        `;
        document.body.appendChild(particle);
        window.particles.push(particle);
    }
    
    function getRandomColor() {
        const colors = currentTheme === 'dark' 
            ? ['#00d4ff', '#a855f7', '#10b981']
            : ['#0284c7', '#7c3aed', '#059669'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

function updateParticleColors() {
    if (window.particles) {
        window.particles.forEach(particle => {
            const colors = currentTheme === 'dark' 
                ? ['#00d4ff', '#a855f7', '#10b981']
                : ['#0284c7', '#7c3aed', '#059669'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        });
    }
}

function initializePremiumEffects() {
    // Add CSS for particle animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
            }
            25% {
                transform: translateY(-20px) rotate(90deg);
            }
            50% {
                transform: translateY(-40px) rotate(180deg);
            }
            75% {
                transform: translateY(-20px) rotate(270deg);
            }
        }
        
        .magnetic-element {
            transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .sparkle {
            position: absolute;
            width: 6px;
            height: 6px;
            background: #00d4ff;
            border-radius: 50%;
            animation: sparkleAnim 1.5s ease-out forwards;
            pointer-events: none;
        }
        
        @keyframes sparkleAnim {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 212, 255, 0.4);
            transform: scale(0);
            animation: rippleAnim 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes rippleAnim {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

function animateHeroName() {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        heroName.style.backgroundSize = '200% 200%';
        heroName.style.animation = 'gradientShift 3s ease-in-out infinite';
    }
}

function initializeParticleInteractions() {
    // Mouse interaction with particles
    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.floating-particle');
        particles.forEach((particle, index) => {
            if (Math.random() > 0.95) { // Random interaction
                const rect = particle.getBoundingClientRect();
                const distance = Math.hypot(
                    e.clientX - (rect.left + rect.width / 2),
                    e.clientY - (rect.top + rect.height / 2)
                );
                
                if (distance < 100) {
                    particle.style.transform = `scale(1.5) rotate(${Math.random() * 360}deg)`;
                    setTimeout(() => {
                        particle.style.transform = 'scale(1) rotate(0deg)';
                    }, 300);
                }
            }
        });
    });
}

function addSparkleEffect(element) {
    const sparkles = 6;
    for (let i = 0; i < sparkles; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.background = `hsl(${Math.random() * 60 + 180}, 100%, 70%)`;
            
            element.style.position = 'relative';
            element.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1500);
        }, i * 100);
    }
}

function animateSkillBars(skillCategory) {
    const skillItems = skillCategory.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'translateX(0) scale(1)';
            item.style.opacity = '1';
            
            // Add a subtle glow effect
            item.addEventListener('mouseenter', () => {
                item.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.boxShadow = '';
            });
        }, index * 50);
    });
}

function addMagneticEffect(element) {
    element.classList.add('magnetic-element');
    
    const handleMouseMove = (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        element.style.transform = `translateY(-15px) scale(1.02) rotateX(${y * 0.05}deg) rotateY(${x * 0.05}deg)`;
    };
    
    element.addEventListener('mousemove', handleMouseMove);
    
    element.magneticMove = handleMouseMove;
}

function removeMagneticEffect(element) {
    element.classList.remove('magnetic-element');
    if (element.magneticMove) {
        element.removeEventListener('mousemove', element.magneticMove);
        delete element.magneticMove;
    }
}

function createRippleEffect(event, element) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function addFinalPremiumTouches() {
    // Add hover effects to all buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add glow effect to social links
    document.querySelectorAll('.social-link, .footer-social a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.6)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.boxShadow = '';
        });
    });
    
    // Add scroll-based parallax to sections
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const sections = document.querySelectorAll('section');
        
        sections.forEach((section, index) => {
            const rate = scrolled * 0.05 * (index % 2 === 0 ? 1 : -1);
            if (section.style) {
                section.style.transform = `translateY(${rate}px)`;
            }
        });
    });
    
    // Add premium loading screen
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100);
}

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Enhanced typing animation with gradient effects
    const typingTexts = [
        "🤖 AI/ML Engineer",
        "👨‍💻 Team Leader", 
        "🏆 Hackathon Winner",
        "🚀 Innovation Driver",
        "💡 Problem Solver",
        "🌟 Competition Expert"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector('.typing-text');
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 1500;

    function typeText() {
        const currentText = typingTexts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = pauseDuration;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
        }

        setTimeout(typeText, typeSpeed);
    }

    // Start typing animation with enhanced effects
    typeText();
    
    // Add gradient animation to hero name
    animateHeroName();
    
    // Initialize particle interactions
    initializeParticleInteractions();

    // Enhanced Intersection Observer with staggered animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation delays
                setTimeout(() => {
                    entry.target.classList.add('animated');
                    
                    // Animate counters with enhanced effects
                    if (entry.target.classList.contains('stat-card')) {
                        animateCounterWithGlow(entry.target);
                    }
                    
                    // Add sparkle effect to project cards
                    if (entry.target.classList.contains('project-card')) {
                        addSparkleEffect(entry.target);
                    }
                    
                    // Animate skill bars
                    if (entry.target.classList.contains('skill-category')) {
                        animateSkillBars(entry.target);
                    }
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.section-header, .about-text, .stat-card, .timeline-item, .project-card, .skill-category, .experience-item, .education-card, .contact-item'
    );
    
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Enhanced counter animation with glow effects
    function animateCounterWithGlow(element) {
        const target = parseInt(element.dataset.count);
        const numberElement = element.querySelector('.stat-number');
        const duration = 2500;
        const steps = 80;
        const increment = target / steps;
        const stepDuration = duration / steps;
        let current = 0;

        // Add pulsing glow during animation
        element.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(168, 85, 247, 0.3)';
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                // Reset glow after animation
                element.style.boxShadow = '';
            }
            
            let displayValue = Math.floor(current);
            let suffix = '';
            
            if (element.querySelector('.stat-number').textContent.includes('+')) {
                suffix = '+';
            }
            
            numberElement.textContent = displayValue + suffix;
            
            // Add random glow intensity during counting
            const glowIntensity = Math.random() * 0.5 + 0.5;
            numberElement.style.textShadow = `0 0 ${20 * glowIntensity}px rgba(0, 212, 255, ${glowIntensity})`;
        }, stepDuration);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced navbar with glassmorphism on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid rgba(0, 212, 255, 0.3)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 212, 255, 0.2)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Enhanced project card interactions with magnetic effect
    document.querySelectorAll('.project-card').forEach(card => {
        // Add 3D tilt effect
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (y / rect.height) * 10;
            const rotateY = -(x / rect.width) * 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
        });
        
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 50px rgba(0, 212, 255, 0.4), 0 0 80px rgba(168, 85, 247, 0.3)';
            this.style.transition = 'box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
            this.style.boxShadow = '';
            this.style.transition = 'all 0.3s ease';
        });
        
        // Add click ripple effect
        card.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
    
    // Enhanced blog card interactions
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (y / rect.height) * 5;
            const rotateY = -(x / rect.width) * 5;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
        });
    });

    // Skill item interactions
    document.querySelectorAll('.skill-item').forEach(skill => {
        skill.addEventListener('click', function() {
            // Add a pulse animation
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'pulse 0.6s ease-in-out';
            }, 10);
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '350px',
            wordWrap: 'break-word'
        });
        
        // Set background color based on type
        switch(type) {
            case 'success':
                notification.style.background = '#10b981';
                break;
            case 'error':
                notification.style.background = '#ef4444';
                break;
            default:
                notification.style.background = '#3b82f6';
        }
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    // Add pulse animation keyframes to document
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .notification {
            cursor: pointer;
        }
        
        .notification:hover {
            opacity: 0.9;
        }
    `;
    document.head.appendChild(style);

    // Add click to close functionality for notifications
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('notification')) {
            e.target.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (e.target.parentNode) {
                    e.target.parentNode.removeChild(e.target);
                }
            }, 300);
        }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
        
        // Trigger initial animations
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.animation = 'fadeInUp 1s ease-out';
        }
    });

    // Dynamic year update in footer
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-text p');
    if (footerText) {
        footerText.textContent = footerText.textContent.replace('2024', currentYear);
    }

    console.log('✨ Premium Portfolio Loaded Successfully!');
    console.log('🎨 Vibrant Design System Activated');
    console.log('🌟 Interactive Animations Ready');
    console.log('💎 Welcome to Dipan Mazumder\'s Portfolio');
    console.log('🏆 AI/ML Engineer & Competition Winner');
    console.log('🚀 Features: Theme Toggle, 3D Effects, Modals, Testimonials, Blog');
    console.log('✅ All alignment issues fixed!');
    console.log('🎮 Try the Konami Code for a surprise!');
    
    // Show welcome message
    setTimeout(() => {
        showNotification('Welcome to my portfolio! 🚀 Click projects for details, toggle theme, and explore!', 'info');
    }, 1000);
    
    // Add final premium touches
    addFinalPremiumTouches();
    
    // Initialize cursor trail
    initializeCursorTrail();
});

// Theme Toggle Functionality
let currentTheme = 'dark'; // Use variable instead of localStorage

function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('light-mode');
            currentTheme = 'light';
        } else {
            body.classList.remove('light-mode');
            currentTheme = 'dark';
        }
        
        // Add transition effect
        body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
        
        // Update particle colors based on theme
        updateParticleColors();
    });
}

// Testimonials Carousel
let currentTestimonial = 0;
let testimonialInterval;

function initializeTestimonials() {
    startTestimonialAutoplay();
}

function showTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.nav-dot');
    
    // Remove active class from all
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current
    if (cards[index]) {
        cards[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
}

function nextTestimonial() {
    const totalTestimonials = document.querySelectorAll('.testimonial-card').length;
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

function startTestimonialAutoplay() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
    
    // Pause on hover
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(nextTestimonial, 5000);
        });
    }
}

// Project Modal Functionality
const projectData = {
    'sarathi': {
        title: 'SARATHI',
        subtitle: 'Driver Attention Monitoring System',
        description: 'SARATHI is an advanced AI-based driver attention monitoring system that uses computer vision to detect signs of drowsiness and distraction in real-time. The system analyzes facial landmarks, eye aspect ratio, and head pose to determine driver alertness levels and provides timely warnings to prevent accidents.',
        features: [
            'Real-time facial landmark detection using MediaPipe',
            'Eye aspect ratio (EAR) calculation for drowsiness detection',
            'Head pose estimation for distraction monitoring',
            'Audio and visual alert system for immediate warnings',
            'Low latency processing optimized for standard hardware',
            'Configurable sensitivity settings for different environments'
        ],
        tech: ['Computer Vision', 'MediaPipe', 'OpenCV', 'Python', 'Real-time Processing', 'NumPy'],
        challenges: 'Achieving real-time performance on standard hardware while maintaining high accuracy in various lighting conditions and driver positions.',
        outcome: 'Successfully reached the finals at Hack4Bengal, Eastern India\'s largest hackathon, demonstrating production-ready performance with 95% accuracy in drowsiness detection.',
        github: 'https://github.com/dipan313/SARATHI',
        demo: '#'
    },
    'medlens': {
        title: 'Medlens AI',
        subtitle: 'Medical Image Enhancement with SRGAN',
        description: 'Medlens AI uses Super-Resolution Generative Adversarial Networks (SRGAN) to enhance medical images in resource-constrained environments, enabling better diagnosis with low-quality imaging equipment.',
        features: [
            '4x super-resolution enhancement capability',
            'Medical image optimization for various modalities',
            'Fast inference for real-time applications',
            'Batch processing for multiple images',
            'Quality assessment metrics integration',
            'Healthcare-specific preprocessing pipelines'
        ],
        tech: ['SRGAN', 'TensorFlow', 'Deep Learning', 'Healthcare AI', 'Image Processing', 'Python'],
        challenges: 'Balancing image enhancement quality with processing speed while ensuring medical accuracy and avoiding artifacts that could mislead diagnosis.',
        outcome: 'Currently in development for SIH 2025, targeting deployment in rural healthcare centers with limited imaging infrastructure.',
        github: '#',
        demo: '#'
    },
    'vrinda': {
        title: 'Vrinda',
        subtitle: 'Agricultural Intelligence Platform',
        description: 'Vrinda is a comprehensive agricultural platform that combines AI-powered disease detection with community features and weather forecasting to help farmers make informed decisions.',
        features: [
            'AI-powered crop disease detection using computer vision',
            'Community forum for farmer knowledge sharing',
            'Weather API integration for forecasting',
            'Multi-language support for accessibility',
            'Mobile-responsive design for field use',
            'Offline capability for remote areas'
        ],
        tech: ['Django', 'TensorFlow', 'React', 'Full-Stack', 'AI Detection', 'PostgreSQL', 'Weather APIs'],
        challenges: 'Creating an accurate disease detection model while building a scalable platform that works reliably in rural internet conditions.',
        outcome: 'Received global recognition at Hack This Fall 2024 with live YouTube feature and positive feedback from international judges.',
        github: 'https://github.com/dipan313/Vrinda',
        demo: '#'
    },
    'khelo': {
        title: 'Khelo Sathi',
        subtitle: 'Sports Assessment Platform',
        description: 'AI-powered sports performance analysis platform targeting India\'s 792M smartphone users with computer vision-based assessment and analytics.',
        features: [
            'Real-time sports movement analysis',
            'Performance scoring and feedback',
            'Multi-sport support and adaptability',
            'Mobile-optimized AI processing',
            'Social sharing and comparison features',
            'Personalized training recommendations'
        ],
        tech: ['Computer Vision', 'Mobile AI', 'Sports Analytics', 'TensorFlow Lite', 'React Native'],
        challenges: 'Optimizing computer vision models for mobile devices while maintaining accuracy across different sports and environments.',
        outcome: 'Selected for SIH 2025 competition, currently in development phase with focus on cricket and football analysis.',
        github: '#',
        demo: '#'
    },
    'bhakti': {
        title: 'Bhakti Suraksha',
        subtitle: 'Crowd Management System',
        description: 'CNN-based crowd density estimation and panic detection system designed for public safety at religious and cultural gatherings.',
        features: [
            'Real-time crowd density estimation',
            'Panic and abnormal behavior detection',
            'Emergency alert and response system',
            'Multi-camera surveillance integration',
            'Predictive crowd flow analysis',
            'Authority dashboard for monitoring'
        ],
        tech: ['CNN', 'Computer Vision', 'Real-time Processing', 'Public Safety', 'Deep Learning'],
        challenges: 'Developing accurate crowd counting algorithms that work in diverse lighting conditions and crowd compositions.',
        outcome: 'Qualified for SIH 2025 in public safety domain, aimed at deployment in major religious sites and events.',
        github: '#',
        demo: '#'
    },
    'tictactoe': {
        title: 'TicTacToe AI',
        subtitle: 'Educational Game AI with Minimax',
        description: 'Interactive TicTacToe game demonstrating AI algorithms from basic random moves to unbeatable Minimax implementation.',
        features: [
            'Three difficulty levels: Easy, Medium, Hard',
            'Minimax algorithm implementation',
            'Interactive GUI with Tkinter',
            'Educational code comments and explanations',
            'Win/loss/draw statistics tracking',
            'Algorithm visualization modes'
        ],
        tech: ['Algorithms', 'Game AI', 'Python', 'Minimax', 'Tkinter', 'Educational Programming'],
        challenges: 'Making complex AI algorithms accessible and educational while maintaining engaging gameplay.',
        outcome: 'Open-source educational project with detailed documentation, used for teaching game theory and AI concepts.',
        github: 'https://github.com/dipan313/TicTacToe-AI',
        demo: '#'
    }
};

function initializeProjectModals() {
    // Add click handlers to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't open modal if clicking on external links
            if (e.target.closest('.project-link')) {
                return;
            }
            
            const projectKey = this.dataset.project;
            if (projectKey && projectData[projectKey]) {
                openProjectModal(projectKey);
            }
        });
    });
}

function openProjectModal(projectKey) {
    const project = projectData[projectKey];
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalSubtitle').textContent = project.subtitle;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalChallenges').textContent = project.challenges;
    document.getElementById('modalOutcome').textContent = project.outcome;
    
    // Features list
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Tech tags
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    project.tech.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = tech;
        techContainer.appendChild(tag);
    });
    
    // Links
    const githubLink = document.getElementById('modalGithub');
    const demoLink = document.getElementById('modalDemo');
    githubLink.href = project.github;
    demoLink.href = project.demo;
    
    if (project.github === '#') {
        githubLink.style.display = 'none';
    } else {
        githubLink.style.display = 'inline-flex';
    }
    
    if (project.demo === '#') {
        demoLink.style.display = 'none';
    } else {
        demoLink.style.display = 'inline-flex';
    }
    
    // Show modal
    modal.classList.add('active');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Blog Modal Functionality
const blogData = {
    'building-sarathi-driver-safety': {
        title: 'Building SARATHI: Real-time Computer Vision for Driver Safety',
        date: 'March 2024',
        readTime: '8 min read',
        category: 'Computer Vision',
        content: `
            <p>Driver safety has always been a critical concern in transportation systems worldwide. With the advent of computer vision and AI technologies, we now have unprecedented opportunities to create intelligent systems that can monitor driver behavior and prevent accidents before they happen.</p>
            
            <p>SARATHI (Smart Attention Recognition and Tracking for Highway Intelligence) was born out of this vision during our preparation for Hack4Bengal. As the team lead for Team Dot Slash, I wanted to create something that could have real-world impact while showcasing our technical capabilities.</p>
            
            <h3>The Challenge</h3>
            <p>Traditional driver monitoring systems often rely on expensive hardware and complex setups. Our goal was to create a system that could work with standard webcams and provide real-time feedback with minimal latency. The key challenges included:</p>
            
            <ul>
                <li>Achieving real-time performance on standard hardware</li>
                <li>Handling various lighting conditions and driver positions</li>
                <li>Maintaining high accuracy without false positives</li>
                <li>Creating an intuitive alert system</li>
            </ul>
            
            <h3>Technical Architecture</h3>
            <p>We built SARATHI using MediaPipe for facial landmark detection and OpenCV for computer vision processing. The system analyzes multiple indicators:</p>
            
            <ul>
                <li><strong>Eye Aspect Ratio (EAR):</strong> Calculated from facial landmarks to detect eye closure patterns</li>
                <li><strong>Head Pose Estimation:</strong> Monitors head orientation to detect distraction</li>
                <li><strong>Blink Pattern Analysis:</strong> Distinguishes between normal blinking and drowsiness indicators</li>
            </ul>
            
            <p>The result was a system that achieved 95% accuracy in drowsiness detection while maintaining smooth real-time performance.</p>
        `
    },
    'srgan-medical-imaging': {
        title: 'SRGAN in Medical Imaging: Enhancing Low-Quality Scans',
        date: 'April 2024',
        readTime: '10 min read',
        category: 'AI/ML',
        content: `
            <p>Medical imaging plays a crucial role in modern healthcare, but resource-constrained environments often struggle with low-quality imaging equipment. This is where AI-powered super-resolution techniques like SRGAN can make a transformative impact.</p>
            
            <p>For our Smart India Hackathon 2025 project, Medlens AI, we're developing a solution that can enhance medical images by up to 4x resolution while preserving critical diagnostic information.</p>
            
            <h3>Why Medical Images Need Special Attention</h3>
            <p>Unlike natural images, medical scans require:</p>
            
            <ul>
                <li>Preservation of diagnostic features</li>
                <li>Elimination of artifacts that could mislead diagnosis</li>
                <li>Consistent enhancement across different imaging modalities</li>
                <li>Fast processing for clinical workflows</li>
            </ul>
            
            <p>Our SRGAN implementation is specifically trained on medical datasets to understand these unique requirements.</p>
        `
    }
};

function openBlogPost(postKey) {
    const post = blogData[postKey];
    if (!post) {
        // For posts without detailed content, show a placeholder
        showBlogPlaceholder(postKey);
        return;
    }
    
    const modal = document.getElementById('blogModal');
    
    document.getElementById('blogModalTitle').textContent = post.title;
    document.getElementById('blogModalDate').textContent = post.date;
    document.getElementById('blogModalReadTime').textContent = post.readTime;
    document.getElementById('blogModalCategory').textContent = post.category;
    document.getElementById('blogModalContent').innerHTML = post.content;
    
    modal.classList.add('active');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function showBlogPlaceholder(postKey) {
    const modal = document.getElementById('blogModal');
    
    document.getElementById('blogModalTitle').textContent = 'Blog Post Coming Soon';
    document.getElementById('blogModalDate').textContent = 'Stay tuned';
    document.getElementById('blogModalReadTime').textContent = '';
    document.getElementById('blogModalCategory').textContent = 'Update';
    document.getElementById('blogModalContent').innerHTML = `
        <p>This blog post is currently being written. Check back soon for detailed insights and technical deep-dives!</p>
        <p>In the meantime, feel free to explore my other projects and connect with me for any questions.</p>
    `;
    
    modal.classList.add('active');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    modal.classList.remove('active');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function downloadResume() {
  const pdfUrl = "assets\\Dipan Mazumder Resume.pdf"; // path to your PDF
  const a = document.createElement("a");
  a.href = pdfUrl;
  a.download = "Dipan_Mazumder_Resume.pdf"; // forces download instead of opening
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
    // Show success notification
showNotification('Resume downloaded successfully! 📄', 'success');

}

    

// Cursor Trail Effect
let cursors = [];

function initializeCursorTrail() {
    // Only enable on desktop
    if (window.innerWidth <= 768) return;
    
    document.addEventListener('mousemove', function(e) {
        cursors.push({
            x: e.clientX,
            y: e.clientY,
            time: Date.now()
        });
        
        // Limit array size
        if (cursors.length > 10) {
            cursors.shift();
        }
        
        updateCursorTrail();
    });
}

function updateCursorTrail() {
    // Remove old trail elements
    document.querySelectorAll('.cursor-trail').forEach(el => el.remove());
    
    // Create new trail elements
    cursors.forEach((cursor, index) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            left: ${cursor.x}px;
            top: ${cursor.y}px;
            width: ${8 - index * 0.5}px;
            height: ${8 - index * 0.5}px;
            background: rgba(0, 212, 255, ${0.8 - index * 0.08});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
            animation: cursorFade 0.5s ease-out forwards;
        `;
        
        document.body.appendChild(trail);
        
        // Auto remove after animation
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 500);
    });
}

// Add cursor trail animation
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    @keyframes cursorFade {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
        }
    }
`;
document.head.appendChild(cursorStyle);

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Performance optimization for scroll events
const optimizedScroll = debounce(function() {
    // Any scroll-based animations can go here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScroll);

// Add Easter egg
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Easter egg activated
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 4000);
        
        // Add rainbow animation
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
        
        console.log('🌈 Konami Code activated! You found the easter egg!');
        showNotification('🌈 Konami Code activated! Welcome to the secret mode!', 'success');
    }
});