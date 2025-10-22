/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ this enables static export
  images: {
    unoptimized: true, // ✅ required for GitHub Pages
  },
};

export default nextConfig;
