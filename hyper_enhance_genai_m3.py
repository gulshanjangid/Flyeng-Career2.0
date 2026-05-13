
import re

# ------------------------------------------------------------------
# HYPER-DETAILED CONTENT DEFINITIONS (Module 3 - 3x Depth)
# ------------------------------------------------------------------

# Lesson 3.1: Python as Control Plane (Not just a scripting language)
content_3_1 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <div class="relative bg-gradient-to-br from-indigo-950 via-slate-900 to-black p-10 rounded-3xl border border-indigo-500/20 shadow-2xl overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full"></div>
      <div class="relative z-10">
          <h2 class="text-4xl font-bold text-white mb-6">The Control Plane</h2>
          <p class="text-xl text-slate-300 leading-relaxed max-w-3xl">
            In AI Engineering, Python is not doing the heavy lifting (GPUs do that). Python is the <span class="italic text-indigo-400">Command Center</span>. It orchestrates the flow of data between the User, the Vector DB, and the LLM.
          </p>
      </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
    
    <!-- Component 1: The User -->
    <div class="relative flex flex-col items-center">
        <div class="w-20 h-20 bg-slate-800 rounded-full border-2 border-slate-600 flex items-center justify-center text-3xl z-10">👤</div>
        <div class="mt-4 text-center">
            <h3 class="font-bold text-white mb-1">User / Frontend</h3>
            <p class="text-xs text-slate-400">React, Next.js</p>
        </div>
        <!-- Connector -->
        <div class="hidden md:block absolute top-[50%] right-[-50%] w-full h-[2px] bg-slate-700 -z-0"></div>
    </div>

    <!-- Component 2: Python (The Brain) -->
    <div class="relative flex flex-col items-center">
        <div class="w-32 h-32 bg-blue-900/40 rounded-full border-4 border-blue-500 flex items-center justify-center text-5xl z-10 shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-pulse">🐍</div>
        <div class="mt-4 text-center">
            <h3 class="font-bold text-blue-400 mb-1">Python Orchestrator</h3>
            <div class="flex gap-2 justify-center mt-2">
                <span class="text-[10px] bg-blue-900/50 text-blue-300 px-2 py-1 rounded">FastAPI</span>
                <span class="text-[10px] bg-blue-900/50 text-blue-300 px-2 py-1 rounded">LangChain</span>
            </div>
        </div>
        <!-- Connectors -->
        <div class="hidden md:block absolute top-[50%] right-[-50%] w-full h-[2px] bg-slate-700 -z-0"></div>
    </div>

    <!-- Component 3: Models (The Muscle) -->
    <div class="relative flex flex-col items-center">
        <div class="w-20 h-20 bg-slate-800 rounded-2xl border-2 border-emerald-500 flex items-center justify-center text-3xl z-10 shadow-[0_0_15px_rgba(16,185,129,0.2)]">🤖</div>
        <div class="mt-4 text-center">
            <h3 class="font-bold text-white mb-1">Model Layer</h3>
            <p class="text-xs text-slate-400">OpenAI, Anthropic, HuggingFace</p>
        </div>
    </div>
  </div>

  <div class="p-6 bg-slate-800/50 rounded-xl border-l-4 border-yellow-500">
    <strong class="text-yellow-500 block mb-2">Why Python?</strong>
    <p class="text-slate-300 text-sm">
        It's not about speed (C++ is faster). It's about <strong class="text-white">Glue</strong>. Python has the best libraries for `json` handling, `http` requests, and `tensor` manipulation—the three languages of AI.
    </p>
  </div>
</div>
"""

# Lesson 3.2: Modern Stack (uv, ruff)
content_3_2 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">The Modern AI Stack (2026)</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <!-- Old School -->
    <div class="opacity-60 hover:opacity-100 transition duration-500">
        <div class="bg-red-900/10 p-6 rounded-2xl border border-red-500/20">
            <h3 class="text-xl font-bold text-red-400 mb-4">The Old Way (2022)</h3>
            <ul class="space-y-3 font-mono text-sm">
                <li class="flex items-center gap-3">
                    <span class="text-red-500">🐌</span>
                    <span>pip install (Slow)</span>
                </li>
                <li class="flex items-center gap-3">
                    <span class="text-red-500">🕸️</span>
                    <span>requirements.txt (Messy)</span>
                </li>
                <li class="flex items-center gap-3">
                    <span class="text-red-500">🐢</span>
                    <span>venv (Manual setup)</span>
                </li>
            </ul>
        </div>
    </div>

    <!-- New School -->
    <div>
        <div class="bg-emerald-900/10 p-6 rounded-2xl border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <h3 class="text-xl font-bold text-emerald-400 mb-4">The `uv` Way (2026)</h3>
            <ul class="space-y-3 font-mono text-sm">
                <li class="flex items-center gap-3">
                    <span class="text-emerald-500">⚡</span>
                    <span class="text-white">Written in Rust (100x Faster)</span>
                </li>
                <li class="flex items-center gap-3">
                    <span class="text-emerald-500">📦</span>
                    <span class="text-white">Unified logic (pip + venv + pyenv)</span>
                </li>
                <li class="flex items-center gap-3">
                    <span class="text-emerald-500">🛡️</span>
                    <span class="text-white">Lockfile reliability</span>
                </li>
            </ul>
            <div class="mt-4 bg-black/40 p-3 rounded text-xs text-emerald-300">
                $ uv init my-agent<br>
                $ uv add openai
            </div>
        </div>
    </div>
  </div>

  <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
    <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-white">Linting & Formatting</h3>
        <span class="text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">Standard</span>
    </div>
    <div class="flex gap-4">
        <div class="flex-1 bg-[#111] p-4 rounded text-center">
            <div class="text-2xl mb-2">🗑️</div>
            <div class="text-xs text-gray-500 line-through">Black</div>
            <div class="text-xs text-gray-500 line-through">Isort</div>
            <div class="text-xs text-gray-500 line-through">Flake8</div>
        </div>
        <div class="flex items-center text-slate-500">→</div>
        <div class="flex-1 bg-indigo-900/20 p-4 rounded text-center border border-indigo-500">
            <div class="text-2xl mb-2">🚀</div>
            <strong class="text-indigo-400 block">Ruff</strong>
            <span class="text-xs text-slate-400">One tool, instant fixes.</span>
        </div>
    </div>
  </div>
</div>
"""

# Lesson 3.3: AsyncIO visual (Event Loop)
content_3_3 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white">Concurrency for Latency Masking</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <!-- Synchronous (Blocking) -->
    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700 opacity-70">
        <h3 class="text-lg font-bold text-red-400 mb-4">Blocking Code (Sync)</h3>
        <div class="space-y-2">
            <div class="h-8 bg-red-900/50 rounded flex items-center px-4 w-full border border-red-800">
                <span class="text-xs text-red-300">Call LLM 1 (3s)</span>
            </div>
            <div class="h-8 bg-red-900/50 rounded flex items-center px-4 w-full border border-red-800">
                <span class="text-xs text-red-300">Call LLM 2 (3s)</span>
            </div>
            <div class="h-8 bg-red-900/50 rounded flex items-center px-4 w-full border border-red-800">
                <span class="text-xs text-red-300">Call DB (1s)</span>
            </div>
        </div>
        <div class="mt-4 pt-4 border-t border-slate-700 flex justify-between text-xs text-slate-400">
            <span>Total Time:</span>
            <span class="text-red-400 font-bold">7.0 Seconds</span>
        </div>
    </div>

    <!-- Asynchronous (Concurrent) -->
    <div class="bg-slate-900 p-6 rounded-xl border border-emerald-500/50">
        <h3 class="text-lg font-bold text-emerald-400 mb-4">Event Loop (Async)</h3>
        <div class="relative h-32 w-full bg-[#111] rounded border border-gray-800 p-2">
            <!-- Timeline Visual -->
            <div class="absolute top-2 left-0 h-6 bg-emerald-500/30 w-[42%] border border-emerald-500 rounded flex items-center justify-center text-[10px] text-emerald-200">LLM 1 (3s)</div>
            <div class="absolute top-10 left-0 h-6 bg-emerald-500/30 w-[42%] border border-emerald-500 rounded flex items-center justify-center text-[10px] text-emerald-200">LLM 2 (3s)</div>
            <div class="absolute top-18 left-0 h-6 bg-emerald-500/30 w-[14%] border border-emerald-500 rounded flex items-center justify-center text-[10px] text-emerald-200">DB (1s)</div>
        </div>
        <div class="mt-4 pt-4 border-t border-slate-700 flex justify-between text-xs text-slate-400">
            <span>Total Time:</span>
            <span class="text-emerald-400 font-bold">3.1 Seconds</span>
        </div>
    </div>
  </div>

  <div class="p-6 bg-[#0f172a] rounded-xl border border-slate-700">
    <code class="text-sm font-mono block text-slate-300">
        <span class="text-purple-400">async def</span> main():<br>
        &nbsp;&nbsp;<span class="text-slate-500"># Fire all tasks at once</span><br>
        &nbsp;&nbsp;results = <span class="text-purple-400">await</span> asyncio.gather(llm1(), llm2(), db_call())
    </code>
  </div>
</div>
"""

# Lesson 3.4 & 3.5: Typing & Pydantic (Structured Outputs)
content_3_4 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">Pydantic: The Protocol Droid</h2>
  <p class="text-slate-400 mb-8">
    Models speak chaotic English. Code speaks strict JSON. Pydantic is the universal translator that forces models to conform to your schema.
  </p>

  <!-- The Guardrail Visual -->
  <div class="flex flex-col md:flex-row items-center gap-4">
    
    <!-- Step 1: Raw Output -->
    <div class="flex-1 p-6 bg-red-900/10 border border-red-500/20 rounded-xl text-center">
        <h3 class="text-red-400 font-bold mb-2">Raw LLM</h3>
        <div class="text-xs font-mono text-slate-400 bg-black/40 p-2 rounded text-left">
            "Sure! Here is the JSON:<br>
            { name: 'John', age: 'twenty' }"
        </div>
        <span class="block mt-2 text-xs text-red-500">Invalid JSON (Age is string)</span>
    </div>

    <div class="text-2xl text-slate-500">→</div>

    <!-- Step 2: Validator -->
    <div class="flex-1 p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl text-center relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-blue-500 animate-pulse"></div>
        <h3 class="text-blue-400 font-bold mb-2">Pydantic Schema</h3>
        <div class="text-xs font-mono text-slate-400 bg-black/40 p-2 rounded text-left">
            class User(BaseModel):<br>
            &nbsp;&nbsp;name: str<br>
            &nbsp;&nbsp;age: int
        </div>
        <span class="block mt-2 text-xs text-blue-500">Validates & Casts Types</span>
    </div>

    <div class="text-2xl text-slate-500">→</div>

    <!-- Step 3: Clean Object -->
    <div class="flex-1 p-6 bg-emerald-900/10 border border-emerald-500/20 rounded-xl text-center">
        <h3 class="text-emerald-400 font-bold mb-2">Python Object</h3>
        <div class="text-xs font-mono text-slate-400 bg-black/40 p-2 rounded text-left">
            User(name='John', age=20)
        </div>
        <span class="block mt-2 text-xs text-emerald-500">Ready for Database</span>
    </div>

  </div>
</div>
"""
content_3_5 = content_3_4 # Continue on same theme, maybe deeper code examples

# Lesson 3.7: Generators (Streaming Physics)
content_3_7 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">The Physics of `yield`</h2>
  
  <div class="bg-[#111] p-8 rounded-3xl border border-gray-800">
    <div class="flex items-center gap-6 mb-8">
        <div class="text-5xl">🚰</div>
        <div>
            <h3 class="text-xl font-bold text-white">Generators are Pipelines</h3>
            <p class="text-slate-400 text-sm">Most functions `return` a bucket of water (list). Generators connect a hose.</p>
        </div>
    </div>

    <div class="space-y-6">
        <!-- Visual Comparison -->
        <div class="flex flex-col gap-4">
            
            <!-- List Buildup -->
            <div class="flex items-center gap-4">
                <div class="w-24 text-right text-xs text-slate-500">Regular List</div>
                <div class="flex-1 bg-slate-800 h-8 rounded relative overflow-hidden">
                    <div class="absolute inset-0 bg-slate-700 w-full flex items-center justify-center text-xs text-slate-300">Wait... Wait... Wait... [All Data]</div>
                </div>
            </div>

            <!-- Generator Stream -->
            <div class="flex items-center gap-4">
                <div class="w-24 text-right text-xs text-emerald-500">Generator</div>
                <div class="flex-1 flex gap-1">
                    <div class="w-8 h-8 bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center text-xs text-emerald-300 animate-pulse">T1</div>
                    <div class="w-8 h-8 bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center text-xs text-emerald-300 animate-pulse delay-75">T2</div>
                    <div class="w-8 h-8 bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center text-xs text-emerald-300 animate-pulse delay-150">T3</div>
                    <div class="w-8 h-8 bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center text-xs text-emerald-300 animate-pulse delay-200">...</div>
                </div>
            </div>

        </div>
    </div>
  </div>

  <div class="p-6 bg-slate-900 rounded-xl border-l-4 border-purple-500">
     <strong class="text-purple-400 block mb-2">Memory Efficiency</strong>
     <p class="text-sm text-slate-300">
        If you process a 10GB log file with a list, you verify crash RAM. With a generator, you only hold one line in memory at a time. This is critical for RAG ingestion.
     </p>
  </div>
</div>
"""

lessons_map = {
    "genai-3-1": content_3_1,
    "genai-3-2": content_3_2,
    "genai-3-3": content_3_3,
    "genai-3-4": content_3_4,
    "genai-3-5": content_3_5,
    "genai-3-7": content_3_7,
}

file_path = 'lib/course-data.ts'

print(f"Reading {file_path}...")
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def replace_lesson_content(file_content, lesson_id, new_html):
    pattern = r'(id:\s*["\']' + re.escape(lesson_id) + r'["\'][\s\S]*?content:\s*`)([\s\S]*?)(`)'
    match = re.search(pattern, file_content)
    if not match:
        print(f"Warning: Could not find lesson {lesson_id}")
        return file_content
    
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

print("Success! Module 3 Hyper-Enhanced.")
