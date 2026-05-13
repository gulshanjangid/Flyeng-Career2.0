import { PROMPT_COMPONENTS } from './component-registry';

export interface PromptRequest {
    brief: string; // User's natural language description
    style?: 'modern' | 'minimal' | 'bold' | 'playful' | 'corporate';
    industry?: string; // 'SaaS', 'E-commerce', 'Portfolio', 'Startup', etc.
    tone?: 'professional' | 'casual' | 'friendly' | 'formal' | 'funky';
    colorScheme?: 'dark' | 'light' | 'vibrant' | 'pastel';
    customColors?: { primary: string; secondary: string; accent: string };
    sections?: string[]; // ['hero', 'features', 'pricing', 'cta', 'footer']
    includeAnimation?: boolean;
    targetAudience?: string; // 'Startups', 'Freelancers', 'Enterprise', etc.
    mobileFirst?: boolean;
    seoOptimized?: boolean;
}

export function buildPrompt(request: PromptRequest): string {
    const componentList = Object.values(PROMPT_COMPONENTS)
        .map(c => `• ${c.id}: ${c.description} (Category: ${c.category})`)
        .join('\n');

    const defaults = {
        style: 'modern',
        tone: 'professional',
        colorScheme: 'dark',
        industry: 'Tech/SaaS',
        targetAudience: 'Professionals'
    };

    const finalReq = { ...defaults, ...request };

    return `You are an expert React/Next.js developer and web designer. Generate a COMPLETE, PRODUCTION-READY website based on the brief below.

## CRITICAL CONSTRAINTS
1. Use ONLY components from the registry below. Do NOT invent new components.
2. Each component MUST have valid props matching the schema.
3. Generate syntactically correct React code. NO placeholders or TODO comments.
4. Follow WCAG 2.1 AA accessibility guidelines (4.5:1 contrast, semantic HTML, ARIA).
5. Ensure full mobile responsiveness (Tailwind CSS breakpoints).
6. Include SEO metadata (title, description, keywords, og tags).
7. Return ONLY valid JSON. No markdown, no explanations outside JSON. The response must be parsable by JSON.parse().

## AVAILABLE COMPONENTS (Refer to these IDs)
${componentList}

## USER BRIEF
"${finalReq.brief}"

## DESIGN GUIDANCE
- Visual Style: ${finalReq.style}
- Tone: ${finalReq.tone}
- Color Scheme: ${finalReq.colorScheme}
- Industry: ${finalReq.industry}
- Target Audience: ${finalReq.targetAudience}
- Include Animations: ${finalReq.includeAnimation ? 'Yes, subtle and performant' : 'No, keep it static'}
- Mobile First: ${finalReq.mobileFirst ? 'Yes' : 'Yes (always)'}

## REQUESTED SECTIONS (in order)
${finalReq.sections?.map((s, i) => `${i + 1}. ${s}`).join('\n') || '1. Navbar\n2. Hero\n3. Features\n4. Pricing\n5. Footer'}

## RESPONSE FORMAT (REQUIRED JSON)
{
  "pageMeta": {
    "title": "Page title (50-60 chars, SEO optimized)",
    "description": "Meta description (150-160 chars, compelling)",
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "ogTitle": "Open Graph title",
    "ogDescription": "Open Graph description",
    "ogImage": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80"
  },
  "files": {
    "app/page.tsx": "Full React component code using the templates provided (you must inject props into them)",
    "app/layout.tsx": "Layout with metadata and font setup (Inter/Outfit)",
    "globals.css": "Global styles, Tailwind config, custom animations",
    "package.json": "Dependencies needed (lucide-react, framer-motion, clsx, tailwind-merge)"
  },
  "sections": [
    {
      "type": "hero-fullscreen", 
      "props": { "title": "...", "subtitle": "...", "primaryCta": { "text": "...", "url": "..." } }
    },
    {
      "type": "features-grid",
      "props": { "heading": "...", "features": [...] }
    }
  ],
  "notes": "Brief explanation of design choices"
}

IMPORTANT: For "app/page.tsx", do not just return JSON. Return the ACTUAL REACT CODE string that renders these sections. You can generate a single component that composes these sections. However, since the user wants a builder, providing the JSON structure of sections in the "sections" field is CRITICAL for the builder UI, while "app/page.tsx" is for the final export. 

For the "app/page.tsx" content:
- Use transparent background sections if needed to show global gradient.
- Use 'lucide-react' for icons.
- Use 'framer-motion' for simple entrance animations if requested.

Begin generation NOW. Return raw JSON only.`;
}
