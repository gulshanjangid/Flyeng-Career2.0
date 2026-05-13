
# Modules 10 & 11: RAG & Embeddings
# Content Definitions

# ==========================================
# MODULE 10: RAG & Vector Databases
# ==========================================

lessons_map_10 = {
    "1": "RAG Fundamentals: The Open Book Exam",
    "2": "Vector Databases: Pinecone, Weaviate, Chroma",
    "3": "The Ingestion Pipeline: Chunking & Parsing",
    "4": "Advanced Retrieval: Hybrid Search & Re-ranking",
    "5": "Context Management: The 'Lost in the Middle' Problem",
    "6": "Building a Chat-with-PDF App",
    "7": "Module 10 Wrap-up"
}

content_10_1 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 text-5xl">📚</div>
        <h2 class="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">
            Retrieval Augmented Generation
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            LLMs hallucinate. RAG gives them facts. It's the difference between a <span class="text-white font-bold">Creative Writer</span> and a <span class="text-blue-400 font-bold">Research Assistant</span>.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-[#111] border border-slate-700 rounded-3xl">
            <h3 class="text-2xl font-bold text-white mb-4">Without RAG (Closed Book)</h3>
            <p class="text-slate-400 mb-4">The model relies solely on its training data (which is old).</p>
            <div class="bg-black p-4 rounded text-xs font-mono text-slate-500">
                User: "What is the Q3 2024 revenue?"<br>
                Model: "I only know data up to 2023. Here is a hallucinated number."
            </div>
        </div>
        <div class="p-8 bg-blue-950/30 border border-blue-500/30 rounded-3xl">
             <h3 class="text-2xl font-bold text-white mb-4">With RAG (Open Book)</h3>
            <p class="text-slate-300 mb-4">The model looks up private data before answering.</p>
             <div class="bg-black p-4 rounded text-xs font-mono text-blue-300">
                User: "What is the Q3 2024 revenue?"<br>
                System: (Retrieves Q3 PDF)<br>
                Model: "According to the document, it is $50M."
            </div>
        </div>
    </div>
</div>
"""

content_10_2 = """
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white">The Vector Database Landscape</h2>
    <p class="text-slate-400">Where do we store "Meaning"?</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 bg-slate-900 rounded-xl border border-slate-700">
            <h3 class="text-xl font-bold text-white mb-2">Pinecone</h3>
            <div class="text-xs text-green-400 mb-2 uppercase font-bold">Serverless</div>
            <p class="text-sm text-slate-400">The standard for managed vector search. Easy to scale, zero maintenance.</p>
        </div>
        <div class="p-6 bg-slate-900 rounded-xl border border-slate-700">
            <h3 class="text-xl font-bold text-white mb-2">Weaviate</h3>
            <div class="text-xs text-orange-400 mb-2 uppercase font-bold">Hybrid</div>
            <p class="text-sm text-slate-400">Great for storage + search. Has strong "Keyword Search" capabilities built-in.</p>
        </div>
        <div class="p-6 bg-slate-900 rounded-xl border border-slate-700">
            <h3 class="text-xl font-bold text-white mb-2">pgvector</h3>
            <div class="text-xs text-blue-400 mb-2 uppercase font-bold">PostgreSQL</div>
            <p class="text-sm text-slate-400">Just an extension for Postgres. Best if you already use Supabase or RDS.</p>
        </div>
    </div>
</div>
"""

content_10_3 = """
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white">Chunking Strategies</h2>
    <p class="text-slate-400">Garbage In, Garbage Out. How you split text matters.</p>
    
    <div class="space-y-4">
        <div class="p-4 border border-slate-700 rounded-lg">
            <h4 class="font-bold text-white">Fixed Size Chunking</h4>
            <p class="text-xs text-slate-400">Split every 500 characters. <span class="text-red-400">Bad: Cuts sentences in half.</span></p>
        </div>
        <div class="p-4 border border-green-500/30 rounded-lg bg-green-900/10">
            <h4 class="font-bold text-green-400">Recursive Character Splitter</h4>
            <p class="text-xs text-slate-300">Splits by Paragraphs first, then Sentences, then Words. Preserves semantic meaning.</p>
        </div>
        <div class="p-4 border border-purple-500/30 rounded-lg bg-purple-900/10">
            <h4 class="font-bold text-purple-400">Semantic Chunking</h4>
            <p class="text-xs text-slate-300">Uses embeddings to detect when the "Topic" changes and splits there.</p>
        </div>
    </div>
</div>
"""

content_10_4 = """
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white">Advanced Retrieval</h2>
    <p class="text-slate-400">Vector search isn't enough. It misses exact keywords.</p>
    
    <div class="bg-black/40 p-8 rounded-2xl border border-slate-800">
        <h3 class="text-xl font-bold text-white mb-6">The "Hybrid Search" + "Re-rank" Pipeline</h3>
        
        <div class="flex flex-col gap-4 text-xs font-mono">
             <div class="flex items-center gap-4">
                <div class="w-24 text-right text-slate-500">Query</div>
                <div class="p-2 bg-slate-800 rounded flex-1">"IPod error 404"</div>
             </div>
             
             <div class="flex items-center gap-4">
                 <div class="w-24 text-right text-slate-500">Step 1</div>
                 <div class="flex-1 grid grid-cols-2 gap-2">
                     <div class="p-2 bg-blue-900/20 border border-blue-500/50 rounded text-center">Vector Search (Concept: Music Player)</div>
                     <div class="p-2 bg-yellow-900/20 border border-yellow-500/50 rounded text-center">Keyword Search (Exact: "Error 404")</div>
                 </div>
             </div>

             <div class="flex items-center gap-4">
                <div class="w-24 text-right text-slate-500">Step 2</div>
                <div class="p-2 bg-purple-900/20 border border-purple-500/50 rounded flex-1 text-center font-bold text-purple-300">
                    Cohere Re-ranker
                </div>
             </div>
             <p class="text-center text-slate-500 text-[10px] mt-1">Re-orders the top 50 results to find the truest match.</p>
        </div>
    </div>
</div>
"""

content_10_5 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Context Management</h2><p class="text-slate-400">Optimizing the prompt window.</p></div>"""
content_10_6 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Mini Project</h2><p class="text-slate-400">Building 'Chat with your PDF'.</p></div>"""
content_10_7 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Wrap-up</h2><p class="text-slate-400">You have mastered RAG.</p></div>"""


# ==========================================
# MODULE 11: Advanced Embeddings
# ==========================================

lessons_map_11 = {
    "1": "Embeddings 101: The Math of Meaning",
    "2": "Distance Metrics: Cosine vs SaaS",
    "3": "Visualizing High-Dimensional Space (t-SNE)",
    "4": "The MTEB Leaderboard: Choosing a Model",
    "5": "Fine-Tuning Embeddings (Matryoshka)",
    "6": "Module 11 Wrap-up"
}

content_11_1 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6 text-5xl">🔢</div>
        <h2 class="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-6">
            Embeddings
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Translating words into <span class="text-white font-bold">Numbers</span>. The secret language of AI.
        </p>
    </div>

    <div class="p-8 bg-[#111] border border-slate-700 rounded-3xl font-mono text-xs overflow-x-auto">
        <div class="flex items-center gap-4 mb-4">
             <span class="text-blue-400 font-bold">"King"</span>
             <span class="text-slate-500">→</span>
             <span class="text-green-500">[0.12, 0.94, -0.45, ...]</span>
        </div>
        <div class="flex items-center gap-4 mb-4">
             <span class="text-blue-400 font-bold">"Man"</span>
             <span class="text-slate-500">→</span>
             <span class="text-green-500">[0.05, 0.82, -0.11, ...]</span>
        </div>
         <div class="border-t border-slate-800 my-4 pt-4 text-slate-400">
            <span class="text-pink-500 font-bold">The Magic:</span> King - Man + Woman = Queen
         </div>
    </div>
</div>
"""

content_11_2 = """
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white">Distance Metrics</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
             <h3 class="text-xl font-bold text-white mb-2">Cosine Similarity</h3>
             <p class="text-sm text-slate-400">Measures the <strong>Angle</strong> between vectors. Robust to text length differences. The industry standard.</p>
        </div>
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
             <h3 class="text-xl font-bold text-white mb-2">Euclidean (L2)</h3>
             <p class="text-sm text-slate-400">Measures the <strong>Straight line distance</strong>. Good for clustering, but sensitive to magnitude.</p>
        </div>
    </div>
</div>
"""

content_11_3 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Visualizing Space</h2><p class="text-slate-400">Using UMAP to project 1536 dimensions down to 2D.</p></div>"""
content_11_4 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">MTEB Leaderboard</h2><p class="text-slate-400">Why OpenAI's `text-embedding-3-small` is good, but `bge-m3` might be better.</p></div>"""
content_11_5 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Fine-Tuning Embeddings</h2><p class="text-slate-400">Teaching the model your company's acronyms.</p></div>"""
content_11_6 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Wrap-up</h2><p class="text-slate-400">You now see the Matrix.</p></div>"""
