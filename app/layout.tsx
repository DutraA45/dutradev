import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import BackgroundParticles from "./components/BackgroundParticles";
import { ProfileSidebar } from "./components/ProfileSidebar";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const siteName = "Jefferson Dutra";
const description =
  "Desenvolvedor front-end em React e Next.js, com base em engenharia e histórico em mídia paga e análise de dados.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dutradev.vercel.app"),
  title: {
    default: `${siteName} · Desenvolvedor Front-End`,
    template: `%s · ${siteName}`,
  },
  description,
  // Prévia ao compartilhar o link no LinkedIn, WhatsApp e afins.
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    siteName,
    title: `${siteName} · Desenvolvedor Front-End`,
    description,
    images: [{ url: "/icon.png", width: 512, height: 512, alt: siteName }],
  },
  twitter: {
    card: "summary",
    title: `${siteName} · Desenvolvedor Front-End`,
    description,
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("h-full", "font-sans", geist.variable)}>
      <body className="relative flex min-h-screen flex-col">
        <BackgroundParticles />
        {/* O padding de cima é o espaço em que a foto da sidebar flutua acima do painel. */}
        <div className="flex grow flex-col lg:pt-36">
          <Header />
          <main className="flex grow justify-center px-0 pt-40 sm:px-4 lg:pt-0">
            <div className="block-bg flex w-full max-w-7xl flex-col rounded-t-lg border border-b-0 border-default lg:flex-row">
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
