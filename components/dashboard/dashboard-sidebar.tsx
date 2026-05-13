"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import {
    LayoutDashboard,
    Briefcase,
    Video,
    FileText,
    Settings,
    LogOut,
    Home,
    Code,
    Sparkles
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useAuth } from "@/context/auth-context"
import { UpgradeModal } from "@/components/dashboard/upgrade-modal"
import { getUserApplications } from "@/lib/application-service"

interface DashboardSidebarProps {
    user: any
}

export function DashboardSidebar({ user, className }: DashboardSidebarProps & { className?: string }) {
    const pathname = usePathname()
    const { logout } = useAuth()
    const [showUpgradeModal, setShowUpgradeModal] = useState(false)
    const [appCount, setAppCount] = useState(0)
    const [localUser, setLocalUser] = useState<any>(user)
    const [isPro, setIsPro] = useState(false)

    useEffect(() => {
        const updateLocalUser = () => {
            if (typeof window !== 'undefined') {
                try {
                    const stored = localStorage.getItem('flyeng_user')
                    if (stored) {
                        const parsed = JSON.parse(stored)
                        setLocalUser({ ...user, ...parsed })
                    }
                    if (localStorage.getItem('flyeng_pro_plan') === 'true') {
                        setIsPro(true)
                    }
                } catch (e) {}
            }
        }
        
        updateLocalUser()
        window.addEventListener('storage', updateLocalUser)
        return () => window.removeEventListener('storage', updateLocalUser)
    }, [user])

    // Fetch application count for badge
    useEffect(() => {
        if (user?.id) {
            getUserApplications(user.id).then(apps => {
                setAppCount(apps.filter(a => a.status !== 'Saved').length)
            }).catch(() => {})
        }
    }, [user?.id, pathname]) // Re-fetch on navigation

    const navItems = [
        { name: "Overview", href: "/dashboard", icon: LayoutDashboard, badge: null },
        { name: "My Applications", href: "/dashboard/applications", icon: Briefcase, badge: appCount > 0 ? appCount : null },
        { name: "AI Resume Builder", href: "/ai-tools/resume-builder", icon: FileText, badge: null },
        { name: "Mock Interview", href: "/ai-tools/mock-interview", icon: Video, badge: null },
        { name: "Future Labs", href: "/coming-soon", icon: Sparkles, badge: "Soon" },
        { name: "Settings", href: "/dashboard/settings", icon: Settings, badge: null },
    ]

    return (
        <>
            <UpgradeModal open={showUpgradeModal} onOpenChange={setShowUpgradeModal} />
            <div className={cn("w-64 border-r border-white/5 bg-[#050505]/95 flex flex-col h-[100dvh] fixed left-0 top-0 z-40 shadow-[0_0_50px_rgba(0,0,0,0.5)]", className)}>

                {/* User Profile Header - Premium Redesign */}
                <div className="p-5 lg:p-6 border-b border-white/5 relative z-10 bg-gradient-to-b from-white/[0.02] to-transparent">
                    <div className="flex items-center gap-3 group cursor-pointer relative">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -m-2 p-2 blur-md" />
                        
                        <div className="relative z-10 shrink-0">
                            {localUser?.photo ? (
                                <img
                                    src={localUser.photo}
                                    alt={localUser?.name || 'TESTER'}
                                    className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl object-cover shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 transform group-hover:scale-105 group-hover:-rotate-3 ring-1 ring-cyan-500/30"
                                />
                            ) : (
                                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-lg lg:text-xl shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 transform group-hover:scale-105 group-hover:-rotate-3 ring-1 ring-white/10 relative overflow-hidden">
                                    <span className="drop-shadow-md relative z-10">{localUser?.name?.[0]?.toUpperCase() || "T"}</span>
                                </div>
                            )}
                            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 lg:w-4 lg:h-4 bg-emerald-500 rounded-full border-2 border-[#050505] flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                                <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-white rounded-full animate-pulse" />
                            </div>
                        </div>

                        <div className="relative z-10 flex-1 overflow-hidden">
                            <div className="font-bold text-white text-sm lg:text-base truncate group-hover:text-cyan-400 transition-colors tracking-tight">
                                {localUser?.name || 'TESTER'}
                            </div>
                            <div className="flex items-center gap-1.5 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                                {isPro ? (
                                    <div className="flex items-center gap-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 py-0.5 rounded-sm border border-purple-500/30">
                                        <Sparkles className="w-3 h-3 text-purple-400" />
                                        <span className="text-[10px] text-purple-300 font-bold tracking-widest uppercase shadow-purple-500/50">Pro Plan</span>
                                    </div>
                                ) : (
                                    <>
                                        <span className="text-[10px] lg:text-xs text-white/50 font-mono tracking-wider font-semibold">Free Plan</span>
                                        <div className="h-1 w-1 rounded-full bg-white/20" />
                                        <span className="text-[9px] text-cyan-400/80 font-bold tracking-widest uppercase bg-cyan-500/10 px-1.5 py-0.5 rounded-sm border border-cyan-500/20 cursor-pointer" onClick={() => setShowUpgradeModal(true)}>Upgrade</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <ScrollArea className="flex-1 px-3 py-4 relative z-10">
                    <div className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link key={item.href} href={item.href}>
                                    <div className={cn(
                                        "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                                        isActive
                                            ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-white font-bold border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                                            : "text-white/50 hover:text-white hover:bg-white/[0.08] hover:shadow-lg border border-transparent hover:border-white/10"
                                    )}>
                                        {isActive && <div className="absolute inset-0 bg-cyan-400/10 blur-xl" />}
                                        <div className={cn(
                                            "relative z-10 p-1.5 rounded-lg transition-colors",
                                            isActive ? "bg-cyan-500/20 text-cyan-300" : "bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-cyan-200"
                                        )}>
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <span className={cn("relative z-10 flex-1 text-sm tracking-wide transition-all", isActive ? "translate-x-1" : "group-hover:translate-x-1")}>{item.name}</span>
                                        {item.badge !== null && (
                                            <span className="relative z-10 min-w-[20px] h-5 px-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold flex items-center justify-center border border-cyan-500/30">
                                                {item.badge}
                                            </span>
                                        )}
                                        {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse relative z-10" />}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                    <div className="mt-8 px-3">
                        <div
                            className="p-4 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 relative overflow-hidden group cursor-pointer hover:border-purple-500/40 transition-colors"
                            onClick={() => setShowUpgradeModal(true)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 group-hover:via-purple-500/10 transition-all duration-1000 animate-shimmer" />
                            <Sparkles className="w-6 h-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="font-bold text-white mb-1 text-sm">Go Pro</h4>
                            <p className="text-[10px] text-white/60 mb-3 leading-relaxed">Unlock unlimited AI credits and premium templates.</p>
                            <Button size="sm" className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-400 hover:to-cyan-400 transition-colors font-bold shadow-lg shadow-purple-500/20 border-none">Upgrade Plan</Button>
                        </div>
                    </div>
                </ScrollArea>

                {/* Footer Actions */}
                <div className="p-4 border-t border-white/5 space-y-2 relative z-10">
                    <Link href="/">
                        <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white hover:bg-white/5 hover:pl-6 transition-all duration-300">
                            <Home className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                <Button
                    variant="ghost"
                    className="w-full justify-start text-red-400/60 hover:text-red-400 hover:bg-red-950/20 hover:pl-6 transition-all duration-300"
                    onClick={async () => {
                        await logout()
                    }}
                >
                        <LogOut className="w-4 h-4 mr-2" />
                        Log Out
                    </Button>
                </div>
            </div>
        </>
    )
}
