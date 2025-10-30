import { ChevronDown } from 'lucide-react';
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
    question: "O curso é gratuito?",
    answer: "Não. Nosso curso é um investimento no seu futuro e na sua confiança. A oferta atual está com um valor super acessível:\n\nR$299 por mês\n\nDuração: 6 meses\n\nInclui uma aula ao vivo por semana com acompanhamento individualizado."
  },
  {
    question: "As aulas são presenciais ou online?",
    answer: "Todas as nossas aulas são 100% online e ao vivo! Você pode participar de qualquer lugar através da nossa plataforma de videoconferência.\n\nIsso garante a flexibilidade que você precisa sem perder a interação e o suporte direto do professor, como se estivesse na sala de aula."
  },
  {
    question: "O que é a Mentoria Emocional?",
    answer: "A Mentoria Emocional é o nosso diferencial! Sabemos que a parte emocional (como o medo de errar ou a falta de confiança) é o que mais atrapalha no aprendizado de um novo idioma.\n\nNossos professores são treinados para ir além da gramática e do vocabulário. Eles atuam como mentores para:\n\nAjudar você a superar a timidez e o bloqueio na hora de falar.\n\nTrabalhar a sua confiança e segurança para se expressar no novo idioma.\n\nCom a Mentoria Emocional, você não aprende só uma língua, mas também desenvolve a coragem e a fluidez para usá-la em qualquer situação."
  },
  {
    question: "O curso oferece certificado de conclusão?",
    answer: "Sim, com certeza! Ao completar os 6 meses de aulas e cumprir a carga horária e atividades propostas, você receberá o nosso Certificado de Conclusão.\n\nEste certificado comprova a sua dedicação e o seu nível de proficiência atingido, sendo um documento importante para o seu currículo profissional e acadêmico."
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
                  <div className="px-5 pb-5 pt-2 text-gray-700 text-base leading-relaxed border-t border-gray-100 whitespace-pre-line">
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
            <span>Entrar em Contato</span>
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}