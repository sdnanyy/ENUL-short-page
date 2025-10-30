import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import LazyImage from './LazyImage';

interface HeroValuePropositionProps {
  onOpenContactForm: () => void;
}

export default function HeroValueProposition({ onOpenContactForm }: HeroValuePropositionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-teal/5 to-brand-orange/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <AnimatedSection animation="slideRight" className="text-center lg:text-left">
            <h1 className="text-[28px] sm:text-[34px] md:text-[46px] lg:text-[58px] font-bold text-gray-700 leading-tight mb-6">
              Você trava na hora de falar inglês?
              <span className="relative inline-block ml-2">
                <span className="text-brand-teal bg-brand-teal/10 px-1 sm:px-2 py-1 rounded-lg border-2 border-brand-teal/20 shadow-sm">
                  Nós te ajudamos!
                </span>
                <svg className="absolute -top-2 -right-2 h-6 w-6 text-brand-yellow transform rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 00-1.118l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 00.95-.69l1.07-3.292z" />
                </svg>
              </span>
            </h1>
            <p className="text-lg sm:text-xl leading-8 text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              A Uni Languages oferece aulas particulares de inglês com mentoria emocional para mulheres que buscam confiança e fluência para avançar na carreira.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenContactForm}
                className="bg-gradient-to-r from-brand-teal to-brand-orange text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
              >
                Quero conhecer o método
              </button>
              <Link
                to="#mentoring"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('mentoring')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-brand-teal hover:text-brand-orange-dark font-semibold text-lg flex items-center group"
              >
                Saiba mais
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideLeft" className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <LazyImage
                src="https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mulher sorrindo e estudando inglês"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xl font-bold">Confiança para falar inglês</p>
                <p className="text-sm">Sua jornada para a fluência começa aqui.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}