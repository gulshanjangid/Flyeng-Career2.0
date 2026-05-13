/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // ─── Performance ───
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  experimental: {
    serverComponentsExternalPackages: ['pdfjs-dist'],
    optimizePackageImports: [
      'lucide-react', 
      'recharts', 
      'framer-motion', 
      'date-fns', 
      '@radix-ui/react-icons',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-popover',
      'react-syntax-highlighter',
      'gsap',
      '@gsap/react',
      'zod',
    ],
    turbo: {
      resolveAlias: {
        canvas: './components/canvas-mock.js',
      },
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year for immutable image assets
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "unavatar.io",
      },
      {
        protocol: "https",
        hostname: "www.vectorlogo.zone",
      },
    ],
  },
  // ─── Cache-Control for static assets ───
  async headers() {
    return [
      // ─── Immutable static files (1 year) ───
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // ─── Next.js image optimizer cache ───
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
          {
            key: 'Vary',
            value: 'Accept',
          },
        ],
      },
      // ─── Security headers on all routes ───
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(self), geolocation=()',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/interview',
        destination: '/interview/config',
        permanent: true,
      },
      {
        source: '/interview/setup',
        destination: '/interview/config',
        permanent: true,
      },
      {
        source: '/ai-tools/mock-interview',
        destination: '/interview/config',
        permanent: true,
      },
      {
        source: '/ai-tools/mock-interview/app',
        destination: '/interview/config',
        permanent: true,
      },
    ]
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
}

export default nextConfig
