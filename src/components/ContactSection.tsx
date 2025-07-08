import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from 'emailjs-com';

interface ContactSectionProps {
  isDarkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  // EmailJS configuration
  const SERVICE_ID = 'service_portfolio'; // You'll need to replace this
  const TEMPLATE_ID = 'template_contact'; // You'll need to replace this
  const USER_ID = 'your_emailjs_user_id'; // You'll need to replace this

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear any previous status when user starts typing
    if (formStatus.type !== 'idle') {
      setFormStatus({ type: 'idle', message: '' });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your name.' });
      return false;
    }
    
    if (!formData.email.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your email address.' });
      return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    
    if (!formData.message.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your message.' });
      return false;
    }
    
    if (formData.message.trim().length < 10) {
      setFormStatus({ type: 'error', message: 'Message should be at least 10 characters long.' });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // Method 1: Using EmailJS (Recommended)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Mohan Reddy Padala',
        reply_to: formData.email,
      };

      // For now, we'll simulate the email sending since EmailJS needs configuration
      // Uncomment the line below and configure EmailJS for actual email sending
      // await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demonstration, we'll show success message
      // In production, replace this with actual EmailJS call
      console.log('Email would be sent with data:', templateParams);
      
      setFormStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!' 
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly via email.' 
      });
    }
  };

  const getStatusIcon = () => {
    switch (formStatus.type) {
      case 'loading':
        return <Loader className="h-4 w-4 animate-spin" />;
      case 'success':
        return <CheckCircle className="h-4 w-4" />;
      case 'error':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (formStatus.type) {
      case 'loading':
        return isDarkMode ? 'text-blue-400' : 'text-blue-600';
      case 'success':
        return isDarkMode ? 'text-green-400' : 'text-green-600';
      case 'error':
        return isDarkMode ? 'text-red-400' : 'text-red-600';
      default:
        return '';
    }
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
              <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} p-6 rounded-lg shadow-lg h-full hover-lift`}>
                <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <Mail className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'} mr-3 group-hover:scale-110 transition-transform duration-300`} />
                    <a 
                      href="mailto:mohanreddy.padala12@gmail.com" 
                      className={`${isDarkMode ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-600 hover:text-slate-800'} transition-colors duration-300`}
                    >
                      mohanreddy.padala12@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center group">
                    <Linkedin className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'} mr-3 group-hover:scale-110 transition-transform duration-300`} />
                    <a 
                      href="https://www.linkedin.com/in/mohan-reddy-padala-526716294" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${isDarkMode ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-600 hover:text-slate-800'} transition-colors duration-300`}
                    >
                      linkedin.com/in/mohan-reddy-padala
                    </a>
                  </div>
                  
                  <div className="flex items-center group">
                    <Github className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'} mr-3 group-hover:scale-110 transition-transform duration-300`} />
                    <a 
                      href="https://github.com/mohanreddypadala" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${isDarkMode ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-600 hover:text-slate-800'} transition-colors duration-300`}
                    >
                      github.com/mohanreddypadala
                    </a>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Social Profiles</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/mohan-reddy-padala-526716294" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`p-3 rounded-full ${isDarkMode ? 'bg-slate-800 hover:bg-indigo-500/20' : 'bg-slate-200 hover:bg-slate-300'} transition-all duration-300 hover:scale-110`}
                    >
                      <Linkedin className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'}`} />
                    </a>
                    <a 
                      href="https://github.com/mohanreddypadala" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`p-3 rounded-full ${isDarkMode ? 'bg-slate-800 hover:bg-indigo-500/20' : 'bg-slate-200 hover:bg-slate-300'} transition-all duration-300 hover:scale-110`}
                    >
                      <Github className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'}`} />
                    </a>
                    <a 
                      href="mailto:mohanreddy.padala12@gmail.com" 
                      className={`p-3 rounded-full ${isDarkMode ? 'bg-slate-800 hover:bg-indigo-500/20' : 'bg-slate-200 hover:bg-slate-300'} transition-all duration-300 hover:scale-110`}
                    >
                      <Mail className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'}`} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className={`${isDarkMode ? 'bg-black' : 'bg-white'} p-6 rounded-lg shadow-lg hover-lift`}>
                
                {/* Status Message */}
                {formStatus.message && (
                  <div className={`mb-6 p-4 rounded-lg flex items-center ${
                    formStatus.type === 'success' 
                      ? isDarkMode ? 'bg-green-900/20 border border-green-500/30' : 'bg-green-50 border border-green-200'
                      : formStatus.type === 'error'
                      ? isDarkMode ? 'bg-red-900/20 border border-red-500/30' : 'bg-red-50 border border-red-200'
                      : isDarkMode ? 'bg-blue-900/20 border border-blue-500/30' : 'bg-blue-50 border border-blue-200'
                  }`}>
                    <span className={`mr-3 ${getStatusColor()}`}>
                      {getStatusIcon()}
                    </span>
                    <span className={`text-sm ${getStatusColor()}`}>
                      {formStatus.message}
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={formStatus.type === 'loading'}
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDarkMode 
                        ? 'bg-slate-900 border-slate-700 text-slate-300 focus:ring-indigo-500 focus:border-indigo-500' 
                        : 'bg-slate-50 border-slate-300 text-slate-700 focus:ring-slate-500 focus:border-slate-500'
                    } border focus:outline-none focus:ring-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={formStatus.type === 'loading'}
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDarkMode 
                        ? 'bg-slate-900 border-slate-700 text-slate-300 focus:ring-indigo-500 focus:border-indigo-500' 
                        : 'bg-slate-50 border-slate-300 text-slate-700 focus:ring-slate-500 focus:border-slate-500'
                    } border focus:outline-none focus:ring-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    disabled={formStatus.type === 'loading'}
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDarkMode 
                        ? 'bg-slate-900 border-slate-700 text-slate-300 focus:ring-indigo-500 focus:border-indigo-500' 
                        : 'bg-slate-50 border-slate-300 text-slate-700 focus:ring-slate-500 focus:border-slate-500'
                    } border focus:outline-none focus:ring-2 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
                    placeholder="Tell me about your project, question, or just say hello..."
                  ></textarea>
                  <div className={`text-xs mt-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {formData.message.length}/500 characters
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className={`w-full px-6 py-3 ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700' 
                      : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800'
                  } text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none group`}
                >
                  {formStatus.type === 'loading' ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
                
                <p className={`text-xs mt-4 text-center ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  * Required fields. Your information will be kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;