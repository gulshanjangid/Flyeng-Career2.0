import { supabase } from "@/lib/supabase"

export interface User {
    id?: string
    email: string
    name: string
    photo?: string
    role?: string
    bio?: string
    goals?: string[]
    age?: string
    gender?: string
    phone?: string
    college?: string
    streak?: number
    last_quest_date?: string
    registeredAt?: any
}

// Check if a user is registered by email
export async function isUserRegistered(email: string): Promise<boolean> {
    if (!supabase) return false

    try {
        const { data, error } = await supabase
            .from('users')
            .select('email')
            .eq('email', email)
            .maybeSingle()

        if (error) throw error
        return !!data
    } catch (error) {
        console.error("Error checking user registration:", error)
        return false
    }
}

// Get user by email
export async function getUserByEmail(email: string): Promise<User | null> {
    if (!supabase) return null

    try {
        // Try getting from the public table
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .maybeSingle()

        // If data exists, return it
        if (data) return data as User
        
        // If no data in public table, fallback to auth session metadata to guarantee data recovery
        const { data: { session } } = await supabase.auth.getSession()
        if (session && session.user.email === email && session.user.user_metadata) {
            const meta = session.user.user_metadata
            return {
                id: session.user.id,
                email: session.user.email,
                name: meta.name || meta.full_name || email,
                photo: meta.avatar_url || meta.picture,
                role: meta.role,
                bio: meta.bio,
                goals: meta.goals,
                college: meta.college,
                phone: meta.phone,
                age: meta.age,
                gender: meta.gender,
            } as User
        }
        
        return null
    } catch (error) {
        console.error("Error getting user:", error)
        return null
    }
}

// Register a new user
export async function registerUser(user: Omit<User, 'registeredAt'>): Promise<boolean> {
    if (!supabase) {
        console.warn("Supabase not configured. Registering in DEMO MODE (Local Storage Only).")
        // Also save to local storage for immediate UI updates/fallback
        if (typeof window !== 'undefined') {
            saveToLocalStorage(user as User)
        }
        return true
    }

    try {
        // Prepare user object for Supabase
        // Note: For RLS, the user must be authenticated. 
        // If this is called during signup, we assume the user is already signed up in Auth.
        // We need the Auth User ID to insert correctly due to RLS policies (auth.uid() = id).
        // However, if we are passing just email, we might need to get the user session first.

        const { data: { user: authUser } } = await supabase.auth.getUser()

        if (!authUser) {
            console.error("Cannot register profile: User not authenticated in Supabase Auth.")
            // Fallback to local storage for checking
            if (typeof window !== 'undefined') {
                saveToLocalStorage(user as User)
            }
            return false
        }

        const { error } = await supabase
            .from('users')
            .upsert({
                id: authUser.id,
                email: user.email,
                name: user.name,
                photo: user.photo,
                role: user.role,
                goals: user.goals,
                age: user.age,
                gender: user.gender,
                phone: user.phone,
                college: user.college,
                updated_at: new Date().toISOString(),
            }, { onConflict: 'id' })

        if (error) {
            console.error("Supabase DB Error:", error)
            // If table doesn't exist or RLS issue, fallback to allow UI to proceed
            if (typeof window !== 'undefined') {
                saveToLocalStorage(user as User)
            }
            return false // But return false to indicate DB failure
        }

        // Success - only if we have robust data
        if (typeof window !== 'undefined') {
            saveToLocalStorage({ ...user, id: authUser.id } as User)
        }

        return true
    } catch (error) {
        console.error("Error registering user:", error)
        if (typeof window !== 'undefined') {
            saveToLocalStorage(user as User)
        }
        return false
    }
}

// Update existing user
export async function updateUser(updates: Partial<User>): Promise<boolean> {
    if (!supabase) return false

    try {
        const { data: { user: authUser } } = await supabase.auth.getUser()
        if (!authUser) {
            console.error("Cannot update profile: User not authenticated.")
            return false
        }

        // Save everything into Supabase Auth Metadata. This bypasses the need for a separate users table
        // that might have restrictive RLS policies or might be missing.
        const authUpdates: any = {}
        if (updates.name !== undefined) {
            authUpdates.full_name = updates.name
            authUpdates.name = updates.name
        }
        if (updates.photo !== undefined) {
            authUpdates.avatar_url = updates.photo
            authUpdates.picture = updates.photo 
        }
        if (updates.role !== undefined) authUpdates.role = updates.role
        if (updates.phone !== undefined) authUpdates.phone = updates.phone
        if (updates.college !== undefined) authUpdates.college = updates.college
        if (updates.goals !== undefined) authUpdates.goals = updates.goals
        if ((updates as any).bio !== undefined) authUpdates.bio = (updates as any).bio
        if (updates.age !== undefined) authUpdates.age = updates.age
        if (updates.gender !== undefined) authUpdates.gender = updates.gender

        const { error: authError } = await supabase.auth.updateUser({
            data: authUpdates
        })

        if (authError) {
            console.error("Supabase Auth Update Error:", authError)
            throw new Error(authError.message || "Failed to save profile to authentication metadata.")
        }
        
        // Also try to update the public DB, but DON'T fail if it errors (due to RLS)
        try {
            const dbUpdates: any = { updated_at: new Date().toISOString() }
            if (updates.name !== undefined) dbUpdates.name = updates.name
            if (updates.photo !== undefined) dbUpdates.photo = updates.photo
            if (updates.role !== undefined) dbUpdates.role = updates.role
            if (updates.phone !== undefined) dbUpdates.phone = updates.phone
            if (updates.college !== undefined) dbUpdates.college = updates.college
            if (updates.goals !== undefined) dbUpdates.goals = updates.goals
            if ((updates as any).bio !== undefined) dbUpdates.bio = (updates as any).bio
            
            await supabase.from('users').upsert({
                id: authUser.id,
                email: authUser.email,
                ...dbUpdates
            }, { onConflict: 'id' })
        } catch (e) {
            console.warn("Could not save to public users table, but auth metadata saved successfully.")
        }

        // 3. Update Local Storage
        if (typeof window !== 'undefined') {
            let parsed: any = { id: authUser.id, email: authUser.email, ...authUpdates }
            try {
                const currentUser = localStorage.getItem('flyeng_user')
                if (currentUser) parsed = { ...JSON.parse(currentUser), ...parsed }
            } catch (e) {}
            saveToLocalStorage({ ...parsed, ...updates })
            // Dispatch event to update other tabs/components immediately
            window.dispatchEvent(new Event('storage'))
        }

        return true
    } catch (error) {
        console.error("Error updating user:", error)
        throw error // Throw to let the UI show the error if it completely failed
    }
}

// Login user (Helpers for local state syncing)
export async function loginUser(email: string): Promise<boolean> {
    // Primarily fetches from DB and sets local storage
    const user = await getUserByEmail(email)

    if (!user) {
        // If not in DB, maybe they are just in Auth?
        // We will return false, prompting to complete profile
        // But for Demo purposes:
        console.warn('User profile not found in DB:', email)
        return false
    }

    if (typeof window !== 'undefined') {
        saveToLocalStorage(user)
    }

    return true
}

// Get current logged-in user (sync - from Local Storage)
// Useful for instant UI rendering before DB fetch
export function getCurrentUser(): { id?: string; name: string; email: string; photo?: string } | null {
    if (typeof window === 'undefined') return null

    try {
        const user = localStorage.getItem('flyeng_user')
        return user ? JSON.parse(user) : null
    } catch (error) {
        console.error('Error reading current user:', error)
        return null
    }
}

// Logout user
export function logoutUser(): void {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('flyeng_user')
        localStorage.removeItem('sb-access-token') // Clear potential external keys
        localStorage.removeItem('sb-refresh-token')
         // Dispatch storage event to notify other tabs/components
        window.dispatchEvent(new Event('storage'))
        // Use replace to prevent back-button login
        window.location.replace('/') 
    }
}

// Helper
function saveToLocalStorage(user: User) {
    localStorage.setItem('flyeng_user', JSON.stringify({
        id: user.id || '',
        name: user.name,
        email: user.email,
        photo: user.photo,
        role: user.role,
        goals: user.goals,
        bio: (user as any).bio || '',
        phone: user.phone || '',
        college: user.college || '',
        age: user.age || '',
        gender: user.gender || '',
    }))
}

// Increment user daily streak
export async function incrementUserStreak(): Promise<number> {
    try {
        const today = new Date().toDateString()
        const stats = JSON.parse(localStorage.getItem('flyeng_stats') || '{}')
        
        let newStreak = stats.currentStreak || 0
        
        // Only increment if they haven't completed a quest today
        if (stats.lastQuestDate !== today) {
            newStreak += 1
            if (typeof window !== 'undefined') {
                stats.currentStreak = newStreak
                stats.lastQuestDate = today
                localStorage.setItem('flyeng_stats', JSON.stringify(stats))
                // Dispatch event so dashboard updates instantly
                window.dispatchEvent(new Event('storage'))
            }
        }

        if (!supabase) return newStreak

        const { data: { user: authUser } } = await supabase.auth.getUser()
        if (!authUser) return newStreak

        const profile = await getUserByEmail(authUser.email!)
        
        // DB side logic: check if the DB last_quest_date is today
        let dbStreak = profile?.streak || 0
        if (profile?.last_quest_date !== today) {
            dbStreak += 1
            await supabase
                .from('users')
                .upsert({
                    id: authUser.id,
                    email: authUser.email,
                    streak: dbStreak,
                    last_quest_date: today,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'id' })
        }

        return dbStreak
    } catch (err) {
        console.error("Failed to increment streak:", err)
        return 0
    }
}
