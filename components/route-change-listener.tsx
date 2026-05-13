"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"
import { useLoader } from "./loader-context"
import { getLoaderText } from "@/lib/loader-utils"

export function RouteChangeListener() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { setIsLoading, setLoaderText, setType, type } = useLoader()
    const prevPathname = useRef(pathname)

    useEffect(() => {
        // TIME-BASED GUARD:
        // Identify if this is a Fresh Load / Refresh by checking browser uptime.
        // If the page has been running for less than 2.5 seconds, it is definitely a refresh.
        // We BLOCK the route listener to let the Main Intro play out.
        if (typeof window !== 'undefined' && performance.now() < 2500) {
            return
        }

        // PATH CHANGE GUARD:
        // Only trigger if the pathname HAS ACTUALLY CHANGED.
        // This prevents the loader from firing if the component re-renders for other reasons
        // (like context updates) but the route is the same.
        if (pathname === prevPathname.current) {
            return;
        }

        // LEARNING MODE GUARD:
        // If navigating between lessons (e.g. /courses/dsa/intro -> /courses/dsa/stack),
        // we SKIP the loader to ensure a seamless "app-like" feel.
        const isCoursePage = (path: string) => path.includes('/courses/');
        if (isCoursePage(prevPathname.current) && isCoursePage(pathname)) {
            // Just update ref, don't trigger loader
            prevPathname.current = pathname;
            return;
        }

        // Update ref for next time
        prevPathname.current = pathname;

        // For subsequent route changes ONLY:
        const text = getLoaderText(pathname)
        setLoaderText(text)
        setType('route')
        setIsLoading(true)

        // Safety timeout
        const timeout = setTimeout(() => { }, 5000)
        return () => clearTimeout(timeout)

    }, [pathname, searchParams, setIsLoading, setLoaderText, setType])

    return null
}
