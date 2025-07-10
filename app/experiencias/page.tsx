import Image from "next/image";

export default function Experiencias() {
  return (
    <>
      <div className="content-col p-8">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold mb-6 text-green-500">
            Experiências Profissionais
          </h1>

          {/* Experiência 1 */}
          <div className="flex items-start mb-4">
            <div className="mr-4 flex-shrink-0">
              <div className="rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center overflow-hidden">
                <Image
                  src="/company-icons/prod_logo.png"
                  alt="Logo da Instituição"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold text-green-500 mb-2">
                Prod
              </h2>
            </div>
          </div>

          {/* Timeline */}
          <ol className="relative border-s border-green-500 ms-8">
            {/* Item 1 */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Desenvolvedor Fullstack II
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-white">
                Set 2022 - Abr 2023
              </time>
              <p className="text-base font-normal text-white mt-2">
                Continuei com todas as funções de front-end citadas nos dois cargos anteriores, mas desta vez com muita autonomia e reconhecimento, trazendo para clientes insights de mercado, inovações com base em dados gerados das próprias campanhas realizadas. Nesse momento, com foco total em data driven, análise de métricas de sucesso e relacionamento com cliente.
              </p>
            </li>

            {/* Item 2 */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Desenvolvedor Front-End Jr I
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-white">
                Abr 2022 - Set 2022
              </time>
              <p className="text-base font-normal text-white mt-2">
                Atuava diretamente desde o ínicio de todas as campanhas de marketing, analisando o impacto de todas as ações digitais e com foco em e-mail marketing e SMS. Fui o primeiro a realizar gerenciamento de Leads na agência, no qual se tornou um produto e me certiquei em especialista em e-mail marketing na plataforma VEEVA. Também realizava criação e alterações de conteúdos de páginas em Wordpress.
              </p>
            </li>

            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Assistente de Desenvolvedor Front-End
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-white">
                Jul 2021 - Mar 2022
              </time>
              <p className="text-base font-normal text-white mt-2">
                Minhas funções foram diretamente ligadas a Email Marketing e SMS, onde realizava produções de e-mails em HTML e CSS, agendamento de envios, planejamento de automações, apresentações de resultados e limpeza de base de contatos. Utilizava com frequencia plataformas como Dinamize, RD Station, Mail Chimp, Salesforce Marketing Cloud, Get Response, Zenvia e Litmus para realizar envios de e-mails e SMS.
              </p>
            </li>

            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Mídias de Performance
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-white">
                Jan 2021 - Jul 2021
              </time>
              <p className="text-base font-normal text-white mt-2">
                Responsável por desenvolver planejamentos, criar e otimizar diversas campanhas em mídias pagas. Além disso, realizava acompanhamentos com os clientes, criava e apresentava relatórios com os resultados obtidos durante todo periodo. Nesse cargo, desenvolvi conhecimentos em plataformas de marketing como Meta Ads, Google Ads,  Linkedin Ads e Pareto. Também utilizava o Google Analitycs na obtenção de dados e Google Tag Manager para realizar o rastreamento dos dados.
              </p>
            </li>

            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Estágio - Campanhas e E-mail Mkt
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-white">
                Ago 2020 - Nov 2020
              </time>
              <p className="text-base font-normal text-white mt-2">
                Continuei realizando as funções de freelancer, auxiliava o time de E-mail marketing com produções de e-mails em HTML e CSS, realizava ajustes simples de Layout no Photoshop e ajudava os desenvolvedores front-end com ajustes de responsividade em páginas, alterações de conteúdo e criação de novas páginas.
              </p>
            </li>

            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Freelance - Marketing
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-white">
                Jun 2020 - Ago 2020
              </time>
              <p className="text-base font-normal text-white mt-2">
                Em um projeto específico, trabalhava focado em receber reclamações de clientes e resolver os problemas relacionados ao acesso dos médicos no portal da empresa. Também realizava mapeamentos de médicos para receber amostras gratuitas de produtos e realizava auditorias mensais referente ao financeiro. Dentro de todos esse processo, aprofundei meus conhecimentos no Excel e tive meu primeiro contato com a plataforma SAP (Gigya).
              </p>
            </li>
          </ol>

          {/* Experiência 2 */}
          <div className="flex items-start mb-4">
            <div className="mr-4 flex-shrink-0">
              <div className="rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center overflow-hidden">
                {/* Substitua pela logo da empresa */}
                <Image
                  src="/company-icons/valgroup_logo.jpg"
                  alt="Logo da Instituição"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold text-green-500 mb-2">
                Valgroup
              </h2>
            </div>
          </div>

          {/* Timeline */}
          <ol className="relative border-s border-green-500 ms-8">
            {/* Item 1 */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Técnico em Eletrônica
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-white">
                Jan 2019 - Nov 2019
              </time>
              <p className="text-base font-normal text-white mt-2">
                Realizava manutenção elétrica, corretiva e preventiva em máquinas e equipamentos, analisava e avaliava as necessidades de troca, ajuste e reparo de peças e fazia testes de funcionamento. Também era realizado o desenvolvimento em ladder de funções para CLPs e temporizadores. Além disso, auxiliei o almoxarifado com o controle e registros de entrada e saida de todas as peças do estoque pelo Excel e desenvolvi plantas baixa e corte do local utilizando Autocad.
              </p>
            </li>
          </ol>
        </div>

        <div className="md:hidden block mt-auto pt-6 text-gray-400 text-xs">
          © 2025 Dutra.dev. All rights reserved.
        </div>
      </div>
    </>
  );
}
