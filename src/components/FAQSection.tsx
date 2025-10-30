import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import AnimatedSection from './AnimatedSection';

interface FAQSectionProps {
  onOpenContactForm: () => void;
}

const faqs = [
  {
    question: 'Como funcionam as aulas?',
    answer:
      'Nossas aulas são particulares e personalizadas, focadas nas suas necessidades e objetivos. Utilizamos uma metodologia que combina o aprendizado do idioma com técnicas de mentoria emocional para superar bloqueios.',
  },
  {
    question: 'Qual a duração e frequência das aulas?',
    answer:
      'A duração e frequência são flexíveis e adaptadas à sua disponibilidade. Geralmente, recomendamos aulas de 60 minutos, uma ou duas vezes por semana, mas podemos ajustar conforme sua preferência.',
  },
  {
    question: 'Preciso ter algum nível de inglês para começar?',
    answer:
      'Não! Atendemos todos os níveis, do básico ao avançado. Nossas aulas são totalmente personalizadas, então começaremos exatamente do ponto em que você está.',
  },
  {
    question: 'Vocês oferecem material didático?',
    answer:
      'Sim, todo o material didático é fornecido e adaptado ao seu perfil de aprendizado. Além disso, incentivamos o uso de recursos autênticos para uma imersão completa.',
  },
  {
    question: 'Como a mentoria emocional se integra ao aprendizado de inglês?',
    answer:
      'A mentoria emocional é um pilar fundamental. Trabalhamos para identificar e superar medos, ansiedade e inseguranças que podem atrapalhar o aprendizado, construindo autoconfiança para você se expressar livremente.',
  },
  {
    question: 'Qual o valor do investimento?',
    answer:
      'O investimento varia de acordo com o plano de aulas e a frequência escolhida. Entre em contato conosco para agendarmos uma conversa e apresentarmos as opções que melhor se encaixam em você.',
  },
];

export default function FAQSection({ onOpenContactForm }: FAQSectionProps) {
  return (
    <AnimatedSection>
      <div id="faq" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Perguntas Frequentes
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
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