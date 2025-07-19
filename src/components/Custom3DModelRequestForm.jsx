// src/components/Custom3DModelRequestForm.jsx
import { useState } from 'react';
import Button from './Button';

const Custom3DModelRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ideaDescription: '',
    length: '',
    width: '',
    height: '',
    materialPreference: '',
    application: '',
    referenceFile: null,
  });
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, referenceFile: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const dataToSend = new FormData();
    for (const key in formData) {
      if (key === 'referenceFile' && formData[key]) {
        dataToSend.append(key, formData[key]);
      } else if (key !== 'referenceFile') {
        dataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await fetch('/api/custom-3d-model-request', {
        method: 'POST',
        body: dataToSend,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '', email: '', ideaDescription: '', length: '', width: '', height: '', materialPreference: '', application: '', referenceFile: null
        });
      } else {
        const errorData = await response.json();
        setStatus('error');
        console.error('Custom model request failed:', errorData.message || response.statusText);
      }
    } catch (error) {
      setStatus('error');
      console.error('Network error during custom model request:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Request a Custom 3D Model</h3>

      <div className="mb-4">
        <label htmlFor="req-name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
        <input type="text" id="req-name" name="name" value={formData.name} onChange={handleChange} className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" required />
      </div>
      <div className="mb-4">
        <label htmlFor="req-email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
        <input type="email" id="req-email" name="email" value={formData.email} onChange={handleChange} className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" required />
      </div>

      <div className="mb-4">
        <label htmlFor="ideaDescription" className="block text-gray-700 text-sm font-bold mb-2">Describe Your Idea / Part</label>
        <textarea id="ideaDescription" name="ideaDescription" rows="4" value={formData.ideaDescription} onChange={handleChange} className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y transition-all duration-200" required></textarea>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="length" className="block text-gray-700 text-sm font-bold mb-2">Length (mm)</label>
          <input type="number" id="length" name="length" value={formData.length} onChange={handleChange} className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" placeholder="e.g., 100" />
        </div>
        <div>
          <label htmlFor="width" className="block text-gray-700 text-sm font-bold mb-2">Width (mm)</label>
          <input type="number" id="width" name="width" value={formData.width} onChange={handleChange} className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" placeholder="e.g., 50" />
        </div>
        <div>
          <label htmlFor="height" className="block text-gray-700 text-sm font-bold mb-2">Height (mm)</label>
          <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" placeholder="e.g., 20" />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="materialPreference" className="block text-gray-700 text-sm font-bold mb-2">Preferred Material</label>
        <select id="materialPreference" name="materialPreference" value={formData.materialPreference} onChange={handleChange} className="shadow-sm border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200">
          <option value="">Any / Not sure</option>
          <option value="pla">PLA</option>
          <option value="abs">ABS</option>
          <option value="nylon">Nylon</option>
          <option value="metal">Metal (Advanced)</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="application" className="block text-gray-700 text-sm font-bold mb-2">Intended Application / Use Case</label>
        <input type="text" id="application" name="application" value={formData.application} onChange={handleChange} className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" placeholder="e.g., Functional prototype, custom enclosure" />
      </div>

      <div className="mb-6">
        <label htmlFor="referenceFile" className="block text-gray-700 text-sm font-bold mb-2">Upload Reference File (Sketch, Drawing, PDF)</label>
        <input
          type="file"
          id="referenceFile"
          name="referenceFile"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0 file:text-sm file:font-semibold
                     file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer transition-colors duration-200"
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
        />
        {formData.referenceFile && (
          <p className="mt-2 text-sm text-gray-500">Selected file: {formData.referenceFile.name}</p>
        )}
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
        {isLoading ? 'Submitting Request...' : 'Submit Custom Model Request'}
      </Button>

      {status === 'success' && (
        <p className="text-green-600 mt-4 text-center animate-fade-in">Your custom model request has been sent! We'll review it and get back to you.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-4 text-center animate-fade-in">Failed to submit request. Please try again.</p>
      )}
    </form>
  );
};

export default Custom3DModelRequestForm;