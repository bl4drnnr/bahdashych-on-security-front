/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    FRONT_URL: process.env.FRONT_URL,
  }
};

module.exports = nextConfig;
