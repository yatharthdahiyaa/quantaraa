// src/components/Button.jsx
import { Link } from 'react-router-dom';

const Button = ({ children, onClick, to, type = 'button', variant = 'primary', className = '', disabled = false }) => {
  const baseClasses = 'px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform active:scale-98 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center whitespace-nowrap';
  let variantClasses = '';
  let ringColor = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg';
      ringColor = 'focus:ring-indigo-500';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-sm hover:shadow-md';
      ringColor = 'focus:ring-gray-400';
      break;
    case 'outline':
      variantClasses = 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 shadow-sm hover:shadow-md';
      ringColor = 'focus:ring-indigo-500';
      break;
    case 'dark':
      variantClasses = 'bg-gray-700 text-white hover:bg-gray-800 shadow-md hover:shadow-lg';
      ringColor = 'focus:ring-gray-600';
      break;
    case 'light-outline':
        variantClasses = 'border-2 border-white text-white hover:bg-white hover:text-indigo-800 shadow-md hover:shadow-lg';
        ringColor = 'focus:ring-white';
        break;
    default:
      variantClasses = 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg';
      ringColor = 'focus:ring-indigo-500';
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${ringColor} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;