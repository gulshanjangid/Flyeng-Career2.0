"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { useAuth } from "@/context/auth-context"
import { getCurrentUser } from "@/lib/user-service"
import Link from "next/link"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { user: authUser, loading: authLoading } = useAuth()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname()

    // Auto-close mobile sidebar on navigation
    useEffect(() => {
        setSidebarOpen(false)
    }, [pathname])

    // Show loading state while checking auth
    if (authLoading) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
                <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    if (!authUser) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
                <div className="relative z-10 text-center space-y-6 p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />
                    <div className="relative z-10">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(6,182,212,0.3)] border border-cyan-500/20 relative z-10 hover:scale-110 transition-transform duration-500">
                            <User className="w-12 h-12 text-cyan-400" />
                        </div>
                        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-tight mb-3">Access Restricted</h2>
                        <p className="text-white/50 max-w-sm mx-auto mb-8 text-sm">Please identify yourself to access the mission control dashboard.</p>
                        <div className="flex justify-center">
                            <Link href="/login">
                                <Button size="lg" className="h-14 rounded-xl px-10 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all active:scale-95 group">
                                    Authenticate <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block fixed inset-y-0 left-0 w-64 z-50">
                <DashboardSidebar user={{
                    name: authUser.user_metadata?.name || authUser.user_metadata?.full_name || "Engineer",
                    email: authUser.email!,
                    photo: authUser.user_metadata?.avatar_url,
                    ...authUser.user_metadata
                }} className="h-full" />
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 p-4 flex items-center justify-between">
                <div className="font-bold text-lg tracking-tight">Flyeng<span className="text-cyan-400">Career</span></div>
                <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
                        <div className="relative w-72 h-full">
                            <DashboardSidebar 
                                className="relative w-full h-full shadow-none border-none bg-transparent"
                                user={{
                                    name: authUser.user_metadata?.name || authUser.user_metadata?.full_name || "Engineer",
                                    email: authUser.email!,
                                    photo: authUser.user_metadata?.avatar_url,
                                    ...authUser.user_metadata
                            }} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <div className="lg:pl-64 pt-20 lg:pt-0 min-h-screen flex flex-col">
                <main className="flex-1 p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
                    {children}
                </main>
            </div>
        </div>
    )
}
