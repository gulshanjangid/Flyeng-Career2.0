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

module_6_lessons = [
    {
        "title": "6.1 Lambda Expressions: The Revolution",
        "emoji": "🏹",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Why do we need Lambdas?</h3>
                <p class="leading-relaxed mb-4">
                    For 20 years (Java 1.0 to 1.7), Java was purely an <strong>Object-Oriented</strong> language. 
                    If you wanted to pass "behavior" (code) to a function, you couldn't just pass a function. 
                    You had to wrap it in an Object (Anonymous Inner Class). This was verbose, ugly, and conceptually heavy.
                </p>
                <p class="leading-relaxed mb-6">
                    Java 8 introduced <strong>Lambda Expressions</strong>, bringing <strong>Functional Programming</strong> capabilities to the JVM. 
                    This allows you to treat code as data, passing behavior around as easily as you pass strings or integers.
                </p>
            </section>

            <section>
                <h4 class="text-xl font-bold text-blue-400 mb-4">Evolution of Behavior Parameterization</h4>
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                        <h5 class="text-red-400 font-bold mb-2">🐢 Pre-Java 8 (Anonymous Class)</h5>
                        <p class="text-xs text-slate-400 mb-2">Notice the "Ceremony" code (new Interface... @Override...)</p>
                        {code_block("""
// 5 lines for a simple print!
button.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.println("Clicked");
    }
});
""", filename="Old.java")}
                    </div>
                    <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl">
                        <h5 class="text-green-400 font-bold mb-2">🚀 Java 8+ (Lambda)</h5>
                        <p class="text-xs text-slate-400 mb-2">Focus purely on the logic.</p>
                        {code_block("""
// (Params) -> { Body }
button.addActionListener(e -> System.out.println("Clicked"));
""", filename="New.java")}
                    </div>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">Key Characteristics of Lambdas</h4>
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
                    <ul class="space-y-4 text-sm">
                        <li class="flex gap-3">
                            <span class="text-green-400 font-bold min-w-[120px]">1. Anonymous</span>
                            <span class="text-slate-400">It has no name. It is defined right where it is used.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-green-400 font-bold min-w-[120px]">2. Function</span>
                            <span class="text-slate-400">It doesn't belong to a class (conceptually). It has a parameter list, body, and return type.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-green-400 font-bold min-w-[120px]">3. Passed Around</span>
                            <span class="text-slate-400">It can be passed as an argument or stored in a variable.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-green-400 font-bold min-w-[120px]">4. Lexical Scoping</span>
                            <span class="text-slate-400">Unlike Anonymous Classes, `this` inside a lambda refers to the <strong>enclosing class</strong>, not the lambda itself.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {key_concept_card("Target Type Inference", "How does Java know what `e` is? It looks at the method signature (Context). If `ActionListener` expects an `ActionEvent`, Java infers that `e` is of type `ActionEvent`.", "purple")}

        </div>
        """
    },
    {
        "title": "6.2 Functional Interfaces: The Contract",
        "emoji": "📜",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Rules of Engagement</h3>
                <p class="leading-relaxed mb-4">
                    A Lambda Expression is not magic. It is basically an implementation of a <strong>Functional Interface</strong>.
                </p>
                <div class="bg-slate-900 border-l-4 border-blue-500 p-4 mb-6">
                    <p class="font-bold text-white">Definition:</p>
                    <p class="text-slate-400 text-sm mt-1">
                        A Functional Interface is an interface that specifies <strong>EXACTLY ONE</strong> abstract method. 
                        (It can have many `default` or `static` methods, but only ONE abstract method).
                    </p>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">The `@FunctionalInterface` Annotation</h4>
                <p class="text-sm text-slate-400 mb-2">This annotation is optional, but highly recommended as it forces the compiler to check your contract.</p>
                {code_block("""
@FunctionalInterface
public interface Calculator {
    // The ONE abstract method (The Contract)
    int calculate(int a, int b);

    // Default methods make it flexible, but don't break the rule
    default void printInfo() { 
        System.out.println("I am a calculator"); 
    }
}
""", filename="Calculator.java")}
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">The "Big 4" Standard Interfaces</h4>
                <p class="text-sm text-slate-400 mb-4">Java provides `java.util.function` so you don't have to write your own interfaces.</p>
                
                <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700">
                    <thead>
                        <tr class="bg-slate-800 text-white">
                            <th class="p-4 border-b border-slate-600">Interface</th>
                            <th class="p-4 border-b border-slate-600">Signature</th>
                            <th class="p-4 border-b border-slate-600">Role</th>
                            <th class="p-4 border-b border-slate-600">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-slate-900/50">
                            <td class="p-4 border-b border-slate-700 font-mono text-green-400">Predicate&lt;T&gt;</td>
                            <td class="p-4 border-b border-slate-700 font-mono">T -> boolean</td>
                            <td class="p-4 border-b border-slate-700">Filter/Test</td>
                            <td class="p-4 border-b border-slate-700"><code class="bg-black p-1 rounded">x -> x > 10</code></td>
                        </tr>
                        <tr>
                            <td class="p-4 border-b border-slate-700 font-mono text-blue-400">Consumer&lt;T&gt;</td>
                            <td class="p-4 border-b border-slate-700 font-mono">T -> void</td>
                            <td class="p-4 border-b border-slate-700">Action/Print</td>
                            <td class="p-4 border-b border-slate-700"><code class="bg-black p-1 rounded">s -> System.out.println(s)</code></td>
                        </tr>
                        <tr class="bg-slate-900/50">
                            <td class="p-4 border-b border-slate-700 font-mono text-yellow-400">Function&lt;T,R&gt;</td>
                            <td class="p-4 border-b border-slate-700 font-mono">T -> R</td>
                            <td class="p-4 border-b border-slate-700">Transform/Map</td>
                            <td class="p-4 border-b border-slate-700"><code class="bg-black p-1 rounded">s -> s.length()</code></td>
                        </tr>
                        <tr>
                            <td class="p-4 border-b border-slate-700 font-mono text-purple-400">Supplier&lt;T&gt;</td>
                            <td class="p-4 border-b border-slate-700 font-mono">() -> T</td>
                            <td class="p-4 border-b border-slate-700">Factory/Generate</td>
                            <td class="p-4 border-b border-slate-700"><code class="bg-black p-1 rounded">() -> Math.random()</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>

        </div>
        """
    },
    {
        "title": "6.3 Stream API: Internal vs External Iteration",
        "emoji": "🌊",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">A Paradigm Shift in Loops</h3>
                <p class="leading-relaxed mb-6">
                    Before Java 8, we managed loops manually. This is called <strong>External Iteration</strong>. 
                    You control the flow, the index, and the checks. 
                    Streams introduced <strong>Internal Iteration</strong>, where you tell Java <em>what</em> needs to be done, and the library handles the traversal (including parallelization!).
                </p>

                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <div class="border border-slate-700 p-6 rounded-xl bg-slate-900">
                        <h4 class="font-bold text-slate-300 mb-2">External Iteration</h4>
                        <div class="text-xs text-slate-500 mb-4">We are the manager. "Get next. Is it null? Process."</div>
                        {code_block("""
List<String> names = new ArrayList<>();
for(User u : users) {
    if(u.age > 18) {
        names.add(u.name);
    }
}
""", filename="ForLoop.java")}
                    </div>
                    <div class="border border-green-500/30 p-6 rounded-xl bg-green-900/10">
                        <h4 class="font-bold text-green-400 mb-2">Internal Iteration</h4>
                        <div class="text-xs text-slate-500 mb-4">We are the client. "Here is the logic, you run it."</div>
                        {code_block("""
List<String> names = users.stream()
    .filter(u -> u.age > 18)
    .map(u -> u.name)
    .toList();
""", filename="Stream.java")}
                    </div>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">Deep Dive: Lazy Evaluation</h4>
                <p class="text-sm text-slate-400 mb-4">
                    Streams are NOT collections. They are views that compute on demand.
                </p>
                <div class="relative p-6 bg-slate-900 border border-slate-700 rounded-xl overflow-x-auto mb-8">
                     <div class="flex items-center gap-6 text-sm font-mono min-w-[700px]">
                        <div class="p-2 border border-slate-500 rounded bg-slate-800">Source (List)</div>
                        <div>➡️</div>
                        <div class="p-2 border border-blue-500 rounded bg-blue-900/20 text-blue-300">Op: Filter (Lazy)</div>
                        <div>➡️</div>
                        <div class="p-2 border border-blue-500 rounded bg-blue-900/20 text-blue-300">Op: Map (Lazy)</div>
                        <div>➡️</div>
                        <div class="p-2 border border-green-500 rounded bg-green-900/20 text-green-300 animate-pulse">Terminal: Collect (Eager)</div>
                     </div>
                     <p class="mt-4 text-xs text-slate-400">
                        <strong>Performance Concept:</strong> Java fuses `filter` and `map` into a SINGLE pass over the data. 
                        It does not create intermediate lists. This is called <strong>Loop Fusion</strong>.
                     </p>
                </div>
            </section>

            {key_concept_card("Streams are Once-Off", "A Stream cannot be reused! Once the terminal operation triggers, the stream is closed. If you try to use it again, you get an `IllegalStateException`.", "red")}

        </div>
        """
    },
    {
        "title": "6.4 Collectors & Methodology",
        "emoji": "🗂️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Aggregation Powerhouse</h3>
                <p class="leading-relaxed mb-4">
                    The `collect()` method is a generic strategy for reducing a stream into a mutable result container. 
                    The `Collectors` utility class provides factories for common reductions.
                </p>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">Common Collection Strategies</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-green-400">Accumulation</div>
                        <div class="text-xs text-slate-500 mb-2">toList, toSet, toCollection</div>
                        <code class="text-xs text-slate-300">.collect(Collectors.toSet())</code>
                    </div>
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-blue-400">Join</div>
                        <div class="text-xs text-slate-500 mb-2">Concatenate Strings</div>
                        <code class="text-xs text-slate-300">.collect(Collectors.joining(", "))</code>
                    </div>
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-purple-400">Math</div>
                        <div class="text-xs text-slate-500 mb-2">Summarizing Int/Double</div>
                        <code class="text-xs text-slate-300">.collect(Collectors.summarizingInt(x -> x))</code>
                    </div>
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-orange-400">Grouping</div>
                        <div class="text-xs text-slate-500 mb-2">SQL 'GROUP BY' equivalent</div>
                        <code class="text-xs text-slate-300">.collect(Collectors.groupingBy(...))</code>
                    </div>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">Complex Grouping Example</h4>
                {code_block("""
import java.util.stream.Collectors;

// Goal: Group Transactions by Currency, and sum the amounts.
Map<String, Double> revenueByCurrency = transactions.stream()
    .collect(Collectors.groupingBy(
        Transaction::getCurrency,              // Key Mapper
        Collectors.summingDouble(Transaction::getAmount) // Value Mapper (Downstream)
    ));

// Goal: Partition into High vs Low value
Map<Boolean, List<Transaction>> partitioned = transactions.stream()
    .collect(Collectors.partitioningBy(t -> t.getAmount() > 1000));
""", filename="Report.java")}
            </section>

        </div>
        """
    },
    {
        "title": "6.5 Optional: The Null-Safety Container",
        "emoji": "🛡️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Solution to NullPointerExceptions</h3>
                <p class="leading-relaxed mb-4">
                    Tony Hoare, the inventor of the Null Reference, calls it his "Billion Dollar Mistake". 
                    `Optional&lt;T&gt;` is a container object used to contain not-null objects. 
                    It forces the API user to think: "What if this is empty?"
                </p>
                
                <div class="flex gap-8 mb-8 justify-center">
                    <div class="bg-slate-900 border border-green-500/50 p-4 rounded-xl text-center w-32">
                        <div class="text-2xl mb-2">📦</div>
                        <div class="font-bold text-green-400">Optional.of(val)</div>
                        <div class="text-[10px] text-slate-400">Contains Value</div>
                    </div>
                    <div class="bg-slate-900 border border-slate-700 p-4 rounded-xl text-center w-32 opacity-50">
                        <div class="text-2xl mb-2">💨</div>
                        <div class="font-bold text-slate-400">Optional.empty()</div>
                        <div class="text-[10px] text-slate-500">Contains Nothing</div>
                    </div>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">Best Practices Checklist</h4>
                <ul class="space-y-2 text-sm text-slate-400 bg-slate-900 p-6 rounded-xl border border-slate-700">
                    <li class="flex items-center gap-2">✅ <strong>Do:</strong> Use it as a return type for methods that might not find a result.</li>
                    <li class="flex items-center gap-2">❌ <strong>Don't:</strong> Use it as a field in a class (Not Serializable).</li>
                    <li class="flex items-center gap-2">❌ <strong>Don't:</strong> Use it as a parameter for methods (Just overload the method).</li>
                    <li class="flex items-center gap-2">✅ <strong>Do:</strong> Use `map`, `flatMap`, and `orElse` instead of `if(opt.isPresent())`.</li>
                </ul>
            </section>

            {code_block("""
// The Functional Way
public String getUserName(int id) {
    return findUserById(id)          // Returns Optional<User>
        .map(User::getName)          // If user exists, get name
        .filter(n -> !n.isEmpty())   // If name is not empty
        .orElse("Anonymous");        // Else default
}
""", filename="SafeCode.java")}

        </div>
        """
    }
]