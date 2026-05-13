
module_2_lessons = [
    {
        "id": "cpp-2-1",
        "title": "2.1 Logic & Branching: The Art of Decision Making",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1014] to-[#2e1a1a] border border-red-500/20 p-10">
        <div class="relative z-10">
            <h1 class="text-4xl font-extrabold text-white mb-6">Controlled Chaos</h1>
            <p class="text-lg text-slate-400">
                A program without decisions is just a calculator. <strong>Control Flow</strong> allows your code to react to the world. We'll explore <code>if</code>, <code>switch</code>, and the hidden performance costs of bad decisions.
            </p>
        </div>
        <div class="absolute top-0 right-0 p-8 opacity-10 text-[10rem] font-black text-red-500">?</div>
    </div>

    <!-- DECISION TREE VISUAL -->
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5">
        <h3 class="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
            <span class="text-2xl">🌱</span> The Anatomy of Choice
        </h3>
        <div class="flex flex-col items-center gap-2 w-full font-mono text-xs">
            <!-- Start -->
            <div class="bg-gray-800 px-6 py-2 rounded-full border border-gray-600 text-gray-300">Program Start</div>
            <div class="h-6 w-0.5 bg-gray-700"></div>
            
            <!-- Condition -->
            <div class="bg-blue-900/20 border-2 border-blue-500 px-8 py-4 rounded-lg relative">
                <span class="text-blue-300 font-bold">is_user_logged_in?</span>
                <!-- Branches -->
                <div class="absolute top-1/2 -left-12 w-12 h-0.5 bg-red-500/50"></div>
                <div class="absolute top-1/2 -left-20 text-red-400 font-bold">FALSE</div>
                
                <div class="absolute top-1/2 -right-12 w-12 h-0.5 bg-green-500/50"></div>
                <div class="absolute top-1/2 -right-20 text-green-400 font-bold">TRUE</div>
            </div>
            
            <div class="grid grid-cols-2 gap-32 w-full max-w-lg mt-2">
                <!-- False Path -->
                <div class="flex flex-col items-center">
                    <div class="h-8 w-0.5 bg-gray-700"></div>
                    <div class="bg-red-900/10 border border-red-500/30 p-4 rounded text-center w-full">
                        <span class="text-red-300 block mb-1">redirect_login()</span>
                        <span class="text-[10px] text-gray-500">The "else" block</span>
                    </div>
                </div>
                <!-- True Path -->
                <div class="flex flex-col items-center">
                    <div class="h-8 w-0.5 bg-gray-700"></div>
                    <div class="bg-green-900/10 border border-green-500/30 p-4 rounded text-center w-full">
                        <span class="text-green-300 block mb-1">show_dashboard()</span>
                        <span class="text-[10px] text-gray-500">The "if" block</span>
                    </div>
                </div>
            </div>
            
            <!-- Merge -->
            <div class="mt-8 flex flex-col items-center">
                <div class="text-gray-600 mb-2">Paths Merge</div>
                <div class="bg-gray-800 px-6 py-2 rounded-full border border-gray-600 text-gray-300">Program Continues</div>
            </div>
        </div>
    </div>

    <!-- SYNTAX DEEP DIVE -->
    <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white">The <code>if</code> Statement</h3>
            <p class="text-slate-400 leading-relaxed text-sm">
                The bread and butter of logic. It evaluates a boolean expression. If true, it runs the block.
            </p>
            <pre class="bg-[#0d0d0d] p-4 rounded-lg border-l-4 border-blue-500 text-sm font-mono text-slate-300">
if (health <= 0) {
    state = DEAD;
} else if (health < 20) {
    state = CRITICAL;
} else {
    state = ALIVE;
}</pre>
            <div class="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded text-xs text-yellow-200">
                <strong>💡 Pitfall: The Assignment Trap</strong><br>
                <code>if (x = 5)</code> is VALID code! It assigns 5 to x, returns 5 (true), and always runs. 
                Always use <code>if (x == 5)</code>.
                <br><em>Yoda Conditions</em> (e.g., <code>if (5 == x)</code>) prevent this, as <code>5 = x</code> is a compile error.
            </div>
        </div>

        <div class="space-y-6">
             <h3 class="text-2xl font-bold text-white">The <code>switch</code> Statement</h3>
             <p class="text-slate-400 leading-relaxed text-sm">
                 Optimized for optimizing a single variable against <strong>constants</strong>. Faster than <code>if-else</code> chains for many cases (jump tables).
             </p>
             <pre class="bg-[#0d0d0d] p-4 rounded-lg border-l-4 border-purple-500 text-sm font-mono text-slate-300">
switch (input) {
    case 'w': move_forward(); break;
    case 'a': turn_left(); break;
    case 's': move_back(); break;
    case 'd': turn_right(); break;
    default:  beep();
}</pre>
            <div class="bg-purple-900/20 border border-purple-500/30 p-4 rounded text-xs text-purple-200">
                <strong>💡 Feature: Fallthrough</strong><br>
                Without <code>break</code>, execution flows to the next case.
                <br><code>case 'a': case 'A':</code> executes for both.
            </div>
        </div>
    </div>

    <!-- ADVANCED THEORY: BRANCH PREDICTION -->
    <div class="bg-[#0a0a0a] rounded-xl p-8 border border-white/10">
        <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-white">🔧 Under the Hood: Branch Prediction</h3>
            <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded text-xs font-bold uppercase">Performance Critical</span>
        </div>
        <p class="text-slate-400 mb-6 text-sm">
            Modern CPUs are pipelines. They fetch instructions miles ahead of execution. When they see an <code>if</code>, they <strong>guess</strong> the outcome to keep the pipeline full.
        </p>

        <div class="grid md:grid-cols-2 gap-8 text-sm">
            <div class="bg-black/50 p-6 rounded-xl border border-green-500/20">
                <h4 class="text-green-400 font-bold mb-2">Scenario A: Sorted Data</h4>
                <div class="font-mono text-xs text-gray-500 mb-2">Values: 1, 2, 3, 4, 5, 6...</div>
                <div class="font-mono text-xs text-white mb-4">if (val > 50) ...</div>
                <div class="flex gap-1 mb-4">
                    <span class="w-4 h-4 bg-green-500 rounded-sm" title="Correct Guess"></span>
                    <span class="w-4 h-4 bg-green-500 rounded-sm"></span>
                    <span class="w-4 h-4 bg-green-500 rounded-sm"></span>
                    <span class="w-4 h-4 bg-green-500 rounded-sm"></span>
                    <span class="w-4 h-4 bg-green-500 rounded-sm"></span>
                </div>
                <p class="text-xs text-slate-300">
                    The pattern is typically TTTTTFFFFFF. The CPU learns this instantly. 
                    <br><strong class="text-green-400">Result: Zero Stalls. Maximum Speed.</strong>
                </p>
            </div>

            <div class="bg-black/50 p-6 rounded-xl border border-red-500/20">
                <h4 class="text-red-400 font-bold mb-2">Scenario B: Random Data</h4>
                <div class="font-mono text-xs text-gray-500 mb-2">Values: 82, 4, 19, 99, 1...</div>
                <div class="font-mono text-xs text-white mb-4">if (val > 50) ...</div>
                <div class="flex gap-1 mb-4">
                    <span class="w-4 h-4 bg-green-500 rounded-sm"></span>
                    <span class="w-4 h-4 bg-red-500 rounded-sm animate-pulse" title="Wrong Guess (Pipeline Flush)"></span>
                    <span class="w-4 h-4 bg-green-500 rounded-sm"></span>
                    <span class="w-4 h-4 bg-red-500 rounded-sm animate-pulse"></span>
                    <span class="w-4 h-4 bg-green-500 rounded-sm"></span>
                </div>
                <p class="text-xs text-slate-300">
                    The pattern TFFTFTT is unpredictable. The CPU guesses wrong ~50% of the time.
                    <br><strong class="text-red-400">Result: Pipeline Flush. 6x Slower.</strong>
                </p>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-2-2",
        "title": "2.2 Loops & Iteration: The Engines of Code",
        "duration": "50 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="flex flex-col md:flex-row gap-8 items-center bg-[#1a1a1a] p-8 rounded-3xl border border-white/5">
        <div class="flex-1">
            <h1 class="text-3xl font-extrabold text-white mb-4">The Infinite Cycle</h1>
            <p class="text-slate-400 leading-relaxed">
                Computers excel at repetition. Loops allow us to run the same block of code millions of times per second. We will master the <code>for</code>, <code>while</code>, and modern <code>range-based for</code>.
            </p>
        </div>
        <div class="text-[5rem] animate-spin-slow opacity-20">⚙️</div>
    </div>

    <!-- LOOP ANATOMY -->
    <div class="grid md:grid-cols-3 gap-6">
        <!-- FOR -->
        <div class="bg-[#111] p-6 rounded-xl border-t-4 border-blue-500">
            <h3 class="text-xl font-bold text-white mb-2">The 'For' Loop</h3>
            <p class="text-xs text-gray-500 mb-4 h-8">Best when you know the <strong>exact number</strong> of iterations.</p>
            <div class="font-mono text-xs bg-black p-3 rounded text-blue-300">
                for (int i=0; i<10; i++) {<br>
                &nbsp;&nbsp;run();<br>
                }
            </div>
            <div class="mt-4 grid grid-cols-2 gap-2 text-[10px] text-gray-500">
                <div>1. Init</div>
                <div>2. Condition</div>
                <div>3. Body</div>
                <div>4. Increment</div>
            </div>
        </div>

        <!-- WHILE -->
        <div class="bg-[#111] p-6 rounded-xl border-t-4 border-purple-500">
            <h3 class="text-xl font-bold text-white mb-2">The 'While' Loop</h3>
            <p class="text-xs text-gray-500 mb-4 h-8">Best when waiting for a <strong>state change</strong>.</p>
            <div class="font-mono text-xs bg-black p-3 rounded text-purple-300">
                while (player.isAlive()) {<br>
                &nbsp;&nbsp;gameLoop();<br>
                }
            </div>
             <div class="mt-4 text-[10px] text-gray-500">
                Checks condition <strong>before</strong> the body runs. Might run 0 times.
            </div>
        </div>

        <!-- DO-WHILE -->
        <div class="bg-[#111] p-6 rounded-xl border-t-4 border-orange-500">
            <h3 class="text-xl font-bold text-white mb-2">The 'Do-While' Loop</h3>
            <p class="text-xs text-gray-500 mb-4 h-8">Guaranteed to run <strong>at least once</strong>.</p>
            <div class="font-mono text-xs bg-black p-3 rounded text-orange-300">
                do {<br>
                &nbsp;&nbsp;input = read();<br>
                } while (input != -1);
            </div>
            <div class="mt-4 text-[10px] text-gray-500">
                Checks condition <strong>after</strong> the body runs. Good for inputs.
            </div>
        </div>
    </div>

    <!-- MODERN C++: RANGE BASED -->
    <div class="bg-gradient-to-r from-green-900/10 to-emerald-900/10 border border-green-500/20 rounded-2xl p-8">
        <div class="flex items-center gap-4 mb-6">
            <span class="bg-green-500 text-black px-3 py-1 rounded text-xs font-bold uppercase">Modern C++ (C++11)</span>
            <h3 class="text-2xl font-bold text-white">Range-Based For Loops</h3>
        </div>
        <p class="text-slate-400 mb-8 max-w-2xl text-sm">
            Stop worrying about iterators and bounds checks. Read this as "For every <code>item</code> in <code>collection</code>".
        </p>

        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <strong class="text-gray-500 text-xs uppercase tracking-widest block mb-2">The Old Way (Error Prone)</strong>
                <pre class="bg-black/50 p-4 rounded text-xs text-gray-400 opacity-60">
std::vector&lt;int&gt; nums = {10, 20, 30};
for (int i = 0; i < nums.size(); ++i) {
    std::cout << nums[i] << " ";
}</pre>
            </div>
            <div>
                <strong class="text-green-500 text-xs uppercase tracking-widest block mb-2">The Modern Way (Clean)</strong>
                <pre class="bg-black/50 p-4 rounded text-sm text-green-300 border-l-2 border-green-500">
std::vector&lt;int&gt; nums = {10, 20, 30};
for (int num : nums) {
    std::cout << num << " ";
}</pre>
            </div>
        </div>

        <div class="mt-6 bg-green-900/20 p-4 rounded-lg flex gap-4 items-center">
            <div class="text-2xl">💡</div>
            <div class="text-xs text-green-200">
                <strong>Performance Tip:</strong> Use <code>const auto&</code> to avoid copying complex objects.<br>
                <code>for (const auto& player : players)</code> = "Look at every player, don't copy them, don't modify them."
            </div>
        </div>
    </div>

    <!-- CONTROL FLOW COMMANDS -->
    <div class="bg-[#111] rounded-xl p-8 border border-white/10">
        <h3 class="text-xl font-bold text-white mb-6">Breaking the Cycle</h3>
        <div class="grid gap-4">
            <div class="flex items-center gap-4">
                <code class="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs w-24 text-center">break</code>
                <p class="text-sm text-slate-400">Immediately exits the loop. Useful for "Search and Stop".</p>
            </div>
            <div class="flex items-center gap-4">
                <code class="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs w-24 text-center">continue</code>
                <p class="text-sm text-slate-400">Skips the <em>rest</em> of the current iteration and jumps to the next one. Useful for filtering.</p>
            </div>
            <div class="flex items-center gap-4 opacity-50">
                <code class="bg-gray-500/20 text-gray-400 px-2 py-1 rounded text-xs w-24 text-center">goto</code>
                <p class="text-sm text-slate-400">Jumps to a specific label. <strong>Avoid at all costs.</strong> Creates spaghetti code.</p>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-2-3",
        "title": "2.3 Functions & The Stack: Memory Deep Dive",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <!-- HERO -->
    <div class="text-center bg-[#0d0d0d] p-10 rounded-3xl border border-white/5">
        <h1 class="text-3xl font-extrabold text-white mb-4">The Stack Frame</h1>
        <p class="text-slate-400 max-w-2xl mx-auto">
            Functions are not just code jumps. They are memory operations. Every time you call a function, a new "world" is created on the RAM. This is <strong>The Stack</strong>.
        </p>
    </div>

    <!-- STACK VISUALIZER -->
    <div class="grid md:grid-cols-2 gap-8 items-stretch">
        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
            <h3 class="text-xl font-bold text-white mb-4">Code View</h3>
            <pre class="font-mono text-xs bg-black p-4 rounded text-slate-300 leading-6">
void <span class="text-purple-400">B</span>(int x) {
    int y = x + 1;
    <span class="text-gray-500">// We are here</span>
}

void <span class="text-blue-400">A</span>() {
    int val = 10;
    <span class="text-purple-400 font-bold">B(val);</span>
}

int main() {
    <span class="text-blue-400 font-bold">A();</span>
    return 0;
}</pre>
        </div>

        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 relative overflow-hidden">
            <h3 class="text-xl font-bold text-white mb-4 absolute top-6 left-6">RAM View (Stack)</h3>
            <div class="h-full flex flex-col-reverse items-center justify-end pt-12 gap-2">
                <!-- Stack Bottom -->
                <div class="w-48 p-3 bg-gray-800 border border-gray-600 rounded text-center">
                    <span class="text-xs text-gray-400 block font-mono">main()</span>
                </div>
                <!-- Frame A -->
                <div class="w-48 p-3 bg-blue-900/30 border border-blue-500 rounded text-center relative">
                    <span class="text-xs text-blue-300 block font-mono font-bold">A() Frame</span>
                    <span class="text-[10px] text-blue-200/50 block mt-1">val = 10</span>
                    <span class="text-[10px] text-blue-200/50 block">Return Addr</span>
                </div>
                <!-- Frame B -->
                <div class="w-48 p-3 bg-purple-900/30 border border-purple-500 rounded text-center shadow-[0_0_20px_rgba(168,85,247,0.2)] animate-pulse">
                    <span class="text-xs text-purple-300 block font-mono font-bold">B() Frame</span>
                    <span class="text-[10px] text-purple-200/50 block mt-1">x = 10</span>
                    <span class="text-[10px] text-purple-200/50 block">y = 11</span>
                </div>
                <!-- Growth Arrow -->
                <div class="text-gray-600 text-[10px] mt-2">Stack Grows ↓ (Lower Addresses)</div>
            </div>
        </div>
    </div>

    <!-- RECURSION DEEP DIVE -->
    <div class="bg-red-900/10 border border-red-500/20 p-8 rounded-2xl">
        <h3 class="text-2xl font-bold text-white mb-4">The Cost of Recursion</h3>
        <p class="text-slate-400 text-sm mb-4">
            Recursion is when a function calls itself. Each call creates a NEW Stack Frame.
        </p>
        <div class="flex gap-4 items-center">
            <div class="flex-1 bg-black/50 p-4 rounded text-xs font-mono text-red-300">
                void forever() {<br>
                &nbsp;&nbsp;forever();<br>
                }
            </div>
            <div class="text-2xl text-slate-600">→</div>
            <div class="flex-1">
                <p class="text-sm font-bold text-white mb-1">Stack Overflow</p>
                <p class="text-xs text-slate-400">
                    You incorrectly fill up the entire reserved stack memory (usually ~1MB). The OS kills your program instantly.
                    <br><span class="text-green-400">Solution:</span> Always ensure a "Base Case" to stop the recursion.
                </p>
            </div>
        </div>
    </div>

    <!-- ANATOMY -->
    <div class="bg-[#111] p-8 rounded-2xl border border-white/5">
        <h3 class="text-xl font-bold text-white mb-6">Function Terminology</h3>
        <div class="grid md:grid-cols-3 gap-6 text-sm">
            <div>
                <strong class="text-blue-400 block mb-1">Declaration (Signature)</strong>
                <code class="block bg-black p-2 rounded text-xs text-gray-400 mb-2">int add(int a, int b);</code>
                <p class="text-xs text-slate-500">"Hey Compiler, this function exists somewhere. Trust me." (Usually in headers)</p>
            </div>
             <div>
                <strong class="text-green-400 block mb-1">Definition (Body)</strong>
                <code class="block bg-black p-2 rounded text-xs text-gray-400 mb-2">int add(int a, int b) { return a+b; }</code>
                <p class="text-xs text-slate-500">"Here is the actual code." (Usually in .cpp files)</p>
            </div>
             <div>
                <strong class="text-yellow-400 block mb-1">Parameters vs Arguments</strong>
                <p class="text-xs text-gray-400 mt-2">
                    <strong>Params:</strong> Variables in func definition (<code>a</code>, <code>b</code>).<br>
                    <strong>Args:</strong> Values passed when calling (<code>10</code>, <code>20</code>).
                </p>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-2-4",
        "title": "2.4 References vs Pointers: Data Transport",
        "duration": "55 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-8 rounded-3xl border border-white/10 text-center">
        <h1 class="text-3xl font-extrabold text-white mb-4">Moving Heavy Objects</h1>
        <p class="text-slate-400 max-w-2xl mx-auto">
            If you want to show your friend a house, you don't pick up the house and move it to them. You give them the <strong>address</strong>. C++ gives you two ways to do this: Pointers and References.
        </p>
    </div>

    <!-- METAPHOR TABLE -->
    <div class="grid md:grid-cols-3 gap-0 border border-white/10 rounded-xl overflow-hidden text-sm">
        <div class="bg-[#222] p-4 font-bold text-center border-b md:border-b-0 md:border-r border-white/10">Mechanic</div>
        <div class="bg-[#222] p-4 font-bold text-center border-b md:border-b-0 md:border-r border-white/10">Real World Metaphor</div>
        <div class="bg-[#222] p-4 font-bold text-center">C++ Concept</div>

        <div class="bg-[#111] p-4 border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center">Value</div>
        <div class="bg-[#111] p-4 text-gray-400 border-b md:border-b-0 md:border-r border-white/5">
            Xeroxing a document and giving the copy. If they draw on it, your original is safe.
        </div>
        <div class="bg-[#111] p-4 font-mono text-blue-300 flex items-center justify-center">void f(int x)</div>

        <div class="bg-[#161616] p-4 border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center">Reference</div>
        <div class="bg-[#161616] p-4 text-gray-400 border-b md:border-b-0 md:border-r border-white/5">
            Sharing a Google Doc link. If they edit it, <strong>you see the changes</strong>.
        </div>
        <div class="bg-[#161616] p-4 font-mono text-purple-300 flex items-center justify-center">void f(int &x)</div>

        <div class="bg-[#111] p-4 md:border-r border-white/5 flex items-center justify-center">Pointer</div>
        <div class="bg-[#111] p-4 text-gray-400 md:border-r border-white/5">
            Writing the GPS coordinates on a napkin. You can lose the napkin (null) or write garbage coordinates (crash).
        </div>
        <div class="bg-[#111] p-4 font-mono text-orange-300 flex items-center justify-center">void f(int *x)</div>
    </div>

    <!-- DEEP DIVE: CONST REF -->
    <div class="bg-green-900/10 border border-green-500/20 p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center">
        <div class="flex-1">
            <h3 class="text-2xl font-bold text-green-400 mb-2">The Golden Rule: const ref</h3>
            <p class="text-slate-300 text-sm mb-4">
                Copying large objects (like a 1MB Image or a long String) is slow. Passing by reference is fast, but dangerous (function might change it).
            </p>
            <p class="text-white font-bold text-sm">Solution: <code>const Type&</code></p>
            <p class="text-slate-400 text-xs mt-2">"Here is a link to the Google Doc (Reference), but in 'View Only' mode (const)."</p>
        </div>
        <div class="bg-black/50 p-6 rounded-xl font-mono text-sm border border-green-500/30">
            <span class="text-gray-500">// BAD (Slow copy)</span><br>
            void printImage(Image img);<br><br>
            <span class="text-green-400">// GOOD (Fast & Safe)</span><br>
            void printImage(<span class="text-purple-400">const</span> Image<span class="text-blue-400">&</span> img);
        </div>
    </div>

    <!-- POINTER DANGERS -->
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5">
        <h3 class="text-xl font-bold text-white mb-6">Why use Pointers at all?</h3>
        <p class="text-slate-400 text-sm mb-6">
            References are safer and easier. But Pointers have two superpowers:
        </p>
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <strong class="text-orange-400 block mb-2">1. Nullability</strong>
                <p class="text-xs text-gray-500">
                    A reference MUST refer to something. A pointer can be <code>nullptr</code> (pointing to nothing).
                    Useful for "optional" data.
                </p>
            </div>
            <div>
                <strong class="text-orange-400 block mb-2">2. Reassignability</strong>
                <p class="text-xs text-gray-500">
                    A reference is bound for life. A pointer can allow you to point to Object A, then later point to Object B.
                </p>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-2-5",
        "title": "2.5 Scope, Lifetime & Storage Classes",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Where do variables live?</h2>
        <p class="text-slate-400">Understanding variable lifetime is key to avoiding bugs.</p>
    </div>

    <!-- TIMELINE VISUAL -->
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 relative">
        <div class="absolute left-10 top-0 bottom-0 w-0.5 bg-gray-700"></div>
        
        <div class="space-y-12 pl-16 relative">
            <!-- LOCAL -->
            <div class="relative">
                <div class="absolute -left-[45px] top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">1</div>
                <h3 class="text-lg font-bold text-blue-400 mb-1">Automatic (Stack)</h3>
                <p class="text-xs text-gray-400 mb-2">Default for local variables.</p>
                <div class="bg-black p-4 rounded text-xs font-mono border border-blue-500/20">
                    {<br>
                    &nbsp;&nbsp;int x = 10; <span class="text-green-500">// Born here</span><br>
                    } <span class="text-red-500">// Dies here (Popped from Stack)</span>
                </div>
            </div>

            <!-- STATIC -->
            <div class="relative">
                <div class="absolute -left-[45px] top-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white">2</div>
                <h3 class="text-lg font-bold text-purple-400 mb-1">Static (Global Data)</h3>
                <p class="text-xs text-gray-400 mb-2">Lives for the ENTIRE program duration.</p>
                <div class="bg-black p-4 rounded text-xs font-mono border border-purple-500/20">
                    void count() {<br>
                    &nbsp;&nbsp;static int total = 0; <span class="text-green-500">// Init once</span><br>
                    &nbsp;&nbsp;total++; <span class="text-yellow-500">// Remembers value between calls!</span><br>
                    }
                </div>
            </div>
        </div>
    </div>

    <!-- PITFALL: SHADOWING -->
    <div class="bg-[#111] p-6 rounded-xl border border-white/10">
        <h3 class="text-white font-bold mb-4">⚠️ Variable Shadowing</h3>
        <p class="text-sm text-slate-400 mb-4">
            When an inner scope variable has the same name as an outer scope one. The inner one "shadows" (hides) the outer one.
        </p>
        <div class="grid md:grid-cols-2 gap-4">
            <pre class="bg-black/50 p-4 rounded text-xs font-mono text-gray-400">
int x = 10;
if (true) {
    int x = 5; <span class="text-red-400">// Shadowing!</span>
    cout << x; <span class="text-blue-400">// Prints 5</span>
}
cout << x; <span class="text-blue-400">// Prints 10</span></pre>
            <div class="flex items-center justify-center text-xs text-slate-500 italic">
                Avoid this. It creates confusing bugs. Enable compiler warnings (-Wshadow).
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-2-6",
        "title": "2.6 Headers & Compilation: The Build Pipeline",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-8 rounded-3xl border border-white/10 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">From Text to Matrix</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
            How does your English-like C++ code turn into binary 1s and 0s? It's a 3-step assembly line.
        </p>
    </div>

    <!-- PIPELINE VISUAL -->
    <div class="flex flex-col md:flex-row gap-2 items-center justify-center text-xs font-bold text-black uppercase tracking-wider">
        <!-- Step 1 -->
        <div class="bg-blue-500 p-4 rounded-lg w-32 text-center relative group cursor-help">
            Preprocessor
            <div class="absolute top-12 left-0 right-0 bg-gray-800 text-white p-2 rounded text-[10px] normal-case hidden group-hover:block z-10">
                Handles #include, #define. Copy-pastes text.
            </div>
        </div>
        <div class="text-gray-500 text-xl">→</div>
        
        <!-- Step 2 -->
        <div class="bg-green-500 p-4 rounded-lg w-32 text-center relative group cursor-help">
            Compiler
            <div class="absolute top-12 left-0 right-0 bg-gray-800 text-white p-2 rounded text-[10px] normal-case hidden group-hover:block z-10">
                Checks syntax. Converts .cpp to .o (Object files).
            </div>
        </div>
        <div class="text-gray-500 text-xl">→</div>
        
        <!-- Step 3 -->
        <div class="bg-purple-500 p-4 rounded-lg w-32 text-center relative group cursor-help">
            Linker
            <div class="absolute top-12 left-0 right-0 bg-gray-800 text-white p-2 rounded text-[10px] normal-case hidden group-hover:block z-10">
                Stitches .o files together into .exe. Resolves symbols.
            </div>
        </div>
    </div>

    <!-- HEADER FILES -->
    <div class="grid md:grid-cols-2 gap-8">
        <div>
            <h3 class="text-xl font-bold text-white mb-4">The Linker Puzzle</h3>
            <p class="text-slate-400 text-sm mb-4 leading-relaxed">
                C++ files (.cpp) are compiled <strong>separately</strong>. They don't know about each other.<br>
                Header files (.h) act as a "Promise". They tell file A that a function exists in file B (later).
            </p>
            <ul class="space-y-2 text-xs text-gray-400 list-disc list-inside">
                <li><span class="text-white">.h (Header):</span> Declarations (What it is). Shared.</li>
                <li><span class="text-white">.cpp (Source):</span> Definitions (How it works). Private.</li>
            </ul>
        </div>
        
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 font-mono text-xs">
            <div class="text-gray-500 mb-2">// math.h</div>
            <div class="text-blue-300">int add(int a, int b);</div>
            <div class="mt-4 text-gray-500 mb-2">// main.cpp</div>
            <div class="text-purple-300">#include "math.h"</div>
            <div class="text-white">add(1, 2); <span class="text-gray-600">// Compiler: "I know 'add' exists!"</span></div>
            <div class="mt-4 text-gray-500 mb-2">// math.cpp</div>
            <div class="text-green-300">int add(int a, int b) { return a+b; }</div>
        </div>
    </div>

    <!-- INCLUDE GUARDS -->
    <div class="bg-[#222] p-6 rounded-xl border border-white/5">
        <h3 class="text-white font-bold mb-4">One Definition Rule (ODR)</h3>
        <p class="text-sm text-gray-400 mb-4">
            If you accidentally include the same header twice (e.g., A includes B, B includes C, A includes C), the compiler sees duplicate definitions and crashes.
        </p>
        <div class="bg-black/50 p-4 rounded border border-blue-500/20 flex justify-between items-center">
             <div>
                 <code class="text-blue-400 text-sm">#pragma once</code>
                 <p class="text-[10px] text-gray-500 mt-1">Put this at the top of every .h file. Solved.</p>
             </div>
             <span class="text-2xl">🛡️</span>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-2-7",
        "title": "2.7 Namespaces and Scope Resolution",
        "duration": "40 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="flex items-center gap-6 bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <div class="text-5xl">📦</div>
        <div>
            <h2 class="text-2xl font-bold text-white mb-2">Namespaces</h2>
            <p class="text-slate-400 text-sm">
                As your project grows, names collide. Two libraries might both have a <code>Physics</code> class. Namespaces act like folders for your code names.
            </p>
        </div>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
        <div class="border border-white/10 p-6 rounded-xl">
             <h3 class="text-blue-400 font-bold mb-2">Defining</h3>
             <pre class="text-xs font-mono bg-black/50 p-4 rounded text-slate-300">
namespace engine {
    void init() { ... }
}

namespace game {
    void init() { ... }
}
             </pre>
        </div>
         <div class="border border-white/10 p-6 rounded-xl">
             <h3 class="text-green-400 font-bold mb-2">Using</h3>
             <pre class="text-xs font-mono bg-black/50 p-4 rounded text-slate-300">
int main() {
    engine::init();
    game::init();
}
             </pre>
        </div>
    </div>
    
    <!-- SCOPE RESOLUTION OPERATOR -->
    <div class="bg-[#0f1014] p-6 rounded-xl border border-white/10">
        <h3 class="text-white font-bold mb-2">The <code>::</code> Operator</h3>
        <p class="text-sm text-slate-400 mb-4">This is the "Scope Resolution Operator". It tells the compiler exactly where to look.</p>
        <ul class="space-y-2 text-xs text-gray-400 font-mono">
            <li><span class="text-blue-300">std::cout</span> -> Look in 'std' namespace for 'cout'.</li>
            <li><span class="text-blue-300">::x</span> -> Look in the Global Scope for 'x' (ignoring locals).</li>
        </ul>
    </div>

    <!-- WARNING -->
    <div class="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl">
        <h3 class="text-red-400 font-bold mb-2">⛔ Polluting the Namespace</h3>
        <code class="block bg-black/30 p-2 rounded text-red-300 text-sm mb-2">using namespace std;</code>
        <p class="text-sm text-slate-300">
            Never do this in header files! It forces the entire C++ standard library (thousands of names) into the global scope for ANY file that includes your header. It leads to mysterious compilation errors.
        </p>
    </div>
</div>
"""
    },
     {
        "id": "cpp-2-8",
        "title": "2.8 Mini Project: Math Utils",
        "duration": "1 hour",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl text-center shadow-2xl">
        <h1 class="text-3xl font-bold text-white mb-2">Mission Brief</h1>
        <p class="text-blue-100">Build your first reusable library.</p>
    </div>

    <div class="space-y-4">
        <h3 class="text-xl font-bold text-white">Objective</h3>
        <p class="text-slate-400 text-sm">
            You will implement a multi-file project. You'll create a <code>flymath</code> namespace, split declarations and definitions, and compile multiple files together.
        </p>
        
        <div class="grid md:grid-cols-2 gap-8 mt-6">
            <!-- FILE 1 -->
            <div class="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden">
                <div class="bg-[#222] px-4 py-2 border-b border-white/5 font-mono text-xs text-yellow-500">math_utils.h</div>
                <div class="p-4 text-xs font-mono text-slate-300 opacity-80">
                    #pragma once<br><br>
                    namespace flymath {<br>
                    &nbsp;&nbsp;long long factorial(int n);<br>
                    &nbsp;&nbsp;bool isPrime(int n);<br>
                    }
                </div>
            </div>
            
            <!-- FILE 2 -->
             <div class="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden">
                <div class="bg-[#222] px-4 py-2 border-b border-white/5 font-mono text-xs text-purple-500">math_utils.cpp</div>
                <div class="p-4 text-xs font-mono text-slate-300 opacity-80">
                    #include "math_utils.h"<br><br>
                     namespace flymath {<br>
                    &nbsp;&nbsp;long long factorial(int n) { ... }<br>
                    &nbsp;&nbsp;bool isPrime(int n) { ... }<br>
                    }
                </div>
            </div>
            
            <!-- FILE 3 -->
             <div class="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden col-span-2">
                <div class="bg-[#222] px-4 py-2 border-b border-white/5 font-mono text-xs text-blue-500">main.cpp</div>
                <div class="p-4 text-xs font-mono text-slate-300 opacity-80">
                    #include &lt;iostream&gt;<br>
                    #include "math_utils.h"<br><br>
                     int main() {<br>
                    &nbsp;&nbsp;std::cout << flymath::factorial(5);<br>
                    }
                </div>
            </div>
        </div>
    </div>

    <!-- CHALLENGE -->
    <div class="bg-[#111] p-6 rounded-xl border border-white/10">
        <h3 class="text-white font-bold mb-2">Implementation Details</h3>
        <ul class="list-disc list-inside text-sm text-slate-400 space-y-2">
            <li><strong>Factorial:</strong> Handle 0! = 1. Use <code>long long</code> to prevent overflow up to 20!.</li>
            <li><strong>IsPrime:</strong> Loop from 2 to sqrt(n). Return false if divisible.</li>
            <li><strong>Compile:</strong> You must tell GCC to stitch them together:<br> <code>g++ main.cpp math_utils.cpp -o app</code></li>
        </ul>
    </div>
</div>
"""
    }
]
