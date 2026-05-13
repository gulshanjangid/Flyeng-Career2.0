
import glob

def scan_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    found = False
    for i, line in enumerate(lines):
        if '`' in line:
            # Ignore lines that are part of the python script logic itself if they are safe
            # But the user's issue is backticks inside the HTML strings which are usually long multiline strings.
            # We want to see ANY backtick in these files to be safe,
            # except maybe in comments or unrelated parts?
            # actually, standard python code rarely uses backticks (deprecated in Py3).
            # So ANY backtick is suspicious in a Python 3 file unless it's in a string.
            # And if it is in a string, and that string is used for TS content, it is BAD.
            print(f"{filepath}:{i+1}")
            found = True
    return found

files = glob.glob("generate_cpp_module*.py")
print(f"Scanning {len(files)} files...")

issues = 0
for file in files:
    if scan_file(file):
        issues += 1

print(f"Scan complete. Found issues in {issues} files.")
