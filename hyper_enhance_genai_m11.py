# hyper_enhance_genai_m11.py
# Module 11: Multimodal AI Systems

# 11.1 Why Multimodal AI Is the 2026 Default
content_11_1 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6 text-5xl shadow-2xl shadow-violet-500/20">👁️</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            The Unification of Senses
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            The era of "Text-Only" is over. Modern models tokenize reality itself—turning pixels, waveforms, and characters into a single vector space.
        </p>
    </div>

    <!-- The Tokenization Tunnel Visual -->
    <div class="bg-[#0f1014] p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
        <h3 class="text-2xl font-bold text-white mb-8 text-center">The "Omni" Tokenizer</h3>
        
        <div class="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
            
            <!-- Input 1: Text -->
            <div class="flex flex-col items-center gap-2">
                <div class="p-4 bg-blue-900/20 border border-blue-500 rounded-xl w-24 text-center">
                    <div class="text-2xl">📝</div>
                    <div class="text-[10px] text-blue-400 mt-1">Text</div>
                </div>
                <div class="text-slate-500">⬇️</div>
                <div class="font-mono text-[10px] text-blue-300 bg-slate-900 p-1 rounded">IDs: [104, 99]</div>
            </div>

            <!-- Input 2: Audio -->
            <div class="flex flex-col items-center gap-2">
                <div class="p-4 bg-pink-900/20 border border-pink-500 rounded-xl w-24 text-center">
                    <div class="text-2xl">🎙️</div>
                    <div class="text-[10px] text-pink-400 mt-1">Audio</div>
                </div>
                <div class="text-slate-500">⬇️</div>
                <div class="font-mono text-[10px] text-pink-300 bg-slate-900 p-1 rounded">VQ-VAE Tokens</div>
            </div>

            <!-- Input 3: Image -->
            <div class="flex flex-col items-center gap-2">
                <div class="p-4 bg-green-900/20 border border-green-500 rounded-xl w-24 text-center">
                    <div class="text-2xl">🖼️</div>
                    <div class="text-[10px] text-green-400 mt-1">Image</div>
                </div>
                <div class="text-slate-500">⬇️</div>
                <div class="font-mono text-[10px] text-green-300 bg-slate-900 p-1 rounded">Patch Embeds</div>
            </div>

            <div class="text-4xl text-white font-bold mx-4">➡️</div>

            <!-- The Transformer -->
            <div class="h-32 w-32 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/50">
                <div class="text-center text-white font-bold">
                    <div class="text-3xl">🧠</div>
                    <div class="text-xs mt-1">One Model</div>
                </div>
            </div>

        </div>
        
        <!-- Background Grid -->
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]"></div>
    </div>

    <!-- Why This Matters -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-2xl">
            <h4 class="text-lg font-bold text-white mb-2">Native Understanding</h4>
            <p class="text-sm text-slate-400">
                Old models (2023) used OCR to "read" images. Native models (GPT-4o) "see" the image features directly, catching nuances like font style, color, and layout that OCR misses.
            </p>
        </div>
        <div class="p-6 bg-slate-900 border border-slate-700 rounded-2xl">
             <h4 class="text-lg font-bold text-white mb-2">Latent Space Alignment</h4>
             <p class="text-sm text-slate-400">
                 The concept of a "Cat" is stored in the same vector space whether you write the word "Cat", say "Meow", or show a picture of a tabby.
             </p>
        </div>
    </div>
</div>
"""

# 11.2 Multimodal LLMs & Vision–Language Models (VLMs)
content_11_2 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 text-5xl">📐</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Architecture Wars: <br>Connected vs. Native
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Not all Multimodal models are built the same. Understanding the architecture dictates how you fine-tune and deploy them.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <!-- Architecture A: The Connector (LLaVA) -->
        <div class="bg-[#111] p-8 rounded-3xl border border-slate-800 relative group hover:border-blue-500 transition">
            <div class="absolute -top-4 -left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">Type A: The Connector</div>
            
            <div class="flex flex-col items-center gap-4 mt-4">
                <div class="w-full p-4 bg-slate-800 rounded-xl text-center border border-slate-700">
                    <span class="text-xs font-mono text-slate-400">Vision Encoder (CLIP/SigLIP)</span>
                    <div class="text-2xl mt-1">📷</div>
                </div>
                
                <div class="h-8 w-0.5 bg-slate-600"></div>
                
                <div class="w-full p-2 bg-yellow-900/50 rounded-lg text-center border border-yellow-500/50">
                    <span class="text-xs font-mono text-yellow-500 font-bold">The Projector (MLP)</span>
                </div>

                <div class="h-8 w-0.5 bg-slate-600"></div>

                <div class="w-full p-4 bg-blue-900/20 rounded-xl text-center border border-blue-500">
                    <span class="text-xs font-mono text-blue-300">Frozen LLM (Llama-3)</span>
                    <div class="text-2xl mt-1">🧠</div>
                </div>
            </div>

            <div class="mt-6 text-xs text-slate-400">
                <strong>Pros:</strong> Modular. You can upgrade the LLM without retraining the Vision Encoder.<br>
                <strong>Cons:</strong> "Blind" to fine-grained visual details lost by the encoder.
            </div>
        </div>

        <!-- Architecture B: Native (Gemini/GPT-4o) -->
        <div class="bg-[#111] p-8 rounded-3xl border border-purple-500 relative shadow-2xl shadow-purple-900/20">
             <div class="absolute -top-4 -left-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">Type B: Native Omni</div>
             
             <div class="h-full flex items-center justify-center">
                 <div class="w-full aspect-square rounded-full border-4 border-purple-500/30 flex items-center justify-center p-8 bg-purple-900/10">
                     <div class="text-center">
                         <div class="text-4xl animate-pulse">⚛️</div>
                         <h4 class="font-bold text-white mt-4">Single Transformer</h4>
                         <p class="text-[10px] text-purple-300 mt-2">
                             Inputs: Text, Audio, Video<br>
                             Outputs: Text, Audio, Image
                         </p>
                     </div>
                 </div>
             </div>
             
             <div class="mt-6 text-xs text-slate-400">
                <strong>Pros:</strong> Incredible reasoning. Understands physics, timing, and emotion.<br>
                <strong>Cons:</strong> Extremely expensive to train. Closed source dominating.
            </div>
        </div>
    </div>
</div>
"""

# 11.3 Core Multimodal Tasks & Use Cases
content_11_3 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6 text-5xl">🎯</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Beyond "Describe Image"
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            We are moving from passive description to active detailed reasoning.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Task 1 -->
        <div class="p-6 bg-[#111] rounded-2xl border border-slate-800 hover:border-pink-500 transition group">
            <div class="flex justify-between items-start mb-4">
                <div class="text-3xl">🧩</div>
                <div class="text-[10px] bg-slate-900 px-2 py-1 rounded text-slate-400">Reasoning</div>
            </div>
            <h4 class="font-bold text-white mb-2">Visual Logic</h4>
            <p class="text-xs text-slate-400">
                "Look at this screenshot of a UI bug. Which CSS property is likely causing the overlap?"
            </p>
            <div class="mt-4 h-2 w-full bg-slate-800 rounded overflow-hidden">
                <div class="h-full bg-pink-500 w-3/4"></div>
            </div>
            <div class="text-[10px] text-right mt-1 text-pink-400">Difficulty: High</div>
        </div>

        <!-- Task 2 -->
        <div class="p-6 bg-[#111] rounded-2xl border border-slate-800 hover:border-blue-500 transition group">
            <div class="flex justify-between items-start mb-4">
                <div class="text-3xl">📍</div>
                <div class="text-[10px] bg-slate-900 px-2 py-1 rounded text-slate-400">Grounding</div>
            </div>
            <h4 class="font-bold text-white mb-2">Object Detection (Bounding Box)</h4>
            <p class="text-xs text-slate-400">
                "Return the [ymin, xmin, ymax, xmax] coordinates for every person wearing a safety helmet."
            </p>
            <div class="mt-4 h-2 w-full bg-slate-800 rounded overflow-hidden">
                <div class="h-full bg-blue-500 w-1/2"></div>
            </div>
            <div class="text-[10px] text-right mt-1 text-blue-400">Difficulty: Medium</div>
        </div>

        <!-- Task 3 -->
        <div class="p-6 bg-[#111] rounded-2xl border border-slate-800 hover:border-green-500 transition group">
            <div class="flex justify-between items-start mb-4">
                <div class="text-3xl">🔢</div>
                <div class="text-[10px] bg-slate-900 px-2 py-1 rounded text-slate-400">Extraction</div>
            </div>
            <h4 class="font-bold text-white mb-2">Structure Extraction</h4>
            <p class="text-xs text-slate-400">
                "Convert this handwritten invoice into a valid JSON object matching our schema."
            </p>
            <div class="mt-4 h-2 w-full bg-slate-800 rounded overflow-hidden">
                <div class="h-full bg-green-500 w-full"></div>
            </div>
            <div class="text-[10px] text-right mt-1 text-green-400">Solved (GPT-4o)</div>
        </div>
    </div>
</div>
"""

# 11.4 Multimodal RAG Fundamentals
content_11_4 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6 text-5xl">🔎</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            The Alignment Problem
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            You cannot simply `dot_product(text_vector, image_vector)` unless they live in the same neighborhood. This is what <strong>CLIP</strong> solved.
        </p>
    </div>

    <!-- CLIP Visual -->
    <div class="bg-black p-8 rounded-3xl border border-slate-800">
        <h3 class="text-2xl font-bold text-teal-400 mb-6 text-center">Contrastive Learning (Simplified)</h3>
        
        <div class="flex flex-col gap-4">
            <!-- Row 1: Positive Pair -->
            <div class="flex items-center gap-4 bg-green-900/20 p-4 rounded-xl border border-green-500/50">
                <div class="w-16 h-16 bg-slate-800 rounded flex items-center justify-center text-2xl">🐶</div>
                <div class="flex-1 h-1 bg-green-500/50"></div>
                <div class="px-4 py-2 bg-black rounded border border-green-500 text-sm">"A photo of a dog"</div>
                <div class="flex-1 h-1 bg-green-500/50"></div>
                <div class="text-green-400 font-bold">PULL TOGETHER</div>
            </div>

            <!-- Row 2: Negative Pair -->
            <div class="flex items-center gap-4 bg-red-900/10 p-4 rounded-xl border border-red-500/30 opacity-60">
                <div class="w-16 h-16 bg-slate-800 rounded flex items-center justify-center text-2xl">🐶</div>
                <div class="flex-1 h-1 bg-red-500/50"></div>
                <div class="px-4 py-2 bg-black rounded border border-red-500 text-sm">"A photo of a banana"</div>
                <div class="flex-1 h-1 bg-red-500/50"></div>
                <div class="text-red-400 font-bold">PUSH APART</div>
            </div>
        </div>

        <div class="mt-8 text-center bg-slate-900/50 p-6 rounded-xl">
             <h4 class="font-bold text-white mb-2">The Result: Zero-Shot Search</h4>
             <p class="text-sm text-slate-400">
                 After training on 400M pairs, CLIP knows that the vector for the <i>image</i> of a dog should be identical to the vector for the <i>word</i> "dog".
             </p>
        </div>
    </div>
</div>
"""

# 11.5 Designing Pipelines for Documents with Images, Tables & Diagrams
content_11_5 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-cyan-600/10 border border-cyan-500/20 mb-6 text-5xl">🏗️</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            The "PDF Dissector" Pipeline
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Standard Python libraries (`PyPDF2`) are blind to structure. We process PDFs as <strong>Images</strong> to capture tables and charts.
        </p>
    </div>

    <!-- The Pipeline Diagram -->
    <div class="flex flex-col gap-6 relative">
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800"></div>

        <!-- Step 1 -->
        <div class="flex items-center gap-6 relative z-10">
            <div class="w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center font-bold text-slate-500 text-xl">1</div>
            <div class="flex-1 bg-slate-900 p-6 rounded-2xl border border-slate-700">
                <h4 class="text-white font-bold mb-1">Rasterization</h4>
                <p class="text-xs text-slate-400">Convert PDF pages to High-Res Images (300 DPI). Do not use text extraction yet.</p>
                <div class="mt-2 inline-block bg-black px-2 py-1 rounded text-[10px] font-mono text-cyan-400">pdf2image</div>
            </div>
        </div>

        <!-- Step 2 -->
        <div class="flex items-center gap-6 relative z-10">
            <div class="w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center font-bold text-slate-500 text-xl">2</div>
            <div class="flex-1 bg-slate-900 p-6 rounded-2xl border border-slate-700">
                <h4 class="text-white font-bold mb-1">Layout Analysis (YOLOX/Detection)</h4>
                <p class="text-xs text-slate-400">Detect bounding boxes for: `Header`, `Text Block`, `Table`, `Figure`. Crop these regions.</p>
                <div class="mt-2 inline-block bg-black px-2 py-1 rounded text-[10px] font-mono text-cyan-400">Unstructured.io / LayoutParser</div>
            </div>
        </div>

        <!-- Step 3 -->
        <div class="flex items-center gap-6 relative z-10">
            <div class="w-16 h-16 rounded-full bg-cyan-900 border-4 border-cyan-500 flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-cyan-500/50">3</div>
            <div class="flex-1 w-full bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-6 rounded-2xl border border-cyan-500">
                <div class="flex justify-between items-center mb-2">
                    <h4 class="text-white font-bold">The VLM Pass</h4>
                    <span class="text-[10px] bg-cyan-500 text-black font-bold px-2 py-1 rounded">CRITICAL STEP</span>
                </div>
                <p class="text-xs text-slate-300">
                    Send the cropped <strong>Table Image</strong> to GPT-4o with prompt: "Turn this into Markdown".<br>
                    Send the cropped <strong>Chart</strong> to GPT-4o with prompt: "Describe the trend".
                </p>
            </div>
        </div>

        <!-- Step 4 -->
        <div class="flex items-center gap-6 relative z-10">
            <div class="w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center font-bold text-slate-500 text-xl">4</div>
            <div class="flex-1 bg-slate-900 p-6 rounded-2xl border border-slate-700">
                <h4 class="text-white font-bold mb-1">Reconstruction</h4>
                <p class="text-xs text-slate-400">Stitch the text, markdown tables, and chart descriptions back into a linear document for RAG chunking.</p>
            </div>
        </div>
    </div>
</div>
"""

# 11.6 Audio & Video Understanding for Knowledge Work
content_11_6 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-red-500/10 border border-red-500/20 mb-6 text-5xl">🎬</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Video is just "Heavy Images"
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            To an AI, a video is just a folder of 100,000 images plus an audio track. Smart sampling is the key to processing it without going bankrupt.
        </p>
    </div>

    <!-- Sampling Strategy -->
    <div class="bg-[#111] p-8 rounded-3xl border border-slate-800">
        <h3 class="text-2xl font-bold text-white mb-6">The "1 FPS" Heuristic</h3>
        
        <div class="relative h-32 bg-slate-900 rounded-xl overflow-hidden flex items-center px-4 gap-1">
            <!-- Timeline Track -->
            <div class="absolute top-1/2 left-0 right-0 h-1 bg-slate-700"></div>
            
            <!-- Frames -->
            <div class="w-8 h-12 bg-red-500 z-10 rounded shadow-lg shadow-red-500/50"></div>
            <div class="w-8 h-12 bg-slate-800/50 z-0"></div>
            <div class="w-8 h-12 bg-slate-800/50 z-0"></div>
            <div class="w-8 h-12 bg-slate-800/50 z-0"></div>
            
            <div class="w-8 h-12 bg-red-500 z-10 rounded shadow-lg shadow-red-500/50"></div>
            <div class="w-8 h-12 bg-slate-800/50 z-0"></div>
            <div class="w-8 h-12 bg-slate-800/50 z-0"></div>
            <div class="w-8 h-12 bg-slate-800/50 z-0"></div>
            
            <div class="w-8 h-12 bg-red-500 z-10 rounded shadow-lg shadow-red-500/50"></div>
        </div>
        <div class="mt-4 flex justify-between text-xs text-slate-500 font-mono">
            <span>00:00</span>
            <span>00:01</span>
            <span>00:02</span>
        </div>
        
        <div class="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl text-center">
            <p class="text-sm text-red-200">
                <strong>Why?</strong> Movies are 24fps. 23 of those frames are redundant. Sampling 1 frame per second reduces tokens by 96% while retaining >95% of semantic information.
            </p>
        </div>
    </div>
</div>
"""

# 11.7 Building Multimodal RAG Architectures
content_11_7 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-5xl">🏛️</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Decoupled Storage Architecture
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Do not store images in your vector database. Store <strong>Descriptions of Images</strong>.
        </p>
    </div>

    <!-- Architecture Diagram -->
    <div class="bg-[#0f1014] p-8 rounded-3xl border border-slate-800 flex flex-col items-center">
        
        <!-- Ingestion -->
        <div class="w-full max-w-4xl border-2 border-dashed border-slate-700 p-6 rounded-2xl relative">
             <div class="absolute -top-3 left-6 bg-slate-900 px-2 text-xs text-slate-500 font-bold tracking-widest">INGESTION TIME</div>
             
             <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
                 <div class="p-4 bg-slate-800 rounded-lg text-center">
                     <span class="text-4xl">🖼️</span>
                     <div class="text-xs mt-2 text-slate-400">Raw Image</div>
                 </div>
                 <div class="text-2xl">➡️</div>
                 <div class="p-4 bg-orange-900/20 border border-orange-500 rounded-lg text-center">
                     <span class="text-xs font-bold text-orange-400">VLM Summarizer</span>
                     <div class="text-[10px] mt-2 text-orange-200">"Graph showing revenue up 15%"</div>
                 </div>
                 <div class="text-2xl">➡️</div>
                 <div class="p-4 bg-slate-800 rounded-lg text-center">
                     <span class="text-xs font-bold text-white">Vector DB</span>
                     <div class="text-[10px] mt-2 text-slate-400">Emb("Graph showing...")</div>
                 </div>
             </div>
        </div>

        <div class="h-12 w-0.5 bg-slate-700"></div>

        <!-- Retrieval -->
        <div class="w-full max-w-4xl border-2 border-dashed border-slate-700 p-6 rounded-2xl relative">
             <div class="absolute -top-3 left-6 bg-slate-900 px-2 text-xs text-slate-500 font-bold tracking-widest">QUERY TIME</div>
             
             <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
                 <div class="p-4 bg-slate-800 rounded-lg text-center">
                     <div class="text-xs text-slate-400">User Query:</div>
                     <span class="text-sm font-bold text-white">"Show me Q3 revenue"</span>
                 </div>
                 <div class="text-2xl">➡️</div>
                 <div class="p-4 bg-slate-800 rounded-lg text-center">
                     <span class="text-xs font-bold text-white">Vector Search</span>
                     <div class="text-[10px] mt-2 text-green-400">Match Found!</div>
                 </div>
                 <div class="text-2xl">➡️</div>
                 <div class="p-4 bg-blue-900/20 border border-blue-500 rounded-lg text-center">
                     <span class="text-xs font-bold text-blue-400">App Logic</span>
                     <div class="text-[10px] mt-2 text-blue-200">Fetch S3 URL for Image ID</div>
                 </div>
             </div>
        </div>

    </div>

    <div class="text-center p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
        <h4 class="text-white font-bold">Why Decouple?</h4>
        <p class="text-sm text-slate-400 mt-2">
            Searching against generated text descriptions captures <strong>semantic intent</strong> better than raw CLIP image embeddings in business contexts.
        </p>
    </div>
</div>
"""

# 11.8 Multimodal Agents & Workflows
content_11_8 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6 text-5xl">🤖</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Agents That "See" the Screen
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Tools like <code>browser-use</code> and OpenInterpreter work by taking a screenshot every few seconds and asking the VLM what to click.
        </p>
    </div>

    <!-- The Visual Loop -->
    <div class="flex flex-col md:flex-row justify-center items-center gap-6">
        
        <div class="w-64 p-6 bg-slate-900 border border-slate-700 rounded-2xl text-center">
            <div class="text-4xl mb-4">🖥️</div>
            <h4 class="font-bold text-white mb-2">1. Screenshot</h4>
            <div class="text-[10px] bg-black p-2 rounded text-slate-400 font-mono">capture_viewport()</div>
        </div>

        <div class="text-2xl">➡️</div>

        <div class="w-64 p-6 bg-yellow-900/10 border border-yellow-500 rounded-2xl text-center shadow-lg shadow-yellow-500/20">
            <div class="text-4xl mb-4">🧠</div>
            <h4 class="font-bold text-white mb-2">2. Visual Grounding</h4>
            <div class="text-[10px] text-yellow-200">"The 'Login' button is at coordinates [200, 450]."</div>
        </div>

        <div class="text-2xl">➡️</div>

        <div class="w-64 p-6 bg-slate-900 border border-slate-700 rounded-2xl text-center">
            <div class="text-4xl mb-4">🖱️</div>
            <h4 class="font-bold text-white mb-2">3. Action</h4>
            <div class="text-[10px] bg-black p-2 rounded text-slate-400 font-mono">mouse.click(200, 450)</div>
        </div>

    </div>

    <!-- Warning -->
    <div class="bg-red-900/20 border border-red-500/50 p-6 rounded-2xl flex gap-4 items-start mt-8">
        <div class="text-2xl">⚠️</div>
        <div>
            <h4 class="font-bold text-red-400">The Context Cost</h4>
            <p class="text-sm text-red-200">
                Sending a high-res screenshot (1080p) costs ~1000 tokens. An agent running for 1 hour (1 action/sec) burns 3.6M tokens. <strong>Optimization is mandatory</strong> (caching, lower res, DOM tree mixed with vision).
            </p>
        </div>
    </div>
</div>
"""

# 11.9 Evaluation & UX for Multimodal Systems
content_11_9 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-slate-800 border border-slate-700 mb-6 text-5xl">📏</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Grading Vision
        </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-slate-900 rounded-3xl border border-slate-800">
            <h3 class="text-xl font-bold text-white mb-4">Metric: CLIPScore</h3>
            <p class="text-slate-400 text-sm mb-4">
                Calculates the cosine similarity between the generated caption and the image embedding.
            </p>
            <div class="bg-black p-4 rounded-xl font-mono text-xs text-green-400">
                score = cosine(img_emb, text_emb)<br>
                > 0.3 = Good Match
            </div>
            <p class="text-xs text-red-400 mt-4">Problem: Doesn't catch hallucinations or small details.</p>
        </div>

        <div class="p-8 bg-slate-900 rounded-3xl border border-slate-800">
            <h3 class="text-xl font-bold text-white mb-4">Metric: VLM-as-a-Judge</h3>
            <p class="text-slate-400 text-sm mb-4">
                Ask a stronger model (GPT-4o) to grade the weaker model's output.
            </p>
            <div class="bg-black p-4 rounded-xl font-mono text-xs text-purple-400">
                Input: Image + Generated Caption<br>
                Prompt: "Does this caption accurately describe the color of the car?"<br>
                Output: Yes/No
            </div>
            <p class="text-xs text-green-400 mt-4">Gold Standard for evaluation.</p>
        </div>
    </div>
</div>
"""

# 11.10 Practical Use Cases by Industry
content_11_10 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6 text-5xl">🏭</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Real World VLM
        </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-slate-800">
            <h4 class="font-bold text-white mb-2">Retail execution</h4>
            <p class="text-xs text-slate-400">
                Sales reps take photos of store shelves. VLMs detect:
                <br>1. Out of stock items.
                <br>2. Competitor placement.
                <br>3. Planogram compliance.
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-slate-800">
            <h4 class="font-bold text-white mb-2">Automotive Claims</h4>
            <p class="text-xs text-slate-400">
                Users upload crash photos. VLM estimates:
                <br>1. Severity (Scratch vs Totaled).
                <br>2. Parts affected (Bumper, Fender).
                <br>3. Repair cost (RAG lookup).
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-slate-800">
            <h4 class="font-bold text-white mb-2">EdTech</h4>
            <p class="text-xs text-slate-400">
                Students upload photos of handwritten math problems.
                <br>1. OCR handwriting.
                <br>2. Solve equation.
                <br>3. Explain step-by-step.
            </p>
        </div>
    </div>
</div>
"""

# 11.11 Mini Project: Multimodal Document or Media Copilot
content_11_11 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 text-5xl">🚀</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Build: The Chart Analyst
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            You will build a Python script that takes a complex financial dashboard screenshot and outputs a clean CSV file.
        </p>
    </div>

    <!-- The Code Block -->
    <div class="bg-[#1e1e1e] p-8 rounded-3xl border border-slate-700 relative overflow-hidden">
        <div class="absolute top-4 right-4 text-xs text-slate-500">main.py</div>
        
        <pre class="font-mono text-sm text-slate-300 overflow-x-auto">
<span class="text-purple-400">import</span> base64
<span class="text-purple-400">from</span> openai <span class="text-purple-400">import</span> OpenAI

client = OpenAI()

<span class="text-slate-500"># 1. Encode Image</span>
<span class="text-purple-400">def</span> <span class="text-blue-400">encode_image</span>(image_path):
    <span class="text-purple-400">with</span> <span class="text-yellow-400">open</span>(image_path, <span class="text-green-400">"rb"</span>) <span class="text-purple-400">as</span> image_file:
        <span class="text-purple-400">return</span> base64.b64encode(image_file.read()).decode(<span class="text-green-400">'utf-8'</span>)

<span class="text-slate-500"># 2. The Extraction Prompt</span>
<span class="text-purple-400">def</span> <span class="text-blue-400">analyze_chart</span>(image_path):
    base64_image = encode_image(image_path)
    
    response = client.chat.completions.create(
        model=<span class="text-green-400">"gpt-4o"</span>,
        messages=[
            {
                <span class="text-green-400">"role"</span>: <span class="text-green-400">"user"</span>,
                <span class="text-green-400">"content"</span>: [
                    {<span class="text-green-400">"type"</span>: <span class="text-green-400">"text"</span>, <span class="text-green-400">"text"</span>: <span class="text-green-400">"Analyze this chart. Extract the data points into a CSV format. X-axis is Year, Y-axis is Revenue."</span>},
                    {
                        <span class="text-green-400">"type"</span>: <span class="text-green-400">"image_url"</span>,
                        <span class="text-green-400">"image_url"</span>: {
                            <span class="text-green-400">"url"</span>: f<span class="text-green-400">"data:image/jpeg;base64,{base64_image}"</span>
                        },
                    },
                ],
            }
        ],
    )
    <span class="text-purple-400">return</span> response.choices[0].message.content

<span class="text-purple-400">if</span> __name__ == <span class="text-green-400">"__main__"</span>:
    csv_data = analyze_chart(<span class="text-green-400">"q3_revenue.png"</span>)
    <span class="text-yellow-400">print</span>(csv_data)
        </pre>
    </div>
</div>
"""

# 11.12 Module 11 Wrap‑up: Beyond Text‑Only AI
content_11_12 = """
<div class="space-y-12 font-sans text-slate-200">
    <div class="relative overflow-hidden rounded-3xl bg-violet-900/20 border border-violet-500/20 p-12 text-center">
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <h2 class="text-4xl font-extrabold text-white mb-6">
            You now have "AI Vision"
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
            You understand Tokens, Patch Embeddings, and VLM Connectors. You can build pipelines that read PDFs, watch videos, and navigate websites.
        </p>
    </div>

    <div class="p-8 bg-black border border-slate-800 rounded-2xl text-center">
         <h3 class="font-bold text-white mb-4">What's Next?</h3>
         <div class="text-4xl mb-4">🗄️</div>
         <p class="text-slate-400">
             Module 12: <strong>Vector Databases</strong>. <br>
             Now that we can turn everything into vectors... where do we put them?
         </p>
    </div>
</div>
"""
