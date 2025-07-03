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
      /* Reset and base styles */
      * {
        box-sizing: border-box;
      }
      
      html {
        font-size: 16px;
        scroll-behavior: smooth;
      }
      
      body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }

      /* Custom Scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: ${isDarkMode ? '#000000' : '#ffffff'}; 
      }
      ::-webkit-scrollbar-thumb {
        background: ${isDarkMode ? 'linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)' : 'linear-gradient(45deg, #1e293b, #475569, #64748b)'}; 
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: ${isDarkMode ? 'linear-gradient(45deg, #4f46e5, #7c3aed, #db2777)' : 'linear-gradient(45deg, #0f172a, #334155, #475569)'}; 
      }
      
      /* Grid Pattern Background */
      .bg-grid-pattern {
        background-image: 
          linear-gradient(to right, ${isDarkMode ? 'rgba(99, 102, 241, 0.03)' : 'rgba(30, 41, 59, 0.05)'} 1px, transparent 1px),
          linear-gradient(to bottom, ${isDarkMode ? 'rgba(99, 102, 241, 0.03)' : 'rgba(30, 41, 59, 0.05)'} 1px, transparent 1px);
        background-size: 50px 50px;
      }

      /* Enhanced animations with gradients */
      @keyframes gentleFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }

      @keyframes gradientGlow {
        0%, 100% { 
          box-shadow: 0 0 20px ${isDarkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(30, 41, 59, 0.1)'}; 
        }
        50% { 
          box-shadow: 0 0 30px ${isDarkMode ? 'rgba(139, 92, 246, 0.15), 0 0 40px rgba(236, 72, 153, 0.1)' : 'rgba(71, 85, 105, 0.15), 0 0 40px rgba(100, 116, 139, 0.1)'}; 
        }
      }

      @keyframes slideInLeft {
        from { transform: translateX(-30px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }

      @keyframes slideInRight {
        from { transform: translateX(30px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }

      @keyframes fadeInUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      @keyframes gentlePulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.01); }
      }

      .animate-gentle-float {
        animation: gentleFloat 10s ease-in-out infinite;
      }

      .animate-gradient-glow {
        animation: gradientGlow 4s ease-in-out infinite;
      }

      .animate-slide-in-left {
        animation: slideInLeft 0.5s ease-out;
      }

      .animate-slide-in-right {
        animation: slideInRight 0.5s ease-out;
      }

      .animate-fade-in-up {
        animation: fadeInUp 0.5s ease-out;
      }

      .animate-gentle-pulse {
        animation: gentlePulse 5s ease-in-out infinite;
      }

      /* Enhanced Gradient Text */
      .gradient-text {
        background: ${isDarkMode ? 'linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)' : 'linear-gradient(45deg, #1e293b, #475569, #64748b)'};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 200% 200%;
        animation: gradientShift 3s ease-in-out infinite;
      }

      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      /* Enhanced Hover Effects */
      .hover-lift {
        transition: all 0.3s ease;
      }

      .hover-lift:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px ${isDarkMode ? 'rgba(99, 102, 241, 0.15), 0 4px 15px rgba(139, 92, 246, 0.1)' : 'rgba(30, 41, 59, 0.15), 0 4px 15px rgba(71, 85, 105, 0.1)'};
      }

      /* Gradient Backgrounds */
      .gradient-bg-primary {
        background: ${isDarkMode ? 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)'};
      }

      .gradient-bg-secondary {
        background: ${isDarkMode ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)' : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
      }

      /* Responsive fixes */
      @media (max-width: 768px) {
        html {
          font-size: 14px;
        }
      }

      @media (max-width: 480px) {
        html {
          font-size: 13px;
        }
      }

      /* Prevent horizontal overflow */
      .container {
        max-width: 100%;
        overflow-x: hidden;
      }

      /* Reduced motion for accessibility */
      @media (prefers-reduced-motion: reduce) {
        .animate-gentle-float,
        .animate-gradient-glow,
        .animate-gentle-pulse,
        .gradient-text {
          animation: none;
        }
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
    <div className={`${isDarkMode ? 'gradient-bg-primary' : 'gradient-bg-secondary'} min-h-screen relative transition-all duration-500 overflow-x-hidden`}>
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      
      {/* Enhanced Floating Background Elements with Gradients */}
      <div className={`fixed top-20 left-10 w-20 h-20 ${isDarkMode ? 'bg-gradient-to-br from-indigo-500/10 to-purple-600/5' : 'bg-gradient-to-br from-slate-400/15 to-slate-600/10'} rounded-full blur-xl animate-gentle-float`}></div>
      <div className={`fixed bottom-32 right-20 w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/5' : 'bg-gradient-to-br from-slate-500/15 to-slate-700/10'} rounded-full blur-xl animate-gentle-float`} style={{ animationDelay: '3s' }}></div>
      <div className={`fixed top-1/2 right-10 w-12 h-12 ${isDarkMode ? 'bg-gradient-to-br from-violet-500/10 to-indigo-500/5' : 'bg-gradient-to-br from-slate-600/15 to-slate-800/10'} rounded-full blur-xl animate-gentle-float`} style={{ animationDelay: '6s' }}></div>
      <div className={`fixed top-1/4 left-1/4 w-8 h-8 ${isDarkMode ? 'bg-gradient-to-br from-pink-500/10 to-purple-500/5' : 'bg-gradient-to-br from-slate-300/15 to-slate-500/10'} rounded-full blur-xl animate-gentle-float`} style={{ animationDelay: '9s' }}></div>
      
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
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