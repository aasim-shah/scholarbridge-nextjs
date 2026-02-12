/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Set workspace root to silence lockfile warning
  outputFileTracingRoot: require('path').join(__dirname, '../'),
  // Enable experimental features if needed
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
