import { createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'
import { getURL } from '@/lib/get-url'

export async function GET(request: NextRequest) {
    const { searchParams, origin: requestOrigin } = new URL(request.url)
    const origin = getURL() !== 'http://localhost:3000' ? getURL() : requestOrigin
    const code = searchParams.get('code')
    const next = searchParams.get('next') ?? '/dashboard'
    const mode = searchParams.get('mode') // 'login' or 'signup' or null
    const errorParam = searchParams.get('error')
    const errorDescription = searchParams.get('error_description')

    if (errorParam) {
        console.error('Auth Callback Upstream Error:', errorParam, errorDescription)
        return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent(errorDescription || errorParam)}`)
    }

    if (code) {
        console.log("Auth Callback: Processing code...", code.substring(0, 5) + "...")
        const response = NextResponse.redirect(`${origin}${next}`)
        
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll() {
                        return request.cookies.getAll()
                    },
                    setAll(cookiesToSet) {
                        cookiesToSet.forEach(({ name, value, options }) => {
                            request.cookies.set(name, value)
                            response.cookies.set(name, value, options)
                        })
                    },
                },
            }
        )
        
        const { error, data } = await supabase.auth.exchangeCodeForSession(code)

        if (!error) {
            const user = data.session?.user
            console.log("Auth Callback: Session Exchange Successful", user?.email, "mode:", mode)

            if (user) {
                try {
                    const meta = user.user_metadata || {}

                    // Check if user already has a profile in the users table
                    const { data: existingUser } = await supabase
                        .from('users')
                        .select('id, goals')
                        .eq('id', user.id)
                        .maybeSingle()

                    // === LOGIN MODE: Only allow existing users ===
                    if (mode === 'login') {
                        if (!existingUser) {
                            // User doesn't exist in our DB → they never signed up
                            // Sign them out and redirect with error
                            console.log("Auth Callback: Login mode - user not registered, rejecting")
                            await supabase.auth.signOut()
                            return NextResponse.redirect(
                                `${origin}/login?error=${encodeURIComponent("No account found with this email. Please sign up first.")}`
                            )
                        }
                        // Existing user logging in → dashboard
                        console.log("Auth Callback: Login mode - existing user, redirecting to dashboard")
                        return response
                    }

                    // === SIGNUP MODE or DEFAULT: Allow new + existing users ===
                    if (existingUser && existingUser.goals && existingUser.goals.length > 0) {
                        // Returning user with completed profile → dashboard
                        console.log("Auth Callback: Returning user, redirecting to dashboard")
                        return response
                    }

                    // Sync basic profile data for new/incomplete users
                    await supabase.from('users').upsert({
                        id: user.id,
                        email: user.email,
                        name: meta.name || meta.full_name || user.email?.split('@')[0] || 'User',
                        photo: meta.avatar_url || meta.picture || '',
                        role: meta.role || 'student',
                        goals: meta.goals || [],
                        updated_at: new Date().toISOString(),
                    }, { onConflict: 'id' })
                    console.log("Auth Callback: User profile synced to DB")

                    // First-time user → redirect directly to onboarding
                    if (!existingUser) {
                        console.log("Auth Callback: New user, redirecting directly to onboarding")
                        const onboardingResponse = NextResponse.redirect(`${origin}/signup?step=profile`)
                        response.cookies.getAll().forEach(cookie => {
                            onboardingResponse.cookies.set(cookie.name, cookie.value)
                        })
                        return onboardingResponse
                    }

                    // Incomplete profile → also onboarding
                    const incompleteResponse = NextResponse.redirect(`${origin}/signup?step=profile`)
                    response.cookies.getAll().forEach(cookie => {
                        incompleteResponse.cookies.set(cookie.name, cookie.value)
                    })
                    return incompleteResponse

                } catch (profileError) {
                    console.warn("Auth Callback: Could not sync user profile:", profileError)
                }
            }

            // General case (e.g. existing user with profile)
            console.log("Auth Callback: Session established, redirecting to verify-success")
            const successResponse = NextResponse.redirect(`${origin}/verify-success?next=${encodeURIComponent(next)}`)
            
            // Copy all cookies (including the new session cookie) to the final response
            response.cookies.getAll().forEach(cookie => {
                successResponse.cookies.set(cookie.name, cookie.value, cookie)
            })
            
            return successResponse
        } else {
            console.error("Auth Callback Error Object:", JSON.stringify(error, null, 2))
            const errorMessage = error.message || error.code || "OAuth exchange failed"
            return NextResponse.redirect(`${origin}/auth/auth-code-error?error=${encodeURIComponent(errorMessage)}`)
        }
    }

    // If no code and no error, invalid request
    return NextResponse.redirect(`${origin}/login?error=Invalid+authentication+request.+Please+try+again.`)
}