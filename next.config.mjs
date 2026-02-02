/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
        images: {
          formats: ['image/avif', 'image/webp'],
          remotePatterns: [
            {
              protocol: 'https',
              hostname: '**',
            },
          ],
          dangerouslyAllowSVG: true,
          contentDispositionType: 'attachment',
          contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig
