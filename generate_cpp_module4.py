
module_4_lessons = [
    {
        "id": "cpp-4-1",
        "title": "4.1 Vector: The Contiguous Array",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h1 class="text-4xl font-extrabold text-white mb-6">Definition & Theory</h1>
    <p>
        <strong>Definition:</strong> <code>std::vector</code> is a sequence container that encapsulates dynamic size arrays. It manages its storage automatically, expanding as needed.
    </p>
    <ul class="list-disc list-inside space-y-2 ml-4">
        <li><strong>Contiguous Memory:</strong> Elements are stored adjacent to each other in memory.</li>
        <li><strong>Random Access:</strong> Support for O(1) access via index <code>[]</code>.</li>
        <li><strong>Dynamic Growth:</strong> When full, it allocates a larger block (usually 2x), copies elements, and deletes the old block.</li>
    </ul>

    <!-- VECTOR GROWTH VISUAL -->
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 mt-8">
        <h3 class="text-xl font-bold text-white mb-6">Visualizing Reallocation</h3>
        <p class="text-xs text-slate-400 mb-6">Pushing 1 element when full triggers a massive copy operation. This is why <code>reserve()</code> is critical.</p>

        <div class="flex flex-col gap-8">
            <!-- STATE A -->
            <div class="relative">
                <div class="text-xs text-gray-500 mb-2 font-mono">Capacity: 4 (FULL)</div>
                <div class="flex gap-1">
                    <div class="w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold border border-white/20">A</div>
                    <div class="w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold border border-white/20">B</div>
                    <div class="w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold border border-white/20">C</div>
                    <div class="w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold border border-white/20">D</div>
                </div>
            </div>

            <!-- STATE B -->
            <div class="relative">
                 <div class="text-xs text-gray-500 mb-2 font-mono">push_back('E') -> NEW ALLOC (Cap: 8)</div>
                 <div class="flex gap-1 opacity-50 relative">
                     <div class="absolute inset-0 flex items-center justify-center text-red-500 font-bold bg-black/80 z-10">DELETED</div>
                    <div class="w-12 h-12 bg-blue-900 flex items-center justify-center text-white border border-white/10">A</div>
                    <div class="w-12 h-12 bg-blue-900 flex items-center justify-center text-white border border-white/10">B</div>
                    <div class="w-12 h-12 bg-blue-900 flex items-center justify-center text-white border border-white/10">C</div>
                    <div class="w-12 h-12 bg-blue-900 flex items-center justify-center text-white border border-white/10">D</div>
                </div>
                <div class="flex gap-1 mt-4">
                    <div class="w-12 h-12 bg-green-600 flex items-center justify-center text-white font-bold border border-white/20">A</div>
                    <div class="w-12 h-12 bg-green-600 flex items-center justify-center text-white font-bold border border-white/20">B</div>
                    <div class="w-12 h-12 bg-green-600 flex items-center justify-center text-white font-bold border border-white/20">C</div>
                    <div class="w-12 h-12 bg-green-600 flex items-center justify-center text-white font-bold border border-white/20">D</div>
                    <div class="w-12 h-12 bg-yellow-600 flex items-center justify-center text-white font-bold border border-white/20 shadow-[0_0_15px_yellow]">E</div>
                    <div class="w-12 h-12 bg-gray-800 border border-dashed border-gray-600"></div>
                     <div class="w-12 h-12 bg-gray-800 border border-dashed border-gray-600"></div>
                      <div class="w-12 h-12 bg-gray-800 border border-dashed border-gray-600"></div>
                </div>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-4-2",
        "title": "4.2 String Theory: More than char arrays",
        "duration": "50 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">std::string Basics</h2>
        <p class="text-slate-400">Safely manipulating text without buffer overflows.</p>
    </div>

    <!-- SSO MENTION -->
    <div class="bg-[#111] p-6 rounded-xl border-l-4 border-purple-500">
        <h3 class="text-purple-400 font-bold mb-2">Short String Optimization (SSO)</h3>
        <p class="text-xs text-slate-400">
            If a string is short (usually < 16 or 24 chars), it is stored <strong>directly inside the object</strong> on the stack to avoid heap allocation.
        </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 mt-6">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-2">Operations</h3>
            <ul class="space-y-2 text-xs font-mono text-slate-300">
                <li>s + " World" <span class="text-gray-500">// Concatenation</span></li>
                <li>s.substr(0, 5) <span class="text-gray-500">// Substring</span></li>
                <li>s.find("el") <span class="text-gray-500">// Search (returns npos if fail)</span></li>
            </ul>
        </div>

        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-white font-bold mb-2">std::string_view (C++17)</h3>
             <p class="text-[10px] text-gray-400 mb-2">
                 A read-only window into a string. Zero copies. High performance.
             </p>
             <pre class="bg-black/50 p-2 rounded text-[10px] text-green-300">
void print(std::string_view sv) {
    // No allocation. Just a pointer + size.
    cout << sv;
}</pre>
        </div>
    </div>
</div>
"""
    },
    {
         "id": "cpp-4-3",
         "title": "4.3 std::array & std::deque",
         "duration": "45 min",
         "type": "video",
         "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-8">
        <!-- ARRAY -->
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold text-white">std::array</h3>
                <span class="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded">Stack</span>
            </div>
            <p class="text-sm text-slate-400 mb-4">
                A fixed-size array that doesn't decay to a pointer. It lives on the stack (usually).
            </p>
            <pre class="bg-black p-4 rounded text-xs font-mono text-gray-300">
std::array&lt;int, 5&gt; arr = {1, 2, 3};
// Size must be known at compile time!</pre>
        </div>

        <!-- DEQUE -->
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold text-white">std::deque</h3>
                <span class="bg-purple-900 text-purple-300 text-xs px-2 py-1 rounded">Hybrid</span>
            </div>
            <p class="text-sm text-slate-400 mb-4">
                "Double Ended Queue". Fast insertion at BOTH front and back.
            </p>
            <div class="flex gap-px opacity-70">
                <div class="w-8 h-8 bg-purple-600/50 border border-purple-500"></div>
                <div class="w-8 h-8 bg-purple-600/50 border border-purple-500"></div>
                <div class="w-4"></div>
                <div class="w-8 h-8 bg-purple-600/50 border border-purple-500"></div>
                <div class="w-8 h-8 bg-purple-600/50 border border-purple-500"></div>
            </div>
            <p class="mt-2 text-[10px] text-gray-500">
                It is NOT contiguous. It is a collection of fixed-size chunks.
            </p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-4-4",
        "title": "4.4 Tuple, Pair & Structured Bindings",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Returning Multiple Values</h2>
    
    <div class="bg-[#0f1014] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-green-400 mb-4">Structured Bindings (C++17)</h3>
        <p class="text-sm text-slate-400 mb-6 font-mono">
            Unpack tuples, pairs, and structs directly into variables.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <div class="text-xs font-bold text-gray-500 uppercase mb-2">The Old Way (Gross)</div>
                <pre class="bg-[#1a1a1a] p-4 rounded text-xs text-gray-400 opacity-60">
std::pair&lt;int, int&gt; p = {10, 20};
int x = p.first;
int y = p.second;</pre>
            </div>
            <div>
                 <div class="text-xs font-bold text-green-500 uppercase mb-2">The Modern Way (Clean)</div>
                <pre class="bg-[#1a1a1a] p-4 rounded text-xs text-green-300 border-l-2 border-green-500">
std::pair&lt;int, int&gt; p = {10, 20};
auto [x, y] = p; // Magic!</pre>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-4-5",
        "title": "4.5 Iterators: The Bridge",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-2xl font-bold text-white mb-6">The Universal Interface</h3>
        <p class="text-slate-400 mb-6 text-sm">
            Iterators abstract away the container. An algorithm like <code>sort</code> doesn't know it's sorting a vector. It acts on iterators.
        </p>
        
        <div class="flex gap-4 overflow-x-auto pb-4">
             <div class="min-w-[150px] bg-black p-4 rounded border border-gray-700">
                 <div class="text-blue-400 font-bold text-xs mb-1">Input Iterator</div>
                 <div class="text-[10px] text-gray-500">Read Once (Stream)</div>
             </div>
             <div class="min-w-[150px] bg-black p-4 rounded border border-gray-700">
                 <div class="text-green-400 font-bold text-xs mb-1">Forward Iterator</div>
                 <div class="text-[10px] text-gray-500">Read/Write logic</div>
             </div>
             <div class="min-w-[150px] bg-black p-4 rounded border border-purple-500 shadow-[0_0_10px_purple]">
                 <div class="text-purple-400 font-bold text-xs mb-1">Random Access</div>
                 <div class="text-[10px] text-gray-500">Jump +N (Vector/Deque)</div>
             </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-4-6",
        "title": "4.6 Invalidation: When Pointers Lie",
        "duration": "40 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
     <div class="bg-red-900/10 border border-red-500/30 p-8 rounded-2xl">
        <h2 class="text-2xl font-bold text-red-500 mb-4">Iterator Invalidation</h2>
        <p class="text-slate-300 text-sm">
            If a vector reallocates (grows), all pointers and iterators to its elements become <strong>Dangling Pointers</strong>. Using them crashes the app.
        </p>
        <div class="bg-black p-4 mt-4 rounded font-mono text-xs">
            auto it = vec.begin();<br>
            vec.push_back(10); <span class="text-red-500">// ALLOCATES NEW BLOCK</span><br>
            cout << *it; <span class="text-red-500">// CRASH! 'it' points to old freed memory.</span>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-4-7",
        "title": "4.7 Algorithms: Sort, Find, Binary Search",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-3 gap-6">
        <div class="col-span-1 bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-2">std::sort</h3>
            <p class="text-xs text-gray-400">Introsort (Mix of QuickSort, HeapSort, InsertionSort). O(N log N).</p>
        </div>
        <div class="col-span-1 bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-2">std::find</h3>
            <p class="text-xs text-gray-400">Linear Scan. O(N).</p>
        </div>
        <div class="col-span-1 bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-2">std::binary_search</h3>
            <p class="text-xs text-gray-400">Requires sorted range. O(log N).</p>
        </div>
    </div>

    <div class="bg-blue-900/10 p-6 rounded-xl border-l-4 border-blue-500 mt-6">
        <h3 class="text-blue-400 font-bold mb-2">The "Algorithm" Header</h3>
        <p class="text-sm text-slate-300">
            Never write your own sort or search loops unless it's homework. The STL versions are optimized for cache locality and edge cases.
        </p>
    </div>
</div>
"""
    },
    {
        "id": "cpp-4-8",
        "title": "4.8 Lab: Building a CP Toolkit",
        "duration": "1.5 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-3xl text-center shadow-2xl">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: The Competitive Template</h1>
        <p class="text-blue-100">Implement a macro-free, modern C++ template for speed.</p>
    </div>
    
    <div class="space-y-4">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs text-slate-300">
             <div class="text-green-400 font-bold mb-2">// 1. Fast I/O</div>
             <div>std::ios::sync_with_stdio(0); std::cin.tie(0);</div>
             
             <div class="text-green-400 font-bold mt-4 mb-2">// 2. Type Aliases</div>
             <div>using ll = long long;</div>
             <div>using vi = std::vector&lt;int&gt;;</div>

             <div class="text-green-400 font-bold mt-4 mb-2">// 3. Universal Printer</div>
             <div>Use templates to print any container.</div>
        </div>
    </div>
</div>
"""
    }
]
