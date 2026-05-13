
module_6_lessons = [
    {
        "id": "cpp-6-1",
        "title": "6.1 Time & Space Complexity",
        "duration": "45 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-indigo-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">Big O Notation</h1>
        <p class="text-lg text-slate-400">
            How does your code scale? In CP, you have <strong>1 second</strong> (approx 10^8 operations).
        </p>

        <div class="mt-8 grid md:grid-cols-2 gap-4 text-xs font-mono">
             <div class="bg-green-900/20 p-4 border border-green-500/30 rounded">
                 <div class="text-green-400 font-bold mb-2">O(1) - Constant</div>
                 <div class="text-gray-400">Array access, Stack push/pop.</div>
             </div>
             <div class="bg-blue-900/20 p-4 border border-blue-500/30 rounded">
                 <div class="text-blue-400 font-bold mb-2">O(log N) - Logarithmic</div>
                 <div class="text-gray-400">Binary Search, Set/Map operations.</div>
             </div>
             <div class="bg-yellow-900/20 p-4 border border-yellow-500/30 rounded">
                 <div class="text-yellow-400 font-bold mb-2">O(N) - Linear</div>
                 <div class="text-gray-400">Looping through an array.</div>
             </div>
             <div class="bg-red-900/20 p-4 border border-red-500/30 rounded">
                 <div class="text-red-400 font-bold mb-2">O(N^2) - Quadratic</div>
                 <div class="text-gray-400">Nested loops. (Limit: N <= 5000).</div>
             </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-6-2",
        "title": "6.2 Two Pointers Technique",
        "duration": "50 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-6">Squeezing the Array</h3>
        <p class="text-slate-400 text-sm mb-6">
            Solve problems like "Find pair with sum X" in O(N) instead of O(N^2) by moving pointers from both ends.
        </p>
        
        <div class="flex justify-center items-center gap-2 font-mono text-sm mb-4">
             <div class="text-blue-400">L &rarr;</div>
             <div class="flex gap-1">
                 <div class="bg-gray-800 p-2 border border-gray-600">1</div>
                 <div class="bg-gray-800 p-2 border border-gray-600">3</div>
                 <div class="bg-gray-800 p-2 border border-gray-600">5</div>
                 <div class="bg-gray-800 p-2 border border-gray-600">8</div>
             </div>
             <div class="text-purple-400">&larr; R</div>
        </div>
        
        <pre class="bg-black/50 p-4 rounded text-xs text-gray-300 font-mono">
while (L < R) {
    int sum = arr[L] + arr[R];
    if (sum == target) return true;
    if (sum < target) L++;
    else R--;
}</pre>
    </div>
</div>
"""
    },
    {
        "id": "cpp-6-3",
        "title": "6.3 Sliding Window",
        "duration": "55 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">The Worm Technique</h2>
    
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <p class="text-sm text-slate-400 mb-4">
            Find the maximum sum subarray of size K. Don't recompute the sum from scratch! Just Add New, Remove Old.
        </p>

        <div class="font-mono text-xs text-center space-y-4">
            <div class="flex justify-center gap-1 opacity-50">
                 <div class="bg-gray-800 w-8 h-8 flex items-center justify-center border border-gray-600">2</div>
                 <div class="bg-gray-800 w-8 h-8 flex items-center justify-center border border-gray-600">5</div>
                 <div class="bg-gray-800 w-8 h-8 flex items-center justify-center border border-gray-600">1</div>
                 <div class="bg-gray-800 w-8 h-8 flex items-center justify-center border border-gray-600">9</div>
            </div>
            
            <div class="relative inline-block">
                <div class="absolute inset-0 border-2 border-green-500 rounded-lg pointer-events-none"></div>
                <div class="flex gap-1">
                     <div class="bg-gray-800 w-8 h-8 flex items-center justify-center border border-gray-600">2</div>
                     <div class="bg-gray-800 w-8 h-8 flex items-center justify-center border border-gray-600">5</div>
                     <div class="bg-gray-800 w-8 h-8 flex items-center justify-center border border-gray-600">1</div>
                </div>
            </div>
            
            <div class="text-green-400">Sum = 8</div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-6-4",
        "title": "6.4 Prefix Sums",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-r from-purple-900 to-indigo-900 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">Range Queries in O(1)</h2>
        <p class="text-purple-200 text-sm">
            Calculating sum(L, R) naively is O(N). With Prefix Sums, it's instant.
        </p>
    </div>
    
    <div class="mt-8 bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
         <div class="text-gray-400 mb-2">// Precomputation O(N)</div>
         <div class="bg-black p-2 rounded mb-4">
             pref[i] = pref[i-1] + arr[i];
         </div>
         
         <div class="text-green-400 mb-2">// Query O(1)</div>
         <div class="bg-black p-2 rounded text-green-300">
             sum(L, R) = pref[R] - pref[L-1];
         </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-6-5",
        "title": "6.5 Sorting Tricks & Custom Comparators",
        "duration": "50 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-6">Mastering std::sort</h3>
        
        <div class="space-y-6 text-sm text-slate-400">
            <div>
                <strong class="text-white">Sort Descending:</strong>
                <code class="block bg-black p-2 rounded mt-1 font-mono text-xs">sort(v.rbegin(), v.rend());</code>
            </div>
             <div>
                <strong class="text-white">Custom Structs:</strong>
                <code class="block bg-black p-2 rounded mt-1 font-mono text-xs">
                    sort(v.begin(), v.end(), [](const Item& a, const Item& b) {<br>
                    &nbsp;&nbsp;return a.price < b.price; // Cheapest first<br>
                    });
                </code>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-6-6",
        "title": "6.6 Binary Search on Answer",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-green-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">Monotonic Functions</h1>
        <p class="text-lg text-slate-400">
            Binary Search isn't just for finding numbers in an array. It's for finding the <strong>Optimal Value</strong> for a property.
        </p>
        
        <div class="mt-6 bg-[#1a1a1a] p-6 rounded-xl border border-white/10 text-xs font-mono text-gray-300">
            <div class="mb-4">Problem: "Minimum capacity needed to ship packages within D days?"</div>
            
            <div class="flex justify-between text-[10px] text-gray-500 mb-1">
                <span>Possible? No</span>
                <span>Possible? Yes</span>
            </div>
            <div class="w-full h-2 bg-gradient-to-r from-red-500 to-green-500 rounded"></div>
            
            <div class="mt-4">
                We search for the boundary between "False" and "True".
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-6-7",
        "title": "6.7 Recursion: The Stack Frame",
        "duration": "40 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Thinking Recursively</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-4">Base Case</h3>
            <p class="text-xs text-gray-400">Stop when the problem is trivial.</p>
            <pre class="bg-black/50 p-2 rounded font-mono text-xs mt-2">if (n == 0) return 1;</pre>
        </div>
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-4">Recursive Step</h3>
            <p class="text-xs text-gray-400">Break problem into smaller sub-problems.</p>
            <pre class="bg-black/50 p-2 rounded font-mono text-xs mt-2">return n * fact(n-1);</pre>
        </div>
    </div>
    
    <div class="mt-8 p-4 bg-red-900/10 border-l-4 border-red-500 text-xs text-red-200">
        <strong>Warning:</strong> Deep recursion causes Stack Overflow. Use Iteration for simple cases.
    </div>
</div>
"""
    },
    {
        "id": "cpp-6-8",
        "title": "Lab: String Manipulation Patterns",
        "duration": "2 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl text-center shadow-2xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: Anagrams & Palindromes</h1>
        <p class="text-gray-400">Classic Interview Questions.</p>
    </div>

    <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Tasks</h3>
        <ul class="space-y-4 text-slate-300 text-sm">
            <li class="bg-[#111] p-4 rounded border border-gray-700">
                <strong class="text-blue-400">1. Valid Palindrome:</strong> Check if a string is a palindrome, ignoring non-alphanumeric chars. (Use Two Pointers).
            </li>
            <li class="bg-[#111] p-4 rounded border border-gray-700">
                <strong class="text-green-400">2. Group Anagrams:</strong> Given ["eat", "tea", "tan", "ate", "nat", "bat"], group them. (Use Hash Map with Sorted Key).
            </li>
            <li class="bg-[#111] p-4 rounded border border-gray-700">
                <strong class="text-purple-400">3. Longest Substring No Repeats:</strong> "abcabcbb" -> 3. (Use Sliding Window + Set).
            </li>
        </ul>
    </div>
</div>
"""
    }
]
