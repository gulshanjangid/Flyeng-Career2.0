
module_11_lessons = [
    {
        "id": "cpp-11-1",
        "title": "11.1 Exceptions: The Good, Bad, and Ugly",
        "duration": "50 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-red-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">Error Handling Models</h1>
        
        <div class="grid md:grid-cols-2 gap-8 text-sm">
            <div>
                 <h4 class="text-green-400 font-bold mb-2">Return Codes (C-Style)</h4>
                 <div class="bg-black/50 p-4 rounded text-gray-400 font-mono text-xs">
                     int ret = func();<br>if (ret != 0) handle();
                 </div>
                 <p class="mt-2 text-xs text-gray-500">Fast, but ignores are fatal. Clutters code.</p>
            </div>
            <div>
                 <h4 class="text-red-400 font-bold mb-2">Exceptions (C++)</h4>
                 <div class="bg-black/50 p-4 rounded text-gray-400 font-mono text-xs">
                     try { func(); }<br>catch (e) { handle(); }
                 </div>
                 <p class="mt-2 text-xs text-gray-500">Clean happy path. Slow on error. Needs RTTI.</p>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-11-2",
        "title": "11.2 The Strong Exception Guarantee",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Transaction Safety</h2>
    
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-4">Commit or Rollback</h3>
        <p class="text-slate-400 text-sm mb-6">
            If a function throws an exception, the program state should remain <strong>unchanged</strong>.
        </p>
        
        <div class="bg-black/50 p-6 rounded-xl border-l-4 border-green-500 font-mono text-xs">
            <div class="text-gray-500">// The "Copy and Swap" Idiom</div>
            <pre class="text-gray-300 mt-2">
void append(Data new_data) {
    auto temp = current_data; // 1. Copy (May Throw)
    temp.push_back(new_data); // 2. Modify Temp (May Throw)
    
    current_data.swap(temp);  // 3. Swap (Noexcept - Safe!)
}</pre>
        </div>
        <div class="mt-4 text-xs text-gray-500">
            If step 1 or 2 fails, 'current_data' is untouched. If step 3 runs, it succeeds instantly.
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-11-3",
        "title": "11.3 noexcept: The Optimization Hint",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-r from-blue-900 to-indigo-900 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">Moving Fast</h2>
        <p class="text-blue-200 text-sm">
            <code>std::vector</code> will NOT use your Move Constructor during a resize unless it is marked <code>noexcept</code>.
        </p>
    </div>
    
    <div class="mt-8 p-6 bg-[#1a1a1a] rounded-xl border border-white/10">
        <p class="text-xs text-gray-400 mb-4">
            Safety reasons: If moving element 5 fails halfway, we can't restore the old list. Copying is safer.
        </p>
        <pre class="bg-black p-4 rounded text-green-300 font-mono text-xs">
MyClass(MyClass&& other) <span class="text-yellow-400">noexcept</span> {
    // ...
}</pre>
    </div>
</div>
"""
    },
    {
        "id": "cpp-11-4",
        "title": "11.4 std::expected (C++23)",
        "duration": "40 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">The Best of Both Worlds</h2>
        <p class="text-slate-400">Return a Value OR an Error. Like Rust's Result type.</p>
    </div>

    <div class="mt-8 bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 font-mono text-sm max-w-xl mx-auto">
        <div class="text-gray-400 mb-2">std::expected&lt;int, string&gt; divide(int a, int b) {</div>
        <div class="pl-4 text-gray-300">
             if (b == 0) return std::unexpected("Div by zero");<br>
             return a / b;
        </div>
        <div class="text-gray-400 mt-2">}</div>
        
        <div class="mt-6 pt-6 border-t border-gray-700">
            auto result = divide(10, 0);<br>
            if (result) cout << *result;<br>
            else cerr << result.error();
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-11-5",
        "title": "11.5 Unit Testing with GTest",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-6">Google Test Framework</h3>
        <p class="text-slate-400 text-sm mb-6">
            The industry standard for C++ testing. Macros galore.
        </p>

        <div class="bg-black/50 p-6 rounded-xl border border-green-500/20 font-mono text-xs">
            <span class="text-green-500">TEST</span>(MathTests, Addition) {<br>
            &nbsp;&nbsp;EXPECT_EQ(add(2, 2), 4);<br>
            &nbsp;&nbsp;EXPECT_GT(add(10, 5), 10);<br>
            }
        </div>
        
        <p class="mt-4 text-xs text-gray-500">
            Integrates easily with CMake (FetchContent).
        </p>
    </div>
</div>
"""
    },
    {
        "id": "cpp-11-6",
        "title": "11.6 Sanitizers: ASAN & UBSAN",
        "duration": "50 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Finding Invisible Bugs</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#111] p-6 rounded-xl border-l-4 border-red-500">
            <h3 class="text-white font-bold mb-2">Address Sanitizer (ASAN)</h3>
            <p class="text-xs text-gray-400">Detects Buffer Overflows, Use-After-Free.</p>
            <code class="text-xs bg-gray-800 px-2 py-1 rounded mt-2 block">-fsanitize=address</code>
        </div>
        <div class="bg-[#111] p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 class="text-white font-bold mb-2">Undefined Behavior (UBSAN)</h3>
            <p class="text-xs text-gray-400">Detects Integer Overflows, Null dereferences.</p>
            <code class="text-xs bg-gray-800 px-2 py-1 rounded mt-2 block">-fsanitize=undefined</code>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-11-7",
        "title": "11.7 Lab: Robust Parser",
        "duration": "2 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-br from-red-900 to-pink-900 p-8 rounded-3xl text-center shadow-2xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: Bulletproof Parser</h1>
        <p class="text-pink-200">Handling corrupt data gracefully.</p>
    </div>

    <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Project Specification</h3>
        <p class="text-slate-400 text-sm">
            Write a CSV parser that never crashes, no matter how garbage the input file is.
        </p>

        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
            <h4 class="text-red-400 font-bold mb-4">Error Scenarios</h4>
            <ul class="space-y-4 text-slate-300">
                <li>File does not exist (Exception/Optional).</li>
                <li>Missing columns in a row (Log & Skip).</li>
                <li>Integer column contains "Banana" (Parse Error).</li>
            </ul>
        </div>
        
        <div class="mt-4 p-4 bg-green-900/10 text-xs text-green-200 border border-green-500/20 rounded">
            <strong>Goal:</strong> The program must print a summary report of valid rows vs rejected rows, instead of aborting.
        </div>
    </div>
</div>
"""
    }
]
