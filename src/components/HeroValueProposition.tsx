import { Gift, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface HeroValuePropositionProps {
  onOpenContactForm: () => void;
}

export default function HeroValueProposition({ onOpenContactForm }: HeroValuePropositionProps) {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-brand-yellow/10 via-white to-brand-orange-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Seção de Dor e Solução */}
          <AnimatedSection animation="slideRight" className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Você trava na hora de falar inglês?
              <span className="relative inline-block ml-2">
                <span className="text-brand-teal bg-brand-teal/10 px-1 sm:px-2 py-1 rounded-lg border-2 border-brand-teal/20 shadow-sm">
                  Supere o medo
                </span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl lg:max-w-none mx-auto">
              Com aulas online, personalizadas e um ambiente seguro, você vai transformar a ansiedade em confiança e falar inglês com leveza.
            </p>

            <div className="space-y-4 mb-8 text-left mx-auto lg:mx-0 max-w-md">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-teal flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Ambiente seguro</strong> para praticar sem medo de julgamentos.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-teal flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Foco total na sua necessidade</strong> com temas do seu interesse.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-teal flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Correção gentil</strong> dos erros para aprendizado natural.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Seção de Valor/Oferta */}
          <AnimatedSection animation="slideLeft" className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-orange/20">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-md">
              OFERTA ESPECIAL
            </div>
            
            <div className="text-center mt-6 sm:mt-4 mb-6">
              <div className="flex items-center justify-center mb-4">
                <Gift className="h-10 w-10 text-brand-teal mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Plano Semestral com 25% OFF!
                </h3>
              </div>
              <p className="text-gray-600 text-base sm:text-lg mb-2">De <span className="line-through">R$ 399/mês</span> por apenas:</p>
              <div className="text-5xl sm:text-6xl font-extrabold text-brand-orange mb-4">
                R$299<span className="text-3xl font-bold">/mês</span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                Invista na sua confiança e carreira.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-800">
                <CheckCircle className="h-5 w-5 text-brand-teal flex-shrink-0" />
                <span className="text-base sm:text-lg">Aulas focadas no seu objetivo</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800">
                <CheckCircle className="h-5 w-5 text-brand-teal flex-shrink-0" />
                <span className="text-base sm:text-lg">Diagnóstico personalizado</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800">
                <CheckCircle className="h-5 w-5 text-brand-teal flex-shrink-0" />
                <span className="text-base sm:text-lg">Suporte direto com o professor</span>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={onOpenContactForm}
                className="w-full bg-gradient-to-r from-brand-teal to-brand-orange text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
              >
                Quero minha aula grátis!
              </button>
              <p className="text-xs text-gray-500 mt-3">Garantia de satisfação de 7 dias</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}