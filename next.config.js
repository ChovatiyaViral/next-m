/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com'],
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_URL: process.env.API_URL,
    DOMAIN: process.env.DOMAIN,
    APPID: process.env.APPID,
    STORE_FRONT_ACCESS_TOKEN: process.env.STOREFRONTACESSTOKEN,
  },
};

module.exports = nextConfig;
