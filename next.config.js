// const addPwa = require("next-pwa");

/** @type {import('next').NextConfig} */

// /** @type {import('next').NextConfig} */
// const withPwa = addPwa({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
// });

let nextConfig = {
  // pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

// nextConfig = withPwa(nextConfig);

module.exports = nextConfig;
