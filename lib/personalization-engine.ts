/**
 * Personalization Engine
 * Generates contextual tips, suggestions and insights based on user data.
 */

import { ApplicationStats } from './application-service'

export interface PersonalizedTip {
    id: string
    tip: string
    icon: string      // lucide icon name
    color: string      // tailwind color name
    priority: number   // higher = more important
    category: 'goal' | 'activity' | 'profile' | 'time' | 'streak' | 'motivation'
}

// ─── Goal-Based Tips ───
function getGoalTips(goals: string[]): PersonalizedTip[] {
    const tips: PersonalizedTip[] = []
    const g = goals.join(' ').toLowerCase()

    if (g.includes('react') || g.includes('frontend'))
        tips.push({ id: 'g1', tip: 'Build 3 React projects this month — recruiters love portfolio variety', icon: 'Rocket', color: 'cyan', priority: 8, category: 'goal' })
    if (g.includes('faang') || g.includes('google') || g.includes('amazon') || g.includes('meta'))
        tips.push({ id: 'g2', tip: 'Practice 2 LeetCode problems daily — FAANG interviews are 60% DSA', icon: 'Target', color: 'purple', priority: 9, category: 'goal' })
    if (g.includes('system design'))
        tips.push({ id: 'g3', tip: 'Study one system design case study per week (start with URL Shortener)', icon: 'Lightbulb', color: 'amber', priority: 8, category: 'goal' })
    if (g.includes('full stack') || g.includes('backend'))
        tips.push({ id: 'g4', tip: 'Build a REST API with authentication — it\'s the #1 backend interview topic', icon: 'Briefcase', color: 'emerald', priority: 7, category: 'goal' })
    if (g.includes('dsa') || g.includes('algorithm') || g.includes('data structure'))
        tips.push({ id: 'g5', tip: 'Focus on Trees & Graphs this week — they appear in 40% of tech interviews', icon: 'TrendingUp', color: 'blue', priority: 8, category: 'goal' })
    if (g.includes('placement') || g.includes('job') || g.includes('career'))
        tips.push({ id: 'g6', tip: 'Apply to 5 positions this week — consistency beats perfection in job hunting', icon: 'Search', color: 'cyan', priority: 7, category: 'goal' })
    if (g.includes('python') || g.includes('ml') || g.includes('machine learning') || g.includes('ai'))
        tips.push({ id: 'g7', tip: 'Complete a Kaggle notebook this week to strengthen your ML portfolio', icon: 'Sparkles', color: 'purple', priority: 7, category: 'goal' })
    if (g.includes('web') || g.includes('css') || g.includes('html'))
        tips.push({ id: 'g8', tip: 'Clone a trending website UI — it\'s the fastest way to master CSS', icon: 'Code', color: 'blue', priority: 6, category: 'goal' })
    if (g.includes('startup') || g.includes('founder') || g.includes('entrepreneur'))
        tips.push({ id: 'g9', tip: 'Ship an MVP this month — execution speed is a startup superpower', icon: 'Rocket', color: 'amber', priority: 8, category: 'goal' })
    if (g.includes('remote') || g.includes('freelance'))
        tips.push({ id: 'g10', tip: 'Build a strong GitHub profile — 73% of remote recruiters check it first', icon: 'Globe', color: 'emerald', priority: 7, category: 'goal' })

    return tips
}

// ─── Activity-Based Tips ───
function getActivityTips(appStats: ApplicationStats | null, interviewCount: number): PersonalizedTip[] {
    const tips: PersonalizedTip[] = []

    if (!appStats || appStats.total === 0) {
        tips.push({ id: 'a1', tip: 'Start tracking your job applications — organized applicants are 3x more likely to land interviews', icon: 'Briefcase', color: 'cyan', priority: 9, category: 'activity' })
    } else {
        if (appStats.interviewing > 0)
            tips.push({ id: 'a2', tip: `You have ${appStats.interviewing} active interview${appStats.interviewing > 1 ? 's' : ''} — prepare with a mock interview!`, icon: 'Video', color: 'purple', priority: 9, category: 'activity' })
        if (appStats.total > 5 && appStats.interviewRate < 20)
            tips.push({ id: 'a3', tip: 'Your interview rate is below 20% — try tailoring your resume for each application', icon: 'FileText', color: 'amber', priority: 8, category: 'activity' })
        if (appStats.offers > 0)
            tips.push({ id: 'a4', tip: `🎉 You have ${appStats.offers} offer${appStats.offers > 1 ? 's' : ''}! Don't forget to negotiate — most offers have 10-15% flexibility`, icon: 'Trophy', color: 'emerald', priority: 10, category: 'activity' })
        if (appStats.rejected > 3)
            tips.push({ id: 'a5', tip: 'Rejections are just redirections — review feedback and iterate on your approach', icon: 'RefreshCw', color: 'blue', priority: 6, category: 'activity' })
    }

    if (interviewCount === 0)
        tips.push({ id: 'a6', tip: 'Try a mock interview to assess your readiness — practice makes confident!', icon: 'Video', color: 'purple', priority: 7, category: 'activity' })

    return tips
}

// ─── Profile Completion Tips ───
function getProfileTips(profileScore: number, missingFields: string[]): PersonalizedTip[] {
    const tips: PersonalizedTip[] = []

    if (profileScore < 50) {
        tips.push({ id: 'p1', tip: 'Complete your profile to unlock personalized job recommendations', icon: 'UserCheck', color: 'amber', priority: 8, category: 'profile' })
    }

    if (missingFields.includes('bio'))
        tips.push({ id: 'p2', tip: 'Add a bio — profiles with bios get 2x more personalized tips', icon: 'PenLine', color: 'cyan', priority: 6, category: 'profile' })
    if (missingFields.includes('photo'))
        tips.push({ id: 'p3', tip: 'Upload a profile photo to make your dashboard feel more personal', icon: 'Camera', color: 'purple', priority: 5, category: 'profile' })
    if (missingFields.includes('goals'))
        tips.push({ id: 'p4', tip: 'Set your goals to get tailored career tips and recommendations', icon: 'Target', color: 'emerald', priority: 7, category: 'profile' })

    return tips
}

// ─── Time-Based Tips ───
function getTimeTips(): PersonalizedTip[] {
    const hour = new Date().getHours()
    const tips: PersonalizedTip[] = []

    if (hour >= 5 && hour < 9)
        tips.push({ id: 't1', tip: 'Early bird advantage! Morning study sessions boost retention by 25%', icon: 'Sun', color: 'amber', priority: 4, category: 'time' })
    else if (hour >= 9 && hour < 12)
        tips.push({ id: 't2', tip: 'Peak focus hours — tackle your hardest problems now', icon: 'Zap', color: 'cyan', priority: 4, category: 'time' })
    else if (hour >= 12 && hour < 14)
        tips.push({ id: 't3', tip: 'Lunch break? Quick-review flashcards for spaced repetition', icon: 'Brain', color: 'purple', priority: 3, category: 'time' })
    else if (hour >= 14 && hour < 18)
        tips.push({ id: 't4', tip: 'Afternoon productivity dip? Stand up, stretch, then code a small project', icon: 'Coffee', color: 'amber', priority: 3, category: 'time' })
    else if (hour >= 18 && hour < 22)
        tips.push({ id: 't5', tip: 'Evening study session — great time for project work and portfolio building', icon: 'Moon', color: 'blue', priority: 3, category: 'time' })
    else
        tips.push({ id: 't6', tip: 'Night owl mode! Don\'t forget sleep — it\'s when your brain consolidates learning', icon: 'Moon', color: 'purple', priority: 3, category: 'time' })

    return tips
}

// ─── Streak-Based Tips ───
function getStreakTips(streak: number): PersonalizedTip[] {
    const tips: PersonalizedTip[] = []

    if (streak >= 30)
        tips.push({ id: 's1', tip: `🔥 ${streak}-day streak! You're in the top 5% of consistent learners`, icon: 'Flame', color: 'orange', priority: 5, category: 'streak' })
    else if (streak >= 7)
        tips.push({ id: 's2', tip: `${streak}-day streak! Keep it going — habits form after 21 days`, icon: 'Flame', color: 'orange', priority: 5, category: 'streak' })
    else if (streak >= 3)
        tips.push({ id: 's3', tip: `${streak}-day streak! You're building momentum — don't break the chain`, icon: 'TrendingUp', color: 'emerald', priority: 4, category: 'streak' })
    else if (streak === 0)
        tips.push({ id: 's4', tip: 'Start a new learning streak today — even 15 minutes counts!', icon: 'Flame', color: 'orange', priority: 6, category: 'streak' })

    return tips
}

// ─── Motivational Tips ───
function getMotivationalTips(): PersonalizedTip[] {
    const quotes = [
        { tip: '"The best time to plant a tree was 20 years ago. The second best time is now."', color: 'emerald' },
        { tip: '"Every expert was once a beginner."', color: 'cyan' },
        { tip: '"Code is like humor. When you have to explain it, it\'s bad."', color: 'purple' },
        { tip: '"The only way to do great work is to love what you do." — Steve Jobs', color: 'amber' },
        { tip: '"First, solve the problem. Then, write the code." — John Johnson', color: 'blue' },
    ]
    const idx = new Date().getDate() % quotes.length  // rotate daily
    return [{
        id: 'm1',
        tip: quotes[idx].tip,
        icon: 'Quote',
        color: quotes[idx].color,
        priority: 2,
        category: 'motivation'
    }]
}


/**
 * Main function: get all personalized tips sorted by priority
 */
export function getPersonalizedTips(params: {
    goals: string[]
    appStats: ApplicationStats | null
    interviewCount: number
    profileScore: number
    missingFields: string[]
    streak: number
    maxTips?: number
}): PersonalizedTip[] {
    const { goals, appStats, interviewCount, profileScore, missingFields, streak, maxTips = 5 } = params

    const allTips: PersonalizedTip[] = [
        ...getGoalTips(goals),
        ...getActivityTips(appStats, interviewCount),
        ...getProfileTips(profileScore, missingFields),
        ...getTimeTips(),
        ...getStreakTips(streak),
        ...getMotivationalTips(),
    ]

    // Sort by priority (highest first) and take top N
    return allTips
        .sort((a, b) => b.priority - a.priority)
        .slice(0, maxTips)
}
