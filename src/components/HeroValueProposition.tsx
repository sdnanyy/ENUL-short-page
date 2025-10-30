import { ArrowRight } from 'lucide-react';
import LazyImage from './LazyImage';
import AnimatedSection from './AnimatedSection';

interface HeroValuePropositionProps {
  onOpenContactForm: () => void;
}

export default function HeroValueProposition({ onOpenContactForm }: HeroValuePropositionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-teal/10 to-brand-yellow/10 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-brand-teal/10 ring-1 ring-brand-teal/5 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <AnimatedSection animation="slideRight" className="mt-10 lg:mt-0 lg:row-end-4">
            <LazyImage
              src="/hero-image.png"
              alt="Aluna sorrindo e estudando inglês com a Uni Languages"
              className="aspect-[6/5] w-full max-w-lg rounded-2xl object-cover lg:max-w-none"
              width={1000}
              height={833}
            />
          </AnimatedSection>
          <div className="max-w-xl lg:col-end-1 lg:row-start-1 lg:mx-auto lg:max-w-none lg:pb-8">
            <AnimatedSection animation="slideUp">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Aprenda inglês de verdade e{' '}
                <span className="relative inline-block ml-2">
                  <span className="text-brand-teal bg-brand-teal/10 px-1 sm:px-2 py-1 rounded-lg shadow-sm"> {/* Removido border-2 border-brand-teal/20 */}
                    Supere o medo
                  </span>
                </span>
                {' '}de falar!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Com a Uni Languages, você não apenas aprende o idioma, mas também desenvolve a confiança para se comunicar em qualquer situação. Nosso método foca na sua fluência e segurança emocional.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button
                  onClick={onOpenContactForm}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-teal to-brand-orange text-white px-6 py-3 rounded-full text-lg font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  <span>Quero minha aula grátis!</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </section>
  );
}