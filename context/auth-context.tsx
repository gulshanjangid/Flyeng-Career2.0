'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

interface AuthContextType {
    user: User | null
    session: Session | null
    loading: boolean
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

// Helper: sync user metadata to localStorage for instant UI access
function syncUserToLocalStorage(user: User) {
    if (typeof window === 'undefined') return
    try {
        const meta = user.user_metadata || {}
        const userData = {
            name: meta.name || meta.full_name || user.email?.split('@')[0] || 'User',
            email: user.email || '',
            photo: meta.avatar_url || meta.picture || '',
            role: meta.role || 'student',
            goals: meta.goals || [],
        }
        localStorage.setItem('flyeng_user', JSON.stringify(userData))
    } catch (e) {
        // Non-critical
    }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!supabase) {
            console.log("Auth Debug: No Supabase client")
            setLoading(false)
            return
        }

        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setUser(session?.user ?? null)
            if (session?.user) {
                syncUserToLocalStorage(session.user)
            }
            setLoading(false)
        })

        // Listen for changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session)
            setUser(session?.user ?? null)
            setLoading(false)

            // Auto-sync profile on sign in (especially important for OAuth)
            if (event === 'SIGNED_IN' && session?.user) {
                syncUserToLocalStorage(session.user)
            }

            // Clear on sign out
            if (event === 'SIGNED_OUT') {
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('flyeng_user')
                }
            }
        })

        return () => subscription.unsubscribe()
    }, [])

    const logout = async () => {
        try {
            if (supabase) {
                await supabase.auth.signOut()
            }
        } catch (error) {
            console.error("Error signing out:", error)
        } finally {
            // Force clear local storage and redirect
            import('@/lib/user-service').then(({ logoutUser }) => {
                logoutUser()
            })
            setUser(null)
            setSession(null)
        }
    }

    return (
        <AuthContext.Provider value={{ user, session, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext)
    if (!ctx) {
        return { user: null, session: null, loading: false, logout: async () => { } }
    }
    return ctx
}