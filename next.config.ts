import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      { source: '/ar', destination: '/', permanent: true },
      { source: '/ar/:path*', destination: '/', permanent: true },
      { source: '/fr', destination: '/', permanent: true },
      { source: '/fr/:path*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
