// src/components/Button.jsx
import { Link } from 'react-router-dom'; // Make sure react-router-dom is installed (npm install react-router-dom)

const Button = ({ children, onClick, to, type = 'button', variant = 'primary', className = '' }) => {
  const baseClasses = 'px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-md inline-flex items-center justify-center whitespace-nowrap';
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'bg-indigo-600 text-white hover:bg-indigo-700';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
      break;
    case 'outline':
      variantClasses = 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50';
      break;
    case 'dark':
      variantClasses = 'bg-gray-700 text-white hover:bg-gray-800';
      break;
    case 'light-outline': // For hero section on dark background
        variantClasses = 'border border-white text-white hover:bg-white hover:text-indigo-600';
        break;
    default:
      variantClasses = 'bg-indigo-600 text-white hover:bg-indigo-700';
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;