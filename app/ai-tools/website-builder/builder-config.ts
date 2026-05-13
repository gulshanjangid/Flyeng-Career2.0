import { Sparkles, Layout, Type, Image as ImageIcon, Box, Smartphone, Monitor, Tablet, Undo, Redo, Download, Eye, Plus, Trash2, Settings, Zap, MessageSquare, MousePointer2, CheckCircle2, Loader2, X, Code, Terminal, FileCode, Play, ChevronRight, ArrowRight, Maximize2, Minimize2, Grid, CreditCard, MapPin, Share2, Menu, Palette, Type as TypeIcon, Move } from "lucide-react"

export type ComponentType = 'hero' | 'features' | 'testimonials' | 'cta' | 'footer' | 'text' | 'image' | 'pricing' | 'gallery' | 'navbar'

export interface BuilderComponent {
    id: string
    type: ComponentType
    content: any
    styles: {
        background?: string
        textColor?: string
        paddingTop?: string
        paddingBottom?: string
        textAlign?: 'left' | 'center' | 'right'
        fontSize?: string
        fontFamily?: string
        fontWeight?: string
        borderRadius?: string
        border?: string
        boxShadow?: string
        display?: string
        gridTemplateColumns?: string
        gap?: string
        alignItems?: string
        justifyContent?: string
        opacity?: string
        transform?: string
        padding?: string
        backdropFilter?: string
    }
}

export const THEMES = {
    'Modern': {
        colors: {
            primary: '#06b6d4', // Cyan 500
            secondary: '#3b82f6', // Blue 500
            background: '#0a0a0a',
            text: '#ffffff'
        },
        font: 'Inter, sans-serif',
        radius: '1rem'
    },
    'Neon': {
        colors: {
            primary: '#d946ef', // Fuchsia 500
            secondary: '#8b5cf6', // Violet 500
            background: '#000000',
            text: '#e2e8f0'
        },
        font: 'Orbitron, sans-serif',
        radius: '0px'
    },
    'Elegant': {
        colors: {
            primary: '#d4af37', // Gold
            secondary: '#1c1917', // Stone 900
            background: '#fafaf9', // Stone 50
            text: '#1c1917'
        },
        font: 'Playfair Display, serif',
        radius: '0.5rem'
    },
    'Retro': {
        colors: {
            primary: '#f43f5e', // Rose 500
            secondary: '#fbbf24', // Amber 400
            background: '#fff1f2', // Rose 50
            text: '#881337' // Rose 900
        },
        font: 'Courier Prime, monospace',
        radius: '4px'
    }
}

export const COMPONENT_TEMPLATES: Record<ComponentType, BuilderComponent> = {
    navbar: {
        id: '', type: 'navbar',
        content: { logo: "Brand", links: ["Home", "Features", "Pricing", "Contact"] },
        styles: { background: "bg-black/80 backdrop-blur-md", textColor: "#ffffff", paddingTop: "16px", paddingBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }
    },
    hero: {
        id: '', type: 'hero',
        content: { title: "Build the Future", subtitle: "Create stunning websites in seconds with AI.", buttonText: "Get Started" },
        styles: { background: "bg-gradient-to-r from-blue-900 to-purple-900", textColor: "#ffffff", paddingTop: "120px", paddingBottom: "120px", textAlign: "center" }
    },
    features: {
        id: '', type: 'features',
        content: {
            title: "Powerful Features",
            items: [
                { title: "AI Powered", description: "Generate content instantly.", icon: "Zap" },
                { title: "Responsive", description: "Looks great on all devices.", icon: "Smartphone" },
                { title: "Customizable", description: "Tweak every detail.", icon: "Settings" }
            ]
        },
        styles: { background: "#0a0a0a", textColor: "#ffffff", paddingTop: "80px", paddingBottom: "80px", textAlign: "center", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }
    },
    testimonials: {
        id: '', type: 'testimonials',
        content: {
            title: "Trusted by Creators",
            items: [
                { name: "Alex Chen", role: "Founder", quote: "This tool changed my workflow forever." },
                { name: "Sarah Jones", role: "Designer", quote: "The best builder I've ever used." }
            ]
        },
        styles: { background: "#111111", textColor: "#ffffff", paddingTop: "80px", paddingBottom: "80px", textAlign: "center" }
    },
    cta: {
        id: '', type: 'cta',
        content: { title: "Ready to Start?", description: "Join thousands of users today.", buttonText: "Sign Up Now" },
        styles: { background: "bg-cyan-900/20", textColor: "#ffffff", paddingTop: "100px", paddingBottom: "100px", textAlign: "center", borderRadius: "24px" }
    },
    pricing: {
        id: '', type: 'pricing',
        content: {
            title: "Simple Pricing",
            plans: [
                { name: "Starter", price: "$0", features: ["1 Project", "Basic Analytics"] },
                { name: "Pro", price: "$29", features: ["Unlimited Projects", "AI Features", "Priority Support"], isPopular: true },
                { name: "Enterprise", price: "Custom", features: ["SSO", "Dedicated Account Manager"] }
            ]
        },
        styles: { background: "#050505", textColor: "#ffffff", paddingTop: "80px", paddingBottom: "80px", textAlign: "center" }
    },
    gallery: {
        id: '', type: 'gallery',
        content: {
            title: "Our Work",
            images: [
                "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            ]
        },
        styles: { background: "#000000", textColor: "#ffffff", paddingTop: "80px", paddingBottom: "80px", textAlign: "center" }
    },
    footer: {
        id: '', type: 'footer',
        content: { copyright: "© 2024 FC Builder. All rights reserved.", links: ["Privacy", "Terms", "Contact"] },
        styles: { background: "#000000", textColor: "#888888", paddingTop: "40px", paddingBottom: "40px", textAlign: "center" }
    },
    text: {
        id: '', type: 'text',
        content: { text: "Add your custom text here. Edit this block to say whatever you want." },
        styles: { background: "transparent", textColor: "#ffffff", paddingTop: "20px", paddingBottom: "20px", textAlign: "left" }
    },
    image: {
        id: '', type: 'image',
        content: { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80", alt: "Placeholder" },
        styles: { background: "transparent", textColor: "", paddingTop: "20px", paddingBottom: "20px", textAlign: "center", borderRadius: "12px" }
    }
}

export const FULL_PAGE_TEMPLATES: Record<string, BuilderComponent[]> = {
    'modern-saas': [
        { ...COMPONENT_TEMPLATES.navbar, id: 'nav-1' },
        { ...COMPONENT_TEMPLATES.hero, id: 'hero-1', content: { ...COMPONENT_TEMPLATES.hero.content, title: "Scale Your Business", subtitle: "The ultimate platform for growth." } },
        { ...COMPONENT_TEMPLATES.features, id: 'feat-1' },
        { ...COMPONENT_TEMPLATES.pricing, id: 'price-1' },
        { ...COMPONENT_TEMPLATES.cta, id: 'cta-1' },
        { ...COMPONENT_TEMPLATES.footer, id: 'foot-1' }
    ],
    'creative-portfolio': [
        { ...COMPONENT_TEMPLATES.navbar, id: 'nav-2' },
        { ...COMPONENT_TEMPLATES.hero, id: 'hero-2', content: { ...COMPONENT_TEMPLATES.hero.content, title: "Visual Storytelling", subtitle: "Capturing moments that matter." }, styles: { ...COMPONENT_TEMPLATES.hero.styles, background: "bg-black" } },
        { ...COMPONENT_TEMPLATES.gallery, id: 'gal-1' },
        { ...COMPONENT_TEMPLATES.testimonials, id: 'test-1' },
        { ...COMPONENT_TEMPLATES.footer, id: 'foot-2' }
    ],
    'dark-crypto': [
        { ...COMPONENT_TEMPLATES.navbar, id: 'nav-3' },
        { ...COMPONENT_TEMPLATES.hero, id: 'hero-3', content: { ...COMPONENT_TEMPLATES.hero.content, title: "Future of Finance", subtitle: "Decentralized trading for everyone." }, styles: { ...COMPONENT_TEMPLATES.hero.styles, background: "bg-gradient-to-br from-gray-900 to-black" } },
        { ...COMPONENT_TEMPLATES.features, id: 'feat-2' },
        { ...COMPONENT_TEMPLATES.cta, id: 'cta-2' },
        { ...COMPONENT_TEMPLATES.footer, id: 'foot-3' }
    ],
    'minimal-blog': [
        { ...COMPONENT_TEMPLATES.navbar, id: 'nav-4', styles: { ...COMPONENT_TEMPLATES.navbar.styles, background: "bg-white border-b border-gray-100", textColor: "#000000" } },
        { ...COMPONENT_TEMPLATES.hero, id: 'hero-4', content: { title: "Thoughts & Ideas", subtitle: "A collection of stories.", buttonText: "Read Latest" }, styles: { ...COMPONENT_TEMPLATES.hero.styles, background: "bg-white", textColor: "#000000" } },
        { ...COMPONENT_TEMPLATES.text, id: 'txt-1', content: { text: "Latest Articles" }, styles: { ...COMPONENT_TEMPLATES.text.styles, textAlign: "center", fontSize: "2rem", fontWeight: "bold", textColor: "#000000" } },
        { ...COMPONENT_TEMPLATES.features, id: 'feat-3', styles: { ...COMPONENT_TEMPLATES.features.styles, background: "bg-white", textColor: "#000000" } },
        { ...COMPONENT_TEMPLATES.footer, id: 'foot-4', styles: { ...COMPONENT_TEMPLATES.footer.styles, background: "bg-gray-50", textColor: "#666666" } }
    ],
    'agency-landing': [
        { ...COMPONENT_TEMPLATES.navbar, id: 'nav-5' },
        { ...COMPONENT_TEMPLATES.hero, id: 'hero-5', content: { title: "We Build Brands", subtitle: "Digital experiences that convert.", buttonText: "Work With Us" }, styles: { ...COMPONENT_TEMPLATES.hero.styles, background: "bg-gradient-to-r from-emerald-900 to-teal-900" } },
        { ...COMPONENT_TEMPLATES.features, id: 'feat-4' },
        { ...COMPONENT_TEMPLATES.gallery, id: 'gal-2' },
        { ...COMPONENT_TEMPLATES.testimonials, id: 'test-2' },
        { ...COMPONENT_TEMPLATES.cta, id: 'cta-3', styles: { ...COMPONENT_TEMPLATES.cta.styles, background: "bg-emerald-500/20" } },
        { ...COMPONENT_TEMPLATES.footer, id: 'foot-5' }
    ]
}

export const CATEGORIES = {
    "Templates": ['modern-saas', 'creative-portfolio', 'dark-crypto', 'minimal-blog', 'agency-landing'],
    "Layout": ['hero', 'footer', 'cta', 'navbar'],
    "Content": ['features', 'testimonials', 'pricing'],
    "Media": ['gallery', 'image'],
    "Basic": ['text']
}
