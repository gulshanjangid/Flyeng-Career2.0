/**
 * Gets the correct base URL for the site.
 * Works on both localhost (dev) and Vercel (production).
 * 
 * Priority:
 * 1. NEXT_PUBLIC_SITE_URL (manually set in Vercel env vars)
 * 2. NEXT_PUBLIC_VERCEL_URL (auto-set by Vercel, but no protocol)
 * 3. window.location.origin (client-side fallback)
 * 4. http://localhost:3000 (dev fallback)
 */
export function getURL() {
    // Check for explicitly set site URL first
    let url =
        process?.env?.NEXT_PUBLIC_SITE_URL ??
        process?.env?.NEXT_PUBLIC_VERCEL_URL ??
        'http://localhost:3000'

    // Add protocol if missing (VERCEL_URL doesn't include it)
    url = url.startsWith('http') ? url : `https://${url}`

    // Remove trailing slash
    url = url.endsWith('/') ? url.slice(0, -1) : url

    return url
}

/**
 * Client-side version that prefers window.location.origin
 * for the most accurate URL (handles preview deployments, custom domains, etc.)
 */
export function getClientURL() {
    if (typeof window !== 'undefined') {
        return window.location.origin
    }
    return getURL()
}
