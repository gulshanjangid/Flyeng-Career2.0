'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { UserCircle, LogOut } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Settings } from "lucide-react"

export function Navbar() {
    const { user, logout } = useAuth()
    const router = useRouter()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLogout = async () => {
        console.log("Logging out...")
        await logout()
        // The context handles the redirect, but we double ensure here
        router.push('/')
        router.refresh()
    }

    // Get display info
    const displayName = user?.user_metadata?.name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || "User"
    const displayImage = user?.user_metadata?.avatar_url || user?.user_metadata?.picture

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 h-16 md:h-20 transition-all duration-300 border-b",
            scrolled ? "bg-black/80 backdrop-blur-xl border-white/10" : "bg-transparent border-transparent"
        )}>
            <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center font-black text-black text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300">FC</div>
                    <span className="text-xl font-bold text-white tracking-tight">Flyeng<span className="text-white/40">Career</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                     {['Courses', 'Dashboard', 'Tools'].map((item) => (
                        <Link 
                            key={item}
                            href={`/${item.toLowerCase()}`} 
                            className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                        </Link>
                     ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-11 w-11 rounded-full overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all p-0 group">
                                    {displayImage ? (
                                        <div className="w-full h-full relative">
                                             <img src={displayImage} alt={displayName} className="h-full w-full object-cover" />
                                             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-cyan-900 to-purple-900 flex items-center justify-center">
                                            <span className="text-sm font-bold text-white">{displayName[0]?.toUpperCase()}</span>
                                        </div>
                                    )}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64 bg-[#0a0a0a]/95 backdrop-blur-xl border-white/10 text-white p-2 rounded-2xl shadow-2xl" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal mb-2">
                                    <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/5">
                                        <div className="h-10 w-10 rounded-full overflow-hidden bg-white/10">
                                            {displayImage ? (
                                                <img src={displayImage} alt={displayName} className="h-full w-full object-cover" />
                                            ) : (
                                                <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-600 font-bold">{displayName[0]}</div>
                                            )}
                                        </div>
                                        <div className="flex flex-col space-y-0.5 overflow-hidden">
                                            <p className="text-sm font-bold leading-none truncate">{displayName}</p>
                                            <p className="text-xs leading-none text-white/40 truncate">Engineer</p>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                
                                <div className="space-y-1">
                                    <DropdownMenuItem className="focus:bg-white/10 cursor-pointer rounded-lg" onClick={() => router.push('/dashboard')}>
                                        <div className="flex items-center gap-2">
                                            <div className="p-1 rounded bg-cyan-500/10 text-cyan-400"><LayoutDashboard className="w-4 h-4" /></div>
                                            <span>Dashboard</span>
                                        </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="focus:bg-white/10 cursor-pointer rounded-lg" onClick={() => router.push('/dashboard/settings')}>
                                        <div className="flex items-center gap-2">
                                            <div className="p-1 rounded bg-purple-500/10 text-purple-400"><Settings className="w-4 h-4" /></div>
                                            <span>Settings</span>
                                        </div>
                                    </DropdownMenuItem>
                                </div>
                                
                                <DropdownMenuSeparator className="bg-white/10 my-2" />
                                
                                <DropdownMenuItem className="focus:bg-red-500/10 text-red-400 focus:text-red-300 cursor-pointer rounded-lg" onClick={handleLogout}>
                                    <div className="flex items-center gap-2">
                                        <div className="p-1 rounded bg-red-500/10"><LogOut className="w-4 h-4" /></div>
                                        <span>Log out</span>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link href="/login" className="text-sm font-medium text-white/60 hover:text-white transition-colors hidden md:block">Log In</Link>
                            <Link href="/signup">
                                <Button className="bg-white text-black hover:bg-gray-200 rounded-xl px-6 font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all">Get Started</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}


