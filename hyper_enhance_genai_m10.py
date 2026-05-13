
# hyper_enhance_genai_m10.py
# Module 10: RAG Systems & Enterprise Knowledge Engines

# 10.1 Why RAG Is the Default for Enterprise AI (2026)
content_10_1 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 text-5xl">📚</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            The "Open Book" Exam
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Fine-tuning teaches an LLM <strong>how to speak</strong>. RAG teaches it <strong>what to know</strong>. In the enterprise, we value accuracy over creativity.
        </p>
    </div>

    <!-- The Comparison Visual -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Scenario A: No RAG -->
        <div class="bg-[#111] p-8 rounded-3xl border border-red-900/30 relative overflow-hidden group">
            <div class="absolute inset-0 bg-red-900/5 group-hover:bg-red-900/10 transition"></div>
            <div class="relative z-10">
                <div class="text-xs font-bold text-red-500 mb-2 uppercase tracking-widest">Without RAG</div>
                <h3 class="text-2xl font-bold text-white mb-4">The Hallucination</h3>
                <div class="bg-black/50 p-4 rounded-xl border border-red-500/20 mb-4">
                    <p class="text-xs text-slate-500 mb-1">User Query</p>
                    <p class="text-sm text-slate-300">"What is the coverage limit for policy XJ-9?"</p>
                </div>
                <div class="bg-black/50 p-4 rounded-xl border border-slate-700">
                    <p class="text-xs text-blue-400 mb-1">GPT-4 (Training Data)</p>
                    <p class="text-sm text-slate-300">"Policy XJ-9 typically covers up to $1M..." <span class="text-red-400 font-bold">(Made up)</span></p>
                </div>
            </div>
        </div>

        <!-- Scenario B: With RAG -->
        <div class="bg-[#111] p-8 rounded-3xl border border-emerald-900/30 relative overflow-hidden group">
            <div class="absolute inset-0 bg-emerald-900/5 group-hover:bg-emerald-900/10 transition"></div>
            <div class="relative z-10">
                <div class="text-xs font-bold text-emerald-500 mb-2 uppercase tracking-widest">With RAG</div>
                <h3 class="text-2xl font-bold text-white mb-4">The Grounded Truth</h3>
                <div class="bg-black/50 p-4 rounded-xl border border-emerald-500/20 mb-4">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-xs bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded">Retrieval</span>
                        <span class="text-[10px] text-slate-500">Found 3 docs</span>
                    </div>
                    <p class="text-[10px] font-mono text-slate-400">📄 policy_2024.pdf (Page 12)</p>
                </div>
                <div class="bg-black/50 p-4 rounded-xl border border-slate-700">
                    <p class="text-xs text-blue-400 mb-1">GPT-4 + Context</p>
                    <p class="text-sm text-slate-300">"According to the 2024 Terms, Policy XJ-9 covers <strong>$500k</strong>."</p>
                </div>
            </div>
        </div>
    </div>
</div>
"""

# 10.2 RAG Basics: The Retrieve–Then–Generate Loop
content_10_2 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 text-5xl">🔄</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            The RAG Architectures
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            It's a pipeline, not a single API call. From <strong>Ingestion</strong> to <strong>Generation</strong>.
        </p>
    </div>

    <!-- The Pipeline Diagram -->
    <div class="relative bg-[#0a0a0a] p-8 rounded-3xl border border-slate-800 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
        
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center text-center">
            
            <!-- Step 1: Ingest -->
            <div class="p-4 bg-slate-900 rounded-2xl border border-slate-700">
                <div class="text-2xl mb-2">📄</div>
                <h4 class="font-bold text-white text-sm">1. Ingest</h4>
                <p class="text-[10px] text-slate-400 mt-1">PDF Loading<br>Chunking</p>
            </div>

            <div class="hidden lg:block text-slate-600">→</div>

            <!-- Step 2: Embed -->
            <div class="p-4 bg-slate-900 rounded-2xl border border-slate-700">
                <div class="text-2xl mb-2">🔢</div>
                <h4 class="font-bold text-white text-sm">2. Embed</h4>
                <p class="text-[10px] text-slate-400 mt-1">OpenAI Ada-002<br>Voyage AI</p>
            </div>

            <div class="hidden lg:block text-slate-600">→</div>

            <!-- Step 3: Store -->
            <div class="p-4 bg-blue-900/20 rounded-2xl border border-blue-500">
                <div class="text-2xl mb-2">🗄️</div>
                <h4 class="font-bold text-blue-400 text-sm">3. Vector DB</h4>
                <p class="text-[10px] text-slate-400 mt-1">Pinecone / Weaviate<br>(Index)</p>
            </div>
            
            <!-- Step 4 & 5 grouped for retrieval -->
        </div>

        <div class="mt-8 pt-8 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0a0a] px-4 text-xs text-slate-500 font-bold tracking-widest">QUERY TIME</div>

            <!-- Step 4: Retrieve -->
            <div class="p-6 bg-slate-900 rounded-2xl border border-slate-700">
                <h4 class="font-bold text-white text-sm mb-2">4. Retrieve (k-NN)</h4>
                <p class="text-xs text-slate-400">User Query: "How do I reset?"</p>
                <div class="mt-2 text-[10px] bg-black p-2 rounded font-mono text-green-400">
                    vector = embed(query)<br>
                    docs = db.search(vector)
                </div>
            </div>

            <div class="flex items-center justify-center text-3xl text-slate-600">➕</div>

            <!-- Step 5: Generate -->
            <div class="p-6 bg-purple-900/20 rounded-2xl border border-purple-500">
                <h4 class="font-bold text-purple-400 text-sm mb-2">5. Generate</h4>
                <p class="text-xs text-slate-400">Context Window Stuffing</p>
                <div class="mt-2 text-[10px] bg-black p-2 rounded font-mono text-purple-300">
                    prompt = f"Context: {docs}\nQ: {query}"<br>
                    llm.complete(prompt)
                </div>
            </div>
        </div>
    </div>
</div>
"""

# 10.3 Advanced RAG Types: Hybrid, Long, Agentic & GraphRAG
content_10_3 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-5xl">⚡</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Advanced RAG Patterns
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Naive RAG (top-k) fails on complex questions. We need <strong>Routing</strong>, <strong>HyDE</strong>, and <strong>Re-ranking</strong>.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Pattern 1: Hybrid Search -->
        <div class="bg-slate-900 p-6 rounded-3xl border border-slate-800">
            <h3 class="text-xl font-bold text-blue-400 mb-4">1. Hybrid Search (Alpha)</h3>
            <p class="text-sm text-slate-400 mb-4 font-mono">Score = α * Dense + (1-α) * Sparse</p>
            <ul class="space-y-3 text-sm text-slate-300">
                <li class="flex gap-2">
                    <span class="text-blue-500">Dense (Vectors)</span>
                    <span class="text-slate-500">Matches concepts ("Vehicle malfunction").</span>
                </li>
                <li class="flex gap-2">
                    <span class="text-orange-500">Sparse (BM25)</span>
                    <span class="text-slate-500">Matches keywords ("Error Code 505").</span>
                </li>
            </ul>
        </div>

        <!-- Pattern 2: Re-ranking -->
        <div class="bg-slate-900 p-6 rounded-3xl border border-slate-800">
            <h3 class="text-xl font-bold text-purple-400 mb-4">2. Re-ranking (Cross Encoder)</h3>
            <p class="text-sm text-slate-400 mb-4">The "Two-Stage" Retrieval.</p>
            
            <div class="flex items-center gap-2 mb-2">
                <div class="bg-black px-2 py-1 rounded text-xs text-slate-500">Retrieval (Top 100)</div>
                <div class="text-slate-600">→</div>
                <div class="bg-purple-900/50 px-2 py-1 rounded text-xs text-purple-300 border border-purple-500">Re-ranker Model</div>
                <div class="text-slate-600">→</div>
                <div class="bg-black px-2 py-1 rounded text-xs text-white font-bold">Top 5</div>
            </div>
            <p class="text-xs text-slate-500 mt-2">
                Cross-encoders (like Cohere Rerank) are slow but extremely accurate at grading relevance.
            </p>
        </div>
    </div>
</div>
"""

# 10.4 Designing Retrieval Pipelines: From Query to Context
content_10_4 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 text-5xl">🛠️</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Query Transformation
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Never trust the user's raw query. Use the LLM to rewrite it first.
        </p>
    </div>

    <!-- Code Block: HyDE -->
    <div class="bg-[#0f1014] p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
        <div class="absolute top-0 right-0 p-3 bg-slate-800 rounded-bl-xl text-xs font-mono text-cyan-400">hyde_implementation.py</div>
        
        <h3 class="text-xl font-bold text-white mb-6">HyDE (Hypothetical Document Embeddings)</h3>
        
        <pre class="font-mono text-sm text-slate-300 overflow-x-auto">
<span class="text-purple-400">async def</span> <span class="text-blue-400">hyde_search</span>(query: str):
    <span class="text-slate-500"># 1. Hallucinate a hypothetical answer</span>
    hypothetical_doc = <span class="text-purple-400">await</span> llm.generate(
        f<span class="text-green-400">"Write a scientific abstract answering: {query}"</span>
    )
    
    <span class="text-slate-500"># 2. Embed the HALLUCINATION (not the query)</span>
    <span class="text-slate-500"># Reason: The hallucination resembles the target doc in vector space.</span>
    vector = <span class="text-purple-400">await</span> embeddings.create(hypothetical_doc)
    
    <span class="text-slate-500"># 3. Search for real docs close to the hallucination</span>
    real_docs = <span class="text-purple-400">await</span> vector_db.search(vector)
    
    <span class="text-purple-400">return</span> real_docs
        </pre>
        
        <div class="mt-6 p-4 bg-cyan-900/10 border-l-4 border-cyan-500 text-sm text-slate-400">
            <strong>Why?</strong> The user asks: "How to fix error 50?" (Short, keyword heavy). <br>
            The Doc says: "System error 50 occurs when..." (Long, formal). <br>
            HyDE bridges the <strong>Domain Gap</strong> between query and document.
        </div>
    </div>
</div>
"""

# 10.5 Vector Databases for RAG
content_10_5 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6 text-5xl">🏎️</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Under the Hood: HNSW
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Hierarchical Navigable Small Worlds. How vector databases find the nearest neighbor in < 10ms.
        </p>
    </div>

    <!-- HNSW Visual -->
    <div class="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
        <div class="w-64 h-64 relative">
            <!-- Layers -->
            <div class="absolute top-0 left-0 w-full h-full border-2 border-slate-700 rounded-xl bg-slate-900/50 transform -skew-y-12 translate-y-[-40px] z-30 flex items-center justify-center">
                <span class="text-pink-400 font-bold bg-black px-2 py-1 rounded">Layer 2 (Expressway)</span>
            </div>
             <div class="absolute top-8 left-0 w-full h-full border-2 border-slate-700 rounded-xl bg-slate-900/50 transform -skew-y-12 translate-y-[-20px] z-20 flex items-center justify-center">
                <span class="text-purple-400 font-bold bg-black px-2 py-1 rounded">Layer 1 (Arterial)</span>
            </div>
             <div class="absolute top-16 left-0 w-full h-full border-2 border-slate-700 rounded-xl bg-slate-900/50 transform -skew-y-12 z-10 flex items-center justify-center">
                <span class="text-blue-400 font-bold bg-black px-2 py-1 rounded">Layer 0 (Neighborhood)</span>
            </div>
        </div>

        <div class="max-w-md space-y-4">
            <h3 class="text-2xl font-bold text-white">The "Skip List" for Graphs</h3>
            <p class="text-slate-400 text-sm">
                Imagine a highway system.
            </p>
            <ul class="list-disc list-inside text-sm text-slate-400 space-y-2">
                <li><strong>Top Layer:</strong> Long-distance jumps (Interstate). Only a few nodes.</li>
                <li><strong>Middle Layer:</strong> Medium jumps (City roads).</li>
                <li><strong>Bottom Layer:</strong> Connects to every single neighbor (Driveway).</li>
            </ul>
            <div class="p-3 bg-slate-800 rounded-lg text-xs text-white font-mono">
                Search complexity: O(log N) instead of O(N)
            </div>
        </div>
    </div>
</div>
"""

# 10.6 Data Preparation & Chunking
content_10_6 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6 text-5xl">🔪</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Chunking Strategies
        </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Strategy 1 -->
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800">
            <div class="text-4xl mb-4">📏</div>
            <h4 class="font-bold text-white mb-2">Fixed Size</h4>
            <p class="text-xs text-slate-400 mb-4">"Every 500 characters"</p>
            <div class="h-2 w-full bg-slate-700 rounded overflow-hidden flex">
                <div class="w-1/3 bg-red-500 h-full"></div>
                <div class="w-1/3 bg-blue-500 h-full"></div>
                <div class="w-1/3 bg-green-500 h-full"></div>
            </div>
            <p class="text-[10px] text-red-400 mt-2">Bad: Cuts sentences in half.</p>
        </div>

        <!-- Strategy 2 -->
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800">
            <div class="text-4xl mb-4">📄</div>
            <h4 class="font-bold text-white mb-2">Recursive</h4>
            <p class="text-xs text-slate-400 mb-4">Split by Paragraph -> Sentence -> Word</p>
            <div class="p-2 bg-black rounded text-[10px] font-mono text-slate-300">
                Are we still in the same paragraph?<br>
                Yes -> Keep adding.<br>
                No -> Split.
            </div>
            <p class="text-[10px] text-green-400 mt-2">Standard (LangChain Default)</p>
        </div>

        <!-- Strategy 3 -->
        <div class="p-6 bg-teal-900/20 rounded-2xl border border-teal-500/50">
            <div class="text-4xl mb-4">🧠</div>
            <h4 class="font-bold text-teal-400 mb-2">Semantic</h4>
            <p class="text-xs text-slate-400 mb-4">Split when the <strong>topic changes</strong>.</p>
            <div class="h-10 w-full flex items-end gap-1">
                <div class="w-1 bg-slate-700 h-2"></div>
                <div class="w-1 bg-slate-700 h-3"></div>
                <div class="w-1 bg-teal-500 h-8 shadow-[0_0_10px_#14b8a6]"></div>
                <div class="w-1 bg-slate-700 h-2"></div>
            </div>
            <p class="text-[10px] text-teal-300 mt-2">Advanced: Uses embedding distance to detect topic shifts.</p>
        </div>

    </div>
</div>
"""

# 10.7 Prompting Patterns
content_10_7 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <h2 class="text-4xl font-extrabold text-white mb-6">
            The Golden Prompt
        </h2>
    </div>

    <div class="max-w-3xl mx-auto bg-[#1e1e1e] p-8 rounded-xl border border-yellow-500/20 shadow-2xl">
        <div class="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <div class="text-xs text-slate-500 ml-auto">system_prompt.j2</div>
        </div>

        <div class="font-mono text-sm space-y-4">
            <div class="text-slate-500">### INSTRUCTIONS</div>
            <div class="text-slate-300">
                You are a precise technical support assistant. Answer the user's question using <span class="text-yellow-400">ONLY</span> the context provided below.
            </div>
            
            <div class="text-slate-500 mt-4">### RULES</div>
            <ul class="text-slate-300 list-disc list-inside">
                <li>If the answer is not in the context, say "I don't know". Do not guess.</li>
                <li>Cite the source ID for every claim (e.g., [doc_1]).</li>
            </ul>

            <div class="text-slate-500 mt-4">### CONTEXT</div>
            <div class="text-green-400">
                {{ retrieved_chunks | join('\n\n') }}
            </div>

            <div class="text-slate-500 mt-4">### QUERY</div>
            <div class="text-white">{{ user_query }}</div>
        </div>
    </div>
</div>
"""

# 10.8 GraphRAG & Hybrid Graph‑Based Retrieval
content_10_8 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-purple-600/10 border border-purple-500/20 mb-6 text-5xl">🕸️</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            GraphRAG
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Vectors simulate understanding, but Graphs store <strong>Facts</strong>.
        </p>
    </div>

    <!-- Graph vs Vector Visual -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="bg-black p-8 rounded-3xl border border-slate-800">
            <h3 class="text-xl font-bold text-slate-400 mb-4">The Vector Failure Case</h3>
            <p class="text-sm text-slate-500 mb-4">Query: "How is the CEO of Acme related to BetaCorp?"</p>
            <div class="flex justify-center my-8 text-4xl opacity-30">🤷</div>
            <p class="text-xs text-red-400">
                Vectors map "CEO" and "BetaCorp" to similar spaces, but they don't capture the <strong>multi-hop relationship</strong> (e.g., He was a board member there 5 years ago).
            </p>
        </div>

        <div class="bg-purple-900/10 p-8 rounded-3xl border border-purple-500/30">
            <h3 class="text-xl font-bold text-purple-400 mb-4">The Graph Solution</h3>
            <div class="relative h-48 w-full bg-black/50 rounded-xl border border-purple-500/20 p-4">
                <!-- Nodes -->
                <div class="absolute top-4 left-4 px-3 py-1 bg-blue-600 rounded-full text-[10px] text-white font-bold">Elon</div>
                <div class="absolute bottom-4 right-4 px-3 py-1 bg-green-600 rounded-full text-[10px] text-white font-bold">PayPal</div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-slate-700 rounded-full text-[10px] text-white">X.com</div>
                
                <!-- Edges (CSS Lines approximation) -->
                <div class="absolute top-8 left-12 w-24 h-0.5 bg-slate-500 rotate-12"></div>
                <div class="absolute top-10 left-20 text-[8px] text-slate-400 bg-black px-1">FOUNDED</div>
            </div>
            <p class="text-xs text-purple-300 mt-4">
                We traverse the knowledge graph: (Elon)-[:FOUNDED]->(X.com)-[:MERGED_WITH]->(PayPal).
            </p>
        </div>
    </div>
</div>
"""

# 10.9 RAG for Compliance
content_10_9 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <h2 class="text-4xl font-extrabold text-white mb-6">Governance & RBAC</h2>
        <p class="text-xl text-slate-400">Data leakage is the #1 risk.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-red-500/30">
            <div class="text-3xl mb-4">🛑</div>
            <h3 class="font-bold text-white mb-2">RBAC Filtering</h3>
            <p class="text-xs text-slate-400">
                The Vector DB must enforce permissions.
            </p>
            <div class="mt-4 bg-black p-2 rounded text-[10px] font-mono text-red-300">
                filter: {<br>
                &nbsp;&nbsp;role: "admin",<br>
                &nbsp;&nbsp;dept: "hr"<br>
                }
            </div>
        </div>

        <div class="bg-[#111] p-6 rounded-2xl border border-blue-500/30">
            <div class="text-3xl mb-4">🔗</div>
            <h3 class="font-bold text-white mb-2">Citations</h3>
            <p class="text-xs text-slate-400">
                The UI must link back to the source PDF. 
            </p>
            <div class="mt-4 flex gap-2">
                <span class="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-[10px] border border-blue-500">Source: annual_report.pdf</span>
            </div>
        </div>

        <div class="bg-[#111] p-6 rounded-2xl border border-yellow-500/30">
            <div class="text-3xl mb-4">🕵️</div>
            <h3 class="font-bold text-white mb-2">PII Scrubbing</h3>
            <p class="text-xs text-slate-400">
                Presidio / Microsoft PII scanner runs <strong>before</strong> embedding.
            </p>
            <div class="mt-4 bg-black p-2 rounded text-[10px] font-mono text-slate-500">
                "My name is <span class="bg-yellow-900 text-yellow-500">[PERSON]</span>"
            </div>
        </div>
    </div>
</div>
"""

# 10.10 RAG + Agents
content_10_10 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-green-500/10 border border-green-500/20 mb-6 text-5xl">🛠️</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            RAG as a Tool
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Static RAG is just a lookup. Agentic RAG is a <strong>Research Assistant</strong>.
        </p>
    </div>

    <div class="bg-[#0f1014] p-8 rounded-3xl border border-slate-800">
        <h3 class="text-xl font-bold text-white mb-6">The Agentic Workflow</h3>
        
        <div class="space-y-4 font-mono text-xs">
            <!-- Turn 1 -->
            <div class="flex gap-4">
                <div class="w-20 text-right text-slate-500 font-bold">USER</div>
                <div class="text-white">"Compare the Q3 revenue of 2023 vs 2024."</div>
            </div>

            <!-- Turn 2 -->
            <div class="flex gap-4">
                <div class="w-20 text-right text-purple-400 font-bold">AGENT</div>
                <div class="text-purple-300">
                    Thought: I need to find the revenue reports for both years.<br>
                    Action: <code>search_tool("Q3 revenue 2023")</code>
                </div>
            </div>

            <!-- Turn 3 -->
            <div class="flex gap-4">
                <div class="w-20 text-right text-green-400 font-bold">TOOL</div>
                <div class="text-green-300">Result: "2023 Q3 Revenue was $40M"</div>
            </div>

             <!-- Turn 4 -->
            <div class="flex gap-4">
                <div class="w-20 text-right text-purple-400 font-bold">AGENT</div>
                <div class="text-purple-300">
                    Action: <code>search_tool("Q3 revenue 2024")</code>
                </div>
            </div>

            <!-- Turn 5 -->
            <div class="flex gap-4">
                <div class="w-20 text-right text-blue-400 font-bold">FINAL</div>
                <div class="text-blue-300">"Revenue grew from $40M in 2023 to $50M in 2024, a 25% increase."</div>
            </div>
        </div>
    </div>
</div>
"""

# 10.11 Mini Project
content_10_11 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <h2 class="text-4xl font-extrabold text-white mb-6">
            Build: Legal Contract Q&A
        </h2>
        <p class="text-xl text-slate-400">The "Hello World" of Enterprise RAG.</p>
    </div>

    <!-- Code Block -->
    <div class="bg-[#1e1e1e] p-8 rounded-3xl border border-slate-700 relative overflow-hidden">
        <div class="absolute top-4 right-4 text-xs text-slate-500">main.py</div>
        
        <pre class="font-mono text-sm text-slate-300 overflow-x-auto">
<span class="text-purple-400">from</span> langchain.chains <span class="text-purple-400">import</span> RetrievalQA
<span class="text-purple-400">from</span> langchain.vectorstores <span class="text-purple-400">import</span> Pinecone

<span class="text-slate-500"># 1. Setup Vector Store</span>
docsearch = Pinecone.from_existing_index(
    index_name=<span class="text-green-400">"contracts-db"</span>,
    embedding=openai_embeddings
)

<span class="text-slate-500"># 2. Define the Chain (with Citations)</span>
qa_chain = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(model=<span class="text-green-400">"gpt-4-turbo"</span>),
    chain_type=<span class="text-green-400">"stuff"</span>,
    retriever=docsearch.as_retriever(search_kwargs={<span class="text-green-400">"k"</span>: 5}),
    return_source_documents=<span class="text-blue-400">True</span> <span class="text-slate-500"># Important!</span>
)

<span class="text-slate-500"># 3. Query</span>
response = qa_chain({<span class="text-green-400">"query"</span>: <span class="text-green-400">"What is the termination clause?"</span>})

print(<span class="text-green-400">"Answer:"</span>, response[<span class="text-green-400">"result"</span>])
print(<span class="text-green-400">"Sources:"</span>, [doc.metadata[<span class="text-green-400">"source"</span>] <span class="text-purple-400">for</span> doc <span class="text-purple-400">in</span> response[<span class="text-green-400">"source_documents"</span>]])
        </pre>
    </div>
</div>
"""

# 10.12 Module 10 Wrap‑up: From Search to Enterprise Knowledge Engines
content_10_12 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="relative overflow-hidden rounded-3xl bg-blue-900/20 border border-blue-500/20 p-12 text-center">
        <h2 class="text-4xl font-extrabold text-white mb-6">
            Module 10 Complete
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
            You now possess the blueprint for the most in-demand AI architecture in the world. 
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 bg-black border border-slate-800 rounded-2xl">
            <h3 class="font-bold text-white mb-2">Ingestion</h3>
            <p class="text-sm text-slate-400">You can chunk and embed PDFs.</p>
        </div>
        <div class="p-6 bg-black border border-slate-800 rounded-2xl">
            <h3 class="font-bold text-white mb-2">Retrieval</h3>
            <p class="text-sm text-slate-400">You understand Hybrid Search and Re-ranking.</p>
        </div>
        <div class="p-6 bg-black border border-slate-800 rounded-2xl">
            <h3 class="font-bold text-white mb-2">Generation</h3>
            <p class="text-sm text-slate-400">You can ground the LLM in truth.</p>
        </div>
    </div>
    
    <div class="mt-8 text-center">
        <p class="text-slate-500 mb-4">Coming Up Next:</p>
        <div class="inline-block px-6 py-3 bg-white text-black font-bold rounded-full">
            Module 11: Multimodal AI (Video & Audio)
        </div>
    </div>
</div>
"""
