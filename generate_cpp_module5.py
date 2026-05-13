
module_5_lessons = [
    {
        "id": "cpp-5-1",
        "title": "5.1 Associative Containers: Maps & Sets",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#222] p-8 rounded-3xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-4">Ordered Trees</h1>
        <p class="text-slate-400">
            <code>std::set</code> and <code>std::map</code> are typically implemented as <strong>Red-Black Trees</strong>.
        </p>
        <ul class="list-disc list-inside space-y-2 mt-4 text-sm text-slate-300">
             <li><strong>Ordered:</strong> Iterating goes from Smallest to Largest.</li>
             <li><strong>Complexity:</strong> O(log N) for Insert, Delete, Search.</li>
             <li><strong>Unique Keys:</strong> <code>std::set</code> and <code>std::map</code> do not allow duplicates. Use <code>multi</code> variants if needed.</li>
        </ul>
    </div>

    <!-- TREE VISUAL -->
    <div class="flex justify-center mt-8">
        <div class="relative">
             <div class="w-12 h-12 bg-black border border-white rounded-full flex items-center justify-center absolute top-0 left-[60px] z-10">50</div>
             
             <div class="w-12 h-12 bg-red-900 border border-red-500 rounded-full flex items-center justify-center absolute top-[60px] left-0">20</div>
             <div class="w-12 h-12 bg-red-900 border border-red-500 rounded-full flex items-center justify-center absolute top-[60px] left-[120px]">70</div>
             
             <div class="w-0.5 h-[60px] bg-white absolute top-[20px] left-[30px] rotate-[30deg] origin-top"></div>
             <div class="w-0.5 h-[60px] bg-white absolute top-[20px] left-[90px] rotate-[-30deg] origin-top"></div>
        </div>
        <div class="h-40 w-full"></div> 
    </div>
</div>
"""
    },
    {
         "id": "cpp-5-2",
         "title": "5.2 Unordered Containers: Hash Maps",
         "duration": "55 min",
         "type": "video",
         "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-8">
        <div>
            <h2 class="text-2xl font-bold text-white mb-4">The Hash Table</h2>
            <p class="text-slate-400 text-sm mb-4">
                <code>std::unordered_map</code> aims for O(1) access. It uses a Hash Function to map a Key to a Bucket Index.
            </p>
            <div class="bg-blue-900/10 p-4 border-l-4 border-blue-500 text-xs text-blue-200">
                <strong>Warning:</strong> In competitive programming, standard hash functions can be hacked/collided. Use a custom hash.
            </div>
        </div>
        
        <!-- BUCKET VISUAL -->
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 font-mono text-xs">
             <div class="mb-2 text-gray-400">hash("Apple") % 4 == 1</div>
             <div class="mb-2 text-gray-400">hash("Banana") % 4 == 3</div>
             
             <div class="space-y-1 mt-4">
                 <div class="flex items-center gap-2">
                     <span class="w-4 text-gray-500">0</span>
                     <div class="h-8 bg-gray-800 w-full rounded"></div>
                 </div>
                 <div class="flex items-center gap-2">
                     <span class="w-4 text-white">1</span>
                     <div class="h-8 bg-green-900/50 w-full rounded border border-green-500 flex items-center px-2 text-green-300">"Apple"</div>
                 </div>
                 <div class="flex items-center gap-2">
                     <span class="w-4 text-gray-500">2</span>
                     <div class="h-8 bg-gray-800 w-full rounded"></div>
                 </div>
                 <div class="flex items-center gap-2">
                     <span class="w-4 text-white">3</span>
                     <div class="h-8 bg-green-900/50 w-full rounded border border-green-500 flex items-center px-2 text-green-300">"Banana"</div>
                 </div>
             </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-5-3",
        "title": "5.3 Adaptors: Stack, Queue, Priority Queue",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Container Adaptors</h2>
    <p class="text-slate-400 mb-8">
        These are not new containers. They are wrappers around existing ones (like Deque or Vector) that restrict the interface.
    </p>

    <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-[#111] p-6 rounded-xl border-t-4 border-yellow-500">
             <h3 class="text-yellow-400 font-bold mb-2">Stack (LIFO)</h3>
             <div class="text-[10px] text-gray-500 mb-2">Underlying: Deque/Vector</div>
             <div class="space-y-1 font-mono text-xs">
                 <div>push()</div>
                 <div>pop()</div>
                 <div>top()</div>
             </div>
        </div>
        <div class="bg-[#111] p-6 rounded-xl border-t-4 border-cyan-500">
             <h3 class="text-cyan-400 font-bold mb-2">Queue (FIFO)</h3>
             <div class="text-[10px] text-gray-500 mb-2">Underlying: Deque/List</div>
             <div class="space-y-1 font-mono text-xs">
                 <div>push()</div>
                 <div>pop()</div>
                 <div>front()</div>
             </div>
        </div>
         <div class="bg-[#111] p-6 rounded-xl border-t-4 border-red-500">
             <h3 class="text-red-400 font-bold mb-2">Priority Queue</h3>
             <div class="text-[10px] text-gray-500 mb-2">Underlying: Vector (Heap)</div>
             <div class="space-y-1 font-mono text-xs">
                 <div>push()</div>
                 <div>pop() <span class="text-gray-600">// Removes Max</span></div>
                 <div>top() <span class="text-gray-600">// Gets Max</span></div>
             </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-5-4",
        "title": "5.4 Small String Optimization (SSO)",
        "duration": "50 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">The Union Optimization</h2>
        <p class="text-slate-400">How <code>std::string</code> avoids heap allocation for short strings.</p>
    </div>

    <!-- SSO VISUAL -->
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-6">Internal Memory Layout (64-bit)</h3>
        
        <div class="space-y-8 font-mono text-sm">
            <!-- SHORT STRING -->
            <div class="bg-black/50 p-6 rounded-xl border border-green-500/30">
                <div class="flex justify-between items-center mb-4">
                     <span class="text-green-400 font-bold">Scenario A: "Hello" (5 chars)</span>
                     <span class="bg-green-900 text-green-300 text-[10px] px-2 py-1 rounded">SSO Active</span>
                </div>
                <div class="grid grid-cols-12 gap-0 border border-gray-600 h-12 overflow-hidden text-center leading-[3rem]">
                    <div class="col-span-1 bg-green-800 text-white border-r border-gray-600">'H'</div>
                    <div class="col-span-1 bg-green-800 text-white border-r border-gray-600">'e'</div>
                    <div class="col-span-1 bg-green-800 text-white border-r border-gray-600">'l'</div>
                    <div class="col-span-1 bg-green-800 text-white border-r border-gray-600">'l'</div>
                    <div class="col-span-1 bg-green-800 text-white border-r border-gray-600">'o'</div>
                    <div class="col-span-1 bg-green-800 text-white border-r border-gray-600">\0</div>
                    <div class="col-span-6 bg-gray-800 text-gray-500 flex items-center justify-center">Unused Buffer</div>
                </div>
                <div class="mt-2 text-xs text-gray-400">Data stored directly on the Stack inside the object. Zero Heap Allocations.</div>
            </div>

            <!-- LONG STRING -->
            <div class="bg-black/50 p-6 rounded-xl border border-red-500/30">
                <div class="flex justify-between items-center mb-4">
                     <span class="text-red-400 font-bold">Scenario B: "A very long string..." (> 23 chars)</span>
                     <span class="bg-red-900 text-red-300 text-[10px] px-2 py-1 rounded">Heap Fallback</span>
                </div>
                
                <div class="flex gap-4 items-center">
                     <div class="w-32 h-12 bg-gray-800 border border-gray-600 flex items-center justify-center text-blue-300">
                         Ptr (0x5000)
                     </div>
                     <div class="text-2xl text-gray-500">→</div>
                     <div class="flex-1 h-12 bg-red-900/20 border border-red-500 flex items-center justify-center text-red-300">
                         Heap Buffer: "A very long string..."
                     </div>
                </div>
                <div class="mt-2 text-xs text-gray-400">The internal buffer is reinterpreted as a {pointer, size, capacity} struct.</div>
            </div>
        </div>

        <div class="mt-8 bg-blue-900/10 p-4 border-l-4 border-blue-500 text-sm text-blue-200">
            <strong>Key Insight:</strong> <code>sizeof(std::string)</code> is constant (usually 32 bytes). It uses a <code>union</code> to switch between the Local Buffer (SSO) and the Remote Pointer (Heap) based on string length.
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-5-5",
        "title": "5.5 Allocators & PMR",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-indigo-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">The Allocator Protocol</h1>
        <div class="space-y-6 text-lg text-slate-400">
            <p>
                <strong>Definition:</strong> An allocator is an object responsible for encapsulating memory management strategies. It decouples <strong>allocation</strong> (getting memory) from <strong>construction</strong> (creating objects).
            </p>
            <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
                <h4 class="text-indigo-400 font-bold mb-4">Standard Requirements (C++17)</h4>
                <ul class="space-y-4">
                    <li class="flex gap-4">
                        <span class="text-blue-500 font-bold">T* allocate(size_t n)</span>
                        <span>Allocates storage for <code>n</code> objects of type <code>T</code>. Does NOT construct.</span>
                    </li>
                    <li class="flex gap-4">
                        <span class="text-blue-500 font-bold">void deallocate(T* p, size_t n)</span>
                        <span>Deallocates storage. Does NOT destruct.</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-5-6",
        "title": "5.6 Performance Analysis & Tradeoffs",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Choosing the Right Tool</h2>
    
    <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs font-mono">
            <thead>
                <tr class="bg-gray-800 text-white">
                    <th class="p-3">Container</th>
                    <th class="p-3">Access</th>
                    <th class="p-3">Insert (End)</th>
                    <th class="p-3">Insert (Mid)</th>
                    <th class="p-3">Cache Friendliness</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-700">
                    <td class="p-3 text-blue-300">Vector</td>
                    <td class="p-3 text-green-400">O(1)</td>
                    <td class="p-3 text-green-400">O(1) Amortized</td>
                    <td class="p-3 text-red-400">O(N)</td>
                    <td class="p-3 text-green-400">A+ (Best)</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="p-3 text-blue-300">Deque</td>
                    <td class="p-3 text-green-400">O(1)</td>
                    <td class="p-3 text-green-400">O(1)</td>
                    <td class="p-3 text-red-400">O(N)</td>
                    <td class="p-3 text-yellow-400">B (Chunked)</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="p-3 text-blue-300">List</td>
                    <td class="p-3 text-red-400">O(N)</td>
                    <td class="p-3 text-green-400">O(1)</td>
                    <td class="p-3 text-green-400">O(1)</td>
                    <td class="p-3 text-red-400">F (Pointer Chasing)</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="p-3 text-blue-300">Unordered Map</td>
                    <td class="p-3 text-green-400">O(1) Avg</td>
                    <td class="p-3 text-green-400">O(1) Avg</td>
                    <td class="p-3 text-green-400">O(1) Avg</td>
                    <td class="p-3 text-red-400">F (Node based)</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
"""
    },
    {
        "id": "cpp-5-7",
        "title": "5.7 Lab: HFT Arena Allocator",
        "duration": "2 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-3xl text-center shadow-2xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: Linear Arena Allocator</h1>
        <p class="text-indigo-200">Implementing O(1) memory allocation for High-Frequency Trading.</p>
    </div>

    <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Project Specification</h3>
        <p class="text-slate-400 text-sm">
            You will implement a "Linear Allocator" (also known as a Monotonic Buffer or Arena). It pre-allocates a large block and hands out chunks by simply incrementing a pointer.
        </p>

        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
            <h4 class="text-purple-400 font-bold mb-4">Core Requirements</h4>
            <ul class="space-y-4 text-slate-300">
                <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">1. Pre-Allocation</span>
                    <span>Constructor allocates a large <code>std::vector&lt;char&gt;</code> or <code>new char[]</code> as the arena.</span>
                </li>
                <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">2. Pointer Bump</span>
                    <span><code>allocate(n)</code> returns the current offset and increments it. O(1).</span>
                </li>
            </ul>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-5-8",
        "title": "5.8 Lab: In-Memory Game Leaderboard",
        "duration": "2 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-3xl text-center shadow-2xl">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: Real-Time Leaderboard</h1>
        <p class="text-orange-100">Maintain top players using Sets and Maps.</p>
    </div>
    
    <div class="space-y-4">
        <p class="text-slate-400 text-sm">
             Design a system that tracks millions of player scores and can return the "Top 10" in real-time.
        </p>
         <div class="bg-[#111] p-6 rounded-xl border border-white/10">
             <div class="text-yellow-400 font-bold mb-2">Challenge</div>
             <p class="text-xs text-slate-500">
                 Using a <code>vector</code> and sorting it every time is O(N log N). Too slow.
                 <br>Use a <code>std::set</code> (Balanced Tree) to keep it sorted automatically in O(log N).
             </p>
         </div>
    </div>
</div>
"""
    }
]
