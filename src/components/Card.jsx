// src/components/Card.jsx

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
};

export default Card;