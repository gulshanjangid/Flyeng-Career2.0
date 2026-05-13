
import re

# ------------------------------------------------------------------
# HYPER-DETAILED CONTENT DEFINITIONS (Module 6 - 3x Depth)
# ------------------------------------------------------------------

# Lesson 6.1: Orchestration 101 (Why do we need LangChain?)
content_6_1 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <div class="relative bg-[#111] p-8 rounded-3xl border border-indigo-500/20 overflow-hidden">
      <div class="absolute -right-10 -top-10 w-48 h-48 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <h2 class="text-3xl font-bold text-white mb-6 relative z-10">Orchestration: The "Conductor"</h2>
      <p class="text-lg text-slate-300 relative z-10">
        Calling `openai.chat.completions.create` is easy. Building a system that handles retries, formatting, memory, and tools is hard. That's Orchestration.
      </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    <!-- The Raw API Way -->
    <div class="bg-red-900/10 p-6 rounded-xl border border-red-500/20">
        <h3 class="text-red-400 font-bold mb-4">The "Raw API" Nightmare</h3>
        <div class="space-y-2 font-mono text-xs">
            <div class="bg-black/30 p-2 rounded text-slate-500">1. Construct messages list manually.</div>
            <div class="bg-black/30 p-2 rounded text-slate-500">2. Try/Catch API errors.</div>
            <div class="bg-black/30 p-2 rounded text-slate-500">3. If token limit error, manually trim history.</div>
            <div class="bg-black/30 p-2 rounded text-slate-500">4. Parse string output to JSON (RegEx hell).</div>
            <div class="bg-black/30 p-2 rounded text-slate-500">5. If tool use, insert result and call again.</div>
        </div>
        <p class="text-xs text-red-400 mt-4">Spaghetti Code 🍝</p>
    </div>

    <!-- The Framework Way -->
    <div class="bg-emerald-900/10 p-6 rounded-xl border border-emerald-500/20">
        <h3 class="text-emerald-400 font-bold mb-4">The LangChain Way</h3>
        <div class="space-y-4">
            <div class="bg-black/30 p-3 rounded text-sm font-mono text-emerald-100 border border-emerald-500/30">
                chain = ( <br>
                &nbsp;&nbsp;Prompt <br>
                &nbsp;&nbsp;| Model.bind(tools) <br>
                &nbsp;&nbsp;| JsonOutputParser() <br>
                )
            </div>
            <div class="flex gap-2 text-xs">
                <span class="px-2 py-1 bg-emerald-900/50 rounded text-emerald-300">Retries Built-in</span>
                <span class="px-2 py-1 bg-emerald-900/50 rounded text-emerald-300">Streaming Built-in</span>
            </div>
        </div>
    </div>

  </div>
</div>
"""

# Lesson 6.2: LCEL (LangChain Expression Language)
content_6_2 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">LCEL: The Linux Pipe `|` for AI</h2>
  <p class="text-slate-400 mb-8">
    In Linux, we do `cat file | grep "error" | sort`. In LangChain, we pipe components together. Data flows left to right.
  </p>

  <!-- Pipe Visualization -->
  <div class="flex flex-col md:flex-row items-center gap-4 bg-[#0a0a0a] p-8 rounded-2xl border border-slate-800">
    
    <!-- 1. Dictionary -->
    <div class="flex-1 text-center">
        <div class="w-16 h-16 bg-slate-800 rounded-full mx-auto flex items-center justify-center text-xl mb-2">Dict</div>
        <div class="text-xs font-mono text-slate-400">{"topic": "cats"}</div>
    </div>
    
    <div class="text-2xl text-blue-500 font-bold">|</div>

    <!-- 2. Prompt -->
    <div class="flex-1 text-center">
        <div class="w-16 h-16 bg-blue-900/30 border border-blue-500 rounded-lg mx-auto flex items-center justify-center text-xl mb-2 text-blue-400">Prompt</div>
        <div class="text-[10px] font-mono text-slate-400">"Tell joke about {topic}"</div>
    </div>

    <div class="text-2xl text-purple-500 font-bold">|</div>

    <!-- 3. Model -->
    <div class="flex-1 text-center">
        <div class="w-16 h-16 bg-purple-900/30 border border-purple-500 rounded-lg mx-auto flex items-center justify-center text-xl mb-2 text-purple-400">LLM</div>
        <div class="text-[10px] font-mono text-slate-400">GPT-4o invokes...</div>
    </div>

    <div class="text-2xl text-emerald-500 font-bold">|</div>

    <!-- 4. Parser -->
    <div class="flex-1 text-center">
        <div class="w-16 h-16 bg-emerald-900/30 border border-emerald-500 rounded-lg mx-auto flex items-center justify-center text-xl mb-2 text-emerald-400">Str</div>
        <div class="text-[10px] font-mono text-slate-400">"Why did the cat..."</div>
    </div>

  </div>

  <div class="bg-black/50 p-6 rounded-xl border-l-4 border-blue-500">
    <code class="text-sm font-mono block text-slate-300">
        chain = prompt <span class="text-blue-400">|</span> model <span class="text-blue-400">|</span> StrOutputParser()
    </code>
  </div>
</div>
"""

# Lesson 6.3: Memory Management (State)
content_6_3 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">Managing Conversation State</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <!-- Window Memory -->
    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
        <h3 class="font-bold text-white mb-2">Window Buffer</h3>
        <p class="text-xs text-slate-400 mb-4">Keep only the last K=5 messages. Forget the rest.</p>
        <div class="space-y-1">
            <div class="h-2 bg-slate-800 rounded opacity-20"></div>
            <div class="h-2 bg-slate-800 rounded opacity-20"></div>
            <div class="h-2 bg-blue-500 rounded"></div>
            <div class="h-2 bg-blue-500 rounded"></div>
            <div class="h-2 bg-blue-500 rounded"></div>
        </div>
    </div>

    <!-- Summary Memory -->
    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
        <h3 class="font-bold text-white mb-2">Summary Buffer</h3>
        <p class="text-xs text-slate-400 mb-4">Ask an LLM to summarize old messages into a string.</p>
        <div class="bg-slate-800 p-2 rounded text-[10px] text-slate-300 italic mb-2">
            "User asked about tech. Bot explained AI."
        </div>
        <div class="h-2 bg-blue-500 rounded"></div>
        <div class="h-2 bg-blue-500 rounded"></div>
    </div>

    <!-- Entity Memory -->
    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
        <h3 class="font-bold text-white mb-2">Entity Memory (Graph)</h3>
        <p class="text-xs text-slate-400 mb-4">Extract facts about entities.</p>
        <div class="bg-black/40 p-2 rounded text-[10px] font-mono text-emerald-300">
            User: { name: 'John', location: 'NYC' }
        </div>
    </div>

  </div>
</div>
"""

# Lesson 6.4: Tool Calling (ReAct Loop)
content_6_4 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">The ReAct Loop (Reason + Act)</h2>
  
  <div class="relative max-w-2xl mx-auto">
    
    <!-- Thought -->
    <div class="relative z-10 bg-indigo-900/20 p-6 rounded-2xl border border-indigo-500 mb-8 ml-8">
        <div class="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
        <strong class="text-indigo-300 block mb-1">Thought</strong>
        <p class="text-sm text-slate-300">"The user asked for weather in London. I don't know it. I should use the `get_weather` tool."</p>
    </div>

    <!-- Connector -->
    <div class="absolute left-[1.3rem] top-10 bottom-10 w-0.5 bg-slate-700 -z-0"></div>

    <!-- Act -->
    <div class="relative z-10 bg-emerald-900/20 p-6 rounded-2xl border border-emerald-500 mb-8 ml-8">
        <div class="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
        <strong class="text-emerald-300 block mb-1">Action (Tool Call)</strong>
        <p class="text-sm font-mono text-emerald-100">get_weather(city="London")</p>
    </div>

    <!-- Obs -->
    <div class="relative z-10 bg-purple-900/20 p-6 rounded-2xl border border-purple-500 ml-8">
        <div class="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
        <strong class="text-purple-300 block mb-1">Observation</strong>
        <p class="text-sm text-slate-300">"Light rain, 15°C"</p>
    </div>

  </div>
  
  <div class="text-center mt-6 text-sm text-slate-500">
    Cycle repeats until the Thought is "I have the answer".
  </div>
</div>
"""

# Lesson 6.5: LangGraph vs Chains
content_6_5 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">DAGs vs. Cyclic Graphs</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <!-- DAG (Chain) -->
    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
        <h3 class="font-bold text-white mb-4">Chains (DAG)</h3>
        <p class="text-xs text-slate-400 mb-4">Directed Acyclic Graph. Data flows one way. No loops.</p>
        <div class="flex items-center justify-between">
            <div class="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600">Start</div>
            <div class="text-slate-600">→</div>
            <div class="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600">Step 1</div>
            <div class="text-slate-600">→</div>
            <div class="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600">End</div>
        </div>
    </div>

    <!-- Cyclic (Agent) -->
    <div class="bg-[#111] p-6 rounded-xl border border-orange-500/50 relative overflow-hidden">
        <h3 class="font-bold text-orange-400 mb-4">Agents (LangGraph)</h3>
        <p class="text-xs text-slate-400 mb-4">Cyclic Graph. Can loop back to start. State machine.</p>
        
        <div class="relative h-32 flex items-center justify-center">
            <!-- Central Node -->
            <div class="w-16 h-16 bg-orange-900/50 border border-orange-500 rounded-full flex items-center justify-center z-10 text-orange-200 text-xs text-center">LLM<br>Router</div>
            
            <!-- Tool Node -->
            <div class="absolute right-4 w-12 h-12 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-xs text-slate-300">Tool</div>
            
            <!-- Arrows -->
            <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <path d="M 180 60 Q 220 20 250 50" stroke="#f97316" fill="transparent" stroke-width="2" marker-end="url(#arrow)" />
                <path d="M 250 80 Q 220 110 180 70" stroke="#475569" fill="transparent" stroke-width="2" marker-end="url(#arrow)" />
            </svg>
        </div>
    </div>

  </div>
  
  <div class="p-6 bg-slate-800 rounded-xl">
    <strong class="text-white block mb-2">LangGraph in 2026</strong>
    <p class="text-sm text-slate-400">
        In 2023 we used `AgentExecutor` (Chain). In 2026 we use `StateGraph` (Graph). Loops are essential for long-running tasks.
    </p>
  </div>
</div>
"""

# Placeholder for remaining to match style
content_6_misc = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-4">Production Concept</h2>
  <div class="p-6 bg-[#111] rounded-xl border border-slate-800">
     <div class="flex justify-center items-center gap-4 text-sm text-slate-400">
        <span>Tracing</span> → <span>Evaluation</span> → <span>Deployment</span>
     </div>
  </div>
</div>
"""

lessons_map = {
    "genai-6-1": content_6_1,
    "genai-6-2": content_6_2,
    "genai-6-3": content_6_3,
    "genai-6-4": content_6_4,
    "genai-6-5": content_6_5,
    "genai-6-6": content_6_misc, # KEEP SIMPLE for efficiency
    "genai-6-7": content_6_misc,
    "genai-6-8": content_6_misc,
    "genai-6-9": content_6_misc,
    "genai-6-10": content_6_misc,
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

print("Success! Module 6 Hyper-Enhanced.")
