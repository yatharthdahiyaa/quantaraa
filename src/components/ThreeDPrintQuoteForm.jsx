// src/components/ThreeDPrintQuoteForm.jsx
import { useState } from 'react';
import Button from './Button';

const ThreeDPrintQuoteForm = () => {
  const [file, setFile] = useState(null);
  const [material, setMaterial] = useState('');
  const [finish, setFinish] = useState('');
  const [quote, setQuote] = useState(null);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.name.toLowerCase().endsWith('.stl') || selectedFile.name.toLowerCase().endsWith('.obj'))) {
      setFile(selectedFile);
      setQuote(null);
      setStatus('');
    } else {
      alert('Please upload a .stl or .obj file.');
      setFile(null);
    }
  };

  const handleQuoteRequest = async (e) => {
    e.preventDefault();
    if (!file || !material || !finish) {
      alert('Please select a file, material, and finish.');
      return;
    }

    setStatus('uploading');
    setIsLoading(true);

    const formData = new FormData();
    formData.append('modelFile', file);
    formData.append('material', material);
    formData.append('finish', finish);

    try {
      const response = await fetch('/api/3d-print-quote', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setQuote(data);
        setStatus('quoted');
      } else {
        const errorData = await response.json();
        setStatus('error');
        console.error('Quote error:', errorData.message || response.statusText);
      }
    } catch (err) {
      console.error("3D Print quote request network error:", err);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleQuoteRequest} className="bg-white p-8 rounded-lg shadow-lg w-full border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Instant Quote (Upload File)</h3>

      <div className="mb-4">
        <label htmlFor="modelFile" className="block text-gray-700 text-sm font-bold mb-2">Upload STL/OBJ File</label>
        <input
          type="file"
          id="modelFile"
          name="modelFile"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0 file:text-sm file:font-semibold
                     file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer transition-colors duration-200"
          accept=".stl,.obj"
          required
        />
        {file && (
          <p className="mt-2 text-sm text-gray-500">Selected file: {file.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="material" className="block text-gray-700 text-sm font-bold mb-2">Material</label>
        <select
          id="material"
          name="material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          className="shadow-sm border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
          required
        >
          <option value="">Select Material</option>
          <option value="pla">PLA (Polylactic Acid)</option>
          <option value="abs">ABS (Acrylonitrile Butadiene Styrene)</option>
          <option value="nylon">Nylon</option>
          <option value="petg">PETG</option>
          <option value="resin">Resin (SLA/DLP)</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="finish" className="block text-gray-700 text-sm font-bold mb-2">Finish</label>
        <select
          id="finish"
          name="finish"
          value={finish}
          onChange={(e) => setFinish(e.target.value)}
          className="shadow-sm border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
          required
        >
          <option value="">Select Finish</option>
          <option value="standard">Standard</option>
          <option value="polished">Polished</option>
          <option value="painted">Painted</option>
        </select>
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={status === 'uploading' || isLoading}>
        {status === 'uploading' || isLoading ? 'Analyzing Model...' : 'Get Instant Quote'}
      </Button>

      {status === 'quoted' && quote && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200 shadow-inner animate-fade-in">
          <h4 className="text-xl font-bold text-green-800 mb-2">Your Quote:</h4>
          <p className="text-2xl font-extrabold text-green-900 mb-2">Price: {quote.price}</p>
          <p className="text-lg text-green-700">Turnaround Time: {quote.turnaroundTime}</p>
          <p className="text-sm text-gray-600 mt-2">This is an estimated quote. A final quote may be provided after manual review.</p>
          <Button variant="secondary" onClick={() => alert('Proceeding to checkout/order flow')} className="mt-4 w-full">
            Proceed to Order
          </Button>
        </div>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-4 text-center animate-fade-in">Could not generate quote. Please ensure your file is valid or try again.</p>
      )}
    </form>
  );
};

export default ThreeDPrintQuoteForm;