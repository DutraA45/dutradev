"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data/nav-links";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="max-lg:sticky max-lg:top-0 max-lg:z-50 max-lg:bg-[#010409]/80 max-lg:backdrop-blur">
      <div className="max-w-7xl mx-auto">
        {/* Menu hamburguer (mobile) */}
        <div className="lg:hidden p-4 flex justify-end">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="text-white" aria-label="Menu">
              <Menu className="w-6 h-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-4/5 max-w-sm gap-0 border-l border-default bg-[#0D1117]"
            >
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>

              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <span className="text-white font-semibold text-lg">
                  Jefferson Dutra
                </span>
                <SheetClose
                  aria-label="Fechar menu"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </SheetClose>
              </div>

              <nav className="px-4 py-2">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;

                    return (
                      <li key={link.href}>
                        {/*
                          Link puro, não SheetClose: embrulhado, o <a> ganhava
                          role="button" e sumia da lista de links do leitor de tela.
                          O menu fecha pelo estado controlado.
                        */}
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-3 text-lg transition-colors",
                            isActive
                              ? "bg-green-500/10 text-green-400"
                              : "text-white hover:bg-white/5 hover:text-green-400"
                          )}
                        >
                          <Icon className="w-5 h-5 shrink-0" aria-hidden />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Navegação principal (desktop) */}
        <div className="hidden lg:flex justify-end py-4 px-8">
          <nav>
            <ul className="flex list-none items-center">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href} className="flex items-center">
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative px-4 py-1 transition-colors hover:text-green-400",
                        // A página atual ganha um traço verde embaixo.
                        "after:absolute after:inset-x-4 after:-bottom-1 after:h-px after:bg-green-500 after:opacity-0 after:transition-opacity",
                        isActive
                          ? "text-green-400 after:opacity-100"
                          : "text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                    {index < navLinks.length - 1 && (
                      <span aria-hidden className="text-green-600">
                        |
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
