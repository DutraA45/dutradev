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
      <body className="min-h-screen flex flex-col">
        <div className="md:pt-28 flex flex-col flex-grow">
          <Header />
          <main className="flex-grow flex justify-center pt-40 sm:pt-0">
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

                {/* Redes sociais */}
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.instagram.com/dutrajeffdutra/#"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dutraa45"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/DutraA45"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
