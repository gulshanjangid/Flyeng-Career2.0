
import json

# ==========================================
# MODULE 13: Edge AI & Production
# ==========================================
module_13 = {
    "title": "13. Edge AI, Optimization & JavaScript Integration",
    "lessons": [
        {
            "id": "genai-13-1",
            "title": "13.1 Running LLMs in the Browser (WebLLM / WebGPU)",
            "duration": "25 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <div class="p-8 bg-gradient-to-r from-yellow-900 to-orange-900 rounded-2xl border border-yellow-500/20">
        <h1 class="text-3xl font-bold text-white mb-4">Zero Latency. Zero Cost.</h1>
        <p class="text-lg text-yellow-100">
            Why pay OpenAI for every token? Why wait 500ms for a network roundtrip? With <strong>WebGPU</strong>, you can run Llama-3-8B directly inside Chrome at 30 tokens/second.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div class="p-6 bg-[#111] border border-slate-800 rounded-xl">
            <h3 class="font-bold text-white mb-2">The Architecture</h3>
            <ul class="list-disc list-inside text-sm text-slate-400 space-y-2">
                <li><strong>Model Weights:</strong> Sharded .bin files cached in CacheAPI.</li>
                <li><strong>WASM:</strong> C++ code compiled to WebAssembly for logic.</li>
                <li><strong>WebGPU:</strong> Direct access to the user's RTX 4090 or M3 Metal chip.</li>
            </ul>
        </div>
        <div class="p-6 bg-[#111] border border-slate-800 rounded-xl">
             <h3 class="font-bold text-white mb-2">Code Example</h3>
             <pre class="bg-black p-4 rounded text-xs text-yellow-300 overflow-x-auto">
import { CreateMLCEngine } from "@mlc-ai/web-llm";

const engine = await CreateMLCEngine(
  "Llama-3-8B-Instruct-q4f32_1",
  { initProgressCallback: console.log }
);

const reply = await engine.chat.completions.create({
  messages: [{ role: "user", content: "Hi!" }]
});
</pre>
        </div>
    </div>
</div>
"""
        },
        {
            "id": "genai-13-2",
            "title": "13.2 Speculative Decoding \u0026 Optimization",
            "duration": "30 min",
            "type": "article",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <h2 class="text-2xl font-bold text-white">How to go 2x Faster</h2>
    <p class="text-slate-300">
        LLMs are memory-bound, not compute-bound. Moving weights from VRAM to Compute Units takes longer than the math itself. <strong>Speculative Decoding</strong> uses a "Small Draft Model" to guess tokens, and the "Big Model" just verifies them in parallel.
    </p>

    <div class="flex flex-col gap-4 mt-6">
        <div class="flex items-center gap-4 bg-slate-900 p-4 rounded-lg">
            <div class="w-16 h-16 bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold rounded-lg">Draft</div>
            <div class="flex-1">
                <div class="text-sm text-white font-mono">The cat sat on the...</div>
                <div class="text-xs text-slate-500">Tiny model (125M) guesses: "mat"</div>
            </div>
        </div>
        <div class="flex items-center gap-4 bg-slate-900 p-4 rounded-lg border border-green-500/30">
            <div class="w-16 h-16 bg-green-500/20 flex items-center justify-center text-green-400 font-bold rounded-lg">Verify</div>
            <div class="flex-1">
                <div class="text-sm text-white font-mono">Big Model (70B)</div>
                <div class="text-xs text-slate-500">Checks "mat". Correct? Yes. Accepted. Faster than generating it from scratch.</div>
            </div>
        </div>
    </div>
</div>
"""
        }
    ]
}

# ==========================================
# MODULE 15: Capstones
# ==========================================
module_15 = {
    "title": "15. Capstones & Modern AI Tech Stacks",
    "lessons": [
        {
            "id": "genai-15-1",
            "title": "15.1 Capstone Overview: The Full-Stack AI Engineer",
            "duration": "20 min",
            "type": "article",
            "content": """
<div class="space-y-12 font-sans text-slate-200">
  <h2 class="text-3xl font-bold text-white mb-6">The "T-Shaped" Engineer</h2>
  <div class="flex flex-col items-center gap-8">
      <!-- The T-Shape Visual -->
      <div class="relative w-full max-w-lg h-64">
          <div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 rounded-t-xl flex items-center justify-around border border-white/10 z-10">
              <div class="text-center"><span class="text-lg">🎨</span><p class="text-[10px] text-slate-300">UX/UI</p></div>
              <div class="text-center"><span class="text-lg">☁️</span><p class="text-[10px] text-slate-300">DevOps</p></div>
              <div class="text-center"><span class="text-lg">📈</span><p class="text-[10px] text-slate-300">Product</p></div>
          </div>
          <div class="absolute top-16 left-1/2 -translate-x-1/2 w-32 h-48 bg-emerald-900/50 border-x border-b border-emerald-500/30 flex flex-col items-center justify-start py-4 gap-4 backdrop-blur-sm">
              <div class="text-emerald-400 font-bold text-sm tracking-widest uppercase">Depth</div>
              <div class="w-24 bg-slate-800 p-2 rounded text-center text-xs text-white shadow-lg">Transformers</div>
              <div class="w-24 bg-slate-800 p-2 rounded text-center text-xs text-white shadow-lg">RAG</div>
              <div class="w-24 bg-slate-800 p-2 rounded text-center text-xs text-white shadow-lg">Fine-Tuning</div>
          </div>
      </div>
      <p class="text-slate-400 text-center max-w-xl">
          You must be broadly competent in full-stack web dev, but deeply specialized in AI. The market pays for this vertical slice.
      </p>
  </div>
</div>
"""
        },
        {
            "id": "genai-15-2",
            "title": "15.2 Project Spec: TanStack AI Copilot",
            "duration": "45 min",
            "type": "project",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <div class="bg-[#111] p-8 rounded-xl border border-slate-800">
        <h2 class="text-2xl font-bold text-white mb-4">Spec: The "Enterprise" RAG</h2>
        <p class="text-slate-400 mb-6">
            Build a clone of Perplexity.ai using TanStack Query for state management.
        </p>
        
        <h3 class="font-bold text-white mb-2">Requirements</h3>
        <ul class="list-disc list-inside text-sm text-slate-400 space-y-2">
            <li><strong>Optimistic Updates:</strong> Show the user's message immediately before the server confirms.</li>
            <li><strong>Streaming:</strong> Use `useChat` from Vercel AI SDK with a custom `streamText` backend.</li>
            <li><strong>Citations:</strong> Hovering a citation [1] must highlight the source passage.</li>
        </ul>
        
        <h3 class="font-bold text-white mt-6 mb-2">Tech Stack</h3>
        <div class="flex gap-2">
            <span class="px-2 py-1 bg-red-900/40 text-red-300 rounded text-xs">TanStack Query</span>
            <span class="px-2 py-1 bg-blue-900/40 text-blue-300 rounded text-xs">Postgres (pgvector)</span>
            <span class="px-2 py-1 bg-white/10 text-white rounded text-xs">Next.js 15</span>
        </div>
    </div>
</div>
"""
        },
        {
            "id": "genai-15-3",
            "title": "15.3 Project Spec: LangChain Python Backend",
            "duration": "45 min",
            "type": "project",
            "content": """
<div class="space-y-8 font-sans text-slate-200">
    <div class="bg-[#111] p-8 rounded-xl border border-slate-800">
        <h2 class="text-2xl font-bold text-white mb-4">Spec: The "Lawyer" Agent</h2>
        <p class="text-slate-400 mb-6">
            Build a purely Python backend (FastAPI) that performs complex contract analysis.
        </p>
        
        <h3 class="font-bold text-white mb-2">Requirements</h3>
        <ul class="list-disc list-inside text-sm text-slate-400 space-y-2">
            <li><strong>RouterChain:</strong> Route query to "NDA Analyzer" or "Lease Analyzer" automatically.</li>
            <li><strong>Memory:</strong> Use `ConversationSummaryMemory` backed by Redis.</li>
            <li><strong>Tools:</strong> Implement a custom `DuckDuckGoSearch` tool for case law.</li>
        </ul>
    </div>
</div>
"""
        },
         {
            "id": "genai-15-9",
            "title": "15.9 Final Portfolio Assembly",
            "duration": "20 min",
            "type": "article",
            "content": """
<div class="space-y-8">
    <div class="bg-gradient-to-r from-teal-900/40 to-blue-900/40 border border-teal-500/30 p-10 rounded-3xl text-center">
        <h2 class="text-4xl font-bold text-white mb-6">The "Proof of Work"</h2>
        
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Recruiters spend 6 seconds on your resume. They spend 60 seconds on a working demo.
            <br>
            <strong>Ship the demo.</strong>
        </p>

        <div class="text-left max-w-lg mx-auto bg-black/40 p-6 rounded-xl border border-white/5 space-y-4">
            <h3 class="font-bold text-white">Checklist</h3>
            <div class="flex items-center gap-3">
                <div class="w-4 h-4 rounded-full bg-green-500"></div>
                <div class="text-slate-300 text-sm">Deploy to Vercel/Railway (No localhost)</div>
            </div>
            <div class="flex items-center gap-3">
                <div class="w-4 h-4 rounded-full bg-green-500"></div>
                <div class="text-slate-300 text-sm">Record a 30s Loom video (Voiceover)</div>
            </div>
            <div class="flex items-center gap-3">
                <div class="w-4 h-4 rounded-full bg-green-500"></div>
                <div class="text-slate-300 text-sm">Write a technical README (Architecture Diagram)</div>
            </div>
        </div>
    </div>
</div>
"""
        }
    ]
}

# ==========================================
# MODULE 16: The Future (Grand Finale)
# ==========================================
module_16 = {
    "title": "16. The Future of AI (Grand Finale)",
    "lessons": [
        {
            "id": "genai-16-1",
            "title": "16.1 The Path to AGI: Scaling Laws \u0026 Compute",
            "type": "article",
            "duration": "45 mins",
            "content": """
<div class="space-y-8 text-slate-300 font-light leading-relaxed">
    <!-- Hero Section -->
    <div class="relative overflow-hidden rounded-2xl p-8 bg-black border border-white/10 shadow-2xl">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-cyan-900/40 opacity-50 animate-pulse"></div>
        <div class="relative z-10">
            <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4 tracking-tight">
                The God Equation
            </h1>
            <p class="text-lg text-slate-300 max-w-xl">
                The <strong>Chinchilla Scaling Laws</strong> dictate that intelligence is a function of Compute (C) and Data (D). We are not hitting a wall; we are hitting a vertical cliff of capability.
            </p>
        </div>
    </div>

    <!-- Deep Theory -->
    <div class="prose prose-invert max-w-none">
        <h3>Compute-Optimal Training</h3>
        <p>
            DeepMind discovered that for every doubling of model size, you must double the training tokens. GPT-3 was severely undertrained. Llama-3 was "overtrained" (trained way past the chinchilla optimal point) to be dense and efficient at inference time.
        </p>
        <p>
            <strong>The Implication:</strong> We have run out of internet text. The next frontier is <em>Synthetic Data</em> (AlphaGo-style self-play for reasoning) and <em>Embodiment</em> (video/robotics data).
        </p>
    </div>
</div>
"""
        },
        {
            "id": "genai-16-5",
            "title": "16.5 Your Future: The One-Person Unicorn",
            "type": "project",
            "duration": "60 mins",
            "content": """
<div class="space-y-12 text-slate-300">
    <div class="p-12 rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-black border border-white/10 text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full"></div>
        <h2 class="relative z-10 text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
            The Billion Dollar <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Solo Founder</span>
        </h2>
        <p class="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed relative z-10">
            Sam Altman predicts the first one-person billion-dollar company is coming. It won't be a generic SaaS. It will be an Agentic System where one human orchestrates 10,000 AI workers.
        </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
            <div class="text-2xl mb-2">⚡</div>
            <h3 class="font-bold text-white">Leverage</h3>
            <p class="text-sm text-slate-400">Code is no longer the bottleneck. Distribution and Taste are the bottlenecks.</p>
        </div>
         <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
            <div class="text-2xl mb-2">🤝</div>
            <h3 class="font-bold text-white">Orchestration</h3>
            <p class="text-sm text-slate-400">Your job is not to write the loop; it is to design the loop.</p>
        </div>
         <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
            <div class="text-2xl mb-2">🚀</div>
            <h3 class="font-bold text-white">Build</h3>
            <p class="text-sm text-slate-400">Go build something that matters. Right now.</p>
        </div>
    </div>
</div>
"""
        }
    ]
}
