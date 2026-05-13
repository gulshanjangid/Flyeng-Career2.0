import { NextRequest, NextResponse } from "next/server";
import { courseData } from "@/lib/course-data";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { courseId, lessonId } = body;

        if (!courseId || !courseData[courseId]) {
            return NextResponse.json({ error: "Course not found" }, { status: 404 });
        }

        const course = courseData[courseId];

        // Generate simplified syllabus map
        const syllabusMap = course.modules.map((m: any, i: number) => 
            `${i+1}. ${m.title} (${m.lessons.length} lessons)`
        ).join('\n');

        let activeLessonContent = null;
        let activeLessonTitle = null;

        if (lessonId) {
            for (const module of course.modules) {
                const foundLesson = module.lessons.find((l: any) => l.id === lessonId);
                if (foundLesson) {
                    // Strip HTML tags for cleaner context
                    const cleanContent = foundLesson.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
                    activeLessonContent = `Title: ${foundLesson.title}\nType: ${foundLesson.type}\nContent Preview: ${cleanContent.substring(0, 1000)}...`;
                    activeLessonTitle = foundLesson.title;
                    break;
                }
            }
        }

        return NextResponse.json({
            courseId,
            title: course.title,
            instructor: course.instructor,
            description: course.description,
            syllabus: syllabusMap,
            currentLessonId: lessonId,
            activeLessonContent,
            activeLessonTitle
        });

    } catch (error) {
        console.error("Error in course-context API:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
