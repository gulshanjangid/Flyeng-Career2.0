
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
        lines.append(f'                        id: "{lesson["id"]}",')
        lines.append(f'                        title: "{lesson["title"]}",')
        lines.append(f'                        duration: "{lesson["duration"]}",')
        lines.append(f'                        type: \'{lesson["type"]}\',')
        lines.append('                        content: `')
        lines.append(lesson["content"].strip())
        lines.append('`')
        lines.append('                    },')
    lines.append('                ]')
    lines.append('            }')
    return "\n".join(lines)

def main():
    print("Loading content data...")
    with open(HYPER_CONTENT_PATH, "r", encoding="utf-8") as f:
        hyper_data = json.load(f)
    with open(RECOVERY_CONTENT_PATH, "r", encoding="utf-8") as f:
        recovery_data = json.load(f)
        
    print("Reading course-data.ts...")
    with open(COURSE_DATA_PATH, "r", encoding="utf-8") as f:
        file_lines = f.readlines()
        
    cut_index = -1
    dsa_mod4_found = False
    
    def get_indent(l):
        return len(l) - len(l.lstrip())

    for i, line in enumerate(file_lines):
        if 'title: "4.' in line and not dsa_mod4_found:
             print(f"Found DSA Module 4 at line {i+1}")
             dsa_mod4_found = True
             
             # Locate End of Mod 4 `            },` (12 spaces)
             scan_i = i
             mod4_end = -1
             while scan_i < len(file_lines):
                 l = file_lines[scan_i]
                 if l.strip().startswith("}") and get_indent(l) == 12:
                     mod4_end = scan_i
                     break
                 scan_i += 1
            
             if mod4_end != -1:
                 print(f"Found Closing Brace of DSA Module 4 at line {mod4_end+1}")
                 cut_index = mod4_end + 1
                 break
                 
    if cut_index == -1:
        print("CRITICAL: Could not find end of DSA Mod 4.")
        return

    # Truncate strictly after Mod 4
    final_lines = file_lines[:cut_index]
    
    # Ensure Mod 4 closes without comma (since we are closing the list)
    # The line is `            },` or `            }`.
    # We want valid JSON: if closing list `]`, last item should ideally not have comma (though JS allows trailing comma).
    # We just keep it as is.
    
    print("Closing DSA structure and Appending GENAI...")
    final_lines.append("        ]")
    final_lines.append("    },") # Close DSA object, add comma for GenAI
    
    final_lines.append("    genai: {")
    final_lines.append('        title: "Generative AI Engineering (Career Path)",')
    final_lines.append('        instructor: "Nikhil Jangid",')
    final_lines.append('        description: "The complete roadmap to becoming a Senior AI Engineer. From Transformer Physics to RAG, Agents, and Production Systems.",')
    final_lines.append('        icon: Sparkles,')
    final_lines.append('        color: "text-purple-500",')
    final_lines.append('        modules: [')
    
    # Combine modules 1-16
    for i in range(1, 17):
        mod_key = str(i)
        mod_data = None
        
        if mod_key in recovery_data:
            mod_data = recovery_data[mod_key]
        elif mod_key in hyper_data:
            mod_data = hyper_data[mod_key]
        
        if mod_data:
            mod_str = format_module(mod_data)
            if i < 16: 
                mod_str += ","
            final_lines.append(mod_str)
        else:
            print(f"WARNING: Module {i} missing/skipped!")
            
    final_lines.append("        ]")
    final_lines.append("    }")
    final_lines.append("};")
    
    print(f"Writing {len(final_lines)} lines to {COURSE_DATA_PATH}")
    with open(COURSE_DATA_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(final_lines))
        
    print("Done.")

if __name__ == "__main__":
    main()
