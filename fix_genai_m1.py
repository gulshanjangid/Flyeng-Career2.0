
import re

# ------------------------------------------------------------------
# UNIQUE CONTENT DEFINITIONS (Module 1 Fix)
# ------------------------------------------------------------------

# Lesson 1.1: What is GenAI? (Keep the Comparison & Timeline here, it fits)
content_1_1 = """
<div class="space-y-8 font-sans text-slate-200">
  <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-slate-900/50 p-8 border border-white/10 shadow-2xl">
    <h1 class="text-4xl font-extrabold tracking-tight text-white mb-4">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">Generative AI:</span> 
      The Creative Machine
    </h1>
    <p class="text-lg text-slate-300 leading-relaxed max-w-3xl">
      We are standing at a <span class="text-white font-semibold">civilizational inflection point</span>. For 70 years, computers were strictly logical processors. Today, they have gained <span class="italic text-indigo-300">imagination</span>.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-xl bg-slate-800/50 p-6 border border-slate-700/50">
      <h3 class="text-xl font-bold text-white mb-2">Traditional AI</h3>
      <p class="text-slate-400 text-sm mb-4">"Discriminative Models" (Classifiers)</p>
      <div class="flex items-center gap-2 text-sm text-slate-300">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
        <span>Input: Image → Output: "Cat"</span>
      </div>
    </div>
    <div class="rounded-xl bg-slate-800/50 p-6 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
      <h3 class="text-xl font-bold text-white mb-2">Generative AI</h3>
      <p class="text-emerald-400/80 text-sm mb-4">"Probabilistic Generators"</p>
      <div class="flex items-center gap-2 text-sm text-slate-300">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span>Input: "Cat" → Output: New Image</span>
      </div>
    </div>
  </div>
</div>
"""

# Lesson 1.2: Software 1.0 vs 2.0 (Focus on Karpathy's concept ONLY)
content_1_2 = """
<div class="space-y-8 font-sans text-slate-200">
  <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
    <h2 class="text-2xl font-bold text-white mb-4">Software 1.0 vs Software 2.0</h2>
    <p class="text-slate-300 mb-6">Andrej Karpathy's paradigm shift.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-3">
        <h3 class="text-lg font-bold text-blue-400 border-b border-slate-700 pb-2">Software 1.0 (Code)</h3>
        <p class="text-sm text-slate-400">Written by humans (C++, Python).</p>
        <div class="bg-black/50 p-3 rounded font-mono text-xs text-slate-400">if age > 18: status = "Adult"</div>
      </div>
      <div class="space-y-3">
        <h3 class="text-lg font-bold text-purple-400 border-b border-slate-700 pb-2">Software 2.0 (Weights)</h3>
        <p class="text-sm text-slate-400">Written by optimization (Gradient Descent).</p>
        <div class="bg-black/50 p-3 rounded font-mono text-xs text-slate-400">Model.generate("Describe user")</div>
      </div>
    </div>
  </div>
</div>
"""

# Lesson 1.3: The Four Forces (Focus on Compute/Data/Algo/Capital)
content_1_3 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">The Four Scale Factors</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
      <div class="flex items-center justify-between mb-2"><h3 class="font-bold text-white">1. Compute</h3><span>💾</span></div>
      <p class="text-xs text-slate-400">GPUs (H100s) specialized for matrix math.</p>
    </div>
    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
      <div class="flex items-center justify-between mb-2"><h3 class="font-bold text-white">2. Data</h3><span>📊</span></div>
      <p class="text-xs text-slate-400">The entire internet tokenized (14T+ tokens).</p>
    </div>
    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
      <div class="flex items-center justify-between mb-2"><h3 class="font-bold text-white">3. Algorithms</h3><span>📐</span></div>
      <p class="text-xs text-slate-400">Transformers + MoE + RLHF.</p>
    </div>
    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
      <div class="flex items-center justify-between mb-2"><h3 class="font-bold text-white">4. Capital</h3><span>💰</span></div>
      <p class="text-xs text-slate-400">$100B+ clusters fueling the race.</p>
    </div>
  </div>
</div>
"""

# Lesson 1.4: Foundation Models (Base vs Fine-tune)
content_1_4 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">The "Pre-Training" Paradigm</h2>
  <div class="flex flex-col md:flex-row items-center gap-4">
    <div class="flex-1 p-6 bg-blue-900/20 border border-blue-500/30 rounded-xl text-center">
        <div class="text-4xl mb-2">🐳</div>
        <h3 class="font-bold text-white">Foundation Model</h3>
        <p class="text-xs text-slate-400 mt-2">GPT-4, Claude, Llama 3.</p>
        <p class="text-xs text-slate-500">"Jack of all trades"</p>
    </div>
    <div class="text-2xl text-slate-500">→</div>
    <div class="flex-1 p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl text-center">
        <div class="text-4xl mb-2">🎯</div>
        <h3 class="font-bold text-white">Fine-Tuning</h3>
        <p class="text-xs text-slate-400 mt-2">Specialization.</p>
        <p class="text-xs text-slate-500">"Master of one (Code, Medical)"</p>
    </div>
  </div>
</div>
"""

# Lesson 1.5: The Landscape (Modalities)
content_1_5 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Beyond Text</h2>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 bg-[#111] border border-gray-800 rounded-lg">
        <strong class="text-white block">📝 Text</strong>
        <span class="text-xs text-gray-500">LLMs (GPT-4)</span>
    </div>
    <div class="p-4 bg-[#111] border border-gray-800 rounded-lg">
        <strong class="text-white block">🎨 Image</strong>
        <span class="text-xs text-gray-500">Diffusion (Midjourney)</span>
    </div>
    <div class="p-4 bg-[#111] border border-gray-800 rounded-lg">
        <strong class="text-white block">🎬 Video</strong>
        <span class="text-xs text-gray-500">Sora, Runway</span>
    </div>
    <div class="p-4 bg-[#111] border border-gray-800 rounded-lg">
        <strong class="text-white block">🔊 Audio</strong>
        <span class="text-xs text-gray-500">Suno, ElevenLabs</span>
    </div>
  </div>
</div>
"""

# Lesson 1.6: LLMs Under the Hood (Transformer)
content_1_6 = """
<div class="space-y-8 font-sans text-slate-200">
  <div class="p-6 bg-indigo-900/20 rounded-xl border border-indigo-500/30">
    <h2 class="text-2xl font-bold text-white mb-4">The Transformer Arch</h2>
    <div class="flex flex-col items-center space-y-2 py-4">
      <div class="w-full md:w-3/4 p-2 bg-slate-800 rounded border border-slate-600 text-center text-xs font-mono">Input: "The cat..."</div>
      <div class="text-slate-500">↓</div>
      <div class="w-full md:w-3/4 p-2 bg-blue-900/30 rounded border border-blue-500/50 text-center text-blue-300 font-bold text-sm">Self-Attention Mechanism</div>
      <div class="text-slate-500">↓</div>
      <div class="w-full md:w-3/4 p-2 bg-emerald-900/30 rounded border border-emerald-500/50 text-center text-emerald-300 font-bold text-xs">Prob: "sat" (99%)</div>
    </div>
  </div>
</div>
"""

# Lesson 1.7: Economics (Token Cost)
content_1_7 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">The Token Ecomony</h2>
  <div class="bg-gray-900 p-6 rounded-xl border border-gray-700">
    <div class="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
        <span class="text-gray-400">1,000 Tokens</span>
        <span class="text-white font-bold">~750 Words</span>
    </div>
    <div class="space-y-3">
        <div class="flex justify-between">
            <span class="text-yellow-500">GPT-4 Turbo</span>
            <span class="text-white">$10.00 / 1M tokens</span>
        </div>
        <div class="flex justify-between">
            <span class="text-blue-400">Flash Models</span>
            <span class="text-white">$0.10 / 1M tokens</span>
        </div>
    </div>
    <p class="text-xs text-gray-500 mt-4">Intelligence is becoming a commodity, trending towards zero cost.</p>
  </div>
</div>
"""

# Lesson 1.8: Safety (Alignment)
content_1_8 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Alignment & Safety</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
        <h3 class="text-red-400 font-bold mb-2">Misalignment</h3>
        <p class="text-xs text-gray-400">"Paperclip Maximizer". An AI destroying humanity just to efficiently make paperclips.</p>
    </div>
    <div class="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
        <h3 class="text-green-400 font-bold mb-2">RLHF</h3>
        <p class="text-xs text-gray-400">Reinforcement Learning from Human Feedback. Training models to "be nice" and "refuse harm".</p>
    </div>
  </div>
</div>
"""

# Lesson 1.9: Careers (Roles)
content_1_9 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">The AI Engineer Roles</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-slate-800 p-4 rounded-xl border-t-4 border-blue-500">
      <h3 class="font-bold text-white">The Architect</h3>
      <p class="text-xs text-slate-400">Infrastructure, GPU Clusters, Fine-tuning.</p>
    </div>
    <div class="bg-slate-800 p-4 rounded-xl border-t-4 border-emerald-500">
      <h3 class="font-bold text-white">The Product Eng</h3>
      <p class="text-xs text-slate-400">UX, Prompt Engineering, Vercel AI SDK.</p>
    </div>
    <div class="bg-slate-800 p-4 rounded-xl border-t-4 border-purple-500">
      <h3 class="font-bold text-white">The Alchemist</h3>
      <p class="text-xs text-slate-400">Evals, Datasets, Research.</p>
    </div>
  </div>
</div>
"""

# Lesson 1.10: Curriculum (Roadmap)
content_1_10 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Your Journey Ahead</h2>
  <div class="space-y-2">
    <div class="p-3 bg-blue-900/20 border-l-4 border-blue-500 rounded-r text-white text-sm">Module 1: Fundamentals (You are here)</div>
    <div class="p-3 bg-slate-800/50 border-l-4 border-gray-600 rounded-r text-gray-400 text-sm">Module 2: Prompt Engineering & VIBE</div>
    <div class="p-3 bg-slate-800/50 border-l-4 border-gray-600 rounded-r text-gray-400 text-sm">Module 3: Core Python (Async, Pydantic)</div>
    <div class="p-3 bg-slate-800/50 border-l-4 border-gray-600 rounded-r text-gray-400 text-sm">Module 4: RAG & Vector DBs</div>
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

# ------------------------------------------------------------------
# PARSING AND REPLACEMENT LOGIC
# ------------------------------------------------------------------

file_path = 'lib/course-data.ts'

print(f"Reading {file_path}...")
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Helper to find lesson block by ID and replace its content
def replace_lesson_content(file_content, lesson_id, new_html):
    # Regex to find the content: ` field for a specific id
    # We look for id: "lesson_id", then capture everything until content: `...`
    # This is tricky with regex due to newlines. We'll use a precise pattern.
    
    # Pattern explanation:
    # 1. id: "genai-1-1"
    # 2. match any chars until content: `
    # 3. match content inside backticks (non-greedy)
    # 4. match closing backtick
    
    pattern = r'(id:\s*["\']' + re.escape(lesson_id) + r'["\'][\s\S]*?content:\s*`)([\s\S]*?)(`)'
    
    match = re.search(pattern, file_content)
    if not match:
        print(f"Warning: Could not find lesson {lesson_id}")
        return file_content

    # Group 1: header up to backtick
    # Group 2: old content
    # Group 3: closing backtick
    
    print(f"Replacing content for {lesson_id}...")
    
    # Escape backticks in new content just in case
    safe_new_html = new_html.replace('`', '\\`')
    
    # Reassemble: Group 1 + NEW CONTENT + Group 3
    # Note: re.sub only works on the matched string, but we want to replace in full content.
    # We can use the match span.
    
    start_idx = match.start(2)
    end_idx = match.end(2)
    
    return file_content[:start_idx] + safe_new_html + file_content[end_idx:]

current_content = content

for lid, html in lessons_map.items():
    current_content = replace_lesson_content(current_content, lid, html)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(current_content)

print("Success! Module 1 cleaned up.")
