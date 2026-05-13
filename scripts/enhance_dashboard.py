import os

def enhance_layout():
    target = r"c:\Users\hp\Desktop\Flyeng Career\Final Folder\app\dashboard\layout.tsx"
    with open(target, "r", encoding="utf-8") as f:
        content = f.read()

    old_auth = '''                <div className="relative z-10 text-center space-y-6 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                        <User className="w-10 h-10 text-white/60" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Access Denied</h2>
                    <p className="text-white/60 max-w-xs mx-auto">Please sign in to access your dashboard.</p>
                    <div className="flex gap-3 justify-center">
                        <Link href="/login">
                            <Button size="lg" className="rounded-full px-8">Log In</Button>
                        </Link>
                    </div>
                </div>'''

    new_auth = '''                <div className="relative z-10 text-center space-y-6 p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />
                    <div className="relative z-10">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(6,182,212,0.3)] border border-cyan-500/20 relative z-10 hover:scale-110 transition-transform duration-500">
                            <User className="w-12 h-12 text-cyan-400" />
                        </div>
                        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-tight mb-3">Access Restricted</h2>
                        <p className="text-white/50 max-w-sm mx-auto mb-8 text-sm">Please identify yourself to access the mission control dashboard.</p>
                        <div className="flex justify-center">
                            <Link href="/login">
                                <Button size="lg" className="h-14 rounded-xl px-10 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all active:scale-95 group">
                                    Authenticate <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>'''

    content = content.replace(old_auth, new_auth)
    
    with open(target, "w", encoding="utf-8") as f:
        f.write(content)
        
def enhance_sidebar():
    target = r"c:\Users\hp\Desktop\Flyeng Career\Final Folder\components\dashboard\dashboard-sidebar.tsx"
    with open(target, "r", encoding="utf-8") as f:
        content = f.read()

    old_nav = '''                                    <div className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 group relative overflow-hidden",
                                        isActive
                                            ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/5 text-white font-medium border border-cyan-500/20"
                                            : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5"
                                    )}>
                                        {isActive && <div className="absolute inset-0 bg-cyan-400/5 blur-md" />}
                                        <item.icon className={cn("w-5 h-5 transition-colors relative z-10", isActive ? "text-cyan-400" : "group-hover:text-cyan-200")} />
                                        <span className="relative z-10 flex-1">{item.name}</span>'''

    new_nav = '''                                    <div className={cn(
                                        "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                                        isActive
                                            ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-white font-bold border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                                            : "text-white/50 hover:text-white hover:bg-white/[0.08] hover:shadow-lg border border-transparent hover:border-white/10"
                                    )}>
                                        {isActive && <div className="absolute inset-0 bg-cyan-400/10 blur-xl" />}
                                        <div className={cn(
                                            "relative z-10 p-1.5 rounded-lg transition-colors",
                                            isActive ? "bg-cyan-500/20 text-cyan-300" : "bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-cyan-200"
                                        )}>
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <span className={cn("relative z-10 flex-1 text-sm tracking-wide transition-all", isActive ? "translate-x-1" : "group-hover:translate-x-1")}>{item.name}</span>'''

    content = content.replace(old_nav, new_nav)

    old_pro = '''                            <h4 className="font-bold text-white mb-1">Go Pro</h4>
                            <p className="text-xs text-white/60 mb-3">Unlock unlimited AI credits and premium templates.</p>
                            <Button size="sm" className="w-full bg-white text-black hover:bg-cyan-50 transition-colors font-semibold shadow-lg shadow-white/10">Upgrade Plan</Button>'''
    new_pro = '''                            <h4 className="font-bold text-white mb-1 text-sm">Go Pro</h4>
                            <p className="text-[10px] text-white/60 mb-3 leading-relaxed">Unlock unlimited AI credits and premium templates.</p>
                            <Button size="sm" className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-400 hover:to-cyan-400 transition-colors font-bold shadow-lg shadow-purple-500/20 border-none">Upgrade Plan</Button>'''
    
    content = content.replace(old_pro, new_pro)

    with open(target, "w", encoding="utf-8") as f:
        f.write(content)

def enhance_main():
    target = r"c:\Users\hp\Desktop\Flyeng Career\Final Folder\components\dashboard\dashboard-main.tsx"
    with open(target, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Enhance Hero
    old_hero = '''            {/* ═══════ HERO HEADER ═══════ */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-[#0a0a1a] via-[#0d0d2b] to-[#0a0a1a] border border-white/[0.08] p-5 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
                {/* Background decorations */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" 
                />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />'''

    new_hero = '''            {/* ═══════ HERO HEADER ═══════ */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-[#030014]/60 backdrop-blur-3xl border border-white/[0.08] p-5 sm:p-6 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group hover:border-cyan-500/20 transition-colors duration-500"
            >
                {/* Background decorations */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-[120px] pointer-events-none" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/20 to-pink-600/10 rounded-full blur-[150px] pointer-events-none" 
                />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-30 group-hover:opacity-80 transition-opacity duration-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>'''

    content = content.replace(old_hero, new_hero)

    # 2. Enhance Avatar
    old_avatar = '''                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                            </div>
                        </motion.div>

                        <motion.div'''
    
    new_avatar = '''                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}'''
    content = content.replace(old_avatar, new_avatar)

    # 3. Enhance Hero Buttons
    old_hero_btns = '''                        <Link href="/courses">
                            <button className="h-10 sm:h-11 lg:h-12 px-4 sm:px-5 lg:px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95 duration-200 text-xs sm:text-sm lg:text-base">
                                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" /> Resume Learning
                            </button>
                        </Link>
                        <Link href="/ai-tools">
                            <button className="h-10 sm:h-11 lg:h-12 px-4 sm:px-5 lg:px-6 rounded-xl bg-white/[0.06] text-white/80 border border-white/10 font-bold hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 active:scale-95 duration-200 text-xs sm:text-sm lg:text-base">
                                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> AI Tools
                            </button>
                        </Link>'''
    
    new_hero_btns = '''                        <Link href="/courses">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="h-10 sm:h-11 lg:h-12 px-4 sm:px-5 lg:px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] text-xs sm:text-sm lg:text-base"
                            >
                                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" /> Resume Learning
                            </motion.button>
                        </Link>
                        <Link href="/ai-tools">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="h-10 sm:h-11 lg:h-12 px-4 sm:px-5 lg:px-6 rounded-xl bg-white/[0.04] text-white backdrop-blur-md border border-white/10 font-bold hover:bg-white/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-all flex items-center gap-2 text-xs sm:text-sm lg:text-base"
                            >
                                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> AI Tools
                            </motion.button>
                        </Link>'''
    content = content.replace(old_hero_btns, new_hero_btns)

    # 4. Enhance Stat Cards
    old_stat_card = '''                            "group relative overflow-hidden p-4 lg:p-6 rounded-2xl border backdrop-blur-xl hover:-translate-y-1.5 transition-all duration-500 cursor-default",
                            stat.color === "cyan" && "bg-cyan-500/[0.04] border-cyan-500/20 hover:border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.1)]",
                            stat.color === "emerald" && "bg-emerald-500/[0.04] border-emerald-500/20 hover:border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.1)]",
                            stat.color === "purple" && "bg-purple-500/[0.04] border-purple-500/20 hover:border-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.1)]",
                            stat.color === "orange" && "bg-orange-500/[0.04] border-orange-500/20 hover:border-orange-500/40 shadow-[0_0_50_rgba(249,115,22,0.1)]",
                        )}
                    >
                        <div className={cn(
                            "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                            stat.color === "cyan" && "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
                            stat.color === "emerald" && "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
                            stat.color === "purple" && "bg-purple-500/10 text-purple-400 border border-purple-500/20",
                            stat.color === "orange" && "bg-orange-500/10 text-orange-400 border border-orange-500/20",
                        )}>
                            {stat.icon}
                        </div>
                        <div className={cn(
                            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                            stat.color === "cyan" && "bg-gradient-to-br from-cyan-500/10 to-transparent",
                            stat.color === "emerald" && "bg-gradient-to-br from-emerald-500/10 to-transparent",
                            stat.color === "purple" && "bg-gradient-to-br from-purple-500/10 to-transparent",
                            stat.color === "orange" && "bg-gradient-to-br from-orange-500/10 to-transparent",
                        )} />'''
    new_stat_card = '''                            "group relative overflow-hidden p-4 lg:p-6 rounded-2xl border backdrop-blur-xl hover:-translate-y-2 transition-all duration-500 cursor-default",
                            stat.color === "cyan" && "bg-gradient-to-br from-cyan-500/[0.05] to-transparent border-cyan-500/20 hover:border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.2)]",
                            stat.color === "emerald" && "bg-gradient-to-br from-emerald-500/[0.05] to-transparent border-emerald-500/20 hover:border-emerald-400/50 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.2)]",
                            stat.color === "purple" && "bg-gradient-to-br from-purple-500/[0.05] to-transparent border-purple-500/20 hover:border-purple-400/50 shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.2)]",
                            stat.color === "orange" && "bg-gradient-to-br from-orange-500/[0.05] to-transparent border-orange-500/20 hover:border-orange-400/50 shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.2)]",
                        )}
                    >
                        <div className={cn(
                            "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                            stat.color === "cyan" && "bg-cyan-500/15 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]",
                            stat.color === "emerald" && "bg-emerald-500/15 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]",
                            stat.color === "purple" && "bg-purple-500/15 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]",
                            stat.color === "orange" && "bg-orange-500/15 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)]",
                        )}>
                            {stat.icon}
                        </div>
                        <div className={cn(
                            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl",
                            stat.color === "cyan" && "bg-cyan-500/20",
                            stat.color === "emerald" && "bg-emerald-500/20",
                            stat.color === "purple" && "bg-purple-500/20",
                            stat.color === "orange" && "bg-orange-500/20",
                        )} />'''
    content = content.replace(old_stat_card, new_stat_card)

    with open(target, "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    enhance_layout()
    enhance_sidebar()
    enhance_main()
    print("Dashboard overhaul complete!")
