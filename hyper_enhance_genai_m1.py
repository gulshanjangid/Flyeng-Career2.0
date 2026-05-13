
import re

# ------------------------------------------------------------------
# HYPER-DETAILED CONTENT DEFINITIONS (Module 1 - 3x Depth)
# ------------------------------------------------------------------

# Lesson 1.1: What is GenAI? (Theory: Manifold Hypothesis)
content_1_1 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Section 1: The Paradigm Shift -->
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-black p-10 border border-white/10 shadow-2xl">
    <div class="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
    <div class="relative z-10">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-6">
        <span>REL 5.0 // DECEMBER 2026</span>
      </div>
      <h1 class="text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
        Generative AI: <br>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">The Universal Reasoner</span>
      </h1>
      <p class="text-xl text-slate-300 leading-relaxed max-w-3xl">
        We are witnessing the compression of human knowledge into a <span class="text-white font-semibold">computable substrate</span>. It is not just "autocomplete". It is the emergence of a reasoning engine built on top of the statistical structure of reality.
      </p>
    </div>
  </div>

  <!-- Section 2: The Manifold Hypothesis (Deep Theory) -->
  <div class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="h-px bg-slate-800 flex-1"></div>
      <span class="text-slate-500 font-mono text-xs tracking-widest uppercase">Theoretical Foundation</span>
      <div class="h-px bg-slate-800 flex-1"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="prose prose-invert">
        <h3 class="text-2xl font-bold text-white">The Manifold Hypothesis</h3>
        <p class="text-slate-400">
          Why does Generative AI work? Why can we linearly interpolate between "King" and "Queen" in vector space?
        </p>
        <p class="text-slate-400">
          Real-world data (images, text) lies on a low-dimensional <strong>manifold</strong> embedded within a high-dimensional space. Random noise is high-dimensional. Meaningful data is rare and structured.
        </p>
        <div class="bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r mt-4">
          <strong class="text-indigo-300">The Insight:</strong> GenAI models learn the <em>topology</em> of this manifold. They learn to navigate the surface of "meaning" rather than the volume of "noise".
        </div>
      </div>
      
      <!-- Visualization of Manifold -->
      <div class="bg-[#0a0a0a] rounded-xl border border-slate-800 p-6 flex items-center justify-center relative overflow-hidden group">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0a0a0a] to-[#0a0a0a]"></div>
        <div class="relative z-10 text-center space-y-4">
            <div class="grid grid-cols-5 gap-2 opacity-50 blur-[1px] group-hover:blur-0 transition duration-700">
                <!-- Abstract points representing the manifold -->
                <div class="w-2 h-2 rounded-full bg-slate-700"></div><div class="w-2 h-2 rounded-full bg-slate-700"></div><div class="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div><div class="w-2 h-2 rounded-full bg-slate-700"></div><div class="w-2 h-2 rounded-full bg-slate-700"></div>
                <div class="w-2 h-2 rounded-full bg-slate-700"></div><div class="w-2 h-2 rounded-full bg-blue-400"></div><div class="w-2 h-2 rounded-full bg-blue-600"></div><div class="w-2 h-2 rounded-full bg-blue-400"></div><div class="w-2 h-2 rounded-full bg-slate-700"></div>
                <div class="w-2 h-2 rounded-full bg-slate-700"></div><div class="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div><div class="w-2 h-2 rounded-full bg-blue-600"></div><div class="w-2 h-2 rounded-full bg-blue-500"></div><div class="w-2 h-2 rounded-full bg-slate-700"></div>
            </div>
            <p class="text-xs font-mono text-blue-400 mt-4">Latent Space Traversal</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Section 3: Generative vs Discriminative (Hyper-Detailed) -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    <div class="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-red-500/30 transition-all duration-500">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-xl font-bold text-white">Discriminative AI</h3>
        <span class="px-3 py-1 rounded-full bg-red-900/30 text-red-400 text-xs font-bold border border-red-500/20">The Judge</span>
      </div>
      <div class="space-y-4 font-mono text-sm text-slate-400">
        <div class="flex justify-between border-b border-slate-800 pb-2">
            <span>Goal</span>
            <span class="text-slate-200">Draw a boundary</span>
        </div>
        <div class="flex justify-between border-b border-slate-800 pb-2">
            <span>Math</span>
            <span class="text-slate-200">P(Y | X)</span>
        </div>
        <p class="pt-2 text-slate-500 italic">"Given this image (X), what is the probability it is a Cat (Y)?"</p>
      </div>
    </div>

    <div class="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all duration-500">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-xl font-bold text-white">Generative AI</h3>
        <span class="px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs font-bold border border-emerald-500/20">The Artist</span>
      </div>
      <div class="space-y-4 font-mono text-sm text-slate-400">
        <div class="flex justify-between border-b border-slate-800 pb-2">
            <span>Goal</span>
            <span class="text-slate-200">Model the dataset</span>
        </div>
        <div class="flex justify-between border-b border-slate-800 pb-2">
            <span>Math</span>
            <span class="text-slate-200">P(X) or P(X, Y)</span>
        </div>
        <p class="pt-2 text-slate-500 italic">"Generate a new image (X) that looks like it belongs to the set of all Cats."</p>
      </div>
    </div>
  </div>
</div>
"""

# Lesson 1.2: Software 1.0 vs 2.0 (Andrej Karpathy's Thesis)
content_1_2 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <div class="text-center max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold text-white mb-4">Gradient Descent is the New Compiler</h2>
    <p class="text-slate-400">
        In 2017, Andrej Karpathy (Director of AI at Tesla/OpenAI) proposed that we are witnessing a fundamental shift in how we instruct computers.
    </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    <!-- Software 1.0 Column -->
    <div class="space-y-6">
      <div class="bg-slate-900 border border-slate-700 rounded-2xl p-6 relative">
        <div class="absolute -top-3 left-6 bg-slate-800 px-3 py-1 rounded text-xs font-bold text-blue-400 uppercase tracking-wider">Software 1.0</div>
        <h3 class="text-xl font-bold text-white mt-2 mb-4">Explicit Logic</h3>
        
        <div class="space-y-4">
            <div class="font-mono text-xs bg-black/50 p-4 rounded-lg text-green-300 overflow-x-auto">
<span class="text-purple-400">def</span> <span class="text-blue-400">detect_spam</span>(email):<br>
&nbsp;&nbsp;<span class="text-purple-400">if</span> <span class="text-orange-300">"viagra"</span> <span class="text-purple-400">in</span> email: <span class="text-purple-400">return</span> <span class="text-blue-300">True</span><br>
&nbsp;&nbsp;<span class="text-purple-400">if</span> <span class="text-orange-300">"winner"</span> <span class="text-purple-400">in</span> email: <span class="text-purple-400">return</span> <span class="text-blue-300">True</span><br>
&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-blue-300">False</span>
            </div>
            
            <ul class="space-y-2 text-sm text-slate-400">
                <li class="flex gap-2"><span class="text-green-500">✓</span> Highly Interpretible</li>
                <li class="flex gap-2"><span class="text-green-500">✓</span> 100% Deterministic</li>
                <li class="flex gap-2"><span class="text-red-500">✗</span> Brittle (fails on typos)</li>
                <li class="flex gap-2"><span class="text-red-500">✗</span> Cannot handle perception (pixels)</li>
            </ul>
        </div>
      </div>
    </div>

    <!-- Software 2.0 Column -->
    <div class="space-y-6">
      <div class="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-2xl p-6 relative">
        <div class="absolute -top-3 left-6 bg-indigo-900 px-3 py-1 rounded text-xs font-bold text-indigo-300 uppercase tracking-wider shadow-[0_0_15px_rgba(99,102,241,0.4)]">Software 2.0</div>
        <h3 class="text-xl font-bold text-white mt-2 mb-4">Learned Weights</h3>
        
        <div class="space-y-4">
            <div class="font-mono text-xs bg-black/50 p-4 rounded-lg text-indigo-300 overflow-x-auto">
# The Program is the DATASET<br>
dataset = [(<span class="text-orange-300">"Buy now!"</span>, <span class="text-blue-300">SPAM</span>), ...]<br>
model = Transformer()<br>
optimizer.minimize(loss, dataset)
            </div>
            
            <ul class="space-y-2 text-sm text-slate-400">
                <li class="flex gap-2"><span class="text-green-500">✓</span> Handles Infinite Complexity</li>
                <li class="flex gap-2"><span class="text-green-500">✓</span> Generalizes to unseen data</li>
                <li class="flex gap-2"><span class="text-red-500">✗</span> Opaque (Black Box)</li>
                <li class="flex gap-2"><span class="text-red-500">✗</span> Statistical (99.9% != 100%)</li>
            </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 p-6 bg-slate-800/50 rounded-xl border-l-4 border-yellow-500">
    <h4 class="text-lg font-bold text-white mb-2">The AI Engineer's Job</h4>
    <p class="text-slate-300 text-sm">
        In Software 2.0, you don't write the code. You <strong>curate the dataset</strong> and <strong>design the evaluation metric</strong>. The "compiler" (Gradient Descent) writes the actual logic (the weights).
    </p>
  </div>
</div>
"""

# Lesson 1.3: Scaling Laws & Compute (2026 Update)
content_1_3 = """
<div class="space-y-10 font-sans text-slate-200">
  
  <!-- Hero Stat -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="bg-[#111] p-4 rounded-xl border border-gray-800 text-center">
        <div class="text-3xl font-bold text-white mb-1">100T+</div>
        <div class="text-xs text-gray-500 uppercase tracking-widest">Parameters</div>
    </div>
    <div class="bg-[#111] p-4 rounded-xl border border-gray-800 text-center">
        <div class="text-3xl font-bold text-white mb-1">10^26</div>
        <div class="text-xs text-gray-500 uppercase tracking-widest">FLOPs</div>
    </div>
    <div class="bg-[#111] p-4 rounded-xl border border-gray-800 text-center">
        <div class="text-3xl font-bold text-white mb-1">$1B+</div>
        <div class="text-xs text-gray-500 uppercase tracking-widest">Training Cost</div>
    </div>
    <div class="bg-[#111] p-4 rounded-xl border border-gray-800 text-center">
        <div class="text-3xl font-bold text-white mb-1">100MW</div>
        <div class="text-xs text-gray-500 uppercase tracking-widest">Power Draw</div>
    </div>
  </div>

  <!-- The Chinchilla Scaling Laws -->
  <div class="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700">
    <h2 class="text-2xl font-bold text-white mb-4">The Chinchilla Scaling Laws (2022)</h2>
    <p class="text-slate-400 mb-6">
        DeepMind discovered a golden ratio: For every doubling of model size, you must double the training data. Most models before 2022 were <em>undertrained</em>.
    </p>
    
    <div class="relative h-48 w-full bg-black/30 rounded-lg border border-slate-600 flex items-end p-4 gap-2">
        <!-- Visual Bars -->
        <div class="w-1/4 h-[30%] bg-blue-900/50 rounded-t flex flex-col justify-end items-center"><span class="text-xs text-blue-300 pb-1">GPT-3</span></div>
        <div class="w-1/4 h-[60%] bg-blue-700/50 rounded-t flex flex-col justify-end items-center"><span class="text-xs text-blue-200 pb-1">Gopher</span></div>
        <div class="w-1/4 h-[40%] bg-emerald-500/50 rounded-t border-t-2 border-emerald-400 flex flex-col justify-end items-center relative"><span class="text-xs text-emerald-100 pb-1">Chinchilla</span><div class="absolute -top-8 text-[10px] text-emerald-400 bg-emerald-900/80 px-2 py-1 rounded">Optimal</div></div>
        <div class="w-1/4 h-[90%] bg-purple-600/50 rounded-t flex flex-col justify-end items-center"><span class="text-xs text-purple-200 pb-1">GPT-4</span></div>
    </div>
    <p class="text-center text-xs text-slate-500 mt-2">Computing Efficiency over Time</p>
  </div>

  <!-- The 2026 Reality -->
  <div class="space-y-4">
    <h3 class="text-xl font-bold text-white">2026: The Post-Training Era</h3>
    <ul class="space-y-3">
        <li class="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg">
            <span class="text-2xl">⚡</span>
            <div>
                <strong class="text-white block">Inference Compute > Training Compute</strong>
                <p class="text-sm text-slate-400">With models like o1 (Strawberry), we spend more compute effectively "thinking" (Chain of Thought) at runtime than we did training distinct parts of smaller models.</p>
            </div>
        </li>
        <li class="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg">
            <span class="text-2xl">📉</span>
            <div>
                <strong class="text-white block">The Data Wall</strong>
                <p class="text-sm text-slate-400">We have consumed the entire public internet. Current frontier models are training on synthetic data generated by other models (AlphaGo style self-play).</p>
            </div>
        </li>
    </ul>
  </div>
</div>
"""

# Lesson 1.4: Foundation Models & Fine-Tuning (Physics of Pre-training)
content_1_4 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <!-- Physics of Next Token -->
  <div class="bg-black/40 p-8 rounded-3xl border border-white/10 text-center">
    <h2 class="text-3xl font-bold text-white mb-6">The "Next Token" Physics</h2>
    <p class="text-slate-400 max-w-2xl mx-auto mb-8">
        Pre-training is not just memorization. By learning to predict the next token on the entire internet, the model is forced to <strong>compress logic, physics, and psychology</strong> into its weights.
    </p>

    <!-- Visual: The Probability Cloud -->
    <div class="inline-block relative">
        <div class="text-2xl font-mono text-slate-300 bg-slate-900 px-6 py-4 rounded-lg border border-slate-700">
            "The capital of France is <span class="text-emerald-400 animate-pulse">______</span>"
        </div>
        
        <!-- Probabilities -->
        <div class="absolute top-16 left-0 right-0 flex justify-center gap-2 mt-4">
            <div class="flex flex-col items-center">
                <div class="h-16 w-12 bg-emerald-500/20 rounded-t border border-emerald-500 relative group">
                    <span class="absolute bottom-1 w-full text-center text-xs text-emerald-300">98%</span>
                </div>
                <span class="text-xs text-emerald-500 font-bold mt-1">Paris</span>
            </div>
            <div class="flex flex-col items-center">
                <div class="h-4 w-12 bg-slate-700/50 rounded-t border border-slate-600 relative"></div>
                <span class="text-xs text-slate-500 mt-1">Lyon</span>
            </div>
            <div class="flex flex-col items-center">
                <div class="h-1 w-12 bg-slate-700/50 rounded-t border border-slate-600 relative"></div>
                <span class="text-xs text-slate-500 mt-1">Nice</span>
            </div>
        </div>
    </div>
  </div>

  <!-- Cycle of Life -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="p-6 bg-indigo-900/20 rounded-xl border-t-4 border-indigo-500">
        <div class="text-4xl mb-4">1. Pre-Training</div>
        <p class="text-sm text-slate-300">Unsupervised. Massive data. Learns "English" and "Logic".</p>
        <p class="text-xs text-indigo-400 mt-2 font-mono">Cost: $100M+</p>
        <p class="text-xs text-indigo-400 font-mono">Result: Base Model</p>
    </div>
    <div class="p-6 bg-purple-900/20 rounded-xl border-t-4 border-purple-500">
        <div class="text-4xl mb-4">2. SFT</div>
        <p class="text-sm text-slate-300">Supervised Fine-Tuning. Learns "Chat format" and "Instruction following".</p>
        <p class="text-xs text-purple-400 mt-2 font-mono">Cost: $100k - $1M</p>
        <p class="text-xs text-purple-400 font-mono">Result: Instruct Model</p>
    </div>
    <div class="p-6 bg-pink-900/20 rounded-xl border-t-4 border-pink-500">
        <div class="text-4xl mb-4">3. RLHF / Preference</div>
        <p class="text-sm text-slate-300">Alignment. Learns "Values" and "Safety".</p>
        <p class="text-xs text-pink-400 mt-2 font-mono">Cost: Variable</p>
        <p class="text-xs text-pink-400 font-mono">Result: Chat Model (ChatGPT)</p>
    </div>
  </div>

</div>
"""

# Lesson 1.5: Multimodal Landscape 2026
content_1_5 = """
<div class="space-y-10 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">Omnimodal Intelligence</h2>
  <p class="text-xl text-slate-400 mb-8">
    2024 was the year of "Reading" images. 2026 is the year of <strong>Streaming</strong> reality. Models like Gemini 2.5 and GPT-4o don't just "see" frames; they understand <em>temporal physics</em>.
  </p>

  <!-- The Modality Matrix -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    <!-- Video -->
    <div class="group relative overflow-hidden rounded-2xl bg-[#080808] border border-gray-800 hover:border-red-500/50 transition-colors p-6">
        <div class="absolute top-0 right-0 p-4 opacity-50"><span class="text-4xl">🎬</span></div>
        <h3 class="text-xl font-bold text-white mb-2">Video Generation</h3>
        <p class="text-sm text-gray-400 mb-4">Sora, Veo, Kling. These are not just animating pixels; they are <strong>World Simulators</strong>.</p>
        <div class="flex gap-2 text-xs font-mono">
            <span class="bg-red-900/30 text-red-400 px-2 py-1 rounded">3D Consistency</span>
            <span class="bg-red-900/30 text-red-400 px-2 py-1 rounded">Physics</span>
        </div>
    </div>

    <!-- Audio -->
    <div class="group relative overflow-hidden rounded-2xl bg-[#080808] border border-gray-800 hover:border-blue-500/50 transition-colors p-6">
        <div class="absolute top-0 right-0 p-4 opacity-50"><span class="text-4xl">🔊</span></div>
        <h3 class="text-xl font-bold text-white mb-2">Native Audio</h3>
        <p class="text-sm text-gray-400 mb-4">Gemini Live, GPT-4o Voice. Latency &lt; 300ms. The model hears <em>tone</em>, <em>interruption</em>, and <em>emotion</em> directly, without transcribing to text first.</p>
        <div class="flex gap-2 text-xs font-mono">
            <span class="bg-blue-900/30 text-blue-400 px-2 py-1 rounded">End-to-End</span>
            <span class="bg-blue-900/30 text-blue-400 px-2 py-1 rounded">Prosody</span>
        </div>
    </div>

    <!-- Code -->
    <div class="group relative overflow-hidden rounded-2xl bg-[#080808] border border-gray-800 hover:border-emerald-500/50 transition-colors p-6">
        <div class="absolute top-0 right-0 p-4 opacity-50"><span class="text-4xl">💻</span></div>
        <h3 class="text-xl font-bold text-white mb-2">Agentic Coding</h3>
        <p class="text-sm text-gray-400 mb-4">Cursor, Windsurf, GitHub Copilot Workspace. Models that don't just autocomplete a line, but <strong>navigate the file tree</strong> and edit multiple files.</p>
        <div class="flex gap-2 text-xs font-mono">
            <span class="bg-emerald-900/30 text-emerald-400 px-2 py-1 rounded">FIM (Fill In Middle)</span>
            <span class="bg-emerald-900/30 text-emerald-400 px-2 py-1 rounded">RAG</span>
        </div>
    </div>

    <!-- Robotics -->
    <div class="group relative overflow-hidden rounded-2xl bg-[#080808] border border-gray-800 hover:border-yellow-500/50 transition-colors p-6">
        <div class="absolute top-0 right-0 p-4 opacity-50"><span class="text-4xl">🤖</span></div>
        <h3 class="text-xl font-bold text-white mb-2">Embodied AI</h3>
        <p class="text-sm text-gray-400 mb-4">Tesla Optimus, Figure. VLA (Vision-Language-Action) models. Translating "Pick up the apple" into joint torque torques.</p>
        <div class="flex gap-2 text-xs font-mono">
            <span class="bg-yellow-900/30 text-yellow-400 px-2 py-1 rounded">Sim-to-Real</span>
        </div>
    </div>

  </div>
</div>
"""

# Lesson 1.6: LLM Anatomy (Attention Mechanism) - Hyper Visual
content_1_6 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <div class="text-center">
    <h2 class="text-3xl font-bold text-white mb-2">Attention Is All You Need</h2>
    <p class="text-slate-400">The mechanism that changed the world (2017).</p>
  </div>

  <!-- The "Mechanical Watch" Anatomy of Attention -->
  <div class="relative bg-slate-900 rounded-3xl p-8 border border-indigo-500/30 overflow-hidden">
    
    <!-- Visualization Container -->
    <div class="flex flex-col gap-6 items-center">
        
        <!-- Input Sequence -->
        <div class="flex gap-2">
            <div class="px-4 py-2 bg-slate-800 rounded border border-slate-600 text-sm">The</div>
            <div class="px-4 py-2 bg-slate-800 rounded border border-slate-600 text-sm">cat</div>
            <div class="px-4 py-2 bg-slate-800 rounded border border-slate-600 text-sm">sat</div>
        </div>

        <div class="text-slate-500 text-xl">↓</div>

        <!-- Q, K, V Split -->
        <div class="grid grid-cols-3 gap-8 w-full max-w-lg">
            
            <!-- Query -->
            <div class="flex flex-col items-center gap-2">
                <div class="w-12 h-12 bg-orange-500/20 border-2 border-orange-500 rounded-full flex items-center justify-center font-bold text-orange-400">Q</div>
                <span class="text-xs text-orange-300 font-bold">Query</span>
                <p class="text-[10px] text-center text-slate-400 leading-tight">"What am I looking for?"</p>
            </div>

            <!-- Key -->
            <div class="flex flex-col items-center gap-2">
                <div class="w-12 h-12 bg-blue-500/20 border-2 border-blue-500 rounded-full flex items-center justify-center font-bold text-blue-400">K</div>
                <span class="text-xs text-blue-300 font-bold">Key</span>
                <p class="text-[10px] text-center text-slate-400 leading-tight">"What do I contain?"</p>
            </div>

            <!-- Value -->
            <div class="flex flex-col items-center gap-2">
                <div class="w-12 h-12 bg-purple-500/20 border-2 border-purple-500 rounded-full flex items-center justify-center font-bold text-purple-400">V</div>
                <span class="text-xs text-purple-300 font-bold">Value</span>
                <p class="text-[10px] text-center text-slate-400 leading-tight">"My actual content"</p>
            </div>

        </div>

        <div class="text-slate-500 text-xl">↓</div>

        <!-- Attention Score Calculation -->
        <div class="bg-[#0f172a] p-4 rounded-xl border border-dashed border-slate-600 font-mono text-sm text-center">
            <span class="text-orange-400">softmax</span>( (<span class="text-orange-400">Q</span> · <span class="text-blue-400">K</span>ᵀ) / √d ) · <span class="text-purple-400">V</span>
        </div>
        
        <p class="text-xs text-slate-400 max-w-md text-center">
            Every token attends to every OTHER token to calculate its context. "Bank" checks "River" to know it's not a financial bank.
        </p>

    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="p-6 bg-slate-800/50 rounded-xl">
        <h3 class="font-bold text-white mb-2">Context Window</h3>
        <p class="text-sm text-slate-400">The "Short Term Memory". In 2023, it was 8k tokens. In 2026, Gemini 1.5 hit <strong>2 Million tokens</strong>. We can now fit entire codebases in RAM.</p>
    </div>
    <div class="p-6 bg-slate-800/50 rounded-xl">
        <h3 class="font-bold text-white mb-2">KV Cache</h3>
        <p class="text-sm text-slate-400">The trick to speed. We cache the Keys and Values of past tokens so we don't re-compute them for every word generated.</p>
    </div>
  </div>

</div>
"""

# Lesson 1.7: Economics (Intelligence Decay)
content_1_7 = """
<div class="space-y-10 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white">The Price of Intelligence</h2>
  
  <div class="bg-gradient-to-br from-slate-900 to-black p-8 rounded-2xl border border-slate-700 relative">
    <h3 class="text-sm text-gray-500 uppercase tracking-widest mb-6">Cost per 1M Tokens (Log Scale)</h3>
    
    <!-- Chart Visualization (CSS Grid) -->
    <div class="grid grid-cols-[auto_1fr] gap-4 h-64 items-end">
        <!-- Y Axis -->
        <div class="flex flex-col justify-between h-full text-xs text-gray-500 text-right pr-2">
            <span>$100</span>
            <span>$10</span>
            <span>$1</span>
            <span>$0.10</span>
            <span>$0.01</span>
        </div>
        
        <!-- Plot Area -->
        <div class="flex items-end h-full gap-4 w-full relative border-l border-b border-gray-700">
             <!-- GPT-3 (2020) -->
             <div class="w-1/5 h-[90%] bg-slate-600 rounded-t relative group">
                <div class="absolute -top-6 w-full text-center text-xs text-gray-400">GPT-3</div>
             </div>
             <!-- GPT-4 (2023) -->
             <div class="w-1/5 h-[60%] bg-blue-600 rounded-t relative group">
                <div class="absolute -top-6 w-full text-center text-xs text-blue-400">GPT-4</div>
             </div>
             <!-- GPT-4o (2024) -->
             <div class="w-1/5 h-[30%] bg-blue-500 rounded-t relative group">
                <div class="absolute -top-6 w-full text-center text-xs text-blue-400">GPT-4o</div>
             </div>
             <!-- GPT-4o-mini (2024 Late) -->
             <div class="w-1/5 h-[10%] bg-emerald-500 rounded-t relative group">
                <div class="absolute -top-8 w-full text-center text-[10px] text-emerald-400">Mini<br>(Intelligence Too Cheap to Meter)</div>
             </div>
        </div>
    </div>
  </div>

  <div class="p-6 border-l-4 border-yellow-500 bg-yellow-900/10">
    <strong class="text-yellow-400 block mb-2">Jevons Paradox</strong>
    <p class="text-sm text-slate-300">
        As intelligence becomes cheaper, we won't use <em>less</em> capacity. We will utilize it in places previously thought impossible (e.g., an LLM reading every single log line in a server).
    </p>
  </div>
</div>
"""

# Lesson 1.8: Safety & Alignment (Refusal > RLHF > RLAIF)
content_1_8 = """
<div class="space-y-10 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">The Alignment Problem</h2>

  <div class="flex flex-col gap-4">
    <!-- Step 1 -->
    <div class="flex gap-4 p-4 bg-slate-900 rounded-xl border border-slate-700 opacity-60">
        <div class="text-2xl">🤖</div>
        <div>
            <h4 class="font-bold text-slate-400">1. Base Model (Shoggoth)</h4>
            <p class="text-sm text-slate-500">Predicts next token. Can be toxic, racist, or nonsensical. Training: "Read the internet".</p>
        </div>
    </div>

    <!-- Step 2 -->
    <div class="flex gap-4 p-4 bg-slate-900 rounded-xl border border-slate-700 opacity-80">
        <div class="text-2xl">👨‍🏫</div>
        <div>
            <h4 class="font-bold text-slate-300">2. SFT (Instruction Tuning)</h4>
            <p class="text-sm text-slate-400">Humans write Q&A pairs. "Act like a helpful assistant". Training: "Imitate this format".</p>
        </div>
    </div>

    <!-- Step 3 -->
    <div class="flex gap-4 p-4 bg-indigo-900/20 rounded-xl border border-indigo-500">
        <div class="text-2xl">👍</div>
        <div>
            <h4 class="font-bold text-indigo-300">3. RLHF (Human Feedback)</h4>
            <p class="text-sm text-slate-300">Humans rank outputs (A is better than B). Train a Reward Model to predict human preference using PPO.</p>
        </div>
    </div>

    <!-- Step 4 -->
    <div class="flex gap-4 p-4 bg-emerald-900/20 rounded-xl border border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
        <div class="text-2xl">🤖⚖️</div>
        <div>
            <h4 class="font-bold text-emerald-300">4. RLAIF / Constitutional AI (2026 Standard)</h4>
            <p class="text-sm text-slate-300">AI Feedback. We give the AI a "Constitution" (e.g., "Do not be harmful"). The AI generates its own critiques and fine-tunes itself. Scalable alignment.</p>
        </div>
    </div>
  </div>

  <div class="bg-red-900/20 p-6 rounded-xl border border-red-500/30">
    <h3 class="text-red-400 font-bold mb-2">Jailbreaking</h3>
    <p class="text-sm text-gray-400 mb-2">Alignment is not a solve; it's a patch. Techniques like "DAN" (Do Anything Now) or Base64 encoding can still bypass safety filters.</p>
  </div>
</div>
"""

# Lesson 1.9 & 1.10: Keep original "Roles" and "Curriculum" but slightly polished for consistency
content_1_9 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-3xl font-bold text-white mb-6">The AI Engineer Roles (2026)</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-slate-800 p-6 rounded-2xl border-t-4 border-blue-500 shadow-xl hover:-translate-y-1 transition">
      <h3 class="text-xl font-bold text-white mb-2">The Architect</h3>
      <p class="text-xs font-mono text-blue-400 mb-4 tracking-widest">INFRA & OPS</p>
      <p class="text-sm text-slate-400 mb-4">You manage the metal. GPU clusters, Kubernetes, Vector DBs, Latency optimization (vLLM, TRT-LLM).</p>
      <div class="text-xs text-slate-500 bg-black/30 p-2 rounded">Stack: Python, Docker, Torch, CUDA</div>
    </div>
    <div class="bg-slate-800 p-6 rounded-2xl border-t-4 border-emerald-500 shadow-xl hover:-translate-y-1 transition">
      <h3 class="text-xl font-bold text-white mb-2">The Product Eng</h3>
      <p class="text-xs font-mono text-emerald-400 mb-4 tracking-widest">UX & APP</p>
      <p class="text-sm text-slate-400 mb-4">You build the magic. Prompt engineering, Streaming UIs, Voice Agents, Vercel AI SDK.</p>
      <div class="text-xs text-slate-500 bg-black/30 p-2 rounded">Stack: TS, Next.js, React, Tailwind</div>
    </div>
    <div class="bg-slate-800 p-6 rounded-2xl border-t-4 border-purple-500 shadow-xl hover:-translate-y-1 transition">
      <h3 class="text-xl font-bold text-white mb-2">The Alchemist</h3>
      <p class="text-xs font-mono text-purple-400 mb-4 tracking-widest">EVALS & DATA</p>
      <p class="text-sm text-slate-400 mb-4">You keep it honest. Designing datasets, Evals (Ragas), Fine-tuning (LoRA), Data Flywheels.</p>
      <div class="text-xs text-slate-500 bg-black/30 p-2 rounded">Stack: Python, Pandas, LangSmith</div>
    </div>
  </div>
</div>
"""

content_1_10 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-3xl font-bold text-white mb-6">Your Journey Ahead</h2>
  
  <div class="relative pl-8 border-l-2 border-indigo-500/30 space-y-12">
    
    <!-- Mod 1 -->
    <div class="relative">
        <div class="absolute -left-[39px] top-1 w-5 h-5 bg-indigo-500 rounded-full border-4 border-black shadow-[0_0_15px_#6366f1]"></div>
        <h3 class="text-xl font-bold text-white">Module 1: The Foundation</h3>
        <p class="text-sm text-indigo-300 mb-2">You are here.</p>
        <p class="text-sm text-gray-400">Understanding Physics of LLMs, History, and Roles.</p>
    </div>

    <!-- Mod 2-3 -->
    <div class="relative opacity-80">
        <div class="absolute -left-[39px] top-1 w-5 h-5 bg-slate-800 rounded-full border-4 border-black"></div>
        <h3 class="text-xl font-bold text-slate-200">Modules 2-3: The Tools</h3>
        <p class="text-sm text-gray-400">Prompt Engineering (VIBE), Core Python, Modern Setup (uv).</p>
    </div>

     <!-- Mod 4-10 -->
    <div class="relative opacity-60">
        <div class="absolute -left-[39px] top-1 w-5 h-5 bg-slate-800 rounded-full border-4 border-black"></div>
        <h3 class="text-xl font-bold text-slate-300">Modules 4-10: The Architecture</h3>
        <p class="text-sm text-gray-500">RAG, Vector DBs, Agents, Tool Calling, Evaluation.</p>
    </div>

     <!-- Mod 16 -->
    <div class="relative opacity-40">
        <div class="absolute -left-[39px] top-1 w-5 h-5 bg-slate-800 rounded-full border-4 border-black"></div>
        <h3 class="text-xl font-bold text-slate-400">Module 16: The Future</h3>
        <p class="text-sm text-gray-600">Careers, AGI, Ethics.</p>
    </div>

  </div>
</div>
"""


lessons_map = {
    "genai-1-1": content_1_1,
    "genai-1-2": content_1_2,
    "genai-1-3": content_1_3,
    "genai-1-4": content_1_4,
    "genai-1-5": content_1_5,
    "genai-1-6": content_1_6,
    "genai-1-7": content_1_7,
    "genai-1-8": content_1_8,
    "genai-1-9": content_1_9,
    "genai-1-10": content_1_10
}

file_path = 'lib/course-data.ts'

print(f"Reading {file_path}...")
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Helper to find lesson block by ID and replace its content
def replace_lesson_content(file_content, lesson_id, new_html):
    pattern = r'(id:\s*["\']' + re.escape(lesson_id) + r'["\'][\s\S]*?content:\s*`)([\s\S]*?)(`)'
    match = re.search(pattern, file_content)
    if not match:
        print(f"Warning: Could not find lesson {lesson_id}")
        return file_content

    # Group 1: header up to backtick
    # Group 2: old content
    # Group 3: closing backtick
    
    print(f"Hyper-Enhancing content for {lesson_id}...")
    safe_new_html = new_html.replace('`', '\\`')
    
    start_idx = match.start(2)
    end_idx = match.end(2)
    
    return file_content[:start_idx] + safe_new_html + file_content[end_idx:]

current_content = content

for lid, html in lessons_map.items():
    current_content = replace_lesson_content(current_content, lid, html)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(current_content)

print("Success! Module 1 Hyper-Enhanced (3x Depth).")
