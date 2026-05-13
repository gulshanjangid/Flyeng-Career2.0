import { useEffect, useState, useCallback } from 'react';
import { useAuth } from '@/context/auth-context';
import { supabase } from '@/lib/supabase';

export interface DashboardStats {
    coursesInProgress: number;
    coursesCompleted: number;
    certificatesEarned: number;
    totalLearningHours: number;
    currentStreak: number;
    lastActivity: Date | null;
    lastActiveCourse?: { id: string; progress: number; updatedAt: string };
    nextMilestone?: { label: string; progress: number; total: number; description: string };
}

function calculateNextMilestone(completedCount: number) {
    if (completedCount < 1) return { label: "First Step", progress: 0, total: 1, description: "Complete your first course" };
    if (completedCount < 3) return { label: "Fast Learner", progress: completedCount, total: 3, description: "Complete 3 courses consistently" };
    if (completedCount < 5) return { label: "Code Ninja", progress: completedCount, total: 5, description: "Master 5 different modules" };
    return { label: "Master", progress: completedCount, total: 10, description: "You are unstoppable! Aim for 10." };
}

export function useDashboardStats() {
    const { user } = useAuth();
    const [stats, setStats] = useState<DashboardStats>({
        coursesInProgress: 0,
        coursesCompleted: 0,
        certificatesEarned: 0,
        totalLearningHours: 0,
        currentStreak: 0,
        lastActivity: null,
    });
    const [loading, setLoading] = useState(true);

    const fetchStats = useCallback(async () => {
        // Get local storage fallback stats
        let localStreak = 0;
        try {
            const localStats = JSON.parse(localStorage.getItem('flyeng_stats') || '{}');
            localStreak = localStats.currentStreak || 0;
            
            // Check if streak should be reset (if lastQuestDate is older than yesterday)
            const today = new Date();
            const lastQuest = localStats.lastQuestDate ? new Date(localStats.lastQuestDate) : null;
            if (lastQuest) {
                const diffTime = Math.abs(today.getTime() - lastQuest.getTime());
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays > 1 && today.toDateString() !== lastQuest.toDateString()) {
                    // Reset streak if more than 1 day has passed
                    localStreak = 0;
                }
            }
        } catch (e) {}

        // Fallback for missing Supabase config or initial demo user
        if (!supabase || user?.email === 'demo@flyeng.com' || !user?.id) {
            setStats({
                coursesInProgress: 0,
                coursesCompleted: 0,
                certificatesEarned: 0,
                totalLearningHours: 0,
                currentStreak: localStreak,
                lastActivity: new Date(),
                nextMilestone: calculateNextMilestone(0),
            });
            setLoading(false);
            return;
        }

        try {
            const { data: progress, error: progressError } = await supabase
                .from('user_progress')
                .select('course_id, progress_percentage, time_spent_seconds, updated_at')
                .eq('user_id', user.id);

            const { data: certs, error: certsError } = await supabase
                .from('certificates')
                .select('id')
                .eq('user_id', user.id);

            const { data: userData } = await supabase
                .from('users')
                .select('streak')
                .eq('id', user.id)
                .single();

            // If tables don't exist, gracefully fallback to starter data
            if (progressError || certsError) {
                console.warn("Dashboard stats: Table query error, using defaults", progressError?.message || certsError?.message);
                setStats({
                    coursesInProgress: 0,
                    coursesCompleted: 0,
                    certificatesEarned: 0,
                    totalLearningHours: 0,
                    currentStreak: userData?.streak || localStreak,
                    lastActivity: new Date(),
                    nextMilestone: calculateNextMilestone(0),
                });
                setLoading(false);
                return;
            }

            const courses = new Set(progress?.map((p) => p.course_id) || []);
            const completed = progress?.filter((p) => p.progress_percentage === 100) || [];
            const totalSeconds = progress?.reduce((acc, curr) => acc + (curr.time_spent_seconds || 0), 0) || 0;

            // Detailed streak logic would go here
            const hasActivityToday = progress?.some(p => {
                const updated = new Date(p.updated_at || '');
                return updated.toDateString() === new Date().toDateString();
            });

            // Find last active course
            const lastActive = progress?.length ? [...progress].sort((a, b) =>
                new Date(b.updated_at || 0).getTime() - new Date(a.updated_at || 0).getTime()
            )[0] : undefined;

            setStats({
                coursesInProgress: courses.size - completed.length,
                coursesCompleted: completed.length,
                certificatesEarned: certs?.length || 0,
                totalLearningHours: Math.round(totalSeconds / 3600 * 10) / 10,
                currentStreak: userData?.streak ? Math.max(userData.streak, localStreak) : localStreak,
                lastActivity: new Date(),
                lastActiveCourse: lastActive ? {
                    id: lastActive.course_id,
                    progress: lastActive.progress_percentage,
                    updatedAt: lastActive.updated_at
                } : undefined,
                nextMilestone: calculateNextMilestone(completed.length)
            });
        } catch (err) {
            console.error("Error fetching dashboard stats:", err);
        } finally {
            setLoading(false);
        }

    }, [user?.id, user?.email]);

    // Initial fetch
    useEffect(() => {
        fetchStats();
    }, [fetchStats]);

    // Subscribe to realtime updates
    useEffect(() => {
        if (!user?.id || !supabase) return;

        const subscription = supabase
            .channel(`stats-${user.id}`)
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'user_progress',
                    filter: `user_id=eq.${user.id}`,
                },
                async () => {
                    await fetchStats();
                }
            )
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'certificates',
                    filter: `user_id=eq.${user.id}`,
                },
                async () => {
                    // Add a small delay for propagation
                    setTimeout(() => fetchStats(), 1000);
                }
            )
            .subscribe();

        return () => {
            if (supabase) supabase.removeChannel(subscription);
        };
    }, [user?.id, fetchStats]);

    return { stats, loading, refetch: fetchStats };
}
