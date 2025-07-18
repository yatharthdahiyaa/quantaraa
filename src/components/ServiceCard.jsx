// src/components/ServiceCard.jsx
import { Link } from 'react-router-dom';
import Card from './Card'; // Requires Card component

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <Card className="flex flex-col items-center text-center p-8">
      {/* Icon (emoji or custom SVG/Image) */}
      <span className="text-5xl mb-4 inline-block" style={{ color: icon.color }}>
        {icon.emoji}
      </span>
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      {/* Description */}
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {/* Link to detail page */}
      <Link to={link} className="text-indigo-600 hover:underline mt-auto">
        Learn More
      </Link>
    </Card>
  );
};

export default ServiceCard;