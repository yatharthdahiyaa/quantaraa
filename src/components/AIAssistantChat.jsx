// src/components/AIAssistantChat.jsx
import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Card from './Card';

const AIAssistantChat = ({ className = '' }) => { // Added className prop
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    const newChatHistory = [...chatHistory, { role: 'user', text: userInput }];
    setChatHistory(newChatHistory);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    const prompt = userInput;

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof __api_key !== 'undefined' ? __api_key : '');

      if (!apiKey) {
        throw new Error("API Key is not configured. Please ensure VITE_GEMINI_API_KEY is set in your .env file for local development, or that the environment provides __api_key.");
      }

      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const aiResponseText = result.candidates[0].content.parts[0].text;
        setChatHistory((prev) => [...prev, { role: 'model', text: aiResponseText }]);
      } else {
        setError("Received an unexpected response from the AI. Please try again.");
        console.error("Unexpected AI response structure:", result);
      }
    } catch (err) {
      setError(`Failed to get a response from the AI: ${err.message}`);
      console.error("AI API call failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Card className={`p-6 flex flex-col h-[600px] max-h-[70vh] w-full max-w-3xl mx-auto border border-gray-200 ${className}`}>
      <div className="flex-grow overflow-y-auto p-4 bg-gray-50 rounded-lg mb-4 custom-scrollbar shadow-inner">
        {chatHistory.length === 0 ? (
          <div className="text-center text-gray-500 italic mt-10">
            Welcome! Ask me anything about AI solutions for your industry, or how Quantaraa can help.
          </div>
        ) : (
          chatHistory.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <div
                className={`inline-block p-3 rounded-xl max-w-[80%] break-words shadow-sm ${ // Added break-words, rounded-xl, shadow-sm
                  msg.role === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="text-left mb-4">
            <div className="inline-block p-3 rounded-xl bg-gray-200 text-gray-800 shadow-sm">
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Thinking...
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className="text-center text-red-600 mt-4 p-3 bg-red-100 rounded-lg border border-red-200 animate-fade-in">
            Error: {error}
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="flex">
        <textarea
          className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none transition-all duration-200"
          placeholder="Ask me a question..."
          rows="1"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <Button onClick={sendMessage} disabled={isLoading || userInput.trim() === ''} className="rounded-l-none">
          Send
        </Button>
      </div>
    </Card>
  );
};

export default AIAssistantChat;