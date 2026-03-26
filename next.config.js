/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  experimental: {
    inlineCss: true,
  },
}

module.exports = nextConfig
