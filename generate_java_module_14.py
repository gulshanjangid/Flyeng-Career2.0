
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

module_14_lessons = [
    {
        "title": "14.1 Spring Boot: Opinionated Defaults",
        "emoji": "🍃",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Convention over Configuration</h3>
            <p>Old Spring required XML hell. Spring Boot auto-configures based on what it finds on the Classpath.</p>

            <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl">
                <h4 class="font-bold text-green-400">The Magic of Starters</h4>
                <p class="text-sm text-slate-400 mb-2">If you include `spring-boot-starter-web`, Boot automatically configures:</p>
                <ul class="list-disc list-inside text-xs text-slate-300">
                    <li>Embedded Tomcat Server (Port 8080).</li>
                    <li>Jackson (For JSON Parsing).</li>
                    <li>Spring MVC (For REST).</li>
                </ul>
            </div>
        </div>
        """
    },
    {
        "title": "14.2 Dependency Injection (IoC)",
        "emoji": "🪄",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Hollywood Principle</h3>
            <p>"Don't call us, we'll call you." You don't create objects (`new`). Spring creates them and **Injects** them.</p>

            {code_block("""
// 1. Mark as Component (Bean)
@Service
class UserService { ... }

// 2. Request Injection
@RestController
class UserController {
    
    private final UserService service;

    // Constructor Injection (Best Practice)
    public UserController(UserService service) {
        this.service = service;
    }
}
""", filename="DI.java")}
        </div>
        """
    },
    {
        "title": "14.3 Building a REST API",
        "emoji": "🌐",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Annotations Cheatsheet</h3>
            <p>How to map HTTP verbs to Java methods.</p>

            {code_block("""
@GetMapping("/users/{id}")
public User get(@PathVariable String id) { ... }

@PostMapping("/users")
public User create(@RequestBody User user) { ... }

@DeleteMapping("/users/{id}")
public void delete(@PathVariable String id) { ... }
""", filename="Controller.java")}
            
            {key_concept_card("JSON Magic", "You don't need to manually parse JSON. Spring uses Jackson to convert Java Object -> JSON automatically.", "purple")}
        </div>
        """
    }
]
