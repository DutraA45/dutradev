import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'placehold.co',
      'upload.wikimedia.org',
    ],
    dangerouslyAllowSVG: true,  // Permite carregar imagens SVG de domínios externos
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Adiciona segurança extra
  },
};

export default nextConfig;