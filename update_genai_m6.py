import re

# 11 Lessons for "6. Transformers & Modern LLM Architecture"
# Content heavily styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_6_content = """,
            {
                title: "6. Transformers & Modern LLM Architecture",
                lessons: [
                    {
                        id: "genai-6-1",
                        title: "6.1 Why Architecture Matters for Engineers",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-indigo-900 to-purple-900 border border-indigo-700 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">
            🏗️ Beyond the API
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Understanding architecture isn't about building models; it's about <strong>choosing</strong> them. Why is Gemini 1.5 slow but huge? Why is Llama 3 fast? The answer is Architecture.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Latency & Cost</h3>
            <p class="text-sm text-gray-400">
                Knowing about KV Cache and MoE helps you predict why your RAG pipeline is slow or expensive before you write a single line of code.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Context Limits</h3>
            <p class="text-sm text-gray-400">
                Why do models crash after 100k tokens? Understanding attention mechanism limitations (quadratic complexity) gives you the answer.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-6-2",
                        title: "6.2 From Tokens to Vectors to Layers",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛤️ The Journey of a Token</h2>

    <div class="relative pl-8 border-l-2 border-gray-800 space-y-12 my-8">
        <div class="relative">
             <div class="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs ring-4 ring-[#0a0a0a]">1</div>
            <strong class="text-blue-400 block text-lg">Input Text</strong>
            <div class="bg-black p-3 rounded mt-2 font-mono text-xs text-gray-300">"AI is cool"</div>
        </div>
        
         <div class="relative">
             <div class="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs ring-4 ring-[#0a0a0a]">2</div>
            <strong class="text-purple-400 block text-lg">Tokenization</strong>
            <div class="bg-black p-3 rounded mt-2 font-mono text-xs text-gray-300">[1045, 9920, 311]</div>
        </div>

        <div class="relative">
             <div class="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xs ring-4 ring-[#0a0a0a]">3</div>
            <strong class="text-green-400 block text-lg">Embedding Lookup</strong>
            <div class="bg-black p-3 rounded mt-2 font-mono text-xs text-gray-300">
                [0.1, -0.5, ...]<br>
                [0.9, 0.2, ...]<br>
                [0.0, 0.0, ...]
            </div>
        </div>
        
         <div class="relative">
             <div class="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-xs ring-4 ring-[#0a0a0a]">4</div>
            <strong class="text-orange-400 block text-lg">Transformer Layers</strong>
            <p class="text-sm text-gray-400 mt-2">Passed through 32-96 layers of Attention + MLP.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-6-3",
                        title: "6.3 The Transformer Block: Attention & Feed-Forward",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white mb-6">🧱 The Lego Block</h2>

    <div class="bg-[#111] p-8 rounded-3xl border border-gray-800 flex flex-col items-center gap-6">
        <div class="w-full max-w-lg p-6 rounded-xl border border-blue-500/30 bg-blue-900/10 text-center">
            <strong class="text-blue-400 text-xl block mb-2">Multi-Head Attention</strong>
            <p class="text-sm text-gray-400">"Mixing Information"</p>
            <p class="text-xs text-gray-500 mt-1">Tokens talk to each other. Context is built here.</p>
        </div>
        
        <div class="text-gray-600 text-2xl">⬇️</div>
        
        <div class="w-full max-w-lg p-6 rounded-xl border border-pink-500/30 bg-pink-900/10 text-center">
            <strong class="text-pink-400 text-xl block mb-2">Feed Forward Network (MLP)</strong>
            <p class="text-sm text-gray-400">"Thinking / Processing"</p>
             <p class="text-xs text-gray-500 mt-1">Each token is processed individually. Facts are retrieved here.</p>
        </div>
        
        <div class="text-gray-600 text-2xl">⬇️</div>
        
        <div class="w-full max-w-lg p-3 rounded-xl border border-green-500/30 bg-green-900/10 text-center">
            <strong class="text-green-400 text-sm">Add & Norm</strong>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-6-4",
                        title: "6.4 KV Cache & Long-Context Efficiency",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🧠 KV Cache: The Memory</h2>
    
    <div class="bg-yellow-900/10 border border-yellow-500/20 p-6 rounded-2xl">
        <strong class="text-yellow-400 block text-lg mb-2">The Bottleneck</strong>
        <p class="text-gray-300 text-sm">
            Generating token #1001 requires attending to tokens #1-#1000. Recomputing that every time is wasteful.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
            <h3 class="text-lg font-bold text-white mb-2">Without Cache</h3>
            <p class="text-xs text-red-400 mb-2">O(n²) per step</p>
            <p class="text-sm text-gray-400">Re-reads the entire book for every new word.</p>
        </div>

        <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
            <h3 class="text-lg font-bold text-white mb-2">With KV Cache</h3>
            <p class="text-xs text-green-400 mb-2">O(n) per step</p>
            <p class="text-sm text-gray-400">Remembers the "keys and values" of past tokens. Only computes the new token.</p>
        </div>
    </div>
    
    <div class="bg-black p-4 rounded-xl border border-gray-800 text-sm text-gray-400">
        <strong>Trade-off:</strong> KV Cache takes up huge GPU VRAM. <br>
        <span class="text-blue-400">128k context @ Llama-3-70B ≈ 10GB+ VRAM just for cache!</span>
    </div>
</div>
`
                    },
                    {
                        id: "genai-6-5",
                        title: "6.5 Mixture-of-Experts (MoE) LLMs",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">👥 Mixture of Experts</h2>
    
    <p class="text-gray-300">
        Why use one giant brain when you can have 8 smaller, specialized brains?
    </p>
    
    <div class="relative bg-[#111] p-10 rounded-3xl border border-gray-800 flex justify-center">
        <!-- Visualization of Router -->
        <div class="flex flex-col items-center gap-8 w-full max-w-2xl">
            <div class="bg-gray-800 px-6 py-3 rounded-full text-white font-bold border border-gray-600">Token Input</div>
            
            <div class="w-1 h-8 bg-gray-600"></div>
            
            <div class="bg-blue-600 px-8 py-4 rounded-xl text-white font-bold shadow-lg shadow-blue-900/50">Router / Gate</div>
            
            <div class="flex gap-4 w-full justify-between relative">
                <!-- Lines -->
                <div class="absolute left-1/4 top-0 w-0.5 h-8 bg-gray-700 -translate-y-full rotate-[-45deg] origin-bottom"></div>
                <div class="absolute right-1/4 top-0 w-0.5 h-8 bg-gray-700 -translate-y-full rotate-[45deg] origin-bottom"></div>

                <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 text-xs text-center w-24 opacity-50">Expert 1<br>(Math)</div>
                <div class="bg-green-900/50 p-4 rounded-lg border border-green-500 text-xs text-center w-24 transform scale-110 shadow-lg text-white font-bold">Expert 2<br>(Code)</div>
                <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 text-xs text-center w-24 opacity-50">Expert 3<br>(History)</div>
                <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 text-xs text-center w-24 opacity-50">Expert 4<br>(Creative)</div>
            </div>
        </div>
    </div>
    
    <div class="bg-gray-900 p-4 rounded-xl border-l-4 border-purple-500 text-sm text-gray-300">
        <strong>Benefit:</strong> A 8x7B MoE model has the smarts of a 50B model but runs as fast as a 12B model during inference.
    </div>
</div>
`
                    },
                    {
                        id: "genai-6-6",
                        title: "6.6 Hybrid Mamba‑Transformer & State-Space Models",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-teal-900/40 to-emerald-900/40 border border-teal-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 mb-4">
            🐍 The Mamba Revolution
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Transformers are O(n²). Mamba (State Space Models) is <strong>O(n)</strong> (Linear).
        </p>
    </div>

    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <h3 class="text-lg font-bold text-white mb-4">Hybrid Architectures (2026)</h3>
        <p class="text-gray-400 text-sm mb-6">
            Pure SSMs struggle with "recall". Pure Transformers are too slow at 1M+ context. The solution? <strong>Mix them.</strong>
        </p>
        
        <div class="flex items-center gap-2 font-mono text-sm justify-center bg-black p-4 rounded-lg border border-gray-700">
             <span class="text-teal-400">[Mamba Layer]</span>
             <span class="text-gray-500">→</span>
             <span class="text-teal-400">[Mamba Layer]</span>
             <span class="text-gray-500">→</span>
             <span class="text-purple-400 border border-purple-500 px-2 rounded">[Transformer Attention]</span>
             <span class="text-gray-500">→</span>
             <span class="text-teal-400">[Mamba Layer]</span>
        </div>
        <p class="text-center text-xs text-gray-500 mt-2">Jamba / Zamba Architecture style</p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-6-7",
                        title: "6.7 Open-Weight vs Proprietary: Architecture Implications",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔓 Open vs Closed</h2>

    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
            <h3 class="text-xl font-bold text-orange-400 mb-4">Open Weights (Llama 4, Mistral)</h3>
            <ul class="space-y-3 text-sm text-gray-300">
                <li class="flex gap-2"><span>✅</span> You own the weights.</li>
                <li class="flex gap-2"><span>✅</span> Can fine-tune heavily.</li>
                <li class="flex gap-2"><span>✅</span> Run on-prem / air-gapped.</li>
                <li class="flex gap-2 text-gray-500"><span>❌</span> Usually lag 6 months behind SOTA.</li>
            </ul>
        </div>
        
         <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
            <h3 class="text-xl font-bold text-purple-400 mb-4">Proprietary (GPT-5, Claude 4)</h3>
            <ul class="space-y-3 text-sm text-gray-300">
                <li class="flex gap-2"><span>✅</span> Massive scale (Trillions of params).</li>
                <li class="flex gap-2"><span>✅</span> Better reasoning / coding.</li>
                <li class="flex gap-2"><span>✅</span> Managed infrastructure (Zero ops).</li>
                <li class="flex gap-2 text-gray-500"><span>❌</span> Data privacy concerns.</li>
            </ul>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-6-8",
                        title: "6.8 Training Foundation Models (Conceptual Overview)",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🏋️ Training Scale</h2>
    
    <div class="bg-[#111] p-8 rounded-3xl border border-gray-800 text-center">
        <div class="inline-block p-4 bg-red-900/20 rounded-full mb-4">
            <span class="text-4xl">🔥</span>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">10,000+ H100 GPUs</h3>
        <p class="text-gray-400 mb-6">
            Training a foundation model in 2026 is a massive distributed systems problem.
        </p>
        
        <div class="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-blue-500 to-red-500 w-[90%]"></div>
        </div>
        <div class="flex justify-between text-xs text-gray-500 mt-2">
            <span>Data Curating (40%)</span>
            <span>Training (50%)</span>
            <span>RLHF (10%)</span>
        </div>
    </div>
    
    <div class="grid grid-cols-2 gap-4">
        <div class="bg-[#1e1e1e] p-4 rounded-xl border border-gray-700">
             <strong class="text-white block">Pre-Training</strong>
             <p class="text-xs text-gray-400">Learning language from the internet. predicting next token.</p>
        </div>
         <div class="bg-[#1e1e1e] p-4 rounded-xl border border-gray-700">
             <strong class="text-white block">Post-Training</strong>
             <p class="text-xs text-gray-400">Instruction tuning, RLHF, alignment. "Be a helpful assistant."</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-6-9",
                        title: "6.9 Architecture and Inference Trade-offs for Engineers",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">⚖️ The Engineering Trade-off</h2>
    
    <div class="overflow-hidden rounded-2xl border border-gray-800">
        <table class="w-full text-left text-sm text-gray-400">
            <thead class="bg-gray-900 text-white uppercase text-xs">
                <tr>
                    <th class="p-4">Goal</th>
                    <th class="p-4">Recommended Arch</th>
                    <th class="p-4">Why?</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-800 bg-[#111]">
                <tr>
                    <td class="p-4 font-bold text-blue-400">Low Latency</td>
                    <td class="p-4">SLM / MoE</td>
                    <td class="p-4">Fewer active parameters = faster generation.</td>
                </tr>
                <tr>
                    <td class="p-4 font-bold text-green-400">Massive Docs (1M+)</td>
                    <td class="p-4">Hybrid / Long-Context</td>
                    <td class="p-4">Linear attention or massive Ring Attention support.</td>
                </tr>
                <tr>
                    <td class="p-4 font-bold text-purple-400">Complex Reasoning</td>
                    <td class="p-4">Dense Frontier (GPT-4)</td>
                    <td class="p-4">Maximum capacity and breadth of knowledge.</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`
                    },
                    {
                        id: "genai-6-10",
                        title: "6.10 Mini Project: Architecture-Aware Model Selection",
                        duration: "25 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">🛡️ Lab: Chief Architect</h2>
        <p class="text-gray-300 mb-8">
            You are the CTO. Choose the model for these 3 scenarios and justify it using architecture concepts (MoE, KV Cache, Privacy).
        </p>

        <div class="space-y-4">
            <div class="p-4 bg-black/40 rounded-xl border border-white/5">
                <strong class="text-white block mb-1">Scenario A: Customer Support Bot</strong>
                <p class="text-sm text-gray-500">Needs to be cheap (<$0.01/req), fast, and polite. 90% common questions.</p>
            </div>
             <div class="p-4 bg-black/40 rounded-xl border border-white/5">
                <strong class="text-white block mb-1">Scenario B: Code Refactoring Agent</strong>
                <p class="text-sm text-gray-500">Needs to read entire repos (100k lines), very high reasoning accuracy.</p>
            </div>
             <div class="p-4 bg-black/40 rounded-xl border border-white/5">
                <strong class="text-white block mb-1">Scenario C: Medical Data Extraction</strong>
                <p class="text-sm text-gray-500">Strict privacy (HIPAA), never leaves premise, highly specific format.</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-6-11",
                        title: "6.11 Module 6 Wrap-up: Architecture as a Design Tool",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">🏁 Concepts Unlocked</h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            You can now look at a "HuggingFace" model card or an OpenAI announcement and understand exactly what it means for your production environment.
        </p>

        <div class="inline-grid grid-cols-2 gap-8 text-left max-w-lg mx-auto">
            <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Mastered</strong>
                <h3 class="text-white text-lg font-bold mt-1">Architecture</h3>
                <p class="text-gray-400 text-sm">Attention, MoE, Hybrids.</p>
            </div>
             <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Next Up</strong>
                <h3 class="text-white text-lg font-bold mt-1">Module 7</h3>
                <p class="text-gray-400 text-sm">Building with LLMs (LangChain/LlamaIndex).</p>
            </div>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m6():
    print(f"🔄 Injecting GenAI Module 6 (Transformers & Architecture)...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find Module 5.
    m5_title = 'title: "5. ML Foundations for LLM Understanding (Only Essentials)"'
    m5_start = content.find(m5_title)
    
    if m5_start == -1:
        print("❌ Could not find Module 5 title.")
        return
        
    # 2. Find Module 5 End.
    m5_brace_start = content.rfind('{', 0, m5_start)
    
    open_braces = 0
    m5_end_idx = -1
    
    for i in range(m5_brace_start, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                m5_end_idx = i + 1
                break
                
    if m5_end_idx == -1:
        print("❌ Could not parse Module 5 end.")
        return
        
    print(f"✅ Found Module 5 End at {m5_end_idx}")

    # 3. Check for Existing M6 and Remove if present
    m6_title_marker = 'title: "6. Transformers & Modern LLM Architecture"'
    m6_idx = content.find(m6_title_marker)
    
    if m6_idx != -1:
        print("🔄 Removing existing Module 6 before injection...")
        m6_brace_start = content.rfind('{', 0, m6_idx)
        # Scan for end
        open_b = 0
        m6_end = -1
        for i in range(m6_brace_start, len(content)):
             char = content[i]
             if char == '{': open_b += 1
             elif char == '}': 
                 open_b -= 1
                 if open_b == 0:
                     m6_end = i + 1
                     break
        
        if m6_end != -1:
            content = content[:m6_brace_start] + content[m6_end:]
            print("✅ Removed existing M6 block.")
            
            # Recalculate M5 position since content changed
            m5_start = content.find(m5_title)
            m5_brace_start = content.rfind('{', 0, m5_start)
            open_braces = 0
            m5_end_idx = -1
            for i in range(m5_brace_start, len(content)):
                char = content[i]
                if char == '{': open_braces += 1
                elif char == '}': 
                    open_braces -= 1
                    if open_braces == 0:
                        m5_end_idx = i + 1
                        break

    # 4. Inject
    final_content = content[:m5_end_idx] + new_module_6_content + content[m5_end_idx:]
    
    # 5. Clean up potential double commas "},, {"
    final_content = final_content.replace('},,', '},')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("✅ Module 6 (Transformers) injected successfully!")

if __name__ == "__main__":
    update_genai_m6()
