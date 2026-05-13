
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

module_13_lessons = [
    {
        "title": "13.1 Singleton: The Right Way",
        "emoji": "1️⃣",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">One Object to Rule Them All</h3>
            <p>Database connections, Logging configs. You only need one.</p>

            {code_block("""
// The 'Enum' Singleton (Joshua Bloch's Recommendation)
// Why? It is Thread-Safe, Reflection-Safe, and Serialization-Safe.
public enum Database {
    INSTANCE;
    
    public void connect() { ... }
}

// Usage
Database.INSTANCE.connect();
""", filename="Singleton.java")}
        </div>
        """
    },
    {
        "title": "13.2 Strategy Pattern: Swappable Brains",
        "emoji": "🧠",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Composition over Inheritance</h3>
            <p>Don't code algorithms inside the class. Pass them in.</p>

            {code_block("""
interface PaymentStrategy {
    void pay(int amount);
}

class CreditCard implements PaymentStrategy { ... }
class PayPal implements PaymentStrategy { ... }

class Cart {
    // We compose the strategy
    void checkout(PaymentStrategy algo) {
        algo.pay(total);
    }
}
""", filename="Strategy.java")}
            
            <p class="text-sm mt-4">Java's `Collections.sort(list, comparator)` is the Strategy Pattern! The Comparator is the strategy.</p>
        </div>
        """
    },
    {
        "title": "13.3 Observer Pattern: Event Driven",
        "emoji": "📡",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Don't call. Listen.</h3>
            <p>When state changes, notify subscribers.</p>

            {code_block("""
class YouTubeChannel {
    List<Subscriber> subs = new ArrayList<>();
    
    void upload(String video) {
        for(var sub : subs) sub.notify(video);
    }
}
""", filename="Observer.java")}
        </div>
        """
    }
]
