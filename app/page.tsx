import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Coluna de conteúdo */}
            <div className="content-col p-8">
              {/* Sobre Mim */}
              <div className="mb-12 ">
                <h1 className="text-3xl font-semibold mb-6 text-green-500">
                  Sobre Mim 👨‍💻
                </h1>
                <p className="text-lg leading-relaxed text-white">
                  <b>Engenheiro da Computação</b> com pós em Desenvolvimento{" "}
                  <b>Fullstack</b>, atualmente com foco em <b>Front-End</b>.
                  Experiência em Marketing Digital aplicada ao desenvolvimento
                  de soluções técnicas eficientes e alinhadas com estratégias de
                  negócio.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-12">
                <h1 className="text-3xl font-semibold mb-6 text-green-500">
                  Tech Stack
                </h1>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
                  {/* Lista de blocos */}
                  <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/tech-icons/html.svg"
                      alt="JavaScript"
                      className="h-7 w-7 object-contain mb-2 mt-1"
                    />
                    <span className="text-sm">HTML</span>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/tech-icons/css.svg"
                      alt="CSS"
                      className="h-7 w-7 object-contain mb-2 mt-1"
                    />
                    <span className="text-sm">CSS</span>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/tech-icons/js.svg"
                      alt="Javascript"
                      className="h-7 w-7 object-contain mb-2 mt-1"
                    />
                    <span className="text-sm">Javascript</span>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/tech-icons/ts.svg"
                      alt="Typescript"
                      className="h-7 w-7 object-contain mb-2 mt-1"
                    />
                    <span className="text-sm">Typescript</span>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/tech-icons/reactjs.svg"
                      alt="React"
                      className="h-7 w-7 object-contain mb-2 mt-1"
                    />
                    <span className="text-sm">React</span>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/tech-icons/node.svg"
                      alt="Node"
                      className="h-7 w-7 object-contain mb-2 mt-1"
                    />
                    <span className="text-sm">Node</span>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/tech-icons/next.svg"
                      alt="Next"
                      className="h-7 w-7 object-contain mb-2 mt-1"
                    />
                    <span className="text-sm">Next</span>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/tech-icons/jest.svg"
                      alt="Jest"
                      className="h-7 w-7 object-contain mb-2 mt-1"
                    />
                    <span className="text-sm">Jest</span>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/tech-icons/tailwind.svg"
                      alt="Tailwind"
                      className="h-7 w-7 object-contain mb-2 mt-1"
                    />
                    <span className="text-sm">Tailwind</span>
                  </div>
                </div>
              </div>

              {/* Projetos Recentes */}
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-semibold text-green-500">
                  Projetos Recentes
                </h1>
                <a
                  href="#"
                  className="text-sm font-medium underline underline-offset-4 hover:text-green-400 transition-colors"
                >
                  Ver todos →
                </a>
              </div>

              {/* Grid de Projetos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Projeto 1 - Destaque */}
                <div className="group relative h-56 rounded-2xl overflow-hidden">
                  <img
                    src="https://placehold.co/600x400/1e293b/94a3b8?text=Dashboard+App"
                    alt="Dashboard Analytics"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay e tags (sempre visíveis) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-gray-700">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                          alt="React"
                          className="w-3 h-3 mr-1.5"
                        />
                        React
                      </span>
                      <span className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-gray-700">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                          alt="TypeScript"
                          className="w-3 h-3 mr-1.5"
                        />
                        TypeScript
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo que aparece no hover */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-md p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white">
                        Dashboard Analytics
                      </h3>
                      <span className="text-xs font-medium bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-full">
                        Destaque
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      Plataforma de análise de dados com visualizações
                      interativas e relatórios em tempo real para tomada de
                      decisão estratégica.
                    </p>
                    <a
                      href="#"
                      className="text-indigo-400 text-sm font-medium inline-flex items-center hover:underline"
                    >
                      Ver projeto <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>

                {/* Projeto 2 */}
                <div className="group relative h-56 rounded-2xl overflow-hidden">
                  <img
                    src="https://placehold.co/600x400/1e293b/94a3b8?text=E-commerce"
                    alt="E-commerce Platform"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-gray-700">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                          alt="JavaScript"
                          className="w-3 h-3 mr-1.5"
                        />
                        JavaScript
                      </span>
                      <span className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-gray-700">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                          alt="Node.js"
                          className="w-3 h-3 mr-1.5"
                        />
                        Node.js
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-md p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-3">
                      E-commerce Platform
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Solução completa de e-commerce com carrinho dinâmico,
                      checkout seguro e integração com principais gateways de
                      pagamento.
                    </p>
                    <a
                      href="#"
                      className="text-indigo-400 text-sm font-medium inline-flex items-center hover:underline"
                    >
                      Ver projeto <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>

                {/* Projeto 3 */}
                <div className="group relative h-56 rounded-2xl overflow-hidden">
                  <img
                    src="https://placehold.co/600x400/1e293b/94a3b8?text=Mobile+App"
                    alt="Health Tracker App"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-gray-700">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                          alt="React Native"
                          className="w-3 h-3 mr-1.5"
                        />
                        React Native
                      </span>
                      <span className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-gray-700">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                          alt="TypeScript"
                          className="w-3 h-3 mr-1.5"
                        />
                        TypeScript
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-md p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Health Tracker
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Aplicativo móvel para monitoramento de saúde, atividades
                      físicas e nutrição com gráficos interativos e
                      personalizados.
                    </p>
                    <a
                      href="#"
                      className="text-indigo-400 text-sm font-medium inline-flex items-center hover:underline"
                    >
                      Ver projeto <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:hidden block mt-auto pt-6 text-gray-400 text-xs">
                © 2025 Dutra.dev. All rights reserved.
              </div>
            </div>
    </>
  );
}
