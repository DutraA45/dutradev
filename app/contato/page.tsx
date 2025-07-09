export default function Contato() {
  return (
    <>
      <div className="content-col p-8">
        <div className="md:mb-12">
          <h1 className="text-3xl font-semibold mb-6 text-green-500">
            Contato
          </h1>

          {/* Contact Section */}
          <div className="flex flex-col md:flex-row md:gap-12 gap-4">
            {/* Contact Message */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Vamos Construir Algo Incrível!
              </h2>
              <div className="w-16 h-1 bg-green-500 my-4"></div>
              <p className="text-lg text-white mb-8">
                Adoraria ouvir você! Estou aberto a novas oportunidades e colaborações onde possa contribuir com meu conhecimento em desenvolvimento.
              </p>
              <ul className="space-y-3 mb-6 text-white">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✦</span>
                  <span>
                    Disponível para oportunidades em Frontend (CLT,
                    PJ ou freelance)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✦</span>
                  <span>
                    Aberto para discutir projetos desafiadores e inovadores
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✦</span>
                  <span>
                    Interessado em fazer parte de equipes com propósito e boa
                    cultura
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Entre em contato
              </h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-400"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-400"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Mensagem"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition duration-200 font-medium"
                >
                  Enviar
                </button>
              </form>
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
