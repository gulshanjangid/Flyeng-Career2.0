import json
import os

# Import all module lessons
# We will uncomment these as we verify/complete each module file
from generate_cpp_module1 import module_1_lessons
from generate_cpp_module2 import module_2_lessons
from generate_cpp_module3 import module_3_lessons
from generate_cpp_module4 import module_4_lessons
from generate_cpp_module5 import module_5_lessons
from generate_cpp_module6 import module_6_lessons
from generate_cpp_module7 import module_7_lessons
from generate_cpp_module8 import module_8_lessons
from generate_cpp_module9 import module_9_lessons
from generate_cpp_module10 import module_10_lessons
from generate_cpp_module11 import module_11_lessons
from generate_cpp_module12 import module_12_lessons
from generate_cpp_module13 import module_13_lessons
from generate_cpp_module14 import module_14_lessons
from generate_cpp_module15 import module_15_lessons
from generate_cpp_module16 import module_16_lessons

def create_placeholder(mod_num, title, emoji, goal):
    """Creates a placeholder list of lessons for modules we haven't generated yet."""
    return [
        {
            "id": f"cpp-{mod_num}-1",
            "title": f"{mod_num}.1 {title} (Coming Soon)",
            "duration": "TBD",
            "type": "lock",
            "content": f"""
            <div class="text-center p-12">
                <div class="text-6xl mb-4">{emoji}</div>
                <h2 class="text-2xl font-bold text-white mb-2">{title}</h2>
                <p class="text-slate-400">{goal}</p>
                <div class="mt-8 p-4 bg-blue-900/20 border border-blue-500/20 rounded-lg text-blue-200">
                    Detailed content is being generated...
                </div>
            </div>
            """
        }
    ]

# Define the Master Curriculum Structure
# This maps the detailed lesson lists to the final object
curriculum = {
    "1": {"title": "C++ Foundations & Tooling", "lessons": module_1_lessons},
    "2": {"title": "Control Flow & Functions", "lessons": module_2_lessons},
    "3": {"title": "Pointers, References & Memory", "lessons": module_3_lessons},
    "4": {"title": "Core STL: Containers & Algorithms", "lessons": module_4_lessons},
    "5": {"title": "Advanced STL & Allocators", "lessons": module_5_lessons},
    "6": {"title": "DSA & Competitive Programming", "lessons": module_6_lessons},
    "7": {"title": "Object-Oriented Programming", "lessons": module_7_lessons},
    "8": {"title": "Inheritance & Polymorphism", "lessons": module_8_lessons},
    "9": {"title": "Modern C++ (C++11/14)", "lessons": module_9_lessons},
    "10": {"title": "Advanced C++ (C++17/20)", "lessons": module_10_lessons},
    "11": {"title": "Error Handling & Safety", "lessons": module_11_lessons},
    "12": {"title": "Performance Optimization", "lessons": module_12_lessons},
    "13": {"title": "Concurrency & Multithreading", "lessons": module_13_lessons},
    "14": {"title": "File Systems & CLI", "lessons": module_14_lessons},
    "15": {"title": "Algorithms Mastery", "lessons": module_15_lessons},
    "16": {"title": "Build Systems & Career", "lessons": module_16_lessons},
}

def generate_json():
    print("Generating cpp_curriculum.json...")
    
    # Validation: unique IDs
    ids = set()
    for mod_num, mod_data in curriculum.items():
        for lesson in mod_data["lessons"]:
            if "id" in lesson:
                if lesson["id"] in ids:
                    print(f"WARNING: Duplicate ID found: {lesson['id']}")
                ids.add(lesson["id"])
            else:
                # Add ID if missing (backward compatibility)
                pass # Ideally we should generate it, but let's assume content is good
    
    with open("cpp_curriculum.json", "w", encoding="utf-8") as f:
        json.dump(curriculum, f, indent=4)
    
    print(f"Success! Generated {len(curriculum)} modules.")

if __name__ == "__main__":
    generate_json()
