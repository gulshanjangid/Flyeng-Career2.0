import re

# 12 Lessons for "13. Full-Stack AI with JavaScript/TypeScript"
# Content styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_13_content = """,
            {
                title: "13. Full-Stack AI with JavaScript/TypeScript",
                lessons: [
                    {
                        id: "genai-13-1",
                        title: "13.1 Why TypeScript & Next.js Are the AI Frontend Standard",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            ⚛️ The AI Stack
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Python built the model. <strong>TypeScript</strong> builds the product. In 2026, if you want to ship AI to millions, you use Next.js.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Why Next.js?</h3>
            <ul class="text-sm text-gray-400 list-disc list-inside space-y-2">
                <li><strong>Streaming:</strong> First-class support for streaming text.</li>
                <li><strong>Server Actions:</strong> Call LLMs directly from UI code safely.</li>
                <li><strong>Edge:</strong> Run AI logic close to the user.</li>
            </ul>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Why TypeScript?</h3>
            <p class="text-sm text-gray-400">
                LLMs output JSON. TypeScript ensures that JSON matches your UI interfaces. It's the perfect safety net for non-deterministic data.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-13-2",
                        title: "13.2 The 2026 Frontend AI Stack Overview",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🏗️ The Blueprint</h2>
    
    <div class="relative bg-[#1e1e1e] p-8 rounded-3xl border border-gray-700 flex flex-col gap-4">
        <div class="bg-black p-4 rounded-xl border border-gray-600 text-center">
            <strong class="text-blue-400 block">Frontend (User Layer)</strong>
            <p class="text-xs text-gray-400">Next.js 15 App Router + React Server Components</p>
        </div>
        
        <div class="h-8 w-0.5 bg-gray-600 mx-auto"></div>
        
        <div class="bg-black p-4 rounded-xl border border-gray-600 text-center">
            <strong class="text-white block">Integration Layer</strong>
            <p class="text-xs text-gray-400">Vercel AI SDK Core + UI</p>
        </div>

        <div class="h-8 w-0.5 bg-gray-600 mx-auto"></div>

        <div class="flex gap-4 justify-center">
             <div class="bg-black p-4 rounded-xl border border-gray-600 text-center w-32">
                 <strong class="text-yellow-400 block">LLM</strong>
                 <p class="text-[10px] text-gray-500">OpenAI / Anthropic</p>
             </div>
              <div class="bg-black p-4 rounded-xl border border-gray-600 text-center w-32">
                 <strong class="text-green-400 block">Memory</strong>
                 <p class="text-[10px] text-gray-500">Vector DB</p>
             </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-13-3",
                        title: "13.3 Getting Started: Project Setup & Architecture",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📂 Structure</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 font-mono text-sm leading-7 text-gray-300">
            app/<br>
            ├── (marketing)/ <span class="text-gray-600"># Landing page</span><br>
            ├── (app)/ <span class="text-gray-600"># Dashboard</span><br>
            │   ├── chat/ <span class="text-gray-600"># Chat UI</span><br>
            │   └── settings/<br>
            ├── api/<br>
            │   └── chat/ <span class="text-gray-600"># Route Handler</span><br>
            └── layout.tsx
        </div>
        
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
             <strong class="text-white block mb-4">Environment Config</strong>
             <div class="bg-black p-4 rounded border border-gray-700 text-xs text-green-300 font-mono">
                OPENAI_API_KEY=sk-...<br>
                ANTHROPIC_API_KEY=sk-...<br>
                KV_URL=redis://...
             </div>
             <p class="mt-4 text-xs text-gray-400">
                ⚠️ Store these in <code>.env.local</code>. Never commit them.
             </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-13-4",
                        title: "13.4 Vercel AI SDK: Model-Agnostic Frontend Toolkit",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-gray-800 to-black border border-white/10 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">⬛ The Universal Adapter</h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Switch from GPT-4 to Claude 3.5 in one line of code.
        </p>
        
        <div class="mt-6 bg-[#1e1e1e] p-4 rounded-xl font-mono text-sm">
            <span class="text-purple-400">import</span> { streamText } <span class="text-purple-400">from</span> 'ai';<br>
            <span class="text-purple-400">import</span> { openai } <span class="text-purple-400">from</span> '@ai-sdk/openai';<br><br>
            
            <span class="text-blue-400">const</span> result = <span class="text-blue-400">await</span> streamText({<br>
            &nbsp;&nbsp;model: openai('gpt-4o'), <span class="text-gray-500">// Or anthropic('claude-3-5')</span><br>
            &nbsp;&nbsp;prompt: 'Hello world'<br>
            });
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-13-5",
                        title: "13.5 Building a Streaming Chat UI in Next.js",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">💬 useChat() Hook</h2>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-white text-lg block mb-4">The Magic Hook</strong>
        <p class="text-sm text-gray-400 mb-6">
            <code>useChat</code> handles state, input binding, form submission, and streaming updates automatically.
        </p>
        
        <div class="bg-black p-4 rounded border border-gray-700 font-mono text-xs text-blue-300">
            const { messages, input, handleInputChange, handleSubmit } = useChat();<br><br>
            return (<br>
            &nbsp;&nbsp;&lt;div&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;{messages.map(m => &lt;div&gt;{m.content}&lt;/div&gt;)}<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;form onSubmit={handleSubmit}&gt;...&lt;/form&gt;<br>
            &nbsp;&nbsp;&lt;/div&gt;<br>
            );
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-13-6",
                        title: "13.6 API Routes & Server Actions for AI",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛤️ Routes vs Actions</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-blue-900/10 border border-blue-500/20 p-6 rounded-2xl">
            <h3 class="text-lg font-bold text-blue-400 mb-2">Route Handlers</h3>
            <p class="text-sm text-gray-400 font-mono">/api/chat</p>
            <p class="text-xs text-gray-500 mt-2">Best for public APIs, webhooks, or when you need standard HTTP semantics.</p>
        </div>
        
         <div class="bg-purple-900/10 border border-purple-500/20 p-6 rounded-2xl">
            <h3 class="text-lg font-bold text-purple-400 mb-2">Server Actions</h3>
            <p class="text-sm text-gray-400 font-mono">async function chat()</p>
            <p class="text-xs text-gray-500 mt-2">Best for internal UI logic. "Function calls over the network". Zero-setup.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-13-7",
                        title: "13.7 End-to-End Type Safety with tRPC",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛡️ Type Safe AI</h2>
    
    <p class="text-gray-300 text-lg mb-6">
        tRPC lets you define your backend schema with Zod, and get full autocompletion on the frontend.
    </p>

    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 font-mono text-sm leading-7">
        <div class="border-b border-gray-700 pb-4 mb-4">
            <span class="text-gray-500">// Backend</span><br>
            <span class="text-purple-400">input</span>: z.object({ prompt: z.string() }),<br>
            <span class="text-blue-400">resolve</span>: async ({ input }) => { ... }
        </div>
        <div>
            <span class="text-gray-500">// Frontend</span><br>
            trpc.ai.generate.<span class="text-yellow-400">useMutation</span>({<br>
            &nbsp;&nbsp;onSuccess: (data) => console.log(data) <span class="text-gray-500">// 'data' is typed!</span><br>
            })
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-13-8",
                        title: "13.8 Connecting to RAG & Memory Backends",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔌 Wiring the Brain</h2>
    
    <div class="bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-500/30 p-8 rounded-3xl text-center">
        <p class="text-xl text-gray-300">
            Your Next.js app shouldn't do the heavy RAG lifting locally. It should <strong>Orchestrate</strong>.
        </p>
        
        <div class="flex items-center justify-center gap-4 mt-8">
            <div class="p-3 bg-white text-black rounded font-bold">Next.js API</div>
            <span class="text-gray-400 text-2xl">➡️</span>
            <div class="p-3 bg-green-900 text-white rounded font-bold">Pinecone</div>
            <span class="text-gray-400 text-2xl">➕</span>
            <div class="p-3 bg-blue-900 text-white rounded font-bold">OpenAI</div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-13-9",
                        title: "13.9 Integrating Agents & Tools into the UI",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛠️ Agent UI Patterns</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800">
            <strong class="text-blue-400 block mb-2">Generative UI</strong>
            <p class="text-xs text-gray-400">
                The agent returns a component (like a Chart or Weather Card) instead of just text. Vercel AI SDK supports this efficiently via <code>createStreamableUI</code>.
            </p>
        </div>
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800">
            <strong class="text-green-400 block mb-2">Human-in-the-Loop</strong>
            <p class="text-xs text-gray-400">
                Agent wants to delete a file? Render a "Confirm" button. The agent pauses until the user clicks it.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-13-10",
                        title: "13.10 Deployment on Vercel & Edge Considerations",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🚀 Ship It</h2>
    
    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-white block mb-4">Edge vs Node Runtime</strong>
        
        <div class="space-y-3">
             <div class="flex justify-between p-3 bg-gray-900 rounded border border-gray-700">
                 <span class="text-gray-300 text-sm">Node.js</span>
                 <span class="text-xs text-gray-500">Full compatibility (LangChain, Libraries). Slower cold start.</span>
             </div>
             <div class="flex justify-between p-3 bg-gray-900 rounded border border-gray-700">
                 <span class="text-gray-300 text-sm">Edge</span>
                 <span class="text-green-400 text-xs text-right">Instant startup. Limited libraries. Great for streaming.</span>
             </div>
        </div>
        
        <div class="mt-4 p-2 bg-blue-900/20 text-blue-300 rounded border border-blue-500/30 text-center text-xs">
            Recommendation: Use <strong>Edge</strong> for simple pass-through wrappers. Use <strong>Node</strong> for complex agents.
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-13-11",
                        title: "13.11 Mini Project: Full-Stack AI App (Chat + RAG)",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-violet-900/40 to-fuchsia-900/40 border border-violet-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">💻 Lab: The Final Product</h2>
        <p class="text-gray-300 mb-8">
            Build "DocChat" - A Next.js app that knows your documentation.
        </p>

        <ol class="space-y-4 list-decimal list-inside text-gray-300 bg-black/40 p-6 rounded-xl border border-white/5">
           <li class="pl-2"><strong>Setup:</strong> <code>npx create-next-app@latest</code> with TypeScript.</li>
           <li class="pl-2"><strong>Backend:</strong> <code>/api/chat</code> route calling OpenAI + Pinecone.</li>
           <li class="pl-2"><strong>Frontend:</strong> <code>useChat</code> hook in a minimalistic UI.</li>
           <li class="pl-2"><strong>Deploy:</strong> Push to GitHub -> Vercel -> Live URL.</li>
        </ol>
    </div>
</div>
`
                    },
                    {
                        id: "genai-13-12",
                        title: "13.12 Module 13 Wrap-up: Shipping Real AI Products",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">🚢 Production Ready</h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            You are now a Full-Stack AI Engineer. You can build the brain and the body.
        </p>

        <div class="inline-grid grid-cols-2 gap-8 text-left max-w-lg mx-auto">
            <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Mastered</strong>
                <h3 class="text-white text-lg font-bold mt-1">Next.js AI Stack</h3>
                <p class="text-gray-400 text-sm">Vercel AI SDK, Streaming, Server Actions.</p>
            </div>
             <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Next Up</strong>
                <h3 class="text-white text-lg font-bold mt-1">Module 14</h3>
                <p class="text-gray-400 text-sm">Deployment & Ops (LLMOps).</p>
            </div>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m13():
    print(f"🔄 Injecting GenAI Module 13 (Full-Stack AI)...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find Module 12.
    m12_title = 'title: "12. Vector Databases & Memory Architectures"'
    m12_start = content.find(m12_title)
    
    if m12_start == -1:
        print("❌ Could not find Module 12 title.")
        return
        
    # 2. Find Module 12 End.
    m12_brace_start = content.rfind('{', 0, m12_start)
    
    open_braces = 0
    m12_end_idx = -1
    
    for i in range(m12_brace_start, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                m12_end_idx = i + 1
                break
                
    if m12_end_idx == -1:
        print("❌ Could not parse Module 12 end.")
        return
        
    print(f"✅ Found Module 12 End at {m12_end_idx}")

    # 3. Check for Existing M13 and Remove if present
    m13_title_marker = 'title: "13. Full-Stack AI with JavaScript/TypeScript"'
    m13_idx = content.find(m13_title_marker)
    
    if m13_idx != -1:
        print("🔄 Removing existing Module 13 before injection...")
        m13_brace_start = content.rfind('{', 0, m13_idx)
        # Scan for end
        open_b = 0
        m13_end = -1
        for i in range(m13_brace_start, len(content)):
             char = content[i]
             if char == '{': open_b += 1
             elif char == '}': 
                 open_b -= 1
                 if open_b == 0:
                     m13_end = i + 1
                     break
        
        if m13_end != -1:
            content = content[:m13_brace_start] + content[m13_end:]
            print("✅ Removed existing M13 block.")
            
            # Recalculate M12 position
            m12_start = content.find(m12_title)
            m12_brace_start = content.rfind('{', 0, m12_start)
            open_braces = 0
            m12_end_idx = -1
            for i in range(m12_brace_start, len(content)):
                char = content[i]
                if char == '{': open_braces += 1
                elif char == '}': 
                    open_braces -= 1
                    if open_braces == 0:
                        m12_end_idx = i + 1
                        break

    # 4. Inject
    final_content = content[:m12_end_idx] + new_module_13_content + content[m12_end_idx:]
    
    # 5. Clean up potential double commas "},, {"
    final_content = final_content.replace('},,', '},')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("✅ Module 13 (Full-Stack) injected successfully!")

if __name__ == "__main__":
    update_genai_m13()
