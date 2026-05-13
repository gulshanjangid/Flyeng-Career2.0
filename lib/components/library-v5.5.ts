// lib/components/library-v5.5.ts

export const COMPONENT_LIBRARY_V5_5 = {
  // ==================== BUTTONS (50+ VARIANTS) ====================
  buttons: {
    // PRIMARY VARIANTS 
    primary: {
      solid: `<button class="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95">Button</button>`,
      outline: `<button class="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600/10 transition-all">Button</button>`,
      ghost: `<button class="px-6 py-3 text-purple-600 hover:bg-purple-600/10 rounded-lg font-semibold transition-all">Button</button>`,
      glass: `<button class="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">Button</button>`,
      neon: `<button class="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/100 transition-all">Button</button>`,
    },

    // SECONDARY VARIANTS
    secondary: {
      solid: `<button class="px-6 py-3 bg-slate-200 text-slate-900 rounded-lg font-semibold hover:bg-slate-300 transition-all">Button</button>`,
      muted: `<button class="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-black transition-all">Button</button>`,
    },

    // ANIMATED VARIANTS
    animated: {
      pulse: `<button class="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold animate-pulse">Button</button>`,
      glow: `<button class="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/100 transition-all hover:scale-105">Button</button>`,
    },

    // SIZE VARIANTS
    sizes: {
      xs: `<button class="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-md font-medium">XS</button>`,
      sm: `<button class="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-lg font-semibold">SM</button>`,
      md: `<button class="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold">MD</button>`,
      lg: `<button class="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg rounded-lg font-bold">LG</button>`,
      xl: `<button class="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl rounded-xl font-bold">XL</button>`,
    },

    // ICON BUTTONS
    withIcon: {
      iconLeft: `<button class="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all group">
        <svg class="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.5 1.5H9.5V0h1v1.5z"/>
        </svg>
        <span>Button</span>
      </button>`,

      iconOnly: `<button class="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center hover:shadow-2xl transition-all hover:scale-110">✨</button>`,
    },

    // LOADING STATE
    loading: `<button class="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold disabled:opacity-50 flex items-center gap-2">
      <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25"/>
        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
      </svg>
      <span>Loading...</span>
    </button>`,
  },

  // ==================== CARDS (40+ VARIANTS) ====================
  cards: {
    // FEATURE CARDS
    feature: {
      modern: `<div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-transparent to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-300"/>
        <div class="relative z-10">
          <div class="w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-blue-500/40 transition-all">🚀</div>
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">Feature</h3>
          <p class="text-gray-400">Description of the feature with benefits</p>
        </div>
        <div class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"/>
      </div>`,

      minimal: `<div class="relative rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-all">
        <h3 class="text-lg font-semibold text-slate-900 mb-2">Feature</h3>
        <p class="text-slate-600">Clean minimal design with subtle interactions</p>
        <div class="mt-4 text-sm font-medium text-purple-600">Learn more →</div>
      </div>`,
    },

    // TESTIMONIAL CARDS
    testimonial: {
      premium: `<div class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:bg-white/10 transition-all">
        <div class="flex gap-1 mb-6 text-yellow-400">⭐⭐⭐⭐⭐</div>
        <p class="text-white/90 mb-8 leading-relaxed italic text-lg">"This product transformed how we work. Exceptional quality and support."</p>
        <div class="flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&q=80" class="w-12 h-12 rounded-full object-cover"/>
          <div>
            <p class="text-white font-semibold">Sarah Johnson</p>
            <p class="text-gray-400 text-sm">CEO, TechCorp</p>
          </div>
        </div>
      </div>`,
    },

    // PRICING CARDS
    pricing: {
      pro: `<div class="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300">
        <div class="mb-6">
          <span class="inline-block px-4 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30">POPULAR</span>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">Pro Plan</h3>
        <p class="text-gray-400 mb-6">Perfect for growing teams</p>
        <div class="mb-8">
          <span class="text-5xl font-bold text-white">$99</span>
          <span class="text-gray-400">/month</span>
        </div>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center gap-3 text-white"><span class="text-green-400">✓</span> Advanced Features</li>
          <li class="flex items-center gap-3 text-white"><span class="text-green-400">✓</span> Priority Support</li>
          <li class="flex items-center gap-3 text-white"><span class="text-green-400">✓</span> Custom Domain</li>
        </ul>
        <button class="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all">Choose Plan</button>
      </div>`,
    },

    // STATS CARDS
    stats: {
      modern: `<div class="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-xl overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16"/>
        <div class="relative z-10">
          <p class="text-gray-400 text-sm mb-2">Total Revenue</p>
          <h3 class="text-4xl font-bold text-white mb-4">$2.4M</h3>
          <p class="text-green-400 text-sm font-semibold">↑ 12% from last month</p>
        </div>
      </div>`,
    },
  },

  // ==================== FORMS (60+ VARIANTS) ====================
  forms: {
    inputs: {
      // MODERN TEXT INPUT
      modern: `<div class="relative">
        <input type="text" placeholder=" " class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-transparent focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition-all backdrop-blur-xl peer"/>
        <label class="absolute left-4 top-0 -translate-y-1/2 bg-slate-950 px-2 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-1/2 peer-focus:text-purple-400 transition-all">Email</label>
      </div>`,

      // GLASSMORPHISM INPUT
      glass: `<input type="text" placeholder="Search..." class="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-all"/>`,

      // GRADIENT BORDER
      gradient: `<div class="relative group">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity p-0.5"/>
        <input type="text" placeholder="Type..." class="relative w-full px-4 py-3 bg-slate-900 border border-transparent rounded-lg text-white focus:outline-none transition-all"/>
      </div>`,
    },

    checkbox: `<label class="flex items-center gap-3 cursor-pointer group">
      <div class="relative w-6 h-6">
        <input type="checkbox" class="w-6 h-6 cursor-pointer opacity-0 absolute inset-0"/>
        <div class="w-6 h-6 border-2 border-white/30 rounded-lg group-hover:border-purple-500 transition-all"/>
      </div>
      <span class="text-white">Option</span>
    </label>`,

    radio: `<label class="flex items-center gap-3 cursor-pointer">
      <input type="radio" name="option" class="w-4 h-4 accent-purple-600 cursor-pointer"/>
      <span class="text-white">Choice</span>
    </label>`,

    select: `<div class="relative">
      <select class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500/50 focus:outline-none appearance-none backdrop-blur-xl cursor-pointer">
        <option value="">Select...</option>
        <option value="1">Option 1</option>
      </select>
      <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
      </svg>
    </div>`,

    textarea: `<textarea placeholder="Your message..." class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none resize-none backdrop-blur-xl transition-all" rows="4"></textarea>`,

    toggle: `<label class="flex items-center cursor-pointer group">
      <input type="checkbox" class="w-8 h-5 cursor-pointer opacity-0 absolute"/>
      <div class="relative w-8 h-5 bg-gray-600 rounded-full group-hover:bg-gray-500 transition-colors">
        <div class="absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-300 group-hover:translate-x-3"/>
      </div>
      <span class="ml-3 text-white">Enable</span>
    </label>`,
  },

  // ==================== NAVIGATION (35+ VARIANTS) ====================
  navigation: {
    navbar: {
      premium: `<nav class="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">FC Agent</h1>
          <div class="hidden md:flex gap-8">
            <a href="#" class="text-gray-400 hover:text-white transition">Features</a>
            <a href="#" class="text-gray-400 hover:text-white transition">Pricing</a>
          </div>
          <button class="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition">Sign In</button>
        </div>
      </nav>`,

      minimal: `<nav class="sticky top-0 z-50 bg-white border-b border-gray-200 py-4 px-4">
        <div class="max-w-6xl mx-auto flex items-center justify-between">
          <div class="text-2xl font-bold">Logo</div>
          <div class="flex gap-6">
            <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
          </div>
          <button class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Get Started</button>
        </div>
      </nav>`,
    },

    breadcrumbs: `<nav class="flex items-center gap-2 text-sm">
      <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
      <span class="text-gray-400">/</span>
      <span class="text-gray-900 font-semibold">Current</span>
    </nav>`,

    tabs: `<div class="border-b border-white/10">
      <div class="flex gap-8">
        <button class="px-4 py-4 text-white font-semibold border-b-2 border-purple-500 hover:text-purple-400 transition">Tab 1</button>
        <button class="px-4 py-4 text-gray-400 border-b-2 border-transparent hover:text-white transition">Tab 2</button>
      </div>
    </div>`,
  },

  // ==================== ABOUT & TEAM (New) ====================
  about: {
    me: {
      grid: `<div class="max-w-6xl mx-auto px-4 py-20">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-white">I Build <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Digital Experiences</span></h2>
            <p class="text-gray-400 text-lg leading-relaxed">
              Passionate developer with 5+ years of experience in creating cutting-edge web applications. 
              Specializing in React, Node.js, and immersive UI interactions.
            </p>
            <div class="flex gap-4 pt-4">
              <a href="#" class="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"><span class="sr-only">Twitter</span>🐦</a>
              <a href="#" class="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"><span class="sr-only">GitHub</span>💻</a>
              <a href="#" class="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"><span class="sr-only">LinkedIn</span>👔</a>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" alt="About Me" class="relative rounded-3xl border border-white/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500"/>
          </div>
        </div>
      </div>`,

      glass: `<div class="max-w-4xl mx-auto px-4 py-20 text-center">
        <div class="relative inline-block mb-8">
          <div class="absolute inset-0 bg-blue-500 blur-3xl opacity-20"></div>
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" class="relative w-32 h-32 rounded-full border-4 border-white/10 mx-auto"/>
        </div>
        <h2 class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-6">Hello, I'm Alex</h2>
        <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          A creative developer crafting beautiful and functional websites. 
          Let's turn your ideas into reality.
        </p>
        <button class="px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition">Read More</button>
      </div>`
    },
    team: {
      cards: `<div class="max-w-7xl mx-auto px-4 py-20">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-white mb-4">Meet the Team</h2>
          <p class="text-gray-400">The minds behind the magic</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Member 1 -->
          <div class="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-colors">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
            <div class="relative text-center">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-white/10"/>
              <h3 class="text-xl font-bold text-white">Sarah Cole</h3>
              <p class="text-purple-400 text-sm mb-4">Design Lead</p>
              <p class="text-gray-400 text-sm">Obsessed with pixels and user flows.</p>
            </div>
          </div>
          <!-- Member 2 -->
          <div class="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-colors">
            <div class="relative text-center">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-white/10"/>
              <h3 class="text-xl font-bold text-white">Mike Chen</h3>
              <p class="text-blue-400 text-sm mb-4">Tech Lead</p>
              <p class="text-gray-400 text-sm">Building scalable systems.</p>
            </div>
          </div>
          <!-- Member 3 -->
           <div class="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-colors">
            <div class="relative text-center">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-white/10"/>
              <h3 class="text-xl font-bold text-white">Emma Davis</h3>
              <p class="text-pink-400 text-sm mb-4">Product Manager</p>
              <p class="text-gray-400 text-sm">Keeping everything on track.</p>
            </div>
          </div>
        </div>
      </div>`
    }
  },

  // ==================== HERO SECTIONS (30+ VARIANTS) ====================
  hero: {
    fullScreen: `<section class="min-h-screen pt-24 flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"/>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-purple-500/20 to-transparent blur-[120px] rounded-full"/>
      <div class="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div class="inline-block mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
          <span class="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">✨ Welcome to the Future</span>
        </div>
        <h1 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6 tracking-tighter">Build the Impossible</h1>
        <p class="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">Create stunning websites in seconds</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl transition">Get Started</button>
          <button class="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition">Demo</button>
        </div>
      </div>
    </section>`,

    minimal: `<section class="py-20 px-4 text-center">
      <h1 class="text-5xl font-bold text-gray-900 mb-4">Simple & Beautiful</h1>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Clean design with minimal distractions</p>
      <button class="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold">Get Started</button>
    </section>`,
  },

  // ==================== FEATURES SECTIONS (35+ VARIANTS) ====================
  features: {
    bentoGrid: `<section class="py-24 px-4 bg-[#0a0a0f]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-4">Powerful Features</h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-xl hover:border-purple-500/50 transition-all">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-transparent to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all"/>
            <div class="relative z-10">
              <div class="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">🚀</div>
              <h3 class="text-2xl font-bold text-white mb-3">Feature One</h3>
              <p class="text-gray-400">Description</p>
            </div>
          </div>
        </div>
      </div>
    </section>`,
  },

  // ==================== CTA SECTIONS (20+ VARIANTS) ====================
  cta: {
    fullWidth: `<section class="py-24 px-4 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"/>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-[120px] rounded-full"/>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <h2 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6">Ready to Build?</h2>
        <p class="text-xl text-gray-400 mb-8">Start creating today</p>
        <button class="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl transition">Launch Now</button>
      </div>
    </section>`,
  },

  // ==================== FOOTERS (20+ VARIANTS) ====================
  footer: {
    complete: `<footer class="bg-black/80 backdrop-blur-xl border-t border-white/10 py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 class="text-white font-bold mb-4">FC Agent</h3>
            <p class="text-gray-400 text-sm">Build amazing websites</p>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Product</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white text-sm">Features</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Company</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white text-sm">About</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Legal</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white text-sm">Privacy</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 FC Agent. All rights reserved.</p>
        </div>
      </div>
    </footer>`,
  },

  // ==================== ANIMATIONS & EFFECTS (30+ VARIANTS) ====================
  animations: {
    gradientShift: `<button class="relative px-8 py-4 font-semibold text-white rounded-lg overflow-hidden group">
      <div class="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%] animate-gradient"/>
      <span class="relative">Animated Button</span>
    </button>`,

    glow: `<div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"/>
      <div class="relative bg-black rounded-lg p-8">Content with glow</div>
    </div>`,

    float: `<div class="animate-bounce">↓ Scroll Down</div>`,
  },

  // ==================== ALERTS & NOTIFICATIONS (20+ VARIANTS) ====================
  alerts: {
    success: `<div class="flex items-center gap-4 rounded-lg border border-green-500/30 bg-green-500/10 p-4 backdrop-blur-xl">
      <div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center"><span class="text-green-400">✓</span></div>
      <div>
        <h3 class="font-semibold text-green-400">Success!</h3>
        <p class="text-sm text-green-300">Action completed successfully</p>
      </div>
    </div>`,

    warning: `<div class="flex items-center gap-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 backdrop-blur-xl">
      <div class="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center"><span class="text-yellow-400">!</span></div>
      <div>
        <h3 class="font-semibold text-yellow-400">Warning</h3>
        <p class="text-sm text-yellow-300">Please review before proceeding</p>
      </div>
    </div>`,

    error: `<div class="flex items-center gap-4 rounded-lg border border-red-500/30 bg-red-500/10 p-4 backdrop-blur-xl">
      <div class="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center"><span class="text-red-400">✕</span></div>
      <div>
        <h3 class="font-semibold text-red-400">Error</h3>
        <p class="text-sm text-red-300">Something went wrong</p>
      </div>
    </div>`,
  },

  // ==================== LOADERS & SKELETONS (20+ VARIANTS) ====================
  loaders: {
    spinner: {
      gradient: `<div class="w-12 h-12 border-4 border-white/10 border-t-purple-500 rounded-full animate-spin"/>`,
      dualRing: `<div class="relative w-12 h-12">
        <div class="absolute inset-0 border-4 border-transparent border-t-purple-500 border-r-blue-500 rounded-full animate-spin"/>
        <div class="absolute inset-2 border-4 border-transparent border-t-pink-500 border-r-purple-500 rounded-full animate-spin direction-reverse"/>
      </div>`,
    },

    skeleton: `<div class="space-y-4">
      <div class="h-4 bg-white/10 rounded animate-pulse"/>
      <div class="h-4 bg-white/10 rounded animate-pulse"/>
      <div class="h-4 bg-white/10 rounded w-5/6 animate-pulse"/>
    </div>`,
  },

  // ==================== GALLERY & PRODUCTS (New) ====================
  gallery: {
    productGrid: `<section class="py-24 px-4 bg-[#0a0a0f]">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-4xl font-bold text-white mb-4">New Arrivals</h2>
            <p class="text-gray-400">Fresh from the forge</p>
          </div>
          <button class="hidden md:block px-6 py-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition">View All</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Product 1 -->
          <div class="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
            <div class="aspect-[4/5] overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                 <button class="w-full py-3 bg-white text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Add to Cart</button>
               </div>
               <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-bold text-white">Cyber Hoodie</h3>
                <span class="text-purple-400 font-mono">$89.00</span>
              </div>
              <p class="text-sm text-gray-400">Neon-reflective cotton blend.</p>
            </div>
          </div>
          <!-- Product 2 -->
          <div class="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
            <div class="aspect-[4/5] overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                 <button class="w-full py-3 bg-white text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Add to Cart</button>
               </div>
               <img src="https://images.unsplash.com/photo-1551488852-7dd866574438?w=800&q=80" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
            </div>
            <div class="p-6">
               <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-bold text-white">Void Runners</h3>
                <span class="text-purple-400 font-mono">$145.00</span>
              </div>
              <p class="text-sm text-gray-400">Anti-gravity foam sole.</p>
            </div>
          </div>
          <!-- Product 3 -->
          <div class="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
            <div class="aspect-[4/5] overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                 <button class="w-full py-3 bg-white text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Add to Cart</button>
               </div>
               <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
            </div>
            <div class="p-6">
               <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-bold text-white">Neural Cap</h3>
                <span class="text-purple-400 font-mono">$45.00</span>
              </div>
              <p class="text-sm text-gray-400">Biometric feedback sensors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>`,

    masonry: `<section class="py-24 px-4 bg-black">
      <div class="max-w-7xl mx-auto">
         <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">Visual Noise</h2>
        </div>
        <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div class="relative rounded-2xl overflow-hidden group break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?w=600&q=80" class="w-full rounded-2xl transform group-hover:scale-105 transition duration-500"/>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span class="text-white font-bold tracking-widest uppercase border border-white px-4 py-2">View</span>
            </div>
          </div>
           <div class="relative rounded-2xl overflow-hidden group break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80" class="w-full rounded-2xl transform group-hover:scale-105 transition duration-500"/>
             <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span class="text-white font-bold tracking-widest uppercase border border-white px-4 py-2">View</span>
            </div>
          </div>
           <div class="relative rounded-2xl overflow-hidden group break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" class="w-full rounded-2xl transform group-hover:scale-105 transition duration-500"/>
             <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span class="text-white font-bold tracking-widest uppercase border border-white px-4 py-2">View</span>
            </div>
          </div>
           <div class="relative rounded-2xl overflow-hidden group break-inside-avoid">
            <img src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=600&q=80" class="w-full rounded-2xl transform group-hover:scale-105 transition duration-500"/>
             <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span class="text-white font-bold tracking-widest uppercase border border-white px-4 py-2">View</span>
            </div>
          </div>
        </div>
      </div>
    </section>`
  },

  // ==================== NEWSLETTER & FORMS (New) ====================
  newsletter: {
    signup: `<section class="py-24 px-4 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40"/>
      <div class="relative z-10 max-w-4xl mx-auto text-center p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-2xl">
        <div class="inline-flex w-16 h-16 bg-purple-500/20 rounded-full items-center justify-center mb-8">
           <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Join the Inner Circle</h2>
        <p class="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">Get exclusive access to new drops, behind-the-scenes content, and early bird pricing. No spam, ever.</p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input type="email" placeholder="Enter your email" class="flex-1 px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition"/>
          <button class="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition shadow-[0_0_20px_rgba(255,255,255,0.3)]">Subscribe</button>
        </div>
        <p class="mt-6 text-xs text-gray-500">By subscribing you agree to our Terms & Privacy Policy.</p>
      </div>
    </section>`,

    minimal: `<section class="py-12 border-y border-white/10 bg-black">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 class="text-xl font-bold text-white mb-1">Stay updated</h3>
          <p class="text-gray-400 text-sm">Weekly updates on our journey.</p>
        </div>
        <div class="flex gap-2 w-full md:w-auto">
           <input type="email" placeholder="email@domain.com" class="flex-1 md:w-64 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:border-white/40 focus:outline-none"/>
           <button class="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition">Join</button>
        </div>
      </div>
    </section>`
  },

  // ==================== FAQ & SUPPORT (New) ====================
  faq: {
    accordion: `<section class="py-24 px-4">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Questions?</h2>
          <p class="text-gray-400">We've got answers.</p>
        </div>
        <div class="space-y-4">
          <!-- Item 1 -->
          <details class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white hover:bg-white/5 transition">
              <h3 class="font-semibold text-lg">How does the shipping work?</h3>
              <div class="white-space-no-wrap">
                <svg class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <div class="px-6 pb-6 text-gray-400 leading-relaxed">
              We ship worldwide using carbon-neutral logistics partners. Orders are processed within 24 hours, and typical delivery times are 3-5 business days for domestic orders and 7-14 days for international.
            </div>
          </details>
          <!-- Item 2 -->
          <details class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white hover:bg-white/5 transition">
              <h3 class="font-semibold text-lg">Can I return my items?</h3>
              <div class="white-space-no-wrap">
                <svg class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <div class="px-6 pb-6 text-gray-400 leading-relaxed">
              Absolutely. If you're not 100% satisfied with the construction or fit, you can return your items within 30 days of delivery for a full refund or exchange. No questions asked.
            </div>
          </details>
          <!-- Item 3 -->
          <details class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
             <summary class="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white hover:bg-white/5 transition">
              <h3 class="font-semibold text-lg">Do you offer sizing customization?</h3>
              <div class="white-space-no-wrap">
                <svg class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <div class="px-6 pb-6 text-gray-400 leading-relaxed">
              Currently, we offer standard sizing from XS to XXL. For bulk team orders, we can discuss custom fitting options. Please contact our support team for more details.
            </div>
          </details>
        </div>
      </div>
    </section>`
  },

  // ==================== BLOG SECTIONS (New) ====================
  blog: {
    grid: `<section class="py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-12 border-l-4 border-purple-500 pl-6">Latest Transmissions</h2>
        <div class="grid md:grid-cols-3 gap-8">
           <!-- Post 1 -->
           <article class="group cursor-pointer">
             <div class="relative overflow-hidden rounded-2xl mb-4 aspect-video">
               <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" class="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"/>
               <div class="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white uppercase tracking-wider">Design</div>
             </div>
             <div class="space-y-2">
               <span class="text-gray-500 text-sm">Oct 24, 2026</span>
               <h3 class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">The Future of Interface Design</h3>
               <p class="text-gray-400 line-clamp-2">How neural links are changing the way we interact with digital spaces.</p>
             </div>
           </article>
           <!-- Post 2 -->
           <article class="group cursor-pointer">
             <div class="relative overflow-hidden rounded-2xl mb-4 aspect-video">
               <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80" class="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"/>
               <div class="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white uppercase tracking-wider">Tech</div>
             </div>
             <div class="space-y-2">
               <span class="text-gray-500 text-sm">Oct 22, 2026</span>
               <h3 class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Quantum Computing in 2026</h3>
               <p class="text-gray-400 line-clamp-2">Why encryption is about to change forever and what you can do.</p>
             </div>
           </article>
           <!-- Post 3 -->
           <article class="group cursor-pointer">
             <div class="relative overflow-hidden rounded-2xl mb-4 aspect-video">
               <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" class="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"/>
               <div class="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white uppercase tracking-wider">AI</div>
             </div>
             <div class="space-y-2">
               <span class="text-gray-500 text-sm">Oct 20, 2026</span>
               <h3 class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Generative Agents</h3>
               <p class="text-gray-400 line-clamp-2">Building autonomous systems that can code, design, and deploy.</p>
             </div>
           </article>
        </div>
      </div>
    </section>`
  },

};
// Export for use
export default COMPONENT_LIBRARY_V5_5;
export type ComponentLibraryV5_5 = typeof COMPONENT_LIBRARY_V5_5;