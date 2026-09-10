import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import BackgroundParticles from "./components/BackgroundParticles";
import { ProfileSidebar } from "./components/ProfileSidebar";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="pt-BR" className={cn("h-full", "font-sans", geist.variable)}>
      <body className="min-h-screen flex flex-col relative">
        <BackgroundParticles />
        <div className="md:pt-36 flex flex-col grow">
          <Header />
          <main className="grow flex justify-center pt-40 sm:pt-0">
            <div className="flex flex-col md:flex-row max-w-7xl block-bg border border-b-0 border-default rounded-t-lg md:min-w-7xl w-full">
              <ProfileSidebar />

              {children}
              <Analytics />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
