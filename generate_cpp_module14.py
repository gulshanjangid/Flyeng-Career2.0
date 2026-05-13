
module_14_lessons = [
    {
        "id": "cpp-14-1",
        "title": "14.1 Stream I/O: cin and cout",
        "duration": "45 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-indigo-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">Streams Abstraction</h1>
        <p class="text-lg text-slate-400">
            C++ treats input and output as a stream of bytes. <code>cin</code> and <code>cout</code> are just global objects connected to standard input/output.
        </p>

        <div class="mt-8 bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
             <div class="text-gray-400 mb-2">// Reading unknown number of inputs</div>
             <pre class="text-blue-300">
int x;
while (std::cin >> x) {
    // Loop runs until EOF (Ctrl+D / Ctrl+Z) or Invalid Input type
    process(x);
}</pre>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-14-2",
        "title": "14.2 File Streams (fstream)",
        "duration": "50 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-green-400 font-bold mb-4">Writing (ofstream)</h3>
             <pre class="bg-black/50 p-4 rounded text-xs text-gray-300 font-mono">
std::ofstream file("data.txt");
if (file.is_open()) {
    file << "Hello World\n";
    file << 42;
}
// Closed automatically (RAII)
</pre>
        </div>
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-blue-400 font-bold mb-4">Reading (ifstream)</h3>
             <pre class="bg-black/50 p-4 rounded text-xs text-gray-300 font-mono">
std::ifstream file("data.txt");
std::string line;
while (std::getline(file, line)) {
    cout << line << endl;
}
</pre>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-14-3",
        "title": "14.3 Binary vs Text Files",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Serialization</h2>
    
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <p class="text-sm text-slate-400 mb-6">
            <strong>Text:</strong> Human readable (ASCII/UTF8). Needs parsing. Slow.<br>
            <strong>Binary:</strong> Valid memory dump. Machine readable. Fast.
        </p>
        
        <div class="bg-black/50 p-6 rounded-xl font-mono text-xs text-yellow-300">
            file.write(reinterpret_cast&lt;char*&gt;(&myStruct), sizeof(myStruct));
        </div>
        
        <div class="mt-4 p-4 bg-red-900/10 border-l-4 border-red-500 text-xs text-red-200">
            <strong>Danger:</strong> Binary files are not portable across different architectures (Endianness, Padding, 32 vs 64 bit).
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-14-4",
        "title": "14.4 String Streams (stringstream)",
        "duration": "40 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-6">In-Memory Formatting</h3>
        <p class="text-slate-400 text-sm mb-6">
            Treat a string like a file. Useful for splitting sentences or formatting numbers.
        </p>

        <div class="bg-black/50 p-6 rounded-xl font-mono text-xs text-gray-300">
            std::string data = "User: 100 20.5";<br>
            std::stringstream ss(data);<br><br>
            
            std::string label;<br>
            int id;<br>
            float score;<br><br>
            
            ss >> label >> id >> score;<br>
            <span class="text-green-400">// label="User:", id=100, score=20.5</span>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-14-5",
        "title": "14.5 CLI Arguments (argc, argv)",
        "duration": "35 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Command Line Interface</h2>
        <code class="text-xl font-mono text-green-400">./app --verbose --input data.csv</code>
    </div>
    
    <div class="mt-8 bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
        <div class="text-blue-300">int main(int argc, char* argv[])</div>
        <ul class="mt-4 space-y-2 text-gray-400">
            <li><strong>argc:</strong> Argument Count (3 in example above).</li>
            <li><strong>argv[0]:</strong> Program Name ("./app").</li>
            <li><strong>argv[1]:</strong> "--verbose".</li>
        </ul>
    </div>
</div>
"""
    },
    {
        "id": "cpp-14-6",
        "title": "14.6 Environment & System Calls",
        "duration": "40 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#111] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-2">Environment Variables</h3>
            <pre class="bg-black/50 p-4 rounded text-xs text-gray-300">
char* path = std::getenv("PATH");
if (path) cout << path;</pre>
        </div>
        <div class="bg-[#111] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-2">System Execution</h3>
            <pre class="bg-black/50 p-4 rounded text-xs text-gray-300">
system("ls -l > out.txt");
// Executes shell command. Risky!</pre>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-14-7",
        "title": "14.7 Lab: JSON Parser (Mini)",
        "duration": "2.5 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-r from-yellow-700 to-orange-700 p-8 rounded-3xl text-center shadow-2xl">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: JSON Configuration Loader</h1>
        <p class="text-yellow-100">Reading structured data from disk.</p>
    </div>
    
    <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Spec</h3>
        <p class="text-slate-400 text-sm">
             Load a `config.json` file and parse simple key-value pairs into a `std::map`.
        </p>

        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
            <div class="text-gray-400 mb-2">Input:</div>
            <pre class="text-yellow-300">
{
    "resolution": "1920x1080",
    "fullscreen": "true",
    "volume": "80"
}
</pre>
            <div class="text-gray-400 mt-4 mb-2">Task:</div>
            <ul class="space-y-2 text-gray-300">
                <li>1. Read file into string.</li>
                <li>2. Parse lines, remove quotes/braces.</li>
                <li>3. Store in Map.</li>
                <li>4. Handle I/O errors (Missing file).</li>
            </ul>
        </div>
    </div>
</div>
"""
    }
]
