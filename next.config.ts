import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "ui.shadcn.com" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
    dangerouslyAllowSVG: true,  // Permite carregar imagens SVG de domínios externos
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Adiciona segurança extra
  },
};

export default nextConfig;