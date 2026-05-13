
# Module 9: AI Agents & Automation
# Content Definitions

lessons_map = {
    "1": "What Are AI Agents (2026 Reality)?",
    "2": "Agent Architecture: Brains, Tools, Memory",
    "3": "Function / Tool Calling: The Hands of the Agent",
    "4": "Tooling Best Practices & Safety",
    "5": "Agent Frameworks Landscape (LangGraph vs CrewAI)",
    "6": "LangGraph: Graph-Based Agent Workflows",
    "7": "Multi-Agent Systems: Roles & Handoffs",
    "8": "Memory for Agents: Short-Term vs Long-Term",
    "9": "Observability & Evaluation for Agents",
    "10": "Practical Use Cases: Data Analyst & Researcher",
    "11": "Mini Project: Your First Tool-Using Agent",
    "12": "Wrap-up"
}

# Lesson 9.1: What are Agents?
content_9_1 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-5xl">🤖</div>
        <h2 class="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-6">
            The Rise of Agents
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            LLMs are just text predictors. <span class="text-white font-bold">Agents</span> are text predictors with <span class="text-blue-400 font-bold">Hands</span>, <span class="text-green-400 font-bold">Eyes</span>, and a <span class="text-purple-400 font-bold">Plan</span>.
        </p>
    </div>

    <!-- Chain vs Agent -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-slate-900 border border-slate-800 rounded-3xl opacity-70">
            <h3 class="text-2xl font-bold text-slate-500 mb-4">The Chain (Pipeline)</h3>
            <p class="text-sm text-slate-400 mb-6">Defined A -> B -> C. Rigid. Predictable.</p>
             <div class="font-mono text-xs text-slate-500 bg-black p-4 rounded">
                Input -> Prompt -> LLM -> Output
            </div>
        </div>
        <div class="p-8 bg-orange-950/30 border border-orange-500/30 rounded-3xl relative overflow-hidden">
             <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <h3 class="text-2xl font-bold text-white mb-4">The Agent (Loop)</h3>
             <p class="text-sm text-slate-300 mb-6">Reason -> Act -> Observe -> Repeat. <br>The agent decides "What next?"</p>
             <div class="font-mono text-xs text-orange-300 bg-black p-4 rounded">
                while goal_not_met:<br>
                &nbsp;&nbsp;thought = brain.think()<br>
                &nbsp;&nbsp;action = brain.decide(tools)<br>
                &nbsp;&nbsp;result = perform(action)<br>
                &nbsp;&nbsp;brain.observe(result)
            </div>
        </div>
    </div>
</div>
"""

# Lesson 9.2: Architecture
content_9_2 = """
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white">Cognitive Architecture</h2>
    <p class="text-slate-400">The 4 components of every autonomous agent.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-6 bg-[#111] border border-slate-700 rounded-xl hover:border-blue-500 transition duration-300">
            <div class="text-4xl mb-4">🧠</div>
            <h3 class="font-bold text-white mb-2">Profile</h3>
            <p class="text-xs text-slate-400">The LLM Core (GPT-4o). Handles reasoning and planning instructions.</p>
        </div>
        <div class="p-6 bg-[#111] border border-slate-700 rounded-xl hover:border-green-500 transition duration-300">
            <div class="text-4xl mb-4">🛠️</div>
            <h3 class="font-bold text-white mb-2">Tools</h3>
            <p class="text-xs text-slate-400">Capabilities. Search, Calculator, API Calls, Code Interpreter.</p>
        </div>
        <div class="p-6 bg-[#111] border border-slate-700 rounded-xl hover:border-yellow-500 transition duration-300">
            <div class="text-4xl mb-4">📝</div>
            <h3 class="font-bold text-white mb-2">Memory</h3>
            <p class="text-xs text-slate-400">Short-term (Conversation History) & Long-term (Vector DB).</p>
        </div>
        <div class="p-6 bg-[#111] border border-slate-700 rounded-xl hover:border-purple-500 transition duration-300">
            <div class="text-4xl mb-4">🗺️</div>
            <h3 class="font-bold text-white mb-2">Planning</h3>
            <p class="text-xs text-slate-400">Decomposition (breaking down tasks) & Reflection (self-correction).</p>
        </div>
    </div>
</div>
"""

# Lesson 9.3: Tool Calling
content_9_3 = """
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white">Function Calling: The "Hands"</h2>
    <p class="text-slate-400">How LLMs press buttons. It's not magic; it's JSON Schema.</p>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        <!-- The Definition -->
        <div class="space-y-4">
            <div class="bg-black/40 p-4 rounded-xl border border-slate-700">
                 <div class="text-blue-400 text-xs font-bold mb-2">STEP 1: DEFINE TOOL</div>
                 <div class="font-mono text-[10px] text-slate-300">
                    tools = [{<br>
                    &nbsp;&nbsp;"type": "function",<br>
                    &nbsp;&nbsp;"function": {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"name": "get_stock_price",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"parameters": {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "object",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"properties": {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ticker": {"type": "string"}<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    &nbsp;&nbsp;}<br>
                    }]
                 </div>
            </div>
            
             <div class="bg-black/40 p-4 rounded-xl border border-slate-700">
                 <div class="text-green-400 text-xs font-bold mb-2">STEP 2: MODEL RESPONSE</div>
                 <div class="font-mono text-[10px] text-slate-300">
                    {<br>
                    &nbsp;&nbsp;"role": "assistant",<br>
                    &nbsp;&nbsp;"tool_calls": [{<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"id": "call_abc123",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"function": {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "get_stock_price",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"arguments": "{\\"ticker\\": \\"AAPL\\"}"<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    &nbsp;&nbsp;}]<br>
                    }
                 </div>
            </div>
        </div>

        <!-- The Execution -->
        <div class="bg-[#111] p-8 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center">
            <div class="text-4xl mb-6">⚡</div>
            <h3 class="text-white font-bold text-xl mb-4">The Execution Gap</h3>
            <p class="text-slate-400 text-sm mb-6">
                The LLM <strong>DOES NOT</strong> execute the code. It just generates the JSON.<br>
                <strong>YOU</strong> (the Python runtime) must parse the JSON, call the API, and feed the result back.
            </p>
             <div class="bg-red-900/20 text-red-400 text-xs px-4 py-2 rounded-full border border-red-500/30">
                CRITICAL CONCEPT
            </div>
        </div>
    </div>
</div>
"""

# Lesson 9.6: LangGraph
content_9_6 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="flex items-center gap-4 mb-6">
        <div class="p-3 bg-slate-800 rounded-xl border border-slate-700"><span class="text-2xl">🕸️</span></div>
        <h2 class="text-3xl font-bold text-white">LangGraph: Graphs > Chains</h2>
    </div>
    <p class="text-slate-400 mb-8 max-w-2xl">
        Why LangChain's linear chains failed for agents, and why <strong>State Machines (Graphs)</strong> are the 2026 standard.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- The Problem -->
        <div class="p-6 bg-[#0a0a0a] border border-slate-800 rounded-2xl">
            <h3 class="text-red-400 font-bold mb-4">The DAG (Direct Acyclic Graph)</h3>
            <p class="text-sm text-slate-500 mb-4">Traditional pipelines flow one way. Handling "Loops" (Retries, corrections) is hacky and confusing.</p>
            <div class="flex items-center gap-2 text-slate-600 font-mono text-xs">
                <span>Start</span> <span>→</span> <span>Step 1</span> <span>→</span> <span>Step 2</span> <span>→</span> <span>End</span>
            </div>
        </div>

        <!-- The Solution -->
        <div class="p-6 bg-[#0a0a0a] border border-blue-500/30 rounded-2xl">
            <h3 class="text-blue-400 font-bold mb-4">The Cyclic Graph (State Machine)</h3>
            <p class="text-sm text-slate-400 mb-4">Nodes and Edges. You can define loops, conditional jumps, and maintaining state across cycles.</p>
            <div class="flex items-center gap-2 text-white font-mono text-xs">
                <span>Start</span> <span>→</span> <span class="bg-blue-900/50 p-1 rounded">Agent</span> <span>⇄</span> <span class="bg-green-900/50 p-1 rounded">Tools</span>
            </div>
             <p class="text-xs text-slate-500 mt-2 ml-10">↑ Loops until done</p>
        </div>
    </div>
    
    <div class="p-6 bg-[#111] rounded-xl border border-slate-700 font-mono text-xs text-slate-300">
        <span class="text-blue-400">from</span> langgraph.graph <span class="text-blue-400">import</span> StateGraph<br><br>
        workflow = StateGraph(AgentState)<br>
        workflow.add_node(<span class="text-green-400">"agent"</span>, call_model)<br>
        workflow.add_node(<span class="text-green-400">"action"</span>, call_tool)<br><br>
        workflow.add_conditional_edges(<br>
        &nbsp;&nbsp;<span class="text-green-400">"agent"</span>,<br>
        &nbsp;&nbsp;should_continue,<br>
        &nbsp;&nbsp;{<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-yellow-400">"continue"</span>: <span class="text-green-400">"action"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-yellow-400">"end"</span>: END<br>
        &nbsp;&nbsp;}<br>
        )
    </div>
</div>
"""

# Lesson 9.7: Multi-Agent
content_9_7 = """
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white">Multi-Agent Systems</h2>
    <p class="text-slate-400">One genius vs. A team of specialists.</p>

    <!-- Router Pattern -->
    <div class="bg-black/40 p-6 rounded-2xl border border-slate-800 mb-6">
        <h3 class="text-xl font-bold text-white mb-4">Pattern 1: The Supervisor (Router)</h3>
        <p class="text-sm text-slate-400 mb-4">A generic "Boss" LLM routes tasks to workers.</p>
        <div class="flex justify-center items-center gap-4 text-xs font-mono">
            <div class="p-3 bg-purple-900/50 border border-purple-500 rounded-lg text-white">Supervisor</div>
            <div class="flex flex-col gap-2">
                 <div class="h-px w-8 bg-slate-600 rotate-45 translate-y-2"></div>
                 <div class="h-px w-8 bg-slate-600 -rotate-45 -translate-y-2"></div>
            </div>
            <div class="flex flex-col gap-4">
                 <div class="p-2 bg-slate-800 rounded border border-slate-700">Coder Agent</div>
                 <div class="p-2 bg-slate-800 rounded border border-slate-700">Research Agent</div>
            </div>
        </div>
    </div>

    <!-- Handoff Pattern -->
    <div class="bg-black/40 p-6 rounded-2xl border border-slate-800">
        <h3 class="text-xl font-bold text-white mb-4">Pattern 2: The Handoff (Network)</h3>
        <p class="text-sm text-slate-400 mb-4">Agents transfer control explicitly. "I can't handle this, passing to Sales."</p>
         <div class="flex justify-center items-center gap-4 text-xs font-mono">
            <div class="p-3 bg-blue-900/20 border border-blue-500 rounded-lg text-white">Triage</div>
            <span class="text-slate-500">→</span>
            <div class="p-3 bg-green-900/20 border border-green-500 rounded-lg text-white">Support</div>
            <span class="text-slate-500">→</span>
            <div class="p-3 bg-red-900/20 border border-red-500 rounded-lg text-white">Refunds</div>
        </div>
    </div>
</div>
"""

# Fillers
content_9_4 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Tool Safety</h2><p class="text-slate-400">Human-in-the-loop for file deletions and API writes.</p></div>"""
content_9_5 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Frameworks Landscape</h2><p class="text-slate-400">LangGraph (Control) vs CrewAI (Role-playing) vs AutoGen (Conversation).</p></div>"""
content_9_8 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Memory Systems</h2><p class="text-slate-400">Using MemGPT principles and Vector DBs for long-running agents.</p></div>"""
content_9_9 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Observability</h2><p class="text-slate-400">Tracing agent thoughts with LangSmith.</p></div>"""
content_9_10 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Case Study: Research Agent</h2><p class="text-slate-400">Building a GPT-Researcher clone.</p></div>"""
content_9_11 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Mini Project</h2><p class="text-slate-400">Building a CLI Agent that can manage your file system.</p></div>"""
content_9_12 = """<div class="p-10 text-center"><h2 class="text-3xl font-bold text-white">Module 9 Wrap-up</h2><p class="text-slate-400">You now possess the power of agency.</p></div>"""
