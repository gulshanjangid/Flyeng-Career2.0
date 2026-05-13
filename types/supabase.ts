export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            users: {
                Row: {
                    id: string
                    firebase_uid: string
                    email: string
                    display_name: string | null
                    avatar_url: string | null
                    bio: string | null
                    plan_type: 'free' | 'pro' | 'premium'
                    subscription_status: string | null
                    total_courses: number
                    courses_completed: number
                    certificates_earned: number
                    total_learning_hours: number
                    current_streak: number
                    longest_streak: number
                    github_url: string | null
                    linkedin_url: string | null
                    portfolio_url: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id: string
                    firebase_uid: string
                    email: string
                    display_name?: string | null
                    avatar_url?: string | null
                    bio?: string | null
                    plan_type?: 'free' | 'pro' | 'premium'
                    subscription_status?: string | null
                    total_courses?: number
                    courses_completed?: number
                    certificates_earned?: number
                    total_learning_hours?: number
                    current_streak?: number
                    longest_streak?: number
                    github_url?: string | null
                    linkedin_url?: string | null
                    portfolio_url?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    firebase_uid?: string
                    email?: string
                    display_name?: string | null
                    avatar_url?: string | null
                    bio?: string | null
                    plan_type?: 'free' | 'pro' | 'premium'
                    subscription_status?: string | null
                    total_courses?: number
                    courses_completed?: number
                    certificates_earned?: number
                    total_learning_hours?: number
                    current_streak?: number
                    longest_streak?: number
                    github_url?: string | null
                    linkedin_url?: string | null
                    portfolio_url?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            courses: {
                Row: {
                    id: string
                    name: string
                    slug: string
                    description: string | null
                    detailed_description: string | null
                    thumbnail_url: string | null
                    hero_image_url: string | null
                    duration_hours: number | null
                    total_modules: number | null
                    total_lessons: number | null
                    total_projects: number | null
                    difficulty_level: 'beginner' | 'intermediate' | 'advanced' | null
                    icon: string | null
                    cert_primary_color: string | null
                    cert_secondary_color: string | null
                    cert_accent_color: string | null
                    sample_student_name: string | null
                    tags: Json | null
                    learning_outcomes: Json | null
                    prerequisites: string[] | null
                    category: string | null
                    is_free: boolean
                    original_price: number | null
                    total_students: number
                    average_rating: number
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    // ... (Simplified for brevity, usually matches Row with optionals)
                    id: string
                    name: string
                    slug: string
                    // ...
                }
                Update: {
                    // ...
                }
            }
            certificates: {
                Row: {
                    id: string
                    user_id: string
                    course_id: string
                    course_name: string
                    student_name: string
                    score: number
                    total_questions: number
                    percentage: number | null // Generated
                    issued_date: string
                    certificate_number: string
                    signature: string
                    qr_code_url: string | null
                    pdf_url: string | null
                    is_revoked: boolean
                    created_at: string
                }
                Insert: {
                    user_id: string
                    course_id: string
                    course_name: string
                    student_name: string
                    score: number
                    certificate_number: string
                    signature: string
                    // ...
                }
            }
            user_progress: {
                Row: {
                    id: string
                    user_id: string
                    course_id: string
                    lesson_id: string | null
                    section_id: string | null
                    completed_at: string | null
                    progress_percentage: number
                    time_spent_seconds: number
                    last_accessed_at: string
                }
                Insert: {
                    user_id: string
                    course_id: string
                    // ...
                }
                Update: {
                    // ...
                }
            }
        }
    }
}
