import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import HeroValueProposition from './components/HeroValueProposition'; // Importando o novo componente
import EmotionalMentoring from './components/EmotionalMentoring';
import Testimonials from './components/Testimonials';
import ValueAnchoring from './components/ValueAnchoring'; // Mantendo ValueAnchoring para ROI
import Footer from './components/Footer';

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
        onOpenContactForm={() => setContactFormOpen(true)}
      />
      <ContactForm
        isOpen={contactFormOpen}
        onClose={handleCloseContactForm}
      />
      
      <Routes>
        <Route path="/" element={
          <>
            <HeroValueProposition onOpenContactForm={() => setContactFormOpen(true)} /> {/* Usando o novo componente */}
            <EmotionalMentoring onOpenContactForm={() => setContactFormOpen(true)} />
            <Testimonials onOpenContactForm={() => setContactFormOpen(true)} />
            <ValueAnchoring /> {/* Mantendo ValueAnchoring */}
          </>
        } />
        <Route path="/register" element={null} /> 
      </Routes>

      <Footer />
    </div>
  );
}

export default App;