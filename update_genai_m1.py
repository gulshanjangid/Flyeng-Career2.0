import re
import textwrap

file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

# New Module 1 Data (Rich Content)
new_module_content = """
            {
                title: "1. Introduction to Generative AI & The New Computing Era",
                lessons: [
                    {
                        id: "genai-1-1",
                        title: "1.1 What is Generative AI?",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            ✨ Creation, Not Just Classification
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            <strong>Generative AI</strong> models created new text, images, audio, video, code, and even molecules by learning patterns from massive datasets.
        </p>
    </div>

    <h3 class="text-2xl font-bold text-white mt-8 mb-4">The Paradigm Shift</h3>
    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 opacity-70">
            <h4 class="text-xl font-bold text-gray-500 mb-2">Old AI (Discriminative)</h4>
            <p class="text-gray-400">
                "Is this email spam?"<br>
                "Is this image a cat?"<br>
                <strong>Classifies</strong> existing data.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <h4 class="text-xl font-bold text-purple-400 mb-2">Generative AI</h4>
            <p class="text-gray-300">
                "Write a cold email for this startup."<br>
                "Design a logo for a cat cafe."<br>
                <strong>Creates</strong> new data.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-1-2",
                        title: "1.2 The Shift: From Information to Intelligence",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🌐 The Evolution of the Web</h2>
    
    <div class="space-y-4">
        <div class="flex items-center gap-4 bg-black/50 p-4 rounded-xl border border-gray-800">
            <span class="text-2xl">📖</span>
            <div>
                <strong class="text-gray-300">Web 1.0</strong>
                <p class="text-sm text-gray-500">Read-Only. Static Pages. "The Library".</p>
            </div>
        </div>
        <div class="flex items-center gap-4 bg-black/50 p-4 rounded-xl border border-gray-800">
            <span class="text-2xl">✍️</span>
            <div>
                <strong class="text-blue-400">Web 2.0</strong>
                <p class="text-sm text-gray-500">Read-Write. User Generated Content (Social Media). "The Square".</p>
            </div>
        </div>
        <div class="flex items-center gap-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/30">
            <span class="text-3xl">🤖</span>
            <div>
                <strong class="text-purple-400 text-lg">The Intelligence Layer (2026)</strong>
                <p class="text-gray-300 mt-1">
                    AI agents read, write, act, and decide.
                    Enterprises move from "Search & Dashboards" to <strong>Systems of Action</strong>.
                </p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-1-3",
                        title: "1.3 Why GenAI Matters (The Four Forces)",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🚀 The Four Forces Driving 2026</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border-l-4 border-blue-500">
            <h3 class="text-xl font-bold text-white mb-2">1. Knowledge Automation</h3>
            <p class="text-gray-400 text-sm">
                60-70% of knowledge work (drafting, summarizing, analysis) can be automated.
                <em>"The end of the blank page."</em>
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border-l-4 border-pink-500">
            <h3 class="text-xl font-bold text-white mb-2">2. Hyper-Personalization</h3>
            <p class="text-gray-400 text-sm">
                Individualized marketing, learning curricula, and product experiences generated on the fly for millions of users.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border-l-4 border-green-500">
            <h3 class="text-xl font-bold text-white mb-2">3. Multimodal Understanding</h3>
            <p class="text-gray-400 text-sm">
                Models that don't just read text, but <em>see</em> images, <em>hear</em> audio, and <em>watch</em> video.
                One pipeline for all data types.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border-l-4 border-orange-500">
            <h3 class="text-xl font-bold text-white mb-2">4. Agentic Workflows</h3>
            <p class="text-gray-400 text-sm">
                Moving from "Chatbots" to <strong>Agents</strong>.
                Systems that plan, use tools, and coordinate over long time horizons to complete complex tasks.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-1-4",
                        title: "1.4 Industry Applications (2026 Deep Dive)",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-4xl font-bold text-white mb-8">🏭 GenAI in the Real World</h2>

    <div class="space-y-6">
        <!-- Healthcare -->
        <div class="bg-black/40 p-6 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-colors">
            <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl">🏥</span>
                <h3 class="text-xl font-bold text-red-400">Healthcare</h3>
            </div>
            <p class="text-gray-400">Diagnostic support, synthetic medical data generation, auto-drafting discharge summaries, and empathetic patient communication bots.</p>
        </div>

        <!-- Finance -->
        <div class="bg-black/40 p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-colors">
            <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl">💰</span>
                <h3 class="text-xl font-bold text-green-400">Finance & Banking</h3>
            </div>
            <p class="text-gray-400">Fraud pattern analysis, automated compliance reports, document review (KYC/AML), and personalized financial advisory.</p>
        </div>

        <!-- Software -->
        <div class="bg-black/40 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
            <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl">💻</span>
                <h3 class="text-xl font-bold text-blue-400">Software & IT</h3>
            </div>
            <p class="text-gray-400">Coding copilots (writing 40%+ of code), incident root cause analysis, log summarization, and automated documentation.</p>
        </div>
    </div>
</div>
`
                    },
                     {
                        id: "genai-1-5",
                        title: "1.5 AI vs ML vs DL vs GenAI",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🧅 Peeling the Onion</h2>
    
    <div class="relative flex justify-center py-8">
        <!-- Visualization of concentric circles -->
        <div class="w-[300px] h-[300px] rounded-full border-2 border-gray-700 flex items-center justify-center relative bg-gray-900/20">
            <span class="absolute top-4 text-gray-500 font-bold">Artificial Intelligence</span>
            
            <div class="w-[220px] h-[220px] rounded-full border-2 border-blue-500/30 flex items-center justify-center relative bg-blue-900/10">
                <span class="absolute top-4 text-blue-400 font-bold text-sm">Machine Learning</span>
                
                <div class="w-[150px] h-[150px] rounded-full border-2 border-purple-500/50 flex items-center justify-center relative bg-purple-900/10">
                    <span class="absolute top-4 text-purple-400 font-bold text-xs bg-black px-1 rounded">Deep Learning</span>
                    
                    <div class="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                        <span class="text-white font-bold text-[10px] text-center leading-tight">GenAI</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-4 text-sm">
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800">
            <strong class="text-white block mb-1">AI</strong>
            <span class="text-gray-500">Systems that perceive, reason, act.</span>
        </div>
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800">
            <strong class="text-blue-400 block mb-1">ML</strong>
            <span class="text-gray-500">Learning patterns from data (prediction).</span>
        </div>
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800">
             <strong class="text-purple-400 block mb-1">Deep Learning</strong>
             <span class="text-gray-500">Neural networks (vision, speech, language).</span>
        </div>
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800">
             <strong class="text-pink-400 block mb-1">Generative AI</strong>
             <span class="text-gray-500">Transformers creating new content.</span>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-1-6",
                        title: "1.6 Large Language Models (LLMs) in 2026",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-8 rounded-3xl border border-white/10">
        <h2 class="text-3xl font-bold text-white mb-6">🧠 The Brains: LLMs</h2>
        <p class="text-gray-400 mb-6">
            Models trained on trillions of tokens to predict the next token.
            Through RLHF (Reinforcement Learning from Human Feedback), they learn to follow instructions.
        </p>

        <h3 class="text-xl font-bold text-white mb-4">The 2026 Landscape</h3>
        <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-green-900/10 border border-green-500/20">
                <strong class="text-green-400 block mb-2">Proprietary Giants</strong>
                <ul class="text-sm text-gray-300 space-y-1">
                    <li>• GPT-5.x (OpenAI)</li>
                    <li>• Claude 4.5 Opus (Anthropic)</li>
                    <li>• Gemini 2.5/3 (Google)</li>
                    <li>• Grok 4 (xAI)</li>
                </ul>
            </div>
             <div class="p-4 rounded-xl bg-orange-900/10 border border-orange-500/20">
                <strong class="text-orange-400 block mb-2">Open Weights / Local</strong>
                <ul class="text-sm text-gray-300 space-y-1">
                    <li>• Llama 4 (Meta)</li>
                    <li>• Mistral 3</li>
                    <li>• DeepSeek V3.2</li>
                    <li>• Qwen & Gemma 2</li>
                </ul>
            </div>
        </div>

        <div class="mt-6">
            <h4 class="text-white font-bold mb-2">Key Specs that Matter</h4>
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 rounded-full bg-gray-800 text-xs text-gray-300 border border-gray-700">Context Window (1M+ Tokens)</span>
                <span class="px-3 py-1 rounded-full bg-gray-800 text-xs text-gray-300 border border-gray-700">Tool Calling</span>
                <span class="px-3 py-1 rounded-full bg-gray-800 text-xs text-gray-300 border border-gray-700">Multimodality</span>
                <span class="px-3 py-1 rounded-full bg-gray-800 text-xs text-gray-300 border border-gray-700">Latency vs Cost</span>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-1-7",
                        title: "1.7 Skills Required for a GenAI Engineer (Post-2026)",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white">🧰 The New Skill Matrix</h2>

    <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border-t-4 border-blue-500">
            <h3 class="text-lg font-bold text-white mb-2">Technical Core</h3>
            <p class="text-sm text-gray-400">
                Python (Backend), TypeScript (Frontend).
                Understanding HTTP, JSON, APIs.
                <strong>You still need to be a good software engineer.</strong>
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border-t-4 border-purple-500">
            <h3 class="text-lg font-bold text-white mb-2">AI Specifics</h3>
            <p class="text-sm text-gray-400">
                Prompt Engineering, RAG Design, Vector DBs, Embeddings.
                Agent Frameworks (LangGraph, CrewAI).
                <strong>Eval & Observability.</strong>
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border-t-4 border-green-500">
            <h3 class="text-lg font-bold text-white mb-2">Product & Logic</h3>
            <p class="text-sm text-gray-400">
                Problem framing.
                Cost/Latency trade-offs.
                Security (Prompt Injection).
                <strong>Shipping & Iterating quickly.</strong>
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-1-8",
                        title: "1.8 The 2026 GenAI Tech Stack",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🏗️ What We Will Build With</h2>
    
    <div class="space-y-4">
        <div class="flex gap-4 items-start">
            <div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 text-xl">☁️</div>
            <div>
                <strong class="text-white">Models (The Brain)</strong>
                <p class="text-sm text-gray-400">OpenAI, Anthropic, Google, DeepSeek via unified SDKs.</p>
            </div>
        </div>
         <div class="flex gap-4 items-start">
            <div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 text-xl">🎼</div>
            <div>
                <strong class="text-white">Orchestration (The Glue)</strong>
                <p class="text-sm text-gray-400">LangChain, LangGraph, LlamaIndex, DSPy. Chaining steps together.</p>
            </div>
        </div>
         <div class="flex gap-4 items-start">
            <div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 text-xl">💾</div>
            <div>
                <strong class="text-white">Vector Memory</strong>
                <p class="text-sm text-gray-400">Pinecone, Weaviate, Qdrant, Chroma. Long-term semantic memory.</p>
            </div>
        </div>
         <div class="flex gap-4 items-start">
            <div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 text-xl">🛠️</div>
            <div>
                <strong class="text-white">Dev & Ops</strong>
                <p class="text-sm text-gray-400">Next.js/React, Vercel AI SDK, LangSmith, Helicone (Monitoring).</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                     {
                        id: "genai-1-9",
                        title: "1.9 Career Paths in the GenAI Era",
                        duration: "5 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛤️ Pick Your Lane</h2>

    <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-[#111] p-4 rounded-xl border border-gray-800">
            <strong class="text-purple-400 block mb-1">GenAI / LLM Engineer</strong>
            <p class="text-sm text-gray-500">Focuses on pipelines, RAG, Agents. The core builder.</p>
        </div>
         <div class="bg-[#111] p-4 rounded-xl border border-gray-800">
            <strong class="text-blue-400 block mb-1">AI Product Engineer</strong>
            <p class="text-sm text-gray-500">Full-stack + AI. Optimizes UX/UI for AI interactions.</p>
        </div>
         <div class="bg-[#111] p-4 rounded-xl border border-gray-800">
            <strong class="text-green-400 block mb-1">RAG / Knowledge Engineer</strong>
            <p class="text-sm text-gray-500">Master of data retrieval, chunking strategies, and enterprise search.</p>
        </div>
         <div class="bg-[#111] p-4 rounded-xl border border-gray-800">
            <strong class="text-orange-400 block mb-1">AI Platform / LLMOps</strong>
            <p class="text-sm text-gray-500">Infrastructure, GPU management (if local), deployment, and evaluating at scale.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-1-10",
                        title: "1.10 Why Coding Still Matters in 2026+",
                        duration: "5 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-red-900/10 border border-red-500/20 p-8 rounded-3xl">
        <h2 class="text-2xl font-bold text-white mb-4">🚫 "The End of Coding" is a Myth</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
            Yes, AI can generate code. But who verifies it? Who stitches it together? Who fixes the security holes?
        </p>

        <div class="space-y-4">
            <div class="flex items-center gap-3">
                <span class="text-green-400">✔</span>
                <p class="text-sm text-gray-400">No-code tools are great for <strong>Prototypes</strong>.</p>
            </div>
            <div class="flex items-center gap-3">
                <span class="text-green-400">✔</span>
                <p class="text-sm text-gray-400">Code is required for <strong>Production</strong>, edge cases, and custom integrations.</p>
            </div>
            <div class="flex items-center gap-3">
                <span class="text-green-400">✔</span>
                <p class="text-sm text-gray-400">
                    The highest paid engineers in 2026 are those who can <strong>Architect</strong> systems and <strong>Direct</strong> the AI to write the boilerplate.
                </p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-1-11",
                        title: "1.11 The Journey Ahead in This Course",
                        duration: "5 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <div class="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 p-10 rounded-3xl">
         <div class="absolute inset-0 bg-[url('https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif')] opacity-20 bg-cover mix-blend-overlay pointer-events-none"></div>
         <h2 class="text-4xl font-bold text-white mb-6 relative z-10">🗺️ Your Roadmap</h2>
         
         <ol class="relative z-10 space-y-4 text-gray-200 font-mono text-sm max-w-2xl border-l-2 border-white/20 pl-6">
            <li class="pl-2 relative"><span class="absolute -left-[30px] w-4 h-4 rounded-full bg-blue-500"></span>Module 1: Concepts & Foundations (You are here)</li>
            <li class="pl-2 opacity-80">Module 2: Python Refresh for AI</li>
            <li class="pl-2 opacity-80">Module 3: Math & Data Prep</li>
            <li class="pl-2 opacity-70">Module 4: Prompt Engineering & Basics</li>
            <li class="pl-2 opacity-60">Module 5: RAG (Retrieval Augmented Generation)</li>
            <li class="pl-2 opacity-50">Module 6: Agents & Orchestration</li>
            <li class="pl-2 opacity-40">Module 7: Deployment & Production</li>
         </ol>

         <div class="mt-8 bg-black/40 p-4 rounded-xl border border-white/20 inline-block relative z-10">
            <p class="text-white font-bold">The Promise:</p>
            <p class="text-sm text-gray-300">By the end, you won't just chat with models. You will build them into products.</p>
         </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_module_1():
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        # 1. Find 'genai:' key
        genai_start_idx = -1
        for i, line in enumerate(lines):
            if "genai:" in line and "const" not in line: # Avoid random matches
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

        print(f"✅ Found 'modules: [' at line {modules_start_idx + 1}")

        # 3. Find the first module block inside modules
        # It should start with '{' immediately or on next lines
        module_1_start_idx = -1
        for i in range(modules_start_idx + 1, len(lines)):
            if "{" in lines[i]:
                module_1_start_idx = i
                break
        
        if module_1_start_idx == -1:
             print("❌ Could not find start of Module 1.")
             return
             
        print(f"✅ Found Module 1 Start at line {module_1_start_idx + 1}")

        # 4. Find the END of Module 1
        # We need to count matching braces from module_1_start_idx
        # This is a bit tricky with simple string matching. 
        # But we know the module ends with "}," usually followed by another "{" or "]"
        
        brace_count = 0
        module_1_end_idx = -1
        
        for i in range(module_1_start_idx, len(lines)):
            line = lines[i]
            brace_count += line.count('{')
            brace_count -= line.count('}')
            
            if brace_count == 0:
                module_1_end_idx = i
                break
        
        if module_1_end_idx == -1:
             print("❌ Could not find end of Module 1 (braces didn't balance).")
             return

        print(f"✅ Found Module 1 End at line {module_1_end_idx + 1}")
        
        # 5. Replace lines [module_1_start_idx : module_1_end_idx + 1]
        # Check if the last line has a comma
        has_comma = lines[module_1_end_idx].strip().endswith(',')
        
        # Construct new content block
        # Add necessary indentation (12 spaces usually for modules inside genai)
        # We can just put the new string directly, but let's be neat.
        
        # We will assume the replacement string is a valid JS object block
        # We need to ensure comma handling if there are more modules
        
        new_lines = lines[:module_1_start_idx]
        new_lines.append(new_module_content.strip() + ("," if has_comma else "") + "\n")
        new_lines.extend(lines[module_1_end_idx+1:])
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
            
        print("✅ Successfully updated GenAI Module 1!")

    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    update_module_1()
