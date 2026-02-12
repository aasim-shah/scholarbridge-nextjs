/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Enable experimental features if needed
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
