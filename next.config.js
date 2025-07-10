/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {}, // ✅ FIXED: must be an object, not true
  },
};

export default nextConfig;
