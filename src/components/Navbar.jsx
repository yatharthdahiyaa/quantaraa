// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Industry Login', path: '/login' },
    { name: 'Prototypes', path: '/prototypes' },
    { name: '3D Printing', path: '/3d-printing' },
    { name: 'AI Solutions', path: '/ai-solutions' },
    { name: 'IoT Solutions', path: '/iot-solutions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg p-4 sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-indigo-700 hover:text-indigo-900 transition-colors duration-300">
          Quantaraa
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium text-gray-700 hover:text-indigo-700 transition-colors duration-300 relative group
                ${isActive ? 'font-semibold text-indigo-700' : ''}`
              }
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </NavLink>
          ))}
          <Link
            to="/contact?inquiry=demo"
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Request a Demo
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-indigo-700 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white border-t border-gray-200 pb-2 shadow-inner animate-fade-in-up-100">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 text-base text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200 ${
                  isActive ? 'font-semibold text-indigo-700 bg-indigo-50' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact?inquiry=demo"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 text-base bg-indigo-600 text-white mx-4 mt-3 rounded-full text-center hover:bg-indigo-700 transition-colors duration-300 shadow-md"
          >
            Request a Demo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;