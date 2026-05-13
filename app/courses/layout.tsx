import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "All Courses | Flyeng Career",
    description: "Master Data Structures, Algorithms, C++, Java, and more with our AI-enhanced curriculum.",
    openGraph: {
        title: "All Courses | Flyeng Career",
        description: "Master Data Structures, Algorithms, C++, Java, and more with our AI-enhanced curriculum.",
        type: "website",
    },
}

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"

export default function CoursesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}
