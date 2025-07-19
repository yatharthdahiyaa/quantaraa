// src/pages/ContactPage.jsx
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import SectionHeader from '../components/SectionHeader';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-teal-600 to-cyan-700 text-white text-center shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">Get in Touch with Quantaraa</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in-up-200">
            We're here to help you with your industrial AI, IoT, and hardware needs. Reach out to us today!
          </p>
        </div>
      </section>

      {/* Contact Form & Direct Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
          {/* Contact Form */}
          <div className="animate-fade-in-up-100">
            <SectionHeader
              title="Send Us a Message"
              subtitle="We'll Get Back to You Shortly"
              className="mb-10 text-left"
            />
            <ContactForm formType="General Inquiry" />
          </div>

          {/* Direct Contact Info */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              title="Direct Contact Information"
              subtitle="Connect with Our Team"
              className="mb-10 text-left"
            />
            <Card className="p-6 text-center animate-fade-in-up-200">
              <span className="text-5xl text-indigo-600 mb-4 block">📧</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-lg text-gray-700 mb-4">For general inquiries or support.</p>
              <a href="mailto:info@quantaraa.com" className="text-indigo-600 hover:underline text-lg font-semibold">
                info@quantaraa.com
              </a>
            </Card>

            <Card className="p-6 text-center animate-fade-in-up-300">
              <span className="text-5xl text-green-600 mb-4 block">📞</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-lg text-gray-700 mb-4">Speak directly with our experts.</p>
              <a href="tel:+91XXXXXXXXXX" className="text-green-600 hover:underline text-lg font-semibold">
                +91-XXXXXXXXXX
              </a>
            </Card>

            <Card className="p-6 text-center animate-fade-in-up-400">
              <span className="text-5xl text-teal-600 mb-4 block">💬</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">WhatsApp Us</h3>
              <p className="text-lg text-gray-700 mb-4">Quick queries via WhatsApp.</p>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline text-lg font-semibold"
              >
                Chat on WhatsApp
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader
            title="Visit Our Office"
            subtitle="Find Us Here"
          />
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in-up-100">
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.840742183296!2d76.84093951509177!3d30.75199678164344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f9361a4b4b4b1%3A0x6b4b4b4b4b4b4b4b!2sPanchkula%2C%20Haryana!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Quantaraa Office Location"
              ></iframe>
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quantaraa Technologies Pvt. Ltd.</h3>
              <p className="text-gray-700">
                [Your Full Address Line 1]<br />
                [Your Full Address Line 2], Panchkula, Haryana, [Pincode]<br />
                India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;