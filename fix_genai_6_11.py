import re
import textwrap

file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

clean_content_6_11 = """<div class="space-y-8">
    <h2 class="text-3xl font-bold text-white mb-6">📦 Why GPT-4 ≠ GPT-4.1</h2>
    <p class="text-gray-300 text-lg">
        Modern "Frontier Models" are not single neural networks stored in a `.pth` file.
        They are <strong>Modular Systems</strong>.
    </p>

    <div class="bg-[#111] p-8 rounded-2xl border border-gray-800 relative">
        <h3 class="text-center text-xl font-bold text-white mb-8 border-b border-gray-700 pb-4">The "ChatGPT" System Inference</h3>
        
        <div class="flex flex-col gap-4">
            <div class="p-4 bg-gray-800 rounded text-center text-gray-300">USER INPUT</div>
            <div class="flex justify-center text-gray-600">↓</div>
            <div class="p-4 bg-blue-900/30 border border-blue-500 rounded text-center text-blue-200 font-bold">
                Moderation API (Safety Check)
            </div>
            <div class="flex justify-center text-gray-600">↓</div>
            <div class="p-4 bg-purple-900/30 border border-purple-500 rounded text-center text-purple-200 font-bold">
                Router / Tool Selector (Use Search? Use Python?)
            </div>
            <div class="flex justify-center text-gray-600">↓</div>
            <div class="flex gap-4">
                    <div class="flex-1 p-4 bg-gray-800 rounded text-center text-xs text-gray-400">Expert 1 (Code)</div>
                    <div class="flex-1 p-4 bg-gray-800 rounded text-center text-xs text-gray-400">Expert 2 (Chat)</div>
            </div>
            <div class="flex justify-center text-gray-600">↓</div>
            <div class="p-4 bg-green-900/30 border border-green-500 rounded text-center text-green-200 font-bold">
                Speculative Decoding (Draft Model)
            </div>
        </div>
        
        <p class="text-center mt-8 text-gray-500 text-sm">
            "Speculative Decoding" uses a tiny, fast model to guess the next 5 tokens, and the big model just validates them in parallel. 2x Speedup!
        </p>
    </div>
</div>"""

def fix_content():
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Strategy: Find genai-6-11 content and replace everything until the start of genai-6-12
        # This handles the corrupted residue which likely spans lines before genai-6-12
        
        # Regex explanation:
        # (id:\s*"genai-6-11".*?content:\s*)   -> Match ID header
        # ([\s\S]*?)                            -> Match ANY content (broken or not) non-greedy...
        # (\},\s*\{\s*id:\s*"genai-6-12")       -> ...until we hit the start of genai-6-12 block (assuming standard formatting)
        # Note: We rely on the formatting being consistent: }, { id: "genai-6-12"
        
        pattern = re.compile(r'(id:\s*"genai-6-11".*?content:\s*)([\s\S]*?)(\},\s*\{\s*id:\s*"genai-6-12")', re.DOTALL)
        
        match = pattern.search(content)
        
        if match:
            print("Found genai-6-11 corrupted block. Fixing...")
            prefix = match.group(1)
            suffix = match.group(3)
            
            # Escape backticks in the clean content for TS template literal
            # We want: `...`
            # If content has `.pth`, we want `.pth` inside the template string.
            # So `.pth` becomes `\.pth\` in TS source?
            # Wait. In TS: `String with \`backticks\` inside`.
            # Python replace: '`' -> '\\`' means one backslash and one backtick.
            safe_html = clean_content_6_11.replace('`', '\\`')
            
            # Construct replacement
            # Note: We add ` around the content, and ensure questions: [] follows
            # But wait, our suffix starts at }, { id...
            # The ORIGINAL content structure is: content: `...`, questions: []
            # We matched everything between content: and }, {
            # So we must reconstruct: `...`, questions: []
            
            # Let's verify what group 2 contains typically.
            # It usually contains: `HTML`, questions: []
            # In corrupted case: `HTML` <residue>
            
            new_block = f'`\n{safe_html}\n`, questions: []\n                    '
            
            # Apply replacement
            # content = prefix + new_block + suffix
            content = pattern.sub(f'\\1{new_block}\\3', content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print("✅ Fixed genai-6-11 content extraction error!")
        else:
            print("⚠️ Could not find genai-6-11 block with expected framing. Trying looser matching...")
            # Fallback: Maybe formatting is different?
            # Try matching just up to questions: [] if possible?
            # But the residue might mess that up if it contains "questions" text? Unlikely.
            pass

    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    fix_content()
