import { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card'; // Assuming Card.jsx is available
import SectionHeader from '../components/SectionHeader';

// Dummy Data for Ready Prototypes
const readyPrototypes = [
  {
    id: 1,
    name: 'Smart Factory IoT Gateway',
    description: 'A robust IoT gateway for real-time data collection from industrial sensors and machinery.',
    image: 'https://placehold.co/400x250/F0F9FF/1D4ED8?text=IoT+Gateway', // Placeholder image
    features: ['Edge Computing', 'MQTT/OPC-UA Support', 'Secure Data Transmission', 'Cloud Integration'],
    link: '#', // Placeholder for a detailed page or demo
  },
  {
    id: 2,
    name: 'AI-Powered Quality Inspection Unit',
    description: 'Automated visual inspection system using computer vision for defect detection in manufacturing lines.',
    image: 'https://placehold.co/400x250/FDF2F8/BE185D?text=AI+Inspection', // Placeholder image
    features: ['Real-time Analysis', 'Machine Learning Models', 'High Precision', 'Integration with PLCs'],
    link: '#',
  },
  {
    id: 3,
    name: 'Predictive Maintenance Sensor Kit',
    description: 'Wireless sensor package designed to monitor equipment health and predict potential failures.',
    image: 'https://placehold.co/400x250/FEFCE8/A16207?text=Predictive+Maint', // Placeholder image
    features: ['Vibration/Temperature Sensors', 'Anomaly Detection', 'Cloud Dashboard', 'Alerting System'],
    link: '#',
  },
  {
    id: 4,
    name: 'Automated Inventory Management Drone',
    description: 'Autonomous drone solution for rapid and accurate warehouse inventory counting and tracking.',
    image: 'https://placehold.co/400x250/ECFDF5/065F46?text=Inventory+Drone', // Placeholder image
    features: ['SLAM Navigation', 'RFID/Barcode Scanning', 'Automated Charging', 'Data Synchronization'],
    link: '#',
  },
];

const PrototypesPage = () => {
  const [ideaFormData, setIdeaFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectTitle: '',
    description: '',
    budgetRange: '',
    timeline: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIdeaFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitIdea = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null);

    // TODO: Replace with your actual API endpoint for submitting prototype ideas
    try {
      const response = await fetch('/api/submit-prototype-idea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ideaFormData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setIdeaFormData({ // Clear form
          name: '', email: '', company: '', projectTitle: '', description: '', budgetRange: '', timeline: ''
        });
      } else {
        const errorData = await response.json();
        setSubmissionStatus('error');
        console.error('Failed to submit idea:', errorData.message || response.statusText);
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Network error during idea submission:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-teal-600 to-green-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">Innovative Prototypes</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            From groundbreaking concepts to ready-to-deploy solutions, we bring your industrial visions to life.
          </p>
        </div>
      </section>

      {/* Submit Your Idea Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader
            title="Have a Prototype Idea?"
            subtitle="Let Us Help You Build It"
            className="mb-10"
          />
          <Card className="p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Share your project concept with us, and our expert team will collaborate with you to
              transform your innovative ideas into functional prototypes and robust solutions.
            </p>
            <form onSubmit={handleSubmitIdea} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={ideaFormData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={ideaFormData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={ideaFormData.company}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="projectTitle" className="block text-gray-700 text-sm font-bold mb-2">Project Title / Idea Summary</label>
                <input
                  type="text"
                  id="projectTitle"
                  name="projectTitle"
                  value={ideaFormData.projectTitle}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Detailed Description of Your Idea</label>
                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  value={ideaFormData.description}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="budgetRange" className="block text-gray-700 text-sm font-bold mb-2">Estimated Budget Range</label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={ideaFormData.budgetRange}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Select a range</option>
                  <option value="< $10,000">Less than $10,000</option>
                  <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="> $100,000">More than $100,000</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-gray-700 text-sm font-bold mb-2">Desired Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={ideaFormData.timeline}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Select a timeline</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="> 12 months">More than 12 months</option>
                </select>
              </div>
              <div className="md:col-span-2 text-center mt-6">
                <Button type="submit" variant="primary" disabled={isLoading}>
                  {isLoading ? 'Submitting Idea...' : 'Submit Your Idea'}
                </Button>
                {submissionStatus === 'success' && (
                  <p className="text-green-600 mt-4">Idea submitted successfully! We'll be in touch soon.</p>
                )}
                {submissionStatus === 'error' && (
                  <p className="text-red-600 mt-4">Failed to submit idea. Please try again later.</p>
                )}
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Ready Prototypes Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Ready Prototypes"
            subtitle="Accelerate Your Project with Proven Solutions"
            className="mb-10"
          />
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Explore our catalog of pre-built, production-ready prototypes. These solutions are
            designed to jumpstart your projects, offering immediate implementation and customization possibilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {readyPrototypes.map((prototype) => (
              <Card key={prototype.id} className="p-6 flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={prototype.image}
                  alt={prototype.name}
                  className="w-full md:w-1/3 h-48 md:h-full object-cover rounded-md shadow-md"
                />
                <div className="md:w-2/3 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{prototype.name}</h3>
                    <p className="text-gray-700 mb-4">{prototype.description}</p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      {prototype.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <Button to={prototype.link} variant="secondary" className="mt-auto self-start">
                    Learn More / Request Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrototypesPage;