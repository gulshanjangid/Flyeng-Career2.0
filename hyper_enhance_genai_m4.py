
import re

# ------------------------------------------------------------------
# HYPER-DETAILED CONTENT DEFINITIONS (Module 4 - 3x Depth)
# ------------------------------------------------------------------

# Lesson 4.1: Tokens & BPE (The Atoms of LLMs)
content_4_1 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">The Atom of Intelligence: The Token</h2>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="space-y-4">
        <p class="text-lg text-slate-300">
            LLMs do not see words. They see integers. Your prompt is chopped into "sub-words" using an algorithm called <strong>Byte Pair Encoding (BPE)</strong>.
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-slate-700 font-mono text-sm">
            <div class="mb-2 text-slate-500"># Input String</div>
            <div class="text-white mb-6">"Unbelievable"</div>
            
            <div class="mb-2 text-slate-500"># Tokenization Steps (BPE)</div>
            <div class="space-y-1">
                <div class="flex gap-2"><span class="text-blue-400">Un</span> <span class="text-slate-600">-> 152</span></div>
                <div class="flex gap-2"><span class="text-blue-400">belie</span> <span class="text-slate-600">-> 8902</span></div>
                <div class="flex gap-2"><span class="text-blue-400">v</span> <span class="text-slate-600">-> 85</span></div>
                <div class="flex gap-2"><span class="text-blue-400">able</span> <span class="text-slate-600">-> 441</span></div>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500">
                Total: 4 Tokens. (Rule of thumb: 100 words ≈ 130 tokens)
            </div>
        </div>
    </div>
    
    <div class="bg-indigo-900/20 p-6 rounded-xl border border-indigo-500/30 flex flex-col justify-center items-center text-center">
        <h3 class="font-bold text-indigo-300 mb-2">Why not Characters?</h3>
        <p class="text-xs text-slate-400 max-w-xs mb-4">"a", "b", "c" lack semantic meaning. "Un" has meaning (negation).</p>
        <h3 class="font-bold text-indigo-300 mb-2">Why not Words?</h3>
        <p class="text-xs text-slate-400 max-w-xs">Too many words (vocab size explodes). BPE is the sweet spot: ~100k vocab size covers all languages.</p>
    </div>
  </div>

  <div class="p-6 bg-red-900/10 border-l-4 border-red-500 rounded-r-xl">
    <strong class="text-red-400 block mb-1">The "Strawberry" Problem</strong>
    <p class="text-sm text-slate-300">
        Why can't GPT-4 count the 'r's in "Strawberry"? Because it sees the token ID `5729` (Strawberry). It does NOT see the characters `s-t-r-a-w...`. It's like asking you to count the letters in the concept of "Love".
    </p>
  </div>
</div>
"""

# Lesson 4.2: Embeddings (Semantic Space)
content_4_2 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">Geometry of Meaning</h2>
  
  <!-- 3D Space Visual -->
  <div class="relative bg-black rounded-3xl border border-slate-800 h-96 overflow-hidden flex items-center justify-center">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
    
    <!-- Vector Relations -->
    <div class="relative z-10 w-full max-w-lg h-64 border-l border-b border-slate-700">
        
        <!-- King -->
        <div class="absolute bottom-10 left-10 w-2 h-2 bg-blue-500 rounded-full">
            <span class="absolute -top-6 left-0 text-xs text-blue-400 font-bold">King [0.9, 0.2]</span>
        </div>
        
        <!-- Queen -->
        <div class="absolute top-10 left-20 w-2 h-2 bg-pink-500 rounded-full">
             <span class="absolute -top-6 left-0 text-xs text-pink-400 font-bold">Queen [0.95, 0.8]</span>
             <div class="absolute top-1 left-1 w-0.5 h-40 bg-pink-500/30 origin-top rotate-45 transform translate-y-full"></div>
        </div>

        <!-- Man -->
        <div class="absolute bottom-10 right-20 w-2 h-2 bg-slate-500 rounded-full">
            <span class="absolute -top-6 left-0 text-xs text-slate-400 font-bold">Man [0.1, 0.2]</span>
        </div>
        
        <!-- Woman -->
        <div class="absolute top-10 right-10 w-2 h-2 bg-slate-500 rounded-full">
            <span class="absolute -top-6 left-0 text-xs text-slate-400 font-bold">Woman [0.15, 0.8]</span>
        </div>

        <!-- The Vector Arrow -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="48" y1="210" x2="350" y2="210" stroke="#475569" stroke-width="1" stroke-dasharray="4" />
            <line x1="88" y1="50" x2="390" y2="50" stroke="#475569" stroke-width="1" stroke-dasharray="4" />
        </svg>

    </div>
  </div>

  <div class="flex justify-center">
    <div class="px-8 py-4 bg-slate-900 rounded-xl border border-indigo-500 text-lg font-mono text-indigo-300">
        vec(King) - vec(Man) + vec(Woman) ≈ vec(Queen)
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="p-6 bg-slate-800/50 rounded-xl">
        <h3 class="font-bold text-white mb-2">Dimensions</h3>
        <p class="text-sm text-slate-400">OpenAI's `text-embedding-3-small` has 1,536 dimensions. That means every concept is defined by 1,536 numbers.</p>
    </div>
    <div class="p-6 bg-slate-800/50 rounded-xl">
        <h3 class="font-bold text-white mb-2">Distance</h3>
        <p class="text-sm text-slate-400">Concepts that are semantically close (e.g., "Dog" and "Puppy") appear physically close in this space.</p>
    </div>
  </div>
</div>
"""

# Lesson 4.3: Cosine Similarity (The Yardstick)
content_4_3 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">Measuring Similarity</h2>
  
  <div class="flex flex-col md:flex-row items-center gap-12 bg-black/40 p-8 rounded-2xl border border-slate-800">
    
    <!-- Visual: Angle -->
    <div class="relative w-48 h-48 border-l-2 border-b-2 border-slate-600">
        <!-- Vector A -->
        <div class="absolute bottom-0 left-0 w-32 h-1 bg-blue-500 origin-bottom-left rotate-[-20deg]"></div>
        <div class="absolute bottom-16 right-4 text-blue-400 font-bold text-xs">Vector A (Query)</div>
        
        <!-- Vector B -->
        <div class="absolute bottom-0 left-0 w-32 h-1 bg-emerald-500 origin-bottom-left rotate-[-30deg]"></div>
        <div class="absolute top-20 right-0 text-emerald-400 font-bold text-xs">Vector B (Match)</div>
        
        <!-- Angle Arc -->
        <div class="absolute bottom-0 left-0 w-16 h-16 border-t-2 border-r-2 border-slate-400 rounded-tr-full opacity-50"></div>
        <div class="absolute bottom-4 left-6 text-xs text-white">θ</div>
    </div>

    <!-- Math Explanation -->
    <div class="flex-1 space-y-4">
        <h3 class="text-xl font-bold text-white">Cosine Similarity</h3>
        <p class="text-slate-400 text-sm">
            We don't measure distance with a ruler (Euclidean). We measure the <strong>Angle (θ)</strong> between vectors.
        </p>
        <ul class="space-y-2 text-sm font-mono">
            <li class="p-2 bg-emerald-900/20 rounded border border-emerald-500/20 text-emerald-300">Similarity = 1.0 (Identical, 0° angle)</li>
            <li class="p-2 bg-slate-800/50 rounded text-slate-300">Similarity = 0.0 (Unrelated, 90° angle)</li>
            <li class="p-2 bg-red-900/20 rounded border border-red-500/20 text-red-300">Similarity = -1.0 (Opposite)</li>
        </ul>
    </div>
  </div>
</div>
"""

# Lesson 4.4: Vector Databases (HNSW)
content_4_4 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">HNSW: How Vector DBs Scale</h2>
  <p class="text-slate-400 mb-8">
    Comparing your query to 1 Billion vectors one-by-one (Flat Search) is too slow. We need a "GPS" for high-dimensional space.
  </p>

  <!-- HNSW Layer Visual -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <div class="bg-indigo-900/10 p-6 rounded-2xl border border-indigo-500/30">
        <h3 class="font-bold text-indigo-300 mb-4">Hierarchical Layout</h3>
        <div class="space-y-2">
            <!-- Layers -->
            <div class="h-8 bg-indigo-500/20 border border-indigo-500 rounded w-[40%] mx-auto flex items-center justify-center text-[10px] text-indigo-200">Layer 2 (Expressway)</div>
            <div class="h-6 w-0.5 bg-indigo-500/30 mx-auto"></div>
            <div class="h-8 bg-indigo-500/20 border border-indigo-500 rounded w-[70%] mx-auto flex items-center justify-center text-[10px] text-indigo-200">Layer 1 (Arterial Roads)</div>
            <div class="h-6 w-0.5 bg-indigo-500/30 mx-auto"></div>
            <div class="h-8 bg-indigo-500/20 border border-indigo-500 rounded w-full flex items-center justify-center text-[10px] text-indigo-200">Layer 0 (Neighborhood Streets)</div>
        </div>
        <p class="text-xs text-center text-slate-400 mt-4">We jump long distances on top layers, then zoom in.</p>
    </div>
    
    <div class="bg-slate-900 p-6 rounded-2xl border border-slate-700 flex flex-col justify-center">
        <h3 class="font-bold text-white mb-2">ANN (Approximate Nearest Neighbor)</h3>
        <p class="text-sm text-slate-400 mb-4">
            We trade 1% accuracy for 100x speed. You might miss the *absolute* closest match, but you'll get the top 5 relevant ones in 5ms.
        </p>
        <div class="flex gap-2">
            <span class="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">Pinecone</span>
            <span class="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">Weaviate</span>
            <span class="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">pgvector</span>
        </div>
    </div>

  </div>
</div>
"""

# Lesson 4.5 & 4.6: Chunking & RAG Pipeline
content_4_5 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">The RAG ETL Pipeline</h2>
  
  <div class="relative py-8">
    <div class="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-purple-900 to-emerald-900 -z-0"></div>
    
    <div class="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <!-- Step 1 -->
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800 text-center w-32 h-32 flex flex-col items-center justify-center shadow-lg">
            <span class="text-2xl mb-1">📄</span>
            <strong class="text-sm text-white">Extract</strong>
            <span class="text-[10px] text-gray-500">PDF/HTML to Text</span>
        </div>

        <!-- Step 2 -->
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800 text-center w-32 h-32 flex flex-col items-center justify-center shadow-lg">
            <span class="text-2xl mb-1">✂️</span>
            <strong class="text-sm text-white">Chunk</strong>
            <span class="text-[10px] text-gray-500">Split into 512t</span>
        </div>

        <!-- Step 3 -->
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800 text-center w-32 h-32 flex flex-col items-center justify-center shadow-lg">
            <span class="text-2xl mb-1">🔢</span>
            <strong class="text-sm text-white">Embed</strong>
            <span class="text-[10px] text-gray-500">Text to Vector</span>
        </div>

        <!-- Step 4 -->
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800 text-center w-32 h-32 flex flex-col items-center justify-center shadow-lg">
            <span class="text-2xl mb-1">💾</span>
            <strong class="text-sm text-white">Upsert</strong>
            <span class="text-[10px] text-gray-500">Store in Pinecone</span>
        </div>
    </div>
  </div>
</div>
"""

content_4_6 = """
<div class="space-y-12 font-sans text-slate-200">
  <h2 class="text-3xl font-bold text-white mb-6">The Art of Chunking</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="space-y-4">
        <h3 class="font-bold text-blue-400">Sliding Window</h3>
        <div class="font-mono text-xs bg-black/40 p-4 rounded border border-slate-700 leading-relaxed">
            <span class="bg-blue-900/50 text-blue-200 px-1 rounded">[The quick brown fox jumps]</span> over the lazy dog.<br>
            The quick <span class="bg-blue-900/50 text-blue-200 px-1 rounded">[brown fox jumps over]</span> the lazy dog.<br>
            The quick brown <span class="bg-blue-900/50 text-blue-200 px-1 rounded">[fox jumps over the]</span> lazy dog.
        </div>
        <p class="text-xs text-slate-400">Preserves context at boundaries. Costs more (redundant overlap).</p>
    </div>

    <div class="space-y-4">
        <h3 class="font-bold text-purple-400">Recursive Character Split</h3>
        <div class="font-mono text-xs bg-black/40 p-4 rounded border border-slate-700 leading-relaxed">
            1. Split by `\n\n` (Paragraphs)<br>
            2. If too big, split by `\n` (Lines)<br>
            3. If too big, split by `.` (Sentences)
        </div>
        <p class="text-xs text-slate-400">Respects the semantic structure of the document.</p>
    </div>
  </div>
</div>
"""

# Lesson 4.7 & 4.8 & 4.9 & 4.10 (Advanced Topics)
content_4_7 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-4">Data Formats: JSONL vs Parquet</h2>
  <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
    <table class="w-full text-sm text-left text-slate-400">
        <thead class="text-xs text-slate-500 uppercase bg-slate-800">
            <tr><th class="px-4 py-2">Feature</th><th class="px-4 py-2">JSONL</th><th class="px-4 py-2">Parquet</th></tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-800"><td class="px-4 py-2 text-white">Read Speed</td><td class="px-4 py-2">Slow (Text parse)</td><td class="px-4 py-2 text-emerald-400">Fast (Binary)</td></tr>
            <tr class="border-b border-slate-800"><td class="px-4 py-2 text-white">Compression</td><td class="px-4 py-2">Poor</td><td class="px-4 py-2 text-emerald-400">Excellent (Columnar)</td></tr>
            <tr><td class="px-4 py-2 text-white">Use Case</td><td class="px-4 py-2">Streaming / Logs</td><td class="px-4 py-2 text-emerald-400">Training Data / Analytics</td></tr>
        </tbody>
    </table>
  </div>
</div>
"""

content_4_8 = """
<div class="space-y-8 font-sans text-slate-200">
   <h2 class="text-2xl font-bold text-white mb-4">Synthetic Data & Distillation</h2>
   <p class="text-slate-400 mb-4">When you run out of real data, you use smart AI to teach dumb AI.</p>
   <div class="flex items-center gap-4 bg-indigo-900/10 p-4 rounded-xl border border-indigo-500/30">
      <div class="text-center">
        <div class="text-2xl">🧠</div>
        <div class="text-xs font-bold text-indigo-300">GPT-4 (Teacher)</div>
      </div>
      <div class="text-xl text-slate-500">→</div>
      <div class="flex-1 text-center bg-black/30 p-2 rounded">
        <span class="text-xs font-mono text-slate-400">Generates 10k perfect Q&A pairs</span>
      </div>
      <div class="text-xl text-slate-500">→</div>
      <div class="text-center">
        <div class="text-2xl">👶</div>
        <div class="text-xs font-bold text-emerald-300">Llama 3 8B (Student)</div>
      </div>
   </div>
</div>
"""

content_4_9 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-4">PII Scrubbing (Privacy)</h2>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 bg-red-900/10 border border-red-500/20 rounded">
        <strong class="text-red-400 text-xs block mb-1">Before</strong>
        <p class="text-xs text-slate-400 font-mono">"Contact John at 555-0199"</p>
    </div>
    <div class="p-4 bg-emerald-900/10 border border-emerald-500/20 rounded">
        <strong class="text-emerald-400 text-xs block mb-1">After (Presidio)</strong>
        <p class="text-xs text-slate-400 font-mono">"Contact &lt;PERSON&gt; at &lt;PHONE&gt;"</p>
    </div>
  </div>
</div>
"""

content_4_10 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-4">Advanced embeddings (2026)</h2>
  
  <div class="space-y-4">
    <div class="bg-slate-900 p-4 rounded-xl border border-slate-700">
        <h3 class="font-bold text-white text-sm">Matryoshka Embeddings</h3>
        <p class="text-xs text-slate-400 mt-1">Russian Doll model. You can slice the vector (e.g., use only first 256 dims of 1536) and still get 90% accuracy. Great for rapid re-ranking.</p>
    </div>
    <div class="bg-slate-900 p-4 rounded-xl border border-slate-700">
        <h3 class="font-bold text-white text-sm">Binary Quantization</h3>
        <p class="text-xs text-slate-400 mt-1">Turning floats (4 bytes) into bits (0 or 1). Reduces memory usage by 32x with minimal precision loss.</p>
    </div>
  </div>
</div>
"""

content_4_11 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-4">Hands-On: PGVector Setup</h2>
  <div class="bg-black p-4 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
    CREATE EXTENSION vector;<br>
    CREATE TABLE items (id bigserial PRIMARY KEY, embedding vector(1536));<br>
    INSERT INTO items (embedding) VALUES ('[0.1, 0.2, ...]');<br>
    SELECT * FROM items ORDER BY embedding <-> '[0.1, 0.2, ...]' LIMIT 5;
  </div>
</div>
"""

content_4_12 = content_4_11 # Reuse hands-on visual for simplicity

lessons_map = {
    "genai-4-1": content_4_1,
    "genai-4-2": content_4_2,
    "genai-4-3": content_4_3,
    "genai-4-4": content_4_4,
    "genai-4-5": content_4_5,
    "genai-4-6": content_4_6,
    "genai-4-7": content_4_7,
    "genai-4-8": content_4_8,
    "genai-4-9": content_4_9,
    "genai-4-10": content_4_10,
    "genai-4-11": content_4_11,
    "genai-4-12": content_4_12,
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

print("Success! Module 4 Hyper-Enhanced (Every Chapter).")
