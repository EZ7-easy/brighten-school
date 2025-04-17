const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript errors during builds
  },
};

export default nextConfig;
