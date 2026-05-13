import re
import textwrap

# 12 Lessons for "3. Core Python for AI Engineers (Hybrid Track)"
# Content heavily styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_3_content = """
            {
                title: "3. Core Python for AI Engineers (Hybrid Track)",
                lessons: [
                    {
                        id: "genai-3-1",
                        title: "3.1 Why Python Still Dominates AI (2026)",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            🐍 The Control Plane of AI
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            In 2026, Python isn't just a language. It is the <strong>operating system</strong> for Artificial Intelligence.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
            <div class="text-4xl mb-4">🧠</div>
            <h3 class="text-lg font-bold text-white mb-2">Orchestration</h3>
            <p class="text-sm text-gray-400">
                Models are just API calls. Python is the glue that binds them into intelligent workflows (LangChain, LlamaIndex).
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-colors">
             <div class="text-4xl mb-4">⚙️</div>
            <h3 class="text-lg font-bold text-white mb-2">Production</h3>
            <p class="text-sm text-gray-400">
                From fast prototypes (Streamlit) to enterprise backends (FastAPI), Python powers the entire lifecycle.
            </p>
        </div>
    </div>
    
    <div class="bg-gray-900/50 p-6 rounded-xl border-l-4 border-yellow-500">
        <strong class="text-white block mb-1">Not "Basics"</strong>
        <p class="text-sm text-gray-400">
            This module skips <code>print("Hello")</code>. We focus on <strong>Asyncio, Types, and System Design</strong>—the skills required for AI Engineering.
        </p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-2",
                        title: "3.2 Modern Python Setup for AI Work",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛠️ The 2026 AI Stack</h2>

    <div class="space-y-4">
        <div class="bg-[#1e1e1e] p-6 rounded-xl border border-gray-700 flex gap-5 items-start">
            <div class="bg-blue-900/20 p-3 rounded-lg text-blue-400 font-mono font-bold">python>=3.11</div>
            <div>
                <strong class="text-white block">The Runtime</strong>
                <p class="text-sm text-gray-400">Required for <code>asyncio.TaskGroup</code> and massive speed improvements.</p>
            </div>
        </div>

         <div class="bg-[#1e1e1e] p-6 rounded-xl border border-gray-700 flex gap-5 items-start">
            <div class="bg-purple-900/20 p-3 rounded-lg text-purple-400 font-mono font-bold">uv</div>
            <div>
                <strong class="text-white block">The Manager</strong>
                <p class="text-sm text-gray-400">Forget pip/poetry. <strong>uv</strong> (by Astral) is 10-100x faster for dependency resolution.</p>
            </div>
        </div>

        <div class="bg-[#1e1e1e] p-6 rounded-xl border border-gray-700 flex gap-5 items-start">
            <div class="bg-green-900/20 p-3 rounded-lg text-green-400 font-mono font-bold">ruff</div>
            <div>
                <strong class="text-white block">The Linter</strong>
                <p class="text-sm text-gray-400">Replaces flake8, black, and isort. Keeps your AI code clean instantly.</p>
            </div>
        </div>
    </div>

    <div class="bg-black p-6 rounded-xl border border-gray-800 font-mono text-sm relative group">
        <div class="absolute top-2 right-2 text-xs text-gray-600">terminal</div>
        <span class="text-green-400">$</span> uv init my-ai-agent <br>
        <span class="text-green-400">$</span> cd my-ai-agent <br>
        <span class="text-green-400">$</span> uv add openai langchain fastapi uvicorn <br>
        <span class="text-gray-500"># Done in 200ms ⚡</span>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-3",
                        title: "3.3 Python 3.11+ Features That Matter for AI",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            🚀 Speed & Safety
        </h2>
        
        <div class="grid gap-6">
            <div>
                <h3 class="text-xl font-bold text-white mb-2">1. TaskGroup (Structured Concurrency)</h3>
                <p class="text-gray-300 mb-4">Essential for managing multiple parallel LLM calls safely. If one fails, they all cancel gracefully.</p>
                <div class="bg-black p-4 rounded-lg border border-gray-800 font-mono text-xs">
                    <span class="text-purple-400">async with</span> asyncio.TaskGroup() <span class="text-purple-400">as</span> tg:<br>
                    &nbsp;&nbsp;tg.create_task(call_gpt4())<br>
                    &nbsp;&nbsp;tg.create_task(call_claude3())
                </div>
            </div>

            <div>
                 <h3 class="text-xl font-bold text-white mb-2">2. Exception Groups</h3>
                <p class="text-gray-300 mb-4">Catch multiple errors at once—crucial when 3 out of 10 parallel tool calls fail.</p>
            </div>
            
             <div>
                 <h3 class="text-xl font-bold text-white mb-2">3. Self Type</h3>
                <p class="text-gray-300">Clean builder patterns for Agent configuration chains.</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-4",
                        title: "3.4 Data Structures, Types & Dataclasses for LLM Workflows",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">💾 Structured Intelligence</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <strong class="text-white text-lg block mb-4">The Messy Reality (Dicts)</strong>
            <p class="text-sm text-gray-400 mb-4">Raw JSON from APIs is untyped and dangerous.</p>
            <div class="bg-black p-3 rounded font-mono text-xs text-red-300">
                data = {"ans": "42", "conf": 0.9}<br>
                val = data["answer"] <span class="text-gray-500"># KeyError!</span>
            </div>
        </div>
        
         <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <strong class="text-green-400 text-lg block mb-4">The Solution (Pydantic)</strong>
            <p class="text-sm text-gray-400 mb-4">Validation + Type Hints everywhere.</p>
             <div class="bg-black p-3 rounded font-mono text-xs text-green-300">
                class Response(BaseModel):<br>
                &nbsp;&nbsp;ans: str<br>
                &nbsp;&nbsp;conf: float
            </div>
        </div>
    </div>

    <div class="p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl">
        <h3 class="text-lg font-bold text-white mb-2">Why this matters for Agents?</h3>
        <p class="text-gray-300 text-sm">
            LLMs are stochastic. Pydantic forces them into <strong>deterministic structures</strong>. If you want reliable agents, you need strict typing.
        </p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-5",
                        title: "3.5 Async IO Basics for AI Engineers",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-8 rounded-3xl border border-gray-800">
        <h2 class="text-3xl font-bold text-white mb-6">⏳ The I/O Bottleneck</h2>
        
        <p class="text-gray-300 text-lg mb-8">
            AI Engineering is 99% I/O wait time. Waiting for OpenAI, waiting for Pinecone, waiting for Scraping.
        </p>

        <div class="flex flex-col gap-4">
             <div class="relative h-12 bg-gray-900 rounded-full overflow-hidden flex items-center px-4">
                <div class="absolute left-0 top-0 bottom-0 bg-red-500/20 w-full animate-pulse"></div>
                <span class="relative z-10 text-white font-mono">Sync: [Wait_______][Wait_______][Wait_______] (30s)</span>
            </div>
            
             <div class="relative h-12 bg-gray-900 rounded-full overflow-hidden flex items-center px-4">
                <div class="absolute left-0 top-0 bottom-0 bg-green-500/20 w-1/3"></div>
                 <span class="relative z-10 text-white font-mono">Async: [Wait_______] (10s)</span>
                 <span class="absolute right-4 text-green-400 text-xs font-bold">PARALLEL</span>
            </div>
        </div>
        
        <div class="mt-8 bg-black p-6 rounded-xl border border-gray-700 font-mono text-sm text-blue-300">
            <span class="text-pink-400">async def</span> <span class="text-yellow-300">get_embedding</span>(text):<br>
            &nbsp;&nbsp;<span class="text-pink-400">return await</span> openai.Embedding.acreate(input=text)
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-6",
                        title: "3.6 Essential Async Patterns for LLM & RAG Pipelines",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white mb-6">🔄 Patterns for Scale</h2>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-3">1. The "Gather" Class</h3>
            <p class="text-sm text-gray-400 mb-4">Fire off 5 independent research queries at once.</p>
            <div class="bg-black p-3 rounded font-mono text-xs text-gray-300">
                results = await asyncio.gather(<br>
                &nbsp;&nbsp;search("Tesla stock"),<br>
                &nbsp;&nbsp;search("Tesla news"),<br>
                &nbsp;&nbsp;search("Elon Musk tweets")<br>
                )
            </div>
        </div>

         <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-3">2. The "Producer-Consumer" Queue</h3>
            <p class="text-sm text-gray-400 mb-4">For processing 10,000 documents without crashing API limits.</p>
            <div class="bg-black p-3 rounded font-mono text-xs text-gray-300">
                queue = asyncio.Queue()<br>
                <span class="text-gray-500"># Workers pull from queue continuously</span>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-7",
                        title: "3.7 Working with HTTP, JSON & APIs (LLM-Ready)",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔌 Talking to the World</h2>
    
    <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
        <strong class="text-white text-xl block mb-4">httpx > requests</strong>
        <p class="text-gray-300 mb-6">In 2026, we use <code>httpx</code> for full async support. Do not block the event loop with <code>requests</code>.</p>
        
        <div class="bg-black p-4 rounded-xl border border-gray-800 font-mono text-sm">
            <span class="text-pink-400">async with</span> httpx.AsyncClient() <span class="text-pink-400">as</span> client:<br>
            &nbsp;&nbsp;resp = <span class="text-pink-400">await</span> client.post(<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"https://api.openai.com/v1/...",<br>
            &nbsp;&nbsp;&nbsp;&nbsp;json={...},<br>
            &nbsp;&nbsp;&nbsp;&nbsp;headers={"Authorization": ...}<br>
            &nbsp;&nbsp;)
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-8",
                        title: "3.8 Intro to FastAPI: The AI Backend Standard",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-teal-900/40 to-green-900/40 border border-teal-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-teal-400 mb-4">⚡ FastAPI</h2>
        <p class="text-xl text-white">The gold standard for AI API servers.</p>
        
        <ul class="grid grid-cols-2 gap-4 mt-6">
            <li class="flex items-center gap-3 text-gray-300">
                <span class="bg-teal-500/20 text-teal-400 p-1 rounded">✓</span> Async Native
            </li>
            <li class="flex items-center gap-3 text-gray-300">
                <span class="bg-teal-500/20 text-teal-400 p-1 rounded">✓</span> Pydantic Integrated
            </li>
            <li class="flex items-center gap-3 text-gray-300">
                <span class="bg-teal-500/20 text-teal-400 p-1 rounded">✓</span> Auto Swagger UI
            </li>
            <li class="flex items-center gap-3 text-gray-300">
                <span class="bg-teal-500/20 text-teal-400 p-1 rounded">✓</span> WebSocket Support
            </li>
        </ul>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-9",
                        title: "3.9 Structuring an AI-Focused Python Project",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🏗️ The Blueprint</h2>
    
    <div class="bg-[#111] p-8 rounded-3xl border border-gray-800 font-mono text-sm leading-8">
        <div class="text-blue-400 font-bold">my-ai-app/</div>
        <div class="pl-4 border-l border-gray-800 ml-2">
            <div>├── <span class="text-yellow-300">src/</span></div>
            <div class="pl-4 border-l border-gray-800 ml-2">
                <div>├── <span class="text-green-300">api/</span> <span class="text-gray-600"># FastAPI routers (/chat, /rag)</span></div>
                <div>├── <span class="text-green-300">core/</span> <span class="text-gray-600"># Config, logging, security</span></div>
                <div>├── <span class="text-green-300">services/</span> <span class="text-gray-600"># The Brains</span></div>
                 <div class="pl-4 border-l border-gray-800 ml-2">
                    <div>├── llm.py <span class="text-gray-600"># Model wrappers</span></div>
                    <div>├── vector.py <span class="text-gray-600"># Pinecone/Qdrant logic</span></div>
                </div>
                <div>├── <span class="text-green-300">schemas/</span> <span class="text-gray-600"># Pydantic models</span></div>
            </div>
            <div>├── .env</div>
            <div>├── pyproject.toml</div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-10",
                        title: "3.10 Configuration, Secrets & Environments",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔐 Secret Management</h2>
    
    <div class="bg-red-900/10 border border-red-500/20 p-6 rounded-2xl text-center">
        <p class="text-lg text-red-300">NEVER commit <code>OPENAI_API_KEY</code> to GitHub.</p>
    </div>

    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <h3 class="text-xl font-bold text-white mb-4">pydantic-settings</h3>
        <p class="text-gray-400 text-sm mb-4">Use strongly typed configuration.</p>
        
        <div class="bg-black p-4 rounded-xl font-mono text-xs text-green-300">
            class Settings(BaseSettings):<br>
            &nbsp;&nbsp;openai_api_key: SecretStr<br>
            &nbsp;&nbsp;environment: str = "dev"<br><br>
            settings = Settings() <span class="text-gray-500"># Auto-loads from .env</span>
        </div>
    </div>
</div>
`
                    },
                     {
                        id: "genai-3-11",
                        title: "3.11 Mini Project: Your First AI-Ready Python Service",
                        duration: "25 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-indigo-900/40 to-blue-900/40 border border-indigo-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">🚀 Lab: Echo Bot API</h2>
        <p class="text-gray-300 mb-8">
            You will build a fully functional FastAPI service that accepts a text prompt and returns a simulated AI response, structured correctly.
        </p>

        <div class="space-y-4">
            <div class="flex items-center gap-4">
                <span class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">1</span>
                <p class="text-gray-300">Setup Project & Env (uv)</p>
            </div>
             <div class="flex items-center gap-4">
                <span class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">2</span>
                <p class="text-gray-300">Define <code>ChatRequest</code> and <code>ChatResponse</code> (Pydantic)</p>
            </div>
             <div class="flex items-center gap-4">
                <span class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">3</span>
                <p class="text-gray-300">Create <code>POST /chat</code> endpoint (FastAPI)</p>
            </div>
             <div class="flex items-center gap-4">
                <span class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">4</span>
                <p class="text-gray-300">Test with Swagger UI / curl</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-12",
                        title: "3.12 Module 3 Wrap-up: From Python Scripts to AI Services",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">🎉 Foundation Set</h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            You now have the professional tooling to build <strong>Scalable AI Systems</strong>, not just fragile scripts.
        </p>

        <div class="inline-grid grid-cols-2 gap-8 text-left max-w-lg mx-auto">
            <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Achieved</strong>
                <h3 class="text-white text-lg font-bold mt-1">Python Control Plane</h3>
                <p class="text-gray-400 text-sm">Async, FastAPI, Pydantic.</p>
            </div>
             <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Next Up</strong>
                <h3 class="text-white text-lg font-bold mt-1">Module 4</h3>
                <p class="text-gray-400 text-sm">Working with LLM APIs & RAG.</p>
            </div>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m3_v2():
    print(f"🔄 Starting GenAI Module 3 (v2 Hybrid Track) update...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find the Module 3 block.
    # We can identify it by title or position. Since we just updated it, title is "3. Core Python for Generative AI Engineers".
    # BUT we are replacing it with "3. Core Python for AI Engineers (Hybrid Track)".
    # So we search for the OLD title.
    
    old_title = 'title: "3. Core Python for Generative AI Engineers",'
    module_marker = content.find(old_title)
    
    if module_marker == -1:
        print("❌ Could not find the existing Module 3 title. Trying partial...")
        old_title_alt = 'title: "3. Core Python'
        module_marker = content.find(old_title_alt)
        if module_marker == -1:
             print("❌ Could not find Module 3 at all. Aborting.")
             return

    # Find Start: Reverse search for '{'
    start_idx = content.rfind('{', 0, module_marker)
    
    # Find End: Loop forward counting braces to match the start "{"
    # We start scanning from start_idx
    
    open_braces = 0
    end_idx = -1
    
    for i in range(start_idx, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                end_idx = i + 1 # Include the closing brace
                break
                
    if end_idx == -1:
        print("❌ Could not parse module boundaries (brace mismatch).")
        return
        
    print(f"✅ Identified Module 3 block: {start_idx} to {end_idx}")
    
    # Construct Replacement
    # We replace content[start_idx:end_idx] with new_module_3_content.strip()
    
    # Note: textwrap.dedent isn't strictly needed on the big block if we defined it cleanly, 
    # but `new_module_3_content` has indentation. Let's strip it carefully.
    
    clean_replacement = new_module_3_content.strip()
    
    new_file_content = content[:start_idx] + clean_replacement + content[end_idx:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_file_content)
        
    print("✅ Module 3 successfully updated to Hybrid Track (v2)!")

if __name__ == "__main__":
    update_genai_m3_v2()
