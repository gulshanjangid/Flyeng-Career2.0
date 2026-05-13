import re
file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

def fix_html_tags():
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Fix spaces after opening bracket: < div -> <div, < p -> <p, etc.
        # Captures < followed by whitespace, then key tag names
        # We can be broader: <\s+([a-zA-Z0-9]+) -> <\1
        # Regex: <\s+([a-zA-Z][a-zA-Z0-9]*)
        
        # Replacement: <\1
        content = re.sub(r'<\s+([a-zA-Z][a-zA-Z0-9]*)', r'<\1', content)
        
        # 2. Fix spaces before closing bracket? usually </ div>
        # Regex: <\/\s+([a-zA-Z][a-zA-Z0-9]*)
        content = re.sub(r'<\/\s+([a-zA-Z][a-zA-Z0-9]*)', r'</\1', content)
        
        # 3. Fix spaces around attributes? class ="..." -> class="..." (HTML ignores this usually, but good for cleanup)
        
        # 4. Fix className="..." to class="..." inside the HTML strings?
        # The user mentioned "className". If these are raw HTML strings for dangerous HTML, standard HTML uses "class".
        # React's DangerouslySetInnerHTML expects standard HTML string.
        # "className" in a string is just a custom attribute unless processed. 
        # But if the user sees it "showing everywhere", maybe it's being rendered as text? 
        # Or maybe the CSS isn't applying because it's "className" and the browser expects "class"?
        # Let's replace className= with class= within the big strings.
        # IMPORTANT: We should only do this inside the content strings, not in the TS code itself (though TS code usually usesclassName={} prop, not string).
        # In course-data.ts, "className" appearing in the *strings* is likely a mistake from copy-pasting React code.
        # But wait, if I blindly replace className with class, I might break actual React code if there is any in this file?
        # course-data.ts seems to contain data objects with a `content` property which is an HTML string.
        # It shouldn't contain functional React components with `className={...}`.
        # It has `title: "...", type: "...", content: \`...\``. 
        # So replacing className="..." with class="..." globally should be safe(r), but let's be careful.
        # Let's target className=" inside the content strings.
        
        # Actually, if I look at previous file dumps, `content: \` ... \`` stores the HTML.
        # So I can replace `className="` with `class="` globally? 
        # Does `course-data.ts` have ANY normal TSX? No, it's a .ts file exporting data constants.
        # So `className` should ideally not exist unless it's inside a string.
        # Let's count them first? No simple way in one python script without reading.
        # I will replace `className="` with `class="`.
        
        content = content.replace('className="', 'class="')

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print("✅ Fixed malformed HTML tags (< div -> <div) and standardized className -> class.")

    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    fix_html_tags()
