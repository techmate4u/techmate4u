import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

