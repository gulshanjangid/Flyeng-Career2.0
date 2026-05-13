
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

module_3_lessons = [
    {
        "title": "3.1 OOP Pillars: The Philosophies",
        "emoji": "🏛️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Modeling Reality</h3>
            <p>Object-Oriented Programming (OOP) is about organizing code into "Things" (Objects) that have State and Behavior.</p>

            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl">
                    <h4 class="font-bold text-blue-400">Encapsulation</h4>
                    <p class="text-xs text-slate-400">Protecting data. Access via methods.</p>
                </div>
                <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl">
                    <h4 class="font-bold text-green-400">Inheritance</h4>
                    <p class="text-xs text-slate-400">Reusing code. "Is-A" relationship.</p>
                </div>
                <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl">
                    <h4 class="font-bold text-purple-400">Polymorphism</h4>
                    <p class="text-xs text-slate-400">One interface, many forms.</p>
                </div>
                <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl">
                    <h4 class="font-bold text-orange-400">Abstraction</h4>
                    <p class="text-xs text-slate-400">Hiding complexity.</p>
                </div>
            </div>
        </div>
        """
    },
    {
        "title": "3.2 Inheritance & The Diamond Problem",
        "emoji": "🧬",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Why Java bans Multiple Inheritance</h3>
            
            <div class="bg-slate-900 p-6 rounded-xl border border-red-900/50">
                <h4 class="font-bold text-red-400 mb-4">The Diamond of Death</h4>
                <div class="flex flex-col items-center gap-4 text-xs font-mono">
                    <div class="p-2 border border-slate-500 rounded">Class A (print)</div>
                    <div class="flex gap-12">
                        <div class="p-2 border border-slate-500 rounded">Class B (Overrides print)</div>
                        <div class="p-2 border border-slate-500 rounded">Class C (Overrides print)</div>
                    </div>
                    <div class="p-2 border border-slate-500 rounded bg-red-900/20 text-red-300">Class D extends B, C</div>
                    <p class="italic text-slate-400">"If I call D.print(), which one runs? B or C?"</p>
                    <p class="font-bold text-white">Java says: "Impossible. Compilation Error."</p>
                </div>
            </div>

            {key_concept_card("The Solution", "Java allows Multiple Inheritance of **Interfaces**, because Interfaces have no state (no instance variables). Conflict resolution is explicit (Default Methods require override if conflicting).", "green")}
        </div>
        """
    },
    {
        "title": "3.3 Sealed Classes (Java 17): Strict Hierarchies",
        "emoji": "🛡️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Controlling Inheritance</h3>
            <p>Normally, `final` forbids inheritance completely. `sealed` allows inheritance, but ONLY for permitted classes. Perfect for Domain Models.</p>

            {code_block("""
public sealed interface Shape 
    permits Circle, Rectangle, Square { ... }

final class Circle implements Shape { ... }
final class Rectangle implements Shape { ... }
final class Square implements Shape { ... }

// class Triangle implements Shape {} // COMPILE ERROR! Not permitted.
""", filename="Shapes.java")}

            {key_concept_card("Pattern Matching", "This enables exhaustive Switch cases. The compiler knows ONLY Circle, Rect, Square exist, so you don't need a default case.", "purple")}
        </div>
        """
    },
    {
        "title": "3.4 Polymorphism: Runtime Magic",
        "emoji": "🎭",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Dynamic Method Dispatch</h3>
            <p>The variable type determines <strong>Compile-Time</strong> validity. The Object type determines <strong>Runtime</strong> behavior.</p>

            {code_block("""
Animal a = new Dog(); // Upcasting
a.speak(); 

// Compile Time: Checks if Animal has speak()
// Runtime: Calls Dog's speak() (Overridden method)
""", filename="Poly.java")}
            
            <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 mt-4">
                <h4 class="font-bold text-blue-400 text-sm">Late Binding</h4>
                <p class="text-xs text-slate-400">The actual method memory address is not linked until the program is running. The JVM looks up the "VTable" (Virtual Method Table) of the actual object.</p>
            </div>
        </div>
        """
    },
    {
        "title": "3.5 Interfaces vs Abstract Classes",
        "emoji": "🤝",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Modern Distinctions</h3>
            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700">
                <thead><tr class="bg-slate-800 text-white"><th class="p-4">Feature</th><th class="p-4">Interface (New)</th><th class="p-4">Abstract Class</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-4">State</td><td class="p-4">No (Only static constants)</td><td class="p-4">Yes (Fields allowed)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4">Methods</td><td class="p-4">Abstract, Default, Static, Private</td><td class="p-4">Anything</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4">Constructors</td><td class="p-4">No</td><td class="p-4">Yes</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4">Purpose</td><td class="p-4">Capabilities ("Can-Do")</td><td class="p-4">Identity ("Is-A")</td></tr>
                </tbody>
            </table>
        </div>
        """
    },
    {
        "title": "3.6 Records: Data Carriers (Java 16)",
        "emoji": "📦",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Kill the Boilerplate</h3>
            <p>If a class is just data, use a Record. It gives you Constructor, Getters, Equals, HashCode, and ToString for free.</p>

            <div class="grid md:grid-cols-2 gap-8">
                 <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                    <h4 class="font-bold text-red-400 mb-2">Class (50 lines)</h4>
                    <p class="text-xs text-slate-500">private fields... getter... setter... equals... hashcode...</p>
                 </div>
                 <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl">
                    <h4 class="font-bold text-green-400 mb-2">Record (1 line)</h4>
                    {code_block("public record Point(int x, int y) {}", filename="Point.java")}
                 </div>
            </div>
            {key_concept_card("Immutability", "Records are shallowly immutable. Fields are `final`. Good for DTOs and Map Keys.", "blue")}
        </div>
        """
    },
    {
        "title": "3.7 Advanced Generics: PECS",
        "emoji": "🧬",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Producer Extends, Consumer Super</h3>
            <p>Wildcards (`?`) allow flexible APIs.</p>
            
            <div class="grid md:grid-cols-2 gap-4">
                <div>
                    <h4 class="font-bold text-green-400">? extends T (Producer)</h4>
                    <p class="text-xs text-slate-400">Read-Only. Safe to get T out, unsafe to put T in.</p>
                    {code_block("List<? extends Number> nums", filename="Read.java")}
                </div>
                <div>
                     <h4 class="font-bold text-blue-400">? super T (Consumer)</h4>
                     <p class="text-xs text-slate-400">Write-Only. Safe to put T in, unsafe to read specific type.</p>
                     {code_block("List<? super Integer> ints", filename="Write.java")}
                </div>
            </div>
            {key_concept_card("Type Erasure", "Generics are a Compile-Time trick. At runtime, `List<String>` is just `List`. This is for backward compatibility.", "orange")}
        </div>
        """
    },
    {
        "title": "3.8 Mini Project: Library System (LLD)",
        "emoji": "📚",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Design a system using Abstraction, Inheritance, and Composition.</p>

            {code_block("""
// Abstraction
abstract class Item {
    String title;
    abstract int getLoanPeriod();
}

// Inheritance
class Book extends Item {
    int getLoanPeriod() { return 14; }
}

class DVD extends Item {
    int getLoanPeriod() { return 3; }
}

// Composition & Polymorphism
class Library {
    List<Item> items = new ArrayList<>();
    
    void checkout(Item item) {
        System.out.println("Due in " + item.getLoanPeriod() + " days.");
    }
}
""", filename="Library.java")}
        </div>
        """
    }
]
