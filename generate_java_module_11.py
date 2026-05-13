
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

module_11_lessons = [
    {
        "title": "11.1 Maven: The Project Object Model",
        "emoji": "📦",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Dependency Management</h3>
            <p>Before Maven, we dragged `.jar` files into folders manually. It was hell.</p>

            {code_block("""
<!-- pom.xml -->
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>31.1-jre</version>
</dependency>
""", filename="pom.xml", lang="xml")}
            
            <p class="text-sm mt-4">Maven automatically downloads this JAR (and all ITS dependencies) from Maven Central.</p>
        </div>
        """
    },
    {
        "title": "11.2 The Build Lifecycle",
        "emoji": "🔄",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Standard Phases</h3>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-2 text-center text-xs font-mono">
                <div class="p-2 border border-slate-600 rounded">Validate</div>
                <div class="p-2 border border-blue-500 rounded text-blue-300">Compile</div>
                <div class="p-2 border border-yellow-500 rounded text-yellow-300">Test</div>
                <div class="p-2 border border-green-500 rounded text-green-300">Package</div>
                <div class="p-2 border border-purple-500 rounded text-purple-300">Install</div>
            </div>
            
            {key_concept_card("Goal", "Each phase executes the ones before it. `mvn package` will validate, compile, AND test before creating the JAR.", "green")}
        </div>
        """
    },
    {
        "title": "11.3 Dependency Hell & Conflicts",
        "emoji": "🔥",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Transitive Dependencies</h3>
            <p>You use Lib A. Lib A uses Lib B (v1.0). You also use Lib C. Lib C uses Lib B (v2.0).</p>
            <p class="text-red-400 font-bold">Which version of Lib B ends up in your app?</p>
            
            {code_block("""
mvn dependency:tree

# Visualizes the graph so you can exclude bad versions
[INFO] +- com.example:lib-a:1.0
[INFO] |  \- com.common:lib-b:1.0  <-- CONFLICT
[INFO] +- com.example:lib-c:1.0
[INFO]    \- com.common:lib-b:2.0  <-- WON (Nearest Definition)
""", filename="Terminal", lang="bash")}
        </div>
        """
    }
]
