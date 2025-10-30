import AnimatedSection from './AnimatedSection';
import { Star } from 'lucide-react';

interface TestimonialsProps {
  onOpenContactForm: () => void;
}

export default function Testimonials({ onOpenContactForm }: TestimonialsProps) {
  const testimonials = [
    {
      id: 1,
      name: 'Ana Paula',
      role: 'Aluna Uni Languages',
      quote: 'A Uni Languages me ajudou a superar o medo de falar inglês. As aulas são leves, divertidas e a professora é super atenciosa. Sinto que estou evoluindo a cada dia!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29329?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Carla Mendes',
      role: 'Aluna Uni Languages',
      quote: 'Sempre tive dificuldade em aprender inglês, mas com a Uni Languages tudo mudou. A metodologia é incrível e me sinto muito mais confiante para me comunicar.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Mariana Silva',
      role: 'Aluna Uni Languages',
      quote: 'As aulas são personalizadas e focadas nas minhas necessidades. A professora é muito paciente e me ajuda a superar minhas dificuldades. Recomendo a Uni Languages para todas as mulheres que querem aprender inglês de verdade!',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  return (
    <AnimatedSection id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold text-brand-teal tracking-wide uppercase">Depoimentos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            O que nossas alunas dizem
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Histórias de mulheres que transformaram sua relação com o inglês e conquistaram a confiança para se comunicar.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center text-center bg-brand-light-gray p-8 rounded-lg shadow-md">
              <img className="h-20 w-20 rounded-full mb-4 object-cover" src={testimonial.image} alt={testimonial.name} />
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              <p className="text-lg leading-7 text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenContactForm}
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-teal hover:bg-brand-dark-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-colors duration-300"
          >
            Quero ser a próxima!
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}