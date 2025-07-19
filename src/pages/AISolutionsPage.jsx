// src/pages/AISolutionsPage.jsx
import AIAssistantChat from '../components/AIAssistantChat';
import Button from '../components/Button';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import SectionHeader from '../components/SectionHeader';
import SolutionCard from '../components/SolutionCard';

// Dummy Data for AI Solutions (Expanded with more detail)
const aiSolutions = [
  {
    icon: '🏭',
    title: 'Manufacturing & Industry 4.0',
    description: 'Predictive maintenance, quality control (CV), anomaly detection, process optimization.',
    longDescription: 'Our AI solutions for manufacturing cover a broad spectrum, from predictive maintenance that anticipates equipment failures, to computer vision systems for automated quality control and anomaly detection. We implement machine learning models to optimize production schedules, reduce waste, and improve overall equipment effectiveness (OEE).',
    features: ['Predictive Maintenance', 'Computer Vision QC', 'Process Optimization', 'Anomaly Detection', 'Robotics Integration'],
    caseStudyLink: '/contact?inquiry=case-study-ai-manufacturing',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    icon: '🌾',
    title: 'Agriculture & AgriTech',
    description: 'Crop monitoring, yield prediction, pest detection, automated irrigation systems.',
    longDescription: 'Leverage AI to revolutionize your agricultural practices. Our solutions provide satellite imagery analysis for precise crop health monitoring, machine learning models for accurate yield prediction based on weather and soil data, and AI-driven systems for automated pest and disease detection. Optimize resource usage and maximize output with smart farming technologies.',
    features: ['Crop Health Monitoring', 'Yield Prediction', 'Pest/Disease Detection', 'Automated Irrigation', 'Drone Integration'],
    caseStudyLink: '/contact?inquiry=case-study-agriculture-ai',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    icon: '🚚',
    title: 'Logistics & Supply Chain',
    description: 'Route optimization, demand forecasting, warehouse automation, fleet management.',
    longDescription: 'AI-driven solutions for logistics streamline your entire supply chain. This includes intelligent route optimization for delivery fleets, accurate demand forecasting to prevent stockouts or overstock, and AI-powered automation for warehouse operations, leading to significant cost reductions and improved delivery times.',
    features: ['Route Optimization', 'Demand Forecasting', 'Warehouse Automation', 'Fleet Management', 'Inventory Optimization'],
    caseStudyLink: '/contact?inquiry=case-study-logistics-ai',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    icon: '🏥',
    title: 'Healthcare & Life Sciences',
    description: 'Diagnostic assistance, drug discovery support, patient monitoring analytics.',
    longDescription: 'Our AI in healthcare focuses on assisting medical professionals and accelerating research. Solutions include AI for analyzing medical images for diagnostic assistance, accelerating drug discovery processes through molecular modeling, and real-time patient monitoring analytics for proactive care.',
    features: ['Diagnostic Assistance', 'Drug Discovery Support', 'Patient Monitoring', 'Personalized Treatment Plans'],
    caseStudyLink: '/contact?inquiry=case-study-healthcare-ai',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    icon: '🏙️',
    title: 'Smart Cities & Infrastructure',
    description: 'Traffic management, energy grid optimization, public safety analytics.',
    longDescription: 'AI for smart cities creates more efficient and safer urban environments. Solutions include intelligent traffic management systems that adapt to real-time conditions, AI-driven optimization of energy grids for sustainability, and advanced analytics for public safety and resource allocation.',
    features: ['Traffic Management', 'Energy Grid Optimization', 'Public Safety Analytics', 'Waste Management Optimization'],
    caseStudyLink: '/contact?inquiry=case-study-smart-cities-ai',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    icon: '♻️',
    title: 'Energy & Utilities',
    description: 'Grid efficiency, renewable energy forecasting, smart meter analytics.',
    longDescription: 'AI solutions for energy and utilities focus on optimizing resource management and enhancing infrastructure. This includes AI for improving grid efficiency, forecasting renewable energy generation (solar, wind), and analyzing smart meter data for demand-side management and fault detection.',
    features: ['Grid Efficiency', 'Renewable Energy Forecasting', 'Smart Meter Analytics', 'Predictive Maintenance for Assets'],
    caseStudyLink: '/contact?inquiry=case-study-energy-ai',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

// Dummy Data for Tech Stack Logos
const techStackLogos = [
  'https://placehold.co/100x50/FDF2F8/BE185D?text=PyTorch',
  'https://placehold.co/100x50/E0F2F7/007BFF?text=TensorFlow',
  'https://placehold.co/100x50/F0FDF4/047857?text=OpenCV',
  'https://placehold.co/100x50/FFFBEB/D97706?text=Keras',
  'https://placehold.co/100x50/EEF2FF/4F46E5?text=Scikit-learn',
  'https://placehold.co/100x50/FDF6F0/E67E22?text=AWS+AI',
  'https://placehold.co/100x50/EBF8FF/3B82F6?text=Azure+ML',
];

const AISolutionsPage = () => {
  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">AI Solutions for a Smarter Tomorrow</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in-up-200">
            Leveraging cutting-edge Artificial Intelligence to solve complex industrial challenges and drive innovation.
          </p>
        </div>
      </section>

      {/* Industry-wise AI Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Industry-Specific AI Solutions"
            subtitle="Tailored Intelligence for Every Sector"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} className={`animate-fade-in-up-${(index + 1) * 100}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Built-in AI Assistant Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader
            title="Your AI Solutions Assistant"
            subtitle="Get Instant Guidance and Insights"
          />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Have questions about AI applications, potential solutions for your business, or general AI concepts?
            Our AI assistant is here to help guide you.
          </p>
          <AIAssistantChat className="animate-fade-in-up-100" />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader
            title="Our Advanced AI Tech Stack"
            subtitle="Powering Intelligent Solutions"
          />
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 px-4 max-w-5xl mx-auto">
            {techStackLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Tech Stack Logo ${index + 1}`}
                className="h-14 md:h-16 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 filter grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom AI Project Inquiry Form */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-800 text-white shadow-inner">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionHeader
            title="Start Your Custom AI Project"
            subtitle="Tailored Solutions for Your Unique Challenges"
            className="text-white"
          />
          <p className="text-lg opacity-90 mb-10 leading-relaxed">
            Have a specific AI problem or a complex project in mind? Our experts are ready to collaborate.
            Fill out the form below, and let's discuss how AI can transform your business.
          </p>
          <ContactForm formType="Custom AI Project Inquiry" className="animate-fade-in-up-100" />
        </div>
      </section>

      {/* Case Studies / Demo Models (Placeholder) */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader
            title="AI in Action"
            subtitle="Case Studies & Demos"
          />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            See how Quantaraa's AI solutions have delivered tangible results across various industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 text-center animate-fade-in-up-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Manufacturing Quality Control</h3>
              <p className="text-gray-600 mb-4">Automated visual inspection reducing defects by 30%.</p>
              <Button variant="outline" to="/contact?inquiry=case-study-manufacturing">View Case Study</Button>
            </Card>
            <Card className="p-6 text-center animate-fade-in-up-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Farming Yield Prediction</h3>
              <p className="text-gray-600 mb-4">AI models predicting crop yields with 95% accuracy.</p>
              <Button variant="outline" to="/contact?inquiry=case-study-agriculture">View Case Study</Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;