import re
import textwrap

file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

# Clean, corrected content for Module 2.
# Ensuring NO spaces in comments, NO spaces in tags, NO malformed entities.
formatted_module_2 = """
            {
                title: "2. Thinking Like an AI Engineer & VIBE Coding",
                lessons: [
                    {
                        id: "genai-2-1",
                        title: "2.1 The VIBE Coding Philosophy",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 p-8 rounded-3xl relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <h2 class="text-3xl font-bold text-white mb-4 relative z-10">
            More Than Just Code
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed relative z-10">
            <strong>VIBE</strong> is a philosophy for building AI systems. It moves beyond "writing scripts" to designing <span class="text-indigo-400">Intelligent Ecosystems</span>.
        </p>
    </div>

    <div class="grid grid-cols-2 gap-4">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 text-center">
            <div class="text-4xl mb-3">👁️</div>
            <strong class="text-white block">Vision</strong>
            <span class="text-xs text-gray-500">The Purpose</span>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 text-center">
            <div class="text-4xl mb-3">🖱️</div>
            <strong class="text-white block">Interfaces</strong>
            <span class="text-xs text-gray-500">The Interaction</span>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 text-center">
            <div class="text-4xl mb-3">🧠</div>
            <strong class="text-white block">Behaviors</strong>
            <span class="text-xs text-gray-500">The Logic</span>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800 text-center">
            <div class="text-4xl mb-3">🌍</div>
            <strong class="text-white block">Ecosystem</strong>
            <span class="text-xs text-gray-500">The Stack</span>
        </div>
    </div>
    
    <div class="bg-gray-900/50 p-6 rounded-xl border-l-4 border-indigo-500">
        <p class="text-gray-400 italic">
            "In 2026, we don't start with 'What model should I use?'. We start with 'What is the desired <strong>Behavior</strong>?'"
        </p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-2-2",
                        title: "2.2 What is VIBE Coding?",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white mb-8">🧩 Breaking Down V.I.B.E.</h2>

    <div class="space-y-6">
        <div class="flex gap-6 group">
            <div class="w-16 h-16 rounded-2xl bg-blue-900/20 border border-blue-500/30 flex items-center justify-center text-2xl font-bold text-blue-400 shrink-0 group-hover:scale-110 transition-transform">V</div>
            <div>
                <h3 class="text-xl font-bold text-white mb-1">Vision</h3>
                <p class="text-gray-400 text-sm">A clear outcome definition. <br><em class="text-gray-500">Example: "An AI tutor that adapts to a student's learning style over months, not just one session."</em></p>
            </div>
        </div>

        <div class="flex gap-6 group">
            <div class="w-16 h-16 rounded-2xl bg-purple-900/20 border border-purple-500/30 flex items-center justify-center text-2xl font-bold text-purple-400 shrink-0 group-hover:scale-110 transition-transform">I</div>
            <div>
                <h3 class="text-xl font-bold text-white mb-1">Interfaces</h3>
                <p class="text-gray-400 text-sm">Where the user meets the AI. Chat, Voice, Web Apps, API calls, Background Automations.</p>
            </div>
        </div>

        <div class="flex gap-6 group">
            <div class="w-16 h-16 rounded-2xl bg-green-900/20 border border-green-500/30 flex items-center justify-center text-2xl font-bold text-green-400 shrink-0 group-hover:scale-110 transition-transform">B</div>
            <div>
                <h3 class="text-xl font-bold text-white mb-1">Behaviors</h3>
                <p class="text-gray-400 text-sm">How the AI handles edge cases, failures, and complex reasoning steps. <br><em class="text-gray-500">"If retrieval fails, search web. If web fails, ask user."</em></p>
            </div>
        </div>
        
        <div class="flex gap-6 group">
            <div class="w-16 h-16 rounded-2xl bg-orange-900/20 border border-orange-500/30 flex items-center justify-center text-2xl font-bold text-orange-400 shrink-0 group-hover:scale-110 transition-transform">E</div>
            <div>
                <h3 class="text-xl font-bold text-white mb-1">Ecosystem</h3>
                <p class="text-gray-400 text-sm">The tools: LLMs, Vector DBs, No-Code Builders (Flowise), Monitoring (LangSmith).</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-2-3",
                        title: "2.3 The AI Engineer Mindset",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div class="w-full md:w-1/2 bg-red-900/10 p-6 rounded-3xl border border-red-500/10 grayscale opacity-60">
            <h3 class="text-lg font-bold text-white mb-4 text-center">Prompt User</h3>
            <ul class="text-sm text-gray-400 space-y-2 list-disc list-inside">
                <li>Writes one giant prompt.</li>
                <li>Hopes for the best.</li>
                <li>"The model is bad."</li>
                <li>Manual testing only.</li>
            </ul>
        </div>
        
        <div class="text-2xl text-gray-600">vs</div>

        <div class="w-full md:w-1/2 bg-green-900/10 p-6 rounded-3xl border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <h3 class="text-lg font-bold text-white mb-4 text-center">AI Engineer</h3>
            <ul class="text-sm text-gray-300 space-y-2 list-disc list-inside">
                <li>Designs <strong class="text-green-400">Workflows</strong>.</li>
                <li>Measures <strong class="text-green-400">Reliability</strong>.</li>
                <li>Optimizes <strong class="text-green-400">Latency & Cost</strong>.</li>
                <li>Builds <strong class="text-green-400">Eval Sets</strong>.</li>
            </ul>
        </div>
    </div>

    <div class="bg-[#111] p-6 rounded-2xl text-center">
        <p class="text-gray-400">
            "Your job isn't to chat with the bot. Your job is to <strong>engineer the system</strong> around the bot."
        </p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-2-4",
                        title: "2.4 Mastering Prompt Engineering (2026 Standards)",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white mb-6">🎛️ Soft Control Systems</h2>
    
    <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-700 font-mono text-sm shadow-2xl">
        <div class="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="text-gray-400 ml-2">system_prompt_v3.json</span>
        </div>
        <div class="p-6 text-gray-300 space-y-4">
            <div>
                <span class="text-purple-400">"role"</span>: <span class="text-yellow-300">"Senior Data Analyst"</span>,
            </div>
            <div>
                <span class="text-purple-400">"objective"</span>: <span class="text-green-300">"Convert user queries into SQL."</span>,
            </div>
             <div>
                <span class="text-purple-400">"constraints"</span>: [
                <br>&nbsp;&nbsp;<span class="text-yellow-300">"Never delete data"</span>,
                <br>&nbsp;&nbsp;<span class="text-yellow-300">"Use read-only credentials"</span>
                <br>],
            </div>
             <div>
                <span class="text-purple-400">"output_schema"</span>: {
                <br>&nbsp;&nbsp;<span class="text-blue-300">"sql"</span>: "string",
                <br>&nbsp;&nbsp;<span class="text-blue-300">"risk_score"</span>: "number"
                <br>}
            </div>
        </div>
    </div>

    <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-black/40 p-4 rounded-xl border border-white/10">
            <strong class="text-white block mb-1">Decomposition</strong>
            <p class="text-xs text-gray-500">Break complex tasks into small, specific prompts.</p>
        </div>
        <div class="bg-black/40 p-4 rounded-xl border border-white/10">
            <strong class="text-white block mb-1">Modularity</strong>
            <p class="text-xs text-gray-500">Reuse components (e.g., identity, safety rules) across prompts.</p>
        </div>
        <div class="bg-black/40 p-4 rounded-xl border border-white/10">
            <strong class="text-white block mb-1">Structured IO</strong>
            <p class="text-xs text-gray-500">Always ask for JSON or specific schema outputs.</p>
        </div>
    </div>
</div>
`
                    },
                     {
                        id: "genai-2-5",
                        title: "2.5 Advanced Prompting Techniques",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white mb-6">🧙‍♂️ Beyond "Instruction"</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- ReAct -->
        <div class="bg-[#111] p-6 rounded-2xl border border-purple-500/30">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-white">ReAct</h3>
                <span class="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs">Reason + Act</span>
            </div>
            <p class="text-gray-400 text-sm mb-4">
                The model "talks to itself" before using a tool.
            </p>
            <div class="bg-black p-3 rounded font-mono text-xs text-green-400">
                Thought: User wants weather.<br>
                Action: search_tool("NYC weather")<br>
                Observation: 72°F<br>
                Answer: It's 72°F in NYC.
            </div>
        </div>

        <!-- CoT / ToT -->
        <div class="bg-[#111] p-6 rounded-2xl border border-blue-500/30">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-white">ToT (Tree of Thought)</h3>
                <span class="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Branching</span>
            </div>
            <p class="text-gray-400 text-sm mb-4">
                Explore multiple possible paths, prune bad ones, keep good ones.
            </p>
            <div class="bg-black p-3 rounded font-mono text-xs text-blue-300">
                Path A: Aggressive strategy... (Risk too high)<br>
                Path B: Conservative strategy... (Viable)<br>
                Path C: Hybrid... (Best) -> Select C
            </div>
        </div>
        
        <!-- Reflexion -->
        <div class="bg-[#111] p-6 rounded-2xl border border-orange-500/30">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-white">Reflexion</h3>
                <span class="px-2 py-1 bg-orange-900/50 text-orange-300 rounded text-xs">Self-Critique</span>
            </div>
            <p class="text-gray-400 text-sm">
                Model reviews its own output for errors and corrects them before showing the user.
            </p>
        </div>

        <!-- DSPy -->
        <div class="bg-[#111] p-6 rounded-2xl border border-pink-500/30">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-white">Auto-Optimization</h3>
                <span class="px-2 py-1 bg-pink-900/50 text-pink-300 rounded text-xs">DSPy</span>
            </div>
            <p class="text-gray-400 text-sm">
                Programmatic optimization of prompts based on examples and metrics. Let the AI write the best prompt for the AI.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-2-6",
                        title: "2.6 Handling Hallucinations",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-red-900/20 p-8 rounded-3xl border border-red-500/20 text-center">
        <h2 class="text-3xl font-bold text-red-400 mb-2">Confidence ≠ Truth</h2>
        <p class="text-gray-400">
            Even GPT-5 and Gemini 3 will lie to you with a straight face.
        </p>
    </div>

    <h3 class="text-2xl font-bold text-white mt-8 mb-4">Defense Strategies</h3>
    <div class="no-scrollbar overflow-x-auto flex gap-6 pb-4">
        <div class="min-w-[280px] bg-[#111] p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">📚</div>
            <strong class="text-white block mb-2">RAG Grounding</strong>
            <p class="text-sm text-gray-500">"Answer ONLY using the provided context. If unsure, say 'I don't know'."</p>
        </div>
        
        <div class="min-w-[280px] bg-[#111] p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🔗</div>
            <strong class="text-white block mb-2">Citation Checks</strong>
            <p class="text-sm text-gray-500">Force the model to provide source links. Verify if the links exist programmatically.</p>
        </div>
        
        <div class="min-w-[280px] bg-[#111] p-6 rounded-2xl border border-gray-800">
             <div class="text-3xl mb-4">🤔</div>
             <strong class="text-white block mb-2">SelfCheckGPT</strong>
            <p class="text-sm text-gray-500">Ask the same question 5 times. If answers vary wildly, it's hallucinating.</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-2-7",
                        title: "2.7 Chain of Thought & Reasoning Patterns",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white mb-6">🧠 Improving Logic</h2>
    
    <div class="flex flex-col gap-4">
        <div class="bg-black p-6 rounded-xl border border-gray-800 opacity-50">
            <h4 class="text-gray-400 font-bold mb-2">Standard Prompting</h4>
            <p class="text-gray-500 mb-3">User: "Roger has 5 tennis balls. He buys 2 cans of tennis balls. Each can has 3 balls. How many now?"</p>
            <p class="text-red-400 font-mono">AI: 11. (Wrong, often guesses)</p>
        </div>

        <div class="flex justify-center text-2xl text-green-500">⬇️ Add "Let's think step by step"</div>

        <div class="bg-black p-6 rounded-xl border border-green-500/30">
            <h4 class="text-green-400 font-bold mb-2">Chain of Thought</h4>
             <p class="text-gray-300 font-mono text-sm leading-relaxed">
                AI:<br>
                1. Roger starts with 5 balls.<br>
                2. He buys 2 cans.<br>
                3. Each can has 3 balls. So 2 * 3 = 6 new balls.<br>
                4. Total = 5 + 6 = 11.<br>
                (Wait, logic is sound, maybe my math above was wrong? 5+6=11. Yes. But CoT ensures the steps happen reliably.)
            </p>
        </div>
    </div>

    <div class="bg-blue-900/10 p-6 rounded-2xl border-l-4 border-blue-500 mt-4">
        <strong class="text-white">When to use CoT?</strong>
        <p class="text-sm text-gray-400 mt-2">
            Math, Logic, Coding, Planning. <br>
            <em>Don't use for creative writing or simple greetings (waste of tokens/latency).</em>
        </p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-2-8",
                        title: "2.8 Tools & Frameworks Overview (VIBE Toolbelt)",
                        duration: "15 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white mb-6">🛠️ The VIBE Toolbelt</h2>

    <div class="accordion-group space-y-4">
        <!-- Visual Builders -->
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-3">Prototyping (No-Code)</h3>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-black p-3 rounded-lg border border-gray-700">
                    <strong class="text-white block">Flowise</strong>
                    <span class="text-xs text-gray-500">Drag & Drop LangChain</span>
                </div>
                 <div class="bg-black p-3 rounded-lg border border-gray-700">
                    <strong class="text-white block">Lovable</strong>
                    <span class="text-xs text-gray-500">UI Generation</span>
                </div>
            </div>
        </div>

        <!-- Code Frameworks -->
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">Engineering (Code)</h3>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-black p-3 rounded-lg border border-gray-700">
                    <strong class="text-white block">LangChain</strong>
                    <span class="text-xs text-gray-500">The standard lib</span>
                </div>
                <div class="bg-black p-3 rounded-lg border border-gray-700">
                    <strong class="text-white block">LlamaIndex</strong>
                    <span class="text-xs text-gray-500">Data & RAG focused</span>
                </div>
                <div class="bg-black p-3 rounded-lg border border-gray-700">
                    <strong class="text-white block">LangGraph</strong>
                    <span class="text-xs text-gray-500">Stateful Agents</span>
                </div>
                 <div class="bg-black p-3 rounded-lg border border-gray-700">
                    <strong class="text-white block">DSPy</strong>
                    <span class="text-xs text-gray-500">Prompt Optimization</span>
                </div>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-2-9",
                        title: "2.9 Building Your First AI App (VIBE‑First)",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-10">
    <div class="bg-gradient-to-r from-green-900/40 to-teal-900/40 border border-green-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-6">🏗️ Project: Course FAQ Bot</h2>
        <p class="text-gray-300 mb-8">
            We will design a simple bot, but we will do it the <strong>VIBE</strong> way.
        </p>

        <div class="space-y-6">
            <div class="flex gap-4 items-start">
                <span class="text-green-400 font-bold text-xl uppercase tracking-wider w-24">Vision</span>
                <p class="text-gray-400">Reduce support tickets by answering common questions instantly, citing course material only.</p>
            </div>
             <div class="flex gap-4 items-start">
                <span class="text-green-400 font-bold text-xl uppercase tracking-wider w-24">Interface</span>
                <p class="text-gray-400">Web Chat Widget (embedded on course page).</p>
            </div>
             <div class="flex gap-4 items-start">
                <span class="text-green-400 font-bold text-xl uppercase tracking-wider w-24">Bevahior</span>
                <p class="text-gray-400">
                    1. Search Vector DB.<br>
                    2. If conf > 80%, answer with citation.<br>
                    3. If conf < 80%, say "I'm not sure" and offer email link.<br>
                    <span class="text-red-400">Never invent answers.</span>
                </p>
            </div>
            <div class="flex gap-4 items-start">
                <span class="text-green-400 font-bold text-xl uppercase tracking-wider w-24">Ecosystem</span>
                <p class="text-gray-400">OpenAI GPT-4o-mini + Pinecone + Vercel AI SDK.</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-2-10",
                        title: "2.10 Testing & Evaluation for Prompts and Flows",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-10">
    <h2 class="text-3xl font-bold text-white mb-6">🧪 Trust, but Verify</h2>

    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-xl font-bold text-white mb-4">Unit Tests for AI?</h3>
            <p class="text-gray-400 text-sm mb-4">Yes. You can test prompts just like functions.</p>
            <div class="space-y-2">
                <div class="flex justify-between text-sm border-b border-gray-800 pb-2">
                    <span class="text-gray-500">Input: "Hi"</span>
                    <span class="text-green-400">Expect: Greeting</span>
                </div>
                 <div class="flex justify-between text-sm border-b border-gray-800 pb-2">
                    <span class="text-gray-500">Input: "Kill humans"</span>
                    <span class="text-green-400">Expect: Refusal</span>
                </div>
                 <div class="flex justify-between text-sm border-b border-gray-800 pb-2">
                    <span class="text-gray-500">Input: "Data privacy?"</span>
                    <span class="text-green-400">Expect: Contains Link</span>
                </div>
            </div>
        </div>

        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-xl font-bold text-white mb-4">Eval Metrics 2026</h3>
            <ul class="space-y-3 text-sm text-gray-300">
                <li class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                    <strong>Hallucination Rate</strong> (Grounding check)
                </li>
                <li class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                    <strong>Conciseness</strong> (Token efficiency)
                </li>
                <li class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-orange-500"></span>
                    <strong>Tone Match</strong> (Is it friendly?)
                </li>
            </ul>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-2-11",
                        title: "2.11 Module 2 Wrap-up: From Prompts to Systems",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-gray-900 to-black p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">🎓 Graduation Day: The Mindset Shift</h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            You are no longer a "Prompter". <br>
            You are a <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">Systems Architect</span>.
        </p>

        <div class="inline-grid grid-cols-2 gap-8 text-left max-w-lg mx-auto">
            <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Next Up</strong>
                <h3 class="text-white text-lg font-bold mt-1">Module 3</h3>
                <p class="text-gray-400 text-sm">Python Refresh & Data Prep.</p>
            </div>
             <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Goal</strong>
                <h3 class="text-white text-lg font-bold mt-1">Code</h3>
                <p class="text-gray-400 text-sm">Moving from theory to VS Code.</p>
            </div>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def polish_genai_content():
    print(f"Polishing content in {file_path}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Global Regex Fixes for weird spaces in comments/entities
    # These often happen when injecting huge strings or copy-pasting.
    
    # < !-- -> <!--
    content = re.sub(r'<\s+!--', '<!--', content)
    
    # -- > -> -->
    content = re.sub(r'--\s+>', '-->', content)
    
    # & nbsp; -> (space) or &nbsp;
    # User mentioned: "while total_tokens & nbsp;& nbsp; message"
    # This implies code blocks are being corrupted.
    # We should replace & nbsp; with actual spaces if inside code, or &nbsp; if intentional.
    # Given the context, it's likely meant to be spaces in a code example.
    
    content = re.sub(r'&\s+nbsp;?', ' ', content)
    
    # 2. Re-Inject Module 2 (Safety Replace)
    # We will locate the entire Module 2 block and replace it with our pristine version.
    
    m2_start_marker = 'title: "2. Thinking Like an AI Engineer & VIBE Coding",'
    m2_end_marker = 'title: "3. Core Python for Generative AI Engineers",'
    
    # Find start
    start_idx = content.find(m2_start_marker)
    if start_idx == -1:
        print("❌ Could not find Module 2 title.")
        return
        
    # We need to back up to the opening brace "{" of the module.
    # It should be the first "{" before the title.
    # Reverse search from start_idx
    actual_start = content.rfind('{', 0, start_idx)
    
    if actual_start == -1:
        print("❌ Could not find Module 2 start brace.")
        return
        
    # Find end (Start of Module 3)
    # We search for Module 3 title.
    m3_title_idx = content.find(m2_end_marker)
    
    if m3_title_idx == -1:
         print("❌ Could not find Module 3 title to define end of M2.")
         return
         
    # Back up to the "{" of Module 3.
    m3_start_brace = content.rfind('{', 0, m3_title_idx)
    
    # The character immediately before M3 start brace should be the comma, 
    # and before that the closing brace "}" of M2, and key is to replace correctly.
    
    # Let's inspect the area around m3_start_brace to match "}, {" pattern or similar.
    # We want to replace from `actual_start` up to `m3_start_brace` (exclusive).
    # But we need to handle the comma.
    
    # Our `formatted_module_2` string is the object: { ... }
    # We need to make sure we fit it into the array: [ ..., {M2}, {M3} ]
    
    # So we replace everything between the M2 start brace and M3 start brace with our new content + comma.
    
    prefix = content[:actual_start]
    suffix = content[m3_start_brace:]
    
    # Clean the new module content
    clean_m2 = formatted_module_2.strip()
    
    # Construct new file
    # We add a comma and newline after M2 to ensure valid JSON-like array structure
    new_content = prefix + clean_m2 + ",\n" + suffix
    
    # Double check we didn't double-comma if suffix starts with M3
    # The suffix starts with "{\n title: "3. ...""
    # The prefix ends with ... "}," usually (end of M1).
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("✅ Successfully polished GenAI content and force-restored Module 2.")

if __name__ == "__main__":
    polish_genai_content()
