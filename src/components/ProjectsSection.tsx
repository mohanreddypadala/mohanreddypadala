import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Learning Management System (LMS)",
      description: "A modern Learning Management System built for Sri Vasavi Engineering College using Python and Django with PostgreSQL database. The platform allows faculty to upload educational content and students to learn subjects by watching videos.",
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
      technologies: ["Python", "Django", "PostgreSQL", "HTML/CSS"],
      link: "http://117.213.202.158:5000/"
    },
    {
      id: 2,
      title: "FindMyPro",
      description: "A Java full-stack application that connects users with service providers like electricians, plumbers, and mechanics. Users can easily search and find professional service providers in their area.",
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML/CSS"]
    },
    {
      id: 3,
      title: "Alarmify",
      description: "A mobile personal assistant app built with React Native that allows users to schedule tasks with an intuitive calendar interface and receive automated alarms one hour before each task. The app uses local notifications and persistent storage to keep users organized and on track.",
      image: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg",
      technologies: ["React Native", "JavaScript", "Local Storage", "Push Notifications"]
    },
    {
      id: 4,
      title: "Micro Reminiscence",
      description: "An AI-powered system that detects persons or objects based on video clips. The application uses computer vision algorithms to identify and track objects or individuals in video footage, providing timestamps and recognition data.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask"]
    },
    {
      id: 5,
      title: "WhatsApp Chat Analyzer",
      description: "A web application that analyzes WhatsApp chat exports and provides insightful visualizations and statistics. Users can upload their chat history to gain insights about conversation patterns, active hours, and message frequency.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      technologies: ["Python", "Pandas", "Matplotlib", "Streamlit"]
    }
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#1a1a1a] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <span className="text-[#0066cc] font-mono mr-2">03.</span>
            Some Things I've Built
            <div className="ml-4 h-px bg-gray-700 flex-grow"></div>
          </h2>
          
          <p className="text-gray-400 mt-4 mb-12">
            Here are a few projects I've worked on recently. Want to see more? 
            <a href="#contact" className="text-[#0066cc] hover:underline ml-1">Contact me</a>.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`relative ${index % 2 === 0 ? '' : 'md:text-right'}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative md:grid md:grid-cols-12 md:gap-4 items-center">
                <div 
                  className={`md:col-span-7 ${
                    index % 2 === 0 ? 'md:col-start-6' : 'md:col-start-1'
                  } relative`}
                >
                  <div className="relative rounded-lg overflow-hidden aspect-video">
                    <div 
                      className={`absolute inset-0 bg-[#0066cc] bg-opacity-20 z-10 transition-opacity duration-300 ${
                        hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
                      }`}
                    ></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div 
                  className={`md:col-span-6 ${
                    index % 2 === 0 ? 'md:col-start-1 md:text-left' : 'md:col-start-7 md:text-right'
                  } md:absolute md:top-0 md:bottom-0 flex flex-col justify-center`}
                >
                  <p className="font-mono text-[#0066cc] text-sm mb-1">Featured Project</p>
                  <h3 className="text-2xl font-bold text-gray-200 mb-4">{project.title}</h3>
                  
                  <div className="bg-[#262626] p-6 rounded-lg shadow-xl mb-4">
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  
                  <div className={`flex flex-wrap gap-2 mb-4 text-xs ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-gray-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-gray-300 hover:text-[#0066cc] transition-colors duration-300"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="text-gray-300 hover:text-[#0066cc] transition-colors duration-300"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;