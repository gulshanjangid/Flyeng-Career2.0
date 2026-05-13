
import os

# Define the hyper-enhanced content for Module 16
module_16_content = """
            {
                id: "genai-16",
                title: "Module 16: The Future of AI (Grand Finale)",
                description: "Peer into the event horizon of AGI, ASI, and the post-labor economy. Master the theoretical frontiers that will define the next decade.",
                completed: 0,
                total: 5,
                progress: 0,
                isLocked: false,
                lessons: [
                    {
                        id: "genai-16-1",
                        title: "16.1 The Path to AGI: Scaling Laws & Compute",
                        type: "video",
                        duration: "45 mins",
                        completed: false,
                        videoUrl: "https://www.youtube.com/embed/zSdkpUkLTjU",
                        content: `
                            <div class="space-y-8 text-slate-300 font-light leading-relaxed">
                                
                                <!-- Hero Section with Animated Gradient -->
                                <div class="relative overflow-hidden rounded-2xl p-8 bg-black border border-white/10 shadow-2xl">
                                    <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-cyan-900/40 opacity-50 contrast-125 animate-pulse"></div>
                                    <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                        <div class="flex-1">
                                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4 uppercase tracking-widest">
                                                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                                                Theoretical Physics of AI
                                            </div>
                                            <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4 tracking-tight">
                                                The Path to AGI
                                            </h1>
                                            <p class="text-lg text-slate-300 max-w-xl">
                                                Are we merely scaling data, or are we witnessing the emergence of a new form of digital consciousness? Understanding the <span class="text-cyan-400 font-semibold">Scaling Laws</span> is the key to predicting the future.
                                            </p>
                                        </div>
                                        <div class="w-full md:w-1/3">
                                            <div class="aspect-square rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 blur-3xl animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Deep Theory: The Chinchilla Optimality -->
                                <div class="prose prose-invert max-w-none">
                                    <h3 class="flex items-center gap-3 text-2xl font-bold text-white mt-12 mb-6">
                                        <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 text-sm">01</span>
                                        The God Equation: Chinchilla Scaling
                                    </h3>
                                    <div class="bg-white/5 backdrop-blur-sm border-l-4 border-blue-500 rounded-r-xl p-6 mb-8 hover:bg-white/10 transition-colors">
                                        <p class="text-lg italic text-slate-300 m-0">
                                            "Compute is the new oil, but data is the oxygen. Starve the model of either, and it suffocates."
                                        </p>
                                    </div>
                                    <p>
                                        The <strong>Kaplan Scaling Laws</strong> (2020) suggested that parameter count was king. If you made the model bigger, it got smarter. Period. But DeepMind's <strong>Chinchilla</strong> paper (2022) shattered this simplistic view, revealing a precise, compute-optimal frontier:
                                    </p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div class="group relative bg-[#0A0A0A] rounded-xl border border-white/10 p-6 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
                                            <div class="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
                                            <h4 class="text-blue-400 font-semibold mb-2">The Ratio</h4>
                                            <div class="text-4xl font-bold text-white mb-2">20:1</div>
                                            <p class="text-sm text-slate-400">Tokens per Parameter</p>
                                            <p class="mt-4 text-sm text-slate-300 leading-relaxed">
                                                For every parameter in your model, you need approximately 20 tokens of high-quality training data to be compute-optimal.
                                            </p>
                                        </div>
                                        <div class="group relative bg-[#0A0A0A] rounded-xl border border-white/10 p-6 overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                                            <div class="absolute inset-0 bg-purple-600/5 group-hover:bg-purple-600/10 transition-colors"></div>
                                            <h4 class="text-purple-400 font-semibold mb-2">The Implication</h4>
                                            <div class="text-4xl font-bold text-white mb-2">Data Wall</div>
                                            <p class="text-sm text-slate-400">We Are Running Out</p>
                                            <p class="mt-4 text-sm text-slate-300 leading-relaxed">
                                                We have scraped the entire public internet. To scale further, we need synthetic data generation (Model Collapse risks) or embodiment.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Interactive Concept: emergent Properties -->
                                <div class="my-12">
                                    <h3 class="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                                        <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm">02</span>
                                        Emergence: Magic from Scale
                                    </h3>
                                    <div class="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-2xl p-8 border border-emerald-500/20">
                                        <p class="mb-6">
                                            <strong>Emergence</strong> is when a system exhibits properties that its constituent parts do not have. Individual neurons don't know arithmetic. But 100 Billion of them? They can prove theorems.
                                        </p>
                                        <div class="space-y-4">
                                            <div class="flex items-center gap-4 p-4 bg-black/40 rounded-lg border border-white/5">
                                                <div class="w-16 text-right font-mono text-slate-500">10M</div>
                                                <div class="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                                                    <div class="h-full bg-emerald-500/30 w-[10%]"></div>
                                                </div>
                                                <div class="text-sm text-slate-400">Coherent sentences</div>
                                            </div>
                                            <div class="flex items-center gap-4 p-4 bg-black/40 rounded-lg border border-white/5">
                                                <div class="w-16 text-right font-mono text-slate-500">1B</div>
                                                <div class="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                                                    <div class="h-full bg-emerald-500/50 w-[30%]"></div>
                                                </div>
                                                <div class="text-sm text-slate-400">Basic arithmetic & translation</div>
                                            </div>
                                            <div class="flex items-center gap-4 p-4 bg-black/40 rounded-lg border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                                <div class="w-16 text-right font-mono text-emerald-400 font-bold">100B+</div>
                                                <div class="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                                                    <div class="h-full bg-emerald-400 w-[90%] animate-pulse"></div>
                                                </div>
                                                <div class="text-sm text-emerald-300 font-semibold">Coding, Reasoning, Theory of Mind</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `,
                        questions: []
                    },
                    {
                        id: "genai-16-2",
                        title: "16.2 Beyond Transformers: The Next Architecture",
                        type: "video",
                        duration: "40 mins",
                        completed: false,
                        content: `
                            <div class="space-y-8 text-slate-300 font-light leading-relaxed">
                                 <div class="relative overflow-hidden rounded-2xl p-8 bg-black border border-white/10 shadow-2xl">
                                    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-orange-900/20 to-black opacity-60"></div>
                                    <h1 class="relative z-10 text-4xl font-bold text-white mb-4">Is Attention *All* You Need?</h1>
                                    <p class="relative z-10 text-lg text-slate-300">
                                        The Transformer has reigned supreme since 2017. But its quadratic complexity is a ticking time bomb. What comes next?
                                    </p>
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                        <h3 class="text-xl font-bold text-amber-400 mb-4">The Bottleneck</h3>
                                        <p class="text-sm text-slate-400 mb-4">
                                            For a context window of length N, attention costs N².
                                        </p>
                                        <div class="space-y-2 font-mono text-xs">
                                            <div class="flex justify-between"><span>10k tokens</span> <span class="text-red-400">Heavy</span></div>
                                            <div class="flex justify-between"><span>100k tokens</span> <span class="text-red-500">Very Heavy</span></div>
                                            <div class="flex justify-between"><span>1M tokens</span> <span class="text-red-600 font-bold">Impossible?</span></div>
                                        </div>
                                    </div>
                                    <div class="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                        <h3 class="text-xl font-bold text-green-400 mb-4">The Challengers</h3>
                                        <ul class="space-y-3 text-sm">
                                            <li class="flex items-start gap-2">
                                                <span class="text-green-500">➜</span>
                                                <span><strong>Mamba / SSMs:</strong> Linear scaling state-space models. Infinite context?</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <span class="text-green-500">➜</span>
                                                <span><strong>Ring Attention:</strong> Distributing the context window across thousands of GPUs.</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <span class="text-green-500">➜</span>
                                                <span><strong>JEPA:</strong> Joint Embedding Predictive Architectures (LeCun's bet).</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        `,
                        questions: []
                    },
                    {
                        id: "genai-16-3",
                        title: "16.3 Superalignment & The Control Problem",
                        type: "reading",
                        duration: "35 mins",
                        completed: false,
                        content: `
                            <div class="space-y-8 text-slate-300">
                                <div class="p-8 rounded-2xl bg-gradient-to-b from-red-900/20 to-black border border-red-500/20">
                                    <h2 class="text-3xl font-bold text-red-100 mb-6">Can we control something smarter than us?</h2>
                                    <p class="text-lg leading-relaxed mb-6">
                                        This is the <strong>Alignment Problem</strong>. If we build ASI (Artificial Super Intelligence), traditional RLHF (human feedback) fails because humans can no longer evaluate the model's output.
                                    </p>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div class="bg-black/50 p-4 rounded-lg border border-red-500/10">
                                            <h4 class="text-red-400 font-bold mb-2">The Gorilla Problem</h4>
                                            <p class="text-sm text-slate-400">Gorillas are physically stronger than humans, yet humans control the planet. Why? Intelligence. We are building the Gorilla.</p>
                                        </div>
                                        <div class="bg-black/50 p-4 rounded-lg border border-red-500/10">
                                            <h4 class="text-red-400 font-bold mb-2">Paperclip Maximizer</h4>
                                            <p class="text-sm text-slate-400">An AI told to "optimize production" might turn the entire solar system into paperclips without malice, just optimization.</p>
                                        </div>
                                    </div>
                                </div>

                                <h3 class="text-2xl font-bold text-white mt-12 mb-6">Solutions on the Horizon</h3>
                                <div class="space-y-6">
                                    <div class="group flex gap-6 items-start">
                                        <div class="w-12 h-12 shrink-0 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-all">
                                            <svg class="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                        </div>
                                        <div>
                                            <h4 class="text-xl font-bold text-white mb-2">RLAIF (AI Feedback)</h4>
                                            <p class="text-slate-400">Using a slightly smarter AI to supervise a slightly dumber AI, bootstrapping our way up the intelligence ladder.</p>
                                        </div>
                                    </div>
                                    <div class="group flex gap-6 items-start">
                                        <div class="w-12 h-12 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">
                                            <svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        </div>
                                        <div>
                                            <h4 class="text-xl font-bold text-white mb-2">Mechanistic Interpretability</h4>
                                            <p class="text-slate-400">We don't treat the model as a black box. We open the brain and map the neurons, like fMRI for LLMs. (See: Anthropic's work).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `,
                        questions: []
                    },
                    {
                        id: "genai-16-4",
                        title: "16.4 Post-Labor Economics & Abundance",
                        type: "video",
                        duration: "50 mins",
                        completed: false,
                        content: `
                             <div class="space-y-8 text-slate-300">
                                 <div class="relative rounded-2xl overflow-hidden min-h-[300px] flex items-center justify-center">
                                    <img src="/api/placeholder/800/400" alt="Futuristic City" class="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                    <div class="relative z-10 text-center max-w-2xl px-4">
                                        <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">Zero Marginal Cost</h1>
                                        <p class="text-xl text-slate-300">What happens when the cost of intelligence falls to $0.00?</p>
                                    </div>
                                 </div>

                                 <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all group">
                                        <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📉</div>
                                        <h3 class="text-lg font-bold text-white mb-2">Deflationary Shock</h3>
                                        <p class="text-sm text-slate-400">Software, legal services, medical diagnosis, design—all become commodities.</p>
                                    </div>
                                    <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all group">
                                        <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
                                        <h3 class="text-lg font-bold text-white mb-2">Cognitive surplus</h3>
                                        <p class="text-sm text-slate-400">Humanity gains the equivalent of billions of PhDs working 24/7 on cancer, fusion, and spaceflight.</p>
                                    </div>
                                    <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all group">
                                        <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
                                        <h3 class="text-lg font-bold text-white mb-2">The Human Element</h3>
                                        <p class="text-sm text-slate-400">When AI does the work, human value shifts to curation, taste, connection, and "verifiable humanity".</p>
                                    </div>
                                 </div>
                             </div>
                        `,
                        questions: []
                    },
                    {
                        id: "genai-16-5",
                        title: "16.5 Your Future: The One-Person Unicorn",
                        type: "project",
                        duration: "60 mins",
                        completed: false,
                        content: `
                            <div class="space-y-12 text-slate-300">
                                <!-- Manifesto Card -->
                                <div class="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-black border border-white/10 text-center relative overflow-hidden">
                                    <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full"></div>
                                    <div class="relative z-10">
                                        <h2 class="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                                            The Billion Dollar <br/>
                                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Solo Founder</span>
                                        </h2>
                                        <p class="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                                            Sam Altman predicts that we will soon see the first billion-dollar company run by a single person. <strong>That person could be you.</strong>
                                        </p>
                                    </div>
                                </div>

                                <!-- The New Stack -->
                                <div>
                                    <h3 class="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-pink-500">The AI-Native Stack</h3>
                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div class="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <div class="text-xs text-slate-400 uppercase tracking-wider mb-2">Coding</div>
                                            <div class="font-bold text-white">Cursor + Claude 3.5</div>
                                        </div>
                                        <div class="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <div class="text-xs text-slate-400 uppercase tracking-wider mb-2">Design</div>
                                            <div class="font-bold text-white">Midjourney + AI Generator</div>
                                        </div>
                                        <div class="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <div class="text-xs text-slate-400 uppercase tracking-wider mb-2">Operations</div>
                                            <div class="font-bold text-white">AutoGPT Agents</div>
                                        </div>
                                        <div class="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <div class="text-xs text-slate-400 uppercase tracking-wider mb-2">Marketing</div>
                                            <div class="font-bold text-white">Jasper + RunGen</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Final Call to Action -->
                                <div class="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center">
                                    <h3 class="text-2xl font-bold text-white mb-4">Your Journey Begins Now</h3>
                                    <p class="text-slate-400 max-w-2xl mb-8">
                                        You have the tools. You have the knowledge. The barriers to entry have never been lower, but the bar for excellence has never been higher. Go build something that matters.
                                    </p>
                                    <button class="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                        Launch Your Career 🚀
                                    </button>
                                </div>
                            </div>
                        `,
                        questions: []
                    }
                ]
            }
"""

def replace_module_simple():
    file_path = r"c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts"
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Locate the start of Module 16 by its unique title in the file
    search_title = 'title: "16. AI Ecosystem, Careers & Product Thinking",'
    title_index = content.find(search_title)
    
    if title_index == -1:
        print("Error: Could not find Module 16 title string.")
        exit(1)
        
    # Walk backwards to find the opening brace '{'
    object_start = -1
    for i in range(title_index, -1, -1):
        if content[i] == '{':
            object_start = i
            break
            
    if object_start == -1:
        print("Error: Could not find opening brace for Module 16.")
        exit(1)
        
    # Find exact matching closing brace
    brace_count = 0
    object_end = -1
    
    for i in range(object_start, len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                object_end = i + 1 # include the brace
                break
                
    if object_end == -1:
        print("Error: Could not find matching closing brace.")
        exit(1)
        
    print(f"Replacing content from index {object_start} to {object_end}")
    
    new_file_content = content[:object_start] + module_16_content.strip() + content[object_end:]
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_file_content)
    
    print("Success: Module 16 replaced.")

if __name__ == "__main__":
    replace_module_simple()
