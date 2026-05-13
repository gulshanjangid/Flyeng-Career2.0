import os
import re

def enhance_settings():
    target = r"c:\Users\hp\Desktop\Flyeng Career\Final Folder\app\dashboard\settings\page.tsx"
    
    with open(target, 'r', encoding='utf-8') as f:
        content = f.read()

    # The inputs currently look like:
    # <div className="space-y-2">
    #     <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Full Name *</label>
    #     <div className="relative">
    #         <User className="absolute left-4 top-3 w-4 h-4 text-white/30" />
    #         <input 
    #             ...
    #             className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 h-10 text-white focus:border-cyan-500/50 outline-none transition-colors text-sm"
    #         />

    # We want to change them to use the group/input logic with the background blur element.
    # We will use Regex to replace the standard input structure with the glowing structure.

    # 1. Update the space-y-2 to group/input
    content = content.replace('<div className="space-y-2">', '<div className="space-y-1.5 group/input">')
    content = content.replace('<div className="space-y-2 sm:col-span-2">', '<div className="space-y-1.5 group/input sm:col-span-2">')

    # 2. Update all labels to respond to group focus
    content = re.sub(
        r'<label className="(text-xs font-bold text-white/40 uppercase tracking-widest ml-1)">(.*?)</label>',
        r'<label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">\2</label>',
        content
    )

    # 3. Add the glowing blur orb right inside the <div className="relative"> wrapper
    content = re.sub(
        r'(<div className="relative">)',
        r'\1\n                                    <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />',
        content
    )

    # 4. Update the input/textarea `className` strings to have the elevated focus states
    old_input_class = 'className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 h-10 text-white focus:border-cyan-500/50 outline-none transition-colors text-sm"'
    new_input_class = 'className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"'
    content = content.replace(old_input_class, new_input_class)

    # Do the same for the email disabled input
    old_email_class = 'className="w-full bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 h-10 text-white/50 cursor-not-allowed text-sm"'
    new_email_class = 'className="relative w-full bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 h-11 text-white/50 cursor-not-allowed font-medium text-sm"'
    content = content.replace(old_email_class, new_email_class)

    # Do the same for Bio textarea
    old_bio_class = 'className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white focus:border-cyan-500/50 outline-none transition-colors resize-none text-sm"'
    new_bio_class = 'className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium resize-none text-sm"'
    content = content.replace(old_bio_class, new_bio_class)

    # 5. Fix icons positioning because input height changed from h-10 to h-11
    content = content.replace('top-3 w-4 h-4', 'top-3.5 w-4 h-4')

    # 6. Update Save Button to match the premium rounded aesthetic
    old_btn = 'success ? "bg-green-500 hover:bg-green-600 text-black" : "bg-white text-black hover:bg-cyan-50"'
    new_btn = 'success ? "bg-gradient-to-r from-emerald-400 to-green-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]" : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border-0"'
    content = content.replace(old_btn, new_btn)
    
    # Needs a taller height for the save button
    content = content.replace('px-8 rounded-xl font-bold transition-all w-full sm:w-auto",', 'h-12 px-8 rounded-xl font-bold transition-all w-full sm:w-auto",')

    with open(target, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    enhance_settings()
    print("Settings page overhaul complete")
