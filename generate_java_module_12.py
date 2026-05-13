
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

module_12_lessons = [
    {
        "title": "12.1 JDBC: The Raw Metal",
        "emoji": "🛢️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Connecting to Data</h3>
            <p>JDBC is the standard API. Every ORM (Hibernate, Spring Data) uses JDBC internally.</p>

            <div class="bg-slate-900 p-6 rounded-xl border border-slate-700 space-y-2 font-mono text-sm">
                <div class="text-slate-500">// 1. Connection</div>
                <div>Connection conn = DriverManager.getConnection(url, user, pass);</div>
                <div class="text-slate-500 mt-2">// 2. Statement</div>
                <div>PreparedStatement ps = conn.prepareStatement("SELECT * FROM users");</div>
                <div class="text-slate-500 mt-2">// 3. Result</div>
                <div>ResultSet rs = ps.executeQuery();</div>
            </div>
        </div>
        """
    },
    {
        "title": "12.2 SQL Injection Prevention",
        "emoji": "🛡️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Bobby Tables</h3>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div class="p-4 bg-red-900/10 border border-red-500/30 rounded-xl">
                    <h4 class="font-bold text-red-400">Vulnerable</h4>
                    {code_block("""
// String Concatenation = DANGER
String q = "SELECT * FROM users WHERE name = '" + input + "'";
// INPUT: "admin' --"
// RESULT: SELECT ... WHERE name = 'admin' --'
""", filename="Hacked.java")}
                </div>
                <div class="p-4 bg-green-900/10 border border-green-500/30 rounded-xl">
                    <h4 class="font-bold text-green-400">Safe</h4>
                    {code_block("""
// Parameterization
String q = "SELECT * FROM users WHERE name = ?";
ps = conn.prepareStatement(q);
ps.setString(1, input);
// Driver treats input as literal data, not code.
""", filename="Safe.java")}
                </div>
            </div>
        </div>
        """
    },
    {
        "title": "12.3 Hibernate & JPA: The ORM Magic",
        "emoji": "🪄",
        "content": f"""
        <div class="space-y-6 text-slate-300">
             <h3 class="text-2xl font-bold text-white mb-4">Mapping Objects to Tables</h3>
             <p>We work with Objects. DBs work with Tables. The ORM (Object Relational Mapper) translates.</p>

             {code_block("""
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    private Long id;
    
    private String name;
}
""", filename="User.java")}

            {key_concept_card("The N+1 Problem", "Fetching a list of 10 Users. Then looping to fetch their Address (OneToOne). Hibernate will execute 1 query for the list, and 10 queries for the addresses. Solution: `JOIN FETCH`.", "orange")}
        </div>
        """
    }
]
