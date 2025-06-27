import React from "react";

export default function Header() {
  return (
    <header className="max-sm:sticky max-sm:z-50">
      <div className="max-w-7xl mx-auto">
        {/* Menu hamburguer (mobile) */}
        <div className="md:hidden p-4 flex justify-end">
          <button className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navegação principal (desktop) */}
        <div className="hidden md:flex justify-end py-4 px-8">
          <nav>
            <ul className="flex list-none items-center">
              <li className="flex items-center">
                <a
                  href="#"
                  className="text-white hover:text-green-400 transition-colors px-4"
                >
                  Sobre
                </a>
                <span className="text-green-600">|</span>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="text-white hover:text-green-400 transition-colors px-4"
                >
                  Formação
                </a>
                <span className="text-green-600">|</span>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="text-white hover:text-green-400 transition-colors px-4"
                >
                  Experiências
                </a>
                <span className="text-green-600">|</span>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="text-white hover:text-green-400 transition-colors px-4"
                >
                  Portfólio
                </a>
                <span className="text-green-600">|</span>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-400 transition-colors px-4"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
