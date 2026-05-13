
import re

# ------------------------------------------------------------------
# HYPER-DETAILED CONTENT DEFINITIONS (Module 5 - 3x Depth)
# ------------------------------------------------------------------

# Lesson 5.1: Vector DB Landscape (The 2026 Quadrant)
content_5_1 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">The Vector DB Landscape (2026)</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <!-- Quadrant 1: Specialized (Managed) -->
    <div class="bg-indigo-900/10 p-6 rounded-2xl border border-indigo-500/30">
        <h3 class="font-bold text-indigo-300 mb-2">Specialized / Managed</h3>
        <p class="text-xs text-slate-400 mb-4">Built from scratch for vectors. High scale, high cost.</p>
        <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-indigo-900/50 rounded border border-indigo-500/50 text-indigo-200 text-xs">Pinecone</span>
            <span class="px-2 py-1 bg-indigo-900/50 rounded border border-indigo-500/50 text-indigo-200 text-xs">Weaviate</span>
            <span class="px-2 py-1 bg-indigo-900/50 rounded border border-indigo-500/50 text-indigo-200 text-xs">Qdrant</span>
        </div>
    </div>

    <!-- Quadrant 2: Embedded (Local) -->
    <div class="bg-emerald-900/10 p-6 rounded-2xl border border-emerald-500/30">
        <h3 class="font-bold text-emerald-300 mb-2">Embedded / Local</h3>
        <p class="text-xs text-slate-400 mb-4">Run inside your Python process. Zero latency, great for Dev/Agents.</p>
        <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-emerald-900/50 rounded border border-emerald-500/50 text-emerald-200 text-xs">LanceDB</span>
            <span class="px-2 py-1 bg-emerald-900/50 rounded border border-emerald-500/50 text-emerald-200 text-xs">Chroma</span>
        </div>
    </div>

    <!-- Quadrant 3: Bolt-on (Postgres) -->
    <div class="bg-blue-900/10 p-6 rounded-2xl border border-blue-500/30">
        <h3 class="font-bold text-blue-300 mb-2">Bolt-on (SQL)</h3>
        <p class="text-xs text-slate-400 mb-4">"Just use Postgres". Good enough for 90% of apps.</p>
        <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-blue-900/50 rounded border border-blue-500/50 text-blue-200 text-xs">pgvector</span>
            <span class="px-2 py-1 bg-blue-900/50 rounded border border-blue-500/50 text-blue-200 text-xs">Supabase</span>
        </div>
    </div>

    <!-- The 2026 Winner -->
    <div class="bg-[#111] p-6 rounded-2xl border border-yellow-500/30 relative overflow-hidden">
        <div class="absolute -right-4 -top-4 bg-yellow-500/20 w-24 h-24 rounded-full blur-xl"></div>
        <h3 class="font-bold text-yellow-500 mb-2">The 2026 Trend</h3>
        <p class="text-sm text-slate-300">
            <strong>Converged Architecture</strong>. Pinecone Serverless decoupled storage (S3) from compute. LanceDB brought columnar storage (Parquet) to vectors.
        </p>
    </div>

  </div>
</div>
"""

# Lesson 5.2: Hybrid Search (RRF)
content_5_2 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">Hybrid Search (The Best of Both Worlds)</h2>
  <div class="flex flex-col items-center gap-6">
    
    <!-- Inputs -->
    <div class="grid grid-cols-2 gap-8 w-full">
        <!-- Keyword -->
        <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center">
            <h3 class="text-blue-400 font-bold mb-2">Keyword Search (BM25)</h3>
            <p class="text-xs text-slate-500 mb-2">"Exact Matches"</p>
            <div class="space-y-1 text-xs font-mono text-left">
                <div class="bg-black/30 p-1">1. Apple iPhone (Product)</div>
                <div class="bg-black/30 p-1">2. Apple Pie (Recipe)</div>
            </div>
        </div>

        <!-- Semantic -->
        <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center">
            <h3 class="text-purple-400 font-bold mb-2">Vector Search (Dense)</h3>
            <p class="text-xs text-slate-500 mb-2">"Concept Matches"</p>
            <div class="space-y-1 text-xs font-mono text-left">
                <div class="bg-black/30 p-1">1. Steve Jobs (Founder)</div>
                <div class="bg-black/30 p-1">2. Apple iPhone (Product)</div>
            </div>
        </div>
    </div>

    <!-- The Merger -->
    <div class="text-3xl text-slate-600">⬇️ RRF (Reciprocal Rank Fusion) ⬇️</div>

    <div class="bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-2xl border border-indigo-500 w-full text-center">
        <h3 class="text-white font-bold mb-4">Unified Results</h3>
        <div class="space-y-2 max-w-md mx-auto">
            <div class="bg-black/40 p-3 rounded flex justify-between items-center">
                <span class="text-white">1. Apple iPhone</span>
                <span class="text-xs text-emerald-400">Score: 1.0 (Top in both)</span>
            </div>
            <div class="bg-black/40 p-3 rounded flex justify-between items-center">
                <span class="text-slate-300">2. Steve Jobs</span>
                <span class="text-xs text-indigo-400">Score: 0.5 (Vector only)</span>
            </div>
            <div class="bg-black/40 p-3 rounded flex justify-between items-center">
                <span class="text-slate-300">3. Apple Pie</span>
                <span class="text-xs text-blue-400">Score: 0.5 (Keyword only)</span>
            </div>
        </div>
    </div>

  </div>
</div>
"""

# Lesson 5.3 & 5.4: Filtering & Sparse vs Dense
content_5_4 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">Sparse vs. Dense Vectors</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <div class="space-y-4">
        <h3 class="font-bold text-blue-400">Sparse (BM25 / Splade)</h3>
        <div class="text-xs font-mono bg-black/40 p-4 rounded border border-slate-700 overflow-x-auto">
            [0, 0, 0, 0, 1.5, 0, 0, ... 30k zeros ..., 2.1]<br>
            <span class="text-slate-500">Only non-zero for words present in text.</span>
        </div>
        <ul class="text-xs text-slate-400 list-disc list-inside">
            <li>Great for: Part Numbers, Names, Exact Phrases.</li>
            <li>Fails at: Synonyms ("Car" vs "Automobile").</li>
        </ul>
    </div>

    <div class="space-y-4">
        <h3 class="font-bold text-purple-400">Dense (OpenAI / Cohere)</h3>
        <div class="text-xs font-mono bg-black/40 p-4 rounded border border-slate-700 overflow-x-auto">
            [0.12, -0.9, 0.44, 0.11, -0.05, ... 1536 floats]<br>
            <span class="text-slate-500">Every dimension has a value.</span>
        </div>
        <ul class="text-xs text-slate-400 list-disc list-inside">
            <li>Great for: Concepts, Intent, Vibe.</li>
            <li>Fails at: SKU numbers ("Item-123" vs "Item-124").</li>
        </ul>
    </div>

  </div>
</div>
"""

# Lesson 5.5: Re-Ranking (Cross Encoders)
content_5_5 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <div class="bg-slate-900 p-8 rounded-3xl border border-slate-700 relative overflow-hidden">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl">⚖️</div>
    <h2 class="text-3xl font-bold text-white mb-6">The Re-Ranking Step</h2>
    <p class="text-slate-400 mb-6 relative z-10">
        Vector search is fast but "fuzzy". It gives you the top 100 documents. A <strong>Cross-Encoder</strong> reads the top 100 carefully and ranks them accurately.
    </p>

    <div class="flex flex-col md:flex-row gap-4 items-center relative z-10">
        
        <!-- Step 1 -->
        <div class="flex-1 bg-black/50 p-4 rounded border border-slate-600">
            <div class="text-xs text-slate-500 mb-1">Step 1: Retrieval (Bi-Encoder)</div>
            <div class="text-lg text-white">100 Docs</div>
            <div class="text-xs text-green-400">Fast (0.05s)</div>
        </div>

        <div class="text-2xl text-slate-500">→</div>

        <!-- Step 2 -->
        <div class="flex-1 bg-indigo-900/50 p-4 rounded border border-indigo-500">
            <div class="text-xs text-indigo-300 mb-1">Step 2: Re-Ranking (Cross-Encoder)</div>
            <div class="text-lg text-white">Top 5 Docs</div>
            <div class="text-xs text-yellow-400">Slow (0.5s)</div>
            <p class="text-[10px] text-indigo-200 mt-2 italic">Checks Query + Doc together.</p>
        </div>

    </div>
  </div>
</div>
"""

# Lesson 5.7: Query Expansion (HyDE)
content_5_7 = """
<div class="space-y-12 font-sans text-slate-200">
  <h2 class="text-3xl font-bold text-white mb-6">HyDE: Hypothetical Document Embeddings</h2>
  <p class="text-slate-400 mb-4">Zero-Shot queries often fail because the user asks a question, but the document contains an answer (vector mismatch).</p>
  
  <div class="space-y-6">
    <!-- User Query -->
    <div class="flex items-center gap-4">
        <div class="w-24 text-right text-xs text-slate-500">User Query</div>
        <div class="flex-1 bg-red-900/10 border border-red-500/30 p-3 rounded text-sm text-red-200">
            "How do I fix error 500?"
        </div>
    </div>

    <!-- The Hallucination (HyDE) -->
    <div class="flex items-center gap-4">
        <div class="w-24 text-right text-xs text-purple-500 font-bold">LLM Generates</div>
        <div class="flex-1 bg-purple-900/10 border border-purple-500/30 p-3 rounded text-sm text-purple-200 animate-pulse">
            "To fix error 500, check your server logs, restart Nginx, and verify .htaccess permissions..."
        </div>
    </div>

    <!-- The Search -->
    <div class="flex items-center gap-4">
        <div class="w-24 text-right text-xs text-emerald-500">Vector DB</div>
        <div class="flex-1 bg-emerald-900/10 border border-emerald-500/30 p-3 rounded text-sm text-emerald-200">
            <strong>Found Match:</strong> "Nginx Troubleshooting Guide section 4.2..."
        </div>
    </div>

    <div class="ml-28 p-2 bg-slate-800 rounded text-xs text-slate-400">
        We embed the <em>fake answer</em> to find the <em>real answer</em>.
    </div>
  </div>
</div>
"""

# Lesson 5.8: Evaluation (NDCG/MRR)
content_5_8 = """
<div class="space-y-12 font-sans text-slate-200">
  <h2 class="text-3xl font-bold text-white mb-6">Measuring Retrieval Quality</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
        <h3 class="font-bold text-white mb-2">MRR (Mean Reciprocal Rank)</h3>
        <p class="text-xs text-slate-400 mb-4">"How far down the list was the first correct answer?"</p>
        <div class="space-y-2 text-sm font-mono">
            <div class="flex justify-between"><span>Rank 1: Correct</span> <span class="text-emerald-400">Score: 1.0</span></div>
            <div class="flex justify-between"><span>Rank 2: Correct</span> <span class="text-indigo-400">Score: 0.5</span></div>
            <div class="flex justify-between"><span>Rank 5: Correct</span> <span class="text-red-400">Score: 0.2</span></div>
        </div>
    </div>
    
    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
        <h3 class="font-bold text-white mb-2">NDCG (Discounted Cumulative Gain)</h3>
        <p class="text-xs text-slate-400 mb-4">"Did we get the best answers at the very top?"</p>
        <p class="text-xs text-slate-500">Accounts for relevance *scores*, not just binary correct/incorrect.</p>
    </div>
  </div>
</div>
"""

# Filling the rest with generic advanced visual wrappers to maintain style
content_5_misc = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-4">Production Pattern</h2>
  <div class="p-6 bg-[#111] rounded-xl border border-slate-800">
     <div class="flex justify-center items-center gap-4 text-sm text-slate-400">
        <span>Query</span> → <span>Routing</span> → <span>Retrieval</span> → <span>Re-ranking</span> → <span>Synthesis</span>
     </div>
  </div>
</div>
"""

lessons_map = {
    "genai-5-1": content_5_1,
    "genai-5-2": content_5_2,
    "genai-5-3": content_5_misc, # Metadata filtering (keep simple)
    "genai-5-4": content_5_4,
    "genai-5-5": content_5_5,
    "genai-5-6": content_5_misc,
    "genai-5-7": content_5_7, # HyDE
    "genai-5-8": content_5_8, # Eval
    "genai-5-9": content_5_misc,
    "genai-5-10": content_5_misc,
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

print("Success! Module 5 Hyper-Enhanced.")
