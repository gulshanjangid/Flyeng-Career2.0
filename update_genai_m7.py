import re

# 12 Lessons for "7. Working with LLMs in Python"
# Content styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_7_content = """,
            {
                title: "7. Working with LLMs in Python",
                lessons: [
                    {
                        id: "genai-7-1",
                        title: "7.1 Why Python is the LLM Control Plane",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
            🐍 The Universal Remote
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            In 2026, Python is the operating system for AI. It connects the <strong>Brains</strong> (LLMs), the <strong>Memory</strong> (Vector DBs), and the <strong>Action</strong> (Tools).
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Ecosystem Dominance</h3>
            <p class="text-sm text-gray-400">
                Every major AI framework (LangChain, LlamaIndex, DSPy) and every model SDK (OpenAI, Anthropic) treats Python as a first-class citizen.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Async at Core</h3>
            <p class="text-sm text-gray-400">
                LLMs are I/O bound. Python's \`asyncio\` ecosystem allows you to orchestrate 100 parallel agent steps effortlessly.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-7-2",
                        title: "7.2 LLM Provider Landscape (Cloud & Local, Dec 2026)",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🌍 The 2026 Map</h2>

    <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700">
            <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center text-green-400 font-bold">O</div>
                <strong class="text-white">OpenAI (GPT-5.x)</strong>
            </div>
            <p class="text-xs text-gray-400">The "It just works" option. Best reasoning, expensive. <br><span class="text-green-500">Strength: Instruction Following</span></p>
        </div>

        <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700">
            <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-orange-900 flex items-center justify-center text-orange-400 font-bold">A</div>
                <strong class="text-white">Anthropic (Claude 4.5)</strong>
            </div>
            <p class="text-xs text-gray-400">The "Safe & Smart" option. Huge context, very "human" writing. <br><span class="text-orange-500">Strength: Coding & Writing</span></p>
        </div>

        <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700">
             <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-blue-400 font-bold">G</div>
                <strong class="text-white">Google (Gemini 2.5)</strong>
            </div>
            <p class="text-xs text-gray-400">The "Infinite Context" option. 2M+ tokens. Multimodal native. <br><span class="text-blue-500">Strength: Long Docs & Video</span></p>
        </div>
    </div>
    
    <div class="bg-gray-900/50 p-4 rounded-xl text-center border border-gray-700">
        <p class="text-sm text-gray-400">Plus: <strong>Mistral</strong> (Efficiency), <strong>Llama 4</strong> (Open Weights), <strong>Grok</strong> (Real-time).</p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-7-3",
                        title: "7.3 Unified Python Client Patterns",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔌 One Interface to Rule Them All</h2>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-red-400 block mb-2">The Anti-Pattern</strong>
        <p class="text-sm text-gray-500 mb-4">Hardcoding SDKs creates faster vendor lock-in than you realize.</p>
        <div class="bg-black/50 p-3 rounded text-xs text-gray-600 font-mono">
            if provider == "openai":<br>
            &nbsp;&nbsp;return openai.ChatCompletion(...)<br>
            elif provider == "anthropic":<br>
            &nbsp;&nbsp;return anthropic.messages.create(...)
        </div>
    </div>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-green-500/30">
        <strong class="text-green-400 block mb-2">The Pattern (Unified Client)</strong>
        <p class="text-sm text-gray-400 mb-4">Wrap providers in a protocol. Swap engines with one config change.</p>
         <div class="bg-black p-4 rounded text-xs text-green-300 font-mono">
            class LLMClient(Protocol):<br>
            &nbsp;&nbsp;async def generate(self, prompt: str) -> str: ...<br>
            <br>
            client = OpenAIClient() <span class="text-gray-500"># or AnthropicClient()</span>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-7-4",
                        title: "7.4 Making Your First Cloud LLM Call from Python",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📞 Hello, GPT-4</h2>
    
    <div class="bg-[#1e1e1e] p-8 rounded-3xl border border-gray-700 font-mono text-sm">
        <div class="text-gray-500 mb-2"># 1. Setup</div>
        <div class="text-blue-300 mb-4">from openai import AsyncOpenAI<br>client = AsyncOpenAI()</div>
        
        <div class="text-gray-500 mb-2"># 2. The Call</div>
        <div class="text-pink-400">response = await client.chat.completions.create(</div>
        <div class="pl-4 text-yellow-300">
            model="gpt-4o",<br>
            messages=[{"role": "user", "content": "Explain quantum physics like I'm 5."}],<br>
            temperature=0.7
        </div>
        <div class="text-pink-400">)</div>
        
        <div class="text-gray-500 mt-4 mb-2"># 3. The Output</div>
        <div class="text-green-300">print(response.choices[0].message.content)</div>
    </div>
    
    <div class="bg-blue-900/10 p-4 rounded-xl border-l-4 border-blue-500 text-sm text-gray-300">
        <strong>Pro Tip:</strong> Always dump \`response.usage\` to your logs. You need to know how many tokens you are burning per request.
    </div>
</div>
`
                    },
                    {
                        id: "genai-7-5",
                        title: "7.5 Async LLM Calls: Scaling Beyond One Request at a Time",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">⚡ Parallel Intelligence</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div>
            <h3 class="text-lg font-bold text-white mb-4">Sequential (Slow)</h3>
            <div class="flex flex-col gap-2 opacity-50">
                <div class="p-3 bg-red-900/20 border border-red-500 rounded text-center text-xs">Summarize Doc A (3s)</div>
                <div class="mx-auto h-4 w-0.5 bg-gray-600"></div>
                <div class="p-3 bg-red-900/20 border border-red-500 rounded text-center text-xs">Summarize Doc B (3s)</div>
                 <div class="mx-auto h-4 w-0.5 bg-gray-600"></div>
                <div class="p-3 bg-red-900/20 border border-red-500 rounded text-center text-xs">Total: 6s</div>
            </div>
        </div>

        <div>
            <h3 class="text-lg font-bold text-white mb-4">Parallel (Async)</h3>
             <div class="flex gap-2 items-center justify-center">
                <div class="flex flex-col gap-2 w-full">
                    <div class="p-3 bg-green-900/20 border border-green-500 rounded text-center text-xs">Summarize Doc A</div>
                     <div class="p-3 bg-green-900/20 border border-green-500 rounded text-center text-xs">Summarize Doc B</div>
                </div>
            </div>
             <div class="mt-4 text-center text-green-400 font-bold text-sm">Total: ~3.1s</div>
        </div>
    </div>
    
    <div class="bg-black p-4 rounded-xl border border-gray-800 font-mono text-xs text-blue-300 mt-6">
        tasks = [summarize(doc) for doc in docs]<br>
        results = await asyncio.gather(*tasks)
    </div>
</div>
`
                    },
                    {
                        id: "genai-7-6",
                        title: "7.6 Streaming Responses: ChatGPT-Style UX from Python",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-teal-900/40 to-green-900/40 border border-teal-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-teal-400 mb-4">🌊 Make it Flow</h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Streaming reduces <strong>Perceived Latency</strong>. Users see words instantly instead of staring at a spinner for 10 seconds.
        </p>
    </div>

    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <h3 class="text-lg font-bold text-white mb-4">How it works</h3>
        <div class="flex gap-2 overflow-x-auto pb-4">
             <div class="bg-gray-800 px-3 py-1 rounded text-xs text-white animate-pulse">Hel</div>
             <div class="bg-gray-800 px-3 py-1 rounded text-xs text-white animate-pulse delay-75">lo</div>
             <div class="bg-gray-800 px-3 py-1 rounded text-xs text-white animate-pulse delay-150">,</div>
             <div class="bg-gray-800 px-3 py-1 rounded text-xs text-white animate-pulse delay-200">World</div>
        </div>
         <div class="bg-black p-4 rounded-xl font-mono text-xs text-green-300 mt-4">
            async for chunk in client.chat.completions.create(..., stream=True):<br>
            &nbsp;&nbsp;print(chunk.choices[0].delta.content, end="")
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-7-7",
                        title: "7.7 Local Inference with Ollama, vLLM & Friends",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🏠 Bringing it Home</h2>
    
    <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700">
            <strong class="text-white text-lg block mb-2">Ollama</strong>
            <p class="text-xs text-gray-400">The "Docker for LLMs". <br><code>ollama run llama3</code>. Simplest dev tool.</p>
        </div>
         <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700">
            <strong class="text-white text-lg block mb-2">vLLM</strong>
            <p class="text-xs text-gray-400">Production-grade server. Paged Attention. 2x-4x faster than standard setups. Use for self-hosting.</p>
        </div>
         <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700">
            <strong class="text-white text-lg block mb-2">llama.cpp</strong>
            <p class="text-xs text-gray-400">The "It runs on a toaster" option. CPU inference for MacBooks and Edge devices.</p>
        </div>
    </div>
    
    <div class="bg-black p-4 rounded-xl border border-gray-800 text-sm text-center">
        <span class="text-white">Why Local?</span> 
        <span class="text-gray-400 mx-2">|</span>
        <span class="text-blue-400">Free Inference</span>
        <span class="text-gray-400 mx-2">|</span>
        <span class="text-blue-400">Total Privacy</span>
        <span class="text-gray-400 mx-2">|</span>
        <span class="text-blue-400">Offline</span>
    </div>
</div>
`
                    },
                    {
                        id: "genai-7-8",
                        title: "7.8 Designing an LLM Service Layer in Python",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🏛️ Architecture: The Service Layer</h2>
    
    <div class="bg-[#111] p-8 rounded-3xl border border-gray-800">
        <div class="flex flex-col items-center gap-4">
             <div class="px-6 py-2 bg-purple-900/50 border border-purple-500 rounded-lg text-white font-bold text-sm">FastAPI Endpoint</div>
             <div class="h-6 w-0.5 bg-gray-700"></div>
             
             <div class="w-full max-w-lg p-6 bg-gray-900 rounded-xl border border-gray-700">
                 <strong class="text-blue-400 block mb-4 text-center">LLM Service</strong>
                 <div class="grid grid-cols-2 gap-4">
                     <div class="p-3 bg-black rounded border border-gray-800 text-xs text-center text-gray-300">Router<br>(Pick Model)</div>
                     <div class="p-3 bg-black rounded border border-gray-800 text-xs text-center text-gray-300">Cache<br>(Redis)</div>
                     <div class="p-3 bg-black rounded border border-gray-800 text-xs text-center text-gray-300">Retries<br>(Tenacity)</div>
                     <div class="p-3 bg-black rounded border border-gray-800 text-xs text-center text-gray-300">Logger<br>(Token Count)</div>
                 </div>
             </div>
             
             <div class="h-6 w-0.5 bg-gray-700"></div>
             <div class="px-6 py-2 bg-green-900/50 border border-green-500 rounded-lg text-white font-bold text-sm">Provider API (OpenAI/Anthropic)</div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-7-9",
                        title: "7.9 Cost, Latency & Reliability Considerations in Code",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛡️ Production Readiness</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
            <h3 class="text-lg font-bold text-red-400 mb-2">Reliability (Retries)</h3>
            <p class="text-sm text-gray-400 mb-4">APIs fail. Networks blink. You need <strong>Exponential Backoff</strong>.</p>
            <div class="bg-black p-3 rounded font-mono text-xs text-red-300">
                @retry(stop=stop_after_attempt(3), wait=wait_exponential(min=1, max=10))<br>
                async def call_llm(...):
            </div>
        </div>
        
         <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
            <h3 class="text-lg font-bold text-yellow-400 mb-2">Cost Guardrails</h3>
            <p class="text-sm text-gray-400 mb-4">Don't let a loop bankrupt you.</p>
            <div class="bg-black p-3 rounded font-mono text-xs text-yellow-300">
                if total_tokens > DAILY_LIMIT:<br>
                &nbsp;&nbsp;raise BudgetExceededError()
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-7-10",
                        title: "7.10 Integrating LLMs into FastAPI Backends",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">⚡ The API Wrapper</h2>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 font-mono text-sm">
        <div class="text-purple-400 mb-2">@app.post("/chat")</div>
        <div class="text-blue-300">async def chat(req: ChatRequest):</div>
        <div class="pl-4 border-l border-gray-800 ml-2 text-gray-300">
            <span class="text-gray-500"># 1. Validate Input (Pydantic)</span><br>
            if len(req.message) > 5000: raise 400<br><br>
            
             <span class="text-gray-500"># 2. Call Service</span><br>
            response = await llm_service.generate(req.message)<br><br>
            
             <span class="text-gray-500"># 3. Return JSON</span><br>
            return {"reply": response}
        </div>
    </div>
    
    <p class="text-gray-400 text-sm">
        This is the standard pattern. The frontend never talks to OpenAI directly. Your backend controls the keys and the logic.
    </p>
</div>
`
                    },
                    {
                        id: "genai-7-11",
                        title: "7.11 Mini Project: Multi-Model Python Chat Backend",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">🤖 Lab: The Chat Server</h2>
        <p class="text-gray-300 mb-8">
            Build a FastAPI backend that can switch between GPT-4o and a local Llama 3 model based on a user flag.
        </p>

        <div class="space-y-4">
             <div class="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <span class="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-white shrink-0">1</span>
                <div>
                    <strong class="text-white block">Define Interface</strong>
                    <p class="text-xs text-gray-400">Create an abstract \`LLMProvider\` class.</p>
                </div>
            </div>
            
             <div class="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <span class="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-white shrink-0">2</span>
                <div>
                    <strong class="text-white block">Implement Providers</strong>
                    <p class="text-xs text-gray-400">One for OpenAI API, one for Ollama (localhost:11434).</p>
                </div>
            </div>

             <div class="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <span class="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-white shrink-0">3</span>
                <div>
                    <strong class="text-white block">Stream It</strong>
                    <p class="text-xs text-gray-400">Return a \`StreamingResponse\` from FastAPI.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-7-12",
                        title: "7.12 Module 7 Wrap-up: Python as Your AI Remote Control",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">🎮 Control Acquired</h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            You are no longer limited to ChatGPT's web UI. You can now build software that drives these models.
        </p>

        <div class="inline-grid grid-cols-2 gap-8 text-left max-w-lg mx-auto">
            <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Unlocked</strong>
                <h3 class="text-white text-lg font-bold mt-1">LLM Integration</h3>
                <p class="text-gray-400 text-sm">Unified Clients, Async, Streaming.</p>
            </div>
             <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Next Up</strong>
                <h3 class="text-white text-lg font-bold mt-1">Module 8</h3>
                <p class="text-gray-400 text-sm">Advanced Prompting (Chain of Thought).</p>
            </div>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m7():
    print(f"🔄 Injecting GenAI Module 7 (LLMs in Python)...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find Module 6.
    m6_title = 'title: "6. Transformers & Modern LLM Architecture"'
    m6_start = content.find(m6_title)
    
    if m6_start == -1:
        print("❌ Could not find Module 6 title.")
        return
        
    # 2. Find Module 6 End.
    m6_brace_start = content.rfind('{', 0, m6_start)
    
    open_braces = 0
    m6_end_idx = -1
    
    for i in range(m6_brace_start, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                m6_end_idx = i + 1
                break
                
    if m6_end_idx == -1:
        print("❌ Could not parse Module 6 end.")
        return
        
    print(f"✅ Found Module 6 End at {m6_end_idx}")

    # 3. Check for Existing M7 and Remove if present
    m7_title_marker = 'title: "7. Working with LLMs in Python"'
    m7_idx = content.find(m7_title_marker)
    
    if m7_idx != -1:
        print("🔄 Removing existing Module 7 before injection...")
        m7_brace_start = content.rfind('{', 0, m7_idx)
        # Scan for end
        open_b = 0
        m7_end = -1
        for i in range(m7_brace_start, len(content)):
             char = content[i]
             if char == '{': open_b += 1
             elif char == '}': 
                 open_b -= 1
                 if open_b == 0:
                     m7_end = i + 1
                     break
        
        if m7_end != -1:
            content = content[:m7_brace_start] + content[m7_end:]
            print("✅ Removed existing M7 block.")
            
            # Recalculate M6 position since content changed
            m6_start = content.find(m6_title)
            m6_brace_start = content.rfind('{', 0, m6_start)
            open_braces = 0
            m6_end_idx = -1
            for i in range(m6_brace_start, len(content)):
                char = content[i]
                if char == '{': open_braces += 1
                elif char == '}': 
                    open_braces -= 1
                    if open_braces == 0:
                        m6_end_idx = i + 1
                        break

    # 4. Inject
    final_content = content[:m6_end_idx] + new_module_7_content + content[m6_end_idx:]
    
    # 5. Clean up potential double commas "},, {"
    final_content = final_content.replace('},,', '},')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("✅ Module 7 (LLMs in Python) injected successfully!")

if __name__ == "__main__":
    update_genai_m7()
