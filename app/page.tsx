import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import Script from "next/script"
import dynamicImport from 'next/dynamic'

// Lazy load heavy below-fold components with ssr:false so they don't block initial paint
const FluxStream = dynamicImport(() => import("@/components/flux-stream").then(mod => mod.FluxStream), { ssr: false, loading: () => null })
const BentoGridSection = dynamicImport(() => import("@/components/bento-grid-section").then(mod => mod.BentoGridSection), { ssr: false, loading: () => null })
const LogoMarquee = dynamicImport(() => import("@/components/logo-marquee").then(mod => mod.LogoMarquee), { ssr: false, loading: () => null })
const Pricing = dynamicImport(() => import("@/components/pricing-monolith").then(mod => mod.PricingMonolith), { ssr: false, loading: () => null })
const EnhancedFooter = dynamicImport(() => import("@/components/enhanced-footer").then(mod => mod.EnhancedFooter), { ssr: true })
const FaqSection = dynamicImport(() => import("@/components/faq-section").then(mod => mod.FaqSection), { ssr: false, loading: () => null })
const AiCompanion = dynamicImport(() => import("@/components/ai-companion").then(mod => mod.AiCompanion), { ssr: false, loading: () => null })
const TestimonialsParallax = dynamicImport(() => import("@/components/testimonials-parallax").then(mod => mod.TestimonialsParallax), { ssr: false, loading: () => null })
const CertificateShowcase = dynamicImport(() => import("@/components/certificate-showcase").then(mod => mod.CertificateShowcase), { ssr: false, loading: () => null })
const StatsSection = dynamicImport(() => import("@/components/stats-section").then(mod => mod.StatsSection), { ssr: false, loading: () => null })
const ValueSection = dynamicImport(() => import("@/components/value-section").then(mod => mod.ValueSection), { ssr: false, loading: () => null })


// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://flyengcareer.com/#pricing",
    name: "Pricing Plans",
    description: "Flyeng Career pricing plans - Free, Pro, and Premium packages for students",
    url: "https://flyengcareer.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "AI Career Tools",
      description: "Career guidance and placement support tools",
      offers: [
        {
          "@type": "Offer",
          name: "Free Plan",
          price: "0",
          priceCurrency: "INR",
          description: "Basic tools and community access",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "99",
          priceCurrency: "INR",
          description: "Everything unlimited with priority matching",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "299",
          priceCurrency: "INR",
          description: "Everything in Pro plus mentor calls and guaranteed shortlists",
        },
      ],
    },
  }

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://flyengcareer.com/",
    name: "Flyeng Career | Your AI Career Co-Pilot",
    description:
      "Light up your future with AI-powered career tools. Resume builder, mock interviews, job matching, and more for placement success.",
    url: "https://flyengcareer.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Flyeng Career",
      url: "https://flyengcareer.com",
      sameAs: [
        "https://twitter.com/flyengcareer",
        "https://youtube.com/@flyengcareer",
        "https://instagram.com/flyengcareer",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://flyengcareer.com/#pricing",
        name: "Pricing Section",
        url: "https://flyengcareer.com/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white overflow-x-hidden">
        <SiteHeader />
        <Hero />
        <FluxStream />
        <BentoGridSection />
        <TestimonialsParallax />
        <StatsSection />
        <AiCompanion />
        <LogoMarquee />
        <FaqSection />
        <Pricing />
        <EnhancedFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
