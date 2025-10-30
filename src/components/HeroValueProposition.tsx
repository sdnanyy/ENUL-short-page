import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import LazyImage from './LazyImage';

interface HeroValuePropositionProps {
  onOpenContactForm: () => void;
}

export default function HeroValueProposition({ onOpenContactForm }: HeroValuePropositionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-teal to-brand-blue pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-brand-teal/10 ring-1 ring-brand-teal sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <AnimatedSection animation="slideLeft" className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-orange/20">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-md">
              OFERTA BLACK FRIDAY
            </div>
            <h1 className="mt-8 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center sm:text-left">
              Aprenda inglês de verdade e destrave seu potencial!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center sm:text-left">
              Com a Uni Languages, você terá aulas personalizadas e mentoria emocional para superar bloqueios e alcançar a fluência.
            </p>
            <div className="mt-10 flex items-center justify-center sm:justify-start gap-x-6">
              <button
                onClick={onOpenContactForm}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-teal to-brand-orange text-white px-6 py-3 rounded-full text-lg font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
              >
                <span>Quero minha aula grátis!</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideRight" className="-mt-2 p-2 lg:mt-0 lg:p-0 lg:col-end-1 lg:row-span-2 lg:row-end-2">
            <LazyImage
              src="/hero-image.png"
              alt="Aluna feliz aprendendo inglês"
              className="w-[48rem] max-w-none rounded-xl bg-gray-50 shadow-xl ring-1 ring-gray-900/10 sm:w-[57rem] lg:w-[50rem] xl:w-[60rem]"
              width={960}
              height={640}
            />
          </AnimatedSection>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </section>
  );
}