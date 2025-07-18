// src/pages/IndustryLoginPage.jsx
import { useState } from 'react';
// Do NOT import useNavigate if you only use window.location.href for external redirects
// import { useNavigate } from 'react-router-dom'; // Keep commented out if not used

import AuthForm from '../components/AuthForm'; // Ensure this path is correct
import SectionHeader from '../components/SectionHeader'; // Ensure this path is correct

const IndustryLoginPage = () => {
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  // const navigate = useNavigate(); // Keep commented out if not used

  const handleAuthSuccess = (dashboardUrl) => {
    // This function is called by AuthForm on successful login/signup
    console.log("Authentication successful, attempting redirect to:", dashboardUrl);
    // IMPORTANT: For external dashboards like Grafana/ThingsBoard, use window.location.href
    window.location.href = dashboardUrl;
    // For internal React routes, you'd use navigate(dashboardUrl);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* SectionHeader component */}
      <SectionHeader
        title={mode === 'login' ? 'Industry Login' : 'Register Your Company'}
        subtitle="Access Your IoT Dashboards & Solutions"
        className="mb-10"
      />
      {/* AuthForm component, passing mode and the success handler */}
      <AuthForm mode={mode} onAuthSuccess={handleAuthSuccess} />

      {/* Optional: Add buttons to switch mode outside the form if needed,
                  but AuthForm already handles switching internally now. */}
      {/* <div className="mt-4 flex gap-4">
        <button onClick={() => setMode('login')} className={`px-4 py-2 rounded-md ${mode === 'login' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}>Login Mode</button>
        <button onClick={() => setMode('signup')} className={`px-4 py-2 rounded-md ${mode === 'signup' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}>Sign Up Mode</button>
      </div> */}
    </div>
  );
};

export default IndustryLoginPage;