import os
import re

def enhance_applications():
    target = r"c:\Users\hp\Desktop\Flyeng Career\Final Folder\app\dashboard\applications\page.tsx"
    
    with open(target, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Enhance the Add Application form inputs to use the new glowing aesthetic
    # Replace `<div className="space-y-1.5">` with `<div className="space-y-1.5 group/input">` inside the Modal form
    # Note: We only want to target the ones in the form area.
    
    # We can do this safely by first targeting labels
    content = re.sub(
        r'<label className="(text-xs font-bold text-white/40 uppercase tracking-wider)">(.*?)</label>',
        r'<label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">\2</label>',
        content
    )

    # Now we target the space-y-1.5 containers and change to group/input
    content = content.replace('<div className="space-y-1.5">', '<div className="space-y-1.5 group/input">')

    # Fix the wrapper logic for inputs without icons
    content = re.sub(
        r'(<input\s+value=\{form\.title\}.*?className=")(w-full h-10 bg-white/5 border border-white/10 rounded-xl px-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-cyan-500/40)(".*?\/>)',
        r'<div className="relative"><div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />\n\1relative w-full bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm\3</div>',
        content,
        flags=re.DOTALL
    )

    content = re.sub(
        r'(<input\s+value=\{form\.company\}.*?className=")(w-full h-10 bg-white/5 border border-white/10 rounded-xl px-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-cyan-500/40)(".*?\/>)',
        r'<div className="relative"><div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />\n\1relative w-full bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm\3</div>',
        content,
        flags=re.DOTALL
    )

    # Select dropdowns
    content = re.sub(
        r'(<select\s+value=\{form\.type\}.*?className=")(w-full h-10 bg-white/5 border border-white/10 rounded-xl px-3 text-sm text-white outline-none focus:border-cyan-500/40 appearance-none cursor-pointer)(".*?>)',
        r'<div className="relative"><div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />\n\1relative w-full bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm appearance-none cursor-pointer\3',
        content,
        flags=re.DOTALL
    )
    content = content.replace('className="bg-[#0a0a1a]">{t}</option>)}', 'className="bg-[#0a0a1a]">{t}</option>)}\n                                            </select>\n                                        </div>')
    
    content = re.sub(
        r'(<select\s+value=\{form\.status\}.*?className=")(w-full h-10 bg-white/5 border border-white/10 rounded-xl px-3 text-sm text-white outline-none focus:border-cyan-500/40 appearance-none cursor-pointer)(".*?>)',
        r'<div className="relative"><div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />\n\1relative w-full bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm appearance-none cursor-pointer\3',
        content,
        flags=re.DOTALL
    )
    content = content.replace('className="bg-[#0a0a1a]">{s}</option>)}', 'className="bg-[#0a0a1a]">{s}</option>)}\n                                            </select>\n                                        </div>')

    # Text area notes
    content = re.sub(
        r'(<textarea\s+value=\{form\.notes\}.*?className=")(w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2\.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-cyan-500/40 resize-none)(".*?\/>)',
        r'<div className="relative"><div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />\n\1relative w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm resize-none\3</div>',
        content,
        flags=re.DOTALL
    )

    # Inputs with icons
    old_input_with_icon = 'w-full h-10 bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-cyan-500/40'
    new_input_with_icon = 'relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm'
    content = content.replace(old_input_with_icon, new_input_with_icon)

    # Add blur glow behind them
    content = re.sub(
        r'(<div className="relative">)',
        r'\1\n                                            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />',
        content
    )
    # Undo extra blur glow if we accidentally added it inside modal container or something else
    
    # 2. Make application tracker cards ultra premium
    # Currently: "p-4 sm:p-5 rounded-2xl border backdrop-blur-md group hover:border-white/20 transition-all duration-300 relative overflow-hidden"
    new_card_classes = '"p-4 sm:p-5 rounded-2xl border backdrop-blur-md group transition-all duration-300 relative overflow-hidden hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:border-white/30"'
    content = content.replace('"p-4 sm:p-5 rounded-2xl border backdrop-blur-md group hover:border-white/20 transition-all duration-300 relative overflow-hidden",', new_card_classes + ',')

    # Add dynamic glowing auras behind the tracker icon itself based on color
    content = content.replace(
        '<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />',
        '<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />\n                                    <div className={cn("absolute -inset-4 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full", `bg-${cfg.color}-500`)} />'
    )
    
    # Let's fix select /t replacement duplicates the closing tag
    # Our regex for select added </select></div> but we didn't remove the original </select>.
    # Wait, the Regex targeted `<select...>` (the opening tag), then we appended the closing `</select></div>` at the end of the `option)}`.
    # Actually the original code had:
    # <select ...> {map} </select>
    # We replaced `className="bg-[#0a0a1a]">{t}</option>)}` with `className="bg-[#0a0a1a]">{t}</option>)}\n                                            </select>\n                                        </div>`
    # and we also had the original `</select>` AFTER the `{JOB_TYPES.map...}` line.
    # We must strip the original `</select>` that's hanging.
    content = content.replace('</select>\n                                        </div>\n                                        </select>', '</select>\n                                        </div>')
    content = content.replace('</select>\n                                        </div>\n                                            </select>', '</select>\n                                        </div>')

    with open(target, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    enhance_applications()
    print("Applications page overhaul complete")
