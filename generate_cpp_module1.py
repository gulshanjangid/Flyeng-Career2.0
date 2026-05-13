
# Module 1: C++ for Problem Solving (First Steps)
# Focus: Approachable, Useful, Real Programs via "Extreme Definitions" & Visuals.

module_1_lessons = [
    {
        "id": "cpp-1-1",
        "title": "1.1 Why C++ in 2026? (The Invisible Giant)",
        "duration": "45 min",
        "type": "article",
        "content": """
<div class="space-y-12 font-sans text-slate-200">
    <!-- HERO -->
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1014] to-[#1a1a2e] border border-blue-500/20 p-10 shadow-2xl">
        <div class="absolute top-0 right-0 p-4 opacity-5 text-[120px] font-black text-white pointer-events-none">2026</div>
        <div class="relative z-10">
            <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                The Foundation of Everything
            </h1>
            <p class="text-lg text-slate-400 max-w-3xl leading-relaxed">
                Python and JavaScript run the web and AI apps. But <strong>what runs Python and JavaScript?</strong> C++.
                It is the language of high-performance infrastructure.
            </p>
        </div>
    </div>

    <!-- THE TECH STACK ICEBERG VISUAL -->
    <div class="bg-[#111] p-8 rounded-2xl border border-white/10 relative overflow-hidden">
        <h3 class="text-2xl font-bold text-center text-white mb-8">The Tech Stack Iceberg</h3>
        
        <div class="relative w-full max-w-xl mx-auto flex flex-col gap-1">
            <!-- Surface (Python/JS) -->
            <div class="bg-yellow-400/80 p-4 rounded-t-lg text-black text-center font-bold relative z-10">
                Apps, Scripts, Websites (Python, JS)
            </div>
            
            <!-- Water Line -->
            <div class="h-1 bg-cyan-400 w-full my-2 relative z-20 shadow-[0_0_20px_cyan]"></div>
            
            <!-- Deep (C++) -->
            <div class="bg-blue-600 p-4 text-white text-center font-bold opacity-90 mx-2">
                AI Frameworks (PyTorch, TensorFlow)
            </div>
            <div class="bg-blue-700 p-4 text-white text-center font-bold opacity-90 mx-4">
                Browsers (Chrome V8, WebKit)
            </div>
            <div class="bg-blue-800 p-4 text-white text-center font-bold opacity-95 mx-6">
                Game Engines (Unreal 5, Unity)
            </div>
            <div class="bg-blue-900 p-4 text-white text-center font-bold opacity-100 mx-8 rounded-b-lg">
                OS Kernels & Drivers (Windows, Linux)
            </div>
        </div>
        
        <p class="text-center text-xs text-slate-500 mt-8">
            If you want to build the <em>car</em>, learn Python. If you want to build the <em>engine</em>, learn C++.
        </p>
    </div>

    <!-- WHY YOU ARE HERE -->
    <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-blue-500/50 transition duration-300">
            <div class="text-4xl mb-4">📈</div>
            <h3 class="text-lg font-bold text-white mb-2">HFT & Finance</h3>
            <p class="text-sm text-slate-400">
                High-Frequency Trading firms pay top dollar because C++ is the only language fast enough to beat the market by microseconds.
            </p>
        </div>
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-purple-500/50 transition duration-300">
             <div class="text-4xl mb-4">🏆</div>
             <h3 class="text-lg font-bold text-white mb-2">Competitive Programming</h3>
             <p class="text-sm text-slate-400">
                 The massive STL library and raw speed make it the #1 choice for winning contests (IOI, ICPC, LeetCode).
             </p>
        </div>
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-green-500/50 transition duration-300">
             <div class="text-4xl mb-4">🎮</div>
             <h3 class="text-lg font-bold text-white mb-2">Game Engines</h3>
             <p class="text-sm text-slate-400">
                 Unreal Engine 5 uses C++ for gameplay logic. It gives you direct memory control for realistic physics and rendering.
             </p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-1-2",
        "title": "1.2 Setting Up Your Environment",
        "duration": "50 min",
        "type": "article",
        "content": """
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">The Craftsman's Tools</h2>
        <p class="text-slate-400">You need three things: A Text Editor, a C++ Compiler, and a Build System.</p>
    </div>

    <!-- COMPILERS EXPLAINED -->
    <div class="grid md:grid-cols-3 gap-4">
        <div class="p-6 bg-[#0f1014] rounded-2xl border border-white/10">
            <h3 class="text-xl font-bold text-green-400 mb-2">GCC (g++)</h3>
            <p class="text-xs text-slate-400 mb-2">GNU Compiler Collection</p>
            <p class="text-sm text-gray-300">The standard on Linux. Reliable, ancient, powerful. The default for competitive programming.</p>
        </div>
        <div class="p-6 bg-[#0f1014] rounded-2xl border border-white/10">
            <h3 class="text-xl font-bold text-blue-400 mb-2">Clang (clang++)</h3>
            <p class="text-xs text-slate-400 mb-2">LLVM Project</p>
            <p class="text-sm text-gray-300">Used by Apple and Google. Known for faster compile times and <strong>much better error messages</strong>.</p>
        </div>
        <div class="p-6 bg-[#0f1014] rounded-2xl border border-white/10">
            <h3 class="text-xl font-bold text-purple-400 mb-2">MSVC</h3>
            <p class="text-xs text-slate-400 mb-2">Microsoft Visual C++</p>
            <p class="text-sm text-gray-300">The engine behind Visual Studio. Best if you are strictly on Windows developing desktop apps/games.</p>
        </div>
    </div>

    <!-- VS CODE SETUP -->
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-blue-500/20">
        <h3 class="text-2xl font-bold text-white mb-6">Recommended Setup: VS Code</h3>
        <p class="text-sm text-slate-400 mb-6">Lightweight, fast, and industry standard.</p>
        
        <div class="space-y-4">
            <div class="flex items-center gap-4 bg-black/50 p-4 rounded-lg border border-white/5">
                <div class="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-bold text-white">C++</div>
                <div>
                    <strong class="text-white block">C/C++ Extension (Microsoft)</strong>
                    <span class="text-xs text-gray-500">Intellisense, Debugging, and Code Navigation.</span>
                </div>
            </div>
            <div class="flex items-center gap-4 bg-black/50 p-4 rounded-lg border border-white/5">
                 <div class="w-10 h-10 bg-orange-600 rounded flex items-center justify-center font-bold text-white">Pr</div>
                <div>
                    <strong class="text-white block">Prettier / Clang-Format</strong>
                    <span class="text-xs text-gray-500">Auto-formats your code every time you save. Absolute must-have.</span>
                </div>
            </div>
        </div>
    </div>

    <!-- CMAKE BASICS -->
    <div class="bg-[#111] p-6 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-4">Build Systems: CMake</h3>
        <p class="text-sm text-slate-300 mb-4">Don't memorize terminal commands. Use a recipe file.</p>
        <div class="relative bg-black rounded-lg border border-white/10 overflow-hidden">
             <div class="px-4 py-2 bg-white/5 border-b border-white/5 text-xs text-gray-500">CMakeLists.txt</div>
             <pre class="p-4 text-xs font-mono text-green-300">
cmake_minimum_required(VERSION 3.10)
project(MyFirstApp)

set(CMAKE_CXX_STANDARD 20)

add_executable(app main.cpp)
             </pre>
        </div>
         <p class="text-xs text-gray-500 mt-2">
            This tells any OS: "I need C++20, and please turn 'main.cpp' into a program called 'app'."
        </p>
    </div>
</div>
"""
    },
    {
        "id": "cpp-1-3",
        "title": "1.3 Your First Program: Anatomy & Execution",
        "duration": "90 min",
        "type": "code",
        "content": """
<div class="space-y-12 font-sans text-slate-200">
    <!-- INTRO HEADER -->
    <div class="bg-gradient-to-r from-blue-900/40 to-[#0f1014] p-8 rounded-2xl border border-blue-500/20">
        <h2 class="text-3xl font-bold text-white mb-2">The Anatomy of C++</h2>
        <p class="text-slate-400 leading-relaxed">
            Every C++ program, from a calculator to Unreal Engine 5, starts with these fundamental blocks.
            We are going to dissect a program <strong>line-by-line</strong>, digging into the Preprocessor, Namespaces, and the Main entry point.
        </p>
    </div>

    <!-- CODE DISSECTION VISUAL -->
    <div class="relative bg-[#0f1014] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
        <div class="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
             <span class="text-xs font-mono text-blue-400">main.cpp</span>
             <div class="flex gap-1.5">
                <div class="w-2 h-2 rounded-full bg-red-500"></div>
                <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
             </div>
        </div>
        <div class="p-6 font-mono text-sm leading-8 space-y-4">
            <!-- PREPROCESSOR -->
            <div class="group relative hover:bg-white/5 transition rounded p-2 border-l-2 border-purple-500/0 hover:border-purple-500">
                <div class="text-purple-400 font-bold">#include &lt;iostream&gt;</div>
                <div class="text-xs text-gray-500 mt-1">
                    <strong class="text-purple-300">The Preprocessor Directive:</strong><br>
                    Before compilation actually starts, the Preprocessor copies the entire content of the file <code>iostream</code> 
                    (thousands of lines of code) and pastes it right here. This gives you access to <code>std::cout</code>.
                </div>
            </div>

            <!-- MAIN FUNCTION -->
            <div class="group relative hover:bg-white/5 transition rounded p-2 border-l-2 border-blue-500/0 hover:border-blue-500">
                <div class="text-blue-400 font-bold">int main() { ... }</div>
                <div class="text-xs text-gray-500 mt-1">
                    <strong class="text-blue-300">The Entry Point:</strong><br>
                    When you run your program, the Operating System calls this specific function. 
                    It <strong>must</strong> return an integer used as the status code.
                </div>
            </div>

            <!-- STATEMENT -->
            <div class="group relative hover:bg-white/5 transition rounded p-2 border-l-2 border-green-500/0 hover:border-green-500">
                <div class="text-slate-200">std::cout &lt;&lt; "Hello" &lt;&lt; std::endl;</div>
                <div class="text-xs text-gray-500 mt-1">
                    <strong class="text-green-300">The Stream Operation:</strong><br>
                    <code>std::</code> is a <strong>Namespace</strong> (like a surname). It prevents name collisions.<br>
                    <code>cout</code> is the "Console Output".<br>
                    <code>&lt;&lt;</code> is the insertion operator. It pushes data into the stream flowing to your screen.<br>
                    <code>;</code> Semicolon ends the instruction. Forgetting this is the #1 error beginners make.
                </div>
            </div>

            <!-- RETURN -->
            <div class="group relative hover:bg-white/5 transition rounded p-2 border-l-2 border-orange-500/0 hover:border-orange-500">
                <div class="text-orange-400 font-bold">return 0;</div>
                <div class="text-xs text-gray-500 mt-1">
                    <strong class="text-orange-300">Exit Status:</strong><br>
                    <code>0</code> tells the OS "Success". Any non-zero value (e.g., <code>1</code> or <code>-1</code>) indicates an error happened.
                </div>
            </div>
        </div>
    </div>

    <!-- NAMESPACE DEEP DIVE -->
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-lg font-bold text-white mb-2">Why <code>std::</code>?</h3>
            <p class="text-sm text-slate-400 mb-4">
                Imagine you have a friend named "Cout". If you just yell "Cout!", it's confusing.
                <code>std::cout</code> specifies "The cout variable that belongs to the Standard family".
            </p>
            <div class="bg-red-900/10 border border-red-500/30 p-4 rounded text-xs">
                <strong class="text-red-300 block mb-2">Avoid <code>using namespace std;</code></strong>
                <p class="text-gray-400">
                    While convenient, it pulls <em>everything</em> from the standard library into the global scope. 
                    If you name a variable <code>count</code> or <code>data</code>, it might collide with existing standard functions.
                    Professional code uses explicit <code>std::</code> or targeted <code>using std::cout;</code>.
                </p>
            </div>
        </div>
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-lg font-bold text-white mb-2">The <code>&#92;n</code> vs <code>endl</code> Debate</h3>
            <p class="text-sm text-slate-400 mb-4">
                Both create a new line. But they are vastly different under the hood.
            </p>
            <table class="w-full text-xs text-left">
                <thead class="text-gray-500 border-b border-gray-700">
                    <tr><th class="pb-2">Feature</th><th class="pb-2"><code>&#92;n</code></th><th class="pb-2"><code>std::endl</code></th></tr>
                </thead>
                <tbody class="text-slate-300">
                    <tr class="border-b border-gray-800"><td class="py-2">Type</td><td>Character</td><td>Function (Manipulator)</td></tr>
                    <tr class="border-b border-gray-800"><td class="py-2">Action</td><td>Adds newline char</td><td>Adds newline + <strong>Flushes Buffer</strong></td></tr>
                    <tr class="border-b border-gray-800"><td class="py-2">Performance</td><td class="text-green-400">Fast</td><td class="text-red-400">Slow (System Call)</td></tr>
                    <tr><td class="py-2">Use Case</td><td>Loops / General</td><td>Logging / Crashes</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- COMPILATION PROCESS -->
    <div class="bg-[#111] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-4">What Happens When You Click Run?</h3>
        <p class="text-xs text-slate-400 mb-6">It feels instant, but 3 distinct programs run in sequence.</p>
        
        <div class="relative flex items-center justify-between text-center text-xs font-bold text-slate-300">
            <!-- Step 1 -->
            <div class="flex flex-col items-center gap-2 w-1/4">
                <div class="w-12 h-12 bg-purple-900/40 border border-purple-500 rounded-lg flex items-center justify-center">1</div>
                <span>Preprocessor</span>
                <span class="text-[10px] text-gray-500 font-normal">Handles #include, removes comments.</span>
            </div>
            <div class="h-0.5 w-8 bg-gray-700"></div>
            <!-- Step 2 -->
             <div class="flex flex-col items-center gap-2 w-1/4">
                <div class="w-12 h-12 bg-blue-900/40 border border-blue-500 rounded-lg flex items-center justify-center">2</div>
                <span>Compiler</span>
                <span class="text-[10px] text-gray-500 font-normal">Translates C++ to Machine Code (Object files).</span>
            </div>
            <div class="h-0.5 w-8 bg-gray-700"></div>
            <!-- Step 3 -->
             <div class="flex flex-col items-center gap-2 w-1/4">
                <div class="w-12 h-12 bg-green-900/40 border border-green-500 rounded-lg flex items-center justify-center">3</div>
                <span>Linker</span>
                <span class="text-[10px] text-gray-500 font-normal">Combines Object files into one Executable (.exe).</span>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-1-4",
        "title": "1.4 Variables, Types & Autos",
        "duration": "120 min",
        "type": "article",
        "content": """
<div class="space-y-12 font-sans text-slate-200">
    <!-- HERO SECTION -->
    <div class="text-center bg-gradient-to-b from-[#1a1a1a] to-[#0f1014] p-10 rounded-2xl border border-white/5">
        <h2 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">The Universe of Data Types</h2>
        <p class="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            In Python or JavaScript, you just create variables. In C++, you are the <strong>architect of memory</strong>. 
            You must decide exactly how much space every piece of data occupies. 
            This control is what makes C++ the language of high-performance engines.
        </p>
    </div>

    <!-- MEMORY ARCHITECTURE VISUALIZATION -->
    <div class="bg-[#111] p-8 rounded-2xl border border-white/10 shadow-2xl">
        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
             <span class="p-2 bg-blue-500/20 rounded-lg text-blue-400">01</span> 
             The Memory Grid (RAM)
        </h3>
        <p class="text-slate-400 mb-8">
            Think of your RAM as a massive street with billions of mailboxes. Each mailbox holds <strong>1 Byte</strong> (8 bits).
            When you declare a variable, you are reserving a block of these mailboxes.
        </p>
        
        <!-- VISUAL GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="space-y-4">
                 <div class="flex items-center gap-4">
                    <div class="w-24 text-right text-xs font-mono text-gray-500">Address 0x01</div>
                    <div class="w-12 h-12 border border-gray-700 bg-[#0f0f0f] rounded flex items-center justify-center text-xs text-gray-600">0</div>
                 </div>
                 <div class="flex items-center gap-4">
                    <div class="w-24 text-right text-xs font-mono text-blue-400">Address 0x04</div>
                    <div class="flex">
                        <div class="w-12 h-12 border border-blue-500/50 bg-blue-900/20 flex items-center justify-center text-[10px] text-blue-300">Byte 1</div>
                        <div class="w-12 h-12 border border-blue-500/50 bg-blue-900/20 flex items-center justify-center text-[10px] text-blue-300">Byte 2</div>
                        <div class="w-12 h-12 border border-blue-500/50 bg-blue-900/20 flex items-center justify-center text-[10px] text-blue-300">Byte 3</div>
                        <div class="w-12 h-12 border border-blue-500/50 bg-blue-900/20 flex items-center justify-center text-[10px] text-blue-300">Byte 4</div>
                    </div>
                    <div class="text-xs text-blue-400 ml-2">← <code>int</code> (4 Bytes)</div>
                 </div>
                 <div class="flex items-center gap-4">
                    <div class="w-24 text-right text-xs font-mono text-pink-400">Address 0x08</div>
                    <div class="w-12 h-12 border border-pink-500/50 bg-pink-900/20 flex items-center justify-center text-xs text-pink-300">'A'</div>
                    <div class="text-xs text-pink-400 ml-2">← <code>char</code> (1 Byte)</div>
                 </div>
            </div>
            
            <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 text-sm space-y-4">
                <h4 class="font-bold text-white">Why size matters?</h4>
                <ul class="space-y-3 text-slate-400 list-disc pl-4">
                    <li>If you use a <code>long long</code> (8 bytes) for a small number like "5", you waste 4 bytes of RAM.</li>
                    <li>In a game with 1 million particles, wasting 4 bytes per particle = <strong>4 MB of wasted RAM</strong>.</li>
                    <li>This is why C++ developers obsess over types.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- SECTION 1: INTEGER TYPES -->
    <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white">1. The Integer Family</h3>
            <p class="text-slate-400">Whole numbers. No decimals. They come in different sizes based on how big of a number you need.</p>
            
            <table class="w-full text-sm text-left text-slate-400 border-collapse">
                <thead class="text-xs text-slate-200 uppercase bg-white/5">
                    <tr>
                        <th class="px-3 py-2 border-b border-gray-700">Type</th>
                        <th class="px-3 py-2 border-b border-gray-700">Size</th>
                        <th class="px-3 py-2 border-b border-gray-700">Range (Approx)</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-800">
                    <tr><td class="px-3 py-2 font-mono text-gray-400">short</td><td class="px-3 py-2">2 B</td><td class="px-3 py-2">±32,000</td></tr>
                    <tr class="bg-blue-900/10"><td class="px-3 py-2 font-mono text-blue-400 font-bold">int</td><td class="px-3 py-2 text-white">4 B</td><td class="px-3 py-2 text-white">±2 Billion (Standard)</td></tr>
                    <tr><td class="px-3 py-2 font-mono text-purple-400">long long</td><td class="px-3 py-2">8 B</td><td class="px-3 py-2">±9 Quintillion</td></tr>
                </tbody>
            </table>

            <div class="bg-yellow-900/10 border border-yellow-500/20 p-4 rounded-lg">
                <strong class="text-yellow-400 text-xs uppercase tracking-wider">The "Unsigned" Trick</strong>
                <p class="text-xs text-gray-400 mt-2">
                    By default, types are <code>signed</code> (can be negative). 
                    If you add <code>unsigned</code> prefix (e.g., <code>unsigned int</code>), you ban negative numbers but <strong>double</strong> the positive range (to 4 Billion).
                </p>
            </div>
        </div>

        <!-- OVERFLOW VISUAL -->
        <div class="bg-[#0f1014] p-6 rounded-xl border border-white/10">
            <h3 class="text-red-400 font-bold mb-4">⚠️ The Integer Overflow Trap</h3>
            <p class="text-xs text-slate-400 mb-4">
                Imagine a car odometer at 999,999. If you drive one more mile, it wraps to 000,000. 
                Integers do the same, but they wrap to their <strong>minimum negative value</strong>.
            </p>
            
            <div class="font-mono text-xs bg-black p-4 rounded border border-red-500/20 space-y-2">
                <div class="flex justify-between text-gray-400">
                    <span>Code</span>
                    <span>Memory Result</span>
                </div>
                <div class="h-px bg-gray-800 my-2"></div>
                
                <div class="flex justify-between items-center group">
                    <span class="text-blue-300">short x = 32767;</span>
                    <span class="text-green-400">32767 (Max)</span>
                </div>
                <div class="flex justify-between items-center group">
                    <span class="text-blue-300">x = x + 1;</span>
                    <span class="text-red-500 font-bold animate-pulse">-32768 (Min)</span>
                </div>
            </div>
            <p class="text-[10px] text-gray-500 mt-2 text-center">
                *This has caused rocket crashes and banking errors involved millions of dollars.
            </p>
        </div>
    </div>

    <div class="h-px bg-white/5 w-full"></div>

    <!-- SECTION 2: FLOATING POINT -->
    <div class="grid md:grid-cols-2 gap-8">
        <div class="order-2 md:order-1 bg-[#0f1014] p-6 rounded-xl border border-white/10">
            <h3 class="text-green-400 font-bold mb-4">⚠️ The Precision Problem</h3>
            <p class="text-xs text-slate-400 mb-4">
                 Computers cannot represent decimal numbers perfectly (because they use base-2 binary).
            </p>
            <div class="font-mono text-xs bg-black p-4 rounded border-l-4 border-green-500">
                double a = 0.1;<br>
                double b = 0.2;<br>
                <span class="text-gray-500">// You expect 0.3, but...</span><br>
                cout << (a + b == 0.3); <span class="text-red-400">// Prints: False!</span><br>
                <span class="text-gray-500">// Actual value is 0.30000000000000004</span>
            </div>
            <div class="mt-2 text-[10px] text-gray-500">
                <strong>Rule:</strong> Never use <code>==</code> to compare floats. Check if the difference is very small instead.
            </div>
        </div>

        <div class="space-y-6 order-1 md:order-2">
            <h3 class="text-2xl font-bold text-white">2. Floating Point</h3>
            <p class="text-slate-400">Numbers with decimals.</p>
            
             <table class="w-full text-sm text-left text-slate-400 border-collapse">
                <thead class="text-xs text-slate-200 uppercase bg-white/5">
                    <tr>
                        <th class="px-3 py-2 border-b border-gray-700">Type</th>
                        <th class="px-3 py-2 border-b border-gray-700">Size</th>
                        <th class="px-3 py-2 border-b border-gray-700">Precision</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-800">
                    <tr>
                        <td class="px-3 py-2 font-mono text-gray-400">float</td>
                        <td class="px-3 py-2">4 B</td>
                        <td class="px-3 py-2">7 digits (Low)</td>
                    </tr>
                    <tr class="bg-green-900/10">
                        <td class="px-3 py-2 font-mono text-green-400 font-bold">double</td>
                        <td class="px-3 py-2 text-white">8 B</td>
                        <td class="px-3 py-2 text-white">15 digits (Standard)</td>
                    </tr>
                </tbody>
            </table>
            <p class="text-xs text-gray-500">Always use <code>double</code> unless you are constrained by memory (like on a microcontroller).</p>
        </div>
    </div>

    <!-- SECTION 3: CHAR & BOOL -->
    <div class="grid md:grid-cols-2 gap-8">
        <!-- CHAR -->
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-pink-400 font-bold mb-2">3. Characters (char)</h3>
            <p class="text-sm text-slate-400 mb-4">
                Computers only know numbers. A <code>char</code> is just a small integer (1 byte) mapped to a letter via the <strong>ASCII Table</strong>.
            </p>
             <div class="flex items-center justify-between bg-black p-3 rounded font-mono text-xs">
                 <div class="text-center">
                     <div class="text-pink-400">'A'</div>
                     <div class="text-gray-500">↓</div>
                     <div class="text-white">65</div>
                 </div>
                 <div class="text-center">
                     <div class="text-pink-400">'a'</div>
                     <div class="text-gray-500">↓</div>
                     <div class="text-white">97</div>
                 </div>
                 <div class="text-center">
                     <div class="text-pink-400">'0'</div>
                     <div class="text-gray-500">↓</div>
                     <div class="text-white">48</div>
                 </div>
             </div>
             <p class="text-xs text-gray-500 mt-2">
                 Note: <code>'A'</code> (Single Quotes) is a char. <code>"A"</code> (Double Quotes) is a String (an array of chars). They are NOT the same.
             </p>
        </div>

        <!-- BOOL -->
         <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-blue-400 font-bold mb-2">4. Booleans (bool)</h3>
            <p class="text-sm text-slate-400 mb-4">
                The simplest type. Represents Truth.
            </p>
            <ul class="text-xs space-y-2 text-gray-400 font-mono">
                <li class="flex justify-between bg-white/5 p-2 rounded">
                    <span>true</span>
                    <span class="text-white">1</span>
                </li>
                <li class="flex justify-between bg-white/5 p-2 rounded">
                    <span>false</span>
                    <span class="text-white">0</span>
                </li>
            </ul>
             <p class="text-xs text-yellow-500 mt-4">
                 <strong>Fun Fact:</strong> Any non-zero number is considered <code>true</code> in C++.
                 <br><code>if (5)</code> runs. <code>if (-1)</code> runs. Only <code>if (0)</code> fails.
             </p>
        </div>
    </div>

    <!-- MODERN INITIALIZATION -->
    <div class="bg-[#0f1014] p-8 rounded-2xl border border-blue-500/20">
        <h3 class="text-2xl font-bold text-white mb-6">Modern Initialization Rules (C++11+)</h3>
        <p class="text-slate-400 mb-6">
            In the past, C++ let you do dangerous things like shoving a number with decimals into an integer variable (it would just silently delete the decimals).
            <strong>Modern C++ uses Curly Braces <code>{}</code> to prevent this.</strong>
        </p>

        <div class="grid md:grid-cols-2 gap-8 font-mono text-xs">
            <!-- OLD WAY -->
            <div class="space-y-2 opacity-60">
                <div class="text-red-400 font-bold uppercase mb-1">The Old C-Style (Bad)</div>
                <div class="bg-black p-4 rounded border border-red-500/20">
                    int width = 4.5;<br>
                    <span class="text-gray-500">// Compiles fine.</span><br>
                    <span class="text-gray-500">// width becomes 4.</span><br>
                    <span class="text-red-500">// DATA LOSS!</span>
                </div>
            </div>

            <!-- NEW WAY -->
            <div class="space-y-2">
                 <div class="text-green-400 font-bold uppercase mb-1">The Modern Way (Good)</div>
                <div class="bg-black p-4 rounded border border-green-500/20">
                    int width {4.5};<br>
                    <span class="text-gray-500">// COMPILER ERROR!</span><br>
                    <span class="text-green-400">// "Narrowing conversion is not allowed"</span><br>
                    <span class="text-gray-500">// You are saved.</span>
                </div>
            </div>
        </div>
        
        <div class="mt-6 flex items-center gap-4 bg-blue-900/10 p-4 rounded-lg border border-blue-500/20">
            <span class="text-2xl">💡</span>
            <p class="text-sm text-blue-200">
                <strong>Best Practice:</strong> Always use <code>{}</code> to initialize variables unless you have a specific reason not to.
                It is safer and consistent.
            </p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-1-5",
        "title": "1.5 Expressions, Operators & Precedence",
        "duration": "80 min",
        "type": "article",
        "content": """
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">The Rules of Operations</h2>

    <!-- OPERATOR CATEGORIES -->
    <div class="grid md:grid-cols-3 gap-6">
        <!-- ARITHMETIC -->
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-blue-400 font-bold mb-4">Arithmetic</h3>
            <ul class="text-xs text-slate-300 space-y-2 font-mono">
                <li>+ <span class="text-gray-500">Add</span></li>
                <li>- <span class="text-gray-500">Subtract</span></li>
                <li>* <span class="text-gray-500">Multiply</span></li>
                <li>/ <span class="text-gray-500">Divide</span></li>
                <li>% <span class="text-gray-500">Modulus (Remainder)</span></li>
            </ul>
        </div>
         <!-- RELATIONAL -->
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-green-400 font-bold mb-4">Relational</h3>
             <ul class="text-xs text-slate-300 space-y-2 font-mono">
                <li>== <span class="text-gray-500">Equal To</span></li>
                <li>!= <span class="text-gray-500">Not Equal</span></li>
                <li>&lt;, &gt; <span class="text-gray-500">Less/Greater</span></li>
                <li>&lt;=, &gt;= <span class="text-gray-500">L/G or Equal</span></li>
            </ul>
        </div>
         <!-- LOGICAL -->
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-purple-400 font-bold mb-4">Logical</h3>
             <ul class="text-xs text-slate-300 space-y-2 font-mono">
                <li>&& <span class="text-gray-500">AND (Both true)</span></li>
                <li>|| <span class="text-gray-500">OR (At least one)</span></li>
                <li>! <span class="text-gray-500">NOT (Invert)</span></li>
            </ul>
        </div>
    </div>

    <!-- PRECEDENCE TABLE & TRAPS -->
    <div class="bg-[#111] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-6">Common Traps & Rules</h3>
        
        <div class="space-y-6">
            <!-- RULE 1 -->
            <div class="flex gap-4 items-start">
                <div class="bg-red-500/20 text-red-400 font-bold px-3 py-1 rounded">1</div>
                <div>
                     <strong class="text-white block">Integer Division truncates</strong>
                     <p class="text-sm text-gray-400 mb-2"><code>5 / 2</code> is not 2.5. It is 2. The decimal part is discarded.</p>
                     <code class="text-xs bg-black px-2 py-1 rounded text-green-400">Fix: 5.0 / 2 (Force at least one side to be float)</code>
                </div>
            </div>
            
            <!-- RULE 2 -->
            <div class="flex gap-4 items-start">
                <div class="bg-blue-500/20 text-blue-400 font-bold px-3 py-1 rounded">2</div>
                <div>
                     <strong class="text-white block">Increment Post vs Pre</strong>
                     <p class="text-sm text-gray-400 mb-2">
                        <code>++i</code> (Prefix) increments immediately.<br>
                        <code>i++</code> (Postfix) returns the OLD value, then increments.
                     </p>
                     <div class="text-xs font-mono bg-black p-2 rounded text-slate-300">
                        int x = 5;<br>
                        int y = x++; // y is 5, x becomes 6
                     </div>
                </div>
            </div>
            
             <!-- RULE 3 -->
            <div class="flex gap-4 items-start">
                <div class="bg-purple-500/20 text-purple-400 font-bold px-3 py-1 rounded">3</div>
                <div>
                     <strong class="text-white block">Short Circuit Logic</strong>
                     <p class="text-sm text-gray-400 mb-2">C++ stops checking as soon as it knows the answer.</p>
                     <div class="text-xs font-mono bg-black p-2 rounded text-slate-300">
                        bool check = (false && crash_computer());<br>
                        // crash_computer() never runs because False && Anything is False.
                     </div>
                </div>
            </div>
        </div>
    </div>

    <!-- TERNARY & COMPOUND ASSIGNMENT -->
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#0f1014] p-6 rounded-xl border border-white/10">
            <h3 class="text-white font-bold mb-2">The Ternary Operator</h3>
            <p class="text-xs text-slate-400 mb-4">A one-line if-else.</p>
            <pre class="bg-black/50 p-4 rounded text-xs font-mono text-green-300">
// condition ? true_val : false_val
int max = (a > b) ? a : b;
            </pre>
        </div>
        <div class="bg-[#0f1014] p-6 rounded-xl border border-white/10">
             <h3 class="text-white font-bold mb-2">Compound Assignment</h3>
             <p class="text-xs text-slate-400 mb-4">Syntactic Sugar.</p>
             <pre class="bg-black/50 p-4 rounded text-xs font-mono text-blue-300">
x += 5;  // x = x + 5
x *= 2;  // x = x * 2
x %= 10; // x = x % 10
             </pre>
        </div>
    </div>
</div>
"""
    },
                {
                    "id": "cpp-1-6",
                    "title": "1.6 Mini Lab: Solving Your First Problems",
                    "duration": "90 min",
                    "type": "code",
                    "content": """
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-r from-green-900/40 to-[#0f1014] p-8 rounded-2xl border border-green-500/20">
        <h2 class="text-3xl font-bold text-white mb-2">Lab: Apply What You Know</h2>
        <p class="text-slate-400">
            Theory is useless without practice. Here are 3 challenges to test your skills with variables, I/O, and math.
        </p>
    </div>

    <!-- CHALLENGE 1 -->
    <div class="bg-[#111] rounded-2xl border border-white/10 overflow-hidden">
        <div class="bg-white/5 p-4 border-b border-white/5 flex justify-between items-center">
            <h3 class="font-bold text-white">Challenge 1: The Temperature Converter</h3>
            <span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Easy</span>
        </div>
        <div class="p-8 space-y-6">
            <p class="text-sm text-slate-400">
                Write a program that takes a temperature in <strong>Celsius</strong> and converts it to <strong>Fahrenheit</strong>.
            </p>
            <div class="bg-black/50 p-4 rounded-lg space-y-2">
                <div class="text-xs text-gray-500 uppercase font-bold">Math Formula</div>
                <code class="text-blue-300 font-mono">F = (C * 9/5) + 32</code>
            </div>
            
            <div class="bg-blue-900/10 border border-blue-500/20 p-4 rounded-lg">
                <strong class="text-blue-400 text-xs uppercase mb-2 block">Hint (The Integer Trap)</strong>
                <p class="text-xs text-gray-400">
                    Be careful with <code>9/5</code>. In C++, integer division <code>9/5</code> equals <code>1</code>. 
                    You need to force floating point math. How?
                </p>
            </div>
            
            <details class="group">
                <summary class="cursor-pointer text-sm text-gray-400 hover:text-white flex items-center gap-2">
                    <span>Show Solution</span>
                    <div class="h-px bg-white/10 grow"></div>
                </summary>
                <div class="mt-4 bg-black p-4 rounded-xl border border-white/10 font-mono text-xs overflow-x-auto">
                    <span class="text-purple-400">#include</span> <span class="text-green-300">&lt;iostream&gt;</span><br>
                    <span class="text-purple-400">int</span> <span class="text-blue-400">main</span>() {<br>
                    &nbsp;&nbsp;<span class="text-purple-400">double</span> c;<br>
                    &nbsp;&nbsp;std::cout << <span class="text-green-300">"Enter Celsius: "</span>;<br>
                    &nbsp;&nbsp;std::cin >> c;<br><br>
                    &nbsp;&nbsp;<span class="text-gray-500">// Fix: Use 9.0 to force float division</span><br>
                    &nbsp;&nbsp;<span class="text-purple-400">double</span> f = (c * <span class="text-orange-400">9.0</span> / 5.0) + 32;<br><br>
                    &nbsp;&nbsp;std::cout << <span class="text-green-300">"Fahrenheit: "</span> << f << std::endl;<br>
                    &nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-orange-400">0</span>;<br>
                    }
                </div>
            </details>
        </div>
    </div>

    <!-- CHALLENGE 2 -->
    <div class="bg-[#111] rounded-2xl border border-white/10 overflow-hidden">
        <div class="bg-white/5 p-4 border-b border-white/5 flex justify-between items-center">
            <h3 class="font-bold text-white">Challenge 2: Odd or Even?</h3>
            <span class="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Medium</span>
        </div>
        <div class="p-8 space-y-6">
            <p class="text-sm text-slate-400">
                Ask the user for an integer. Tell them if it is <strong>Odd</strong> or <strong>Even</strong>.
                You haven't learned <code>if</code> statements yet? Use the <strong>Ternary Operator</strong>.
            </p>
            <div class="bg-black/50 p-4 rounded-lg space-y-2">
                <div class="text-xs text-gray-500 uppercase font-bold">Logic Helper</div>
                <code class="text-purple-300 font-mono">number % 2</code>
                <p class="text-xs text-gray-500">If remainder is 0, it is even.</p>
            </div>
            
            <details class="group">
                <summary class="cursor-pointer text-sm text-gray-400 hover:text-white flex items-center gap-2">
                    <span>Show Solution</span>
                    <div class="h-px bg-white/10 grow"></div>
                </summary>
                <div class="mt-4 bg-black p-4 rounded-xl border border-white/10 font-mono text-xs">
                    <span class="text-gray-500">// (condition) ? true_val : false_val</span><br>
                    std::string result = (num % 2 == 0) ? <span class="text-green-300">"Even"</span> : <span class="text-green-300">"Odd"</span>;
                </div>
            </details>
        </div>
    </div>
    
     <!-- CHALLENGE 3 -->
    <div class="bg-[#111] rounded-2xl border border-white/10 overflow-hidden">
        <div class="bg-white/5 p-4 border-b border-white/5 flex justify-between items-center">
            <h3 class="font-bold text-white">Challenge 3: Last Digit Trick</h3>
            <span class="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Hard</span>
        </div>
        <div class="p-8 space-y-6">
            <p class="text-sm text-slate-400">
                Write a program that prints ONLY the last digit of ANY integer the user enters.
                (e.g., Input: 12345 -> Output: 5)
            </p>
            <div class="bg-purple-900/10 border border-purple-500/20 p-4 rounded-lg">
                <strong class="text-purple-400 text-xs uppercase mb-2 block">Hint</strong>
                <p class="text-xs text-gray-400">
                    The <strong>Modulus Operator</strong> (<code>%</code>) is your best friend here. What happens if you mod by 10?
                </p>
            </div>
        </div>
    </div>
</div>

"""
    },
    {
        "id": "cpp-1-7",
        "title": "1.7 The Debugger: Your Superpower",
        "duration": "60 min",
        "type": "video",
        "content": """
<div class="space-y-12 font-sans text-slate-200">
    <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="flex-1">
            <h2 class="text-3xl font-bold text-white mb-4">Stop Guessing. Start Seeing.</h2>
            <p class="text-slate-400 leading-relaxed text-sm">
                Beginners debug by adding <code>cout << "here1" << endl;</code>.<br>
                Pros use a <strong>Debugger</strong>. It lets you freeze time, inspect the brain of your program, and step through it line-by-line.
            </p>
        </div>
        <div class="w-full md:w-1/3 aspect-video bg-gradient-to-tr from-blue-900 to-purple-900 rounded-xl flex items-center justify-center shadow-2xl border border-white/10 relative overflow-hidden group">
            <div class="absolute inset-0 bg-[url('https://cdn.dribbble.com/users/1/screenshots/1/debugger_ui.png')] bg-cover opacity-20 mix-blend-overlay"></div>
            <div class="text-center z-10">
                <div class="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:scale-110 transition">
                    <span class="text-2xl">▶️</span>
                </div>
                <span class="text-xs font-bold tracking-widest uppercase">Watch Tutorial</span>
            </div>
        </div>
    </div>

    <!-- DEBUGGER INTERFACE SIMULATION -->
    <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl font-mono text-xs">
        <!-- TOOLBAR -->
        <div class="bg-[#2d2d2d] p-2 flex gap-4 border-b border-black">
            <div class="flex gap-2">
                <button class="px-3 py-1 bg-[#3a3d41] hover:bg-[#4a4d51] text-green-400 rounded">▶ Continue (F5)</button>
                <button class="px-3 py-1 bg-[#3a3d41] hover:bg-[#4a4d51] text-blue-400 rounded">⤵ Step Over (F10)</button>
                <button class="px-3 py-1 bg-[#3a3d41] hover:bg-[#4a4d51] text-purple-400 rounded">↓ Step Into (F11)</button>
            </div>
        </div>

        <div class="grid grid-cols-12 h-96">
            <!-- CODE PANE -->
            <div class="col-span-8 border-r border-black p-4 bg-[#1e1e1e] relative">
                <div class="absolute left-0 top-16 w-full bg-yellow-900/30 border-y border-yellow-500/10 h-6"></div>
                <div class="text-gray-500 mb-1">1  <span class="text-purple-400">int</span> main() {</div>
                <div class="text-gray-500 mb-1">2      <span class="text-purple-400">int</span> a = 5;</div>
                <div class="text-gray-500 mb-1 flex items-center">
                    <div class="w-3 h-3 bg-red-500 rounded-full mr-3 shadow-lg shadow-red-500/50"></div>
                    <span class="text-slate-300">3      <span class="text-purple-400">int</span> b = 10; <span class="text-yellow-500">← PAUSED HERE</span></span>
                </div>
                <div class="text-gray-500 mb-1">4      <span class="text-purple-400">int</span> sum = a + b;</div>
                <div class="text-gray-500 mb-1">5      <span class="text-purple-400">return</span> 0;</div>
                <div class="text-gray-500">6  }</div>
            </div>

            <!-- VARIABLES PANE -->
            <div class="col-span-4 bg-[#252526] flex flex-col">
                <div class="p-2 bg-[#2d2d2d] uppercase text-[10px] font-bold text-slate-400 border-b border-black">Variables</div>
                <div class="p-2 space-y-2">
                     <div class="flex justify-between hover:bg-white/5 p-1 rounded">
                        <span class="text-blue-300">a</span>
                        <span class="text-orange-300">5</span>
                    </div>
                     <div class="flex justify-between hover:bg-white/5 p-1 rounded bg-white/5">
                        <span class="text-blue-300">b</span>
                        <span class="text-gray-500 animate-pulse">random_junk_value</span>
                    </div>
                    <div class="text-[10px] text-gray-500 mt-4 p-2 bg-yellow-900/20 text-yellow-200 rounded">
                        <strong>Why junk?</strong> We are paused on line 3. Line 3 hasn't executed yet. 
                        So <code>b</code> still holds whatever trash was in that memory address.
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- CONCEPTS -->
    <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-2">🔴 Breakpoint</h3>
            <p class="text-xs text-slate-400">Click to the left of a line number. The code will freeze exactly BEFORE running this line.</p>
        </div>
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-blue-400 font-bold mb-2">⤵ Step Over (F10)</h3>
            <p class="text-xs text-slate-400">Run the current line and move to the next one. This is what you use 90% of the time.</p>
        </div>
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-purple-400 font-bold mb-2">↓ Step Into (F11)</h3>
            <p class="text-xs text-slate-400">If the line is a function call, go INSIDE that function to debug it.</p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-1-8",
        "title": "1.8 Style & Best Practices",
        "duration": "45 min",
        "type": "article",
        "content": """
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Write Code for Humans</h2>
    
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5">
        <p class="text-lg text-slate-400 mb-8 max-w-2xl">
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." 
            — Martin Fowler
        </p>
        
        <div class="grid md:grid-cols-2 gap-12 text-sm">
            <!-- BAD CODE -->
            <div class="space-y-2">
                <div class="text-red-400 font-bold uppercase mb-1">Bad Code</div>
                <div class="bg-black p-4 rounded border border-red-500/20 font-mono text-xs opacity-60">
                    int n = 86400;<br>
                    int x = i * n;<br>
                    <span class="text-gray-600">// What is n? What is x?</span>
                </div>
            </div>

            <!-- GOOD CODE -->
            <div class="space-y-2">
                 <div class="text-green-400 font-bold uppercase mb-1">Clean Code</div>
                <div class="bg-black p-4 rounded border border-green-500/20 font-mono text-xs">
                    <span class="text-purple-400">const</span> int SECONDS_IN_DAY = 86400;<br>
                    int total_seconds = days * SECONDS_IN_DAY;<br>
                    <span class="text-green-300">// Crystal clear.</span>
                </div>
            </div>
        </div>
    </div>

    <!-- RULES OF STYLE -->
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#0f1014] p-6 rounded-xl border border-white/10">
            <h3 class="text-white font-bold mb-4">1. Naming Conventions</h3>
            <p class="text-xs text-slate-400 mb-4">Choose one style and stick to it.</p>
            <ul class="space-y-3 text-xs font-mono">
                <li class="flex justify-between">
                    <span class="text-gray-400">Variables</span>
                    <span class="text-blue-300">snake_case_variable</span>
                </li>
                <li class="flex justify-between">
                    <span class="text-gray-400">Functions</span>
                    <span class="text-yellow-300">CamelCaseFunction</span>
                </li>
                <li class="flex justify-between">
                    <span class="text-gray-400">Constants</span>
                    <span class="text-purple-400">kConstantValue</span>
                </li>
            </ul>
        </div>
        
        <div class="bg-[#0f1014] p-6 rounded-xl border border-white/10">
             <h3 class="text-white font-bold mb-4">2. Comments</h3>
             <p class="text-xs text-slate-400 mb-4">
                 Don't explain <strong>WHAT</strong> the code is doing (the code says that).
                 Explain <strong>WHY</strong> it is doing it.
             </p>
             <div class="bg-black p-3 rounded font-mono text-[10px] space-y-2">
                 <div class="text-red-400 opacity-50">// Increment i by 1 (USELESS)</div>
                 <div class="text-slate-300">i++;</div>
                 <div class="h-px bg-white/10"></div>
                 <div class="text-green-400">// Skip header row in CSV file (VALUABLE)</div>
                 <div class="text-slate-300">file.ignore(100, &#92;n);</div>
             </div>
        </div>
    </div>
</div>
"""
    }
]
