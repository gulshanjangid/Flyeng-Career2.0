
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

module_9_lessons = [
    {
        "title": "9.1 Object Anatomy: The Mark Word",
        "emoji": "🔬",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">What IS an Object?</h3>
            <p>At the byte level, every Java Object has a hidden header.</p>

            <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl font-mono text-sm max-w-md mx-auto">
                <div class="bg-blue-900/50 border border-blue-500 p-2 text-center text-blue-200">Mark Word (8 bytes)</div>
                <div class="text-[10px] text-center text-slate-400 mb-2">Hash Code, GC Age, Lock State</div>
                
                <div class="bg-purple-900/50 border border-purple-500 p-2 text-center text-purple-200">Klass Pointer (4 bytes)</div>
                <div class="text-[10px] text-center text-slate-400 mb-2">Points to Class Metadata (Metaspace)</div>
                
                <div class="bg-green-900/50 border border-green-500 p-4 text-center text-green-200">Actual Fields</div>
                <div class="text-[10px] text-center text-slate-400">int x, int y, ...</div>
            </div>

            {key_concept_card("Synchronization Cost", "When you use `synchronized(obj)`, Java modifies the Mark Word of that object. That's why primitive types (int) cannot be locked—they aren't Objects and have no header.", "orange")}
        </div>
        """
    },
    {
        "title": "9.2 The JMM: Happens-Before",
        "emoji": "🧠",
        "content": f"""
        <div class="space-y-8 text-slate-300">
             <h3 class="text-2xl font-bold text-white mb-4">The Java Memory Model</h3>
             <p>Threads have local CPU Caches. They don't always see what Shared Memory holds.</p>
             
             <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                 <h4 class="font-bold text-red-400 mb-2">The Visibility Problem</h4>
                 {code_block("""
boolean running = true;

// Thread 1
while(running) { } // Might loop FOREVER if 'running' is cached in CPU Register!

// Thread 2
running = false; // Thread 1 might never receive this update.
""", filename="InfiniteLoop.java")}
             </div>

             <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl mt-4">
                 <h4 class="font-bold text-green-400 mb-2">The Solution: volatile</h4>
                 <p class="text-sm mb-4">`volatile` forces a Happen-Before relationship. A write to a volatile variable is immediately flushed to Main RAM.</p>
             </div>
        </div>
        """
    },
    {
        "title": "9.3 Garbage Collection Algorithms",
        "emoji": "♻️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Janitor of Java</h3>
            <p>GC deletes objects that are no longer reachable (Unreferenced).</p>

            <div class="space-y-4 mb-8">
                <div class="p-4 bg-slate-900 border border-blue-500/50 rounded-xl">
                    <h5 class="text-blue-400 font-bold">1. G1 GC (Garbage First) - DEFAULT</h5>
                    <p class="text-sm text-slate-400">Splits heap into small regions. Cleans regions with most garbage first to minimize pause time.</p>
                </div>
                <div class="p-4 bg-slate-900 border border-green-500/50 rounded-xl">
                    <h5 class="text-green-400 font-bold">2. ZGC (Low Latency)</h5>
                    <p class="text-sm text-slate-400"><strong>Sub-millisecond pauses!</strong> Colored Pointers allows it to move objects while the app is still running. Essential for heavy microservices.</p>
                </div>
            </div>
        </div>
        """
    },
    {
        "title": "9.4 Mini Project: Memory Leak Simulator",
        "emoji": "🚱",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Intentionally crash the JVM with an <code>OutOfMemoryError</code> to understand leaks.</p>

            {code_block("""
import java.util.*;

public class MemoryLeak {
    // static keeps references alive FOREVER!
    // This 'leak' list is a GC Root.
    private static List<Double> leak = new ArrayList<>();

    public static void main(String[] args) throws InterruptedException {
        System.out.println("Starting leak...");
        
        while (true) {
            // Allocating massive arrays
            Double[] data = new Double[100000]; 
            leak.add(1.0); 
            Thread.sleep(10);
        }
        // Result: Exception in thread "main" java.lang.OutOfMemoryError: Java heap space
    }
}
""", filename="LeakyBucket.java")}
        </div>
        """
    }
]
