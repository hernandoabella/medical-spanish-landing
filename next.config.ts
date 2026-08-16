import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow the logo/books to be served at a higher quality for sharp text.
    qualities: [75, 90],
  },
};

export default nextConfig;
