// src/pages/IndustryLoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import SectionHeader from '../components/SectionHeader';

const IndustryLoginPage = () => {
  const [mode, setMode] = useState('login');
  const navigate = useNavigate();

  const handleAuthSuccess = (dashboardUrl) => {
    console.log("Authentication successful, attempting redirect to:", dashboardUrl);
    window.location.href = dashboardUrl;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <SectionHeader
        title={mode === 'login' ? 'Industry Login' : 'Register Your Company'}
        subtitle="Access Your IoT Dashboards & Solutions"
        className="mb-10 animate-fade-in-up-100"
      />
      <div className="w-full max-w-md animate-fade-in-up-200">
        <AuthForm mode={mode} onAuthSuccess={handleAuthSuccess} />
      </div>
    </div>
  );
};

export default IndustryLoginPage;