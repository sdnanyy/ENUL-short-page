import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface EmotionalMentoringProps {
  onOpenContactForm: () => void;
}

export default function EmotionalMentoring({ onOpenContactForm }: EmotionalMentoringProps) {
  return (
    <AnimatedSection>
      <div id="mentoria-emocional" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white">
        <div className="lg:text-center">
          <h2 className="text-base text-brand-teal font-semibold tracking-wide uppercase">
            Mentoria Emocional
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Destrave seu inglês com confiança e leveza
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Aprenda a lidar com a ansiedade e o medo de errar, transformando-os em aliados no seu aprendizado.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-brand-teal text-white">
                  {/* Icon for feature 1 */}
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Superando o medo de errar</p>
              </dt>
              <dd className="ml-16 mt-2 text-base text-gray-500">
                Desenvolva a coragem para se expressar, mesmo com imperfeições, e veja seus erros como degraus para o aprendizado.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-brand-teal text-white">
                  {/* Icon for feature 2 */}
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Construindo autoconfiança</p>
              </dt>
              <dd className="ml-16 mt-2 text-base text-gray-500">
                Através de técnicas de coaching e PNL, você fortalecerá sua autoestima e acreditará no seu potencial.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-brand-teal text-white">
                  {/* Icon for feature 3 */}
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364-6.364M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.756 3 12c0 2.123.741 4.017 1.926 5.436L3 20.25l2.519-.756A8.954 8.954 0 0012 20.25z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Fluência com leveza</p>
              </dt>
              <dd className="ml-16 mt-2 text-base text-gray-500">
                Desenvolva uma comunicação fluida e natural, sem a pressão da perfeição, focando na clareza e na conexão.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-brand-teal text-white">
                  {/* Icon for feature 4 */}
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.01-.195 1.98-.546 2.898a15.964 15.964 0 01-1.204 1.815c-.487.51-.745 1.12-.745 1.747v.75l-5.584 4.756a4.5 4.5 0 01-1.543 1.175 4.541 4.541 0 01-1.845.246 4.5 4.5 0 01-1.605-.409L3 18.25V17.5c0-.627-.258-1.237-.745-1.747A15.965 15.965 0 011.546 14.898C1.195 13.98 1 13.01 1 12c0-5.19 4.637-9.44 10.5-9.95V2.25a.75.75 0 011.5 0v-.25c5.863.51 10.5 4.76 10.5 9.95z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Ambiente acolhedor</p>
              </dt>
              <dd className="ml-16 mt-2 text-base text-gray-500">
                Aulas particulares e personalizadas, onde você se sente segura para praticar e crescer no seu ritmo.
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenContactForm}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-teal hover:bg-brand-dark-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-colors"
          >
            Quero destravar meu inglês
            <ArrowRight className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}