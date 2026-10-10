import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [60, 75, 85, 92],
  },
  // Allow Cursor / forwarded preview origins during local cloud-agent testing
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
