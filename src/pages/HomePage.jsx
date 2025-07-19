// src/pages/HomePage.jsx
import Button from '../components/Button';
import PartnerLogos from '../components/PartnerLogos';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

// Dummy data for demonstration (expanded for modals)
const servicesData = [
  {
    icon: { emoji: '🧠', color: '#4F46E5' },
    title: 'AI & Machine Learning',
    description: 'Transform operations with predictive analytics, automation, and intelligent decision-making.',
    longDescription: 'Our AI solutions for manufacturing cover a broad spectrum, from predictive maintenance that anticipates equipment failures, to computer vision systems for automated quality control and anomaly detection. We implement machine learning models to optimize production schedules, reduce waste, and improve overall equipment effectiveness (OEE).',
    features: ['Predictive Maintenance', 'Computer Vision QC', 'Process Optimization', 'Anomaly Detection', 'Robotics Integration'],
    caseStudyLink: '/contact?inquiry=case-study-ai-manufacturing',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    link: '/ai-solutions',
  },
  {
    icon: { emoji: '📡', color: '#10B981' },
    title: 'Industrial IoT Solutions',
    description: 'Real-time monitoring, asset tracking, and data-driven insights for smart factories.',
    longDescription: 'Unlock the power of your industrial data with intelligent IoT platforms and intuitive dashboards. We provide end-to-end IoT solutions, from sensor deployment and data collection to cloud integration and advanced analytics. Our platforms enable real-time monitoring, remote control, and predictive insights for optimized operations.',
    features: ['Real-time Data Streams', 'Customizable Dashboards', 'Remote Monitoring & Control', 'Edge Computing', 'Secure Infrastructure'],
    link: '/iot-solutions',
  },
  {
    icon: { emoji: '⚙️', color: '#F59E0B' },
    title: 'Rapid Prototyping',
    description: 'Accelerate innovation from concept to functional prototype with our agile engineering.',
    longDescription: 'Our rapid prototyping services enable you to quickly iterate and test new product ideas. We combine advanced design tools with cutting-edge manufacturing techniques (like 3D printing and CNC machining) to transform your concepts into functional prototypes in record time, reducing development cycles and costs.',
    features: ['Concept to Prototype', 'Iterative Design', 'Functional Testing', 'Cost-Effective Development'],
    link: '/prototypes',
  },
  {
    icon: { emoji: '🖨️', color: '#EF4444' },
    title: 'Advanced 3D Printing',
    description: 'Precision manufacturing of complex parts with diverse materials for any industry.',
    longDescription: 'Leverage our state-of-the-art 3D printing facilities for high-precision manufacturing of complex parts, custom enclosures, and functional prototypes. We work with a wide range of materials including industrial-grade plastics, resins, and metals, ensuring your parts meet exact specifications for strength, durability, and finish.',
    features: ['High Precision Printing', 'Diverse Material Options', 'Custom Part Manufacturing', 'Rapid Turnaround'],
    link: '/3d-printing',
  },
  {
    icon: { emoji: '🔌', color: '#6366F1' },
    title: 'Custom Hardware & Boards',
    description: 'Bespoke PCB design and embedded systems for specialized industrial applications.',
    longDescription: 'We design and manufacture custom printed circuit boards (PCBs) and embedded systems tailored to your unique industrial requirements. From sensor integration and power management to robust connectivity solutions, our hardware engineering team delivers reliable, high-performance custom electronics for demanding environments.',
    features: ['Custom PCB Design', 'Embedded Systems', 'Sensor Integration', 'Power Solutions', 'Industrial Grade Components'],
    link: '/custom-hardware',
  },
  {
    icon: { emoji: '📊', color: '#06B6D4' },
    title: 'Data Visualization & Dashboards',
    description: 'Intuitive, interactive dashboards for actionable insights from your industrial data.',
    longDescription: 'Transform complex industrial data into clear, actionable insights with our custom data visualization and dashboard services. We design and develop intuitive, interactive dashboards that provide real-time visibility into your operations, helping you monitor KPIs, identify trends, and make informed decisions. We integrate with platforms like Grafana and ThingsBoard.',
    features: ['Custom Dashboard Design', 'Real-time Data Display', 'Interactive Charts & Graphs', 'KPI Monitoring', 'Alerting & Reporting'],
    link: '/iot-solutions',
  },
];

const testimonialsData = [
  { quote: "Quantaraa's AI solution revolutionized our quality control, reducing defects by 30%. Their team is unparalleled!", author: "Dr. Anya Sharma", title: "CTO, Global Manufacturing Inc." },
  { quote: "The custom IoT dashboard provided by Quantaraa gave us unprecedented visibility into our operations. A true game-changer.", author: "Mr. Raj Patel", title: "Operations Director, Apex Logistics" },
  { quote: "From concept to prototype, Quantaraa delivered with incredible speed and precision. Their expertise is truly world-class.", author: "Ms. Lena Khan", title: "Head of R&D, Innovatech" },
];

const HomePage = () => {
  return (
    <div className="flex flex-col bg-gray-50 font-sans antialiased">
      <main className="flex-grow">
        {/* 1. Hero Section: The Grand Entrance */}
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-950">
          {/* Background Visuals: Subtle, Dynamic, and High-Tech */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute inset-0 bg-cover bg-center animate-fade-in" style={{ backgroundImage: "url('/images/hero-bg-abstract.jpg')" }}></div>
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Future-Proof Your Industry with <span className="text-indigo-300 drop-shadow-lg">Intelligent Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in-up-200">
              Quantaraa empowers businesses with cutting-edge AI, IoT, and advanced manufacturing technologies for unparalleled efficiency and innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up-400">
              <Button to="/contact?inquiry=demo" variant="light-outline" className="min-w-[200px] border-2">
                Request a Demo
              </Button>
              <Button to="/iot-solutions" variant="primary" className="min-w-[200px] bg-white text-indigo-800 hover:bg-indigo-100">
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
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  longDescription={service.longDescription}
                  features={service.features}
                  caseStudyLink={service.caseStudyLink}
                  demoVideoUrl={service.demoVideoUrl}
                  link={service.link}
                  className="animate-fade-in-up-100" // Apply animation to cards
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. "Why Choose Us" / Value Proposition Section */}
        <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <SectionHeader
              title="Why Partner with Quantaraa?"
              subtitle="Unlocking Industrial Potential"
              className="text-white"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-8 rounded-xl bg-white bg-opacity-15 backdrop-filter backdrop-blur-sm shadow-xl hover:bg-opacity-25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 animate-fade-in-up-200">
                <span className="text-5xl mb-4 inline-block transform transition-transform duration-300 group-hover:scale-110">🚀</span>
                <h3 className="text-2xl font-bold mb-3">Accelerated Innovation</h3>
                <p className="text-lg opacity-90">Rapid prototyping and agile development cycles bring your ideas to market faster.</p>
              </div>
              <div className="p-8 rounded-xl bg-white bg-opacity-15 backdrop-filter backdrop-blur-sm shadow-xl hover:bg-opacity-25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 animate-fade-in-up-300">
                <span className="text-5xl mb-4 inline-block transform transition-transform duration-300 group-hover:scale-110">💡</span>
                <h3 className="text-2xl font-bold mb-3">Tailored Expertise</h3>
                <p className="text-lg opacity-90">Custom solutions designed specifically for your unique industrial challenges.</p>
              </div>
              <div className="p-8 rounded-xl bg-white bg-opacity-15 backdrop-filter backdrop-blur-sm shadow-xl hover:bg-opacity-25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 animate-fade-in-up-400">
                <span className="text-5xl mb-4 inline-block transform transition-transform duration-300 group-hover:scale-110">📈</span>
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
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-10 rounded-xl shadow-2xl border border-gray-200 animate-fade-in-up-100">
              <div className="lg:w-1/2">
                <img
                  src="/images/case-study-factory.jpg"
                  alt="Case Study: Smart Factory Optimization"
                  className="rounded-lg shadow-xl w-full h-auto object-cover transform transition-transform duration-300 hover:scale-102"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Revolutionizing Production for a Leading Automotive Manufacturer
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Implemented an AI-powered predictive maintenance system that reduced unplanned downtime by 25% and optimized energy consumption by 15% across their main assembly lines.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 text-left mx-auto lg:mx-0 max-w-md space-y-1">
                  <li>25% Reduction in Downtime</li>
                  <li>15% Energy Optimization</li>
                  <li>Real-time Anomaly Detection</li>
                  <li>Seamless Integration</li>
                </ul>
                <Button to="/contact?inquiry=case-study-automotive" variant="primary">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} className="animate-fade-in-up-100" />
              ))}
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
              <Button to="/iot-solutions" variant="primary" className="min-w-[200px] bg-white text-indigo-800 hover:bg-indigo-100">
                View All Solutions
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;