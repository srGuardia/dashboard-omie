import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "dummyjson.com",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
