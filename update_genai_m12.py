import re

# 12 Lessons for "12. Vector Databases & Memory Architectures"
# Content styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_12_content = """,
            {
                title: "12. Vector Databases & Memory Architectures",
                lessons: [
                    {
                        id: "genai-12-1",
                        title: "12.1 Why Memory Is the Real Moat",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-indigo-900/40 to-blue-900/40 border border-indigo-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 mb-4">
            🧠 The Memory Moat
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Models are commodities. GPT-5 will be available to everyone. Your <strong>Context</strong> and <strong>Memory</strong> are unique to you.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Stateless AI</h3>
            <p class="text-sm text-gray-400">
                User: "Hi R2."<br>
                AI: "Hello."<br>
                User: "My name is Luke."<br>
                AI: "Hello Luke."<br>
                <span class="text-red-400 text-xs">Refresh Page...</span><br>
                AI: "Who are you?"
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Stateful AI</h3>
            <p class="text-sm text-gray-400">
                Vector DB stores interactions.<br>
                User: "What was my dad's name?"<br>
                AI (Retrieves Memory): "Anakin."
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-12-2",
                        title: "12.2 Vector Databases 101 (Concepts & Roles)",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📐 Dimensions of Thought</h2>
    
    <div class="flex flex-col md:flex-row gap-8 items-center justify-center bg-[#1e1e1e] p-8 rounded-3xl">
        <div class="text-center">
            <div class="bg-black p-4 rounded-xl border border-gray-700 w-48">
                <strong class="text-white block mb-2">"Apple"</strong>
                <p class="text-[10px] text-gray-500 font-mono">[0.1, 0.9, -0.3...]</p>
            </div>
        </div>

        <div class="text-3xl text-gray-600">vs</div>

        <div class="text-center">
            <div class="bg-black p-4 rounded-xl border border-gray-700 w-48">
                <strong class="text-white block mb-2">"iPhone"</strong>
                <p class="text-[10px] text-gray-500 font-mono">[0.1, 0.8, -0.2...]</p>
            </div>
        </div>
        
        <div class="w-full md:w-auto p-4 bg-green-900/20 border border-green-500/50 rounded-xl text-center">
            <strong class="text-green-400 block mb-1">Similarity: 98%</strong>
            <p class="text-xs text-gray-400">Classic DBs can't see this connection.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-12-3",
                        title: "12.3 The 2026 Vector DB Landscape",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🗺️ The Landscape</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800 text-center hover:border-blue-500 transition-colors">
            <div class="w-12 h-12 bg-blue-900 rounded-full mx-auto mb-2 flex items-center justify-center">P</div>
            <strong class="text-white text-sm">Pinecone</strong>
            <p class="text-[10px] text-gray-500">Managed</p>
        </div>
         <div class="bg-[#111] p-4 rounded-xl border border-gray-800 text-center hover:border-orange-500 transition-colors">
            <div class="w-12 h-12 bg-orange-900 rounded-full mx-auto mb-2 flex items-center justify-center">Q</div>
            <strong class="text-white text-sm">Qdrant</strong>
            <p class="text-[10px] text-gray-500">OSS / Rust</p>
        </div>
         <div class="bg-[#111] p-4 rounded-xl border border-gray-800 text-center hover:border-green-500 transition-colors">
            <div class="w-12 h-12 bg-green-900 rounded-full mx-auto mb-2 flex items-center justify-center">W</div>
            <strong class="text-white text-sm">Weaviate</strong>
            <p class="text-[10px] text-gray-500">Hybrid</p>
        </div>
         <div class="bg-[#111] p-4 rounded-xl border border-gray-800 text-center hover:border-purple-500 transition-colors">
            <div class="w-12 h-12 bg-purple-900 rounded-full mx-auto mb-2 flex items-center justify-center">C</div>
            <strong class="text-white text-sm">Chroma</strong>
            <p class="text-[10px] text-gray-500">Dev-First</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-12-4",
                        title: "12.4 Pinecone vs Weaviate vs Qdrant (RAG Focus)",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🥊 Fight Night</h2>
    
    <div class="overflow-hidden rounded-2xl border border-gray-800">
        <table class="w-full text-left text-sm text-gray-400">
             <thead class="bg-gray-900 text-white uppercase text-xs">
                <tr>
                    <th class="p-4">Feature</th>
                    <th class="p-4">Pinecone</th>
                    <th class="p-4">Weaviate</th>
                    <th class="p-4">Qdrant</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-800 bg-[#111]">
                <tr>
                    <td class="p-4">Serverless</td>
                    <td class="p-4 text-green-400">Yes (Native)</td>
                    <td class="p-4">Cloud Option</td>
                    <td class="p-4">Cloud Option</td>
                </tr>
                 <tr>
                    <td class="p-4">Hybrid Search</td>
                    <td class="p-4">Sparse Vectors</td>
                    <td class="p-4 text-green-400">Built-in (BM25)</td>
                    <td class="p-4">Supported</td>
                </tr>
                 <tr>
                    <td class="p-4">Self-Host</td>
                    <td class="p-4 text-red-400">No</td>
                    <td class="p-4 text-green-400">Yes (Docker)</td>
                    <td class="p-4 text-green-400">Yes (Docker)</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`
                    },
                    {
                        id: "genai-12-5",
                        title: "12.5 Index Structures, Quantization & Performance",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">⚡ Speed vs Accuracy</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div>
            <h3 class="text-lg font-bold text-white mb-2">HNSW Index</h3>
            <p class="text-sm text-gray-400 mb-4">
                Hierarchical Navigable Small World. Think of it like a "Skip List" for high-dimensional space.
                <br><strong>Trade-off:</strong> High RAM usage for crazy fast search.
            </p>
        </div>
         <div>
            <h3 class="text-lg font-bold text-white mb-2">Quantization</h3>
            <p class="text-sm text-gray-400 mb-4">
                Squeezing 32-bit floats into 8-bit integers (or binary!).
                <br><strong>Trade-off:</strong> 4x-32x less RAM, slightly lower accuracy.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-12-6",
                        title: "12.6 Context Engineering & Memory Architectures",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-teal-900/40 to-emerald-900/40 border border-teal-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">🏗️ Building the Prompt</h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            You can't stuff 1 million tokens into every call. You need a strategy.
        </p>
    </div>

    <div class="space-y-4">
        <div class="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800">
            <span class="p-2 bg-gray-800 rounded font-mono text-xs text-white">Strategy A</span>
            <div>
                <strong class="text-white block">Rolling Window</strong>
                <p class="text-xs text-gray-400">Always keep the last 10 messages. "Goldfish Memory".</p>
            </div>
        </div>
         <div class="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800">
            <span class="p-2 bg-blue-900/30 rounded font-mono text-xs text-blue-300">Strategy B</span>
            <div>
                <strong class="text-white block">Semantic Recall</strong>
                <p class="text-xs text-gray-400">Query DB for *relevant* past messages based on current topic.</p>
            </div>
        </div>
         <div class="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800">
            <span class="p-2 bg-purple-900/30 rounded font-mono text-xs text-purple-300">Strategy C</span>
            <div>
                <strong class="text-white block">Summary Optimization</strong>
                <p class="text-xs text-gray-400">LLM summarizes old chats into a condensed "Knowledge Graph" stored in context.</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-12-7",
                        title: "12.7 Designing Schemas, Collections & Tenants",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🗂️ Dealing with Data</h2>
    
    <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700 font-mono text-sm leading-8 text-gray-300">
        <span class="text-blue-400">Collection:</span> "Users" <span class="text-gray-600">// Separate index for performance</span><br>
        <div class="ml-4 border-l-2 border-gray-600 pl-4 mt-2">
            <span class="text-purple-400">Point ID:</span> "msg_123"<br>
            <span class="text-yellow-400">Vector:</span> [...] <br>
            <span class="text-green-400">Metadata:</span> {<br>
            &nbsp;&nbsp;"user_id": "u_99",<br>
            &nbsp;&nbsp;"role": "admin",<br>
            &nbsp;&nbsp;"timestamp": 1715000000<br>
            }
        </div>
        <div class="mt-4 p-2 bg-red-900/20 text-red-300 rounded border border-red-500/30 text-center">
            ⚠️ Never query without a \`user_id\` filter in a multi-tenant app!
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-12-8",
                        title: "12.8 Hybrid, Multi-Vector & Sparse Retrieval",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔍 Better Search</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div>
            <h3 class="text-lg font-bold text-white mb-2">The Problem</h3>
            <p class="text-sm text-gray-400">
                Dense vectors capture <em>meaning</em> but miss <em>keywords</em>.
                <br>Query: "Error 505 module"
                <br>Vector Result: "System failure guide" (Missing "505")
            </p>
        </div>
         <div>
            <h3 class="text-lg font-bold text-white mb-2">The Solution (Hybrid)</h3>
            <p class="text-sm text-gray-400">
                Combine Dense Score + Sparse Score (BM25).
                <br>Result: "Error 505 module documentation" (Found "505" and meaning).
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-12-9",
                        title: "12.9 Long-Context & “Infinite Memory” Tricks",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">♾️ Infinite Stream</h2>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-white block mb-4">Cascading KV Cache</strong>
        <p class="text-sm text-gray-400 mb-6">
            Instead of re-computing the attention for the whole history every time, we cache the key-value states.
        </p>
        
        <div class="flex gap-1 h-8">
            <div class="w-1/4 bg-blue-900 rounded-l skew-x-12 opacity-50"></div>
            <div class="w-1/4 bg-blue-900 skew-x-12 opacity-70"></div>
            <div class="w-1/4 bg-blue-900 skew-x-12 opacity-90"></div>
            <div class="w-1/4 bg-blue-500 rounded-r skew-x-12 border-2 border-white">Current Token</div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-12-10",
                        title: "12.10 Choosing and Operating a Vector DB",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">✅ Production Checklist</h2>
    
    <ul class="space-y-3">
        <li class="p-3 bg-gray-900 rounded border border-gray-700 flex justify-between items-center text-sm text-gray-300">
            <span>Scale (< 1M Vectors)</span>
            <span class="text-blue-400">Postgres (pgvector)</span>
        </li>
         <li class="p-3 bg-gray-900 rounded border border-gray-700 flex justify-between items-center text-sm text-gray-300">
            <span>Scale (> 10M Vectors)</span>
            <span class="text-orange-400">Qdrant / Milvus</span>
        </li>
         <li class="p-3 bg-gray-900 rounded border border-gray-700 flex justify-between items-center text-sm text-gray-300">
            <span>Latency Critical</span>
            <span class="text-green-400">Pinecone (p2 pods)</span>
        </li>
    </ul>
</div>
`
                    },
                    {
                        id: "genai-12-11",
                        title: "12.11 Mini Project: Design a Memory Layer",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">🧠 Lab: Architecting Memory</h2>
        <p class="text-gray-300 mb-8">
            Design the schema for a "Personal Learning Assistant".
        </p>

        <div class="space-y-4">
            <div class="bg-black/40 p-4 rounded-xl border border-white/5">
                <strong class="text-purple-400 block mb-1">Requirement</strong>
                <p class="text-sm text-gray-400">Must remember user's coding skill level (Beginner/Expert) and past questions.</p>
            </div>
             <div class="bg-black/40 p-4 rounded-xl border border-white/5">
                <strong class="text-purple-400 block mb-1">Schema</strong>
                <pre class="text-xs text-gray-500 font-mono mt-2">
{
  "vector": [ ... ],
  "metadata": {
    "type": "interaction",
    "topic": "react",
    "skill_level": "expert",
    "timestamp": 123456
  }
}
                </pre>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-12-12",
                        title: "12.12 Module 12 Wrap-up: Context Engines",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">💾 Memory Upgraded</h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            You now understand the systems that give AI its "Long Term Memory".
        </p>

        <div class="inline-grid grid-cols-2 gap-8 text-left max-w-lg mx-auto">
            <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Mastered</strong>
                <h3 class="text-white text-lg font-bold mt-1">Vector DBs</h3>
                <p class="text-gray-400 text-sm">Indexing, Retrieval, Metadata.</p>
            </div>
             <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Next Up</strong>
                <h3 class="text-white text-lg font-bold mt-1">Module 13</h3>
                <p class="text-gray-400 text-sm">Full-Stack GenAI & Deployment.</p>
            </div>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m12():
    print(f"🔄 Injecting GenAI Module 12 (Vector DBs)...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find Module 11.
    m11_title = 'title: "11. Multimodal AI Systems"'
    m11_start = content.find(m11_title)
    
    if m11_start == -1:
        print("❌ Could not find Module 11 title.")
        return
        
    # 2. Find Module 11 End.
    m11_brace_start = content.rfind('{', 0, m11_start)
    
    open_braces = 0
    m11_end_idx = -1
    
    for i in range(m11_brace_start, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                m11_end_idx = i + 1
                break
                
    if m11_end_idx == -1:
        print("❌ Could not parse Module 11 end.")
        return
        
    print(f"✅ Found Module 11 End at {m11_end_idx}")

    # 3. Check for Existing M12 and Remove if present
    m12_title_marker = 'title: "12. Vector Databases & Memory Architectures"'
    m12_idx = content.find(m12_title_marker)
    
    if m12_idx != -1:
        print("🔄 Removing existing Module 12 before injection...")
        m12_brace_start = content.rfind('{', 0, m12_idx)
        # Scan for end
        open_b = 0
        m12_end = -1
        for i in range(m12_brace_start, len(content)):
             char = content[i]
             if char == '{': open_b += 1
             elif char == '}': 
                 open_b -= 1
                 if open_b == 0:
                     m12_end = i + 1
                     break
        
        if m12_end != -1:
            content = content[:m12_brace_start] + content[m12_end:]
            print("✅ Removed existing M12 block.")
            
            # Recalculate M11 position
            m11_start = content.find(m11_title)
            m11_brace_start = content.rfind('{', 0, m11_start)
            open_braces = 0
            m11_end_idx = -1
            for i in range(m11_brace_start, len(content)):
                char = content[i]
                if char == '{': open_braces += 1
                elif char == '}': 
                    open_braces -= 1
                    if open_braces == 0:
                        m11_end_idx = i + 1
                        break

    # 4. Inject
    final_content = content[:m11_end_idx] + new_module_12_content + content[m11_end_idx:]
    
    # 5. Clean up potential double commas "},, {"
    final_content = final_content.replace('},,', '},')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("✅ Module 12 (Vector DBs) injected successfully!")

if __name__ == "__main__":
    update_genai_m12()
