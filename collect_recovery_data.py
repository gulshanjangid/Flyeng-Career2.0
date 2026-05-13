
import re
import json
import os

# Map of Module Number -> Filename
FILES = {
    "1": "hyper_enhance_genai_m1.py",
    "2": "hyper_enhance_genai_m2.py",
    "3": "hyper_enhance_genai_m3.py",
    "4": "hyper_enhance_genai_m4.py",
    "10": "hyper_enhance_genai_m10.py",
    "11": "hyper_enhance_genai_m11.py",
    "12": "hyper_enhance_genai_m12.py",
    "14": "hyper_enhance_genai_m14.py"
}

# Best guess titles
TITLES = {
    "1": "1. Generative AI Foundations",
    "2": "2. The AI Engineering Stack",
    "3": "3. Prompt Engineering & In-Context Learning",
    "4": "4. Embeddings & Vector Space",
    "10": "10. Advanced RAG Patterns & Evaluation",
    "11": "11. Multimodal Systems (Vision & Audio)",
    "12": "12. Privacy, Security & Governance",
    "14": "14. LLM Ops: Tracing & Deployment"
}

recovered_modules = {}

for mod_num, filename in FILES.items():
    if not os.path.exists(filename):
        print(f"Skipping {filename} (not found)")
        continue
        
    print(f"Processing {filename}...")
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Extract variables like content_1_1 = """ ... """
    # Pattern: \w+ = """([\s\S]*?)"""
    matches = re.finditer(r'(\w+)\s*=\s*"""([\s\S]*?)"""', content)
    
    lessons = []
    lesson_counter = 1
    
    # We want to sort lessons by their var name if possible (content_1_1, content_1_2)
    # finditer return order is file order. Usually correct.
    
    found_any = False
    for m in matches:
        found_any = True
        var_name = m.group(1)
        html_content = m.group(2)
        
        # Try to extract lesson number from var name: content_10_3 -> 3
        # pattern content_(\d+)_(\d+)
        
        num_match = re.search(r'content_\d+_(\d+)', var_name)
        if num_match:
            # use specific lesson number
            lesson_idx = int(num_match.group(1))
        else:
            lesson_idx = lesson_counter
            lesson_counter += 1
            
        # Parse title from h2 tag
        title_match = re.search(r'<h2.*?>(.*?)</h2>', html_content)
        raw_title = title_match.group(1) if title_match else f"Lesson {mod_num}.{lesson_idx}"
        # Remove tags
        clean_title = re.sub(r'<.*?>', '', raw_title).strip()
        
        lessons.append({
            "id": f"genai-{mod_num}-{lesson_idx}",
            "title": f"{mod_num}.{lesson_idx} {clean_title}",
            "duration": "45 min", 
            "type": "article",
            "content": html_content
        })
        
    # Sort lessons by ID just in case
    lessons.sort(key=lambda x: int(x["id"].split("-")[-1]))
    
    recovered_modules[mod_num] = {
        "title": TITLES.get(mod_num, f"Module {mod_num}"),
        "lessons": lessons
    }

with open("recovery_content.json", "w", encoding="utf-8") as f:
    json.dump(recovered_modules, f, indent=4)

print(f"Recovered {len(recovered_modules)} modules to recovery_content.json")
