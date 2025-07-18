

// src/components/TeamMemberCard.jsx
import Card from './Card'; // Assuming Card.jsx exists in the same directory

const TeamMemberCard = ({ name, title, bio, imageUrl }) => {
  return (
    <Card className="text-center p-6 flex flex-col items-center h-full">
      <img
        src={imageUrl || "https://placehold.co/120x120/E0E7FF/4F46E5?text=🧑‍💼"} // Placeholder if no image provided
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4 shadow-md border-4 border-indigo-200"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-indigo-600 text-md mb-3">{title}</p>
      <p className="text-gray-600 text-sm flex-grow">{bio}</p>
      {/* Optional: Add social links here */}
    </Card>
  );
};

export default TeamMemberCard; // <--- Make sure this line is present