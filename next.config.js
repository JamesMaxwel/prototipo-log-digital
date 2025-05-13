/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/prototipo-log-digital' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/prototipo-log-digital/' : '',
}

module.exports = nextConfig 