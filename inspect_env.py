try:
    with open('.env', 'r', encoding='utf-16') as f:
        content = f.read()
except:
    try:
        with open('.env', 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading: {e}")
        exit()

print("RAW CONTENT LENGTH:", len(content))
for line in content.splitlines():
    if "GROQ_API_KEY" in line:
        key_part = line.split("=")[1].strip()
        print(f"FOUND KEY START: {key_part[:10]}...")
        # Check if it looks split
        print(f"FULL LINE: {line}")
