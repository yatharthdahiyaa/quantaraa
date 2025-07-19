// src/components/AuthForm.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Card from './Card'; // Using Card for the form container

const AuthForm = ({ mode, onAuthSuccess }) => {
  const [formData, setFormData] = useState({
    companyId: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isSignUpMode = mode === 'signup';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (isSignUpMode && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }

    const apiEndpoint = isSignUpMode ? '/api/auth/signup' : '/api/auth/signin';

    try {
      const payload = isSignUpMode
        ? { companyId: formData.companyId, email: formData.email, password: formData.password }
        : { companyId: formData.companyId, password: formData.password };

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`${isSignUpMode ? 'Sign up' : 'Sign in'} successful!`, data);
        if (onAuthSuccess) {
          onAuthSuccess(data.dashboardUrl || '/dashboard-placeholder');
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || `Authentication failed. Please try again.`);
      }
    } catch (err) {
      console.error(`Authentication error (${mode}):`, err);
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-8 shadow-lg w-full"> {/* Using Card component here */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {isSignUpMode ? 'Create Your Account' : 'Industry Login'}
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 animate-fade-in">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="companyId" className="block text-gray-700 text-sm font-bold mb-2">
          Company ID
        </label>
        <input
          type="text"
          id="companyId"
          name="companyId"
          value={formData.companyId}
          onChange={handleChange}
          className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
          required
        />
      </div>

      {isSignUpMode && (
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            required={isSignUpMode}
          />
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
          required
        />
      </div>

      {isSignUpMode && (
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="shadow-sm appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            required={isSignUpMode}
          />
        </div>
      )}

      <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
        {isLoading ? (isSignUpMode ? 'Signing Up...' : 'Logging In...') : (isSignUpMode ? 'Sign Up' : 'Login')}
      </Button>

      <div className="mt-6 text-center">
        {isSignUpMode ? (
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <button type="button" onClick={() => onAuthSuccess('login')} className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
              Login
            </button>
          </p>
        ) : (
          <>
            <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
              Forgot Password?
            </Link>
            <p className="text-gray-600 text-sm mt-2">
              Don't have an account?{' '}
              <button type="button" onClick={() => onAuthSuccess('signup')} className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
                Sign Up
              </button>
            </p>
          </>
        )}
      </div>
    </Card>
  );
};

export default AuthForm;