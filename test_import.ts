
import { courseData } from "./lib/course-data";

try {
    console.log("Keys in courseData:", Object.keys(courseData));
    if (courseData['genai']) {
        console.log("genai key found.");
    } else {
        console.log("genai key NOT found.");
    }
} catch (error) {
    console.error("Error accessing courseData:", error);
}
