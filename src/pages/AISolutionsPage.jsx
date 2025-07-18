import { Link } from 'react-router-dom';
import AIAssistantChat from '../components/AIAssistantChat'; // Import the AI Assistant
import Button from '../components/Button';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm'; // Reusing ContactForm for custom inquiries
import SectionHeader from '../components/SectionHeader';

// Dummy Data for AI Solutions
const aiSolutions = [
  {
    icon: '🏭',
    title: 'Manufacturing & Industry 4.0',
    description: 'Predictive maintenance, quality control (CV), anomaly detection, process optimization.',
    link: '#', // Link to more details or case studies
  },
  {
    icon: '🌾',
    title: 'Agriculture & AgriTech',
    description: 'Crop monitoring, yield prediction, pest detection, automated irrigation systems.',
    link: '#',
  },
  {
    icon: '🚚',
    title: 'Logistics & Supply Chain',
    description: 'Route optimization, demand forecasting, warehouse automation, fleet management.',
    link: '#',
  },
  {
    icon: '🏥',
    title: 'Healthcare & Life Sciences',
    description: 'Diagnostic assistance, drug discovery support, patient monitoring analytics.',
    link: '#',
  },
  {
    icon: '🏙️',
    title: 'Smart Cities & Infrastructure',
    description: 'Traffic management, energy grid optimization, public safety analytics.',
    link: '#',
  },
  {
    icon: '♻️',
    title: 'Energy & Utilities',
    description: 'Grid efficiency, renewable energy forecasting, smart meter analytics.',
    link: '#',
  },
];

// Dummy Data for Tech Stack Logos (replace with actual paths if you have them)
const techStackLogos = [
  'https://placehold.co/100x50/FDF2F8/BE185D?text=PyTorch',
  'https://placehold.co/100x50/E0F2F7/007BFF?text=TensorFlow',
  'https://placehold.co/100x50/F0FDF4/047857?text=OpenCV',
  'https://placehold.co/100x50/FFFBEB/D97706?text=Keras',
  'https://placehold.co/100x50/EEF2FF/4F46E5?text=Scikit-learn',
  'https://placehold.co/100x50/FDF6F0/E67E22?text=AWS+AI', // Example cloud AI
  'https://placehold.co/100x50/EBF8FF/3B82F6?text=Azure+ML', // Example cloud AI
];

const AISolutionsPage = () => {
  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">AI Solutions for a Smarter Tomorrow</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
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
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions.map((solution, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                <span className="text-5xl mb-4 inline-block">{solution.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{solution.description}</p>
                <Link to={solution.link} className="text-indigo-600 hover:underline mt-auto">Learn More</Link>
              </Card>
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
            className="mb-10"
          />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Have questions about AI applications, potential solutions for your business, or general AI concepts?
            Our AI assistant is here to help guide you.
          </p>
          <AIAssistantChat /> {/* The AI Assistant component */}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader
            title="Our Advanced AI Tech Stack"
            subtitle="Powering Intelligent Solutions"
            className="mb-10"
          />
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 px-4 max-w-5xl mx-auto">
            {techStackLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Tech Stack Logo ${index + 1}`}
                className="h-12 md:h-16 opacity-80 hover:opacity-100 transition-opacity duration-300 max-w-[150px] object-contain filter grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom AI Project Inquiry Form */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionHeader
            title="Start Your Custom AI Project"
            subtitle="Tailored Solutions for Your Unique Challenges"
            className="text-white mb-10"
          />
          <p className="text-lg opacity-90 mb-10">
            Have a specific AI problem or a complex project in mind? Our experts are ready to collaborate.
            Fill out the form below, and let's discuss how AI can transform your business.
          </p>
          <ContactForm formType="Custom AI Project Inquiry" /> {/* Reusing the ContactForm */}
        </div>
      </section>

      {/* Case Studies / Demo Models (Placeholder) */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader
            title="AI in Action"
            subtitle="Case Studies & Demos"
            className="mb-10"
          />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            See how Quantaraa's AI solutions have delivered tangible results across various industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* You can add specific CaseStudyCard components here later */}
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Manufacturing Quality Control</h3>
              <p className="text-gray-600 mb-4">Automated visual inspection reducing defects by 30%.</p>
              <Button variant="outline" to="/case-studies/manufacturing">View Case Study</Button>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Farming Yield Prediction</h3>
              <p className="text-gray-600 mb-4">AI models predicting crop yields with 95% accuracy.</p>
              <Button variant="outline" to="/case-studies/agriculture">View Case Study</Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;