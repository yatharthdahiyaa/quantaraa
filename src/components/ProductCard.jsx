// src/components/ProductCard.jsx
import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import Modal from './Modal';

const ProductCard = ({ name, description, longDescription, image, features, useCases, specs, price, demoVideoUrl, hasBuyNow = false, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="flex flex-col border border-gray-100">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4 shadow-sm" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-700 text-base mb-4 flex-grow">{description}</p>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-auto pt-4 border-t border-gray-100">
          {price && <span className="text-2xl font-bold text-indigo-600 mb-2 sm:mb-0">₹{price.toLocaleString()}</span>}
          <div className="space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row w-full sm:w-auto">
            <Button onClick={() => setIsModalOpen(true)} variant="outline" className="w-full sm:w-auto">
              View Details
            </Button>
            {hasBuyNow ? (
              <Button to="/contact?inquiry=buy" variant="primary" className="w-full sm:w-auto">
                Buy Now
              </Button>
            ) : (
              <Button to="/contact?inquiry=demo" variant="primary" className="w-full sm:w-auto">
                Request Demo
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Product Detail Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={name}>
        <div className="space-y-6">
          <img src={image} alt={name} className="w-full h-64 object-cover rounded-lg shadow-md" />
          <p className="text-lg text-gray-800 leading-relaxed">{longDescription || description}</p>

          {(features && features.length > 0) && (
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Key Features</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {(specs && specs.length > 0) && (
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Technical Specifications</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}

          {(useCases && useCases.length > 0) && (
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Typical Use Cases</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {useCases.map((uc, index) => (
                  <li key={index}>{uc}</li>
                ))}
              </ul>
            </div>
          )}

          {price && (
            <div className="p-3 bg-indigo-50 rounded-lg">
              <span className="text-xl font-bold text-indigo-800">Price: ₹{price.toLocaleString()}</span>
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
            <Button onClick={() => setIsModalOpen(false)} variant="secondary">
              Close
            </Button>
            <Button to="/contact" variant="primary">
              Contact for Inquiry
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;