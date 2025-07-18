// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Quantaraa</h3>
          <p className="text-gray-400">AI-Driven Industrial Solutions, IoT Dashboards, Custom Boards.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link to="/prototypes" className="text-gray-400 hover:text-white">Prototypes</Link></li>
            <li><Link to="/ai-solutions" className="text-gray-400 hover:text-white">AI Solutions</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@quantaraa.com</p>
          <p className="text-gray-400">Phone: +91-XXXXXXXXXX</p>
          {/* Add social media icons here later */}
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Quantaraa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;