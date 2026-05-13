
import json
import os

# Import all module data
from generate_java_module_1 import module_1_lessons
from generate_java_module_2 import module_2_lessons
from generate_java_module_3 import module_3_lessons
from generate_java_module_4 import module_4_lessons
from generate_java_module_5 import module_5_lessons
from generate_java_module_6 import module_6_lessons
from generate_java_module_7 import module_7_lessons
from generate_java_module_8 import module_8_lessons
from generate_java_module_9 import module_9_lessons
from generate_java_module_10 import module_10_lessons
from generate_java_module_11 import module_11_lessons
from generate_java_module_12 import module_12_lessons
from generate_java_module_13 import module_13_lessons
from generate_java_module_14 import module_14_lessons
from generate_java_module_15 import module_15_lessons
from generate_java_module_16 import module_16_lessons
from generate_java_module_17 import module_17_lessons
from generate_java_module_18 import module_18_lessons

OUTPUT_FILE = "lib/java-course-data.ts"

course_structure = [
    {"id": "1", "title": "Java Foundations & Tooling", "lessons": module_1_lessons},
    {"id": "2", "title": "Control Flow & Basic OOP", "lessons": module_2_lessons},
    {"id": "3", "title": "Core OOP Concepts", "lessons": module_3_lessons},
    {"id": "4", "title": "Strings & Collections Framework", "lessons": module_4_lessons},
    {"id": "5", "title": "Exceptions & File I/O (NIO.2)", "lessons": module_5_lessons},
    {"id": "6", "title": "Functional Programming (Streams/Lambdas)", "lessons": module_6_lessons},
    {"id": "7", "title": "Multithreading & Concurrency", "lessons": module_7_lessons},
    {"id": "8", "title": "JVM Internals & Memory Management", "lessons": module_8_lessons},
    {"id": "9", "title": "Unit Testing with JUnit 5 & Mockito", "lessons": module_9_lessons},
    {"id": "10", "title": "Build Tools (Maven/Gradle)", "lessons": module_10_lessons},
    {"id": "11", "title": "Database Access (JDBC, JPA, Hibernate)", "lessons": module_11_lessons},
    {"id": "12", "title": "Design Patterns in Java", "lessons": module_12_lessons},
    {"id": "13", "title": "Spring Boot Basics", "lessons": module_13_lessons},
    {"id": "14", "title": "REST APIs with Spring Web", "lessons": module_14_lessons},
    {"id": "15", "title": "Advanced Spring Security (JWT, OAuth2)", "lessons": module_15_lessons},
    {"id": "16", "title": "Microservices Architecture", "lessons": module_16_lessons},
    {"id": "17", "title": "Capstone: Distributed Ride-Hailing Cloud", "lessons": module_17_lessons},
    {"id": "18", "title": "Bonus: Java in the Age of AI", "lessons": module_18_lessons},
]

def generate_ts_file():
    ts_content = """import { 
    Terminal, 
    BookOpen, 
    Code, 
    Cpu, 
    Globe, 
    Zap, 
    Layout, 
    Server, 
    Database, 
    Lock, 
    Box, 
    Layers, 
    Repeat, 
    GitBranch,
    Activity,
    Shield
} from "lucide-react";

export interface Lesson {
    id: string;
    title: string;
    duration: string;
    type: "video" | "interactive" | "quiz";
    content: string;
}

export interface Module {
    id: string;
    title: string;
    lessons: Lesson[];
}

export const javaCourseData: Module[] = [
"""

    for module in course_structure:
        ts_content += "  {\n"
        ts_content += f'    id: "{module["id"]}",\n'
        ts_content += f'    title: "{module["title"]}",\n'
        ts_content += "    lessons: [\n"
        
        for i, lesson in enumerate(module["lessons"]):
            lesson_id = f"{module['id']}.{i+1}"
            # Escape backticks and generic double quotes in content if necessary
            # For simplicity, we use the specific content generated in modules which is already Python f-string
            # But we need to be careful about JS string literals.
            # We will use backticks for the JS string to allow multiline HTML.
            
            content_js = lesson["content"].replace("`", "\\`").replace("${", "\\${")
            # Also need to handle raw newlines, although backticks handle them fine.
            
            ts_content += "      {\n"
            ts_content += f'        id: "{lesson_id}",\n'
            ts_content += f'        title: "{lesson["title"]}",\n'
            ts_content += '        duration: "15 min",\n'
            ts_content += '        type: "interactive",\n'
            ts_content += f'        content: `{content_js}`\n'
            ts_content += "      },\n"
        
        ts_content += "    ]\n"
        ts_content += "  },\n"

    ts_content += "];\n"

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(ts_content)
    
    print(f"Successfully generated {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_ts_file()
