'use client';

import { useRouter } from 'next/navigation';

export default function InterviewDashboard() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-black text-white p-8">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            Candidate Analytics
                        </h1>
                        <p className="text-white/50 mt-2 font-mono">Performance Metrics & Insights</p>
                    </div>
                    <button
                        onClick={() => router.push('/')}
                        className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                    >
                        Back to Home
                    </button>
                </header>

                {/* Placeholder Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                        { label: "Overall Score", value: "85%", change: "+12%" },
                        { label: "Communication", value: "9.2", change: "Top 5%" },
                        { label: "Technical Depth", value: "7.8", change: "Steady" }
                    ].map((stat, i) => (
                        <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group">
                            <h3 className="text-white/50 text-sm font-bold uppercase tracking-widest">{stat.label}</h3>
                            <div className="flex items-end gap-3 mt-2">
                                <span className="text-5xl font-black">{stat.value}</span>
                                <span className="text-green-400 text-sm mb-2">{stat.change}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
                    <h2 className="text-2xl font-bold mb-4">Detailed Report Generation in Progress...</h2>
                    <p className="text-white/50 max-w-lg mx-auto mb-8">
                        Your detailed interview transcript and semantic analysis are being processed by the system.
                        Check back shortly for the complete breakdown.
                    </p>
                    <div className="flex justify-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200" />
                    </div>
                </div>

            </div>
        </div>
    )
}
