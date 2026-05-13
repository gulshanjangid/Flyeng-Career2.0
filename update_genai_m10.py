import re

# 12 Lessons for "10. RAG Systems & Enterprise Knowledge Engines"
# Content styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_10_content = """,
            {
                title: "10. RAG Systems & Enterprise Knowledge Engines",
                lessons: [
                    {
                        id: "genai-10-1",
                        title: "10.1 Why RAG Is the Default for Enterprise AI (2026)",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            📚 The Enterprise Brain
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            In 2026, companies don't just want a "smart" model. They want a model that knows <strong>Their Data</strong>, strictly follows <strong>Their Rules</strong>, and can <strong>Cite Sources</strong>. That is RAG.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Build vs Fine-Tune</h3>
            <p class="text-sm text-gray-400">
                Fine-tuning is for "style" and "vocabulary". RAG is for "facts" and "knowledge". You can't fine-tune daily news.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">The "Why"</h3>
            <ul class="text-sm text-gray-400 list-disc list-inside">
                <li><strong>Privacy:</strong> Data stays in your VPC.</li>
                <li><strong>Freshness:</strong> Update docs, not weights.</li>
                <li><strong>Cost:</strong> Converting text to vectors is cheap.</li>
            </ul>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-10-2",
                        title: "10.2 RAG Basics: The Retrieve–Then–Generate Loop",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔄 The Loop</h2>
    
    <div class="flex flex-col gap-4 items-center justify-center p-8 bg-[#1e1e1e] rounded-3xl border border-gray-700">
        <div class="flex items-center gap-4 w-full justify-center">
            <div class="p-4 bg-black border border-gray-600 rounded-xl text-center w-32">
                <span class="text-2xl">👤</span>
                <p class="text-xs text-gray-400 mt-2">User Query</p>
            </div>
            <span class="text-gray-500">➜</span>
            <div class="p-4 bg-blue-900/20 border border-blue-500 rounded-xl text-center w-32">
                <span class="text-2xl">🔍</span>
                <p class="text-xs text-blue-300 mt-2">Retriever</p>
            </div>
             <span class="text-gray-500">➜</span>
            <div class="p-4 bg-green-900/20 border border-green-500 rounded-xl text-center w-32">
                <span class="text-2xl">📄</span>
                <p class="text-xs text-green-300 mt-2">Context</p>
            </div>
            <span class="text-gray-500">➜</span>
            <div class="p-4 bg-purple-900/20 border border-purple-500 rounded-xl text-center w-32">
                <span class="text-2xl">🤖</span>
                <p class="text-xs text-purple-300 mt-2">LLM</p>
            </div>
        </div>
        
        <div class="w-full bg-black/50 p-4 rounded-xl border border-gray-800 text-sm text-gray-300 mt-4 font-mono">
            Prompt: "Answer the QUERY using only the CONTEXT."
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-10-3",
                        title: "10.3 Advanced RAG Types: Hybrid, Long, Agentic & GraphRAG",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🚀 Beyond Basic Vector Search</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800">
            <strong class="text-blue-400 block mb-2">Hybrid Search</strong>
            <p class="text-xs text-gray-400">Vectors (Semantic) + Keywords (BM25). Essential for finding "Sku-123".</p>
        </div>
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800">
            <strong class="text-purple-400 block mb-2">GraphRAG</strong>
            <p class="text-xs text-gray-400">Knowledge Graphs. "How is Entity A related to Entity B via Entity C?"</p>
        </div>
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800">
            <strong class="text-green-400 block mb-2">Agentic RAG</strong>
            <p class="text-xs text-gray-400">Agent decides <em>what</em> to search for. "I need sales data, then weather data."</p>
        </div>
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800">
            <strong class="text-orange-400 block mb-2">Long Context RAG</strong>
            <p class="text-xs text-gray-400">Dump 100 PDFs into Gemini-1.5-Pro. Retrieve nothing. Read everything.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-10-4",
                        title: "10.4 Designing Retrieval Pipelines: From Query to Context",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛠️ The Retrieval Stack</h2>
    
    <div class="space-y-4">
        <div class="flex items-center gap-4 bg-[#1e1e1e] p-4 rounded-xl border border-gray-700">
            <span class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white">1</span>
            <div>
                <strong class="text-white block">Query Rewriting</strong>
                <p class="text-xs text-gray-400">User: "Stats?" -> LLM -> "Latest Q3 revenue statistics for SaaS products."</p>
            </div>
        </div>
        
         <div class="flex items-center gap-4 bg-[#1e1e1e] p-4 rounded-xl border border-gray-700">
            <span class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white">2</span>
            <div>
                <strong class="text-white block">Retrieval (Dense + Sparse)</strong>
                <p class="text-xs text-gray-400">Fetch top 100 chunks using Vectors and Keyword match.</p>
            </div>
        </div>

        <div class="flex items-center gap-4 bg-[#1e1e1e] p-4 rounded-xl border border-gray-700">
            <span class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white">3</span>
            <div>
                <strong class="text-white block">Re-Ranking (Cohere/BGE)</strong>
                <p class="text-xs text-gray-400">Cross-encoder model sorts the 100 chunks. Pick top 5 most relevant.</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-10-5",
                        title: "10.5 Vector Databases for RAG (Pinecone, Weaviate, Qdrant)",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🗄️ The Memory Store</h2>
    
    <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800 text-center">
            <h3 class="text-lg font-bold text-white mb-2">Pinecone</h3>
            <p class="text-xs text-gray-400">Managed. Expensive. Fast. "The Apple of Vector DBs."</p>
            <div class="mt-4 px-3 py-1 bg-blue-900/30 text-blue-400 text-[10px] rounded-full inline-block">Cloud Native</div>
        </div>
        
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800 text-center">
            <h3 class="text-lg font-bold text-white mb-2">Qdrant</h3>
            <p class="text-xs text-gray-400">Rust-based. Fast. Open Source. Great filtering.</p>
            <div class="mt-4 px-3 py-1 bg-orange-900/30 text-orange-400 text-[10px] rounded-full inline-block">Performance</div>
        </div>

        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800 text-center">
            <h3 class="text-lg font-bold text-white mb-2">Weaviate</h3>
            <p class="text-xs text-gray-400">Hybrid Search built-in. GraphQL. Modular.</p>
             <div class="mt-4 px-3 py-1 bg-green-900/30 text-green-400 text-[10px] rounded-full inline-block">Hybrid King</div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-10-6",
                        title: "10.6 Data Preparation & Chunking Strategies",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">
            🔪 Garbage In, Garbage Out
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Retrieval is only as good as your chunks. Splitting a sentence in half destroys its meaning.
        </p>
    </div>

    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-white block mb-4">Chunking Strategies</strong>
        <div class="space-y-3">
             <div class="flex justify-between items-center p-3 bg-gray-900 rounded border border-gray-700">
                 <span class="text-gray-300 text-sm">Naive Splitting</span>
                 <span class="text-red-400 text-xs">Bad</span>
             </div>
             <div class="flex justify-between items-center p-3 bg-gray-900 rounded border border-gray-700">
                 <span class="text-gray-300 text-sm">Recursive Character</span>
                 <span class="text-yellow-400 text-xs">Standard</span>
             </div>
             <div class="flex justify-between items-center p-3 bg-gray-900 rounded border border-gray-700">
                 <span class="text-gray-300 text-sm">Semantic / Agentic</span>
                 <span class="text-green-400 text-xs">Best (2026)</span>
             </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-10-7",
                        title: "10.7 Prompting Patterns for Grounded RAG Answers",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🎯 Sticking to the Script</h2>
    
    <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700 font-mono text-sm">
        <div class="text-gray-500 mb-2"># RAG Prompt Template</div>
        <p class="text-green-400 mb-2">"You are a helpful assistant. Answer the user question using ONLY the context below."</p>
        <p class="text-green-400 mb-2">"If the answer is not in the context, say 'I don't know'."</p>
        <p class="text-green-400 mb-4">"Cite your sources like [1]."</p>
        
        <div class="p-3 bg-black border border-gray-600 rounded mb-4 text-gray-300">
            Context:<br>
            [1] The refund policy states 30 days.
        </div>
        
        <div class="text-blue-300">User: Can I get a refund after 45 days?</div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-10-8",
                        title: "10.8 GraphRAG & Hybrid Graph-Based Retrieval",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🕸️ Connecting the Dots</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div>
             <h3 class="text-lg font-bold text-white mb-2">Vector Limit</h3>
             <p class="text-sm text-gray-400 mb-4">Vectors find "similar" text. They are bad at reasoning about relationships.</p>
             <div class="p-4 bg-red-900/10 border border-red-500/30 rounded text-center text-xs text-red-300">
                 Query: "How does A affect B?" <br>
                 Vector: "Here is a doc about A. Here is a doc about B."
             </div>
        </div>
         <div>
             <h3 class="text-lg font-bold text-white mb-2">Graph Power</h3>
             <p class="text-sm text-gray-400 mb-4">Graphs explicitly map connections.</p>
             <div class="p-4 bg-green-900/10 border border-green-500/30 rounded text-center text-xs text-green-300">
                 Graph: (A) --[causes]--> (C) --[affects]--> (B) <br>
                 Path Found!
             </div>
        </div>
    </div>
    
    <div class="bg-black p-4 rounded-xl border border-gray-800 text-sm text-center text-gray-400">
        GraphRAG (Microsoft) builds these graphs automatically from text using an LLM.
    </div>
</div>
`
                    },
                    {
                        id: "genai-10-9",
                        title: "10.9 RAG for Compliance, Governance & Explainability",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">⚖️ Enterprise Rules</h2>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <ul class="space-y-6">
            <li class="flex items-start gap-4">
                <div class="p-2 bg-yellow-900/30 rounded text-yellow-400 text-xl">🔒</div>
                <div>
                    <strong class="text-white block">Access Control (ACLs)</strong>
                    <p class="text-sm text-gray-400">Users can only retrieve chunks from documents they have permission to view. Filtering happens <em>before</em> search.</p>
                </div>
            </li>
             <li class="flex items-start gap-4">
                <div class="p-2 bg-blue-900/30 rounded text-blue-400 text-xl">📜</div>
                <div>
                    <strong class="text-white block">Citations</strong>
                    <p class="text-sm text-gray-400">Every claim must link back to a source ID. "Trust but verify."</p>
                </div>
            </li>
             <li class="flex items-start gap-4">
                <div class="p-2 bg-purple-900/30 rounded text-purple-400 text-xl">🗑️</div>
                <div>
                    <strong class="text-white block">The "Right to be Forgotten"</strong>
                    <p class="text-sm text-gray-400">Deleting a user means deleting their vectors immediately.</p>
                </div>
            </li>
        </ul>
    </div>
</div>
`
                    },
                    {
                        id: "genai-10-10",
                        title: "10.10 RAG + Agents: Knowledge-Driven Automation",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🦸 Agentic RAG</h2>
    
    <p class="text-gray-300 mb-6">
        Don't just search once. Let an agent "research".
    </p>
    
    <div class="flex flex-col gap-2 font-mono text-sm">
        <div class="p-3 bg-gray-800 rounded border border-gray-700 text-gray-300">
            <span class="text-blue-400">Goal:</span> Compare Q3 sales for Region A vs Region B.
        </div>
        <div class="mx-auto h-4 w-0.5 bg-gray-600"></div>
         <div class="p-3 bg-gray-800 rounded border border-gray-700 text-gray-300">
            <span class="text-purple-400">Action:</span> Search "Region A Sales Q3"
        </div>
        <div class="mx-auto h-4 w-0.5 bg-gray-600"></div>
         <div class="p-3 bg-gray-800 rounded border border-gray-700 text-gray-300">
            <span class="text-purple-400">Action:</span> Search "Region B Sales Q3"
        </div>
         <div class="mx-auto h-4 w-0.5 bg-gray-600"></div>
         <div class="p-3 bg-green-900/30 rounded border border-green-500 text-white font-bold">
            <span class="text-green-400">Result:</span> Region A was 10% higher.
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-10-11",
                        title: "10.11 Mini Project: Build a Production-Style RAG Knowledge Engine",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">🏗️ Lab: The Knowledge Engine</h2>
        <p class="text-gray-300 mb-8">
            Build a specialized search engine for a "Company Handbook".
        </p>

        <div class="space-y-4">
            <div class="p-4 bg-black/40 rounded-xl border border-white/5">
    </div>
</div>
`
                    },
                    {
                        id: "genai-10-12",
                        title: "10.12 Module 10 Wrap-up: From Search to Enterprise Knowledge Engines",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">📚 Library Built</h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Your agents are now grounded in reality. They know what your company knows.
        </p>

        <div class="inline-grid grid-cols-2 gap-8 text-left max-w-lg mx-auto">
            <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Mastered</strong>
                <h3 class="text-white text-lg font-bold mt-1">RAG Systems</h3>
                <p class="text-gray-400 text-sm">Vectors, Graphs, Hybrid Search.</p>
            </div>
             <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Next Up</strong>
                <h3 class="text-white text-lg font-bold mt-1">Module 11</h3>
                <p class="text-gray-400 text-sm">Multimodal AI (Vision & Audio).</p>
            </div>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m10():
    print(f"🔄 Injecting GenAI Module 10 (RAG Systems)...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find Module 9.
    m9_title = 'title: "9. AI Agents & Automation"'
    m9_start = content.find(m9_title)
    
    if m9_start == -1:
        print("❌ Could not find Module 9 title.")
        return
        
    # 2. Find Module 9 End.
    m9_brace_start = content.rfind('{', 0, m9_start)
    
    open_braces = 0
    m9_end_idx = -1
    
    for i in range(m9_brace_start, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                m9_end_idx = i + 1
                break
                
    if m9_end_idx == -1:
        print("❌ Could not parse Module 9 end.")
        return
        
    print(f"✅ Found Module 9 End at {m9_end_idx}")

    # 3. Check for Existing M10 and Remove if present
    m10_title_marker = 'title: "10. RAG Systems & Enterprise Knowledge Engines"'
    m10_idx = content.find(m10_title_marker)
    
    if m10_idx != -1:
        print("🔄 Removing existing Module 10 before injection...")
        m10_brace_start = content.rfind('{', 0, m10_idx)
        # Scan for end
        open_b = 0
        m10_end = -1
        for i in range(m10_brace_start, len(content)):
             char = content[i]
             if char == '{': open_b += 1
             elif char == '}': 
                 open_b -= 1
                 if open_b == 0:
                     m10_end = i + 1
                     break
        
        if m10_end != -1:
            content = content[:m10_brace_start] + content[m10_end:]
            print("✅ Removed existing M10 block.")
            
            # Recalculate M9 position
            m9_start = content.find(m9_title)
            m9_brace_start = content.rfind('{', 0, m9_start)
            open_braces = 0
            m9_end_idx = -1
            for i in range(m9_brace_start, len(content)):
                char = content[i]
                if char == '{': open_braces += 1
                elif char == '}': 
                    open_braces -= 1
                    if open_braces == 0:
                        m9_end_idx = i + 1
                        break

    # 4. Inject
    final_content = content[:m9_end_idx] + new_module_10_content + content[m9_end_idx:]
    
    # 5. Clean up potential double commas "},, {"
    final_content = final_content.replace('},,', '},')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("✅ Module 10 (RAG) injected successfully!")

if __name__ == "__main__":
    update_genai_m10()
