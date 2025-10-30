import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import HeroValueProposition from './components/HeroValueProposition';
import EmotionalMentoring from './components/EmotionalMentoring';
import Testimonials from './components/Testimonials';
import ValueAnchoring from './components/ValueAnchoring';
import FAQSection from './components/FAQSection'; // Importando o novo componente FAQSection
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
            <HeroValueProposition onOpenContactForm={() => setContactFormOpen(true)} />
            <EmotionalMentoring onOpenContactForm={() => setContactFormOpen(true)} />
            <Testimonials onOpenContactForm={() => setContactFormOpen(true)} />
            <ValueAnchoring />
            <FAQSection onOpenContactForm={() => setContactFormOpen(true)} /> {/* Adicionando o FAQSection aqui */}
          </>
        } />
        <Route path="/register" element={null} /> 
      </Routes>

      <Footer />
    </div>
  );
}

export default App;