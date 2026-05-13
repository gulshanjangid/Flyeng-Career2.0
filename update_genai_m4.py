import re

# 12 Lessons for "4. Data Foundations for LLMs"
# Content heavily styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_4_content = """,
            {
                title: "4. Data Foundations for LLMs",
                lessons: [
                    {
                        id: "genai-4-1",
                        title: "4.1 Why Data Design Matters for LLMs",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            🗑️ Garbage In, Hallucination Out
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            State-of-the-art models (GPT-4) cannot save you from bad data. <strong>Data Design</strong> is 80% of RAG performance.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">The Silent Killer</h3>
            <p class="text-sm text-gray-400">
                Most "model failures" are actually retrieval failures caused by poor chunking, noisy HTML tags, or missing context.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">The Fix</h3>
            <p class="text-sm text-gray-400">
                We treat data prep as an engineering discipline. Pipelines, schemas, and metrics. Not just "uploading PDFs".
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-4-2",
                        title: "4.2 Tokens, Context Windows & Costs (2026)",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🪙 The Currency of AI</h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-[#1e1e1e] p-4 rounded-xl border border-gray-700 text-center">
            <strong class="text-gray-500 text-xs uppercase tracking-widest">GPT-4o</strong>
            <div class="text-2xl font-bold text-white mt-1">128k</div>
            <span class="text-xs text-green-400">Context</span>
        </div>
        <div class="bg-[#1e1e1e] p-4 rounded-xl border border-gray-700 text-center">
            <strong class="text-gray-500 text-xs uppercase tracking-widest">Claude 3.5</strong>
            <div class="text-2xl font-bold text-white mt-1">200k</div>
            <span class="text-xs text-green-400">Context</span>
        </div>
        <div class="bg-[#1e1e1e] p-4 rounded-xl border border-gray-700 text-center">
            <strong class="text-gray-500 text-xs uppercase tracking-widest">Gemini 1.5</strong>
            <div class="text-2xl font-bold text-white mt-1">2M</div>
            <span class="text-xs text-green-400">Context</span>
        </div>
        <div class="bg-[#1e1e1e] p-4 rounded-xl border border-gray-700 text-center">
            <strong class="text-gray-500 text-xs uppercase tracking-widest">Llama 3</strong>
            <div class="text-2xl font-bold text-white mt-1">128k</div>
            <span class="text-xs text-green-400">Context</span>
        </div>
    </div>

    <div class="bg-black p-6 rounded-xl border border-gray-800 font-mono text-sm space-y-2">
        <p class="text-gray-500"># Rule of Thumb</p>
        <p class="text-white">1,000 tokens ≈ 750 words</p>
        <p class="text-white">1 token ≈ 4 characters (English)</p>
        <p class="text-yellow-400 mt-2">Make sure your RAG chunks fit comfortably within the limit!</p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-4-3",
                        title: "4.3 What Are Embeddings? Intuition & Use",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-br from-green-900/40 to-teal-900/40 border border-green-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-4">
            🔢 Meaning as Math
        </h2>
        <p class="text-xl text-gray-300">
            Embeddings turn text into lists of numbers (vectors).
            <br>Concepts that are semantically similar generate vectors that are close together in space.
        </p>
    </div>

    <div class="bg-[#111] p-8 rounded-2xl border border-gray-800 flex flex-col items-center gap-6">
        <div class="flex gap-8 text-sm md:text-base">
            <div class="text-center">
                <div class="p-4 bg-gray-800 rounded-lg mb-2 text-white">"King"</div>
                <div class="font-mono text-xs text-blue-400">[0.1, 0.9, ...]</div>
            </div>
            <div class="flex items-center text-gray-500">-</div>
            <div class="text-center">
                 <div class="p-4 bg-gray-800 rounded-lg mb-2 text-white">"Man"</div>
                 <div class="font-mono text-xs text-blue-400">[0.2, 0.4, ...]</div>
            </div>
             <div class="flex items-center text-gray-500">+</div>
             <div class="text-center">
                 <div class="p-4 bg-gray-800 rounded-lg mb-2 text-white">"Woman"</div>
                 <div class="font-mono text-xs text-blue-400">[0.8, 0.5, ...]</div>
            </div>
             <div class="flex items-center text-gray-500">=</div>
             <div class="text-center">
                 <div class="p-4 bg-green-900/50 border border-green-500 rounded-lg mb-2 text-white">"Queen"</div>
                 <div class="font-mono text-xs text-green-400 text-bold">Match!</div>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-4-4",
                        title: "4.4 NumPy for Vector Thinking",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🧮 Vector Ops (NumPy)</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div>
            <h3 class="text-lg font-bold text-white mb-2">Cosine Similarity</h3>
            <p class="text-sm text-gray-400 mb-4">The core metric for semantic search. Measures the angle between two vectors.</p>
            <div class="bg-black p-4 rounded-xl border border-gray-800 font-mono text-xs text-blue-300">
                import numpy as np<br>
                <br>
                def cosine_sim(A, B):<br>
                &nbsp;&nbsp;dot = np.dot(A, B)<br>
                &nbsp;&nbsp;norm = np.linalg.norm(A) * np.linalg.norm(B)<br>
                &nbsp;&nbsp;return dot / norm
            </div>
        </div>

        <div>
            <h3 class="text-lg font-bold text-white mb-2">Why NumPy?</h3>
            <p class="text-sm text-gray-400 mb-4">Before inserting into Pinecone, you often need to normalize, batch, or check dimensions.</p>
            <div class="bg-black p-4 rounded-xl border border-gray-800 font-mono text-xs text-green-300">
                vec = vec / np.linalg.norm(vec)<br>
                <span class="text-gray-500"># Normalization ensures dot product == cosine similarity</span>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-4-5",
                        title: "4.5 Pandas for Text & Metadata Pipelines",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🐼 Pandas: The ETL Workhorse</h2>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-white text-lg block mb-4">Structured Data Prep</strong>
        <p class="text-sm text-gray-400 mb-6">Before embedding, your data lives in a DataFrame.</p>

        <div class="overflow-x-auto">
            <table class="w-full text-left text-sm text-gray-400">
                <thead class="bg-gray-900/50 uppercase text-xs">
                    <tr>
                        <th class="p-3">id</th>
                        <th class="p-3">text_chunk</th>
                        <th class="p-3">metadata</th>
                        <th class="p-3">token_count</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-800 text-gray-300 font-mono text-xs">
                    <tr>
                        <td class="p-3 text-blue-400">doc_1_0</td>
                        <td class="p-3">"The Q3 revenue was..."</td>
                        <td class="p-3">{"year": 2024}</td>
                        <td class="p-3">45</td>
                    </tr>
                     <tr>
                        <td class="p-3 text-blue-400">doc_1_1</td>
                        <td class="p-3">"Operating margin grew..."</td>
                        <td class="p-3">{"year": 2024}</td>
                        <td class="p-3">32</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-4-6",
                        title: "4.6 Data Cleaning for RAG & Agents",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-red-900/20 border border-red-500/20 p-8 rounded-3xl text-center">
        <h2 class="text-2xl font-bold text-red-400 mb-2">Clean Your Data!</h2>
        <p class="text-gray-400">
            Scanning raw HTML or PDFs directly into a Vector DB is a rookie mistake.
        </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700">
             <div class="text-2xl mb-3">🧹</div>
            <strong class="text-white block mb-2">Boilerplate</strong>
            <p class="text-xs text-gray-500">Remove headers, footers, "Click here to subscribe", and nav menus.</p>
        </div>
        <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700">
             <div class="text-2xl mb-3">🔒</div>
            <strong class="text-white block mb-2">PII Redaction</strong>
            <p class="text-xs text-gray-500">Use regex/presidio to remove Emails and SSNs before embedding.</p>
        </div>
        <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700">
             <div class="text-2xl mb-3">🔗</div>
            <strong class="text-white block mb-2">Link Resolution</strong>
            <p class="text-xs text-gray-500">Convert relative links (/about) to absolute (domain.com/about).</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-4-7",
                        title: "4.7 Chunking: From Simple to Agentic",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white mb-6">🔪 The Art of Chunking</h2>

    <div class="space-y-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Level 1: Fixed Size</h3>
            <p class="text-gray-400 text-sm mb-3">"Split every 500 characters."</p>
            <div class="bg-red-500/10 text-red-300 text-xs p-2 rounded">Bad: Splits sentences in hal...</div>
        </div>

        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Level 2: Recursive Character</h3>
            <p class="text-gray-400 text-sm mb-3">Split by paragraphs first, then sentences, then words.</p>
             <div class="bg-yellow-500/10 text-yellow-300 text-xs p-2 rounded">Better: Keeps semantic units mostly intact.</div>
        </div>

        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Level 3: Agentic / Semantic</h3>
            <p class="text-gray-400 text-sm mb-3">Use an LLM or embedding similarity to find "topic shifts" and split there.</p>
             <div class="bg-green-500/10 text-green-300 text-xs p-2 rounded">Best: Each chunk is a complete thought.</div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-4-8",
                        title: "4.8 Chunking for Cost, Latency & Quality",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📉 Optimization Physics</h2>
    
    <div class="bg-[#1e1e1e] p-8 rounded-3xl border border-gray-700 relative overflow-hidden">
        <div class="grid grid-cols-2 gap-8 relative z-10">
            <div>
                <strong class="text-blue-400 block mb-2">Micro Chunks (128 tokens)</strong>
                <ul class="text-sm text-gray-400 space-y-1">
                    <li>+ Precise retrieval</li>
                    <li>- Missing context ("It" vs "The Server")</li>
                    <li>- High Vector DB cost (More vectors)</li>
                </ul>
            </div>
            <div>
                <strong class="text-orange-400 block mb-2">Macro Chunks (2048 tokens)</strong>
                <ul class="text-sm text-gray-400 space-y-1">
                    <li>+ Capture full context</li>
                    <li>- Noise dilution (Answer buried in text)</li>
                    <li>- Wasted LLM input tokens</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="bg-black p-4 rounded-xl border border-gray-800 text-center">
        <strong class="text-white">The Golden Range (2026)</strong>
        <p class="text-green-400 text-lg font-bold mt-1">512 to 1024 Tokens</p>
        <p class="text-xs text-gray-500">With 10-20% Overlap</p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-4-9",
                        title: "4.9 Metadata & Schemas for LLM Workflows",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🏷️ Metadata is Magic</h2>
    
    <div class="bg-[#111] p-8 rounded-3xl border border-gray-800">
        <p class="text-gray-300 mb-6">
            Metadata allows you to <strong>Filter</strong> before you <strong>Search</strong>.
        </p>

        <div class="bg-black p-4 rounded-xl border border-gray-700 font-mono text-xs text-blue-300">
            {<br>
            &nbsp;&nbsp;"id": "doc_123",<br>
            &nbsp;&nbsp;"text": "Salary bands for engineering...",<br>
            &nbsp;&nbsp;<span class="text-pink-400">"metadata"</span>: {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"source": "notion",<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"created_at": 1715000000,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"access_level": "admin_only",<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"tags": ["hr", "compensation"]<br>
            &nbsp;&nbsp;}<br>
            }
        </div>
        
        <div class="mt-6 flex gap-2">
            <span class="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-600">Hybrid Search</span>
            <span class="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-600">Time Decay</span>
            <span class="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-600">RBAC</span>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-4-10",
                        title: "4.10 Preparing a Knowledge Base for RAG",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white mb-6">🏗️ The Blueprint</h2>

    <div class="relative pl-8 border-l-2 border-gray-800 space-y-8">
        <div class="relative">
             <div class="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-[#0a0a0a]"></div>
            <strong class="text-white block text-lg">1. Ingestion</strong>
            <p class="text-sm text-gray-400">Load raw PDFs, HTML, Markdown.</p>
        </div>
        
        <div class="relative">
             <div class="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-purple-500 border-4 border-[#0a0a0a]"></div>
            <strong class="text-white block text-lg">2. Cleaning (Sanitization)</strong>
            <p class="text-sm text-gray-400">Fix encoding, remove noise, redact PII.</p>
        </div>

         <div class="relative">
             <div class="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-orange-500 border-4 border-[#0a0a0a]"></div>
            <strong class="text-white block text-lg">3. Chunking & Enrichment</strong>
            <p class="text-sm text-gray-400">Split into 512t chunks. Add Title/Summary metadata to each chunk.</p>
        </div>

         <div class="relative">
             <div class="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-[#0a0a0a]"></div>
            <strong class="text-white block text-lg">4. Embedding</strong>
            <p class="text-sm text-gray-400">Generate vectors (OpenAI text-embedding-3).</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-4-11",
                        title: "4.11 Mini Project: Data Pipeline for a Small RAG System",
                        duration: "25 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-teal-900/40 to-cyan-900/40 border border-teal-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">🧪 Lab: The Pipeline</h2>
        <p class="text-gray-300 mb-8">
            You will verify your pandas + chunking skills.
        </p>

        <ul class="space-y-4">
             <li class="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <span class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center font-bold text-white shrink-0">1</span>
                <p class="text-gray-300">Load <code>course_faq.csv</code> with pandas.</p>
            </li>
             <li class="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <span class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center font-bold text-white shrink-0">2</span>
                <p class="text-gray-300">Clean whitespace and remove duplicates.</p>
            </li>
            <li class="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <span class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center font-bold text-white shrink-0">3</span>
                <p class="text-gray-300">Implement <code>recursive_split(text, size=500)</code> manually to understand it.</p>
            </li>
            <li class="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <span class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center font-bold text-white shrink-0">4</span>
                <p class="text-gray-300">Export <code>ready_for_pinecone.json</code>.</p>
            </li>
        </ul>
    </div>
</div>
`
                    },
                    {
                        id: "genai-4-12",
                        title: "4.12 Module 4 Wrap-up: From Raw Text to LLM-Ready Data",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">✅ Data Ready</h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Your data is now clean, structured, and vectorized. It's time to give it a brain.
        </p>

        <div class="inline-grid grid-cols-2 gap-8 text-left max-w-lg mx-auto">
            <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Done</strong>
                <h3 class="text-white text-lg font-bold mt-1">Data Layer</h3>
                <p class="text-gray-400 text-sm">ETL, Chunking, Embeddings.</p>
            </div>
             <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Next Up</strong>
                <h3 class="text-white text-lg font-bold mt-1">Module 5</h3>
                <p class="text-gray-400 text-sm">Vector Databases (Pinecone/Weaviate).</p>
            </div>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m4():
    print(f"🔄 Injecting GenAI Module 4 (Data Foundations)...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find Module 3 (Hybrid Track).
    m3_title = 'title: "3. Core Python for AI Engineers (Hybrid Track)"'
    m3_start = content.find(m3_title)
    
    if m3_start == -1:
        print("❌ Could not find Module 3 title.")
        return
        
    # 2. Find Module 3 End.
    # We look for the start brace of M3 first (backward from title)
    m3_brace_start = content.rfind('{', 0, m3_start)
    
    # Scan forward to find matching closing brace
    open_braces = 0
    m3_end_idx = -1
    
    for i in range(m3_brace_start, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                m3_end_idx = i + 1
                break
                
    if m3_end_idx == -1:
        print("❌ Could not parse Module 3 end.")
        return
        
    print(f"✅ Found Module 3 End at {m3_end_idx}")
    
    # 3. Check if Module 4 already exists to avoid duplication
    if 'title: "4. Data Foundations for LLMs"' in content:
        print("⚠️ Module 4 seems to already exist. Replacing it just in case.")
        # Logic to replace instead of append would be different.
        # For now, let's assume we are appending after M3. 
        # If user wants REPLACE, we should use similar logic to M3 update.
        # But commonly we are building sequentially.
        # Let's check what follows M3.
        
        # If it's `}, { title: "4. ..."` then we replace.
        pass
        
    # We will simply INSERT after M3. 
    # BUT we need to see if there is already a comma or another module.
    
    # Inspect content after m3_end_idx
    suffix = content[m3_end_idx:]
    
    # If suffix starts with comma, we keep it? 
    # Our `new_module_4_content` starts with a comma `, { ... }`
    
    # If we find existing Module 4, we should remove it first?
    # Let's try to remove existing M4 if present to be safe (idempotent).
    
    m4_title_marker = 'title: "4. Data Foundations for LLMs"'
    m4_idx = content.find(m4_title_marker)
    
    if m4_idx != -1:
        print("🔄 Removing existing Module 4 before injection...")
        m4_brace_start = content.rfind('{', 0, m4_idx)
        # Scan for end
        open_b = 0
        m4_end = -1
        for i in range(m4_brace_start, len(content)):
             char = content[i]
             if char == '{': open_b += 1
             elif char == '}': 
                 open_b -= 1
                 if open_b == 0:
                     m4_end = i + 1
                     break
        
        if m4_end != -1:
            # Remove it (including potential leading comma?)
            # Usually strict removal is [m4_brace_start : m4_end]
            # We will splice it out.
            content = content[:m4_brace_start] + content[m4_end:]
            # Now likely we have ", ," or ", \n" left.
            # We'll fix syntax implicitly by our careful insertion or simple regex cleanup later.
            print("✅ Removed existing M4 block.")
            
            # Recalculate M3 position since content changed
            m3_start = content.find(m3_title)
            m3_brace_start = content.rfind('{', 0, m3_start)
            open_braces = 0
            m3_end_idx = -1
            for i in range(m3_brace_start, len(content)):
                char = content[i]
                if char == '{': open_braces += 1
                elif char == '}': 
                    open_braces -= 1
                    if open_braces == 0:
                        m3_end_idx = i + 1
                        break

    # 4. Inject
    # Insert new_module_4_content AT m3_end_idx
    
    # Note: `new_module_4_content` starts with `,`
    # So we simply insert it.
    
    final_content = content[:m3_end_idx] + new_module_4_content + content[m3_end_idx:]
    
    # 5. Clean up potential double commas "},, {"
    final_content = final_content.replace('},,', '},')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("✅ Module 4 (Data Foundations) injected successfully!")

if __name__ == "__main__":
    update_genai_m4()
