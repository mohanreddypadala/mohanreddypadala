import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
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
    <section id="contact" className="py-20 bg-[#262626] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-center">
            <span className="text-[#0066cc] font-mono mr-2">06.</span>
            Get In Touch
          </h2>
          
          <p className="text-gray-400 mt-4 mb-12 max-w-xl mx-auto">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 text-left">
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#0066cc] mr-3" />
                    <a href="mailto:mohanreddy.padala12@gmail.com" className="text-gray-300 hover:text-[#0066cc]">
                      mohanreddy.padala12@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 text-[#0066cc] mr-3" />
                    <a href="https://www.linkedin.com/in/mohan-reddy-padala-526716294" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0066cc]">
                      linkedin.com/in/mohan-reddy-padala
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Github className="h-5 w-5 text-[#0066cc] mr-3" />
                    <a href="https://github.com/mohanreddypadala" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0066cc]">
                      github.com/mohanreddypadala
                    </a>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-lg font-medium mb-4 text-white">Social Profiles</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/mohan-reddy-padala-526716294" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#333] hover:bg-[#0066cc] hover:bg-opacity-20 transition-colors duration-300">
                      <Linkedin className="h-5 w-5 text-[#0066cc]" />
                    </a>
                    <a href="https://github.com/mohanreddypadala" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#333] hover:bg-[#0066cc] hover:bg-opacity-20 transition-colors duration-300">
                      <Github className="h-5 w-5 text-[#0066cc]" />
                    </a>
                    <a href="mailto:mohanreddy.padala12@gmail.com" className="p-2 rounded-full bg-[#333] hover:bg-[#0066cc] hover:bg-opacity-20 transition-colors duration-300">
                      <Mail className="h-5 w-5 text-[#0066cc]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-[#262626] border border-[#333] text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-[#262626] border border-[#333] text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded bg-[#262626] border border-[#333] text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0066cc] text-white font-medium rounded hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
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