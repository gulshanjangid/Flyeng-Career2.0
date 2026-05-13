import { supabase } from "@/lib/supabase"

export interface Interview {
    id?: string
    userId: string
    title: string // e.g., "System Design Mock"
    type: 'Behavioral' | 'Technical' | 'System Design' | 'HR'
    scheduledAt: any
    status: 'Scheduled' | 'Completed' | 'Cancelled'
    score?: number
    feedback?: string
}

// Get all interviews for a user
export async function getUserInterviews(userId: string): Promise<Interview[]> {
    if (!supabase) {
        if (typeof window !== 'undefined') {
            const localInterviews = localStorage.getItem(`flyeng_interviews_${userId}`)
            return localInterviews ? JSON.parse(localInterviews) : []
        }
        return []
    }

    try {
        const { data, error } = await supabase
            .from('interviews')
            .select('*')
            .eq('userId', userId)

        if (error) throw error
        return data as Interview[]
    } catch (error) {
        console.error("Error fetching interviews:", error)
        if (typeof window !== 'undefined') {
            const localInterviews = localStorage.getItem(`flyeng_interviews_${userId}`)
            return localInterviews ? JSON.parse(localInterviews) : []
        }
        return []
    }
}

// Schedule an interview (Mock)
export async function scheduleInterview(interview: Omit<Interview, 'id'>): Promise<string | null> {
    if (!supabase) {
        if (typeof window !== 'undefined') {
            const userId = interview.userId
            const localInterviews = localStorage.getItem(`flyeng_interviews_${userId}`)
            const interviews = localInterviews ? JSON.parse(localInterviews) : []
            const newInterview = { ...interview, id: Math.random().toString(36).substr(2, 9) }
            interviews.push(newInterview)
            localStorage.setItem(`flyeng_interviews_${userId}`, JSON.stringify(interviews))
            return newInterview.id
        }
        return null
    }

    try {
        const { data, error } = await supabase
            .from('interviews')
            .insert([interview])
            .select()

        if (error) throw error
        return data?.[0]?.id || null
    } catch (error) {
        console.error("Error scheduling interview:", error)
        // Fallback
        if (typeof window !== 'undefined') {
            const userId = interview.userId
            const localInterviews = localStorage.getItem(`flyeng_interviews_${userId}`)
            const interviews = localInterviews ? JSON.parse(localInterviews) : []
            const newInterview = { ...interview, id: Math.random().toString(36).substr(2, 9) }
            interviews.push(newInterview)
            localStorage.setItem(`flyeng_interviews_${userId}`, JSON.stringify(interviews))
            return newInterview.id
        }
        return null
    }
}

// Save completed interview result
export async function saveInterviewResult(result: any): Promise<boolean> {
    if (!supabase) return false;

    try {
        const { error } = await supabase
            .from('interview_results')
            .insert([{
                ...result,
                createdAt: new Date().toISOString()
            }]);

        if (error) throw error;
        return true;
    } catch (error) {
        console.error("Error saving interview result:", error);
        return false;
    }
}