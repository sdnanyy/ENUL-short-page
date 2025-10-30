import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import LazyImage from './LazyImage';

interface HeroValuePropositionProps {
  onOpenContactForm: () => void;
}

export default function HeroValueProposition({ onOpenContactForm }: HeroValuePropositionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-teal/5 to-brand-yellow/5 pt-24 sm:pt-32 pb-20 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/hero-background.webp)' }}></div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-teal to-brand-yellow opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-8">
          <AnimatedSection animation="slideRight" className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"> {/* Ajustado o tamanho da fonte aqui */}
              Você trava na hora de falar inglês?
              <span className="relative inline-block ml-2">
                <span className="text-brand-teal bg-brand-teal/10 px-1 sm:px-2 py-1 rounded-lg border-2 border-brand-teal/20 shadow-sm">
                  Nós te ajudamos!
                </span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Com a Uni Languages, você destrava seu inglês e ganha confiança para se comunicar em qualquer situação, com um método focado em você.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={onOpenContactForm}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-teal to-brand-orange text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
              >
                <span>Quero minha aula grátis!</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideLeft" className="flex justify-center lg:justify-end">
            <LazyImage
              src="/hero-image.webp"
              alt="Estudante feliz aprendendo inglês online"
              className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl border-4 border-white"
              width={600}
              height={400}
            />
          </AnimatedSection>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-brand-teal to-brand-yellow opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}