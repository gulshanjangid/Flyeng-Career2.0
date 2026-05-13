
# Module 8: Advanced Prompt Engineering & Reasoning Patterns
# Content Definitions

lessons_map = {
    "1": "From Nice Prompts to Reasoning Systems",
    "2": "Modern Prompt Design Blueprint (2026)",
    "3": "Role, Persona & System-Level Prompting",
    "4": "Chain-of-Thought & Deliberate Reasoning",
    "5": "Tree-of-Thought & Structured Search",
    "6": "ReAct, Reflexion & Self-Critique",
    "7": "Handling Hallucinations",
    "8": "Automated Prompt Optimization (DSPy)",
    "9": "Choosing the Right Strategy",
    "10": "Concept: The Prompt Contract",
    "11": "Mini Project: Reasoning Upgrade",
    "12": "Wrap-up"
}

# Lesson 8.1: From "Nice Prompts" to Reasoning Systems
content_8_1 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 text-5xl">🧠</div>
        <h2 class="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
            Reasoning Engineering
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Stop trying to find the "perfect magic words". Start building <span class="text-white font-bold">Systems of Thought</span>.
        </p>
    </div>

    <!-- The Paradigm Shift -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-slate-900 border border-slate-800 rounded-3xl opacity-70">
            <h3 class="text-2xl font-bold text-slate-500 mb-4">Old Way: "Prompt Engineering"</h3>
            <ul class="space-y-4 text-slate-400 font-mono text-sm">
                <li>❌ "Please be nice and helpful."</li>
                <li>❌ "I will tip you $200."</li>
                <li>❌ Tweaking adjectives endlessly.</li>
                <li>❌ Hoping the model "gets it".</li>
            </ul>
        </div>
        <div class="p-8 bg-indigo-950/30 border border-indigo-500/30 rounded-3xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
            <h3 class="text-2xl font-bold text-white mb-4">New Way: "Flow Engineering"</h3>
             <ul class="space-y-4 text-slate-300 font-mono text-sm">
                <li class="flex items-center gap-2"><span class="text-indigo-400">✅</span> Structured Context (XML/JSON)</li>
                <li class="flex items-center gap-2"><span class="text-indigo-400">✅</span> Few-Shot Examples (k-Shot)</li>
                <li class="flex items-center gap-2"><span class="text-indigo-400">✅</span> Chain-of-Thought (CoT)</li>
                <li class="flex items-center gap-2"><span class="text-indigo-400">✅</span> Multi-Turn Refinement</li>
            </ul>
        </div>
    </div>
</div>
"""

# Lesson 8.2: The Blueprint
content_8_2 = """
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white">The 2026 Prompt Blueprint</h2>
    <p class="text-slate-400">Every production prompt should follow this structure. No exceptions.</p>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Visual Structure -->
        <div class="space-y-4">
            <div class="p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                <span class="text-xs font-bold text-blue-400 uppercase tracking-widest">1. Persona</span>
                <p class="font-mono text-sm text-white mt-1">You are a Senior Python Backend Architect.</p>
            </div>
            <div class="p-4 bg-green-900/20 border border-green-500/30 rounded-xl">
                <span class="text-xs font-bold text-green-400 uppercase tracking-widest">2. Context</span>
                <p class="font-mono text-sm text-white mt-1">
                    <span class="text-slate-500">&lt;context&gt;</span><br>
                    User is building a RAG app on AWS.<br>
                    <span class="text-slate-500">&lt;/context&gt;</span>
                </p>
            </div>
            <div class="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-xl">
                 <span class="text-xs font-bold text-yellow-400 uppercase tracking-widest">3. Task</span>
                <p class="font-mono text-sm text-white mt-1">Refactor this code to use the Repository Pattern.</p>
            </div>
             <div class="p-4 bg-purple-900/20 border border-purple-500/30 rounded-xl">
                 <span class="text-xs font-bold text-purple-400 uppercase tracking-widest">4. Constraints</span>
                <p class="font-mono text-sm text-white mt-1">- No global variables.<br>- Use Type Hints.<br>- Return JSON only.</p>
            </div>
        </div>

        <!-- Code Block -->
        <div class="bg-[#0d1117] p-6 rounded-2xl border border-slate-800 font-mono text-xs overflow-x-auto text-slate-300">
            <span class="text-slate-500"># Production Prompt Template</span><br><br>
            SYSTEM_PROMPT = f"""<br>
            <span class="text-blue-400">### Role</span><br>
            You are an expert...<br><br>
            <span class="text-green-400">### Context</span><br>
            {{context}}<br><br>
            <span class="text-yellow-400">### Task</span><br>
            {{task}}<br><br>
            <span class="text-purple-400">### Output Format</span><br>
            Return valid JSON satisfying: {{schema}}<br>
            """
        </div>
    </div>
</div>
"""

# Lesson 8.4: Chain of Thought
content_8_4 = """
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white">Chain of Thought (CoT)</h2>
    <p class="text-slate-400">The single most effective technique for complex reasoning.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 bg-red-900/10 border border-red-500/20 rounded-xl text-center">
            <h3 class="font-bold text-red-400 mb-2">Standard Prompting</h3>
            <p class="text-sm text-white bg-black/40 p-3 rounded mb-2">
                Q: Roger has 5 balls. He buys 2 cans of 3 balls. How many now?<br>
                A: 11.
            </p>
            <p class="text-xs text-red-400 mt-2">❌ LLMs are bad at mental math.</p>
        </div>

        <div class="p-6 bg-emerald-900/10 border border-emerald-500/20 rounded-xl text-center">
            <h3 class="font-bold text-emerald-400 mb-2">Chain of Thought</h3>
            <p class="text-sm text-white bg-black/40 p-3 rounded mb-2 text-left font-mono text-xs">
                Q: Roger has 5 balls...<br>
                A: Let's think step by step.<br>
                1. Roger starts with 5.<br>
                2. 2 cans * 3 balls = 6 new balls.<br>
                3. Total = 5 + 6 = 11.
            </p>
            <p class="text-xs text-emerald-400 mt-2">✅ Forcing "Intermediate Steps" dramatically improves accuracy.</p>
        </div>
    </div>
</div>
"""

# Lesson 8.6: ReAct
content_8_6 = """
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white">ReAct: Reasoning + Acting</h2>
    <p class="text-slate-400">The loop that powers Agents.</p>
    
    <div class="relative bg-black p-8 rounded-3xl border border-slate-800 overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif')] opacity-5 mix-blend-screen pointer-events-none"></div>
        
        <div class="space-y-4 relative z-10 font-mono text-sm">
            <div class="text-blue-400">Thought:</div>
            <div class="text-slate-300 ml-4">I need to check the weather in Tokyo. I should use the `get_weather` tool.</div>
            
            <div class="text-yellow-400 mt-4">Action:</div>
            <div class="text-black bg-yellow-400 inline-block px-2 rounded ml-4">get_weather("Tokyo")</div>
            
            <div class="text-green-400 mt-4">Observation:</div>
            <div class="text-slate-300 ml-4">The API returned: "15°C, Rainy".</div>
            
            <div class="text-blue-400 mt-4">Thought:</div>
            <div class="text-slate-300 ml-4">It is rainy. I should recommend an umbrella.</div>
            
            <div class="text-white mt-4 font-bold border-t border-slate-700 pt-4">Final Answer: "Bring an umbrella, it's raining in Tokyo."</div>
        </div>
    </div>
</div>
"""

# Lesson 8.8: DSPy
content_8_8 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="flex items-center gap-4 mb-6">
        <div class="text-4xl">🔮</div>
        <h2 class="text-3xl font-bold text-white">DSPy: The End of "Prompt Engineering"?</h2>
    </div>
    <p class="text-slate-400 mb-8 max-w-2xl">
        DSPy (Declarative Self-improving Python) treats prompts like <strong>Machine Learning weights</strong>. You don't write prompts; you <strong>compile</strong> them.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
         <div class="p-6 bg-[#0a0a0a] border border-slate-800 rounded-2xl">
            <h3 class="text-red-400 font-bold mb-4">The Old Way (LangChain)</h3>
            <div class="text-slate-400">
                chain = PromptTemplate("Translate {{text}} to French") | LLM
            </div>
            <p class="mt-4 text-xs text-slate-500">You manually tweak the string "Translate..." until it works.</p>
         </div>

         <div class="p-6 bg-[#0a0a0a] border border-emerald-500/30 rounded-2xl">
            <h3 class="text-emerald-400 font-bold mb-4">The DSPy Way</h3>
             <div class="text-slate-300">
                class Translation(dspy.Signature):<br>
                &nbsp;&nbsp;input = dspy.InputField()<br>
                &nbsp;&nbsp;output = dspy.OutputField()<br><br>
                <span class="text-emerald-500"># The Optimizer writes the prompt for you</span><br>
                teleprompter.compile(student, trainset=data)
            </div>
         </div>
    </div>
</div>
"""

# Fillers for the rest
content_8_3 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Role & Persona</h2><p class="text-slate-400">Assigning specific identities to steer model behavior.</p></div>"""
content_8_5 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Tree of Thought</h2><p class="text-slate-400">Exploring multiple reasoning paths concurrently.</p></div>"""
content_8_7 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Handling Hallucinations</h2><p class="text-slate-400">Using verification steps and citations to ground truth.</p></div>"""
content_8_9 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Choosing the Right Strategy</h2><p class="text-slate-400">When to use CoT vs ReAct vs simple zero-shot.</p></div>"""
content_8_10 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">The Prompt Contract</h2><p class="text-slate-400">Designing prompts as stable APIs.</p></div>"""
content_8_11 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Mini Project: Reasoning Upgrade</h2><p class="text-slate-400">Applying these patterns to improve a complex task.</p></div>"""
content_8_12 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Module 8 Wrap-up</h2><p class="text-slate-400">You are now a Prompt Architect.</p></div>"""
