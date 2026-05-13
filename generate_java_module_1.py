
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

module_1_lessons = [
    {
        "title": "1.1 The Java Landscape 2026: Why It Matters",
        "emoji": "🌍",
        "content": f"""
        <div class="space-y-12 text-slate-300 font-light">
            
            <section>
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">The Titan of Backend</h2>
                <p class="text-xl text-slate-400 max-w-2xl leading-relaxed mb-6">
                    Java is not a "legacy" language. It is the operating system of the Enterprise. 
                    In 2026, <strong class="text-white">55 Billion devices</strong> run Java, from AWS Lambda to Android phones to Mars rovers.
                </p>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-[#111] p-6 rounded-2xl border border-white/5">
                        <h4 class="text-xl font-bold text-yellow-400 mb-2">Python</h4>
                        <p class="text-sm">King of AI & Scripts. Fast to write, slow to run (GIL).</p>
                    </div>
                    <div class="bg-[#111] p-6 rounded-2xl border border-orange-500/50 relative shadow-2xl shadow-orange-900/20 transform md:-translate-y-2">
                        <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">Our Focus</div>
                        <h4 class="text-xl font-bold text-orange-400 mb-2">Java</h4>
                        <p class="text-sm">King of Enterprise. Balances dev speed with raw performance. Truly multi-threaded.</p>
                    </div>
                    <div class="bg-[#111] p-6 rounded-2xl border border-white/5">
                        <h4 class="text-xl font-bold text-blue-400 mb-2">C++ / Rust</h4>
                        <p class="text-sm">King of Hardware. Manual memory. Maximum performance, slow development.</p>
                    </div>
                </div>
            </section>

            <section>
                <h3 class="text-2xl font-bold text-white mb-8">The "Onion" Architecture</h3>
                <div class="flex justify-center my-8">
                    <div class="relative w-64 h-64 flex items-center justify-center rounded-full bg-orange-900/20 border-2 border-orange-500/30">
                        <div class="absolute -top-6 text-orange-500 font-bold">JDK (Kit)</div>
                        <div class="relative w-48 h-48 flex items-center justify-center rounded-full bg-blue-900/20 border-2 border-blue-500/30">
                            <div class="absolute -top-6 text-blue-500 font-bold">JRE (Env)</div>
                            <div class="relative w-32 h-32 flex items-center justify-center rounded-full bg-green-900/20 border-2 border-green-500/30">
                                <div class="text-green-500 font-bold">JVM</div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="space-y-2 text-sm text-slate-400">
                    <li><strong class="text-green-400">JVM (Java Virtual Machine):</strong> The engine that runs code.</li>
                    <li><strong class="text-blue-400">JRE (Runtime Environment):</strong> JVM + Libraries (Strings, Lists).</li>
                    <li><strong class="text-orange-400">JDK (Development Kit):</strong> JRE + Compilers (javac) + Debuggers.</li>
                </ul>
            </section>
        </div>
        """
    },
    {
        "title": "1.2 Inside the JVM: Loading, Linking, Init",
        "emoji": "🧠",
        "content": f"""
        <div class="space-y-12 text-slate-300 font-light">
            <h3 class="text-2xl font-bold text-white mb-4">How Java Actually Starts</h3>
            <p>When you type `java Main`, a complex 3-step dance happens before your `main()` method ever runs.</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-2 font-mono text-xs text-center">
                <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                    <div class="text-xl mb-2">1. Loading 📥</div>
                    <div class="text-slate-400">Finds `.class` file on disk. Reads bytes into Method Area.</div>
                </div>
                <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                    <div class="text-xl mb-2">2. Linking 🔗</div>
                    <div class="text-slate-400">Verifies Bytecode safety. Allocates static variables (0/null).</div>
                </div>
                <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                    <div class="text-xl mb-2">3. Initialization 🚀</div>
                    <div class="text-slate-400">Runs `static {{ }}` blocks. Assigns real values to statics.</div>
                </div>
            </div>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Classpath Hell</h3>
            <p>The JVM doesn't know about your files. It only knows the <strong>Classpath</strong>.</p>
            <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                <h4 class="text-red-400 font-bold mb-2">The "NoClassDefFoundError" Nightmare</h4>
                <p class="text-sm text-slate-400 mb-4">This error means the class was present compile-time, but MISSING at runtime.</p>
                {code_block("""
# Wrong
java Main

# Right (Explicit Classpath)
java -cp libs/guava.jar:libs/commons.jar:. Main
""", filename="Terminal", lang="bash")}
            </div>
        </div>
        """
    },
    {
        "title": "1.3 Setup: SDKMAN (The Pro Way)",
        "emoji": "🛠️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Stop Downloading ZIPs!</h3>
            <p>Real engineers use Version Managers. You might work on a Legacy project (Java 8) and a Modern Microservice (Java 23) on the same day.</p>

            {code_block("""
# 1. Install SDKMAN (Linux/Mac/WSL)
curl -s "https://get.sdkman.io" | bash

# 2. List available Java versions (Amazon, GraalVM, etc)
sdk list java

# 3. Install Specific Version
sdk install java 21.0.2-tem

# 4. Switch context instantly
sdk use java 21.0.2-tem
""", lang="bash", filename="terminal")}

            {key_concept_card("Why 21?", "Java 21 is the latest **LTS** (Long Term Support). It introduced Virtual Threads, making Java faster than Go for concurrency.", "purple")}
        </div>
        """
    },
    {
        "title": "1.4 Anatomy of an Entry Point",
        "emoji": "🧬",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <p>Every keyword in `public static void main` exists for a specific architectural reason.</p>

            {code_block("""
package com.flyeng.core; // Namespace

public class Main {
    // The Entry Point
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
""", filename="Main.java")}

            <div class="bg-slate-900 p-6 rounded-xl border border-slate-700 space-y-4 text-sm">
                <div class="flex gap-4"><span class="font-mono text-orange-400 min-w-[80px]">public</span> <span>So the JVM (which is outside your package) can call it.</span></div>
                <div class="flex gap-4"><span class="font-mono text-orange-400 min-w-[80px]">static</span> <span>So the JVM can call it WITHOUT creating an object (`new Main()`). The app hasn't started yet!</span></div>
                <div class="flex gap-4"><span class="font-mono text-orange-400 min-w-[80px]">void</span> <span>Process returns exit code (0 or 1), not a value.</span></div>
                <div class="flex gap-4"><span class="font-mono text-orange-400 min-w-[80px]">String[]</span> <span>Command line arguments parsed by the shell.</span></div>
            </div>
        </div>
        """
    },
    {
        "title": "1.5 Type System: Primitives vs References",
        "emoji": "🥞",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-[#0f1014] p-6 rounded-2xl border border-slate-800">
                    <h4 class="text-xl font-bold text-yellow-400 mb-4">The Stack 🥞</h4>
                    <p class="text-sm mb-4">Stores <strong>Primitives</strong> (`int`, `boolean`) and <strong>References</strong> (Pointers).</p>
                    <div class="font-mono text-xs text-slate-400 bg-slate-900 p-2 rounded">int x = 10; <br> User u = 0x123;</div>
                </div>
                <div class="bg-[#0f1014] p-6 rounded-2xl border border-slate-800">
                    <h4 class="text-xl font-bold text-green-400 mb-4">The Heap 🏟️</h4>
                    <p class="text-sm mb-4">Stores actual <strong>Objects</strong>. Managed by Garbage Collector.</p>
                    <div class="font-mono text-xs text-slate-400 bg-slate-900 p-2 rounded">Object(0x123) {{ name: "A" }}</div>
                </div>
            </div>

            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700">
                <thead><tr class="bg-slate-800 text-white"><th class="p-4">Type</th><th class="p-4">Size</th><th class="p-4">Use Case</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-4 font-mono text-orange-400">int</td><td class="p-4">32-bit</td><td class="p-4">Default numbers (+/- 2B)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-mono text-orange-400">long</td><td class="p-4">64-bit</td><td class="p-4">IDs, Timestamps (`L` suffix)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-mono text-orange-400">double</td><td class="p-4">64-bit</td><td class="p-4">Math (15 decimal precision)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-mono text-orange-400">boolean</td><td class="p-4">vm-dep</td><td class="p-4">Flags (true/false)</td></tr>
                </tbody>
            </table>
        </div>
        """
    },
    {
        "title": "1.6 Operators: Bitwise Tricks",
        "emoji": "✨",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Interview Favorites</h3>
            <p>You know `+` and `-`. Let's look at the low-level bits.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-slate-900 p-4 rounded-xl">
                     <h4 class="font-bold text-blue-400">XOR (^)</h4>
                     <p class="text-xs text-slate-400">Returns 1 if bits are different. 0 if same.</p>
                     {code_block("5 ^ 5 // 0 (Self cancel)", filename="Bitwise.java")}
                </div>
                <div class="bg-slate-900 p-4 rounded-xl">
                     <h4 class="font-bold text-purple-400">Shift (<<)</h4>
                     <p class="text-xs text-slate-400">Multiply by 2^n. Extremely fast.</p>
                     {code_block("2 << 3 // 16 (2 * 2^3)", filename="Bitwise.java")}
                </div>
            </div>
        </div>
        """
    },
    {
        "title": "1.7 The `var` Keyword",
        "emoji": "🔮",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Cermony Removal</h3>
            <p>Java 10 introduced Type Inference. It is NOT dynamic typing. The compiler just fills in the blank.</p>
            
            {code_block("""
// Verbose
Map<String, List<Integer>> cache = new HashMap<>();

// Clean
var cache = new HashMap<String, List<Integer>>();

// cache = "Hello"; // ERROR! It is strongly typed as Map.
""", filename="Inference.java")}
        </div>
        """
    },
    {
        "title": "1.8 Mini Project: CLI Mortgage Calculator",
        "emoji": "💸",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Build a real financial tool using `Scanner` and `NumberFormat`.</p>

            {code_block("""
import java.text.NumberFormat;
import java.util.Scanner;

public class MortgageCalc {
    public static void main(String[] args) {
        final byte MONTHS_IN_YEAR = 12;
        final byte PERCENT = 100;

        Scanner scanner = new Scanner(System.in);

        System.out.print("Principal ($1K - $1M): ");
        int principal = scanner.nextInt();

        System.out.print("Annual Interest Rate: ");
        float annualInterest = scanner.nextFloat();
        float monthlyInterest = annualInterest / PERCENT / MONTHS_IN_YEAR;

        System.out.print("Period (Years): ");
        byte years = scanner.nextByte();
        int numberOfPayments = years * MONTHS_IN_YEAR;

        double mortgage = principal
                * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

        String mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage);
        System.out.println("Mortgage: " + mortgageFormatted);
    }
}
""", filename="MortgageCalc.java")}
        </div>
        """
    }
]
