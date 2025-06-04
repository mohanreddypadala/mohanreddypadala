import React, { useEffect } from 'react';

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
  useEffect(() => {
    // Update page title
    document.title = "Mohan Reddy Padala | Full Stack Developer";
    
    // Add custom CSS for scrollbar and grid pattern
    const style = document.createElement('style');
    style.textContent = `
      /* Custom Scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #1a1a1a; 
      }
      ::-webkit-scrollbar-thumb {
        background: #333; 
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #0066cc; 
      }
      
      /* Grid Pattern Background */
      .bg-grid-pattern {
        background-image: 
          linear-gradient(to right, rgba(0, 102, 204, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 102, 204, 0.1) 1px, transparent 1px);
        background-size: 30px 30px;
      }
      
      /* Smooth Scrolling */
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;