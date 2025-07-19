// src/components/SolutionCard.jsx
import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import Modal from './Modal';

const SolutionCard = ({ icon, title, description, longDescription, features, caseStudyLink, demoVideoUrl, className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className={`flex flex-col items-center text-center p-8 border border-gray-100 ${className}`}>
        <span className="text-6xl mb-5 inline-block transform transition-transform duration-300 group-hover:scale-110">{icon}</span>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-base mb-5 flex-grow">{description}</p>
        <Button onClick={() => setIsModalOpen(true)} variant="outline" className="mt-auto">
          Learn More
        </Button>
      </Card>

      {/* Solution Detail Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={title}>
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-7xl mb-4 inline-block">{icon}</span>
            <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
          </div>
          <p className="text-lg text-gray-800 leading-relaxed">{longDescription || description}</p>

          {(features && features.length > 0) && (
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Key Capabilities</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {demoVideoUrl && (
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Demo Video</h4>
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                  src={demoVideoUrl}
                  title="Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6">
            {caseStudyLink && (
              <Button to={caseStudyLink} variant="outline">
                View Case Study
              </Button>
            )}
            <Button onClick={() => setIsModalOpen(false)} variant="secondary">
              Close
            </Button>
            <Button to="/contact" variant="primary">
              Inquire Now
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SolutionCard;