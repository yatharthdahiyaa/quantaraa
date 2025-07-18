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
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-700">
          Quantaraa
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-indigo-700 transition-colors duration-200 ${
                  isActive ? 'font-semibold text-indigo-700' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact?inquiry=demo" // Assuming "Request a Demo" links to Contact
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 ml-4"
          >
            Request a Demo
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-indigo-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <div className="md:hidden mt-4 bg-white border-t border-gray-200 pb-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} // Close menu on link click
              className={({ isActive }) =>
                `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  isActive ? 'font-semibold text-indigo-700 bg-gray-50' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact?inquiry=demo"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm bg-indigo-600 text-white mx-4 mt-2 rounded-md text-center hover:bg-indigo-700"
          >
            Request a Demo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;