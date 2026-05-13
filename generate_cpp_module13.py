
module_13_lessons = [
    {
        "id": "cpp-13-1",
        "title": "13.1 Threading Basics: std::thread",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-indigo-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">Parallel Execution</h1>
        <p class="text-lg text-slate-400">
            <strong>Concurrency</strong> is dealing with a lot of things at once. <strong>Parallelism</strong> is doing a lot of things at once.
        </p>
        <div class="mt-6 bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
            <span class="text-purple-400">#include &lt;thread&gt;</span><br><br>
            <span class="text-blue-300">void</span> task(int id) { ... }<br><br>
            <span class="text-blue-300">int</span> main() {<br>
            &nbsp;&nbsp;std::thread t1(task, 1);<br>
            &nbsp;&nbsp;std::thread t2(task, 2);<br>
            &nbsp;&nbsp;<span class="text-gray-500">// These run SIMULTANEOUSLY on different cores.</span><br>
            &nbsp;&nbsp;t1.join(); <span class="text-green-400">// Wait for t1</span><br>
            &nbsp;&nbsp;t2.join(); <span class="text-green-400">// Wait for t2</span><br>
            }
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-13-2",
        "title": "13.2 Data Races & Mutexes",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-red-900/10 border border-red-500/30 p-8 rounded-2xl">
            <h3 class="text-red-400 font-bold mb-4">The Data Race</h3>
            <p class="text-xs text-slate-300 mb-4">
                When two threads read/write the same memory at the same time without synchronization. Result: <strong>Undefined Behavior</strong>.
            </p>
            <div class="bg-black p-4 rounded font-mono text-xs opacity-70">
                Thread A: x++; (Read 5, Write 6)<br>
                Thread B: x++; (Read 5, Write 6)<br>
                <strong>Result: x is 6, not 7!</strong>
            </div>
        </div>
        
        <div class="bg-green-900/10 border border-green-500/30 p-8 rounded-2xl">
            <h3 class="text-green-400 font-bold mb-4">The Mutex Lock</h3>
            <p class="text-xs text-slate-300 mb-4">
                <code>std::mutex</code> ensures mutual exclusion. Only one thread can hold the lock.
            </p>
            <div class="bg-black p-4 rounded font-mono text-xs">
                std::lock_guard&lt;std::mutex&gt; lock(mu);<br>
                x++; <span class="text-green-400">// Safe zone</span>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-13-3",
        "title": "13.3 Deadlocks & Lock Guards",
        "duration": "50 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">The Deadly Embrace</h2>
    
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <div class="flex justify-center items-center gap-8 mb-8">
            <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">Thread A</div>
            <div class="text-4xl text-red-500">❌</div>
            <div class="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">Thread B</div>
        </div>
        <p class="text-center text-slate-400 text-sm mb-6">
            Thread A holds Lock 1, waits for Lock 2.<br>
            Thread B holds Lock 2, waits for Lock 1.<br>
            <strong>Freeze forever.</strong>
        </p>
        
        <div class="bg-blue-900/10 p-4 border-l-4 border-blue-500 text-xs text-blue-200">
            <strong>Solution:</strong> Always acquire locks in the same order. Or use <code>std::scoped_lock(l1, l2)</code> (C++17) which avoids deadlocks automatically.
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-13-4",
        "title": "13.4 Condition Variables",
        "duration": "55 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-6">Waiting Efficiently</h3>
        <p class="text-slate-400 text-sm mb-6">
            Don't spin in a loop <code>while(!ready) {}</code>. It burns CPU.
            Use <code>std::condition_variable</code> to sleep until notified.
        </p>

        <div class="bg-black/50 p-6 rounded-xl border border-white/5 font-mono text-xs">
            <div class="text-blue-300">Consumer Thread:</div>
            <div class="pl-4">
                std::unique_lock lock(mu);<br>
                cv.wait(lock, []{ return !queue.empty(); });<br>
                <span class="text-green-400">// Awake! Queue has data.</span>
            </div>
            
             <div class="text-purple-300 mt-4">Producer Thread:</div>
            <div class="pl-4">
                queue.push(data);<br>
                cv.notify_one(); <span class="text-yellow-400">// Wake up consumer</span>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-13-5",
        "title": "13.5 Atomics & Lock-Free Programming",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-indigo-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">Going Lock-Free</h1>
        <p class="text-lg text-slate-400">
            Mutexes are slow (syscalls). Atomics use special CPU instructions (Compare-And-Swap) to modify memory safely without sleeping.
        </p>
        
        <div class="mt-8 grid md:grid-cols-2 gap-8">
            <div class="p-6 bg-[#1a1a1a] rounded-xl">
                 <h4 class="text-blue-400 font-bold mb-2">std::atomic&lt;int&gt;</h4>
                 <div class="font-mono text-xs text-gray-400">
                     counter++; <span class="text-green-400">// Thread safe!</span>
                 </div>
                 <p class="mt-2 text-[10px] text-gray-500">Maps to `lock xadd` assembly.</p>
            </div>
            <div class="p-6 bg-[#1a1a1a] rounded-xl">
                 <h4 class="text-purple-400 font-bold mb-2">Memory Ordering</h4>
                 <div class="font-mono text-xs text-gray-400">
                     memory_order_relaxed<br>memory_order_seq_cst
                 </div>
                 <p class="mt-2 text-[10px] text-gray-500">Deep magic. Only for experts.</p>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-13-6",
        "title": "13.6 std::async & Futures",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
     <h2 class="text-3xl font-bold text-white mb-6">High Level Concurrency</h2>
     <p class="text-slate-400 mb-6">
         Stop managing thread lifetimes manually. Just ask the system to "Run this function and give me the result later".
     </p>

     <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-green-500/20">
         <pre class="font-mono text-xs text-slate-300">
<span class="text-gray-500">// Start async task</span>
std::future&lt;int&gt; result = std::async(std::launch::async, heavy_computation);

<span class="text-gray-500">// Do other work...</span>

<span class="text-gray-500">// Get result (Blocks if not ready)</span>
int value = result.get();</pre>
     </div>
</div>
"""
    },
    {
        "id": "cpp-13-7",
        "title": "13.7 Parallel Algorithms (C++17)",
        "duration": "40 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-r from-blue-900 to-cyan-900 p-8 rounded-3xl">
        <h2 class="text-3xl font-bold text-white mb-4">Multi-Core Sorting</h2>
        <p class="text-blue-200 text-sm">
            In C++17, you can parallelize standard algorithms with ONE extra argument.
        </p>
    </div>
    
    <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 mt-6">
         <div class="text-gray-500 text-xs mb-2">Traditional</div>
         <div class="font-mono text-xs bg-black p-2 rounded mb-4">
             std::sort(v.begin(), v.end());
         </div>

         <div class="text-green-400 text-xs mb-2 font-bold">Parallel (uses all cores)</div>
         <div class="font-mono text-xs bg-black p-2 rounded border border-green-500/50">
             std::sort(<span class="text-purple-400">std::execution::par</span>, v.begin(), v.end());
         </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-13-8",
        "title": "13.8 Lab: Thread Pool Implementation",
        "duration": "2.5 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-br from-gray-800 to-black p-8 rounded-3xl text-center shadow-2xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: The Thread Pool</h1>
        <p class="text-gray-400">The most common concurrency pattern in the world.</p>
    </div>

    <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Project Specification</h3>
        <p class="text-slate-400 text-sm">
            Creating threads is expensive (OS overhead). Design a system with N worker threads that pop tasks from a queue and execute them efficiently.
        </p>

        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
            <h4 class="text-purple-400 font-bold mb-4">Architecture</h4>
            <ul class="space-y-4 text-slate-300">
                <li><strong>Workers:</strong> <code>vector&lt;thread&gt;</code> looping forever.</li>
                <li><strong>Task Queue:</strong> <code>queue&lt;function&lt;void()&gt;&gt;</code>.</li>
                <li><strong>Sync:</strong> <code>mutex</code> for queue access, <code>condition_variable</code> to wake workers.</li>
                <li><strong>Shutdown:</strong> A robust way to stop all threads gracefully (join).</li>
            </ul>
        </div>
    </div>
</div>
"""
    }
]
