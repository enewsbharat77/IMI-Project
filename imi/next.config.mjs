/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["enewsbharat.com"],
    formats: ["image/avif", "image/webp"], // ✅ Use modern formats for better compression
  },
  reactStrictMode: true, // ✅ Helps catch render issues
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // ✅ Removes console logs in build
  },
  experimental: {
    optimizeCss: true, // ✅ Reduce CSS render-blocking
    scrollRestoration: true, // ✅ Better UX on navigation
  },
};

export default nextConfig;
