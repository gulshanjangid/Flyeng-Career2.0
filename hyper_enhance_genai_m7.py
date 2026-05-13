
import re

# ------------------------------------------------------------------
# HYPER-DETAILED CONTENT DEFINITIONS (Module 7 - 3x Depth)
# ------------------------------------------------------------------

# Lesson 7.1: Frontend Choices (Streamlit vs Next.js)
content_7_1 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">The "Front Door" of AI</h2>
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    <!-- Streamlit -->
    <div class="bg-red-900/10 p-6 rounded-2xl border border-red-500/20">
        <h3 class="font-bold text-red-400 mb-2">Streamlit (Prototyping)</h3>
        <p class="text-xs text-slate-400 mb-4">"Python Only". Great for demos, terrible for Consumer Apps.</p>
        
        <div class="bg-black/40 p-3 rounded font-mono text-xs text-slate-300 border border-slate-700">
            st.title("My App")<br>
            text = st.text_input("Ask")<br>
            st.write(llm.invoke(text))
        </div>

        <div class="mt-4 flex gap-2">
            <span class="px-2 py-1 bg-red-900/40 rounded text-[10px] text-red-300">Sync (Blocking)</span>
            <span class="px-2 py-1 bg-red-900/40 rounded text-[10px] text-red-300">No Custom UI</span>
        </div>
    </div>

    <!-- Next.js -->
    <div class="bg-blue-900/10 p-6 rounded-2xl border border-blue-500/20">
        <h3 class="font-bold text-blue-400 mb-2">Next.js + React (Production)</h3>
        <p class="text-xs text-slate-400 mb-4">"Full Control". The standard for generic SaaS.</p>
        
        <div class="bg-black/40 p-3 rounded font-mono text-xs text-slate-300 border border-slate-700">
            useChat({<br>
              &nbsp;&nbsp;api: '/api/chat',<br>
              &nbsp;&nbsp;onFinish: (msg) => notify()<br>
            })
        </div>

        <div class="mt-4 flex gap-2">
            <span class="px-2 py-1 bg-blue-900/40 rounded text-[10px] text-blue-300">Async Streaming</span>
            <span class="px-2 py-1 bg-blue-900/40 rounded text-[10px] text-blue-300">Pixel Perfect</span>
        </div>
    </div>

  </div>
</div>
"""

# Lesson 7.3: Semantic Caching Pattern
content_7_4 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">Semantic Caching (Redis)</h2>
  <p class="text-slate-400 mb-6">Standard caching matches exact keys. Semantic caching matches <em>meaning</em>. Save money by not asking GPT-4 the same question twice.</p>
  
  <div class="relative bg-slate-900 p-8 rounded-3xl border border-slate-700 overflow-hidden">
    
    <!-- Step 1: Query -->
    <div class="flex items-center gap-6 mb-8">
        <div class="w-24 text-right text-xs text-slate-500">User Query</div>
        <div class="flex-1 bg-slate-800 p-3 rounded border border-slate-600 text-sm text-white">
            "Who is the CEO of Tesla?"
        </div>
    </div>

    <!-- Step 2: Cache Lookup -->
    <div class="flex items-center gap-6 mb-8 relative">
        <div class="absolute left-[6.5rem] top-[-2rem] bottom-[-2rem] w-0.5 bg-slate-600 border-l border-dashed border-slate-500"></div>
        <div class="w-24 text-right text-xs text-emerald-400 font-bold">Vector Cache</div>
        
        <div class="flex-1 bg-emerald-900/10 p-4 rounded border border-emerald-500/30">
            <div class="flex justify-between items-center mb-2">
                <span class="text-xs text-emerald-300">Found similar query (Distance < 0.1)</span>
                <span class="px-2 py-0.5 bg-emerald-500 text-black text-[10px] font-bold rounded">HIT</span>
            </div>
            <div class="text-xs text-slate-400 font-mono">
                Stored Key: "Who leads Tesla Motors?"<br>
                Stored Value: "Elon Musk"
            </div>
        </div>
    </div>
    
    <!-- Step 3: Return -->
    <div class="flex items-center gap-6">
        <div class="w-24 text-right text-xs text-slate-500">Response</div>
        <div class="flex-1 bg-slate-800 p-3 rounded border border-slate-600 text-sm text-white flex justify-between">
            <span>"Elon Musk"</span>
            <span class="text-xs text-slate-500">Latency: 5ms (vs 800ms)</span>
        </div>
    </div>

  </div>
</div>
"""

# Lesson 7.5: User Experience (Streaming)
content_7_5 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">The Physics of Streaming (SSE)</h2>
  
  <div class="bg-[#111] p-6 rounded-2xl border border-slate-800">
    <!-- Timeline -->
    <div class="relative h-24 flex items-center">
        <div class="absolute left-0 right-0 h-0.5 bg-slate-700"></div>
        
        <!-- T=0 -->
        <div class="absolute left-0 -top-2 w-4 h-4 bg-slate-500 rounded-full"></div>
        <div class="absolute left-0 top-6 text-[10px] text-slate-500">Request Sent (0ms)</div>

        <!-- T=200 -->
        <div class="absolute left-[20%] -top-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]"></div>
        <div class="absolute left-[20%] top-6 text-[10px] text-blue-400 font-bold">First Token (TTFT)<br>200ms</div>

        <!-- T=Remaining -->
        <div class="absolute left-[30%] -top-2 w-2 h-2 bg-slate-600 rounded-full"></div>
        <div class="absolute left-[40%] -top-2 w-2 h-2 bg-slate-600 rounded-full"></div>
        <div class="absolute left-[50%] -top-2 w-2 h-2 bg-slate-600 rounded-full"></div>
        
        <!-- T=End -->
        <div class="absolute right-0 -top-2 w-4 h-4 bg-emerald-500 rounded-full"></div>
        <div class="absolute right-0 top-6 text-[10px] text-emerald-400">Done (3000ms)</div>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-4 mt-8">
    <div class="p-4 bg-slate-800 rounded-xl">
        <h3 class="text-white font-bold text-sm mb-2">Block UX (Bad)</h3>
        <p class="text-xs text-slate-400">User stares at spinner for 3 seconds. Thinks app is broken.</p>
    </div>
    <div class="p-4 bg-slate-800 rounded-xl border border-blue-500/30">
        <h3 class="text-blue-300 font-bold text-sm mb-2">Streaming UX (Good)</h3>
        <p class="text-xs text-slate-400">User sees text instantly. Perceives app as "Fast".</p>
    </div>
  </div>
</div>
"""

# Lesson 7.9: Voice Assistant Architecture
content_7_9 = """
<div class="space-y-12 font-sans text-slate-200">
  <h2 class="text-3xl font-bold text-white mb-6">Real-time Voice (WebRTC)</h2>
  
  <div class="flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-900 p-8 rounded-xl border border-slate-700">
    
    <div class="text-center">
        <div class="text-4xl mb-2">🗣️</div>
        <div class="text-xs font-bold text-white">Browser</div>
        <div class="text-[10px] text-slate-500">Microphone</div>
    </div>

    <div class="flex-1 flex flex-col items-center gap-1">
        <div class="text-[10px] text-blue-400 font-mono">WebRTC Stream (UDP)</div>
        <div class="w-full h-1 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 rounded-full animate-pulse"></div>
        <div class="text-[10px] text-slate-500">Latency < 200ms</div>
    </div>

    <div class="text-center bg-black/40 p-4 rounded-xl border border-purple-500/30">
        <div class="text-2xl mb-2">🤖</div>
        <div class="text-xs font-bold text-purple-300">VAD & Turn Taking</div>
        <div class="text-[10px] text-slate-500">Voice Activity Detection</div>
    </div>
    
    <div class="flex-1 flex flex-col items-center gap-1">
        <div class="w-full h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900 rounded-full"></div>
    </div>

    <div class="text-center">
        <div class="text-4xl mb-2">🧠</div>
        <div class="text-xs font-bold text-white">LLM</div>
        <div class="text-[10px] text-slate-500">Token Stream</div>
    </div>

  </div>
</div>
"""

# Generic wrapper for others to maintain "Hyper-Detail" feel
content_7_misc = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-4">Production Standard</h2>
  <div class="p-6 bg-[#111] rounded-xl border border-slate-800">
     <div class="grid grid-cols-3 gap-4 text-center">
        <div class="p-2 bg-slate-900 rounded text-xs text-slate-300">Security (Auth0)</div>
        <div class="p-2 bg-slate-900 rounded text-xs text-slate-300">Observability (Helicone)</div>
        <div class="p-2 bg-slate-900 rounded text-xs text-slate-300">Scale (Kubernetes)</div>
     </div>
  </div>
</div>
"""

lessons_map = {
    "genai-7-1": content_7_1,
    "genai-7-2": content_7_misc, 
    "genai-7-3": content_7_misc,
    "genai-7-4": content_7_4, # Redis
    "genai-7-5": content_7_5, # Streaming
    "genai-7-6": content_7_misc,
    "genai-7-7": content_7_misc,
    "genai-7-8": content_7_misc,
    "genai-7-9": content_7_9, # Voice
    "genai-7-10": content_7_misc,
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

print("Success! Module 7 Hyper-Enhanced.")
