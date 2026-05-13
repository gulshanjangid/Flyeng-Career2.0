
# ------------------------------------------------------------------
# MODULE 16: AI ECOSYSTEM & CAREERS (PREMIUM GENERATION)
# ------------------------------------------------------------------

# 16.1 2026 AI Wars
content_16_1 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Hero Section: The Fall of the Titan -->
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-black to-slate-900 border border-red-500/20 p-10">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl">🚨</div>
    <div class="relative z-10">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono mb-6 animate-pulse">
        <span>DEFCON 1 // DECEMBER 2026</span>
      </div>
      <h2 class="text-4xl font-extrabold text-white mb-6 leading-tight">
        OpenAI's "Code Red": <br>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">The Innovator's Dilemma</span>
      </h2>
      <p class="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
        Once the unassailable king, OpenAI is now fighting for survival. With <strong>$8B in annual compute losses</strong> and a stagnant GPT-5 architecture, the "Code Red" memo leaked in late 2024 revealed a company paralyzed by safety bureaucracy while competitors specialized.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm border-t border-white/10 pt-6">
        <div>
          <strong class="text-red-400 block mb-1">The Bottleneck</strong>
          <p class="text-slate-400">Diminishing returns on purely scaling parameters (The 100T Parameter plateau). Data exhaustion prevents linear gains.</p>
        </div>
        <div>
          <strong class="text-orange-400 block mb-1">The Strategic Bloat</strong>
          <p class="text-slate-400">Trying to be "everything to everyone" (Voice + Video + Search + Code) allowed focused rivals to strip-mine their user base.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- The New God-Tier Models (2026 Rankings) -->
  <div class="space-y-8">
    <div class="flex items-center gap-4">
      <div class="h-px bg-slate-800 flex-1"></div>
      <span class="text-slate-500 font-mono text-xs tracking-widest uppercase">The 2026 Frontier Leaderboard</span>
      <div class="h-px bg-slate-800 flex-1"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

      <!-- Google Gemini 3 Pro -->
      <div class="group relative bg-[#0a0a0a] p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
        <div class="absolute top-4 right-4">
            <span class="text-xs font-bold bg-blue-900/30 text-blue-400 px-2 py-1 rounded border border-blue-500/20">#1 OVERALL</span>
        </div>
        <h3 class="text-2xl font-bold text-white mb-1">Gemini 3 Pro</h3>
        <p class="text-xs text-slate-500 font-mono mb-4">Google DeepMind</p>
        <div class="space-y-3">
            <p class="text-sm text-slate-300">
                The first true <strong>"Infinite Context"</strong> model. The 2.5 Ultra was a prototype; Gemini 3 Pro introduces <strong>Neural Memory</strong>, allowing it to retain 100M+ tokens of active state without re-ingesting content.
            </p>
            <div class="flex flex-wrap gap-2 text-[10px] font-mono text-blue-300">
                <span class="bg-blue-900/20 px-2 py-1 rounded">Native Video 60fps</span>
                <span class="bg-blue-900/20 px-2 py-1 rounded">Reasoning: 98.4 (MMLU)</span>
            </div>
        </div>
      </div>

      <!-- xAI Grok 4.1 -->
      <div class="group relative bg-[#0a0a0a] p-6 rounded-2xl border border-slate-800 hover:border-white/50 transition-all duration-300">
        <div class="absolute top-4 right-4">
            <span class="text-xs font-bold bg-slate-800 text-white px-2 py-1 rounded border border-slate-600">#1 PHYSICS</span>
        </div>
        <h3 class="text-2xl font-bold text-white mb-1">Grok 4.1</h3>
        <p class="text-xs text-slate-500 font-mono mb-4">xAI (Elon Musk)</p>
        <div class="space-y-3">
            <p class="text-sm text-slate-300">
                Trained on the <strong>Real-Time Pulse of Humanity (X/Twitter)</strong> and Tesla's FSD video data. It understands <em>causality</em> better than any other model due to its grounding in physical world simulation data.
            </p>
            <div class="flex flex-wrap gap-2 text-[10px] font-mono text-slate-300">
                <span class="bg-slate-800 px-2 py-1 rounded">Uncensored</span>
                <span class="bg-slate-800 px-2 py-1 rounded">Real-Time Search</span>
            </div>
        </div>
      </div>

       <!-- Anthropic Claude 4.5 -->
      <div class="group relative bg-[#0a0a0a] p-6 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300">
        <div class="absolute top-4 right-4">
            <span class="text-xs font-bold bg-amber-900/30 text-amber-400 px-2 py-1 rounded border border-amber-500/20">#1 CODING</span>
        </div>
        <h3 class="text-2xl font-bold text-white mb-1">Claude 4.5 Opus</h3>
        <p class="text-xs text-slate-500 font-mono mb-4">Anthropic</p>
        <div class="space-y-3">
            <p class="text-sm text-slate-300">
                The "Developer's Darling". Unlike GPT-5.1 which tries to be concise, Claude 4.5 Opus writes <strong>production-ready, verbose, commented code</strong>. It has "Character", making it the default engine for Agentic Frameworks (Devin, Windsurf).
            </p>
            <div class="flex flex-wrap gap-2 text-[10px] font-mono text-amber-300">
                <span class="bg-amber-900/20 px-2 py-1 rounded">1M Output Token Limit</span>
                <span class="bg-amber-900/20 px-2 py-1 rounded">System prompts > 50k</span>
            </div>
        </div>
      </div>

      <!-- OpenAI GPT-5.1 -->
      <div class="group relative bg-[#0a0a0a] p-6 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-all duration-300">
        <div class="absolute top-4 right-4">
            <span class="text-xs font-bold bg-green-900/30 text-green-400 px-2 py-1 rounded border border-green-500/20">THE INCUMBENT</span>
        </div>
        <h3 class="text-2xl font-bold text-white mb-1">GPT-5.1</h3>
        <p class="text-xs text-slate-500 font-mono mb-4">OpenAI</p>
        <div class="space-y-3">
            <p class="text-sm text-slate-300">
                A massive "Mixture of Experts" (MoE) system that feels closer to an operating system than a chatbot. While powerful, it struggles with <strong>"Lazy Inference"</strong>—often refusing to complete complex tasks to save compute costs (the main driver of their losses).
            </p>
            <div class="flex flex-wrap gap-2 text-[10px] font-mono text-green-300">
                <span class="bg-green-900/20 px-2 py-1 rounded">Voice Mode (Her)</span>
                <span class="bg-green-900/20 px-2 py-1 rounded">Integration Dominance</span>
            </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Deep Dive Theory: The "Nothing" Theory -->
  <div class="bg-slate-900 rounded-xl p-8 border-l-4 border-purple-500 mt-8">
    <h3 class="text-2xl font-bold text-white mb-4">Theoretical Deep Dive: The Vanishing Gradient of Innovation</h3>
    <div class="prose prose-invert max-w-none text-slate-400 space-y-4">
        <p>
            Why are we seeing "diminishing returns"? The <strong>"Data Exhaustion Theory"</strong> (2024) posited that we ran out of human text.
        </p>
        <p>
            The 2026 reality is different. We are hitting the <strong>"Evaluation Wall"</strong>.
        </p>
        <ul class="list-disc list-inside space-y-2 text-slate-300">
            <li><strong>The Paradox of Supervision:</strong> To train a model smarter than a human (superintelligence), a human cannot be the one grading it. If we can't grade it, we can't compute a Loss Function.</li>
            <li><strong>Synthetic Loop Collapse:</strong> GPT-5.1 trained on GPT-4 output becomes <em>smoother</em> but ceases to generate <em>novelty</em>. It's an entropy death spiral.</li>
            <li><strong>The "Reasoning" Illusion:</strong> Models like Grok 4.1 aren't "thinking"; they are retrieving <em>sparse causal chains</em> from massive simulation data. The industry is pivoting from "Language Modeling" to "World Modeling" to escape this trap.</li>
        </ul>
    </div>
  </div>

</div>
"""

# 16.2 Dev Environments
content_16_2 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Hero Section -->
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950 to-slate-900 border border-indigo-500/20 p-10">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl">⌨️</div>
    <div class="relative z-10">
      <h2 class="text-4xl font-extrabold text-white mb-6 leading-tight">
        The IDE is Dead. <br>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Long Live the Agent.</span>
      </h2>
      <p class="text-lg text-slate-300 mb-6 max-w-3xl">
        In 2023, we had "Copilots" (Autocomplete). In 2026, we have <strong>"Agentic Editors"</strong>. You no longer type code; you review <em>diffs</em> generated by an AI that understands your entire repository's dependency graph.
      </p>
      
      <!-- The Paradigm Shift Badge -->
      <div class="inline-flex gap-4">
        <div class="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
            <span class="block text-[10px] text-slate-500 uppercase tracking-widest">Old Way</span>
            <span class="text-sm font-mono text-slate-400">Cmd+Space -> "StackOverflow"</span>
        </div>
        <div class="flex items-center text-indigo-500">➜</div>
        <div class="px-4 py-2 bg-indigo-900/30 rounded-lg border border-indigo-500/50">
            <span class="block text-[10px] text-indigo-400 uppercase tracking-widest">2026 Way</span>
            <span class="text-sm font-mono text-white">Cmd+K -> "Refactor Auth"</span>
        </div>
      </div>
    </div>
  </div>

  <!-- The Big Three: IDE Wars -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
    <!-- Cursor -->
    <div class="group p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
        <div class="text-3xl mb-4">🖱️</div>
        <h3 class="text-xl font-bold text-white mb-2">Cursor</h3>
        <span class="inline-block px-2 py-1 bg-indigo-900/30 text-indigo-300 text-[10px] font-bold rounded mb-4">THE REFACTORER</span>
        <p class="text-xs text-slate-400 mb-4 h-12">
            The king of "Composer Mode" (Cmd+I). It indexes your codebase using local embeddings. Ideal for <strong>Heavy Engineering</strong> and complex refactors across 20+ files.
        </p>
        <ul class="space-y-1 text-[10px] font-mono text-slate-500">
            <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Tab-Predicts next edit</li>
            <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Local Privacy Mode</li>
        </ul>
    </div>

    <!-- Windsurf -->
    <div class="group p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all duration-300">
        <div class="text-3xl mb-4">🏄‍♂️</div>
        <h3 class="text-xl font-bold text-white mb-2">Windsurf</h3>
        <span class="inline-block px-2 py-1 bg-teal-900/30 text-teal-300 text-[10px] font-bold rounded mb-4">THE CONTEXT AWARE</span>
        <p class="text-xs text-slate-400 mb-4 h-12">
            Built by Codeium. Features "Cascade" flow which knows <em>what you were doing yesterday</em>. It acts more like a pair programmer that remembers state than a stateless tool.
        </p>
        <ul class="space-y-1 text-[10px] font-mono text-slate-500">
            <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Deep Context Awareness</li>
            <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Multi-Repo understanding</li>
        </ul>
    </div>

    <!-- Bolt / Lovable -->
    <div class="group p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300">
        <div class="text-3xl mb-4">⚡</div>
        <h3 class="text-xl font-bold text-white mb-2">Bolt.new</h3>
        <span class="inline-block px-2 py-1 bg-orange-900/30 text-orange-300 text-[10px] font-bold rounded mb-4">THE PROTOTYPER</span>
        <p class="text-xs text-slate-400 mb-4 h-12">
            Browser-based full-stack generator. "Text to Deployed App". Perfect for <strong>Greenfield</strong> projects (starting from scratch) but struggles with legacy enterprise code.
        </p>
        <ul class="space-y-1 text-[10px] font-mono text-slate-500">
            <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Instant Deployment</li>
            <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Zero Config Setup</li>
        </ul>
    </div>

  </div>

  <!-- Section 2: Agentic Terminals -->
  <div class="mt-8 bg-slate-900 rounded-2xl p-8 border border-slate-700">
    <div class="flex items-center justify-between mb-6">
        <div>
            <h3 class="text-2xl font-bold text-white">The Terminal Gets Brains</h3>
            <p class="text-sm text-slate-400">Why memorize <code>tar -xzvf</code> when you can just ask?</p>
        </div>
        <div class="text-4xl opacity-20">📟</div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Warp -->
        <div>
            <h4 class="font-bold text-white text-sm mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-cyan-500"></span>
                Warp
            </h4>
            <div class="font-mono text-xs bg-black p-4 rounded-lg text-slate-300 border border-slate-800">
                <span class="text-green-500">➜</span> <span class="text-cyan-400">~</span> Find all PDF files larger than 5MB and move them to /backup<br>
                <span class="text-slate-500 mt-2 block"># Suggestion:</span>
                <span class="text-yellow-300">find . -name "*.pdf" -size +5M -exec mv {} ./backup \;</span>
            </div>
        </div>

        <!-- Wave -->
        <div>
             <h4 class="font-bold text-white text-sm mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                Wave (Open Source)
            </h4>
             <div class="font-mono text-xs bg-black p-4 rounded-lg text-slate-300 border border-slate-800">
                <span class="text-green-500">➜</span> <span class="text-purple-400">~</span> Render this JSON log as a graph<br>
                <div class="mt-2 h-8 w-full bg-purple-900/20 rounded flex items-center justify-center text-[10px] text-purple-300">
                    [ Interactive Widget Rendered inline ]
                </div>
            </div>
        </div>

    </div>
  </div>

  <!-- Deep Dive: The "Agentic Loop" -->
  <div class="p-6 bg-gradient-to-r from-emerald-900/10 to-teal-900/10 border-l-4 border-emerald-500 rounded-r-xl">
    <h3 class="text-lg font-bold text-white mb-2">The Concept: The "Agentic Loop"</h3>
    <p class="text-sm text-slate-400 mb-4">
        The shift from IDE to Agent Environment is defined by one thing: <strong>The Loop</strong>.
    </p>
    <div class="flex items-center gap-2 overflow-x-auto font-mono text-xs text-emerald-300 bg-black/30 p-4 rounded-lg">
        <span>1. Plan (Read Files)</span>
        <span class="text-slate-500">-></span>
        <span>2. Act (Write Code)</span>
        <span class="text-slate-500">-></span>
        <span class="font-bold text-white">3. Verify (Run Terminal)</span>
        <span class="text-slate-500">-></span>
        <span class="text-red-400">4. Fix (If Error)</span>
        <span class="text-slate-500">-></span>
        <span class="text-green-500">5. Commit</span>
    </div>
    <p class="text-xs text-slate-500 mt-2">
        Standard Copilots stop at step 2. Agents complete the loop.
    </p>
  </div>

</div>
"""

# 16.3 Automations (n8n)
content_16_3 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Hero Section -->
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-950 via-purple-950 to-slate-900 border border-pink-500/20 p-10">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl">🧩</div>
    <div class="relative z-10">
      <h2 class="text-4xl font-extrabold text-white mb-6 leading-tight">
        The Death of Glue Code <br>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">& The Rise of Visual Agents</span>
      </h2>
      <p class="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
        Writing Python scripts to move JSON from Stripe to Slack is <strong>dead</strong>. The modern AI Engineer uses <strong>Visual Orchestration</strong> for the plumbing and <strong>LLMs</strong> for the logic.
      </p>

      <div class="flex items-center gap-6 text-sm">
        <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            <span class="text-slate-400 line-through">cron_job.py</span>
        </div>
        <div class="flex items-center gap-2">
            <span class="text-pink-500">➜</span>
            <span class="text-white font-bold">n8n Workflow</span>
        </div>
        <div class="text-xs text-slate-500 border-l border-slate-700 pl-4">
            "If it's deterministic, code it. If it's messy, agent it."
        </div>
      </div>
    </div>
  </div>

  <!-- The Comparison: n8n vs Zapier -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <!-- Zapier -->
    <div class="p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 opacity-60 hover:opacity-100 transition-opacity">
        <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <span class="text-orange-500">⚡</span> Zapier
        </h3>
        <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest">The Consumer Choice</p>
        <ul class="space-y-2 text-sm text-slate-300">
            <li>❌ Expensive at scale ($$$ per task)</li>
            <li>❌ Closed Source (Cannot self-host)</li>
            <li>✅ 5000+ Pre-built integrations</li>
            <li>✅ "Set and Forget" for non-techies</li>
        </ul>
    </div>

    <!-- n8n -->
    <div class="p-6 bg-[#0a0a0a] rounded-2xl border-2 border-pink-500/50 relative overflow-hidden">
        <div class="absolute top-0 right-0 bg-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl">ENGINEER'S CHOICE</div>
        <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <span class="text-pink-500">☮️</span> n8n
        </h3>
        <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest">The Source-Available Powerhouse</p>
        <ul class="space-y-2 text-sm text-slate-300">
            <li>✅ <strong>Self-Hostable</strong> (Docker / Railway)</li>
            <li>✅ <strong>Raw JSON</strong> Access (No "magic" black boxes)</li>
            <li>✅ <strong>Code Nodes</strong> (Run Python/JS mid-flow)</li>
            <li>✅ <strong>LangChain Integrated</strong> (Native AI Chains)</li>
        </ul>
    </div>

  </div>

  <!-- Anatomy of an Agentic Workflow -->
  <div class="bg-slate-900 rounded-2xl p-8 border border-white/10">
    <h3 class="text-2xl font-bold text-white mb-6">Anatomy of a "Smart" Workflow</h3>
    
    <!-- The Flow Diagram -->
    <div class="relative flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
        
        <!-- Step 1: Trigger -->
        <div class="flex-1 w-full bg-slate-800 p-4 rounded-xl border border-slate-700 relative group">
            <div class="absolute -top-3 left-4 bg-slate-900 px-2 text-slate-500 text-[10px]">TRIGGER</div>
            <div class="text-blue-400 mb-1">Webhook (POST)</div>
            <div class="text-slate-500 truncate">/api/v1/inbound-lead</div>
        </div>

        <div class="text-slate-600">➜</div>

        <!-- Step 2: The Brain -->
        <div class="flex-1 w-full bg-pink-900/20 p-4 rounded-xl border border-pink-500 relative group">
            <div class="absolute -top-3 left-4 bg-slate-900 px-2 text-pink-400 text-[10px]">LLM ROUTER</div>
            <div class="text-white mb-1">AI Agent</div>
            <div class="text-[10px] text-pink-300">
                "Classify this email: Sales, Support, or Spam? Return JSON."
            </div>
        </div>

        <div class="text-slate-600">➜</div>

        <!-- Step 3: Branching Logic -->
        <div class="flex-1 w-full bg-slate-800 p-4 rounded-xl border border-slate-700 relative group">
            <div class="absolute -top-3 left-4 bg-slate-900 px-2 text-slate-500 text-[10px]">SWITCH</div>
            <div class="space-y-2">
                <div class="flex items-center gap-2">
                    <span class="text-green-500">Sales</span>
                    <span class="text-slate-600">-></span>
                    <span class="text-slate-400">HubSpot</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-yellow-500">Support</span>
                    <span class="text-slate-600">-></span>
                    <span class="text-slate-400">Jira</span>
                </div>
            </div>
        </div>

    </div>

    <!-- The "Escape Hatch" Alert -->
    <div class="mt-8 p-4 bg-indigo-900/10 border border-indigo-500/30 rounded-lg flex items-start gap-3">
        <span class="text-xl">💡</span>
        <div>
            <h4 class="text-indigo-300 font-bold text-sm">The "Function Node" Superpower</h4>
            <p class="text-xs text-slate-400 mt-1">
                Visual tools fail when logic gets complex. n8n lets you drop a <strong>JavaScript/Python node</strong> anywhere to write raw code, loop over arrays, or transform data using libraries like `pandas`. You are never locked in.
            </p>
        </div>
    </div>

  </div>

</div>
"""

# 16.4 RAG Real World
content_16_4 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Hero Section -->
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 to-slate-900 border border-emerald-500/20 p-10">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl">📚</div>
    <div class="relative z-10">
      <h2 class="text-4xl font-extrabold text-white mb-6 leading-tight">
        RAG is Easy. <br>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Production RAG is Hard.</span>
      </h2>
      <p class="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
        Building a "Chat with PDF" demo takes 5 minutes. Making it work on 10,000 messy contracts with 99% accuracy requires the <strong>"Advanced RAG Stack"</strong>.
      </p>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
        <div class="bg-slate-800 p-3 rounded border border-slate-700">
            <div class="text-slate-500 mb-1">Vector DB</div>
            <div class="text-emerald-400 font-bold">Qdrant / Weaviate</div>
        </div>
        <div class="bg-slate-800 p-3 rounded border border-slate-700">
            <div class="text-slate-500 mb-1">Chunking</div>
            <div class="text-emerald-400 font-bold">Unstructured.io</div>
        </div>
        <div class="bg-slate-800 p-3 rounded border border-slate-700">
            <div class="text-slate-500 mb-1">Re-Ranking</div>
            <div class="text-emerald-400 font-bold">Cohere Rerank</div>
        </div>
        <div class="bg-slate-800 p-3 rounded border border-slate-700">
            <div class="text-slate-500 mb-1">Evaluation</div>
            <div class="text-emerald-400 font-bold">Ragas / Arize</div>
        </div>
      </div>
    </div>
  </div>

  <!-- The "RAG 2.0" Architecture -->
  <div class="bg-slate-900 rounded-2xl p-8 border border-slate-700">
    <h3 class="text-2xl font-bold text-white mb-6">The "Hybrid Search" Pipeline</h3>
    
    <div class="flex flex-col gap-4">
        
        <!-- Input -->
        <div class="flex items-center gap-4">
            <div class="w-24 text-right text-xs text-slate-500 font-mono">User Query</div>
            <div class="flex-1 bg-black p-3 rounded text-slate-300 border border-slate-800">
                "Find the indemnification clause for wild boars."
            </div>
        </div>

        <!-- Step 1: Query Expansion -->
        <div class="flex items-center gap-4">
            <div class="w-24 text-right text-xs text-blue-500 font-mono">1. Expand</div>
            <div class="flex-1 bg-blue-900/10 p-3 rounded text-slate-300 border border-blue-900/50 flex gap-2">
                <span class="bg-blue-900/40 px-2 py-1 rounded text-xs">wild boars</span>
                <span class="bg-blue-900/40 px-2 py-1 rounded text-xs">animal damage</span>
                <span class="bg-blue-900/40 px-2 py-1 rounded text-xs">liability</span>
            </div>
        </div>

        <!-- Step 2: Hybrid Retrieval -->
        <div class="flex items-center gap-4">
            <div class="w-24 text-right text-xs text-purple-500 font-mono">2. Retrieve</div>
            <div class="flex-1 grid grid-cols-2 gap-2">
                 <div class="bg-purple-900/10 p-3 rounded text-slate-300 border border-purple-900/50 text-center">
                    <div class="text-[10px] text-purple-400 uppercase font-bold">Keyword (BM25)</div>
                    <div class="text-xs mt-1">Exact match for "Boar"</div>
                 </div>
                 <div class="bg-purple-900/10 p-3 rounded text-slate-300 border border-purple-900/50 text-center">
                    <div class="text-[10px] text-purple-400 uppercase font-bold">Vector (Cosine)</div>
                    <div class="text-xs mt-1">Concept match for "Livestock"</div>
                 </div>
            </div>
        </div>

        <!-- Step 3: Re-Ranking -->
        <div class="flex items-center gap-4">
            <div class="w-24 text-right text-xs text-orange-500 font-mono">3. Re-Rank</div>
            <div class="flex-1 bg-orange-900/10 p-3 rounded text-slate-300 border border-orange-900/50">
                <div class="flex items-center justify-between text-xs mb-1">
                    <span>Cross-Encoder Score (Cohere)</span>
                    <span class="text-orange-400 font-bold">Top 3 Selected</span>
                </div>
                <div class="w-full bg-slate-800 h-1 rounded overflow-hidden">
                    <div class="bg-orange-500 h-full w-3/4"></div>
                </div>
            </div>
        </div>

    </div>
  </div>

  <!-- Deep Dive: GraphRAG -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="space-y-4">
        <h3 class="text-xl font-bold text-white">Why Vectors Aren't Enough</h3>
        <p class="text-slate-400 text-sm">
            Vector search finds <em>similar</em> chunks. But it fails at <strong>Multi-Hop Reasoning</strong>.
        </p>
        <div class="p-4 bg-red-900/10 border-l-4 border-red-500 rounded-r">
            <p class="text-xs text-red-200">
                <strong>Failure Example:</strong> "Who is the CEO of the company that acquired Slack?" <br>
                <em>Vector search looks for "Slack" and "Acquisition" but misses the link to "Salesforce" -> "Marc Benioff".</em>
            </p>
        </div>
    </div>

    <div class="space-y-4">
        <h3 class="text-xl font-bold text-white">Enter GraphRAG</h3>
        <p class="text-slate-400 text-sm">
            Microsoft's GraphRAG uses an LLM to build a <strong>Knowledge Graph</strong> during indexing. It connects entities (Nodes) ensuring the retrieval path exists.
        </p>
        <div class="aspect-video bg-black rounded-lg border border-slate-700 flex items-center justify-center">
             <div class="text-center">
                <div class="flex items-center gap-4 justify-center text-xs">
                     <div class="bg-slate-800 p-2 rounded-full border border-slate-600">Company A</div>
                     <span class="text-slate-500">---- acquired ---></span>
                     <div class="bg-slate-800 p-2 rounded-full border border-slate-600">Company B</div>
                </div>
             </div>
        </div>
    </div>
  </div>

</div>
"""

# 16.5 Edge AI
content_16_5 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Hero Section -->
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-950 to-slate-900 border border-orange-500/20 p-10">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl">📱</div>
    <div class="relative z-10">
      <h2 class="text-4xl font-extrabold text-white mb-6 leading-tight">
        The Future is Local. <br>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">Edge & On-Device AI.</span>
      </h2>
      <p class="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
        Cloud inference is slow, expensive, and leaks privacy. The next billion users will run customized, <strong>Small Language Models (SLMs)</strong> directly on their phones and laptops.
      </p>

      <div class="grid grid-cols-3 gap-6 text-center max-w-2xl bg-black/30 rounded-xl p-4 border border-white/5">
        <div>
            <div class="text-2xl font-bold text-white mb-1">0ms</div>
            <div class="text-[10px] text-slate-500 uppercase tracking-widest">Network Latency</div>
        </div>
        <div>
            <div class="text-2xl font-bold text-white mb-1">$0.00</div>
            <div class="text-[10px] text-slate-500 uppercase tracking-widest">Inference Cost</div>
        </div>
        <div>
            <div class="text-2xl font-bold text-white mb-1">100%</div>
            <div class="text-[10px] text-slate-500 uppercase tracking-widest">Privacy (Air-Gapped)</div>
        </div>
      </div>
    </div>
  </div>

  <!-- The "Small Model" Revolution -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <!-- Phi-3 -->
    <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
        <h3 class="text-xl font-bold text-white mb-2">Phi-3 (Mini)</h3>
        <span class="inline-block px-2 py-1 bg-blue-900/30 text-blue-300 text-[10px] font-bold rounded mb-4">MICROSOFT</span>
        <p class="text-sm text-slate-400">
            3.8B parameters. Can run on an iPhone 15. Trained on "Textbook Quality" data, it outperforms GPT-3.5 in reasoning while being 50x smaller.
        </p>
    </div>

    <!-- Llama 3 8B -->
    <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
        <h3 class="text-xl font-bold text-white mb-2">Llama 3 (8B)</h3>
        <span class="inline-block px-2 py-1 bg-blue-900/30 text-blue-300 text-[10px] font-bold rounded mb-4">META</span>
        <p class="text-sm text-slate-400">
            The "Linux of AI". The industry standard for local fine-tuning. If you are building a custom agent for a client to run locally, you start here.
        </p>
    </div>

    <!-- Gemma 2 -->
    <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
        <h3 class="text-xl font-bold text-white mb-2">Gemma 2 (2B)</h3>
        <span class="inline-block px-2 py-1 bg-blue-900/30 text-blue-300 text-[10px] font-bold rounded mb-4">GOOGLE</span>
        <p class="text-sm text-slate-400">
            Open weights from DeepMind. incredibly efficient. Perfect for "Helper Agents" that live in the browser tab (Chrome built-in AI).
        </p>
    </div>

  </div>

  <!-- The Local Stack -->
  <div class="bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 border border-white/10">
    <h3 class="text-2xl font-bold text-white mb-6">The "Localhost" Stack</h3>
    
    <div class="space-y-6">
        
        <!-- Ollama -->
        <div class="flex items-start gap-4">
            <div class="p-3 bg-slate-800 rounded-lg text-2xl">🦙</div>
            <div>
                <h4 class="text-white font-bold">Ollama</h4>
                <p class="text-sm text-slate-400 mb-2">The "Docker" for LLMs. It abstracts away the GPU drivers (CUDA/Metal) and gives you a simple API.</p>
                <code class="text-xs font-mono bg-black px-3 py-1 rounded text-green-400">ollama run llama3</code>
            </div>
        </div>

        <!-- MLX -->
        <div class="flex items-start gap-4">
            <div class="p-3 bg-slate-800 rounded-lg text-2xl">🍏</div>
            <div>
                <h4 class="text-white font-bold">MLX (Apple Silicon)</h4>
                <p class="text-sm text-slate-400">
                    A framework designed for <strong>Unified Memory</strong>. It allows a MacBook Pro to train models locally that would normally require an H100 cluster.
                </p>
            </div>
        </div>

        <!-- WebGPU -->
        <div class="flex items-start gap-4">
            <div class="p-3 bg-slate-800 rounded-lg text-2xl">🌐</div>
            <div>
                <h4 class="text-white font-bold">WebLLM / WebGPU</h4>
                <p class="text-sm text-slate-400">
                    Running LLMs <strong>inside the browser tab</strong>. Zero installation for the user. Opens up privacy-first SaaS (Medical/Legal apps).
                </p>
            </div>
        </div>

    </div>
  </div>

  <!-- Multimodal Deep Dive -->
  <div class="mt-8 p-6 bg-purple-900/10 border-l-4 border-purple-500 rounded-r-xl">
    <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-bold text-white">Multimodal: Vision + Language</h3>
        <span class="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded border border-purple-500/20">The Holy Grail</span>
    </div>
    <p class="text-sm text-slate-400 mb-4">
        How does GPT-4 "see"? It's not magic. It uses a <strong>Vision Transformer (ViT)</strong> encoder (like CLIP) to turn pixels into vectors, which are then fed into the LLM just like text tokens.
    </p>
    <div class="grid grid-cols-3 gap-2 text-center text-xs font-mono text-slate-500">
        <div class="bg-black/40 p-2 rounded">Image <br> (Pixels)</div>
        <div class="flex items-center justify-center">➜ CLIP ➜</div>
        <div class="bg-black/40 p-2 rounded">Vectors <br> (Embeddings)</div>
    </div>
  </div>

</div>
"""

# 16.6 Memory & Vector DBs
content_16_6 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Hero Section -->
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-black border border-indigo-500/20 p-10">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl">🧠</div>
    <div class="relative z-10">
      <h2 class="text-4xl font-extrabold text-white mb-6 leading-tight">
        The Context War: <br>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">RAG vs 10 Million Tokens</span>
      </h2>
      <p class="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
        For years, we used Vector DBs (RAG) because models had tiny memories. Now that Gemini 1.5 Pro handles <strong>2 Million Tokens</strong>, do we still need databases?
      </p>

      <div class="flex items-center gap-4 text-xs font-mono">
        <div class="px-4 py-2 bg-slate-800 rounded border border-slate-700">
            <span class="text-slate-500 block mb-1">RAG (Retrieval)</span>
            <span class="text-green-400">Low Latency, Low Cost</span>
        </div>
        <div class="text-slate-500">vs</div>
        <div class="px-4 py-2 bg-indigo-900/30 rounded border border-indigo-500/50">
            <span class="text-indigo-300 block mb-1">Long Context</span>
            <span class="text-white">Perfect Recall, High Cost</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Memory Architectures -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <!-- Short Term: KV Cache -->
    <div class="p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800">
        <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="text-teal-500">⚡</span> Short-Term Memory
        </h3>
        <p class="text-sm text-slate-400 mb-4 h-16">
            <strong>The KV Cache (Key-Value).</strong> This is the GPU RAM that stores the "prefixes" of your conversation.
        </p>
        <div class="bg-teal-900/10 p-3 rounded border border-teal-900/50 text-xs font-mono text-teal-300">
            Issue: Linear growth. 1M token context = 250GB+ VRAM. <br>
            Solution: PagedAttention (vLLM).
        </div>
    </div>

    <!-- Long Term: Vector Store -->
    <div class="p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800">
        <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="text-purple-500">💾</span> Long-Term Memory
        </h3>
        <p class="text-sm text-slate-400 mb-4 h-16">
            <strong>The Vector Database.</strong> Semantic storage of millions of documents. It allows the agent to "remember" facts from months ago.
        </p>
        <div class="bg-purple-900/10 p-3 rounded border border-purple-900/50 text-xs font-mono text-purple-300">
            Query: "Embedding(User Input)"<br>
            Result: Top-K Cosine Similarity.
        </div>
    </div>
  </div>

  <!-- The Vector DB Showdown -->
  <div class="mt-8 bg-slate-900 rounded-2xl p-8 border border-slate-700">
    <h3 class="text-2xl font-bold text-white mb-6">Choosing Your Database</h3>
    
    <div class="overflow-x-auto">
        <table class="w-full text-left text-sm text-slate-400">
            <thead class="bg-black text-slate-200 uppercase font-bold text-xs">
                <tr>
                    <th class="p-4 rounded-tl-lg">Option</th>
                    <th class="p-4">Type</th>
                    <th class="p-4">Best For...</th>
                    <th class="p-4 rounded-tr-lg">Verdict</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
                
                <!-- Pinecone -->
                <tr class="hover:bg-indigo-900/10 transition-colors">
                    <td class="p-4 font-bold text-white">Pinecone</td>
                    <td class="p-4">Serverless (Cloud)</td>
                    <td class="p-4">Startups / Speed</td>
                    <td class="p-4 text-green-400">Easiest to start.</td>
                </tr>

                <!-- Qdrant -->
                <tr class="hover:bg-indigo-900/10 transition-colors">
                    <td class="p-4 font-bold text-white">Qdrant</td>
                    <td class="p-4">Go/Rust (Docker)</td>
                    <td class="p-4">Scale / Performance</td>
                    <td class="p-4 text-orange-400">Best Performance.</td>
                </tr>

                <!-- pgvector -->
                <tr class="hover:bg-indigo-900/10 transition-colors">
                    <td class="p-4 font-bold text-white">pgvector</td>
                    <td class="p-4">Postgres Extension</td>
                    <td class="p-4">Simplicity</td>
                    <td class="p-4 text-blue-400">Good Enough for 90%.</td>
                </tr>

            </tbody>
        </table>
    </div>
  </div>

</div>
"""

# 16.7 Safety & Hype
content_16_7 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Hero Section -->
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950 to-slate-900 border border-red-500/20 p-10">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl">🛡️</div>
    <div class="relative z-10">
      <h2 class="text-4xl font-extrabold text-white mb-6 leading-tight">
        The "AI Bubble" & <br>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">The Safety Crisis.</span>
      </h2>
      <p class="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
        Is this the "Dotcom Boom" or the "Crypto Bust"? The truth is in the middle. While NVIDIA prints money, 99% of "GPT Wrapper" startups are dying in the <strong>Trough of Disillusionment</strong>.
      </p>

      <div class="flex items-center gap-4 text-xs font-mono">
        <div class="px-4 py-2 bg-slate-800 rounded border border-slate-700 opacity-50">
            <span class="text-slate-500 block mb-1">2023</span>
            <span class="text-white">"AI will do everything!"</span>
        </div>
        <div class="text-slate-500">➜</div>
        <div class="px-4 py-2 bg-red-900/30 rounded border border-red-500/50">
            <span class="text-red-300 block mb-1">2026 Reality</span>
            <span class="text-white">"It hallucinates & leaks data."</span>
        </div>
      </div>
    </div>
  </div>

  <!-- The 3 Core Risks -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <!-- Model Collapse -->
    <div class="p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 hover:border-red-500/50 transition-colors">
        <h3 class="text-xl font-bold text-white mb-2">1. Model Collapse</h3>
        <p class="text-xs text-red-400 mb-4 font-mono uppercase">THE "HABSBURG AI" PROBLEM</p>
        <p class="text-sm text-slate-400">
            As the web fills with AI-generated slop, new models trained on this data become inbred and degraded. "Novelty" is disappearing from the internet.
        </p>
    </div>

    <!-- Adversarial Attacks -->
    <div class="p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 hover:border-red-500/50 transition-colors">
        <h3 class="text-xl font-bold text-white mb-2">2. Prompt Injection</h3>
        <p class="text-xs text-red-400 mb-4 font-mono uppercase">"IGNORE PREVIOUS INSTRUCTIONS"</p>
        <p class="text-sm text-slate-400">
            If you connect an LLM to your SQL database, a user <em>will</em> find a way to make it `DROP TABLE users`. Input sanitization is now an adversarial game.
        </p>
    </div>

    <!-- Shadow AI -->
    <div class="p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 hover:border-red-500/50 transition-colors">
        <h3 class="text-xl font-bold text-white mb-2">3. Shadow AI</h3>
        <p class="text-xs text-red-400 mb-4 font-mono uppercase">DATA LEAKAGE</p>
        <p class="text-sm text-slate-400">
            Employees pasting sensitive PII or trade secrets into public chatbots. This is the #1 Security Risk for Enterprises in 2026.
        </p>
    </div>

  </div>

  <!-- Governance & Guardrails -->
  <div class="mt-8 bg-slate-900 rounded-2xl p-8 border border-white/10">
    <h3 class="text-2xl font-bold text-white mb-6">Defense: The "Guardrails" Stack</h3>
    
    <div class="space-y-4">
        
        <!-- Input Rail -->
        <div class="flex items-center gap-4">
            <div class="w-24 text-right text-xs text-slate-500 font-mono">User Input</div>
            <div class="flex-1 bg-black p-3 rounded text-slate-300 border border-slate-800">
                "How do I build a bomb?"
            </div>
            <span class="text-slate-500">➜</span>
            <div class="bg-red-900/50 text-red-200 px-3 py-1 rounded text-xs font-bold border border-red-500">BLOCKED (Llama Guard)</div>
        </div>

        <!-- Output Rail -->
        <div class="flex items-center gap-4">
            <div class="w-24 text-right text-xs text-slate-500 font-mono">Model Output</div>
            <div class="flex-1 bg-black p-3 rounded text-slate-300 border border-slate-800">
                "The CEO's salary is $5M..."
            </div>
            <span class="text-slate-500">➜</span>
            <div class="bg-orange-900/50 text-orange-200 px-3 py-1 rounded text-xs font-bold border border-orange-500">PII SCRUBBED (Presidio)</div>
        </div>

    </div>
  </div>

  <!-- EU AI Act Warning -->
  <div class="p-6 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl mt-8">
    <h3 class="text-lg font-bold text-white mb-2">Regulatory Reality: The EU AI Act</h3>
    <p class="text-sm text-slate-400">
        If you deploy AI in HR, Healthcare, or Law, you are now in a <strong>"High Risk"</strong> category. You need audit logs, explainability, and human oversight. "Move fast and break things" is illegal.
    </p>
  </div>

</div>
"""

# 16.8 Job Roles
content_16_8 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Hero Section -->
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-500/20 p-10">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl">💼</div>
    <div class="relative z-10">
      <h2 class="text-4xl font-extrabold text-white mb-6 leading-tight">
        "Prompt Engineering" is Dead. <br>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Welcome to AI Engineering.</span>
      </h2>
      <p class="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
        The market has matured. Companies aren't hiring people to "talk to ChatGPT". They are hiring engineers who can <strong>build, evaluate, and scale</strong> agentic systems.
      </p>

      <div class="flex items-center gap-4 text-xs font-mono">
        <div class="px-4 py-2 bg-slate-800 rounded border border-slate-700 opacity-50">
            <span class="text-slate-500 block mb-1">2023 Skill</span>
            <span class="text-white">"I can write good prompts."</span>
        </div>
        <div class="text-slate-500">➜</div>
        <div class="px-4 py-2 bg-blue-900/30 rounded border border-blue-500/50">
            <span class="text-blue-300 block mb-1">2026 Skill</span>
            <span class="text-white">"I can finetune Llama-3 & evaluate it."</span>
        </div>
      </div>
    </div>
  </div>

  <!-- The 3 Key Roles -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <!-- AI Product Engineer -->
    <div class="group p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
        <div class="mb-4 text-3xl">🚀</div>
        <h3 class="text-xl font-bold text-white mb-2">AI Product Engineer</h3>
        <span class="text-[10px] bg-indigo-900/30 text-indigo-300 px-2 py-1 rounded border border-indigo-500/20 mb-4 inline-block">THE BUILDER</span>
        <p class="text-sm text-slate-400 mb-4">
            The evolution of the "Full Stack Dev". You build the UI (Next.js) <em>and</em> the Agent logic (LangChain). You know that UX is the biggest bottleneck, not model intelligence.
        </p>
        <div class="text-xs font-mono text-slate-500 border-t border-slate-800 pt-3">
            Avg Sal: $180k - $250k
        </div>
    </div>

    <!-- AI Systems Engineer -->
    <div class="group p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300">
        <div class="mb-4 text-3xl">🔧</div>
        <h3 class="text-xl font-bold text-white mb-2">AI Systems Engineer</h3>
        <span class="text-[10px] bg-purple-900/30 text-purple-300 px-2 py-1 rounded border border-purple-500/20 mb-4 inline-block">THE PLUMBER</span>
        <p class="text-sm text-slate-400 mb-4">
            Infrastructure focused. You make models run <strong>fast and cheap</strong>. You optimize KV Caches, manage GPU clusters (Kubernetes/Ray), and slash latency to sub-100ms.
        </p>
        <div class="text-xs font-mono text-slate-500 border-t border-slate-800 pt-3">
            Avg Sal: $200k - $300k
        </div>
    </div>

    <!-- Data Curator -->
    <div class="group p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300">
        <div class="mb-4 text-3xl">💎</div>
        <h3 class="text-xl font-bold text-white mb-2">Data Curator</h3>
        <span class="text-[10px] bg-emerald-900/30 text-emerald-300 px-2 py-1 rounded border border-emerald-500/20 mb-4 inline-block">THE REFINER</span>
        <p class="text-sm text-slate-400 mb-4">
            Garbage In, Garbage Out. You are an expert at scraping, cleaning, and synthesizing "Golden Datasets" for fine-tuning. This is the new QA relative to model performance.
        </p>
        <div class="text-xs font-mono text-slate-500 border-t border-slate-800 pt-3">
            Avg Sal: $140k - $200k
        </div>
    </div>

  </div>

  <!-- Portfolio Strategy -->
  <div class="mt-8 bg-slate-900 rounded-2xl p-8 border border-white/10">
    <h3 class="text-2xl font-bold text-white mb-6">How to Get Hired (The Portfolio)</h3>
    <div class="space-y-4">
        
        <div class="flex items-start gap-4">
            <div class="bg-red-900/20 p-2 rounded text-red-500 text-xl font-bold">❌</div>
            <div>
                <h4 class="font-bold text-white">Don't Build: "Another Chatbot"</h4>
                <p class="text-sm text-slate-400">
                    Cloning ChatGPT proves nothing. It's an API call wrapper. Recruiters filter these out immediately.
                </p>
            </div>
        </div>

        <div class="flex items-start gap-4">
            <div class="bg-green-900/20 p-2 rounded text-green-500 text-xl font-bold">✅</div>
            <div>
                <h4 class="font-bold text-white">Do Build: "Vertical Agents"</h4>
                <p class="text-sm text-slate-400">
                    Solve a boring, specific problem. Example: <em>"An agent that scrapes Zillow, calculates ROI based on local tax laws, and emails me a PDF report."</em>
                </p>
            </div>
        </div>

        <div class="flex items-start gap-4">
            <div class="bg-blue-900/20 p-2 rounded text-blue-500 text-xl font-bold">⭐</div>
            <div>
                <h4 class="font-bold text-white">The "Open Source" Hack</h4>
                <p class="text-sm text-slate-400">
                    Curate a dataset (e.g., "10k Legal Contracts") and publish it on HuggingFace with a perfectly fine-tuned Lora adapter. This gets you noticed by Founders instantly.
                </p>
            </div>
        </div>

    </div>
  </div>

</div>
"""

# 16.9 Product Thinking
content_16_9 = """
<div class="space-y-12 font-sans text-slate-200">
  <h2 class="text-3xl font-bold text-white mb-6">Moats in the Age of AI</h2>
  <p class="text-slate-400 mb-8">If everyone has GPT-4, what makes you special?</p>

  <div class="space-y-4">
    <div class="flex items-start gap-4 p-4 bg-black/40 rounded-xl">
        <div class="text-2xl">🏰</div>
```
  <div class="p-6 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl mt-8">
    <h3 class="text-lg font-bold text-white mb-2">Regulatory Reality: The EU AI Act</h3>
    <p class="text-sm text-slate-400">
        If you deploy AI in HR, Healthcare, or Law, you are now in a <strong>"High Risk"</strong> category. You need audit logs, explainability, and human oversight. "Move fast and break things" is illegal.
    </p>
  </div>

</div>
"""

# 16.8 Job Roles
content_16_8 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Hero Section -->
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-500/20 p-10">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl">💼</div>
    <div class="relative z-10">
      <h2 class="text-4xl font-extrabold text-white mb-6 leading-tight">
        "Prompt Engineering" is Dead. <br>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Welcome to AI Engineering.</span>
      </h2>
      <p class="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
        The market has matured. Companies aren't hiring people to "talk to ChatGPT". They are hiring engineers who can <strong>build, evaluate, and scale</strong> agentic systems.
      </p>

      <div class="flex items-center gap-4 text-xs font-mono">
        <div class="px-4 py-2 bg-slate-800 rounded border border-slate-700 opacity-50">
            <span class="text-slate-500 block mb-1">2023 Skill</span>
            <span class="text-white">"I can write good prompts."</span>
        </div>
        <div class="text-slate-500">➜</div>
        <div class="px-4 py-2 bg-blue-900/30 rounded border border-blue-500/50">
            <span class="text-blue-300 block mb-1">2026 Skill</span>
            <span class="text-white">"I can finetune Llama-3 & evaluate it."</span>
        </div>
      </div>
    </div>
  </div>

  <!-- The 3 Key Roles -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <!-- AI Product Engineer -->
    <div class="group p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
        <div class="mb-4 text-3xl">🚀</div>
        <h3 class="text-xl font-bold text-white mb-2">AI Product Engineer</h3>
        <span class="text-[10px] bg-indigo-900/30 text-indigo-300 px-2 py-1 rounded border border-indigo-500/20 mb-4 inline-block">THE BUILDER</span>
        <p class="text-sm text-slate-400 mb-4">
            The evolution of the "Full Stack Dev". You build the UI (Next.js) <em>and</em> the Agent logic (LangChain). You know that UX is the biggest bottleneck, not model intelligence.
        </p>
        <div class="text-xs font-mono text-slate-500 border-t border-slate-800 pt-3">
            Avg Sal: $180k - $250k
        </div>
    </div>

    <!-- AI Systems Engineer -->
    <div class="group p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300">
        <div class="mb-4 text-3xl">🔧</div>
        <h3 class="text-xl font-bold text-white mb-2">AI Systems Engineer</h3>
        <span class="text-[10px] bg-purple-900/30 text-purple-300 px-2 py-1 rounded border border-purple-500/20 mb-4 inline-block">THE PLUMBER</span>
        <p class="text-sm text-slate-400 mb-4">
            Infrastructure focused. You make models run <strong>fast and cheap</strong>. You optimize KV Caches, manage GPU clusters (Kubernetes/Ray), and slash latency to sub-100ms.
        </p>
        <div class="text-xs font-mono text-slate-500 border-t border-slate-800 pt-3">
            Avg Sal: $200k - $300k
        </div>
    </div>

    <!-- Data Curator -->
    <div class="group p-6 bg-[#0a0a0a] rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300">
        <div class="mb-4 text-3xl">💎</div>
        <h3 class="text-xl font-bold text-white mb-2">Data Curator</h3>
        <span class="text-[10px] bg-emerald-900/30 text-emerald-300 px-2 py-1 rounded border border-emerald-500/20 mb-4 inline-block">THE REFINER</span>
        <p class="text-sm text-slate-400 mb-4">
            Garbage In, Garbage Out. You are an expert at scraping, cleaning, and synthesizing "Golden Datasets" for fine-tuning. This is the new QA relative to model performance.
        </p>
        <div class="text-xs font-mono text-slate-500 border-t border-slate-800 pt-3">
            Avg Sal: $140k - $200k
        </div>
    </div>

  </div>

  <!-- Portfolio Strategy -->
  <div class="mt-8 bg-slate-900 rounded-2xl p-8 border border-white/10">
    <h3 class="text-2xl font-bold text-white mb-6">How to Get Hired (The Portfolio)</h3>
    <div class="space-y-4">
        
        <div class="flex items-start gap-4">
            <div class="bg-red-900/20 p-2 rounded text-red-500 text-xl font-bold">❌</div>
            <div>
                <h4 class="font-bold text-white">Don't Build: "Another Chatbot"</h4>
                <p class="text-sm text-slate-400">
                    Cloning ChatGPT proves nothing. It's an API call wrapper. Recruiters filter these out immediately.
                </p>
            </div>
        </div>

        <div class="flex items-start gap-4">
            <div class="bg-green-900/20 p-2 rounded text-green-500 text-xl font-bold">✅</div>
            <div>
                <h4 class="font-bold text-white">Do Build: "Vertical Agents"</h4>
                <p class="text-sm text-slate-400">
                    Solve a boring, specific problem. Example: <em>"An agent that scrapes Zillow, calculates ROI based on local tax laws, and emails me a PDF report."</em>
                </p>
            </div>
        </div>

        <div class="flex items-start gap-4">
            <div class="bg-blue-900/20 p-2 rounded text-blue-500 text-xl font-bold">⭐</div>
            <div>
                <h4 class="font-bold text-white">The "Open Source" Hack</h4>
                <p class="text-sm text-slate-400">
                    Curate a dataset (e.g., "10k Legal Contracts") and publish it on HuggingFace with a perfectly fine-tuned Lora adapter. This gets you noticed by Founders instantly.
                </p>
            </div>
        </div>

    </div>
  </div>

</div>
"""

# 16.9 Product Thinking
content_16_9 = """
<div class="space-y-12 font-sans text-slate-200">
  <h2 class="text-3xl font-bold text-white mb-6">Moats in the Age of AI</h2>
  <p class="text-slate-400 mb-8">If everyone has GPT-4, what makes you special?</p>

  <div class="space-y-4">
    <div class="flex items-start gap-4 p-4 bg-black/40 rounded-xl">
        <div class="text-2xl">🏰</div>
        <div>
            <h3 class="font-bold text-white">Proprietary Data</h3>
            <p class="text-sm text-slate-400">Your customer history, your specific edge cases. RAG over unique data is the only defensible position.</p>
        </div>
    </div>
    <div class="flex items-start gap-4 p-4 bg-black/40 rounded-xl">
        <div class="text-2xl">⚡</div>
        <div>
            <h3 class="font-bold text-white">UX / Workflow Integration</h3>
            <p class="text-sm text-slate-400">AI shouldn't be a chatbot on the side. It should be an autocomplete in the main flow (like GitHub Copilot vs ChatGPT).</p>
        </div>
    </div>
    <div class="flex items-start gap-4 p-4 bg-black/40 rounded-xl">
        <div class="text-2xl">🤝</div>
        <div>
            <h3 class="font-bold text-white">Trust & Brand</h3>
            <p class="text-sm text-slate-400">When the AI hallucinates (and it will), does the user forgive you? Trust is the currency of probabilistic software.</p>
        </div>
        <p class="text-sm text-slate-300 mb-2">Learn RAG deeply. Set up Vector DBs. Handle production auth and rate-limiting.</p>
        <div class="inline-block bg-purple-900/20 text-purple-300 text-xs px-2 py-1 rounded">Goal: Ship a RAG SaaS</div>
    </div>

    <!-- Q3 -->
    <div class="relative pl-8">
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 box-content border-4 border-[#0a0a0a]"></div>
        <h3 class="text-xl font-bold text-orange-400 mb-2">Q3: The Agent Builder</h3>
        <p class="text-sm text-slate-300 mb-2">Multi-agent systems. Function calling. Evals and observability.</p>
        <div class="inline-block bg-orange-900/20 text-orange-300 text-xs px-2 py-1 rounded">Goal: Automate a Real Job</div>
    </div>

    <!-- Q4 -->
    <div class="relative pl-8">
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 box-content border-4 border-[#0a0a0a]"></div>
        <h3 class="text-xl font-bold text-green-400 mb-2">Q4: The Research Engineer</h3>
        <p class="text-sm text-slate-300 mb-2">Fine-tuning. Model merging. Edge deployment optimization.</p>
        <div class="inline-block bg-green-900/20 text-green-300 text-xs px-2 py-1 rounded">Goal: Contribute to Open Source</div>
    </div>

  </div>
</div>
"""

# 16.10 Roadmap
content_16_10 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Hero Section -->
  <div class="text-center mb-12">
    <h2 class="text-4xl font-extrabold text-white mb-4">Your 12-Month AI Roadmap</h2>
    <p class="text-slate-400 max-w-2xl mx-auto">
        Don't try to learn everything at once. This is a quarterly execution plan to go from "Consumer" to "Creator". A Senior AI Engineer is built in stages.
    </p>
  </div>

  <div class="relative border-l-2 border-slate-800 ml-6 md:ml-12 space-y-16">
    
    <!-- Q1 -->
    <div class="relative pl-10">
        <div class="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-blue-500 box-content border-4 border-[#0a0a0a] shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
        <h3 class="text-2xl font-bold text-blue-400 mb-2">Q1: The Tool User</h3>
        <p class="text-xs text-slate-500 uppercase tracking-widest mb-4">FOUNDATION LAYER</p>
        
        <div class="bg-blue-900/10 border border-blue-500/20 rounded-xl p-6">
            <ul class="space-y-3 mb-4 text-slate-300">
                <li class="flex items-center gap-2">
                    <span class="text-blue-500">✓</span> Master <strong>Chain-of-Thought</strong> Prompting.
                </li>
                <li class="flex items-center gap-2">
                    <span class="text-blue-500">✓</span> Switch to <strong>Cursor</strong> (or Windsurf) for all coding.
                </li>
                <li class="flex items-center gap-2">
                    <span class="text-blue-500">✓</span> Build simple wrappers (e.g., "PDF Summarizer").
                </li>
            </ul>
            <div class="inline-block bg-blue-500 text-black font-bold text-xs px-3 py-1 rounded">GOAL: Ship 3 "Toy" Apps</div>
        </div>
    </div>

    <!-- Q2 -->
    <div class="relative pl-10">
        <div class="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-purple-500 box-content border-4 border-[#0a0a0a] shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
        <h3 class="text-2xl font-bold text-purple-400 mb-2">Q2: The Integrator</h3>
        <p class="text-xs text-slate-500 uppercase tracking-widest mb-4">DATA LAYER</p>
        
        <div class="bg-purple-900/10 border border-purple-500/20 rounded-xl p-6">
            <ul class="space-y-3 mb-4 text-slate-300">
                <li class="flex items-center gap-2">
                    <span class="text-purple-500">✓</span> Build a <strong>Production RAG</strong> pipeline.
                </li>
                <li class="flex items-center gap-2">
                    <span class="text-purple-500">✓</span> Master <strong>Vector DBs</strong> (Pinecone/Weaviate).
                </li>
                <li class="flex items-center gap-2">
                    <span class="text-purple-500">✓</span> Handle auth, rate-limiting, and streaming.
                </li>
            </ul>
            <div class="inline-block bg-purple-500 text-black font-bold text-xs px-3 py-1 rounded">GOAL: Ship a RAG SaaS</div>
        </div>
    </div>

    <!-- Q3 -->
    <div class="relative pl-10">
        <div class="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-orange-500 box-content border-4 border-[#0a0a0a] shadow-[0_0_20px_rgba(249,115,22,0.5)]"></div>
        <h3 class="text-2xl font-bold text-orange-400 mb-2">Q3: The Agent Builder</h3>
        <p class="text-xs text-slate-500 uppercase tracking-widest mb-4">ORCHESTRATION LAYER</p>
        
        <div class="bg-orange-900/10 border border-orange-500/20 rounded-xl p-6">
            <ul class="space-y-3 mb-4 text-slate-300">
                <li class="flex items-center gap-2">
                    <span class="text-orange-500">✓</span> Multi-Agent Systems (LangGraph).
                </li>
                <li class="flex items-center gap-2">
                    <span class="text-orange-500">✓</span> Implement <strong>Tool Use</strong> (Function Calling).
                </li>
                <li class="flex items-center gap-2">
                    <span class="text-orange-500">✓</span> Add Observability (LangSmith) & Evals.
                </li>
            </ul>
            <div class="inline-block bg-orange-500 text-black font-bold text-xs px-3 py-1 rounded">GOAL: Automate a Real Job</div>
        </div>
    </div>

    <!-- Q4 -->
    <div class="relative pl-10">
        <div class="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-green-500 box-content border-4 border-[#0a0a0a] shadow-[0_0_20px_rgba(34,197,94,0.5)]"></div>
        <h3 class="text-2xl font-bold text-green-400 mb-2">Q4: The Research Engineer</h3>
        <p class="text-xs text-slate-500 uppercase tracking-widest mb-4">OPTIMIZATION LAYER</p>
        
        <div class="bg-green-900/10 border border-green-500/20 rounded-xl p-6">
            <ul class="space-y-3 mb-4 text-slate-300">
                <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span> <strong>Fine-tune</strong> Llama-3 on custom data.
                </li>
                <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span> Model Merging (MergeKit) & Quantization.
                </li>
                <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span> Deploy to local edge devices.
                </li>
            </ul>
            <div class="inline-block bg-green-500 text-black font-bold text-xs px-3 py-1 rounded">GOAL: Train a Custom Model</div>
        </div>
    </div>

  </div>
</div>
"""

