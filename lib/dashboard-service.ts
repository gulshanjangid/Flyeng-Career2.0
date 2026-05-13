import { getUserApplications } from "./application-service"
import { getUserInterviews } from "./interview-service"
import { getUserByEmail } from "./user-service"

export interface DashboardStats {
    applicationsCount: number
    interviewsCount: number
    profileScore: number
    savedJobsCount: number
    recentActivity: any[]
    chartData: any[] // Added for chart
}

// Helper to get days of week
function getLast7Days() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const today = new Date()
    const last7Days = []

    for (let i = 6; i >= 0; i--) {
        const d = new Date(today)
        d.setDate(today.getDate() - i)
        last7Days.push(days[d.getDay()])
    }
    return last7Days
}

export async function getDashboardStats(userId: string, email: string): Promise<DashboardStats> {
    const [apps, interviews, user] = await Promise.all([
        getUserApplications(userId),
        getUserInterviews(userId),
        getUserByEmail(email)
    ])

    // Calculate derived stats
    const applicationsCount = apps.filter(a => a.status !== 'Saved').length
    const savedJobsCount = apps.filter(a => a.status === 'Saved').length
    const interviewsCount = interviews.filter(i => i.status !== 'Cancelled').length

    // Dynamic Profile Score
    let profileScore = 0
    if (user?.name) profileScore += 20
    if (user?.goals) profileScore += 20 // Fixed property name
    if (apps.length > 0) profileScore += 30
    if (interviews.length > 0) profileScore += 30

    // Cap at 100, default to 60 if new user to encourage action but not discourage
    // NOTE: User asked for "60%" for first timers effectively, or at least a realistic flow.
    // If it's literally a fresh user, 0 is demotivating. Let's give them 20% for just signing up.
    if (profileScore === 0) profileScore = 20

    // User specifically mentioned getting "60%" right now. 
    // If they have NO data, maybe we calculate differently or show a "Setup" mode.
    // For now, let's keep the logic real. 

    // Calculate Weekly Activity for Chart
    const dayCounts: Record<string, number> = {}
    const days = getLast7Days()

    // Initialize
    days.forEach(d => dayCounts[d] = 0)

    // Count applications
    apps.forEach(app => {
        const date = new Date(app.appliedAt || app.applied_at)
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
        if (dayCounts[dayName] !== undefined) dayCounts[dayName]++
    })

    // Count interviews
    interviews.forEach(int => {
        const date = new Date(int.scheduledAt)
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
        if (dayCounts[dayName] !== undefined) dayCounts[dayName]++
    })

    const chartData = days.map(day => ({
        name: day,
        total: dayCounts[day]
    }))

    // Combine recent activity
    const recentApps = apps.slice(0, 3).map(a => ({
        id: a.id,
        type: 'application',
        title: `Applied to ${a.title}`,
        company: a.company,
        time: new Date(a.appliedAt || a.applied_at).toLocaleDateString(),
        status: a.status,
        statusColor: a.status === 'Applied' ? 'text-blue-400' : 'text-green-400'
    }))

    const recentInterviews = interviews.slice(0, 3).map(i => ({
        id: i.id,
        type: 'interview',
        title: `Interview: ${i.title}`,
        company: 'Flyeng AI Coach',
        time: new Date(i.scheduledAt).toLocaleDateString(),
        status: i.status,
        statusColor: i.status === 'Completed' ? 'text-green-400' : 'text-purple-400'
    }))

    const recentActivity = [...recentApps, ...recentInterviews]
        .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
        .slice(0, 5)

    return {
        applicationsCount,
        interviewsCount,
        profileScore,
        savedJobsCount,
        recentActivity,
        chartData // Add this to interface return
    }
}
