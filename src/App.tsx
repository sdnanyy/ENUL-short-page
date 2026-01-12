import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import HeroSection from './components/HeroSection'; // Importando HeroSection
import EmotionalMentoring from './components/EmotionalMentoring';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/register') {
      setContactFormOpen(true);
    } else {
      setContactFormOpen(false);
    }
  }, [location.pathname]);

  const handleCloseContactForm = () => {
    setContactFormOpen(false);
    if (location.pathname === '/register') {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <ContactForm
        isOpen={contactFormOpen}
        onClose={handleCloseContactForm}
      />
      
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection onOpenContactForm={() => setContactFormOpen(true)} /> {/* Usando HeroSection */}
            <EmotionalMentoring onOpenContactForm={() => setContactFormOpen(true)} />
            <Testimonials onOpenContactForm={() => setContactFormOpen(true)} />
            <FAQSection onOpenContactForm={() => setContactFormOpen(true)} />
          </>
        } />
        <Route path="/register" element={null} /> 
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;