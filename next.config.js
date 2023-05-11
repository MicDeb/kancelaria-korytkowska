/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WORDPRESS_API_URL: 'https://api.jkkp-kancelaria.pl/graphql'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.jkkp-kancelaria.pl',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
