
import re
import textwrap

# ------------------------------------------------------------------
# CONTENT DEFINITIONS (Module 3: Core Python for GenAI)
# ------------------------------------------------------------------

# Lesson 3.1: Python as Control Layer
content_3_1 = """
<div class="space-y-8 font-sans text-slate-200">
  <div class="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 p-8 rounded-3xl relative overflow-hidden">
    <h2 class="text-3xl font-bold text-white mb-4 relative z-10">The Great Orchestrator</h2>
    <p class="text-xl text-gray-300 leading-relaxed relative z-10">
      In the GenAI stack, Python is not just a language. It is the <span class="text-cyan-400">Control Plane</span>. It connects the "Brain" (LLM) to the "Body" (Tools/APIs).
    </p>
  </div>

  <div class="relative p-8 bg-[#111] rounded-2xl border border-gray-800">
    <div class="absolute inset-0 bg-grid-white/[0.02]"></div>
    <div class="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
        <!-- Node 1 -->
        <div class="text-center">
            <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500 mb-2 mx-auto text-2xl">🧠</div>
            <div class="font-bold text-green-400">LLM</div>
        </div>
        <!-- Arrow -->
        <div class="h-1 w-12 bg-gray-700"></div>
        <!-- Center -->
        <div class="text-center p-6 bg-blue-900/30 border border-blue-500 rounded-xl relative">
            <div class="absolute -top-3 -right-3 bg-blue-500 text-xs text-white px-2 py-1 rounded">YOU</div>
            <div class="text-4xl">🐍</div>
            <div class="font-bold text-white mt-2">Python Control Layer</div>
        </div>
        <!-- Arrow -->
        <div class="h-1 w-12 bg-gray-700"></div>
        <!-- Node 3 -->
        <div class="text-center">
            <div class="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500 mb-2 mx-auto text-2xl">🌍</div>
            <div class="font-bold text-purple-400">World</div>
            <div class="text-xs text-gray-500">(API, DB, Users)</div>
        </div>
    </div>
  </div>
</div>
"""

# Lesson 3.2: Modern Setup (uv)
content_3_2 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Stop Using Pip (Directly)</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Old Way -->
    <div class="p-6 bg-red-900/10 border border-red-500/30 rounded-xl opacity-60">
      <h3 class="text-red-400 font-bold mb-4">The Old Way (Slow)</h3>
      <div class="space-y-2 font-mono text-xs text-gray-400">
        <div class="p-2 bg-black/40 rounded">python -m venv venv</div>
        <div class="p-2 bg-black/40 rounded">source venv/bin/activate</div>
        <div class="p-2 bg-black/40 rounded">pip install requests</div>
        <div class="p-2 bg-black/40 rounded">pip freeze > requirements.txt</div>
      </div>
      <p class="text-xs text-red-300 mt-4">Dependency hell. Slow installs.</p>
    </div>

    <!-- New Way -->
    <div class="p-6 bg-green-900/10 border border-green-500/30 rounded-xl">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-green-400 font-bold">The 2026 Way (uv)</h3>
        <span class="px-2 py-1 bg-green-500 text-black text-xs font-bold rounded">RUST BASED</span>
      </div>
      <div class="space-y-2 font-mono text-xs text-green-100">
        <div class="p-2 bg-black/40 rounded border-l-2 border-green-500">uv init .</div>
        <div class="p-2 bg-black/40 rounded border-l-2 border-green-500">uv add openai pandas</div>
        <div class="p-2 bg-black/40 rounded border-l-2 border-green-500">uv run main.py</div>
      </div>
      <p class="text-xs text-green-300 mt-4">10-100x faster. Unified tool for Python versions, virtualenvs, and packages.</p>
    </div>
  </div>

  <div class="bg-slate-800 p-4 rounded-lg border border-slate-700">
    <code class="text-sm text-blue-300">curl -LsSf https://astral.sh/uv/install.sh | sh</code>
  </div>
</div>
"""

# Lesson 3.3: GenAI Python Essentials
content_3_3 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Strings are Your New Database</h2>
  
  <div class="space-y-6">
    <div class="bg-[#111] p-6 rounded-xl border border-gray-800">
      <h3 class="text-orange-400 font-bold mb-2">1. f-strings for Prompt Templates</h3>
      <p class="text-sm text-gray-400 mb-4">Don't use string concatenation (+). Use f-strings for clean, readable prompt injection.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-3 bg-red-900/20 border border-red-500/20 rounded">
          <div class="text-red-400 text-xs font-bold mb-1">BAD</div>
          <code class="text-xs text-gray-400">prompt = "Answer: " + question + " Style: " + style</code>
        </div>
        <div class="p-3 bg-green-900/20 border border-green-500/20 rounded">
          <div class="text-green-400 text-xs font-bold mb-1">GOOD</div>
          <code class="text-xs text-green-200">prompt = f"Answer: {question}\\nStyle: {style}"</code>
        </div>
      </div>
    </div>

    <div class="bg-[#111] p-6 rounded-xl border border-gray-800">
      <h3 class="text-purple-400 font-bold mb-2">2. Docstrings as System Prompts</h3>
      <p class="text-sm text-gray-400 mb-2">When writing tools for agents, your Python docstring BECOMES the instructions for the AI.</p>
      <div class="p-4 bg-slate-900 rounded-lg font-mono text-xs text-slate-300 border border-slate-700">
        def get_weather(city: str):<br>
        &nbsp;&nbsp;<span class="text-yellow-600">\"\"\"Gets the current weather for a city. Values: city name (e.g., 'London')\"\"\"</span><br>
        &nbsp;&nbsp;pass
      </div>
    </div>
  </div>
</div>
"""

# Lesson 3.4: Data Types for AI
content_3_4 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Mapping Python to AI Concepts</h2>
  
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="p-4 bg-slate-800 rounded-xl border border-slate-700 text-center hover:bg-slate-700 transition">
      <div class="text-3xl mb-2">📜</div>
      <div class="font-bold text-white">List[dict]</div>
      <div class="text-xs text-blue-400 mt-1">Is Conversation History</div>
    </div>
    
    <div class="p-4 bg-slate-800 rounded-xl border border-slate-700 text-center hover:bg-slate-700 transition">
      <div class="text-3xl mb-2">🔑</div>
      <div class="font-bold text-white">Dict</div>
      <div class="text-xs text-yellow-400 mt-1">Is JSON Context</div>
    </div>
    
    <div class="p-4 bg-slate-800 rounded-xl border border-slate-700 text-center hover:bg-slate-700 transition">
      <div class="text-3xl mb-2">🔢</div>
      <div class="font-bold text-white">List[float]</div>
      <div class="text-xs text-green-400 mt-1">Is an Embedding</div>
    </div>
    
    <div class="p-4 bg-slate-800 rounded-xl border border-slate-700 text-center hover:bg-slate-700 transition">
      <div class="text-3xl mb-2">⚡</div>
      <div class="font-bold text-white">Generator</div>
      <div class="text-xs text-purple-400 mt-1">Is Streaming Output</div>
    </div>
  </div>

  <div class="mt-4 p-4 bg-blue-900/10 border border-blue-500/20 rounded-lg">
    <p class="text-sm text-blue-200">
      <strong>Pro Tip:</strong> 90% of AI Engineering is manipulating \`List[dict]\`. Get really, really good at list comprehensions and dictionary merging.
    </p>
  </div>
</div>
"""

# Lesson 3.5: Pydantic Power
content_3_5 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">The Guardrails of AI</h2>
  
  <div class="relative p-6 bg-[#111] rounded-2xl border border-gray-800 overflow-hidden">
    <div class="flex flex-col gap-8 relative z-10">
        <!-- Input -->
        <div class="flex items-center gap-4">
            <div class="w-24 text-right text-xs text-gray-500">LLM Output<br>(Unreliable)</div>
            <div class="h-10 bg-red-900/30 border border-red-500 text-red-300 flex items-center px-4 rounded font-mono text-xs w-full">
                {"age": "twenty", "email": "bad-email"}
            </div>
        </div>
        
        <!-- Filter -->
        <div class="flex items-center gap-4">
            <div class="w-24 text-right text-xs text-pink-500 font-bold">Pydantic</div>
            <div class="h-16 bg-pink-600 rounded-xl w-full flex items-center justify-center text-white font-bold animate-pulse shadow-[0_0_20px_rgba(236,72,153,0.5)]">
               🛡️ VALIDATION LAYER 🛡️
            </div>
        </div>

        <!-- Output -->
        <div class="flex items-center gap-4">
            <div class="w-24 text-right text-xs text-gray-500">App Data<br>(Safe)</div>
            <div class="h-10 bg-green-900/30 border border-green-500 text-green-300 flex items-center px-4 rounded font-mono text-xs w-full">
                User(age=20, email=Error)
            </div>
        </div>
    </div>
  </div>

  <p class="text-gray-400 text-sm">
    Pydantic is not just for validation. It is the <strong>Schema Definition Language</strong> for OpenAI Function Calling.
  </p>
</div>
"""

# Lesson 3.6: Modular Coding
content_3_6 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Screaming Architecture</h2>
  
  <div class="grid grid-cols-2 gap-4">
    <div class="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 class="text-slate-400 text-sm font-bold mb-2">Beginner</h3>
        <ul class="font-mono text-xs text-gray-500 space-y-1">
            <li>main.py</li>
            <li>utils.py</li>
            <li>prompt.txt</li>
        </ul>
    </div>
    
    <div class="p-6 bg-indigo-900/20 rounded-xl border border-indigo-500/30">
        <h3 class="text-indigo-400 text-sm font-bold mb-2">AI Engineer</h3>
        <ul class="font-mono text-xs text-indigo-200 space-y-1">
            <li class="pl-0">/src</li>
            <li class="pl-2">/agents</li>
            <li class="pl-4">researcher.py</li>
            <li class="pl-2">/tools</li>
            <li class="pl-4">search_tool.py</li>
            <li class="pl-2">/prompts</li>
            <li class="pl-4">system_prompts.py</li>
        </ul>
    </div>
  </div>
</div>
"""

# Lesson 3.7: Ingestion
content_3_7 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Garbage In, Garbage Out</h2>
  
  <div class="space-y-4">
    <h3 class="font-bold text-white">The File Format Hierarchy</h3>
    <div class="flex flex-col gap-2">
        <div class="p-3 bg-green-900/30 border border-green-500/50 rounded flex justify-between">
            <span class="text-white font-mono">.parquet</span>
            <span class="text-xs text-green-400">Best. Compressed, typed columns.</span>
        </div>
        <div class="p-3 bg-blue-900/30 border border-blue-500/50 rounded flex justify-between">
            <span class="text-white font-mono">.jsonl</span>
            <span class="text-xs text-blue-400">Great. Line-by-line processing.</span>
        </div>
        <div class="p-3 bg-yellow-900/30 border border-yellow-500/50 rounded flex justify-between">
            <span class="text-white font-mono">.csv</span>
            <span class="text-xs text-yellow-400">Okay. Losses types (everything is string).</span>
        </div>
        <div class="p-3 bg-red-900/30 border border-red-500/50 rounded flex justify-between">
            <span class="text-white font-mono">.pdf</span>
            <span class="text-xs text-red-400">Pain. Unstructured, layout issues.</span>
        </div>
    </div>
  </div>
</div>
"""

# Lesson 3.8: Functions as Tools
content_3_8 = """
<div class="space-y-8 font-sans text-slate-200">
  <div class="p-8 bg-gradient-to-r from-gray-900 to-slate-900 border border-gray-700 rounded-3xl">
    <h2 class="text-3xl font-bold text-white mb-4">The Magic Trick</h2>
    <div class="font-mono text-sm text-gray-300">
        <span class="text-purple-400">def</span> <span class="text-blue-400">calculate_tax</span>(amount):<br>
        &nbsp;&nbsp;<span class="text-yellow-500">\"\"\"Multiplies amount by 0.2\"\"\"</span><br>
        &nbsp;&nbsp;return amount * 0.2
    </div>
    <div class="my-4 text-center text-2xl">⬇️ AUTOMATIC TRANSLATION ⬇️</div>
    <div class="font-mono text-xs text-green-300 bg-black p-4 rounded border border-green-900/50">
        {<br>
        &nbsp;&nbsp;"name": "calculate_tax",<br>
        &nbsp;&nbsp;"description": "Multiplies amount by 0.2",<br>
        &nbsp;&nbsp;"parameters": { ... }<br>
        }
    </div>
  </div>
</div>
"""

# Lesson 3.9: OOP for Agents
content_3_9 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Agents have State</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="space-y-4">
      <p class="text-gray-400 text-sm">Functional programming is great for pipelines. But Agents are <strong>state machines</strong>. They remember history, current tools, and pending tasks.</p>
      <div class="p-4 bg-slate-800 rounded-lg border border-slate-700 font-mono text-sm text-blue-300">
        class ResearchAgent:<br>
        &nbsp;&nbsp;def __init__(self):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;self.memory = []<br>
        &nbsp;&nbsp;&nbsp;&nbsp;self.tools = [SearchTool()]
      </div>
    </div>
    <div class="flex items-center justify-center">
        <div class="w-32 h-32 bg-blue-500/20 rounded-full border-4 border-blue-500 flex items-center justify-center text-4xl animate-pulse">
            🤖
        </div>
    </div>
  </div>
</div>
"""

# Lesson 3.10: AsyncIO
content_3_10 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Why Async Matters for AI</h2>
  
  <div class="space-y-8">
    <!-- Sync -->
    <div>
        <div class="text-xs text-red-400 font-bold mb-2">Synchronous (Blocking)</div>
        <div class="flex gap-1 overflow-x-auto pb-2">
            <div class="h-8 bg-red-500 w-32 flex items-center justify-center text-[10px] text-black font-bold">LLM Call 1 (3s)</div>
            <div class="h-8 bg-red-500 w-32 flex items-center justify-center text-[10px] text-black font-bold">LLM Call 2 (3s)</div>
            <div class="h-8 bg-red-500 w-32 flex items-center justify-center text-[10px] text-black font-bold">LLM Call 3 (3s)</div>
        </div>
        <div class="text-right text-xs text-gray-500 mt-1">Total: 9 Seconds</div>
    </div>

    <!-- Async -->
    <div>
        <div class="text-xs text-green-400 font-bold mb-2">AsyncIO (Concurrent)</div>
        <div class="relative h-24 bg-gray-900/50 rounded-lg border border-gray-800">
            <div class="absolute top-2 left-0 h-6 bg-green-500 w-32 text-[10px] text-black font-bold flex items-center justify-center rounded">LLM Call 1</div>
            <div class="absolute top-10 left-0 h-6 bg-green-500 w-32 text-[10px] text-black font-bold flex items-center justify-center rounded">LLM Call 2</div>
            <div class="absolute top-18 left-0 h-6 bg-green-500 w-32 text-[10px] text-black font-bold flex items-center justify-center rounded">LLM Call 3</div>
        </div>
        <div class="text-right text-xs text-gray-500 mt-1">Total: 3.1 Seconds</div>
    </div>
  </div>
</div>
"""

# Lesson 3.11: Typing
content_3_11 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Python 2026 is Statically Typed</h2>
  <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-xl">
    <h3 class="text-red-400 font-bold mb-2">Without Types</h3>
    <p class="text-sm text-gray-400">You pass the whole `response` object to a function expecting just the `text` string. Runtime crash in Production.</p>
  </div>
  <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-xl mt-4">
    <h3 class="text-green-400 font-bold mb-2">With Types</h3>
    <code class="block font-mono text-sm text-green-300">
    def process(data: str) -> dict: ...
    </code>
    <p class="text-sm text-gray-400 mt-2">Your editor (VS Code) yells at you BEFORE you run the code.</p>
  </div>
</div>
"""

# Lesson 3.12: API Interfacing
content_3_12 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">Designing for Failure</h2>
  
  <div class="grid grid-cols-2 gap-4">
    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
        <div class="text-4xl mb-2">📉</div>
        <div class="font-bold text-white">Rate Limits</div>
        <div class="text-xs text-gray-400">429 Too Many Requests</div>
    </div>
    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
        <div class="text-4xl mb-2">⏱️</div>
        <div class="font-bold text-white">Timeouts</div>
        <div class="text-xs text-gray-400">Model hangs forever</div>
    </div>
  </div>

  <div class="mt-6 p-4 bg-yellow-900/20 border border-yellow-600/50 rounded-lg">
    <strong class="text-yellow-400">Exponential Backoff</strong>: Wait 1s, then 2s, then 4s, then 8s. Don't hammer the API.
  </div>
</div>
"""

# Lesson 3.13: Python-JS Bridge
content_3_13 = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-6">The Modern AI Stack</h2>
  <div class="relative bg-white/5 p-8 rounded-2xl border border-white/10">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <!-- Frontend -->
        <div class="text-center w-full">
            <div class="text-5xl mb-2">⚛️</div>
            <div class="font-bold text-white">Next.js</div>
            <div class="text-xs text-gray-400">UI / Streaming / Vercel AI SDK</div>
        </div>
        
        <!-- Bridge -->
        <div class="flex flex-col items-center">
            <div class="text-xs text-gray-500 mb-1">HTTP / Rest</div>
            <div class="h-1 w-full md:w-32 bg-gradient-to-r from-blue-500 to-green-500"></div>
            <div class="text-xs text-gray-500 mt-1">JSON</div>
        </div>

        <!-- Backend -->
        <div class="text-center w-full">
            <div class="text-5xl mb-2">⚡</div>
            <div class="font-bold text-white">FastAPI (Python)</div>
            <div class="text-xs text-gray-400">LangChain / LlamaIndex / Agents</div>
        </div>
    </div>
  </div>
</div>
"""

new_lessons = [
    { "id": "genai-3-1", "title": "3.1 The Control Layer", "content": content_3_1 },
    { "id": "genai-3-2", "title": "3.2 Modern Setup", "content": content_3_2 },
    { "id": "genai-3-3", "title": "3.3 GenAI Python Essentials", "content": content_3_3 },
    { "id": "genai-3-4", "title": "3.4 Data Types for AI", "content": content_3_4 },
    { "id": "genai-3-5", "title": "3.5 Pydantic Power", "content": content_3_5 },
    { "id": "genai-3-6", "title": "3.6 Modular Coding", "content": content_3_6 },
    { "id": "genai-3-7", "title": "3.7 Ingestion (File I/O)", "content": content_3_7 },
    { "id": "genai-3-8", "title": "3.8 Functions as Tools", "content": content_3_8 },
    { "id": "genai-3-9", "title": "3.9 OOP for Agents", "content": content_3_9 },
    { "id": "genai-3-10", "title": "3.10 AsyncIO for AI", "content": content_3_10 },
    { "id": "genai-3-11", "title": "3.11 Typing 2026", "content": content_3_11 },
    { "id": "genai-3-12", "title": "3.12 API Interfacing", "content": content_3_12 },
    { "id": "genai-3-13", "title": "3.13 The Python-JS Bridge", "content": content_3_13 }
]


# Build the lessons array content
ts_str = ""
for lesson in new_lessons:
    safe_content = lesson["content"].replace("`", "\\`")
    ts_str += f'''      {{
        id: "{lesson['id']}",
        title: "{lesson['title']}",
        type: "article",
        content: `{safe_content}`,
        isCompleted: false,
      }},
'''

# --- REPLACEMENT LOGIC ---

file_path = 'lib/course-data.ts'

print(f"Reading {file_path}...")
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Target GenAI Module 3
anchor = 'title: "3. Core Python for AI Engineers (Hybrid Track)"'
start_idx = content.find(anchor)

if start_idx == -1:
    print("Error: Could not find Module 3 title.")
    exit(1)

# Find start of object
object_start = -1
for i in range(start_idx, -1, -1):
    if content[i] == '{':
        object_start = i
        break

# Find end of object (brace counting)
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

print(f"Found Module 3 block from {object_start} to {object_end}")

new_module_str = f'''{{
    title: "3. Core Python for Generative AI Engineers",
    lessons: [
{ts_str}
    ]
}}'''

new_file_content = content[:object_start] + new_module_str + content[object_end:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_file_content)

print("Success! Module 3 updated.")
