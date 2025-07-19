// src/components/ContactForm.jsx
import { useState } from 'react';
import Button from './Button';
import Card from './Card'; // Using Card for the form container

const ContactForm = ({ formType = 'General Inquiry', onSubmitSuccess, className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: formType,
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: formType, message: '' });
        if (onSubmitSuccess) onSubmitSuccess();
      } else {
        const errorData = await response.json();
        setStatus('error');
        console.error("Form submission error:", errorData);
      }
    } catch (err) {
      console.error("Form submission network error:", err);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={`p-8 shadow-lg w-full ${className}`}>
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{formType}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="contact-name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact-email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact-subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
          <input
            type="text"
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="contact-message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y transition-all duration-200"
            required
          ></textarea>
        </div>
        <Button type="submit" variant="primary" className="w-full" disabled={status === 'submitting' || isLoading}>
          {status === 'submitting' || isLoading ? 'Sending...' : 'Send Message'}
        </Button>
        {status === 'success' && (
          <p className="text-green-600 mt-4 text-center animate-fade-in">Your message has been sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-4 text-center animate-fade-in">There was an error sending your message. Please try again.</p>
        )}
      </form>
    </Card>
  );
};

export default ContactForm;