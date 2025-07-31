/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static HTML export for GitHub Pages
  distDir: 'out', // Output directory for the build
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure the basePath is set correctly for GitHub Pages
  // If you're deploying to a custom domain, you can remove this
  basePath: process.env.NODE_ENV === 'production' ? '/FF-GardenFn' : '',
};

module.exports = nextConfig;