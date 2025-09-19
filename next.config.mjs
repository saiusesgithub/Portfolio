/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // enables `next export`
  images: { unoptimized: true }, // required for export when using next/image
  trailingSlash: true
};
module.exports = nextConfig;


export default nextConfig
