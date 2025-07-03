import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

interface ContactSectionProps {
  isDarkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className={`py-20 ${isDarkMode ? 'bg-slate-900 text-slate-300' : 'bg-slate-50 text-slate-700'} transition-colors duration-500`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-center">
            <span className={`${isDarkMode ? 'text-indigo-400' : 'text-slate-600'} font-mono mr-2`}>06.</span>
            Get In Touch
          </h2>
          
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-4 mb-12 max-w-xl mx-auto`}>
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 text-left">
              <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} p-6 rounded-lg shadow-lg h-full`}>
                <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'} mr-3`} />
                    <a href="mailto:mohanreddy.padala12@gmail.com" className={`${isDarkMode ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-600 hover:text-slate-800'} transition-colors duration-300`}>
                      mohanreddy.padala12@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'} mr-3`} />
                    <a href="https://www.linkedin.com/in/mohan-reddy-padala-526716294" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-600 hover:text-slate-800'} transition-colors duration-300`}>
                      linkedin.com/in/mohan-reddy-padala
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Github className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'} mr-3`} />
                    <a href="https://github.com/mohanreddypadala" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-600 hover:text-slate-800'} transition-colors duration-300`}>
                      github.com/mohanreddypadala
                    </a>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Social Profiles</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/mohan-reddy-padala-526716294" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-800 hover:bg-indigo-500/20' : 'bg-slate-200 hover:bg-slate-300'} transition-colors duration-300`}>
                      <Linkedin className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'}`} />
                    </a>
                    <a href="https://github.com/mohanreddypadala" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-800 hover:bg-indigo-500/20' : 'bg-slate-200 hover:bg-slate-300'} transition-colors duration-300`}>
                      <Github className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'}`} />
                    </a>
                    <a href="mailto:mohanreddy.padala12@gmail.com" className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-800 hover:bg-indigo-500/20' : 'bg-slate-200 hover:bg-slate-300'} transition-colors duration-300`}>
                      <Mail className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'}`} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className={`${isDarkMode ? 'bg-black' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
                <div className="mb-4">
                  <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-1`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded ${isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-300 focus:ring-indigo-500' : 'bg-slate-50 border-slate-300 text-slate-700 focus:ring-slate-500'} border focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-300`}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-1`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded ${isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-300 focus:ring-indigo-500' : 'bg-slate-50 border-slate-300 text-slate-700 focus:ring-slate-500'} border focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-300`}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-1`}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-2 rounded ${isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-300 focus:ring-indigo-500' : 'bg-slate-50 border-slate-300 text-slate-700 focus:ring-slate-500'} border focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-300`}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`px-6 py-3 ${isDarkMode ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700' : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800'} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center w-full sm:w-auto`}
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;