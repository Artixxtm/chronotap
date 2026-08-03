/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    qualities: [75, 100],
  },
  reactCompiler: true,
  experimental: {
    optimizeCss: true
  }
};

export default nextConfig;
