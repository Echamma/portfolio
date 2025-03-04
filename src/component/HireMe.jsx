import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function HireMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Email.js configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'elias_chamma@outlook.com'
    };

    // Send email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setStatus({
          message: 'Message sent successfully!',
          type: 'success'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        setStatus({
          message: 'Failed to send message. Please try again.',
          type: 'error'
        });
        console.error('Email send error:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Hire Me</h2>
        
        {status.message && (
          <div 
            className={`mb-4 p-4 rounded ${
              status.type === 'success' 
                ? 'bg-green-600 text-white' 
                : 'bg-red-600 text-white'
            }`}
          >
            {status.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
            <input 
              type="text" 
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Project Inquiry"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default HireMe;