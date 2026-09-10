"use client";

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

  return (
    <header className="max-sm:sticky max-sm:z-50">
      <div className="max-w-7xl mx-auto">
        {/* Menu hamburguer (mobile) */}
        <div className="md:hidden p-4 flex justify-end">
          <Sheet>
            <SheetTrigger className="text-white" aria-label="Menu">
              <Menu className="w-6 h-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-4/5 max-w-sm gap-0 border-l-0 bg-gray-800"
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
                        <SheetClose
                          nativeButton={false}
                          render={
                            <Link
                              href={link.href}
                              className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-3 text-lg transition-colors",
                                isActive
                                  ? "bg-green-500/10 text-green-400"
                                  : "text-white hover:bg-white/5 hover:text-green-400"
                              )}
                            />
                          }
                        >
                          <Icon className="w-5 h-5 shrink-0" />
                          {link.label}
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Navegação principal (desktop) */}
        <div className="hidden md:flex justify-end py-4 px-8">
          <nav>
            <ul className="flex list-none items-center">
              {navLinks.map((link, index) => (
                <li key={link.href} className="flex items-center">
                  <Link
                    href={link.href}
                    className="text-white hover:text-green-400 transition-colors px-4"
                  >
                    {link.label}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <span className="text-green-600">|</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
