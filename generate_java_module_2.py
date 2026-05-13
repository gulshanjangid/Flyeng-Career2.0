
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

module_2_lessons = [
    {
        "title": "2.1 Control Flow: Declarative Logic",
        "emoji": "🚦",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Death of `if-else`</h3>
                <p class="leading-relaxed mb-6">
                    In modern Java, we prefer **Expressions** (return a value) over **Statements** (do a side-effect).
                </p>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                        <h4 class="font-bold text-red-400 mb-2">Old School (Imperative)</h4>
                        {code_block("""
String type;
if (day == "SAT") {
    type = "Weekend";
} else {
    type = "Workday";
}
""", filename="Imperative.java")}
                    </div>
                    <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl">
                        <h4 class="font-bold text-green-400 mb-2">Modern (Declarative)</h4>
                        {code_block("""
String type = switch(day) {
    case "SAT" -> "Weekend";
    default    -> "Workday";
};
""", filename="SwitchExpr.java")}
                    </div>
                </div>
            </section>
        </div>
        """
    },
    {
        "title": "2.2 Loops: Performance & Labels",
        "emoji": "🔄",
        "content": f"""
        <div class="space-y-8 text-slate-300">
             <div class="p-6 bg-[#111] border border-slate-800 rounded-2xl mb-8">
                 <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2"><span class="text-yellow-500">⚡</span> Performance Truth</h3>
                 <p class="text-sm text-slate-400">
                    Standard `for(int i=0; i<n; i++)` is theoretically faster for Primitive Arrays (`int[]`) than `for-each` because it avoids Iterator object allocation. 
                    However, the **JIT Compiler** usually optimizes both to identical Assembly code. Rule: **Optimize for Readability first.**
                 </p>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4">Labeled Breaks</h3>
            <p>Breaking out of nested loops without `goto`.</p>
            {code_block("""
search: // Label
for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
        if (arr[i][j] == target) {
            System.out.println("Found!");
            break search; // Breaks BOTH loops
        }
    }
}
""", filename="Labels.java")}
        </div>
        """
    },
    {
        "title": "2.3 The Stack Frame: Method Internals",
        "emoji": "🥞",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">What happens when you call a method?</h3>
            <p>The JVM pushes a **Stack Frame** onto the thread's stack. It contains:</p>
            
            <div class="grid grid-cols-1 gap-4 max-w-xl mx-auto font-mono text-sm text-center">
                <div class="bg-slate-800 p-4 rounded border border-slate-600">
                    <div class="font-bold text-white mb-2">Local Variables Array</div>
                    <div class="text-xs text-slate-400">[ this, arg0, arg1, varX ]</div>
                </div>
                <div class="text-2xl text-slate-600">⬇️</div>
                <div class="bg-slate-800 p-4 rounded border border-slate-600">
                    <div class="font-bold text-white mb-2">Operand Stack</div>
                    <div class="text-xs text-slate-400">Scratchpad for math (e.g., executing `a + b`)</div>
                </div>
                <div class="text-2xl text-slate-600">⬇️</div>
                <div class="bg-slate-800 p-4 rounded border border-slate-600">
                    <div class="font-bold text-white mb-2">Frame Data</div>
                    <div class="text-xs text-slate-400">Return Address, Exception Table</div>
                </div>
            </div>

            {key_concept_card("StackOverflowError", "If you recurse infinitely, you fill up the stack with frames. It's a memory limit, usually a few MB per thread.", "red")}
        </div>
        """
    },
    {
        "title": "2.4 OOP: Blueprints vs Reality",
        "emoji": "🏗️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="p-6 border border-dashed border-slate-500 rounded-2xl bg-slate-900/50">
                    <h4 class="text-xl font-bold text-center text-white mb-2">Class (Blueprint)</h4>
                    <p class="text-sm text-center text-slate-400">Code on Disk. Defines structure.</p>
                </div>
                <div class="space-y-4">
                    <div class="p-4 border border-green-500/50 rounded-xl bg-green-900/10 text-center">
                        <h5 class="font-bold text-white">Object 1 (Heap)</h5>
                        <div class="text-xs text-slate-400">Color: Red</div>
                    </div>
                    <div class="p-4 border border-green-500/50 rounded-xl bg-green-900/10 text-center">
                        <h5 class="font-bold text-white">Object 2 (Heap)</h5>
                        <div class="text-xs text-slate-400">Color: Blue</div>
                    </div>
                </div>
            </div>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Pass-by-Value (The Truth)</h3>
            <p>Java is <strong>ALWAYS Pass-by-Value</strong>.</p>
            <ul class="list-disc list-inside text-sm text-slate-400 space-y-2">
                <li>For Primitives: It copies the bits (the number).</li>
                <li>For Objects: It copies the <strong>Reference</strong> (the address bits), NOT the object itself.</li>
            </ul>

            {code_block("""
void reset(Point p) {
    p = new Point(0,0); // Changes LOCAL copy of the address.
    // Original 'p' in main() still points to the old object!
}
""", filename="Tricky.java")}
        </div>
        """
    },
    {
        "title": "2.5 Constructors: The Birth of an Object",
        "emoji": "🔨",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            {key_concept_card("Constructor Chaining", "Use `this()` to call another constructor in the same class. Helps avoid code duplication.", "purple")}
            
            {code_block("""
public User(String name) {
    this(name, "GUEST"); // Calls the main constructor
}
public User(String name, String role) {
    this.name = name;
    this.role = role;
}
""", filename="User.java")}

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Static Initializers</h3>
            <p>Code that runs ONCE when the class is loaded by the ClassLoader, before any object exists.</p>
            {code_block("""
static {
    System.out.println("Class Loading...");
    // Connect to DB, Load Config
}
""", filename="StaticBlock.java")}
        </div>
        """
    },
    {
        "title": "2.6 Garbage Collection: The Cleaner",
        "emoji": "🗑️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Reachability Analysis</h3>
            <p>The GC starts at <strong>GC Roots</strong> (Stack Variables, Static Vars). It traverses the graph. Anything not connected is marked for death.</p>
            
            <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
                <div class="flex justify-center items-center gap-4">
                    <div class="p-2 bg-green-500 text-black font-bold rounded">Root (Stack)</div>
                    <div>➡️</div>
                    <div class="p-2 bg-blue-500 text-black rounded">Obj A</div>
                    <div>➡️</div>
                    <div class="p-2 bg-blue-500 text-black rounded">Obj B</div>
                </div>
                <div class="flex justify-center items-center gap-4 mt-8 opacity-50">
                    <div class="p-2 bg-red-500 text-black rounded">Obj C</div>
                    <div>🔄</div>
                    <div class="p-2 bg-red-500 text-black rounded">Obj D</div>
                    <div class="text-xs text-red-400 ml-2">(Island of Isolation: Deleted!)</div>
                </div>
            </div>
            
            {key_concept_card("NPE", "The Billion Dollar Mistake. Accessing fields on `null` crashes the program because there is no object at 0x0.", "red")}
        </div>
        """
    },
    {
        "title": "2.7 Mini Project: Bank Account",
        "emoji": "🏦",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Implement Encapsulation and Invariant Checks.</p>

            {code_block("""
public class BankAccount {
    // 1. Data Hiding (Private)
    private double balance;

    // 2. Controlled Access (Public Methods)
    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Invalid amount");
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount > balance) throw new IllegalStateException("Insufficient funds");
        balance -= amount;
    }
}
""", filename="BankAccount.java")}
        </div>
        """
    }
]
