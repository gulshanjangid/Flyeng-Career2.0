// app/ai-tools/website-builder/components/preview-panel.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { motion } from 'framer-motion';

export function PreviewPanel() {
  const { files, device } = useBuilderStore();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || files.length === 0) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    // 1. Get Core Files
    let indexHtml = files.find(f => f.name === 'index.html')?.content || '<div id="root"></div>';
    const css = files.find(f => f.name === 'styles.css')?.content || '';

    // 2. ESM Bundling Strategy
    const localCodeChunks: string[] = [];

    // Universal Import Coalescer
    const importsMap = new Map<string, { default: string | null, named: Set<string> }>();

    const sortedFiles = files
      .filter(f => f.name.endsWith('.jsx') || f.name.endsWith('.js') || f.name.endsWith('.tsx'))
      .sort((a, b) => {
        const isEntryA = a.name.match(/^(App|Main|Index)\./i);
        const isEntryB = b.name.match(/^(App|Main|Index)\./i);
        if (isEntryA && !isEntryB) return 1;
        if (!isEntryA && isEntryB) return -1;
        return 0;
      });

    sortedFiles.forEach(f => {
      let code = f.content;

      // HAMMER FIX: Globally replace lucide-react-native with lucide-react
      // Simple string replacement preserves existing quote style (" or ') to avoid syntax errors
      code = code.replace(/lucide-react-native/g, 'lucide-react');

      // Strip hallucinated CSS imports from lucide-react (they don't exist and cause errors)
      code = code.replace(/import\s+['"]lucide-react.*?\.css['"];?/g, '');

      const name = f.name.replace(/\.(jsx|js|tsx|ts)$/, '').split('/').pop();

      // 1. Extract & Deduplicate External Imports
      code = code.replace(/import\s+(.*?)\s+from\s+['"]([^'.\/].*?)['"];?/g, (match, clause, path) => {
        // Ignore ReactDOM (We handle it globally to avoid collisions)
        if (path === 'react-dom' || path === 'react-dom/client') return '';

        // Ignore build-time CSS tools that don't work in browser
        if (path.startsWith('tailwindcss') || path.startsWith('postcss')) return '';

        if (!importsMap.has(path)) {
          importsMap.set(path, { default: null, named: new Set() });
        }

        // Special handling for Lucide (and widely hallucinated lucide-react-native)
        if (path === 'lucide-react' || path === 'lucide-react-native') {
          const namedMatch = clause.match(/\{([^}]+)\}/);
          if (namedMatch) {
            const names = namedMatch[1].split(',').map(s => s.trim()).filter(Boolean);
            return `const { ${names.join(', ')} } = window.Lucide;`;
          }
          return ''; // Remove the original import, we replaced it
        }

        const entry = importsMap.get(path)!;
        let remaining = clause;

        // Extract Named Imports: { A, B }
        const namedMatch = remaining.match(/\{([^}]+)\}/);
        if (namedMatch) {
          namedMatch[1].split(',').forEach(s => {
            const val = s.trim();
            if (val) entry.named.add(val);
          });
          remaining = remaining.replace(namedMatch[0], '');
        }

        // Extract Default Import
        const def = remaining.replace(/,/g, '').trim();
        if (def && !entry.default) entry.default = def;

        return '';
      });

      // 2. Remove Local Imports
      code = code.replace(/import\s+.*?\s+from\s+['"][\.\/].*?['"];?/g, '');

      // 3. Rewrite Exports
      code = code.replace(/export\s+default\s+function\s+(\w+)/g, 'function $1');
      code = code.replace(/export\s+default\s+function\s*\(/g, `function ${name}(`);
      code = code.replace(/export\s+default\s+/g, `const ${name} = `);
      code = code.replace(/export\s+const\s+/g, 'const ');
      code = code.replace(/export\s+function\s+/g, 'function ');

      localCodeChunks.push(`/* --- ${f.name} --- */\n${code}`);
    });

    // Ensure React is present in the map to avoid duplicates
    if (!importsMap.has('react')) {
      importsMap.set('react', { default: 'React', named: new Set() });
    } else {
      // Ensure default import exists if only named imports were found
      const entry = importsMap.get('react')!;
      if (!entry.default) entry.default = 'React';
    }

    const externalImportsString = Array.from(importsMap.entries()).map(([path, { default: def, named }]) => {
      const parts = [];
      if (def) parts.push(def);
      if (named.size > 0) parts.push(`{ ${Array.from(named).join(', ')} }`);
      if (parts.length === 0) return `import '${path}';`;
      return `import ${parts.join(', ')} from '${path}';`;
    }).join('\n');

    const bundledJs = `
      // External Imports (Hoisted & Deduplicated)
      ${externalImportsString}
      import ReactDOM from 'react-dom/client';
      import * as ReactRouterDOM from 'react-router-dom';


      // Local Components
      ${localCodeChunks.join('\n\n')}

      // Auto-Mount Logic
      const rootEl = document.getElementById('root');
      if (rootEl) {
        const root = ReactDOM.createRoot(rootEl);
        
        // Intelligent Entry Point Detection
        let Entry = null;
        
        // 1. Try Standard Names
        if (typeof App !== 'undefined') Entry = App;
        else if (typeof Main !== 'undefined') Entry = Main;
        else if (typeof Index !== 'undefined') Entry = Index;
        
        // 2. Try Case-Insensitive Search in Window
        if (!Entry) {
            const potentialKeys = Object.keys(window).filter(k => 
                k.match(/^(app|main|index|landing|page)$/i) && typeof window[k] === 'function'
            );
            if (potentialKeys.length > 0) {
                Entry = window[potentialKeys[0]];
            }
        }

        if (Entry) {
            const { BrowserRouter } = ReactRouterDOM;
            try {
                root.render(
                    React.createElement(BrowserRouter, null, 
                        React.createElement(Entry)
                    )
                );
                window.parent.postMessage({ type: 'PREVIEW_READY' }, '*');
            } catch (err) {
                console.error("Render Error:", err);
                document.body.innerHTML = '<div style="color:red;padding:20px">Runtime Error: ' + err.message + '</div>';
            }
        } else {
             console.warn("Available Globals:", Object.keys(window).filter(k => typeof window[k] === 'function'));
             document.body.innerHTML = '<div style="display:flex;height:100vh;align-items:center;justify-content:center;color:#666;font-family:sans-serif;">Waiting for Entry Component...</div>';
        }
      }
    `;

    // Removing non-CDN scripts from HTML
    indexHtml = indexHtml.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gmi, (match) => {
      if (match.match(/src=["'](?!https?:|\/\/)/i)) return '';
      return match;
    });
    indexHtml = indexHtml.replace(/<link\b[^>]*>/gmi, (match) => {
      if (match.match(/href=["'](?!https?:|\/\/)/i)) return '';
      return match;
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="https://cdn.tailwindcss.com"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          
          <!-- IMPORT MAP: The Secret Sauce for Real Libraries -->
          <!-- IMPORT MAP: Strictly Pinned for Single React Instance -->
          <script type="importmap">
          {
            "imports": {
              "react": "https://esm.sh/react@18.2.0",
              "react-dom/client": "https://esm.sh/react-dom@18.2.0/client",
              "react-dom": "https://esm.sh/react-dom@18.2.0",
              "react-router-dom": "https://esm.sh/react-router-dom@6.22.3?deps=react@18.2.0",
              "framer-motion": "https://esm.sh/framer-motion@10.16.4?deps=react@18.2.0",
              "lucide-react": "https://esm.sh/lucide-react@0.344.0?deps=react@18.2.0",
              "recharts": "https://esm.sh/recharts@2.12.0?deps=react@18.2.0",
              "clsx": "https://esm.sh/clsx",
              "tailwind-merge": "https://esm.sh/tailwind-merge",
              "date-fns": "https://esm.sh/date-fns@3.3.1",
              "next/image": "data:text/javascript;charset=utf-8,import React from 'react';export default function Image(p){return React.createElement('img',{...p, style:{maxWidth:'100%',height:'auto',...p.style}})}",
              "next/link": "data:text/javascript;charset=utf-8,import React from 'react';export default function Link(p){return React.createElement('a',{...p, href:p.href, onClick:(e)=>{e.preventDefault();window.history.pushState({},'',p.href)}},p.children)}"
            }
          }
          </script>
          <script>
            // Pre-load React & Lucide to global scope
            // We use a Proxy to handle "hallucinated" icons gracefully
            window.Lucide = new Proxy({}, {
                get: (target, prop) => {
                    if (prop === 'default') return target;
                    if (target[prop]) return target[prop];
                    // Fallback to a generic icon if missing
                    console.warn(\`Icon "\${String(prop)}" not found in lucide-react. Using fallback.\`);
                    return target['HelpCircle'] || target['AlertCircle'] || (() => null); // Fallback
                }
            });

            Promise.all([
                import('https://esm.sh/react@18.2.0').then(m => window.React = m.default),
                import('https://esm.sh/lucide-react@0.344.0?deps=react@18.2.0').then(m => {
                    Object.assign(window.Lucide, m);
                })
            ]);
          </script>

          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>${css}</style>
          <script>
            tailwind.config = { 
              darkMode: 'class',
              theme: { 
                extend: { 
                  fontFamily: { 
                    sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'] 
                  },
                  animation: {
                    "accordion-down": "accordion-down 0.2s ease-out",
                    "accordion-up": "accordion-up 0.2s ease-out",
                    "shimmer": "shimmer 2s linear infinite",
                    "blob": "blob 7s infinite"
                  },
                  keyframes: {
                    "accordion-down": {
                      from: { height: "0" },
                      to: { height: "var(--radix-accordion-content-height)" },
                    },
                    "accordion-up": {
                      from: { height: "var(--radix-accordion-content-height)" },
                      to: { height: "0" },
                    },
                    shimmer: {
                      from: { backgroundPosition: "0 0" },
                      to: { backgroundPosition: "-200% 0" },
                    },
                    blob: {
                      "0%": { transform: "translate(0px, 0px) scale(1)" },
                      "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                      "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                      "100%": { transform: "translate(0px, 0px) scale(1)" }
                    }
                  }
                } 
              } 
            };
          </script>
        </head>
        <body>
            <div id="root"></div>
            <div id="boot-log" style="position:fixed;bottom:0;right:0;background:#000;color:#0f0;padding:5px;font-size:10px;opacity:0.5;pointer-events:none;z-index:9999;">Booting...</div>
            
            <script>
                window.onerror = function(msg, url, line, col, error) {
                    const errorHtml = \`
                        <div style="
                            position: fixed; inset: 0; z-index: 10000;
                            background: rgba(10, 10, 15, 0.95); backdrop-filter: blur(10px);
                            display: flex; flex-direction: column; align-items: center; justify-content: center;
                            font-family: 'Inter', sans-serif; color: white; padding: 2rem;
                        ">
                            <div style="background: rgba(255, 85, 85, 0.1); border: 1px solid rgba(255, 85, 85, 0.3); padding: 2rem; rounded: 1rem; max-width: 600px; width: 100%;">
                                <h3 style="color: #ff5555; margin: 0 0 1rem 0; font-size: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                                    ⚠️ Runtime Violation
                                </h3>
                                <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 0.5rem; font-family: monospace; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.1);">
                                    \${msg}
                                    <div style="margin-top: 0.5rem; color: #888; font-size: 0.8rem;">
                                        Location: Line \${line}, Column \${col}
                                    </div>
                                </div>
                                <button onclick="window.parent.postMessage({ type: 'AUTO_HEAL_REQUEST', error: '\${msg}' }, '*')" 
                                    style="
                                    background: linear-gradient(135deg, #8b5cf6, #d946ef); 
                                    border: none; color: white; padding: 0.75rem 1.5rem; 
                                    border-radius: 0.5rem; font-weight: 600; cursor: pointer;
                                    display: flex; align-items: center; gap: 0.5rem;
                                    transition: transform 0.2s;
                                    "
                                    onmouseover="this.style.transform='scale(1.05)'"
                                    onmouseout="this.style.transform='scale(1)'"
                                >
                                    ✨ Auto-Fix with AI
                                </button>
                            </div>
                        </div>
                    \`;
                    document.body.innerHTML += errorHtml;
                    return false;
                };
                window.onunhandledrejection = function(event) {
                    window.onerror(event.reason ? event.reason.message : 'Unhandled Promise Rejection', '', 0, 0, event.reason);
                };
            </script>
            
            <script>
            (async function() {
                try {
                    const rawCode = ${JSON.stringify(bundledJs)};
                    
                    // Client-Side Transpilation (JSX -> JS)
                    const { code } = Babel.transform(rawCode, {
                        presets: ['react'],
                        filename: 'app.js'
                    });

                    // Create Blob URL for Module
                    const blob = new Blob([code], { type: 'text/javascript' });
                    const url = URL.createObjectURL(blob);
                    
                    // Inject Module Script
                    const script = document.createElement('script');
                    script.type = 'module';
                    script.src = url;
                    script.onerror = (e) => {
                         console.error('Module Error', e);
                         throw new Error('Failed to load application module. Check console for specific syntax errors.');
                    };
                    document.body.appendChild(script);
                    
                    document.getElementById('boot-log').innerText = 'System Active';
                    
                } catch(e) {
                    console.error("Build Error:", e);
                    const lines = ${JSON.stringify(bundledJs)}.split('\\n');
                    const errLine = e.loc ? e.loc.line : 0;
                    const context = lines.slice(Math.max(0, errLine - 5), errLine + 5).join('\\n');
                    
                    // Trigger the UI error handler we defined above
                    window.onerror(e.message, 'Build Process', errLine, 0, e);
                }
            })();
            </script>
        </body>
      </html>
    `;

    doc.open();
    doc.write(htmlContent);
    doc.close();
  }, [files]);

  const getDimensions = () => {
    switch (device) {
      case 'tablet': return { width: 768, height: '90%', borderRadius: 12 };
      case 'mobile': return { width: 375, height: 667, borderRadius: 32 };
      default: return { width: '100%', height: '100%', borderRadius: 0 };
    }
  };

  return (
    <div className="w-full h-full bg-[#0a0a0f] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {device !== 'desktop' && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/10 text-[10px] font-mono uppercase tracking-widest pointer-events-none">
          {device} view
        </div>
      )}
      <motion.div
        initial={false}
        animate={getDimensions()}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`bg-white shadow-2xl overflow-hidden relative ${device !== 'desktop' ? 'border-[12px] border-[#1a1a20] ring-1 ring-white/10' : ''}`}
      >
        <iframe
          ref={iframeRef}
          className="w-full h-full border-none bg-white"
          title="Live Preview"
          sandbox="allow-scripts allow-modals allow-forms allow-same-origin allow-popups allow-presentation"
        />
      </motion.div>
    </div>
  );
}