// src/pages/IoTSolutionsPage.jsx
import ContactForm from '../components/ContactForm';
import SectionHeader from '../components/SectionHeader';
import SolutionCard from '../components/SolutionCard'; // Using SolutionCard for IoT solutions

// Dummy Data for IoT Solutions (Expanded)
const iotSolutions = [
  {
    icon: '📊',
    title: 'Real-time IoT Dashboards',
    description: 'Visualize operational data instantly with customizable, intuitive dashboards.',
    longDescription: 'Our real-time IoT dashboards provide a comprehensive overview of your industrial operations. With customizable widgets, live data streams, and intuitive interfaces, you can monitor KPIs, track assets, and identify trends at a glance. We integrate with leading platforms like Grafana and ThingsBoard for seamless data visualization.',
    features: ['Live Data Streams', 'Customizable Widgets', 'Alerting & Notifications', 'Historical Data Analysis', 'User Access Control'],
    image: 'https://placehold.co/400x250/E0F7FA/00BCD4?text=IoT+Dashboard',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    icon: '📡',
    title: 'Remote Monitoring & Control',
    description: 'Monitor and control industrial assets from anywhere, anytime.',
    longDescription: 'Gain unprecedented control over your remote assets. Our solutions enable you to monitor equipment performance, environmental conditions, and operational status remotely. Beyond monitoring, you can also send commands and control devices, optimizing efficiency and reducing the need for on-site visits.',
    features: ['Asset Tracking', 'Predictive Maintenance', 'Remote Diagnostics', 'Automated Alerts', 'Two-way Communication'],
    image: 'https://placehold.co/400x250/F3E8FF/6D28D9?text=Remote+Control',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    icon: '🧠',
    title: 'Edge Computing & Analytics',
    description: 'Process data at the source for faster insights and reduced latency.',
    longDescription: 'Implement edge computing solutions to bring computation closer to your data sources. This minimizes latency, reduces bandwidth consumption, and enables real-time analytics and decision-making directly at the industrial site. Ideal for critical applications where immediate response is paramount, even with intermittent connectivity.',
    features: ['Local Data Processing', 'Reduced Cloud Costs', 'Offline Operation', 'Real-time Decision Making', 'Data Filtering'],
    image: 'https://placehold.co/400x250/FFFBEB/D97706?text=Edge+Computing',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    icon: '🔒',
    title: 'Secure IoT Infrastructure',
    description: 'Robust security protocols to protect your sensitive industrial data.',
    longDescription: 'Security is paramount in industrial IoT. We build secure IoT infrastructures with end-to-end encryption, robust authentication mechanisms, and continuous threat detection. Our solutions protect your devices, data, and networks from cyber threats, ensuring operational integrity and compliance.',
    features: ['End-to-End Encryption', 'Access Control', 'Threat Detection', 'Vulnerability Management', 'Compliance Adherence'],
    image: 'https://placehold.co/400x250/EBF8FF/3B82F6?text=IoT+Security',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

// Dummy Data for Data Visualization Services
const dataVizServices = [
  {
    icon: '📈',
    title: 'Custom Dashboard Development',
    description: 'Tailored dashboards for specific KPIs and operational insights.',
    longDescription: 'We design and develop custom dashboards that precisely meet your operational and analytical needs. From executive summaries to detailed operational views, our dashboards are built to highlight your key performance indicators (KPIs) and provide actionable insights, integrating data from various sources.',
    features: ['KPI Tracking', 'Interactive Charts', 'Multi-source Data Integration', 'User-friendly Interface'],
  },
  {
    icon: '🔍',
    title: 'Advanced Analytics Integration',
    description: 'Integrate complex analytical models directly into your data views.',
    longDescription: 'Beyond basic visualization, we integrate advanced analytical models (including AI/ML outputs) directly into your dashboards. This allows you to perform complex data analysis, identify hidden patterns, and gain deeper insights without leaving your primary monitoring interface.',
    features: ['Predictive Analytics', 'Prescriptive Analytics', 'Anomaly Detection Algorithms', 'Machine Learning Integration'],
  },
  {
    icon: '📱',
    title: 'Mobile & Web Accessibility',
    description: 'Access your critical data on any device, seamlessly.',
    longDescription: 'Our data visualization solutions are designed for universal access. Whether you are on a desktop computer, tablet, or smartphone, your critical operational data and dashboards are accessible and fully responsive, ensuring you can make informed decisions on the go.',
    features: ['Responsive Design', 'Cross-Browser Compatibility', 'Mobile-First Approach', 'Intuitive Navigation'],
  },
  {
    icon: '☁️',
    title: 'Cloud-Based Solutions',
    description: 'Scalable and secure cloud infrastructure for your data needs.',
    longDescription: 'Leverage the power of cloud computing for your IoT and data visualization needs. Our cloud-based solutions offer unparalleled scalability, reliability, and security, ensuring your data infrastructure can grow with your business and is protected against cyber threats.',
    features: ['Scalable Infrastructure', 'High Availability', 'Data Security & Compliance', 'Cost-Effective Storage'],
  },
];

const IoTSolutionsPage = () => {
  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-blue-700 to-cyan-800 text-white text-center shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">IoT & Data Solutions</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in-up-200">
            Unlock the power of your industrial data with intelligent IoT platforms and intuitive dashboards.
          </p>
        </div>
      </section>

      {/* Industrial IoT Offerings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Industrial IoT Offerings"
            subtitle="Connecting Your Operations"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {iotSolutions.map((solution, index) => (
              <SolutionCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                longDescription={solution.longDescription}
                features={solution.features}
                demoVideoUrl={solution.demoVideoUrl}
                className={`animate-fade-in-up-${(index + 1) * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Data Visualization & Analytics Services */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Data Visualization & Analytics Services"
            subtitle="Transforming Data into Actionable Insights"
          />
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            We specialize in creating powerful, interactive dashboards and reports that turn raw data into clear, actionable intelligence for strategic decision-making.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataVizServices.map((service, index) => (
              <SolutionCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                longDescription={service.longDescription}
                features={service.features}
                className={`animate-fade-in-up-${(index + 1) * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integration with Grafana/ThingsBoard */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader
            title="Seamless Dashboard Integration"
            subtitle="Leveraging Industry-Leading Platforms"
          />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            We specialize in setting up and customizing powerful IoT dashboards using platforms like
            **Grafana** and **ThingsBoard**, ensuring you have full control and visibility over your operations.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 animate-fade-in-up-100">
            <img src="https://placehold.co/180x60/F0F9FF/007BFF?text=Grafana" alt="Grafana Logo" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
            <img src="https://placehold.co/180x60/FDF2F8/BE185D?text=ThingsBoard" alt="ThingsBoard Logo" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
          </div>
        </div>
      </section>

      {/* Call to Action for Custom IoT/Data Solutions */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-blue-800 text-white shadow-inner">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionHeader
            title="Ready for Smarter Operations?"
            subtitle="Let's Build Your IoT & Data Strategy"
            className="text-white"
          />
          <p className="text-lg opacity-90 mb-10 leading-relaxed">
            Whether you need real-time dashboards, remote monitoring, or advanced data analytics,
            Quantaraa delivers tailored solutions to elevate your industrial intelligence.
          </p>
          <ContactForm formType="IoT/Data Solutions Inquiry" className="animate-fade-in-up-100" />
        </div>
      </section>
    </div>
  );
};

export default IoTSolutionsPage;