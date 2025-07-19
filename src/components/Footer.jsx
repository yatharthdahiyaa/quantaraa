// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10 mt-12 shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-full md:col-span-1">
          <Link to="/" className="text-3xl font-extrabold text-indigo-400 hover:text-indigo-300 transition-colors duration-300 mb-4 block">
            Quantaraa
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Pioneering AI-driven industrial solutions, IoT dashboards, and custom hardware for a smarter, more efficient future.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-5 border-b-2 border-indigo-500 pb-2">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
            <li><Link to="/prototypes" className="text-gray-400 hover:text-white transition-colors duration-300">Prototypes</Link></li>
            <li><Link to="/ai-solutions" className="text-gray-400 hover:text-white transition-colors duration-300">AI Solutions</Link></li>
            <li><Link to="/iot-solutions" className="text-gray-400 hover:text-white transition-colors duration-300">IoT Solutions</Link></li>
            <li><Link to="/3d-printing" className="text-gray-400 hover:text-white transition-colors duration-300">3D Printing</Link></li>
            <li><Link to="/custom-hardware" className="text-gray-400 hover:text-white transition-colors duration-300">Custom Hardware</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-5 border-b-2 border-indigo-500 pb-2">Support</h3>
          <ul className="space-y-3">
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</Link></li>
            <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors duration-300">Client Login</Link></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FAQs</a></li> {/* Placeholder */}
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li> {/* Placeholder */}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-5 border-b-2 border-indigo-500 pb-2">Connect</h3>
          <p className="text-gray-400 text-base mb-4">
            Email: <a href="mailto:info@quantaraa.com" className="text-indigo-400 hover:underline">info@quantaraa.com</a>
          </p>
          <p className="text-gray-400 text-base mb-4">
            Phone: <a href="tel:+91XXXXXXXXXX" className="text-indigo-400 hover:underline">+91-XXXXXXXXXX</a>
          </p>
          <div className="flex space-x-4">
            {/* Placeholder for social media icons */}
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
              <i className="fab fa-linkedin-in text-2xl"></i> {/* Requires Font Awesome or similar */}
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Quantaraa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;