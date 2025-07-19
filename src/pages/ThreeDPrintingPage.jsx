// src/pages/ThreeDPrintingPage.jsx
import { useState } from 'react';
import Card from '../components/Card';
import Custom3DModelRequestForm from '../components/Custom3DModelRequestForm';
import SectionHeader from '../components/SectionHeader';
import ThreeDPrintQuoteForm from '../components/ThreeDPrintQuoteForm';

const ThreeDPrintingPage = () => {
  const [activeTab, setActiveTab] = useState('quote');

  const useCases = [
    { icon: '⚙️', title: 'Rapid Prototyping', description: 'Quickly iterate and test designs before mass production.' },
    { icon: '📦', title: 'Custom Enclosures', description: 'Create bespoke housings for your electronics and components.' },
    { icon: '🔩', title: 'Mechanical Parts', description: 'Produce functional parts for machinery, robotics, and automation.' },
    { icon: '🎨', title: 'Architectural Models', description: 'Detailed physical models for visualization and planning.' },
  ];

  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-red-600 to-pink-700 text-white text-center shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">Precision 3D Printing Services</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in-up-200">
            Bring your designs to life with our advanced 3D printing capabilities, from rapid prototypes to functional parts.
          </p>
        </div>
      </section>

      {/* Service Options Section (Tabs) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader
            title="Choose Your 3D Printing Service"
            subtitle="Flexible Solutions for Every Need"
          />

          {/* Tab Navigation */}
          <div className="flex justify-center mb-10 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('quote')}
              className={`px-6 py-3 text-lg font-semibold transition-colors duration-200 relative group
                ${activeTab === 'quote'
                  ? 'text-indigo-700'
                  : 'text-gray-600 hover:text-indigo-700'
              }`}
            >
              Have a File? Get Instant Quote
              <span className={`absolute bottom-0 left-0 w-full h-1 bg-indigo-600 transition-transform duration-300 ${activeTab === 'quote' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-75'}`}></span>
            </button>
            <button
              onClick={() => setActiveTab('custom-model')}
              className={`px-6 py-3 text-lg font-semibold transition-colors duration-200 relative group
                ${activeTab === 'custom-model'
                  ? 'text-indigo-700'
                  : 'text-gray-600 hover:text-indigo-700'
              }`}
            >
              Need a Custom Model?
              <span className={`absolute bottom-0 left-0 w-full h-1 bg-indigo-600 transition-transform duration-300 ${activeTab === 'custom-model' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-75'}`}></span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex justify-center animate-fade-in-up-100">
            {activeTab === 'quote' && <ThreeDPrintQuoteForm />}
            {activeTab === 'custom-model' && <Custom3DModelRequestForm />}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Common 3D Printing Use Cases"
            subtitle="Versatile Applications Across Industries"
          />
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            From rapid prototyping to functional parts, our 3D printing services cater to a wide array of industrial needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className={`text-center p-6 animate-fade-in-up-${(index + 1) * 100}`}>
                <span className="text-5xl mb-4 inline-block">{useCase.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Turnaround Time & Delivery Tracking */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Seamless Process & Delivery"
            subtitle="From Design to Your Doorstep"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <Card className="p-6 animate-fade-in-up-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Efficient Turnaround</h3>
              <p className="text-gray-700 leading-relaxed">
                We prioritize speed without compromising quality. Get your parts ready in X-Y business days, depending on complexity and material.
              </p>
            </Card>
            <Card className="p-6 animate-fade-in-up-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Order & Delivery Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                Track your order's progress from submission to delivery with real-time updates.
                (Future: Integrate a tracking number input/display here).
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreeDPrintingPage;