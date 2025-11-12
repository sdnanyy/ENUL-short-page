import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Política de Privacidade
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A sua privacidade é importante para nós. Esta Política de Privacidade descreve como a Uni Languages coleta, usa e protege as suas informações pessoais quando você visita nosso site e utiliza nossos serviços.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
            1. Informações que Coletamos
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone, ao preencher formulários de contato ou inscrição. Também coletamos dados de uso do site através de tecnologias de rastreamento.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
            2. Como Usamos Suas Informações
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Utilizamos suas informações para:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 leading-relaxed">
            <li>Processar suas inscrições e agendamentos de aulas.</li>
            <li>Comunicar sobre nossos serviços, ofertas e novidades.</li>
            <li>Melhorar a experiência do usuário em nosso site.</li>
            <li>Analisar o desempenho de nossas campanhas de marketing.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
            3. Compartilhamento de Informações
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Não vendemos ou alugamos suas informações pessoais a terceiros. Podemos compartilhar dados com prestadores de serviços que nos auxiliam em operações como processamento de pagamentos, análise de dados e marketing, sempre sob acordos de confidencialidade.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
            4. Google Tag Manager e Conversões Otimizadas do Google Ads
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Utilizamos o Google Tag Manager (GTM) para gerenciar as tags de rastreamento em nosso site. O GTM nos permite implementar e atualizar tags de forma eficiente, sem a necessidade de modificar o código-fonte do site diretamente.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Para otimizar a precisão das nossas campanhas de publicidade no Google Ads, implementamos as Conversões Otimizadas. Quando você preenche um formulário em nosso site, coletamos seu e-mail e telefone e os enviamos de forma segura e criptografada para o Google. Esses dados são usados pelo Google para corresponder a conversões de forma mais precisa, sem identificar você pessoalmente. Isso nos ajuda a entender melhor a eficácia de nossos anúncios e a oferecer conteúdo mais relevante.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Você pode saber mais sobre como o Google utiliza dados de publicidade em <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">Políticas de Privacidade e Termos do Google</a>.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
            5. Uso de Cookies
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nosso site utiliza cookies para melhorar a sua experiência de navegação. Cookies são pequenos arquivos de texto armazenados no seu dispositivo que nos ajudam a entender como você interage com nosso site, personalizar conteúdo, fornecer funcionalidades de redes sociais e analisar nosso tráfego.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Utilizamos cookies para diversas finalidades, incluindo:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 leading-relaxed">
            <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site, permitindo que você navegue e utilize suas funcionalidades.</li>
            <li><strong>Cookies de Desempenho e Análise:</strong> Coletam informações sobre como os visitantes usam o site, como as páginas mais visitadas e se ocorrem erros. Esses cookies nos ajudam a melhorar o funcionamento do site.</li>
            <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site se lembre de escolhas que você faz (como seu nome de usuário, idioma ou região) e ofereça recursos aprimorados e mais personalizados.</li>
            <li><strong>Cookies de Publicidade:</strong> Usados para exibir anúncios mais relevantes para você e seus interesses. Eles também são usados para limitar o número de vezes que você vê um anúncio e para medir a eficácia das campanhas publicitárias.</li>
          </ul>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Você pode controlar e gerenciar cookies através das configurações do seu navegador. A maioria dos navegadores permite que você recuse ou aceite cookies, ou que seja alertado antes que um cookie seja armazenado. No entanto, desabilitar cookies pode afetar a funcionalidade de algumas partes do nosso site.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
            6. Seus Direitos
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco através dos canais fornecidos em nosso site.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
            7. Alterações a Esta Política
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Podemos atualizar nossa Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página.
          </p>

          <p className="text-gray-700 text-sm mt-8">
            Última atualização: 26 de Julho de 2024
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}