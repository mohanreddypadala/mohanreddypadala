import React, { useEffect } from 'react';
import { ArrowLeft, Download, Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume: React.FC = () => {
  useEffect(() => {
    document.title = "Resume - Mohan Reddy Padala | Full Stack Developer";
    
    // Add print styles
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        .no-print { display: none !important; }
        body { margin: 0; padding: 0; }
        .print-container { 
          max-width: none !important; 
          margin: 0 !important; 
          padding: 20px !important;
          box-shadow: none !important;
        }
      }

      /* Enhanced animations for resume page */
      @keyframes slideInFromTop {
        from { transform: translateY(-30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      @keyframes fadeInScale {
        from { transform: scale(0.95); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }

      .animate-slide-in-top {
        animation: slideInFromTop 0.6s ease-out;
      }

      .animate-fade-in-scale {
        animation: fadeInScale 0.8s ease-out;
      }

      .stagger-1 { animation-delay: 0.1s; }
      .stagger-2 { animation-delay: 0.2s; }
      .stagger-3 { animation-delay: 0.3s; }
      .stagger-4 { animation-delay: 0.4s; }
      .stagger-5 { animation-delay: 0.5s; }
      .stagger-6 { animation-delay: 0.6s; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#262626] to-[#333333]">
      {/* Navigation Header */}
      <div className="no-print bg-[#1a1a1a]/90 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Portfolio
            </Link>
            <button
              onClick={handlePrint}
              className="flex items-center px-6 py-2 bg-gradient-to-r from-gray-400 to-gray-600 text-black rounded-lg hover:shadow-lg hover:shadow-gray-400/25 transition-all duration-300 font-medium"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto print-container bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in-scale">
          
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#262626] text-white p-8 animate-slide-in-top">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2 text-white">Mohan Reddy Padala</h1>
              <p className="text-xl text-gray-300 mb-4">Full Stack Developer</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-400" />
                  mohanreddy.padala12@gmail.com
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-gray-400" />
                  mohanreddypadala.vercel.app
                </div>
                <div className="flex items-center">
                  <Github className="h-4 w-4 mr-2 text-gray-400" />
                  github.com/mohanreddypadala
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-4 w-4 mr-2 text-gray-400" />
                  linkedin.com/in/mohan-reddy-padala-526716294
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            
            {/* Professional Summary */}
            <section className="animate-slide-in-top stagger-1">
              <h2 className="text-2xl font-bold text-[#1a1a1a] border-b-2 border-gray-400 pb-2 mb-4">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Passionate Full Stack Developer with expertise in modern web technologies including React, Python, Django, and Java. 
                Currently pursuing B.Tech in Computer Science with hands-on experience in building scalable web applications, 
                mobile solutions, and AI-powered systems. Demonstrated leadership through student community roles and successful 
                project management. Strong foundation in cloud technologies (AWS, Azure) and database design.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="animate-slide-in-top stagger-2">
              <h2 className="text-2xl font-bold text-[#1a1a1a] border-b-2 border-gray-400 pb-2 mb-4">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#262626] mb-2">Frontend Development</h3>
                  <p className="text-gray-700">HTML5, CSS3, JavaScript (ES6+), React.js, React Native, Tailwind CSS</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#262626] mb-2">Backend Development</h3>
                  <p className="text-gray-700">Python, Django, Java, Spring Boot, RESTful APIs</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#262626] mb-2">Databases</h3>
                  <p className="text-gray-700">PostgreSQL, MySQL, Database Design & Optimization</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#262626] mb-2">Cloud & Tools</h3>
                  <p className="text-gray-700">AWS, Microsoft Azure, Git/GitHub, Salesforce, Oracle</p>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <section className="animate-slide-in-top stagger-3">
              <h2 className="text-2xl font-bold text-[#1a1a1a] border-b-2 border-gray-400 pb-2 mb-4">
                Key Projects
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-gray-400 pl-4">
                  <h3 className="font-semibold text-[#262626]">Learning Management System (LMS)</h3>
                  <p className="text-sm text-gray-600 mb-1">Python, Django, PostgreSQL | Sri Vasavi Engineering College</p>
                  <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                    <li>Developed comprehensive LMS platform for educational content management</li>
                    <li>Implemented secure user authentication and role-based access control</li>
                    <li>Created intuitive interface for faculty content upload and student access</li>
                    <li>Deployed at: http://117.213.202.158:5000/</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-4">
                  <h3 className="font-semibold text-[#262626]">FindMyPro - Service Provider Platform</h3>
                  <p className="text-sm text-gray-600 mb-1">Java, Spring Boot, MySQL</p>
                  <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                    <li>Built full-stack application connecting users with professional service providers</li>
                    <li>Implemented advanced search and filtering for electricians, plumbers, mechanics</li>
                    <li>Designed responsive UI with real-time service provider matching</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-4">
                  <h3 className="font-semibold text-[#262626]">Alarmify - Mobile Task Management</h3>
                  <p className="text-sm text-gray-600 mb-1">React Native, JavaScript, Local Storage</p>
                  <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                    <li>Developed cross-platform mobile app for task scheduling and management</li>
                    <li>Implemented local notifications system with automated reminders</li>
                    <li>Created intuitive calendar interface with persistent data storage</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-4">
                  <h3 className="font-semibold text-[#262626]">Micro Reminiscence - AI Object Detection</h3>
                  <p className="text-sm text-gray-600 mb-1">Python, OpenCV, TensorFlow, Flask</p>
                  <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                    <li>Built AI-powered system for real-time object and person detection in video</li>
                    <li>Implemented computer vision algorithms with timestamp tracking</li>
                    <li>Developed Flask API for video processing and recognition data retrieval</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Leadership Experience */}
            <section className="animate-slide-in-top stagger-4">
              <h2 className="text-2xl font-bold text-[#1a1a1a] border-b-2 border-gray-400 pb-2 mb-4">
                Leadership Experience
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#262626]">Lead of Design and Marketing</h3>
                  <p className="text-sm text-gray-600">Blackbox Student Community (BBSC) | 2024 - Present</p>
                  <ul className="text-gray-700 text-sm list-disc list-inside mt-1 space-y-1">
                    <li>Manage social media presence and create engaging design content for 500+ members</li>
                    <li>Lead marketing initiatives and community engagement strategies</li>
                    <li>Coordinate cross-functional teams for successful event execution</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[#262626]">Class Representative</h3>
                  <p className="text-sm text-gray-600">Sri Vasavi Engineering College | 2020 - 2024</p>
                  <ul className="text-gray-700 text-sm list-disc list-inside mt-1 space-y-1">
                    <li>Served as elected representative for 4 consecutive years</li>
                    <li>Facilitated communication between 60+ students and faculty members</li>
                    <li>Organized and managed multiple technical and cultural events</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section className="animate-slide-in-top stagger-5">
              <h2 className="text-2xl font-bold text-[#1a1a1a] border-b-2 border-gray-400 pb-2 mb-4">
                Achievements
              </h2>
              <ul className="text-gray-700 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span><strong>First Prize - AWS Hackathon</strong> conducted by Braino Vision (2024)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span><strong>GitHub Workshop Conductor</strong> - Successfully conducted comprehensive Git/GitHub workshop (2023)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span><strong>College Magazine Publisher</strong> - Published and edited college magazine showcasing creative content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span><strong>Event Management Excellence</strong> - Successfully organized 10+ technical and cultural events</span>
                </li>
              </ul>
            </section>

            {/* Certifications */}
            <section className="animate-slide-in-top stagger-6">
              <h2 className="text-2xl font-bold text-[#1a1a1a] border-b-2 border-gray-400 pb-2 mb-4">
                Professional Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-[#262626]">Microsoft Azure Certifications</h4>
                  <ul className="text-sm text-gray-700 mt-1 space-y-1">
                    <li>• Azure Data Fundamentals (ID: 9D26C8AD19E37422)</li>
                    <li>• Azure AI Fundamentals (ID: 66AEA72F24DF6A27)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#262626]">Cloud & Enterprise</h4>
                  <ul className="text-sm text-gray-700 mt-1 space-y-1">
                    <li>• Salesforce Certified AI Specialist (ID: 5731670)</li>
                    <li>• Oracle Certified Foundations Associate</li>
                    <li>• Fortinet Network Security Associate</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="animate-slide-in-top stagger-6">
              <h2 className="text-2xl font-bold text-[#1a1a1a] border-b-2 border-gray-400 pb-2 mb-4">
                Education
              </h2>
              <div>
                <h3 className="font-semibold text-[#262626]">Bachelor of Technology - Computer Science Engineering</h3>
                <p className="text-gray-700">Sri Vasavi Engineering College | 2020 - 2024</p>
                <p className="text-sm text-gray-600 mt-1">
                  Relevant Coursework: Data Structures, Algorithms, Database Management, Software Engineering, 
                  Web Technologies, Mobile Application Development
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;