
import re

# Lesson 15.1: Serious Capstone Design
content_15_1 = """
<div class="space-y-12 font-sans text-slate-200">
  <div class="text-center py-8">
    <h2 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4"> Designing a Serious Capstone </h2>
    <p class="text-xl text-slate-400 max-w-2xl mx-auto"> Stop building "Toy Apps". Build outcome-driven engineering systems. </p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
        <h3 class="font-bold text-white mb-4">The "Toy App" Trap</h3>
        <ul class="space-y-2 text-sm text-slate-400">
            <li class="flex gap-2">❌ <span>Generic "Chat with PDF" wrapper</span></li>
            <li class="flex gap-2">❌ <span>No evaluations or metrics</span></li>
            <li class="flex gap-2">❌ <span>Hardcoded prompts in `app.py`</span></li>
        </ul>
    </div>
    <div class="p-6 bg-slate-900 border border-emerald-500/30 rounded-xl">
        <h3 class="font-bold text-white mb-4">The "Hired" Standard</h3>
        <ul class="space-y-2 text-sm text-slate-400">
            <li class="flex gap-2">✅ <span><strong>Systemic Complexity:</strong> Async queues, RBAC, Caching</span></li>
            <li class="flex gap-2">✅ <span><strong>Eval Pipeline:</strong> "We scored 85% accuracy on retrieval"</span></li>
            <li class="flex gap-2">✅ <span><strong>Vertical Focus:</strong> Solves a specific, expensive problem</span></li>
        </ul>
    </div>
  </div>
</div>
"""

# Lesson 15.2: Capstone Blueprint
content_15_2 = """
<div class="space-y-12 font-sans text-slate-200">
  <div class="border-l-4 border-emerald-500 pl-6">
    <h2 class="text-3xl font-bold text-white mb-2">The Architecture Blueprint</h2>
    <p class="text-emerald-400">RFC-Driven Development</p>
  </div>
  <div class="bg-[#0a0a0a] p-8 rounded-xl border border-slate-800 font-mono text-xs md:text-sm text-slate-300 overflow-x-auto">
      <div class="mb-4 text-emerald-500 font-bold"># RFC: Enterprise Knowledge Engine</div>
      <div class="mb-2"><span class="text-purple-400">Context:</span> Current search is broken.</div>
      <div class="mb-2"><span class="text-purple-400">Goal:</span> <1s Latency, RBAC-aware retrieval.</div>
      <br>
      <div class="mb-2"><span class="text-yellow-400">Architecture:</span></div>
      <div class="pl-4 border-l border-slate-700">
          [Next.js] -> [FastAPI] -> [Celery/Redis] -> [Qdrant] <br>
                                      | <br>
                                      v <br>
                                  [Gemini 1.5 Pro]
      </div>
  </div>
  <div class="bg-slate-900 p-6 rounded-xl border border-white/10">
      <h3 class="font-bold text-white mb-4">The "Golden Stack"</h3>
      <div class="flex flex-wrap gap-4">
          <span class="px-3 py-1 bg-white/10 rounded-full text-xs">Next.js 14</span>
          <span class="px-3 py-1 bg-white/10 rounded-full text-xs">FastAPI</span>
          <span class="px-3 py-1 bg-white/10 rounded-full text-xs">PostgreSQL (Supabase)</span>
          <span class="px-3 py-1 bg-white/10 rounded-full text-xs">Qdrant</span>
          <span class="px-3 py-1 bg-white/10 rounded-full text-xs">Vercel AI SDK</span>
      </div>
  </div>
</div>
"""

# Lesson 15.3: Track A (Enterprise)
content_15_3 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Hero Section -->
  <div class="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-12 text-center">
    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
    <div class="relative z-10">
        <div class="inline-block p-4 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 text-4xl shadow-[0_0_50px_rgba(59,130,246,0.15)]">🏢</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-6">
            Track A: The Enterprise Knowledge Engine
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Build the "Internal Google". <br>
            The challenge isn't "retrieval". The challenge is <span class="text-blue-400 font-bold">Permissions</span>, <span class="text-indigo-400 font-bold">Citations</span>, and <span class="text-emerald-400 font-bold">Trust</span>.
        </p>
    </div>
  </div>

  <!-- The "Why This Matters" Section -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-[#111] p-6 rounded-xl border border-slate-800">
          <h3 class="font-bold text-white mb-2">The Problem</h3>
          <p class="text-sm text-slate-400 mb-4 leading-relaxed">
              Companies have millions of docs (Notion, Slack, Jira, Drive). They are disconnected silos.
              <br><br>
              A naive RAG app is <strong>dangerous</strong> because it might retrieve the CEO's salary document for a Junior Intern.
          </p>
          <div class="p-3 bg-red-900/10 border border-red-500/20 rounded text-xs text-red-300 font-mono">
              User: "What is the payroll for Q1?"<br>
              Naive RAG: "Here is the CSV (retrieved from Finance Folder)..."<br>
              Result: <strong>Data Leak.</strong>
          </div>
      </div>
      <div class="bg-slate-900 p-6 rounded-xl border border-white/10">
          <h3 class="font-bold text-white mb-2">The Solution: RBAC RAG</h3>
          <p class="text-sm text-slate-400 mb-4 leading-relaxed">
              Your Capstone must implement <strong>Start-of-the-Art Access Control</strong>. The Retrieval Engine must know <em>who</em> is asking and <em>what</em> they are allowed to see.
          </p>
          <div class="p-3 bg-emerald-900/10 border border-emerald-500/20 rounded text-xs text-emerald-300 font-mono">
              User (Intern): "What is the payroll for Q1?"<br>
              Secure RAG: "Filter: { Role: 'Intern' } applied."<br>
              Vector DB: No results found.<br>
              Result: <strong>"I cannot access that information."</strong>
          </div>
      </div>
  </div>

  <!-- Architecture Diagram -->
  <div class="bg-black/40 rounded-3xl p-8 border border-white/10 relative overflow-hidden">
      <h3 class="text-2xl font-bold text-white mb-8 text-center">The Architecture: Secure Knowledge Pipeline</h3>
      
      <div class="grid gap-12 font-mono text-xs max-w-4xl mx-auto">
          
          <!-- Ingestion Flow -->
          <div class="relative pl-12 border-l-2 border-slate-800">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700"></span>
              <strong class="text-slate-500 block mb-4 uppercase tracking-widest">Phase 1: Ingestion (ETL)</strong>
              
              <div class="flex flex-wrap gap-4 items-center">
                  <!-- Connectors -->
                  <div class="p-4 bg-slate-900 rounded-lg border border-slate-700 text-center">
                      <div class="text-xl">🔌</div>
                      <div class="text-slate-300 mt-2">Connectors</div>
                      <div class="text-[9px] text-slate-500">Notion / Drive</div>
                  </div>
                  <span class="text-slate-600">→</span>
                  <!-- Metadata Extractor -->
                  <div class="p-4 bg-purple-900/20 rounded-lg border border-purple-500/30 text-center relative group">
                      <div class="absolute -top-3 right-0 bg-purple-500 text-white text-[9px] px-1 rounded">CRITICAL</div>
                      <div class="text-xl">🏷️</div>
                      <div class="text-purple-300 mt-2">ACL Tagger</div>
                      <div class="text-[9px] text-slate-400 max-w-[120px]">
                          Extracts `allowed_users` & `allowed_groups`
                      </div>
                  </div>
                  <span class="text-slate-600">→</span>
                   <!-- Vector DB -->
                  <div class="p-4 bg-slate-900 rounded-lg border border-slate-700 text-center">
                      <div class="text-xl">💾</div>
                      <div class="text-slate-300 mt-2">Vector DB</div>
                      <div class="text-[9px] text-slate-500">Qdrant / Pinecone</div>
                  </div>
              </div>
          </div>

          <!-- Query Flow -->
           <div class="relative pl-12 border-l-2 border-blue-900/50">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
              <strong class="text-blue-400 block mb-4 uppercase tracking-widest">Phase 2: Secure Retrieval</strong>
              
              <div class="flex flex-col gap-4">
                  <!-- Step 1 -->
                  <div class="flex items-center gap-4 group">
                      <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold">1</div>
                      <div class="flex-1 p-3 bg-slate-800/50 rounded border border-slate-700 flex justify-between items-center">
                          <span class="text-slate-300">User Query: "Project Alpha status?"</span>
                          <span class="text-[9px] bg-slate-700 px-2 py-1 rounded text-slate-400">JWT: { user_id: 123, groups: ['eng'] }</span>
                      </div>
                  </div>
                  <!-- Step 2 -->
                   <div class="flex items-center gap-4 group">
                      <div class="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 font-bold border border-blue-500/30">2</div>
                      <div class="flex-1 p-3 bg-blue-900/10 rounded border border-blue-500/30">
                          <strong class="text-blue-300 block mb-1">Pre-Filtering</strong>
                          <code class="text-[10px] text-slate-400 block">
                              db.search(query_vector, filter={ $or: [ { public: true }, { allowed_groups: 'eng' } ] })
                          </code>
                      </div>
                  </div>
                  <!-- Step 3 -->
                  <div class="flex items-center gap-4 group">
                      <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold">3</div>
                      <div class="flex-1 p-3 bg-slate-800/50 rounded border border-slate-700">
                          <span class="text-slate-300">LLM Generation with Citations</span>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  </div>

  <!-- Deep Dive: Citations -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div class="p-8 bg-[#0a0a0a] border border-slate-800 rounded-3xl">
          <h3 class="text-2xl font-bold text-white mb-4">The "Trust" Engine</h3>
          <p class="text-slate-400 text-sm mb-6">
              In Enterprise, an answer without a source is a hallucination. You must implement <strong>Inline Citations</strong>.
          </p>
          <div class="space-y-4">
              <div class="p-3 bg-slate-900 rounded border border-slate-700">
                  <div class="text-xs text-slate-500 mb-1">Passage 1 (Source: HR Policy.pdf)</div>
                  <div class="text-sm text-slate-300">"Employees are entitled to 20 days PTO..."</div>
              </div>
              <div class="p-3 bg-slate-900 rounded border border-slate-700">
                  <div class="text-xs text-slate-500 mb-1">Passage 2 (Source: Manager_Guide.txt)</div>
                  <div class="text-sm text-slate-300">"PTO requests require 2 weeks notice..."</div>
              </div>
              <div class="flex justify-center text-2xl text-slate-600">⬇</div>
              <div class="p-4 bg-emerald-900/10 border border-emerald-500/30 rounded">
                  <strong class="text-emerald-400 text-sm block mb-2">Final Answer</strong>
                  <p class="text-sm text-slate-300 leading-relaxed">
                      You get 20 days PTO <span class="bg-blue-500/20 text-blue-300 px-1 rounded text-xs cursor-pointer hover:bg-blue-500/40 transition">[1]</span>, but you must give 2 weeks notice <span class="bg-blue-500/20 text-blue-300 px-1 rounded text-xs cursor-pointer hover:bg-blue-500/40 transition">[2]</span>.
                  </p>
              </div>
          </div>
      </div>
      
      <!-- Tech Stack -->
      <div class="bg-gradient-to-br from-slate-900 to-black p-8 rounded-3xl border border-white/10">
          <h3 class="text-2xl font-bold text-white mb-6">The "Golden Stack"</h3>
          <ul class="space-y-4">
              <li class="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                  <span class="text-2xl">🦜</span>
                  <div>
                      <strong class="text-white block">Orchestration</strong>
                      <span class="text-xs text-slate-400">LangChain / LlamaIndex</span>
                  </div>
              </li>
              <li class="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                  <span class="text-2xl">💿</span>
                  <div>
                      <strong class="text-white block">Vector DB</strong>
                      <span class="text-xs text-slate-400">Qdrant / Weaviate (Strong Filter Support)</span>
                  </div>
              </li>
              <li class="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                  <span class="text-2xl">📄</span>
                  <div>
                      <strong class="text-white block">ETL / Ingestion</strong>
                      <span class="text-xs text-slate-400">Unstructured.io / LlamaParse</span>
                  </div>
              </li>
              <li class="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                  <span class="text-2xl">⚛️</span>
                  <div>
                      <strong class="text-white block">Frontend</strong>
                      <span class="text-xs text-slate-400">Next.js (Streaming UI)</span>
                  </div>
              </li>
          </ul>
      </div>
  </div>

  <!-- Implementation Hints -->
  <div class="p-6 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl mt-4">
      <h4 class="text-blue-400 font-bold mb-2">💡 Implementation Tip: Hydrating Citations</h4>
      <p class="text-slate-300 text-sm">
          Don't just stream text. Stream <strong>Objects</strong>. <br>
          Your API should return a JSON stream: <code>{ text: "word", sources: [...] }</code>. <br>
          Use the <code>AI SDK (Vercel)</code> with <code>streamObject</code> to handle this gracefully.
      </p>
  </div>

</div>
"""

# Lesson 15.4: Track B (DevTools)
content_15_4 = """
<div class="space-y-12 font-sans text-slate-200">
  <div class="border-l-4 border-purple-500 pl-6">
    <h2 class="text-3xl font-bold text-white mb-2">Track B: The DevOps Copilot</h2>
    <p class="text-purple-400">"The AI PR Reviewer: ASTs, Webhooks, & Auto-Fix"</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <!-- Context Aware -->
    <div class="bg-[#0a0a0a] p-6 rounded-xl border border-slate-800">
        <h3 class="font-bold text-white mb-2">1. The "Blind LLM" Problem</h3>
        <p class="text-xs text-slate-400 mb-4 leading-relaxed">
            Standard GPT-4 reviews are useless because they only see the <em>diff</em>. They don't see the <em>rest of the file</em> or the <em>imported functions</em>.
        </p>
        <div class="p-3 bg-purple-900/20 border border-purple-500/30 rounded text-xs text-purple-200 font-mono">
           Failure: "This function `calculate_total()` looks fine."<br>
           Reality: `calculate_total` expects an INT, but you passed a STRING. The diff didn't show the definition.
        </div>
    </div>

    <!-- The Solution -->
    <div class="bg-slate-900 p-6 rounded-xl border border-white/10">
        <h3 class="font-bold text-white mb-4">2. AST Analysis (Abstract Syntax Trees)</h3>
        <ul class="space-y-3 text-sm text-slate-300">
            <li class="flex items-start gap-4">
                <div class="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span><strong>Tree-Sitter / Babel:</strong> We parse the code into a Tree. We don't read "text", we read "Function nodes".</span>
            </li>
            <li class="flex items-start gap-4">
                <div class="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span><strong>Cyclomatic Complexity:</strong> The bot calculates `if/else` nesting depth. If complexity > 10, it auto-comments: <em>"Refactor this, it's too hard to test."</em></span>
            </li>
            <li class="flex items-start gap-4">
                <div class="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span><strong>Symbol Resolution:</strong> If the diff calls `User.save()`, the bot fetches `User.ts` to check the signature.</span>
            </li>
        </ul>
    </div>

  </div>

  <!-- Architecture Diagram -->
  <div class="bg-slate-900 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
    <h3 class="text-2xl font-bold text-white mb-8 text-center">The "PR Bot" Event Loop</h3>
    
    <div class="flex flex-col gap-8 font-mono text-xs">
        
        <!-- Step 1: The Trigger -->
        <div class="flex items-center gap-6">
            <div class="w-24 text-right text-slate-500 font-bold">1. Webhook</div>
            <div class="flex-1 p-4 bg-[#111] rounded-xl border border-slate-700 flex items-center gap-4">
                <span class="text-white font-bold">GitHub</span>
                <span class="text-slate-500">-- POST /webhooks --></span>
                <div class="text-purple-400 font-bold">FastAPI Gateway</div>
                <span class="text-slate-500">-- Push --></span>
                <div class="text-orange-400 font-bold">Redis Queue</div>
            </div>
        </div>

        <!-- Step 2: The Worker -->
        <div class="flex items-center gap-6">
            <div class="w-24 text-right text-slate-500 font-bold">2. Worker</div>
            <div class="flex-1 p-4 bg-[#111] rounded-xl border border-slate-700 grid grid-cols-2 gap-4">
                <div class="p-3 border border-slate-700 rounded bg-slate-800/50">
                    <div class="text-emerald-400 font-bold mb-1">Context Builder</div>
                    <div class="text-[9px] text-slate-400">
                        1. `git clone` (Shallow)<br>
                        2. `git diff` <br>
                        3. AST Parse (Identify critical symbols)
                    </div>
                </div>
                <div class="p-3 border border-slate-700 rounded bg-slate-800/50">
                    <div class="text-pink-400 font-bold mb-1">LLM Reviewer</div>
                    <div class="text-[9px] text-slate-400">
                        Prompt: "You are a Senior Engineer. Find bugs, security issues, and complexity."<br>
                        Input: Diff + Related Function Defs
                    </div>
                </div>
            </div>
        </div>

         <!-- Step 3: The Action -->
        <div class="flex items-center gap-6">
            <div class="w-24 text-right text-slate-500 font-bold">3. Feedback</div>
            <div class="flex-1 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20 flex items-center justify-between">
                <div>
                    <div class="text-white font-bold">GitHub API</div>
                    <div class="text-[10px] text-slate-400">POST /comments/{line_id}</div>
                </div>
                <div class="px-3 py-1 bg-black rounded border border-slate-700 text-slate-300 italic">
                    "Line 42: SQL Injection Risk. Use params."
                </div>
            </div>
        </div>

    </div>
  </div>

  <div class="p-6 bg-[#0a0a0a] border border-slate-800 rounded-xl hover:border-purple-500/30 transition">
      <h4 class="font-bold text-white mb-4">The "X-Factor": Auto-Fix via Git Patches</h4>
      <p class="text-sm text-slate-400 mb-2">
          Actions speak louder than comments.
      </p>
      <div class="flex items-center gap-4 text-xs font-mono">
          <div class="px-3 py-2 bg-slate-800 text-slate-300 border border-slate-600 rounded">User: "/fix"</div>
          <span class="text-slate-500">→</span>
          <div class="px-3 py-2 bg-purple-900/20 text-purple-400 border border-purple-500/20 rounded">LLM Generates `.patch`</div>
          <span class="text-slate-500">→</span>
          <div class="px-3 py-2 bg-emerald-900/20 text-emerald-400 border border-emerald-500/20 rounded">Bot Commits to Branch</div>
      </div>
  </div>
</div>
"""

# Lesson 15.5: Track C (Multimodal)
content_15_5 = """
<div class="space-y-12 font-sans text-slate-200">
  <div class="border-l-4 border-orange-500 pl-6">
    <h2 class="text-3xl font-bold text-white mb-2">Track C: The Multimodal Reasoning Agent</h2>
    <p class="text-orange-400">"Beyond RAG: Native Video Understanding (Dec 2026 Standards)"</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="bg-[#0a0a0a] p-6 rounded-xl border border-slate-800">
        <h3 class="font-bold text-white mb-2">Paradigm Shift: Native Vision</h3>
        <p class="text-xs text-slate-400 mb-4 leading-relaxed">
            <strong>2026 Way:</strong> Video as a First-Class Token. <br>
            Using <strong>Visual Tokenization</strong> (MagViT-v2) to feed video directly into the context window (2M tokens).
        </p>
    </div>
    <div class="bg-slate-900 p-6 rounded-xl border border-white/10">
        <h3 class="font-bold text-white mb-4">Core Capabilities</h3>
        <ul class="space-y-3 text-sm text-slate-300">
            <li><strong>Visual Grounding:</strong> Return `[bbox]` coordinates to highlight objects.</li>
            <li><strong>Temporal Reasoning:</strong> Understand changes over time.</li>
            <li><strong>Agentic Scrubbing:</strong> Tool calls to `seek()` and `pause()`.</li>
# Lesson 15.5: Track C (Multimodal)
content_15_5 = """
<div class="space-y-12 font-sans text-slate-200">
  <div class="border-l-4 border-orange-500 pl-6">
    <h2 class="text-3xl font-bold text-white mb-2">Track C: The Multimodal "Omni" Agent</h2>
    <p class="text-orange-400">"Beyond Text: ColPali, Native Video, & Voice Mode"</p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <!-- The Problem -->
      <div class="bg-[#0a0a0a] p-6 rounded-xl border border-slate-800">
          <h3 class="font-bold text-white mb-2">The Old Way: "OCR RAG"</h3>
          <p class="text-xs text-slate-400 mb-4 h-20">
              Transforming a PDF or Video into text (OCR/Whisper) destroys information. You lose layout, charts, facial expressions, and spatial relationships.
          </p>
          <div class="p-3 bg-red-900/10 border border-red-500/20 rounded text-xs text-red-300 font-mono">
              User: "What is the trend in this chart?"<br>
              OCR: "Axis: 10, 20... Labels: Q1, Q2..."<br>
              LLM: "I cannot see the trend."
          </div>
      </div>

      <!-- The Solution -->
      <div class="bg-slate-900 p-6 rounded-xl border border-white/10">
          <h3 class="font-bold text-white mb-2">The New Way: Visual Embeddings (ColPali)</h3>
          <p class="text-xs text-slate-400 mb-4 h-20">
             We don't OCR. We embed the <strong>screenshot</strong> of the page directly. The model retrieves based on "Visual Patches".
          </p>
          <div class="p-3 bg-emerald-900/10 border border-emerald-500/20 rounded text-xs text-emerald-300 font-mono">
              User: "Find the chart with the red dip."<br>
              Vector DB: [Matches visual patch containing red line]<br>
              LLM: "Here is the Q3 report (Page 14)."
          </div>
      </div>

  </div>

  <!-- Architecture Diagram -->
  <div class="bg-slate-900 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
    <h3 class="text-2xl font-bold text-white mb-8 text-center">The "Visual Chain-of-Thought" Pipeline</h3>
    
    <div class="flex flex-col gap-8 font-mono text-xs">
        
        <!-- Step 1: Input -->
        <div class="flex items-center gap-6">
            <div class="w-32 text-right text-slate-500 font-bold">1. Input Stream</div>
            <div class="flex-1 p-4 bg-[#111] rounded-xl border border-slate-700 grid grid-cols-2 gap-4">
                <div class="p-2 border border-slate-600 rounded text-center">
                    <span class="text-orange-400">Video Frames</span> (1fps)
                </div>
                 <div class="p-2 border border-slate-600 rounded text-center">
                    <span class="text-blue-400">Audio Stream</span> (PCM)
                </div>
            </div>
        </div>

        <!-- Step 2: Reasoning -->
        <div class="flex items-center gap-6">
            <div class="w-32 text-right text-slate-500 font-bold">2. Visual CoT</div>
            <div class="flex-1 p-4 bg-gradient-to-r from-orange-900/20 to-pink-900/20 rounded-xl border border-orange-500/20">
                <div class="text-[10px] text-slate-400 italic mb-2">Internal Monologue (Hidden from user)</div>
                <div class="text-white space-y-1">
                    <div>> I see a user holding a soldering iron.</div>
                    <div>> He is touching the PCB component labelled 'R14'.</div>
                    <div>> R14 is a resistor. He is creating a cold solder joint.</div>
                    <div>> <span class="text-red-400 font-bold">DANGER:</span> The iron is too cold.</div>
                </div>
            </div>
        </div>

         <!-- Step 3: Response -->
        <div class="flex items-center gap-6">
            <div class="w-32 text-right text-slate-500 font-bold">3. Voice Output</div>
            <div class="flex-1 p-4 bg-[#111] rounded-xl border border-slate-700 flex items-center gap-4">
                <div class="text-emerald-400 font-bold">Latency: 300ms</div>
                <span class="text-slate-600">|</span>
                <span class="text-white">"Stop! You need to heat the pad first, not just the wire."</span>
            </div>
        </div>

    </div>
  </div>

  <div class="p-6 bg-[#0a0a0a] border border-slate-800 rounded-xl hover:border-orange-500/30 transition">
      <h4 class="font-bold text-white mb-4">The Stack</h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
           <div class="p-2 border border-slate-700 rounded">
               <strong class="text-white block mb-1">Model</strong>
               Gemini 1.5 Pro (2M Context) or GPT-4o
           </div>
           <div class="p-2 border border-slate-700 rounded">
               <strong class="text-white block mb-1">Retrieval</strong>
               ColPali + Vespa.ai (Visual Vectors)
           </div>
           <div class="p-2 border border-slate-700 rounded">
               <strong class="text-white block mb-1">Voice</strong>
               OpenAI Realtime API (WebSockets)
           </div>
      </div>
  </div>
</div>
"""

# Lesson 15.6: Track D (Vertical AI)
content_15_6 = """
<div class="space-y-12 font-sans text-slate-200">
  <div class="border-l-4 border-pink-500 pl-6">
    <h2 class="text-3xl font-bold text-white mb-2">Track D: The Generative UI Engine</h2>
    <p class="text-pink-400">"Building a Bolt.new / Lovable Clone"</p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Context -->
    <div class="bg-[#0a0a0a] p-6 rounded-xl border border-slate-800">
        <h3 class="font-bold text-white mb-2">The Mission: Text-to-App</h3>
        <p class="text-xs text-slate-400 mb-4 leading-relaxed">
            Chatbots give you code snippets. <strong>Engineers give you running applications.</strong>
            <br><br>
            We are building a system where a user prompts: <em>"Build a dashboard for a crypto trading bot"</em>, and the system <strong>scaffolds, writes, and renders</strong> a full React app in real-time.
        </p>
        <div class="p-3 bg-pink-900/20 border border-pink-500/30 rounded text-xs text-pink-200">
            <strong>Benchmarks:</strong> Bolt.new (StackBlitz), Replit Agent, Lovable.
        </div>
    </div>

    <!-- The Core Tech -->
    <div class="bg-slate-900 p-6 rounded-xl border border-white/10">
        <h3 class="font-bold text-white mb-4">The Secret Sauce: In-Browser Runtime</h3>
        <ul class="space-y-3 text-sm text-slate-300">
            <li class="flex items-start gap-4">
                <div class="mt-1 w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                <span><strong>WebContainers (StackBlitz):</strong> Running Node.js <em>inside</em> the browser. This allows you to run `npm install` and `npm run dev` in a secure sandbox without backend compute costs.</span>
            </li>
            <li class="flex items-start gap-4">
                <div class="mt-1 w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                <span><strong>Sandpack (CodeSandbox):</strong> A lightweight alternative for running React components instantly.</span>
            </li>
            <li class="flex items-start gap-4">
                <div class="mt-1 w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                <span><strong>Shadcn UI (The Vocabulary):</strong> The LLM shouldn't write CSS from scratch. It should compose pre-existing, beautiful `shadcn` components.</span>
            </li>
        </ul>
    </div>
  </div>

  <!-- Deep Architecture Diagram -->
  <div class="bg-slate-900 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
    <h3 class="text-2xl font-bold text-white mb-8 text-center">The "Bolt Clone" Architecture</h3>
    
    <div class="flex flex-col gap-8 font-mono text-xs">
        
        <!-- Step 1: The Orchestrator -->
        <div class="flex items-center gap-6">
            <div class="w-24 text-right text-slate-500 font-bold">1. Planner</div>
            <div class="flex-1 p-4 bg-[#111] rounded-xl border border-slate-700">
                <div class="text-purple-400 font-bold mb-1">Reasoning Loop (ReAct / Chain)</div>
                <div class="text-[10px] text-slate-400">
                    User: "Make a dashboard"<br>
                    Agent: "I need 3 files: `layout.tsx`, `Sidebar.tsx`, `Chart.tsx`."
                </div>
            </div>
        </div>

        <!-- Step 2: The Generator -->
        <div class="flex items-center gap-6">
            <div class="w-24 text-right text-slate-500 font-bold">2. Coder</div>
            <div class="flex-1 p-4 bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-xl border border-pink-500/20 flex items-center justify-between">
                <div>
                    <div class="text-pink-300 font-bold">LLM (Claude 3.5 Sonnet / GPT-4o)</div>
                    <div class="text-[10px] text-slate-400">Streams file content in XML/JSON format</div>
                </div>
                <span class="text-slate-500">→</span>
                <div class="px-3 py-1 bg-black rounded border border-slate-700 font-mono text-emerald-400">
                    &lt;File path="app/page.tsx"&gt;...&lt;/File&gt;
                </div>
            </div>
        </div>

        <!-- Step 3: The Runtime -->
        <div class="flex items-center gap-6">
            <div class="w-24 text-right text-slate-500 font-bold">3. Runtime</div>
            <div class="flex-1 p-4 bg-[#111] rounded-xl border border-slate-700 grid grid-cols-2 gap-4">
                <div class="p-3 border border-slate-700 rounded bg-slate-800/50">
                    <div class="text-white font-bold mb-1">Virtual File System</div>
                    <div class="text-[9px] text-slate-400">In-Memory file write</div>
                </div>
                <div class="p-3 border border-slate-700 rounded bg-slate-800/50">
                    <div class="text-orange-400 font-bold mb-1">WebContainer</div>
                    <div class="text-[9px] text-slate-400">`npm run dev` (Localhost Proxy)</div>
                </div>
            </div>
        </div>

    </div>
  </div>

  <div class="p-6 bg-[#0a0a0a] border border-slate-800 rounded-xl hover:border-pink-500/30 transition">
      <h4 class="font-bold text-white mb-4">The "X-Factor": Self-Healing UI</h4>
      <p class="text-sm text-slate-400 mb-2">
          What happens when the LLM writes bad code and the app crashes?
      </p>
      <div class="flex items-center gap-4 text-xs font-mono">
          <div class="px-3 py-2 bg-red-900/20 text-red-400 border border-red-500/20 rounded">Runtime Error</div>
          <span class="text-slate-500">→</span>
          <div class="px-3 py-2 bg-blue-900/20 text-blue-400 border border-blue-500/20 rounded">Feed Stderr back to LLM</div>
          <span class="text-slate-500">→</span>
          <div class="px-3 py-2 bg-emerald-900/20 text-emerald-400 border border-emerald-500/20 rounded">Auto-Fix Applied</div>
      </div>
  </div>

</div>
"""

# Lesson 15.7: Checklist
content_15_7 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <div class="text-center py-8">
    <div class="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-6 text-4xl shadow-[0_0_50px_rgba(16,185,129,0.1)]">✅</div>
    <h2 class="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6">
        The Production Audit
    </h2>
    <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        "It works on my machine" is a fireable offense. Here is how you ship.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <!-- Ops & Infrastructure -->
      <div class="bg-[#0a0a0a] p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition">
          <h3 class="font-bold text-white mb-4 flex items-center gap-2">
              <span class="text-emerald-400">01.</span> Infrastructure & Ops
          </h3>
          <ul class="space-y-4 text-xs md:text-sm text-slate-400">
              <li class="flex items-start gap-3">
                  <input type="checkbox" checked disabled class="mt-1 w-4 h-4 rounded bg-slate-800 border-slate-600 text-emerald-500">
                  <span><strong>Dockerized:</strong> `docker-compose up` must spin up the DB, Redis, and API. No manual installs.</span>
              </li>
              <li class="flex items-start gap-3">
                  <input type="checkbox" checked disabled class="mt-1 w-4 h-4 rounded bg-slate-800 border-slate-600 text-emerald-500">
                  <span><strong>CI/CD Pipeline:</strong> A GitHub Action that runs `pytest` on every push. If tests fail, you can't merge.</span>
              </li>
              <li class="flex items-start gap-3">
                  <input type="checkbox" checked disabled class="mt-1 w-4 h-4 rounded bg-slate-800 border-slate-600 text-emerald-500">
                  <span><strong>Secret Management:</strong> No `.env` files committed. Use Infisical or Vercel Env Vars.</span>
              </li>
          </ul>
      </div>

      <!-- Observability & AI Safety -->
      <div class="bg-[#0a0a0a] p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition">
          <h3 class="font-bold text-white mb-4 flex items-center gap-2">
              <span class="text-emerald-400">02.</span> Observability (Day 2 Checks)
          </h3>
          <ul class="space-y-4 text-xs md:text-sm text-slate-400">
              <li class="flex items-start gap-3">
                  <input type="checkbox" checked disabled class="mt-1 w-4 h-4 rounded bg-slate-800 border-slate-600 text-emerald-500">
                  <span><strong>LLM Tracing:</strong> Plug in <strong>LangSmith</strong> or <strong>Helicone</strong>. You need to see the exact raw prompt and latency for every user request.</span>
              </li>
              <li class="flex items-start gap-3">
                  <input type="checkbox" checked disabled class="mt-1 w-4 h-4 rounded bg-slate-800 border-slate-600 text-emerald-500">
                  <span><strong>Rate Limiting:</strong> Use <strong>Upstash Redis</strong>. Prevent one user from draining your $500 OpenAI credits in 10 minutes.</span>
              </li>
              <li class="flex items-start gap-3">
                  <input type="checkbox" checked disabled class="mt-1 w-4 h-4 rounded bg-slate-800 border-slate-600 text-emerald-500">
                  <span><strong>Cost Alerts:</strong> Set a hard limit in your OpenAI/Anthropic dashboard.</span>
              </li>
          </ul>
      </div>

  </div>

  <!-- The Launch Assets -->
  <div class="bg-slate-900 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
    <h3 class="text-2xl font-bold text-white mb-8 text-center">The "Hired" Release Bundle</h3>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
        
        <!-- Asset 1 -->
        <div class="p-4 bg-black/40 rounded-xl border border-slate-700 flex flex-col items-center gap-3 hover:bg-black/60 transition">
            <div class="w-12 h-12 rounded-full bg-blue-900/20 text-blue-400 flex items-center justify-center text-xl">📺</div>
            <div class="text-center">
                <div class="text-white font-bold mb-1">The 60s Demo</div>
                <div class="text-slate-500">Loom video. Hook in 5s. Problem -> Solution -> Code.</div>
            </div>
        </div>

        <!-- Asset 2 -->
        <div class="p-4 bg-black/40 rounded-xl border border-slate-700 flex flex-col items-center gap-3 hover:bg-black/60 transition">
            <div class="w-12 h-12 rounded-full bg-purple-900/20 text-purple-400 flex items-center justify-center text-xl">📘</div>
            <div class="text-center">
                <div class="text-white font-bold mb-1">The README</div>
                <div class="text-slate-500">Treat it like a Landing Page. Screenshots, Architecture Diagram, "How to Run".</div>
            </div>
        </div>

        <!-- Asset 3 -->
        <div class="p-4 bg-black/40 rounded-xl border border-slate-700 flex flex-col items-center gap-3 hover:bg-black/60 transition">
            <div class="w-12 h-12 rounded-full bg-orange-900/20 text-orange-400 flex items-center justify-center text-xl">🚀</div>
            <div class="text-center">
                <div class="text-white font-bold mb-1">Live Deployment</div>
                <div class="text-slate-500">Vercel (Frontend) + Railway (Backend/Docker). No broken links.</div>
            </div>
        </div>

    </div>
  </div>

</div>
"""

# Lesson 15.8: Storytelling
content_15_8 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <div class="text-center py-8">
    <div class="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-6 text-4xl shadow-[0_0_50px_rgba(236,72,153,0.1)]">🗣️</div>
    <h2 class="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
        Storytelling for Hired Engineers
    </h2>
    <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Your code gets you the interview. Your story gets you the offer.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <!-- Bad Pattern -->
      <div class="bg-[#0a0a0a] p-8 rounded-xl border border-red-900/30 relative overflow-hidden group">
          <div class="absolute top-0 right-0 p-3 bg-red-900/20 text-red-400 text-xs font-bold rounded-bl-xl border-l border-b border-red-900/30">The Amateur</div>
          <h3 class="font-bold text-white mb-4 text-xl">The "Tech Salad"</h3>
          <p class="text-sm text-slate-400 italic mb-6">
              "I built a RAG app using Next.js, Pinecone, LangChain, Vercel AI SDK, Tailwind, Docker, and Python."
          </p>
          <div class="space-y-2">
              <div class="flex items-center gap-2 text-xs text-red-300">
                  <span>❌ Listing tools != Showing value.</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-red-300">
                  <span>❌ No problem statement.</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-red-300">
                  <span>❌ Hiring Manager thinks: "So what?"</span>
              </div>
          </div>
      </div>

      <!-- Good Pattern -->
      <div class="bg-[#0a0a0a] p-8 rounded-xl border border-emerald-900/30 relative overflow-hidden group">
           <div class="absolute top-0 right-0 p-3 bg-emerald-900/20 text-emerald-400 text-xs font-bold rounded-bl-xl border-l border-b border-emerald-900/30">The Engineer</div>
          <h3 class="font-bold text-white mb-4 text-xl">The "Problem Solver"</h3>
          <p class="text-sm text-slate-300 italic mb-6">
              "Customer support tickets were costing us 40 hours/week. I built an RBAC-aware knowledge engine that reduced ticket volume by 60% while maintaining strict data privacy."
          </p>
          <div class="space-y-2">
              <div class="flex items-center gap-2 text-xs text-emerald-300">
                  <span>✅ Metrics Driven ("60% reduction").</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-emerald-300">
                  <span>✅ Business Value First.</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-emerald-300">
                  <span>✅ Tech is implied, not vomited.</span>
              </div>
          </div>
      </div>

  </div>

  <!-- The STAR Framework -->
  <div class="bg-slate-900 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
    <h3 class="text-2xl font-bold text-white mb-8 text-center">The S.T.A.R. Method (Engineering Edition)</h3>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
        
        <div class="p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition">
            <div class="text-blue-400 font-bold text-lg mb-2">S</div>
            <div class="font-bold text-white mb-1">Situation</div>
            <div class="text-slate-400">"Our RAG retrieval latency was 5 seconds, causing user churn."</div>
        </div>

        <div class="p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition">
            <div class="text-blue-400 font-bold text-lg mb-2">T</div>
            <div class="font-bold text-white mb-1">Task</div>
            <div class="text-slate-400">"My goal was to bring p99 latency under 800ms."</div>
        </div>

        <div class="p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition">
            <div class="text-blue-400 font-bold text-lg mb-2">A</div>
            <div class="font-bold text-white mb-1">Action</div>
            <div class="text-slate-400">"I implemented semantic caching with Redis and moved embeddings to the edge."</div>
        </div>

        <div class="p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition">
            <div class="text-blue-400 font-bold text-lg mb-2">R</div>
            <div class="font-bold text-white mb-1">Result</div>
            <div class="text-slate-400">"Latency dropped to 200ms, and API costs fell by 40%."</div>
        </div>

    </div>
  </div>

  <!-- Artifacts -->
  <div class="p-6 bg-[#0a0a0a] border border-slate-800 rounded-xl">
      <h4 class="font-bold text-white mb-4">Where to tell the story?</h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-400">
          <div>
              <strong class="text-white block mb-1">1. The README</strong>
              Don't just write setup instructions. Write a "Case Study" at the top. Problem vs Solution.
          </div>
          <div>
              <strong class="text-white block mb-1">2. The Resume</strong>
              Bullet points should be "Result-first". <br><em>"Reduced X by Y% using Z."</em>
          </div>
          <div>
              <strong class="text-white block mb-1">3. The Interview</strong>
              When asked "Tell me about this project", do not start with "I used React". Start with "I solved X".
          </div>
      </div>
  </div>

</div>
"""

# Lesson 15.9: Portfolio
content_15_9 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <div class="text-center py-8">
    <div class="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-6 text-4xl shadow-[0_0_50px_rgba(255,255,255,0.1)]">📌</div>
    <h2 class="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 mb-6">
        The "Pinned" Strategy
    </h2>
    <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Recruiters look at your GitHub for exactly 15 seconds. Make them count.
    </p>
  </div>

  <!-- The 3 Pillars -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- 1. The Capstone -->
      <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl hover:border-emerald-500/50 transition group">
          <div class="text-emerald-400 font-bold mb-2 text-sm uppercase tracking-wider">01. The Product</div>
          <h3 class="font-bold text-white mb-2 text-lg">The "Serious" Capstone</h3>
          <p class="text-xs text-slate-400 leading-relaxed mb-4">
              Your "Magnum Opus". A full-stack, deployed, production-ready app.
          </p>
          <div class="p-3 bg-black rounded border border-slate-800 text-[10px] font-mono text-emerald-300">
              ✓ Live URL (Vercel)<br>
              ✓ Demo Video<br>
              ✓ User Auth
          </div>
      </div>

      <!-- 2. The Deep Dive -->
      <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl hover:border-purple-500/50 transition group">
          <div class="text-purple-400 font-bold mb-2 text-sm uppercase tracking-wider">02. The Deep Dive</div>
          <h3 class="font-bold text-white mb-2 text-lg">The Technical Experiment</h3>
          <p class="text-xs text-slate-400 leading-relaxed mb-4">
              Show you understand the "Magic". Don't just import `langchain`. Build it.
          </p>
          <div class="p-3 bg-black rounded border border-slate-800 text-[10px] font-mono text-purple-300">
              ✓ "I wrote a Vector DB from scratch in Rust"<br>
              ✓ "I fine-tuned Llama 3 on my MacBook"
          </div>
      </div>

      <!-- 3. The Contribution -->
      <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl hover:border-blue-500/50 transition group">
          <div class="text-blue-400 font-bold mb-2 text-sm uppercase tracking-wider">03. The Community</div>
          <h3 class="font-bold text-white mb-2 text-lg">Open Source PR</h3>
          <p class="text-xs text-slate-400 leading-relaxed mb-4">
              Prove you can read other people's code. Documentation fixes count!
          </p>
          <div class="p-3 bg-black rounded border border-slate-800 text-[10px] font-mono text-blue-300">
              ✓ Merged PR to `langchain`<br>
              ✓ Merged PR to `vercel/ai`
          </div>
      </div>

  </div>

  <!-- The "Build in Public" Section -->
  <div class="bg-gradient-to-r from-slate-900 to-black rounded-2xl p-8 border border-white/10 relative overflow-hidden">
      <h3 class="text-2xl font-bold text-white mb-6">Marketing Your Work</h3>
      <div class="flex flex-col md:flex-row gap-8">
          <div class="flex-1">
              <h4 class="font-bold text-slate-200 mb-2">The LinkedIn Post</h4>
              <div class="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-300 font-mono">
                  "I just shipped [Project].<br><br>
                  Problem: RAG was too slow.<br>
                  Solution: Implemented Optimistic UI + Edge Caching.<br>
                  Result: 400ms latency (down from 2s).<br><br>
                  Stack: Next.js, Redis, Gemini.<br>
                  Link in comments 👇"
              </div>
          </div>
           <div class="flex-1">
              <h4 class="font-bold text-slate-200 mb-2">The "X" (Twitter) Launch</h4>
              <div class="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-300 font-mono">
                  [Video Attachment]<br><br>
                  "Weekend build: An AI that critiques your PRs before your boss does.<br><br>
                  Using AST parsing to understand context across files.<br><br>
                  Repo: github.com/..."
              </div>
          </div>
      </div>
  </div>

</div>
"""

# Lesson 15.10: Wrap-up
content_15_10 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <div class="text-center py-12 bg-gradient-to-b from-slate-900 to-black rounded-3xl border border-slate-800 relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    <div class="relative z-10">
        <div class="inline-block p-6 rounded-full bg-white/5 border border-white/10 mb-6 text-6xl shadow-[0_0_80px_rgba(16,185,129,0.2)]">🎓</div>
        <h2 class="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6 tracking-tight">
            From Student to <br> GenAI Engineer
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The tutorials end here. <span class="text-white font-bold">The engineering begins.</span>
        </p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Shift 1 -->
      <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl hover:border-emerald-500/50 transition duration-300">
          <h3 class="font-bold text-white mb-2 text-lg">Shift 1: The Source</h3>
          <div class="flex flex-col gap-2 text-sm text-slate-400">
              <div class="flex justify-between">
                  <span class="text-red-400 line-through">Youtube Tutorials</span>
                  <span>⛔</span>
              </div>
              <div class="h-px bg-slate-800 w-full"></div>
              <div class="flex justify-between items-center">
                  <span class="text-emerald-400 font-bold">Documentation & Research Papers</span>
                  <span>✅</span>
              </div>
          </div>
      </div>

      <!-- Shift 2 -->
      <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl hover:border-emerald-500/50 transition duration-300">
          <h3 class="font-bold text-white mb-2 text-lg">Shift 2: The Goal</h3>
          <div class="flex flex-col gap-2 text-sm text-slate-400">
              <div class="flex justify-between">
                  <span class="text-red-400 line-through">"It Runs"</span>
                  <span>⛔</span>
              </div>
              <div class="h-px bg-slate-800 w-full"></div>
              <div class="flex justify-between items-center">
                  <span class="text-emerald-400 font-bold">"It Scales" (Latency/Cost)</span>
                  <span>✅</span>
              </div>
          </div>
      </div>

      <!-- Shift 3 -->
      <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl hover:border-emerald-500/50 transition duration-300">
          <h3 class="font-bold text-white mb-2 text-lg">Shift 3: The Identity</h3>
          <div class="flex flex-col gap-2 text-sm text-slate-400">
              <div class="flex justify-between">
                  <span class="text-red-400 line-through">"Coder"</span>
                  <span>⛔</span>
              </div>
              <div class="h-px bg-slate-800 w-full"></div>
              <div class="flex justify-between items-center">
                  <span class="text-emerald-400 font-bold">"Product Builder"</span>
                  <span>✅</span>
              </div>
          </div>
      </div>

  </div>

  <div class="p-8 bg-[#0a0a0a] border border-slate-800 rounded-xl font-mono text-xs md:text-sm text-slate-300 relative overflow-hidden group">
      <div class="absolute top-0 right-0 p-2 text-slate-600 font-bold group-hover:text-emerald-500 transition">life_algorithm.py</div>
      
      <div class="leading-loose">
          <span class="text-purple-400">def</span> <span class="text-yellow-200">become_senior_engineer</span>():<br>
          &nbsp;&nbsp;<span class="text-purple-400">while</span> <span class="text-blue-300">True</span>:<br>
          &nbsp;&nbsp;&nbsp;&nbsp;project = find_annoying_problem()<br>
          &nbsp;&nbsp;&nbsp;&nbsp;<br>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-slate-500"># Don't ask for permission. Just build.</span><br>
          &nbsp;&nbsp;&nbsp;&nbsp;solution = build_mvp(project, stack=<span class="text-green-300">"fast"</span>)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;<br>
          &nbsp;&nbsp;&nbsp;&nbsp;users = launch_on_twitter(solution)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> users > <span class="text-orange-300">100</span>:<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;optimize_latency(solution)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raise_seed_round()<br>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">else</span>:<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;learn_from_failure()<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-emerald-400"># The only failure is stopping.</span>
      </div>
  </div>

  <div class="text-center">
      <p class="text-slate-500 text-sm mb-4">You are ready. Go build the future.</p>
  </div>

</div>
"""

lessons_map = {
    "genai-15-1": content_15_1,
    "genai-15-2": content_15_2, 
    "genai-15-3": content_15_3, 
    "genai-15-4": content_15_4, 
    "genai-15-5": content_15_5,
    "genai-15-6": content_15_6,
    "genai-15-7": content_15_7,
    "genai-15-8": content_15_8,
    "genai-15-9": content_15_9,
    "genai-15-10": content_15_10,
}

file_path = 'lib/course-data.ts'

print(f"Reading {file_path}...")
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def replace_lesson_content(file_content, lesson_id, new_html):
    pattern = r'(id:\s*["\']' + re.escape(lesson_id) + r'["\'][\s\S]*?content:\s*`)([\s\S]*?)(`)'
    match = re.search(pattern, file_content)
    if not match:
        print(f"Warning: Could not find lesson {lesson_id}")
        return file_content
    
    print(f"Hyper-Enhancing content for {lesson_id}...")
    safe_new_html = new_html.replace('`', '\\`')
    start_idx = match.start(2)
    end_idx = match.end(2)
    return file_content[:start_idx] + safe_new_html + file_content[end_idx:]

current_content = content
for lid, html in lessons_map.items():
    current_content = replace_lesson_content(current_content, lid, html)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(current_content)

print("Success! Module 15 Hyper-Enhanced.")
