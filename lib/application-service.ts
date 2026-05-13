import { supabase } from "@/lib/supabase"

export interface Application {
    id?: string
    user_id: string
    userId?: string   // compatibility
    title: string
    company: string
    location?: string
    type?: 'Full-time' | 'Part-time' | 'Internship' | 'Remote' | 'Contract'
    status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected' | 'Saved'
    applied_at: any
    appliedAt?: any    // compatibility
    salary?: string
    link?: string
    notes?: string
    contactPerson?: string
    contact_person?: string // compatibility
    contactEmail?: string
    contact_email?: string  // compatibility
    updated_at?: string
    updatedAt?: string   // compatibility
}

export interface ApplicationStats {
    total: number
    applied: number
    interviewing: number
    offers: number
    rejected: number
    saved: number
    interviewRate: number  // percentage
    offerRate: number      // percentage
}

// Helper: read from localStorage
function getLocalApps(userId: string): Application[] {
    if (typeof window === 'undefined') return []
    try {
        const data = localStorage.getItem(`flyeng_apps_${userId}`)
        return data ? JSON.parse(data) : []
    } catch { return [] }
}

// Helper: write to localStorage
function setLocalApps(userId: string, apps: Application[]) {
    if (typeof window === 'undefined') return
    localStorage.setItem(`flyeng_apps_${userId}`, JSON.stringify(apps))
}

// Get all applications for a user
export async function getUserApplications(userId: string): Promise<Application[]> {
    if (!supabase) return getLocalApps(userId)

    try {
        const { data, error } = await supabase
            .from('applications')
            .select('*')
            .eq('"userId"', userId)
            .order('appliedAt', { ascending: false })

        if (error) throw error
        
        // Merge with local storage to support offline / fallback data (in case RLS blocked writes)
        const localApps = getLocalApps(userId);
        let merged = data ? [...(data as Application[])] : [];
        
        const dbIds = new Set(merged.map(a => a.id));
        for (const local of localApps) {
            if (!dbIds.has(local.id)) {
                merged.push(local);
            }
        }
        
        merged.sort((a, b) => new Date(b.appliedAt || b.applied_at || 0).getTime() - new Date(a.appliedAt || a.applied_at || 0).getTime());
        
        // Sync to local for offline access
        setLocalApps(userId, merged)
        return merged
    } catch (error) {
        console.error("Error fetching applications:", error)
        return getLocalApps(userId)
    }
}

// Add a new application
export async function addApplication(app: Omit<Application, 'id' | 'applied_at' | 'appliedAt' | 'updated_at' | 'updatedAt'>): Promise<string | null> {
    const now = new Date().toISOString()
    const uid = app.user_id || (app as any).userId
    const newApp: Application = {
        ...app,
        user_id: uid,
        userId: uid,
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substr(2, 12),
        applied_at: now,
        appliedAt: now,
        updated_at: now,
        updatedAt: now,
    }

    if (!supabase) {
        const apps = getLocalApps(uid)
        apps.unshift(newApp)
        setLocalApps(uid, apps)
        return newApp.id!
    }

    try {
        // Map for DB. We use "userId" since your DB strictly uses camelCase for this table.
        const dbApp = {
            "userId": (app as any).user_id || (app as any).userId,
            title: app.title,
            company: app.company,
            location: app.location,
            type: app.type,
            status: app.status,
            salary: app.salary,
            link: app.link,
            notes: app.notes,
            contact_person: app.contactPerson,
            contact_email: app.contactEmail,
            "appliedAt": now,
            updated_at: now
        }

        const { data, error } = await supabase
            .from('applications')
            .insert([dbApp])
            .select()

        if (error) throw error
        // Sync local
        const uid = (app as any).user_id || (app as any).userId
        const apps = getLocalApps(uid)
        apps.unshift(data?.[0] || newApp)
        setLocalApps(uid, apps)
        return data?.[0]?.id || newApp.id!
    } catch (error) {
        console.error("Error adding application:", error)
        // Fallback to localStorage
        const uid = (app as any).user_id || (app as any).userId
        const apps = getLocalApps(uid)
        apps.unshift(newApp)
        setLocalApps(uid, apps)
        return newApp.id!
    }
}

// Update an existing application
export async function updateApplication(
    userId: string,
    appId: string,
    updates: Partial<Omit<Application, 'id' | 'user_id' | 'userId' | 'applied_at' | 'appliedAt'>>
): Promise<boolean> {
    const now = new Date().toISOString()
    const patchData = { ...updates, updated_at: now, updatedAt: now }

    // Always update local
    const apps = getLocalApps(userId)
    const idx = apps.findIndex(a => a.id === appId)
    if (idx !== -1) {
        apps[idx] = { ...apps[idx], ...patchData }
        setLocalApps(userId, apps)
    }

    if (!supabase) return idx !== -1

    try {
        const dbUpdates = {
            ...updates,
            updated_at: new Date().toISOString()
        }

        const { error } = await supabase
            .from('applications')
            .update(dbUpdates)
            .eq('id', appId)
            .eq('"userId"', userId)

        if (error) throw error
        return true
    } catch (error) {
        console.error("Error updating application:", error)
        return idx !== -1  // local update succeeded
    }
}

// Delete an application
export async function deleteApplication(userId: string, appId: string): Promise<boolean> {
    // Always remove from local
    const apps = getLocalApps(userId)
    const filtered = apps.filter(a => a.id !== appId)
    setLocalApps(userId, filtered)

    if (!supabase) return true

    try {
        const { error } = await supabase
            .from('applications')
            .delete()
            .eq('id', appId)
            .eq('"userId"', userId)

        if (error) throw error
        return true
    } catch (error) {
        console.error("Error deleting application:", error)
        return true // local already deleted
    }
}

// Get application statistics
export function getApplicationStats(apps: Application[]): ApplicationStats {
    const active = apps.filter(a => a.status !== 'Saved')
    const applied = apps.filter(a => a.status === 'Applied').length
    const interviewing = apps.filter(a => a.status === 'Interviewing').length
    const offers = apps.filter(a => a.status === 'Offer').length
    const rejected = apps.filter(a => a.status === 'Rejected').length
    const saved = apps.filter(a => a.status === 'Saved').length

    const total = active.length
    const interviewRate = total > 0 ? Math.round(((interviewing + offers) / total) * 100) : 0
    const offerRate = total > 0 ? Math.round((offers / total) * 100) : 0

    return { total, applied, interviewing, offers, rejected, saved, interviewRate, offerRate }
}
