import json
import os

def inject_content():
    # 1. Read the JSON curriculum
    try:
        with open('cpp_curriculum.json', 'r', encoding='utf-8') as f:
            curriculum_map = json.load(f)
    except FileNotFoundError:
        print("Error: cpp_curriculum.json not found.")
        return

    # 2. Convert map to sorted list
    # The keys are "1", "2", ... "16"
    sorted_keys = sorted(curriculum_map.keys(), key=lambda x: int(x))
    modules_list = []
    
    for k in sorted_keys:
        modules_list.append(curriculum_map[k])

    # 3. Generate the TypeScript file content
    # We use json.dumps for the modules array to ensure valid syntax.
    # indent=4 makes it readable.
    modules_json_str = json.dumps(modules_list, indent=4)

    ts_content = f"""import {{ Cpu }} from "lucide-react";

export const cppCourse = {{
    title: "C++ Masterclass: Zero to Hero (2026 Edition)",
    instructor: "Nikhil Jangid",
    description: "The extensive, deep-dive guide to modern C++ (C++11 to C++23). Master specialized high-performance computing, systems programming, and competitive programming.",
    icon: Cpu,
    color: "text-blue-600",
    modules: {modules_json_str}
}};
"""

    # 4. Write to lib/cpp-course-data.ts
    output_path = os.path.join('lib', 'cpp-course-data.ts')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print(f"Successfully wrote {len(modules_list)} modules to {output_path}")

if __name__ == "__main__":
    inject_content()
