import re

# 10 Lessons for "16. AI Ecosystem, Careers & Product Thinking"
# Content styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_16_content = """,
            {
                title: "16. AI Ecosystem, Careers & Product Thinking",
                lessons: [
                    {
                        id: "genai-16-1",
                        title: "16.1 2026 AI Wars & Model Ecosystem",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-red-900/40 to-pink-900/40 border border-red-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-400 mb-4">
            ⚔️ The API Wars
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            In 2026, loyalty to one model is a weakness. The best engineers are <strong>Model Agnostic</strong>.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Closed Frontier</h3>
            <div class="flex flex-wrap gap-2 text-xs">
                <span class="px-2 py-1 bg-green-900/40 text-green-300 rounded border border-green-500/30">GPT-5</span>
                <span class="px-2 py-1 bg-purple-900/40 text-purple-300 rounded border border-purple-500/30">Claude 4.5</span>
                <span class="px-2 py-1 bg-blue-900/40 text-blue-300 rounded border border-blue-500/30">Gemini 3</span>
            </div>
            <p class="text-sm text-gray-400 mt-4">High intelligence, high cost. Use for complex reasoning.</p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Open Frontier</h3>
             <div class="flex flex-wrap gap-2 text-xs">
                <span class="px-2 py-1 bg-blue-900/40 text-blue-300 rounded border border-blue-500/30">Llama 4</span>
                <span class="px-2 py-1 bg-orange-900/40 text-orange-300 rounded border border-orange-500/30">Mistral</span>
                <span class="px-2 py-1 bg-cyan-900/40 text-cyan-300 rounded border border-cyan-500/30">DeepSeek</span>
            </div>
            <p class="text-sm text-gray-400 mt-4">Control, privacy, low cost. Use for high volume.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-16-2",
                        title: "16.2 AI Dev Environments: IDEs & Agentic Terminals",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛠️ The Augmented Engineer</h2>
    
    <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
        <div class="flex items-center justify-between mb-6">
            <strong class="text-white">Evolution of Coding</strong>
            <span class="px-3 py-1 bg-black rounded-full border border-gray-600 text-xs text-gray-400">2023 -> 2026</span>
        </div>
        
        <div class="grid grid-cols-3 gap-4 text-center">
             <div>
                 <div class="text-2xl mb-2">👨‍💻</div>
                 <strong class="text-white text-sm">Manual</strong>
                 <p class="text-[10px] text-gray-500">Typing every char</p>
             </div>
             <div class="flex items-center justify-center text-gray-600">→</div>
              <div>
                 <div class="text-2xl mb-2">🤖</div>
                 <strong class="text-white text-sm">Copilot</strong>
                 <p class="text-[10px] text-gray-500">Autocomplete lines</p>
             </div>
             <div class="flex items-center justify-center text-gray-600">→</div>
              <div>
                 <div class="text-2xl mb-2">🪄</div>
                 <strong class="text-white text-sm">Agentic IDE</strong>
                 <p class="text-[10px] text-gray-500">"Refactor this entire module"</p>
             </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-16-3",
                        title: "16.3 AI Automations, n8n & No-Code Agents",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔗 Glue Code is Dead</h2>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-pink-400 block mb-4">n8n / Make.com Patterns</strong>
        <p class="text-sm text-gray-400 mb-6">
            Why write a Python script to parse emails when a visual node can do it in 5 seconds?
        </p>
        
        <div class="flex items-center gap-2 overflow-x-auto pb-2">
            <div class="min-w-[100px] p-3 bg-gray-900 rounded border border-gray-700 text-center text-xs text-white">Gmail Trigger</div>
            <span>➡️</span>
             <div class="min-w-[100px] p-3 bg-purple-900/20 rounded border border-purple-500/50 text-center text-xs text-purple-300">LLM Classifier</div>
            <span>➡️</span>
             <div class="min-w-[100px] p-3 bg-gray-900 rounded border border-gray-700 text-center text-xs text-white">Slack Alert</div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-16-4",
                        title: "16.4 RAG & Agents in the Real World",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🌍 Reality Check</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-red-900/10 border border-red-500/20 p-6 rounded-2xl">
            <strong class="text-red-400 block mb-2">Why They Fail</strong>
            <ul class="text-sm text-gray-400 list-disc list-inside space-y-2">
                <li>Bad Data Quality (Garbage In).</li>
                <li>Slow Retrieval (> 5s latency).</li>
                <li>Prompt Injection Vulnerabilities.</li>
            </ul>
        </div>
         <div class="bg-green-900/10 border border-green-500/20 p-6 rounded-2xl">
            <strong class="text-green-400 block mb-2">Why They Win</strong>
            <ul class="text-sm text-gray-400 list-disc list-inside space-y-2">
                <li>Instant access to huge knowledge bases.</li>
                <li>24/7 Availability.</li>
                <li>Consistent "Brand Voice".</li>
            </ul>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-16-5",
                        title: "16.5 Multimodal, Edge & On-Device AI",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📱 AI Everywhere</h2>
    
    <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
        <div class="flex justify-between items-center">
            <div>
                 <strong class="text-white block">The Edge Shift</strong>
                 <p class="text-xs text-gray-500 mt-1">Running Llama-3-8B on an iPhone 16.</p>
            </div>
            <div class="text-right">
                <span class="text-3xl">📵</span>
            </div>
        </div>
        <hr class="border-gray-700 my-4">
        <p class="text-sm text-gray-400">
            <strong>Use Case:</strong> Real-time translation without internet. Privacy-preserving health analysis.
        </p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-16-6",
                        title: "16.6 Vector Databases, Memory & Context Engineering",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🧠 Final Review: Memory</h2>
    
    <div class="bg-[#111] p-8 rounded-3xl border border-gray-800 text-center">
        <p class="text-gray-300 text-lg">
            "An AI without memory is just a calculator. An AI with memory is a <strong>Partner</strong>."
        </p>
        <div class="mt-6 flex justify-center gap-4">
            <span class="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400">Context Window</span>
            <span class="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400">RAG</span>
            <span class="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400">User Profile</span>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-16-7",
                        title: "16.7 AI Hype, Bubble Risk & Governance",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📉 The Peak?</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-yellow-900/10 border border-yellow-500/20 p-5 rounded-xl">
             <strong class="text-yellow-400 block mb-2">The Hype</strong>
             <p class="text-xs text-gray-400">"AI will replace all developers by next Tuesday." (False)</p>
        </div>
        <div class="bg-blue-900/10 border border-blue-500/20 p-5 rounded-xl">
             <strong class="text-blue-400 block mb-2">The Reality</strong>
             <p class="text-xs text-gray-400">AI is a productivity multiplier. It creates new problems (Security, Data) that need humans to solve.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-16-8",
                        title: "16.8 AI Job Roles & Hiring",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">💼 Getting Hired</h2>
    
    <div class="overflow-hidden rounded-xl border border-gray-700">
        <table class="w-full text-left text-sm text-gray-400">
            <thead class="bg-gray-900 text-white uppercase text-xs">
                <tr>
                    <th class="p-3">Role</th>
                    <th class="p-3">Key Skill</th>
                </tr>
            </thead>
             <tbody class="divide-y divide-gray-800 bg-[#1e1e1e]">
                <tr>
                    <td class="p-3">AI Product Engineer</td>
                    <td class="p-3 text-green-400">User Experience + API Glue</td>
                </tr>
                 <tr>
                    <td class="p-3">RAG Architect</td>
                    <td class="p-3 text-purple-400">Vector DBs + Data Engineering</td>
                </tr>
                 <tr>
                    <td class="p-3">LLM Researcher</td>
                    <td class="p-3 text-blue-400">Math + PyTorch + CUDA</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`
                    },
                    {
                        id: "genai-16-9",
                        title: "16.9 Product Thinking & Monetization",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">💰 Making Money</h2>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-white block mb-4">The Unit Economics of AI</strong>
        <p class="text-sm text-gray-400 mb-6">
            If your user pays $10/mo, and your AI costs $0.50 per query... you go bankrupt in 20 queries.
        </p>
        
        <div class="flex gap-4 text-xs font-mono">
             <div class="bg-green-900/20 text-green-300 p-2 rounded">Cache Aggressively</div>
             <div class="bg-blue-900/20 text-blue-300 p-2 rounded">Use Smaller Models</div>
             <div class="bg-purple-900/20 text-purple-300 p-2 rounded">Usage-Based Pricing</div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-16-10",
                        title: "16.10 Your 12-Month AI Career Roadmap",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 p-10 rounded-3xl text-center">
        <h2 class="text-4xl font-bold text-white mb-6">🚀 Launch Everything</h2>
        
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            You have the map. You have the tools. You have the skills.
            <br>The next 12 months are yours to define.
        </p>

        <div class="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            <div class="bg-black/50 p-4 rounded-xl border border-cyan-500/30">
                <strong class="text-cyan-400 block mb-1">Month 1-3</strong>
                <p class="text-[10px] text-gray-400">Build & Ship 3 Capstones.</p>
            </div>
             <div class="bg-black/50 p-4 rounded-xl border border-blue-500/30">
                <strong class="text-blue-400 block mb-1">Month 4-6</strong>
                <p class="text-[10px] text-gray-400">Contribute to OSS / Freelance.</p>
            </div>
             <div class="bg-black/50 p-4 rounded-xl border border-purple-500/30">
                <strong class="text-purple-400 block mb-1">Month 7-12</strong>
                <p class="text-[10px] text-gray-400">Land the Senior AI Role.</p>
            </div>
        </div>

        <div class="mt-12">
            <span class="text-gray-500 text-sm uppercase tracking-widest">End of Course</span>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m16():
    print(f"🔄 Injecting GenAI Module 16 (Finale)...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find Module 15.
    m15_title = 'title: "15. Capstones & Modern AI Tech Stacks"'
    m15_start = content.find(m15_title)
    
    if m15_start == -1:
        print("❌ Could not find Module 15 title.")
        return
        
    # 2. Find Module 15 End.
    m15_brace_start = content.rfind('{', 0, m15_start)
    
    open_braces = 0
    m15_end_idx = -1
    
    for i in range(m15_brace_start, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                m15_end_idx = i + 1
                break
                
    if m15_end_idx == -1:
        print("❌ Could not parse Module 15 end.")
        return
        
    print(f"✅ Found Module 15 End at {m15_end_idx}")

    # 3. Check for Existing M16 (and remove, though unlikely)
    m16_title_marker = 'title: "16. AI Ecosystem, Careers & Product Thinking"'
    m16_idx = content.find(m16_title_marker)
    
    if m16_idx != -1:
        print("🔄 Removing existing Module 16 before injection...")
        m16_brace_start = content.rfind('{', 0, m16_idx)
        # Scan for end
        open_b = 0
        m16_end = -1
        for i in range(m16_brace_start, len(content)):
             char = content[i]
             if char == '{': open_b += 1
             elif char == '}': 
                 open_b -= 1
                 if open_b == 0:
                     m16_end = i + 1
                     break
        
        if m16_end != -1:
            content = content[:m16_brace_start] + content[m16_end:]
            print("✅ Removed existing M16 block.")
            
            # Recalculate M15
            m15_start = content.find(m15_title)
            m15_brace_start = content.rfind('{', 0, m15_start)
            open_braces = 0
            m15_end_idx = -1
            for i in range(m15_brace_start, len(content)):
                char = content[i]
                if char == '{': open_braces += 1
                elif char == '}': 
                    open_braces -= 1
                    if open_braces == 0:
                        m15_end_idx = i + 1
                        break

    # 4. Inject
    final_content = content[:m15_end_idx] + new_module_16_content + content[m15_end_idx:]
    
    # 5. Clean up potential double commas
    final_content = final_content.replace('},,', '},')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("✅ Module 16 (Finale) injected successfully!")

if __name__ == "__main__":
    update_genai_m16()
