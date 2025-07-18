// src/components/PartnerLogos.jsx
import SectionHeader from './SectionHeader'; // Requires SectionHeader component

const partnerLogos = [
  '/images/logos/logo-ibm.svg', // Placeholder paths - create these files in public/images/logos
  '/images/logos/logo-google.svg',
  '/images/logos/logo-microsoft.svg',
  '/images/logos/logo-siemens.svg',
  '/images/logos/logo-bosch.svg',
  '/images/logos/logo-ge.svg', // Example additional logo
];

const PartnerLogos = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <SectionHeader title="Trusted by Industry Leaders" subtitle="Our Valued Partners" />
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 px-4 max-w-5xl mx-auto">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              className="h-12 md:h-16 opacity-70 hover:opacity-100 transition-opacity duration-300 max-w-[150px] object-contain filter grayscale hover:grayscale-0" // Grayscale effect
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;