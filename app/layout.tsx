import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

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
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow"></div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
