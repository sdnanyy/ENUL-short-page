import AnimatedSection from './AnimatedSection';

interface TestimonialsProps {
  onOpenContactForm: () => void;
}

export default function Testimonials({ onOpenContactForm }: TestimonialsProps) {
  return (
    <AnimatedSection>
      <div id="depoimentos" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-teal">Depoimentos</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              O que nossas alunas dizem
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Histórias de sucesso que inspiram e mostram o poder da confiança no aprendizado de inglês.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-4">
            <figure className="relative col-span-2 row-span-2 rounded-2xl bg-gray-50 p-6 shadow-lg sm:col-span-1 xl:col-span-2">
              <blockquote className="text-gray-900">
                <p>
                  “A Uni Languages transformou minha relação com o inglês. Antes, eu tinha muito medo de falar, mas as aulas personalizadas e o apoio emocional me deram a confiança que eu precisava. Hoje, me sinto muito mais à vontade para me comunicar!”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div>
                  <div className="font-semibold text-gray-900">Maria Silva</div>
                  <div className="text-gray-600">Aluna Uni Languages</div>
                </div>
              </figcaption>
            </figure>
            <figure className="rounded-2xl bg-gray-50 p-6 shadow-lg">
              <blockquote className="text-gray-900">
                <p>
                  “Sempre tive dificuldade em me expressar em inglês, mas a metodologia da Uni Languages me ajudou a destravar. As mentorias emocionais são um diferencial incrível!”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div>
                  <div className="font-semibold text-gray-900">Ana Paula</div>
                  <div className="text-gray-600">Aluna Uni Languages</div>
                </div>
              </figcaption>
            </figure>
            <figure className="rounded-2xl bg-gray-50 p-6 shadow-lg">
              <blockquote className="text-gray-900">
                <p>
                  “As aulas são leves e divertidas, e o mais importante: me sinto segura para errar e aprender. Recomendo a todas que querem falar inglês sem medo!”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div>
                  <div className="font-semibold text-gray-900">Carla Mendes</div>
                  <div className="text-gray-600">Aluna Uni Languages</div>
                </div>
              </figcaption>
            </figure>
            <figure className="rounded-2xl bg-gray-50 p-6 shadow-lg">
              <blockquote className="text-gray-900">
                <p>
                  “Finalmente encontrei um método que funciona para mim. A Uni Languages me ajudou a destravar meu inglês e a me sentir confiante em qualquer situação.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1502685104226-ee323f49cd7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div>
                  <div className="font-semibold text-gray-900">Juliana Lima</div>
                  <div className="text-gray-600">Aluna Uni Languages</div>
                </div>
              </figcaption>
            </figure>
            <figure className="rounded-2xl bg-gray-50 p-6 shadow-lg">
              <blockquote className="text-gray-900">
                <p>
                  “As aulas são muito dinâmicas e a professora é super atenciosa. Sinto que estou evoluindo a cada dia e perdendo o medo de falar.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div>
                  <div className="font-semibold text-gray-900">Fernanda Costa</div>
                  <div className="text-gray-600">Aluna Uni Languages</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={onOpenContactForm}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-teal hover:bg-brand-dark-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-colors"
            >
              Quero destravar meu inglês
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}