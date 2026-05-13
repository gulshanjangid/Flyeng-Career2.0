
def code_block(code, lang="java", filename="Main.java"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">{filename}</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

def key_concept_card(title, content, color="blue"):
    colors = {
        "blue": "border-blue-500/30 bg-blue-900/10 text-blue-400",
        "green": "border-green-500/30 bg-green-900/10 text-green-400",
        "orange": "border-orange-500/30 bg-orange-900/10 text-orange-400",
        "purple": "border-purple-500/30 bg-purple-900/10 text-purple-400",
        "red": "border-red-500/30 bg-red-900/10 text-red-400",
    }
    style = colors.get(color, colors["blue"])
    return f"""
    <div class="p-6 rounded-2xl border {style} mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            {title}
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">{content}</div>
    </div>
    """

module_18_lessons = [
    {
        "title": "18.1 Spring AI: LLM Theory & Tokens",
        "emoji": "🤖",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">How Large Language Models Work</h3>
                <p class="leading-relaxed mb-6">
                    LLMs (GPT-4, Claude) are "Stateless Predictors". They take a list of integers (Tokens) and predict the next integer.
                    They do NOT "think". They "complete".
                </p>

                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
                        <h4 class="font-bold text-blue-400 mb-2">Tokenization</h4>
                        <p class="text-sm text-slate-400 mb-2">Text is broken into chunks.</p>
                        <div class="font-mono text-xs bg-black p-2 rounded text-green-400">
                            "Java is cool" -> [1532, 318, 4321]
                        </div>
                        <p class="text-xs text-slate-500 mt-2">1 Token ≈ 0.75 words.</p>
                    </div>
                    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
                        <h4 class="font-bold text-purple-400 mb-2">Context Window</h4>
                        <p class="text-sm text-slate-400 mb-2">The limited memory of the model.</p>
                        <div class="w-full bg-slate-800 h-2 rounded-full mt-2">
                            <div class="bg-purple-500 h-2 rounded-full w-3/4"></div>
                        </div>
                        <p class="text-xs text-slate-500 mt-2">If you send too much text, the beginning is forgotten (Truncated).</p>
                    </div>
                </div>
            </section>

            {code_block("""
// Spring AI abstracts the HTTP calls
ChatClient client = new ChatClient(openAiService);

String response = client.prompt()
    .user("Explain Dependency Injection")
    .system("You are a Senior Java Architect. Be concise.") // Context
    .call()
    .content();
""", filename="SpringAI.java")}
        </div>
        """
    },
    {
        "title": "18.2 RAG: Vector Embeddings & Math",
        "emoji": "📐",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Semantic Search</h3>
                <p class="leading-relaxed mb-6">
                    How do we search for "Payment Issues" and find documents about "Billing Errors"? 
                    Keywords don't match. We use <strong>Vectors</strong>.
                </p>
                
                <h4 class="text-xl font-bold text-white mb-4">Embeddings</h4>
                <p class="text-sm text-slate-400 mb-4">An Embedding Model converts text into a fixed-size list of numbers (e.g., 1536 dimensions) representing its "Meaning".</p>

                <div class="bg-slate-900 p-6 rounded-xl border border-slate-700 font-mono text-xs mb-6">
                    <div class="mb-2"><span class="text-green-400">"King"</span> -> [0.9, 0.2, 0.5]</div>
                    <div class="mb-2"><span class="text-green-400">"Queen"</span> -> [0.9, 0.2, 0.9]</div>
                    <div class="mb-2"><span class="text-green-400">"Apple"</span> -> [0.1, 0.8, -0.2]</div>
                </div>
                
                <h4 class="text-xl font-bold text-white mb-4">Cosine Similarity</h4>
                <p class="text-sm text-slate-400">We calculate the angle between two vectors. Small angle = Similar meaning.</p>
            </section>
            
            {key_concept_card("RAG Architecture", "1. User asks question. <br> 2. Convert question to Vector. <br> 3. Find top 3 nearest vectors in DB. <br> 4. Feed those documents + Question to GPT-4.", "purple")}
        </div>
        """
    },
    {
        "title": "18.3 LangChain4j: Building Agents",
        "emoji": "🔗",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Give AI Tools</h3>
            <p>An Agent is an LLM that has access to "Functions" (Tools) and can decide when to call them.</p>

            {code_block("""
interface MathAgent {
    String chat(String msg);
}

class Tools {
    @Tool("Calculates square root")
    double sqrt(double x) { return Math.sqrt(x); }
}

MathAgent agent = AiServices.builder(MathAgent.class)
    .chatLanguageModel(model)
    .tools(new Tools()) // Give it tools!
    .build();

// LLM: "I need to calc sqrt of 25. Calling tool..."
// Tool: 5.0
// LLM: "The answer is 5.0"
agent.chat("What is sq root of 25?"); 
""", filename="Agent.java")}
        </div>
        """
    },
    {
        "title": "18.4 Final Project: Jarvis (CLI Assistant)",
        "emoji": "🤖",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Putting it all together</h3>
            <p>We build a CLI that indexes your source code into a Vector DB (PGVector) and lets you chat with it.</p>
            
            <div class="flex flex-col gap-2 font-mono text-sm bg-black p-6 rounded-xl border border-slate-800">
                <div class="text-green-400">$ jarvis ingest ./src</div>
                <div class="text-slate-500">Scanning 42 files...</div>
                <div class="text-slate-500">Generating Embeddings (OpenAI ada-002)...</div>
                <div class="text-slate-500">Stored 350 vectors in Postgres.</div>
                <br>
                <div class="text-green-400">$ jarvis "How does the Login work?"</div>
                <div class="text-slate-500">Searching... Found 3 relevant classes (AuthController.java, ...)</div>
                <div class="text-blue-400">Jarvis: The login flow uses JWTs. Specifically, the AuthController verifies credentials...</div>
            </div>
        </div>
        """
    }
]
