// src/pages/PrototypesPage.jsx
import { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';

// Dummy Data for Ready Prototypes (Expanded with more detail)
const readyPrototypes = [
  {
    id: 1,
    name: 'Smart Factory IoT Gateway',
    description: 'A robust IoT gateway for real-time data collection from industrial sensors and machinery.',
    longDescription: 'This cutting-edge gateway is designed for harsh industrial environments, ensuring reliable data acquisition from diverse sensors (temperature, humidity, pressure, vibration, etc.). It supports multiple industrial protocols (Modbus, OPC-UA) and securely transmits data via MQTT to your chosen cloud platform (AWS IoT, Azure IoT Hub, Google Cloud IoT Core) or local ThingsBoard/Grafana instances. Features include edge processing capabilities, secure boot, and remote management.',
    image: 'https://placehold.co/400x250/F0F9FF/1D4ED8?text=IoT+Gateway',
    features: ['Edge Computing', 'MQTT/OPC-UA Support', 'Secure Data Transmission', 'Cloud Integration', 'Remote Management', 'Industrial Grade'],
    useCases: ['Predictive Maintenance', 'Asset Tracking', 'Energy Monitoring', 'Process Optimization'],
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    price: 35000,
    category: 'Prototype',
  },
  {
    id: 2,
    name: 'AI-Powered Quality Inspection Unit',
    description: 'Automated visual inspection system using computer vision for defect detection in manufacturing lines.',
    longDescription: 'Our AI-powered unit leverages deep learning models (CNNs) to identify microscopic defects, anomalies, and inconsistencies on production lines at high speed. It integrates seamlessly with existing conveyor systems and robotic arms, providing real-time feedback and flagging defective products. Reduces manual inspection errors and significantly improves throughput and quality standards.',
    image: 'https://placehold.co/400x250/FDF2F8/BE185D?text=AI+Inspection',
    features: ['Real-time Analysis', 'Machine Learning Models', 'High Precision', 'Integration with PLCs', 'Customizable Defect Libraries', 'Scalable'],
    useCases: ['Automotive Parts Inspection', 'Electronics QC', 'Food & Beverage Packaging', 'Textile Defect Detection'],
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    price: 80000,
    category: 'Prototype',
  },
  {
    id: 3,
    name: 'Predictive Maintenance Sensor Kit',
    description: 'Wireless sensor package designed to monitor equipment health and predict potential failures.',
    longDescription: 'This comprehensive sensor kit includes vibration, temperature, and acoustic sensors designed for continuous monitoring of industrial machinery. Data is transmitted wirelessly to a local gateway or cloud, where AI algorithms analyze patterns to predict potential failures, enabling proactive maintenance and preventing costly downtime.',
    image: 'https://placehold.co/400x250/FEFCE8/A16207?text=Predictive+Maint',
    features: ['Vibration/Temperature Sensors', 'Anomaly Detection', 'Cloud Dashboard', 'Alerting System', 'Wireless Connectivity', 'Easy Installation'],
    useCases: ['Motor Monitoring', 'Pump Health', 'Conveyor Belt Diagnostics', 'HVAC Systems'],
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    price: 25000,
    category: 'Prototype',
  },
  {
    id: 4,
    name: 'Automated Inventory Management Drone',
    description: 'Autonomous drone solution for rapid and accurate warehouse inventory counting and tracking.',
    longDescription: 'Our advanced drone system autonomously navigates warehouses, using computer vision and RFID/barcode scanning to perform rapid inventory counts. It significantly reduces manual labor, improves accuracy, and provides real-time inventory data, optimizing supply chain efficiency and reducing stock discrepancies.',
    image: 'https://placehold.co/400x250/ECFDF5/065F46?text=Inventory+Drone',
    features: ['SLAM Navigation', 'RFID/Barcode Scanning', 'Automated Charging', 'Data Synchronization', 'Collision Avoidance', 'Customizable Flight Paths'],
    useCases: ['Warehouse Inventory', 'Logistics Hubs', 'Retail Stock Management', 'Asset Tracking'],
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    price: 120000,
    category: 'Prototype',
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
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIdeaFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitIdea = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null);

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
        setIdeaFormData({
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
      <section className="relative py-24 bg-gradient-to-r from-teal-600 to-green-700 text-white text-center shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">Innovative Prototypes</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in-up-200">
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
          />
          <Card className="p-8 shadow-lg animate-fade-in-up-100">
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
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
                  className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
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
                  className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
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
                  className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
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
                  className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
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
                  className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y transition-all duration-200"
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
                  className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
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
                  className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
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
                  <p className="text-green-600 mt-4 animate-fade-in">Idea submitted successfully! We'll be in touch soon.</p>
                )}
                {submissionStatus === 'error' && (
                  <p className="text-red-600 mt-4 animate-fade-in">Failed to submit idea. Please try again later.</p>
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
          />
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore our catalog of pre-built, production-ready prototypes. These solutions are
            designed to jumpstart your projects, offering immediate implementation and customization possibilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {readyPrototypes.map((prototype, index) => (
              <ProductCard key={prototype.id} {...prototype} className={`animate-fade-in-up-${(index + 1) * 100}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrototypesPage;