/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For custom domain, no basePath needed. For github.io subdomain, use '/MX-notes'
  // Since you're using pentest.matrixploit.com, we don't need basePath
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
}

module.exports = nextConfig

