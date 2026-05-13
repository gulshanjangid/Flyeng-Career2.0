import { COMPONENT_LIBRARY_V5_5 } from './library-v5.5';
import { SMART_COMPONENTS } from './smart-components';

// Type definitions for the AI's JSON output
export interface ComponentSpec {
  id: string;
  type: string; // e.g., "hero.fullScreen", "buttons.primary.solid"
  content?: Record<string, string>; // e.g., { headline: "...", cta: "..." }
  styles?: Record<string, string>; // Optional overrides
}

export interface PageSpec {
  name: string;
  route: string;
  sections: ComponentSpec[];
}

export interface WebsiteBlueprint {
  settings: {
    colorTheme?: string;
    font?: string;
  };
  pages?: PageSpec[];
  sections?: ComponentSpec[]; // Legacy fallback
}

export class SiteAssembler {
  /**
   * Resolves a dot-notation path (e.g., "hero.fullScreen") to the library string
   */
  private static getComponentTemplate(path: string): string | null {
    const parts = path.split('.');
    let current: any = COMPONENT_LIBRARY_V5_5;

    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return null; // Component not found
      }
    }

    if (typeof current === 'string') return current;

    // Auto-resolve: If we landed on an object (group of variants), pick the first one.
    // This handles cases where AI output "about.me" but library has "about.me.grid".
    if (current && typeof current === 'object') {
      const values = Object.values(current);
      if (values.length > 0 && typeof values[0] === 'string') return values[0] as string;
    }

    return null;
  }

  /**
   * Injects content into the template.
   * Simple naive replacement for now: looks for placeholders or generic areas.
   * Since our library strings are static HTML, we will wrap them in React components
   * or just inject them as JSX structure. 
   *  
   * For v5.5, we will assume the Library strings are valid JSX snippets.
   * We will ignore specific content injection for the "MVP" of the assembler 
   * and rely on the AI to pick the right variant, 
   * OR we can implementation simple text replacement if we tokenize the library.
   * 
   * BETTER APPROACH FOR v5.5: 
   * The AI outputted JSON. The library has static text "Button". 
   * We need to replace "Button" with "Get Started". 
   * 
   * Strategy: We will replace widely known placeholder text if present, 
   * otherwise we might just render the component as is for the "Alpha".
   * 
   * Update: To make it truly "Award Winning", we will just wrap the static HTML 
   * for now, as the library is huge and hardcoded. 
   * In v6, we can turn library strings into functions that accept props.
   */
  private static processComponent(spec: ComponentSpec): string {
    let template = this.getComponentTemplate(spec.type);
    if (!template) {
      console.warn(`[Assembler] Component not found: ${spec.type}`);
      return `<div className="p-4 border border-red-500 text-red-500">Missing Component: ${spec.type}</div>`;
    }
    // Dynamic Content Injection (Basic Fuzzy Match)
    // If the blueprint has content, we try to replace standard placeholders
    if (spec.content) {
      if (spec.content.headline) template = template.replace(/Build the Impossible/g, spec.content.headline);
      if (spec.content.subheadline) template = template.replace(/Create stunning websites in seconds/g, spec.content.subheadline);
      if (spec.content.cta) template = template.replace(/>Get Started</g, `>${spec.content.cta}<`);
      if (spec.content.title) template = template.replace(/Feature One/g, spec.content.title);
      // Add more replacements as needed
    }

    // Sanitize: Replace HTML comments with nothing, or React comments if strictly needed.
    // However, simplest is to strip them to avoid JSX syntax errors.
    template = template.replace(/<!--[\s\S]*?-->/g, '');

    return template;
  }
  public static assemble(blueprint: WebsiteBlueprint): Record<string, string> {
    const files: Record<string, string> = {};
    // ==========================================
    // 1. POLYMORPHIC SAFETY & FALLBACK LAYER
    // ==========================================
    // If 'pages' matches our new schema, great.
    // If not, we try to salvage 'sections' from a legacy blueprint.
    if ((!blueprint.pages || blueprint.pages.length === 0) && (blueprint as any).sections) {
      console.log("[FC Agent] Legacy format detected. Auto-upgrading to Multi-Page.");
      blueprint.pages = [{
        name: "Home",
        route: "/",
        sections: (blueprint as any).sections
      }];
    }
    // Final safety check: If still no pages, return a "Red Screen of Death" page but DO NOT CRASH.
    if (!blueprint.pages || !Array.isArray(blueprint.pages) || blueprint.pages.length === 0) {
      console.error("[FC Agent] Invalid Blueprint: No pages found", blueprint);
      return {
        "App.jsx": `import React from 'react'; export default function App() { return <div className="min-h-screen bg-black text-red-500 p-10 font-mono"><h1>Agent Error 500</h1><p>The Architect returned an invalid structure. Please retry.</p><pre>${JSON.stringify(blueprint).slice(0, 200)}...</pre></div> }`
      };
    }
    // ==========================================
    // 2. SHARED COMPONENTS (NAVBAR / FOOTER)
    // ==========================================
    const firstPage = blueprint.pages[0];
    // use optional chaining (?.) to prevent crash if sections is undefined
    const navbarSpec = firstPage.sections?.find(s => s.type.startsWith('navigation.navbar')) || { id: 'nav', type: 'navigation.navbar.premium' };
    const footerSpec = firstPage.sections?.find(s => s.type.startsWith('footer')) || { id: 'footer', type: 'footer.complete' };

    // Process them to get HTML string
    // Process them to get HTML string
    const navbarCode = this.processComponent(navbarSpec) || '<div></div>';
    const footerCode = this.processComponent(footerSpec) || '<div></div>';

    files['src/components/Navbar.jsx'] = `
import React from 'react';
import { Link } from 'react-router-dom';
import * as Lucide from 'lucide-react';

export default function Navbar() {
  return (
    <div className="relative z-50">
      ${navbarCode.replace(/href="#"/g, 'to="/"').replace(/class=/g, 'className=')}
    </div>
  );
}`;

    files['src/components/Footer.jsx'] = `
import React from 'react';
import * as Lucide from 'lucide-react';

export default function Footer() {
  return (
    <div className="relative z-10">
      ${footerCode.replace(/class=/g, 'className=')}
    </div>
  );
}`;
    // ==========================================
    // 3. DYNAMIC PAGES GENERATION
    // ==========================================
    const routesConfig: string[] = [];
    const imports: string[] = [];
    const sanitizeName = (n: string) => n.replace(/[^a-zA-Z0-9]/g, '');



    blueprint.pages!.forEach((page: PageSpec, index: number) => {
      const safeName = sanitizeName(page.name) || `Page${index}`;
      const pageImports: string[] = []; // Local imports for this page

      // Filter out nav/footer from page content as they are global layout
      const contentSections = (page.sections || []).filter(s => !s.type.startsWith('navigation') && !s.type.startsWith('footer'));

      const pageCode = contentSections.map(s => {
        // 1. Check for Smart Component (TicTacToe, etc.)
        if (SMART_COMPONENTS[s.type]) {
          const smart = SMART_COMPONENTS[s.type];
          // Add component file
          files[`src/components/${smart.filename}`] = smart.code;
          // Add import to page if not already added
          const importLine = `import ${smart.filename.replace('.jsx', '')} from '../components/${smart.filename.replace('.jsx', '')}';`;
          if (!pageImports.includes(importLine)) pageImports.push(importLine);
          return smart.tag;
        }

        // 2. Fallback to Library HTML
        const template = this.processComponent(s);
        if (template.includes('Missing Component')) {
          // UNIVERSAL FALLBACK: Generate a placeholder component instead of red text
          const fallbackName = `Fallback_${s.type.replace(/[^a-zA-Z0-9]/g, '')}`;
          const fallbackFile = `${fallbackName}.jsx`;

          // Only generate if not exists (deduplication)
          if (!files[`src/components/${fallbackFile}`]) {
            files[`src/components/${fallbackFile}`] = `import React from 'react';

export default function ${fallbackName}() {
  // Use global Lucide to avoid import collisions/transpilation errors
  const Construction = (window.Lucide && window.Lucide.Construction) ? window.Lucide.Construction : () => <div className="text-purple-400">🚧</div>;

  return (
    <div className="w-full py-16 px-4 flex justify-center">
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl text-center">
        <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Construction className="text-purple-400 w-8 h-8 animate-pulse" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Component Under Construction</h3>
        <p className="text-gray-400 text-sm">
          The AI Architect is designing the <strong>${s.type}</strong> component. 
          It will be available in the next generation cycle.
        </p>
      </div>
    </div>
  );
}`;
          }

          const importLine = `import ${fallbackName} from '../components/${fallbackName}';`;
          if (!pageImports.includes(importLine)) pageImports.push(importLine);
          return `<${fallbackName} />`;
        }

        return template.replace(/class=/g, 'className=');
      }).join('\n\n');

      files[`src/pages/${safeName}.jsx`] = `
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Lucide from 'lucide-react';
${pageImports.join('\n')}

export default function ${safeName}() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#020005] text-white selection:bg-purple-500/30 pt-20"
    >
      ${pageCode}
    </motion.div>
  );
}`;

      imports.push(`import ${safeName} from './src/pages/${safeName}';`);
      routesConfig.push(`<Route path="${page.route}" element={<${safeName} />} />`);
    });

    // ==========================================
    // 4. APP ROUTER
    // ==========================================
    // Identify the Home component name for fallback
    const homeComponentName = sanitizeName(blueprint.pages[0].name);

    files['App.jsx'] = `
// === FC AGENT GENERATED WEBSITE ===
// Theme: ${blueprint.settings.colorTheme || 'Default'}
// Font: ${blueprint.settings.font || 'Inter'}
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';

// Dynamic Page Imports
${imports.join('\n')}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, errorInfo) { console.error("Uncaught error:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-[#020005] text-white p-6">
          <div className="max-w-md p-6 bg-red-500/10 border border-red-500/30 rounded-lg backdrop-blur-xl">
            <h2 className="text-xl font-bold text-red-500 mb-2">Something went wrong</h2>
            <p className="text-sm text-gray-300 mb-4">The component failed to render.</p>
            <pre className="text-xs bg-black/50 p-3 rounded font-mono text-red-300 overflow-auto max-h-40">
              {this.state.error?.toString()}
            </pre>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-semibold transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const location = useLocation();
  
  return (
    <ErrorBoundary>
      <div className="app-container font-sans text-white bg-[#020005] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              ${routesConfig.join('\n            ')}
              {/* Fallback */}
              <Route path="*" element={<${homeComponentName} />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}`;

    // ==========================================
    // 5. STATIC ASSETS
    // ==========================================
    files['index.html'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${blueprint.pages[0]?.sections?.find(s => s.content?.headline)?.content?.headline || 'FC Agent Site'}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; background: #020005; color: white; scroll-behavior: smooth; }
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: #0a0a0f; }
      ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: #555; }
    </style>
</head>
<body>
    <div id="root"></div>
</body>
</html>`;

    files['styles.css'] = `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400;
  }
}
`;

    return files;
  }
}