import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
