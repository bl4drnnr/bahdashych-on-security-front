/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    FRONT_API_URL: process.env.FRONT_API_URL
  }
}

module.exports = nextConfig
