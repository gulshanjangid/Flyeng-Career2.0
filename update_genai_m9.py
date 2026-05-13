import re

# 12 Lessons for "9. AI Agents & Automation"
# Content styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_9_content = """,
            {
                title: "9. AI Agents & Automation",
                lessons: [
                    {
                        id: "genai-9-1",
                        title: "9.1 What Are AI Agents (2026 Reality)?",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 border border-emerald-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
            🤖 Agency: The Next Leap
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Prompting is asking for an answer. Agency is asking for a <strong>Result</strong>. Agents plan, use tools, and loop until the job is done.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Static Workflow</h3>
            <p class="text-sm text-gray-400">
                Code: <span class="font-mono text-gray-500">if A then B else C.</span><br>
                Rigid. Breaks if "D" happens.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Agentic Workflow</h3>
            <p class="text-sm text-gray-400">
                Code: <span class="font-mono text-gray-500">Use tools X, Y, Z to solve Goal.</span><br>
                Adaptive. Figures out the path at runtime.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-9-2",
                        title: "9.2 Agent Architecture: Brains, Tools, Memory, Environment",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🧠 The Anatomy of an Agent</h2>

    <div class="relative bg-[#1e1e1e] p-8 rounded-3xl border border-gray-700 flex flex-col gap-6 items-center">
        <!-- The Brain -->
        <div class="bg-gradient-to-b from-purple-900 to-purple-800 p-6 rounded-full w-32 h-32 flex items-center justify-center border-4 border-purple-500 shadow-xl shadow-purple-900/50 z-10">
            <strong class="text-white text-xl">LLM</strong>
        </div>
        
        <!-- Connections -->
        <div class="w-full grid grid-cols-3 gap-4 text-center relative">
             <div class="absolute top-[-20px] left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gray-600"></div> <!-- Neck -->
             
             <!-- Components -->
             <div class="p-4 bg-black rounded-xl border border-blue-500/30">
                 <strong class="text-blue-400 block mb-1">Tools</strong>
                 <p class="text-xs text-gray-500">APIs, Search, Calculator</p>
             </div>
             
             <div class="p-4 bg-black rounded-xl border border-green-500/30">
                 <strong class="text-green-400 block mb-1">Memory</strong>
                 <p class="text-xs text-gray-500">Vector DB, Chat History</p>
             </div>
             
             <div class="p-4 bg-black rounded-xl border border-yellow-500/30">
                 <strong class="text-yellow-400 block mb-1">Planner</strong>
                 <p class="text-xs text-gray-500">Decomposition, Critique</p>
             </div>
        </div>
    </div>
    
    <div class="text-center text-sm text-gray-400">
        "The LLM is the CPU. The Context Window is RAM. The Tools are Peripherals." — Andrej Karpathy
    </div>
</div>
`
                    },
                    {
                        id: "genai-9-3",
                        title: "9.3 Function / Tool Calling: The Hands of the Agent",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛠️ Giving Models Hands</h2>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-white text-lg block mb-4">How it works (JSON Schema)</strong>
        <p class="text-sm text-gray-400 mb-4">You describing your API to the LLM. It replies with a JSON object to call that API.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
             <div class="bg-black/50 p-3 rounded border border-gray-700 font-mono text-xs text-blue-300">
                <span class="text-gray-500"># You send:</span><br>
                tools = [{<br>
                   &nbsp;&nbsp;"name": "get_weather",<br>
                   &nbsp;&nbsp;"parameters": { "city": "str" }<br>
                }]
             </div>
             <div class="bg-black/50 p-3 rounded border border-gray-700 font-mono text-xs text-green-300">
                <span class="text-gray-500"># LLM replies:</span><br>
                {<br>
                   &nbsp;&nbsp;"tool_calls": [{<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;"name": "get_weather",<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;"args": { "city": "Paris" }<br>
                   &nbsp;&nbsp;}]<br>
                }
             </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-9-4",
                        title: "9.4 Tooling Best Practices & Safety",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛡️ Safe Tooling</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-red-900/10 border border-red-500/20 p-6 rounded-2xl">
            <h3 class="text-lg font-bold text-red-400 mb-2">The Danger Zone</h3>
            <ul class="text-sm text-gray-400 space-y-2">
                <li>• Infinite Loops (Agent keeps buying socks)</li>
                <li>• SQL Injection (via tool args)</li>
                <li>• Resource Exhaustion</li>
            </ul>
        </div>

        <div class="bg-green-900/10 border border-green-500/20 p-6 rounded-2xl">
            <h3 class="text-lg font-bold text-green-400 mb-2">The Guardrails</h3>
            <ul class="text-sm text-gray-400 space-y-2">
                <li>• <strong>Human-in-the-loop:</strong> "Approve transfer?"</li>
                <li>• <strong>Read-Only First:</strong> Don't give DELETE access blindly.</li>
                <li>• <strong>Timeouts:</strong> Hard limit of 10 steps.</li>
            </ul>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-9-5",
                        title: "9.5 Agent Frameworks Landscape (2026)",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🗺️ Choosing Your Stack</h2>
    
    <div class="overflow-hidden rounded-2xl border border-gray-800">
        <table class="w-full text-left text-sm text-gray-400">
            <thead class="bg-gray-900 text-white uppercase text-xs">
                <tr>
                    <th class="p-4">Framework</th>
                    <th class="p-4">Philosophy</th>
                    <th class="p-4">Best For</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-800 bg-[#111]">
                <tr>
                    <td class="p-4 font-bold text-blue-400">LangGraph</td>
                    <td class="p-4">State Machines (Graphs)</td>
                    <td class="p-4">Production, Control, Cyclical flows.</td>
                </tr>
                <tr>
                    <td class="p-4 font-bold text-orange-400">CrewAI</td>
                    <td class="p-4">Role-Playing Teams</td>
                    <td class="p-4">Creative tasks, Multi-agent collab.</td>
                </tr>
                 <tr>
                    <td class="p-4 font-bold text-green-400">LlamaIndex</td>
                    <td class="p-4">Data-Centric</td>
                    <td class="p-4">RAG Agents, Document processing.</td>
                </tr>
                 <tr>
                    <td class="p-4 font-bold text-purple-400">DSPy</td>
                    <td class="p-4">Optimized Programs</td>
                    <td class="p-4">High reliability, weirdly specific constraints.</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`
                    },
                    {
                        id: "genai-9-6",
                        title: "9.6 LangChain & LangGraph: Graph-Based Agent Workflows",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">🕸️ Thinking in Graphs</h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Chains (A -> B -> C) are too simple. Agents need Loops (A -> B -> A). LangGraph makes <strong>Cycles</strong> explicit.
        </p>
    </div>

    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 flex justify-center">
         <div class="flex gap-4 items-center text-sm font-bold text-gray-300">
             <div class="p-4 bg-black border border-gray-600 rounded-full">Start</div>
             <div class="text-gray-600">→</div>
             <div class="p-4 bg-blue-900/50 border border-blue-500 rounded text-blue-100">Agent Node</div>
             <div class="text-gray-600">⇄</div>
             <div class="p-4 bg-yellow-900/50 border border-yellow-500 rounded text-yellow-100">Tools Node</div>
             <div class="text-gray-600">→</div>
             <div class="p-4 bg-green-900/50 border border-green-500 rounded-full text-green-100">End</div>
         </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-9-7",
                        title: "9.7 Multi-Agent Systems: Roles, Collaboration & Handoffs",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🤝 The Team Approach</h2>
    
    <div class="bg-[#1e1e1e] p-8 rounded-3xl border border-gray-700">
        <strong class="text-white text-lg block mb-6 text-center">Software Development Squad</strong>
        
        <div class="flex flex-wrap justify-center gap-6">
            <div class="w-32 p-4 bg-blue-900/20 border border-blue-500 rounded-xl text-center">
                <span class="text-2xl">👨‍💻</span>
                <strong class="block text-blue-400 mt-2 text-sm">Coder</strong>
                <p class="text-xs text-gray-500">Writes Functions</p>
            </div>
             <div class="w-32 p-4 bg-purple-900/20 border border-purple-500 rounded-xl text-center">
                <span class="text-2xl">🕵️‍♀️</span>
                <strong class="block text-purple-400 mt-2 text-sm">Reviewer</strong>
                <p class="text-xs text-gray-500">Finds Bugs</p>
            </div>
             <div class="w-32 p-4 bg-yellow-900/20 border border-yellow-500 rounded-xl text-center">
                <span class="text-2xl">📑</span>
                <strong class="block text-yellow-400 mt-2 text-sm">Doc Writer</strong>
                <p class="text-xs text-gray-500">Explains API</p>
            </div>
        </div>
        
        <div class="mt-8 p-4 bg-black/50 rounded-xl text-center text-sm text-gray-400 border border-gray-800">
            <strong>Handoff Pattern:</strong> The Coder passes context to Reviewer. If Reviewer rejects, context goes back to Coder.
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-9-8",
                        title: "9.8 Memory for Agents: Short-Term, Long-Term & RAG",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">💾 Total Recall</h2>
    
    <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-700">
            <strong class="text-white block mb-2">Short-Term</strong>
            <p class="text-xs text-gray-400 mb-2">The current conversation history.</p>
            <span class="px-2 py-1 bg-gray-800 rounded text-[10px] text-gray-300">RAM</span>
        </div>
         <div class="bg-[#111] p-5 rounded-2xl border border-gray-700">
            <strong class="text-white block mb-2">Long-Term</strong>
            <p class="text-xs text-gray-400 mb-2">User preferences, past sessions.</p>
            <span class="px-2 py-1 bg-blue-900 rounded text-[10px] text-blue-300">Database</span>
        </div>
         <div class="bg-[#111] p-5 rounded-2xl border border-gray-700">
            <strong class="text-white block mb-2">Knowledge (RAG)</strong>
            <p class="text-xs text-gray-400 mb-2">Company policies, technical docs.</p>
            <span class="px-2 py-1 bg-green-900 rounded text-[10px] text-green-300">Vector Store</span>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-9-9",
                        title: "9.9 Observability & Evaluation for Agents",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-pink-900/40 to-red-900/40 border border-pink-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400 mb-4">
            🔍 The Black Box Problem
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            When an agent loops 50 times and spends $10, you need to know exactly <strong>Why</strong>.
        </p>
    </div>

    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <h3 class="text-lg font-bold text-white mb-4">Tracing Tools</h3>
        <p class="text-sm text-gray-400 mb-6">Tools like LangSmith/Langfuse allow you to replay every thought.</p>
        
        <div class="space-y-2 font-mono text-xs">
            <div class="p-2 bg-gray-800 rounded flex justify-between"><span>Step 1: Planner</span> <span class="text-green-400">2.1s</span></div>
            <div class="p-2 bg-gray-800 rounded flex justify-between"><span>Step 2: Tool(Search)</span> <span class="text-green-400">1.5s</span></div>
            <div class="p-2 bg-red-900/50 rounded flex justify-between text-white border border-red-500"><span>Step 3: Error (Parsing)</span> <span class="text-red-300">0.1s</span></div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-9-10",
                        title: "9.10 Practical Use Cases: Agents in Real Workflows",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">💼 Agents at Work</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
            <h3 class="text-lg font-bold text-blue-400 mb-2">Customer Support Triage</h3>
            <p class="text-sm text-gray-400">
                Agent reads ticket -> Categorizes -> Checks User Status in DB -> Drafts Reply or Escalates to Slack.
            </p>
        </div>
        
         <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
            <h3 class="text-lg font-bold text-green-400 mb-2">Data Analyst</h3>
            <p class="text-sm text-gray-400">
                Agent writes SQL -> Executes it -> Fixes syntax errors -> Plots chart with Python -> Generates Report.
            </p>
        </div>
        
         <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
            <h3 class="text-lg font-bold text-purple-400 mb-2">Personal Recruiter</h3>
            <p class="text-sm text-gray-400">
                Agent scours LinkedIn -> Matches Resume -> Drafts Personalized Outreach -> Schedules Call.
            </p>
        </div>
        
         <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
            <h3 class="text-lg font-bold text-yellow-400 mb-2">Code Migration</h3>
            <p class="text-sm text-gray-400">
                Agent scans repo -> Identifies deprecated function X -> Rewrites to function Y -> Runs Tests -> Commits.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-9-11",
                        title: "9.11 Mini Project: Your First Tool-Using Python Agent",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-indigo-900/40 to-violet-900/40 border border-indigo-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">🛠️ Lab: Build a Researcher</h2>
        <p class="text-gray-300 mb-8">
            Build a Python agent that can search the web and save notes to a file.
        </p>

        <div class="space-y-4">
             <div class="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <span class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white shrink-0">1</span>
                <div>
                    <strong class="text-white block">Define Tools</strong>
                    <p class="text-xs text-gray-400">\`duckduckgo_search\` and \`save_to_file\`.</p>
                </div>
            </div>
            
             <div class="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <span class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white shrink-0">2</span>
                <div>
                    <strong class="text-white block">The Loop</strong>
                    <p class="text-xs text-gray-400">While not Done: Get LLM Action -> Execute Tool -> Add to History.</p>
                </div>
            </div>

             <div class="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <span class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white shrink-0">3</span>
                <div>
                    <strong class="text-white block">The Task</strong>
                    <p class="text-xs text-gray-400">"Research the latest features of Next.js 15 and save a summary to notes.txt"</p>
                </div>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-9-12",
                        title: "9.12 Module 9 Wrap-up: Agents as the Execution Layer",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">🤖 Transformation Complete</h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            You've graduated from "Talking to AI" to "Managing AI Workers".
        </p>

        <div class="inline-grid grid-cols-2 gap-8 text-left max-w-lg mx-auto">
            <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Unlocked</strong>
                <h3 class="text-white text-lg font-bold mt-1">Agency</h3>
                <p class="text-gray-400 text-sm">Tools, Loops, Persistence.</p>
            </div>
             <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Next Up</strong>
                <h3 class="text-white text-lg font-bold mt-1">Module 10</h3>
                <p class="text-gray-400 text-sm">RAG & Vector Databases.</p>
            </div>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m9():
    print(f"🔄 Injecting GenAI Module 9 (Agents & Automation)...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find Module 8.
    m8_title = 'title: "8. Advanced Prompt Engineering & Reasoning Patterns"'
    m8_start = content.find(m8_title)
    
    if m8_start == -1:
        print("❌ Could not find Module 8 title.")
        return
        
    # 2. Find Module 8 End.
    m8_brace_start = content.rfind('{', 0, m8_start)
    
    open_braces = 0
    m8_end_idx = -1
    
    for i in range(m8_brace_start, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                m8_end_idx = i + 1
                break
                
    if m8_end_idx == -1:
        print("❌ Could not parse Module 8 end.")
        return
        
    print(f"✅ Found Module 8 End at {m8_end_idx}")

    # 3. Check for Existing M9 and Remove if present
    m9_title_marker = 'title: "9. AI Agents & Automation"'
    m9_idx = content.find(m9_title_marker)
    
    if m9_idx != -1:
        print("🔄 Removing existing Module 9 before injection...")
        m9_brace_start = content.rfind('{', 0, m9_idx)
        # Scan for end
        open_b = 0
        m9_end = -1
        for i in range(m9_brace_start, len(content)):
             char = content[i]
             if char == '{': open_b += 1
             elif char == '}': 
                 open_b -= 1
                 if open_b == 0:
                     m9_end = i + 1
                     break
        
        if m9_end != -1:
            content = content[:m9_brace_start] + content[m9_end:]
            print("✅ Removed existing M9 block.")
            
            # Recalculate M8 position
            m8_start = content.find(m8_title)
            m8_brace_start = content.rfind('{', 0, m8_start)
            open_braces = 0
            m8_end_idx = -1
            for i in range(m8_brace_start, len(content)):
                char = content[i]
                if char == '{': open_braces += 1
                elif char == '}': 
                    open_braces -= 1
                    if open_braces == 0:
                        m8_end_idx = i + 1
                        break

    # 4. Inject
    final_content = content[:m8_end_idx] + new_module_9_content + content[m8_end_idx:]
    
    # 5. Clean up potential double commas "},, {"
    final_content = final_content.replace('},,', '},')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("✅ Module 9 (Agents) injected successfully!")

if __name__ == "__main__":
    update_genai_m9()
