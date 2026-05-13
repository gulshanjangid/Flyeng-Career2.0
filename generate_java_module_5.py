
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

module_5_lessons = [
    {
        "title": "5.1 The Throwable Hierarchy",
        "emoji": "☢️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Error vs Exception</h3>
            <p>Everything that can destroy your app inherits from `Throwable`.</p>

            <div class="flex flex-col items-center gap-4 text-xs font-mono my-8">
                <div class="p-3 bg-red-900/50 border border-red-500 rounded font-bold text-white w-48 text-center">Throwable</div>
                <div class="grid grid-cols-2 gap-12 w-full max-w-lg">
                    <div class="flex flex-col items-center gap-2">
                        <div class="h-4 w-0.5 bg-slate-600"></div>
                        <div class="p-2 border border-red-500 text-red-400 rounded w-full text-center">Error</div>
                        <p class="text-[10px] text-center text-slate-500">Fatal. System Crash. <br> (OutOfMemory, StackOverflow)</p>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                        <div class="h-4 w-0.5 bg-slate-600"></div>
                        <div class="p-2 border border-yellow-500 text-yellow-400 rounded w-full text-center">Exception</div>
                        <p class="text-[10px] text-center text-slate-500">Recoverable using try-catch.<br> (IO, NullPointer)</p>
                    </div>
                </div>
            </div>

            {key_concept_card("Don't catch Errors!", "Never write `catch(Throwable t)`. You cannot fix an OutOfMemoryError. Let the JVM crash so you can restart.", "red")}
        </div>
        """
    },
    {
        "title": "5.2 Checked vs Unchecked",
        "emoji": "⚖️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Great Debate</h3>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                     <h4 class="font-bold text-orange-400 mb-2">Checked (Compile Time)</h4>
                     <p class="text-sm mb-4">You MUST handle it. Enforced by compiler.</p>
                     <ul class="list-disc list-inside text-xs text-slate-400">
                        <li>IOException</li>
                        <li>SQLException</li>
                        <li>ClassNotFoundException</li>
                     </ul>
                </div>
                <div>
                     <h4 class="font-bold text-blue-400 mb-2">Unchecked (Runtime)</h4>
                     <p class="text-sm mb-4">You CAN handle it, but don't have to. Logic bugs.</p>
                     <ul class="list-disc list-inside text-xs text-slate-400">
                        <li>NullPointerException</li>
                        <li>IllegalArgumentException</li>
                        <li>IndexOutOfBoundsException</li>
                     </ul>
                </div>
            </div>
            
            {key_concept_card("Modern Usage", "Modern frameworks (Spring) wrap almost everything in Unchecked RuntimeExceptions. Checked exceptions create boilerplate clutter.", "purple")}
        </div>
        """
    },
    {
        "title": "5.3 Try-With-Resources (AutoCloseable)",
        "emoji": "🛁",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Closing Leaks</h3>
            <p>Forgot `finally {{ file.close(); }}`? Your server just ran out of file handles.</p>

            <div class="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
                <p class="text-sm text-slate-500 mb-2">Since Java 7:</p>
                {code_block("""
// The resource is declared IN the parentheses
try (BufferedReader br = new BufferedReader(new FileReader(path))) {
    return br.readLine();
} catch (IOException e) {
    // Handle error
} 
// MAGIC: br.close() is called automatically here!
// Even if an exception was thrown.
""", filename="Clean.java")}
            </div>
        </div>
        """
    },
    {
        "title": "5.4 Mini Project: Custom Exception Handler",
        "emoji": "🚫",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Build a robust error handling system for a business logic validation.</p>

            {code_block("""
// 1. Define specific Domain Exception
class InsufficientFundsException extends RuntimeException {
    public InsufficientFundsException(String msg) { super(msg); }
}

public class Bank {
    public void withdraw(double amt) {
        if (amt > 1000) {
            // 2. Throw efficiently
            throw new InsufficientFundsException("Limit is 1000");
        }
    }

    public static void main(String[] args) {
        Bank b = new Bank();
        try {
            b.withdraw(5000);
        } catch (InsufficientFundsException e) {
            // 3. Log and recover gracefully
            System.err.println("Transaction Failed: " + e.getMessage());
            // sendAlertToAdmin(e);
        }
    }
}
""", filename="Handler.java")}
        </div>
        """
    }
]
