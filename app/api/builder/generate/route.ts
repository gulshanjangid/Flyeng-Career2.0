import { NextRequest, NextResponse } from "next/server";
import { spawn } from 'child_process';
import path from 'path';

// --- Procedural Generation Engine (Fallback) ---

const INDUSTRIES = {
  food: { keywords: ['restaurant', 'food', 'cafe', 'pizza', 'burger', 'sushi', 'bakery', 'coffee', 'dining'], palette: 'warm', vibe: 'inviting' },
  health: { keywords: ['health', 'gym', 'fitness', 'doctor', 'clinic', 'medical', 'yoga', 'wellness', 'hospital'], palette: 'clean', vibe: 'trustworthy' },
  tech: { keywords: ['tech', 'software', 'app', 'saas', 'startup', 'crypto', 'ai', 'data', 'cyber'], palette: 'modern', vibe: 'innovative' },
  creative: { keywords: ['portfolio', 'design', 'art', 'music', 'photography', 'agency', 'studio', 'fashion'], palette: 'bold', vibe: 'artistic' },
  finance: { keywords: ['finance', 'bank', 'invest', 'money', 'accounting', 'tax', 'consulting', 'law'], palette: 'professional', vibe: 'serious' },
  travel: { keywords: ['travel', 'hotel', 'resort', 'vacation', 'tour', 'trip', 'flight', 'beach'], palette: 'vibrant', vibe: 'adventurous' },
  retail: { keywords: ['shop', 'store', 'ecommerce', 'buy', 'sale', 'fashion', 'clothing', 'retail'], palette: 'clean', vibe: 'commercial' }
};

const PALETTES = {
  warm: {
    nav: { bg: "bg-orange-50/90 backdrop-blur-md border-b border-orange-100", text: "text-orange-900", button: "bg-orange-600 hover:bg-orange-700 text-white" },
    hero: { bg: "bg-orange-50", title: "text-orange-950", button: "bg-orange-600 hover:bg-orange-700 text-white" },
    features: { bg: "bg-white", card: "bg-orange-50/50 border border-orange-100 hover:shadow-lg hover:shadow-orange-500/10", icon: "text-orange-600 bg-orange-100" },
    footer: { bg: "bg-orange-950", text: "text-orange-100" }
  },
  clean: {
    nav: { bg: "bg-white/90 backdrop-blur-md border-b border-teal-100", text: "text-teal-900", button: "bg-teal-600 hover:bg-teal-700 text-white" },
    hero: { bg: "bg-gradient-to-b from-teal-50 to-white", title: "text-teal-950", button: "bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-500/20" },
    features: { bg: "bg-white", card: "bg-white border border-teal-50 shadow-sm hover:border-teal-200", icon: "text-teal-600 bg-teal-50" },
    footer: { bg: "bg-teal-900", text: "text-teal-50" }
  },
  modern: {
    nav: { bg: "bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800", text: "text-gray-900 dark:text-white", button: "bg-blue-600 hover:bg-blue-700 text-white" },
    hero: { bg: "bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black", title: "text-gray-900 dark:text-white", button: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20" },
    features: { bg: "bg-white dark:bg-black", card: "bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-md", icon: "text-blue-600 bg-blue-100 dark:bg-blue-900/30" },
    footer: { bg: "bg-gray-900", text: "text-gray-400" }
  },
  bold: {
    nav: { bg: "bg-black/90 backdrop-blur-xl", text: "text-white", button: "bg-white text-black hover:bg-gray-200" },
    hero: { bg: "bg-black", title: "text-white tracking-tighter", button: "bg-white text-black hover:bg-gray-200" },
    features: { bg: "bg-black", card: "bg-zinc-900 border border-zinc-800 hover:bg-zinc-800", icon: "text-white" },
    footer: { bg: "bg-black border-t border-zinc-800", text: "text-zinc-400" }
  },
  professional: {
    nav: { bg: "bg-slate-900 text-white", text: "text-white", button: "bg-blue-700 hover:bg-blue-600 text-white" },
    hero: { bg: "bg-slate-50", title: "text-slate-900", button: "bg-slate-900 hover:bg-slate-800 text-white" },
    features: { bg: "bg-white", card: "bg-white border border-slate-200 shadow-sm", icon: "text-slate-700 bg-slate-100" },
    footer: { bg: "bg-slate-900", text: "text-slate-300" }
  },
  vibrant: {
    nav: { bg: "bg-white/60 backdrop-blur-lg border-b border-white/20", text: "text-indigo-900", button: "bg-indigo-600 hover:bg-indigo-700 text-white rounded-full" },
    hero: { bg: "bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100", title: "text-indigo-950", button: "bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl shadow-indigo-500/30" },
    features: { bg: "bg-white", card: "bg-white/50 backdrop-blur-sm border border-indigo-50 hover:bg-white hover:shadow-xl transition-all", icon: "text-indigo-600 bg-indigo-50" },
    footer: { bg: "bg-indigo-950", text: "text-indigo-200" }
  }
};

const DEFAULT_PALETTE = PALETTES.modern;

function detectIndustry(prompt: string) {
  const lowerPrompt = prompt.toLowerCase();
  for (const [key, data] of Object.entries(INDUSTRIES)) {
    if (data.keywords.some(k => lowerPrompt.includes(k))) {
      return { name: key, ...data };
    }
  }
  return { name: 'general', keywords: [], palette: 'modern', vibe: 'versatile' };
}

function generateContent(industry: string, prompt: string) {
  const contents = {
    food: {
      hero: { title: "Taste the Excellence", subtitle: "Culinary perfection in every bite.", button: "Reserve a Table" },
      features: { title: "Our Specialties", items: [{ title: "Fresh Ingredients", description: "Locally sourced daily." }, { title: "Master Chefs", description: "Years of culinary art." }, { title: "Cozy Ambiance", description: "Perfect for any occasion." }] }
    },
    health: {
      hero: { title: "Transform Your Life", subtitle: "Your journey to wellness starts here.", button: "Join Now" },
      features: { title: "Why Choose Us", items: [{ title: "Expert Trainers", description: "Certified professionals." }, { title: "Modern Equipment", description: "State-of-the-art facilities." }, { title: "Holistic Approach", description: "Mind and body wellness." }] }
    },
    tech: {
      hero: { title: "Build the Future", subtitle: "Innovative solutions for modern problems.", button: "Get Started" },
      features: { title: "Core Features", items: [{ title: "High Performance", description: "Blazing fast execution." }, { title: "Secure by Design", description: "Enterprise-grade security." }, { title: "Scalable", description: "Grows with your business." }] }
    },
    creative: {
      hero: { title: "Crafting Digital Experiences", subtitle: "Where art meets technology.", button: "View Portfolio" },
      features: { title: "Our Process", items: [{ title: "Discovery", description: "Understanding your vision." }, { title: "Design", description: "Visualizing the concept." }, { title: "Development", description: "Bringing it to life." }] }
    },
    finance: {
      hero: { title: "Secure Your Future", subtitle: "Expert financial guidance you can trust.", button: "Consultation" },
      features: { title: "Services", items: [{ title: "Wealth Management", description: "Grow your assets." }, { title: "Strategic Planning", description: "Long-term success." }, { title: "Risk Analysis", description: "Protect your investments." }] }
    },
    travel: {
      hero: { title: "Explore the World", subtitle: "Unforgettable journeys await.", button: "Book Now" },
      features: { title: "Destinations", items: [{ title: "Exotic Locations", description: "Discover hidden gems." }, { title: "Luxury Stays", description: "Comfort guaranteed." }, { title: "Guided Tours", description: "Experience the culture." }] }
    },
    retail: {
      hero: { title: "Style Redefined", subtitle: "Discover the latest trends.", button: "Shop Now" },
      features: { title: "Why Shop With Us", items: [{ title: "Premium Quality", description: "Finest materials." }, { title: "Fast Shipping", description: "Global delivery." }, { title: "24/7 Support", description: "Always here to help." }] }
    }
  };
  return contents[industry as keyof typeof contents] || contents.tech;
}

function generateProcedural(prompt: string, aiConfig?: any) {
  let industry, palette, content;

  if (aiConfig) {
    console.log("Using AI Config for generation");
    industry = { name: aiConfig.industry || 'custom', keywords: [] };
    palette = aiConfig.palette || DEFAULT_PALETTE;
    content = aiConfig.content || generateContent('tech', prompt);
  } else {
    industry = detectIndustry(prompt);
    palette = PALETTES[industry.palette as keyof typeof PALETTES] || DEFAULT_PALETTE;
    content = generateContent(industry.name, prompt);
  }

  // --- HTML Generation ---
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${content.hero.title}</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="container">
            <a href="#" class="logo">Brand</a>
            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#contact">Contact</a>
                <button class="btn-primary">Get Started</button>
            </div>
            <button class="mobile-menu-btn">☰</button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <h1 class="hero-title">${content.hero.title}</h1>
            <p class="hero-subtitle">${content.hero.subtitle}</p>
            <div class="hero-cta">
                <button class="btn-primary">${content.hero.button} <i data-lucide="arrow-right"></i></button>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
        <div class="container">
            <h2 class="section-title">Capabilities</h2>
            <div class="features-grid">
                ${content.features.items.map((item: any) => `
                <div class="feature-card">
                    <div class="feature-icon"><i data-lucide="zap"></i></div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>© 2024 Brand Inc. All rights reserved.</p>
            <div class="footer-links">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
    <script>
        lucide.createIcons();
    </script>
</body>
</html>`;

  // --- CSS Generation ---
  const cssContent = `/* Reset & Base */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Inter', sans-serif; line-height: 1.6; color: ${palette.nav.text === 'text-white' ? '#fff' : '#111'}; background: ${palette.hero.bg.includes('black') ? '#000' : '#fff'}; }
.container { max-width: 1200px; margin: 0 auto; px: 2rem; }

/* Navbar */
.navbar { position: fixed; top: 0; width: 100%; z-index: 1000; padding: 1rem 2rem; background: ${palette.nav.bg.includes('black') ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)'}; backdrop-filter: blur(10px); display: flex; justify-content: center; }
.navbar .container { display: flex; justify-content: space-between; align-items: center; width: 100%; }
.logo { font-size: 1.5rem; font-weight: 800; text-decoration: none; color: inherit; }
.nav-links { display: flex; gap: 2rem; align-items: center; }
.nav-links a { text-decoration: none; color: inherit; font-weight: 500; transition: opacity 0.3s; }
.nav-links a:hover { opacity: 0.7; }
.mobile-menu-btn { display: none; background: none; border: none; color: inherit; font-size: 1.5rem; cursor: pointer; }

/* Buttons */
.btn-primary { background: ${palette.nav.button.includes('white') ? '#fff' : '#000'}; color: ${palette.nav.button.includes('white') ? '#000' : '#fff'}; padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: none; font-weight: 600; cursor: pointer; transition: transform 0.2s; display: inline-flex; align-items: center; gap: 0.5rem; }
.btn-primary:hover { transform: translateY(-2px); }

/* Hero */
.hero { min-height: 80vh; display: flex; align-items: center; justify-content: center; text-align: center; padding-top: 80px; background: ${palette.hero.bg.includes('black') ? '#000' : '#f8f9fa'}; }
.hero-title { font-size: 3.5rem; font-weight: 800; margin-bottom: 1.5rem; line-height: 1.1; background: linear-gradient(to right, inherit, #666); -webkit-background-clip: text; }
.hero-subtitle { font-size: 1.25rem; opacity: 0.8; max-width: 600px; margin: 0 auto 2rem; }

/* Features */
.features { padding: 6rem 2rem; background: ${palette.features.bg.includes('gray-900') ? '#111' : '#fff'}; }
.section-title { text-align: center; font-size: 2.5rem; font-weight: 700; margin-bottom: 4rem; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.feature-card { padding: 2rem; border-radius: 1rem; background: ${palette.features.card.includes('gray-800') ? '#222' : '#f1f1f1'}; transition: transform 0.3s; }
.feature-card:hover { transform: translateY(-5px); }
.feature-icon { width: 3rem; height: 3rem; background: rgba(100,100,100,0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: #0070f3; }
.feature-card h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; }
.feature-card p { opacity: 0.7; line-height: 1.6; }

/* Footer */
.footer { padding: 4rem 2rem; background: ${palette.footer.bg.includes('black') ? '#000' : '#f8f9fa'}; border-top: 1px solid rgba(255,255,255,0.1); }
.footer .container { display: flex; justify-content: space-between; align-items: center; opacity: 0.6; font-size: 0.9rem; }
.footer-links { display: flex; gap: 1.5rem; }
.footer-links a { color: inherit; text-decoration: none; }

/* Responsive */
@media (max-width: 768px) {
    .nav-links { display: none; }
    .mobile-menu-btn { display: block; }
    .hero-title { font-size: 2.5rem; }
    .features-grid { grid-template-columns: 1fr; }
    .footer .container { flex-direction: column; gap: 1rem; }
}
`;

  // --- JS Generation ---
  const jsContent = `document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            const isFlex = navLinks.style.display === 'flex';
            navLinks.style.display = isFlex ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '60px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'inherit';
            navLinks.style.padding = '1rem';
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});`;

  const files = [
    {
      name: "public",
      type: "folder",
      children: [
        { name: "index.html", type: "file", content: htmlContent },
        { name: "script.js", type: "file", content: jsContent }
      ]
    }
  ];

  const components = [
    { id: 'html-preview', type: 'custom', content: { html: htmlContent } }
  ];

  return { components, files };
}
// --- Groq Integration ---
import Groq from "groq-sdk";

async function generateWithGroq(prompt: string): Promise<any> {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "YOUR_GROQ_API_KEY" });

  if (!process.env.GROQ_API_KEY) {
    console.warn("GROQ_API_KEY not found, skipping AI generation.");
    return null;
  }

  const systemPrompt = `You are an expert AI Website Architect.
Your goal is to plan the content and style for a website based on the user's request.
You must return a VALID JSON object with this exact structure.
IMPORTANT: Output ONLY the JSON. Do NOT use comments.

{
  "industry": "tech",
  "palette": {
    "nav": { "bg": "bg-black", "text": "text-white", "button": "bg-white text-black" },
    "hero": { "bg": "bg-black", "title": "text-white", "button": "bg-white text-black" },
    "features": { "bg": "bg-gray-900", "card": "bg-gray-800", "icon": "text-white" },
    "footer": { "bg": "bg-black", "text": "text-gray-400" }
  },
  "content": {
    "hero": { "title": "Main Headline", "subtitle": "Compelling subheadline", "button": "CTA Text" },
    "features": { 
      "title": "Features Title", 
      "items": [
        { "title": "Feature 1", "description": "Description 1" },
        { "title": "Feature 2", "description": "Description 2" },
        { "title": "Feature 3", "description": "Description 3" }
      ]
    }
  }
}`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Generate the JSON config for: ${prompt}` }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      response_format: { type: "json_object" } // Enforce JSON mode
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) throw new Error("No content from Groq");

    return JSON.parse(content);
  } catch (error) {
    console.error("Groq API Error:", error);
    throw error;
  }
}


export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    console.log("Generating site for:", prompt);

    let aiConfig = null;

    // Try Groq Engine first
    try {
      console.log("Attempting to use Groq Engine...");
      aiConfig = await generateWithGroq(prompt);
      if (aiConfig) {
        console.log("Groq Engine Success! Config:", aiConfig);
      } else {
        console.log("Groq Engine skipped (no key), using Procedural Engine.");
      }
    } catch (error) {
      console.error("Groq Engine Failed, falling back to Procedural Engine:", error);
    }

    // Use Procedural Engine (with or without AI Config)
    console.log("Building site with Procedural Engine...");
    if (!aiConfig) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate thinking if fallback
    }
    const result = generateProcedural(prompt, aiConfig);
    return NextResponse.json(result);

  } catch (error: any) {
    console.error("Generation Route Error:", error);
    return NextResponse.json({ error: "Failed to generate" }, { status: 500 });
  }
}