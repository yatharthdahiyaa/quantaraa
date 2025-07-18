// src/components/SectionHeader.jsx

const SectionHeader = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {subtitle && <p className="text-indigo-600 text-lg font-semibold mb-2">{subtitle}</p>}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;