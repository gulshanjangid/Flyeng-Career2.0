import { z } from "zod"

// ─── Common Disposable Email Domains ───
const DISPOSABLE_DOMAINS = [
    'tempmail.com', 'throwaway.email', 'guerrillamail.com', 'mailinator.com',
    'yopmail.com', 'trashmail.com', '10minutemail.com', 'sharklasers.com',
    'guerrillamailblock.com', 'grr.la', 'dispostable.com', 'maildrop.cc',
    'fakeinbox.com', 'getairmail.com', 'temp-mail.org'
]

// ─── Password Strength Calculator ───
export function getPasswordStrength(password: string): {
    score: number  // 0-4
    label: 'Too Weak' | 'Weak' | 'Fair' | 'Strong' | 'Very Strong'
    color: string
    checks: { label: string; passed: boolean }[]
} {
    const checks = [
        { label: 'At least 8 characters', passed: password.length >= 8 },
        { label: 'One uppercase letter (A-Z)', passed: /[A-Z]/.test(password) },
        { label: 'One lowercase letter (a-z)', passed: /[a-z]/.test(password) },
        { label: 'One number (0-9)', passed: /[0-9]/.test(password) },
        { label: 'One special character (!@#$%^&*)', passed: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password) },
    ]
    const score = checks.filter(c => c.passed).length

    const map: Record<number, { label: any; color: string }> = {
        0: { label: 'Too Weak', color: 'red' },
        1: { label: 'Too Weak', color: 'red' },
        2: { label: 'Weak', color: 'orange' },
        3: { label: 'Fair', color: 'amber' },
        4: { label: 'Strong', color: 'emerald' },
        5: { label: 'Very Strong', color: 'green' },
    }
    const info = map[score] || map[0]
    return { score: Math.min(score, 4), label: info.label, color: info.color, checks }
}

// ─── Zod Schemas ───

export const LoginSchema = z.object({
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
    password: z.string().min(1, "Password is required"),
})

export const SignupSchemaBase = z.object({
    email: z.string()
        .min(1, "Email is required")
        .email("Please enter a valid email address")
        .refine(val => {
            const domain = val.split('@')[1]?.toLowerCase()
            return !domain || !DISPOSABLE_DOMAINS.includes(domain)
        }, "Please use a permanent email address (disposable emails are not allowed)"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/, "Password must contain at least one special character"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    name: z.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be under 50 characters")
        .regex(/^[a-zA-Z\s'.'-]+$/, "Name can only contain letters, spaces, and common punctuation"),
    role: z.string().optional(),
    age: z.string().optional().refine(val => {
        if (!val) return true
        const n = parseInt(val)
        return !isNaN(n) && n >= 13 && n <= 100
    }, "Age must be between 13 and 100"),
    gender: z.string().optional(),
    phone: z.string().optional().refine(val => {
        if (!val || val.trim() === '') return true
        return /^[\+]?[\d\s\-()]{7,15}$/.test(val.trim())
    }, "Please enter a valid phone number"),
    college: z.string().optional(),
    goals: z.array(z.string()).optional(),
})

export const SignupSchema = SignupSchemaBase.refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

// ─── Legacy Validators ───

export function validateEmail(email: string): string | null {
    const result = LoginSchema.shape.email.safeParse(email)
    if (!result.success) return result.error.errors[0].message
    return null
}

export function validatePassword(password: string): string | null {
    // Use the full signup password schema
    const schema = z.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Must contain an uppercase letter")
        .regex(/[a-z]/, "Must contain a lowercase letter")
        .regex(/[0-9]/, "Must contain a number")
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/, "Must contain a special character")

    const result = schema.safeParse(password)
    if (!result.success) return result.error.errors[0].message
    return null
}

// ─── Auth Error Mapper ───

export function mapAuthError(error: any): string {
    const code = error?.code || ""
    const message = error?.message || ""

    // Custom sentinel for OAuth-only users
    if (code === 'OAUTH_ONLY_USER') return "OAUTH_ONLY_USER"

    // ISP blocking / Network fetch failure workaround
    if (message === "Failed to fetch" || message.includes("Failed to fetch") || code === "auth/network-request-failed") {
        return "Network Error: Your ISP (e.g. Jio/Airtel) may be blocking the connection. Please try using a VPN (like Cloudflare WARP) or changing your device's DNS to 1.1.1.1."
    }

    // Supabase-specific messages
    if (message.includes("User already registered")) return "Great news! You're already with us. Try logging in."
    if (message.includes("Invalid login credentials")) return "Oops! Those credentials don't match. Check your email and password."
    if (message.includes("Email not confirmed")) return "Please check your inbox and confirm your email before logging in."
    if (message.includes("Signups not allowed")) return "New signups are currently paused. Please try again later."
    if (message.includes("Password should contain")) return "Password too simple. Add uppercase, number, and special character."
    if (message.includes("disposable")) return "Please use a permanent email address."

    switch (code) {
        case 'auth/invalid-credential':
        case 'auth/wrong-password':
            return "Oops! That password didn't match. Want to try again?"
        case 'auth/user-not-found':
            return "We couldn't find an explorer with that email. Ready to join us?"
        case 'auth/email-already-in-use':
        case '23505':
            return "Great news! You're already with us. Try logging in instead."
        case 'auth/weak-password':
        case 'weak_password':
            return "That password needs to be stronger. Include uppercase, number, and special character!"
        case 'auth/invalid-email':
            return "That email address doesn't look right. Double-check it?"
        case 'auth/too-many-requests':
        case '429':
        case 'over_email_send_rate_limit':
            return "Whoa, too many attempts! Wait a minute before trying again."
        case 'auth/network-request-failed':
            return "The internet gremlins are at it again. Check your connection."
        case 'auth/popup-closed-by-user':
            return "The sign-in popup was closed. Try again when ready."
        case 'validation_failed':
            return message || "Please check your inputs and try again."
        default:
            if (message) return message
            return "An unexpected hiccup occurred. Let's try that again."
    }
}