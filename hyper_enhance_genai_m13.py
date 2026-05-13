
# Module 13: The AI Engineering Stack (Next.js & TypeScript)
# Content Definitions

lessons_map_13 = {
    "1": "Why TypeScript & Next.js Are the AI Frontend Standard",
    "2": "React Server Components (RSC) & Streaming UI",
    "3": "The Vercel AI SDK: useChat & useCompletion",
    "4": "Client vs Server: Where does the API Key go?",
    "5": "Generative UI: Streaming React Components",
    "6": "TailwindCSS for Chat Interfaces",
    "7": "State Management for AI (Zustand & Context)",
    "8": "Optimistic Updates & UX for Latency",
    "9": "Real-time Audio/Video on the Web (WebRTC)",
    "10": "Deployment: Vercel, Edge Functions & Timeouts",
    "11": "Mini Project: Building a Streaming Chat App",
    "12": "Wrap-up"
}

# 13.1
content_13_1 = """
<div class="space-y-12 font-sans text-slate-200">

  <!-- Hero Section -->
  <div class="text-center py-12">
    <div class="inline-block p-4 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6 text-6xl shadow-[0_0_30px_rgba(37,99,235,0.2)]">⚛️</div>
    <h2 class="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-400 mb-6">
       Why TypeScript & Next.js?
    </h2>
    <p class="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
        The AI revolution isn't written in Python. It's <span class="text-blue-400 font-bold">Modeled</span> in Python, but it's <span class="text-white font-bold">Shipped</span> in TypeScript.
    </p>
  </div>

  <!-- The "Two Worlds" Diagram -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <!-- Python World -->
      <div class="p-8 bg-[#111] border border-yellow-500/20 rounded-3xl relative overflow-hidden opacity-60 hover:opacity-100 transition duration-500">
          <div class="absolute top-0 right-0 p-4 font-mono text-xs text-yellow-500">BACKEND (Modeling)</div>
          <div class="text-5xl mb-6">🐍</div>
          <h3 class="text-2xl font-bold text-white mb-4">Python</h3>
          <ul class="space-y-3 text-sm text-slate-400">
              <li>• Tensor Manipulation (PyTorch)</li>
              <li>• Data Science (Pandas)</li>
              <li>• Model Training</li>
          </ul>
          <div class="mt-8 p-4 bg-black rounded border border-slate-800 font-mono text-xs text-green-400">
              import torch<br>
              model = Transformer(...)
          </div>
      </div>

      <!-- TS World -->
      <div class="p-8 bg-blue-950/20 border border-blue-500/30 rounded-3xl relative overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.1)]">
          <div class="absolute top-0 right-0 p-4 font-mono text-xs text-blue-400">FRONTEND (Product)</div>
          <div class="text-5xl mb-6">🔷</div>
          <h3 class="text-2xl font-bold text-white mb-4">TypeScript (Next.js)</h3>
          <ul class="space-y-3 text-sm text-slate-300">
              <li class="flex items-center gap-2"><span class="text-blue-400">✓</span> <strong>Streaming:</strong> Server-Sent Events (SSE) native support.</li>
              <li class="flex items-center gap-2"><span class="text-blue-400">✓</span> <strong>Type Safety:</strong> Matching JSON Schemas for Function Calling.</li>
              <li class="flex items-center gap-2"><span class="text-blue-400">✓</span> <strong>Edge Runtime:</strong> Fastest cold starts for latency-sensitive chat.</li>
          </ul>
           <div class="mt-8 p-4 bg-black rounded border border-slate-800 font-mono text-xs text-blue-300">
              const { messages } = useChat();<br>
              return &lt;StreamingText content={m.content} /&gt;
          </div>
      </div>
  </div>

  <!-- Why Next.js Specifics -->
  <div class="space-y-8 mt-12">
      <h3 class="text-3xl font-bold text-white text-center mb-8">The AI Product Stack</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Feature 1 -->
          <div class="bg-gradient-to-br from-slate-900 to-black p-6 rounded-2xl border border-slate-800 hover:border-white/20 transition group">
              <div class="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition">🌊</div>
              <h4 class="text-lg font-bold text-white mb-2">Streaming by Default</h4>
              <p class="text-sm text-slate-400">
                  Users can't wait 5 seconds for a whole paragraph. Next.js App Router was built for <strong>Streaming HTML</strong>. It streams tokens as they arrive.
              </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-gradient-to-br from-slate-900 to-black p-6 rounded-2xl border border-slate-800 hover:border-white/20 transition group">
              <div class="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition">⚡</div>
              <h4 class="text-lg font-bold text-white mb-2">Server Actions</h4>
              <p class="text-sm text-slate-400">
                  Call your LLM directly from the UI component. No need to manually write `/api/chat` express routes. The RPC layer is invisible.
              </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-gradient-to-br from-slate-900 to-black p-6 rounded-2xl border border-slate-800 hover:border-white/20 transition group">
              <div class="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition">🧱</div>
              <h4 class="text-lg font-bold text-white mb-2">Vercel AI SDK</h4>
              <p class="text-sm text-slate-400">
                  The standard library for AI UIs. `useChat`, `useCompletion`, and `StreamData`. It handles the complex "delta" parsing for you.
              </p>
          </div>
      </div>
  </div>

  <!-- The Visual Evidence -->
  <div class="bg-black/40 border border-slate-800 p-8 rounded-3xl mt-8">
      <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-1 space-y-4">
              <h3 class="text-2xl font-bold text-white">The "Generative UI" Shift</h3>
              <p class="text-slate-400">
                  We are moving from <strong>Text Chat</strong> to <strong>Rendered UIs</strong>.
              </p>
              <p class="text-slate-400">
                  When Claude generates a React Artifact, it's not just text. It sends a <code class="bg-slate-800 px-1 rounded">component</code> that Next.js renders live. Only the React ecosystem can handle this dynamic component injection safely.
              </p>
          </div>
          <div class="w-full md:w-1/2 bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-2xl">
              <!-- Mock Chat Interface -->
              <div class="space-y-4">
                  <div class="flex gap-3">
                      <div class="w-8 h-8 rounded-full bg-purple-500"></div>
                      <div class="bg-slate-800 p-3 rounded-lg rounded-tl-none text-xs text-slate-300">
                          Here is the stock chart for AAPL:
                          <div class="mt-3 h-24 bg-slate-950 rounded border border-slate-700 flex items-end p-2 gap-1 pb-0">
                               <div class="w-1/5 h-[40%] bg-green-500/50"></div>
                               <div class="w-1/5 h-[60%] bg-green-500/50"></div>
                               <div class="w-1/5 h-[30%] bg-red-500/50"></div>
                               <div class="w-1/5 h-[80%] bg-green-500/50"></div>
                               <div class="w-1/5 h-[90%] bg-green-500"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

</div>
"""

# Placeholders for 13.2 - 13.12 (to pass build)

# 13.2 The 2026 Frontend AI Stack Overview
content_13_2 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
      <div class="inline-block p-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 text-5xl">⚡</div>
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          The 2026 Frontend AI Stack
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          The "Golden Stack" for shipping production AI apps. Don't reinvent the wheel. Use the tools that won the market.
      </p>
    </div>

    <!-- The Stack Visual -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Layer 1: The Framework -->
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-2xl hover:border-white transition group">
            <div class="text-3xl mb-4">⚛️</div>
            <h3 class="text-xl font-bold text-white mb-2">Next.js 15 (App Router)</h3>
            <p class="text-sm text-slate-400 mb-4">
                The backbone. Provides <strong>Server Actions</strong> for secure API calls and <strong>Streaming</strong> for instant feedback.
            </p>
            <div class="bg-black p-2 rounded border border-slate-800 text-[10px] font-mono text-slate-300 group-hover:text-cyan-400">
                app/api/chat/route.ts
            </div>
        </div>

        <!-- Layer 2: The Logic -->
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-2xl hover:border-white transition group">
            <div class="text-3xl mb-4">▲</div>
            <h3 class="text-xl font-bold text-white mb-2">Vercel AI SDK</h3>
            <p class="text-sm text-slate-400 mb-4">
                The glue. Connects your UI to OpenAI/Anthropic. Handles the complex stream parsing and state updates.
            </p>
            <div class="bg-black p-2 rounded border border-slate-800 text-[10px] font-mono text-slate-300 group-hover:text-cyan-400">
                useChat({ api: '/api/chat' })
            </div>
        </div>

         <!-- Layer 3: The Styling -->
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-2xl hover:border-white transition group">
            <div class="text-3xl mb-4">💅</div>
            <h3 class="text-xl font-bold text-white mb-2">TailwindCSS + Shadcn/UI</h3>
            <p class="text-sm text-slate-400 mb-4">
                The skin. Copy-paste components that look premium. Essential for rapid prototyping of chat bubbles.
            </p>
            <div class="bg-black p-2 rounded border border-slate-800 text-[10px] font-mono text-slate-300 group-hover:text-cyan-400">
                className="rounded-lg bg-muted p-4"
            </div>
        </div>
        
    </div>

    <!-- Architecture Diagram -->
    <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-slate-800 mt-8 relative overflow-hidden">
        <h3 class="text-2xl font-bold text-white mb-8 text-center">How Data Flows</h3>
        
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono max-w-4xl mx-auto z-10 relative">
            
            <!-- User Device -->
            <div class="w-full md:w-1/4 p-4 bg-blue-900/20 border border-blue-500 rounded-xl text-center">
                <div class="text-2xl mb-2">👤</div>
                <div class="text-blue-400 font-bold">Client (Browser)</div>
                <div class="mt-2 text-slate-500">useChat() hook</div>
            </div>

            <!-- Arrow 1 -->
            <div class="flex flex-col items-center gap-1">
                <span class="text-slate-500">JSON POST</span>
                <div class="h-px w-16 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            <!-- Server -->
            <div class="w-full md:w-1/4 p-4 bg-purple-900/20 border border-purple-500 rounded-xl text-center">
                <div class="text-2xl mb-2">🖥️</div>
                <div class="text-purple-400 font-bold">Next.js Edge</div>
                <div class="mt-2 text-slate-500">Route Handler</div>
            </div>

            <!-- Arrow 2 -->
             <div class="flex flex-col items-center gap-1">
                <span class="text-slate-500">Request</span>
                <div class="h-px w-16 bg-gradient-to-r from-purple-500 to-green-500"></div>
            </div>

            <!-- AI Provider -->
            <div class="w-full md:w-1/4 p-4 bg-green-900/20 border border-green-500 rounded-xl text-center">
                <div class="text-2xl mb-2">🧠</div>
                <div class="text-green-400 font-bold">OpenAI/Anthropic</div>
                <div class="mt-2 text-slate-500">Inference</div>
            </div>

        </div>
        
        <!-- The Stream Back -->
         <div class="mt-8 pt-8 border-t border-slate-800">
            <div class="flex items-center justify-center gap-2">
                 <span class="text-green-400">Response:</span>
                 <div class="flex gap-1 animate-pulse">
                     <span class="p-1 bg-slate-800 rounded border border-slate-700">Token</span>
                     <span class="p-1 bg-slate-800 rounded border border-slate-700">Token</span>
                     <span class="p-1 bg-slate-800 rounded border border-slate-700">Token</span>
                     <span class="text-slate-500">... (Streams back to Client)</span>
                 </div>
            </div>
         </div>

    </div>

    <!-- The "Why" Section -->
    <div class="space-y-4">
        <h3 class="text-2xl font-bold text-white">Why not simple React?</h3>
        <p class="text-slate-400">
            Because <strong>Secrets</strong>. You cannot call OpenAI from `create-react-app` because your API Key would be exposed in the browser Network tab.
            Next.js gives you a <span class="text-cyan-400">Server Backend</span> (API Routes) and a <span class="text-cyan-400">Client Frontend</span> in the same repo.
        </p>
    </div>

</div>
"""

# 13.3 Getting Started: Project Setup & Architecture
content_13_3 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
      <div class="inline-block p-4 rounded-full bg-slate-800 border border-slate-700 mb-6 text-5xl">🏗️</div>
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Zero to "Hello, AI"
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          Let's scaffold a production-ready AI app in 3 minutes. No config hell. Just standard patterns.
      </p>
    </div>

    <!-- The CLI Command Sequence -->
    <div class="space-y-8">
        <h3 class="text-2xl font-bold text-white mb-4">The Setup Sequence</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
             <!-- Step 1: Next.js -->
             <div class="p-4 bg-black rounded-xl border border-slate-800 relative group">
                 <div class="absolute -top-3 -left-3 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center font-bold text-white border border-slate-600">1</div>
                 <div class="font-mono text-sm text-slate-300 mb-2">npx create-next-app@latest ai-app</div>
                 <div class="flex gap-2 text-[10px] text-slate-500">
                     <span class="bg-slate-900 px-1 rounded">TypeScript: Yes</span>
                     <span class="bg-slate-900 px-1 rounded">App Router: Yes</span>
                     <span class="bg-slate-900 px-1 rounded">Turbopack: Yes</span>
                 </div>
             </div>

             <!-- Step 2: Shadcn -->
             <div class="p-4 bg-black rounded-xl border border-slate-800 relative group">
                  <div class="absolute -top-3 -left-3 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center font-bold text-white border border-slate-600">2</div>
                 <div class="font-mono text-sm text-slate-300 mb-2">npx shadcn@latest init</div>
                 <div class="text-[10px] text-slate-500">
                     Sets up <code>components/ui</code>. Choose "New York" & "Zinc".
                 </div>
             </div>

             <!-- Step 3: AI SDK -->
             <div class="p-4 bg-black rounded-xl border border-slate-800 relative group">
                  <div class="absolute -top-3 -left-3 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center font-bold text-white border border-slate-600">3</div>
                 <div class="font-mono text-sm text-slate-300 mb-2">npm install ai @ai-sdk/openai</div>
                 <div class="text-[10px] text-slate-500">
                     The Core SDK + The OpenAI Provider for Vercel AI SDK 3.0.
                 </div>
             </div>
             
             <!-- Step 4: ENV -->
             <div class="p-4 bg-black rounded-xl border border-slate-800 relative group">
                  <div class="absolute -top-3 -left-3 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center font-bold text-white border border-slate-600">4</div>
                 <div class="font-mono text-sm text-slate-300 mb-2">echo "OPENAI_API_KEY=sk-..." > .env.local</div>
                 <div class="text-[10px] text-green-500">
                     ✔ Security: Only available on backend.
                 </div>
             </div>
        </div>
    </div>

    <!-- Folder Structure Visual -->
    <div class="bg-[#0f1014] p-8 rounded-3xl border border-slate-800 mt-8">
        <h3 class="text-2xl font-bold text-white mb-6">The "Flyeng Standard" Folder Structure</h3>
        <div class="flex flex-col md:flex-row gap-8">
            <div class="font-mono text-sm text-slate-400 space-y-2 border-l border-slate-800 pl-4 w-64">
                <div class="text-blue-400 font-bold">/app</div>
                <div class="pl-4">/api</div>
                <div class="pl-8 text-yellow-400">/chat</div>
                <div class="pl-12">📄 route.ts <span class="text-slate-600">// Edge Runtime</span></div>
                <div class="pl-4">page.tsx <span class="text-slate-600">// The UI</span></div>
                <div class="pl-4">layout.tsx</div>
                <div class="text-green-400 font-bold pt-4">/components</div>
                <div class="pl-4">/ui <span class="text-slate-600">// Shadcn</span></div>
                <div class="pl-4">📄 chat-list.tsx</div>
                <div class="pl-4">📄 chat-input.tsx</div>
                <div class="text-purple-400 font-bold pt-4">/lib</div>
                <div class="pl-4">📄 utils.ts</div>
                <div class="pl-4">📄 ai.ts <span class="text-slate-600">// AI Config</span></div>
            </div>
            
            <div class="flex-1 bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 flex flex-col justify-center">
                 <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
                     <h4 class="text-blue-400 font-bold text-sm">Why this structure?</h4>
                     <p class="text-xs text-slate-400 mt-2">
                         Next.js App Router enforces a separation between <strong>Server-Side Logic</strong> (API Routes) and <strong>Client-Side UI</strong> (Pages). This prevents you from accidentally leaking secrets.
                     </p>
                 </div>
                 <div class="bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
                     <h4 class="text-yellow-400 font-bold text-sm">Edge Runtime</h4>
                     <p class="text-xs text-slate-400 mt-2">
                         We put `route.ts` on the Edge (Lambda@Edge) because chat is latency-sensitive. Edge functions have 0ms cold start but cannot use Node.js APIs (fs, os).
                     </p>
                 </div>
            </div>
        </div>
    </div>
</div>
"""

# 13.4 Vercel AI SDK: Model-Agnostic Frontend Toolkit
content_13_4 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
      <div class="inline-block p-4 rounded-full bg-white/10 border border-white/20 mb-6 text-5xl">▲</div>
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          The "Keras" of AI Frontend
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          One hook to rule them all. Swap <strong>OpenAI</strong> for <strong>Anthropic</strong> or <strong>Mistral</strong> without changing a single line of UI code.
      </p>
    </div>

    <!-- The Provider Abstraction -->
    <div class="bg-[#111] p-8 rounded-3xl border border-slate-800">
        <h3 class="text-2xl font-bold text-white mb-8 text-center">The "Model Agnostic" Architecture</h3>
        
        <div class="flex flex-col md:flex-row items-center gap-6 justify-center">
            
            <!-- Code Block Left (The Backend) -->
            <div class="w-full md:w-5/12 space-y-4">
                <div class="bg-black p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                    <div class="text-slate-500 mb-2">// 1. Choose Provider</div>
                    <div class="text-green-400">import { createOpenAI } from '@ai-sdk/openai';</div>
                    <div class="text-purple-400">import { createAnthropic } from '@ai-sdk/anthropic';</div>
                    <br>
                    <div class="text-slate-500 mb-2">// 2. Define Model</div>
                    <div class="text-blue-400">const model = openai('gpt-4-turbo');</div>
                    <div class="text-slate-600 italic">// OR</div>
                    <div class="text-blue-400">const model = anthropic('claude-3-opus');</div>
                </div>
                <p class="text-center text-xs text-slate-500">Backend (route.ts)</p>
            </div>

            <!-- The Bridge -->
            <div class="flex flex-col items-center gap-2">
                <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-white rounded-full"></div>
                <div class="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Unified Protocol</div>
                <div class="w-16 h-1 bg-gradient-to-r from-white to-purple-500 rounded-full"></div>
            </div>

            <!-- Code Block Right (The Frontend) -->
            <div class="w-full md:w-5/12 space-y-4">
                 <div class="bg-black p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                    <div class="text-slate-500 mb-2">// 3. Consume UI</div>
                    <div class="text-yellow-400">const { messages, input, handleSubmit } = useChat();</div>
                    <br>
                    <div class="text-slate-500 mb-2">// 4. Render</div>
                    <div>
                        &lt;div&gt;{messages.map(...) }&lt;/div&gt;
                    </div>
                </div>
                <p class="text-center text-xs text-slate-500">Frontend (page.tsx)</p>
            </div>

        </div>

        <div class="mt-8 p-4 bg-green-900/20 border border-green-500/30 rounded-xl text-center">
            <p class="text-green-400 text-sm font-bold">
                ✨ Magic: The Frontend `messages` array looks exactly the same regardless of the backend model.
            </p>
        </div>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-2xl">
            <h4 class="text-lg font-bold text-white mb-2">StreamData Protocol</h4>
            <p class="text-sm text-slate-400 mb-4">
                Typically, streaming JSON is hard (parsing incomplete brackets). The AI SDK automatically handles the <strong>Stream Parsing</strong> so you just get a clean string.
            </p>
            <div class="bg-black p-2 rounded font-mono text-[10px] text-slate-500">
                0:"H"<br>0:"e"<br>0:"l"<br>0:"l"<br>0:"o"
            </div>
        </div>

        <div class="p-6 bg-slate-900 border border-slate-700 rounded-2xl">
            <h4 class="text-lg font-bold text-white mb-2">Providers Landscape</h4>
            <p class="text-sm text-slate-400 mb-4">
                It supports everyone. You aren't locked in.
            </p>
            <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded border border-green-500/30">OpenAI</span>
                <span class="px-2 py-1 bg-orange-900/30 text-orange-400 text-xs rounded border border-orange-500/30">Anthropic</span>
                <span class="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded border border-blue-500/30">Mistral</span>
                <span class="px-2 py-1 bg-purple-900/30 text-purple-400 text-xs rounded border border-purple-500/30">Cohere</span>
                <span class="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-600">Google Gemini</span>
            </div>
        </div>
    </div>

</div>
"""

# 13.5 Building a Streaming Chat UI in Next.js
content_13_5 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
      <div class="inline-block p-4 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6 text-5xl">💬</div>
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          The Chat Interface
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          It's more than just an input box. It's about <span class="text-blue-400">Optimistic UI</span>, <span class="text-purple-400">Scroll Anchoring</span>, and <span class="text-green-400">Streaming State</span>.
      </p>
    </div>

    <!-- The 3 Key Components -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Component 1: The List -->
        <div class="bg-[#111] p-6 rounded-2xl border border-slate-800">
            <h3 class="font-bold text-white mb-2">1. The Message List</h3>
            <p class="text-xs text-slate-400 mb-4">Iterates over the `messages[]` array. Distinguishes between User and AI.</p>
            <div class="bg-black p-3 rounded text-[10px] font-mono text-slate-300">
                {messages.map(m => (<br>
                &nbsp;&nbsp;&lt;div key={m.id}&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;{m.role === 'user' ? '👤' : '🤖'}<br>
                &nbsp;&nbsp;&nbsp;&nbsp;{m.content}<br>
                &nbsp;&nbsp;&lt;/div&gt;<br>
                ))}
            </div>
        </div>

        <!-- Component 2: The Input -->
        <div class="bg-[#111] p-6 rounded-2xl border border-slate-800">
            <h3 class="font-bold text-white mb-2">2. The Input Form</h3>
            <p class="text-xs text-slate-400 mb-4">Wires `input` state and `handleInputChange` to a Textarea.</p>
            <div class="bg-black p-3 rounded text-[10px] font-mono text-slate-300">
                &lt;form onSubmit={handleSubmit}&gt;<br>
                &nbsp;&nbsp;&lt;input<br>
                &nbsp;&nbsp;&nbsp;&nbsp;value={input}<br>
                &nbsp;&nbsp;&nbsp;&nbsp;onChange={handleInputChange}<br>
                &nbsp;&nbsp;/&gt;<br>
                &lt;/form&gt;
            </div>
        </div>

        <!-- Component 3: The Anchor -->
        <div class="bg-[#111] p-6 rounded-2xl border border-slate-800">
            <h3 class="font-bold text-white mb-2">3. Scroll Anchor</h3>
            <p class="text-xs text-slate-400 mb-4">Invisible div at the bottom. Auto-scrolls when new tokens arrive.</p>
            <div class="bg-black p-3 rounded text-[10px] font-mono text-slate-300">
                useEffect(() => {<br>
                &nbsp;&nbsp;ref.current?.scrollIntoView()<br>
                }, [messages])
            </div>
        </div>
    </div>

    <!-- The Full Implementation Plan -->
    <div class="mt-12 p-8 bg-slate-900 border border-slate-700 rounded-3xl">
        <h3 class="text-2xl font-bold text-white mb-6">Putting it together: page.tsx</h3>
        
        <div class="relative bg-black rounded-xl p-6 border border-slate-800 font-mono text-xs text-slate-300 overflow-hidden">
            <div class="absolute top-0 right-0 bg-blue-600 px-3 py-1 text-[10px] font-bold text-white rounded-bl-xl">CLIENT COMPONENT</div>
            
            <span class="text-purple-400">import</span> { useChat } <span class="text-purple-400">from</span> <span class="text-green-400">'ai/react'</span>;<br><br>
            
            <span class="text-purple-400">export default function</span> <span class="text-yellow-400">Chat</span>() {<br>
            &nbsp;&nbsp;<span class="text-slate-500">// 1. The Hook handles EVERYTHING (State, API, Streaming)</span><br>
            &nbsp;&nbsp;<span class="text-blue-400">const</span> { messages, input, handleInputChange, handleSubmit } = <span class="text-yellow-400">useChat</span>();<br><br>

            &nbsp;&nbsp;<span class="text-purple-400">return</span> (<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=<span class="text-green-400">"flex flex-col h-screen"</span>&gt;<br>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-slate-500">// 2. Scrollable Area</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=<span class="text-green-400">"flex-1 overflow-y-auto p-4"</span>&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{messages.map(m => (<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div key={m.id} className={m.role === <span class="text-green-400">'user'</span> ? <span class="text-green-400">'bg-blue-500'</span> : <span class="text-green-400">'bg-gray-700'</span>}&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{m.content}<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))}<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br><br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-slate-500">// 3. Fixed Input Area</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;form onSubmit={handleSubmit} className=<span class="text-green-400">"p-4 border-t"</span>&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value={input} <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange={handleInputChange} <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholder=<span class="text-green-400">"Say something..."</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;<br>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
            &nbsp;&nbsp;);<br>
            }
        </div>
    </div>
</div>
"""

# 13.6 API Routes & Server Actions for AI Endpoints
content_13_6 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
      <div class="inline-block p-4 rounded-full bg-purple-600/10 border border-purple-500/20 mb-6 text-5xl">🔌</div>
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          The Backend Connection
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          You have the UI. Now you need the Brain. Two ways to connect: <span class="text-purple-400">Route Handlers</span> (Standard) or <span class="text-orange-400">Server Actions</span> (RPC).
      </p>
    </div>

    <!-- The VS Battle -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        <!-- Route Handlers -->
        <div class="p-8 bg-[#111] border border-slate-800 rounded-3xl relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 font-bold text-slate-600">METHOD 1</div>
            <h3 class="text-2xl font-bold text-purple-400 mb-4">Route Handlers</h3>
            <div class="font-mono text-xs bg-black p-4 rounded border border-slate-700 mb-6">
                POST /api/chat
            </div>
            <ul class="space-y-3 text-sm text-slate-300">
                <li>✅ <strong>Standard HTTP:</strong> Works with cURL, Postman, Mobile Apps.</li>
                <li>✅ <strong>Streaming:</strong> Native support for `StreamingTextResponse`.</li>
                <li>✅ <strong>Edge Runtime:</strong> Can run on Vercel Edge (0ms cold start).</li>
                <li>❌ <strong>Verbosity:</strong> Need to manually define GET/POST export.</li>
            </ul>
        </div>

        <!-- Server Actions -->
        <div class="p-8 bg-[#111] border border-slate-800 rounded-3xl relative overflow-hidden">
             <div class="absolute top-0 right-0 p-4 font-bold text-slate-600">METHOD 2</div>
            <h3 class="text-2xl font-bold text-orange-400 mb-4">Server Actions</h3>
             <div class="font-mono text-xs bg-black p-4 rounded border border-slate-700 mb-6">
                async function submit(formData) { 'use server' ... }
            </div>
            <ul class="space-y-3 text-sm text-slate-300">
                <li>✅ <strong>Zero Boilerplate:</strong> Just a function call. No URL needed.</li>
                <li>✅ <strong>Type Safety:</strong> Arguments are typed automatically.</li>
                <li>✅ <strong>Progressive Enhancement:</strong> Works without JS (mostly).</li>
                <li>❌ <strong>Streaming:</strong> Harder to stream *tokens* back natively without `ai` SDK.</li>
            </ul>
        </div>
    </div>

    <!-- The Code Implementation (Route Handler) -->
    <div class="bg-slate-900 border border-slate-700 rounded-3xl p-8">
        <h3 class="text-xl font-bold text-white mb-6">Implementing `app/api/chat/route.ts`</h3>
        
        <div class="font-mono text-xs text-slate-300 space-y-4">
            <div>
                <span class="text-purple-400">import</span> { OpenAIStream, StreamingTextResponse } <span class="text-purple-400">from</span> <span class="text-green-400">'ai'</span>;<br>
                <span class="text-purple-400">import</span> { Configuration, OpenAIApi } <span class="text-purple-400">from</span> <span class="text-green-400">'openai-edge'</span>;
            </div>

            <div class="p-4 bg-yellow-900/10 border-l-4 border-yellow-500 rounded-r">
                <span class="text-yellow-400 font-bold">CRITICAL: The Edge Runtime</span><br>
                <span class="text-slate-500">// Optional, but recommended for latency</span><br>
                <span class="text-purple-400">export const</span> runtime = <span class="text-green-400">'edge'</span>;
            </div>

            <div>
                <span class="text-purple-400">export async function</span> <span class="text-blue-400">POST</span>(req: <span class="text-yellow-400">Request</span>) {<br>
                &nbsp;&nbsp;<span class="text-slate-500">// 1. Parse Body</span><br>
                &nbsp;&nbsp;<span class="text-purple-400">const</span> { messages } = <span class="text-purple-400">await</span> req.json();<br><br>

                &nbsp;&nbsp;<span class="text-slate-500">// 2. Call OpenAI</span><br>
                &nbsp;&nbsp;<span class="text-purple-400">const</span> response = <span class="text-purple-400">await</span> openai.createChatCompletion({<br>
                &nbsp;&nbsp;&nbsp;&nbsp;model: <span class="text-green-400">'gpt-4'</span>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;stream: <span class="text-blue-400">true</span>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;messages,<br>
                &nbsp;&nbsp;});<br><br>
                
                &nbsp;&nbsp;<span class="text-slate-500">// 3. Transform to Stream</span><br>
                &nbsp;&nbsp;<span class="text-purple-400">const</span> stream = <span class="text-yellow-400">OpenAIStream</span>(response);<br><br>

                &nbsp;&nbsp;<span class="text-slate-500">// 4. Return Response</span><br>
                &nbsp;&nbsp;<span class="text-purple-400">return new</span> <span class="text-yellow-400">StreamingTextResponse</span>(stream);<br>
                }
            </div>
        </div>
    </div>

    <!-- Security Warning -->
    <div class="mt-8 p-6 bg-red-900/20 border border-red-500/50 rounded-2xl flex gap-4 items-start">
        <div class="text-3xl">🛡️</div>
        <div>
            <h4 class="text-red-400 font-bold mb-2">Security: Rate Limiting is Mandatory</h4>
            <p class="text-sm text-slate-400">
                Because this setup exposes a public API route, anyone can curl it. You <strong>MUST</strong> add middleware (like Upstash Ratelimit) to block abuse. If you don't, bots will drain your OpenAI credits in minutes.
            </p>
        </div>
    </div>
</div>
"""

# 13.7 End-to-End Type Safety with tRPC (Optional But Powerful)
content_13_7 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
      <div class="inline-block p-4 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 text-5xl">🛡️</div>
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Strict Type Safety
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          Stop debugging <code>undefined</code> errors in production. Share your <strong>Zod Schemas</strong> between your Prompt Logic and your React Forms.
      </p>
    </div>

    <!-- The Problem vs Solution -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="p-8 bg-[#111] border border-slate-800 rounded-3xl opacity-70">
            <h3 class="text-xl font-bold text-slate-500 mb-4">The REST API Way</h3>
            <p class="text-sm text-slate-500 mb-4">
               You change the backend to expect <code>{ prompt, temperature }</code> but forget to update the frontend which sends <code>{ text, temp }</code>.
            </p>
            <div class="bg-black p-4 rounded font-mono text-xs text-red-500">
                Error: undefined is not an object<br>
                (at line 42)
            </div>
        </div>

        <div class="p-8 bg-blue-950/30 border border-blue-500/30 rounded-3xl relative overflow-hidden">
            <h3 class="text-xl font-bold text-white mb-4">The tRPC Way</h3>
            <p class="text-sm text-slate-300 mb-4">
               Your API is your SDK. If you change the backend input schema, the frontend <strong>Build Fails</strong> immediately.
            </p>
             <div class="bg-black p-4 rounded font-mono text-xs text-green-400">
                Build Error: Property 'temperature' is missing in type...
            </div>
        </div>
    </div>

    <!-- Zod Implementation -->
    <div class="bg-slate-900 border border-slate-700 rounded-3xl p-8">
        <h3 class="text-xl font-bold text-white mb-6">Shared Schemas: The "Single Source of Truth"</h3>
        
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <!-- Universal Schema -->
            <div class="space-y-2">
                <div class="text-[10px] uppercase font-bold text-slate-500">shared/types.ts</div>
                <div class="bg-black p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                    <span class="text-purple-400">import</span> { z } <span class="text-purple-400">from</span> <span class="text-green-400">'zod'</span>;<br><br>
                    <span class="text-purple-400">export const</span> GenerateSchema = z.object({<br>
                    &nbsp;&nbsp;prompt: z.string().min(10),<br>
                    &nbsp;&nbsp;model: z.enum([<span class="text-green-400">'gpt-4'</span>, <span class="text-green-400">'claude-3'</span>]),<br>
                    &nbsp;&nbsp;settings: z.object({<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;temperature: z.number().min(0).max(1)<br>
                    &nbsp;&nbsp;})<br>
                    });
                </div>
            </div>

            <!-- Usage -->
            <div class="space-y-8">
                 <div class="space-y-2">
                    <div class="text-[10px] uppercase font-bold text-purple-400">Backend (server.ts)</div>
                    <div class="bg-black p-2 rounded border border-slate-800 font-mono text-[10px] text-slate-400">
                        .input(GenerateSchema)<br>
                        .mutation(req => { ... })
                    </div>
                </div>
                <div class="space-y-2">
                    <div class="text-[10px] uppercase font-bold text-blue-400">Frontend (Form.tsx)</div>
                    <div class="bg-black p-2 rounded border border-slate-800 font-mono text-[10px] text-slate-400">
                        const { mutate } = trpc.ai.generate.useMutation();<br>
                        mutate({ prompt: "Hi", <span class="text-red-500 underline decoration-wavy">temp: 0.7</span> }) <span class="text-slate-600">// ERROR!</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Does it work with Streaming? -->
    <div class="mt-8 p-6 bg-[#0a0a0a] border border-slate-800 rounded-2xl">
        <h3 class="text-lg font-bold text-white mb-2">Can tRPC Stream?</h3>
        <p class="text-sm text-slate-400">
            Yes, but it's complex. tRPC supports <strong>Iterables</strong> and <strong>Subscriptions</strong> (WebSockets). <br>
            However, for simple Chat, the <strong>Vercel AI SDK</strong> is usually better because it handles the specific edge-cases of LLM token streaming (like backpressure and text-decoding) out of the box.
        </p>
        <p class="text-sm text-slate-400 mt-2">
            <strong>Recommendation:</strong> Use <span class="text-white">tRPC</span> for "CRUD" actions (saving prompts, updating user settings, managing history) and <span class="text-white">Standard Routes</span> for the actual "Chat Stream".
        </p>
    </div>

</div>
"""

# 13.8 Connecting to RAG & Memory Backends
content_13_8 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
      <div class="inline-block p-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 text-5xl">🧠</div>
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Wiring the Brain
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          Your frontend doesn't just call OpenAI. It calls <strong>Your Data</strong>. Here is how to inject Vector Search into the chat loop.
      </p>
    </div>

    <!-- The Architecture Flow -->
    <div class="bg-[#111] p-8 rounded-3xl border border-slate-800">
        <h3 class="text-2xl font-bold text-white mb-8 text-center">The "Injected Context" Pattern</h3>
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono max-w-4xl mx-auto">
             
             <!-- Step 1 -->
             <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-center w-full md:w-32">
                 <div class="text-blue-400 font-bold mb-2">User Query</div>
                 <div class="text-slate-500">"What is our warranty?"</div>
             </div>

             <div class="text-slate-600">➜</div>

             <!-- Step 2 -->
             <div class="p-4 bg-indigo-900/20 border border-indigo-500 rounded-xl text-center flex-1">
                 <div class="text-indigo-300 font-bold mb-2">Next.js Backend</div>
                 <div class="bg-black p-2 rounded text-left text-[10px] text-slate-400 overflow-hidden">
                     embedding = openai.embed(query)<br>
                     docs = pinecone.query(embedding)<br>
                     context = docs.map(d => d.text).join('\\n')
                 </div>
             </div>

             <div class="text-slate-600">➜</div>

             <!-- Step 3 -->
             <div class="p-4 bg-green-900/20 border border-green-500 rounded-xl text-center w-full md:w-32">
                 <div class="text-green-400 font-bold mb-2">LLM</div>
                 <div class="text-slate-500">System Prompt + Context</div>
             </div>
        </div>
    </div>

    <!-- Implementation Code -->
    <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- The Code -->
        <div class="space-y-4">
             <h3 class="text-xl font-bold text-white">The Wrapper</h3>
             <p class="text-sm text-slate-400">
                 We intercept the user's message in `route.ts` and modify the <strong>System Prompt</strong> before sending it to OpenAI.
             </p>
             <div class="bg-black p-6 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300">
                 <span class="text-purple-400">export async function</span> POST(req) {<br>
                 &nbsp;&nbsp;<span class="text-purple-400">const</span> { messages } = <span class="text-purple-400">await</span> req.json();<br>
                 &nbsp;&nbsp;<span class="text-blue-400">const</span> lastMessage = messages[messages.length - 1];<br><br>
                 
                 &nbsp;&nbsp;<span class="text-slate-500">// 1. Retrieve Context</span><br>
                 &nbsp;&nbsp;<span class="text-purple-400">const</span> context = <span class="text-yellow-400">await</span> findRelevantDocs(lastMessage.content);<br><br>

                 &nbsp;&nbsp;<span class="text-slate-500">// 2. Inject Context</span><br>
                 &nbsp;&nbsp;<span class="text-purple-400">const</span> systemMessage = {<br>
                 &nbsp;&nbsp;&nbsp;&nbsp;role: <span class="text-green-400">'system'</span>,<br>
                 &nbsp;&nbsp;&nbsp;&nbsp;content: <span class="text-green-400">'You are a helper. Use this data: ' + context</span><br>
                 &nbsp;&nbsp;};<br><br>

                 &nbsp;&nbsp;<span class="text-slate-500">// 3. Call LLM with Augmented History</span><br>
                 &nbsp;&nbsp;<span class="text-purple-400">const</span> response = <span class="text-yellow-400">openai.chat.completions.create</span>({<br>
                 &nbsp;&nbsp;&nbsp;&nbsp;messages: [systemMessage, ...messages],<br>
                 &nbsp;&nbsp;&nbsp;&nbsp;stream: <span class="text-blue-400">true</span><br>
                 &nbsp;&nbsp;});<br><br>

                 &nbsp;&nbsp;<span class="text-purple-400">return new</span> StreamingTextResponse(stream);<br>
                 }
             </div>
        </div>

        <!-- The "Gotchas" -->
        <div class="space-y-6">
            <h3 class="text-xl font-bold text-white">Critical Considerations</h3>
            
            <div class="p-4 bg-slate-900 border-l-4 border-yellow-500 rounded-r-xl">
                <h4 class="text-yellow-400 font-bold text-sm mb-1">Latency Budget</h4>
                <p class="text-xs text-slate-400">
                   Retrieval adds latency. OpenAI embeddings take ~200ms. Pinecone takes ~100ms. <br>
                   Check <strong>Lesson 13.8 (UX)</strong> for how to hide this latency with Skeletons or "Searching..." indicators.
                </p>
            </div>

            <div class="p-4 bg-slate-900 border-l-4 border-red-500 rounded-r-xl">
                <h4 class="text-red-400 font-bold text-sm mb-1">Context Window Overflow</h4>
                <p class="text-xs text-slate-400">
                   If `pinecone.query` returns 50 documents, you might blow up the 128k context window or pay huge costs. <br>
                   <strong>Always</strong> limit retrieval results (Top-K = 5) and check token counts.
                </p>
            </div>

             <div class="p-4 bg-slate-900 border-l-4 border-blue-500 rounded-r-xl">
                <h4 class="text-blue-400 font-bold text-sm mb-1">Citations</h4>
                <p class="text-xs text-slate-400">
                   Return the sources to the frontend! You can send them as a custom <strong>Header</strong> or a hidden <strong>Data Stream Chunk</strong> so the UI can show "Source: Manual.pdf".
                </p>
            </div>
        </div>

    </div>
</div>
"""

# 13.9 Integrating Agents & Tools into the UI
content_13_9 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
      <div class="inline-block p-4 rounded-full bg-orange-600/10 border border-orange-500/20 mb-6 text-5xl">🛠️</div>
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Visualizing the "Thought Process"
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          Agents don't just talk. They act. You need to show the user <strong>What</strong> it is doing and ask for <strong>Approval</strong>.
      </p>
    </div>

    <!-- The 3 States of a Tool Call -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        <!-- State 1: Call -->
        <div class="p-6 bg-[#111] border border-slate-800 rounded-2xl relative overflow-hidden">
             <div class="absolute top-2 right-2 text-xs font-bold text-slate-600">STATE 1</div>
             <div class="flex items-center gap-3 mb-4">
                 <div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse">⚙️</div>
                 <h3 class="font-bold text-white">Tool Invocation</h3>
             </div>
             <p class="text-xs text-slate-400 mb-4">The LLM decided to call a function. Show a spinner or "Thinking..." state.</p>
             <div class="bg-black p-2 rounded font-mono text-[10px] text-yellow-400">
                 tool_calls: [{ name: "get_weather", args: ... }]
             </div>
        </div>

        <!-- State 2: Approval (HITL) -->
        <div class="p-6 bg-[#111] border border-orange-500/30 rounded-2xl relative overflow-hidden">
             <div class="absolute top-2 right-2 text-xs font-bold text-orange-500">STATE 2</div>
             <div class="flex items-center gap-3 mb-4">
                 <div class="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">✋</div>
                 <h3 class="font-bold text-white">Human Approval</h3>
             </div>
             <p class="text-xs text-slate-400 mb-4">Critical actions (e.g. "Refund User") require a button click.</p>
             <div class="flex gap-2">
                 <button class="px-3 py-1 bg-green-600 text-[10px] rounded text-white">Approve</button>
                 <button class="px-3 py-1 bg-red-600 text-[10px] rounded text-white">Deny</button>
             </div>
        </div>

        <!-- State 3: Result -->
        <div class="p-6 bg-[#111] border border-slate-800 rounded-2xl relative overflow-hidden">
             <div class="absolute top-2 right-2 text-xs font-bold text-slate-600">STATE 3</div>
             <div class="flex items-center gap-3 mb-4">
                 <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">✅</div>
                 <h3 class="font-bold text-white">Tool Result</h3>
             </div>
             <p class="text-xs text-slate-400 mb-4">The API returned JSON. Render it as a Chart or Table, not raw text.</p>
             <div class="bg-black p-2 rounded font-mono text-[10px] text-green-400">
                 tool_result: { temp: 72, condition: "Sunny" }
             </div>
        </div>
    </div>

    <!-- Implementation Strategy -->
    <div class="bg-slate-900 border border-slate-700 rounded-3xl p-8">
        <h3 class="text-xl font-bold text-white mb-6">Rendering Tool Calls via `toolInvocations`</h3>
        <p class="text-sm text-slate-400 mb-6">
            The Vercel AI SDK (UseChat) automatically aggregates tool calls into a `toolInvocations` property on the message object. This makes <strong>Conditional Rendering</strong> easy.
        </p>

        <div class="bg-black p-6 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300">
            {messages.map(m => (<br>
            &nbsp;&nbsp;&lt;div key={m.id}&gt;<br><br>
            
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-slate-500">// 1. Standard Text Content</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;{m.content}<br><br>

            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-slate-500">// 2. Check for Tool Usage</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;{m.<span class="text-yellow-400">toolInvocations</span>?.map(toolInvocation => {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">const</span> { toolName, toolCallId, state } = toolInvocation;<br><br>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-slate-500">// 3. Route to Component</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> (toolName === <span class="text-green-400">'get_stock_price'</span>) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> (state === <span class="text-green-400">'result'</span>) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> &lt;<span class="text-yellow-400">StockChart</span> data={toolInvocation.result} /&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <span class="text-purple-400">else</span> {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> &lt;<span class="text-yellow-400">Spinner</span> /&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br><br>
            
            &nbsp;&nbsp;&nbsp;&nbsp;})}<br>
            &nbsp;&nbsp;&lt;/div&gt;<br>
            ))}
        </div>
    </div>
</div>
"""

# 13.10 Deployment on Vercel & Edge Considerations
content_13_10 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
      <div class="inline-block p-4 rounded-full bg-white/10 border border-white/20 mb-6 text-5xl">🚀</div>
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Going Live
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          AI apps are different. They utilize <strong>Long-Running Connection Streams</strong> which hate conventional timeouts. Here is how to keep them alive.
      </p>
    </div>

    <!-- The Timeout Problem -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="p-8 bg-black border border-slate-800 rounded-3xl opacity-70">
            <h3 class="text-xl font-bold text-red-500 mb-4">The Serverless Problem</h3>
            <p class="text-sm text-slate-500 mb-4">
                Standard AWS Lambda / Vercel Serverless functions have hard timeouts. If GPT-4 takes 40s to generate a long report, the request gets killed.
            </p>
            <div class="flex items-center gap-4 mt-6">
                <div class="px-3 py-1 bg-red-900/30 text-red-500 text-xs rounded border border-red-500/30">Hobby: 10s Limit</div>
                <div class="px-3 py-1 bg-red-900/30 text-red-500 text-xs rounded border border-red-500/30">Pro: 60s Limit</div>
            </div>
        </div>

        <div class="p-8 bg-blue-950/20 border border-blue-500/30 rounded-3xl">
            <h3 class="text-xl font-bold text-blue-400 mb-4">The Edge Solution</h3>
            <p class="text-sm text-slate-300 mb-4">
                Edge Functions have higher limits because they just stream bytes. They don't wait for completion.
            </p>
            <div class="flex items-center gap-4 mt-6">
                <div class="px-3 py-1 bg-green-900/30 text-green-400 text-xs rounded border border-green-500/30">Streaming: Independent</div>
            </div>
        </div>
    </div>

    <!-- Deployment Checklist -->
    <div class="bg-slate-900 border border-slate-700 rounded-3xl p-8">
        <h3 class="text-xl font-bold text-white mb-6">The Pre-Flight Checklist</h3>
        
        <div class="space-y-4">
             <!-- Item 1 -->
             <div class="flex items-start gap-4 p-4 bg-black rounded-xl border border-slate-800">
                 <div class="text-green-400 text-xl">✅</div>
                 <div>
                     <h4 class="font-bold text-white text-sm">Environment Variables</h4>
                     <p class="text-xs text-slate-400">
                        Ensure <code>OPENAI_API_KEY</code> is set in Vercel Project Settings. <br>
                        <strong>Never</strong> commit `.env.local` to GitHub.
                     </p>
                 </div>
             </div>

             <!-- Item 2 -->
             <div class="flex items-start gap-4 p-4 bg-black rounded-xl border border-slate-800">
                 <div class="text-green-400 text-xl">✅</div>
                 <div>
                     <h4 class="font-bold text-white text-sm">Edge Runtime Enabled</h4>
                     <p class="text-xs text-slate-400">
                        Check your <code>route.ts</code> files. If you are missing <code>export const runtime = 'edge'</code>, you will hit the 10s timeout on the free plan.
                     </p>
                 </div>
             </div>

             <!-- Item 3 -->
             <div class="flex items-start gap-4 p-4 bg-black rounded-xl border border-slate-800">
                 <div class="text-green-400 text-xl">✅</div>
                 <div>
                     <h4 class="font-bold text-white text-sm">Rate Limiting</h4>
                     <p class="text-xs text-slate-400">
                        Without it, a single malicious user can cost you $500 overnight. Use <strong>@upstash/ratelimit</strong> or Vercel KV.
                     </p>
                 </div>
             </div>
        </div>
    </div>

    <!-- CI/CD Flow -->
    <div class="mt-8 text-center">
        <p class="text-xs text-slate-500 mb-4">The Vercel Workflow</p>
        <div class="inline-flex items-center gap-4 px-6 py-3 bg-black rounded-full border border-slate-800 font-mono text-xs text-blue-400">
            <span>git push</span>
            <span class="text-slate-600">→</span>
            <span>Build (Next.js)</span>
            <span class="text-slate-600">→</span>
            <span>Deploy</span>
            <span class="text-slate-600">→</span>
            <span class="text-green-400">Live URL</span>
        </div>
    </div>

</div>
"""

# 13.11 Mini Project: Full-Stack AI App (Chat + RAG)
content_13_11 = """
<div class="space-y-12 font-sans text-slate-200">
    
    <!-- Hero Section -->
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 p-8 md:p-12 text-center">
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div class="relative z-10">
            <div class="inline-block p-4 rounded-full bg-white/10 border border-white/20 mb-6 text-5xl shadow-2xl shadow-indigo-500/30">💻</div>
            <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Capstone: Build "DocsGPT"
            </h2>
            <p class="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Stop watching tutorials. <span class="text-indigo-400 font-bold">Start shipping.</span><br>
                We are building a production-ready RAG application that answers questions based on your own documentation.
            </p>
        </div>
    </div>

    <!-- The Specs -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
            <h3 class="font-bold text-white mb-2">The Stack</h3>
            <ul class="space-y-2 text-sm text-slate-400">
                <li class="flex items-center gap-2"><span class="text-white">Framework:</span> Next.js 14 (App Router)</li>
                <li class="flex items-center gap-2"><span class="text-white">AI SDK:</span> Vercel AI SDK Core</li>
                <li class="flex items-center gap-2"><span class="text-white">Database:</span> Pinecone (Vector)</li>
                <li class="flex items-center gap-2"><span class="text-white">Styling:</span> Tailwind CSS</li>
            </ul>
        </div>
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
            <h3 class="font-bold text-white mb-2">Key Features</h3>
            <ul class="space-y-2 text-sm text-slate-400">
                <li class="flex items-center gap-2">✅ Streaming Responses</li>
                <li class="flex items-center gap-2">✅ Semantic Search (RAG)</li>
                <li class="flex items-center gap-2">✅ Source Citations</li>
                <li class="flex items-center gap-2">✅ Dark Mode UI</li>
            </ul>
        </div>
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
            <h3 class="font-bold text-white mb-2">Time Estimate</h3>
            <div class="text-4xl font-bold text-indigo-400">2 Hours</div>
            <p class="text-xs text-slate-500 mt-2">If you follow this guide.</p>
        </div>
    </div>

    <!-- Step 1: Project Setup -->
    <div class="bg-[#0a0a0a] border border-slate-800 rounded-2xl overflow-hidden">
        <div class="p-4 border-b border-slate-800 bg-white/5 flex items-center justify-between">
            <h3 class="font-bold text-white">Step 1: Initialization</h3>
            <span class="text-xs font-mono text-slate-500">Terminal</span>
        </div>
        <div class="p-6 font-mono text-xs md:text-sm text-slate-300 space-y-4">
            <div>
                <span class="text-slate-500"># 1. Create the project</span><br>
                <span class="text-green-400">npx</span> create-next-app@latest docsgpt
            </div>
            <div>
                <span class="text-slate-500"># 2. Install dependencies</span><br>
                <span class="text-green-400">npm</span> install ai @ai-sdk/openai @pinecone-database/pinecone lucide-react clsx tailwind-merge
            </div>
            <div>
                <span class="text-slate-500"># 3. Set secrets in .env.local</span><br>
                <span class="text-blue-400">OPENAI_API_KEY</span>=sk-...<br>
                <span class="text-blue-400">PINECONE_API_KEY</span>=pc-...
            </div>
        </div>
    </div>

    <!-- Step 2: The Backend Route -->
    <div class="space-y-4">
        <h3 class="text-2xl font-bold text-white pl-4 border-l-4 border-indigo-500">Step 2: The RAG API Route</h3>
        <p class="text-slate-400 text-sm">Create <code class="bg-slate-800 px-1 rounded">app/api/chat/route.ts</code>. This is the brain.</p>
        
        <div class="bg-[#1e1e1e] rounded-xl border border-slate-700 overflow-hidden relative group">
            <div class="absolute top-2 right-2 text-[10px] text-slate-500 bg-black/50 px-2 py-1 rounded">app/api/chat/route.ts</div>
            <pre class="overflow-x-auto p-4 text-xs text-slate-300 font-mono leading-relaxed">
<span class="text-purple-400">import</span> { openai } <span class="text-purple-400">from</span> '@ai-sdk/openai';
<span class="text-purple-400">import</span> { streamText, tool } <span class="text-purple-400">from</span> 'ai';
<span class="text-purple-400">import</span> { Pinecone } <span class="text-purple-400">from</span> '@pinecone-database/pinecone';

<span class="text-slate-500">// Initialize clients</span>
<span class="text-purple-400">const</span> pc = <span class="text-purple-400">new</span> Pinecone({ apiKey: process.env.PINECONE_API_KEY });

<span class="text-purple-400">export const</span> runtime = <span class="text-green-300">'edge'</span>; <span class="text-slate-500">// Crucial for 60s+ streams</span>

<span class="text-purple-400">export async function</span> POST(req: Request) {
  <span class="text-purple-400">const</span> { messages } = <span class="text-purple-400">await</span> req.json();
  <span class="text-purple-400">const</span> lastMessage = messages[messages.length - 1];

  <span class="text-slate-500">// 1. Embed the user's query</span>
  <span class="text-purple-400">const</span> { embedding } = <span class="text-purple-400">await</span> openai.embeddings.create({
      model: <span class="text-green-300">'text-embedding-3-small'</span>,
      input: lastMessage.content,
  });

  <span class="text-slate-500">// 2. Retrieve relevant chunks</span>
  <span class="text-purple-400">const</span> index = pc.index(<span class="text-green-300">'docsgpt-index'</span>);
  <span class="text-purple-400">const</span> queryResponse = <span class="text-purple-400">await</span> index.query({
      vector: embedding,
      topK: 3,
      includeMetadata: <span class="text-blue-300">true</span>,
  });

  <span class="text-slate-500">// 3. Construct Context String</span>
  <span class="text-purple-400">const</span> context = queryResponse.matches.map(m => m.metadata.text).join(<span class="text-green-300">"\\n\\n"</span>);

  <span class="text-slate-500">// 4. Stream Response with Context injected</span>
  <span class="text-purple-400">const</span> result = <span class="text-purple-400">await</span> streamText({
      model: openai(<span class="text-green-300">'gpt-4o'</span>),
      system: <span class="text-green-300">`You are a helpful assistant. Use this context to answer: \${context}`</span>,
      messages,
  });

  <span class="text-purple-400">return</span> result.toDataStreamResponse();
}
            </pre>
        </div>
    </div>

    <!-- Step 3: The Frontend -->
    <div class="space-y-4">
        <h3 class="text-2xl font-bold text-white pl-4 border-l-4 border-indigo-500">Step 3: The Frontend UI</h3>
        <p class="text-slate-400 text-sm">Update <code class="bg-slate-800 px-1 rounded">app/page.tsx</code> to use the `useChat` hook.</p>
        
        <div class="bg-[#1e1e1e] rounded-xl border border-slate-700 overflow-hidden relative group">
             <div class="absolute top-2 right-2 text-[10px] text-slate-500 bg-black/50 px-2 py-1 rounded">app/page.tsx</div>
             <pre class="overflow-x-auto p-4 text-xs text-slate-300 font-mono leading-relaxed">
<span class="text-purple-400">import</span> { useChat } <span class="text-purple-400">from</span> 'ai/react';

<span class="text-purple-400">export default function</span> Chat() {
  <span class="text-purple-400">const</span> { messages, input, handleInputChange, handleSubmit } = useChat();

  <span class="text-purple-400">return</span> (
    &lt;div className="max-w-xl mx-auto py-10"&gt;
      {messages.map(m => (
        &lt;div key={m.id} className={m.role === 'user' ? 'text-blue-400' : 'text-slate-200'}&gt;
          &lt;strong&gt;{m.role === 'user' ? 'You' : 'AI'}:&lt;/strong&gt;
          &lt;p&gt;{m.content}&lt;/p&gt;
        &lt;/div&gt;
      ))}

      &lt;form onSubmit={handleSubmit} className="fixed bottom-0 w-full max-w-xl p-4"&gt;
        &lt;input
          value={input}
          onChange={handleInputChange}
          className="w-full p-2 bg-slate-800 text-white rounded border border-slate-700"
          placeholder="Ask about the docs..."
        /&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  );
}
            </pre>
        </div>
    </div>

    <!-- Final Checklist -->
    <div class="bg-indigo-900/10 border border-indigo-500/30 rounded-2xl p-8">
        <h3 class="font-bold text-white mb-4">🚀 Launch Checklist</h3>
        <div class="space-y-3 text-sm text-slate-300">
            <div class="flex items-center gap-3">
                <input type="checkbox" checked disabled class="accent-indigo-500 w-4 h-4">
                <span><strong>Environment Vars:</strong> Checked `.env.local` for API keys?</span>
            </div>
            <div class="flex items-center gap-3">
                <input type="checkbox" checked disabled class="accent-indigo-500 w-4 h-4">
                <span><strong>Vector Index:</strong> Did you run your seeding script to populate Pinecone?</span>
            </div>
            <div class="flex items-center gap-3">
                <input type="checkbox" checked disabled class="accent-indigo-500 w-4 h-4">
                <span><strong>Edge Runtime:</strong> Did you add `export const runtime = 'edge'`?</span>
            </div>
        </div>
    </div>

</div>
"""

# 13.12 Module 13 Wrap-up: Shipping Real AI Products
content_13_12 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
      <div class="inline-block p-4 rounded-full bg-green-500/10 border border-green-500/20 mb-6 text-5xl">📦</div>
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Shipped.
      </h2>
      <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          You are no longer just "playing with models." You are building <strong>Products</strong>. You now have the full stack: Backend, Frontend, and AI.
      </p>
    </div>

    <!-- The Transformation -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="p-8 bg-[#111] border border-slate-800 rounded-3xl opacity-50 grayscale">
            <h3 class="text-xl font-bold text-slate-500 mb-4">Before Module 13</h3>
            <ul class="space-y-2 text-sm text-slate-500">
                <li>• Python Scripts in Jupyter Notebooks</li>
                <li>• print(response) to console</li>
                <li>• Waiting 10s for full text</li>
                <li>• Hardcoded API Keys</li>
            </ul>
        </div>

        <div class="p-8 bg-green-900/20 border border-green-500/30 rounded-3xl relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 font-bold text-green-500/20 text-4xl">PRO</div>
            <h3 class="text-xl font-bold text-green-400 mb-4">After Module 13</h3>
             <ul class="space-y-2 text-sm text-slate-300">
                <li>• <strong>Next.js App</strong> deployed on Vercel Edge</li>
                <li>• <strong>Streaming UI</strong> with Typewriter effect</li>
                <li>• <strong>Optimistic Updates</strong> for instant feel</li>
                <li>• <strong>RAG</strong> with Vector Database integration</li>
            </ul>
        </div>
    </div>

    <!-- What's Next? -->
    <div class="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center">
        <h3 class="text-2xl font-bold text-white mb-4">Where do we go from here?</h3>
        <p class="text-slate-400 mb-8 max-w-2xl mx-auto">
            You have the tools. Now you need to master the <strong>Workflow</strong> of a Senior AI Engineer.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div class="p-4 bg-black rounded-xl border border-slate-800">
                <div class="text-purple-400 font-bold mb-1">Module 14</div>
                <div class="text-white text-sm">Fine-Tuning & Custom Models</div>
            </div>
             <div class="p-4 bg-black rounded-xl border border-slate-800">
                <div class="text-blue-400 font-bold mb-1">Module 15</div>
                <div class="text-white text-sm">Capstone Projects</div>
            </div>
             <div class="p-4 bg-black rounded-xl border border-slate-800">
                <div class="text-orange-400 font-bold mb-1">Module 16</div>
                <div class="text-white text-sm">AI Career & Ecosystem</div>
            </div>
        </div>
    </div>

    <div class="mt-12 flex justify-center">
        <button class="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
            Start Module 14 →
        </button>
    </div>
</div>
"""
