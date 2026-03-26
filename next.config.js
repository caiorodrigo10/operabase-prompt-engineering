/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  experimental: {
    inlineCss: true,
  },
}

module.exports = nextConfig
