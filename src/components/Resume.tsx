import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 print:p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Mohan Reddy Padala</h1>
        <p className="text-lg text-gray-600 mb-2">Full Stack Developer</p>
        <div className="flex justify-center gap-4 mt-2 text-sm text-gray-600 flex-wrap">
          <span>mohanreddy.padala12@gmail.com</span>
          <span className="hidden sm:inline">|</span>
          <a href="https://github.com/mohanreddypadala" className="text-blue-600 hover:underline">GitHub</a>
          <span className="hidden sm:inline">|</span>
          <a href="https://www.linkedin.com/in/mohan-reddy-padala-526716294" className="text-blue-600 hover:underline">LinkedIn</a>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 text-gray-900">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          Full Stack Developer with expertise in both front-end and back-end development. Experienced in building responsive web applications
          and mobile solutions using modern technologies including React, Python, Django, and Java. Strong leadership background demonstrated 
          through roles in student organizations and event management. Passionate about creating intuitive, user-centered digital experiences 
          with a focus on performance and accessibility.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 text-gray-900">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-1 text-gray-800">Frontend Development:</h3>
            <p className="text-gray-700">HTML, CSS, JavaScript, React, React Native</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-gray-800">Backend Development:</h3>
            <p className="text-gray-700">Java, Python, Django, Spring Boot</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-gray-800">Databases:</h3>
            <p className="text-gray-700">PostgreSQL, MySQL</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-gray-800">Cloud & Tools:</h3>
            <p className="text-gray-700">Git, AWS, Azure, Salesforce</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 text-gray-900">Key Projects</h2>
        
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">Learning Management System (LMS)</h3>
          <p className="text-sm text-gray-600 mb-1">Python, Django, PostgreSQL</p>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>Developed a comprehensive LMS for Sri Vasavi Engineering College</li>
            <li>Implemented secure content management system for faculty to upload educational materials</li>
            <li>Created intuitive interface for students to access and view educational content</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">FindMyPro - Service Provider Platform</h3>
          <p className="text-sm text-gray-600 mb-1">Java, Spring Boot, MySQL</p>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>Built a full-stack Java application connecting users with professional service providers</li>
            <li>Implemented user authentication and service provider matching system</li>
            <li>Designed responsive UI for optimal user experience</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">Alarmify - Mobile Task Management</h3>
          <p className="text-sm text-gray-600 mb-1">React Native, JavaScript</p>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>Developed a React Native mobile app for task scheduling and management</li>
            <li>Implemented local notifications system and persistent storage</li>
            <li>Created intuitive calendar interface for task scheduling</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">Micro Reminiscence - AI Object Detection</h3>
          <p className="text-sm text-gray-600 mb-1">Python, OpenCV, TensorFlow</p>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>Built AI-powered system for object and person detection in video clips</li>
            <li>Implemented computer vision algorithms for real-time tracking</li>
            <li>Provided timestamps and recognition data for identified objects</li>
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 text-gray-900">Leadership Experience</h2>
        
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">Lead of Design and Marketing</h3>
          <p className="text-sm text-gray-600">Blackbox Student Community (BBSC) | 2024</p>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>Manage social media presence and create engaging design content</li>
            <li>Lead marketing initiatives and community engagement strategies</li>
            <li>Coordinate with team members to execute successful campaigns</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">Class Representative</h3>
          <p className="text-sm text-gray-600">2020 - 2024</p>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>Served as class representative for 4 consecutive years</li>
            <li>Coordinated between faculty and students to ensure effective communication</li>
            <li>Organized and managed multiple technical and non-technical events</li>
          </ul>
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 text-gray-900">Achievements</h2>
        <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
          <li>First Prize in AWS Hackathon conducted by Braino Vision (2024)</li>
          <li>Successfully conducted GitHub workshop for students (2023)</li>
          <li>Published magazine for college showcasing creative and editorial skills</li>
          <li>4 years of consistent leadership as Class Representative</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 text-gray-900">Certifications</h2>
        <ul className="text-gray-700 text-sm space-y-1">
          <li><strong>Microsoft Certified: Azure Data Fundamentals</strong> (Credential ID: 9D26C8AD19E37422)</li>
          <li><strong>Microsoft Certified: Azure AI Fundamentals</strong> (Credential ID: 66AEA72F24DF6A27)</li>
          <li><strong>Network Security Associate Virtual Internship - Fortinet</strong> (Credential ID: bc2e8cae6a603d4bcb3f4ab47a15bcbb)</li>
          <li><strong>Oracle Certified Foundations Associate</strong> - HCM Certified Foundation Associate</li>
          <li><strong>Salesforce Certified AI Specialist</strong> (Credential ID: 5731670)</li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 text-gray-900">Education</h2>
        <div>
          <h3 className="font-semibold text-gray-800">Bachelor of Technology</h3>
          <p className="text-gray-700">Sri Vasavi Engineering College</p>
          <p className="text-sm text-gray-600">Computer Science Engineering</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;