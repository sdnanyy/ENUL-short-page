import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import LazyImage from './LazyImage';

interface HeroValuePropositionProps {
  onOpenContactForm: () => void;
}

export default function HeroValueProposition({ onOpenContactForm }: HeroValuePropositionProps) {
  const features = [
    "Aulas particulares e personalizadas",
    "Foco na sua confiança e autoestima",
    "Professores especializados em mentoria emocional",
    "Método exclusivo para mulheres",
    "Resultados rápidos e duradouros"
  ];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-teal/5 to-brand-orange/5 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <AnimatedSection animation="slideRight" className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-brand-teal">Sua jornada para a fluência começa aqui</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Aulas de inglês para mulheres que querem avançar na carreira
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Na Uni Languages, você não aprende apenas inglês, você desenvolve a confiança para se comunicar sem medo e alcançar seus objetivos profissionais.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <CheckCircle className="absolute left-1 top-1 h-5 w-5 text-brand-teal" aria-hidden="true" />
                      {feature}
                    </dt>{' '}
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <button
                  onClick={onOpenContactForm}
                  className="bg-gradient-to-r from-brand-teal to-brand-orange text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  Quero transformar meu inglês
                </button>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideLeft" className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-orange/20">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-md text-center"> {/* Adicionado text-center aqui */}
              OFERTA BLACK FRIDAY
            </div>
            <LazyImage
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mulher sorrindo e estudando inglês"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}