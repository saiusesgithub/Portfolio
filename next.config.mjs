// next.config.mjs
/** @type {import('next').NextConfig} */
const config = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: 'export',              // enables `next export`
  images: { unoptimized: true }, // required for next/image in static export
  trailingSlash: true
};

export default config;
