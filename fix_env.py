
import os

try:
    # Try utf-16 first as suspected
    with open('.env', 'r', encoding='utf-16') as f:
        content = f.read()
except:
    try:
        with open('.env', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        # Fallback to binary and decode ignore
        with open('.env', 'rb') as f:
            content = f.read().decode('utf-8', errors='ignore')

# Clean up the content
lines = content.splitlines()
new_lines = []
groq_key = ""

for line in lines:
    clean_line = line.strip()
    if not clean_line: continue
    
    if "GROQ_API_KEY" in clean_line:
        # Capture the start
        parts = clean_line.split("=")
        if len(parts) > 1:
            groq_key = parts[1]
    elif groq_key and not "=" in clean_line:
        # This is likely the continuation of the broken key
        groq_key += clean_line

# Remove all whitespace from the key
if groq_key:
    groq_key = "".join(groq_key.split())
    # Reconstruct file
    new_lines.append(f"GROQ_API_KEY={groq_key}")

    # Write back as UTF-8
    with open('.env', 'w', encoding='utf-8') as f:
        f.write("\n".join(new_lines))
    
    print(f"FIXED .env! Key: {groq_key[:10]}...{groq_key[-5:]}")
else:
    print("Could not find key to fix.")
