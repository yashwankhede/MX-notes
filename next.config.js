/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages basePath - update if your repo name changes
  basePath: process.env.NODE_ENV === 'production' ? '/MX-notes' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/MX-notes' : '',
  trailingSlash: true,
}

module.exports = nextConfig

