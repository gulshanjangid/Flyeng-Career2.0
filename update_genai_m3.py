import re
import textwrap

file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

# New Module 3 Data (Rich Content)
new_module_content = """
            {
                title: "3. Core Python for Generative AI Engineers",
                lessons: [
                    {
                        id: "genai-3-1",
                        title: "3.1 Why Python is the GenAI Control Layer",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">
            🐍 The Lingua Franca of AI
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Python isn't just a language; it's the <strong>operating system</strong> for Artificial Intelligence. from <code>PyTorch</code> training loops to <code>LangChain</code> agent definitions.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-xl font-bold text-white mb-2">Why not Rust/Go/JS?</h3>
            <p class="text-gray-400 text-sm">
                While Rust is used for low-level inference engines (like <code>llama.cpp</code>), Python binds everything together.
                <br><br>
                <em>"C++ does the heavy lifting. Python calls the shots."</em>
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-blue-500/20">
            <h3 class="text-xl font-bold text-blue-400 mb-2">The Ecosystem</h3>
            <ul class="space-y-2 text-sm text-gray-400">
                <li>• <strong>HuggingFace</strong>: 99% of models are Python-first.</li>
                <li>• <strong>Data Science</strong>: Pandas, NumPy are non-negotiable.</li>
                <li>• <strong>GenAI Frames</strong>: DSPy, CrewAI, LangGraph are Python-native.</li>
            </ul>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-2",
                        title: "3.2 Python Setup for AI Engineering (2026)",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛠️ The Proper Modern Setup</h2>
    
    <div class="space-y-4">
        <div class="bg-black/50 p-6 rounded-xl border border-gray-800 flex gap-4">
            <div class="text-3xl">📦</div>
            <div>
                <strong class="text-green-400 block mb-1">uv / Poetry (Not just pip)</strong>
                <p class="text-sm text-gray-400">
                    In 2026, we use <code>uv</code> (by Astral) for lightning-fast package management. 
                    Old <code>pip install</code> leads to dependency hell in complex AI projects.
                </p>
            </div>
        </div>
        
        <div class="bg-black/50 p-6 rounded-xl border border-gray-800 flex gap-4">
            <div class="text-3xl">🐍</div>
            <div>
                <strong class="text-blue-400 block mb-1">Python 3.11+</strong>
                <p class="text-sm text-gray-400">
                    Required for significant async speedups and better error messages.
                    Don't stay on 3.8.
                </p>
            </div>
        </div>

        <div class="bg-black/50 p-6 rounded-xl border border-gray-800 flex gap-4">
            <div class="text-3xl">📓</div>
            <div>
                <strong class="text-orange-400 block mb-1">Jupyter vs VS Code</strong>
                <p class="text-sm text-gray-400">
                    <strong>Jupyter</strong> for exploration/vis (charts, model outputs).<br>
                    <strong>VS Code (.py)</strong> for production systems, APIs, and agents.
                </p>
            </div>
        </div>
    </div>
    
    <div class="bg-[#1a1a1a] p-4 rounded-lg border border-gray-700 font-mono text-sm text-gray-300">
        <span class="text-gray-500"># The modern init command</span><br>
        <span class="text-green-400">uv</span> init my-agent-swarm
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-3",
                        title: "3.3 Python Essentials BUT GenAI-First",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔍 Refocusing the Basics</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border-l-4 border-purple-500">
            <h3 class="text-lg font-bold text-white mb-2">Decorators</h3>
            <p class="text-sm text-gray-400">
                Crucial for tracing, logging, and retry logic.
                <br><code>@retry(stop=stop_after_attempt(3))</code> is standard for calling flaky APIs.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border-l-4 border-green-500">
            <h3 class="text-lg font-bold text-white mb-2">Iterators & Generators</h3>
            <p class="text-sm text-gray-400">
                Essential for <strong>Streaming</strong> responses. 
                LLMs output tokens one by one; your code must handle <code>yield</code>.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border-l-4 border-pink-500">
            <h3 class="text-lg font-bold text-white mb-2">Context Managers</h3>
            <p class="text-sm text-gray-400">
                <code>with get_openai_callback() as cb:</code>
                <br>Used heavily for tracking token usage and managing DB connections.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-4",
                        title: "3.4 Python Data Types for AI",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-8 rounded-3xl border border-gray-800">
        <h2 class="text-3xl font-bold text-white mb-6">💾 Structured vs Unstructured</h2>
        
        <table class="w-full text-left text-sm text-gray-400">
            <thead class="bg-gray-900 uppercase text-gray-500">
                <tr>
                    <th class="p-3">Type</th>
                    <th class="p-3">GenAI Use Case</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-800">
                <tr>
                    <td class="p-3 font-mono text-purple-400">str</td>
                    <td class="p-3 text-white">The Atom. Prompts, completions, messy inputs.</td>
                </tr>
                <tr>
                    <td class="p-3 font-mono text-blue-400">list[float]</td>
                    <td class="p-3 text-white highlight-text"><strong>Embeddings</strong>. Vectors of 1536+ dimensions.</td>
                </tr>
                 <tr>
                    <td class="p-3 font-mono text-green-400">dict / JSON</td>
                    <td class="p-3 text-white"><strong>Tool Calls</strong>. Structured outputs from models.</td>
                </tr>
                <tr>
                    <td class="p-3 font-mono text-yellow-400">bytes</td>
                    <td class="p-3 text-white">Image/Audio data before processing.</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-5",
                        title: "3.5 Collections & Pydantic",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛡️ Pydantic: The Spine of GenAI</h2>
    
    <div class="bg-gradient-to-br from-red-900/40 to-pink-900/40 border border-red-500/30 p-8 rounded-2xl">
        <p class="text-lg text-gray-200">
            "GenAI is just finding creative ways to turn sloppy text strings into valid Pydantic objects."
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
        <div>
            <h3 class="text-xl font-bold text-white mb-4">Why Pydantic?</h3>
            <ul class="space-y-3 text-sm text-gray-400 list-disc pl-4">
                <li>Validates LLM outputs (Did it return a number or "twenty"?).</li>
                <li><strong>Instructor</strong> library relies entirely on Pydantic.</li>
                <li>LangChain schemas use Pydantic V2.</li>
            </ul>
        </div>
        <div class="bg-[#1e1e1e] p-4 rounded-lg border border-gray-700 font-mono text-xs overflow-x-auto">
            <span class="text-pink-400">class</span> <span class="text-yellow-300">UserQuery</span>(BaseModel):<br>
            &nbsp;&nbsp;intent: <span class="text-blue-400">str</span><br>
            &nbsp;&nbsp;confidence: <span class="text-blue-400">float</span> = Field(ge=0, le=1)<br>
            &nbsp;&nbsp;keywords: <span class="text-blue-400">list</span>[<span class="text-blue-400">str</span>]
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-6",
                        title: "3.6 Modular Coding for AI Systems",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🧩 Project Structure</h2>
    
    <div class="bg-[#111] p-6 rounded-xl border border-gray-800">
        <div class="font-mono text-sm text-gray-400 space-y-2">
            <div class="text-blue-400">src/</div>
            <div class="pl-4">├── agents/ <span class="text-gray-600"># LangGraph definitions</span></div>
            <div class="pl-4">├── tools/ <span class="text-gray-600"># Function calls (Weather, Search)</span></div>
            <div class="pl-4">├── prompts/ <span class="text-gray-600"># .py or .yaml files (Don't hardcode strings!)</span></div>
            <div class="pl-4">├── rag/ <span class="text-gray-600"># Ingestion & Retrieval logic</span></div>
            <div class="pl-4">└── utils/ <span class="text-gray-600"># LLM clients, loggers</span></div>
        </div>
    </div>

    <p class="text-gray-300">
        <strong>The Golden Rule:</strong> Separate your prompts from your logic. 
        Prompts change frequently (like content); logic changes rarely (like code).
    </p>
</div>
`
                    },
                    {
                        id: "genai-3-7",
                        title: "3.7 File Handling as Dataset Ingestion",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📂 Extract, Transform, Load (ETL)</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-[#111] p-5 rounded-xl border border-gray-700">
            <strong class="text-white block mb-2">Unstructured</strong>
            <div class="flex gap-2 flex-wrap">
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">.pdf</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">.docx</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">.txt</span>
            </div>
            <p class="text-xs text-gray-500 mt-2">Requires raw text extraction (PyPDF2, Unstructured.io).</p>
        </div>

        <div class="bg-[#111] p-5 rounded-xl border border-gray-700">
             <strong class="text-white block mb-2">Semi-Structured</strong>
            <div class="flex gap-2 flex-wrap">
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">.md</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">.html</span>
            </div>
            <p class="text-xs text-gray-500 mt-2">Best for RAG. maintain headers and chunks.</p>
        </div>

        <div class="bg-[#111] p-5 rounded-xl border border-gray-700">
             <strong class="text-white block mb-2">Structured</strong>
            <div class="flex gap-2 flex-wrap">
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">.csv</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">.json</span>
            </div>
             <p class="text-xs text-gray-500 mt-2">Requires careful row-to-string conversion.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-8",
                        title: "3.8 Functions as AI Behaviors",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🦾 Tools = Functions</h2>
    
    <div class="p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl">
        <p class="text-lg text-gray-300">
            When you define a Python function with type hints and a docstring, you are defining a <strong>Tool</strong> for the AI.
        </p>
    </div>

    <div class="bg-[#1e1e1e] p-4 rounded-xl font-mono text-sm border border-gray-700">
        <div class="text-gray-500"># The Docstring is part of the Prompt!</div>
        <span class="text-pink-400">def</span> <span class="text-yellow-300">search_database</span>(query: <span class="text-blue-400">str</span>) -> <span class="text-blue-400">str</span>:<br>
        &nbsp;&nbsp;<span class="text-green-300">\"\"\"<br>
        &nbsp;&nbsp;Use this to look up customer orders by ID.<br>
        &nbsp;&nbsp;Input query should be an Order ID like ORD-123.<br>
        &nbsp;&nbsp;\"\"\"</span><br>
        &nbsp;&nbsp;<span class="text-pink-400">pass</span>
    </div>
    
    <p class="text-sm text-gray-400">
        The LLM reads the docstring to know <em>when</em> and <em>how</em> to call this function.
    </p>
</div>
`
                    },
                    {
                        id: "genai-3-9",
                        title: "3.9 OOP for Agents & Model Wrappers",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🏗️ Object-Oriented Agents</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <strong class="text-white text-lg">State Management</strong>
            <p class="text-sm text-gray-400 mt-2">
                Agents need to remember things. Classes (`self.memory`, `self.tools`) are the perfect container for agent state history.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <strong class="text-white text-lg">Abstraction</strong>
            <p class="text-sm text-gray-400 mt-2">
                We create a generic `LLMNode` class and inherit from it for `SearchNode`, `ReviewNode`, etc. enabling polymorphic workflows.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-10",
                        title: "3.10 Async Python (Must-Have Skill)",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-red-900/10 border border-red-500/20 p-8 rounded-3xl">
        <h2 class="text-2xl font-bold text-white mb-4">⚡ Why Asyncio Matters</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
            LLMs are slow IO-bound operations. Waiting synchronously for GPT-4 (which takes 10s) blocks your entire app.
        </p>

        <div class="space-y-4">
            <div class="flex items-center gap-3">
                <span class="text-green-400 text-xl">🚀</span>
                <p class="text-sm text-gray-400"><strong>async def main():</strong> Run 50 prompts in parallel.</p>
            </div>
            <div class="flex items-center gap-3">
                <span class="text-red-400 text-xl">🐌</span>
                <p class="text-sm text-gray-400"><strong>def main():</strong> Run 50 prompts one... by... one... (Takes hours).</p>
            </div>
        </div>
        
        <div class="mt-6 bg-black p-4 rounded border border-gray-700 overflow-x-auto">
             <code class="text-xs font-mono text-blue-300">
                await asyncio.gather(*[process_doc(doc) for doc in docs])
             </code>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-11",
                        title: "3.11 Typing System (2026 Standard)",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📏 Strict Typing</h2>
    
    <p class="text-gray-300">
        In the age of AI coding assistants, <strong>Types</strong> are how you communicate intent to the AI that is writing code for you.
    </p>

    <div class="grid grid-cols-2 gap-4">
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800">
            <strong class="text-white">Generic[T]</strong>
            <p class="text-xs text-gray-500">For building reusable RAG pipelines.</p>
        </div>
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800">
            <strong class="text-white">Optional[str]</strong>
            <p class="text-xs text-gray-500">Handling null returns from tools.</p>
        </div>
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800">
            <strong class="text-white">Union[A, B]</strong>
            <p class="text-xs text-gray-500">When an LLM might return Text OR an Image.</p>
        </div>
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800">
            <strong class="text-white">Protocol</strong>
            <p class="text-xs text-gray-500">Duck typing for flexible agent components.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-12",
                        title: "3.12 Interfacing with APIs",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔌 The API Web</h2>
    
    <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800">
            <span class="text-2xl font-bold text-gray-600">1</span>
            <div>
                <strong class="text-white">REST</strong>
                <p class="text-sm text-gray-500">Most model providers (OpenAI, Anthropic).</p>
            </div>
        </div>
        <div class="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800">
            <span class="text-2xl font-bold text-gray-600">2</span>
            <div>
                <strong class="text-white">SSE (Server Sent Events)</strong>
                <p class="text-sm text-gray-500">The protocol behind <strong>Streaming</strong> text.</p>
            </div>
        </div>
        <div class="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800">
            <span class="text-2xl font-bold text-gray-600">3</span>
            <div>
                <strong class="text-white">GraphQL</strong>
                <p class="text-sm text-gray-500">Less common for LLMs, but used in some knowledge graphs.</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-3-13",
                        title: "3.13 The Python -> JS Bridge",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-gray-900 to-black p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">🌉 Bridging the Gap</h2>
        
        <div class="flex items-center justify-center gap-6 mb-8">
            <div class="text-center">
                <div class="text-4xl">🐍</div>
                <strong class="text-yellow-400">Python Backend</strong>
                <div class="text-xs text-gray-500">LangGraph Agent</div>
            </div>
            <div class="text-2xl text-gray-600 animate-pulse">↔️</div>
            <div class="text-center">
                <div class="text-4xl">⚛️</div>
                <strong class="text-blue-400">Next.js Frontend</strong>
                <div class="text-xs text-gray-500">React UI</div>
            </div>
        </div>

        <p class="text-sm text-gray-400 max-w-lg mx-auto">
            In Module 4+, we will build the <strong>Backend in Python</strong> (FastAPI) and consume it from our <strong>Frontend in TypeScript</strong>. This is the industry standard stack.
        </p>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_module_3():
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        # 1. Find 'genai:' key
        genai_start_idx = -1
        for i, line in enumerate(lines):
            if "genai:" in line and "const" not in line:
                genai_start_idx = i
                break
        
        if genai_start_idx == -1:
            print("❌ Could not find 'genai:' object start.")
            return

        print(f"✅ Found 'genai:' at line {genai_start_idx + 1}")

        # 2. Find 'modules: [' inside genai
        modules_start_idx = -1
        for i in range(genai_start_idx, len(lines)):
            if "modules: [" in lines[i]:
                modules_start_idx = i
                break
        
        if modules_start_idx == -1:
             print("❌ Could not find 'modules: [' inside genai.")
             return
             
        # 3. WE NEED THE THIRD MODULE BLOCK (Index 2)
        # We assume valid structure: modules: [ {M1}, {M2}, {M3} ... ]
        
        brace_level = 0
        module_2_found = False
        module_2_end_idx = -1
        
        # Start searching after "modules: ["
        current_idx = modules_start_idx + 1
        
        # We need to skip 2 modules 
        modules_skipped = 0
        
        for i in range(current_idx, len(lines)):
            line = lines[i]
            
            # Count top-level module braces
            if "{" in line:
                 if brace_level == 0:
                     modules_skipped += 1
                 brace_level += line.count('{')
            
            brace_level -= line.count('}')
            
            if brace_level == 0 and modules_skipped == 2:
                # We found the end of the 2nd module
                module_2_end_idx = i
                break
        
        if module_2_end_idx == -1:
             print(f"❌ Could not see past 2 modules. Skipped: {modules_skipped}")
             return
             
        print(f"✅ Module 2 ends at line {module_2_end_idx + 1}")

        # 4. Find start of Module 3
        module_3_start_idx = -1
        for i in range(module_2_end_idx + 1, len(lines)):
            if "{" in lines[i]:
                module_3_start_idx = i
                break
        
        if module_3_start_idx == -1:
             print("❌ Could not find start of Module 3.")
             return

        print(f"✅ Found Module 3 Start at line {module_3_start_idx + 1}")

        # 5. Find end of Module 3
        brace_level = 0
        module_3_end_idx = -1
        
        for i in range(module_3_start_idx, len(lines)):
            line = lines[i]
            brace_level += line.count('{')
            brace_level -= line.count('}')
            
            if brace_level == 0:
                module_3_end_idx = i
                break
        
        if module_3_end_idx == -1:
             print("❌ Could not find end of Module 3.")
             return

        print(f"✅ Found Module 3 End at line {module_3_end_idx + 1}")
        
        # 6. Replace Module 3 content
        has_comma = lines[module_3_end_idx].strip().endswith(',')
        
        new_lines = lines[:module_3_start_idx]
        new_lines.append(new_module_content.strip() + ("," if has_comma else "") + "\n")
        new_lines.extend(lines[module_3_end_idx+1:])
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
            
        print("✅ Successfully updated GenAI Module 3!")

    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    update_module_3()
