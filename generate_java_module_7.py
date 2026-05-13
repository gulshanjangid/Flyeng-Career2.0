def code_block(code, lang="java", filename="Main.java"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">{filename}</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

def key_concept_card(title, content, color="blue"):
    colors = {
        "blue": "border-blue-500/30 bg-blue-900/10 text-blue-400",
        "green": "border-green-500/30 bg-green-900/10 text-green-400",
        "orange": "border-orange-500/30 bg-orange-900/10 text-orange-400",
        "purple": "border-purple-500/30 bg-purple-900/10 text-purple-400",
        "red": "border-red-500/30 bg-red-900/10 text-red-400",
    }
    style = colors.get(color, colors["blue"])
    return f"""
    <div class="p-6 rounded-2xl border {style} mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            {title}
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">{content}</div>
    </div>
    """

module_7_lessons = [
    {
        "title": "7.1 Thread Lifecycle State Machine",
        "emoji": "🔄",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">From Birth to Death</h3>
            <p>A Thread is not just 'running' or 'stopped'. It has a complex lifecycle managed by the OS Scheduler.</p>

            <div class="flex flex-col items-center gap-4 text-xs font-mono my-8 bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                <div class="flex gap-12 items-center">
                    <div class="p-3 bg-slate-800 border border-slate-600 rounded">NEW</div>
                    <div class="text-xl">➡️ start()</div>
                    <div class="p-3 bg-blue-900/50 border border-blue-500 rounded text-blue-300">RUNNABLE</div>
                </div>
                
                <div class="flex gap-8 items-center mt-4">
                     <div class="flex flex-col items-center">
                        <div class="text-xl">⬇️ Scheduler Picks</div>
                        <div class="p-3 bg-green-900/50 border border-green-500 rounded text-green-300 shadow-[0_0_15px_rgba(0,255,0,0.3)]">RUNNING</div>
                     </div>
                </div>

                <div class="flex gap-12 items-center mt-4">
                     <div class="p-3 bg-red-900/50 border border-red-500 rounded text-red-300">BLOCKED / WAITING</div>
                     <div class="text-xl">⬅️ sleep/wait</div>
                </div>

                <div class="text-xl mt-4">⬇️ finish</div>
                <div class="p-3 bg-slate-800 border border-slate-600 rounded text-slate-500">TERMINATED</div>
            </div>

            {key_concept_card("Context Switching", "Switching from Thread A to Thread B is expensive. The CPU must save A's registers, load B's registers, and flush caches. Too many threads = Thrashing (0% progress).", "red")}
        </div>
        """
    },
    {
        "title": "7.2 Synchronization: The Bathroom Key",
        "emoji": "🔑",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Race Condition</h3>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div class="p-6 bg-red-900/10 border border-red-500/30 rounded-2xl">
                    <h4 class="font-bold text-red-400 mb-2">Unsafe (The Race)</h4>
                    <p class="text-xs text-slate-400 mb-2">Two threads read 'count=0' at the same time. Both write '1'. Result: 1 (Should be 2).</p>
                    {code_block("count++;", filename="Unsafe.java")}
                </div>
                <div class="p-6 bg-green-900/10 border border-green-500/30 rounded-2xl">
                    <h4 class="font-bold text-green-400 mb-2">Safe (Locked)</h4>
                    <p class="text-xs text-slate-400 mb-2">Only one thread can hold the 'Key' (Monitor) to this object.</p>
                    {code_block("""
synchronized(this) {
    count++;
}
""", filename="Safe.java")}
                </div>
            </div>

            <div class="bg-blue-900/10 border border-blue-500/30 p-6 rounded-2xl mt-4">
                <h4 class="font-bold text-blue-400 mb-2">The Analogy</h4>
                <p class="text-sm text-slate-300">
                    Imagine a single bathroom (The Object). Multiple people (Threads) want to use it.
                    The <strong>Lock</strong> is the physical key. Only one person can be inside.
                    Others must <strong>WAIT</strong> outside until the key is returned.
                </p>
            </div>
        </div>
        """
    },
    {
        "title": "7.3 ExecutorService: Stop creating `new Thread()`",
        "emoji": "🏭",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Thread Pools</h3>
            <p>Creating a thread takes ~1MB of Stack Memory. Creating 10,000 threads will crash your server.</p>

            {code_block("""
// Reuse a fixed pool of 10 workers
ExecutorService pool = Executors.newFixedThreadPool(10);

for (int i=0; i < 1000; i++) {
    pool.submit(() -> {
        System.out.println("Job processing by " + Thread.currentThread().getName());
    });
}
// 1000 Tasks. 10 Threads. Zero Crashes.
""", filename="Pool.java")}
        </div>
        """
    },
    {
        "title": "7.4 CompletableFuture: Async 2.0",
        "emoji": "🚀",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Callback Hell No More</h3>
            <p>Combine async tasks like a Promise chain in JavaScript.</p>

            {code_block("""
CompletableFuture.supplyAsync(() -> fetchUserData(userId))
    .thenApply(user -> fetchOrders(user))
    .thenAccept(orders -> sendEmail(orders))
    .exceptionally(ex -> {
        log.error("Failed", ex);
        return null;
    });

// Main thread is free to do other work!
""", filename="AsyncCheck.java")}
        </div>
        """
    }
]