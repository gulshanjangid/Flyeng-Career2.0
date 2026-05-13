import re

# 9 Lessons for "15. Capstones & Modern AI Tech Stacks"
# Content styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_15_content = """,
            {
                title: "15. Capstones & Modern AI Tech Stacks",
                lessons: [
                    {
                        id: "genai-15-1",
                        title: "15.1 Capstone Overview & Architecture Choices",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 border border-yellow-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-400 mb-4">
            🎓 The Final Boss
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Theory is over. It's time to build a portfolio that proves you are a <strong>Senior AI Engineer</strong>.
        </p>
    </div>

    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-white block mb-4">The Decision Matrix</strong>
         <div class="overflow-hidden rounded-xl border border-gray-700">
            <table class="w-full text-left text-sm text-gray-400">
                <thead class="bg-gray-900 text-white uppercase text-xs">
                    <tr>
                        <th class="p-3">Stack</th>
                        <th class="p-3">Best For</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-800 bg-[#1e1e1e]">
                    <tr>
                        <td class="p-3 font-mono text-blue-400">TanStack AI</td>
                        <td class="p-3">Production Web Apps (Type-Safe).</td>
                    </tr>
                    <tr>
                        <td class="p-3 font-mono text-green-400">LangChain + Next.js</td>
                        <td class="p-3">Complex RAG pipelines.</td>
                    </tr>
                    <tr>
                        <td class="p-3 font-mono text-purple-400">FastAPI + Streamlit</td>
                        <td class="p-3">Internal Tools & Research.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-15-2",
                        title: "15.2 TanStack AI Full-Stack Copilot (Web)",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">💻 Capstone A: Developer Copilot</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div>
            <h3 class="text-lg font-bold text-white mb-2">The Mission</h3>
            <p class="text-sm text-gray-400 mb-4">
                Build a clone of Cursor/V0. A chat interface that can write code and preview UI components in real-time.
            </p>
            <ul class="text-xs text-gray-500 list-disc list-inside space-y-1">
                <li><strong>Tech:</strong> TanStack Start, React, OpenAI.</li>
                <li><strong>Feature:</strong> "Generative UI" (Stream React components).</li>
            </ul>
        </div>
         <div class="bg-gray-900 p-4 rounded-xl border border-gray-700 flex items-center justify-center">
            <div class="text-center">
                 <div class="w-16 h-16 bg-blue-500 rounded-full mx-auto blur-xl opacity-20"></div>
                 <strong class="text-blue-400 relative -top-10 block">Architecture</strong>
                 <p class="text-[10px] text-gray-500 relative -top-8">Streaming Object -> Zod Schema -> React Prop</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-15-3",
                        title: "15.3 LangChain + Next.js RAG App (Web)",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📚 Capstone B: Knowledge Engine</h2>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-white block mb-4">The "Corporate Brain"</strong>
        <p class="text-sm text-gray-400 mb-6">
            Ingest 1,000 PDFs. Search them in < 100ms. Answer with citations.
        </p>
        
        <div class="flex gap-2 text-xs font-mono">
            <span class="bg-green-900/30 text-green-300 px-2 py-1 rounded border border-green-500/30">Pinecone</span>
            <span class="bg-white/10 text-white px-2 py-1 rounded border border-white/20">LangChain.js</span>
            <span class="bg-blue-900/30 text-blue-300 px-2 py-1 rounded border border-blue-500/30">Vercel AI SDK</span>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-15-4",
                        title: "15.4 FastAPI + Streamlit Prototyping Stack",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🧪 Capstone C: AI Research Lab</h2>
    
    <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
        <p class="text-gray-300 mb-6">
            Sometimes you need raw power, not pretty UI. Python backend + Simple frontend.
        </p>
        
        <div class="space-y-4">
            <div class="flex items-center gap-4">
                <span class="text-xl">🐍</span>
                <div>
                     <strong class="text-white text-sm">FastAPI Backend</strong>
                     <p class="text-xs text-gray-500">Async processing of heavy ML jobs (Pytorch/HuggingFace).</p>
                </div>
            </div>
             <div class="flex items-center gap-4">
                <span class="text-xl">📊</span>
                <div>
                     <strong class="text-white text-sm">Streamlit Frontend</strong>
                     <p class="text-xs text-gray-500">Sliders, charts, and text inputs. 10 lines of code.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-15-5",
                        title: "15.5 Vercel AI + React Native Mobile Copilot",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📱 Capstone D: Pocket Assistant</h2>
    
    <div class="bg-gradient-to-br from-purple-900/20 to-black p-6 rounded-2xl border border-purple-500/20">
        <div class="flex justify-between items-center mb-4">
            <strong class="text-purple-400">React Native (Expo)</strong>
            <span class="px-2 py-0.5 rounded text-[10px] bg-purple-500 text-black font-bold">iOS/Android</span>
        </div>
        <p class="text-sm text-gray-400">
            Bringing the "Her" experience to life. Voice-to-voice interaction using Vercel AI SDK.
        </p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-15-6",
                        title: "15.6 Agentic Python + SolidJS Multi-Agent System",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🤖 Capstone E: The Swarm</h2>
    
    <div class="relative bg-[#111] p-8 rounded-3xl border border-gray-800 text-center">
        <div class="absolute top-4 left-4 text-xs text-gray-600 font-mono">LangGraph</div>
        
        <div class="inline-flex gap-8">
             <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center border border-red-500 mb-2">1</div>
                <span class="text-xs text-red-300">Planner</span>
             </div>
             <div class="text-2xl text-gray-600">→</div>
             <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center border border-blue-500 mb-2">2</div>
                <span class="text-xs text-blue-300">Coder</span>
             </div>
             <div class="text-2xl text-gray-600">→</div>
             <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center border border-green-500 mb-2">3</div>
                <span class="text-xs text-green-300">Reviewer</span>
             </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-15-7",
                        title: "15.7 From Simple Bots to AI Website Builder",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🏗️ Evolution</h2>
    
    <div class="space-y-4">
        <div class="p-4 bg-gray-900 rounded-lg border-l-4 border-gray-500">
            <strong class="text-gray-300 block mb-1">Level 1: Chatbot</strong>
            <p class="text-xs text-gray-500">Text in, Text out.</p>
        </div>
        <div class="p-4 bg-gray-900 rounded-lg border-l-4 border-blue-500">
            <strong class="text-white block mb-1">Level 2: RAG App</strong>
            <p class="text-xs text-gray-400">Text in, Doc Search, Text out.</p>
        </div>
         <div class="p-4 bg-gray-900 rounded-lg border-l-4 border-purple-500 shadow-lg shadow-purple-900/20">
            <strong class="text-purple-300 block mb-1">Level 3: Website Builder</strong>
            <p class="text-xs text-gray-400">Text in, <strong>Working Application</strong> out.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-15-8",
                        title: "15.8 MCP-Style Servers & Tool Ecosystems",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔌 The Tool Protocol</h2>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-white block mb-4">Model Context Protocol (MCP)</strong>
        <p class="text-sm text-gray-400 mb-6">
            Stop writing custom tools for every agent. Write a "Tool Server" once, let Claude, GPT, and Llama all use it.
        </p>
        
        <div class="grid grid-cols-2 gap-4">
             <div class="bg-black p-3 rounded border border-gray-700 text-center">
                 <strong class="text-white text-xs">Filesystem Server</strong>
             </div>
             <div class="bg-black p-3 rounded border border-gray-700 text-center">
                 <strong class="text-white text-xs">GitHub Server</strong>
             </div>
             <div class="bg-black p-3 rounded border border-gray-700 text-center">
                 <strong class="text-white text-xs">Postgres Server</strong>
             </div>
             <div class="bg-black p-3 rounded border border-gray-700 text-center">
                 <strong class="text-white text-xs">Slack Server</strong>
             </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-15-9",
                        title: "15.9 Final Portfolio Assembly",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-teal-900/40 to-blue-900/40 border border-teal-500/30 p-10 rounded-3xl text-center">
        <h2 class="text-4xl font-bold text-white mb-6">🎉 You Made It.</h2>
        
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            You have traversed the entire landscape of Generative AI. 
            <br>From <strong>Python Basics</strong> to <strong>Multi-Agent Swarms</strong>.
        </p>

        <div class="inline-block bg-black px-8 py-4 rounded-full border border-teal-500/50 shadow-[0_0_30px_rgba(20,184,166,0.2)]">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 font-bold text-lg tracking-wide">
                GENAI ENGINEER: READY
            </span>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m15():
    print(f"🔄 Injecting GenAI Module 15 (Capstones)...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find Module 14.
    m14_title = 'title: "14. Deployment, Evaluation & Monitoring of AI Systems"'
    m14_start = content.find(m14_title)
    
    if m14_start == -1:
        print("❌ Could not find Module 14 title.")
        return
        
    # 2. Find Module 14 End.
    m14_brace_start = content.rfind('{', 0, m14_start)
    
    open_braces = 0
    m14_end_idx = -1
    
    for i in range(m14_brace_start, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                m14_end_idx = i + 1
                break
                
    if m14_end_idx == -1:
        print("❌ Could not parse Module 14 end.")
        return
        
    print(f"✅ Found Module 14 End at {m14_end_idx}")

    # 3. Check for Existing M15 and Remove if present
    m15_title_marker = 'title: "15. Capstones & Modern AI Tech Stacks"'
    m15_idx = content.find(m15_title_marker)
    
    if m15_idx != -1:
        print("🔄 Removing existing Module 15 before injection...")
        m15_brace_start = content.rfind('{', 0, m15_idx)
        # Scan for end
        open_b = 0
        m15_end = -1
        for i in range(m15_brace_start, len(content)):
             char = content[i]
             if char == '{': open_b += 1
             elif char == '}': 
                 open_b -= 1
                 if open_b == 0:
                     m15_end = i + 1
                     break
        
        if m15_end != -1:
            content = content[:m15_brace_start] + content[m15_end:]
            print("✅ Removed existing M15 block.")
            
            # Recalculate M14 position
            m14_start = content.find(m14_title)
            m14_brace_start = content.rfind('{', 0, m14_start)
            open_braces = 0
            m14_end_idx = -1
            for i in range(m14_brace_start, len(content)):
                char = content[i]
                if char == '{': open_braces += 1
                elif char == '}': 
                    open_braces -= 1
                    if open_braces == 0:
                        m14_end_idx = i + 1
                        break

    # 4. Inject
    final_content = content[:m14_end_idx] + new_module_15_content + content[m14_end_idx:]
    
    # 5. Clean up potential double commas "},, {"
    final_content = final_content.replace('},,', '},')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("✅ Module 15 (Capstones) injected successfully!")

if __name__ == "__main__":
    update_genai_m15()
