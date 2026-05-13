
import json
import os
from generate_python_module1 import module_1_lessons
from generate_python_module2 import module_2_lessons
from generate_python_module3 import module_3_lessons
from generate_python_module4 import module_4_lessons
from generate_python_module5 import module_5_lessons
from generate_python_module6 import module_6_lessons
from generate_python_module7 import module_7_lessons
from generate_python_module8 import module_8_lessons
from generate_python_module9 import module_9_lessons
from generate_python_module10 import module_10_lessons
from generate_python_module11 import module_11_lessons
from generate_python_module12 import module_12_lessons
from generate_python_module13 import module_13_lessons
from generate_python_module14 import module_14_lessons
from generate_python_module15 import module_15_lessons
from generate_python_module16 import module_16_lessons

# Helper to wrap content in standard styling
def style_lesson(title, emoji, content_body):
    return f"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center py-12">
        <div class="inline-block p-4 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 text-5xl">{emoji}</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {title}
        </h2>
    </div>
    {content_body}
</div>
"""

def code_block(code, lang="python", filename="main.py"):
    # This is also defined in generate_python_module1, but good to have here for other modules
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

# ==========================================
# MODULE 1 is imported
# ==========================================
# module_1_lessons is already defined in the import

# ==========================================
# PLACEHOLDERS FOR MODULES 2-16
# ==========================================

# Helper for placeholders
def create_placeholder(mod_num, title, emoji, goal):
    return [
        {
            "title": f"{mod_num}.1 Introduction to {title.split(' — ')[0] if '—' in title else title}",
            "emoji": emoji,
            "content": f"""
            <div class="space-y-6 text-slate-300">
                <p class="text-xl text-blue-300 font-bold">Goal: {goal}</p>
                <div class="p-8 bg-slate-900/50 border border-dashed border-slate-700 rounded-xl text-center">
                    <p class="text-slate-500 italic">Detailed content for Module {mod_num} is coming in the next update.</p>
                </div>
            </div>
            """
        }
    ]

m2_lessons = module_2_lessons # Using Detailed Content
m3_lessons = module_3_lessons # Using Detailed Content
m4_lessons = module_4_lessons # Using Detailed Content
m5_lessons = module_5_lessons # Using Detailed Content
m6_lessons = module_6_lessons # Using Detailed Content
m7_lessons = module_7_lessons # Using Detailed Content
m8_lessons = module_8_lessons # Using Detailed Content
m9_lessons = module_9_lessons # Using Detailed Content
m10_lessons = module_10_lessons # Using Detailed Content
m11_lessons = module_11_lessons # Using Detailed Content
m12_lessons = module_12_lessons # Using Detailed Content
m13_lessons = module_13_lessons # Using Detailed Content
m14_lessons = module_14_lessons # Using Detailed Content
m15_lessons = module_15_lessons # Using Detailed Content
m16_lessons = module_16_lessons # Using Detailed Content

# ==========================================
# ASSEMBLY
# ==========================================
curriculum = {
    "1": {"title": "Python Foundations for Absolute Beginners", "lessons": module_1_lessons},
    "2": {"title": "Core Data Structures & Collections", "lessons": m2_lessons},
    "3": {"title": "Files, Errors, Modules & Environments", "lessons": m3_lessons},
    "4": {"title": "Object‑Oriented Python (OOP)", "lessons": m4_lessons},
    "5": {"title": "Functional & Pythonic Patterns", "lessons": m5_lessons},
    "6": {"title": "DSA & Coding Interview Prep", "lessons": m6_lessons},
    "7": {"title": "NumPy, Pandas & Data Handling", "lessons": m7_lessons},
    "8": {"title": "Building REST APIs with FastAPI", "lessons": m8_lessons},
    "9": {"title": "Databases, SQL & ORM", "lessons": m9_lessons},
    "10": {"title": "Testing, Debugging & Clean Code", "lessons": m10_lessons},
    "11": {"title": "Async Python & Performance", "lessons": m11_lessons},
    "12": {"title": "Python + AI/ML Foundations", "lessons": m12_lessons},
    "13": {"title": "DevOps & Deployment", "lessons": m13_lessons},
    "14": {"title": "Placement Prep Bootcamp", "lessons": m14_lessons},
    "15": {"title": "Capstone Projects", "lessons": m15_lessons},
    "16": {"title": "Career Roadmap (2026-2027)", "lessons": m16_lessons},
}

# Apply styling helper to all defined contents
final_json = {}
for mod_num, mod_data in curriculum.items():
    final_lessons = []
    for idx, lesson in enumerate(mod_data["lessons"]):
        if "content" in lesson and lesson["content"].strip().startswith("<div"):
            html = lesson["content"]
        else:
            html = style_lesson(lesson["title"], lesson["emoji"], lesson["content"])
            
        final_lessons.append({
            "id": f"python-{mod_num}-{idx+1}",
            "title": lesson["title"],
            "duration": "45 min" if mod_num == "1" else "TBD",
            "type": "code",
            "content": html
        })
    
    final_json[mod_num] = {
        "title": mod_data["title"],
        "lessons": final_lessons
    }

# Write to JSON
with open("python_curriculum.json", "w", encoding="utf-8") as f:
    json.dump(final_json, f, indent=4)

print("Generated python_curriculum.json with 16 modules (Module 1 Detailed)")
