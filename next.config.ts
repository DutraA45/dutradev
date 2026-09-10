import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Todas as imagens do site são locais (/public). Sem hosts remotos não é
  // preciso liberar SVG externo, que era o único motivo do dangerouslyAllowSVG.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
