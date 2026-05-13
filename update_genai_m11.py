import re

# 12 Lessons for "11. Multimodal AI Systems"
# Content styled with Tailwind, gradients, and icons to match the premium aesthetic.

new_module_11_content = """,
            {
                title: "11. Multimodal AI Systems",
                lessons: [
                    {
                        id: "genai-11-1",
                        title: "11.1 Why Multimodal AI Is the 2026 Default",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-pink-900/40 to-purple-900/40 border border-pink-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
            👁️ Beyond Text
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            The world isn't just text. It's photons and sound waves. Multimodal AI bridges the gap between <strong>Digital Code</strong> and <strong>Analog Reality</strong>.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Text-Only (2023)</h3>
            <p class="text-sm text-gray-400">
                You describe a chart to the AI.
                <br><span class="text-red-400 text-xs">Slow, lossy, tedious.</span>
            </p>
        </div>
        <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-2">Multimodal (2026)</h3>
            <p class="text-sm text-gray-400">
                You show the AI the chart.
                <br><span class="text-green-400 text-xs">Instant, accurate, "human-like".</span>
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-11-2",
                        title: "11.2 Multimodal LLMs & Vision–Language Models (VLMs)",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🧠 Unifying Senses</h2>
    
    <div class="relative bg-[#1e1e1e] p-8 rounded-3xl border border-gray-700">
        <div class="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div class="text-center">
                <div class="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center border-2 border-blue-500 mb-2 mx-auto">
                    <span class="text-2xl">📸</span>
                </div>
                <strong class="text-blue-400 text-sm">Vision Encoder</strong>
                <p class="text-[10px] text-gray-500">ViT / CLIP</p>
            </div>
            
            <div class="text-2xl text-gray-600">+</div>
            
            <div class="text-center">
                <div class="w-20 h-20 bg-purple-900 rounded-full flex items-center justify-center border-2 border-purple-500 mb-2 mx-auto">
                    <span class="text-2xl">📝</span>
                </div>
                <strong class="text-purple-400 text-sm">LLM Core</strong>
                <p class="text-[10px] text-gray-500">Transformer</p>
            </div>

            <div class="text-2xl text-gray-600">=</div>

             <div class="text-center">
                <div class="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center border-2 border-white/20 shadow-lg shadow-purple-900/50 mb-2 mx-auto">
                    <span class="text-3xl">🤖</span>
                </div>
                <strong class="text-white text-sm">VLM</strong>
                <p class="text-[10px] text-gray-500">GPT-4V, Gemini 1.5, Llama 4</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-11-3",
                        title: "11.3 Core Multimodal Tasks & Use Cases",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🛠️ What can it see?</h2>
    
    <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800">
            <strong class="text-green-400 block mb-2">OCR on Steroids</strong>
            <p class="text-xs text-gray-400">Not just reading text, but understanding layout. "Extract the total from the bottom-right of this crumbled receipt."</p>
        </div>
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800">
            <strong class="text-blue-400 block mb-2">Visual QA</strong>
            <p class="text-xs text-gray-400">"Why is this engine making a noise?" (User uploads photo of broken belt). AI diagnoses based on visual evidence.</p>
        </div>
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800">
            <strong class="text-yellow-400 block mb-2">Chart Analysis</strong>
            <p class="text-xs text-gray-400">"Convert this screenshot of a bar chart into a CSV file."</p>
        </div>
        <div class="bg-[#111] p-5 rounded-2xl border border-gray-800">
            <strong class="text-purple-400 block mb-2">Video Understanding</strong>
            <p class="text-xs text-gray-400">"Find the moment where the speaker mentions 'Q4 Revenue'."</p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-11-4",
                        title: "11.4 Multimodal RAG Fundamentals",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔎 Searching Reality</h2>
    
    <div class="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-3xl">
        <p class="text-lg text-gray-300 mb-6">
            In Text RAG, you match words to words. In Multimodal RAG, you match <strong>Concepts</strong> to <strong>Pixels</strong>.
        </p>
        
        <div class="flex gap-4 items-center justify-center">
             <div class="bg-black p-4 rounded-xl border border-gray-600 text-center">
                 <p class="text-xs text-blue-300 mb-1">Query</p>
                 <strong class="text-white">"A dog playing fetch"</strong>
             </div>
             <span class="text-2xl">↔️</span>
              <div class="bg-black p-4 rounded-xl border border-gray-600 text-center">
                 <p class="text-xs text-green-300 mb-1">Embedding Space</p>
                 <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto blur-sm"></div>
             </div>
             <span class="text-2xl">↔️</span>
              <div class="bg-black p-4 rounded-xl border border-gray-600 text-center">
                 <p class="text-xs text-purple-300 mb-1">Result</p>
                 <div class="w-16 h-12 bg-gray-800 rounded flex items-center justify-center text-[10px] text-gray-500">Image of dog</div>
             </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-11-5",
                        title: "11.5 Designing Pipelines for Documents with Images",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📄 The PDF Problem</h2>
    
    <div class="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700">
        <strong class="text-white text-lg block mb-4">The "Description" Pattern</strong>
        <p class="text-sm text-gray-400 mb-6 font-mono bg-black p-4 rounded-lg">
            Raw PDF -> [Image] -> <span class="text-purple-400">VLM (Captioner)</span> -> "A line graph showing 20% growth." -> <span class="text-blue-400">Text Embedding</span> -> Vector DB.
        </p>
        
        <p class="text-sm text-gray-400">
            <strong>Why?</strong> Searching raw image vectors is hard. Searching accurate text descriptions of images is efficient and works with existing RAG stacks.
        </p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-11-6",
                        title: "11.6 Audio & Video Understanding",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🔊 Hearing & Seeing</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-orange-900/10 border border-orange-500/20 p-6 rounded-2xl">
            <h3 class="text-lg font-bold text-orange-400 mb-2">Audio Pipeline</h3>
            <ol class="text-sm text-gray-400 list-decimal list-inside space-y-2">
                <li>Split audio into 30s chunks.</li>
                <li>Whisper creates Transcript.</li>
                <li>LLM summarizes Transcript.</li>
                <li>Index both.</li>
            </ol>
        </div>
        
         <div class="bg-blue-900/10 border border-blue-500/20 p-6 rounded-2xl">
            <h3 class="text-lg font-bold text-blue-400 mb-2">Video Pipeline</h3>
            <ol class="text-sm text-gray-400 list-decimal list-inside space-y-2">
                <li>Extract 1 frame per second.</li>
                <li>VLM describes key frames.</li>
                <li>Extract Audio track (see left).</li>
                <li>Fuse visuals + audio context.</li>
            </ol>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-11-7",
                        title: "11.7 Building Multimodal RAG Architectures",
                        duration: "25 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🏗️ Architecture Choice</h2>
    
    <div class="overflow-hidden rounded-2xl border border-gray-800">
        <table class="w-full text-left text-sm text-gray-400">
            <thead class="bg-gray-900 text-white uppercase text-xs">
                <tr>
                    <th class="p-4">Pattern</th>
                    <th class="p-4">Pros</th>
                    <th class="p-4">Cons</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-800 bg-[#111]">
                <tr>
                    <td class="p-4 font-bold text-blue-400">Text-ification</td>
                    <td class="p-4">Simple. Compatible with existing DBs.</td>
                    <td class="p-4">Lossy details.</td>
                </tr>
                <tr>
                    <td class="p-4 font-bold text-green-400">Dual Encoder</td>
                    <td class="p-4">Accurate image search.</td>
                    <td class="p-4">Complex. Requires aligned models (CLIP).</td>
                </tr>
                 <tr>
                    <td class="p-4 font-bold text-purple-400">ColPali (Vision-Native)</td>
                    <td class="p-4">SOTA. Reads docs as images.</td>
                    <td class="p-4">Heavy compute (late interaction).</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`
                    },
                    {
                        id: "genai-11-8",
                        title: "11.8 Multimodal Agents & Workflows",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-b from-indigo-900/40 to-blue-900/40 border border-indigo-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-indigo-400 mb-4">🕵️ The Watching Agent</h2>
        <p class="text-xl text-gray-300 leading-relaxed">
            Giving agents "eyes" allows them to operate GUIs, verify visual outcomes, and work in the physical world.
        </p>
    </div>

    <div class="bg-[#111] p-6 rounded-2xl border border-gray-800">
        <strong class="text-white block mb-2">Example: QA Bot</strong>
        <p class="text-sm text-gray-400 font-mono">
            1. Selenium: Go to 'checkout'.<br>
            2. Selenium: Take Screenshot.<br>
            3. VLM: "I see a red error banner saying 'Card Declined'."<br>
            4. Agent: "Logging p1 bug."
        </p>
    </div>
</div>
`
                    },
                    {
                        id: "genai-11-9",
                        title: "11.9 Evaluation & UX for Multimodal Systems",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">🧪 Testing the Senses</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700">
            <h3 class="text-lg font-bold text-white mb-2">Hallucination (Visual)</h3>
            <p class="text-sm text-gray-400">
                Models might "invent" text in an image that isn't really there. 
                <br><strong>Fix:</strong> Grounding scores (bounding boxes).
            </p>
        </div>
         <div class="bg-[#1e1e1e] p-5 rounded-2xl border border-gray-700">
            <h3 class="text-lg font-bold text-white mb-2">UX Challenges</h3>
            <p class="text-sm text-gray-400">
                Streaming images is heavy. Latency is higher. 
                <br><strong>Tip:</strong> Show low-res preview immediately, swap for hi-res later.
            </p>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-11-10",
                        title: "11.10 Practical Use Cases by Industry",
                        duration: "20 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">💼 Multimodal at Work</h2>
    
    <div class="space-y-4">
        <div class="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800">
            <span class="text-2xl">🏥</span>
            <div>
                <strong class="text-white block">Healthcare</strong>
                <p class="text-xs text-gray-400">Analyze X-Ray + Doctor Notes simultaneously.</p>
            </div>
        </div>
         <div class="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800">
            <span class="text-2xl">🛍️</span>
            <div>
                <strong class="text-white block">E-Commerce</strong>
                <p class="text-xs text-gray-400">"Show me a shirt with *this* pattern" (User uploads photo).</p>
            </div>
        </div>
         <div class="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800">
            <span class="text-2xl">🏭</span>
            <div>
                <strong class="text-white block">Manufacturing</strong>
                <p class="text-xs text-gray-400">Camera spots defect -> VLM classifies severity -> Agent alerts supervisor.</p>
            </div>
        </div>
    </div>
</div>
`
                    },
                    {
                        id: "genai-11-11",
                        title: "11.11 Mini Project: Multimodal Document or Media Copilot",
                        duration: "30 min",
                        type: 'project',
                        content: `
<div class="space-y-8">
    <div class="bg-gradient-to-r from-teal-900/40 to-emerald-900/40 border border-teal-500/30 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">🎥 Lab: The Video Searcher</h2>
        <p class="text-gray-300 mb-8">
            Build a tool that lets you "CTRL+F" real life.
        </p>

        <ol class="space-y-4 list-decimal list-inside text-gray-300 bg-black/40 p-6 rounded-xl border border-white/5">
            <li class="pl-2"><strong>Ingest:</strong> Take a 1-minute video file.</li>
            <li class="pl-2"><strong>Process:</strong> Extract frames every 5s. Use GPT-4o-mini to describe them.</li>
            <li class="pl-2"><strong>Index:</strong> Store descriptions in Vector DB.</li>
            <li class="pl-2"><strong>Query:</strong> "When does the red car appear?" -> Return timestamp 00:45.</li>
        </ol>
    </div>
</div>
`
                    },
                    {
                        id: "genai-11-12",
                        title: "11.12 Module 11 Wrap-up: Beyond Text-Only AI",
                        duration: "10 min",
                        type: 'article',
                        content: `
<div class="space-y-8">
    <div class="bg-[#111] p-10 rounded-3xl border border-gray-800 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">👁️ The Full Picture</h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            You are no longer limited to ASCII. You can build AI that experiences the world like we do.
        </p>

        <div class="inline-grid grid-cols-2 gap-8 text-left max-w-lg mx-auto">
            <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Mastered</strong>
                <h3 class="text-white text-lg font-bold mt-1">Multimodal AI</h3>
                <p class="text-gray-400 text-sm">Vision, Audio, Video, RAG.</p>
            </div>
             <div>
                <strong class="text-gray-500 uppercase text-xs tracking-widest">Next Up</strong>
                <h3 class="text-white text-lg font-bold mt-1">Module 12</h3>
                <p class="text-gray-400 text-sm">Full-Stack GenAI Production.</p>
            </div>
        </div>
    </div>
</div>
`
                    }
                ]
            }
"""

def update_genai_m11():
    print(f"🔄 Injecting GenAI Module 11 (Multimodal AI)...")
    
    file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Logic:
    # 1. Find Module 10.
    m10_title = 'title: "10. RAG Systems & Enterprise Knowledge Engines"'
    m10_start = content.find(m10_title)
    
    if m10_start == -1:
        print("❌ Could not find Module 10 title.")
        return
        
    # 2. Find Module 10 End.
    m10_brace_start = content.rfind('{', 0, m10_start)
    
    open_braces = 0
    m10_end_idx = -1
    
    for i in range(m10_brace_start, len(content)):
        char = content[i]
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces == 0:
                m10_end_idx = i + 1
                break
                
    if m10_end_idx == -1:
        print("❌ Could not parse Module 10 end.")
        return
        
    print(f"✅ Found Module 10 End at {m10_end_idx}")

    # 3. Check for Existing M11 and Remove if present
    m11_title_marker = 'title: "11. Multimodal AI Systems"'
    m11_idx = content.find(m11_title_marker)
    
    if m11_idx != -1:
        print("🔄 Removing existing Module 11 before injection...")
        m11_brace_start = content.rfind('{', 0, m11_idx)
        # Scan for end
        open_b = 0
        m11_end = -1
        for i in range(m11_brace_start, len(content)):
             char = content[i]
             if char == '{': open_b += 1
             elif char == '}': 
                 open_b -= 1
                 if open_b == 0:
                     m11_end = i + 1
                     break
        
        if m11_end != -1:
            content = content[:m11_brace_start] + content[m11_end:]
            print("✅ Removed existing M11 block.")
            
            # Recalculate M10 position
            m10_start = content.find(m10_title)
            m10_brace_start = content.rfind('{', 0, m10_start)
            open_braces = 0
            m10_end_idx = -1
            for i in range(m10_brace_start, len(content)):
                char = content[i]
                if char == '{': open_braces += 1
                elif char == '}': 
                    open_braces -= 1
                    if open_braces == 0:
                        m10_end_idx = i + 1
                        break

    # 4. Inject
    final_content = content[:m10_end_idx] + new_module_11_content + content[m10_end_idx:]
    
    # 5. Clean up potential double commas "},, {"
    final_content = final_content.replace('},,', '},')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("✅ Module 11 (Multimodal) injected successfully!")

if __name__ == "__main__":
    update_genai_m11()
