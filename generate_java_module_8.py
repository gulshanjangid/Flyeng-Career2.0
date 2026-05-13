
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

module_8_lessons = [
    {
        "title": "8.1 The Dark Arts: Reflection API",
        "emoji": "🔮",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Breaking the Laws of OOP</h3>
            <p>Reflection allows you to inspect and modify classes at Runtime. You can even access `private` fields.</p>
            
            <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                 <h4 class="font-bold text-red-400 mb-2">Hacking Private Fields</h4>
                 {code_block("""
User user = new User("Secret");
Field field = User.class.getDeclaredField("password");

field.setAccessible(true); // 🔓 UNLOCK THE DOOR
String password = (String) field.get(user);

System.out.println("Stolen: " + password);
""", filename="Hack.java")}
            </div>

            {key_concept_card("Why use it?", "This is how Spring, Hibernate, and JUnit work. They need to create objects and inject values without knowing your class names beforehand.", "purple")}
        </div>
        """
    },
    {
        "title": "8.2 Custom Annotations",
        "emoji": "🏷️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Metadata for your Code</h3>
            <p>Annotations (`@Tag`) do nothing by themselves. You need a processor to read them.</p>

            {code_block("""
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface RunBefore {
    // Empty Marker Interface
}
""", filename="RunBefore.java")}
        </div>
        """
    },
    {
        "title": "8.3 Mini Project: DIY Unit Test Runner",
        "emoji": "🧪",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Recreate a mini-JUnit. Find all methods marked with `@Test` and run them.</p>

            {code_block("""
for (Method m : MyTestClass.class.getDeclaredMethods()) {
    if (m.isAnnotationPresent(Test.class)) {
        try {
            m.invoke(new MyTestClass());
            System.out.println("✅ " + m.getName() + " Passed");
        } catch (Throwable t) {
            System.out.println("❌ " + m.getName() + " Failed");
        }
    }
}
""", filename="TestRunner.java")}
        </div>
        """
    }
]
