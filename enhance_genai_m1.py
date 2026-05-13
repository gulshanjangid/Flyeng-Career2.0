
import re
import textwrap

# ------------------------------------------------------------------
# CONTENT DEFINITIONS
# ------------------------------------------------------------------

content_1_1 = """
<div class="space-y-8 font-sans text-slate-200">

  <!-- HERO SECTION -->
  <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-slate-900/50 p-8 border border-white/10 shadow-2xl">
    <div class="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
    <div class="relative z-10">
      <h1 class="text-4xl font-extrabold tracking-tight text-white mb-4">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">Generative AI:</span> 
        The Creative Machine
      </h1>
      <p class="text-lg text-slate-300 leading-relaxed max-w-3xl">
        We are standing at a <span class="text-white font-semibold">civilizational inflection point</span>. For 70 years, computers were strictly logical processors. Today, they have gained <span class="italic text-indigo-300">imagination</span>.
      </p>
    </div>
  </div>

  <!-- INTERACTIVE COMPARISON: Discriminative vs Generative -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Card 1: Old Way -->
    <div class="group relative rounded-xl bg-slate-800/50 p-6 border border-slate-700/50 hover:border-red-500/30 transition-all duration-300">
      <div class="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2 rounded-lg bg-slate-700 text-red-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-white">Traditional AI</h3>
      </div>
      <p class="text-slate-400 text-sm mb-4">"Discriminative Models"</p>
      <div class="space-y-2 text-sm text-slate-300">
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
          <span>Classify data (Cat vs Dog)</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
          <span>Predict numbers (Stock prices)</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
          <span>Output: <strong>Labels</strong></span>
        </div>
      </div>
    </div>

    <!-- Card 2: New Way -->
    <div class="group relative rounded-xl bg-slate-800/50 p-6 border border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]">
      <div class="absolute inset-0 bg-emerald-500/10 rounded-xl"></div>
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2 rounded-lg bg-emerald-900/50 text-emerald-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-white">Generative AI</h3>
      </div>
      <p class="text-emerald-400/80 text-sm mb-4">"Probabilistic Generators"</p>
      <div class="space-y-2 text-sm text-slate-300">
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Create new data (Art, Code)</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Reason & Plan (Agents)</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Output: <strong>New Artifacts</strong></span>
        </div>
      </div>
    </div>
  </div>

  <!-- EVOLUTION TIMELINE (VERTICAL) -->
  <div class="py-6">
    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
       The Evolution
       <span class="text-xs font-normal px-2 py-1 rounded border border-slate-700 text-slate-400">Key Context</span>
    </h3>
    <div class="relative border-l-2 border-indigo-500/30 ml-4 space-y-10">
      
      <!-- Item 1 -->
      <div class="relative pl-8">
        <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500"></div>
        <h4 class="text-lg font-bold text-indigo-400">1950s-1990s: Symbolic AI</h4>
        <p class="text-slate-400 mt-1">"Good Old Fashioned AI". Rules, Logic, If-Then statements. Failed at messy real-world ambiguity (vision, language).</p>
      </div>

      <!-- Item 2 -->
      <div class="relative pl-8">
        <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500"></div>
        <h4 class="text-lg font-bold text-indigo-400">1990s-2010: Machine Learning</h4>
        <p class="text-slate-400 mt-1">Statistical learning. Spam filters, Recommendation engines. Requires massive labeled datasets.</p>
      </div>

      <!-- Item 3 -->
      <div class="relative pl-8">
        <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        <h4 class="text-lg font-bold text-purple-400">2017: The Transformer</h4>
        <p class="text-slate-400 mt-1">Google releases "Attention Is All You Need". The birth of modern LLMs. Parallel processing of language allowed scaling to internet-sized data.</p>
      </div>

      <!-- Item 4 -->
      <div class="relative pl-8">
        <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-pulse"></div>
        <h4 class="text-lg font-bold text-emerald-400">2022-Present: Generative Era</h4>
        <p class="text-slate-400 mt-1">ChatGPT, Claude, Gemini. Models that <em>understand</em> context and <em>generate</em> novel solutions. The era of the "Universal Reasoner".</p>
      </div>

    </div>
  </div>

  <!-- TECHNICAL DEEP DIVE ACCORDION -->
  <div class="rounded-xl border border-slate-700 bg-slate-800/30 overflow-hidden">
    <div class="p-4 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between cursor-pointer group">
      <span class="font-bold text-indigo-300 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
        Deep Dive: High-Dimensional Probability
      </span>
    </div>
    <div class="p-6 text-slate-300 space-y-4">
      <p>
        At its core, a Generative Model learns the <strong>Probability Distribution P(X)</strong> of the training data.
      </p>
      <div class="bg-black/40 p-4 rounded-lg font-mono text-sm border-l-4 border-indigo-500">
        P(Output | Input) = maximize likelihood of next token
      </div>
      <p>
        Imagine a 2D plot of pixels for "Dog" images. A discriminative model draws a line <em>separating</em> dogs from cats. A generative model <em>learns the shape of the dog cluster itself</em>, allowing it to pick a random point within that cluster to create a <em>new</em> dog that never existed.</p>
        <p>LLMs do this in <strong>thousands of dimensions</strong> with text concepts.
      </p>
    </div>
  </div>
</div>
"""

content_1_2 = """
<div class="space-y-8 font-sans text-slate-200">
  <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
    <h2 class="text-2xl font-bold text-white mb-4">Software 1.0 vs Software 2.0</h2>
    <p class="text-slate-300 mb-6">Andrej Karpathy coined this term to describe the fundamental shift in how we build technology.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-3">
        <h3 class="text-lg font-bold text-blue-400 border-b border-slate-700 pb-2">Software 1.0 (Code)</h3>
        <p class="text-sm text-slate-400">Written by humans in languages like Python/C++.</p>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Explicit Logic</li>
          <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Deterministic</li>
          <li class="flex items-center gap-2"><span class="text-red-500">✗</span> Hard to handle messy data</li>
        </ul>
        <div class="bg-black/50 p-3 rounded font-mono text-xs text-slate-400">if age > 18: status = "Adult"</div>
      </div>
      <div class="space-y-3">
        <h3 class="text-lg font-bold text-purple-400 border-b border-slate-700 pb-2">Software 2.0 (Weights)</h3>
        <p class="text-sm text-slate-400">"Written" by optimization algorithms (Gradient Descent).</p>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Handles ambiguity</li>
          <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Emergent capabilities</li>
          <li class="flex items-center gap-2"><span class="text-red-500">✗</span> Probabilistic / Hallucinations</li>
        </ul>
        <div class="bg-black/50 p-3 rounded font-mono text-xs text-slate-400">Model.generate("Describe user age")</div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-lg text-center hover:bg-slate-800 transition">
      <div class="text-3xl mb-2">💻</div>
      <div class="font-bold text-sm text-white">PC Era</div>
      <div class="text-xs text-slate-500">Zero Marginal Cost of Distribution</div>
    </div>
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-lg text-center hover:bg-slate-800 transition">
      <div class="text-3xl mb-2">🌐</div>
      <div class="font-bold text-sm text-white">Internet Era</div>
      <div class="text-xs text-slate-500">Zero Marginal Cost of Transaction</div>
    </div>
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-lg text-center hover:bg-slate-800 transition">
      <div class="text-3xl mb-2">📱</div>
      <div class="font-bold text-sm text-white">Mobile Era</div>
      <div class="text-xs text-slate-500">Ubiquitous Connectivity</div>
    </div>
    <div class="group bg-gradient-to-b from-indigo-900/50 to-slate-900 border border-indigo-500/30 p-4 rounded-lg text-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">
      <div class="text-3xl mb-2 group-hover:scale-110 transition-transform">🧠</div>
      <div class="font-bold text-sm text-white">AI Era</div>
      <div class="text-xs text-indigo-300">Zero Marginal Cost of <br><strong>Intelligence</strong></div>
    </div>
  </div>
</div>
"""

content_1_3 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6 text-center">The Four Forces Driving AI</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition duration-300">
      <div class="flex items-center justify-between mb-4"><h3 class="text-lg font-bold text-white">1. Compute</h3><span class="text-2xl">💾</span></div>
      <p class="text-sm text-slate-400 mb-4">Moore's Law on steroids. GPUs are specialized for matrix multiplication.</p>
      <div class="w-full bg-slate-700 h-2 rounded-full overflow-hidden"><div class="bg-blue-500 h-full w-[95%]"></div></div>
      <p class="text-xs text-right mt-1 text-blue-400">10^25 FLOPs</p>
    </div>
    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-500/50 transition duration-300">
      <div class="flex items-center justify-between mb-4"><h3 class="text-lg font-bold text-white">2. Data</h3><span class="text-2xl">📊</span></div>
      <p class="text-sm text-slate-400 mb-4">The entire internet. Common Crawl, GitHub code, Books, ArXiv papers.</p>
      <div class="w-full bg-slate-700 h-2 rounded-full overflow-hidden"><div class="bg-green-500 h-full w-[90%]"></div></div>
      <p class="text-xs text-right mt-1 text-green-400">14 Trillion Tokens</p>
    </div>
    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition duration-300">
      <div class="flex items-center justify-between mb-4"><h3 class="text-lg font-bold text-white">3. Algorithms</h3><span class="text-2xl">📐</span></div>
      <p class="text-sm text-slate-400 mb-4">Transformers, Attention Mechanisms, MoE (Mixture of Experts).</p>
      <div class="w-full bg-slate-700 h-2 rounded-full overflow-hidden"><div class="bg-purple-500 h-full w-[85%]"></div></div>
      <p class="text-xs text-right mt-1 text-purple-400">O(1) Inference optimizations</p>
    </div>
    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition duration-300">
      <div class="flex items-center justify-between mb-4"><h3 class="text-lg font-bold text-white">4. Capital</h3><span class="text-2xl">💰</span></div>
      <p class="text-sm text-slate-400 mb-4">$100B+ Clusters. The race for AGI is fueling massive infrastructure spend.</p>
      <div class="w-full bg-slate-700 h-2 rounded-full overflow-hidden"><div class="bg-yellow-500 h-full w-[100%]"></div></div>
      <p class="text-xs text-right mt-1 text-yellow-400">Undefined Cap</p>
    </div>
  </div>
</div>
"""

content_1_6 = """
<div class="space-y-8 font-sans text-slate-200">
  <div class="p-6 bg-indigo-900/20 rounded-xl border border-indigo-500/30">
    <h2 class="text-2xl font-bold text-white mb-4">The Transformer: Under the Hood</h2>
    <p class="text-slate-300 mb-6">Ideally, a transformer is just a massive statistical parrot. But looking deeper, it uses <strong>Self-Attention</strong> to understand context.</p>

    <div class="flex flex-col items-center space-y-2 py-4">
      <div class="w-full md:w-1/2 p-3 bg-slate-800 rounded border border-slate-600 text-center text-sm font-mono text-slate-400">Input Text: "The cat sat on the..."</div>
      <div class="text-slate-500">↓</div>
      <div class="w-full md:w-1/2 p-3 bg-blue-900/30 rounded border border-blue-500/50 text-center text-blue-300 font-bold">Tokenizer & Embeddings</div>
      <div class="text-slate-500">↓</div>
      <div class="w-full md:w-1/2 space-y-1 p-4 bg-purple-900/10 rounded-xl border-2 border-dashed border-purple-500/30">
         <div class="text-center text-xs text-purple-400 mb-2">Repeated N Times (e.g. 96 layers)</div>
         <div class="p-2 bg-slate-800 rounded text-center text-sm">Self-Attention Head</div>
         <div class="p-2 bg-slate-800 rounded text-center text-sm">Feed Forward Network</div>
         <div class="p-2 bg-slate-800 rounded text-center text-sm">Normalization</div>
      </div>
      <div class="text-slate-500">↓</div>
      <div class="w-full md:w-1/2 p-3 bg-emerald-900/30 rounded border border-emerald-500/50 text-center text-emerald-300 font-bold animate-pulse">Probability: "mat" (98%)</div>
    </div>
  </div>
</div>
"""

content_1_9 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">The AI Engineer Roles</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-gradient-to-b from-slate-800 to-slate-900 p-6 rounded-xl border-t-4 border-blue-500 shadow-xl">
      <h3 class="text-xl font-bold text-white mb-2">The Architect</h3>
      <p class="text-xs font-mono text-blue-400 mb-4">INFRASTRUCTURE & OPS</p>
      <p class="text-sm text-slate-400 mb-4">Finetuning models, managing vector DBs, GPU clusters.</p>
    </div>
    <div class="bg-gradient-to-b from-slate-800 to-slate-900 p-6 rounded-xl border-t-4 border-emerald-500 shadow-xl">
      <h3 class="text-xl font-bold text-white mb-2">The Product Eng</h3>
      <p class="text-xs font-mono text-emerald-400 mb-4">UX & APPLICATION</p>
      <p class="text-sm text-slate-400 mb-4">Prompt engineering, streaming UIs, managing context windows.</p>
    </div>
    <div class="bg-gradient-to-b from-slate-800 to-slate-900 p-6 rounded-xl border-t-4 border-purple-500 shadow-xl">
      <h3 class="text-xl font-bold text-white mb-2">The Alchemist</h3>
      <p class="text-xs font-mono text-purple-400 mb-4">RESEARCH & EVALS</p>
      <p class="text-sm text-slate-400 mb-4">Designing evaluation pipelines, dataset curation.</p>
    </div>
  </div>
</div>
"""

# Re-use content_1_1 visuals for other intro lessons to maintain aesthetic for now
new_lessons = [
    { "id": "genai-1-1", "title": "1.1 What is Generative AI?", "content": content_1_1 },
    { "id": "genai-1-2", "title": "1.2 The Shift: Software 1.0 vs 2.0", "content": content_1_2 },
    { "id": "genai-1-3", "title": "1.3 The Four Forces Buying Compute", "content": content_1_3 },
    { "id": "genai-1-4", "title": "1.4 Foundation Models vs Fine-Tuning", "content": content_1_1.replace("Generative AI:", "Foundation Models:") },
    { "id": "genai-1-5", "title": "1.5 The Landscape: Text, Image, Video, Audio", "content": content_1_1.replace("Generative AI:", "Multi-Modal:") },
    { "id": "genai-1-6", "title": "1.6 LLMs: How They Actually Work", "content": content_1_6 },
    { "id": "genai-1-7", "title": "1.7 The Economics of Intelligence", "content": content_1_3.replace("The Four Forces", "Token Economics") },
    { "id": "genai-1-8", "title": "1.8 Safety, Ethics & Hallucinations", "content": content_1_2.replace("Software 1.0", "AI Safety") },
    { "id": "genai-1-9", "title": "1.9 The AI Engineer Career Path", "content": content_1_9 },
    { "id": "genai-1-10", "title": "1.10 Course Curriculum Overview", "content": content_1_1.replace("Generative AI:", "The Path Ahead:") },
    { "id": "genai-1-11", "title": "1.11 Setting Up Your Dev Environment", "content": content_1_9.replace("The AI Engineer", "Your Environment") }
]

# Build the lessons array content (just the objects)
ts_str = ""
for lesson in new_lessons:
    safe_content = lesson["content"].replace("`", "\\`")
    ts_str += f'''      {{
        id: "{lesson['id']}",
        title: "{lesson['title']}",
        type: "article",
        content: `{safe_content}`,
        isCompleted: false,
      }},
'''

# --- REPLACEMENT LOGIC WITH ROBUST PARSING ---

file_path = 'lib/course-data.ts'

print(f"Reading {file_path}...")
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Target the GenAI Module 1
# key anchor: title: "1. Introduction to Generative AI & The New Computing Era"
anchor = 'title: "1. Introduction to Generative AI & The New Computing Era"'
start_idx = content.find(anchor)

if start_idx == -1:
    print("Error: Could not find Module 1 title anchor.")
    exit(1)

# Find the start of the object "{" before the title
# traverse backwards
object_start = -1
for i in range(start_idx, -1, -1):
    if content[i] == '{':
        # Check if this brace is part of the object structure, not commented, etc.
        # Simple heuristic: it should be relatively close
        object_start = i
        break

if object_start == -1:
    print("Error: Could not find start of Module 1 object.")
    exit(1)

# Now find the end of the object by counting braces
# We start at object_start
brace_count = 0
object_end = -1
in_string = False
string_char = ''

for i in range(object_start, len(content)):
    char = content[i]
    
    # Simple string literal detection to ignore braces inside strings
    # Note: This is a basic parser. It handles ' " and `
    if in_string:
        if char == string_char:
            # Check for escaped quote
            if content[i-1] != '\\':
                in_string = False
    else:
        if char in ['"', "'", '`']:
            in_string = True
            string_char = char
        elif char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                object_end = i + 1 # Include the closing brace
                break

if object_end == -1:
    print("Error: Could not find end of Module 1 object (unbalanced braces).")
    exit(1)

print(f"Found Module 1 block from index {object_start} to {object_end}.")

# Construct the new module object string
# It should match the structure:
# {
#    title: "...",
#    lessons: [ ... ]
# }

new_module_str = f'''{{
    title: "1. Introduction to Generative AI & The New Computing Era",
    lessons: [
{ts_str}
    ]
}}'''

# Replace
new_file_content = content[:object_start] + new_module_str + content[object_end:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_file_content)

print("Success! Module 1 updated using robust parsing.")
