
import json

# ==========================================
# MODULE 5: RAG & Vector Databases
# ==========================================
module_5 = {
    "title": "5. AI Retrieval Systems (RAG & Vector DBs)",
    "lessons": [
        {
            "id": "genai-5-1",
            "title": "5.1 The Mathematical Foundation of Embeddings",
            "duration": "25 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <div class="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-slate-900 to-black border border-slate-800">
        <h1 class="text-3xl font-bold text-white mb-4">Semantic Space Geometry</h1>
        <p class="text-lg text-slate-300 leading-relaxed">
            Vector embeddings are not just "lists of numbers". They are coordinates in a high-dimensional manifold where <span class="text-indigo-400 font-mono">distance ≈ meaning</span>.
        </p>
    </div>

    <!-- Interactive: Cosine Similarity Visualization -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 bg-[#0B0F19] rounded-xl border border-slate-800">
            <h3 class="text-lg font-bold text-white mb-4">The Dot Product</h3>
            <div class="font-mono text-sm text-green-400 bg-black/50 p-4 rounded mb-4">
                similarity(A, B) = (A · B) / (||A|| ||B||)
            </div>
            <p class="text-sm text-slate-400">
                If vectors are normalized (magnitude = 1), cosine similarity is just the dot product. This is why we normalize embeddings before indexing them in a Vector DB—it makes search O(N) faster.
            </p>
        </div>
        <div class="p-6 bg-[#0B0F19] rounded-xl border border-slate-800">
             <h3 class="text-lg font-bold text-white mb-4">Curse of Dimensionality</h3>
             <p class="text-sm text-slate-400 mb-4">
                In 1536 dimensions (text-embedding-3-small), "nearby" is relative. Most points are equidistant. This is why strictly Euclidean distance (L2) often fails for semantic search compared to Cosine or Dot Product.
             </p>
             <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
             </div>
        </div>
    </div>

    <div class="prose prose-invert max-w-none">
        <h3>Architecture: Bi-Encoders vs Cross-Encoders</h3>
        <p>
            An <strong>Embedding Model</strong> (like OpenAI's) is a Bi-Encoder. It calculates vector A for the query and vector B for the document <em>independently</em>.
        </p>
        <pre><code class="language-python"># Bi-Encoder (Fast, Approximate)
doc_embedding = model.encode("The capitol of France is Paris")
query_embedding = model.encode("What is France's capitol?")
score = dot(doc_embedding, query_embedding) # Fast matrix math
</code></pre>
        <p>
            A <strong>Cross-Encoder</strong> (like Cohere Rerank) takes <em>both</em> inputs simultaneously and outputs a score. It sees the interaction between words. It is 100x slower but much more accurate.
        </p>
        <pre><code class="language-python"># Cross-Encoder (Slow, Accurate)
score = model.predict([("What is France's capitol?", "The capitol of France is Paris")])
</code></pre>
    </div>
</div>
"""
        },
        {
            "id": "genai-5-2",
            "title": "5.2 Vector Database Internals: HNSW & IVFFlat",
            "duration": "30 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <h2 class="text-2xl font-bold text-white mb-6">How Pinecone/Qdrant Actually Work</h2>
    
    <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-1 p-6 bg-slate-900 rounded-xl border border-slate-700">
            <h3 class="text-xl font-bold text-blue-400 mb-2">HNSW</h3>
            <div class="text-xs font-mono text-slate-500 mb-4">Hierarchical Navigable Small World</div>
            <p class="text-sm text-slate-300 mb-4">
                It's like a ski-lift system. You start at the top layer (coarse search), find the closest node, drop down a layer, refine, and repeat.
            </p>
            <ul class="text-xs text-slate-400 list-disc list-inside space-y-2">
                <li><strong>Memory:</strong> High (needs to store graph edges)</li>
                <li><strong>Speed:</strong> Extremely fast (logarithmic)</li>
                <li><strong>Recall:</strong> Excellent (~99%)</li>
            </ul>
        </div>
        <div class="flex-1 p-6 bg-slate-900 rounded-xl border border-slate-700">
            <h3 class="text-xl font-bold text-orange-400 mb-2">IVF-Flat</h3>
            <div class="text-xs font-mono text-slate-500 mb-4">Inverted File Index</div>
            <p class="text-sm text-slate-300 mb-4">
                Cluster the vector space. Assign every document to a centroid (Voronoi region). At query time, only search the closest 3 clusters.
            </p>
            <ul class="text-xs text-slate-400 list-disc list-inside space-y-2">
                <li><strong>Memory:</strong> Low (just centroids)</li>
                <li><strong>Speed:</strong> Moderate</li>
                <li><strong>Recall:</strong> Adjustable (nprobe)</li>
            </ul>
        </div>
    </div>

    <div class="bg-[#111] p-6 rounded-xl border border-slate-800">
        <h3 class="text-white font-bold mb-4">Production Tip: Metadata Filtering</h3>
        <p class="text-sm text-slate-400 mb-4">
            Do not just vector search. <strong>Filter first</strong>. If a user asks "Show me my emails from yesterday", filter by `user_id` and `date` <em>before</em> running the expensive vector math.
        </p>
        <div class="bg-black p-4 rounded border border-white/10 font-mono text-xs text-green-300">
            index.query(<br>
            &nbsp;&nbsp;vector=emb,<br>
            &nbsp;&nbsp;filter={<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"user_id": {"$eq": "user_123"},<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"date": {"$gte": 1700000000}<br>
            &nbsp;&nbsp;}<br>
            )
        </div>
    </div>
</div>
"""
        },
        {
            "id": "genai-5-3",
            "title": "5.3 Advanced Retrieval Patterns: Hybrid Search",
            "duration": "25 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <div class="p-8 rounded-2xl bg-gradient-to-r from-indigo-900 to-blue-900 border border-indigo-500/30">
        <h2 class="text-3xl font-bold text-white mb-4">Keyword vs. Semantic</h2>
        <p class="text-lg text-indigo-100">
            <strong>Semantic Search</strong> understands "canine" matches "dog".<br>
            <strong>Keyword Search (BM25)</strong> understands "Error code 503" matches "Error code 503".
        </p>
        <p class="mt-4 text-sm text-indigo-300">
            In production, you need both. This is <strong>Hybrid Search</strong>.
        </p>
    </div>

    <h3 class="text-2xl font-bold text-white mt-8">Reciprocal Rank Fusion (RRF)</h3>
    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
        <p class="text-slate-300 mb-6">
            How do you combine a score of <code>0.89</code> (Cosine) with a score of <code>12.5</code> (BM25)? You don't adding them directly. You use rank position.
        </p>
        <div class="font-mono text-sm bg-black p-4 rounded text-yellow-500">
            score = 1 / (k + rank_semantic) + 1 / (k + rank_keyword)
        </div>
        <p class="text-xs text-slate-500 mt-4">
            If a document is #1 in semantic and #1 in keyword, it gets a massive boost. If it's #1 in one but #1000 in the other, it gets a moderate score.
        </p>
    </div>
</div>
"""
        }
    ]
}

# ==========================================
# MODULE 6: Evaluation & Observability
# ==========================================
module_6 = {
    "title": "6. Evaluation & Observability (LLMOps)",
    "lessons": [
        {
            "id": "genai-6-1",
            "title": "6.1 The Stochastic Problem: How to Test 'Maybe'",
            "duration": "20 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <h1 class="text-3xl font-bold text-white">Unit Tests Are Dead. Long Live Evals.</h1>
    <p class="text-lg text-slate-300">
        In traditional software: <code>assert add(2, 2) == 4</code>. <br>
        In AI: <code>assert chat("Hello") == ...?</code> "Hi"? "Greetings"? "Howdy"?
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div class="p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
            <h3 class="font-bold text-red-400 mb-2">Deterministic</h3>
            <ul class="text-xs text-red-200 list-disc list-inside">
                <li>Exact Match (JSON keys)</li>
                <li>Regex (Contains "Error")</li>
                <li>Code Syntax Check</li>
            </ul>
        </div>
        <div class="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-xl">
            <h3 class="font-bold text-yellow-400 mb-2">Semantic</h3>
            <ul class="text-xs text-yellow-200 list-disc list-inside">
                <li>Embedding Similarity</li>
                <li>Rouge / BLEU Score</li>
                <li>Perplexity</li>
            </ul>
        </div>
        <div class="p-4 bg-green-900/20 border border-green-500/30 rounded-xl">
            <h3 class="font-bold text-green-400 mb-2">Model-Based (LLM-as-Judge)</h3>
            <ul class="text-xs text-green-200 list-disc list-inside">
                <li>"Rate clarity 1-5"</li>
                <li>"Is this hallucinated?"</li>
                <li>"Is this helpful?"</li>
            </ul>
        </div>
    </div>
</div>
"""
        },
        {
            "id": "genai-6-2",
            "title": "6.2 RAGAS: Faithfulness & Answer Relevance",
            "duration": "30 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <div class="bg-[#111] p-6 rounded-2xl border border-slate-800">
        <h2 class="text-2xl font-bold text-white mb-4">The RAG Triad</h2>
        <p class="text-slate-400 mb-6">
            To evaluate a RAG system, you need to measure three distinct edges of the triangle:
        </p>
        
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
                <div>
                    <h4 class="font-bold text-white">Context Recall</h4>
                    <p class="text-xs text-slate-500">Did we retrieve the actual right document from the DB?</p>
                </div>
            </div>
             <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">2</div>
                <div>
                    <h4 class="font-bold text-white">Faithfulness</h4>
                    <p class="text-xs text-slate-500">Is the answer actually derived from the retrieved context, or did the LLM make it up?</p>
                </div>
            </div>
             <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">3</div>
                <div>
                    <h4 class="font-bold text-white">Answer Relevance</h4>
                    <p class="text-xs text-slate-500">Does the answer actually address the user's query?</p>
                </div>
            </div>
        </div>
    </div>

    <h3>Implementation in Python</h3>
    <pre><code class="language-python">from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevance

results = evaluate(
    dataset,
    metrics=[faithfulness, answer_relevance]
)
print(results) # {'faithfulness': 0.92, 'answer_relevance': 0.85}
</code></pre>
</div>
"""
        },
        {
            "id": "genai-6-3",
            "title": "6.3 Tracing with LangSmith & Helicone",
            "duration": "25 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <h2 class="text-2xl font-bold text-white">The "Black Box" Problem</h2>
    <p>
        When an agent fails, it fails silently. It just outputs "I don't know". Tracing allows you to see the <strong>Chain of Thought</strong>.
    </p>
    
    <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl font-mono text-xs overflow-x-auto">
        <div class="text-green-400">root_run</div>
        <div class="pl-4 text-blue-400">├── retriever (2 chunks found)</div>
        <div class="pl-4 text-purple-400">├── llm_call (GPT-4)</div>
        <div class="pl-8 text-slate-500">│   ├── System: You are a helpful assistant.</div>
        <div class="pl-8 text-slate-500">│   └── User: Explain Quantum Physics.</div>
        <div class="pl-4 text-yellow-400">└── outputparser (JSON)</div>
        <div class="pl-8 text-red-400">└── WARN: Invalid JSON formatting corrected.</div>
    </div>

    <p class="mt-4 text-slate-300">
        Tools like <strong>Helicone</strong> also give you:
    </p>
    <ul class="list-disc list-inside text-slate-400">
        <li><strong>Cost Tracking:</strong> "Whoops, this user spent $50 in 10 minutes."</li>
        <li><strong>Caching:</strong> If 100 people ask "What is AI?", pay for it once.</li>
        <li><strong>Rate Limiting:</strong> Protect your key from abuse.</li>
    </ul>
</div>
"""
        }
    ]
}

# ==========================================
# MODULE 7: LLMS in Production
# ==========================================
module_7 = {
    "title": "7. LLM Ops & Production Architecture",
    "lessons": [
        {
            "id": "genai-7-1",
            "title": "7.1 Throughput vs Latency: The vLLM Revolution",
            "duration": "30 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <div class="p-8 bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl border border-orange-500/20">
        <h1 class="text-3xl font-bold text-white mb-4">PagedAttention</h1>
        <p class="text-lg text-orange-100">
            GPU memory is physically fragmented. Just like RAM in an OS. Prior to vLLM, we wasted 60-80% of GPU memory to "fragmentation".
        </p>
    </div>

    <h3 class="text-2xl font-bold text-white mt-8">KV Cache Management</h3>
    <p class="text-slate-300">
        Every token generated needs previous keys/values. This cache grows linearly. <strong>vLLM</strong> treats GPU memory like virtual memory pages, allowing non-contiguous storage.
    </p>
    
    <div class="grid grid-cols-2 gap-4 mt-6">
        <div class="bg-black p-4 rounded border border-slate-800">
            <h4 class="text-red-500 font-bold">HuggingFace Transformers</h4>
            <div class="text-4xl font-bold text-white mt-2">15 req/s</div>
            <p class="text-xs text-slate-500">Standard implementation</p>
        </div>
        <div class="bg-black p-4 rounded border border-green-500/50">
            <h4 class="text-green-500 font-bold">vLLM Inference</h4>
            <div class="text-4xl font-bold text-white mt-2">350 req/s</div>
            <p class="text-xs text-slate-500">23x Throughput Improvement</p>
        </div>
    </div>

    <h3>How to run it</h3>
    <pre><code class="language-bash">pip install vllm
python -m vllm.entrypoints.openai.api_server --model mistralai/Mistral-7B-v0.1</code></pre>
</div>
"""
        },
        {
            "id": "genai-7-2",
            "title": "7.2 Quantization: FP16, Int8, and 4-bit (QLoRA)",
            "duration": "35 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <h2 class="text-2xl font-bold text-white mb-6">Squeezing the Elephant</h2>
    
    <table class="w-full text-left text-sm text-slate-300 border-collapse">
        <thead class="bg-slate-800 text-white">
            <tr>
                <th class="p-3">Precision</th>
                <th class="p-3">Bytes per Param</th>
                <th class="p-3">70B Model Size</th>
                <th class="p-3">Quality Loss</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-700">
                <td class="p-3">FP32 (Float)</td>
                <td class="p-3">4 bytes</td>
                <td class="p-3">~280 GB</td>
                <td class="p-3">None (Baseline)</td>
            </tr>
            <tr class="border-b border-slate-700">
                <td class="p-3">FP16 (Half)</td>
                <td class="p-3">2 bytes</td>
                <td class="p-3">~140 GB</td>
                <td class="p-3">~0%</td>
            </tr>
            <tr class="border-b border-slate-700">
                <td class="p-3 font-bold text-yellow-400">Int8</td>
                <td class="p-3">1 byte</td>
                <td class="p-3">~70 GB</td>
                <td class="p-3">&lt; 1%</td>
            </tr>
             <tr class="bg-slate-900/50">
                <td class="p-3 font-bold text-green-400">4-bit (QLoRA)</td>
                <td class="p-3">0.5 bytes</td>
                <td class="p-3">~35 GB</td>
                <td class="p-3">Minor</td>
            </tr>
        </tbody>
    </table>

    <div class="bg-[#111] p-6 rounded-xl border border-slate-800">
        <h3 class="text-white font-bold mb-4">How 4-bit works (NF4)</h3>
        <p class="text-sm text-slate-400">
            Normal Float 4 (NF4) is a data type optimal for normally distributed weights. We don't just chop off bits (which destroys accuracy). We map the continuous range of weights to 16 specific "buckets" that represent the bell curve of the neural network.
        </p>
    </div>
</div>
"""
        },
        {
            "id": "genai-7-3",
            "title": "7.3 Kubernetes & GPU Autoscaling",
            "duration": "30 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <h2 class="text-2xl font-bold text-white">Scaling to Zero</h2>
    <p>
        GPUs are expensive ($2/hr). You cannot keep them running at 3am when no one is using your app. You need <strong>HPA (Horizontal Pod Autoscaling)</strong> based on custom metrics.
    </p>

    <div class="p-6 bg-[#0F172A] border border-blue-900 rounded-xl font-mono text-xs">
        <div class="text-purple-400">apiVersion: autoscaling/v2</div>
        <div class="text-purple-400">kind: HorizontalPodAutoscaler</div>
        <div class="text-slate-300">...</div>
        <div class="text-blue-400">  metrics:</div>
        <div class="text-blue-400">  - type: Object</div>
        <div class="text-blue-400">    object:</div>
        <div class="text-blue-400">      metric:</div>
        <div class="text-green-400">        name: queue_depth</div>
        <div class="text-slate-300">      target:</div>
        <div class="text-slate-300">        type: Value</div>
        <div class="text-slate-300">        value: 5</div>
    </div>

    <p class="mt-4 text-sm text-slate-400">
        <strong>Cold Starts:</strong> Loading 70GB takes time. You need standard CPU nodes to accept the request, queue it, spin up the GPU node, load weights (fastest from disk/network), process, and spin down. This is why <strong>Serverless GPUs</strong> (Modal, RunPod) are popular—they handle this orchestration for you.
    </p>
</div>
"""
        }
    ]
}


# ==========================================
# MODULE 8: Fine-Tuning & The Stack
# ==========================================
module_8 = {
    "title": "8. The AI Engineering Verification Stack",
    "lessons": [
        {
            "id": "genai-8-1",
            "title": "8.1 To Train or Not to Train?",
            "duration": "20 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <h1 class="text-3xl font-bold text-white mb-6">The Hierarchy of Value</h1>
    
    <div class="flex flex-col gap-2">
        <div class="flex items-center gap-4">
            <div class="w-24 text-right font-bold text-slate-500">Level 1</div>
            <div class="flex-1 bg-slate-800 p-4 rounded text-slate-300"><strong>Prompt Engineering:</strong> Zero-shot, Few-shot. (Start here)</div>
        </div>
        <div class="flex items-center gap-4">
            <div class="w-24 text-right font-bold text-blue-500">Level 2</div>
            <div class="flex-1 bg-slate-800 p-4 rounded text-blue-200 border border-blue-500/30"><strong>RAG:</strong> Injecting knowledge. (90% of use cases)</div>
        </div>
         <div class="flex items-center gap-4">
            <div class="w-24 text-right font-bold text-purple-500">Level 3</div>
            <div class="flex-1 bg-purple-900/20 p-4 rounded text-purple-200 border border-purple-500/30">
                <strong>Fine-Tuning (SFT):</strong> Changing <em>behavior</em>, style, or format.
            </div>
        </div>
         <div class="flex items-center gap-4">
            <div class="w-24 text-right font-bold text-red-500">Level 4</div>
            <div class="flex-1 bg-red-900/20 p-4 rounded text-red-200 border border-red-500/30">
                <strong>Pre-training:</strong> Teaching new <em>knowledge</em> (language, biology). Costs $Millions.
            </div>
        </div>
    </div>

    <div class="p-6 bg-[#111] rounded-xl border border-slate-700 mt-8">
        <h3 class="font-bold text-white mb-2">When to Fine-Tune?</h3>
        <p class="text-slate-400 text-sm">
            RAG gives the model an open textbook during the test. Fine-tuning is sending the model to medical school.
            <br><br>
            Use FT when:
            <ul class="list-disc list-inside ml-4 mt-2">
                <li>You need specific JSON formatting 100% of the time.</li>
                <li>You need to reduce latency (remove the huge prompt instructions).</li>
                <li>You need a specific tone (e.g., "Roasting" bot).</li>
            </ul>
        </p>
    </div>
</div>
"""
        },
        {
            "id": "genai-8-2",
            "title": "8.2 The Stack: Axolotl & Unsloth",
            "duration": "30 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 bg-[#0F1218] rounded-2xl border border-slate-800">
            <div class="text-4xl mb-4">🪓</div>
            <h2 class="text-2xl font-bold text-white mb-4">Axolotl</h2>
            <p class="text-slate-400 mb-4">
                The "Config File" framework. Stop writing training loops in PyTorch. Axolotl allows you to define your dataset, hyperparameters, and model in a single YAML file.
            </p>
            <pre class="bg-black p-2 rounded text-[10px] text-green-300">
base_model: mistralai/Mistral-7B-v0.1
datasets:
  - path: my_custom_data.jsonl
    type: alpaca
sequence_len: 2048
learning_rate: 0.0002
</pre>
        </div>
        
        <div class="p-6 bg-[#0F1218] rounded-2xl border border-slate-800">
            <div class="text-4xl mb-4">🦥</div>
            <h2 class="text-2xl font-bold text-white mb-4">Unsloth</h2>
            <p class="text-slate-400 mb-4">
                Manual backprop optimization. PyTorch is generic; Unsloth hand-writes the CUDA kernels for Llama/Mistral architectures.
            </p>
            <div class="flex items-center gap-4 mt-4">
                <div class="text-center">
                    <div class="text-2xl font-bold text-white">2x</div>
                    <div class="text-xs text-slate-500">Faster</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl font-bold text-white">-60%</div>
                    <div class="text-xs text-slate-500">Memory</div>
                </div>
                 <div class="text-center">
                    <div class="text-2xl font-bold text-white">0%</div>
                    <div class="text-xs text-slate-500">Accuracy Loss</div>
                </div>
            </div>
        </div>
    </div>
</div>
"""
        }
    ]
}

# ==========================================
# MODULE 9: Agents
# ==========================================
module_9 = {
    "title": "9. Autonomous Agents & Orchestration",
    "lessons": [
        {
            "id": "genai-9-1",
            "title": "9.1 Reasoning Loops: ReAct \u0026 Plan-and-Solve",
            "duration": "30 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white">Reason + Action (ReAct)</h2>
    <p class="text-slate-300">
        A standard LLM call is just "Thought". An Agent is "Thought + Action + Observation".
    </p>

    <div class="bg-slate-900 border-l-4 border-blue-500 p-6 rounded-r-xl space-y-4 font-mono text-sm">
        <div class="text-slate-500"># User asks: "Who is Leo DiCaprio's girlfriend's age raised to the power of 0.2?"</div>
        
        <div class="text-blue-300">Thought 1: I need to find out who his girlfriend is.</div>
        <div class="text-green-300">Action 1: SearchTool("current leonardo dicaprio girlfriend")</div>
        <div class="text-purple-300">Observation 1: "Vittoria Ceretti"</div>
        
        <div class="text-blue-300">Thought 2: I need her age.</div>
        <div class="text-green-300">Action 2: SearchTool("Vittoria Ceretti age")</div>
        <div class="text-purple-300">Observation 2: "25 years old"</div>

        <div class="text-blue-300">Thought 3: I need to calculate 25^0.2</div>
        <div class="text-green-300">Action 3: Calculator(25 ** 0.2)</div>
        <div class="text-purple-300">Observation 3: 1.9036...</div>

        <div class="text-white font-bold">Final Answer: 1.9036</div>
    </div>

    <h3 class="text-2xl font-bold text-white mt-8">Plan-and-Solve</h3>
    <p class="text-slate-300">
        ReAct can get stuck in loops. Plan-and-Solve generates a checklist <em>first</em>, then executes it step-by-step. It separates the <strong>Planner</strong> from the <strong>Executor</strong>.
    </p>
</div>
"""
        },
        {
            "id": "genai-9-2",
            "title": "9.2 Tool Use \u0026 Function Calling API",
            "duration": "25 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <h2 class="text-2xl font-bold text-white mb-6">The JSON Protocol</h2>
    <p class="text-slate-300">
        How does a text model "click a button"? It doesn't. It outputs a JSON blob that <em>you</em> execute.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <h4 class="font-bold text-slate-400 mb-2">1. You Define Tools</h4>
            <pre class="bg-[#0B0F19] p-4 rounded text-xs text-green-300 border border-slate-800">
{
  "name": "get_weather",
  "description": "Get current temp",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {"type": "string"}
    }
  }
}
            </pre>
        </div>
        <div>
           <h4 class="font-bold text-slate-400 mb-2">2. Model "Calls" It</h4>
            <pre class="bg-[#0B0F19] p-4 rounded text-xs text-blue-300 border border-slate-800">
{
  "role": "assistant",
  "tool_calls": [{
    "id": "call_123",
    "function": {
        "name": "get_weather",
        "arguments": "{\\"location\\": \\"London\\"}"
    }
  }]
}
            </pre>
        </div>
    </div>

    <div class="bg-yellow-900/20 p-6 rounded-xl border border-yellow-500/30 mt-4">
        <h3 class="font-bold text-yellow-500">Warning: The Infinity Loop</h3>
        <p class="text-sm text-yellow-200">
            If your tool errors out (e.g., "API 500"), and you feed that error back to the model, a naive model might just retry the exact same call again. You must implement <strong>Error Handling</strong> that hints the model to try a different parameter.
        </p>
    </div>
</div>
"""
        }
    ]
}

