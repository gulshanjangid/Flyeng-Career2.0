'use client'

import React from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <div className="relative w-full h-full" style={{ contentVisibility: 'auto' }}>
            <div
                className={cn(
                    "relative flex flex-col min-h-screen items-center justify-center bg-black text-slate-950 transition-bg",
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className={cn(
                            `
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#60a5fa_10%,#e879f9_15%,#60a5fa_20%,#a855f7_25%,#60a5fa_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[6px] invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-overlay
            pointer-events-none
            absolute -inset-[10px] opacity-[0.05]`,

                            showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                        )}
                        style={{ willChange: 'background-position', transform: 'translate3d(0,0,0)' }}
                    ></div>
                </div>
                {children}
            </div>
        </div>
    );
};
