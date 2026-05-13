
import re
import os

mod_num = 11
fname = f"hyper_enhance_genai_m{mod_num}.py"

if not os.path.exists(fname):
    print(f"ERROR: File {fname} not found!")
else:
    print(f"File {fname} exists.")
    with open(fname, "r", encoding="utf-8") as f:
        src = f.read()
        print(f"Read {len(src)} bytes.")
        
        # Test Regex
        regex_pattern = r'(content_\d+_(\d+))\s*=\s*"""([\s\S]*?)"""'
        matches = re.findall(regex_pattern, src)
        print(f"Found {len(matches)} matches.")
        
        for var_name, lesson_suffix, html in matches:
            print(f"Match: {var_name}, Lesson: {lesson_suffix}, Content Length: {len(html)}")

        # Check for specific failure
        if len(matches) == 0:
            print("NO MATCHES FOUND. Dumping first 500 chars of file:")
            print(src[:500])
