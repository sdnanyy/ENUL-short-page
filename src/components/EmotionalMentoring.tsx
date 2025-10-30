import AnimatedSection from './AnimatedSection';
import { CheckCircle } from 'lucide-react';

interface EmotionalMentoringProps {
  onOpenContactForm: () => void;
}

export default function EmotionalMentoring({ onOpenContactForm }: EmotionalMentoringProps) {
  const features = [
    "Aulas particulares e personalizadas",
    "Foco na sua necessidade e objetivo",
    "Metodologia que te ajuda a destravar",
    "Aulas leves e divertidas",
    "Acompanhamento de perto",
    "Material didático incluso",
  ];

  return (
    <AnimatedSection id="mentoring" className="py-16 sm:py-24 bg-gradient-to-b from-white to-brand-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold text-brand-teal tracking-wide uppercase">Mentoria Emocional</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Destrave seu inglês com confiança e leveza
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nossa mentoria vai além do ensino tradicional, focando no seu bem-estar emocional para que você se sinta segura e motivada a falar inglês.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature} className="relative">
                <dt>
                  <CheckCircle className="absolute h-6 w-6 text-brand-yellow" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature}</p>
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenContactForm}
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-teal hover:bg-brand-dark-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-colors duration-300"
          >
            Quero destravar meu inglês!
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}