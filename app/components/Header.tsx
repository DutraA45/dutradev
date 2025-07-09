"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="max-sm:sticky max-sm:z-50">
      <div className="max-w-7xl mx-auto">
        {/* Menu hamburguer (mobile) */}
        <div className="md:hidden p-4 flex justify-end">
          <button
            className="text-white"
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
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

        {/* Overlay e Menu lateral */}
        {isMenuOpen && (
          <>
            {/* Overlay escuro */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu lateral */}
            <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-gray-800 z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-green-400"
                  aria-label="Fechar menu"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              
              <nav className="px-6 py-4">
                <ul className="flex flex-col space-y-6">
                  <li>
                    <Link
                      href="/"
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/formacao"
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Formação
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/experiencias"
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Experiências
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Portfólio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contato"
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        )}

        {/* Navegação principal (desktop) */}
        <div className="hidden md:flex justify-end py-4 px-8">
          <nav>
            <ul className="flex list-none items-center">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="text-white hover:text-green-400 transition-colors px-4"
                >
                  Sobre
                </Link>
                <span className="text-green-600">|</span>
              </li>
              <li className="flex items-center">
                <Link
                  href="/formacao"
                  className="text-white hover:text-green-400 transition-colors px-4"
                >
                  Formação
                </Link>
                <span className="text-green-600">|</span>
              </li>
              <li className="flex items-center">
                <Link
                  href="/experiencias"
                  className="text-white hover:text-green-400 transition-colors px-4"
                >
                  Experiências
                </Link>
                <span className="text-green-600">|</span>
              </li>
              <li className="flex items-center">
                <Link
                  href="/portfolio"
                  className="text-white hover:text-green-400 transition-colors px-4"
                >
                  Portfólio
                </Link>
                <span className="text-green-600">|</span>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-white hover:text-green-400 transition-colors px-4"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}