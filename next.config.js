/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fsw-store.s3.sa-east-1.amazonaws.com"],
  },
  experimental: {
    serverActions: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
