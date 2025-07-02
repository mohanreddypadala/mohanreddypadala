import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update page title
    document.title = "Mohan Reddy Padala | Full Stack Developer & Software Engineer";
    
    // Add custom CSS for scrollbar and animations
    const style = document.createElement('style');
    style.textContent = `
      /* Custom Scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: ${isDarkMode ? '#0a0a0a' : '#f0f0f0'}; 
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, ${isDarkMode ? '#00ffff, #ff00ff' : '#333333, #666666'}); 
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, ${isDarkMode ? '#ff00ff, #00ffff' : '#666666, #333333'}); 
      }
      
      /* Grid Pattern Background */
      .bg-grid-pattern {
        background-image: 
          linear-gradient(to right, ${isDarkMode ? 'rgba(0, 255, 255, 0.1)' : 'rgba(51, 51, 51, 0.1)'} 1px, transparent 1px),
          linear-gradient(to bottom, ${isDarkMode ? 'rgba(0, 255, 255, 0.1)' : 'rgba(51, 51, 51, 0.1)'} 1px, transparent 1px);
        background-size: 30px 30px;
      }
      
      /* Smooth Scrolling */
      html {
        scroll-behavior: smooth;
      }

      /* Enhanced Animations */
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px ${isDarkMode ? 'rgba(0, 255, 255, 0.3)' : 'rgba(51, 51, 51, 0.3)'}; }
        50% { box-shadow: 0 0 30px ${isDarkMode ? 'rgba(255, 0, 255, 0.6)' : 'rgba(102, 102, 102, 0.6)'}; }
      }

      @keyframes slideInLeft {
        from { transform: translateX(-100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }

      @keyframes slideInRight {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }

      @keyframes fadeInUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      .animate-glow {
        animation: glow 2s ease-in-out infinite;
      }

      .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out;
      }

      .animate-slide-in-right {
        animation: slideInRight 0.8s ease-out;
      }

      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out;
      }

      .animate-pulse-slow {
        animation: pulse 3s ease-in-out infinite;
      }

      /* Gradient Text */
      .gradient-text {
        background: linear-gradient(45deg, ${isDarkMode ? '#00ffff, #ff00ff' : '#333333, #666666'});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      /* Enhanced Hover Effects */
      .hover-lift {
        transition: all 0.3s ease;
      }

      .hover-lift:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px ${isDarkMode ? 'rgba(0, 255, 255, 0.2)' : 'rgba(51, 51, 51, 0.2)'};
      }

      /* Particle Effect */
      .particles {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
      }

      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, ${isDarkMode ? '#00ffff, #ff00ff' : '#333333, #666666'});
        border-radius: 50%;
        animation: float 8s linear infinite;
      }

      /* Theme Toggle Button */
      .theme-toggle {
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        z-index: 1000;
        background: ${isDarkMode ? 'linear-gradient(45deg, #00ffff, #ff00ff)' : 'linear-gradient(45deg, #333333, #666666)'};
        border: none;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px ${isDarkMode ? 'rgba(0, 255, 255, 0.3)' : 'rgba(51, 51, 51, 0.3)'};
      }

      .theme-toggle:hover {
        transform: translateY(-50%) scale(1.1);
        box-shadow: 0 6px 20px ${isDarkMode ? 'rgba(255, 0, 255, 0.4)' : 'rgba(102, 102, 102, 0.4)'};
      }

      .theme-toggle svg {
        color: ${isDarkMode ? '#0a0a0a' : '#ffffff'};
        transition: all 0.3s ease;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-gray-100'} min-h-screen relative overflow-hidden transition-colors duration-500`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"/>
            <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>

      {/* Particle Background */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <Navbar isDarkMode={isDarkMode} />
      <HeroSection isDarkMode={isDarkMode} />
      <AboutSection isDarkMode={isDarkMode} />
      <SkillsSection isDarkMode={isDarkMode} />
      <ProjectsSection isDarkMode={isDarkMode} />
      <AchievementsSection isDarkMode={isDarkMode} />
      <CertificationsSection isDarkMode={isDarkMode} />
      <ContactSection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;