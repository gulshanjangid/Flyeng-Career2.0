import { MessageSquare } from "lucide-react"

export default function InterviewPage() {
    return (
        <div className="p-6 lg:p-10 h-full flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-green-400" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">AI Mock Interview</h1>
                <p className="text-white/60 max-w-md">
                    Practice your interview skills with our AI coach. We are fine-tuning the AI models for you!
                </p>
            </div>
        </div>
    )
}
