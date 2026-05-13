import re

file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

def fix_all_tags():
    print(f"Fixing tags in {file_path}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # 1. Fix < /tag>  -> </tag>
    # Regex: Look for < followed by whitespace followed by /
    content_fixed = re.sub(r'<\s+/', '</', content)
    
    # 2. Fix </ tag> -> </tag>
    # Regex: Look for </ followed by whitespace followed by alphanumeric
    content_fixed = re.sub(r'</\s+([a-zA-Z])', r'</\1', content_fixed)

    # 3. Fix < tag> -> <tag>
    # Regex: Look for < followed by whitespace followed by alphanumeric
    # BE CAREFUL: < 10 (less than 10) is valid in text/code.
    # We should only target known HTML tags or ensure it looks like a tag.
    # Safe list of tags we use: div, span, p, h1-h6, strong, em, ul, li, table, thead, tbody, tr, th, td, code, pre, br, blockquote
    
    tags = "div|span|p|h[1-6]|strong|em|ul|li|table|thead|tbody|tr|th|td|code|pre|br|blockquote|a|img|button"
    content_fixed = re.sub(r'<\s+(' + tags + r')\b', r'<\1', content_fixed, flags=re.IGNORECASE)

    # 4. Fix duplicate < <tag> or similar weirdness if found
    
    if content != content_fixed:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content_fixed)
        print("✅ Fixed malformed tags (removed spaces).")
    else:
        print("✅ No changes needed.")

if __name__ == "__main__":
    fix_all_tags()
