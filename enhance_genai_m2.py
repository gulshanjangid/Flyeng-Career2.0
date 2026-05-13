
import re
import textwrap

# ------------------------------------------------------------------
# CONTENT DEFINITIONS (Module 2: Thinking Like an AI Engineer)
# ------------------------------------------------------------------

# Lesson 2.1: The VIBE Coding Philosophy
content_2_1 = """
<div class="space-y-8 font-sans text-slate-200">
  <div class="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 p-8 rounded-3xl relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] opacity-5 mix-blend-overlay pointer-events-none"></div>
    <h2 class="text-3xl font-bold text-white mb-4 relative z-10">More Than Just Code</h2>
    <p class="text-xl text-gray-300 leading-relaxed relative z-10">
      <strong>VIBE</strong> is a philosophy for building AI systems. It moves beyond "writing scripts" to designing <span class="text-indigo-400">Intelligent Ecosystems</span>.
    </p>
  </div>

  <div class="grid grid-cols-2 gap-4">
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 text-center hover:border-indigo-500/50 transition duration-300">
      <div class="text-4xl mb-3">👁️</div>
      <strong class="text-white block text-lg">Vision</strong>
      <span class="text-xs text-gray-500">The Purpose</span>
      <p class="text-xs text-gray-400 mt-2">What problem are we solving? Is AI even needed?</p>
    </div>
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 text-center hover:border-purple-500/50 transition duration-300">
      <div class="text-4xl mb-3">🖱️</div>
      <strong class="text-white block text-lg">Interfaces</strong>
      <span class="text-xs text-gray-500">The Interaction</span>
      <p class="text-xs text-gray-400 mt-2">Streaming, Chat, Voice. How does the user feel?</p>
    </div>
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 text-center hover:border-blue-500/50 transition duration-300">
      <div class="text-4xl mb-3">🧠</div>
      <strong class="text-white block text-lg">Behaviors</strong>
      <span class="text-xs text-gray-500">The Logic</span>
      <p class="text-xs text-gray-400 mt-2">Prompts, Tools, Agents. How does the AI act?</p>
    </div>
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 text-center hover:border-green-500/50 transition duration-300">
      <div class="text-4xl mb-3">🌍</div>
      <strong class="text-white block text-lg">Ecosystem</strong>
      <span class="text-xs text-gray-500">The Stack</span>
      <p class="text-xs text-gray-400 mt-2">Vector DBs, Evaluators, Monitoring.</p>
    </div>
  </div>
  
  <div class="bg-gray-900/50 p-6 rounded-xl border-l-4 border-indigo-500">
    <p class="text-gray-400 italic">"In 2026, we don't start with 'What model should I use?'. We start with 'What is the desired <strong>Behavior</strong>?'"</p>
  </div>
</div>
"""

# Lesson 2.2: What is VIBE Coding?
content_2_2 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">The AI Engineering Iceberg</h2>
  
  <div class="relative p-8 bg-gradient-to-b from-sky-900/20 to-blue-900/40 rounded-3xl border border-sky-500/20 overflow-hidden min-h-[400px] flex flex-col justify-center items-center">
    <!-- Surface -->
    <div class="absolute top-[30%] left-0 right-0 h-1 bg-sky-400/30 z-10 w-full"></div>
    <div class="absolute top-[28%] right-10 text-xs text-sky-300 font-mono">WATERLINE</div>
    
    <!-- Tip -->
    <div class="relative z-20 text-center mb-12">
      <div class="text-5xl mb-2">🏔️</div>
      <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg border border-white/20">
        <span class="text-white font-bold">The Code (5%)</span>
        <p class="text-xs text-gray-300">Python, API Calls</p>
      </div>
    </div>
    
    <!-- Underwater -->
    <div class="relative z-20 text-center space-y-4">
      <div class="bg-blue-900/60 backdrop-blur px-6 py-3 rounded-xl border border-blue-500/30 w-[80%] mx-auto">
        <span class="text-blue-200 font-bold block">Prompt Engineering</span>
        <span class="text-xs text-blue-400">Context Management, Persona, Tone</span>
      </div>
      <div class="bg-indigo-900/60 backdrop-blur px-8 py-3 rounded-xl border border-indigo-500/30 w-[90%] mx-auto">
        <span class="text-indigo-200 font-bold block">Evaluation & Testing</span>
        <span class="text-xs text-indigo-400">Ground Truth, Regression Testing, Evals</span>
      </div>
      <div class="bg-violet-900/60 backdrop-blur px-10 py-3 rounded-xl border border-violet-500/30 w-full mx-auto">
        <span class="text-violet-200 font-bold block">Data Curation</span>
        <span class="text-xs text-violet-400">Cleaning, Chunking, Embedding Strategy</span>
      </div>
    </div>
  </div>

  <p class="text-gray-400 text-sm p-4 bg-[#111] rounded-xl border border-gray-800">
    Traditional engineers focus on the syntax. AI Engineers focus on the <strong>system behavior</strong> emerging from the prompt-model interaction.
  </p>
</div>
"""

# Lesson 2.3: The AI Engineer Mindset
content_2_3 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Probabilistic vs Deterministic</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Deterministic -->
    <div class="space-y-3">
      <div class="flex items-center gap-2 mb-2">
        <span class="p-2 bg-gray-800 rounded-lg">⚙️</span>
        <h3 class="text-lg font-bold text-gray-300">Deterministic World</h3>
      </div>
      <div class="p-4 bg-gray-900/50 rounded-xl border border-gray-700 font-mono text-sm text-gray-400">
        input = 5<br>
        x = input * 2<br>
        print(x) <span class="text-green-500">// Always 10</span>
      </div>
      <ul class="text-sm text-gray-500 space-y-1">
        <li class="flex items-center gap-2">✅ Same input = Same output</li>
        <li class="flex items-center gap-2">✅ easy to unit test</li>
        <li class="flex items-center gap-2">❌ Brittle to bad data</li>
      </ul>
    </div>

    <!-- Probabilistic -->
    <div class="space-y-3">
      <div class="flex items-center gap-2 mb-2">
        <span class="p-2 bg-indigo-900/30 rounded-lg text-indigo-400">🎲</span>
        <h3 class="text-lg font-bold text-indigo-300">Probabilistic World</h3>
      </div>
      <div class="p-4 bg-indigo-900/20 rounded-xl border border-indigo-500/30 font-mono text-sm text-indigo-200">
        prompt = "Write a poem"<br>
        res = model.generate(prompt)<br>
        print(res)<br>
        <span class="text-yellow-500">// Different every time!</span>
      </div>
      <ul class="text-sm text-gray-500 space-y-1">
        <li class="flex items-center gap-2">⚠️ Same input = ??? output</li>
        <li class="flex items-center gap-2">⚠️ Hard to assert equal</li>
        <li class="flex items-center gap-2">✅ Handles ambiguity beautifully</li>
      </ul>
    </div>
  </div>

  <div class="mt-6 p-6 bg-yellow-900/20 border border-yellow-600/30 rounded-xl flex items-start gap-4">
    <div class="text-3xl">💡</div>
    <div>
      <h4 class="text-yellow-400 font-bold">The Mindset Shift</h4>
      <p class="text-sm text-yellow-200/70 mt-1">
        You stop writing functions that <em>do</em> the work. You start writing prompts (functions) that <em>describe</em> the work, and you build guardrails to ensure it's done correctly.
      </p>
    </div>
  </div>
</div>
"""

# Lesson 2.4: Mastering Prompt Engineering
content_2_4 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">The Anatomy of a Perfect Prompt</h2>
  
  <div class="flex flex-col gap-4">
    <!-- Layer 1: Persona -->
    <div class="group relative overflow-hidden bg-slate-800 p-4 rounded-xl border-l-4 border-blue-500 hover:bg-slate-700 transition">
      <div class="flex justify-between items-center">
        <span class="font-bold text-blue-400">1. Persona</span>
        <span class="text-xs bg-black/30 px-2 py-1 rounded text-slate-400">Who am I?</span>
      </div>
      <p class="text-sm text-slate-300 mt-2 font-mono">"You are a Senior Python Backend Engineer specializing in FastAPI..."</p>
    </div>

    <!-- Layer 2: Context -->
    <div class="group relative overflow-hidden bg-slate-800 p-4 rounded-xl border-l-4 border-green-500 hover:bg-slate-700 transition">
      <div class="flex justify-between items-center">
        <span class="font-bold text-green-400">2. Context</span>
        <span class="text-xs bg-black/30 px-2 py-1 rounded text-slate-400">What do I know?</span>
      </div>
      <p class="text-sm text-slate-300 mt-2 font-mono">"Here is the database schema for the 'Users' table: [schema]..."</p>
    </div>

    <!-- Layer 3: Task -->
    <div class="group relative overflow-hidden bg-slate-800 p-4 rounded-xl border-l-4 border-yellow-500 hover:bg-slate-700 transition">
      <div class="flex justify-between items-center">
        <span class="font-bold text-yellow-400">3. Task</span>
        <span class="text-xs bg-black/30 px-2 py-1 rounded text-slate-400">What to do?</span>
      </div>
      <p class="text-sm text-slate-300 mt-2 font-mono">"Write an optimized SQL query to find the top 10 active users..."</p>
    </div>

    <!-- Layer 4: Constraints -->
    <div class="group relative overflow-hidden bg-slate-800 p-4 rounded-xl border-l-4 border-red-500 hover:bg-slate-700 transition">
      <div class="flex justify-between items-center">
        <span class="font-bold text-red-400">4. Format/Constraints</span>
        <span class="text-xs bg-black/30 px-2 py-1 rounded text-slate-400">How to output?</span>
      </div>
      <p class="text-sm text-slate-300 mt-2 font-mono">"Return ONLY the SQL code. Do not explain. Use markdown formatting."</p>
    </div>
  </div>

  <div class="p-4 bg-black/40 rounded-lg text-center text-gray-500 text-xs">
    👆 Pro Tip: Always order your prompts logically like this for best performance.
  </div>
</div>
"""

# Lesson 2.5: Advanced Prompting (Few-Shot, CoT)
content_2_5 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">In-Context Learning (Few-Shot)</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-6 bg-red-900/10 border border-red-500/30 rounded-xl opacity-75">
      <h3 class="text-red-400 font-bold mb-2">Zero-Shot (Risky)</h3>
      <div class="font-mono text-xs text-gray-400 bg-black/30 p-3 rounded">
        Task: Classify sentiment.<br>
        Text: "The movie was okay."<br>
        Sentiment: 
      </div>
      <p class="text-red-300/70 text-xs mt-2">Model might say "Neutral", "3/5", "Average" - unpredictable format.</p>
    </div>
    
    <div class="p-6 bg-green-900/10 border border-green-500/30 rounded-xl">
      <h3 class="text-green-400 font-bold mb-2">Few-Shot (Robust)</h3>
      <div class="font-mono text-xs text-gray-400 bg-black/30 p-3 rounded">
        Task: Classify sentiment (Positive/Negative/Neutral).<br><br>
        Text: "Loved it!"<br>Sentiment: Positive<br><br>
        Text: "Terrible."<br>Sentiment: Negative<br><br>
        Text: "The movie was okay."<br>Sentiment: 
      </div>
      <p class="text-green-300/70 text-xs mt-2">Model patterns matches the examples. High reliability.</p>
    </div>
  </div>

  <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 mt-4">
    <h3 class="text-white font-bold mb-2">Why does this work?</h3>
    <p class="text-sm text-slate-400">
      LLMs don't just "read" the prompt instructions; they "complete the pattern" of the text. By providing examples (shots), you are setting a strong pattern for the model to continue. It's like teaching by showing, not just telling.
    </p>
  </div>
</div>
"""

# Lesson 2.6: Handling Hallucinations
content_2_6 = """
<div class="space-y-8 font-sans text-slate-200">
  <div class="bg-red-900/20 p-8 rounded-3xl border border-red-500/20 text-center">
    <h2 class="text-3xl font-bold text-red-400 mb-2">Confidence ≠ Truth</h2>
    <p class="text-gray-400">Even GPT-5 and Gemini 3 will lie to you with a straight face.</p>
  </div>

  <h3 class="text-2xl font-bold text-white mt-8 mb-4">Defense Strategies</h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition duration-300">
      <div class="text-3xl mb-4">📚</div>
      <strong class="text-white block mb-2">RAG Grounding</strong>
      <p class="text-sm text-gray-500">Don't rely on the model's training memory. Inject the facts into the prompt context.</p>
    </div>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition duration-300">
      <div class="text-3xl mb-4">🔗</div>
      <strong class="text-white block mb-2">Citation Checks</strong>
      <p class="text-sm text-gray-500">Force the model to provide URLs or IDs for source links. Programmatically verify if they exist.</p>
    </div>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition duration-300">
      <div class="text-3xl mb-4">🤔</div>
      <strong class="text-white block mb-2">SelfCheckGPT</strong>
      <p class="text-sm text-gray-500">Ask the same question 5 times. High variance in answers usually indicates hallucination.</p>
    </div>
  </div>
</div>
"""

# Lesson 2.7: Chain of Thought
content_2_7 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Thinking Fast vs Thinking Slow</h2>

  <div class="space-y-6">
    <!-- Fast -->
    <div class="flex items-start gap-4 opacity-50">
      <div class="p-3 bg-slate-800 rounded-lg whitespace-nowrap text-xs text-slate-400 w-24 text-center">Standard</div>
      <div class="flex-1 space-y-2">
        <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700 text-sm text-slate-400">
          <strong>Q:</strong> Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 balls. How many balls does he have?<br>
          <strong>A:</strong> 11.
        </div>
      </div>
    </div>

    <!-- Slow -->
    <div class="flex items-start gap-4">
      <div class="p-3 bg-purple-900/30 rounded-lg whitespace-nowrap text-xs text-purple-300 w-24 text-center border border-purple-500/50 font-bold">Chain of Thought</div>
      <div class="flex-1 space-y-2">
        <div class="p-4 bg-purple-900/10 rounded-lg border border-purple-500/30 text-sm text-slate-300">
          <strong>Q:</strong> Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 balls. How many balls does he have?<br>
          <strong>A:</strong> <span class="text-purple-300">Let's think step by step.</span><br>
          1. Roger starts with 5 balls.<br>
          2. He buys 2 cans. Each can has 3 balls, so 2 * 3 = 6 balls.<br>
          3. Total = 5 (start) + 6 (bought) = 11.<br>
          The answer is 11.
        </div>
      </div>
    </div>
  </div>

  <div class="bg-indigo-900/20 p-6 rounded-xl border border-indigo-500/30 mt-4">
    <h3 class="text-indigo-400 font-bold mb-2">Why does CoT work?</h3>
    <p class="text-sm text-indigo-200/70">
      LLMs are probabilistic next-token predictors. They don't have a scratchpad. When you ask for a direct answer, they have to compute the logic AND the result in a single forward pass. By asking them to "think step by step", you spread the computation across many tokens, allowing the model to "attend" to its own intermediate logic.
    </p>
  </div>
</div>
"""

# Lesson 2.8: Tools Overview
content_2_8 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">The AI Engineer's Toolbox</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="relative group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-white transition">
      <div class="absolute -top-3 -right-3 bg-black border border-white p-2 rounded-lg text-2xl rotate-12 group-hover:rotate-0 transition">▲</div>
      <h3 class="text-xl font-bold text-white mb-2">Vercel AI SDK</h3>
      <p class="text-sm text-slate-400">The "React" of AI. Best for building chat interfaces, streaming responses, and UI components in Next.js.</p>
    </div>

    <div class="relative group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition">
      <div class="absolute -top-3 -right-3 bg-black border border-orange-500 p-2 rounded-lg text-2xl rotate-12 group-hover:rotate-0 transition">🦜</div>
      <h3 class="text-xl font-bold text-white mb-2">LangChain</h3>
      <p class="text-sm text-slate-400">The "Swiss Army Knife". Extensive integrations. Great for complex chains and legacy LLM support. Slightly bloated.</p>
    </div>

    <div class="relative group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-violet-500 transition">
      <div class="absolute -top-3 -right-3 bg-black border border-violet-500 p-2 rounded-lg text-2xl rotate-12 group-hover:rotate-0 transition">🦙</div>
      <h3 class="text-xl font-bold text-white mb-2">LlamaIndex</h3>
      <p class="text-sm text-slate-400">The "Data Framework". Specialized in RAG, indexing, and connecting LLMs to your data sources efficiently.</p>
    </div>

    <div class="relative group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition">
      <div class="absolute -top-3 -right-3 bg-black border border-yellow-500 p-2 rounded-lg text-2xl rotate-12 group-hover:rotate-0 transition">🐍</div>
      <h3 class="text-xl font-bold text-white mb-2">Python Standard Support</h3>
      <p class="text-sm text-slate-400">Direct API calls (OpenAI/Anthropic SDKs). Often the best choice for production backend services to keep things simple.</p>
    </div>
  </div>
</div>
"""

# Lesson 2.9: Project "Roast My Code"
content_2_9 = """
<div class="space-y-8 font-sans text-slate-200">
  <div class="bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-500/30 p-8 rounded-3xl text-center">
    <h1 class="text-4xl font-extrabold text-white mb-2">🔥 Roast My Code</h1>
    <p class="text-orange-200">A Simple Prompt Wrapper Application</p>
  </div>

  <div class="space-y-4">
    <h3 class="text-xl font-bold text-white">Project Architecture</h3>
    <div class="p-6 bg-[#111] rounded-xl border border-slate-800 flex flex-col md:flex-row items-center gap-4 justify-center">
      <div class="p-4 bg-blue-900/20 border border-blue-500/30 rounded text-center">
        <div class="text-2xl">👤</div>
        <div class="text-xs text-blue-300 mt-1">User Inputs Code</div>
      </div>
      <div class="text-slate-500">→</div>
      <div class="p-4 bg-orange-900/20 border border-orange-500/30 rounded text-center w-64">
        <div class="text-2xl">🛠️</div>
        <div class="text-xs text-orange-300 mt-1 font-bold">System Prompt</div>
        <div class="text-[10px] text-orange-400/70 mt-1">"You are a mean senior engineer..."</div>
      </div>
      <div class="text-slate-500">→</div>
      <div class="p-4 bg-purple-900/20 border border-purple-500/30 rounded text-center">
        <div class="text-2xl">🤖</div>
        <div class="text-xs text-purple-300 mt-1">LLM Output</div>
      </div>
    </div>
  </div>

  <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
    <h3 class="font-bold text-white mb-4">Key Learning</h3>
    <p class="text-sm text-slate-400">
      This usually seems trivial ("It's just an API call!"). But notice how changing the <strong>Persona</strong> in the system prompt completely alters the product experience. The prompt <em>is</em> the feature.
    </p>
  </div>
</div>
"""

# Lesson 2.10: Testing AI (Evals)
content_2_10 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Unit Testing for Vibes?</h2>
  <p class="text-slate-400 mb-6">How do you assert `if result == "Good"` when the result changes every time? Welcome to <strong>Evaluations</strong>.</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="space-y-4">
      <h3 class="text-lg font-bold text-white border-b border-slate-700 pb-2">Determine Metrics</h3>
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-full bg-green-900 text-green-400 flex items-center justify-center text-xs font-bold">1</span>
        <div>
          <div class="text-sm text-white font-bold">Correctness</div>
          <div class="text-xs text-slate-500">Does code compile? Is answer factually true?</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-full bg-green-900 text-green-400 flex items-center justify-center text-xs font-bold">2</span>
        <div>
          <div class="text-sm text-white font-bold">Conciseness</div>
          <div class="text-xs text-slate-500">Length of output. Faster/cheaper.</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-full bg-green-900 text-green-400 flex items-center justify-center text-xs font-bold">3</span>
        <div>
          <div class="text-sm text-white font-bold">Tone/Style</div>
          <div class="text-xs text-slate-500">Is it polite? Is it pirate-speak?</div>
        </div>
      </div>
    </div>

    <div class="bg-blue-900/10 border border-blue-500/20 p-6 rounded-lg relative">
      <div class="absolute top-0 right-0 bg-blue-500 text-white text-[10px] px-2 py-1 rounded-bl-lg">LLM-as-a-Judge</div>
      <h4 class="font-bold text-blue-300 mb-4">The Meta-Pattern</h4>
      <p class="text-sm text-blue-200/70 mb-4">We use a stronger model (GPT-4o) to grade the output of a faster model (GPT-4o-mini).</p>
      
      <div class="font-mono text-xs bg-black/40 p-3 rounded text-slate-400">
        Prompt: "You are a teacher. Grade the following answer on a scale of 1-5 for accuracy..."
      </div>
    </div>
  </div>
</div>
"""

# Lesson 2.11: Module Wrap Up
content_2_11 = """
<div class="space-y-8 font-sans text-slate-200">
  <div class="p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl text-center">
    <div class="text-6xl mb-6">🎓</div>
    <h2 class="text-3xl font-bold text-white mb-4">You have the Mindset.</h2>
    <p class="text-xl text-gray-400 max-w-2xl mx-auto">
      You now understand Prompting, Hallucinations, CoT, and the VIBE philosophy. You are no longer just coding; you are <strong>orchestrating intelligence</strong>.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
    <a href="#" class="block p-6 bg-slate-800 rounded-xl border border-slate-700 hover:bg-slate-700 transition group">
      <h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition">Next: Module 3</h3>
      <p class="text-sm text-slate-400 mt-2">Core Python for AI Engineers. We'll set up a professional environment (uv, poetry) and learn the specific Python features needed for LLMs.</p>
    </a>
    <div class="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
      <h3 class="text-lg font-bold text-gray-500">Pre-requisite Check</h3>
      <ul class="text-sm text-gray-500 mt-2 space-y-2">
        <li>✓ Understand Prompting</li>
        <li>✓ Understand Tokens (Basic)</li>
        <li>✓ Understand JSON</li>
      </ul>
    </div>
  </div>
</div>
"""

new_lessons = [
    { "id": "genai-2-1", "title": "2.1 The VIBE Coding Philosophy", "content": content_2_1 },
    { "id": "genai-2-2", "title": "2.2 What is VIBE Coding?", "content": content_2_2 },
    { "id": "genai-2-3", "title": "2.3 The AI Engineer Mindset", "content": content_2_3 },
    { "id": "genai-2-4", "title": "2.4 Mastering Prompt Engineering", "content": content_2_4 },
    { "id": "genai-2-5", "title": "2.5 Advanced Prompting: Few-Shot, CoT, ReAct", "content": content_2_5 },
    { "id": "genai-2-6", "title": "2.6 Handling Hallucinations & AI Security", "content": content_2_6 },
    { "id": "genai-2-7", "title": "2.7 Video: Chain of Thought in Action", "content": content_2_7 },
    { "id": "genai-2-8", "title": "2.8 Tools Overview: Vercel AI SDK, LangChain", "content": content_2_8 },
    { "id": "genai-2-9", "title": "2.9 Project: 'Roast My Code' Bot", "content": content_2_9 },
    { "id": "genai-2-10", "title": "2.10 Testing AI: Evals & Ground Truth", "content": content_2_10 },
    { "id": "genai-2-11", "title": "2.11 Module 2 Wrap-up & Preparation", "content": content_2_11 }
]


# Build the lessons array content (just the objects)
ts_str = ""
for lesson in new_lessons:
    # Escape backticks in content just in case
    safe_content = lesson["content"].replace("`", "\\`")
    ts_str += f'''      {{
        id: "{lesson['id']}",
        title: "{lesson['title']}",
        type: "article",
        content: `{safe_content}`,
        isCompleted: false,
      }},
'''

# --- REPLACEMENT LOGIC WITH ROBUST PARSING (REUSED FROM M1) ---

file_path = 'lib/course-data.ts'

print(f"Reading {file_path}...")
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Target the GenAI Module 2
anchor = 'title: "2. Thinking Like an AI Engineer & VIBE Coding"'
start_idx = content.find(anchor)

if start_idx == -1:
    print("Error: Could not find Module 2 title anchor.")
    exit(1)

# Find the start of the object "{" before the title
object_start = -1
for i in range(start_idx, -1, -1):
    if content[i] == '{':
        object_start = i
        break

if object_start == -1:
    print("Error: Could not find start of Module 2 object.")
    exit(1)

# Now find the end of the object by counting braces
brace_count = 0
object_end = -1
in_string = False
string_char = ''

for i in range(object_start, len(content)):
    char = content[i]
    if in_string:
        if char == string_char:
            if content[i-1] != '\\':
                in_string = False
    else:
        if char in ['"', "'", '`']:
            in_string = True
            string_char = char
        elif char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                object_end = i + 1 
                break

if object_end == -1:
    print("Error: Could not find end of Module 2 object (unbalanced braces).")
    exit(1)

print(f"Found Module 2 block from index {object_start} to {object_end}.")

new_module_str = f'''{{
    title: "2. Thinking Like an AI Engineer & VIBE Coding",
    lessons: [
{ts_str}
    ]
}}'''

new_file_content = content[:object_start] + new_module_str + content[object_end:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_file_content)

print("Success! Module 2 updated using robust parsing.")
