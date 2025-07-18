// src/pages/HomePage.jsx

// Import all necessary components that HomePage uses
import Button from '../components/Button';
import PartnerLogos from '../components/PartnerLogos';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

// Dummy data for demonstration
const servicesData = [
  { icon: { emoji: '🧠', color: '#4F46E5' }, title: 'AI & Machine Learning', description: 'Transform operations with predictive analytics, automation, and intelligent decision-making.', link: '/ai-solutions' },
  { icon: { emoji: '📡', color: '#10B981' }, title: 'Industrial IoT Solutions', description: 'Real-time monitoring, asset tracking, and data-driven insights for smart factories.', link: '/iot-solutions' },
  { icon: { emoji: '⚙️', color: '#F59E0B' }, title: 'Rapid Prototyping', description: 'Accelerate innovation from concept to functional prototype with our agile engineering.', link: '/prototypes' },
  { icon: { emoji: '🖨️', color: '#EF4444' }, title: 'Advanced 3D Printing', description: 'Precision manufacturing of complex parts with diverse materials for any industry.', link: '/3d-printing' },
  { icon: { emoji: '🔌', color: '#6366F1' }, title: 'Custom Hardware & Boards', description: 'Bespoke PCB design and embedded systems for specialized industrial applications.', link: '/custom-hardware' },
  { icon: { emoji: '📊', color: '#06B6D4' }, title: 'Data Visualization & Dashboards', description: 'Intuitive, interactive dashboards for actionable insights from your industrial data.', link: '/data-visualization' },
];

const testimonialsData = [
  { quote: "Quantaraa's AI solution revolutionized our quality control, reducing defects by 30%. Their team is unparalleled!", author: "Dr. Anya Sharma", title: "CTO, Global Manufacturing Inc." },
  { quote: "The custom IoT dashboard provided by Quantaraa gave us unprecedented visibility into our operations. A true game-changer.", author: "Mr. Raj Patel", title: "Operations Director, Apex Logistics" },
  { quote: "From concept to prototype, Quantaraa delivered with incredible speed and precision. Their expertise is truly world-class.", author: "Ms. Lena Khan", title: "Head of R&D, Innovatech" },
];

const HomePage = () => {
  return (
    // IMPORTANT: Navbar and Footer are NOT rendered here. They are in App.jsx.
    // This div is the main container for the HomePage's unique content.
    <div className="flex flex-col bg-gray-50 font-sans antialiased">

      {/* The <main> tag here is specific to the HomePage content, not the app's main layout */}
      <main className="flex-grow">
        {/* 1. Hero Section: The Grand Entrance */}
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-indigo-800 to-purple-900">
          {/* Background Visuals: Subtle, Dynamic, and High-Tech */}
          <div className="absolute inset-0 z-0 opacity-20">
            {/* For now, a placeholder div with a gradient/pattern */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg-abstract.jpg')" }}></div>
            {/* Overlay for depth */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Future-Proof Your Industry with <span className="text-indigo-300">Intelligent Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in-up delay-200">
              Quantaraa empowers businesses with cutting-edge AI, IoT, and advanced manufacturing technologies for unparalleled efficiency and innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
              <Button to="/contact?inquiry=demo" variant="light-outline" className="min-w-[200px] hover:bg-white hover:text-indigo-800 border-2">
                Request a Demo
              </Button>
              <Button to="/services" variant="primary" className="min-w-[200px] bg-white text-indigo-800 hover:bg-indigo-100">
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Trust & Credibility: Partner Logos */}
        <PartnerLogos />

        {/* 3. Core Solutions Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="Our Core Solutions"
              subtitle="Innovating Across Industries"
              className="mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. "Why Choose Us" / Value Proposition Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <SectionHeader
              title="Why Partner with Quantaraa?"
              subtitle="Unlocking Industrial Potential"
              className="text-white mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <span className="text-5xl mb-4 inline-block">🚀</span>
                <h3 className="text-2xl font-bold mb-3">Accelerated Innovation</h3>
                <p className="text-lg opacity-90">Rapid prototyping and agile development cycles bring your ideas to market faster.</p>
              </div>
              <div className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <span className="text-5xl mb-4 inline-block">💡</span>
                <h3 className="text-2xl font-bold mb-3">Tailored Expertise</h3>
                <p className="text-lg opacity-90">Custom solutions designed specifically for your unique industrial challenges.</p>
              </div>
              <div className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <span className="text-5xl mb-4 inline-block">📈</span>
                <h3 className="text-2xl font-bold mb-3">Tangible ROI</h3>
                <p className="text-lg opacity-90">Solutions engineered to deliver measurable improvements in efficiency and cost savings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Featured Case Study / Success Story */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="Impactful Transformations"
              subtitle="Our Success Stories"
            />
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 rounded-xl shadow-2xl">
              <div className="lg:w-1/2">
                <img
                  src="/images/case-study-factory.jpg" // Placeholder image
                  alt="Case Study: Smart Factory Optimization"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Revolutionizing Production for a Leading Automotive Manufacturer
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Implemented an AI-powered predictive maintenance system that reduced unplanned downtime by 25% and optimized energy consumption by 15% across their main assembly lines.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 text-left mx-auto lg:mx-0 max-w-md">
                  <li>25% Reduction in Downtime</li>
                  <li>15% Energy Optimization</li>
                  <li>Real-time Anomaly Detection</li>
                  <li>Seamless Integration</li>
                </ul>
                <Button to="/case-studies/automotive" variant="primary">
                  Read Full Case Study
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Testimonials Carousel */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="What Our Clients Say"
              subtitle="Voices of Trust"
            />
            {/* This would ideally be a carousel component (e.g., using Swiper.js) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
            {/* Placeholder for carousel navigation if implemented */}
            <div className="mt-8 text-center">
              {/* <div className="inline-flex space-x-2">
                <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-indigo-500 transition-colors"></button>
                <button className="w-3 h-3 rounded-full bg-indigo-600"></button>
                <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-indigo-500 transition-colors"></button>
              </div> */}
            </div>
          </div>
        </section>

        {/* 7. Call to Action: Ready to Transform Your Business? */}
        <section className="py-20 bg-indigo-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
              Partner with Quantaraa to unlock new levels of efficiency, innovation, and competitive advantage. Let's build the future, together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" variant="light-outline" className="min-w-[200px] border-2">
                Get in Touch
              </Button>
              <Button to="/services" variant="primary" className="min-w-[200px] bg-white text-indigo-800 hover:bg-indigo-100">
                View All Services
              </Button>
            </div>
          </div>
        </section>

      </main>

      {/* Removed Footer and Navbar from HomePage.jsx */}
    </div>
  );
};

export default HomePage;