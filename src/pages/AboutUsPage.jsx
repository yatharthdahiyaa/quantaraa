import Button from '../components/Button';
import Card from '../components/Card'; // Assuming Card.jsx exists
import SectionHeader from '../components/SectionHeader';
import TeamMemberCard from '../components/TeamMemberCard'; // Import the new component

// Dummy Data for Team Members
const teamMembers = [
  {
    name: 'Dr. Rohan Kumar',
    title: 'CEO & Founder',
    bio: 'A visionary leader with over 20 years in industrial automation and AI, driving Quantaraa’s mission to revolutionize manufacturing.',
    imageUrl: 'https://placehold.co/120x120/D1FAE5/065F46?text=Rohan', // Placeholder image
  },
  {
    name: 'Ms. Priya Singh',
    title: 'Head of AI Solutions',
    bio: 'An AI/ML expert specializing in predictive analytics and computer vision, leading our cutting-edge algorithm development.',
    imageUrl: 'https://placehold.co/120x120/DBEAFE/1E40AF?text=Priya', // Placeholder image
  },
  {
    name: 'Mr. Amit Sharma',
    title: 'Lead IoT Architect',
    bio: 'With a decade of experience in embedded systems and IoT infrastructure, Amit designs robust and scalable connected solutions.',
    imageUrl: 'https://placehold.co/120x120/FEE2E2/991B1B?text=Amit', // Placeholder image
  },
  {
    name: 'Ms. Neha Gupta',
    title: 'Director of Operations',
    bio: 'Ensuring seamless project delivery and client satisfaction, Neha optimizes our operational workflows and client engagement.',
    imageUrl: 'https://placehold.co/120x120/FFFBEB/92400E?text=Neha', // Placeholder image
  },
];

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">About Quantaraa</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Pioneering the future of industrial intelligence through AI, IoT, and advanced manufacturing.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <SectionHeader
              title="Our Mission"
              subtitle="Driving Industrial Evolution"
              className="mb-8 text-left md:text-left"
            />
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to empower industries worldwide with intelligent, data-driven solutions that enhance efficiency, optimize processes, and foster sustainable growth. We are committed to delivering cutting-edge AI, robust IoT infrastructure, and precision manufacturing capabilities that transform operational challenges into competitive advantages.
            </p>
          </div>
          <div className="text-center md:text-left">
            <SectionHeader
              title="Our Vision"
              subtitle="A Smarter Industrial Future"
              className="mb-8 text-left md:text-left"
            />
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a future where every industry operates with unparalleled intelligence and agility. Quantaraa aims to be the global leader in industrial digital transformation, recognized for our innovative solutions, unwavering commitment to client success, and our role in building a more connected and efficient world.
            </p>
          </div>
        </div>
      </section>

      {/* Why Quantaraa (Value Proposition) */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Why Choose Quantaraa?"
            subtitle="Your Partner in Innovation"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            <Card className="text-center p-8">
              <span className="text-5xl text-blue-600 mb-4 inline-block">🛠️</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">End-to-End Solutions</h3>
              <p className="text-gray-700">From concept design to deployment and support, we offer a complete suite of services.</p>
            </Card>
            <Card className="text-center p-8">
              <span className="text-5xl text-green-600 mb-4 inline-block">🔬</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Expert Team</h3>
              <p className="text-gray-700">Our multidisciplinary experts bring deep knowledge in AI, IoT, and hardware engineering.</p>
            </Card>
            <Card className="text-center p-8">
              <span className="text-5xl text-purple-600 mb-4 inline-block">🤝</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Client-Centric Approach</h3>
              <p className="text-gray-700">We prioritize understanding your unique needs to deliver tailored and impactful results.</p>
            </Card>
            <Card className="text-center p-8">
              <span className="text-5xl text-yellow-600 mb-4 inline-block">⏱️</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Rapid Deployment</h3>
              <p className="text-gray-700">Leveraging agile methodologies for quick and efficient project execution.</p>
            </Card>
            <Card className="text-center p-8">
              <span className="text-5xl text-red-600 mb-4 inline-block">🔒</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Robust Security</h3>
              <p className="text-gray-700">Implementing industry-leading security protocols for all our solutions and data.</p>
            </Card>
            <Card className="text-center p-8">
              <span className="text-5xl text-teal-600 mb-4 inline-block">🌍</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Global Perspective</h3>
              <p className="text-gray-700">Serving diverse industries with solutions designed for global scalability.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Meet Our Visionary Team"
            subtitle="The Minds Behind Quantaraa"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Certifications / Events */}
      <section className="py-20 bg-gradient-to-br from-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader
            title="Our Milestones & Recognition"
            subtitle="A Journey of Excellence"
            className="text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            <div className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl">
              <span className="text-5xl mb-4 inline-block">🏆</span>
              <h3 className="text-2xl font-bold mb-3">Industry Innovation Award 2024</h3>
              <p className="text-lg opacity-90">Recognized for our groundbreaking work in AI-driven predictive maintenance.</p>
            </div>
            <div className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl">
              <span className="text-5xl mb-4 inline-block">✅</span>
              <h3 className="text-2xl font-bold mb-3">ISO 9001:2015 Certified</h3>
              <p className="text-lg opacity-90">Demonstrating our commitment to quality management systems and client satisfaction.</p>
            </div>
            <div className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl">
              <span className="text-5xl mb-4 inline-block">🗓️</span>
              <h3 className="text-2xl font-bold mb-3">IoT World Forum Speaker 2023</h3>
              <p className="text-lg opacity-90">Shared insights on the future of industrial IoT and digital twins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info / Office Address (Summary) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader
            title="Connect With Us"
            subtitle="Let's Build the Future Together"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg bg-gray-50 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Office</h3>
              <p className="text-gray-700 text-lg">
                Quantaraa Technologies Pvt. Ltd.<br />
                [Your Full Address Line 1]<br />
                [Your Full Address Line 2], [City], [State], [Pincode]<br />
                India
              </p>
              <a
                href="https://maps.google.com/?q=Quantaraa+Technologies" // Replace with actual Google Maps link
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline mt-4 inline-block"
              >
                View on Map
              </a>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Get in Touch</h3>
              <p className="text-gray-700 text-lg mb-2">Email: <a href="mailto:info@quantaraa.com" className="text-indigo-600 hover:underline">info@quantaraa.com</a></p>
              <p className="text-gray-700 text-lg mb-4">Phone: <a href="tel:+91XXXXXXXXXX" className="text-indigo-600 hover:underline">+91-XXXXXXXXXX</a></p>
              <Button to="/contact" variant="primary">
                Send Us a Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
