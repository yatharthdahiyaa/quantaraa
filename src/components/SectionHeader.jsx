// src/components/SectionHeader.jsx

const SectionHeader = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {subtitle && <p className="text-indigo-600 text-xl font-semibold mb-3 tracking-wide uppercase">{subtitle}</p>}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
        {title}
      </h2>
      <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div> {/* Decorative line */}
    </div>
  );
};

export default SectionHeader;