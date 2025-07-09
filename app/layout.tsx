import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DutraDev",
  description: "Porfólio do DutraDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="pt-BR" className="h-full">
    <body className="min-h-screen flex flex-col">  {/* Adicione min-h-screen aqui */}
      <div className="md:pt-28 flex flex-col flex-grow">  {/* Mova flex-grow para esta div */}
        <Header />
        <main className="flex-grow flex justify-center pt-40 sm:pt-0">  {/* flex-grow também aqui */}
          <div className="flex flex-col md:flex-row max-w-7xl block-bg border-1 border-b-0 border-default rounded-t-lg md:min-w-7xl w-full">
              <div className="details-col pt-10 pr-10 pl-10 pb-5 flex flex-col items-center relative">
                <div className="mb-6 -mt-42 z-10 w-60 h-60 rounded-full border-2 border-default overflow-hidden relative">
                  <Image
                    src="/icon.png"
                    alt="Foto de perfil"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Nome - Centralizado */}
                <h2 className="text-white font-semibold text-2xl md:text-3xl mb-2 text-center">
                  Jefferson Dutra
                </h2>

                {/* Cargo/Profissão - Centralizado */}
                <h3 className="text-green-500 font-semibold text-xl mb-6 text-center">
                  Frontend Dev
                </h3>

                {/* Informações com ícones - Alinhados */}
                <div className="space-y-3 mb-8 w-full max-w-xs">
                  {/* Localização */}
                  <div className="flex items-center gap-4 text-white">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Passa Quatro - MG, Brasil</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 text-white">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>jeffinho.angelo@gmail.com</span>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-center gap-4 text-white">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>+55 012 99231-3701</span>
                  </div>
                </div>

                {/* Ponto divisor */}
                <div className="w-full flex justify-center mb-5">
                  <span className="text-gray-400 text-xl">•</span>
                </div>

                {/* Redes sociais - Sem alterações */}
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>

                {/* Linha divisória - aparece apenas em telas médias/grandes */}
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px border-color"></div>

                {/* Linha divisória entre e-mail e redes sociais */}
                <div className="w-full border-t border-gray-700 my-4 mt-10 -mb-2 md:hidden"></div>

                <div className="hidden md:block mt-auto pt-6 text-gray-400 text-xs">
                  © 2025 Dutra.dev. All rights reserved.
                </div>
              </div>

              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
