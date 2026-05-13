import re

# 12 Lessons for "8. Advanced Prompt Engineering & Reasoning Patterns"
# Content styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_8_content = """,
            {
                title: "8. Advanced Prompt Engineering & Reasoning Patterns",
                lessons: [
                    {
                        id: "genai-8-1",
                        title: "8.1 From “Nice Prompts” to Reasoning Systems",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            🧠 Engineering, Not Magic
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Prompt Engineering in 2026 isn't about finding the perfect "magic words". It's about designing <strong>Systematic Reasoning Pipelines</strong>.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">The Old Way (2023)</h3>
            <p class="text-sm text-gray-400">
                "Act as a helpful assistant. Please write good code." <br>
                <span class="text-red-400 text-xs">Vague, unpredictable, prone to drift.</span>
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">The New Way (2026)</h3>
            <p class="text-sm text-gray-400">
                "Role: Senior SRE. Objective: Analyze logs. Input: JSON. Constraints: No markdown. Strategy: Chain-of-Thought." <br>
                <span class="text-green-400 text-xs">Structured, deterministic, evaluatable.</span>
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-8-2",
                        title: "8.2 Modern Prompt Design Blueprint (2026)",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📐 The Prompt Spec</h2>

    <div class="bg-[#1e1e1e] p-8 rounded-3xl border border-gray-700 font-mono text-sm leading-relaxed">
        <div class="text-gray-500 mb-4"># The Official Template</div>
        
        <div class="space-y-4">
            <div>
                <strong class="text-purple-400 uppercase tracking-widest text-xs">1. Role & Persona</strong>
                <p class="text-gray-300">"You are an expert SQL Analyst with 10 years of experience in Postgres optimization."</p>
            </div>
             <div class="border-t border-gray-800 pt-4">
                <strong class="text-blue-400 uppercase tracking-widest text-xs">2. Objective</strong>
                <p class="text-gray-300">"Analyze the provided query plan and identify 3 potential index improvements."</p>
            </div>
             <div class="border-t border-gray-800 pt-4">
                <strong class="text-red-400 uppercase tracking-widest text-xs">3. Constraints</strong>
                <p class="text-gray-300">"- Do NOT explain basic concepts.<br>- Output MUST be valid JSON.<br>- If no improvements found, return empty list."</p>
            </div>
             <div class="border-t border-gray-800 pt-4">
                <strong class="text-green-400 uppercase tracking-widest text-xs">4. One-Shot Example</strong>
                <p class="text-gray-300">"Input: SELECT * ... Output: { 'index': 'idx_users_email' ... }"</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-8-3",
                        title: "8.3 Role, Persona & System-Level Prompting",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🎭 Identity Management</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <strong class="text-white text-lg block mb-2">System Prompts</strong>
            <p class="text-sm text-gray-400 mb-4">The "God Mode" instructions. Users key into the chat box, but the System Prompt sets the rules.</p>
            <div class="bg-black p-3 rounded font-mono text-xs text-yellow-300">
                "You are a secure banking assistant. Never reveal user balances without 2FA verification."
            </div>
        </div>
        
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <strong class="text-white text-lg block mb-2">Persona Priming</strong>
            <p class="text-sm text-gray-400 mb-4">Adopting a specific persona changes the model's vocabulary and reasoning depth.</p>
             <div class="bg-black p-3 rounded font-mono text-xs text-blue-300">
                "Act as a 5-year-old" -> <span class="text-gray-500">"The car goes vroom!"</span><br>
                "Act as a Mechanic" -> <span class="text-gray-500">"Check the fuel injection timing."</span>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-8-4",
                        title: "8.4 Chain-of-Thought & Deliberate Reasoning",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔗 Chain of Thought (CoT)</h2>
    
    <div class="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-8 rounded-3xl">
        <div class="flex gap-4">
             <div class="w-1/2 opacity-50 blur-[1px]">
                 <strong class="text-red-400 block mb-2">Standard Prompting</strong>
                 <p class="text-xs text-gray-400 font-mono">
                    Q: If I have 3 apples and eat 1, how many?<br>
                    A: 2.
                 </p>
             </div>
             <div class="w-0.5 bg-gray-600"></div>
             <div class="w-1/2">
                 <strong class="text-green-400 block mb-2">CoT Prompting</strong>
                 <p class="text-xs text-white font-mono leading-relaxed">
                    Q: If I have 3 apples...<br>
                    A: <span class="text-green-300">Let's think step by step.</span><br>
                    1. Start with 3 apples.<br>
                    2. Eat 1 apple means subtracting 1.<br>
                    3. 3 - 1 = 2.<br>
                    Answer: 2.
                 </p>
             </div>
        </div>
        
         <div class="mt-6 p-4 bg-black/30 rounded-xl border border-white/10 text-center">
            <p class="text-sm text-gray-300">
                <strong>Why?</strong> LLMs are probabilistic. Asking them to "show their work" forces them to generate tokens that ground the final answer in logic.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-8-5",
                        title: "8.5 Tree-of-Thought & Structured Search over Ideas",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🌳 Thinking in Branches</h2>
    
    <p class="text-gray-300 text-lg mb-6">
        Sometimes "step-by-step" isn't enough. You need to explore multiple possibilities.
    </p>

    <div class="flex justify-center">
        <div class="relative w-full max-w-2xl bg-[#111] p-8 rounded-3xl border border-gray-800">
             <div class="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white"></div>
             
             <!-- Branch Lines -->
             <div class="absolute top-12 left-1/2 -translate-x-1/2 w-[200px] h-12 border-t-2 border-l-2 border-r-2 border-gray-600 rounded-t-xl"></div>
             
             <!-- Layer 1 -->
             <div class="flex justify-between mt-12 px-12">
                 <div class="text-center">
                     <div class="p-3 bg-gray-800 rounded border border-gray-600 text-xs text-gray-300">Idea A</div>
                     <span class="text-red-500 text-xs font-bold">❌ Dead End</span>
                 </div>
                 <div class="text-center">
                     <div class="p-3 bg-green-900/50 rounded border border-green-500 text-xs text-white">Idea B</div>
                     <span class="text-green-500 text-xs font-bold">✅ Promising</span>
                 </div>
                  <div class="text-center">
                     <div class="p-3 bg-gray-800 rounded border border-gray-600 text-xs text-gray-300">Idea C</div>
                     <span class="text-red-500 text-xs font-bold">❌ Dead End</span>
                 </div>
             </div>
             
             <!-- Layer 2 (From Idea B) -->
              <div class="absolute top-[130px] left-1/2 w-0.5 h-8 bg-green-500"></div>
              <div class="absolute top-[160px] left-1/2 -translate-x-1/2 p-3 bg-green-900/80 rounded border border-green-400 text-xs text-white font-bold shadow-lg shadow-green-900/50">
                  Final Solution
              </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-8-6",
                        title: "8.6 ReAct, Reflexion & Self-Critique Patterns",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-orange-400 mb-4">🔁 The Feedback Loop</h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Models are confident liars. To fix this, we make them <strong>Critique Themselves</strong>.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-3">ReAct (Reason + Act)</h3>
            <div class="font-mono text-xs text-gray-400 space-y-2">
                <p><span class="text-blue-400">Thought:</span> I need to find the user's IP.</p>
                <p><span class="text-yellow-400">Action:</span> search_logs(user_id)</p>
                <p><span class="text-blue-400">Observation:</span> IP is 192.168.1.1</p>
                <p><span class="text-blue-400">Thought:</span> Found it.</p>
            </div>
        </div>
        
         <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-3">Reflexion</h3>
             <div class="font-mono text-xs text-gray-400 space-y-2">
                <p><span class="text-red-400">Draft 1:</span> Python is a snake.</p>
                <p><span class="text-purple-400">Critic:</span> Too brief. Context is programming.</p>
                <p><span class="text-green-400">Draft 2:</span> Python is a high-level programming language.</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-8-7",
                        title: "8.7 Handling Hallucinations with Prompt Patterns",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">👻 Ghost Busting</h2>
    
    <div class="bg-red-900/10 border border-red-500/20 p-6 rounded-2xl">
        <p class="text-lg text-red-300 mb-4">You cannot strictly prevent hallucinations, but you can drastically reduce them.</p>
        
        <ul class="space-y-4">
            <li class="flex items-start gap-3">
                <div class="bg-gray-800 p-2 rounded text-xs text-white">Technique 1</div>
                <div>
                    <strong class="text-white block">"According to the context..."</strong>
                    <p class="text-sm text-gray-400">Force the model to cite the provided text. "If it's not in the context, say 'I don't know'."</p>
                </div>
            </li>
             <li class="flex items-start gap-3">
                <div class="bg-gray-800 p-2 rounded text-xs text-white">Technique 2</div>
                <div>
                    <strong class="text-white block">Uncertainty Flags</strong>
                    <p class="text-sm text-gray-400">"Reply with a confidence score (0-100). If below 70, admit uncertainty."</p>
                </div>
            </li>
        </ul>
    </div>
</div>
`
                    },
                    {
                        id: "genai-8-8",
                        title: "8.8 Automated Prompt Optimization with DSPy",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-blue-400 mb-4">🤖 DSPy: Prompts as Code</h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Stop guessing words. Let an optimizer describe the task for you.
        </p>
    </div>

    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-white text-lg block mb-4">How it works</strong>
         <div class="bg-black p-4 rounded-xl font-mono text-xs text-blue-300">
            class QASignature(dspy.Signature):<br>
            &nbsp;&nbsp;question = dspy.InputField()<br>
            &nbsp;&nbsp;answer = dspy.OutputField()<br><br>
            
            <span class="text-gray-500"># The Optimizer (Teleprompter) runs 50 trials to find the perfect instructions.</span><br>
            optimizer.compile(student=program, trainset=dataset)
        </div>
        
        <p class="text-sm text-gray-400 mt-4">
            In 2026, hand-tuning prompts is like hand-tuning neural network weights. We use gradients (or optimizers) now.
        </p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-8-9",
                        title: "8.9 Choosing the Right Reasoning Strategy",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🧭 Strategy Guide</h2>
    
    <div class="overflow-hidden rounded-2xl border border-gray-800">
        <table class="w-full text-left text-sm text-gray-400">
            <thead class="bg-gray-900 text-white uppercase text-xs">
                <tr>
                    <th class="p-4">Task</th>
                    <th class="p-4">Strategy</th>
                    <th class="p-4">Cost</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-800 bg-[#111]">
                <tr>
                    <td class="p-4">Simple Classification</td>
                    <td class="p-4 font-bold text-blue-400">Zero-Shot</td>
                    <td class="p-4 text-green-400">$</td>
                </tr>
                <tr>
                    <td class="p-4">Math / Logic</td>
                    <td class="p-4 font-bold text-yellow-400">Chain-of-Thought</td>
                    <td class="p-4 text-yellow-400">$$</td>
                </tr>
                 <tr>
                    <td class="p-4">Complex Planning</td>
                    <td class="p-4 font-bold text-purple-400">Tree-of-Thought</td>
                    <td class="p-4 text-red-400">$$$$</td>
                </tr>
                 <tr>
                    <td class="p-4">External Tools</td>
                    <td class="p-4 font-bold text-orange-400">ReAct</td>
                    <td class="p-4 text-yellow-400">$$$</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`
                    },
                    {
                        id: "genai-8-10",
                        title: "8.10 Hands-on Concept: Designing a Robust Prompt Contract",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-8 rounded-3xl border border-gray-800">
        <h2 class="text-3xl font-bold text-white mb-6">📝 The Contract</h2>
        <p class="text-gray-400 mb-8">Design a prompt that cannot fail silently.</p>
        
        <div class="space-y-6">
            <div class="bg-black/50 p-4 rounded-xl border border-gray-700">
                <strong class="text-blue-400 block mb-2">1. The Interface</strong>
                <p class="text-xs text-gray-300 font-mono">{ "status": "success" | "error", "data": "..." }</p>
            </div>
            
             <div class="bg-black/50 p-4 rounded-xl border border-gray-700">
                <strong class="text-green-400 block mb-2">2. The Safeguards</strong>
                <p class="text-xs text-gray-300 font-mono">
                    - "If input is PII, redact it."<br>
                    - "If confidence < 0.8, flag for review."
                </p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-8-11",
                        title: "8.11 Mini Project: Reasoning Upgrade for a Simple App",
                        duration: "25 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-teal-900/40 to-emerald-900/40 border border-teal-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">🚀 Lab: Brain Transplant</h2>
        <p class="text-gray-300 mb-8">
            Take a dumb "Summarizer Bot" and upgrade it with <strong>Self-Correction</strong>.
        </p>

        <ol class="space-y-4 list-decimal list-inside text-gray-300 bg-black/40 p-6 rounded-xl border border-white/5">
            <li class="pl-2"><strong>Step 1:</strong> Run a basic prompt. Observe hallucinations.</li>
            <li class="pl-2"><strong>Step 2:</strong> Implement a \`Critic\` prompt that checks the summary against the original text.</li>
            <li class="pl-2"><strong>Step 3:</strong> Loop: Generate -> Critique -> Refine -> Final Answer.</li>
            <li class="pl-2"><strong>Result:</strong> Watch accuracy jump from 70% to 95%.</li>
        </ol>
    </div>
</div>
`
                    },
                    {
                        id: "genai-8-12",
                        title: "8.12 Module 8 Wrap-up: From Prompting to Programmatic Reasoning",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">🎓 Master of Reasoning</h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            You now know that "Prompting" is actually "Algorithm Design" in natural language.
        </p>

        <div class="inline-grid grid-cols-2 gap-8 text-left max-w-lg mx-auto">
            <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Mastered</strong>
                <h3 class="text-white text-lg font-bold mt-1">Reasoning Patterns</h3>
                <p class="text-gray-400 text-sm">CoT, ReAct, DSPy.</p>
            </div>
             <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Next Up</strong>
                <h3 class="text-white text-lg font-bold mt-1">Module 9</h3>
                <p class="text-gray-400 text-sm">Building Autonomous Agents.</p>
            </div>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m8():
    print(f"🔄 Injecting GenAI Module 8 (Advanced Prompting)...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find Module 7.
    m7_title = 'title: "7. Working with LLMs in Python"'
    m7_start = content.find(m7_title)
    
    if m7_start == -1:
        print("❌ Could not find Module 7 title.")
        return
        
    # 2. Find Module 7 End.
    m7_brace_start = content.rfind('{', 0, m7_start)
    
    open_braces = 0
    m7_end_idx = -1
    
    for i in range(m7_brace_start, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                m7_end_idx = i + 1
                break
                
    if m7_end_idx == -1:
        print("❌ Could not parse Module 7 end.")
        return
        
    print(f"✅ Found Module 7 End at {m7_end_idx}")

    # 3. Check for Existing M8 and Remove if present
    m8_title_marker = 'title: "8. Advanced Prompt Engineering & Reasoning Patterns"'
    m8_idx = content.find(m8_title_marker)
    
    if m8_idx != -1:
        print("🔄 Removing existing Module 8 before injection...")
        m8_brace_start = content.rfind('{', 0, m8_idx)
        # Scan for end
        open_b = 0
        m8_end = -1
        for i in range(m8_brace_start, len(content)):
             char = content[i]
             if char == '{': open_b += 1
             elif char == '}': 
                 open_b -= 1
                 if open_b == 0:
                     m8_end = i + 1
                     break
        
        if m8_end != -1:
            content = content[:m8_brace_start] + content[m8_end:]
            print("✅ Removed existing M8 block.")
            
            # Recalculate M7 position
            m7_start = content.find(m7_title)
            m7_brace_start = content.rfind('{', 0, m7_start)
            open_braces = 0
            m7_end_idx = -1
            for i in range(m7_brace_start, len(content)):
                char = content[i]
                if char == '{': open_braces += 1
                elif char == '}': 
                    open_braces -= 1
                    if open_braces == 0:
                        m7_end_idx = i + 1
                        break

    # 4. Inject
    final_content = content[:m7_end_idx] + new_module_8_content + content[m7_end_idx:]
    
    # 5. Clean up potential double commas "},, {"
    final_content = final_content.replace('},,', '},')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("✅ Module 8 (Advanced Prompting) injected successfully!")

if __name__ == "__main__":
    update_genai_m8()
