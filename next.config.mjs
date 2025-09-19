/** @type {import('next').NextConfig} */
const config = {
  // keep these if you want to skip lint/type errors on build
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
