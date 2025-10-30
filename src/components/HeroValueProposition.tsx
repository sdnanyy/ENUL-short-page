import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import LazyImage from './LazyImage';

interface HeroValuePropositionProps {
  onOpenContactForm: () => void;
}

export default function HeroValueProposition({ onOpenContactForm }: HeroValuePropositionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-teal/5 to-brand-yellow/5 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-brand-teal/10 ring-1 ring-brand-teal/5 sm:-mr-80 lg:-mr-96 lg:right-0 lg:w-full"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <AnimatedSection animation="slideRight" className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Você trava na hora de falar inglês?
              <br className="block lg:hidden" /> {/* Quebra de linha em telas menores */}
              <span className="relative inline-block mt-2 lg:mt-0"> {/* Ajuste de margem */}
                <span className="text-brand-teal bg-brand-teal/10 px-2 py-1 rounded-lg border-2 border-brand-teal/20 shadow-sm">
                  A Uni Languages te ajuda!
                </span>
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto lg:mx-0">
              Com a nossa mentoria emocional, você vai destravar o seu inglês e se comunicar com confiança, superando o medo e a insegurança.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <button
                onClick={onOpenContactForm}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-teal to-brand-orange text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
              >
                <span>Quero minha aula grátis!</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideLeft" className="mt-10 flex justify-center lg:mt-0 lg:justify-end xl:row-span-2">
            <LazyImage
              src="/hero-image.png"
              alt="Aluna feliz aprendendo inglês com a Uni Languages"
              className="aspect-[6/5] w-full max-w-lg rounded-2xl object-cover xl:absolute xl:inset-0 xl:aspect-auto xl:h-full xl:w-full"
              width={960}
              height={800}
            />
          </AnimatedSection>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </section>
  );
}