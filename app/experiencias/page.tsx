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
                {/* Substitua pela logo da empresa */}
                <span className="text-xs text-gray-500">LOGO</span>
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
                Desenvolvedor Fullstack
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-white">
                Set 2022 - Abr 2023
              </time>
              <p className="text-base font-normal text-white mt-2">
                Descrição das atividades realizadas e conquistas neste período.
              </p>
            </li>

            {/* Item 2 */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Desenvolvedor Front-End Jr II
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-white">
                Abr 2022 - Set 2022
              </time>
              <p className="text-base font-normal text-white mt-2">
                Descrição das atividades realizadas e conquistas neste período.
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
                Descrição das atividades realizadas e conquistas neste período.
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
                Descrição das atividades realizadas e conquistas neste período.....................................................
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
                Descrição das atividades realizadas e conquistas neste período.....................................................
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
                Descrição das atividades realizadas e conquistas neste período.....................................................
              </p>
            </li>            
          </ol>

          {/* Experiência 2 */}
          <div className="flex items-start mb-4">
            <div className="mr-4 flex-shrink-0">
              <div className="rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center overflow-hidden">
                {/* Substitua pela logo da empresa */}
                <span className="text-xs text-gray-500">LOGO</span>
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
                Descrição das atividades realizadas e conquistas neste período.
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
