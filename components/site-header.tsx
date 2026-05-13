"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Tag, HelpCircle, FileText, Info, ChevronDown, Building2, Package, Zap, LogIn, Brain } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { getCurrentUser } from "@/lib/user-service"

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  useEffect(() => {
    // Check local storage first for immediate UI update
    const localUser = getCurrentUser()
    if (localUser) setUser(localUser)

    // Listen for auth changes
    if (supabase) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          // We might need to fetch the name from Postgres if it's not in the auth object
          setUser(prev => prev || {
            name: session.user.user_metadata?.name || localUser?.name || "User",
            email: session.user.email || ""
          })
        } else {
          setUser(null)
        }
      })
      return () => subscription.unsubscribe()
    }
  }, [])

  const services = [
    {
      href: "/ai-tools",
      label: "AI Tools",
      icon: Zap,
      description: "All 8 career tools",
    },
    {
      href: "/features",
      label: "Features",
      icon: Building2,
      description: "Explore capabilities",
    },
  ]

  const links = [
    { href: "/courses", label: "Courses", icon: Package },
    { href: "/ai-tools", label: "Tools", icon: Zap },
    { href: "/features", label: "Features", icon: HelpCircle },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: FileText },
  ]

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex h-16 items-center justify-between px-4 md:px-6 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-black/50 hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,217,255,0.1)]">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/50 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image src="/icons/skitbit-white.svg" alt="Flyeng Career logo" width={24} height={24} className="relative h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="font-bold tracking-wide text-white text-base sm:text-lg bg-gradient-to-r from-white to-white bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
              Flyeng Career
            </span>
          </Link>

          <nav className="hidden items-center gap-1 text-sm font-medium text-white/90 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-cyan-300 transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">{l.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-bold text-white">
                    {(user.name || "U").charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                    {user.name || "User"}
                  </span>
                </Link>
              </div>
            ) : (
              <>
                <Button
                  asChild
                  variant="ghost"
                  className="text-white hover:text-cyan-300 hover:bg-white/5 rounded-full px-5"
                >
                  <Link href="/login" className="flex items-center gap-2">
                    <LogIn className="h-4 w-4" />
                    Login
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full px-6 py-2.5
                             hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:scale-105
                             transition-all duration-300 border-none"
                >
                  <Link href="/signup">Start Free</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 rounded-full"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 backdrop-blur-md border-l border-white/10 p-0 w-[min(288px,85vw)] flex flex-col max-h-[100dvh] overflow-y-auto pb-safe">
                <div className="flex items-center gap-2 px-6 py-6 border-b border-white/10">
                  <Image src="/icons/skitbit-white.svg" alt="Flyeng Career logo" width={24} height={24} className="h-6 w-6" />
                  <span className="font-bold tracking-wide text-white text-lg">Flyeng Career</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-4 px-2 flex-1">


                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-white/90 hover:text-cyan-300 transition-all"
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-cyan-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="font-medium">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Buttons at Bottom */}
                <div className="border-t border-white/10 p-6 space-y-3 bg-gradient-to-t from-cyan-900/20 to-transparent">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 rounded-xl h-11"
                  >
                    <Link href="/login" className="flex items-center justify-center gap-2">
                      <LogIn className="h-4 w-4" />
                      Login
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl h-11
                               hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all border-none"
                  >
                    <Link href="#contact">Start Free</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
