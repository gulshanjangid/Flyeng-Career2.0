import json
import os

def inject_content():
    # 1. Read the JSON curriculum
    try:
        with open('python_curriculum.json', 'r', encoding='utf-8') as f:
            curriculum_map = json.load(f)
    except FileNotFoundError:
        print("Error: python_curriculum.json not found.")
        return

    # 2. Convert map to sorted list
    sorted_keys = sorted(curriculum_map.keys(), key=lambda x: int(x))
    modules_list = []
    
    for k in sorted_keys:
        modules_list.append(curriculum_map[k])

    # 3. Generate the TypeScript file content
    modules_json_str = json.dumps(modules_list, indent=4)

    ts_content = f"""import {{ Terminal }} from "lucide-react";

export const pythonCourse = {{
    title: "Python for 2026: Modern Engineering",
    instructor: "Nikhil Jangid",
    description: "The only Python course that matters. Async, Typing, Rust-tooling, and AI Architecture.",
    icon: Terminal,
    color: "text-yellow-400",
    modules: {modules_json_str}
}};
"""

    # 4. Write to lib/python-course-data.ts
    output_path = os.path.join('lib', 'python-course-data.ts')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print(f"Successfully wrote {len(modules_list)} modules to {output_path}")

if __name__ == "__main__":
    inject_content()
