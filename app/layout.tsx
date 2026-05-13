import React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import Script from "next/script"

import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { RouteChangeListener } from "@/components/route-change-listener"
import { LoaderProvider } from "@/components/loader-context"


import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/context/auth-context"

import { ErrorBoundary } from "@/components/ui/error-boundary";

/* Optimized: Lazy load heavy components */
import dynamic from 'next/dynamic'
const GlobalLoader = dynamic(() => import('@/components/global-loader').then(mod => mod.GlobalLoader), {
  ssr: false,
  loading: () => null
})
const ChatbotBubble = dynamic(() => import('@/components/chatbot-bubble').then(mod => mod.ChatbotBubble), {
  ssr: false,
  loading: () => null
})
const AmbientLight = dynamic(() => import('@/components/ambient-light').then(mod => mod.AmbientLight), {
  ssr: false
})
const SmoothScroll = dynamic(() => import('@/components/smooth-scroll').then(mod => mod.SmoothScroll), {
  ssr: false,
  loading: () => null
})
const CustomCursor = dynamic(() => import('@/components/ui/custom-cursor').then(mod => mod.CustomCursor), {
  ssr: false,
  loading: () => null
})

const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading", display: 'swap' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body", display: 'swap' })

export const metadata: Metadata = {
  title: "Flyeng Career - AI-Powered Placement Prep",
  description: "Master your placement journey with AI-driven tools, mock interviews, and personalized roadmaps.",
  icons: {
    icon: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://flyeng-career.vercel.app'),
  openGraph: {
    title: 'Flyeng Career - AI-Powered Placement Prep',
    description: 'Master your placement journey with AI-driven tools, mock interviews, and personalized roadmaps.',
    siteName: 'Flyeng Career',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover', // notch-aware layout on iOS/Android
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for analytics and auth origins */}
        <link rel="dns-prefetch" href="https://vitals.vercel-analytics.com" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link rel="preconnect" href="https://hpfqjrdrkdpuzucdowex.supabase.co" crossOrigin="anonymous" />
        {/* Prevent hydration mismatch extensions */}
      </head>
      <body className={`${outfit.variable} ${plusJakarta.variable} font-body`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <LoaderProvider>
              <GlobalLoader />
              {/* RouteChangeListener needs Suspense because it uses useSearchParams */}
              {/* <Suspense fallback={null}>
                <RouteChangeListener />
              </Suspense> */}

              <CustomCursor />
              <div className="print:hidden">
                <ErrorBoundary>
                  <Suspense fallback={null}>
                    <ChatbotBubble />
                  </Suspense>
                </ErrorBoundary>
              </div>
              <SmoothScroll>
                 {/* Global Background Particles - The "Stardust" that unifies the void */}
                 <AmbientLight />
                 <div className="fixed inset-0 z-0 pointer-events-none">
                  {/* Removed heavy InteractiveBackground global to prevent double-draw */}
                </div>

                <div className="relative z-10">
                  {children}
                </div>
                <Toaster />
              </SmoothScroll>
            </LoaderProvider>
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
