// src/components/ContactForm.jsx
import { useState } from 'react';
import Button from './Button'; // Import your Button component

const ContactForm = ({ formType = 'General Inquiry', onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: formType,
    message: '',
  });
  const [status, setStatus] = useState(''); // 'success', 'error', 'submitting'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    // TODO: Integrate with your Node.js backend API endpoint here
    // Example: Replace with your actual API call. You'll need an endpoint like /api/contact
    // In a real app, you might use a library like Axios for API calls.
    try {
      const response = await fetch('/api/contact', { // This endpoint will be on your Node.js backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: formType, message: '' }); // Clear form
        if (onSubmitSuccess) onSubmitSuccess(); // Callback for parent component
      } else {
        const errorData = await response.json();
        setStatus('error');
        console.error("Form submission error:", errorData);
      }
    } catch (err) {
      console.error("Form submission network error:", err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{formType}</h3>
      <div className="mb-4">
        <label htmlFor="contact-name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        ></textarea>
      </div>
      <Button type="submit" variant="primary" className="w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
      {status === 'success' && (
        <p className="text-green-600 mt-4 text-center">Your message has been sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-4 text-center">There was an error sending your message. Please try again.</p>
      )}
    </form>
  );
};

export default ContactForm;