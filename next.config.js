const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fra1.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
