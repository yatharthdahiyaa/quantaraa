// src/components/TestimonialCard.jsx
import Card from './Card';

const TestimonialCard = ({ quote, author, title, className = '' }) => {
  return (
    <Card className={`max-w-md mx-auto p-8 flex flex-col items-center text-center border border-gray-100 ${className}`}>
      <p className="text-lg italic text-gray-700 mb-4 leading-relaxed">"{quote}"</p>
      <div className="w-16 h-1.5 bg-indigo-500 mx-auto my-4 rounded-full"></div> {/* Separator */}
      <p className="font-bold text-gray-800 text-lg">{author}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </Card>
  );
};

export default TestimonialCard;