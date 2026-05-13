export type LoaderType = 'intro' | 'route';

export function getLoaderText(pathname: string): string {
    if (pathname === '/' || pathname === '') return "FLYENG CAREER";

    if (pathname.startsWith('/ai-tools')) {
        const tool = pathname.split('/').pop();
        if (tool === 'ai-tools') return "Loading AI Tools Hub...";

        // Clean up tool name replacing hyphens with spaces and capitalizing
        const formattedTool = tool
            ?.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        return `Loading ${formattedTool}...`;
    }

    if (pathname.startsWith('/dashboard')) return "Preparing Your Dashboard...";
    if (pathname.startsWith('/login')) return "Authenticating...";
    if (pathname.startsWith('/signup')) return "Creating Account...";
    if (pathname.startsWith('/admin')) return "Accessing Admin Portal...";

    // Default fallback
    const segment = pathname.split('/').filter(Boolean)[0];
    if (segment) {
        return `Loading ${segment.charAt(0).toUpperCase() + segment.slice(1)}...`;
    }

    return "Loading Experience...";
}
