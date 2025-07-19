// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import AISolutionsPage from './pages/AISolutionsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import IndustryLoginPage from './pages/IndustryLoginPage';
import IoTSolutionsPage from './pages/IoTSolutionsPage'; // UNCOMMENT THIS LINE
import PrototypesPage from './pages/PrototypesPage';
import ThreeDPrintingPage from './pages/ThreeDPrintingPage';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/login" element={<IndustryLoginPage />} />
          <Route path="/prototypes" element={<PrototypesPage />} />
          <Route path="/3d-printing" element={<ThreeDPrintingPage />} />
        
          <Route path="/ai-solutions" element={<AISolutionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/iot-solutions" element={<IoTSolutionsPage />} /> {/* UNCOMMENT THIS LINE */}

          {/* Add a 404 Not Found page */}
          <Route path="*" element={<div className="text-center p-8 text-red-600">404 - Page Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;