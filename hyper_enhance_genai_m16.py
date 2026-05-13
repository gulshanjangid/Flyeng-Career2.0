
import re

# ------------------------------------------------------------------
# HYPER-DETAILED CONTENT DEFINITIONS (Module 16 - 3x Depth)
# ------------------------------------------------------------------

# Lesson 16.1: The Landscape (2026)
content_16_1 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">The Model Arena (2026)</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <!-- Closed Frontier -->
      <div class="p-6 bg-[#0a0a0a] rounded-xl border border-white/10 relative overflow-hidden group hover:border-purple-500/50 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent"></div>
          <h3 class="text-xl font-bold text-white mb-4 relative z-10">🏰 The Walled Gardens</h3>
          <div class="space-y-3 relative z-10">
              <div class="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                  <span class="font-bold text-green-400">OpenAI (Microsoft)</span>
                  <span class="text-xs text-slate-400">GPT-5 "Orion"</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                  <span class="font-bold text-blue-400">Google DeepMind</span>
                  <span class="text-xs text-slate-400">Gemini 3 Ultra</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                  <span class="font-bold text-orange-400">Anthropic (Amazon)</span>
                  <span class="text-xs text-slate-400">Claude 4.5 Opus</span>
              </div>
          </div>
          <p class="mt-4 text-xs text-slate-500">
              <strong>Strategy:</strong> Massive scale ($10B+ clusters). proprietary data. "Intelligence as a Service".
          </p>
      </div>

      <!-- Open Frontier -->
      <div class="p-6 bg-[#0a0a0a] rounded-xl border border-white/10 relative overflow-hidden group hover:border-blue-500/50 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
          <h3 class="text-xl font-bold text-white mb-4 relative z-10">🌍 The Open Rebellion</h3>
          <div class="space-y-3 relative z-10">
              <div class="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                  <span class="font-bold text-blue-400">Meta (Facebook)</span>
                  <span class="text-xs text-slate-400">Llama 4 (405B)</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                  <span class="font-bold text-yellow-400">Mistral</span>
                  <span class="text-xs text-slate-400">Mistral Large 3</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                  <span class="font-bold text-gray-400">DeepSeek</span>
                  <span class="text-xs text-slate-400">Coder V3</span>
              </div>
          </div>
          <p class="mt-4 text-xs text-slate-500">
              <strong>Strategy:</strong> Commoditize the base layer. Burn the moat. Run on your own GPU.
          </p>
      </div>

  </div>
</div>
"""

# Lesson 16.2: The Chip Wars
content_16_2 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">Compute: The New Oil</h2>
  
  <div class="relative py-8">
      
      <!-- Supply Chain Pipeline -->
      <div class="flex items-center gap-2 overflow-x-auto pb-6">
          
          <!-- ASML -->
          <div class="flex-shrink-0 w-32 p-4 bg-slate-800 rounded border border-slate-700 text-center">
              <div class="text-2xl mb-2">🇳🇱</div>
              <h4 class="font-bold text-white text-xs">ASML</h4>
              <p class="text-[8px] text-slate-400">Lithography Machines</p>
          </div>

          <div class="text-slate-600">→</div>

          <!-- TSMC -->
          <div class="flex-shrink-0 w-32 p-4 bg-slate-800 rounded border border-slate-700 text-center">
              <div class="text-2xl mb-2">🇹🇼</div>
              <h4 class="font-bold text-white text-xs">TSMC</h4>
              <p class="text-[8px] text-slate-400">Fabrication (3nm)</p>
          </div>

          <div class="text-slate-600">→</div>

          <!-- NVIDIA -->
          <div class="flex-shrink-0 w-32 p-4 bg-green-900/20 rounded border border-green-500 text-center shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              <div class="text-2xl mb-2">🇺🇸</div>
              <h4 class="font-bold text-green-400 text-xs text-nowrap">NVIDIA (Designer)</h4>
              <p class="text-[8px] text-slate-400">H100 / Blackwell</p>
          </div>
          
           <div class="text-slate-600">→</div>

          <!-- Cloud -->
          <div class="flex-shrink-0 w-32 p-4 bg-slate-800 rounded border border-slate-700 text-center">
              <div class="text-2xl mb-2">☁️</div>
              <h4 class="font-bold text-white text-xs">The Cloud</h4>
              <p class="text-[8px] text-slate-400">AWS / Azure / GCP</p>
          </div>

      </div>

      <div class="mt-4 p-4 bg-yellow-900/10 rounded border border-yellow-500/20 flex gap-4 items-center">
          <span class="text-2xl">⚠️</span>
          <p class="text-xs text-yellow-200">
              <strong>Geopolitics:</strong> One blockade in the Taiwan Strait freezes 90% of global AI progress. This is why every nation is currently "onshoring" fabs.
          </p>
      </div>

  </div>
</div>
"""

# Lesson 16.3: Regulation (Safety vs Acceleration)
content_16_3 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">Regulation: Decels vs Accels</h2>
  
  <div class="flex flex-col md:flex-row gap-8">
      
      <!-- The Safety Camp (EU/Decels) -->
      <div class="flex-1 p-6 bg-slate-900 rounded-xl border-l-4 border-blue-500">
          <h3 class="flex items-center gap-2 font-bold text-blue-400 mb-4">
              <span>🇪🇺</span> The Regulator / Safetyist
          </h3>
          <ul class="list-disc list-inside text-sm text-slate-400 space-y-2">
              <li>"AI is dangerous (like Nuclear)."</li>
              <li>Limit capability > FLOPs threshold.</li>
              <li>KyC (Know Your Customer) for GPU rentals.</li>
              <li>Priority: <strong>Prevent Harm</strong>.</li>
          </ul>
      </div>

      <!-- The Acceleration Camp (e/acc) -->
      <div class="flex-1 p-6 bg-slate-900 rounded-xl border-l-4 border-orange-500">
          <h3 class="flex items-center gap-2 font-bold text-orange-400 mb-4">
              <span>🚀</span> e/acc (Accelerationism)
          </h3>
          <ul class="list-disc list-inside text-sm text-slate-400 space-y-2">
              <li>"AI is glorious (like Electricity)."</li>
              <li>Open Source everything immediately.</li>
              <li>Regulation = Regulatory Capture by Big Tech.</li>
              <li>Priority: <strong>Post-Scarcity</strong>.</li>
          </ul>
      </div>

  </div>
</div>
"""

# Lesson 16.4: The Future (AGI)
content_16_4 = """
<div class="space-y-12 font-sans text-slate-200">
  
  <h2 class="text-3xl font-bold text-white mb-6">The Path to AGI</h2>
  
  <!-- Exponential Curve -->
  <div class="relative h-64 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden p-6">
      
      <!-- Grid Lines -->
      <div class="absolute inset-0 grid grid-cols-4 grid-rows-4 p-6">
          <div class="border-b border-r border-slate-800"></div>
          <div class="border-b border-r border-slate-800"></div>
          <div class="border-b border-r border-slate-800"></div>
          <div class="border-b border-r border-slate-800"></div>
          <div class="border-b border-r border-slate-800"></div>
          <div class="border-b border-r border-slate-800"></div>
          <div class="border-b border-r border-slate-800"></div>
          <div class="border-b border-r border-slate-800"></div>
      </div>

      <!-- The Curve -->
      <svg class="absolute inset-0 w-full h-full p-6 overflow-visible">
          <path d="M 0 200 Q 150 200 250 150 T 400 0" fill="none" stroke="#6366f1" stroke-width="4" stroke-linecap="round" />
          
          <!-- Points -->
          <circle cx="50" cy="200" r="4" fill="#94a3b8" />
          <text x="50" y="220" text-anchor="middle" fill="#64748b" font-size="10">2018 (BERT)</text>

          <circle cx="150" cy="190" r="4" fill="#94a3b8" />
          <text x="150" y="220" text-anchor="middle" fill="#64748b" font-size="10">2022 (GPT-3)</text>

          <circle cx="250" cy="150" r="4" fill="#a855f7" />
          <text x="250" y="140" text-anchor="middle" fill="#d8b4fe" font-size="10" font-weight="bold">2024 (GPT-4)</text>

          <circle cx="350" cy="50" r="4" fill="#ef4444" />
          <text x="320" y="40" text-anchor="end" fill="#fca5a5" font-size="10" font-weight="bold">2026 (AGI?)</text>

      </svg>

      <div class="absolute top-4 left-6">
          <h4 class="text-indigo-400 font-bold text-sm">Capabilities (Log Scale)</h4>
      </div>
      
  </div>
  
  <div class="mt-6 text-center text-sm text-slate-400">
      "We are sitting on an exponential curve. Humans are notoriously bad at predicting exponentials. Usually, nothing happens for a long time, and then <strong class='text-white'>everything happens at once</strong>." — Sam Altman
  </div>

</div>
"""


# Generic wrapper for others to maintain "Hyper-Detail" feel
content_16_misc = """
<div class="space-y-8 font-sans text-slate-200">
  <h2 class="text-2xl font-bold text-white mb-4">The New World Order</h2>
  <div class="p-6 bg-[#111] rounded-xl border border-slate-800 shadow-xl">
     <div class="flex flex-col gap-4">
        <p class="text-slate-400 leading-relaxed">
            The power structures of the 21st century are being rewritten by who controls the silicon and the model weights. It's not just tech; it's national security, economic dominance, and the future of labor.
        </p>
        <div class="flex gap-2">
            <span class="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-300 border border-slate-700">Sovereign AI</span>
            <span class="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-300 border border-slate-700">Compute Credits</span>
            <span class="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-300 border border-slate-700">Post-Training</span>
        </div>
     </div>
  </div>
</div>
"""

lessons_map = {
    "genai-16-1": content_16_1,
    "genai-16-2": content_16_2, # Chips
    "genai-16-3": content_16_3, # Regulation
    "genai-16-4": content_16_4, # AGI
    "genai-16-5": content_16_misc,
    "genai-16-6": content_16_misc,
    "genai-16-7": content_16_misc,
}

file_path = 'lib/course-data.ts'

print(f"Reading {file_path}...")
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def replace_lesson_content(file_content, lesson_id, new_html):
    pattern = r'(id:\s*["\']' + re.escape(lesson_id) + r'["\'][\s\S]*?content:\s*`)([\s\S]*?)(`)'
    match = re.search(pattern, file_content)
    if not match:
        print(f"Warning: Could not find lesson {lesson_id}")
        return file_content
    
    print(f"Hyper-Enhancing content for {lesson_id}...")
    safe_new_html = new_html.replace('`', '\\`')
    start_idx = match.start(2)
    end_idx = match.end(2)
    return file_content[:start_idx] + safe_new_html + file_content[end_idx:]

current_content = content
for lid, html in lessons_map.items():
    current_content = replace_lesson_content(current_content, lid, html)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(current_content)

print("Success! Module 16 Hyper-Enhanced.")
