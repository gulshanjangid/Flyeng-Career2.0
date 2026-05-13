"use client"

import * as React from "react"
import { useRouter, useParams } from "next/navigation"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command" // Assuming shadcn or similar wrapper, or raw cmdk if not present. 
// Wait, I should check if ui/command exists. If not, I'll use raw cmdk.
// Based on package.json, "cmdk" is there. "shadcn" might not be fully installed or I don't know the path.
// I will use raw `cmdk` directly to be safe, or check for ui/command.
// Actually, safely I will build a self-contained one using cmdk.

import { Command } from "cmdk"
import { Search, FileText, PlayCircle, Code2, BookOpen } from "lucide-react"
import { courseData } from "@/lib/course-data"

export function CommandMenu() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()
    const params = useParams()
    const currentCourseId = params?.courseId as string

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    // Flatten all lessons - SCOPED TO CURRENT COURSE
    const allLessons = React.useMemo(() => {
        const lessons: any[] = []
        Object.entries(courseData).forEach(([courseId, course]) => {
            // STRICT FILTER IF ON A COURSE PAGE
            if (currentCourseId && courseId !== currentCourseId) return

            course.modules.forEach((mod) => {
                mod.lessons.forEach((lesson) => {
                    lessons.push({
                        ...lesson,
                        courseId,
                        courseTitle: course.title,
                        moduleTitle: mod.title
                    })
                })
            })
        })
        return lessons
    }, [currentCourseId])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Search"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl w-full bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl p-0 overflow-hidden z-[9999]"
            overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
        >
            <div className="flex items-center border-b border-white/10 px-4">
                <Search className="w-5 h-5 text-gray-500 mr-3" />
                <Command.Input
                    placeholder="Search lessons..."
                    className="w-full bg-transparent py-4 text-base text-white placeholder:text-gray-500 focus:outline-none font-sans"
                />
            </div>

            <Command.List className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10">
                <Command.Empty className="py-6 text-center text-sm text-gray-500">
                    No results found.
                </Command.Empty>

                <Command.Group heading="Lessons" className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2 mb-2">
                    {allLessons.map((lesson) => (
                        <Command.Item
                            key={`${lesson.courseId}-${lesson.id}`}
                            value={`${lesson.title} ${lesson.moduleTitle}`}
                            onSelect={() => {
                                runCommand(() => router.push(`/courses/${lesson.courseId}/${lesson.id}`))
                            }}
                            className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-300 aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
                        >
                            <div className="flex items-center justify-center w-8 h-8 rounded bg-white/5 border border-white/5">
                                {lesson.type === 'video' && <PlayCircle className="w-4 h-4 text-blue-400" />}
                                {lesson.type === 'article' && <FileText className="w-4 h-4 text-emerald-400" />}
                                {lesson.type === 'code' && <Code2 className="w-4 h-4 text-pink-400" />}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium">{lesson.title}</span>
                                <span className="text-[10px] text-gray-500">{lesson.courseTitle} • {lesson.moduleTitle}</span>
                            </div>
                        </Command.Item>
                    ))}
                </Command.Group>
            </Command.List>
        </Command.Dialog>
    )
}
