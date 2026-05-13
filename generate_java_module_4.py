
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

module_4_lessons = [
    {
        "title": "4.1 String Internals: The Constant Pool",
        "emoji": "🧵",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Memory Optimization</h3>
            <p>Strings are immutable bytes. To save RAM, the JVM stores unique strings in a special Heap area called the <strong>Constant Pool</strong>.</p>

            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
                    {code_block("""
String s1 = "Java";
String s2 = "Java";
String s3 = new String("Java");

s1 == s2; // true (Same Pool Address)
s1 == s3; // false (s3 is a new Object on Heap)
""", filename="Pool.java")}
                </div>
                <!-- Visual -->
                <div class="relative h-48 bg-slate-900/50 rounded-xl border border-slate-700 p-4">
                    <div class="absolute top-2 right-2 text-xs text-green-500 font-bold">HEAP</div>
                    <div class="absolute bottom-2 left-4 w-32 h-20 bg-blue-900/20 border border-blue-500/50 rounded flex items-center justify-center text-xs text-blue-400">
                        String Pool
                        <span class="absolute bg-blue-600 text-white px-2 py-0.5 rounded-full -top-2">"Java"</span>
                    </div>
                </div>
            </div>
        </div>
        """
    },
    {
        "title": "4.2 The Collections Framework Map",
        "emoji": "🗺️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Hierarchy</h3>
            <p>Everything is an `Iterable`. Which means everything can be used in a `for-each` loop.</p>

            <div class="flex justify-center my-8">
                 <div class="flex flex-col items-center gap-4 text-xs font-mono">
                     <div class="p-2 border border-purple-500 text-purple-300 bg-purple-900/20 rounded w-48 text-center">Reference: Iterable</div>
                     <div class="h-4 w-0.5 bg-slate-600"></div>
                     <div class="p-2 border border-blue-500 text-blue-300 bg-blue-900/20 rounded w-48 text-center">Interface: Collection</div>
                     <div class="grid grid-cols-3 gap-8 mt-4">
                         <div class="flex flex-col items-center">
                             <div class="p-2 border border-slate-500 rounded">List</div>
                             <div class="text-[10px] text-slate-500 mt-1">Ordered, Duplicates</div>
                         </div>
                         <div class="flex flex-col items-center">
                             <div class="p-2 border border-slate-500 rounded">Set</div>
                             <div class="text-[10px] text-slate-500 mt-1">Unique Only</div>
                         </div>
                         <div class="flex flex-col items-center">
                             <div class="p-2 border border-slate-500 rounded">Queue</div>
                             <div class="text-[10px] text-slate-500 mt-1">FIFO / Priority</div>
                         </div>
                     </div>
                 </div>
            </div>
            
            {key_concept_card("Map is an Outsider", "Map does NOT extend Collection. It deals with Key-Value pairs, not single Elements.", "orange")}
        </div>
        """
    },
    {
        "title": "4.3 Big-O Cheatsheet: List vs Set vs Map",
        "emoji": "⚡",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Know Your Complexity</h3>
            <p>Choosing the wrong collection can kill your app's performance.</p>

            <table class="w-full text-center text-sm text-slate-300 border-collapse border border-slate-700">
                <thead>
                    <tr class="bg-slate-800 text-white">
                        <th class="p-3 text-left">Class</th>
                        <th class="p-3">Access (get)</th>
                        <th class="p-3">Search (contains)</th>
                        <th class="p-3">Insert (add)</th>
                        <th class="p-3">Delete (remove)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-3 text-left font-bold text-blue-400">ArrayList</td><td class="p-3 text-green-500">O(1)</td><td class="p-3 text-red-500">O(N)</td><td class="p-3 text-green-500">O(1)*</td><td class="p-3 text-red-500">O(N)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-3 text-left font-bold text-purple-400">LinkedList</td><td class="p-3 text-red-500">O(N)</td><td class="p-3 text-red-500">O(N)</td><td class="p-3 text-green-500">O(1)</td><td class="p-3 text-green-500">O(1)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-3 text-left font-bold text-orange-400">HashSet / Map</td><td class="p-3 text-green-500">O(1)</td><td class="p-3 text-green-500">O(1)</td><td class="p-3 text-green-500">O(1)</td><td class="p-3 text-green-500">O(1)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-3 text-left font-bold text-yellow-400">TreeSet / Map</td><td class="p-3 text-yellow-500">O(log N)</td><td class="p-3 text-yellow-500">O(log N)</td><td class="p-3 text-yellow-500">O(log N)</td><td class="p-3 text-yellow-500">O(log N)</td></tr>
                </tbody>
            </table>
            <p class="text-xs text-right text-slate-500 mt-2">* Amortized (Resizing array takes time)</p>
        </div>
        """
    },
    {
        "title": "4.4 HashMap Deep Dive: Under the Hood",
        "emoji": "🧠",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Buckets & Collisions</h3>
            <p>HashMaps are an Array of Buckets. `key.hashCode()` determines the index.</p>
            
            <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
                <h4 class="font-bold text-white mb-2">The PUT Process</h4>
                <ol class="list-decimal list-inside space-y-2 text-sm text-slate-400">
                    <li>Compute `hash = key.hashCode()`.</li>
                    <li>Compute `index = hash % array.length`.</li>
                    <li>If bucket is empty -> Put Node there.</li>
                    <li>If bucket matches key (`equals()`) -> Overwrite Value.</li>
                    <li>If bucket has collision -> <strong>Chain</strong> (LinkedList).</li>
                </ol>
            </div>

            {key_concept_card("Java 8 Improvement", "If a single bucket gets too many collisions (>8 items), the LinkedList transforms into a **Red-Black Tree**. This improves worst-case performance from O(N) to O(log N).", "red")}
        </div>
        """
    },
    {
        "title": "4.5 Fail-Fast vs Fail-Safe",
        "emoji": "🧨",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Concurrent Modification</h3>
            <p>What happens if you delete an item from a list WHILE looping over it?</p>

            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 bg-red-900/10 border border-red-500/30 rounded-xl">
                    <h4 class="font-bold text-red-400">Fail-Fast (ArrayList)</h4>
                    <p class="text-xs text-slate-400 mb-2">Throws `ConcurrentModificationException` immediately.</p>
                    {code_block("""
for(String s : list) {
    list.remove(s); // CRASH!
}
""", filename="Crash.java")}
                </div>
                <div class="p-4 bg-green-900/10 border border-green-500/30 rounded-xl">
                     <h4 class="font-bold text-green-400">Fail-Safe (ConcurrentHashMap)</h4>
                     <p class="text-xs text-slate-400 mb-2">Works on a view/copy. No Exception.</p>
                     {code_block("""
for(String k : map.keySet()) {
    map.remove(k); // Safe.
}
""", filename="Safe.java")}
                </div>
            </div>
        </div>
        """
    },
    {
        "title": "4.6 Mini Project: LRU Cache",
        "emoji": "💾",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Implement a Least Recently Used Cache using `LinkedHashMap`.</p>

            {code_block("""
import java.util.LinkedHashMap;
import java.util.Map;

// accessOrder = true means 'Sort by Access Time', not Insert Time
public class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int capacity;

    public LRUCache(int capacity) {
        super(capacity, 0.75f, true); 
        this.capacity = capacity;
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity; // Auto-delete oldest accessed item
    }

    public static void main(String[] args) {
        LRUCache<String, Integer> cache = new LRUCache<>(2);
        cache.put("A", 1);
        cache.put("B", 2);
        cache.get("A"); // A is now 'newest'
        cache.put("C", 3); // B is evicted (oldest) because A was just used
        
        System.out.println(cache.keySet()); // [A, C]
    }
}
""", filename="LRUCache.java")}
        </div>
        """
    }
]