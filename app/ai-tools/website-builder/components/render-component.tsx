"use client"

import { useContext } from "react"
import { Settings, Trash2, Zap, MessageSquare, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
// import { BuilderContext } from "../page" // OLD
import { useBuilder } from "../builder-context"
import { BuilderComponent } from "../builder-config"

interface RenderComponentProps {
    component: BuilderComponent
    isSelected: boolean
    readOnly?: boolean
}

export function RenderComponent({ component, isSelected, readOnly = false }: RenderComponentProps) {
    const { state, dispatch } = useBuilder()

    // Handle custom HTML preview component
    if (component.type === 'custom' && component.content.html) {
        // Find style.css content from the files array if available
        const styleFile = state.files.find((f: any) => f.name === 'public')?.children?.find((c: any) => c.name === 'style.css');
        const cssContent = styleFile?.content || '';

        return (
            <div className="w-full h-full min-h-[500px] bg-white text-black overflow-auto">
                <div dangerouslySetInnerHTML={{ __html: component.content.html }} />
                <style>{`
                    /* Basic Reset for Preview */
                    .preview-container * { box-sizing: border-box; }
                    ${cssContent}
                `}</style>
            </div>
        )
    }

    const styles = component.styles || {};

    const containerStyle = {
        backgroundColor: styles.background?.startsWith('bg-') ? undefined : styles.background,
        color: styles.textColor?.startsWith('text-') ? undefined : styles.textColor,
        paddingTop: styles.paddingTop,
        paddingBottom: styles.paddingBottom,
        textAlign: styles.textAlign as any,
        fontFamily: styles.fontFamily,
        borderRadius: styles.borderRadius,
        border: styles.border,
        boxShadow: styles.boxShadow,
        opacity: styles.opacity,
        transform: styles.transform,
        ...(!styles.background?.startsWith('bg-') && { background: styles.background }) // Handle gradients or hex
    }

    const classNameMap = cn(
        "relative group transition-all",
        !readOnly && "hover:ring-1 hover:ring-blue-500/50 cursor-pointer",
        isSelected && !readOnly && "ring-2 ring-blue-500 z-20",
        state.xrayMode && !readOnly && "outline outline-1 outline-dashed outline-cyan-500/50 relative after:content-[attr(data-type)] after:absolute after:top-0 after:left-0 after:bg-cyan-500 after:text-black after:text-[8px] after:px-1 after:uppercase after:font-bold after:z-50",
        component.styles.background?.startsWith('bg-') && component.styles.background,
        component.styles.textColor?.startsWith('text-') && component.styles.textColor
    )

    return (
        <div
            onClick={(e) => {
                if (readOnly) return
                e.stopPropagation();
                dispatch({ type: 'SELECT_COMPONENT', payload: component.id })
            }}
            className={classNameMap}
            style={containerStyle}
            data-type={component.type}
        >
            {/* Actions Overlay */}
            {isSelected && !readOnly && (
                <div className="absolute -top-3 right-2 flex gap-1 z-30">
                    <button className="bg-blue-500 text-white p-1 rounded-md shadow-lg hover:bg-blue-600"><Settings className="w-3 h-3" /></button>
                    <button
                        className="bg-red-500 text-white p-1 rounded-md shadow-lg hover:bg-red-600"
                        onClick={(e) => { e.stopPropagation(); dispatch({ type: 'DELETE_COMPONENT', payload: component.id }) }}
                    >
                        <Trash2 className="w-3 h-3" />
                    </button>
                </div>
            )}

            {/* Component Content */}
            {component.type === 'navbar' && (
                <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
                    <div className="text-xl font-bold tracking-tight">{component.content.logo}</div>
                    <div className="hidden md:flex gap-8">
                        {component.content.links.map((link: string, i: number) => (
                            <a key={i} href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors">{link}</a>
                        ))}
                    </div>
                    <Button size="sm" className="rounded-full">Get Started</Button>
                </div>
            )}

            {component.type === 'hero' && (
                <div className="flex flex-col items-center justify-center gap-6 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">{component.content.title}</h1>
                    <p className="text-xl opacity-80 max-w-2xl leading-relaxed">{component.content.subtitle}</p>
                    <div className="flex gap-4">
                        <Button size="lg" className="rounded-full text-lg px-8 bg-white text-black hover:bg-gray-200">{component.content.buttonText}</Button>
                        <Button size="lg" variant="outline" className="rounded-full text-lg px-8 border-white/20 hover:bg-white/10">Learn More</Button>
                    </div>
                </div>
            )}

            {component.type === 'features' && (
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{component.content.title}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {component.content.items.map((item: any, i: number) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group/card">
                                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover/card:scale-110 transition-transform">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="opacity-60 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {component.type === 'testimonials' && (
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{component.content.title}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {component.content.items.map((item: any, i: number) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <MessageSquare className="w-24 h-24" />
                                </div>
                                <p className="text-lg italic opacity-80 mb-6 relative z-10">"{item.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600" />
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                        <div className="text-sm opacity-60">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {component.type === 'cta' && (
                <div className="max-w-5xl mx-auto px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl" />
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <h2 className="text-4xl md:text-6xl font-bold text-center">{component.content.title}</h2>
                        <p className="text-xl opacity-80 text-center max-w-2xl">{component.content.description}</p>
                        <Button size="lg" className="rounded-full text-lg px-10 h-14 bg-white text-black hover:bg-gray-200 shadow-[0_0_40px_rgba(255,255,255,0.3)]">{component.content.buttonText}</Button>
                    </div>
                </div>
            )}

            {component.type === 'pricing' && (
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{component.content.title}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {component.content.plans.map((plan: any, i: number) => (
                            <div key={i} className={cn("p-8 rounded-3xl border flex flex-col relative", plan.isPopular ? "bg-white/10 border-cyan-500/50" : "bg-white/5 border-white/10")}>
                                {plan.isPopular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>}
                                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg font-normal opacity-60">/mo</span></div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feat: string, j: number) => (
                                        <li key={j} className="flex items-center gap-3 opacity-80">
                                            <CheckCircle2 className="w-5 h-5 text-cyan-400" /> {feat}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant={plan.isPopular ? "default" : "outline"} className={cn("w-full rounded-xl h-12", plan.isPopular ? "bg-cyan-500 hover:bg-cyan-400 text-black" : "border-white/20 hover:bg-white/10")}>Choose {plan.name}</Button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {component.type === 'gallery' && (
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{component.content.title}</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {component.content.images.map((src: string, i: number) => (
                            <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden group/image relative">
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                    <Button variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">View Project</Button>
                                </div>
                                <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {component.type === 'footer' && (
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-sm opacity-60">{component.content.copyright}</div>
                    <div className="flex gap-6">
                        {component.content.links.map((link: string, i: number) => (
                            <a key={i} href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">{link}</a>
                        ))}
                    </div>
                </div>
            )}

            {component.type === 'text' && (
                <div style={{ fontSize: component.styles.fontSize, padding: component.styles.padding }}>
                    {component.content.text}
                </div>
            )}

            {component.type === 'image' && (
                <div style={{ padding: component.styles.padding }}>
                    <img src={component.content.src} alt="Component" className="w-full h-auto shadow-2xl" style={{ borderRadius: component.styles.borderRadius }} />
                </div>
            )}
        </div>
    )
}
