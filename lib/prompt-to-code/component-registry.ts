export interface PropSchema {
    type: 'string' | 'number' | 'boolean' | 'object' | 'array';
    description: string;
    example: any;
    validation?: string;
}

export interface ComponentMeta {
    id: string;
    name: string;
    category: 'hero' | 'features' | 'pricing' | 'forms' | 'nav' | 'gallery' | 'footer' | 'cta' | 'blog' | 'newsletter' | 'faq' | 'contact';
    description: string; // For LLM context
    template: string; // HTML with ${placeholders}
    props: {
        required: { [key: string]: PropSchema };
        optional: { [key: string]: PropSchema };
    };
    variants: string[]; // 'modern', 'minimal', 'dark', etc.
    useCases: string[]; // 'SaaS', 'Portfolio', 'E-commerce'
    accessibility: string; // "WCAG AA, 4.5:1 contrast, skip links"
    performance: string; // "LCP: <2.5s, use next/image"
    seo: string; // "H1 tag, meta description, JSON-LD"
}

export const PROMPT_COMPONENTS: Record<string, ComponentMeta> = {
    'hero-fullscreen': {
        id: 'hero-fullscreen',
        name: 'Full-Screen Hero',
        category: 'hero',
        description: 'Large immersive hero with headline, subtitle, and dual CTAs, featuring a dark gradient background.',
        template: `
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-900 to-black">
    <div class="absolute inset-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    <div class="relative z-10 text-center max-w-5xl mx-auto px-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
        <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span class="text-sm text-gray-300">\${badge || 'New Release'}</span>
      </div>
      <h1 class="text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
        \${title}
      </h1>
      \${subtitle ? \`<p class="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">\${subtitle}</p>\` : ''}
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="\${primaryCta.url}" class="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transform hover:scale-105 transition-all duration-300">
          \${primaryCta.text}
        </a>
        \${secondaryCta ? \`<a href="\${secondaryCta.url}" class="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-bold hover:bg-white/10 backdrop-blur-sm transition-all">\${secondaryCta.text}</a>\` : ''}
      </div>
    </div>
  </section>
      `,
        props: {
            required: {
                title: {
                    type: 'string',
                    description: 'Main headline (40-60 chars optimal)',
                    example: 'Build Websites, Faster',
                    validation: 'max 120 chars',
                },
                primaryCta: {
                    type: 'object',
                    description: 'Main call-to-action button',
                    example: { text: 'Get Started Free', url: '/signup' },
                },
            },
            optional: {
                subtitle: {
                    type: 'string',
                    description: 'Supporting text below headline',
                    example: 'AI-powered design meets drag-and-drop simplicity',
                    validation: 'max 160 chars',
                },
                badge: {
                    type: 'string',
                    description: 'Small badge text above headline',
                    example: 'v2.0 Now Available',
                },
                secondaryCta: {
                    type: 'object',
                    description: 'Secondary CTA (optional)',
                    example: { text: 'View Demo', url: '/demo' },
                },
            },
        },
        variants: ['fullScreen', 'minimal', 'gradient', 'image-bg'],
        useCases: ['SaaS', 'Product launch', 'Portfolio', 'Startup'],
        accessibility: 'WCAG AA compliant. 4.5:1 text contrast. Semantic H1. Skip navigation link.',
        performance: 'LCP: <2.5s. Use background gradient, not images. No above-fold animations.',
        seo: 'H1 tag required. Include meta title/description. Consider Schema markup.',
    },

    'navbar-premium': {
        id: 'navbar-premium',
        name: 'Premium Glass Navbar',
        category: 'nav',
        description: 'Sticky glassmorphism navbar with logo, links, and CTA.',
        template: `
  <nav class="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 tracking-tighter">
            \${logoText}
        </a>
        <div class="hidden md:flex gap-8">
            \${links.map(link => \`<a href="\${link.url}" class="text-gray-400 hover:text-white transition-colors font-medium">\${link.text}</a>\`).join('')}
        </div>
        <a href="\${cta.url}" class="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-lg font-semibold transition-all">
            \${cta.text}
        </a>
    </div>
  </nav>
        `,
        props: {
            required: {
                logoText: { type: 'string', description: 'Brand name', example: 'Flyeng' },
                links: { type: 'array', description: 'Array of {text, url} objects', example: [{ text: 'Features', url: '#features' }] },
                cta: { type: 'object', description: 'Action button', example: { text: 'Login', url: '/login' } }
            },
            optional: {}
        },
        variants: ['glass', 'solid'],
        useCases: ['SaaS', 'Landing Page'],
        accessibility: 'Semantic <nav>, contrast ratios met',
        performance: 'Zero layout shift',
        seo: 'Internal linking structure'
    },

    'features-grid': {
        id: 'features-grid',
        name: 'Bento Grid Features',
        category: 'features',
        description: 'Grid of feature cards with icons and descriptions.',
        template: `
  <section id="features" class="py-24 bg-[#050505] relative overflow-hidden">
    <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">\${heading}</h2>
            <p class="text-xl text-gray-400">\${subheading}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            \${features.map(f => \`
            <div class="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                <div class="relative z-10">
                    <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl">
                        \${f.icon || '🚀'}
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">\${f.title}</h3>
                    <p class="text-gray-400 leading-relaxed">\${f.description}</p>
                </div>
            </div>
            \`).join('')}
        </div>
    </div>
  </section>
        `,
        props: {
            required: {
                heading: { type: 'string', description: 'Section title', example: 'Everything you need' },
                subheading: { type: 'string', description: 'Section subtitle', example: 'Powerful features to boost your workflow' },
                features: {
                    type: 'array',
                    description: 'List of features',
                    example: [{ title: 'Fast', description: 'Blazing fast performance', icon: '⚡' }]
                }
            },
            optional: {}
        },
        variants: ['bento', 'cards'],
        useCases: ['Product Showcase'],
        accessibility: 'Headings hierarchy',
        performance: 'Efficient DOM',
        seo: 'Keyword rich content'
    },

    'pricing-tiers': {
        id: 'pricing-tiers',
        name: 'Pricing Tables',
        category: 'pricing',
        description: 'Three pricing tiers with styling for recommended plan.',
        template: `
  <section id="pricing" class="py-24 bg-black relative">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
            <p class="text-gray-400">Choose the plan that fits your needs.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            \${plans.map(plan => \`
            <div class="relative p-8 rounded-2xl border \${plan.recommended ? 'border-purple-500 bg-purple-900/10' : 'border-white/10 bg-white/5'} backdrop-blur-xl">
                \${plan.recommended ? '<div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">POPULAR</div>' : ''}
                <h3 class="text-xl font-bold text-white mb-2">\${plan.name}</h3>
                <div class="mb-6">
                    <span class="text-4xl font-bold text-white">$\${plan.price}</span>
                    <span class="text-gray-400">/mo</span>
                </div>
                <ul class="space-y-4 mb-8">
                    \${plan.features.map(feat => \`
                    <li class="flex items-center text-gray-300">
                        <svg class="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        \${feat}
                    </li>
                    \`).join('')}
                </ul>
                <button class="w-full py-3 rounded-lg font-bold transition-all \${plan.recommended ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}">
                    Choose \${plan.name}
                </button>
            </div>
            \`).join('')}
        </div>
    </div>
  </section>
        `,
        props: {
            required: {
                plans: {
                    type: 'array',
                    description: 'Array of pricing plans',
                    example: [{ name: 'Free', price: '0', features: ['Feature 1'], recommended: false }]
                }
            },
            optional: {}
        },
        variants: ['3-col', 'comparison'],
        useCases: ['SaaS'],
        accessibility: 'Clear pricing',
        performance: 'CSS Grid',
        seo: 'Price transparency'
    },

    'cta-footer': {
        id: 'cta-footer',
        name: 'CTA Footer',
        category: 'footer',
        description: 'Footer with final CTA and links.',
        template: `
  <footer class="bg-[#020202] border-t border-white/10 pt-20 pb-10">
    <div class="container mx-auto px-4">
        <div class="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-12 text-center mb-20 border border-white/10">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">\${ctaTitle}</h2>
            <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">\${ctaSubtitle}</p>
            <a href="\${ctaUrl}" class="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                Get Started Now
            </a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
            <div>
                <h4 class="text-white font-bold mb-4">Product</h4>
                <ul class="space-y-2 text-gray-400">
                    <li><a href="#" class="hover:text-white">Features</a></li>
                    <li><a href="#" class="hover:text-white">Pricing</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-bold mb-4">Company</h4>
                <ul class="space-y-2 text-gray-400">
                    <li><a href="#" class="hover:text-white">About</a></li>
                    <li><a href="#" class="hover:text-white">Blog</a></li>
                </ul>
            </div>
             <div>
                <h4 class="text-white font-bold mb-4">Legal</h4>
                <ul class="space-y-2 text-gray-400">
                    <li><a href="#" class="hover:text-white">Privacy</a></li>
                    <li><a href="#" class="hover:text-white">Terms</a></li>
                </ul>
            </div>
             <div>
                <h4 class="text-white font-bold mb-4">Connect</h4>
                <div class="flex gap-4">
                   <!-- Social Icons Placeholder -->
                   <div class="w-8 h-8 bg-white/10 rounded-full"></div>
                   <div class="w-8 h-8 bg-white/10 rounded-full"></div>
                </div>
            </div>
        </div>
        <div class="text-center text-gray-600 mt-12 pt-8 border-t border-white/5">
            © 2024 \${companyName}. All rights reserved.
        </div>
    </div>
  </footer>
        `,
        props: {
            required: {
                ctaTitle: { type: 'string', description: 'Final call to action', example: 'Ready to launch?' },
                ctaSubtitle: { type: 'string', description: 'Supporting text', example: 'Join 10,000+ users today' },
                ctaUrl: { type: 'string', description: 'Link for button', example: '/signup' },
                companyName: { type: 'string', description: 'Company Name', example: 'Flyeng' }
            },
            optional: {}
        },
        variants: ['simple', 'mega'],
        useCases: ['SaaS', 'Corporate'],
        accessibility: 'Footer navigation landmarks',
        performance: 'Lightweight',
        seo: 'Site map links'
    }
};

