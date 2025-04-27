const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript errors during builds
  },
  images: {
    domains: ["img.clerk.com"], // <-- ADD THIS LINE
  },
};

export default nextConfig;
