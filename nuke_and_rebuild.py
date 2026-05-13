
import json
import re

COURSE_DATA_PATH = r"lib/course-data.ts"
HYPER_CONTENT_PATH = "hyper_content.json"
RECOVERY_CONTENT_PATH = "recovery_content.json"

def format_module(mod_data):
    lines = []
    lines.append('            {')
    lines.append(f'                title: "{mod_data["title"]}",')
    lines.append('                lessons: [')
    for lesson in mod_data["lessons"]:
        lines.append('                    {')
        lines.append(f'                        id: {json.dumps(lesson["id"])},')
        lines.append(f'                        title: {json.dumps(lesson["title"])},')
        lines.append(f'                        duration: {json.dumps(lesson["duration"])},')
        lines.append(f'                        type: {json.dumps(lesson["type"])},')
        lines.append('                        content: `')
        lines.append(lesson["content"].strip().replace('`', '\\`'))
        lines.append('`')
        lines.append('                    },')
    lines.append('                ]')
    lines.append('            }')
    return "\n".join(lines)

def main():
    print("Loading content data...")
    with open("master_curriculum.json", "r", encoding="utf-8") as f:
        master_data = json.load(f)

    # 1. READ AND CLEAN
    print("Reading and cleaning course-data.ts...")
    with open(COURSE_DATA_PATH, "r", encoding="utf-8") as f:
        raw_content = f.read()
        
    # Remove excessive newlines (3 or more -> 2)
    clean_content = re.sub(r'\n{3,}', '\n\n', raw_content)
    
    lines = clean_content.splitlines()
    print(f"Reduced lines from {len(raw_content.splitlines())} to {len(lines)}")
    
    # 2. FIND CUT POINT (Strictly End of DSA Mod 4)
    # We look for `title: "4.` (Mod 4 of DSA)
    
    cut_index = -1
    dsa_mod4_found = False
    
    for i, line in enumerate(lines):
        if 'title: "4.' in line and not dsa_mod4_found:
             print(f"Found DSA Module 4 at line {i+1}")
             dsa_mod4_found = True
             
             # Locate End of Mod 4 `            },` or `            }` (approx indent 12)
             # We just scan for the next closing curly brace at indent 12.
             # Note: after cleaning, indent might be preserved but blank lines removed.
             
             scan_i = i
             mod4_end = -1
             while scan_i < len(lines):
                 l = lines[scan_i]
                 indent = len(l) - len(l.lstrip())
                 if l.strip().startswith("}") and indent == 12:
                     mod4_end = scan_i
                     break
                 scan_i += 1
             
             if mod4_end != -1:
                 print(f"Found Closing Brace of DSA Module 4 at line {mod4_end+1}")
                 cut_index = mod4_end + 1
                 break
    
    if cut_index == -1:
        print("CRITICAL: Could not find end of DSA Mod 4. Aborting.")
        # Fallback dump to debug?
        return

    # 3. TRUNCATE
    final_lines = lines[:cut_index]
    
    # Check comma on last line
    if "," not in final_lines[-1]:
        # We need to close the modules array next, so NO comma needed if it was the last item.
        pass

    # 4. APPEND GENAI
    print("Appending Clean GenAI Course...")
    
    # Close DSA Modules array
    final_lines.append("        ]")
    final_lines.append("    },") # End DSA
    
    # Start GenAI
    final_lines.append("    genai: {")
    final_lines.append('        title: "Generative AI Engineering (Career Path)",')
    final_lines.append('        instructor: "Nikhil Jangid",')
    final_lines.append('        description: "The complete roadmap to becoming a Senior AI Engineer. From Transformer Physics to RAG, Agents, and Production Systems.",')
    final_lines.append('        icon: Sparkles,')
    final_lines.append('        color: "text-purple-500",')
    final_lines.append('        modules: [')
    
    for i in range(1, 17):
        mod_key = str(i)
        mod_data = master_data.get(mod_key)
        
        if mod_data:
            mod_str = format_module(mod_data)
            if i < 16:
                mod_str += ","
            final_lines.append(mod_str)
        else:
            # Should not happen if generate_master_json checked this
            pass
            
    final_lines.append("        ]")
    final_lines.append("    }")
    final_lines.append("};")
    
    # 5. WRITE
    print(f"Writing {len(final_lines)} lines to {COURSE_DATA_PATH}")
    with open(COURSE_DATA_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(final_lines))
        
    print("Done.")

if __name__ == "__main__":
    main()
