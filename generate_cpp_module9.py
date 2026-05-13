
module_9_lessons = [
    {
        "id": "cpp-9-1",
        "title": "9.1 Auto & Type Inference",
        "duration": "40 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Almost Always Auto (AAA)</h2>
        <p class="text-slate-400">Let the compiler deduce the type. It never makes a mistake.</p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-gray-500 font-bold mb-2">Before C++11</h3>
             <pre class="bg-black/50 p-4 rounded text-xs text-gray-500">
std::vector&lt;std::string&gt;::iterator it = vec.begin();</pre>
        </div>
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-green-400 font-bold mb-2">After C++11</h3>
             <pre class="bg-black/50 p-4 rounded text-xs text-green-300">
auto it = vec.begin();</pre>
        </div>
    </div>
    
    <div class="bg-blue-900/10 p-6 rounded-xl border-l-4 border-blue-500 mt-6 text-sm text-blue-200">
        <strong>Note:</strong> <code>auto</code> decays references and const by default!
        <br>Use <code>auto&</code> or <code>const auto&</code> if you want a reference.
    </div>
</div>
"""
    },
    {
        "id": "cpp-9-2",
        "title": "9.2 Range-based For Loops",
        "duration": "30 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-6">Syntactic Sugar</h3>
        
        <div class="font-mono text-xs space-y-4">
             <div class="bg-black p-4 rounded border border-gray-700">
                 <span class="text-purple-400">for</span> (int x : vec) { ... } <span class="text-gray-500">// Copies each element</span>
             </div>
             <div class="bg-black p-4 rounded border border-green-700/50">
                 <span class="text-purple-400">for</span> (int& x : vec) { ... } <span class="text-green-400">// Modifies elements</span>
             </div>
             <div class="bg-black p-4 rounded border border-blue-700/50">
                 <span class="text-purple-400">for</span> (const int& x : vec) { ... } <span class="text-blue-400">// Read only (Best Practice)</span>
             </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-9-3",
        "title": "9.3 Lambda Expressions",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-indigo-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">Anonymous Functions</h1>
        <p class="text-lg text-slate-400">
            Functions inside functions. Essential for algorithms and callbacks.
        </p>

        <div class="mt-8 bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-sm leading-8">
            <span class="text-yellow-400">[captures]</span>
            <span class="text-blue-400">(params)</span>
            <span class="text-purple-400">{ body }</span>
            <br>
            <div class="pl-4 mt-2 text-xs text-gray-400">
                [=] : Capture all by value (Copy)<br>
                [&] : Capture all by reference<br>
                [x] : Capture x by value
            </div>
            
            <div class="mt-4 bg-black p-4 rounded text-green-300 text-xs">
                auto isEven = [](int n) { return n % 2 == 0; };
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-9-4",
        "title": "9.4 Functional Paradigms: std::function",
        "duration": "50 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">First Class Functions</h2>
    
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <p class="text-slate-400 mb-6 text-sm">
            <code>std::function</code> is a type-erased wrapper that can store ANY callable target (Lambda, Function Pointer, Functor).
        </p>
        
        <pre class="bg-black/50 p-4 rounded text-xs text-blue-300 font-mono">
#include &lt;functional&gt;

void sortData(std::vector&lt;int&gt;& data, std::function&lt;bool(int, int)&gt; comparator) {
    // ...
}</pre>
        
        <div class="mt-8 p-4 bg-yellow-900/10 border-l-4 border-yellow-500 text-xs text-yellow-200">
            <strong>Performance Warning:</strong> <code>std::function</code> has virtual call overhead and may allocate memory. For tight loops, use Templates instead!
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-9-5",
        "title": "9.5 Move Semantics & std::move",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-r from-green-900 to-emerald-900 p-8 rounded-3xl shadow-xl">
        <h2 class="text-3xl font-bold text-white mb-4">Stealing Resources</h2>
        <p class="text-green-200 text-sm">
            Moving is just a shallow copy followed by nullifying the source. It turns O(N) copies into O(1) pointer swaps.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mt-8">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-white font-bold mb-4">L-value vs R-value</h3>
             <ul class="text-xs text-gray-400 space-y-2">
                 <li><strong>L-value:</strong> Has a name, has an address. (<code>int x</code>)</li>
                 <li><strong>R-value:</strong> Temporary, no name. (<code>5</code>, <code>x + y</code>, <code>function()</code>)</li>
             </ul>
        </div>
        
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-4">std::move(x)</h3>
            <p class="text-xs text-gray-400 mb-2">
                It actually does NOTHING at runtime. It just casts <code>x</code> to an R-value reference <code>T&&</code>, telling the compiler "You can plunder this object".
            </p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-9-6",
        "title": "9.6 Smart Pointers Recap",
        "duration": "40 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Modern Memory</h2>
        <p class="text-slate-400">Never use <code>new</code> and <code>delete</code> again.</p>
    </div>

    <div class="flex justify-center gap-4 mt-6">
        <div class="bg-blue-900/30 p-4 rounded border border-blue-500 text-blue-300 font-mono text-xs">std::make_unique&lt;T&gt;()</div>
        <div class="bg-purple-900/30 p-4 rounded border border-purple-500 text-purple-300 font-mono text-xs">std::make_shared&lt;T&gt;()</div>
    </div>
    
    <div class="mt-8 text-center text-xs text-gray-500 max-w-lg mx-auto">
        (Covered extensively in Module 3. This lesson reviews them in the context of C++11/14 adoption.)
    </div>
</div>
"""
    },
    {
        "id": "cpp-9-7",
        "title": "9.7 Chrono & Random",
        "duration": "45 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10">
             <h3 class="text-white font-bold mb-2">std::chrono</h3>
             <p class="text-xs text-gray-400 mb-4">Type-safe time library.</p>
             <pre class="bg-black/50 p-4 rounded text-xs text-gray-300 font-mono">
auto start = std::chrono::high_resolution_clock::now();
// ...
auto end = ...;
auto ms = duration_cast&lt;milliseconds&gt;(end - start);</pre>
        </div>
        
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10">
             <h3 class="text-white font-bold mb-2">std::random</h3>
             <p class="text-xs text-gray-400 mb-4">Better than <code>rand()</code>.</p>
             <pre class="bg-black/50 p-4 rounded text-xs text-gray-300 font-mono">
std::mt19937 mt(seed);
std::uniform_int_distribution&lt;int&gt; dist(1, 100);
int roll = dist(mt);</pre>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-9-8",
        "title": "9.8 Lab: Async Event System",
        "duration": "2 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-r from-pink-900 to-purple-900 p-8 rounded-3xl text-center shadow-2xl">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: Event Bus</h1>
        <p class="text-pink-200">Using Lambdas and std::function to drive architecture.</p>
    </div>
    
    <div class="space-y-4">
        <p class="text-slate-400 text-sm">
             Build a pub/sub system where systems can subscribe to events (like "PlayerHit") using lambdas.
        </p>
         <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
             <div class="text-purple-400 font-bold mb-2">// Usage</div>
             <pre class="text-gray-300">
Events::subscribe("PlayerHit", [](Event& e) {
    playSound("ouch.wav");
});

Events::publish("PlayerHit", {10});</pre>
         </div>
    </div>
</div>
"""
    }
]
