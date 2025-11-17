/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages, if your repo name matches the domain, you may not need basePath
  // If deploying to a subdirectory, uncomment and adjust:
  // basePath: process.env.NODE_ENV === 'production' ? '/pentest.matrixploit.com' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/pentest.matrixploit.com' : '',
  trailingSlash: true,
}

module.exports = nextConfig

