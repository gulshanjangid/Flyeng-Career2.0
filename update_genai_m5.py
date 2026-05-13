import re

# 10 Lessons for "5. ML Foundations for LLM Understanding (Only Essentials)"
# Content heavily styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_5_content = """,
            {
                title: "5. ML Foundations for LLM Understanding (Only Essentials)",
                lessons: [
                    {
                        id: "genai-5-1",
                        title: "5.1 Why You Need “Just Enough ML” for LLMs",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">
            🎓 The "Black Box" Problem
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            You don't need to write backpropagation code in 2026. But you <strong>must</strong> understand why the model hallucinates, why it drifts, and why it stops working.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">The Old Way</h3>
            <p class="text-sm text-gray-400">
                Spend 6 months learning PyTorch, calculus, and CUDA kernels before shipping a product.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">The Engineering Way</h3>
            <p class="text-sm text-gray-400">
                Understand the <strong>Inputs</strong> (Context), the <strong>Mechanism</strong> (Attention), and the <strong>Outputs</strong> (Probabilities) to build reliable systems.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-5-2",
                        title: "5.2 The Minimal Math: Vectors, Similarity & Probabilities",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📐 The Geometry of Intelligence</h2>

    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
            <h3 class="text-xl font-bold text-blue-400 mb-4">Cosine Similarity</h3>
            <div class="relative h-32 w-full bg-black rounded-lg border border-gray-800 flex items-center justify-center overflow-hidden">
                <!-- Simple SVG Wiz -->
                <svg viewBox="0 0 100 100" class="w-full h-full opacity-80">
                     <line x1="10" y1="90" x2="90" y2="90" stroke="#555" stroke-width="2" /> <!-- x axis -->
                     <line x1="10" y1="90" x2="10" y2="10" stroke="#555" stroke-width="2" /> <!-- y axis -->
                     <line x1="10" y1="90" x2="70" y2="30" stroke="#60a5fa" stroke-width="3" /> <!-- Vector A -->
                     <line x1="10" y1="90" x2="80" y2="70" stroke="#4ade80" stroke-width="3" /> <!-- Vector B -->
                     <path d="M 40 60 Q 50 65 50 78" stroke="white" fill="none" class="animate-pulse" />
                     <text x="50" y="55" fill="white" font-size="8">Angle</text>
                </svg>
            </div>
            <p class="text-sm text-gray-400 mt-4">Small angle = Similar meaning. <br>Used for <strong>Retrieval</strong>.</p>
        </div>

        <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
            <h3 class="text-xl font-bold text-pink-400 mb-4">Softmax & Temperature</h3>
            <div class="space-y-2 font-mono text-xs">
                 <div class="flex justify-between text-gray-400"><span>Token: "apple"</span> <span>Score: 5.2</span></div>
                 <div class="flex justify-between text-gray-400"><span>Token: "banana"</span> <span>Score: 2.1</span></div>
                 <div class="border-t border-gray-600 my-2"></div>
                 <div class="flex justify-between text-white font-bold"><span>Prob: "apple"</span> <span>96%</span></div>
                 <div class="flex justify-between text-white font-bold"><span>Prob: "banana"</span> <span>4%</span></div>
            </div>
             <p class="text-sm text-gray-400 mt-4">High Temp flattens distribution (Randomness). <br>Low Temp sharpens it (Determinism).</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-5-3",
                        title: "5.3 From “Classic ML” to Foundation Models",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📈 The Evolution</h2>
    
    <div class="relative border-l-2 border-gray-700 ml-4 pl-8 space-y-10">
        <div class="relative">
            <span class="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs text-gray-400 border border-gray-600">2010</span>
            <strong class="text-white block text-lg">Classic ML (sklearn)</strong>
            <p class="text-sm text-gray-400">Manual Feature Engineering. "Is spacy=True?" Decision Trees.</p>
        </div>
         <div class="relative">
            <span class="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-xs text-blue-300 border border-blue-600">2017</span>
            <strong class="text-white block text-lg">Deep Learning (CNN/RNN)</strong>
            <p class="text-sm text-gray-400">Learned features. Requires massive labeled datasets. Specific tasks only.</p>
        </div>
         <div class="relative">
            <span class="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center text-xs text-purple-300 border border-purple-600">2026</span>
            <strong class="text-white block text-lg">Foundation Models</strong>
            <p class="text-sm text-gray-400">Pre-trained on "The Internet". Adaptable via <strong>Prompting</strong> or <strong>Context</strong> (RAG). No training required.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-5-4",
                        title: "5.4 How Language Models Learn (Conceptual)",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-8 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">🔮 Next Token Prediction</h2>
        <p class="text-gray-400 mb-8">It's simple math, scaled to infinity.</p>
        
        <div class="inline-flex flex-wrap gap-2 text-xl font-mono justify-center">
            <span class="text-gray-500">The</span>
            <span class="text-gray-500">cat</span>
            <span class="text-gray-500">sat</span>
            <span class="text-gray-500">on</span>
            <span class="text-gray-500">the</span>
            <span class="bg-blue-600 text-white px-2 rounded animate-pulse">?</span>
        </div>
        
        <div class="mt-8 flex justify-center gap-4 text-sm">
             <div class="text-center">
                <div class="text-green-400 font-bold">mat (80%)</div>
                <div class="text-gray-600">Prediction</div>
             </div>
             <div class="text-center">
                <div class="text-yellow-400 font-bold">floor (15%)</div>
                <div class="text-gray-600">Prediction</div>
             </div>
             <div class="text-center">
                <div class="text-red-400 font-bold">car (0.01%)</div>
                <div class="text-gray-600">Outlier</div>
             </div>
        </div>
    </div>
    
    <div class="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
        <strong class="text-white block mb-2">Key Concept: Overfitting</strong>
        <p class="text-sm text-gray-400">
            If a model memorizes the training data perfectly, it can't write new poetry. It must <strong>generalize</strong> patterns, not just store facts.
        </p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-5-5",
                        title: "5.5 Transformers: The Engine Behind LLMs",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white mb-6">⚙️ Inside the Transformer</h2>

    <div class="relative bg-black p-8 rounded-3xl border border-gray-800 overflow-hidden">
        <div class="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
        
        <div class="flex flex-col gap-4 relative z-10 items-center">
            <div class="w-full max-w-md bg-gray-900 p-4 rounded-xl border border-gray-700 text-center">
                <strong class="text-purple-400">Self-Attention</strong>
                <p class="text-xs text-gray-500 mt-1">"The" looks at "cat". "Cat" looks at "sat". <br>Every word connects to every other word.</p>
            </div>
            
            <div class="h-6 w-0.5 bg-gray-700"></div>

             <div class="w-full max-w-md bg-gray-900 p-4 rounded-xl border border-gray-700 text-center">
                <strong class="text-blue-400">Feed Forward</strong>
                <p class="text-xs text-gray-500 mt-1">Process the meaning. "Think" about the context.</p>
            </div>
            
             <div class="h-6 w-0.5 bg-gray-700"></div>

             <div class="w-full max-w-md bg-gray-900 p-4 rounded-xl border border-gray-700 text-center">
                <strong class="text-green-400">Normalization</strong>
                <p class="text-xs text-gray-500 mt-1">Keep the numbers stable so we can stack 100 layers.</p>
            </div>
        </div>
    </div>
    
    <div class="bg-blue-900/10 p-6 rounded-2xl border-l-4 border-blue-500">
        <strong class="text-white">Why did this change everything?</strong>
        <p class="text-sm text-gray-400 mt-2">
            Parallelization. Previous models (RNNs) had to read one word at a time. Transformers read the whole book at once.
        </p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-5-6",
                        title: "5.6 Modern LLM Variants: MoE, Long-Context & SLMs",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🧬 The 2026 Model Zoo</h2>
    
    <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all group">
            <h3 class="text-lg font-bold text-purple-400 mb-2">MoE (Mixture of Experts)</h3>
            <p class="text-xs text-gray-400 mb-4">GPT-4, Mixtral.</p>
            <p class="text-sm text-gray-300">
                A team of specialists. One expert for code, one for history. Only the right expert works on each token.
            </p>
        </div>

        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all group">
            <h3 class="text-lg font-bold text-blue-400 mb-2">Long Context</h3>
            <p class="text-xs text-gray-400 mb-4">Gemini (2M+ tokens).</p>
            <p class="text-sm text-gray-300">
                "Needle in a haystack" attention. Can read entire codebases or novels in one prompt.
            </p>
        </div>

        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all group">
            <h3 class="text-lg font-bold text-green-400 mb-2">SLMs (Small Language Models)</h3>
            <p class="text-xs text-gray-400 mb-4">Phi-3, Llama 3 8B.</p>
            <p class="text-sm text-gray-300">
                Run on your laptop. Faster, cheaper, private. Great for specific tasks like classification.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-5-7",
                        title: "5.7 Embeddings, RAG, and Fine-Tuning: When to Use What",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white mb-6">🛠️ The Optimization Triangle</h2>

    <div class="flex flex-col gap-6">
        <div class="flex gap-6 items-start">
            <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl shrink-0">1</div>
            <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700 w-full">
                <strong class="text-white text-lg">Prompt Engineering</strong>
                <p class="text-gray-400 text-sm mt-1">Starting point. Fast, cheap, no infrastructure. <br><em>Use for: General reasoning, formatting, style.</em></p>
            </div>
        </div>

        <div class="flex gap-6 items-start">
            <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl shrink-0">2</div>
            <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700 w-full">
                <strong class="text-white text-lg">RAG (Context)</strong>
                <p class="text-gray-400 text-sm mt-1">Give the model a textbook. <br><em>Use for: Knowledge that updates frequently, private data, reducing hallucinations.</em></p>
            </div>
        </div>

        <div class="flex gap-6 items-start">
            <div class="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl shrink-0">3</div>
            <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700 w-full">
                <strong class="text-white text-lg">Fine-Tuning (Weights)</strong>
                <p class="text-gray-400 text-sm mt-1">Change the model's brain. <br><em>Use for: New languages, strict formats, deep domain expertise (Medical/Legal).</em></p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-5-8",
                        title: "5.8 Core Evaluation Ideas for LLM Behavior",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-8 rounded-3xl border border-gray-800">
        <h2 class="text-3xl font-bold text-white mb-6">🧪 Grading the AI</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <h4 class="text-gray-300 font-bold mb-2">Deterministic Evals</h4>
                <ul class="text-sm text-gray-500 space-y-2">
                    <li>• JSON Validity (Did it break?)</li>
                    <li>• Regex Match (Did it include the ID?)</li>
                    <li>• Keyword Presence</li>
                </ul>
            </div>
             <div>
                <h4 class="text-gray-300 font-bold mb-2">Probabilistic Evals (LLM-as-a-Judge)</h4>
                <ul class="text-sm text-gray-500 space-y-2">
                    <li>• "Is this answer helpful?" (Score 1-5)</li>
                    <li>• "Is this answer grounded in context?" (Yes/No)</li>
                    <li>• "Is this safe?"</li>
                </ul>
            </div>
        </div>
        
        <div class="mt-8 bg-red-900/10 border border-red-500/20 p-4 rounded-xl">
             <strong class="text-red-400">The Metric Trap</strong>
             <p class="text-xs text-gray-400 mt-1">
                Don't optimize for BLEU/ROUGE scores (old NLP metrics). They are meaningless for GenAI. Optimize for <strong>User Success</strong>.
             </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-5-9",
                        title: "5.9 Mini Project: Reasoning About Models Without Training Them",
                        duration: "25 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">🧠 Lab: The Architect's Choice</h2>
        <p class="text-gray-300 mb-8">
            Scenario: You are building a "Legal Contract Review Assistant". 
            You must choose the architecture.
        </p>

        <div class="grid gap-4">
             <div class="bg-black/40 p-4 rounded-xl border border-white/5 cursor-pointer hover:bg-black/60 transition-colors">
                <strong class="text-orange-400 block">Option A: Fine-Tuned Llama 3 8B</strong>
                <p class="text-sm text-gray-400">Fast, cheap, private. But might miss complex clauses.</p>
            </div>
             <div class="bg-black/40 p-4 rounded-xl border border-white/5 cursor-pointer hover:bg-black/60 transition-colors">
                <strong class="text-blue-400 block">Option B: GPT-4o + RAG</strong>
                <p class="text-sm text-gray-400">Expensive, high latency. But extremely smart and grounded in uploaded PDFs.</p>
            </div>
        </div>
        
        <div class="mt-6 text-center">
            <p class="text-white font-bold">Your Goal: Write a 1-page Design Doc justifying your choice using Cost, Privacy, and Accuracy trade-offs.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-5-10",
                        title: "5.10 Module 5 Wrap-up: ML Intuition for GenAI Engineers",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">🎓 Intuition Acquired</h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            You now understand the engine under the hood. You are ready to drive the car.
        </p>

        <div class="inline-grid grid-cols-2 gap-8 text-left max-w-lg mx-auto">
            <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Achieved</strong>
                <h3 class="text-white text-lg font-bold mt-1">Foundation</h3>
                <p class="text-gray-400 text-sm">Vectors, Transformers, Evals.</p>
            </div>
             <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Next Up</strong>
                <h3 class="text-white text-lg font-bold mt-1">Module 6</h3>
                <p class="text-gray-400 text-sm">Deep Dive into Transformers??? (Wait for update)</p>
            </div>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m5():
    print(f"🔄 Injecting GenAI Module 5 (ML Foundations)...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find Module 4 (Data Foundations).
    m4_title = 'title: "4. Data Foundations for LLMs"'
    m4_start = content.find(m4_title)
    
    if m4_start == -1:
        print("❌ Could not find Module 4 title.")
        return
        
    # 2. Find Module 4 End.
    # We look for the start brace of M4 first (backward from title)
    m4_brace_start = content.rfind('{', 0, m4_start)
    
    # Scan forward to find matching closing brace
    open_braces = 0
    m4_end_idx = -1
    
    for i in range(m4_brace_start, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                m4_end_idx = i + 1
                break
                
    if m4_end_idx == -1:
        print("❌ Could not parse Module 4 end.")
        return
        
    print(f"✅ Found Module 4 End at {m4_end_idx}")

    # 3. Check for Existing M5 and Remove if present
    m5_title_marker = 'title: "5. ML Foundations for LLM Understanding (Only Essentials)"'
    m5_idx = content.find(m5_title_marker)
    
    if m5_idx != -1:
        print("🔄 Removing existing Module 5 before injection...")
        m5_brace_start = content.rfind('{', 0, m5_idx)
        # Scan for end
        open_b = 0
        m5_end = -1
        for i in range(m5_brace_start, len(content)):
             char = content[i]
             if char == '{': open_b += 1
             elif char == '}': 
                 open_b -= 1
                 if open_b == 0:
                     m5_end = i + 1
                     break
        
        if m5_end != -1:
            content = content[:m5_brace_start] + content[m5_end:]
            print("✅ Removed existing M5 block.")
            
            # Recalculate M4 position since content changed
            m4_start = content.find(m4_title)
            m4_brace_start = content.rfind('{', 0, m4_start)
            open_braces = 0
            m4_end_idx = -1
            for i in range(m4_brace_start, len(content)):
                char = content[i]
                if char == '{': open_braces += 1
                elif char == '}': 
                    open_braces -= 1
                    if open_braces == 0:
                        m4_end_idx = i + 1
                        break

    # 4. Inject
    final_content = content[:m4_end_idx] + new_module_5_content + content[m4_end_idx:]
    
    # 5. Clean up potential double commas "},, {"
    final_content = final_content.replace('},,', '},')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("✅ Module 5 (ML Foundations) injected successfully!")

if __name__ == "__main__":
    update_genai_m5()
