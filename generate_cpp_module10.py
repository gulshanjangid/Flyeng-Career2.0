
module_10_lessons = [
    {
        "id": "cpp-10-1",
        "title": "10.1 C++17: Filesystem & Optional",
        "duration": "45 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-4">std::filesystem</h3>
            <p class="text-xs text-gray-400 mb-4">
                Finally, a standard way to walk directories.
            </p>
            <pre class="bg-black/50 p-4 rounded text-xs text-gray-300 font-mono">
using fs = std::filesystem;
for(auto& p : fs::directory_iterator(".")) {
    cout << p.path() << endl;
}</pre>
        </div>
        
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-4">std::optional</h3>
            <p class="text-xs text-gray-400 mb-4">
                Expressing "May or may not contain a value" without pointers.
            </p>
            <pre class="bg-black/50 p-4 rounded text-xs text-gray-300 font-mono">
std::optional&lt;int&gt; findUser(int id) {
    if (!exists(id)) return std::nullopt;
    return 42;
}</pre>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-10-2",
        "title": "10.2 C++20: Concepts & Constraints",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-indigo-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">Taming Templates</h1>
        <p class="text-lg text-slate-400">
            <strong>Concepts</strong> allow you to constrain template parameters, getting clear error messages instead of 500 pages of "template substitution failed".
        </p>
        
        <div class="mt-8 bg-[#1a1a1a] p-6 rounded-xl border border-green-500/20">
             <div class="text-xs text-green-400 mb-2">The Old Way (SFINAE)</div>
             <pre class="text-gray-500 text-xs mb-6">template &lt;typename T, typename = std::enable_if_t&lt;is_integral_v&lt;T&gt;&gt;&gt;</pre>
             
             <div class="text-xs text-green-400 mb-2">The C++20 Way</div>
             <pre class="text-white font-bold text-sm">
template &lt;std::integral T&gt;
void add(T a, T b) { ... }</pre>
             <p class="mt-4 text-[10px] text-gray-400">Can also define your own concepts like <code>HasDrawMethod&lt;T&gt;</code>.</p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-10-3",
        "title": "10.3 C++20: Ranges & Views",
        "duration": "55 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Pipeline Programming</h2>
    
    <div class="bg-gradient-to-r from-teal-900 to-blue-900 p-8 rounded-2xl shadow-xl">
        <p class="text-teal-200 text-sm mb-6">
            Think UNIX pipes <code>|</code> but for C++ containers. Lazy evaluation included.
        </p>
        
        <pre class="font-mono text-sm text-white bg-black/50 p-6 rounded-xl border border-teal-400/30">
#include &lt;ranges&gt;

auto result = nums 
    | std::views::filter([](int n){ return n % 2 == 0; })
    | std::views::transform([](int n){ return n * n; })
    | std::views::take(5);</pre>
            
        <div class="mt-4 flex gap-4 text-xs text-gray-300">
            <div class="bg-black/50 px-3 py-1 rounded border border-gray-600">No temporary vectors created</div>
            <div class="bg-black/50 px-3 py-1 rounded border border-gray-600">Completely lazy</div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-10-4",
        "title": "10.4 C++20: Coroutines",
        "duration": "60 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-6">Functions that Pause</h3>
        <p class="text-slate-400 text-sm mb-6">
            A coroutine is a function that can suspend execution to be resumed later. Essential for Async I/O and Generators.
        </p>

        <div class="grid md:grid-cols-2 gap-8 font-mono text-xs">
             <div class="bg-black/50 p-4 rounded text-gray-400">
                 co_await socket.read();<br>
                 <span class="text-green-500">// Function sleeps here.</span><br>
                 <span class="text-green-500">// Thread goes to do other work.</span><br>
                 process(data);
             </div>
             <div class="bg-black/50 p-4 rounded text-gray-400">
                 Generator&lt;int&gt; sequence() {<br>
                 &nbsp;&nbsp;for(int i=0;;++i)<br>
                 &nbsp;&nbsp;&nbsp;&nbsp;co_yield i;<br>
                 }
             </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-10-5",
        "title": "10.5 C++20: Modules (The Future)",
        "duration": "45 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-red-900/10 border border-red-500/30 p-8 rounded-2xl">
        <h3 class="text-red-400 font-bold mb-4">Death to Headers</h3>
        <p class="text-sm text-slate-300 mb-4">
            <code>#include</code> is literal copy-paste. It is slow and causes conflicts.
            <strong>Modules</strong> import pre-compiled binary interfaces.
        </p>
        
        <div class="flex gap-12 mt-6 font-mono text-xs">
            <div>
                <div class="text-gray-500 mb-1">Old</div>
                <div class="bg-black p-2 rounded text-gray-400">#include &lt;iostream&gt;</div>
            </div>
            <div>
                <div class="text-green-500 mb-1">New</div>
                 <div class="bg-black p-2 rounded text-green-300">import std.core;</div>
            </div>
        </div>
        
        <p class="mt-4 text-[10px] text-gray-500">
            Note: Compiler support is still maturing (2026). CMake supports it now.
        </p>
    </div>
</div>
"""
    },
    {
        "id": "cpp-10-6",
        "title": "10.6 The Spaceship Operator <=>",
        "duration": "30 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Three-way Comparison</h2>
        <code class="text-5xl font-mono text-yellow-400"><=></code>
    </div>
    
    <div class="mt-8 bg-[#1a1a1a] p-6 rounded-xl border border-white/10 max-w-lg mx-auto">
        <p class="text-sm text-gray-400 mb-4">
            Instead of writing operator==, !=, <, >, <=, >=... you write just <strong>ONE</strong>.
        </p>
        <pre class="bg-black/50 p-4 rounded text-xs text-yellow-300">
auto operator<=>(const MyClass&) const = default;</pre>
        <p class="mt-4 text-xs text-gray-500">
            The compiler auto-generates all 6 comparison operators for you by comparing members in order.
        </p>
    </div>
</div>
"""
    },
    {
        "id": "cpp-10-7",
        "title": "10.7 Constexpr & Consteval",
        "duration": "50 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Compile-Time Execution</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#111] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-2">constexpr</h3>
            <p class="text-xs text-gray-400 mb-2">Can run at compile time IF inputs are constant. Otherwise runs at runtime.</p>
        </div>
        <div class="bg-[#111] p-6 rounded-xl border border-white/5">
             <h3 class="text-white font-bold mb-2">consteval (C++20)</h3>
            <p class="text-xs text-green-400 mb-2">MUST run at compile time. Error if it can't.</p>
        </div>
    </div>
    
    <div class="mt-6 bg-[#1a1a1a] p-6 rounded-xl border border-purple-500/20">
        <h3 class="text-purple-400 font-bold mb-2">Metaprogramming replacement</h3>
        <p class="text-sm text-slate-400">
            You can now write normal functions (loops, if-statements) and run them during compilation to generate lookup tables. No more template insanity.
        </p>
    </div>
</div>
"""
    },
    {
        "id": "cpp-10-8",
        "title": "10.8 Lab: Modern Library Design",
        "duration": "2.5 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-br from-indigo-800 to-purple-800 p-8 rounded-3xl text-center shadow-2xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: Modern Core Lib</h1>
        <p class="text-indigo-200">Using Concepts, Ranges, and Modules.</p>
    </div>

    <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Project Specification</h3>
        <p class="text-slate-400 text-sm">
            Create a small utility library for "Safe Arrays" that feels like a native part of the language.
        </p>

        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
            <h4 class="text-purple-400 font-bold mb-4">Checklist</h4>
            <ul class="space-y-4 text-slate-300">
                <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">1. Concepts</span>
                    <span>Constraint template types to only <code>std::is_arithmetic</code> (Numbers).</span>
                </li>
                <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">2. Spaceship</span>
                    <span>Implement <code>operator<=></code> using default.</span>
                </li>
                 <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">3. Ranges</span>
                    <span>Add a method that returns a view (e.g., array elements multiplied by 2).</span>
                </li>
            </ul>
        </div>
    </div>
</div>
"""
    }
]
