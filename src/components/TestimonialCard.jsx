// src/components/TestimonialCard.jsx
import Card from './Card'; // Requires Card component

const TestimonialCard = ({ quote, author, title }) => {
  return (
    <Card className="max-w-md mx-auto p-8 flex flex-col items-center text-center">
      <p className="text-lg italic text-gray-700 mb-4">"{quote}"</p>
      <p className="font-semibold text-gray-800">{author}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </Card>
  );
};

export default TestimonialCard;