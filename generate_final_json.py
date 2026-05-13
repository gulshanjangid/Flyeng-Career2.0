
import json
from generate_hyper_content_part1 import module_5, module_6, module_7, module_8, module_9
from generate_hyper_content_part2 import module_13, module_15, module_16

# Combine all modules into a dictionary keyed by module ID (conceptually)
# Note: In course-data.ts, these are in an array. We will need to map them by title or index.
# For this JSON dump, we'll output a map so the injector script can find them easily.

all_modules = {
    # Using the title prefix number as a key key for easy lookup
    "5": module_5,
    "6": module_6,
    "7": module_7,
    "8": module_8,
    "9": module_9,
    "13": module_13,
    "15": module_15,
    "16": module_16
}

with open("hyper_content.json", "w", encoding="utf-8") as f:
    json.dump(all_modules, f, indent=4)

print("Successfully generated hyper_content.json")
