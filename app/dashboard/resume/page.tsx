import { FileText } from "lucide-react"

export default function ResumeBuilderPage() {
    return (
        <div className="p-6 lg:p-10 h-full flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-purple-400" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Resume Builder</h1>
                <p className="text-white/60 max-w-md">
                    Create ATS-friendly resumes with AI assistance. This feature is currently in development.
                </p>
            </div>
        </div>
    )
}
