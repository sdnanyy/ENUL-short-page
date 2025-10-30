import { ChevronDown } from 'lucide-react'; // Removido MessageCircle
import AnimatedSection from './AnimatedSection';
import { useState } from 'react';

interface FAQSectionProps {
  onOpenContactForm: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "O curso é grátis?",
    answer: "Não. A oferta disponível é de R$299 por mês, referente a 1 aula por semana. Deixe seu contato para receber mais ofertas."
  },
  {
    question: "O curso é presencial?",
    answer: "Não. Todas as aulas são feitas de forma online por ferramenta de vídeo."
  }
];

export default function FAQSection({ onOpenContactForm }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-brand-teal/5 to-brand-yellow/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o método Uni Languages
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} animation="slideUp">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
                <button
                  className="flex justify-between items-center w-full p-5 text-left text-lg font-semibold text-gray-900 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 text-brand-teal transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 pt-2 text-gray-700 text-base leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <p className="text-lg sm:text-xl text-gray-700 mb-6 font-medium">
            Ainda tem dúvidas? Fale conosco!
          </p>
          <button
            onClick={onOpenContactForm}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-teal to-brand-orange text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
          >
            {/* <MessageCircle className="h-5 w-5" /> Removido */}
            <span>Entrar em Contato</span>
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}