/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  trailingSlash: true,
  images: {
    domains: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;


