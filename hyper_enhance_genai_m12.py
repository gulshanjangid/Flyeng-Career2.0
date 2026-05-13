
# hyper_enhance_genai_m12.py
# Module 12: Fine-Tuning, SLMs & Local Inference (Advanced/Theoretical)

# 12.1 The Case for Fine-Tuning vs RAG
content_12_1 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6 text-5xl">🧬</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            To Train or To Retrieve?
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            The most common question in AI Engineering. The answer lies in the <strong>Knowledge vs. Behavior</strong> quadrant.
        </p>
    </div>

    <!-- The Quadrant Chart -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div class="bg-black p-8 rounded-3xl border border-slate-800 relative">
            <h3 class="text-2xl font-bold text-white mb-6 text-center">The Decision Matrix</h3>
            
            <!-- Matrix Visual -->
            <div class="relative h-64 border-l-2 border-b-2 border-slate-600 ml-6 mb-6">
                <!-- Labels -->
                <div class="absolute -left-10 top-1/2 -rotate-90 text-xs font-bold text-slate-500 tracking-widest">BEHAVIOR CHANGE</div>
                <div class="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 tracking-widest">KNOWLEDGE GAP</div>

                <!-- Quadrant 1: High Knowledge, Low Behavior -->
                <div class="absolute bottom-2 right-2 p-2 text-right">
                    <span class="text-purple-400 font-bold">RAG</span>
                    <p class="text-[10px] text-slate-400">New Facts (News, Docs)<br>Standard Style</p>
                </div>

                <!-- Quadrant 2: High Behavior, Low Knowledge -->
                <div class="absolute top-2 left-2 p-2">
                    <span class="text-pink-400 font-bold">Fine-Tuning</span>
                    <p class="text-[10px] text-slate-400">Specific Tone/Format<br>General Knowledge</p>
                </div>

                <!-- Quadrant 3: High Both -->
                <div class="absolute top-2 right-2 p-2 text-right">
                    <span class="text-orange-400 font-bold">RAG + FT</span>
                    <p class="text-[10px] text-slate-400">Complex Domain<br>New Syntax + New Facts</p>
                </div>
                 
                 <!-- Quadrant 4: Low Both -->
                <div class="absolute bottom-2 left-2 p-2">
                    <span class="text-green-400 font-bold">Prompt Eng</span>
                    <p class="text-[10px] text-slate-400">Standard Tasks<br>General Knowledge</p>
                </div>
            </div>
        </div>

        <div class="space-y-6">
             <div class="p-6 bg-purple-900/20 border border-purple-500/30 rounded-2xl">
                 <h4 class="text-lg font-bold text-purple-400 mb-2">Use RAG When...</h4>
                 <ul class="text-sm text-slate-300 list-disc list-inside space-y-2">
                     <li>The data changes frequently (Stock prices, News).</li>
                     <li>You need perfect factual accuracy (Citations).</li>
                     <li>The dataset is massive (1TB+ corporate wiki).</li>
                 </ul>
             </div>
             
             <div class="p-6 bg-pink-900/20 border border-pink-500/30 rounded-2xl">
                 <h4 class="text-lg font-bold text-pink-400 mb-2">Use Fine-Tuning When...</h4>
                 <ul class="text-sm text-slate-300 list-disc list-inside space-y-2">
                     <li>You need a specific <strong>Format</strong> (JSON, SQL, Medical Codes).</li>
                     <li>You need a specific <strong>Tone</strong> (Sarcastic, Legal, Brand Voice).</li>
                     <li>You need to reduce <strong>Latency/Cost</strong> (Replace GPT-4 prompt with Llama-3).</li>
                 </ul>
             </div>
        </div>
    </div>
</div>
"""

# 12.2 PEFT & LoRA: The Mathematics of Efficiency
content_12_2 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6 text-5xl">➗</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            The Math of LoRA
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Low-Rank Adaptation. How we train 70B parameter models on a single GPU by updating less than 1% of the weights.
        </p>
    </div>

    <!-- The Problem: Initial Training -->
    <div class="bg-[#111] p-8 rounded-3xl border border-slate-800 mb-12">
        <h3 class="text-2xl font-bold text-white mb-8">Why Full Fine-Tuning is Impossible</h3>
        <p class="text-slate-400 mb-6">
            To update a model weights matrix <code>W</code> ($d \\times d$), you need to store the gradients for every single parameter. For Llama-3-70B, that is hundreds of gigabytes of VRAM.
        </p>
        
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 font-mono text-xs">
            <!-- Full Matrix -->
            <div class="text-center">
                <div class="w-32 h-32 bg-slate-800 border-2 border-slate-600 grid grid-cols-4 gap-0.5 p-1 mb-2">
                    <div class="bg-slate-700/50"></div><div class="bg-slate-700/50"></div><div class="bg-slate-700/50"></div><div class="bg-slate-700/50"></div>
                     <div class="bg-slate-700/50"></div><div class="bg-slate-700/50"></div><div class="bg-slate-700/50"></div><div class="bg-slate-700/50"></div>
                     <div class="bg-slate-700/50"></div><div class="bg-slate-700/50"></div><div class="bg-slate-700/50"></div><div class="bg-slate-700/50"></div>
                     <div class="bg-slate-700/50"></div><div class="bg-slate-700/50"></div><div class="bg-slate-700/50"></div><div class="bg-slate-700/50"></div>
                </div>
                <div class="text-blue-400">ΔW (Billions of Params)</div>
            </div>
            
            <div class="text-3xl text-red-500">❌ OOM</div>
        </div>
    </div>

    <!-- The Solution: LoRA Decomposition -->
    <div class="bg-[#111] p-8 rounded-3xl border border-slate-800">
        <h3 class="text-2xl font-bold text-white mb-8">The LoRA Hypothesis</h3>
        <p class="text-slate-400 mb-6">
            Research shows that weight updates during adaptation have a <strong>Low Intrinsic Rank</strong>. We don't need to change everything. We can approximate the update $\\Delta W$ as the product of two tiny matrices, $A$ and $B$.
        </p>

        <div class="flex flex-col md:flex-row items-center justify-center gap-4 font-mono">
            <!-- W0 -->
            <div class="text-center">
                <div class="w-24 h-24 bg-blue-900/30 border border-blue-500 flex items-center justify-center text-blue-400 text-xl font-bold">W₀</div>
                <div class="mt-2 text-xs text-slate-500">Frozen Weights</div>
            </div>

            <div class="text-2xl text-white">+</div>

            <!-- B x A -->
            <div class="flex flex-col items-center">
                <div class="flex items-center gap-1">
                     <!-- B -->
                     <div class="w-8 h-24 bg-orange-900/30 border border-orange-500 flex items-center justify-center text-orange-400 text-sm">B</div>
                     <div class="text-slate-600">x</div>
                     <!-- A -->
                     <div class="w-24 h-8 bg-orange-900/30 border border-orange-500 flex items-center justify-center text-orange-400 text-sm">A</div>
                </div>
                <div class="mt-2 text-xs text-orange-400">Trainable Adapters (r=16)</div>
            </div>

            <div class="text-2xl text-white">=</div>
            
             <!-- W' -->
            <div class="text-center">
                <div class="w-24 h-24 bg-purple-900/30 border border-purple-500 flex items-center justify-center text-purple-400 text-xl font-bold">W'</div>
                <div class="mt-2 text-xs text-slate-500">Fine-Tuned Model</div>
            </div>
        </div>

        <div class="mt-8 p-4 bg-slate-900 rounded-xl border border-slate-700 text-center text-sm text-slate-300">
            <span class="text-orange-400 font-bold">The Magic:</span> $A$ and $B$ are tiny. <br>
            If $W$ is $4096 \\times 4096$ (16M params), and rank $r=8$:<br>
            $A$ is $4096 \\times 8$, $B$ is $8 \\times 4096$. Total = 65k params.<br>
            <strong>99.6% Reduction in Trainable Parameters.</strong>
        </div>
    </div>
</div>
"""

# 12.3 QLoRA & Quantization: Fitting 70B on 24GB VRAM
content_12_3 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-green-600/10 border border-green-500/20 mb-6 text-5xl">💾</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            The Physics of VRAM
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            How do we fit a whale into a swimming pool? <strong>Quantization</strong>.
        </p>
    </div>

    <!-- Data Types Explainer -->
    <div class="bg-[#111] p-8 rounded-3xl border border-slate-800 mb-12">
        <h3 class="text-2xl font-bold text-white mb-6">Bit Precision Matter</h3>
        
        <div class="space-y-4">
             <!-- FP32 -->
             <div class="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-700 opacity-50">
                 <div class="w-16 font-bold text-slate-500">FP32</div>
                 <div class="flex-1 h-4 bg-slate-800 rounded overflow-hidden">
                     <div class="w-full h-full bg-blue-500"></div>
                 </div>
                 <div class="text-xs font-mono text-slate-500">4 Bytes / Param</div>
             </div>

             <!-- FP16 -->
             <div class="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-700">
                 <div class="w-16 font-bold text-blue-400">FP16</div>
                 <div class="flex-1 h-4 bg-slate-800 rounded overflow-hidden">
                     <div class="w-1/2 h-full bg-blue-500"></div>
                 </div>
                 <div class="text-xs font-mono text-blue-400">2 Bytes / Param (Standard Inference)</div>
             </div>

             <!-- INT4 -->
             <div class="flex items-center gap-4 p-4 bg-green-900/20 rounded-xl border border-green-500/50">
                 <div class="w-16 font-bold text-green-400">INT4</div>
                 <div class="flex-1 h-4 bg-slate-800 rounded overflow-hidden">
                     <div class="w-1/8 h-full bg-green-500"></div>
                 </div>
                 <div class="text-xs font-mono text-green-400">0.5 Bytes / Param (QLoRA)</div>
             </div>
        </div>
    </div>

    <!-- QLoRA Innovation -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl">
            <h3 class="text-xl font-bold text-white mb-4">QLoRA Secret Sauce</h3>
            <ul class="space-y-4 text-sm text-slate-300">
                <li class="flex gap-3">
                    <span class="text-green-400">1.</span>
                    <span><strong>4-bit NormalFloat (NF4):</strong> A data type optimized for the bell-curve distribution of neural network weights. Better than standard Integer 4-bit.</span>
                </li>
                <li class="flex gap-3">
                    <span class="text-green-400">2.</span>
                    <span><strong>Double Quantization:</strong> We quantize the quantization constants to save even more memory (0.127 bits/param savings).</span>
                </li>
                <li class="flex gap-3">
                    <span class="text-green-400">3.</span>
                    <span><strong>Paged Optimizers:</strong> Using CPU RAM to handle optimizer spikes if the GPU runs out of memory.</span>
                </li>
            </ul>
        </div>

        <div class="p-8 bg-blue-900/10 border border-blue-500/30 rounded-3xl flex flex-col items-center justify-center text-center">
            <h3 class="text-xl font-bold text-blue-400 mb-2">The Result</h3>
            <p class="text-4xl font-extrabold text-white mb-2">Llama-3-70B</p>
            <p class="text-sm text-slate-400 mb-6">Training on a <strong>Single 48GB GPU</strong></p>
            <div class="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-mono">
                load_in_4bit=True
            </div>
        </div>
    </div>
</div>
"""

# 12.4 Dataset Curation: "Textbooks Are All You Need"
content_12_4 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6 text-5xl">📚</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Data Quality > Quantity
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Garbage In, Garbage Out. Microsoft's Phi-3 proved that 1B tokens of "Textbook Quality" data beats 1T tokens of web scrape.
        </p>
    </div>

    <!-- The Dataset Pyramid -->
    <div class="flex justify-center mb-12">
         <div class="relative w-full max-w-lg">
             <!-- Base -->
             <div class="h-16 bg-slate-800 w-full flex items-center justify-center text-slate-500 text-xs clip-trapezoid-bottom">
                 Raw Web Scrape (CommonCrawl) - 100T Tokens
             </div>
             <!-- Middle -->
             <div class="h-16 bg-blue-900/50 w-[80%] mx-auto flex items-center justify-center text-blue-300 text-xs mt-1">
                 Filtered & Deduplicated
             </div>
             <!-- Top -->
             <div class="h-16 bg-yellow-600/50 w-[60%] mx-auto flex items-center justify-center text-yellow-300 text-xs mt-1">
                 Synthetic (Textbook) Data
             </div>
             <!-- Peak -->
             <div class="h-16 bg-yellow-400 w-[30%] mx-auto flex items-center justify-center text-black font-bold text-xs mt-1 rounded-t-lg">
                 Golden Instruction Set
             </div>
         </div>
    </div>

    <!-- Synthetic Data Generation -->
    <div class="bg-[#111] p-8 rounded-3xl border border-slate-800">
        <h3 class="text-2xl font-bold text-white mb-6">How to Generate "Golden" Data</h3>
        <p class="text-slate-400 mb-6">
            We don't just write datasets manually. We use <strong>Teacher Models</strong> (GPT-4) to generating training data for <strong>Student Models</strong> (Phi-3 / Llama-3-8B).
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <!-- Step 1 -->
            <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl">
                <div class="text-[10px] text-green-400 font-bold mb-2">PROMPT (To GPT-4)</div>
                <div class="font-mono text-[10px] text-slate-300">
                    "Write 5 complex Python coding challenges involving recursion, but explain the solution step-by-step like a professor."
                </div>
            </div>

            <!-- Step 2 -->
            <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl">
                <div class="text-[10px] text-yellow-400 font-bold mb-2">OUTPUT (Dataset Entry)</div>
                <div class="font-mono text-[10px] text-slate-300">
                    {<br>
                    &nbsp;&nbsp;"instruction": "Implement fibonacci...",<br>
                    &nbsp;&nbsp;"input": "",<br>
                    &nbsp;&nbsp;"output": "Here is the solution..."<br>
                    }
                </div>
            </div>
        </div>
    </div>
</div>
"""

# 12.5 The Rise of SLMs (Phi-3, Llama-3-8B, Gemma)
content_12_5 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-indigo-600/10 border border-indigo-500/20 mb-6 text-5xl">📱</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Small Language Models (SLMs)
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Bigger isn't always better. Why run a semi-truck (GPT-4) to deliver a pizza (JSON formatting)?
        </p>
    </div>

    <!-- The SLM Landscape -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <!-- Phi-3 -->
        <div class="bg-[#111] p-6 rounded-3xl border border-slate-800 hover:border-blue-500 transition-colors">
            <div class="text-center mb-4">
                <span class="text-4xl">💎</span>
            </div>
            <h3 class="text-xl font-bold text-white text-center mb-2">Microsoft Phi-3</h3>
            <p class="text-xs text-slate-400 text-center mb-4">3.8B Parameters</p>
            <ul class="text-xs text-slate-500 space-y-2">
                <li>• Trained on "Textbook Quality" data.</li>
                <li>• Rivaling GPT-3.5 performance.</li>
                <li>• Runs on iPhone 15 Pro.</li>
            </ul>
        </div>

        <!-- Llama-3-8B -->
        <div class="bg-[#111] p-6 rounded-3xl border border-indigo-500 shadow-lg shadow-indigo-900/20">
            <div class="text-center mb-4">
                <span class="text-4xl">🦙</span>
            </div>
            <h3 class="text-xl font-bold text-indigo-400 text-center mb-2">Llama-3-8B</h3>
            <p class="text-xs text-slate-400 text-center mb-4">8B Parameters</p>
            <ul class="text-xs text-slate-300 space-y-2">
                <li>• The Open Weights Standard.</li>
                <li>• Massive 15T token training set.</li>
                <li>• Perfect for RAG & Agentic Tool use.</li>
            </ul>
        </div>

        <!-- Gemma 2 -->
        <div class="bg-[#111] p-6 rounded-3xl border border-slate-800 hover:border-emerald-500 transition-colors">
            <div class="text-center mb-4">
                <span class="text-4xl">💎</span>
            </div>
            <h3 class="text-xl font-bold text-white text-center mb-2">Google Gemma 2</h3>
            <p class="text-xs text-slate-400 text-center mb-4">9B Parameters</p>
            <ul class="text-xs text-slate-500 space-y-2">
                <li>• Distilled from Gemini architecture.</li>
                <li>• Strong reasoning capabilities.</li>
                <li>• Integrated with Keras & JAX.</li>
            </ul>
        </div>
    </div>

    <!-- Architectural Secrets -->
    <div class="bg-slate-900 border border-slate-700 rounded-3xl p-8">
        <h3 class="text-xl font-bold text-white mb-6">Why are they so capable?</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h4 class="font-bold text-blue-400 text-sm mb-2">1. Grouped Query Attention (GQA)</h4>
                <p class="text-xs text-slate-400">
                    Instead of every attention head having its own Key/Value cache (memory heavy), groups of heads share KV pairs. This reduces VRAM usage by 4-8x, allowing bigger context windows on consumer GPUs.
                </p>
            </div>
            <div>
                <h4 class="font-bold text-lg text-purple-400 text-sm mb-2">2. Sliding Window Attention</h4>
                <p class="text-xs text-slate-400">
                    (Used in Mistral/Gemma) The model only looks at a fixed window of recent tokens (e.g., 4096) rather than the entire history, drastically speeding up inference while maintaining local coherence.
                </p>
            </div>
        </div>
    </div>
</div>
"""

# 12.6 Hands-on: Fine-Tuning Llama-3 with Unsloth
content_12_6 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-orange-600/10 border border-orange-500/20 mb-6 text-5xl">🦥</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Enter Unsloth
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            We will use <strong>Unsloth</strong> to fine-tune Llama-3 2x faster and with 60% less memory than standard HuggingFace trainers.
        </p>
    </div>

    <!-- The Code Walkthrough -->
    <div class="bg-[#050505] p-6 rounded-3xl border border-slate-800 overflow-hidden relative">
        <div class="absolute top-0 right-0 p-2 opacity-50 text-[100px]">🐍</div>
        
        <div class="space-y-8 relative z-10">
            
            <!-- Step 1: Init -->
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">1</div>
                    <h3 class="text-blue-400 text-sm font-bold">Load Model (4-bit Quantized)</h3>
                </div>
                <div class="bg-slate-900/50 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                    <span class="text-purple-400">from</span> unsloth <span class="text-purple-400">import</span> FastLanguageModel<br><br>
                    
                    model, tokenizer = FastLanguageModel.from_pretrained(<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;model_name = <span class="text-green-400">"unsloth/llama-3-8b-bnb-4bit"</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;max_seq_length = <span class="text-orange-400">2048</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;dtype = <span class="text-blue-400">None</span>, <span class="text-slate-500"># Auto-detect</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;load_in_4bit = <span class="text-blue-400">True</span>,<br>
                    )
                </div>
            </div>

            <!-- Step 2: Add LoRA -->
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white">2</div>
                    <h3 class="text-purple-400 text-sm font-bold">Attach Adapters (LoRA)</h3>
                </div>
                <div class="bg-slate-900/50 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                    model = FastLanguageModel.get_peft_model(<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;model,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;r = <span class="text-orange-400">16</span>, <span class="text-slate-500"># Rank (Keep low for efficiency)</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;target_modules = [<span class="text-green-400">"q_proj"</span>, <span class="text-green-400">"k_proj"</span>, <span class="text-green-400">"v_proj"</span>...],<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;lora_alpha = <span class="text-orange-400">16</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;lora_dropout = <span class="text-orange-400">0</span>, <span class="text-slate-500"># Optimized to 0</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;bias = <span class="text-green-400">"none"</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;use_gradient_checkpointing = <span class="text-blue-400">True</span>,<br>
                    )
                </div>
            </div>

            <!-- Step 3: Train -->
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] font-bold text-white">3</div>
                    <h3 class="text-green-400 text-sm font-bold">Trainer Loop</h3>
                </div>
                <div class="bg-slate-900/50 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                    trainer = SFTTrainer(<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;model = model,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;train_dataset = dataset,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;dataset_text_field = <span class="text-green-400">"text"</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;max_seq_length = <span class="text-orange-400">2048</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;args = TrainingArguments(<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;per_device_train_batch_size = <span class="text-orange-400">2</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gradient_accumulation_steps = <span class="text-orange-400">4</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max_steps = <span class="text-orange-400">60</span>, <span class="text-slate-500"># 1 epoch implies ~60 steps for small data</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;learning_rate = <span class="text-orange-400">2e-4</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fp16 = <span class="text-blue-400">not</span> torch.cuda.is_bf16_supported(),<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bf16 = torch.cuda.is_bf16_supported(),<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;),<br>
                    )<br>
                    trainer.train()
                </div>
            </div>
        </div>
    </div>
</div>
"""

# 12.7 Designing Schemas, Collections & Tenants
content_12_7 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 text-5xl">🗄️</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            It's Not Just a List of Floats
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            A production Vector Database requires a <strong>Schema</strong>. Without metadata, your RAG system is blind.
        </p>
    </div>

    <!-- The Schema Visualization -->
    <div class="bg-[#0f1014] p-8 rounded-3xl border border-slate-800">
        <h3 class="text-2xl font-bold text-white mb-6">The "RAG Record" Anatomy</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <!-- Code View -->
            <div class="font-mono text-sm">
                <div class="text-slate-500 mb-2"># payload.json</div>
                <div class="bg-black p-6 rounded-xl border border-slate-700 space-y-2">
                    <span class="text-purple-400">{</span>
                    <div class="pl-4">
                        <span class="text-blue-400">"id"</span>: <span class="text-green-400">"doc_882_chunk_4"</span>,
                    </div>
                    <div class="pl-4">
                        <span class="text-blue-400">"values"</span>: [<span class="text-yellow-400">0.021</span>, <span class="text-yellow-400">-0.93</span>, ...],
                    </div>
                    <div class="pl-4">
                        <span class="text-blue-400">"metadata"</span>: <span class="text-purple-400">{</span>
                    </div>
                    <div class="pl-8">
                        <span class="text-blue-400">"source_id"</span>: <span class="text-green-400">"fin_report_2024.pdf"</span>,
                    </div>
                    <div class="pl-8">
                        <span class="text-blue-400">"access_level"</span>: <span class="text-green-400">"admin"</span>,
                    </div>
                    <div class="pl-8">
                        <span class="text-blue-400">"created_at"</span>: <span class="text-orange-400">1715420000</span>,
                    </div>
                    <div class="pl-8">
                        <span class="text-blue-400">"text"</span>: <span class="text-green-400">"Revenue increased by..."</span>
                    </div>
                    <div class="pl-4">
                        <span class="text-purple-400">}</span>
                    </div>
                    <span class="text-purple-400">}</span>
                </div>
            </div>

            <!-- Explainer -->
            <div class="space-y-6">
                <div class="p-4 bg-slate-900 border-l-4 border-blue-500 rounded-r-xl">
                    <h4 class="font-bold text-blue-400">1. Original Text</h4>
                    <p class="text-xs text-slate-400 mt-1">
                        Always store the raw text chunk in metadata. Don't make your app query S3 just to show the snippet.
                    </p>
                </div>
                <div class="p-4 bg-slate-900 border-l-4 border-green-500 rounded-r-xl">
                    <h4 class="font-bold text-green-400">2. Authorization Filters</h4>
                    <p class="text-xs text-slate-400 mt-1">
                        <code>access_level: "admin"</code>. If you don't filter by this at the <strong>Query Level</strong>, you will leak data.
                    </p>
                </div>
                <div class="p-4 bg-slate-900 border-l-4 border-orange-500 rounded-r-xl">
                    <h4 class="font-bold text-orange-400">3. Time Decay</h4>
                    <p class="text-xs text-slate-400 mt-1">
                        <code>created_at</code> allows you to filter or weight results. "Show me revenue reports <i>from last month</i>".
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Multi-Tenancy -->
    <div class="mt-12 bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
        <h3 class="text-2xl font-bold text-white mb-4">Multi-Tenancy Strategies</h3>
        <p class="text-slate-400 mb-8 max-w-2xl">
            You have 1,000 customers. Do you create 1,000 Indexes, 1 Index with Namespaces, or 1 Index with Filters?
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Strategy 1 -->
            <div class="bg-black p-4 rounded-xl border border-red-900/50 opacity-50 hover:opacity-100 transition">
                <div class="text-red-500 font-bold mb-2">Strategy A: Index per User</div>
                <p class="text-xs text-slate-500 mb-4">Spinning up a Pinecone Index for every user.</p>
                <div class="text-[10px] bg-red-900/20 text-red-300 p-2 rounded">
                    ⛔ Cost Prohibitive<br>⛔ Ops Nightmare
                </div>
            </div>

            <!-- Strategy 2 -->
            <div class="bg-black p-4 rounded-xl border border-yellow-500/50 hover:border-yellow-400 transition">
                <div class="text-yellow-400 font-bold mb-2">Strategy B: Namespaces</div>
                <p class="text-xs text-slate-500 mb-4">The "Partition" approach. Fast, secluded.</p>
                <div class="text-[10px] bg-yellow-900/20 text-yellow-300 p-2 rounded">
                    ✅ Physical Separation<br>✅ Fast Deletion
                </div>
            </div>

            <!-- Strategy 3 -->
            <div class="bg-black p-4 rounded-xl border border-green-500/50 hover:border-green-400 transition">
                <div class="text-green-400 font-bold mb-2">Strategy C: Metadata Filter</div>
                <p class="text-xs text-slate-500 mb-4">Store <code>tenant_id</code> in metadata.</p>
                <div class="text-[10px] bg-green-900/20 text-green-300 p-2 rounded">
                    ✅ Flexible<br>✅ Best for "Shared" data
                </div>
            </div>
        </div>
    </div>
</div>
"""

# 12.8 Hybrid, Multi-Vector & Sparse Retrieval
content_12_8 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 text-5xl">⚡</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Hybrid Search
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Semantic Search fails on exact keywords (e.g., product SKUs). Keyword Search fails on concepts. <strong>Hybrid Search</strong> wins at both.
        </p>
    </div>

    <!-- The Equation -->
    <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
        <div class="p-6 bg-blue-900/20 border border-blue-500 rounded-2xl text-center">
            <h3 class="text-blue-400 font-bold mb-2">Dense Vector</h3>
            <p class="text-xs text-slate-400">OpenAI Ada-002</p>
            <div class="mt-2 text-2xl">🧠</div>
            <div class="text-[10px] mt-2 text-slate-500">Understanding "Concept"</div>
        </div>
        
        <div class="text-2xl font-bold text-white">+</div>

        <div class="p-6 bg-green-900/20 border border-green-500 rounded-2xl text-center">
            <h3 class="text-green-400 font-bold mb-2">Sparse Vector</h3>
            <p class="text-xs text-slate-400">BM25 / SPLADE</p>
            <div class="mt-2 text-2xl">🔎</div>
            <div class="text-[10px] mt-2 text-slate-500">Matching "Keywords"</div>
        </div>

        <div class="text-2xl font-bold text-white">=</div>

        <div class="p-6 bg-indigo-900/20 border border-indigo-500 rounded-2xl text-center shadow-2xl shadow-indigo-500/20">
            <h3 class="text-indigo-400 font-bold mb-2">Hybrid Score</h3>
            <p class="text-xs text-slate-400">Fusion Ranking</p>
            <div class="mt-2 text-2xl">🏆</div>
            <div class="text-[10px] mt-2 text-slate-500">Best of Both Worlds</div>
        </div>
    </div>

    <!-- Code Block -->
    <div class="bg-[#0a0a0a] border border-slate-800 rounded-2xl overflow-hidden">
        <div class="p-4 border-b border-slate-800 bg-white/5 flex items-center justify-between">
            <h3 class="font-bold text-white">Pinecone Hybrid Query (Python)</h3>
            <span class="text-xs font-mono text-slate-500">RAG Pipeline</span>
        </div>
        <div class="p-6 font-mono text-xs text-slate-300">
            <span class="text-purple-400">index</span>.query(<br>
            &nbsp;&nbsp;vector=[<span class="text-blue-400">0.1</span>, <span class="text-blue-400">0.2</span>...], <span class="text-slate-500"># Dense (Semantic)</span><br>
            &nbsp;&nbsp;sparse_vector={<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">'indices'</span>: [<span class="text-blue-400">34</span>, <span class="text-blue-400">890</span>], <span class="text-slate-500"># Token IDs for "iPhone", "15"</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">'values'</span>: [<span class="text-blue-400">0.8</span>, <span class="text-blue-400">0.5</span>] <span class="text-slate-500"># Weight</span><br>
            &nbsp;&nbsp;},<br>
            &nbsp;&nbsp;alpha=<span class="text-orange-400">0.5</span> <span class="text-slate-500"># Weighting factor (0 = Sparse, 1 = Dense)</span><br>
            )
        </div>
    </div>
</div>
"""

# 12.9 Long-Context & "Infinite Memory" Tricks
content_12_9 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-slate-800 border border-slate-700 mb-6 text-5xl">🧠</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Infinite Memory
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            LLMs have a fixed context window. We break that limit using <strong>Operating System</strong> concepts: RAM (Context) vs Hard Drive (Vector DB).
        </p>
    </div>

    <!-- MemGPT Architecture -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div class="bg-[#111] p-8 rounded-3xl border border-slate-800 relative">
             <div class="absolute -top-4 -left-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">Standard Chat</div>
             <div class="flex flex-col gap-2 opacity-50">
                 <div class="w-full bg-slate-800 h-8 rounded animate-pulse"></div>
                 <div class="w-full bg-slate-800 h-8 rounded animate-pulse"></div>
                 <div class="w-full bg-slate-800 h-8 rounded animate-pulse"></div>
                 <div class="w-full bg-slate-800 h-8 rounded animate-pulse"></div>
                 <div class="w-full bg-red-900/50 h-8 rounded flex items-center justify-center text-red-400 text-xs border border-red-500">
                     CONTEXT WINDOW FULL - FORGETTING START
                 </div>
             </div>
        </div>

        <div class="bg-[#111] p-8 rounded-3xl border border-green-500 relative">
             <div class="absolute -top-4 -left-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">MemGPT</div>
             
             <div class="space-y-4">
                 <div class="p-4 bg-slate-900 rounded-xl border border-slate-700">
                     <h4 class="text-xs font-bold text-slate-500 mb-2">Core Context (RAM)</h4>
                     <p class="text-sm text-white">"User name is Alice. She likes coding."</p>
                 </div>

                 <div class="flex justify-center text-xl text-slate-600">⇵</div>

                 <div class="p-4 bg-slate-900 rounded-xl border border-slate-700">
                     <h4 class="text-xs font-bold text-slate-500 mb-2">Archival Storage (HDD)</h4>
                     <p class="text-sm text-slate-400 italic">Vector Database Queries...</p>
                 </div>
             </div>
        </div>
    </div>
    
    <!-- Code Tricks -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800">
            <h4 class="font-bold text-white mb-2">Summary Index</h4>
            <p class="text-xs text-slate-400">Periodically ask the LLM to summarize the conversation and store <i>that</i> summary in the context, discarding the raw logs.</p>
        </div>
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800">
            <h4 class="font-bold text-white mb-2">Sliding Window</h4>
            <p class="text-xs text-slate-400">Keep `k` most recent tokens. Simple, fast, but effective for "immediacy".</p>
        </div>
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800">
            <h4 class="font-bold text-white mb-2">Entity Extraction</h4>
            <p class="text-xs text-slate-400">Extract proper nouns (Users, Companies, Dates) and store them in a persistent JSON Key-Value store.</p>
        </div>
    </div>
</div>
"""

# 12.10 Choosing and Operating a Vector DB in Production
content_12_10 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-red-600/10 border border-red-500/20 mb-6 text-5xl">🛠️</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Production Ops
        </h2>
    </div>

    <!-- The Comparison Table -->
    <div class="overflow-x-auto">
        <table class="w-full text-left text-sm text-slate-400">
            <thead class="bg-black text-white font-bold border-b border-slate-800">
                <tr>
                    <th class="p-4">Provider</th>
                    <th class="p-4">Type</th>
                    <th class="p-4">Best For...</th>
                    <th class="p-4">Trade-off</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
                <tr class="bg-slate-900/50">
                    <td class="p-4 text-white font-bold">Pinecone</td>
                    <td class="p-4">Managed (Serverless)</td>
                    <td class="p-4 text-green-400">Speed to Market, Scaling</td>
                    <td class="p-4">Cost at scale, Closed Source</td>
                </tr>
                <tr class="bg-slate-900/50">
                    <td class="p-4 text-white font-bold">Qdrant</td>
                    <td class="p-4">Open Source (Rust)</td>
                    <td class="p-4 text-green-400">Performance, Self-Hosting</td>
                    <td class="p-4">Ops complexity</td>
                </tr>
                <tr class="bg-slate-900/50">
                    <td class="p-4 text-white font-bold">pgvector</td>
                    <td class="p-4">Postgres Extension</td>
                    <td class="p-4 text-green-400">Simplicity (1 DB for all)</td>
                    <td class="p-4">Scale limits (vs specialized DBs)</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Monitoring Metrics -->
    <div class="mt-12">
        <h3 class="text-2xl font-bold text-white mb-6">The "Red Dashboard" for Vector DBs</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="bg-black p-4 rounded-xl border border-slate-800">
                <div class="text-[10px] text-slate-500 uppercase font-bold">Metric</div>
                <div class="text-blue-400 font-bold text-lg">Recall @ K</div>
                <div class="text-xs text-slate-400 mt-1">Found relevant docs?</div>
            </div>
             <div class="bg-black p-4 rounded-xl border border-slate-800">
                <div class="text-[10px] text-slate-500 uppercase font-bold">Metric</div>
                <div class="text-purple-400 font-bold text-lg">P99 Latency</div>
                <div class="text-xs text-slate-400 mt-1">Slowest 1% searches</div>
            </div>
             <div class="bg-black p-4 rounded-xl border border-slate-800">
                <div class="text-[10px] text-slate-500 uppercase font-bold">Metric</div>
                <div class="text-green-400 font-bold text-lg">Index Freshness</div>
                <div class="text-xs text-slate-400 mt-1">Time to available</div>
            </div>
             <div class="bg-black p-4 rounded-xl border border-slate-800">
                <div class="text-[10px] text-slate-500 uppercase font-bold">Metric</div>
                <div class="text-white font-bold text-lg">Cost / Query</div>
                <div class="text-xs text-slate-400 mt-1">$$$</div>
            </div>
        </div>
    </div>
</div>
"""

# 12.11 Mini Project: Design a Memory & Vector Layer for an AI App
content_12_11 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 text-5xl">🔨</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Build: The Memory Layer
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Write a Python Class that abstracts the Vector DB. Your app should not know it's using Pinecone. It should only know <code>add_memory()</code> and <code>recall()</code>.
        </p>
    </div>

    <!-- The Assignment -->
    <div class="bg-[#1e1e1e] p-8 rounded-3xl border border-slate-700">
        <h3 class="text-2xl font-bold text-white mb-6">The Contract</h3>
        
        <pre class="font-mono text-sm text-slate-300 overflow-x-auto p-4 bg-black rounded-xl border border-slate-800">
<span class="text-purple-400">from</span> abc <span class="text-purple-400">import</span> ABC, abstractmethod

<span class="text-purple-400">class</span> <span class="text-yellow-400">MemoryStore</span>(ABC):
    
    <span class="text-blue-400">@abstractmethod</span>
    <span class="text-purple-400">async def</span> <span class="text-yellow-400">add_document</span>(self, text: str, meta: dict):
        <span class="text-green-400">"""Embeds and uploads a document."""</span>
        <span class="text-purple-400">pass</span>

    <span class="text-blue-400">@abstractmethod</span>
    <span class="text-purple-400">async def</span> <span class="text-yellow-400">search</span>(self, query: str, filters: dict) -> list[str]:
        <span class="text-green-400">"""Embeds query and retrieves context."""</span>
        <span class="text-purple-400">pass</span>
        
    <span class="text-blue-400">@abstractmethod</span>
    <span class="text-purple-400">async def</span> <span class="text-yellow-400">delete_user_data</span>(self, user_id: str):
        <span class="text-green-400">"""GDPR Compliance deletion."""</span>
        <span class="text-purple-400">pass</span>
        </pre>
    </div>

    <!-- Implementation Tips -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
             <h4 class="font-bold text-white mb-2">Requirement 1: Dependency Injection</h4>
             <p class="text-sm text-slate-400">
                 Allow swapping `PineconeStore` with `QdrantStore` via config. Don't hardcode imports in your main logic.
             </p>
        </div>
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
             <h4 class="font-bold text-white mb-2">Requirement 2: Async Everything</h4>
             <p class="text-sm text-slate-400">
                 Database calls are I/O bound. Use <code>async/await</code> to ensure your API server can handle concurrent requests.
             </p>
        </div>
    </div>
</div>
"""

# 12.12 Module 12 Wrap-up
content_12_12 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="relative overflow-hidden rounded-3xl bg-indigo-900/20 border border-indigo-500/20 p-12 text-center">
        <h2 class="text-4xl font-extrabold text-white mb-6">
            The New Database Layer
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
            In traditional apps, the Database was the source of truth. <br>
            In AI apps, the <strong>Vector Database</strong> is the source of <strong>Context</strong>.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 bg-black border border-slate-800 rounded-2xl">
            <h3 class="font-bold text-white mb-2">Next Up</h3>
            <p class="text-sm text-slate-400">
                You have the Brain (Models) and the Memory (Vectors). Now we need the <strong>Frontend</strong>.
            </p>
        </div>
        <div class="p-6 bg-black border border-slate-800 rounded-2xl">
            <h3 class="font-bold text-white mb-2">Module 13 Preview</h3>
            <p class="text-sm text-slate-400">
                We are moving to <strong>Next.js + Vercel AI SDK</strong>. We will build the actual UI that connects to this Vector Layer.
            </p>
        </div>
        <div class="p-6 bg-gradient-to-br from-indigo-900 to-purple-900 border border-indigo-500 rounded-2xl">
             <h3 class="font-bold text-white mb-2">Your Task</h3>
             <p class="text-sm text-indigo-200">
                 Complete the Mini Project (12.11). You will need that `MemoryStore` class for Module 13.
             </p>
        </div>
    </div>
</div>
"""
