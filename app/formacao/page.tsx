import Image from "next/image";

export default function Formacao() {
  return (
    <>
      <div className="content-col p-8">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold mb-6 text-green-500">
            Formação Academica 📚
          </h1>
          
          {/* Duas colunas */}
          <div className="flex items-start gap-6 mb-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/study-icons/puc-minas_logo.jpg"
                  alt="Logo da Instituição"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            {/* Informações */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-green-500 mb-1">PUC Minas</h2>
              <p className="text-white text-xl font-semibold mb-1">Pós Graduação - Desenvolvimento Fullstack</p>
              <p className="text-white text-base font-light mb-2">jan de 2024 - set de 2025 · 2 anos</p>
              {/* <p className="text-white text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet placerat accumsan. Donec pellentesque ultrices ex, ut pellentesque arcu. Suspendisse ac mauris in est dapibus varius vel vitae odio. Vestibulum consequat eros cursus arcu sollicitudin, ac sollicitudin diam dapibus. Cras dignissim finibus vehicula.
              </p> */}
            </div>
          </div>

          <div className="flex items-start gap-6 mb-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/study-icons/unisal_logo.jpg"
                  alt="Logo da Instituição"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            {/* Informações */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-green-500 mb-1">UNISAL</h2>
              <p className="text-white text-xl font-semibold mb-1">Graduação - Engenharia da Computação</p>
              <p className="text-white text-base font-light mb-2">2018 - 2024 · 6 anos</p>
              {/* <p className="text-white text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet placerat accumsan. Donec pellentesque ultrices ex, ut pellentesque arcu. Suspendisse ac mauris in est dapibus varius vel vitae odio. Vestibulum consequat eros cursus arcu sollicitudin, ac sollicitudin diam dapibus. Cras dignissim finibus vehicula.
              </p> */}
            </div>
          </div>

          <div className="flex items-start gap-6 mb-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/study-icons/sao-miguel_logo.jpg" // Substitua pelo caminho correto
                  alt="Logo da Instituição"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            {/* Informações */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-green-500 mb-1">São Miguel</h2>
              <p className="text-white text-xl font-semibold mb-1">Técnico em Eletrônica</p>
              <p className="text-white text-base font-light mb-2">2015 - 2017 · 3 anos</p>
              {/* <p className="text-white text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet placerat accumsan. Donec pellentesque ultrices ex, ut pellentesque arcu. Suspendisse ac mauris in est dapibus varius vel vitae odio. Vestibulum consequat eros cursus arcu sollicitudin, ac sollicitudin diam dapibus. Cras dignissim finibus vehicula.
              </p> */}
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
