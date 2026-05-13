import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

// Routes that require authentication
const PROTECTED_ROUTES = [
  '/dashboard',
  // '/ai-tools', // Removed to allow public access
  '/profile',
  '/settings',
]

// Routes that authenticated users shouldn't see (redirect to dashboard)
const AUTH_ROUTES = [
  '/login',
  '/signup',
]

// Security headers for all responses
const SECURITY_HEADERS: Record<string, string> = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-XSS-Protection': '1; mode=block',
  'Permissions-Policy': 'camera=(self), microphone=(self), geolocation=()',
}

function applySecurityHeaders(response: NextResponse): NextResponse {
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  return response
}

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Localhost Bypass removed so that testing locally properly validates session with Supabase

  if (!supabaseUrl || !supabaseKey) {
    console.warn("Middleware: Supabase keys are missing. Skipping session refresh.");
    return applySecurityHeaders(response);
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // IMPORTANT: Use getUser() not getSession() for server-side auth verification
  // getSession() reads from cookies which can be tampered with
  // getUser() actually validates the JWT with Supabase servers
  const { data: { user }, error } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Route Protection: redirect unauthenticated users away from protected routes
  const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route));
  if (isProtectedRoute && (!user || error)) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return applySecurityHeaders(NextResponse.redirect(loginUrl));
  }

  // Auth Route Guard: redirect authenticated users away from login/signup
  // Exception: allow signup?step=profile for Google OAuth users completing profile
  const isAuthRoute = AUTH_ROUTES.some(route => pathname === route);
  const isSignupProfile = pathname === '/signup' && request.nextUrl.searchParams.get('step') === 'profile'
  if (isAuthRoute && user && !error && !isSignupProfile) {
    return applySecurityHeaders(NextResponse.redirect(new URL('/dashboard', request.url)));
  }

  return applySecurityHeaders(response);
}
