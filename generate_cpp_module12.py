
module_12_lessons = [
    {
        "id": "cpp-12-1",
        "title": "12.1 CPU Architecture: Hierarchy of Speed",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-indigo-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">Distance Matters</h1>
        <p class="text-lg text-slate-400">
            Accessing RAM is slow. Accessing Disk is glacial. The CPU only works fast on registers and L1 Cache.
        </p>

        <div class="mt-8 flex flex-col gap-2 font-mono text-xs">
            <div class="bg-green-600 p-3 text-center text-white font-bold rounded w-32 mx-auto">Registers (0ns)</div>
            <div class="bg-green-700 p-3 text-center text-white font-bold rounded w-40 mx-auto">L1 Cache (1ns)</div>
            <div class="bg-green-800 p-3 text-center text-white font-bold rounded w-52 mx-auto">L2 Cache (4ns)</div>
            <div class="bg-green-900 p-3 text-center text-white font-bold rounded w-64 mx-auto">L3 Cache (10ns)</div>
            <div class="bg-gray-800 p-6 text-center text-gray-400 rounded w-full mt-4 border border-gray-600">
                RAM (100ns) - <span class="text-red-400">100x Slower!</span>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-12-2",
        "title": "12.2 Data Oriented Design (DOD)",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Structure of Arrays (SoA)</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 opacity-50">
             <h3 class="text-white font-bold mb-4">OOP (AoS)</h3>
             <pre class="text-xs font-mono text-gray-400">
struct Particle {
    float x, y, z;
    int color;
};
vector&lt;Particle&gt; parts;</pre>
             <p class="text-[10px] text-red-400 mt-2">Padding bytes waste space. Mixed types pollute cache line.</p>
        </div>
        
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-green-500/20 shadow-[0_0_20px_rgba(0,255,0,0.1)]">
             <h3 class="text-green-400 font-bold mb-4">DOD (SoA)</h3>
             <pre class="text-xs font-mono text-green-300">
struct Particles {
    vector&lt;float&gt; x;
    vector&lt;float&gt; y;
    vector&lt;float&gt; z;
    vector&lt;int&gt; color;
};</pre>
             <p class="text-[10px] text-green-400 mt-2">Packed tightly. SIMD ready.</p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-12-3",
        "title": "12.3 Cache Locality & Prefetching",
        "duration": "50 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-2xl font-bold text-white mb-4">Linked List vs Vector</h3>
        <p class="text-slate-400 text-sm mb-6">
            Iterating a <code>std::list</code> is often 10x-50x slower than <code>std::vector</code> simply because of cache misses (pointer chasing).
        </p>
        
        <div class="flex gap-4 items-center justify-center mb-8">
            <div class="flex gap-1">
                <div class="w-8 h-8 bg-blue-600"></div>
                <div class="w-8 h-8 bg-blue-600"></div>
                <div class="w-8 h-8 bg-blue-600"></div>
            </div>
            <div class="text-xl">vs</div>
            <div class="flex gap-4">
                <div class="w-8 h-8 bg-purple-600 rounded-full"></div>
                <div class="w-8 border-t-2 border-dashed border-gray-600 mt-4"></div>
                <div class="w-8 h-8 bg-purple-600 rounded-full"></div>
            </div>
        </div>

        <div class="bg-blue-900/10 p-4 border-l-4 border-blue-500 text-xs text-blue-200">
            <strong>Rule of Thumb:</strong> Always default to <code>std::vector</code>. Only use Node-based containers if you strictly need O(1) insertion in the middle AND iterators stability.
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-12-4",
        "title": "12.4 Branch Prediction",
        "duration": "45 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-r from-yellow-800 to-orange-800 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">Pipeline Hazards</h2>
        <p class="text-yellow-200 text-sm">
            CPUs guess which way an <code>if</code> statement will go. If they guess wrong, they flush the pipeline (expensive).
        </p>
    </div>
    
    <div class="mt-8 bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
         <div class="text-gray-400 mb-2">// Sorting data makes processing faster!</div>
         <div class="text-white">
             if (data[i] > 128) sum += data[i];
         </div>
         <p class="mt-4 text-gray-500">
             If data is random: 50% misprediction rate.<br>
             If data is sorted: 0% misprediction rate (pattern is TTTTTFFFFF).
         </p>
         
         <div class="mt-6 text-green-400">[[likely]] and [[unlikely]] (C++20)</div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-12-5",
        "title": "12.5 Auto-Vectorization & SIMD",
        "duration": "55 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-green-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">Single Instruction Multiple Data</h1>
        <p class="text-lg text-slate-400">
            Processing 4 or 8 floats in a SINGLE CPU cycle.
        </p>

        <div class="mt-6 flex flex-col gap-4">
             <div class="flex gap-2">
                 <div class="bg-gray-800 text-xs text-gray-300 p-2 rounded">A1</div>
                 <div class="bg-gray-800 text-xs text-gray-300 p-2 rounded">A2</div>
                 <div class="bg-gray-800 text-xs text-gray-300 p-2 rounded">A3</div>
                 <div class="bg-gray-800 text-xs text-gray-300 p-2 rounded">A4</div>
             </div>
             <div class="text-center font-bold text-green-500">+ (One Cycle)</div>
             <div class="flex gap-2">
                 <div class="bg-gray-800 text-xs text-gray-300 p-2 rounded">B1</div>
                 <div class="bg-gray-800 text-xs text-gray-300 p-2 rounded">B2</div>
                 <div class="bg-gray-800 text-xs text-gray-300 p-2 rounded">B3</div>
                 <div class="bg-gray-800 text-xs text-gray-300 p-2 rounded">B4</div>
             </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-12-6",
        "title": "12.6 Profiling Tools: Perf & Flamegraphs",
        "duration": "40 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Don't Guess. Measure.</h2>
        <p class="text-slate-400">Premature optimization is the root of all evil.</p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 mt-6">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-white font-bold mb-2">Linux Perf</h3>
             <code class="text-xs text-green-300">perf record -g ./app</code>
             <p class="text-[10px] text-gray-500 mt-2">Samples stack traces thousands of times per second.</p>
        </div>
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-white font-bold mb-2">FlameGraphs</h3>
             <div class="w-full h-12 bg-gradient-to-t from-orange-600 to-yellow-400 rounded"></div>
             <p class="text-[10px] text-gray-500 mt-2">Visualizing where time is spent. Wide bars = Slow functions.</p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-12-7",
        "title": "12.7 Lab: N-Body Physics Simulation",
        "duration": "2.5 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-br from-purple-800 to-black p-8 rounded-3xl text-center shadow-2xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: Optimization Challenge</h1>
        <p class="text-purple-200">Make it run 100x faster.</p>
    </div>

    <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Project Specification</h3>
        <p class="text-slate-400 text-sm">
            Start with a naive O(N^2) physics loop implementing gravity between 10,000 particles.
        </p>

        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
            <h4 class="text-green-400 font-bold mb-4">Optimization Steps</h4>
            <ul class="space-y-4 text-slate-300">
                <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">1. Baseline</span>
                    <span>Measure FPS with <code>std::vector&lt;Particle&gt;</code>.</span>
                </li>
                <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">2. SoA Transformation</span>
                    <span>Convert to Structure of Arrays to assist vectorization.</span>
                </li>
                 <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">3. Multi-Threading</span>
                    <span>Use <code>std::for_each(std::execution::par_unseq)</code>.</span>
                </li>
            </ul>
        </div>
    </div>
</div>
"""
    }
]
