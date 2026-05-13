import os
import re
import textwrap

# Hyper-detailed content for Module 6: Transformers & Modern LLM Architecture (2026 Edition)
content_map = {
    "genai-6-1": """
    <div class="space-y-8">
        <div class="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 p-8 rounded-2xl">
            <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                🚀 The "iPhone Moment" of AI
            </h2>
            <p class="text-lg text-gray-300 leading-relaxed">
                Before 2017, NLP was stuck in the "Sequential Era" with RNNs and LSTMs. They read text like humans: one word at a time, left-to-right.
                Meaning was lost in long sentences. <strong>Then came the Transformer.</strong> It reads the entire sentence <em>at at once</em>.
            </p>
        </div>

        <h3 class="text-2xl font-bold text-white mt-8 mb-4">The Sequential Bottleneck (RNNs)</h3>
        <div class="bg-[#111] p-6 rounded-xl border border-red-500/20">
            <div class="flex flex-col space-y-4">
                <div class="flex items-center space-x-4">
                    <span class="text-red-400 font-mono">Input:</span>
                    <span class="text-gray-400">"The bank..." usually implies money.</span>
                </div>
                <div class="flex items-center space-x-4">
                    <span class="text-red-400 font-mono">Late Context:</span>
                    <span class="text-gray-400">"...of the river was muddy."</span>
                </div>
                <p class="text-sm text-gray-500 mt-2">
                    🚫 RNN problem: By the time it reads "river", it has forgotten "bank" context or committed to "money" meaning.
                    This prevented massive scaling. <strong>Sequential processing = Zero Parallelism.</strong>
                </p>
            </div>
        </div>

        <h3 class="text-2xl font-bold text-white mt-8 mb-4">Enter "Attention Is All You Need" (2017)</h3>
        <p class="text-gray-300">
            Google researchers proposed focusing on <em>relationships between words</em> regardless of distance.
            This mechanism is called <strong>Self-Attention</strong>.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div class="bg-[#1a1a1a] p-6 rounded-xl border border-green-500/20">
                <h4 class="text-xl font-semibold text-green-400 mb-2">Massive Parallelism</h4>
                <p class="text-gray-400">
                    Unlike RNNs, Transformers process all tokens simultaneously.
                    Training speed skyrocketed → Allowed for GPT-3 (175B params).
                </p>
            </div>
            <div class="bg-[#1a1a1a] p-6 rounded-xl border border-blue-500/20">
                <h4 class="text-xl font-semibold text-blue-400 mb-2">Infinite Context (Ideally)</h4>
                <p class="text-gray-400">
                    Any word can directly attend to any other word.
                    Distance is O(1), not O(N).
                    "Bank" connects to "River" instantly.
                </p>
            </div>
        </div>
    </div>
    """,
    "genai-6-2": """
    <div class="space-y-8">
        <h2 class="text-4xl font-bold text-white mb-6">🧠 The Transformer Mental Model</h2>
        
        <div class="bg-[#0f0f12] border border-gray-800 p-8 rounded-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 class="text-2xl font-semibold text-purple-300 mb-4">The Original Architecture (The "Sandwich")</h3>
            <p class="text-gray-300 mb-6">
                The original Transformer (for translation) had two distinct halves.
                Understanding this split is crucial for knowing the difference between BERT, GPT, and T5.
            </p>

            <div class="flex flex-col md:flex-row gap-8">
                <!-- Encoder -->
                <div class="flex-1 bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-blue-500">
                    <h4 class="text-xl font-bold text-blue-400 mb-2">1. The Encoder (Understanding)</h4>
                    <p class="text-sm text-gray-400 mb-4">"Read and Comprehend"</p>
                    <ul class="space-y-2 text-gray-300">
                        <li>• Bidirectional (Looks past & future)</li>
                        <li>• Builds a perfect representation of input</li>
                        <li>• Used in: <strong>BERT</strong>, Embeddings</li>
                    </ul>
                </div>

                <!-- Decoder -->
                <div class="flex-1 bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-green-500">
                    <h4 class="text-xl font-bold text-green-400 mb-2">2. The Decoder (Generation)</h4>
                    <p class="text-sm text-gray-400 mb-4">"Predict Next Token"</p>
                    <ul class="space-y-2 text-gray-300">
                        <li>• Unidirectional (Masked future)</li>
                        <li>• Generates text step-by-step</li>
                        <li>• Used in: <strong>GPT</strong>, Llama, Claude</li>
                    </ul>
                </div>
            </div>
        </div>

        <h3 class="text-2xl font-bold text-white mt-8 mb-4">Shift to "Decoder-Only" Architecture</h3>
        <p class="text-gray-300 leading-relaxed">
            Modern LLMs (GPT-4, Llama 3) are <strong>Decoder-Only</strong>. They don't have an Encoder.
            They simply treat the prompt as the "past" sequence and generate the future.
            This simplicity scales better.
        </p>

        <div class="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 mt-6">
             <h4 class="text-lg font-bold text-blue-300 mb-2">📌 Key Takeaway for LLM Engineers</h4>
             <p class="text-gray-400">
                When we say "LLM", we almost always mean a <strong>Decoder-Only Transformer</strong> trained on Next-Token Prediction.
             </p>
        </div>
    </div>
    """,
    "genai-6-3": """
    <div class="space-y-8">
        <h2 class="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            🔍 The Core Innovation: Self-Attention
        </h2>

        <p class="text-gray-300 text-lg">
            Attention allows the model to decide <em>"How much should I focus on other words to understand THIS word?"</em>
        </p>

        <div class="bg-[#111] p-8 rounded-2xl border border-yellow-500/20">
            <h3 class="text-2xl font-bold text-white mb-6">The Database Analogy: Queries, Keys, Values</h3>
            <p class="text-gray-400 mb-6">
                Every token in the sequence produces three vectors: <strong>Query (Q), Key (K), Value (V)</strong>.
            </p>

            <div class="space-y-6">
                <!-- Q -->
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl">Q</div>
                    <div>
                        <h4 class="text-blue-300 font-bold">Query Vector</h4>
                        <p class="text-gray-400 text-sm">"What am I looking for?" (e.g., token "bank" looking for adjectives)</p>
                    </div>
                </div>

                <!-- K -->
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-xl">K</div>
                    <div>
                        <h4 class="text-green-300 font-bold">Key Vector</h4>
                        <p class="text-gray-400 text-sm">"What do I contain?" (e.g., token "river" identifies as a location/nature)</p>
                    </div>
                </div>

                <!-- V -->
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xl">V</div>
                    <div>
                        <h4 class="text-purple-300 font-bold">Value Vector</h4>
                        <p class="text-gray-400 text-sm">"Here is my actual content/meaning to pass along."</p>
                    </div>
                </div>
            </div>

            <div class="mt-8 p-4 bg-gray-800/50 rounded-lg text-center font-mono text-sm text-yellow-200">
                Attention(Q, K, V) = softmax( (Q · Kᵀ) / √d ) · V
            </div>
        </div>

        <h3 class="text-xl font-bold text-white mt-8">Thinking in Dot Products</h3>
        <p class="text-gray-300">
            A <strong>Dot Product</strong> measures similarity.
            If Query ("bank") and Key ("river") are similar vectors, their dot product is high.
            High dot product = High Attention Score.
            The model learns to rotate these vectors during training so related concepts align.
        </p>
    </div>
    """,
    "genai-6-4": """
    <div class="space-y-8">
        <h2 class="text-3xl font-bold text-white mb-4">📍 Positional Encodings: The "You Are Here" Map</h2>
        <p class="text-gray-400 text-lg">
            Transformers process all tokens in parallel. Unlike RNNs, they possess <strong>no inherent sense of order</strong>.
            "Dog bites Man" and "Man bites Dog" look identical to a raw Transformer.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="md:col-span-1 bg-red-900/10 border border-red-500/30 p-6 rounded-xl">
                <h3 class="text-red-400 font-bold mb-2">Original (Sinusoidal)</h3>
                <p class="text-sm text-gray-400">
                    Added fixed sine waves to input embeddings.
                    <br><br>
                    ❌ <strong>Problem:</strong> Hard to extrapolate to lengths longer than trained.
                </p>
            </div>
            <div class="md:col-span-1 bg-blue-900/10 border border-blue-500/30 p-6 rounded-xl">
                <h3 class="text-blue-400 font-bold mb-2">Learned Embeddings</h3>
                <p class="text-sm text-gray-400">
                    Let the model learn position vectors.
                    <br><br>
                    ❌ <strong>Problem:</strong> Absolute positions fail when context length changes.
                </p>
            </div>
            <div class="md:col-span-1 bg-green-900/10 border border-green-500/30 p-6 rounded-xl transform scale-105 shadow-xl shadow-green-900/20">
                <h3 class="text-green-400 font-bold mb-2">RoPE (Rotary Position Embeddings)</h3>
                <p class="text-sm text-gray-400">
                    <strong>The 2026 Standard (Llama, Mistral).</strong>
                    Rotates the vector pairs by an angle relative to position.
                    <br><br>
                    ✅ <strong>Relative:</strong> "Token B is 5 steps from Token A" (Invariant to absolute position).
                </p>
            </div>
        </div>

        <div class="mt-8 bg-[#111] p-6 rounded-xl">
            <h3 class="text-xl font-bold text-white mb-4">Pro Tip: ALiBi & Long Context</h3>
            <p class="text-gray-300">
                <strong>ALiBi (Attention with Linear Biases)</strong> penalizes attention based on distance.
                It allows models trained on 4k context to generalize to 16k+ without fine-tuning.
                However, <strong>RoPE</strong> is currently winning the architecture war.
            </p>
        </div>
    </div>
    """,
    "genai-6-5": """
    <div class="space-y-8">
        <h2 class="text-3xl font-bold text-white mb-6">🏗️ The Modern LLM Stack (2026 Standard)</h2>
        <p class="text-gray-400">
            If you were building "Llama 4" from scratch today, you wouldn't use the original 2017 Transformer code.
            Here is the modern "vibe" architecture.
        </p>

        <div class="space-y-4">
            <!-- Layer -->
            <div class="flex items-center gap-4 bg-[#222] p-4 rounded-lg border border-gray-700">
                 <div class="w-10 h-10 rounded bg-indigo-600 flex items-center justify-center text-white font-bold">1</div>
                 <div>
                     <h4 class="font-bold text-white">Tokenizer: Byte-Pair Encoding (BPE)</h4>
                     <p class="text-sm text-gray-400">Raw text → Integers (approx 0.75 words/token).</p>
                 </div>
            </div>

            <!-- Layer -->
            <div class="flex items-center gap-4 bg-[#222] p-4 rounded-lg border border-gray-700">
                 <div class="w-10 h-10 rounded bg-blue-600 flex items-center justify-center text-white font-bold">2</div>
                 <div>
                     <h4 class="font-bold text-white">Pre-Normalization (RMSNorm)</h4>
                     <p class="text-sm text-gray-400">Normalize <em>input</em> to attention (more stable than Post-Norm). RMSNorm is simpler than LayerNorm.</p>
                 </div>
            </div>

             <!-- Layer -->
             <div class="flex items-center gap-4 bg-[#222] p-4 rounded-lg border border-gray-700">
                 <div class="w-10 h-10 rounded bg-purple-600 flex items-center justify-center text-white font-bold">3</div>
                 <div>
                     <h4 class="font-bold text-white">SwiGLU Activation</h4>
                     <p class="text-sm text-gray-400">Replaces ReLU/GELU. "Gated Linear Units" are mathematically superior for gradient flow.</p>
                 </div>
            </div>

            <!-- Layer -->
            <div class="flex items-center gap-4 bg-[#222] p-4 rounded-lg border border-gray-700">
                 <div class="w-10 h-10 rounded bg-pink-600 flex items-center justify-center text-white font-bold">4</div>
                 <div>
                     <h4 class="font-bold text-white">Grouped-Query Attention (GQA)</h4>
                     <p class="text-sm text-gray-400">Optimization: Share Key/Value heads across multiple Query heads to save memory (KV Cache).</p>
                 </div>
            </div>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg mt-6">
            <h3 class="font-mono text-green-400 text-lg mb-2">> The "Llama-fication" of AI</h3>
            <p class="text-sm text-gray-300">
                Almost all open-weights models (Mistral, Yi, etc.) copy the Llama architecture.
                Why? Because the community has optimized inference engines (vLLM, llama.cpp) for this specific stack.
                <strong>Custom architectures are expensive to deploy.</strong>
            </p>
        </div>
    </div>
    """,
    "genai-6-6": """
    <div class="space-y-8">
        <h2 class="text-3xl font-bold text-white mb-6">🎋 Multi-Head Attention (MHA)</h2>
        <p class="text-gray-300 text-lg">
            Why have one "Attention" view when you can have many?
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-[#111] p-6 rounded-xl border border-gray-800">
                <h3 class="text-xl font-bold text-white mb-4">The "Multiple Perspectives" Theory</h3>
                <p class="text-gray-400 mb-4">
                    Just as you might look at a sentence for grammar, tone, and logic simultaneously, MHA allows the model to learn different relationships in parallel heads.
                </p>
                <ul class="space-y-2 text-sm text-gray-500">
                    <li>👁️ <strong>Head 1:</strong> Focuses on previous word (local context)</li>
                    <li>👁️ <strong>Head 2:</strong> Focuses on the subject of the sentence (long range)</li>
                    <li>👁️ <strong>Head 3:</strong> Focuses on punctuation/syntax</li>
                </ul>
            </div>

            <div class="bg-[#111] p-6 rounded-xl border border-gray-800">
                 <h3 class="text-xl font-bold text-white mb-4">Evolution of Heads</h3>
                 <div class="space-y-4">
                     <div>
                         <span class="text-green-400 font-bold">MHA (Multi-Head):</span>
                         <span class="text-gray-400 text-sm">Every head has its own Q, K, V. (Heavy memory usage).</span>
                     </div>
                     <div>
                         <span class="text-yellow-400 font-bold">MQA (Multi-Query):</span>
                         <span class="text-gray-400 text-sm">All heads share ONE K and V. (Fast, but maybe dumb).</span>
                     </div>
                     <div class="p-2 bg-blue-900/20 rounded border border-blue-500/50">
                         <span class="text-blue-400 font-bold">GQA (Grouped-Query):</span>
                         <span class="text-gray-300 text-sm">The Sweet Spot (Llama 2/3). Groups heads to share K/V. Best trade-off.</span>
                     </div>
                 </div>
            </div>
        </div>
    </div>
    """,
    "genai-6-7": """
    <div class="space-y-8">
        <h2 class="text-3xl font-bold text-white">🔄 Decoder-Only vs Encoder-Decoder</h2>
        
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="border-b border-gray-700">
                        <th class="p-4 text-gray-400">Architecture</th>
                        <th class="p-4 text-gray-400">Examples</th>
                        <th class="p-4 text-gray-400">Best For...</th>
                        <th class="p-4 text-gray-400">Vibe</th>
                    </tr>
                </thead>
                <tbody class="text-gray-300">
                    <tr class="bg-[#1a1a1a]">
                        <td class="p-4 font-bold text-blue-400">Encoder-Only</td>
                        <td class="p-4">BERT, RoBERTa</td>
                        <td class="p-4">Classification, Sentiment, Search (Embeddings)</td>
                        <td class="p-4">"The Analyst" 🧐</td>
                    </tr>
                    <tr class="bg-[#111]">
                        <td class="p-4 font-bold text-green-400">Decoder-Only</td>
                        <td class="p-4">GPT-4, Llama 3, Claude 3</td>
                        <td class="p-4">Text Generation, Chat, Code</td>
                        <td class="p-4">"The Creator" 🎨</td>
                    </tr>
                     <tr class="bg-[#1a1a1a]">
                        <td class="p-4 font-bold text-purple-400">Encoder-Decoder</td>
                        <td class="p-4">T5, Bart, Whisper</td>
                        <td class="p-4">Translation, Summarization (Seq2Seq)</td>
                        <td class="p-4">"The Translator" 🗣️</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="bg-yellow-900/20 border border-yellow-500/30 p-6 rounded-xl mt-6">
            <h3 class="text-xl font-bold text-yellow-500 mb-2">Why did Decoder-Only win?</h3>
            <p class="text-gray-300">
                It turns out, if you make a Decoder-Only model big enough and train it on enough data, it gets really good at "Understanding" too (emergent behavior).
                Simplifying the stack to just one block type made scaling massive clusters easier.
            </p>
        </div>
    </div>
    """,
    "genai-6-8": """
    <div class="space-y-8">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
            ⚡ KV Cache: Why GPT Feels Fast
        </h2>
        
        <p class="text-gray-300 text-lg">
            When generating text, the model processes the prompt + generated words <strong>one by one</strong>.
            Without caching, it would have to re-compute the attention for the <em>entire history</em> for every single new word generated.
        </p>

        <div class="flex flex-col space-y-4">
            <div class="bg-[#111] p-6 rounded-xl text-center border border-gray-800">
                <p class="text-red-400 font-mono mb-2">Without KV Cache (O(N²))</p>
                <p class="text-sm text-gray-500">Generating word #100 re-calculates words 1-99.</p>
                <div class="w-full h-2 bg-gray-800 rounded mt-2"><div class="w-[90%] h-full bg-red-600 rounded"></div></div>
            </div>

            <div class="bg-[#111] p-6 rounded-xl text-center border border-green-500/30">
                <p class="text-green-400 font-mono mb-2">With KV Cache (O(N))</p>
                <p class="text-sm text-gray-500">Words 1-99 are saved (Cached) in VRAM. Only compute word #100.</p>
                <div class="w-full h-2 bg-gray-800 rounded mt-2"><div class="w-[10%] h-full bg-green-500 rounded"></div></div>
            </div>
        </div>

        <div class="bg-gray-800 p-6 rounded-xl mt-4">
            <h3 class="text-xl font-bold text-white mb-2">The Memory Cost</h3>
            <p class="text-gray-300">
                KV Cache lives in GPU VRAM.
                <strong>This is the #1 bottleneck for large context windows.</strong>
                A 128k context window on Llama-70B can take up 100GB+ of VRAM just for the cache!
                <br><br>
                <em>This is why Grouped-Query Attention (GQA) was invented — to reduce the size of the KV Cache.</em>
            </p>
        </div>
    </div>
    """,
    "genai-6-9": """
    <div class="space-y-8">
        <h2 class="text-3xl font-bold text-white mb-6">🔭 Context Windows (2026 Reality)</h2>
        <p class="text-gray-300 text-lg">
            "Context Window" is the working memory of the LLM.
            GPT-4 Turbo (128k) -> Gemini 1.5 Pro (1M - 10M).
            How are we hitting 1 Million tokens?
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-[#0b0b0b] p-6 rounded-xl border border-gray-800">
                <h3 class="text-xl font-bold text-blue-400 mb-2">Ring Attention</h3>
                <p class="text-sm text-gray-400">
                    Splits the sequence across multiple GPUs in a ring.
                    Allows training on infinite sequence lengths limited only by number of GPUs.
                </p>
            </div>
            <div class="bg-[#0b0b0b] p-6 rounded-xl border border-gray-800">
                <h3 class="text-xl font-bold text-purple-400 mb-2">Needle in a Haystack</h3>
                <p class="text-sm text-gray-400">
                    The ability to retrieve a specific fact from 1M tokens.
                    Modern RoPE variations aid this "long-term focus".
                </p>
            </div>
        </div>

        <div class="bg-red-900/10 border border-red-500/20 p-6 rounded-xl mt-6">
            <h3 class="text-xl font-bold text-red-300 mb-2">⚠️ The "Lost in the Middle" Phenomenon</h3>
            <p class="text-gray-300">
                LLMs are great at remembering the <strong>Start</strong> (Prompt) and the <strong>End</strong> (Recent context).
                They often forget details buried in the middle of a long context.
                RAG (Retrieval Augmented Generation) is still superior for massive data retrieval than pure Context Window.
            </p>
        </div>
    </div>
    """,
    "genai-6-10": """
    <div class="space-y-8">
        <div class="flex items-center justify-between">
             <h2 class="text-3xl font-bold text-white">🆕 New Kids on the Block</h2>
             <span class="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">Forward Looking</span>
        </div>
        
        <p class="text-gray-300 text-lg">
            Is the Transformer the end of history? Probably not.
            The O(N²) quadratic cost of Attention is a massive pain.
        </p>

        <div class="space-y-6">
            <!-- Mamba -->
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border-l-4 border-green-500">
                <h3 class="text-2xl font-bold text-green-400 mb-2">🐍 Mamba (SSMs)</h3>
                <p class="text-gray-300">
                    <strong>State Space Models.</strong>
                    They have O(N) linear complexity (like RNNs) but train in parallel (like Transformers).
                    <br>
                    <em>Potential:</em> Infinite context with constant memory usage.
                </p>
            </div>

            <!-- MoE -->
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border-l-4 border-yellow-500">
                <h3 class="text-2xl font-bold text-yellow-400 mb-2">🧩 Mixture of Experts (MoE)</h3>
                <p class="text-gray-300">
                    <strong>(Mixtral 8x7B, GPT-4 rumor).</strong>
                    Instead of one giant brain, you have 8 smaller experts.
                    For each token, a "Router" picks the best 2 experts to handle it.
                    <br>
                    <em>Benefit:</em> Inference costs of a small model, Knowledge of a massive model.
                </p>
            </div>
        </div>
    </div>
    """,
    "genai-6-11": """
    <div class="space-y-8">
        <h2 class="text-3xl font-bold text-white mb-6">📦 Why GPT-4 ≠ GPT-4.1</h2>
        <p class="text-gray-300 text-lg">
            Modern "Frontier Models" are not single neural networks stored in a `.pth` file.
            They are <strong>Modular Systems</strong>.
        </p>

        <div class="bg-[#111] p-8 rounded-2xl border border-gray-800 relative">
            <h3 class="text-center text-xl font-bold text-white mb-8 border-b border-gray-700 pb-4">The "ChatGPT" System Inference</h3>
            
            <div class="flex flex-col gap-4">
                <div class="p-4 bg-gray-800 rounded text-center text-gray-300">USER INPUT</div>
                <div class="flex justify-center text-gray-600">↓</div>
                <div class="p-4 bg-blue-900/30 border border-blue-500 rounded text-center text-blue-200 font-bold">
                    Moderation API (Safety Check)
                </div>
                <div class="flex justify-center text-gray-600">↓</div>
                <div class="p-4 bg-purple-900/30 border border-purple-500 rounded text-center text-purple-200 font-bold">
                    Router / Tool Selector (Use Search? Use Python?)
                </div>
                <div class="flex justify-center text-gray-600">↓</div>
                <div class="flex gap-4">
                     <div class="flex-1 p-4 bg-gray-800 rounded text-center text-xs text-gray-400">Expert 1 (Code)</div>
                     <div class="flex-1 p-4 bg-gray-800 rounded text-center text-xs text-gray-400">Expert 2 (Chat)</div>
                </div>
                <div class="flex justify-center text-gray-600">↓</div>
                <div class="p-4 bg-green-900/30 border border-green-500 rounded text-center text-green-200 font-bold">
                    Speculative Decoding (Draft Model)
                </div>
            </div>
            
            <p class="text-center mt-8 text-gray-500 text-sm">
                "Speculative Decoding" uses a tiny, fast model to guess the next 5 tokens, and the big model just validates them in parallel. 2x Speedup!
            </p>
        </div>
    </div>
    """,
    "genai-6-12": """
    <div class="space-y-8">
        <h2 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            ✨ Emergence
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            The most spooky part of LLMs.
            We trained them to "Complete the text".
            We never programmed them to code, translate, or reason.
            <strong>These abilities EMERGED purely from scale.</strong>
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div class="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 class="text-white font-bold mb-2">In-Context Learning</h3>
                <p class="text-sm text-gray-400">
                    The ability to learn a new task <em>at runtime</em> just by seeing examples in the prompt.
                    No weights are updated. The "learning" happens in the activations/KV Cache.
                </p>
            </div>
             <div class="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 class="text-white font-bold mb-2">Power Laws</h3>
                <p class="text-sm text-gray-400">
                    Performance scales predictably with Compute and Data.
                    We haven't hit the ceiling yet. GPT-5 is just "More Compute".
                </p>
            </div>
        </div>
    </div>
    """,
    "genai-6-13": """
    <div class="space-y-8">
        <h2 class="text-3xl font-bold text-white mb-6">🛠️ Hands-On: Visualization & Intuition</h2>
        <p class="text-gray-300">
            We will use the <strong>LLM Visualization Tool (by B. Hoover/IBM)</strong> (simulated) to peer inside a tiny GPT.
        </p>

        <div class="bg-[#111] p-8 rounded-2xl border border-dashed border-gray-700">
            <h3 class="text-xl font-bold text-white mb-4">Exercise 1: Inspect Attention Maps</h3>
            <ol class="list-decimal list-inside space-y-4 text-gray-400">
                <li>Input the sentence: <span class="text-green-400 font-mono">"The animal didn't cross the street because it was too tired."</span></li>
                <li>Look at the Attention Heads for the word <strong>"it"</strong>.</li>
                <li>Find the specific head that links "it" to "animal".</li>
                <li>Change "tired" to "wide". Input: <span class="text-green-400 font-mono">"...because it was too wide."</span></li>
                <li>Watch the attention head snap from "animal" to "street". 🤯</li>
            </ol>
        </div>

        <div class="mt-8">
            <h3 class="text-xl font-bold text-white mb-4">Project: Build a "Baby GPT" Config</h3>
            <p class="text-gray-400 mb-4">
                Define the hyperparameters for a 10M parameter model in Python.
            </p>
            <div class="bg-black p-4 rounded-lg font-mono text-sm text-blue-300 border border-gray-800">
<pre>
# baby_gpt_config.py
config = {
    "vocab_size": 50257,    # GPT-2 Tokenizer
    "n_embd": 384,          # Embedding Dimension
    "n_head": 6,            # Number of Heads
    "n_layer": 6,           # Number of Layers
    "block_size": 256,      # Context Window
    "dropout": 0.2
}
# Total Params ~ 10 Million
</pre>
            </div>
        </div>
    </div>
    """
}

def inject_content():
    # Read the course-data.ts file
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Inject content for each lesson
        for lesson_id, html_content in content_map.items():
            # Clean up indentation from the Python strings
            clean_html = textwrap.dedent(html_content).strip()
            
            # Escape existing backticks in HTML content (if any)
            safe_html = clean_html.replace('`', '\\`')
            
            # Create a regex to find the specific lesson content field
            # We look for { id: "LESSON_ID", ... content: `...` } OR content: ""
            # Regex Explanation:
            # (id:\s*"{lesson_id}"[\s\S]*?content:\s*)  -> Capture group 1: lesson ID up to "content:" header
            # (?:""|`[\s\S]*?`)                          -> Non-capturing group: either empty quotes OR backticked content
            
            pattern = re.compile(f'(id:\s*"{lesson_id}"[\s\S]*?content:\s*)(?:""|`[\s\S]*?`)', re.DOTALL)
            
            if pattern.search(content):
                print(f"Injecting content for {lesson_id}...")
                
                # Careful replacement using lambda to avoid escape character issues in regex replacement string
                content = pattern.sub(lambda m: f'{m.group(1)}`\n{safe_html}\n`', content)
            else:
                print(f"⚠️ Warning: Could not find placeholder for {lesson_id}")

        # Write the updated content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("✅ GenAI Module 6 Content Injection Complete with Clean Formatting!")
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    inject_content()
