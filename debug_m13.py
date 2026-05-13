
import re
import os

def check_m13():
    fname = "hyper_enhance_genai_m13.py"
    if not os.path.exists(fname):
        print(f"File {fname} not found!")
        return

    with open(fname, "r", encoding="utf-8") as f:
        src = f.read()

    print(f"Read {len(src)} bytes from {fname}")

    # Regex from generate_master_json.py
    matches = re.findall(r'(content_\d+_(\d+))\s*=\s*"""([\s\S]*?)"""', src)
    
    print(f"Found {len(matches)} matches")
    for var_name, lesson_suffix, html in matches:
        print(f" - Found {var_name} (Length: {len(html)})")
        # Check for weird characters
        try:
            html.encode('utf-8')
        except Exception as e:
            print(f"ERROR encoding {var_name}: {e}")

if __name__ == "__main__":
    check_m13()
