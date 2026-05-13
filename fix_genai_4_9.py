import re
import textwrap

file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

clean_content_1 = """<div class="space-y-10">
    <h2 class="text-4xl font-bold text-white mb-6">Retrieval Augmented Generation</h2>
    <p class="text-gray-300">
        The magical formula that connects your data to the LLM.
    </p>
    <div class="bg-[#111] p-8 rounded-3xl border border-gray-800 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <ol class="space-y-6 relative z-10">
            <li class="flex gap-4">
                <span class="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                    <strong class="text-white">Query</strong>
                    <p class="text-xs text-gray-400">User asks: "What is our refund policy?"</p>
                </div>
            </li>
            <li class="flex gap-4">
                <span class="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                    <strong class="text-white">Retrieve</strong>
                    <p class="text-xs text-gray-400">System finds top 3 relevant chunks from Vector DB.</p>
                </div>
            </li>
            <li class="flex gap-4">
                <span class="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                    <strong class="text-white">Augment</strong>
                    <p class="text-xs text-gray-400">Inject chunks into system prompt context.</p>
                </div>
            </li>
            <li class="flex gap-4">
                <span class="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                    <strong class="text-blue-400">Generate</strong>
                    <p class="text-xs text-gray-400">LLM answers using ONLY that context.</p>
                </div>
            </li>
        </ol>
    </div>
</div>"""

clean_content_2 = """<div class="space-y-8">
    <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        🔍 RAG: Retrieval Augmented Generation
    </h2>
    <p class="text-gray-300 text-lg">
        LLMs have a "Knowledge Cutoff". They don't know your private data.
        <strong>RAG</strong> is the bridge between the LLM and your data.
    </p>

    <div class="bg-[#111] p-6 rounded-xl border border-gray-800">
        <h3 class="text-xl font-bold text-white mb-6">The Pipeline</h3>
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">1</div>
                <div>
                    <strong class="text-white">Query</strong>
                    <p class="text-sm text-gray-400">User asks "What is our vacation policy?"</p>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white">2</div>
                <div>
                    <strong class="text-white">Embed</strong>
                    <p class="text-sm text-gray-400">Convert question to vector: <code>[0.12, -0.98, ...]</code></p>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center font-bold text-white">3</div>
                <div>
                    <strong class="text-white">Retrieve</strong>
                    <p class="text-sm text-gray-400">Search DB for similar chunks. Found: "Employees get 20 days off..."</p>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center font-bold text-white">4</div>
                <div>
                    <strong class="text-white">Inject</strong>
                    <p class="text-sm text-gray-400">Paste the chunk into the Prompt. "Context: ... Answer the question."</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div class="p-6 bg-gray-900 border border-red-500/20 rounded-xl">
                <h4 class="text-red-400 font-bold mb-2">Without RAG</h4>
                <p class="text-sm text-gray-400">
                    User: "What is the policy?"<br>
                    Bot: "I don't know who you are. I only know what I was trained on." (Hallucination risk)
                </p>
            </div>
            <div class="p-6 bg-gray-900 border border-green-500/20 rounded-xl">
                <h4 class="text-green-400 font-bold mb-2">With RAG</h4>
                <p class="text-sm text-gray-400">
                    User: "According to the document 'HR_2024.pdf', the policy is..." (Grounded)
                </p>
            </div>
        </div>
    </div>
</div>"""

def fix_content():
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find all occurrences of genai-4-9 content
        # Pattern captures the ID up to content header, then the content string
        pattern = re.compile(f'(id:\s*"genai-4-9".*?content:\s*)`[\s\S]*?`', re.DOTALL)
        
        matches = list(pattern.finditer(content))
        
        if len(matches) != 2:
            print(f"⚠️ Found {len(matches)} occurrences of genai-4-9, expected 2.")
        
        if len(matches) > 0:
            print("Fixing first occurrence (Article/Foreshadowing)...")
            # Replace the first occurrence
            # We must be careful because string immutable.
            # We can rebuild the string.
            
            # Match 1 range
            m1 = matches[0]
            start1, end1 = m1.span()
            prefix1 = m1.group(1)
            
            # New content 1 (escaped backticks if any)
            safe_c1 = clean_content_1.replace('`', '\\`')
            replacement1 = f'{prefix1}`\n{safe_c1}\n`'
            
            # Apply replacement 1
            content = content[:start1] + replacement1 + content[end1:]
            
            # Re-search for the second occurrence because offsets changed
            matches = list(pattern.finditer(content))
            if len(matches) >= 2:
                print("Fixing second occurrence (Video/Foundations)...")
                m2 = matches[1] # The second one
                start2, end2 = m2.span()
                prefix2 = m2.group(1)
                
                safe_c2 = clean_content_2.replace('`', '\\`')
                replacement2 = f'{prefix2}`\n{safe_c2}\n`'
                
                content = content[:start2] + replacement2 + content[end2:]
            else:
                 print("⚠️ Could not find second occurrence after first edit.")

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print("✅ Fixed genai-4-9 content formatting!")

    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    fix_content()
