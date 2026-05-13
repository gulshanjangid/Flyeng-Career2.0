import { courseData } from '@/lib/course-data';
import { notFound } from 'next/navigation';
import { CourseSidebar } from '@/components/course-sidebar';
import { CommandMenu } from '@/components/command-menu';

export default function CourseLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { courseId: string };
}) {
    const course = courseData[params.courseId];

    if (!course) {
        return notFound();
    }

    // Sanitize course data
    const { icon, ...serializedCourse } = course;

    return (
        // APP LAYOUT: Standard Document Flow.
        // We use min-h-screen and a flex row.
        // The Sidebar is sticky. The Main content flows naturally.
        <div className="min-h-screen w-full bg-[#030014] flex">

            {/* GLOBAL SEARCH MODAL */}
            <CommandMenu />

            {/* MAIN CONTENT AREA */}
            {/* Flex-1 allows it to grow. min-w-0 prevents flex items from overflowing. relative for positioning. */}
            <main className="flex-1 min-w-0 flex flex-col relative z-10 pl-0">
                {children}
            </main>

            {/* SIDEBAR (RIGHT) */}
            {/* Sticky to top of viewport. h-screen height to fill screen. */}
            <div className="hidden lg:block w-80 flex-shrink-0 border-l border-white/5 bg-[#050505] sticky top-0 h-screen z-20 overflow-hidden">
                <CourseSidebar course={serializedCourse} courseId={params.courseId} />
            </div>

        </div>
    );
}
