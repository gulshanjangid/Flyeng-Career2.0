import { Code2, Cpu, Database, Sparkles, Terminal, Coffee } from "lucide-react"
import { cppCourse } from "./cpp-course-data";
import { pythonCourse } from "./python-course-data";
import { javaCourseData } from "./java-course-data";

export const courseData: Record<string, {

    title: string;

    instructor: string;

    description: string;

    icon: any;

    color: string;

    progress?: number;

    modules: {

        id?: string;

        title: string;

        completed?: number;

        total?: number;

        lessons: {

            id: string;

            title: string;

            duration?: string;

            type: 'video' | 'article' | 'code' | 'project';

            content: string;

            questions?: {

                id: string | number;

                user: string;

                avatar: string;

                time: string;

                content: string;

                likes: number;

                replies: number;

                answer?: {

                    user: string;

                    avatar: string;

                    time: string;

                    content: string;

                };

            }[];

        }[];

    }[];

}> = {

    dsa: {

        title: "Data Structures & Algorithms Masterclass",

        instructor: "Nikhil Jangid",

        description: "Master the fundamental building blocks of computer science. Ace your technical interviews.",

        icon: Database,

        color: "text-blue-500",

        modules: [

            {

                title: "1. Introduction & Complexity",

                lessons: [

                    {

                        id: "intro-1",

                        title: "Introduction to DSA",

                        duration: "20 min",

                        type: 'video',

                        content: `

                        <div class="space-y-20 text-gray-300 font-light">

                                <!-- Hero Section -->

                                <div class="relative overflow-hidden rounded-3xl bg-black border border-green-500/30 p-8 md:p-12 group">

                                    <div class="absolute inset-0 bg-[url('https://media.giphy.com/media/A06UFEx8jxEwU/giphy.gif')] opacity-10 bg-cover bg-center mix-blend-screen pointer-events-none"></div>

                                    <div class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-green-500/20 blur-[100px] rounded-full animate-pulse"></div>

                                    <h2 class="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6 relative z-10 font-mono tracking-tighter">

                                        📍 1. THE DNA OF SOFTWARE

                                    </h2>

                                    <p class="text-xl leading-relaxed text-green-100/80 relative z-10 max-w-3xl font-mono">

                                        "Data Structures are the ingredients. Algorithms are the recipes. Complexity is the fuel."

                                    </p>

                                </div>

                                <!-- Section 0: The 3 Pillars -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-500/20 text-gray-400 text-lg font-mono">00</span>

                                        The 3 Pillars of Computing

                                    </h3>

                                    <div class="grid md:grid-cols-3 gap-6">

                                        <div class="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all group">

                                            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>

                                            <h4 class="text-xl font-bold text-blue-400 mb-2">Compute</h4>

                                            <p class="text-sm text-gray-400">The CPU. Doing the work. Algorithms live here.</p>

                                        </div>

                                        <div class="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all group">

                                            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">💾</div>

                                            <h4 class="text-xl font-bold text-green-400 mb-2">Storage</h4>

                                            <p class="text-sm text-gray-400">RAM & Disk. Saving the state. Data Structures live here.</p>

                                        </div>

                                        <div class="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all group">

                                            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">🌐</div>

                                            <h4 class="text-xl font-bold text-purple-400 mb-2">Network</h4>

                                            <p class="text-sm text-gray-400">Moving data. Distributed Systems rely on efficient DSA.</p>

                                        </div>

                                    </div>

                                </div>

                                <!-- Section 1: The Origins -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 text-lg font-mono">01</span>

                                        The Origins

                                    </h3>

                                    <div class="bg-[#111] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

                                        <div class="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                                        <p class="text-lg text-gray-400 mb-8 relative z-10">

                                            Algorithms didn't start with computers. They started with <strong class="text-white">mathematics</strong>.

                                        </p>

                                        

                                        <div class="relative z-10 grid md:grid-cols-3 gap-8">

                                            <div class="group">

                                                <div class="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">👩‍💻</div>

                                                <h4 class="text-white font-bold text-lg">Ada Lovelace (1843)</h4>

                                                <p class="text-sm text-gray-500 mt-2">Wrote the first algorithm for the Analytical Engine. Realized machines could manipulate symbols, not just numbers.</p>

                                            </div>

                                            <div class="group">

                                                <div class="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">🧠</div>

                                                <h4 class="text-white font-bold text-lg">Alan Turing (1936)</h4>

                                                <p class="text-sm text-gray-500 mt-2">Defined the "Turing Machine" — a mathematical model of computation. Proved what is (and isn't) computable.</p>

                                            </div>

                                            <div class="group">

                                                <div class="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">🏗️</div>

                                                <h4 class="text-white font-bold text-lg">John von Neumann (1945)</h4>

                                                <p class="text-sm text-gray-500 mt-2">Designed the architecture used in almost every computer today: CPU + Memory (RAM).</p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Section 2: The Hardware Reality -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 text-lg font-mono">02</span>

                                        The Hardware Reality

                                    </h3>

                                    <div class="bg-gradient-to-br from-[#0a0a0a] to-[#111] p-8 rounded-3xl border border-white/10">

                                        <p class="text-gray-400 mb-8">

                                            To understand DSA, you must understand the machine. Why is accessing an array index <code class="text-green-400">O(1)</code>?

                                        </p>

                                        <div class="grid md:grid-cols-2 gap-12 items-center">

                                            <!-- RAM Visual -->

                                            <div class="relative aspect-square bg-black rounded-xl border border-white/10 p-4 overflow-hidden group">

                                                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-20"></div>

                                                <div class="grid grid-cols-4 grid-rows-4 gap-2 h-full relative z-10">

                                                    <div class="bg-green-900/20 border border-green-500/30 rounded flex items-center justify-center text-xs text-green-500 font-mono">0x00</div>

                                                    <div class="bg-green-900/20 border border-green-500/30 rounded flex items-center justify-center text-xs text-green-500 font-mono">0x04</div>

                                                    <div class="bg-green-900/20 border border-green-500/30 rounded flex items-center justify-center text-xs text-green-500 font-mono">0x08</div>

                                                    <div class="bg-green-900/20 border border-green-500/30 rounded flex items-center justify-center text-xs text-green-500 font-mono">0x0C</div>

                                                    <!-- More cells simulated by loop or static -->

                                                    <div class="bg-white/5 rounded"></div><div class="bg-white/5 rounded"></div><div class="bg-white/5 rounded"></div><div class="bg-white/5 rounded"></div>

                                                    <div class="bg-white/5 rounded"></div><div class="bg-white/5 rounded"></div><div class="bg-white/5 rounded"></div><div class="bg-white/5 rounded"></div>

                                                    <div class="bg-white/5 rounded"></div><div class="bg-white/5 rounded"></div><div class="bg-white/5 rounded"></div><div class="bg-white/5 rounded"></div>

                                                </div>

                                                <div class="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded text-xs text-green-400 border border-green-500/30">RAM: Random Access Memory</div>

                                            </div>

                                            <div class="space-y-6">

                                                <div class="bg-black/50 p-4 rounded-xl border border-white/5">

                                                    <h4 class="text-white font-bold mb-2">The Physics of O(1)</h4>

                                                    <p class="text-sm text-gray-400">

                                                        RAM is a massive grid of capacitors. Each cell has a unique address. 

                                                        The CPU sends a signal down the address bus to <strong>physically activate</strong> just that one row and column.

                                                    </p>

                                                    <div class="mt-3 p-3 bg-blue-900/10 border border-blue-500/20 rounded text-xs text-blue-300 font-mono">

                                                        Address = Base_Address + (Index * Size_of_Type)

                                                    </div>

                                                    <p class="text-xs text-gray-500 mt-2">It's simple math. No searching required.</p>

                                                </div>

                                                

                                                <div class="bg-black/50 p-4 rounded-xl border border-white/5">

                                                    <h4 class="text-white font-bold mb-2">The CPU Cache (L1/L2/L3)</h4>

                                                    <p class="text-sm text-gray-400">

                                                        The CPU is super fast. RAM is slow. The Cache bridges the gap.

                                                        <strong>Arrays</strong> are cache-friendly because they are contiguous. <strong>Linked Lists</strong> are not.

                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Section 2.5: Language Nuances -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 text-lg font-mono">2.5</span>

                                        Language Nuances

                                    </h3>

                                    <div class="bg-[#111] p-8 rounded-3xl border border-white/10">

                                        <p class="text-gray-400 mb-6">Not all arrays are created equal. Your language hides things from you.</p>

                                        <div class="grid md:grid-cols-3 gap-6">

                                            <div class="bg-black/50 p-4 rounded-xl border border-white/5">

                                                <div class="flex items-center gap-2 mb-3">

                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" class="w-6 h-6"/>

                                                    <h4 class="text-white font-bold">C++ / Java</h4>

                                                </div>

                                                <p class="text-sm text-gray-400 mb-2"><strong>Static Arrays:</strong> Fixed size. Continuous memory. Extremely fast.</p>

                                                <code class="text-xs text-green-400 bg-black/30 px-2 py-1 rounded block">int arr[10];</code>

                                            </div>

                                            <div class="bg-black/50 p-4 rounded-xl border border-white/5">

                                                <div class="flex items-center gap-2 mb-3">

                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="w-6 h-6"/>

                                                    <h4 class="text-white font-bold">Python / JS</h4>

                                                </div>

                                                <p class="text-sm text-gray-400 mb-2"><strong>Dynamic Lists:</strong> Resizable. Store <em>references</em>, not values. Slower.</p>

                                                <code class="text-xs text-yellow-400 bg-black/30 px-2 py-1 rounded block">arr = [1, "hi", 3.0]</code>

                                            </div>

                                            <div class="bg-black/50 p-4 rounded-xl border border-white/5">

                                                <div class="flex items-center gap-2 mb-3">

                                                    <span class="text-xl">⚠️</span>

                                                    <h4 class="text-white font-bold">The Trap</h4>

                                                </div>

                                                <p class="text-sm text-gray-400">

                                                    In Python, <code class="text-red-400">arr.insert(0, x)</code> is <strong>O(N)</strong> because it shifts everything. In C++ <code class="text-green-400">std::list</code>, it's <strong>O(1)</strong>.

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Section 3: What is DSA? (Taxonomy) -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 text-lg font-mono">03</span>

                                        The Taxonomy

                                    </h3>

                                    

                                    <div class="grid md:grid-cols-2 gap-8">

                                        <!-- Data Structures -->

                                        <div class="bg-[#111] p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all group">

                                            <div class="w-16 h-16 bg-blue-900/30 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🗄️</div>

                                            <h4 class="text-2xl font-bold text-blue-400 mb-4">Data Structures</h4>

                                            <p class="text-gray-400 text-sm mb-6">Ways to organize data.</p>

                                            

                                            <div class="space-y-4">

                                                <div>

                                                    <h5 class="text-white text-sm font-bold uppercase tracking-wider mb-2">Linear</h5>

                                                    <div class="flex flex-wrap gap-2">

                                                        <span class="text-xs bg-blue-900/20 text-blue-300 px-2 py-1 rounded border border-blue-500/20">Arrays</span>

                                                        <span class="text-xs bg-blue-900/20 text-blue-300 px-2 py-1 rounded border border-blue-500/20">Linked Lists</span>

                                                        <span class="text-xs bg-blue-900/20 text-blue-300 px-2 py-1 rounded border border-blue-500/20">Stacks</span>

                                                        <span class="text-xs bg-blue-900/20 text-blue-300 px-2 py-1 rounded border border-blue-500/20">Queues</span>

                                                    </div>

                                                </div>

                                                <div>

                                                    <h5 class="text-white text-sm font-bold uppercase tracking-wider mb-2">Non-Linear</h5>

                                                    <div class="flex flex-wrap gap-2">

                                                        <span class="text-xs bg-purple-900/20 text-purple-300 px-2 py-1 rounded border border-purple-500/20">Trees</span>

                                                        <span class="text-xs bg-purple-900/20 text-purple-300 px-2 py-1 rounded border border-purple-500/20">Graphs</span>

                                                        <span class="text-xs bg-purple-900/20 text-purple-300 px-2 py-1 rounded border border-purple-500/20">Heaps</span>

                                                        <span class="text-xs bg-purple-900/20 text-purple-300 px-2 py-1 rounded border border-purple-500/20">Hash Maps</span>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <!-- Algorithms -->

                                        <div class="bg-[#111] p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all group">

                                            <div class="w-16 h-16 bg-green-900/30 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">⚙️</div>

                                            <h4 class="text-2xl font-bold text-green-400 mb-4">Algorithms</h4>

                                            <p class="text-gray-400 text-sm mb-6">Recipes to solve problems.</p>

                                            

                                            <div class="space-y-4">

                                                <div>

                                                    <h5 class="text-white text-sm font-bold uppercase tracking-wider mb-2">Core</h5>

                                                    <div class="flex flex-wrap gap-2">

                                                        <span class="text-xs bg-green-900/20 text-green-300 px-2 py-1 rounded border border-green-500/20">Sorting</span>

                                                        <span class="text-xs bg-green-900/20 text-green-300 px-2 py-1 rounded border border-green-500/20">Searching</span>

                                                        <span class="text-xs bg-green-900/20 text-green-300 px-2 py-1 rounded border border-green-500/20">Recursion</span>

                                                    </div>

                                                </div>

                                                <div>

                                                    <h5 class="text-white text-sm font-bold uppercase tracking-wider mb-2">Advanced</h5>

                                                    <div class="flex flex-wrap gap-2">

                                                        <span class="text-xs bg-yellow-900/20 text-yellow-300 px-2 py-1 rounded border border-yellow-500/20">Dynamic Programming</span>

                                                        <span class="text-xs bg-yellow-900/20 text-yellow-300 px-2 py-1 rounded border border-yellow-500/20">Greedy</span>

                                                        <span class="text-xs bg-yellow-900/20 text-yellow-300 px-2 py-1 rounded border border-yellow-500/20">Backtracking</span>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Section 4: The Ultimate Analogy (Cooking) -->

                                <div class="space-y-6">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/20 text-red-400 text-lg font-mono">04</span>

                                        The Ultimate Analogy

                                    </h3>

                                    <div class="bg-gradient-to-br from-[#111] to-black rounded-3xl border border-white/10 p-8 relative overflow-hidden">

                                        <div class="text-center mb-8">

                                            <h4 class="text-2xl font-bold text-white">"If coding is cooking..." 🍳</h4>

                                        </div>

                                        <div class="grid md:grid-cols-3 gap-8 text-center relative z-10">

                                            <div class="group">

                                                <div class="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform border border-green-500/20">🥦</div>

                                                <h4 class="text-lg font-bold text-green-400 mb-2">Ingredients</h4>

                                                <p class="text-xs text-gray-500 uppercase tracking-widest mb-2">Data Structures</p>

                                                <p class="text-xs text-gray-400">Your raw materials. You can chop them (Array) or stack them (Stack).</p>

                                            </div>

                                            <div class="group">

                                                <div class="w-20 h-20 mx-auto bg-yellow-500/10 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform border border-yellow-500/20">📜</div>

                                                <h4 class="text-lg font-bold text-yellow-400 mb-2">Recipes</h4>

                                                <p class="text-xs text-gray-500 uppercase tracking-widest mb-2">Algorithms</p>

                                                <p class="text-xs text-gray-400">The steps. "Boil water, add pasta" is an algorithm.</p>

                                            </div>

                                            <div class="group">

                                                <div class="w-20 h-20 mx-auto bg-red-500/10 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform border border-red-500/20">🔥</div>

                                                <h4 class="text-lg font-bold text-red-400 mb-2">Time & Fuel</h4>

                                                <p class="text-xs text-gray-500 uppercase tracking-widest mb-2">Complexity</p>

                                                <p class="text-xs text-gray-400">How long does it take? How much gas (memory) do you use?</p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Section 5: The Invisible World (Real World Examples) -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 text-lg font-mono">05</span>

                                        The Invisible World

                                    </h3>

                                    <p class="text-gray-400">DSA isn't just for interviews. It runs the world.</p>

                                    

                                    <div class="grid md:grid-cols-2 gap-4">

                                        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 flex items-start gap-4">

                                            <div class="text-3xl">🕸️</div>

                                            <div>

                                                <h4 class="text-white font-bold">Social Networks</h4>

                                                <p class="text-sm text-gray-400">Facebook/LinkedIn are massive <strong>Graphs</strong>. "You may know X" is a Graph Traversal algorithm.</p>

                                            </div>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 flex items-start gap-4">

                                            <div class="text-3xl">🔙</div>

                                            <div>

                                                <h4 class="text-white font-bold">Browser Back Button</h4>

                                                <p class="text-sm text-gray-400">A classic <strong>Stack</strong>. Last page visited is the first one you go back to (LIFO).</p>

                                            </div>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 flex items-start gap-4">

                                            <div class="text-3xl">🖨️</div>

                                            <div>

                                                <h4 class="text-white font-bold">Printer Spool</h4>

                                                <p class="text-sm text-gray-400">A <strong>Queue</strong>. First document sent is the first one printed (FIFO).</p>

                                            </div>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 flex items-start gap-4">

                                            <div class="text-3xl">🗺️</div>

                                            <div>

                                                <h4 class="text-white font-bold">Google Maps</h4>

                                                <p class="text-sm text-gray-400">Weighted Graphs + <strong>Dijkstra's Algorithm</strong> to find the shortest path.</p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Section 6: The Master Framework -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 text-lg font-mono">06</span>

                                        The Master Framework

                                    </h3>

                                    <div class="bg-[#111] p-8 rounded-3xl border border-white/10">

                                        <p class="text-gray-400 mb-6">How to solve ANY problem in this course (and interviews):</p>

                                        <div class="space-y-4">

                                            <div class="flex items-center gap-4 p-4 bg-black/50 rounded-xl border border-white/5">

                                                <div class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-black font-bold">1</div>

                                                <div class="text-white"><strong>Understand:</strong> Read constraints. Draw examples. Ask questions.</div>

                                            </div>

                                            <div class="flex items-center gap-4 p-4 bg-black/50 rounded-xl border border-white/5">

                                                <div class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-black font-bold">2</div>

                                                <div class="text-white"><strong>Diagram:</strong> Don't code yet! Draw the data structure states.</div>

                                            </div>

                                            <div class="flex items-center gap-4 p-4 bg-black/50 rounded-xl border border-white/5">

                                                <div class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-black font-bold">3</div>

                                                <div class="text-white"><strong>Brute Force:</strong> Find a solution that works, even if slow.</div>

                                            </div>

                                            <div class="flex items-center gap-4 p-4 bg-black/50 rounded-xl border border-white/5">

                                                <div class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-black font-bold">4</div>

                                                <div class="text-white"><strong>Optimize:</strong> Use bottlenecks to choose a better Data Structure.</div>

                                            </div>

                                            <div class="flex items-center gap-4 p-4 bg-black/50 rounded-xl border border-white/5">

                                                <div class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-black font-bold">5</div>

                                                <div class="text-white"><strong>Code:</strong> Write clean, modular code. Handle edge cases.</div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Section 7: Why Companies Test DSA? -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-500/20 text-yellow-400 text-lg font-mono">07</span>

                                        Why do companies test DSA?

                                    </h3>

                                    

                                    <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

                                        <div class="grid md:grid-cols-3 gap-6 relative z-10">

                                            <div class="flex flex-col gap-4">

                                                <div class="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 text-xl border border-green-500/30">💰</div>

                                                <h4 class="font-bold text-white">Saves Millions</h4>

                                                <p class="text-sm text-gray-400">Code efficiency saves millions of dollars in real systems (Servers, Energy).</p>

                                            </div>

                                            <div class="flex flex-col gap-4">

                                                <div class="w-12 h-12 rounded-full bg-orange-900/30 flex items-center justify-center text-orange-400 text-xl border border-orange-500/30">🧠</div>

                                                <h4 class="font-bold text-white">Constraint Thinking</h4>

                                                <p class="text-sm text-gray-400">Shows how well you think under constraints (Memory, Time).</p>

                                            </div>

                                            <div class="flex flex-col gap-4">

                                                <div class="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 text-xl border border-blue-500/30">⚖️</div>

                                                <h4 class="font-bold text-white">Logic Evaluation</h4>

                                                <p class="text-sm text-gray-400">Problems in interviews = Performance + Logic evaluation.</p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Section 8: Why Complexity Matters -->

                                <div class="space-y-6">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 text-lg font-mono">08</span>

                                        Why Complexity Matters?

                                    </h3>

                                    <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                        <p class="text-xl text-white mb-8 text-center">

                                            "Two solutions that work are <span class="text-red-500 font-bold">NOT</span> equal."

                                        </p>

                                        

                                        <!-- Visual Comparison -->

                                        <div class="grid md:grid-cols-2 gap-8 mb-8">

                                            <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-xl text-center">

                                                <div class="text-4xl mb-2">🚀</div>

                                                <h4 class="text-green-400 font-bold text-lg">Solution A</h4>

                                                <p class="text-white text-2xl font-mono mt-2">1 Second</p>

                                                <p class="text-xs text-gray-500 mt-2">Happy Users</p>

                                            </div>

                                            <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-xl text-center relative overflow-hidden">

                                                <div class="text-4xl mb-2 animate-pulse">🐢</div>

                                                <h4 class="text-red-400 font-bold text-lg">Solution B</h4>

                                                <p class="text-white text-2xl font-mono mt-2">10 Hours</p>

                                                <p class="text-xs text-gray-500 mt-2">Server Crash</p>

                                            </div>

                                        </div>

                                        <div class="bg-black/50 p-6 rounded-xl border border-white/5">

                                            <h4 class="text-white font-bold mb-4">In Google-scale systems, a slow algorithm can:</h4>

                                            <ul class="space-y-3 text-gray-400">

                                                <li class="flex items-center gap-3">

                                                    <span class="text-red-500">❌</span> Crash servers under load

                                                </li>

                                                <li class="flex items-center gap-3">

                                                    <span class="text-red-500">❌</span> Waste CPU cycles (Energy = Money)

                                                </li>

                                                <li class="flex items-center gap-3">

                                                    <span class="text-red-500">❌</span> Make systems unusable

                                                </li>

                                            </ul>

                                            <p class="mt-6 text-center text-cyan-400 font-bold">

                                                Thus, measuring performance is not optional — it’s essential.

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        `,

                        questions: [

                            {

                                id: "intro-1-q1",

                                user: "TechLead",

                                avatar: "NJ",

                                time: "pinned",

                                content: "Why learn DSA? Can't I just use libraries?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Libraries are tools; DSA is physics. You can drive a car without knowing how an engine works, but you can't fix it or build a racecar. When your app scales to 1M users, you need to know *why* your library is slow."

                                }

                            },

                            {

                                id: "intro-1-q2",

                                user: "NewbieDev",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "Is this course language specific?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "No! Concepts are universal. A Linked List in Python is conceptually identical to one in C++. We show code in multiple languages, but the *logic* transcends syntax."

                                }

                            },

                            {

                                id: "intro-1-q3",

                                user: "Student101",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "What math do I need?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Basic algebra and logarithms (for complexity). We teach the rest. You don't need calculus."

                                }

                            }],

                    },

                    {

                        id: "intro-2",

                        title: "Complexity Analysis Masterclass",

                        duration: "45 min",

                        type: 'video',

                        content: `

                            <div class="space-y-16 text-gray-300 font-light">

                                <!-- Hero Section -->

                                <div class="text-center max-w-3xl mx-auto">

                                    <h2 class="text-4xl font-bold text-white mb-6">2. COMPLEXITY ANALYSIS</h2>

                                    <p class="text-xl leading-relaxed text-gray-400">

                                        It’s how the <strong class="text-white">cost</strong> of a solution grows as input size <strong class="text-white">n</strong> increases.

                                    </p>

                                </div>

                                <!-- Types of Complexity -->

                                <div class="grid md:grid-cols-2 gap-8">

                                    <div class="bg-[#111] p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all">

                                        <div class="text-4xl mb-4">⏱️</div>

                                        <h4 class="text-2xl font-bold text-blue-400 mb-2">Time Complexity</h4>

                                        <p class="text-gray-400">How many <strong class="text-white">operations or steps</strong> the algorithm takes.</p>

                                    </div>

                                    <div class="bg-[#111] p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all">

                                        <div class="text-4xl mb-4">💾</div>

                                        <h4 class="text-2xl font-bold text-purple-400 mb-2">Space Complexity</h4>

                                        <p class="text-gray-400">How much <strong class="text-white">extra memory</strong> the algorithm needs besides input.</p>

                                    </div>

                                </div>

                                <!-- Asymptotic Notations -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 text-lg font-mono">04</span>

                                        How to Express Complexity

                                    </h3>

                                    <p class="text-gray-400">We don’t count operations exactly — we approximate using <strong>Asymptotic Notations</strong>.</p>

                                    

                                    <div class="grid md:grid-cols-3 gap-6">

                                        <!-- Big O -->

                                        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-red-500/30 relative overflow-hidden group">

                                            <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-red-500">O</div>

                                            <h4 class="text-xl font-bold text-red-400 mb-2">O (Big O)</h4>

                                            <p class="text-sm text-gray-400 mb-4">Upper Bound (Worst Case)</p>

                                            <div class="bg-red-900/20 p-3 rounded text-red-200 text-sm font-mono text-center">

                                                "Oh no! Worst case" 😱

                                            </div>

                                        </div>

                                        <!-- Omega -->

                                        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-green-500/30 relative overflow-hidden group">

                                            <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-green-500">Ω</div>

                                            <h4 class="text-xl font-bold text-green-400 mb-2">Ω (Omega)</h4>

                                            <p class="text-sm text-gray-400 mb-4">Lower Bound (Best Case)</p>

                                            <div class="bg-green-900/20 p-3 rounded text-green-200 text-sm font-mono text-center">

                                                "Oh yay! Best case" 🎉

                                            </div>

                                        </div>

                                        <!-- Theta -->

                                        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-blue-500/30 relative overflow-hidden group">

                                            <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-blue-500">Θ</div>

                                            <h4 class="text-xl font-bold text-blue-400 mb-2">Θ (Theta)</h4>

                                            <p class="text-sm text-gray-400 mb-4">Tight Bound (Average)</p>

                                            <div class="bg-blue-900/20 p-3 rounded text-blue-200 text-sm font-mono text-center">

                                                "The Truth" ⚖️

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Time Complexity Classes -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 text-lg font-mono">05</span>

                                        Time Complexity Classes

                                    </h3>

                                    

                                    <!-- Graph -->

                                    <div class="relative w-full aspect-video bg-[#0a0a0a] rounded-xl border border-white/10 p-6 overflow-hidden group">

                                        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

                                        <svg viewBox="0 0 400 250" class="w-full h-full transform transition-transform duration-700 group-hover:scale-[1.02]">

                                            <defs>

                                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">

                                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>

                                                </pattern>

                                            </defs>

                                            <rect width="100%" height="100%" fill="url(#grid)" />

                                            <line x1="20" y1="230" x2="380" y2="230" stroke="white" stroke-width="2" />

                                            <line x1="20" y1="230" x2="20" y2="20" stroke="white" stroke-width="2" />

                                            <text x="370" y="245" fill="#666" font-size="10" font-family="monospace">n</text>

                                            <text x="10" y="15" fill="#666" font-size="10" font-family="monospace">Time</text>

                                            <!-- Curves -->

                                            <path d="M 20 220 L 380 220" fill="none" stroke="#4ade80" stroke-width="3" /> <text x="385" y="223" fill="#4ade80" font-size="10">O(1)</text>

                                            <path d="M 20 230 Q 100 215 380 200" fill="none" stroke="#60a5fa" stroke-width="3" /> <text x="385" y="203" fill="#60a5fa" font-size="10">O(log n)</text>

                                            <path d="M 20 230 L 380 50" fill="none" stroke="#facc15" stroke-width="3" /> <text x="370" y="45" fill="#facc15" font-size="10">O(n)</text>

                                            <path d="M 20 230 Q 200 180 300 20" fill="none" stroke="#fb923c" stroke-width="3" /> <text x="290" y="35" fill="#fb923c" font-size="10">O(n log n)</text>

                                            <path d="M 20 230 Q 100 230 150 20" fill="none" stroke="#f87171" stroke-width="3" /> <text x="140" y="15" fill="#f87171" font-size="10">O(n²)</text>

                                        </svg>

                                    </div>

                                    <!-- Table -->

                                    <div class="overflow-x-auto">

                                        <table class="w-full text-left border-collapse">

                                            <thead>

                                                <tr class="border-b border-white/10 text-gray-400 text-sm">

                                                    <th class="p-4">Complexity</th>

                                                    <th class="p-4">Name</th>

                                                    <th class="p-4">Meaning</th>

                                                </tr>

                                            </thead>

                                            <tbody class="text-sm">

                                                <tr class="border-b border-white/5 bg-green-900/10">

                                                    <td class="p-4 font-mono text-green-400">O(1)</td>

                                                    <td class="p-4 text-white">Constant</td>

                                                    <td class="p-4 text-gray-400">Same time always</td>

                                                </tr>

                                                <tr class="border-b border-white/5 bg-blue-900/10">

                                                    <td class="p-4 font-mono text-blue-400">O(log n)</td>

                                                    <td class="p-4 text-white">Logarithmic</td>

                                                    <td class="p-4 text-gray-400">Problem size halves each step</td>

                                                </tr>

                                                <tr class="border-b border-white/5 bg-yellow-900/10">

                                                    <td class="p-4 font-mono text-yellow-400">O(n)</td>

                                                    <td class="p-4 text-white">Linear</td>

                                                    <td class="p-4 text-gray-400">Process every element once</td>

                                                </tr>

                                                <tr class="border-b border-white/5 bg-orange-900/10">

                                                    <td class="p-4 font-mono text-orange-400">O(n log n)</td>

                                                    <td class="p-4 text-white">Log-linear</td>

                                                    <td class="p-4 text-gray-400">Divide & merge patterns</td>

                                                </tr>

                                                <tr class="border-b border-white/5 bg-red-900/10">

                                                    <td class="p-4 font-mono text-red-400">O(n²)</td>

                                                    <td class="p-4 text-white">Quadratic</td>

                                                    <td class="p-4 text-gray-400">Nested loops</td>

                                                </tr>

                                                <tr class="border-b border-white/5 bg-purple-900/10">

                                                    <td class="p-4 font-mono text-purple-400">O(2ⁿ)</td>

                                                    <td class="p-4 text-white">Exponential</td>

                                                    <td class="p-4 text-gray-400">Recursion on subsets</td>

                                                </tr>

                                            </tbody>

                                        </table>

                                    </div>

                                    <div class="bg-black/50 p-4 rounded-xl border border-white/10 text-center">

                                        <p class="text-gray-400 text-sm mb-2">Visual Intuition (fastest → slowest)</p>

                                        <div class="font-mono text-xs md:text-sm text-white">

                                            <span class="text-green-400">O(1)</span> < 

                                            <span class="text-blue-400">O(log n)</span> < 

                                            <span class="text-yellow-400">O(n)</span> < 

                                            <span class="text-orange-400">O(n log n)</span> < 

                                            <span class="text-red-400">O(n²)</span> < 

                                            <span class="text-purple-400">O(2ⁿ)</span>

                                        </div>

                                    </div>

                                    

                                    <div class="bg-red-900/20 border border-red-500/30 p-4 rounded-xl flex items-center gap-4">

                                        <span class="text-2xl">💡</span>

                                        <p class="text-red-200 text-sm"><strong>Shortcut Rule:</strong> If you see nested loops, start thinking <code class="bg-black/30 px-1 rounded">O(n²)</code> or worse.</p>

                                    </div>

                                </div>

                                <!-- Space Complexity -->

                                <div class="space-y-6">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 text-lg font-mono">06</span>

                                        Space Complexity

                                    </h3>

                                    <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                        <h4 class="text-white font-bold mb-4">Why is it important?</h4>

                                        <ul class="space-y-3 text-gray-400 mb-8">

                                            <li class="flex items-center gap-3">🔹 Recursion uses <strong>stack memory</strong></li>

                                            <li class="flex items-center gap-3">🔹 Backtracking needs <strong>state storage</strong></li>

                                            <li class="flex items-center gap-3">🔹 DP uses <strong>tables</strong></li>

                                        </ul>

                                        

                                        <div class="grid grid-cols-3 gap-4 text-center">

                                            <div class="bg-black/50 p-4 rounded-xl">

                                                <div class="text-red-400 font-mono font-bold mb-1">O(n²)</div>

                                                <div class="text-xs text-gray-500">DP Table</div>

                                            </div>

                                            <div class="bg-black/50 p-4 rounded-xl">

                                                <div class="text-yellow-400 font-mono font-bold mb-1">O(n)</div>

                                                <div class="text-xs text-gray-500">Fibonacci (Memo)</div>

                                            </div>

                                            <div class="bg-black/50 p-4 rounded-xl">

                                                <div class="text-green-400 font-mono font-bold mb-1">O(1)</div>

                                                <div class="text-xs text-gray-500">Iterative Fib</div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Best, Average, Worst -->

                                <div class="space-y-6">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-500/20 text-gray-200 text-lg font-mono">07</span>

                                        Best, Average, Worst Cases

                                    </h3>

                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                        <p class="text-gray-400 mb-4">Example: Searching in a sorted array</p>

                                        <div class="grid grid-cols-3 gap-4">

                                            <div class="bg-green-900/10 border border-green-500/20 p-4 rounded-xl">

                                                <h5 class="text-green-400 font-bold mb-1">Best Case</h5>

                                                <p class="text-white font-mono text-lg">1 Step</p>

                                                <p class="text-xs text-gray-500">Found at start</p>

                                            </div>

                                            <div class="bg-yellow-900/10 border border-yellow-500/20 p-4 rounded-xl">

                                                <h5 class="text-yellow-400 font-bold mb-1">Average</h5>

                                                <p class="text-white font-mono text-lg">n/2</p>

                                                <p class="text-xs text-gray-500">Somewhere middle</p>

                                            </div>

                                            <div class="bg-red-900/10 border border-red-500/20 p-4 rounded-xl">

                                                <h5 class="text-red-400 font-bold mb-1">Worst Case</h5>

                                                <p class="text-white font-mono text-lg">n</p>

                                                <p class="text-xs text-gray-500">At the end</p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Amortized Analysis -->

                                <div class="space-y-6">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 text-lg font-mono">08</span>

                                        Amortized Analysis

                                    </h3>

                                    <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                        <p class="text-gray-400 mb-6">

                                            Used when a rare expensive operation is averaged over cheap ones. <br/>

                                            <span class="text-teal-400">Example: Dynamic Array Resizing (Vector)</span>

                                        </p>

                                        

                                        <!-- Visual -->

                                        <div class="flex items-center gap-2 mb-6 overflow-x-auto pb-4">

                                            <div class="flex gap-1">

                                                <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-xs">1</div>

                                                <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-xs">2</div>

                                                <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-xs">3</div>

                                                <div class="w-8 h-8 bg-gray-700 rounded border border-dashed border-gray-500"></div>

                                            </div>

                                            <span class="text-gray-500">→</span>

                                            <div class="flex gap-1">

                                                <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-xs">1</div>

                                                <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-xs">2</div>

                                                <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-xs">3</div>

                                                <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-xs animate-pulse">4</div>

                                                <div class="w-8 h-8 bg-gray-700 rounded border border-dashed border-gray-500"></div>

                                                <div class="w-8 h-8 bg-gray-700 rounded border border-dashed border-gray-500"></div>

                                                <div class="w-8 h-8 bg-gray-700 rounded border border-dashed border-gray-500"></div>

                                                <div class="w-8 h-8 bg-gray-700 rounded border border-dashed border-gray-500"></div>

                                            </div>

                                        </div>

                                        

                                        <div class="space-y-2 font-mono text-sm">

                                            <div class="flex justify-between text-gray-400">

                                                <span>Average Push:</span> <span class="text-green-400">O(1)</span>

                                            </div>

                                            <div class="flex justify-between text-gray-400">

                                                <span>Occasional Resize:</span> <span class="text-red-400">O(n)</span>

                                            </div>

                                            <div class="flex justify-between text-white border-t border-white/10 pt-2 font-bold">

                                                <span>Total Amortized:</span> <span class="text-teal-400">O(1)</span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Estimation & Rules -->

                                <div class="grid md:grid-cols-2 gap-8">

                                    <!-- How to Estimate -->

                                    <div class="space-y-6">

                                        <h3 class="text-2xl font-bold text-white">09. How to Estimate Quickly</h3>

                                        <ul class="space-y-4 text-gray-400">

                                            <li class="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">

                                                <strong class="text-white block mb-1">✔ Ignore Constants</strong>

                                                O(2n) → O(n)

                                            </li>

                                            <li class="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">

                                                <strong class="text-white block mb-1">✔ Keep Highest Term</strong>

                                                O(n² + n + 5) → O(n²)

                                            </li>

                                            <li class="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">

                                                <strong class="text-white block mb-1">✔ Loops Drive Complexity</strong>

                                                Nested loops = O(n²)

                                            </li>

                                        </ul>

                                    </div>

                                    <!-- Rules of Thumb -->

                                    <div class="space-y-6">

                                        <h3 class="text-2xl font-bold text-white">10. Rules of Thumb</h3>

                                        <div class="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden">

                                            <table class="w-full text-sm text-left">

                                                <thead class="bg-white/5 text-white">

                                                    <tr>

                                                        <th class="p-3">Pattern</th>

                                                        <th class="p-3">Complexity</th>

                                                    </tr>

                                                </thead>

                                                <tbody class="text-gray-400">

                                                    <tr class="border-b border-white/5"><td class="p-3">Single loop</td><td class="p-3 text-green-400">O(n)</td></tr>

                                                    <tr class="border-b border-white/5"><td class="p-3">Loop halving</td><td class="p-3 text-blue-400">O(log n)</td></tr>

                                                    <tr class="border-b border-white/5"><td class="p-3">Nested loops</td><td class="p-3 text-red-400">O(n²)</td></tr>

                                                    <tr class="border-b border-white/5"><td class="p-3">Recursion branching</td><td class="p-3 text-purple-400">O(2ⁿ)</td></tr>

                                                    <tr class="border-b border-white/5"><td class="p-3">Sorting</td><td class="p-3 text-orange-400">O(n log n)</td></tr>

                                                </tbody>

                                            </table>

                                        </div>

                                    </div>

                                </div>

                                <!-- Examples -->

                                <div class="space-y-6">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 text-lg font-mono">11</span>

                                        Examples to Lock Concepts

                                    </h3>

                                    <div class="grid md:grid-cols-2 gap-6 font-mono text-sm">

                                        <!-- O(N) -->

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all group">

                                            <div class="flex justify-between items-start mb-4">

                                                <span class="text-green-400 font-bold text-lg">O(N) - Linear</span>

                                                <span class="text-2xl group-hover:scale-110 transition-transform">🚶</span>

                                            </div>

                                            <div class="bg-black/50 p-3 rounded-lg border border-white/5 mb-3 text-gray-300">

                                                <span class="text-purple-400">for</span>(<span class="text-blue-400">int</span> x : arr) {<br>

                                                &nbsp;&nbsp;cout &lt;&lt; x;<br>

                                                }

                                            </div>

                                            <p class="text-xs text-gray-500">Visiting every item once. Like reading a book page by page.</p>

                                        </div>

                                        <!-- O(N^2) -->

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-all group">

                                            <div class="flex justify-between items-start mb-4">

                                                <span class="text-red-400 font-bold text-lg">O(N²) - Quadratic</span>

                                                <span class="text-2xl group-hover:scale-110 transition-transform">🐢</span>

                                            </div>

                                            <div class="bg-black/50 p-3 rounded-lg border border-white/5 mb-3 text-gray-300">

                                                <span class="text-purple-400">for</span>(i=0; i<n; i++)<br>

                                                &nbsp;&nbsp;<span class="text-purple-400">for</span>(j=0; j<n; j++)

                                            </div>

                                            <p class="text-xs text-gray-500">Nested loops. Comparing everyone with everyone. Avoid for large N!</p>

                                        </div>

                                        <!-- O(log N) -->

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all group">

                                            <div class="flex justify-between items-start mb-4">

                                                <span class="text-blue-400 font-bold text-lg">O(log N) - Logarithmic</span>

                                                <span class="text-2xl group-hover:scale-110 transition-transform">✂️</span>

                                            </div>

                                            <div class="bg-black/50 p-3 rounded-lg border border-white/5 mb-3 text-gray-300">

                                                <span class="text-purple-400">while</span>(n > 1)<br>

                                                &nbsp;&nbsp;n = n / 2;

                                            </div>

                                            <p class="text-xs text-gray-500">Cutting the problem in half each time. Binary Search.</p>

                                        </div>

                                        <!-- O(N log N) -->

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all group">

                                            <div class="flex justify-between items-start mb-4">

                                                <span class="text-orange-400 font-bold text-lg">O(N log N) - Linearithmic</span>

                                                <span class="text-2xl group-hover:scale-110 transition-transform">⚡</span>

                                            </div>

                                            <div class="bg-black/50 p-3 rounded-lg border border-white/5 mb-3 text-gray-300">

                                                std::sort(arr.begin(), arr.end());

                                            </div>

                                            <p class="text-xs text-gray-500">Fastest general-purpose sorting. Merge Sort, Heap Sort.</p>

                                        </div>

                                    </div>

                                </div>

                                <!-- Common Misconceptions -->

                                <div class="space-y-6">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/20 text-red-400 text-lg font-mono">12</span>

                                        Common Misconceptions

                                    </h3>

                                    <div class="grid md:grid-cols-2 gap-6">

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                            <h4 class="text-white font-bold mb-2">❌ O(1) means "Instant"</h4>

                                            <p class="text-sm text-gray-400">

                                                No. It means "Constant Time". Reading a 1TB file is O(1) relative to N (if N is something else), but it takes forever.

                                            </p>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                            <h4 class="text-white font-bold mb-2">❌ O(N) is always faster than O(N²)</h4>

                                            <p class="text-sm text-gray-400">

                                                Not for small N. If N=5, N²=25. If the O(N) algorithm has a huge constant (e.g., 1000*N), the O(N²) one is faster.

                                            </p>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                            <h4 class="text-white font-bold mb-2">❌ Space is cheap</h4>

                                            <p class="text-sm text-gray-400">

                                                Allocating memory is slow. Cache misses are expensive. O(1) space is often preferred even if it costs a bit of time.

                                            </p>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                            <h4 class="text-white font-bold mb-2">❌ Worst Case never happens</h4>

                                            <p class="text-sm text-gray-400">

                                                Hackers can trigger worst-case scenarios (DoS attacks) by feeding specific inputs (e.g., hash collisions).

                                            </p>

                                        </div>

                                    </div>

                                </div>

                                <!-- Guide -->

                                <div class="space-y-6">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white text-lg font-mono">13</span>

                                        How Complexity Guides Choices

                                    </h3>

                                    <div class="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-3xl border border-white/10">

                                        <div class="grid md:grid-cols-2 gap-x-12 gap-y-4">

                                            <div class="flex justify-between border-b border-white/10 pb-2">

                                                <span class="text-gray-400">Fast Search</span>

                                                <span class="text-white font-bold">Hash Map / BST</span>

                                            </div>

                                            <div class="flex justify-between border-b border-white/10 pb-2">

                                                <span class="text-gray-400">Range Queries</span>

                                                <span class="text-white font-bold">Segment Tree</span>

                                            </div>

                                            <div class="flex justify-between border-b border-white/10 pb-2">

                                                <span class="text-gray-400">Optimal Memory</span>

                                                <span class="text-white font-bold">Arrays</span>

                                            </div>

                                            <div class="flex justify-between border-b border-white/10 pb-2">

                                                <span class="text-gray-400">Prefix Queries</span>

                                                <span class="text-white font-bold">Tries</span>

                                            </div>

                                            <div class="flex justify-between border-b border-white/10 pb-2">

                                                <span class="text-gray-400">Optimal Path</span>

                                                <span class="text-white font-bold">Graph + BFS/DFS</span>

                                            </div>

                                            <div class="flex justify-between border-b border-white/10 pb-2">

                                                <span class="text-gray-400">Optimal Decisions</span>

                                                <span class="text-white font-bold">Greedy</span>

                                            </div>

                                        </div>

                                        <div class="mt-8 text-center">

                                            <p class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">

                                                "Complexity decides the tool."

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        `,

                        questions: [

                            {

                                id: "intro-2-q1",

                                user: "MathWhiz",

                                avatar: "NJ",

                                time: "pinned",

                                content: "Why isn't O(N/2) different from O(N)?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Big O measures *growth rate*, not seconds. As N -> infinity, N/2 and N grow indistinguishably linearly. Constants are dropped because hardware variations overshadow them."

                                }

                            },

                            {

                                id: "intro-2-q2",

                                user: "SrEng",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "Is O(1) always faster than O(N)?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "For small N, no! O(N) might be faster due to smaller constants or cache locality. But for *large* N, O(1) always wins. Big O is about scalability."

                                }

                            },

                            {

                                id: "intro-2-q3",

                                user: "AlgoFan",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "What is Amortized Analysis?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "It refers to the 'average' time over a sequence of operations. Like resizing a vector: it's slow once (O(N)), but fast (O(1)) most of the time."

                                }

                            }],

                    },

                    {

                        id: "intro-3",

                        title: "Space Complexity & Memory Deep Dive",

                        duration: "40 min",

                        type: 'video',

                        content: `

                            <div class="space-y-12 text-gray-300 font-light">

                                <h2 class="text-4xl font-bold text-white mb-6">The Hidden Cost: Memory</h2>

                                <p class="text-xl leading-relaxed text-gray-400">

                                    Time is money, but space is... also money (RAM). 

                                    Understanding how your code uses memory is crucial for system design and preventing stack overflows.

                                </p>

                                <!-- Stack vs Heap Visual -->

                                <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">

                                    <h3 class="text-2xl font-bold text-white mb-6">Stack vs Heap</h3>

                                    <div class="grid md:grid-cols-2 gap-8">

                                        <!-- Stack -->

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 relative overflow-hidden">

                                            <h4 class="text-lg font-bold text-blue-400 mb-4">The Stack (LIFO)</h4>

                                            <p class="text-sm text-gray-400 mb-4">Function calls, local variables. Fast, organized, but small.</p>

                                            <div class="flex flex-col-reverse gap-2 h-40 justify-start">

                                                <div class="bg-blue-500/20 border border-blue-500 p-2 rounded text-center text-xs animate-[slideUp_0.5s_ease-out]">main()</div>

                                                <div class="bg-blue-500/20 border border-blue-500 p-2 rounded text-center text-xs animate-[slideUp_0.5s_ease-out_0.5s_both]">helper()</div>

                                                <div class="bg-blue-500/20 border border-blue-500 p-2 rounded text-center text-xs animate-[slideUp_0.5s_ease-out_1s_both]">dfs()</div>

                                            </div>

                                        </div>

                                        <!-- Heap -->

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 relative overflow-hidden">

                                            <h4 class="text-lg font-bold text-purple-400 mb-4">The Heap (Free Store)</h4>

                                            <p class="text-sm text-gray-400 mb-4">Objects, dynamic arrays. Large, chaotic, manual management.</p>

                                            <div class="relative h-40">

                                                <div class="absolute top-2 left-2 w-12 h-12 bg-purple-500/20 border border-purple-500 rounded-full flex items-center justify-center text-xs">Obj A</div>

                                                <div class="absolute bottom-4 right-8 w-16 h-16 bg-purple-500/20 border border-purple-500 rounded-lg flex items-center justify-center text-xs">Array</div>

                                                <div class="absolute top-10 right-4 w-8 h-8 bg-purple-500/20 border border-purple-500 rounded flex items-center justify-center text-xs">Node</div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- Memory Layout Visual -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-500/20 text-green-400 text-lg font-mono">02</span>

                                        Memory Layout: Array vs Linked List

                                    </h3>

                                    <div class="grid md:grid-cols-2 gap-8">

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                            <h4 class="text-white font-bold mb-4">Array (Contiguous)</h4>

                                            <div class="flex gap-1 mb-4">

                                                <div class="w-10 h-10 bg-green-500/20 border border-green-500 flex items-center justify-center text-xs">0x1</div>

                                                <div class="w-10 h-10 bg-green-500/20 border border-green-500 flex items-center justify-center text-xs">0x2</div>

                                                <div class="w-10 h-10 bg-green-500/20 border border-green-500 flex items-center justify-center text-xs">0x3</div>

                                                <div class="w-10 h-10 bg-green-500/20 border border-green-500 flex items-center justify-center text-xs">0x4</div>

                                            </div>

                                            <p class="text-sm text-gray-400">

                                                All elements are neighbors. CPU Cache loves this. Prefetching works perfectly.

                                            </p>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                            <h4 class="text-white font-bold mb-4">Linked List (Scattered)</h4>

                                            <div class="relative h-12 mb-4">

                                                <div class="absolute left-0 w-10 h-10 bg-blue-500/20 border border-blue-500 flex items-center justify-center text-xs">0x1</div>

                                                <div class="absolute left-16 w-10 h-10 bg-blue-500/20 border border-blue-500 flex items-center justify-center text-xs">0xA</div>

                                                <div class="absolute left-32 w-10 h-10 bg-blue-500/20 border border-blue-500 flex items-center justify-center text-xs">0xF</div>

                                                <!-- Arrows -->

                                                <div class="absolute top-1/2 left-10 w-6 h-0.5 bg-gray-500"></div>

                                                <div class="absolute top-1/2 left-26 w-6 h-0.5 bg-gray-500"></div>

                                            </div>

                                            <p class="text-sm text-gray-400">

                                                Elements are everywhere. CPU Cache hates this. Pointer chasing is slow.

                                            </p>

                                        </div>

                                    </div>

                                </div>

                                <!-- Auxiliary vs Total Space -->

                                <div class="grid md:grid-cols-2 gap-8">

                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                        <h3 class="text-xl font-bold text-white mb-4">Auxiliary Space</h3>

                                        <p class="text-gray-400 mb-4 text-sm">

                                            Extra space used <strong>excluding</strong> input size.

                                        </p>

                                        <div class="bg-black/50 p-3 rounded text-sm font-mono text-green-400">

                                            // Merge Sort<br>

                                            O(N) temp array

                                        </div>

                                    </div>

                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                        <h3 class="text-xl font-bold text-white mb-4">Total Space</h3>

                                        <p class="text-gray-400 mb-4 text-sm">

                                            Input Size + Auxiliary Space.

                                        </p>

                                        <div class="bg-black/50 p-3 rounded text-sm font-mono text-yellow-400">

                                            // Storing a Graph<br>

                                            O(V + E)

                                        </div>

                                    </div>

                                </div>

                            </div>

                        `,

                        questions: [

                            {

                                id: "intro-3-q1",

                                user: "SystemArch",

                                avatar: "NJ",

                                time: "pinned",

                                content: "Does recursion always use O(N) space?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Yes, unless it's Tail Call Optimized (TCO), which many languages (like Python/Java) don't utilize by default. Each recursive call adds a frame to the Stack memory."

                                }

                            },

                            {

                                id: "intro-3-q2",

                                user: "LowLevelDev",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "Difference between Stack and Heap memory?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Stack: Fast, ordered, automatic cleanup, limited size (recursion lives here). Heap: Slower, random access, manual/GC cleanup, larger size (objects live here)."

                                }

                            },

                            {

                                id: "intro-3-q3",

                                user: "BitMaster",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Why counting bits is O(1)?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "For a fixed integer size (e.g., 32-bit), it takes at most 32 ops. That's constant time relative to the value of the number."

                                }

                            }],

                    },

                    {

                        id: "intro-4",

                        title: "Mathematics for DSA",

                        duration: "45 min",

                        type: 'video',

                        content: `

                            <div class="space-y-16 text-gray-300 font-light">

                                <!-- Hero -->

                                <div class="text-center max-w-3xl mx-auto">

                                    <h2 class="text-4xl font-bold text-white mb-6">The Math You Actually Need</h2>

                                    <p class="text-xl leading-relaxed text-gray-400">

                                        No calculus. No differential equations. Just the discrete math that powers <strong class="text-white">algorithm analysis</strong> and <strong class="text-white">optimization</strong>.

                                    </p>

                                </div>

                                <!-- 1. Logarithms -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 text-lg font-mono">01</span>

                                        Logarithms: The Art of Halving

                                    </h3>

                                    <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                        <div class="grid md:grid-cols-2 gap-8 items-center">

                                            <div>

                                                <p class="text-gray-400 mb-4">

                                                    In CS, <code class="text-blue-400">log N</code> almost always means <code class="text-blue-400">log₂(N)</code>.

                                                    It represents the number of times you can cut N in half before reaching 1.

                                                </p>

                                                <ul class="space-y-2 text-sm text-gray-500">

                                                    <li class="flex items-center gap-2"><span class="text-blue-400">●</span> Binary Search: Cut search space in half.</li>

                                                    <li class="flex items-center gap-2"><span class="text-blue-400">●</span> Merge Sort: Split array in half.</li>

                                                    <li class="flex items-center gap-2"><span class="text-blue-400">●</span> Balanced Trees: Height is log N.</li>

                                                </ul>

                                            </div>

                                            <div class="bg-black/50 p-6 rounded-xl border border-white/5 text-center">

                                                <div class="flex items-center justify-center gap-2 text-2xl font-mono mb-4">

                                                    <div class="text-white">16</div>

                                                    <div class="text-gray-600">→</div>

                                                    <div class="text-white">8</div>

                                                    <div class="text-gray-600">→</div>

                                                    <div class="text-white">4</div>

                                                    <div class="text-gray-600">→</div>

                                                    <div class="text-white">2</div>

                                                    <div class="text-gray-600">→</div>

                                                    <div class="text-green-400 font-bold">1</div>

                                                </div>

                                                <p class="text-sm text-gray-400">4 Steps = log₂(16)</p>

                                                <div class="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">

                                                    Even for N = 1,000,000, log N ≈ 20. It's extremely fast.

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- 2. Series & Sums -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 text-lg font-mono">02</span>

                                        Series & Sums

                                    </h3>

                                    <div class="grid md:grid-cols-3 gap-6">

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all">

                                            <h4 class="text-white font-bold mb-2">Arithmetic Series</h4>

                                            <div class="text-purple-400 font-mono text-xl mb-2">1+2+...+N</div>

                                            <div class="text-2xl font-bold text-white mb-2">N(N+1)/2</div>

                                            <div class="text-xs text-gray-500">O(N²). Used in nested loops and handshake problems.</div>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all">

                                            <h4 class="text-white font-bold mb-2">Geometric Series</h4>

                                            <div class="text-purple-400 font-mono text-xl mb-2">1+2+4+...+2ᴺ</div>

                                            <div class="text-2xl font-bold text-white mb-2">2ᴺ⁺¹ - 1</div>

                                            <div class="text-xs text-gray-500">O(2ᴺ). Used in binary trees (total nodes) and bitmasks.</div>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all">

                                            <h4 class="text-white font-bold mb-2">Harmonic Series</h4>

                                            <div class="text-purple-400 font-mono text-xl mb-2">1 + 1/2 + ... + 1/N</div>

                                            <div class="text-2xl font-bold text-white mb-2">log N</div>

                                            <div class="text-xs text-gray-500">Used in Union-Find and randomized algorithms.</div>

                                        </div>

                                    </div>

                                </div>

                                <!-- 3. Combinatorics -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 text-lg font-mono">03</span>

                                        Combinatorics

                                    </h3>

                                    <div class="grid md:grid-cols-2 gap-8">

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                            <h4 class="text-white font-bold mb-4">Permutations (Order Matters)</h4>

                                            <div class="flex justify-between items-center mb-4">

                                                <span class="text-gray-400">Arranging N items</span>

                                                <span class="text-2xl font-bold text-pink-400">N!</span>

                                            </div>

                                            <p class="text-xs text-gray-500 mb-2">Example: TSP, Brute Force Search.</p>

                                            <div class="bg-black/50 p-2 rounded text-xs font-mono text-red-400">

                                                10! = 3.6 Million (OK)<br>

                                                13! = 6 Billion (TLE)

                                            </div>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                            <h4 class="text-white font-bold mb-4">Combinations (Order Doesn't Matter)</h4>

                                            <div class="flex justify-between items-center mb-4">

                                                <span class="text-gray-400">Choosing K from N</span>

                                                <span class="text-2xl font-bold text-pink-400">nCr</span>

                                            </div>

                                            <p class="text-xs text-gray-500 mb-2">Example: Pascal's Triangle, Grid Paths.</p>

                                            <div class="bg-black/50 p-2 rounded text-xs font-mono text-green-400">

                                                C(N, K) = N! / (K! * (N-K)!)

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- 4. Modulo Arithmetic -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-500/20 text-yellow-400 text-lg font-mono">04</span>

                                        Modulo Arithmetic

                                    </h3>

                                    <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                        <p class="text-gray-400 mb-6">

                                            In competitive programming, answers can be huge. We output <code class="text-yellow-400">ans % (10^9 + 7)</code>.

                                        </p>

                                        <div class="grid md:grid-cols-2 gap-6">

                                            <div class="bg-black/50 p-4 rounded-xl border border-white/5">

                                                <h4 class="text-white font-bold mb-2">Addition</h4>

                                                <code class="text-yellow-400 block mb-2">(a + b) % m</code>

                                                <p class="text-xs text-gray-500">Safe. Just wrap around.</p>

                                            </div>

                                            <div class="bg-black/50 p-4 rounded-xl border border-white/5">

                                                <h4 class="text-white font-bold mb-2">Multiplication</h4>

                                                <code class="text-yellow-400 block mb-2">((a % m) * (b % m)) % m</code>

                                                <p class="text-xs text-gray-500">Crucial! Multiply remainders, not huge numbers.</p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- 5. Bitwise Magic -->

                                <div class="space-y-8">

                                    <h3 class="text-3xl font-bold text-white flex items-center gap-3">

                                        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 text-lg font-mono">05</span>

                                        Bitwise Magic

                                    </h3>

                                    <div class="grid md:grid-cols-3 gap-6">

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                            <h4 class="text-white font-bold mb-2">XOR (^)</h4>

                                            <code class="text-cyan-400 block mb-2">x ^ x = 0</code>

                                            <p class="text-xs text-gray-500">Find the unique number in an array of duplicates.</p>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                            <h4 class="text-white font-bold mb-2">AND (&)</h4>

                                            <code class="text-cyan-400 block mb-2">n & (n-1)</code>

                                            <p class="text-xs text-gray-500">Checks if n is a power of 2 (returns 0 if true).</p>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                            <h4 class="text-white font-bold mb-2">Shift (<<)</h4>

                                            <code class="text-cyan-400 block mb-2">1 &lt;&lt; n</code>

                                            <p class="text-xs text-gray-500">Computes 2^n instantly.</p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        `,

                        questions: [

                            {

                                id: "intro-4-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Mathematics for DSA'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Mathematics for DSA, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "intro-4-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "intro-4-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Mathematics for DSA?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "intro-5",

                        title: "The Universal Problem Solving Framework",

                        duration: "60 min",

                        type: 'video',

                        content: `

                            <div class="space-y-12 text-gray-300 font-light">

                                <h2 class="text-4xl font-bold text-white mb-6">The 5-Step Framework (U.M.P.I.R.E)</h2>

                                <p class="text-xl leading-relaxed text-gray-400 mb-8">

                                    Don't just start coding. Follow this process to crush any interview problem.

                                </p>

                                <div class="space-y-6">

                                    <!-- Step 1: Understand -->

                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 flex gap-6">

                                        <div class="hidden md:flex flex-col items-center justify-center w-24 border-r border-white/10 pr-6">

                                            <div class="text-4xl mb-2">🧠</div>

                                            <div class="text-green-400 font-bold">Step 1</div>

                                        </div>

                                        <div>

                                            <h3 class="text-2xl font-bold text-white mb-2">Understand</h3>

                                            <p class="text-gray-400 mb-4">Ask clarifying questions. Define inputs, outputs, and constraints.</p>

                                            <div class="bg-black/50 p-3 rounded text-sm text-gray-300 font-mono">

                                                "Can the array be empty?"<br>

                                                "Are the numbers negative?"<br>

                                                "What is the max value of N?"

                                            </div>

                                        </div>

                                    </div>

                                    <!-- Step 2: Match -->

                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 flex gap-6">

                                        <div class="hidden md:flex flex-col items-center justify-center w-24 border-r border-white/10 pr-6">

                                            <div class="text-4xl mb-2">🧩</div>

                                            <div class="text-blue-400 font-bold">Step 2</div>

                                        </div>

                                        <div>

                                            <h3 class="text-2xl font-bold text-white mb-2">Match</h3>

                                            <p class="text-gray-400 mb-4">Map the problem to a known pattern or data structure.</p>

                                            <div class="flex gap-2 flex-wrap">

                                                <span class="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/30">Sorted Array → Binary Search</span>

                                                <span class="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/30">Shortest Path → BFS</span>

                                                <span class="bg-yellow-900/30 text-yellow-300 px-3 py-1 rounded-full text-xs border border-yellow-500/30">Top K → Heap</span>

                                            </div>

                                        </div>

                                    </div>

                                    <!-- Step 3: Plan -->

                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 flex gap-6">

                                        <div class="hidden md:flex flex-col items-center justify-center w-24 border-r border-white/10 pr-6">

                                            <div class="text-4xl mb-2">📝</div>

                                            <div class="text-yellow-400 font-bold">Step 3</div>

                                        </div>

                                        <div>

                                            <h3 class="text-2xl font-bold text-white mb-2">Plan (Pseudocode)</h3>

                                            <p class="text-gray-400 mb-4">Write logical steps. Don't worry about syntax yet.</p>

                                            <div class="bg-black/50 p-3 rounded text-sm text-gray-300 font-mono">

                                                1. Initialize max_sum = -infinity<br>

                                                2. Loop through array...<br>

                                                3. If current <0, reset...

                                            </div>

                                        </div>

                                    </div>

                                    <!-- Step 4: Implement -->

                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 flex gap-6">

                                        <div class="hidden md:flex flex-col items-center justify-center w-24 border-r border-white/10 pr-6">

                                            <div class="text-4xl mb-2">💻</div>

                                            <div class="text-orange-400 font-bold">Step 4</div>

                                        </div>

                                        <div>

                                            <h3 class="text-2xl font-bold text-white mb-2">Implement</h3>

                                            <p class="text-gray-400">Translate plan to code. Keep it clean. Modularize.</p>

                                        </div>

                                    </div>

                                    <!-- Step 5: Review -->

                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 flex gap-6">

                                        <div class="hidden md:flex flex-col items-center justify-center w-24 border-r border-white/10 pr-6">

                                            <div class="text-4xl mb-2">🔍</div>

                                            <div class="text-red-400 font-bold">Step 5</div>

                                        </div>

                                        <div>

                                            <h3 class="text-2xl font-bold text-white mb-2">Review & Optimize</h3>

                                            <p class="text-gray-400">Dry run with examples. Check edge cases. Analyze complexity.</p>

                                        </div>

                                    </div>

                                </div>

                                <!-- Framework Visual -->

                                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">

                                    <div class="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/30 hover:scale-105 transition-transform">

                                        <div class="text-3xl mb-4">🧐</div>

                                        <h3 class="text-xl font-bold text-blue-400 mb-2">1. Understand</h3>

                                        <ul class="text-sm text-gray-400 list-disc list-inside">

                                            <li>Read carefully</li>

                                            <li>Identify inputs/outputs</li>

                                            <li>Ask about constraints</li>

                                            <li>Edge cases?</li>

                                        </ul>

                                    </div>

                                    <div class="bg-purple-900/20 p-6 rounded-2xl border border-purple-500/30 hover:scale-105 transition-transform">

                                        <div class="text-3xl mb-4">📝</div>

                                        <h3 class="text-xl font-bold text-purple-400 mb-2">2. Plan</h3>

                                        <ul class="text-sm text-gray-400 list-disc list-inside">

                                            <li>Brute force first</li>

                                            <li>Optimize (DS/Algo)</li>

                                            <li>Dry run logic</li>

                                            <li>Pseudocode</li>

                                        </ul>

                                    </div>

                                    <div class="bg-green-900/20 p-6 rounded-2xl border border-green-500/30 hover:scale-105 transition-transform">

                                        <div class="text-3xl mb-4">💻</div>

                                        <h3 class="text-xl font-bold text-green-400 mb-2">3. Implement</h3>

                                        <ul class="text-sm text-gray-400 list-disc list-inside">

                                            <li>Clean code</li>

                                            <li>Modular functions</li>

                                            <li>Variable naming</li>

                                            <li>Comments</li>

                                        </ul>

                                    </div>

                                    <div class="bg-orange-900/20 p-6 rounded-2xl border border-orange-500/30 hover:scale-105 transition-transform">

                                        <div class="text-3xl mb-4">🔍</div>

                                        <h3 class="text-xl font-bold text-orange-400 mb-2">4. Review</h3>

                                        <ul class="text-sm text-gray-400 list-disc list-inside">

                                            <li>Dry run with example</li>

                                            <li>Check complexity</li>

                                            <li>Refactor if time</li>

                                        </ul>

                                    </div>

                                </div>

                                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                    <h3 class="text-2xl font-bold text-white mb-4">Example: Two Sum</h3>

                                    <div class="space-y-4">

                                        <div class="flex gap-4 items-start">

                                            <div class="min-w-[100px] text-blue-400 font-bold">Understand</div>

                                            <div class="text-gray-400">Input: Array, Target. Output: Indices. Constraints: Exactly one solution?</div>

                                        </div>

                                        <div class="flex gap-4 items-start">

                                            <div class="min-w-[100px] text-purple-400 font-bold">Plan</div>

                                            <div class="text-gray-400">Brute Force: O(N²). Optimize: Use Hash Map for O(N).</div>

                                        </div>

                                        <div class="flex gap-4 items-start">

                                            <div class="min-w-[100px] text-green-400 font-bold">Implement</div>

                                            <div class="text-gray-400 font-mono text-sm">map = {}; for(i...) { diff = target - num... }</div>

                                        </div>

                                        <div class="flex gap-4 items-start">

                                            <div class="min-w-[100px] text-orange-400 font-bold">Review</div>

                                            <div class="text-gray-400">Time: O(N), Space: O(N). Edge case: Empty array?</div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        `,

                        questions: [

                            {

                                id: "intro-5-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'The Universal Problem Solving Framework'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In The Universal Problem Solving Framework, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "intro-5-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "intro-5-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for The Universal Problem Solving Framework?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                ]

            },

            {

                title: "2. Arrays Masterclass",

                lessons: [

                    {

                        id: "arr-1",

                        title: "What Are Arrays & How They Work",

                        duration: "45 min",

                        type: 'video',

                        content: `

                    <div class="space-y-12 text-gray-300 font-light">

                        <h2 class="text-4xl font-bold text-white mb-6">The Backbone of Data Structures</h2>

                        <p class="text-xl leading-relaxed text-gray-400">

                            Arrays are the most fundamental data structure. They are a <strong>contiguous</strong> block of memory, like a row of lockers.

                            This physical layout is the secret to their speed.

                        </p>

                        <!-- Memory Model Visual -->

                        <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden group">

                            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-5"></div>

                            <div class="relative z-10 grid md:grid-cols-2 gap-12 items-center">

                                <div class="space-y-6">

                                    <h3 class="text-2xl font-bold text-white flex items-center gap-3">

                                        <span class="text-green-500">⚡</span> Random Access Magic

                                    </h3>

                                    <p class="text-gray-400">

                                        How does <code class="bg-white/10 px-2 py-1 rounded text-green-400">arr[5]</code> work?

                                        It's simple math, not a search.

                                    </p>

                                    <div class="bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-sm space-y-2">

                                        <div class="flex justify-between text-gray-500">

                                            <span>Base Address</span>

                                            <span class="text-blue-400">2000</span>

                                        </div>

                                        <div class="flex justify-between text-gray-500">

                                            <span>Index</span>

                                            <span class="text-purple-400">5</span>

                                        </div>

                                        <div class="flex justify-between text-gray-500">

                                            <span>Size (int)</span>

                                            <span class="text-yellow-400">4 bytes</span>

                                        </div>

                                        <div class="h-px bg-white/10 my-2"></div>

                                        <div class="flex justify-between text-white font-bold">

                                            <span>Address</span>

                                            <span class="text-green-400">2000 + (5 * 4) = 2020</span>

                                        </div>

                                    </div>

                                    <p class="text-xs text-gray-500 italic">The CPU jumps directly to 2020. O(1) time.</p>

                                </div>

                                <!-- RAM Grid Animation -->

                                <div class="relative h-48 bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">

                                    <div class="flex gap-1">

                                        <div class="w-10 h-16 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-xs text-gray-500">[0]</div>

                                        <div class="w-10 h-16 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-xs text-gray-500">[1]</div>

                                        <div class="w-10 h-16 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-xs text-gray-500">...</div>

                                        <div class="w-10 h-16 bg-green-500/20 border border-green-500 rounded flex items-center justify-center text-xs text-green-400 font-bold shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-pulse">[5]</div>

                                        <div class="w-10 h-16 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-xs text-gray-500">...</div>

                                    </div>

                                    <!-- Pointer Arrow -->

                                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">

                                        <div class="absolute top-2 left-[60%] -translate-x-1/2 text-green-400 text-2xl font-bold animate-bounce">↓</div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="grid md:grid-cols-2 gap-8">

                            <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                <h3 class="text-xl font-bold text-white mb-4">Static Arrays (Stack)</h3>

                                <p class="text-gray-400 mb-4 text-sm">

                                    Fixed size. Allocated at compile time. Fast but rigid.

                                </p>

                                <div class="bg-black/50 p-3 rounded text-sm font-mono text-blue-400">

                                    int arr[100];

                                </div>

                            </div>

                            <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                <h3 class="text-xl font-bold text-white mb-4">Dynamic Arrays (Heap)</h3>

                                <p class="text-gray-400 mb-4 text-sm">

                                    Resizable. Allocated at runtime. Flexible but slightly slower.

                                </p>

                                <div class="bg-black/50 p-3 rounded text-sm font-mono text-green-400">

                                    vector&lt;int&gt; v; // C++<br>

                                    ArrayList&lt;Integer&gt; list; // Java

                                </div>

                            </div>

                        </div>

                        <!-- Vector vs Array -->

                        <div class="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-8 rounded-3xl border border-indigo-500/20">

                            <h3 class="text-2xl font-bold text-white mb-6">Vector vs Raw Array (C++)</h3>

                            <div class="overflow-x-auto">

                                <table class="w-full text-left text-sm text-gray-400">

                                    <thead class="text-xs uppercase bg-black/50 text-gray-300">

                                        <tr>

                                            <th class="px-6 py-3 rounded-l-lg">Feature</th>

                                            <th class="px-6 py-3">Raw Array</th>

                                            <th class="px-6 py-3 rounded-r-lg">std::vector</th>

                                        </tr>

                                    </thead>

                                    <tbody class="divide-y divide-gray-800">

                                        <tr class="bg-white/5">

                                            <td class="px-6 py-4 font-medium text-white">Size</td>

                                            <td class="px-6 py-4 text-red-400">Fixed</td>

                                            <td class="px-6 py-4 text-green-400">Dynamic</td>

                                        </tr>

                                        <tr>

                                            <td class="px-6 py-4 font-medium text-white">Memory</td>

                                            <td class="px-6 py-4 text-blue-400">Stack (usually)</td>

                                            <td class="px-6 py-4 text-purple-400">Heap</td>

                                        </tr>

                                        <tr class="bg-white/5">

                                            <td class="px-6 py-4 font-medium text-white">Safety</td>

                                            <td class="px-6 py-4 text-red-400">None (Segfaults)</td>

                                            <td class="px-6 py-4 text-green-400">Bounds checking (.at())</td>

                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                        </div>

                        <!-- Deep Dive Section -->

                        <div class="space-y-8 mt-12">

                            <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                                <div class="space-y-6">

                                    <div>

                                        <h4 class="text-lg font-bold text-purple-400 mb-2">Definition</h4>

                                        <p class="text-gray-400 leading-relaxed">

                                            An <strong>Array</strong> is a collection of items stored at <strong>contiguous memory locations</strong>. The idea is to store multiple items of the same type together, allowing calculation of the position of each element by adding an offset to a base value.

                                        </p>

                                    </div>

                                    <div>

                                        <h4 class="text-lg font-bold text-blue-400 mb-2">Why & How?</h4>

                                        <p class="text-gray-400 leading-relaxed">

                                            <strong class="text-white">Why:</strong> We need super-fast access. If we have 1 Million items, accessing <code>arr[999999]</code> takes the exact same time as <code>arr[0]</code> (Constant Time).<br>

                                            <strong class="text-white">How:</strong> Computer uses the formula: <code>Address = Base + (Index * SizeOf(Type))</code>. Because the math is instant, access is instant.

                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                                    <div class="flex gap-2">

                                        <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>

                                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>

                                        <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>

                                    </div>

                                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">basic_array.cpp</span>

                                </div>

                                <div class="p-6 overflow-x-auto">

                                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">#include</span> &lt;vector&gt;

<span class="text-purple-400">#include</span> &lt;iostream&gt;

<span class="text-purple-400">using</span> <span class="text-purple-400">namespace</span> std;

<span class="text-purple-400">void</span> <span class="text-blue-400">solve</span>() {

    <span class="text-gray-500">// 1. Static Array (Stack)</span>

    <span class="text-purple-400">int</span> arr[<span class="text-green-300">5</span>] = {<span class="text-green-300">1</span>, <span class="text-green-300">2</span>, <span class="text-green-300">3</span>, <span class="text-green-300">4</span>, <span class="text-green-300">5</span>};

    

    <span class="text-gray-500">// 2. Dynamic Array (Heap) - Recommended</span>

    vector&lt;<span class="text-purple-400">int</span>&gt; v = {<span class="text-green-300">10</span>, <span class="text-green-300">20</span>, <span class="text-green-300">30</span>};

    v.push_back(<span class="text-green-300">40</span>); <span class="text-gray-500">// O(1) Amortized</span>

    

    <span class="text-gray-500">// TRAVERSAL</span>

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> x : v) {

        cout &lt;&lt; x &lt;&lt; <span class="text-yellow-300">" "</span>;

    }

}</code></pre>

                                                                                            <h2 class="text-4xl font-bold text-white mb-6"> The Cost of Operations </h2>

                                                                                                <p class="text-xl leading-relaxed text-gray-400">

                                                                                                    Every line of code has a price.In Arrays, that price is determined by <strong> shifting </strong>.

                                                                                                        </p>

                                                                                                        <div class="grid md:grid-cols-2 gap-8">

                                                                                                            <!--Insertion Visual-->

                                                                                                                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 relative overflow-hidden group">

                                                                                                                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                                                                        <span class="text-red-500">🐢</span> Insertion (Middle/Start)

</h3>

    <div class="flex flex-col gap-4">

        <div class="flex gap-1">

            <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-white"> 1 </div>

                <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-white"> 2 </div>

                    <div class="w-10 h-10 bg-red-500/20 border border-red-500 rounded flex items-center justify-center text-red-400 font-bold animate-pulse"> X </div>

                        <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-white animate-[slideRight_1s_infinite]"> 3 </div>

                            <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-white animate-[slideRight_1s_infinite]"> 4 </div>

                                </div>

                                <p class="text-sm text-gray-400">

                                    To insert 'X' at index 2, we must shift 3 and 4 to the right.

                                            </p>

                                        <div class="bg-black/50 p-2 rounded text-red-400 font-mono text-center"> O(N) Worst Case </div>

                                            </div>

                                            </div>

                                            <!--Access Visual-->

                                                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 relative overflow-hidden group">

                                                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                        <span class="text-green-500">🐇</span> Access / Overwrite

                                                            </h3>

                                                            <div class="flex flex-col gap-4">

                                                                <div class="flex gap-1">

                                                                    <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-white"> 1 </div>

                                                                        <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-white"> 2 </div>

                                                                            <div class="w-10 h-10 bg-green-500/20 border border-green-500 rounded flex items-center justify-center text-green-400 font-bold"> X </div>

                                                                                <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-white"> 4 </div>

                                                                                    <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-white"> 5 </div>

                                                                                        </div>

                                                                                        <p class="text-sm text-gray-400">

                                                                                            Replacing index 2 doesn't affect neighbors.

                                                                                                </p>

                                                                                                <div class="bg-black/50 p-2 rounded text-green-400 font-mono text-center"> O(1) Always </div>

                                                                                                    </div>

                                                                                                    </div>

                                                                                                    </div>

                                                                                                    <!--Dynamic Array Resizing-->

                                                                                                        <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

                                                                                                            <h3 class="text-2xl font-bold text-white mb-6"> The "Growing" Illusion </h3>

                                                                                                                <p class="text-gray-400 mb-6">

                                                                                                                    Arrays cannot actually grow.When a dynamic array(vector / ArrayList) runs out of space, it:

</p>

    <div class="space-y-4">

        <div class="flex items-center gap-4">

            <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold"> 1 </div>

                <span class="text-gray-300"> Allocates a <strong> new, double - sized </strong> block of memory.</span>

                    </div>

                    <div class="flex items-center gap-4">

                        <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold"> 2 </div>

                            <span class="text-gray-300"> <strong>Copies </strong> all existing elements to the new block.</span>

                                </div>

                                <div class="flex items-center gap-4">

                                    <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold"> 3 </div>

                                        <span class="text-gray-300"> <strong>Deletes </strong> the old block.</span>

                                            </div>

                                            </div>

                                            <div class="mt-8 relative h-32 bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">

                                                <!--Old Array-->

                                                    <div class="absolute top-4 left-4 flex gap-1 opacity-50">

                                                        <div class="w-8 h-8 bg-red-500/20 border border-red-500 rounded"> </div>

                                                            <div class="w-8 h-8 bg-red-500/20 border border-red-500 rounded"> </div>

                                                                <div class="w-8 h-8 bg-red-500/20 border border-red-500 rounded"> </div>

                                                                    <div class="w-8 h-8 bg-red-500/20 border border-red-500 rounded"> </div>

                                                                        </div>

                                                                        <!--Arrow -->

                                                                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl">⬇️ Copy </div>

                                                                                <!--New Array-->

                                                                                    <div class="absolute bottom-4 left-4 flex gap-1">

                                                                                        <div class="w-8 h-8 bg-green-500/20 border border-green-500 rounded"> </div>

                                                                                            <div class="w-8 h-8 bg-green-500/20 border border-green-500 rounded"> </div>

                                                                                                <div class="w-8 h-8 bg-green-500/20 border border-green-500 rounded"> </div>

                                                                                                    <div class="w-8 h-8 bg-green-500/20 border border-green-500 rounded"> </div>

                                                                                                        <div class="w-8 h-8 bg-gray-800 border border-gray-700 rounded border-dashed"> </div>

                                                                                                            <div class="w-8 h-8 bg-gray-800 border border-gray-700 rounded border-dashed"> </div>

                                                                                                                <div class="w-8 h-8 bg-gray-800 border border-gray-700 rounded border-dashed"> </div>

                                                                                                                    <div class="w-8 h-8 bg-gray-800 border border-gray-700 rounded border-dashed"> </div>

                                                                                                                        </div>

                                                                                                                        </div>

                                                                                                                        <p class="text-xs text-right text-gray-500 mt-2"> Amortized O(1) Insertion </p>

                                                                                                                            </div>

                                                                                                                            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                                                                                                                                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                                    <div class="flex gap-2">

                                        <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>

                                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>

                                        <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>

                                    </div>

                                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> pass_by_ref.cpp </span>

                                                                                                                                        <button class="run-code-btn inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e1e1e] border border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50 transition-all text-xs font-mono" data-output="ref-output">

                                                                                                                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"> </path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>

                                            Run Code

    </button>

    </div>

    <div class="p-6">

        <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> void</span> <span class="text-blue-400">modify</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& arr) { <span class="text-gray-500">/ / & is crucial! </span>

arr[<span class="text-green-300"> 0 </span>] = <span class="text-green-300">999</span>;

}

<span class="text-purple-400"> int </span> <span class="text-blue-400">main</span> () {

    vector & lt; <span class="text-purple-400"> int </span>&gt; nums = {<span class="text-green-300">1</span>, <span class="text-green-300"> 2 </span>, <span class="text-green-300">3</span>};

modify(nums);

cout <<nums[<span class="text-green-300"> 0 </span>];

}</code></pre>

    </div>

    <div id="ref-output" class="hidden border-t border-white/10 bg-black p-4 font-mono text-xs">

        <div class="text-gray-500 mb-2"> $ g++ pass_by_ref.cpp && ./ a.out </div>

            <div class="text-green-400"> Output: 999 </div>

                <div class="text-gray-500 mt-2"> Note: Without '&', it would print 1(Copy created).</div>

                    </div>

                    </div>

                    </div>

                    </div>

                    <!-- Deep Dive Section -->

                    <div class="space-y-8 mt-12">

                        <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                            <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                            <div class="space-y-6">

                                <div>

                                    <h4 class="text-lg font-bold text-purple-400 mb-2">Definition</h4>

                                    <p class="text-gray-400 leading-relaxed">

                                        Array operations have distinct costs. <strong>Access</strong> is instant O(1). <strong>Insertion/Deletion</strong> (except at the end) requires <strong>shifting</strong> elements, making them O(N).

                                    </p>

                                </div>

                                <div>

                                    <h4 class="text-lg font-bold text-blue-400 mb-2">Why & How?</h4>

                                    <p class="text-gray-400 leading-relaxed">

                                        <strong class="text-white">Why:</strong> To maintain contiguous memory. If we delete index 2, index 3 must move to 2, 4 to 3, etc., to fill the gap.<br>

                                        <strong class="text-white">How (Deletion):</strong> Overwrite <code>arr[i]</code> with <code>arr[i+1]</code> in a loop from <code>pos</code> to <code>end</code>. Decrease size.

                                    </p>

                                </div>

                            </div>

                        </div>

                        <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                            <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                                <div class="flex gap-2">

                                    <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>

                                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>

                                    <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>

                                </div>

                                <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">insert_delete.cpp</span>

                            </div>

                            <div class="p-6 overflow-x-auto">

                                <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">void</span> <span class="text-blue-400">insertPoly</span>(vector&lt;<span class="text-purple-400">int</span>&gt;& arr, <span class="text-purple-400">int</span> pos, <span class="text-purple-400">int</span> val) {

    <span class="text-gray-500">// O(N) - Shift right</span>

    arr.push_back(<span class="text-green-300">0</span>); <span class="text-gray-500">// Increase size</span>

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = arr.size() - <span class="text-green-300">1</span>; i &gt; pos; i--) {

        arr[i] = arr[i - <span class="text-green-300">1</span>];

    }

    arr[pos] = val;

}

<span class="text-purple-400">void</span> <span class="text-blue-400">deletePoly</span>(vector&lt;<span class="text-purple-400">int</span>&gt;& arr, <span class="text-purple-400">int</span> pos) {

    <span class="text-gray-500">// O(N) - Shift left</span>

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = pos; i &lt; arr.size() - <span class="text-green-300">1</span>; i++) {

        arr[i] = arr[i + <span class="text-green-300">1</span>];

    }

    arr.pop_back(); <span class="text-gray-500">// Decrease size</span>

}</code></pre>

                            </div>

                        </div>

                    </div>

                        `,

                        questions: [

                            {

                                id: "arr-1-q1",

                                user: "HardwareGeek",

                                avatar: "NJ",

                                time: "pinned",

                                content: "Why is array access O(1) physically?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Because RAM is a grid. The address is calculated as `Base + Index * Size`. No looping required—electricity flows directly to the cell."

                                }

                            },

                            {

                                id: "arr-1-q2",

                                user: "PyExpert",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: " Python lists vs C++ Arrays?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Python lists are actually dynamic arrays of *pointers* to objects. This means they are cache-unfriendly compared to C++'s contiguous block of raw values."

                                }

                            },

                            {

                                id: "arr-1-q3",

                                user: "JavaDev",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Can we resize a static array?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "No. You must allocate a new, larger block and copy everything over. This is O(N). That's exactly how `ArrayList` or `vector` works under the hood."

                                }

                            }],

                    },

                    {

                        id: "arr-3",

                        title: "Searching Techniques",

                        duration: "55 min",

                        type: 'video',

                        content: `

                    <div class="space-y-12 text-gray-300 font-light">

                        <h2 class="text-4xl font-bold text-white mb-6"> Finding the Needle </h2>

                            <p class="text-xl leading-relaxed text-gray-400">

                                Searching is the most common operation in software.We start with the basics before mastering Binary Search.

                                </p>

                                    <!--Linear vs Binary Race-->

                                        <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                                            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                <span class="text-yellow-500">🏁</span> The Search Race

                                                    </h3>

                                                    <div class="space-y-8">

                                                        <!--Linear Search Track-->

                                                            <div class="relative">

                                                                <div class="flex justify-between text-sm mb-2 text-gray-400">

                                                                    <span class="flex items-center gap-2"> <span class="text-2xl">🐢</span> Linear Search</span>

                                                                        <span class="font-mono text-red-400 font-bold"> O(N) </span>

                                                                            </div>

                                                                            <div class="h-4 bg-gray-800 rounded-full overflow-hidden relative">

                                                                                <div class="absolute inset-y-0 left-0 bg-red-500 w-[100%] animate-[pulse_3s_infinite]"> </div>

                                                                                    </div>

                                                                                    <p class="text-xs text-gray-500 mt-1"> Checks every single element.Slow for large data.</p>

                                                                                        </div>

                                                                                        <!--Binary Search Track-->

                                                                                            <div class="relative">

                                                                                                <div class="flex justify-between text-sm mb-2 text-gray-400">

                                                                                                    <span class="flex items-center gap-2"> <span class="text-2xl">🚀</span> Binary Search</span>

                                                                                                        <span class="font-mono text-green-400 font-bold"> O(log N) </span>

                                                                                                            </div>

                                                                                                            <div class="h-4 bg-gray-800 rounded-full overflow-hidden relative">

                                                                                                                <div class="absolute inset-y-0 left-0 bg-green-500 w-[10%] shadow-[0_0_20px_rgba(34,197,94,0.5)]"> </div>

                                                                                                                    </div>

                                                                                                                    <p class="text-xs text-gray-500 mt-1"> Cuts search space in half every step.Blazing fast.</p>

                                                                                                                        </div>

                                                                                                                        </div>

                                                                                                                        </div>

                                                                                                                        <div class="grid md:grid-cols-2 gap-8">

                                                                                                                            <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                                                                <h3 class="text-xl font-bold text-white mb-4"> Sentinel Search </h3>

                                                                                                                                    <p class="text-gray-400 mb-4 text-sm">

                                                                                                                                        Optimization for Linear Search. Eliminate the <code>i&lt;n</code> check in the loop.

                                        </p>

                                                                                                                                            <div class="bg-black/50 p-3 rounded text-sm font-mono text-blue-400">

                                                                                                                                                arr[n] = target; // Sentinel <br>

while (arr[i] != target) i++;

</div>

    </div>

    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

        <h3 class="text-xl font-bold text-white mb-4"> Binary Search Basics </h3>

            <p class="text-gray-400 mb-4 text-sm">

                Requires <strong> Sorted Array </strong>.

                    </p>

                    <div class="bg-black/50 p-3 rounded text-sm font-mono text-green-400">

                        mid = left + (right - left) / 2;

</div>

    </div>

    </div>

    <!--Rotated Sorted Array Visual-->

        <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

            <h3 class="text-2xl font-bold text-white mb-6"> Rotated Sorted Array </h3>

                <p class="text-gray-400 mb-6">

                    [4, 5, 6, 7, <strong>0 </strong>, 1, 2]

                    </p>

                    <div class="relative h-32 bg-gray-900 rounded-xl border border-white/10 flex items-end px-8 pb-4 gap-1">

                        <div class="w-8 h-12 bg-blue-500/20 border border-blue-500 rounded-t"> </div>

                            <div class="w-8 h-16 bg-blue-500/20 border border-blue-500 rounded-t"> </div>

                                <div class="w-8 h-20 bg-blue-500/20 border border-blue-500 rounded-t"> </div>

                                    <div class="w-8 h-24 bg-blue-500/20 border border-blue-500 rounded-t"> </div>

                                        <div class="w-8 h-4 bg-red-500/20 border border-red-500 rounded-t animate-pulse"> </div>

                                            <div class="w-8 h-8 bg-red-500/20 border border-red-500 rounded-t"> </div>

                                                <div class="w-8 h-12 bg-red-500/20 border border-red-500 rounded-t"> </div>

                                                    </div>

                                                    <p class="text-sm text-gray-500 mt-4">

                                                        Notice the "Cliff".One half is always sorted.We exploit this property.

                                    </p>

                                                            </div>

                                                            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                                                                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                                    <div class="flex gap-2">

                                        <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>

                                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>

                                        <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>

                                    </div>

                                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> binary_search.cpp </span>

                                                                        <button class="run-code-btn inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e1e1e] border border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50 transition-all text-xs font-mono" data-output="bs-output">

                                                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"> </path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>

                                            Run Code

    </button>

    </div>

    <div class="p-6">

        <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> int </span> <span class="text-blue-400">binarySearch</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& nums, <span class="text-purple-400">int</span> target) {

    <span class="text-purple-400"> int </span> left = <span class="text-green-300">0</span>, right = nums.size() - <span class="text-green-300"> 1 </span>;

    <span class="text-purple-400">while</span> (left <= right) {

        <span class="text-purple-400"> int </span> mid = left + (right - left) / <span class="text-green-300"> 2 </span>;

    <span class="text-purple-400">if</span> (nums[mid] == target) <span class="text-purple-400">return</span> mid;

    <span class="text-purple-400">if</span> (nums[mid] <target) left = mid + <span class="text-green-300">1</span>;

    <span class="text-purple-400">else </span> right = mid - <span class="text-green-300">1</span>;

}

<span class="text-purple-400">return </span> -<span class="text-green-300">1</span>;

}</code></pre>

    </div>

    <div id="bs-output" class="hidden border-t border-white/10 bg-black p-4 font-mono text-xs">

        <div class="text-gray-500 mb-2"> $ g++ binary_search.cpp && ./ a.out </div>

            <div class="text-white"> Input: [-1, 0, 3, 5, 9, 12], Target: 9 </div>

                <div class="text-green-400"> Output: 4 </div>

                    <div class="text-gray-500 mt-2"> Process finished with exit code 0 </div>

                        </div>

                        </div>

                        </div>

                        </div>

                        </div>

                        <!-- Deep Dive Section -->

                        <div class="space-y-8 mt-12">

                            <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                                <div class="space-y-6">

                                    <div>

                                        <h4 class="text-lg font-bold text-purple-400 mb-2">Definition</h4>

                                        <p class="text-gray-400 leading-relaxed">

                                            <strong>Linear Search</strong> checks every element until the target is found. <strong>Sentinel Search</strong> optimizes this by avoiding the bounds check (<code>i &lt; n</code>) inside the loop. <strong>Binary Search</strong> (requires sorted array) divides the search space in half at each step.

                                        </p>

                                    </div>

                                    <div>

                                        <h4 class="text-lg font-bold text-blue-400 mb-2">Why & How?</h4>

                                        <p class="text-gray-400 leading-relaxed">

                                            <strong class="text-white">Why:</strong> Linear Search is O(N) but reliable for unsorted data. Sentinel Search improves constant factors. Binary Search is O(log N) but requires sorting.<br>

                                            <strong class="text-white">How (Sentinel):</strong> Place the target at the end of the array (<code>arr[n] = target</code>). Loop <code>while(arr[i] != target) i++;</code>. If <code>i &lt; n</code>, found.

                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                                    <div class="flex gap-2">

                                        <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>

                                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>

                                        <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>

                                    </div>

                                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">linear_sentinel.cpp</span>

                                </div>

                                <div class="p-6 overflow-x-auto">

                                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">int</span> <span class="text-blue-400">sentinelSearch</span>(vector&lt;<span class="text-purple-400">int</span>&gt;& arr, <span class="text-purple-400">int</span> target) {

    <span class="text-purple-400">int</span> n = arr.size();

    <span class="text-purple-400">int</span> last = arr[n - <span class="text-green-300">1</span>];

    arr[n - <span class="text-green-300">1</span>] = target; <span class="text-gray-500">// Place sentinel</span>

    

    <span class="text-purple-400">int</span> i = <span class="text-green-300">0</span>;

    <span class="text-purple-400">while</span> (arr[i] != target) {

        i++;

    }

    

    arr[n - <span class="text-green-300">1</span>] = last; <span class="text-gray-500">// Restore original</span>

    

    <span class="text-purple-400">if</span> ((i &lt; n - <span class="text-green-300">1</span>) || (last == target)) <span class="text-purple-400">return</span> i;

    <span class="text-purple-400">return</span> -<span class="text-green-300">1</span>;

}

<span class="text-gray-500">// Note: Binary Search is covered in the next module (arr-6)</span></code></pre>

                                </div>

                            </div>

                        </div>

                            `,

                        questions: [

                            {

                                id: "arr-3-q1",

                                user: "LogLogN",

                                avatar: "NJ",

                                time: "pinned",

                                content: "Binary Search on Unsorted Array?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Impossible. Binary Search requires order to eliminate half the search space at each step. Sorting first takes O(N log N), so it's only worth it for multiple searches."

                                }

                            },

                            {

                                id: "arr-3-q2",

                                user: "PracticalDev",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "Linear Search vs Binary Search threshold?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "For N < 50, Linear might be faster due to branching overhead in Binary Search. But for N=1,000,000, Binary is instant (20 steps)."

                                }

                            },

                            {

                                id: "arr-3-q3",

                                user: "PatternPro",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Two Pointers complexity?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Mostly O(N) because each pointer traverses the array at most once."

                                }

                            }],

                    },

                    {

                        id: "arr-4",

                        title: "Sorting Fundamentals",

                        duration: "55 min",

                        type: 'video',

                        content: `

                        <div class="space-y-12 text-gray-300 font-light">

                            <h2 class="text-4xl font-bold text-white mb-6"> Ordering Chaos </h2>

                                <p class="text-xl leading-relaxed text-gray-400">

                                    Sorting is the prerequisite for efficient searching(Binary Search) and many other algorithms.

                                    We start with the intuitive O(N²) algorithms.

                                </p>

    <!--Bubble Sort Visual-->

        <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden group">

            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                <span class="text-blue-500">🫧</span> Bubble Sort

                    </h3>

                    <div class="flex flex-col gap-6">

                        <div class="flex gap-2 items-end h-32">

                            <div class="w-8 bg-gray-800 rounded-t h-[40%]"> </div>

                                <div class="w-8 bg-gray-800 rounded-t h-[60%]"> </div>

                                    <div class="w-8 bg-blue-500 rounded-t h-[80%] animate-bounce"> </div>

                                        <div class="w-8 bg-gray-800 rounded-t h-[30%]"> </div>

                                            <div class="w-8 bg-green-500/20 border border-green-500 rounded-t h-[90%]"> </div>

                                                <div class="w-8 bg-green-500/20 border border-green-500 rounded-t h-[100%]"> </div>

                                                    </div>

                                                    <p class="text-sm text-gray-400">

                                                        Repeatedly swaps adjacent elements if they are in wrong order.

                                            Large elements "bubble" to the top(right).

                                        </p>

    <div class="bg-black/50 p-2 rounded text-red-400 font-mono text-xs w-fit"> Best: O(N) | Avg / Worst: O(N²) </div>

        </div>

        </div>

        <div class="grid md:grid-cols-2 gap-8">

            <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                <h3 class="text-xl font-bold text-white mb-4"> Selection Sort </h3>

                    <p class="text-gray-400 mb-4 text-sm">

                        Find the minimum, swap it to the front.Repeat.

                                        </p>

                            <div class="flex gap-1 mb-2">

                                <div class="w-6 h-6 bg-green-500/20 border border-green-500 rounded text-xs flex items-center justify-center text-green-400"> 1 </div>

                                    <div class="w-6 h-6 bg-green-500/20 border border-green-500 rounded text-xs flex items-center justify-center text-green-400"> 2 </div>

                                        <div class="w-6 h-6 bg-gray-700 rounded text-xs flex items-center justify-center">? </div>

                                            <div class="w-6 h-6 bg-gray-700 rounded text-xs flex items-center justify-center">? </div>

                                                </div>

                                                <div class="bg-black/50 p-2 rounded text-red-400 font-mono text-xs"> Always O(N²) </div>

                                                    </div>

                                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                        <h3 class="text-xl font-bold text-white mb-4"> Insertion Sort </h3>

                                                            <p class="text-gray-400 mb-4 text-sm">

                                                                Take an element and "insert" it into the sorted left portion.

                                        </p>

                                                                    <div class="flex gap-1 mb-2">

                                                                        <div class="w-6 h-6 bg-green-500/20 border border-green-500 rounded text-xs flex items-center justify-center text-green-400"> 1 </div>

                                                                            <div class="w-6 h-6 bg-green-500/20 border border-green-500 rounded text-xs flex items-center justify-center text-green-400"> 5 </div>

                                                                                <div class="w-6 h-6 bg-blue-500 rounded text-xs flex items-center justify-center text-white"> 3 </div>

                                                                                    <div class="w-6 h-6 bg-gray-700 rounded text-xs flex items-center justify-center">? </div>

                                                                                        </div>

                                                                                        <div class="bg-black/50 p-2 rounded text-yellow-400 font-mono text-xs"> Adaptive: O(N) if sorted </div>

                                                                                            </div>

                                                                                            </div>

                                                                                            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                                                                                                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                                    <div class="flex gap-2">

                                        <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>

                                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>

                                        <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>

                                    </div>

                                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> insertion_sort.cpp </span>

                                                                                                        <button class="run-code-btn inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e1e1e] border border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50 transition-all text-xs font-mono" data-output="ins-output">

                                                                                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"> </path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>

                                            Run Code

    </button>

    </div>

    <div class="p-6">

        <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> void</span> <span class="text-blue-400">insertionSort</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& arr) {

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-green-300"> 1 </span>; i <arr.size(); i++) {

        <span class="text-purple-400"> int </span> key = arr[i];

        <span class="text-purple-400"> int </span> j = i - <span class="text-green-300">1</span>;

        <span class="text-purple-400">while</span> (j >= <span class="text-green-300">0</span> && arr[j] > key) {

            arr[j + <span class="text-green-300"> 1 </span>] = arr[j];

            j--;

        }

        arr[j + <span class="text-green-300"> 1 </span>] = key;

    }

} </code></pre>

    </div>

    <div id="ins-output" class="hidden border-t border-white/10 bg-black p-4 font-mono text-xs">

        <div class="text-gray-500 mb-2"> $ g++ insertion_sort.cpp && ./ a.out </div>

            <div class="text-white"> Input: [12, 11, 13, 5, 6] </div>

                <div class="text-green-400"> Sorted: [5, 6, 11, 12, 13] </div>

                    <div class="text-gray-500 mt-2"> Process finished with exit code 0 </div>

                        </div>

                        </div>

                        </div>

                    <!--Deep Dive Section-->

                    <div class="space-y-8 mt-12">

                    <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6"> Concept Deep Dive </h3>

                    <div class="space-y-6">

                    <div>

                    <h4 class="text-lg font-bold text-purple-400 mb-2"> Definition </h4>

                    <p class="text-gray-400 leading-relaxed">

                    <strong>Fundamental Sorting Algorithms </strong> like Bubble, Selection, and Insertion Sort operate in <strong>O(N²)</strong> time.They are simple to implement but inefficient for large datasets(N > 10,000).

                                        </p>

                    </div>

                    <div>

            <h4 class="text-lg font-bold text-blue-400 mb-2"> Why & How ? </h4>

                <p class="text-gray-400 leading-relaxed">

                <strong class="text-white"> Why: </strong> Good for small arrays or learning. Insertion sort is very fast for <em>almost sorted</em> arrays(O(N)).<br>

            <strong class="text-white"> How(Bubble): </strong> Repeatedly swap adjacent elements if they are in wrong order. Largest element "bubbles" to the top in each pass.

            </p>

            </div>

            </div>

            </div>

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

            <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

            <div class="flex gap-2">

            <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"> </div>

            <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"> </div>

            <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"> </div>

            </div>

            <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> bubble_selection.cpp </span>

            </div>

            <div class="p-6 overflow-x-auto">

            <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> void</span> <span class="text-blue-400">bubbleSort</span> (vector & lt;<span class="text-purple-400"> int </span>&gt;& arr) {

    <span class="text-purple-400"> int </span> n = arr.size();

<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-green-300"> 0 </span>; i &lt; n - <span class="text-green-300">1</span>; i++) {

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> j = <span class="text-green-300"> 0 </span>; j &lt; n - i - <span class="text-green-300">1</span>; j++) {

        <span class="text-purple-400">if</span> (arr[j] &gt; arr[j + <span class="text-green-300">1</span>]) {

                swap(arr[j], arr[j + <span class="text-green-300"> 1 </span>]);

    }

}

    }

}

<span class="text-purple-400"> void</span> <span class="text-blue-400">selectionSort</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& arr) {

    <span class="text-purple-400"> int </span> n = arr.size();

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-green-300"> 0 </span>; i &lt; n - <span class="text-green-300">1</span>; i++) {

        <span class="text-purple-400"> int </span> minIdx = i;

        <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> j = i + <span class="text-green-300"> 1 </span>; j &lt; n; j++) {

            <span class="text-purple-400">if</span> (arr[j] &lt; arr[minIdx]) minIdx = j;

        }

        swap(arr[i], arr[minIdx]);

    }

} </code></pre>

    </div>

    </div>

    </div>

                            </div>

                            </div>

                            </div>

                            <!--Deep Dive Section -->

                    <div class="space-y-8 mt-12">

                    <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6"> Concept Deep Dive </h3>

                    <div class="space-y-6">

                    <div>

                    <h4 class="text-lg font-bold text-purple-400 mb-2"> Definition </h4>

                    <p class="text-gray-400 leading-relaxed">

                    <strong>Fundamental Sorting Algorithms </strong> like Bubble, Selection, and Insertion Sort operate in <strong>O(N²)</strong> time.They are simple to implement but inefficient for large datasets(N > 10,000).

                                        </p>

                    </div>

                    <div>

            <h4 class="text-lg font-bold text-blue-400 mb-2"> Why & How ? </h4>

                <p class="text-gray-400 leading-relaxed">

                <strong class="text-white"> Why: </strong> Good for small arrays or learning. Insertion sort is very fast for <em>almost sorted</em> arrays(O(N)).<br>

            <strong class="text-white"> How(Bubble): </strong> Repeatedly swap adjacent elements if they are in wrong order. Largest element "bubbles" to the top in each pass.

            </p>

            </div>

            </div>

            </div>

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

            <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

            <div class="flex gap-2">

            <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"> </div>

            <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"> </div>

            <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"> </div>

            </div>

            <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> bubble_selection.cpp </span>

            </div>

            <div class="p-6 overflow-x-auto">

            <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> void</span> <span class="text-blue-400">bubbleSort</span> (vector & lt;<span class="text-purple-400"> int </span>&gt;& arr) {

    <span class="text-purple-400"> int </span> n = arr.size();

<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-green-300"> 0 </span>; i &lt; n - <span class="text-green-300">1</span>; i++) {

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> j = <span class="text-green-300"> 0 </span>; j &lt; n - i - <span class="text-green-300">1</span>; j++) {

        <span class="text-purple-400">if</span> (arr[j] &gt; arr[j + <span class="text-green-300">1</span>]) {

                swap(arr[j], arr[j + <span class="text-green-300"> 1 </span>]);

    }

}

    }

}

<span class="text-purple-400"> void</span> <span class="text-blue-400">selectionSort</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& arr) {

    <span class="text-purple-400"> int </span> n = arr.size();

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-green-300"> 0 </span>; i &lt; n - <span class="text-green-300">1</span>; i++) {

        <span class="text-purple-400"> int </span> minIdx = i;

        <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> j = i + <span class="text-green-300"> 1 </span>; j &lt; n; j++) {

            <span class="text-purple-400">if</span> (arr[j] &lt; arr[minIdx]) minIdx = j;

        }

        swap(arr[i], arr[minIdx]);

    }

} </code></pre>

    </div>

    </div>

    </div>

        `,

                        questions: [

                            {

                                id: "arr-4-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Sorting Fundamentals'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Sorting Fundamentals, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "arr-4-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "arr-4-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Sorting Fundamentals?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "arr-5",

                        title: "Efficient Sorting Algorithms",

                        duration: "65 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> Breaking the O(N²) Barrier </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                To handle millions of elements, we need O(N log N).Enter Divide & Conquer.

                                </p>

                    <!--Merge Sort Visual-->

                        <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                <span class="text-purple-500">🌳</span> Merge Sort: Divide & Conquer

                                    </h3>

                                    <div class="flex flex-col items-center gap-4">

                                        <!--Level 0 -->

                                            <div class="flex gap-1">

                                                <div class="w-8 h-8 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-xs"> 8 </div>

                                                    <div class="w-8 h-8 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-xs"> 3 </div>

                                                        <div class="w-8 h-8 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-xs"> 5 </div>

                                                            <div class="w-8 h-8 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-xs"> 4 </div>

                                                                </div>

                                                                <!--Arrows -->

                                                                    <div class="flex gap-16 text-gray-600 text-xs">

                                                                        <span>↙</span><span>↘</span>

                                                                            </div>

                                                                            <!--Level 1 -->

                                                                                <div class="flex gap-16">

                                                                                    <div class="flex gap-1">

                                                                                        <div class="w-8 h-8 bg-gray-800/50 border border-gray-700 rounded flex items-center justify-center text-xs"> 8 </div>

                                                                                            <div class="w-8 h-8 bg-gray-800/50 border border-gray-700 rounded flex items-center justify-center text-xs"> 3 </div>

                                                                                                </div>

                                                                                                <div class="flex gap-1">

                                                                                                    <div class="w-8 h-8 bg-gray-800/50 border border-gray-700 rounded flex items-center justify-center text-xs"> 5 </div>

                                                                                                        <div class="w-8 h-8 bg-gray-800/50 border border-gray-700 rounded flex items-center justify-center text-xs"> 4 </div>

                                                                                                            </div>

                                                                                                            </div>

                                                                                                            <!--Arrows -->

                                                                                                                <div class="flex gap-8 text-gray-600 text-xs">

                                                                                                                    <span>↙</span><span>↘</span> <span>↙</span><span>↘</span>

                                                                                                                        </div>

                                                                                                                        <!--Level 2(Sorted Merge)-->

                                                                                                                            <div class="flex gap-16">

                                                                                                                                <div class="flex gap-1">

                                                                                                                                    <div class="w-8 h-8 bg-purple-500/20 border border-purple-500 rounded flex items-center justify-center text-purple-400 text-xs"> 3 </div>

                                                                                                                                        <div class="w-8 h-8 bg-purple-500/20 border border-purple-500 rounded flex items-center justify-center text-purple-400 text-xs"> 8 </div>

                                                                                                                                            </div>

                                                                                                                                            <div class="flex gap-1">

                                                                                                                                                <div class="w-8 h-8 bg-purple-500/20 border border-purple-500 rounded flex items-center justify-center text-purple-400 text-xs"> 4 </div>

                                                                                                                                                    <div class="w-8 h-8 bg-purple-500/20 border border-purple-500 rounded flex items-center justify-center text-purple-400 text-xs"> 5 </div>

                                                                                                                                                        </div>

                                                                                                                                                        </div>

                                                                                                                                                        <!--Final Merge-->

                                                                                                                                                            <div class="mt-4 flex gap-1 animate-pulse">

                                                                                                                                                                <div class="w-8 h-8 bg-green-500/20 border border-green-500 rounded flex items-center justify-center text-green-400 text-xs"> 3 </div>

                                                                                                                                                                    <div class="w-8 h-8 bg-green-500/20 border border-green-500 rounded flex items-center justify-center text-green-400 text-xs"> 4 </div>

                                                                                                                                                                        <div class="w-8 h-8 bg-green-500/20 border border-green-500 rounded flex items-center justify-center text-green-400 text-xs"> 5 </div>

                                                                                                                                                                            <div class="w-8 h-8 bg-green-500/20 border border-green-500 rounded flex items-center justify-center text-green-400 text-xs"> 8 </div>

                                                                                                                                                                                </div>

                                                                                                                                                                                </div>

                                                                                                                                                                                </div>

                                                                                                                                                                                <div class="grid md:grid-cols-2 gap-8">

                                                                                                                                                                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                                                                                                                        <h3 class="text-xl font-bold text-white mb-4"> Quick Sort </h3>

                                                                                                                                                                                            <p class="text-gray-400 mb-4 text-sm">

                                                                                                                                                                                                Pick a pivot.Partition: Smaller left, Larger right.Recursively sort.

                                        </p>

                                                                                                                                                                                                    <div class="bg-black/50 p-3 rounded text-sm font-mono text-yellow-400">

                                                                                                                                                                                                        Avg: O(N log N)<br>

Worst: O(N²)(Rare)<br>

Space: O(log N)

    </div>

    </div>

    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

        <h3 class="text-xl font-bold text-white mb-4"> Merge Sort </h3>

            <p class="text-gray-400 mb-4 text-sm">

                Divide in half.Recursively sort.Merge sorted halves.

                                        </p>

                    <div class="bg-black/50 p-3 rounded text-sm font-mono text-green-400">

                        Always: O(N log N)<br>

                                            Stable Sort<br>

Space: O(N)

    </div>

    </div>

    </div>

    <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

        <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

            <div class="flex gap-2">

                <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"> </div>

                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"> </div>

                        <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"> </div>

                            </div>

                            <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> quick_sort.cpp </span>

                                <button class="run-code-btn inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e1e1e] border border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50 transition-all text-xs font-mono" data - output="qs-output">

                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke - linecap="round" stroke - linejoin="round" stroke - width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"> </path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>

                                            Run Code

    </button>

    </div>

    <div class="p-6">

        <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> int </span> <span class="text-blue-400">partition</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& arr, <span class="text-purple-400">int</span> low, <span class="text-purple-400"> int </span> high) {

    <span class="text-purple-400"> int </span> pivot = arr[high];

    <span class="text-purple-400"> int </span> i = low - <span class="text-green-300">1</span>;

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> j = low; j <high; j++) {

        <span class="text-purple-400">if</span> (arr[j] <pivot) {

            i++;

        <span class="text-yellow-300"> swap </span>(arr[i], arr[j]);

    }

}

<span class="text-yellow-300"> swap </span>(arr[i + <span class="text-green-300">1</span>], arr[high]);

<span class="text-purple-400">return </span> i + <span class="text-green-300">1</span>;

}

<span class="text-purple-400"> void</span> <span class="text-blue-400">quickSort</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& arr, <span class="text-purple-400">int</span> low, <span class="text-purple-400"> int </span> high) {

    <span class="text-purple-400">if</span> (low <high) {

        <span class="text-purple-400"> int </span> pi = partition(arr, low, high);

    quickSort(arr, low, pi - <span class="text-green-300"> 1 </span>);

    quickSort(arr, pi + <span class="text-green-300"> 1 </span>, high);

}

}</code></pre>

    </div>

    <div id="qs-output" class="hidden border-t border-white/10 bg-black p-4 font-mono text-xs">

        <div class="text-gray-500 mb-2"> $ g++ quick_sort.cpp && ./ a.out </div>

            <div class="text-white"> Input: [10, 7, 8, 9, 1, 5] </div>

                <div class="text-green-400"> Sorted: [1, 5, 7, 8, 9, 10] </div>

                    </div>

                    </div>

                    </div>

                    <!--Deep Dive Section-->

                        <div class="space-y-8 mt-12">

                            <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                <h3 class="text-2xl font-bold text-white mb-6"> Concept Deep Dive </h3>

                                    <div class="space-y-6">

                                        <div>

                                        <h4 class="text-lg font-bold text-purple-400 mb-2"> Definition </h4>

                                            <p class="text-gray-400 leading-relaxed">

                                                <strong>Divide & Conquer Sorting </strong> converts O(N²) sorting into <strong>O(N log N)</strong> by recursively breaking the problem into smaller sub - problems, solving them, and combining the results.

                                        </p>

                                                    </div>

                                                    <div>

                                                    <h4 class="text-lg font-bold text-blue-400 mb-2"> Why & How ? </h4>

                                                        <p class="text-gray-400 leading-relaxed">

                                                            <strong class="text-white"> Why: </strong> O(N²) is unusable for N > 10,000. O(N log N) can handle millions. <br>

                                                                <strong class="text-white"> How(Merge Sort): </strong> Trusted for stability. 1. Split array in half. 2. Recursively sort halves. 3. <strong>Merge</strong> two sorted halves using two pointers.<br>

                                                                    <strong class="text-white"> How(Quick Sort): </strong> Trusted for speed. 1. Pick pivot. 2. <strong>Partition</strong> array so smaller <Pivot <larger. 3. Recursively sort parts.

                                        </p>

                                                                        </div>

                                                                        </div>

                                                                        </div>

                                                                        <!--Code Template(Merge Sort - Missing above)-->

                                                                            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                                                                                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                                                                                    <div class="flex gap-2">

                                                                                        <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"> </div>

                                                                                            <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"> </div>

                                                                                                <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"> </div>

                                                                                                    </div>

                                                                                                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> merge_sort_template.cpp </span>

                                                                                                        </div>

                                                                                                        <div class="p-6 overflow-x-auto">

                                                                                                            <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> void</span> <span class="text-blue-400">merge</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& arr, <span class="text-purple-400">int</span> l, <span class="text-purple-400"> int </span> m, <span class="text-purple-400">int</span> r) {

    vector & lt; <span class="text-purple-400"> int </span>&gt; temp;

    <span class="text-purple-400"> int </span> left = l, right = m + <span class="text-green-300">1</span>;

    <span class="text-purple-400">while</span> (left &lt;= m && right &lt;= r) {

        <span class="text-purple-400">if</span> (arr[left] &lt;= arr[right]) temp.push_back(arr[left++]);

    <span class="text-purple-400">else </span> temp.push_back(arr[right++]);

}

<span class="text-purple-400">while</span> (left &lt;= m) temp.push_back(arr[left++]);

<span class="text-purple-400">while</span> (right &lt;= r) temp.push_back(arr[right++]);

<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-green-300"> 0 </span>; i &lt; temp.size(); i++) {

    arr[l + i] = temp[i];

}

}

<span class="text-purple-400"> void</span> <span class="text-blue-400">mergeSort</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& arr, <span class="text-purple-400">int</span> l, <span class="text-purple-400"> int </span> r) {

    <span class="text-purple-400">if</span> (l &gt;= r) <span class="text-purple-400">return</span>;

    <span class="text-purple-400"> int </span> mid = l + (r - l) / <span class="text-green-300"> 2 </span>;

    mergeSort(arr, l, mid);

    mergeSort(arr, mid + <span class="text-green-300"> 1 </span>, r);

    merge(arr, l, mid, r);

} </code></pre>

    </div>

    </div>

    </div>

    </div>

        `,

                        questions: [

                            {

                                id: "arr-5-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Efficient Sorting Algorithms'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Efficient Sorting Algorithms, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "arr-5-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "arr-5-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Efficient Sorting Algorithms?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "arr-6",

                        title: "Binary Search Complete System",

                        duration: "60 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> The Power of Halving </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                Binary Search is not just for sorted arrays.It's a framework for solving decision problems.

                    <strong> Monotonicity </strong> is the key.

                    </p>

                    <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                            <span class="text-cyan-500">🔍</span> Search Space Reduction

                                </h3>

                                <div class="flex flex-col gap-6">

                                    <!--Array Visualization-->

                                        <div class="flex items-center justify-center gap-1">

                                            <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-gray-500 text-xs"> 1 </div>

                                                <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-gray-500 text-xs"> 3 </div>

                                                    <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-gray-500 text-xs"> 5 </div>

                                                        <div class="w-10 h-10 bg-cyan-500/20 border border-cyan-500 rounded flex items-center justify-center text-cyan-400 font-bold"> 9 </div>

                                                            <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-gray-500 text-xs"> 12 </div>

                                                                <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-gray-500 text-xs"> 15 </div>

                                                                    <div class="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-gray-500 text-xs"> 19 </div>

                                                                        </div>

                                                                        <!--Pointers -->

                                                                            <div class="relative h-8 w-full max-w-md mx-auto">

                                                                                <div class="absolute left-[10%] text-cyan-500 font-mono text-xs flex flex-col items-center">

                                                                                    <span>L </span>

                                                                                    <span>⬆</span>

                                                                                        </div>

                                                                                        <div class="absolute left-[50%] text-yellow-500 font-mono text-xs flex flex-col items-center">

                                                                                            <span>M </span>

                                                                                            <span>⬆</span>

                                                                                                </div>

                                                                                                <div class="absolute right-[10%] text-cyan-500 font-mono text-xs flex flex-col items-center">

                                                                                                    <span>R </span>

                                                                                                    <span>⬆</span>

                                                                                                        </div>

                                                                                                        </div>

                                                                                                        <p class="text-center text-gray-400 text-sm">

                                                                                                            If <code> arr[mid] <target </code>, discard left half. L = mid + 1.

                                                                                                            </p>

                                                                                                            </div>

                                                                                                            </div>

                                                                                                            <div class="grid md:grid-cols-2 gap-8">

                                                                                                                <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                                                    <h3 class="text-xl font-bold text-white mb-4"> Lower & Upper Bound </h3>

                                                                                                                        <p class="text-gray-400 mb-4 text-sm">

                                                                                                                            Find the first or last occurrence of an element.

                        </p>

                                                                                                                                <div class="bg-black/50 p-3 rounded text-sm font-mono text-cyan-400">

                                                                                                                                    lower_bound: First >= k<br>

upper_bound: First > k

    </div>

    </div>

    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

        <h3 class="text-xl font-bold text-white mb-4"> BS on Answer </h3>

            <p class="text-gray-400 mb-4 text-sm">

                "Allocate Books", "Aggressive Cows".

                        </p>

                <p class="text-gray-500 text-sm">

                    Search range[min, max].Check validity function.

</p>

    </div>

    </div>

    <!--Deep Dive Section-->

        <div class="space-y-8 mt-12">

            <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                <h3 class="text-2xl font-bold text-white mb-6"> Concept Deep Dive </h3>

                    <div class="space-y-6">

                        <div>

                        <h4 class="text-lg font-bold text-purple-400 mb-2"> Definition </h4>

                            <p class="text-gray-400 leading-relaxed">

                                <strong>Binary Search </strong> is a divide-and-conquer algorithm that locates a target value within a <em>sorted</em> sequence by repeatedly halving the search interval.It works on any monotonic function, not just arrays.

                                </p>

                                    </div>

                                    <div>

                                    <h4 class="text-lg font-bold text-blue-400 mb-2"> Why & How ? </h4>

                                        <p class="text-gray-400 leading-relaxed">

                                            <strong class="text-white"> Why: </strong> Linear search is O(N). For 1 Billion items, Linear takes 1B steps, Binary Search takes ~30 steps (log2(1B)).<br>

                                                <strong class="text-white"> How: </strong> Compare <code>target</code> with <code>mid </code>.<br>

                                    1. If <code> mid == target </code>, found.<br>

2. If <code> target <mid </code>, search left half.<br>

3. If <code> target > mid </code>, search right half.

    </p>

    </div>

    </div>

    </div>

    <!--Code Template(BS on Answer)-->

        <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

            <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                <div class="flex gap-2">

                    <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"> </div>

                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"> </div>

                            <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"> </div>

                                </div>

                                <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> bs_on_answer_template.cpp </span>

                                    </div>

                                    <div class="p-6 overflow-x-auto">

                                        <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> bool </span> <span class="text-blue-400">check</span> (<span class="text-purple-400"> int </span> x) {

    <span class="text-gray-500">// Return true if x is valid/possible</span>

        <span class="text-gray-500">// Specific to the problem (e.g., can we place cows with dist x?)</span>

            <span class="text-purple-400">return </span> <span class="text-green-300">true</span>;

}

<span class="text-purple-400"> int </span> <span class="text-blue-400">binarySearchAnswer</span> (<span class="text-purple-400"> int </span> low, <span class="text-purple-400">int</span> high) {

    <span class="text-purple-400"> int </span> ans = -<span class="text-green-300">1</span>;

    <span class="text-purple-400">while</span> (low &lt;= high) {

        <span class="text-purple-400"> int </span> mid = low + (high - low) / <span class="text-green-300"> 2 </span>;

    <span class="text-purple-400">if</span> (check(mid)) {

            ans = mid; <span class="text-gray-500">// Possible answer, try simpler/harder depending on goal</span>

        low = mid + <span class="text-green-300"> 1 </span>;  <span class="text-gray-500">/ / Example: Try for a larger valid value(Maximize Answer) </span>

} <span class="text-purple-400">else </span> {

high = mid - <span class="text-green-300"> 1 </span>;

        }

    }

<span class="text-purple-400">return </span> ans;

}</code></pre>

    </div>

    </div>

    </div>

    </div>

        `,

                        questions: [

                            {

                                id: "arr-6-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Binary Search Complete System'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Binary Search Complete System, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "arr-6-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "arr-6-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Binary Search Complete System?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "arr-7",

                        title: "Two Pointers Mastery",

                        duration: "55 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> Two Pointers Patterns </h2>

            <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"> </div>

                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                        <span class="text-purple-500">🤝</span> Meeting in the Middle

                            </h3>

                            <div class="relative h-32 bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">

                                <!--Left Pointer-->

                                    <div class="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 animate-[slideRight_2s_infinite_alternate]">

                                        <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]"> L </div>

                                            <div class="w-1 h-8 bg-blue-500/50"> </div>

                                                </div>

                                                <!--Right Pointer-->

                                                    <div class="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 animate-[slideLeft_2s_infinite_alternate]">

                                                        <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(236,72,153,0.5)]"> R </div>

                                                            <div class="w-1 h-8 bg-pink-500/50"> </div>

                                                                </div>

                                                                <!--Target -->

                                                                    <div class="w-32 h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center text-gray-500 text-sm">

                                                                        Sorted Array

                                                                            </div>

                                                                            </div>

                                                                            <p class="text-center text-gray-400 mt-4 text-sm">

                                                                                Checking pairs from both ends.If sum > target, move R left.If sum <target, move L right.

                                    </p>

                                                                                    </div>

                                                                                    <div class="grid md:grid-cols-2 gap-8">

                                                                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                            <h3 class="text-xl font-bold text-white mb-4"> 1. Opposite Direction </h3>

                                                                                                <p class="text-gray-400 mb-4"> Left -> ... <- Right </p>

                                                                                                    <ul class="space-y-2 text-sm text-gray-500">

                                                                                                        <li>• Two Sum(Sorted) </li>

                                                                                                            <li>• Valid Palindrome </li>

                                                                                                                <li>• Reverse Array </li>

                                                                                                                    </ul>

                                                                                                                    </div>

                                                                                                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                                                        <h3 class="text-xl font-bold text-white mb-4"> 2. Same Direction </h3>

                                                                                                                            <p class="text-gray-400 mb-4"> Slow -> ...Fast -> </p>

                                                                                                                                <ul class="space-y-2 text-sm text-gray-500">

                                                                                                                                    <li>• Remove Duplicates </li>

                                                                                                                                        <li>• Move Zeroes </li>

                                                                                                                                            <li>• Intersection of Arrays </li>

                                                                                                                                                </ul>

                                                                                                                                                </div>

                                                                                                                                                </div>

                                                                                                                                                <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                                                                                                                                                    <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                                                                                                                                                        <div class="flex gap-2">

                                                                                                                                                            <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"> </div>

                                                                                                                                                                <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"> </div>

                                                                                                                                                                    <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"> </div>

                                                                                                                                                                        </div>

                                                                                                                                                                        <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> remove_dups.py </span>

                                                                                                                                                                            <button class="run-code-btn inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e1e1e] border border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50 transition-all text-xs font-mono" data - output="dups-output">

                                                                                                                                                                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke - linecap="round" stroke - linejoin="round" stroke - width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"> </path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>

                                            Run Code

    </button>

    </div>

    <div class="p-6">

        <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> def </span> <span class="text-blue-400">removeDuplicates</span> (nums):

<span class="text-purple-400">if</span> <span class="text-purple-400">not</span> nums: <span class="text-purple-400">return </span> <span class="text-green-300">0</span>

    slow = <span class="text-green-300"> 0 </span>

        <span class="text-purple-400">for</span> fast <span class="text-purple-400">in</span> <span class="text-yellow-300"> range </span>(<span class="text-green-300">1</span>, <span class="text-yellow-300"> len </span>(nums)):

            <span class="text-purple-400">if</span> nums[fast] != nums[slow]:

            slow += <span class="text-green-300"> 1 </span>

nums[slow] = nums[fast]

    <span class="text-purple-400">return </span> slow + <span class="text-green-300">1</span> </code></pre>

        </div>

        <div id="dups-output" class="hidden border-t border-white/10 bg-black p-4 font-mono text-xs">

            <div class="text-gray-500 mb-2"> $ python3 remove_dups.py </div>

                <div class="text-white"> Input: [1, 1, 2, 2, 3] </div>

                    <div class="text-green-400"> Length: 3, Array: [1, 2, 3, ...] </div>

                        <div class="text-gray-500 mt-2"> Process finished with exit code 0 </div>

                            </div>

                            </div>

                            <div class="mt-12 space-y-8">

                                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                    <h3 class="text-2xl font-bold text-white mb-4"> 3Sum Pattern </h3>

                                        <p class="text-gray-400 mb-6">

                                            Fix one number(<code>i </code>), then use 2 pointers (<code>L, R</code>) to find the other two.

                                        </p>

                                                <div class="font-mono text-sm text-purple-400 bg-black/50 p-4 rounded-xl">

                                                    target = -nums[i]<br>

                                            Find pairs(L, R) summing to target

    </div>

    </div>

    <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

        <h3 class="text-2xl font-bold text-white mb-4"> Merge Sorted Arrays </h3>

            <p class="text-gray-400 mb-6">

                The "Zipper" technique.Compare heads of both arrays, take smaller.

                                        </p>

                    <div class="flex items-center gap-4 justify-center">

                        <div class="flex flex-col gap-1 items-center">

                            <div class="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center text-blue-400"> 1 </div>

                                <div class="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center text-blue-400"> 3 </div>

                                    <div class="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center text-blue-400"> 5 </div>

                                        </div>

                                        <div class="text-2xl text-gray-600"> +</div>

                                            <div class="flex flex-col gap-1 items-center">

                                                <div class="w-8 h-8 bg-green-500/20 rounded flex items-center justify-center text-green-400"> 2 </div>

                                                    <div class="w-8 h-8 bg-green-500/20 rounded flex items-center justify-center text-green-400"> 4 </div>

                                                        <div class="w-8 h-8 bg-green-500/20 rounded flex items-center justify-center text-green-400"> 6 </div>

                                                            </div>

                                                            <div class="text-2xl text-gray-600">= </div>

                                                                <div class="flex flex-col gap-1 items-center border border-white/10 p-2 rounded-lg">

                                                                    <div class="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white"> 1 </div>

                                                                        <div class="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white"> 2 </div>

                                                                            <div class="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white"> 3 </div>

                                                                                <div class="text-xs text-gray-500">...</div>

                                                                                    </div>

                                                                                    </div>

                                                                                    </div>

                                                                                    </div>

                                                                                    </div>

                                                                                        `,

                        questions: [

                            {

                                id: "arr-7-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Two Pointers Mastery'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Two Pointers Mastery, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "arr-7-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "arr-7-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Two Pointers Mastery?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "arr-8",

                        title: "Sliding Window Protocol",

                        duration: "60 min",

                        type: 'video',

                        content: `

                                                                                    <div class="space-y-12 text-gray-300 font-light">

                                                                                        <h2 class="text-4xl font-bold text-white mb-6"> Sliding Window Protocol </h2>

                                                                                            <p class="text-xl leading-relaxed text-gray-400">

                                                                                                Convert nested loops O(N²) into linear O(N) by maintaining a "window" of state.

                </p>

                                                                                                    <div class="mt-8 bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

                                                                                                        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                                                            <span class="text-orange-500">🚂</span> The Train Window

                                                                                                                </h3>

                                                                                                                <div class="relative h-40 bg-gray-900 rounded-xl border border-white/10 overflow-hidden flex items-center">

                                                                                                                    <!--Landscape(Array) -->

                                                                                                                        <div class="absolute inset-x-0 h-12 bg-gray-800 flex items-center justify-around px-4">

                                                                                                                            <div class="w-8 h-8 bg-white/10 rounded-full"> </div>

                                                                                                                                <div class="w-8 h-8 bg-white/10 rounded-full"> </div>

                                                                                                                                    <div class="w-8 h-8 bg-white/10 rounded-full"> </div>

                                                                                                                                        <div class="w-8 h-8 bg-white/10 rounded-full"> </div>

                                                                                                                                            <div class="w-8 h-8 bg-white/10 rounded-full"> </div>

                                                                                                                                                <div class="w-8 h-8 bg-white/10 rounded-full"> </div>

                                                                                                                                                    <div class="w-8 h-8 bg-white/10 rounded-full"> </div>

                                                                                                                                                        <div class="w-8 h-8 bg-white/10 rounded-full"> </div>

                                                                                                                                                            </div>

                                                                                                                                                            <!--Train Window-->

                                                                                                                                                                <div class="absolute left-0 w-1/3 h-24 border-4 border-orange-500 rounded-xl bg-orange-500/10 backdrop-blur-sm flex items-center justify-center animate-[slideRight_4s_linear_infinite]">

                                                                                                                                                                    <span class="text-orange-400 font-bold bg-black/50 px-2 py-1 rounded"> Window Sum: 15 </span>

                                                                                                                                                                        </div>

                                                                                                                                                                        </div>

                                                                                                                                                                        <p class="text-gray-400 mt-4 text-sm">

                                                                                                                                                                            As the train moves right, one passenger enters(add) and one leaves(subtract). 

                        <strong> Constant work </strong> per step.

    </p>

    </div>

    <div class="grid md:grid-cols-2 gap-8 mt-12">

        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

            <h3 class="text-xl font-bold text-white mb-4"> Variable Window </h3>

                <p class="text-gray-400 mb-4 text-sm">

                    Longest Substring Without Repeating Characters.

                        </p>

                        <p class="text-gray-500 text-sm">

                            Expand Right.If invalid, Shrink Left until valid.

                        </p>

                                </div>

                                <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                    <h3 class="text-xl font-bold text-white mb-4"> Fixed Window </h3>

                                        <p class="text-gray-400 mb-4 text-sm">

                                            Max Sum Subarray of Size K.

                        </p>

                                                <p class="text-gray-500 text-sm">

                                                    Initialize window size K.Slide one by one.

                        </p>

                                                        </div>

                                                        </div>

                                                        <!--Deep Dive Section-->

                                                            <div class="space-y-8 mt-12">

                                                                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                                                    <h3 class="text-2xl font-bold text-white mb-6"> Concept Deep Dive </h3>

                                                                        <div class="space-y-6">

                                                                            <div>

                                                                            <h4 class="text-lg font-bold text-purple-400 mb-2"> Definition </h4>

                                                                                <p class="text-gray-400 leading-relaxed">

                                                                                    The <strong> Sliding Window </strong> technique is an optimization pattern used primarily on arrays and strings. It involves maintaining a specific "window" (a sub-range of elements) that moves across the data structure. Instead of re-calculating the entire window from scratch at each step, we efficiently update the result by considering only the elements entering and leaving the window.

                                                                                        </p>

                                                                                        </div>

                                                                                        <div>

                                                                                        <h4 class="text-lg font-bold text-blue-400 mb-2"> Why & How ? </h4>

                                                                                            <p class="text-gray-400 leading-relaxed overflow-hidden">

                                                                                                <strong class="text-white"> Why: </strong> A naive approach often involves nested loops (e.g., finding the max sum subarray of size K), resulting in <strong>O(N²)</strong> or <strong> O(N * K) </strong> complexity. Sliding Window reduces this to linear <strong>O(N)</strong> time by avoiding redundant computations.<br> <br>

                                                                                                    <strong class="text-white"> How: </strong>

1. <strong> Initialize: </strong> Start with a window of size 0 or K.<br>

2. <strong> Expand(Right): </strong> Add elements to the right explicitly.<br>

3. <strong> Shrink(Left): </strong> If the window exceeds constraints (e.g., size > K or invalid state), remove elements from the left.<br>

4. <strong> Update: </strong> detailed result at each valid step.

    </p>

    </div>

    </div>

    </div>

    <!--Code Template-->

        <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

            <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                <div class="flex gap-2">

                    <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"> </div>

                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"> </div>

                            <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"> </div>

                                </div>

                                <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> sliding_window_template.cpp </span>

                                    </div>

                                    <div class="p-6 overflow-x-auto">

                                        <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-gray-500">// 1. Fixed Window (Size K)</span>

                                            <span class="text-purple-400"> void</span> <span class="text-blue-400">fixedSlidingWindow</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& nums, <span class="text-purple-400">int</span> k) {

    <span class="text-purple-400"> int </span> currentSum = <span class="text-green-300">0</span>;

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-green-300"> 0 </span>; i &lt; k; i++) currentSum += nums[i]; <span class="text-gray-500">/ / First window </span>

        <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = k; i & lt; nums.size(); i++) {

        currentSum += nums[i]; <span class="text-gray-500">// Add right (Enter)</span>

            currentSum -= nums[i - k]; <span class="text-gray-500">// Remove left (Exit)</span>

                <span class="text-gray-500">// Process currentSum...</span>

    }

}

<span class="text-gray-500">// 2. Variable Window (e.g., Longest Subarray with Condition)</span>

    <span class="text-purple-400"> int </span> <span class="text-blue-400">variableSlidingWindow</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& nums) {

    <span class="text-purple-400"> int </span> left = <span class="text-green-300">0</span>, maxLength = <span class="text-green-300"> 0 </span>;

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> right = <span class="text-green-300"> 0 </span>; right &lt; nums.size(); right++) {

        <span class="text-gray-500">// Add nums[right] to state...</span>

            <span class="text-purple-400">while</span> (<span class="text-gray-500">/ * invalid state * /</span>) {

            <span class="text-gray-500">// Remove nums[left] from state...</span>

                left++;

        }

        maxLength = max(maxLength, right - left + <span class="text-green-300"> 1 </span>);

    }

    <span class="text-purple-400">return </span> maxLength;

} </code></pre>

    </div>

    </div>

    </div>

    </div>

        `,

                        questions: [

                            {

                                id: "arr-8-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Sliding Window Protocol'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Sliding Window Protocol, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "arr-8-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "arr-8-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Sliding Window Protocol?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "arr-9",

                        title: "Prefix Sums & Subarrays",

                        duration: "60 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> Prefix Sums & Kadane's</h2>

            <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                    <span class="text-blue-500">❄️</span> The Snowball Effect

                        </h3>

                        <div class="grid md:grid-cols-2 gap-8 items-center">

                            <div class="space-y-4">

                                <div class="flex items-center gap-4">

                                    <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white"> 1 </div>

                                        <span class="text-gray-500"> -> </span>

                                            <div class="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold border-2 border-blue-500"> 1 </div>

                                                </div>

                                                <div class="flex items-center gap-4">

                                                    <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white"> 2 </div>

                                                        <span class="text-gray-500"> -> </span>

                                                            <div class="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold border-2 border-blue-500"> 3 </div>

                                                                </div>

                                                                <div class="flex items-center gap-4">

                                                                    <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white"> 3 </div>

                                                                        <span class="text-gray-500"> -> </span>

                                                                            <div class="w-24 h-24 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold border-2 border-blue-500"> 6 </div>

                                                                                </div>

                                                                                </div>

                                                                                <div class="text-center">

                                                                                    <p class="text-gray-300 mb-2">

                                                                                        Each step accumulates the past.

                                            </p>

                                                                                            <div class="bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-sm text-green-400">

                                                                                                prefix[i] = prefix[i - 1] + nums[i]

                                                                                                    </div>

                                                                                                    </div>

                                                                                                    </div>

                                                                                                    </div>

                                                                                                    <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                                                                                        <h3 class="text-2xl font-bold text-white mb-6"> Prefix Sum Array </h3>

                                                                                                            <p class="text-gray-400 mb-6">

                                                                                                                Precompute sums to answer Range Sum Queries in <strong>O(1) </strong>.

                                                                                                                    </p>

                                                                                                                    <div class="flex flex-col gap-4">

                                                                                                                        <div class="flex gap-1">

                                                                                                                            <div class="w-12 text-right text-gray-500 pr-4"> Arr </div>

                                                                                                                                <div class="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-white"> 1 </div>

                                                                                                                                    <div class="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-white"> 2 </div>

                                                                                                                                        <div class="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-white"> 3 </div>

                                                                                                                                            <div class="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-white"> 4 </div>

                                                                                                                                                </div>

                                                                                                                                                <div class="flex gap-1">

                                                                                                                                                    <div class="w-12 text-right text-blue-400 pr-4"> Pre </div>

                                                                                                                                                        <div class="w-10 h-10 bg-blue-500/20 border border-blue-500 rounded flex items-center justify-center text-blue-400"> 1 </div>

                                                                                                                                                            <div class="w-10 h-10 bg-blue-500/20 border border-blue-500 rounded flex items-center justify-center text-blue-400"> 3 </div>

                                                                                                                                                                <div class="w-10 h-10 bg-blue-500/20 border border-blue-500 rounded flex items-center justify-center text-blue-400"> 6 </div>

                                                                                                                                                                    <div class="w-10 h-10 bg-blue-500/20 border border-blue-500 rounded flex items-center justify-center text-blue-400"> 10 </div>

                                                                                                                                                                        </div>

                                                                                                                                                                        </div>

                                                                                                                                                                        </p>

                                                                                                                                                                        <div class="bg-black/50 p-3 rounded text-sm font-mono text-green-400">

                                                                                                                                                                            diff[L] += x<br>

diff[R + 1] -= x

    </div>

    </div>

    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

        <h3 class="text-xl font-bold text-white mb-4"> Frequency Prefixing </h3>

            <p class="text-gray-400 mb-4 text-sm">

                Count occurrences in range.

                                        </p>

                    <p class="text-gray-500 text-sm">

                        2D Prefix Sums for matrices.

                                        </p>

                            </div>

                            </div>

                            <!--Deep Dive Section-->

    <div class="space-y-8 mt-12">

        <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

            <h3 class="text-2xl font-bold text-white mb-6"> Concept Deep Dive </h3>

                <div class="space-y-6">

                    <div>

                    <h4 class="text-lg font-bold text-purple-400 mb-2"> Definition </h4>

                        <p class="text-gray-400 leading-relaxed">

                            A <strong> Prefix Sum Array </strong> is an auxiliary data structure where the element at index <code>i</code> stores the sum of all elements from the beginning(index 0) up to <code> i </code>. This allows us to calculate the sum of any subarray <code>[L, R]</code> in constant time <strong> O(1) </strong>.

                                </p>

                                </div>

                                <div>

                                <h4 class="text-lg font-bold text-blue-400 mb-2"> Why & How ? </h4>

                                    <p class="text-gray-400 leading-relaxed">

                                        <strong class="text-white"> Why: </strong> If we have <strong>Q</strong> queries asking for the sum of varying ranges, a naive loop for each query takes O(N), leading to <strong> O(Q * N) </strong> total time (too slow). Prefix Sums reduce this to <strong>O(N + Q)</strong>.<br> <br>

                                            <strong class="text-white"> How: </strong><br>

1. <strong> Build: </strong> <code>P[i] = P[i-1] + arr[i]</code> (1 - based indexing is often easier to handle <code> L=0 </code>).<br>

    2. <strong> Query: </strong> Sum from L to R is simply <code>P[R] - P[L-1]</code>.

                                            </p>

        </div>

        </div>

        </div>

        <!--Code Template-->

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                    <div class="flex gap-2">

                        <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"> </div>

                            <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"> </div>

                                <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"> </div>

                                    </div>

                                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> prefix_sum_template.cpp </span>

                                        </div>

                                        <div class="p-6 overflow-x-auto">

                                            <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> class </span> <span class="text-yellow-400"> PrefixSum </span> {

vector & lt; <span class="text-purple-400"> long long </span>&gt; P;

<span class="text-purple-400"> public </span>:

    <span class="text-blue-400"> PrefixSum </span>(vector&lt;<span class="text-purple-400">int</span>& gt;& nums) {

    <span class="text-purple-400"> int </span> n = nums.size();

    P.resize(n + <span class="text-green-300"> 1 </span>, <span class="text-green-300">0</span>); <span class="text-gray-500">// 1-based indexing for convenience</span>

        <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-green-300"> 0 </span>; i &lt; n; i++) {

            P[i + <span class="text-green-300"> 1 </span>] = P[i] + nums[i];

        }

}

<span class="text-gray-500">// Get sum of subarray nums[L...R] (0-based inputs)</span>

    <span class="text-purple-400"> long long </span> <span class="text-blue-400">query</span> (<span class="text-purple-400"> int </span> L, <span class="text-purple-400">int</span> R) {

    <span class="text-gray-500">// Convert to 1-based: R+1 is the end inclusive in P, L is the part to subtract</span>

        <span class="text-purple-400">return </span> P[R + <span class="text-green-300">1</span>] - P[L];

}

};

<span class="text-gray-500">// Example Usage</span>

    <span class="text-purple-400"> void</span> <span class="text-blue-400">solve</span> () {

    vector & lt; <span class="text-purple-400"> int </span>&gt; nums = {<span class="text-green-300">1</span>, <span class="text-green-300"> 2 </span>, <span class="text-green-300">3</span>, <span class="text-green-300"> 4 </span>

};

    PrefixSum ps(nums);

cout & lt;& lt; ps.query(<span class="text-green-300"> 1 </span>, <span class="text-green-300">3</span>); <span class="text-gray-500">// Sum of 2, 3, 4 -> 9</span>

}</code></pre>

    </div>

    </div>

    </div>

    </div>

        `,

                        questions: [

                            {

                                id: "arr-9-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Prefix Sums & Subarrays'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Prefix Sums & Subarrays, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "arr-9-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "arr-9-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Prefix Sums & Subarrays?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "arr-10",

                        title: "Kadane's Algorithm & Max Subarray Patterns",

                        duration: "60 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> The Maximum Subarray Problem </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                Finding the contiguous subarray with the largest sum.

                    Brute force is O(N²). <strong> Kadane's Algorithm</strong> does it in O(N).

    </p>

    <!--Kadane's Visual -->

        <div class="bg-gradient-to-br from-red-900 to-black p-8 rounded-3xl border border-white/10 mb-8">

            <h3 class="text-2xl font-bold text-white mb-4"> Kadane's Algorithm</h3>

                <p class="text-gray-300 mb-6">

                    "Carry the baggage only if it's positive."

                    </p>

                    <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                        <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                            <div class="flex gap-2">

                                <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"> </div>

                                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"> </div>

                                        <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"> </div>

                                            </div>

                                            <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> kadane.py </span>

                                                <button class="run-code-btn inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e1e1e] border border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50 transition-all text-xs font-mono" data - output="kadane-output">

                                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke - linecap="round" stroke - linejoin="round" stroke - width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"> </path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>

                                Run Code

    </button>

    </div>

    <div class="p-6">

        <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> def </span> <span class="text-blue-400">maxSubArray</span> (nums):

max_so_far = nums[<span class="text-green-300"> 0 </span>]

current_max = nums[<span class="text-green-300"> 0 </span>]

<span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-yellow-300"> range </span>(<span class="text-green-300">1</span>, <span class="text-yellow-300"> len </span>(nums)):

    current_max = <span class="text-yellow-300"> max </span>(nums[i], current_max + nums[i])

max_so_far = <span class="text-yellow-300"> max </span>(max_so_far, current_max)

    <span class="text-purple-400">return </span> max_so_far</code> </pre>

        </div>

        <div id="kadane-output" class="hidden border-t border-white/10 bg-black p-4 font-mono text-xs">

            <div class="text-gray-500 mb-2"> $ python3 kadane.py </div>

                <div class="text-white"> Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4] </div>

                    <div class="text-green-400"> Max Sum: 6 </div>

                        <div class="text-gray-500 mt-2"> Process finished with exit code 0 </div>

                            </div>

                            </div>

                            </div>

                            <!--Variations -->

                                <div class="grid md:grid-cols-2 gap-8">

                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                        <h3 class="text-xl font-bold text-white mb-4"> Max Product Subarray </h3>

                                            <p class="text-gray-400 mb-4 text-sm">

                                                Track both min and max because a negative number can flip the sign.

                        </p>

                                                    <div class="bg-black/50 p-3 rounded text-sm font-mono text-yellow-400">

                                                        cur_max = max(n, n * cur_max, n * cur_min)<br>

cur_min = min(n, n * cur_max, n * cur_min)

    </div>

    </div>

    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

        <h3 class="text-xl font-bold text-white mb-4"> Circular Subarray </h3>

            <p class="text-gray-400 mb-4 text-sm">

                Max(Total Sum - Min Subarray, Max Subarray).

                        </p>

                <p class="text-gray-500 text-sm">

                    Handle case where all numbers are negative.

                        </p>

                        </div>

                        </div>

                        <!--Deep Dive Section-->

                            <div class="space-y-8 mt-12">

                                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                    <h3 class="text-2xl font-bold text-white mb-6"> Concept Deep Dive </h3>

                                        <div class="space-y-6">

                                            <div>

                                            <h4 class="text-lg font-bold text-purple-400 mb-2"> Definition </h4>

                                                <p class="text-gray-400 leading-relaxed">

                                                    <strong>Kadane's Algorithm</strong> is a dynamic programming approach to solve the Maximum Subarray Sum problem. The core idea is to iterate through the array while maintaining the maximum sum ending at the current position.

                                                        </p>

                                                        </div>

                                                        <div>

                                                        <h4 class="text-lg font-bold text-blue-400 mb-2"> Why & How ? </h4>

                                                            <p class="text-gray-400 leading-relaxed">

                                                                <strong class="text-white"> Why: </strong> A brute-force solution checking all subarrays is O(N²). Kadane's runs in <strong>O(N)</strong> with O(1) space.<br> <br>

                                                                    <strong class="text-white"> How: </strong> 

                                    At reach step <code> i </code>, deciding whether to:

1. Start a new subarray at <code> nums[i] </code> (if previous sum was negative).<br>

2. Extend the existing subarray(add <code> nums[i] </code> to previous sum).<br>

Formula: <code>current_sum = max(nums[i], current_sum + nums[i]) </code>.

    </p>

    </div>

    </div>

    </div>

    <!--Code Template-->

        <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

            <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                <div class="flex gap-2">

                    <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"> </div>

                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"> </div>

                            <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"> </div>

                                </div>

                                <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> kadane_template.cpp </span>

                                    </div>

                                    <div class="p-6 overflow-x-auto">

                                        <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> int </span> <span class="text-blue-400">maxSubArray</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& nums) {

    <span class="text-purple-400"> int </span> maxSoFar = nums[<span class="text-green-300">0</span>];

    <span class="text-purple-400"> int </span> currentSum = nums[<span class="text-green-300">0</span>];

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-green-300"> 1 </span>; i &lt; nums.size(); i++) {

        <span class="text-gray-500">// Either start new at i, or extend previous</span>

            currentSum = max(nums[i], currentSum + nums[i]);

        maxSoFar = max(maxSoFar, currentSum);

    }

    <span class="text-purple-400">return </span> maxSoFar;

}

<span class="text-gray-500">// Variation: Print the subarray</span>

    <span class="text-purple-400"> void</span> <span class="text-blue-400">printMaxSubArray</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& nums) {

    <span class="text-purple-400"> int </span> maxSoFar = INT_MIN, currentSum = <span class="text-green-300">0</span>;

    <span class="text-purple-400"> int </span> start = <span class="text-green-300">0</span>, end = <span class="text-green-300"> 0 </span>, s = <span class="text-green-300">0</span>;

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-green-300"> 0 </span>; i &lt; nums.size(); i++) {

        currentSum += nums[i];

        <span class="text-purple-400">if</span> (currentSum > maxSoFar) {

            maxSoFar = currentSum;

        start = s;

        end = i;

    }

    <span class="text-purple-400">if</span> (currentSum &lt; <span class="text-green-300">0</span>) {

        currentSum = <span class="text-green-300"> 0 </span>;

        s = i + <span class="text-green-300"> 1 </span>;

    }

}

<span class="text-gray-500">// cout &lt;&lt; "Max Sum: " &lt;&lt; maxSoFar &lt;&lt; endl;</span>

    <span class="text-gray-500">// cout &lt;&lt; "Range: [" &lt;&lt; start &lt;&lt; ", " &lt;&lt; end &lt;&lt; "]" &lt;&lt; endl;</span>

}</code></pre>

    </div>

    </div>

    </div>

    </div>

        `,

                        questions: [

                            {

                                id: "arr-10-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Kadane's Algorithm & Max Subarray Patterns'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Kadane's Algorithm & Max Subarray Patterns, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "arr-10-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "arr-10-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Kadane's Algorithm & Max Subarray Patterns?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "arr-11",

                        title: "Rotation, Rearrangement & Partitioning",

                        duration: "65 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> Mastering Array Manipulation </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                Techniques to shuffle, rotate, and partition data efficiently.

                    Essential for "in-place" operations.

                </p>

    <!--Rotation -->

    <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">

        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

            <span class="text-purple-500">🔄</span> Array Rotation

                </h3>

                <div class="grid md:grid-cols-2 gap-8">

                    <div>

                    <h4 class="text-lg font-bold text-white mb-2"> The Reversal Algorithm </h4>

                        <p class="text-gray-400 text-sm mb-4">

                            Rotate array by K steps to the right.

                                O(N) Time, O(1) Space.

                            </p>

                                    <div class="bg-black/50 p-4 rounded-xl font-mono text-sm text-purple-400">

                                        1. Reverse(0, N - 1)<br>

2. Reverse(0, K - 1)<br>

3. Reverse(K, N - 1)

    </div>

    </div>

    <div class="flex flex-col justify-center gap-2">

        <div class="flex gap-1 justify-center opacity-50">

            <div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center"> 1 </div>

                <div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center"> 2 </div>

                    <div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center"> 3 </div>

                        <div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center"> 4 </div>

                            <div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center"> 5 </div>

                                </div>

                                <div class="text-center text-xs text-gray-500">⬇ Reverse All </div>

                                    <div class="flex gap-1 justify-center">

                                        <div class="w-8 h-8 bg-purple-500/20 text-purple-400 rounded flex items-center justify-center"> 5 </div>

                                            <div class="w-8 h-8 bg-purple-500/20 text-purple-400 rounded flex items-center justify-center"> 4 </div>

                                                <div class="w-8 h-8 bg-purple-500/20 text-purple-400 rounded flex items-center justify-center"> 3 </div>

                                                    <div class="w-8 h-8 bg-purple-500/20 text-purple-400 rounded flex items-center justify-center"> 2 </div>

                                                        <div class="w-8 h-8 bg-purple-500/20 text-purple-400 rounded flex items-center justify-center"> 1 </div>

                                                            </div>

                                                            </div>

                                                            </div>

                                                            </div>

                                                            <!--Rearrangement -->

                                                                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 mb-8">

                                                                    <h3 class="text-2xl font-bold text-white mb-6"> Rearrangement Patterns </h3>

                                                                        <div class="space-y-6">

                                                                            <div class="flex items-start gap-4">

                                                                                <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold"> 1 </div>

                                                                                    <div>

                                                                                    <h4 class="text-lg font-bold text-white"> Move Zeros </h4>

                                                                                        <p class="text-gray-400 text-sm">

                                                                                            "Snowball" non - zero elements to the front.

                                    Use a <code> write_pointer </code>.

    </p>

    </div>

    </div>

    <div class="flex items-start gap-4">

        <div class="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold"> 2 </div>

            <div>

            <h4 class="text-lg font-bold text-white"> Dutch National Flag(Sort Colors) </h4>

                <p class="text-gray-400 text-sm">

                    Sort 0s, 1s, 2s in one pass.

                                    3 Pointers: <code>Low, Mid, High </code>.

    </p>

    <div class="mt-2 flex gap-1">

        <div class="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">000 </div>

            <div class="px-2 py-1 bg-white/10 text-white rounded text-xs"> 111 </div>

                <div class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs"> 222 </div>

                    </div>

                    </div>

                    </div>

                    </div>

                    </div>

                    <!--Partitioning -->

                        <div class="grid md:grid-cols-2 gap-8">

                            <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                <h3 class="text-xl font-bold text-white mb-4"> Lomuto Partition </h3>

                                    <p class="text-gray-400 mb-4 text-sm">

                                        Pivot at end.Iterate <code> i </code>, swap smaller elements to <code>j</code>.

                            Simpler to implement.

                        </p>

    </div>

    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

        <h3 class="text-xl font-bold text-white mb-4"> Hoare Partition </h3>

            <p class="text-gray-400 mb-4 text-sm">

                Two pointers from both ends.Swap when inversion found.

Faster in practice(fewer swaps).

                        </p>

    </div>

    </div>

    <!--Deep Dive Section-->

        <div class="space-y-8 mt-12">

            <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                <h3 class="text-2xl font-bold text-white mb-6"> Concept Deep Dive </h3>

                    <div class="space-y-6">

                        <div>

                        <h4 class="text-lg font-bold text-purple-400 mb-2"> Definition </h4>

                            <p class="text-gray-400 leading-relaxed">

                                <strong>Array Rearrangement </strong> involves moving elements to specific positions based on a condition (e.g., Rotate by K, Partition by value X, Dutch National Flag). These are often "In-Place" operations using O(1) extra space.

                                    </p>

                                    </div>

                                    <div>

                                    <h4 class="text-lg font-bold text-blue-400 mb-2"> Why & How ? </h4>

                                        <p class="text-gray-400 leading-relaxed">

                                            <strong class="text-white"> Why: </strong> Many algorithms require data to be in a specific format (e.g., QuickSort needs Partitioning). Rotations are common in array manipulation tasks.<br><br>

                                                <strong class="text-white"> How: </strong><br>

1. <strong> Reversal Algo(Rotate): </strong> Reverse specific parts to achieve rotation without shifting one-by-one.<br>

2. <strong> Partitioning: </strong> Use pointers (like <code>low, mid, high</code>) to swap elements into their correct regions.

                                </p>

    </div>

    </div>

    </div>

    <!--Code Template-->

        <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

            <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                <div class="flex gap-2">

                    <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"> </div>

                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"> </div>

                            <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"> </div>

                                </div>

                                <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> rearrangement_templates.cpp </span>

                                    </div>

                                    <div class="p-6 overflow-x-auto">

                                        <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-gray-500">// 1. Reversal Algorithm for Rotation (Right by K)</span>

                                            <span class="text-purple-400"> void</span> <span class="text-blue-400">rotate</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& nums, <span class="text-purple-400">int</span> k) {

    <span class="text-purple-400"> int </span> n = nums.size();

    k %= n;

    reverse(nums.begin(), nums.end()); <span class="text-gray-500">// Reverse All</span>

        reverse(nums.begin(), nums.begin() + k); <span class="text-gray-500">// Reverse First K</span>

            reverse(nums.begin() + k, nums.end()); <span class="text-gray-500">// Reverse Rest</span>

}

<span class="text-gray-500">// 2. Dutch National Flag (Sort Colors: 0s, 1s, 2s)</span>

    <span class="text-purple-400"> void</span> <span class="text-blue-400">sortColors</span> (vector & lt; <span class="text-purple-400"> int </span>&gt;& nums) {

    <span class="text-purple-400"> int </span> low = <span class="text-green-300">0</span>, mid = <span class="text-green-300"> 0 </span>, high = nums.size() - <span class="text-green-300">1</span>;

    <span class="text-purple-400">while</span> (mid &lt;= high) {

        <span class="text-purple-400">if</span> (nums[mid] == <span class="text-green-300">0</span>) {

            swap(nums[low], nums[mid]);

            low++; mid++;

        }

    <span class="text-purple-400">else if</span> (nums[mid] == <span class="text-green-300">1</span>) {

        mid++;

    }

    <span class="text-purple-400">else </span> { <span class="text-gray-500">/ / nums[mid] == 2 </span>

    swap(nums[mid], nums[high]);

    high--;

}

    }

}</code></pre>

    </div>

    </div>

    </div>

    </div>

        `,

                        questions: [

                            {

                                id: "arr-11-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Rotation, Rearrangement & Partitioning'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Rotation, Rearrangement & Partitioning, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "arr-11-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "arr-11-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Rotation, Rearrangement & Partitioning?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "arr-12",

                        title: "Advanced Array Tricks",

                        duration: "70 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> The Grandmaster's Toolkit</h2>

            <p class="text-xl leading-relaxed text-gray-400">

                Algorithms for competitive programming and high - performance systems.

                    Handling massive datasets and complex queries.

                </p>

    <!--Mo's Algorithm -->

        <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">

            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                <span class="text-pink-500">🐌</span> Mo's Algorithm (Square Root Decomposition)

                    </h3>

                    <p class="text-gray-400 mb-6">

                        Offline queries.Reorder queries to minimize movement of <code> L </code> and <code>R</code> pointers.

                            Complexity: <strong>O((N + Q)√N) </strong>.

                                </p>

                                <div class="grid md:grid-cols-2 gap-8">

                                    <div class="bg-black/50 p-4 rounded-xl border border-white/5">

                                        <h4 class="text-white font-bold mb-2"> The Strategy </h4>

                                            <ul class="list-disc list-inside text-gray-400 text-sm space-y-2">

                                                <li>Divide array into blocks of size √N.</li>

                                                    <li> Sort queries by block of L.</li>

                                                        <li> Then sort by R.</li>

                                                            <li> Move L and R smoothly.</li>

                                                                </ul>

                                                                </div>

                                                                <div class="flex items-center justify-center">

                                                                    <div class="text-center">

                                                                        <div class="text-4xl mb-2">🐍</div>

                                                                            <div class="text-xs text-gray-500"> Snake - like movement </div>

                                                                                </div>

                                                                                </div>

                                                                                </div>

                                                                                </div>

                                                                                <!--Sparse Table-->

                                                                                    <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 mb-8">

                                                                                        <h3 class="text-2xl font-bold text-white mb-6"> Sparse Table(RMQ) </h3>

                                                                                            <p class="text-gray-400 mb-6">

                                                                                                Range Minimum Query in <strong>O(1) </strong> time.

Precomputation: <strong>O(N log N) </strong>.

                        Idempotent operations(Min, Max, GCD).

                    </p>

    <div class="bg-black/50 p-4 rounded-xl font-mono text-sm text-green-400 overflow-x-auto">

        st[i][j] = min(st[i][j - 1], st[i + (1 << (j - 1))][j - 1])

            </div>

            </div>

            <!--Coordinate Compression-->

                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6"> Coordinate Compression </h3>

                        <p class="text-gray-400 mb-6">

                            Map large values(e.g., 10 ^ 9) to small ranks(0 to N - 1) while preserving order.

                        Essential for Segment Trees on sparse data.

                    </p>

    <div class="flex flex-col gap-4">

        <div class="flex items-center gap-2">

            <span class="text-gray-500 w-16"> Original: </span>

                <div class="flex gap-1">

                    <div class="px-2 py-1 bg-gray-800 rounded text-xs"> 100 </div>

                        <div class="px-2 py-1 bg-gray-800 rounded text-xs"> 9999 </div>

                            <div class="px-2 py-1 bg-gray-800 rounded text-xs"> 50 </div>

                                </div>

                                </div>

                                <div class="flex items-center gap-2">

                                    <span class="text-purple-500 w-16"> Compressed: </span>

                                        <div class="flex gap-1">

                                            <div class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs"> 1 </div>

                                                <div class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs"> 2 </div>

                                                    <div class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs"> 0 </div>

                                                        </div>

                                                        </div>

                                                        </div>

                                                        </div>

                                                        </div>

                                                            `,

                        questions: [

                            {

                                id: "arr-12-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Advanced Array Tricks'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Advanced Array Tricks, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "arr-12-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "arr-12-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Advanced Array Tricks?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                ]

            },

            {

                title: "3. Strings: The Textual Universe",

                lessons: [

                    {

                        id: "str-1",

                        title: "Internals & Memory",

                        duration: "45 min",

                        type: 'video',

                        content: `

                                                        <div class="space-y-12 text-gray-300 font-light">

                                                            <h2 class="text-4xl font-bold text-white mb-6"> Strings Internals </h2>

                                                                <p class="text-xl leading-relaxed text-gray-400">

                                                                    Understanding memory layout, immutability, and the cost of concatenation.

                                </p>

                                                                        <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                                                                            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                                <span class="text-pink-500">🧬</span> Memory Layout

                                                                                    </h3>

                                                                                    <div class="flex flex-col items-center gap-6">

                                                                                        <div class="text-lg font-mono text-pink-400"> String s="HELLO" </div>

                                                                                            <div class="flex gap-1">

                                                                                                <div class="w-12 h-16 bg-pink-500/20 border border-pink-500/50 rounded flex flex-col items-center justify-center">

                                                                                                    <span class="text-white font-bold text-xl"> H </span>

                                                                                                        <span class="text-xs text-gray-500 mt-1"> 0 </span>

                                                                                                            </div>

                                                                                                            <div class="w-12 h-16 bg-pink-500/20 border border-pink-500/50 rounded flex flex-col items-center justify-center">

                                                                                                                <span class="text-white font-bold text-xl"> E </span>

                                                                                                                    <span class="text-xs text-gray-500 mt-1"> 1 </span>

                                                                                                                        </div>

                                                                                                                        <div class="w-12 h-16 bg-pink-500/20 border border-pink-500/50 rounded flex flex-col items-center justify-center">

                                                                                                                            <span class="text-white font-bold text-xl"> L </span>

                                                                                                                                <span class="text-xs text-gray-500 mt-1"> 2 </span>

                                                                                                                                    </div>

                                                                                                                                    <div class="w-12 h-16 bg-pink-500/20 border border-pink-500/50 rounded flex flex-col items-center justify-center">

                                                                                                                                        <span class="text-white font-bold text-xl"> L </span>

                                                                                                                                            <span class="text-xs text-gray-500 mt-1"> 3 </span>

                                                                                                                                                </div>

                                                                                                                                                <div class="w-12 h-16 bg-pink-500/20 border border-pink-500/50 rounded flex flex-col items-center justify-center">

                                                                                                                                                    <span class="text-white font-bold text-xl"> O </span>

                                                                                                                                                        <span class="text-xs text-gray-500 mt-1"> 4 </span>

                                                                                                                                                            </div>

                                                                                                                                                            <div class="w-12 h-16 bg-gray-800/50 border border-gray-700 rounded flex flex-col items-center justify-center opacity-50">

                                                                                                                                                                <span class="text-gray-400 font-bold text-xl">\0 </span>

                                                                                                                                                                    <span class="text-xs text-gray-500 mt-1"> 5 </span>

                                                                                                                                                                        </div>

                                                                                                                                                                        </div>

                                                                                                                                                                        <p class="text-sm text-gray-400"> Contiguous block of characters.\0 is null terminator(C++).</p>

                                                                                                                                                                            </div>

                                                                                                                                                                            </div>

                                                                                                                                                                            <div class="grid md:grid-cols-2 gap-8">

                                                                                                                                                                                <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                                                                                                                    <h3 class="text-xl font-bold text-white mb-4"> Immutability(Java / Python) </h3>

                                                                                                                                                                                        <p class="text-gray-400 mb-4 text-sm">

                                                                                                                                                                                            Cannot change characters in place.

                                        </p>

                                                                                                                                                                                                <div class="bg-black/50 p-3 rounded text-sm font-mono text-red-400">

                                                                                                                                                                                                    s[0] = 'h'; // Error <br>

s = s + " World"; // Creates NEW string

</div>

    </div>

    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

        <h3 class="text-xl font-bold text-white mb-4"> Mutability(C++) </h3>

            <p class="text-gray-400 mb-4 text-sm">

                Can modify directly.Efficient.

                                        </p>

                    <div class="bg-black/50 p-3 rounded text-sm font-mono text-green-400">

                        s[0] = 'h'; // OK <br>

s += " World"; // Amortized O(1)

</div>

    </div>

    </div>

    </div>

    <div class="mt-8 bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

            <span class="text-blue-500">🔬</span> Concept Deep Dive: C++ String Internals

                </h3>

                <div class="grid md:grid-cols-2 gap-8">

                    <div>

                    <h4 class="text-lg font-bold text-white mb-2"> std::string vs char[] </h4>

                        <p class="text-gray-400 text-sm mb-4">

                            In C, strings are null - terminated character arrays(\`,

                       questions: [

                            {

                                id: "str-1-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Internals & Memory'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Internals & Memory, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "str-1-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "str-1-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Internals & Memory?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],char[]\`).In C++, \`std:: string\` is a dynamic object that manages memory for you.

            </p>

                                <ul class="space-y-2 text-sm text-gray-400">

                                <li class="flex items-start gap-2">

                                <span class="text-green-500">✓</span>

                                    <span> <strong>Dynamic Sizing: </strong> Grows automatically as you append.</span>

                                        </li>

                                        <li class="flex items-start gap-2">

                                            <span class="text-green-500">✓</span>

                                                <span> <strong>SSO(Small String Optimization): </strong> Short strings (e.g., <15 chars) are stored directly in the handle, avoiding heap allocation.</span>

                                                    </li>

                                                    <li class="flex items-start gap-2">

                                                        <span class="text-green-500">✓</span>

                                                            <span> <strong>Mutable: </strong> Unlike Java/Python strings, C++ strings can be modified in place(O(1)).</span>

                                                                </li>

                                                                </ul>

                                                                </div>

                                                                <div class="bg-[#1e1e1e] p-4 rounded-xl border border-white/5">

                                                                    <h4 class="text-sm font-bold text-gray-300 mb-3"> Memory: Stack vs Heap </h4>

                                                                        <div class="space-y-3">

                                                                            <div class="p-3 bg-black/50 rounded border border-white/5">

                                                                                <div class="text-xs text-gray-500 mb-1"> Stack(SSO) </div>

                                                                                    <div class="font-mono text-sm text-green-400"> string s="Hi"; </div>

                                                                                        <div class="text-[10px] text-gray-600"> Stored inside object </div>

                                                                                            </div>

                                                                                            <div class="p-3 bg-black/50 rounded border border-white/5">

                                                                                                <div class="text-xs text-gray-500 mb-1"> Heap(Dynamic) </div>

                                                                                                    <div class="font-mono text-sm text-blue-400"> string s="Very long string..."; </div>

                                                                                                        <div class="text-[10px] text-gray-600"> Pointer to Heap memory </div>

                                                                                                            </div>

                                                                                                            </div>

                                                                                                            </div>

                                                                                                            </div>

                                                                                                            </div>

                                                                                                            <div class="mt-8">

                                                                                                                <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                                                                    <span class="text-yellow-500">⚡</span> C++ Code Template

                                                                                                                        </h3>

                                                                                                                        <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden">

                                                                                                                            <div class="flex items-center justify-between px-4 py-3 bg-[#252525] border-b border-white/5">

                                                                                                                                <div class="flex items-center gap-2">

                                                                                                                                    <div class="flex gap-1.5">

                                                                                                                                        <div class="w-3 h-3 rounded-full bg-[#ff5f56]"> </div>

                                                                                                                                            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"> </div>

                                                                                                                                                <div class="w-3 h-3 rounded-full bg-[#27c93f]"> </div>

                                                                                                                                                    </div>

                                                                                                                                                    <span class="text-sm text-gray-400 font-mono ml-2"> basic_string_ops.cpp </span>

                                                                                                                                                        </div>

                                                                                                                                                        <button class="text-xs text-gray-400 hover:text-white transition-colors"> Copy Code </button>

                                                                                                                                                            </div>

                                                                                                                                                            <div class="p-4 overflow-x-auto">

                                                                                                                                                                <pre class="font-mono text-sm text-gray-300"> <code>#include & lt; iostream & gt;

#include & lt; string & gt;

#include & lt; algorithm & gt; // for reverse, sort

using namespace std;

void stringBasics() {

    // 1. Initialization

    string s="Hello";

    string s2(5, 'a'); // "aaaaa"

    // 2. Append & Concat (Mutable)

    s += " World"; // O(1) amortized

    s.push_back('!');

    // 3. Access & Modify

    char c = s[0]; // 'H'

    s[0] = 'h';    // In-place modification

    // 4. Substring

    // substr(pos, len) - Be careful! O(L)

    string sub = s.substr(6, 5); // "World"

    // 5. Find

    size_t pos = s.find("World");

    if (pos != string::npos) {

        // Found at index pos

    }

    // 6. Conversions

    int num = 123;

    string numStr = to_string(num);

    int parsed = stoi(numStr);

} </code></pre>

    </div>

    </div>

    </div>

        `

                    },

                    {

                        id: "str-2",

                        title: "Traversals & Patterns",

                        duration: "50 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> Common Patterns </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                Anagrams, Palindromes, and Reversals.

                                </p>

                    <div class="grid md:grid-cols-3 gap-6 mb-8">

                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                            <h3 class="text-lg font-bold text-white mb-2"> Anagrams </h3>

                                <p class="text-xs text-gray-400 mb-4"> Same characters, different order.</p>

                                    <div class="text-center text-pink-400 font-mono text-sm bg-pink-500/10 py-2 rounded"> Sort or Count Freq </div>

                                        </div>

                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                            <h3 class="text-lg font-bold text-white mb-2"> Palindromes </h3>

                                                <p class="text-xs text-gray-400 mb-4"> Reads same forwards and backwards.</p>

                                                    <div class="text-center text-pink-400 font-mono text-sm bg-pink-500/10 py-2 rounded"> Two Pointers </div>

                                                        </div>

                                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                            <h3 class="text-lg font-bold text-white mb-2"> Subsequences </h3>

                                                                <p class="text-xs text-gray-400 mb-4"> Delete characters without reordering.</p>

                                                                    <div class="text-center text-pink-400 font-mono text-sm bg-pink-500/10 py-2 rounded"> DP / Recursion </div>

                                                                        </div>

                                                                        </div>

                                                                        <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                                                                            <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                                                                                <div class="flex gap-2">

                                                                                    <div class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"> </div>

                                                                                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"> </div>

                                                                                            <div class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"> </div>

                                                                                                </div>

                                                                                                <span class="text-sm font-mono text-gray-400 font-bold tracking-tight"> valid_anagram.py </span>

                                                                                                    <button class="run-code-btn inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e1e1e] border border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50 transition-all text-xs font-mono" data - output="anagram-output">

                                                                                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke - linecap="round" stroke - linejoin="round" stroke - width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"> </path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>

                                            Run Code

    </button>

    </div>

    <div class="p-6">

        <pre class="font-mono text-sm leading-relaxed text-gray-300"> <code><span class="text-purple-400"> def </span> <span class="text-blue-400">isAnagram</span> (s, t):

<span class="text-purple-400">if</span> <span class="text-yellow-300">len</span> (s) != <span class="text-yellow-300"> len </span>(t): <span class="text-purple-400">return</span> <span class="text-blue-400"> False </span>

count = {}

    <span class="text-purple-400">for</span> char <span class="text-purple-400">in</span> s:

        count[char] = count.get(char, <span class="text-green-300"> 0 </span>) + <span class="text-green-300">1</span>

            <span class="text-purple-400">for</span> char <span class="text-purple-400">in</span> t:

                <span class="text-purple-400">if</span> char <span class="text-purple-400">not in</span> count <span class="text-purple-400"> or </span> count[char] == <span class="text-green-300">0</span>:

<span class="text-purple-400">return </span> <span class="text-blue-400">False</span>

    count[char] -= <span class="text-green-300"> 1 </span>

        <span class="text-purple-400">return </span> <span class="text-blue-400">True</span> </code></pre>

            </div>

            <div id="anagram-output" class="hidden border-t border-white/10 bg-black p-4 font-mono text-xs">

                <div class="text-gray-500 mb-2"> $ python3 valid_anagram.py </div>

                    <div class="text-white"> Input: s="anagram", t="nagaram" </div>

                        <div class="text-green-400"> Output: True </div>

                            <div class="text-gray-500 mt-2"> Process finished with exit code 0 </div>

                                </div>

                                </div>

                                </div>

                                <div class="mt-8 bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

                                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                        <span class="text-purple-500">🧩</span> Concept Deep Dive: Frequency Arrays

                                            </h3>

                                            <div class="space-y-6">

                                                <div>

                                                <h4 class="text-lg font-bold text-white mb-2"> The "Buckets" Strategy </h4>

                                                    <p class="text-gray-400 text-sm mb-4">

                                                        For problems involving character counts(Anagrams, Permutations), avoid sorting which takes <strong> O(N log N) </strong>. Instead, use a fixed-size array (Frequency Map) since the alphabet size is small (26).

                                                            </p>

                                                            </div>

                                                            <div class="grid md:grid-cols-2 gap-8">

                                                                <div class="bg-[#1a1a1a] p-5 rounded-xl border border-dashed border-white/20">

                                                                    <h5 class="text-red-400 font-bold mb-2"> Sorting Approach </h5>

                                                                        <div class="font-mono text-xs text-gray-500 mb-2">

                                                                            sort(s1.begin(), s1.end()); <br>

                                                                                sort(s2.begin(), s2.end()); <br>

                    return s1 == s2;

</div>

    <div class="inline-block bg-red-500/10 text-red-400 text-xs px-2 py-1 rounded"> Time: O(N log N) </div>

        </div>

        <div class="bg-[#1a1a1a] p-5 rounded-xl border border-white/20">

            <h5 class="text-green-400 font-bold mb-2"> Frequency Array </h5>

                <div class="font-mono text-xs text-gray-500 mb-2">

                    vector & lt; int & gt; count(26, 0); <br>

                    for (char c : s) count[c - 'a']++;

</div>

    <div class="inline-block bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded"> Time: O(N) </div>

        </div>

        </div>

        </div>

        </div>

        <div class="mt-8">

            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                <span class="text-yellow-500">⚡</span> C++ Code Template

                    </h3>

                    <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden">

                        <div class="flex items-center justify-between px-4 py-3 bg-[#252525] border-b border-white/5">

                            <div class="flex items-center gap-2">

                                <div class="flex gap-1.5">

                                    <div class="w-3 h-3 rounded-full bg-[#ff5f56]"> </div>

                                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"> </div>

                                            <div class="w-3 h-3 rounded-full bg-[#27c93f]"> </div>

                                                </div>

                                                <span class="text-sm text-gray-400 font-mono ml-2"> anagram_palindrome.cpp </span>

                                                    </div>

                                                    <button class="text-xs text-gray-400 hover:text-white transition-colors"> Copy Code </button>

                                                        </div>

                                                        <div class="p-4 overflow-x-auto">

                                                            <pre class="font-mono text-sm text-gray-300"> <code>#include & lt; vector & gt;

#include & lt; string & gt;

using namespace std;

// O(N) Time | O(1) Space (26 chars)

bool isAnagram(string s, string t) {

    if (s.length() != t.length()) return false;

    vector & lt; int & gt; count(26, 0);

    for (char c : s) count[c - 'a']++;

    for (char c : t) {

        if (count[c - 'a'] == 0) return false;

        count[c - 'a']--;

    }

    return true;

}

// O(N) Time | O(1) Space

bool isPalindrome(string s) {

    int left = 0, right = s.length() - 1;

    while (left <right) {

        if (s[left] != s[right]) return false;

        left++;

        right--;

    }

    return true;

} </code></pre>

    </div>

    </div>

    </div>

        `,

                        questions: [

                            {

                                id: "str-2-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Traversals & Patterns'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Traversals & Patterns, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "str-2-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "str-2-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Traversals & Patterns?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "str-3",

                        title: "Substring Search Algorithms",

                        duration: "60 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> Finding Needles in Haystacks </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                Beyond brute force O(N * M).Aiming for O(N).

                                </p>

                    <!--KMP Visual-->

    <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

        <span class="text-purple-500">🧠</span> KMP Algorithm (LPS Table)

            </h3>

            <div class="flex flex-col gap-6">

                <div class="text-sm text-gray-400"> Pattern: "ABABAC" </div>

                    <div class="flex gap-1">

                        <div class="flex flex-col items-center w-8">

                            <div class="w-8 h-8 border border-white/20 flex items-center justify-center text-white"> A </div>

                                <div class="text-purple-400 font-bold mt-1"> 0 </div>

                                    </div>

                                    <div class="flex flex-col items-center w-8">

                                        <div class="w-8 h-8 border border-white/20 flex items-center justify-center text-white"> B </div>

                                            <div class="text-purple-400 font-bold mt-1"> 0 </div>

                                                </div>

                                                <div class="flex flex-col items-center w-8">

                                                    <div class="w-8 h-8 border border-white/20 flex items-center justify-center text-white"> A </div>

                                                        <div class="text-purple-400 font-bold mt-1"> 1 </div>

                                                            </div>

                                                            <div class="flex flex-col items-center w-8">

                                                                <div class="w-8 h-8 border border-white/20 flex items-center justify-center text-white"> B </div>

                                                                    <div class="text-purple-400 font-bold mt-1"> 2 </div>

                                                                        </div>

                                                                        <div class="flex flex-col items-center w-8">

                                                                            <div class="w-8 h-8 border border-white/20 flex items-center justify-center text-white"> A </div>

                                                                                <div class="text-purple-400 font-bold mt-1"> 3 </div>

                                                                                    </div>

                                                                                    <div class="flex flex-col items-center w-8">

                                                                                        <div class="w-8 h-8 border border-white/20 flex items-center justify-center text-white"> C </div>

                                                                                            <div class="text-purple-400 font-bold mt-1"> 0 </div>

                                                                                                </div>

                                                                                                </div>

                                                                                                <p class="text-xs text-gray-500"> LPS[i] = Length of Longest Proper Prefix which is also a Suffix.</p>

                                                                                                    </div>

                                                                                                    </div>

                                                                                                    <div class="grid md:grid-cols-2 gap-8">

                                                                                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                                            <h3 class="text-xl font-bold text-white mb-4"> Z - Algorithm </h3>

                                                                                                                <p class="text-gray-400 mb-4 text-sm">

                                                                                                                    Constructs Z - array where Z[i] is length of substring starting at i matching prefix.

                                        </p>

                                                                                                                        <div class="text-blue-400 font-mono text-sm"> Z - Box Concept </div>

                                                                                                                            </div>

                                                                                                                            <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                                                                <h3 class="text-xl font-bold text-white mb-4"> Rabin - Karp </h3>

                                                                                                                                    <p class="text-gray-400 mb-4 text-sm">

                                                                                                                                        Rolling Hash.Slide window and update hash in O(1).

                                        </p>

                                                                                                                                            <div class="text-green-400 font-mono text-sm"> Hash = (Hash * 26 + char) % MOD </div>

                                                                                                                                                </div>

                                                                                                                                                </div>

                                                                                                                                                </div>

                                                                                                                                                <div class="mt-8 bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

                                                                                                                                                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                                                                                                        <span class="text-purple-500">🧠</span> Concept Deep Dive: The LPS Array

                                                                                                                                                            </h3>

                                                                                                                                                            <div class="space-y-6">

                                                                                                                                                                <div>

                                                                                                                                                                <h4 class="text-lg font-bold text-white mb-2"> Why KMP is O(N) ? </h4>

                                                                                                                                                                    <p class="text-gray-400 text-sm mb-4">

                                                                                                                                                                        The magic lies in the <strong> LPS(Longest Prefix Suffix) </strong> array. When a mismatch occurs, we don't restart from the beginning. We use the LPS value to "jump" the pattern to the next safe verification point.

                                                                                                                                                                            </p>

                                                                                                                                                                            </div>

                                                                                                                                                                            <div class="bg-[#1a1a1a] p-5 rounded-xl border border-white/20">

                                                                                                                                                                                <h5 class="text-blue-400 font-bold mb-2"> Example: Pattern "AAAB" </h5>

                                                                                                                                                                                    <div class="flex items-center gap-2 mb-2 font-mono text-sm">

                                                                                                                                                                                        <span class="text-gray-500"> Idx: </span>

                                                                                                                                                                                            <span class="w-6 text-center"> 0 </span>

                                                                                                                                                                                                <span class="w-6 text-center"> 1 </span>

                                                                                                                                                                                                    <span class="w-6 text-center"> 2 </span>

                                                                                                                                                                                                        <span class="w-6 text-center"> 3 </span>

                                                                                                                                                                                                            </div>

                                                                                                                                                                                                            <div class="flex items-center gap-2 mb-2 font-mono text-sm">

                                                                                                                                                                                                                <span class="text-gray-500"> Pat: </span>

                                                                                                                                                                                                                    <span class="w-6 text-center text-white border border-white/20"> A </span>

                                                                                                                                                                                                                        <span class="w-6 text-center text-white border border-white/20"> A </span>

                                                                                                                                                                                                                            <span class="w-6 text-center text-white border border-white/20"> A </span>

                                                                                                                                                                                                                                <span class="w-6 text-center text-white border border-white/20"> B </span>

                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                    <div class="flex items-center gap-2 font-mono text-sm">

                                                                                                                                                                                                                                        <span class="text-gray-500"> LPS: </span>

                                                                                                                                                                                                                                            <span class="w-6 text-center text-purple-400"> 0 </span>

                                                                                                                                                                                                                                                <span class="w-6 text-center text-purple-400"> 1 </span>

                                                                                                                                                                                                                                                    <span class="w-6 text-center text-purple-400"> 2 </span>

                                                                                                                                                                                                                                                        <span class="w-6 text-center text-purple-400"> 0 </span>

                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                            <p class="text-xs text-gray-500 mt-3">

                                                                                                                                                                                                                                                                If we fail at index 3('B'), we look at LPS[2] = 2. We don't check 'A's again.

                                                                                                                                                                                                                                                                    </p>

                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                    <div class="mt-8">

                                                                                                                                                                                                                                                                        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                                                                                                                                                                                                                            <span class="text-yellow-500">⚡</span> C++ Code Template

                                                                                                                                                                                                                                                                                </h3>

                                                                                                                                                                                                                                                                                <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden">

                                                                                                                                                                                                                                                                                    <div class="flex items-center justify-between px-4 py-3 bg-[#252525] border-b border-white/5">

                                                                                                                                                                                                                                                                                        <div class="flex items-center gap-2">

                                                                                                                                                                                                                                                                                            <div class="flex gap-1.5">

                                                                                                                                                                                                                                                                                                <div class="w-3 h-3 rounded-full bg-[#ff5f56]"> </div>

                                                                                                                                                                                                                                                                                                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"> </div>

                                                                                                                                                                                                                                                                                                        <div class="w-3 h-3 rounded-full bg-[#27c93f]"> </div>

                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                            <span class="text-sm text-gray-400 font-mono ml-2"> kmp_algorithm.cpp </span>

                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                <button class="text-xs text-gray-400 hover:text-white transition-colors"> Copy Code </button>

                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                    <div class="p-4 overflow-x-auto">

                                                                                                                                                                                                                                                                                                                        <pre class="font-mono text-sm text-gray-300"> <code>#include & lt; vector & gt;

#include & lt; string & gt;

#include & lt; iostream & gt;

using namespace std;

// 1. Build LPS Table: O(M)

vector & lt; int & gt; computeLPS(string pattern) {

    int m = pattern.length();

    vector & lt; int & gt; lps(m, 0);

    int len = 0; // Length of previous longest prefix suffix

    int i = 1;

    while (i <m) {

        if (pattern[i] == pattern[len]) {

            len++;

            lps[i] = len;

            i++;

        } else {

            if (len != 0) {

                len = lps[len - 1]; // Fallback

            } else {

                lps[i] = 0;

                i++;

            }

        }

    }

    return lps;

}

// 2. KMP Search: O(N)

void KMPSearch(string text, string pattern) {

    int n = text.length();

    int m = pattern.length();

    vector & lt; int & gt; lps = computeLPS(pattern);

    int i = 0; // index for text

    int j = 0; // index for pattern

    while (i <n) {

        if (pattern[j] == text[i]) {

            j++;

            i++;

        }

        if (j == m) {

            cout << "Pattern found at index " <<i - j <<endl;

            j = lps[j - 1]; // Prepare for next match

        } else if (i <n && pattern[j] != text[i]) {

            if (j != 0)

                j = lps[j - 1];

            else

                i++;

        }

    }

} </code></pre>

    </div>

    </div>

    </div>

        `,

                        questions: [

                            {

                                id: "str-3-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Substring Search Algorithms'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Substring Search Algorithms, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "str-3-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "str-3-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Substring Search Algorithms?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "str-4",

                        title: "Two Pointer Applications",

                        duration: "50 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> Pointers in Strings </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                Expanding from centers and reversing words.

                                </p>

                    <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                            <span class="text-yellow-500">↔️</span> Longest Palindromic Substring

                                </h3>

                                <div class="flex flex-col items-center gap-4">

                                    <div class="text-sm text-gray-400"> Expand Around Center </div>

                                        <div class="flex gap-2 items-center">

                                            <div class="text-gray-600">...</div>

                                                <div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white"> b </div>

                                                    <div class="w-8 h-8 bg-yellow-500/20 border border-yellow-500 rounded flex items-center justify-center text-yellow-400 font-bold"> <-</div>

                                                        <div class="w-8 h-8 bg-yellow-500/20 border border-yellow-500 rounded flex items-center justify-center text-white font-bold"> a </div>

                                                            <div class="w-8 h-8 bg-yellow-500/20 border border-yellow-500 rounded flex items-center justify-center text-yellow-400 font-bold"> -> </div>

                                                                <div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white"> b </div>

                                                                    <div class="text-gray-600">...</div>

                                                                        </div>

                                                                        <p class="text-xs text-gray-500"> Check 2N - 1 centers(characters and spaces between).</p>

                                                                            </div>

                                                                            </div>

                                                                            </div>

                                                                            <div class="mt-8 bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

                                                                                <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                                    <span class="text-blue-500">↔️</span> Concept Deep Dive: Expand Around Center

                                                                                        </h3>

                                                                                        <div class="space-y-6">

                                                                                            <div>

                                                                                            <h4 class="text-lg font-bold text-white mb-2"> Why "2N - 1" Centers ? </h4>

                                                                                                <p class="text-gray-400 text-sm mb-4">

                                                                                                    A palindrome can be centered on a character(e.g., "aba") or between characters(e.g., "abba").

                <br>

                Length N string has N single - character centers + (N - 1) gaps = <strong>2N - 1 centers </strong>.

    </p>

    </div>

    </div>

    </div>

    <div class="mt-8">

        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

            <span class="text-yellow-500">⚡</span> C++ Code Template

                </h3>

                <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden">

                    <div class="flex items-center justify-between px-4 py-3 bg-[#252525] border-b border-white/5">

                        <div class="flex items-center gap-2">

                            <div class="flex gap-1.5">

                                <div class="w-3 h-3 rounded-full bg-[#ff5f56]"> </div>

                                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"> </div>

                                        <div class="w-3 h-3 rounded-full bg-[#27c93f]"> </div>

                                            </div>

                                            <span class="text-sm text-gray-400 font-mono ml-2"> longest_palindrome.cpp </span>

                                                </div>

                                                <button class="text-xs text-gray-400 hover:text-white transition-colors"> Copy Code </button>

                                                    </div>

                                                    <div class="p-4 overflow-x-auto">

                                                        <pre class="font-mono text-sm text-gray-300"> <code>#include & lt; string & gt;

#include & lt; algorithm & gt;

using namespace std;

string longestPalindrome(string s) {

    if (s.empty()) return "";

    int start = 0, maxLen = 0;

    for (int i = 0; i <s.length(); i++) {

        // Odd length palindromes (center is i)

        int l = i, r = i;

        while (l >= 0 && r <s.length() && s[l] == s[r]) {

            if (r - l + 1 > maxLen) {

                start = l;

                maxLen = r - l + 1;

            }

            l--; r++;

        }

        // Even length palindromes (center is gap between i and i+1)

        l = i, r = i + 1;

        while (l >= 0 && r <s.length() && s[l] == s[r]) {

            if (r - l + 1 > maxLen) {

                start = l;

                maxLen = r - l + 1;

            }

            l--; r++;

        }

    }

    return s.substr(start, maxLen);

} </code></pre>

    </div>

    </div>

    </div>

        `,

                        questions: [

                            {

                                id: "str-4-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Two Pointer Applications'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Two Pointer Applications, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "str-4-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "str-4-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Two Pointer Applications?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "str-5",

                        title: "Sliding Window Protocol",

                        duration: "55 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> Windows in Text </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                Finding substrings with specific properties in linear time.

                                </p>

                    <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                            <span class="text-orange-500">🪟</span> Permutation in String

                                </h3>

                                <div class="flex flex-col gap-4">

                                    <div class="text-sm text-gray-400"> Target: "ABC"(Any order) </div>

                                        <div class="relative h-16 bg-gray-900 rounded-xl border border-white/10 flex items-center px-4 overflow-hidden">

                                            <div class="flex gap-4 text-xl font-mono text-gray-500">

                                                <span>X </span><span>Y</span> <span>Z </span>

                                                <span class="text-white"> B </span><span class="text-white">C</span> <span class="text-white"> A </span>

                                                    <span> P </span><span>Q</span>

                                                    </div>

                                                    <div class="absolute left-[88px] w-28 h-12 border-2 border-orange-500 rounded flex items-center justify-center bg-orange-500/10">

                                                        <span class="text-xs text-orange-400 font-bold bg-black/80 px-1 rounded -mt-16"> Match! </span>

                                                            </div>

                                                            </div>

                                                            <p class="text-xs text-gray-500"> Fixed size window.Maintain char frequency array.</p>

                                                                </div>

                                                                </div>

                                                                <div class="grid md:grid-cols-2 gap-8">

                                                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                        <h3 class="text-xl font-bold text-white mb-4"> Min Window Substring </h3>

                                                                            <p class="text-gray-400 mb-4 text-sm">

                                                                                Smallest substring containing all chars of T.

                                        </p>

                                                                                    <div class="text-blue-400 font-mono text-sm"> Expand R, Shrink L </div>

                                                                                        </div>

                                                                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                            <h3 class="text-xl font-bold text-white mb-4"> Longest Substring w / o Repeats </h3>

                                                                                                <p class="text-gray-400 mb-4 text-sm">

                                                                                                    Classic variable window problem.

                                        </p>

                                                                                                        <div class="text-green-400 font-mono text-sm"> Use Set / Map for indices </div>

                                                                                                            </div>

                                                                                                            </div>

                                                                                                            </div>

                                                                                                            <div class="mt-8 bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

                                                                                                            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                                                            <span class="text-orange-500">🪟</span> Concept Deep Dive: Variable Window

                                                                                                                </h3>

                                                                                                                <div class="space-y-6">

                                                                                                                    <div>

                                                                                                                    <h4 class="text-lg font-bold text-white mb-2"> The "Need" vs "Have" Pattern </h4>

                                                                                                                        <p class="text-gray-400 text-sm mb-4">

                                                                                                                            For "Minimum Window Substring":

</p>

    <ul class="list-disc list-inside text-gray-400 text-sm space-y-2">

        <li><strong class="text-white"> Need Map: </strong> Count characters in target \`,

                       questions: [

                            {

                                id: "str-5-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Sliding Window Protocol'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Sliding Window Protocol, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "str-5-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "str-5-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Sliding Window Protocol?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],T\`.</li>

            <li><strong class="text-white"> Have Map: </strong> Count characters in current window \`[L, R]\`.</li>

                <li><strong class="text-white"> Expand R: </strong> Until \`Have\` satisfies \`Need\`.</li>

                    <li><strong class="text-white"> Shrink L: </strong> To minimize window size while valid.</li>

                        </ul>

                        </div>

                        </div>

                        </div>

                        <div class="mt-8">

                            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                <span class="text-yellow-500">⚡</span> C++ Code Template

                                    </h3>

                                    <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden">

                                        <div class="flex items-center justify-between px-4 py-3 bg-[#252525] border-b border-white/5">

                                            <div class="flex items-center gap-2">

                                                <div class="flex gap-1.5">

                                                    <div class="w-3 h-3 rounded-full bg-[#ff5f56]"> </div>

                                                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"> </div>

                                                            <div class="w-3 h-3 rounded-full bg-[#27c93f]"> </div>

                                                                </div>

                                                                <span class="text-sm text-gray-400 font-mono ml-2"> min_window.cpp </span>

                                                                    </div>

                                                                    <button class="text-xs text-gray-400 hover:text-white transition-colors"> Copy Code </button>

                                                                        </div>

                                                                        <div class="p-4 overflow-x-auto">

                                                                            <pre class="font-mono text-sm text-gray-300"> <code>#include & lt; string & gt;

#include & lt; vector & gt;

#include & lt; climits & gt;

using namespace std;

string minWindow(string s, string t) {

    if (t.empty()) return "";

    vector & lt; int & gt; map(128, 0);

    for (char c : t) map[c]++;

    

    int counter = t.size(), begin = 0, end = 0, d = INT_MAX, head = 0;

    while (end <s.size()) {

        if (map[s[end++]]--> 0) counter--; // Found a char in T

        while (counter == 0) { // Valid window

            if (end - begin <d) d = end - (head = begin);

            if (map[s[begin++]]++ == 0) counter++; // Making it invalid to shrink

        }

    }

    return d == INT_MAX ? "" : s.substr(head, d);

} </code></pre>

    </div>

    </div>

    </div>

        `

                    },

                    {

                        id: "str-6",

                        title: "Hashing & Compression",

                        duration: "45 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> String Hashing </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                Mapping infinite strings to finite integers.

                                </p>

                    <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                            <span class="text-blue-500">#️⃣</span> Polynomial Rolling Hash

                                </h3>

                                <div class="space-y-4">

                                    <div class="bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-sm text-green-400">

                                        Hash(s) = (s[0] * P⁰ + s[1] * P¹ + ... + s[n - 1] * Pⁿ⁻¹) % MOD

                                            </div>

                                            <p class="text-sm text-gray-400">

                                                Allows O(1) comparison of substrings after O(N) precomputation.

                                            Crucial for Rabin - Karp.

                                        </p>

    </div>

    </div>

    </div>

    <div class="mt-8 bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

    <span class="text-blue-500">#️⃣</span> Concept Deep Dive: Rolling Hash Magic

        </h3>

        <div class="space-y-6">

            <div>

            <h4 class="text-lg font-bold text-white mb-2"> Why Modulo 10 ^ 9 + 7 ? </h4>

                <p class="text-gray-400 text-sm mb-4">

                    We invoke modulo arithmetic to keep integers fast and manageable(avoid overflow). 

                <br>

10 ^ 9 + 7 is a large <strong> prime number </strong>, minimizing collisions.

    </p>

    </div>

    <div class="bg-[#1a1a1a] p-5 rounded-xl border border-white/20">

        <h5 class="text-purple-400 font-bold mb-2"> Rolling update in O(1) </h5>

            <p class="text-xs text-gray-500 font-mono mb-2">

                Remove leading char, shift left, add new trailing char.

            </p>

                    <div class="font-mono text-sm text-green-400">

                        Hash(new) = ((Hash(old) - Val(old_char) * P ^ (L - 1)) * P + Val(new_char)) % MOD

                            </div>

                            </div>

                            </div>

                            </div>

                            <div class="mt-8">

                                <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                    <span class="text-yellow-500">⚡</span> C++ Code Template

                                        </h3>

                                        <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden">

                                            <div class="flex items-center justify-between px-4 py-3 bg-[#252525] border-b border-white/5">

                                                <div class="flex items-center gap-2">

                                                    <div class="flex gap-1.5">

                                                        <div class="w-3 h-3 rounded-full bg-[#ff5f56]"> </div>

                                                            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"> </div>

                                                                <div class="w-3 h-3 rounded-full bg-[#27c93f]"> </div>

                                                                    </div>

                                                                    <span class="text-sm text-gray-400 font-mono ml-2"> rolling_hash.cpp </span>

                                                                        </div>

                                                                        <button class="text-xs text-gray-400 hover:text-white transition-colors"> Copy Code </button>

                                                                            </div>

                                                                            <div class="p-4 overflow-x-auto">

                                                                                <pre class="font-mono text-sm text-gray-300"> <code>#include & lt; string & gt;

#include & lt; iostream & gt;

#include & lt; vector & gt;

using namespace std;

typedef long long ll;

const int P = 31;

const int MOD = 1e9 + 7;

// Function to compute initial hash

ll computeHash(const string& s) {

    ll hash_value = 0;

    ll p_pow = 1;

    for (char c : s) {

        hash_value = (hash_value + (c - 'a' + 1) * p_pow) % MOD;

        p_pow = (p_pow * P) % MOD;

    }

    return hash_value;

}

// Example usage context

void usage() {

    string s="leetcode";

    ll h = computeHash(s);

    cout << "Hash: " <<h <<endl;

} </code></pre>

    </div>

    </div>

    </div>

        `,

                        questions: [

                            {

                                id: "str-6-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Hashing & Compression'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Hashing & Compression, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "str-6-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "str-6-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Hashing & Compression?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "str-7",

                        title: "Tries & Advanced Processing",

                        duration: "60 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> The Prefix Tree </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                Optimizing prefix - based searches(Autocomplete).

                                </p>

                    <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                            <span class="text-green-500">🌳</span> Trie Structure

                                </h3>

                                <div class="flex justify-center">

                                    <div class="relative w-64 h-48">

                                        <!--Root -->

                                            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/10 rounded-full border border-white/30"> </div>

                                                <!--Level 1 -->

                                                    <div class="absolute top-16 left-1/4 w-8 h-8 bg-green-500/20 rounded-full border border-green-500 flex items-center justify-center text-green-400"> c </div>

                                                        <div class="absolute top-16 right-1/4 w-8 h-8 bg-green-500/20 rounded-full border border-green-500 flex items-center justify-center text-green-400"> d </div>

                                                            <!--Level 2 -->

                                                                <div class="absolute top-32 left-10 w-8 h-8 bg-green-500/20 rounded-full border border-green-500 flex items-center justify-center text-green-400"> a </div>

                                                                    <div class="absolute top-32 left-32 w-8 h-8 bg-green-500/20 rounded-full border border-green-500 flex items-center justify-center text-green-400"> u </div>

                                                                        <div class="absolute top-32 right-10 w-8 h-8 bg-green-500/20 rounded-full border border-green-500 flex items-center justify-center text-green-400"> o </div>

                                                                            <!--Lines -->

                                                                                <svg class="absolute inset-0 w-full h-full pointer-events-none">

                                                                                    <line x1="50%" y1="32" x2="25%" y2="64" stroke="rgba(255,255,255,0.2)" />

                                                                                        <line x1="50%" y1="32" x2="75%" y2="64" stroke="rgba(255,255,255,0.2)" />

                                                                                            <line x1="25%" y1="96" x2="15%" y2="128" stroke="rgba(255,255,255,0.2)" />

                                                                                                <line x1="25%" y1="96" x2="50%" y2="128" stroke="rgba(255,255,255,0.2)" />

                                                                                                    <line x1="75%" y1="96" x2="85%" y2="128" stroke="rgba(255,255,255,0.2)" />

                                                                                                        </svg>

                                                                                                        </div>

                                                                                                        </div>

                                                                                                        <p class="text-center text-sm text-gray-500 mt-4">

                                                                                                            Storing "cat", "cut", "do".Shared prefixes save space.

                                    </p>

                                                                                                                </div>

                                                                                                                </div>

                                                                                                                <div class="mt-8 bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

                                                                                                                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                                                                        <span class="text-green-500">🌳</span> Concept Deep Dive: Trie vs HashMap

                                                                                                                            </h3>

                                                                                                                            <div class="grid md:grid-cols-2 gap-4">

                                                                                                                                <div>

                                                                                                                                <h4 class="text-white font-bold mb-2"> HashMap </h4>

                                                                                                                                    <p class="text-xs text-gray-400"> Stores full strings keys.</p>

                                                                                                                                        <div class="text-red-400 text-xs mt-1"> O(L) avg search(hashing) </div>

                                                                                                                                            <div class="text-red-400 text-xs mt-1"> No prefix queries </div>

                                                                                                                                                </div>

                                                                                                                                                <div>

                                                                                                                                                <h4 class="text-white font-bold mb-2"> Trie </h4>

                                                                                                                                                    <p class="text-xs text-gray-400"> Stores char paths.</p>

                                                                                                                                                        <div class="text-green-400 text-xs mt-1"> O(L) worst case search </div>

                                                                                                                                                            <div class="text-green-400 text-xs mt-1"> Efficient prefix queries </div>

                                                                                                                                                                </div>

                                                                                                                                                                </div>

                                                                                                                                                                </div>

                                                                                                                                                                <div class="mt-8">

                                                                                                                                                                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                                                                                                                        <span class="text-yellow-500">⚡</span> C++ Code Template

                                                                                                                                                                            </h3>

                                                                                                                                                                            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden">

                                                                                                                                                                                <div class="flex items-center justify-between px-4 py-3 bg-[#252525] border-b border-white/5">

                                                                                                                                                                                    <div class="flex items-center gap-2">

                                                                                                                                                                                        <div class="flex gap-1.5">

                                                                                                                                                                                            <div class="w-3 h-3 rounded-full bg-[#ff5f56]"> </div>

                                                                                                                                                                                                <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"> </div>

                                                                                                                                                                                                    <div class="w-3 h-3 rounded-full bg-[#27c93f]"> </div>

                                                                                                                                                                                                        </div>

                                                                                                                                                                                                        <span class="text-sm text-gray-400 font-mono ml-2"> trie_implementation.cpp </span>

                                                                                                                                                                                                            </div>

                                                                                                                                                                                                            <button class="text-xs text-gray-400 hover:text-white transition-colors"> Copy Code </button>

                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                <div class="p-4 overflow-x-auto">

                                                                                                                                                                                                                    <pre class="font-mono text-sm text-gray-300"> <code>#include & lt; string & gt;

#include & lt; vector & gt;

using namespace std;

class TrieNode {

    public:

        TrieNode* children[26];

    bool isEnd;

    TrieNode() {

        for (int i = 0; i <26; i++) children[i] = nullptr;

        isEnd = false;

    }

};

class Trie {

    TrieNode* root;

    public:

        Trie() { root = new TrieNode(); }

// O(L)

void insert(string word) {

    TrieNode * cursor = root;

    for (char c : word) {

            int idx = c - 'a';

        if (!cursor -> children[idx])

            cursor -> children[idx] = new TrieNode();

        cursor = cursor -> children[idx];

    }

    cursor -> isEnd = true;

}

    // O(L)

    bool search(string word) {

    TrieNode * cursor = root;

    for (char c : word) {

        if (!cursor -> children[c - 'a']) return false;

        cursor = cursor -> children[c - 'a'];

    }

    return cursor -> isEnd;

}

    // O(L)

    bool startsWith(string prefix) {

    TrieNode * cursor = root;

    for (char c : prefix) {

        if (!cursor -> children[c - 'a']) return false;

        cursor = cursor -> children[c - 'a'];

    }

    return true;

}

}; </code></pre>

    </div>

    </div>

    </div>

        `,

                        questions: [

                            {

                                id: "str-7-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Tries & Advanced Processing'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Tries & Advanced Processing, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "str-7-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "str-7-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Tries & Advanced Processing?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "str-8",

                        title: "Competitive String Algos",

                        duration: "50 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> Advanced Weaponry </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                Algorithms for the hardest string problems.

                                </p>

                    <div class="grid md:grid-cols-2 gap-8">

                        <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                            <h3 class="text-2xl font-bold text-white mb-6"> Manacher's Algorithm</h3>

                                <p class="text-gray-400 mb-6">

                                    Finds Longest Palindromic Substring in <strong>O(N) </strong>.

                                        </p>

                                        <p class="text-xs text-gray-500">

                                            Uses previously computed palindrome boundaries to skip checks.

                                        </p>

                                                </div>

                                                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                                    <h3 class="text-2xl font-bold text-white mb-6"> Suffix Arrays </h3>

                                                        <p class="text-gray-400 mb-6">

                                                            Sorted array of all suffixes.

                                        </p>

                                                                <p class="text-xs text-gray-500">

                                                                    Enables fast pattern matching, LCP(Longest Common Prefix), and more.

                                        </p>

                                                                        </div>

                                                                        </div>

                                                                        </div>

                                                                        <div class="mt-8 bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

                                                                            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                                <span class="text-purple-500">🧠</span> Concept Deep Dive: Manacher's Algorithm

                                                                                    </h3>

                                                                                    <div class="space-y-6">

                                                                                        <div>

                                                                                        <h4 class="text-lg font-bold text-white mb-2"> Transforming the Input </h4>

                                                                                            <p class="text-gray-400 text-sm mb-4">

                                                                                                To handle even and odd length palindromes uniformly, we insert \`,

                       questions: [

                            {

                                id: "str-8-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Competitive String Algos'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Competitive String Algos, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "str-8-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "str-8-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Competitive String Algos?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],#\` characters.

                <br>

e.g., "aba" -> "#a#b#a#".length 3 -> length 7.

    </p>

    </div>

    <div class="bg-[#1a1a1a] p-5 rounded-xl border border-white/20">

        <h5 class="text-blue-400 font-bold mb-2"> P array(Palindrome Radii) </h5>

            <p class="text-xs text-gray-500 mb-2">

                P[i] = Radius of palindrome at center i in transformed string.

            </p>

                    <div class="text-blue-300 font-mono text-xs">

                        Max Length = max(P)

                            </div>

                            </div>

                            </div>

                            </div>

                            <div class="mt-8">

                                <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                    <span class="text-yellow-500">⚡</span> C++ Code Template

                                        </h3>

                                        <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden">

                                            <div class="flex items-center justify-between px-4 py-3 bg-[#252525] border-b border-white/5">

                                                <div class="flex items-center gap-2">

                                                    <div class="flex gap-1.5">

                                                        <div class="w-3 h-3 rounded-full bg-[#ff5f56]"> </div>

                                                            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"> </div>

                                                                <div class="w-3 h-3 rounded-full bg-[#27c93f]"> </div>

                                                                    </div>

                                                                    <span class="text-sm text-gray-400 font-mono ml-2"> manacher.cpp </span>

                                                                        </div>

                                                                        <button class="text-xs text-gray-400 hover:text-white transition-colors"> Copy Code </button>

                                                                            </div>

                                                                            <div class="p-4 overflow-x-auto">

                                                                                <pre class="font-mono text-sm text-gray-300"> <code>#include & lt; vector & gt;

#include & lt; string & gt;

#include & lt; algorithm & gt;

using namespace std;

string manachers(string s) {

    // 1. Transform T

    string T="#";

    for (char c : s) { T += c; T += "#"; }

    

    int n = T.length();

    vector & lt; int & gt; P(n, 0);

    int C = 0, R = 0; // Center, Right boundary

    for (int i = 0; i <n; i++) {

        int i_mirror = 2 * C - i; // Correspond point

        if (R > i) {

            P[i] = min(R - i, P[i_mirror]);

        } else {

            P[i] = 0;

        }

        // Expansion

        while (i - 1 - P[i] >= 0 && i + 1 + P[i] <n &&

            T[i + 1 + P[i]] == T[i - 1 - P[i]]) {

            P[i]++;

        }

        // Update Center

        if (i + P[i] > R) {

            C = i;

            R = i + P[i];

        }

    }

    // Find absolute max

    int maxLen = 0;

    int centerIndex = 0;

    for (int i = 0; i <n; i++) {

        if (P[i] > maxLen) {

            maxLen = P[i];

            centerIndex = i;

        }

    }

    

    int start = (centerIndex - maxLen) / 2;

    return s.substr(start, maxLen);

} </code></pre>

    </div>

    </div>

    </div>

        `

                    }

                ]

            },

            {

                title: "4. Linked Lists: The Chain of Nodes",

                lessons: [

                    {

                        id: "ll-1",

                        title: "Introduction to Linked Lists",

                        duration: "45 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> Breaking the Chains </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                Arrays are rigid.Linked Lists are flexible.But flexibility comes at a cost.

                                </p>

                    <div class="grid md:grid-cols-2 gap-8 mb-8">

                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                            <h3 class="text-xl font-bold text-white mb-4"> Arrays: Contiguous Memory </h3>

                                <div class="flex gap-1 mb-4">

                                    <div class="w-10 h-10 bg-blue-500/20 border border-blue-500 flex items-center justify-center text-white text-xs"> 0x100 </div>

                                        <div class="w-10 h-10 bg-blue-500/20 border border-blue-500 flex items-center justify-center text-white text-xs"> 0x104 </div>

                                            <div class="w-10 h-10 bg-blue-500/20 border border-blue-500 flex items-center justify-center text-white text-xs"> 0x108 </div>

                                                </div>

                                                <ul class="space-y-2 text-sm text-gray-400">

                                                    <li>✅ <strong>Random Access: </strong> O(1) via math (Base + Index * Size).</li>

                                                        <li>❌ <strong>Fixed Size: </strong> Must resize (O(N)) if full.</li>

                                                            <li>❌ <strong>Insertion: </strong> O(N) shifting required.</li>

                                                                </ul>

                                                                </div>

                                                                <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                    <h3 class="text-xl font-bold text-white mb-4"> Linked Lists: Scattered Memory </h3>

                                                                        <div class="flex items-center gap-2 mb-4">

                                                                            <div class="w-10 h-10 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center text-white text-xs"> 0x3A </div>

                                                                                <div class="w-8 h-0.5 bg-gray-600 border-t border-dashed border-gray-500"> </div>

                                                                                    <div class="w-10 h-10 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center text-white text-xs"> 0x9F </div>

                                                                                        <div class="w-8 h-0.5 bg-gray-600 border-t border-dashed border-gray-500"> </div>

                                                                                            <div class="text-gray-600 text-xs"> NULL </div>

                                                                                                </div>

                                                                                                <ul class="space-y-2 text-sm text-gray-400">

                                                                                                    <li>❌ <strong>Sequential Access: </strong> O(N) traversal.</li>

                                                                                                        <li>✅ <strong>Dynamic Size: </strong> Grow as needed.</li>

                                                                                                            <li>✅ <strong>Insertion: </strong> O(1) pointer rewiring (if position known).</li>

                                                                                                                </ul>

                                                                                                                </div>

                                                                                                                </div>

                                                                                                                <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

                                                                                                                    <h3 class="text-2xl font-bold text-white mb-6"> Memory Layout: Stack vs Heap </h3>

                                                                                                                        <div class="flex gap-12 items-start">

                                                                                                                            <div class="w-1/3">

                                                                                                                                <h4 class="text-purple-400 font-bold mb-2"> Stack </h4>

                                                                                                                                    <div class="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg text-sm font-mono">

                                                                                                                                        Head Pointer <br>

                                                                                                                                            <span class="text-gray-500"> 0x3A </span>

                                                                                                                                                </div>

                                                                                                                                                <p class="text-xs text-gray-500 mt-2"> Local variable storing the address of the first node.</p>

                                                                                                                                                    </div>

                                                                                                                                                    <div class="text-2xl text-gray-600 pt-6">→</div>

                                                                                                                                                        <div class="w-2/3">

                                                                                                                                                            <h4 class="text-green-400 font-bold mb-2"> Heap </h4>

                                                                                                                                                                <div class="flex gap-4">

                                                                                                                                                                    <div class="bg-green-900/20 border border-green-500/30 p-4 rounded-lg text-sm font-mono">

                                                                                                                                                                        Node 1<br>

                                                                                                                                                                        [Data | Next]

                                                                                                                                                                            </div>

                                                                                                                                                                            <div class="bg-green-900/20 border border-green-500/30 p-4 rounded-lg text-sm font-mono">

                                                                                                                                                                                Node 2<br>

                                                                                                                                                                                [Data | Next]

                                                                                                                                                                                    </div>

                                                                                                                                                                                    </div>

                                                                                                                                                                                    <p class="text-xs text-gray-500 mt-2"> Objects scattered in memory, linked by references.</p>

                                                                                                                                                                                        </div>

                                                                                                                                                                                        </div>

                                                                                                                                                                                        </div>

                                                                                                                                                                                        </div>

                                                                                                                                                                                            

            <div class="space-y-8 mt-12">

                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                    <div class="space-y-6">

                        <div>

                            <h4 class="text-lg font-bold text-purple-400 mb-2">Definition</h4>

                            <p class="text-gray-400 leading-relaxed">

                                A <strong>Linked List</strong> is a linear data structure where elements are not stored at contiguous memory locations. The elements are linked using pointers.

                            </p>

                        </div>

                        <div>

                            <h4 class="text-lg font-bold text-blue-400 mb-2">Why & How?</h4>

                            <p class="text-gray-400 leading-relaxed">

                                <strong class="text-white">Why:</strong> Dynamic size (no need to pre-allocate RAM). Fast insertion/deletion (O(1)) if pointer is known.<br>

                                <strong class="text-white">How:</strong> Each node contains <code>data</code> and a <code>next</code> pointer. Memory is allocated on the <strong>Heap</strong>.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">node_struct.cpp</span>

                </div>

                <div class="p-6 overflow-x-auto">

                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">struct</span> <span class="text-yellow-300">Node</span> {

    <span class="text-purple-400">int</span> data;

    Node* next;

    

    <span class="text-blue-400">Node</span>(<span class="text-purple-400">int</span> val) {

        data = val;

        next = <span class="text-purple-400">nullptr</span>;

    }

};</code></pre>

                </div>

            </div>

        `,

                        questions: [

                            {

                                id: "ll-1-q1",

                                user: "ListLover",

                                avatar: "NJ",

                                time: "pinned",

                                content: "Why use LL if Arrays are faster?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Insertions! Inserting at the head of an LL is O(1). In an Array, it's O(N). Great for Queues or history stacks."

                                }

                            },

                            {

                                id: "ll-1-q2",

                                user: "MemorySaver",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "Doubly vs Singly Linked List?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Doubly uses more memory (extra pointer) but allows O(1) deletion *if* you already have the node reference. Singly saves space but can only move forward."

                                }

                            },

                            {

                                id: "ll-1-q3",

                                user: "InterviewAce",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "How to find the middle in one pass?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Tortoise and Hare algorithm. Fast pointer moves 2 steps, slow moves 1. When fast hits end, slow is at middle."

                                }

                            }],

                    },

                    {

                        id: "ll-2",

                        title: "Types of Linked Lists",

                        duration: "40 min",

                        type: 'video',

                        content: `

                                                                                                                                                                                        <div class="space-y-12 text-gray-300 font-light">

                                                                                                                                                                                            <h2 class="text-4xl font-bold text-white mb-6"> The Family Tree </h2>

                                                                                                                                                                                                <div class="overflow-x-auto">

                                                                                                                                                                                                    <table class="w-full text-left border-collapse">

                                                                                                                                                                                                        <thead>

                                                                                                                                                                                                        <tr class="border-b border-white/10 text-gray-400 text-sm">

                                                                                                                                                                                                            <th class="p-4"> Type </th>

                                                                                                                                                                                                                <th class="p-4"> Structure </th>

                                                                                                                                                                                                                    <th class="p-4"> Pros </th>

                                                                                                                                                                                                                        <th class="p-4"> Cons </th>

                                                                                                                                                                                                                            </tr>

                                                                                                                                                                                                                            </thead>

                                                                                                                                                                                                                            <tbody class="text-sm">

                                                                                                                                                                                                                                <tr class="border-b border-white/5">

                                                                                                                                                                                                                                    <td class="p-4 font-bold text-white"> Singly Linked List </td>

                                                                                                                                                                                                                                        <td class="p-4 font-mono text-xs"> Head → A → B → NULL </td>

                                                                                                                                                                                                                                            <td class="p-4 text-green-400"> Simple, Less Memory </td>

                                                                                                                                                                                                                                                <td class="p-4 text-red-400"> One - way traversal only </td>

                                                                                                                                                                                                                                                    </tr>

                                                                                                                                                                                                                                                    <tr class="border-b border-white/5">

                                                                                                                                                                                                                                                        <td class="p-4 font-bold text-white"> Doubly Linked List </td>

                                                                                                                                                                                                                                                            <td class="p-4 font-mono text-xs"> NULL ← A ↔ B → NULL </td>

                                                                                                                                                                                                                                                                <td class="p-4 text-green-400"> Two - way traversal, Easy deletion </td>

                                                                                                                                                                                                                                                                    <td class="p-4 text-red-400"> 2x Pointer Memory, Complex wiring </td>

                                                                                                                                                                                                                                                                        </tr>

                                                                                                                                                                                                                                                                        <tr>

                                                                                                                                                                                                                                                                        <td class="p-4 font-bold text-white"> Circular Linked List </td>

                                                                                                                                                                                                                                                                            <td class="p-4 font-mono text-xs"> Head → A → B → Head </td>

                                                                                                                                                                                                                                                                                <td class="p-4 text-green-400"> No NULL, Good for Round Robin </td>

                                                                                                                                                                                                                                                                                    <td class="p-4 text-red-400"> Infinite loop risk </td>

                                                                                                                                                                                                                                                                                        </tr>

                                                                                                                                                                                                                                                                                        </tbody>

                                                                                                                                                                                                                                                                                        </table>

                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                        <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 mt-8">

                                                                                                                                                                                                                                                                                            <h3 class="text-2xl font-bold text-white mb-6"> Memory Overhead Analysis </h3>

                                                                                                                                                                                                                                                                                                <p class="text-gray-400 mb-6">

                                                                                                                                                                                                                                                                                                    Assuming a 64 - bit system(8 bytes per pointer) and storing a 4 - byte Integer.

                                    </p>

                                                                                                                                                                                                                                                                                                        <div class="grid md:grid-cols-2 gap-8">

                                                                                                                                                                                                                                                                                                            <div class="bg-black/30 p-6 rounded-xl border border-white/5">

                                                                                                                                                                                                                                                                                                                <h4 class="text-lg font-bold text-blue-400 mb-2"> Singly Linked List </h4>

                                                                                                                                                                                                                                                                                                                    <div class="font-mono text-sm space-y-1 text-gray-300">

                                                                                                                                                                                                                                                                                                                        <div>Data: 4 bytes </div>

                                                                                                                                                                                                                                                                                                                            <div> Next: 8 bytes </div>

                                                                                                                                                                                                                                                                                                                                <div class="border-t border-gray-700 pt-1 mt-1 font-bold"> Total: 12 bytes / node </div>

                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                    <div class="bg-black/30 p-6 rounded-xl border border-white/5">

                                                                                                                                                                                                                                                                                                                                        <h4 class="text-lg font-bold text-purple-400 mb-2"> Doubly Linked List </h4>

                                                                                                                                                                                                                                                                                                                                            <div class="font-mono text-sm space-y-1 text-gray-300">

                                                                                                                                                                                                                                                                                                                                                <div>Data: 4 bytes </div>

                                                                                                                                                                                                                                                                                                                                                    <div> Prev: 8 bytes </div>

                                                                                                                                                                                                                                                                                                                                                        <div> Next: 8 bytes </div>

                                                                                                                                                                                                                                                                                                                                                            <div class="border-t border-gray-700 pt-1 mt-1 font-bold"> Total: 20 bytes / node </div>

                                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                                <p class="text-xs text-red-400 mt-2"> ~66 % more memory overhead! </p>

                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                        

            <div class="space-y-8 mt-12">

                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                    <div class="space-y-6">

                        <div>

                            <h4 class="text-lg font-bold text-purple-400 mb-2">Singly Linked List</h4>

                            <p class="text-gray-400 leading-relaxed">

                                In a <strong>Singly Linked List</strong>, navigation is forward-only. Each node points to the next. The last node points to <code>NULL</code>.

                            </p>

                        </div>

                        <div>

                            <h4 class="text-lg font-bold text-blue-400 mb-2">Key Operations</h4>

                            <p class="text-gray-400 leading-relaxed">

                                <strong class="text-white">Traversal:</strong> O(N) - Must visit nodes sequentially.<br>

                                <strong class="text-white">Insert at Head:</strong> O(1) - Just update new node's next.<br>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">singly_list.cpp</span>

                </div>

                <div class="p-6 overflow-x-auto">

                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">void</span> <span class="text-blue-400">printList</span>(Node* head) {

    Node* temp = head;

    <span class="text-purple-400">while</span> (temp != <span class="text-purple-400">nullptr</span>) {

        cout &lt;&lt; temp-&gt;data &lt;&lt; <span class="text-green-300">" -&gt; "</span>;

        temp = temp-&gt;next;

    }

    cout &lt;&lt; <span class="text-green-300">"NULL"</span> &lt;&lt; endl;

}</code></pre>

                </div>

            </div>

        `,

                        questions: [

                            {

                                id: "ll-2-q1",

                                user: "CycleBreaker",

                                avatar: "NJ",

                                time: "pinned",

                                content: "Cycle Detection logic?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Floyd's Cycle Finding (Tortoise and Hare). If there is a loop, the fast runner will eventually lap the slow runner inside the loop."

                                }

                            },

                            {

                                id: "ll-2-q2",

                                user: "CacheKing",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "Why is LL cache poor?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Nodes are allocated randomly in Heap memory. The CPU can't predict the next address, leading to cache misses."

                                }

                            },

                            {

                                id: "ll-2-q3",

                                user: "RecurseFan",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Reversing a LL recursively?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Elegant but uses O(N) stack space. Iterative reversal is O(1) space and safer for production."

                                }

                            }],

                    },

                    {

                        id: "ll-3",

                        title: "Basic Operations",

                        duration: "55 min",

                        type: 'video',

                        content: `

                                                                                                                                                                                                                                                                                                                                                                    <div class="space-y-12 text-gray-300 font-light">

                                                                                                                                                                                                                                                                                                                                                                        <h2 class="text-4xl font-bold text-white mb-6"> Surgery on Lists </h2>

                                                                                                                                                                                                                                                                                                                                                                            <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                                                                                                                                                                                                                                                                                                                                                                                <h3 class="text-2xl font-bold text-white mb-6"> Time Complexity </h3>

                                                                                                                                                                                                                                                                                                                                                                                    <div class="grid grid-cols-4 gap-4 text-center text-sm font-mono">

                                                                                                                                                                                                                                                                                                                                                                                        <div class="text-gray-500"> Operation </div>

                                                                                                                                                                                                                                                                                                                                                                                            <div class="text-gray-500"> Head </div>

                                                                                                                                                                                                                                                                                                                                                                                                <div class="text-gray-500"> Middle </div>

                                                                                                                                                                                                                                                                                                                                                                                                    <div class="text-gray-500"> Tail </div>

                                                                                                                                                                                                                                                                                                                                                                                                        <div class="text-white font-bold"> Insert </div>

                                                                                                                                                                                                                                                                                                                                                                                                            <div class="text-green-400"> O(1) </div>

                                                                                                                                                                                                                                                                                                                                                                                                                <div class="text-red-400"> O(N) </div>

                                                                                                                                                                                                                                                                                                                                                                                                                    <div class="text-red-400"> O(N) * </div>

                                                                                                                                                                                                                                                                                                                                                                                                                        <div class="text-white font-bold"> Delete </div>

                                                                                                                                                                                                                                                                                                                                                                                                                            <div class="text-green-400"> O(1) </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                <div class="text-red-400"> O(N) </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                    <div class="text-red-400"> O(N) * </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                        <div class="text-white font-bold"> Search </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                            <div class="text-red-400"> O(N) </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                <div class="text-red-400"> O(N) </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div class="text-red-400"> O(N) </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                        <p class="text-xs text-gray-500 mt-4">* O(1) for Tail if we maintain a Tail Pointer(SLL) or use DLL.</p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <span class="text-yellow-500">⚠️</span> Edge Cases (The Silent Killers)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <p class="text-gray-400 mb-6">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Always handle these scenarios in your code, or risk a NullPointerException.

                                    </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div class="space-y-4">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div class="flex items-start gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div class="text-2xl"> 1️⃣</div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h4 class="font-bold text-red-400"> Empty List </h4>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <p class="text-sm text-gray-400"> Head is NULL.Cannot delete or access next.</p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <code class="block mt-2 text-xs bg-black/50 p-2 rounded">if (head == null) return; </code>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div class="flex items-start gap-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div class="text-2xl"> 2️⃣</div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <h4 class="font-bold text-yellow-400"> Single Node </h4>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p class="text-sm text-gray-400"> Head == Tail.Deleting it makes Head NULL.</p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <code class="block mt-2 text-xs bg-black/50 p-2 rounded">if (head.next == null) head = null; </code>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

            <div class="space-y-8 mt-12">

                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                    <div class="space-y-6">

                        <div>

                            <h4 class="text-lg font-bold text-purple-400 mb-2">Doubly Linked List</h4>

                            <p class="text-gray-400 leading-relaxed">

                                Uses <strong>two pointers</strong> per node: <code>next</code> and <code>prev</code>. Allows bidirectional traversal.

                            </p>

                        </div>

                        <div>

                            <h4 class="text-lg font-bold text-blue-400 mb-2">Trade-offs</h4>

                            <p class="text-gray-400 leading-relaxed">

                                <strong class="text-white">Pros:</strong> Can delete a node in O(1) if you have the pointer to it (using <code>prev</code>).<br>

                                <strong class="text-white">Cons:</strong> Extra memory per node for the <code>prev</code> pointer.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">doubly_node.cpp</span>

                </div>

                <div class="p-6 overflow-x-auto">

                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">struct</span> <span class="text-yellow-300">DNode</span> {

    <span class="text-purple-400">int</span> data;

    DNode* next;

    DNode* prev;

    

    <span class="text-blue-400">DNode</span>(<span class="text-purple-400">int</span> val) : data(val), next(<span class="text-purple-400">nullptr</span>), prev(<span class="text-purple-400">nullptr</span>) {}

};</code></pre>

                </div>

            </div>

        `,

                        questions: [

                            {

                                id: "ll-3-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Basic Operations'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Basic Operations, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "ll-3-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "ll-3-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Basic Operations?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "ll-4",

                        title: "Important Patterns",

                        duration: "50 min",

                        type: 'video',

                        content: `

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div class="space-y-12 text-gray-300 font-light">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <h2 class="text-4xl font-bold text-white mb-6"> Mastering Pointers </h2>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p class="text-xl leading-relaxed text-gray-400">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Two techniques that solve 80 % of Linked List problems.

                                </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div class="grid md:grid-cols-2 gap-8">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <h3 class="text-xl font-bold text-white mb-4"> 1. The Dummy Node </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <p class="text-gray-400 mb-4 text-sm">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <strong>Why ? </strong> To avoid writing separate "if head is null" logic.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div class="space-y-4">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div class="bg-red-500/10 p-3 rounded border border-red-500/30">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div class="text-xs text-red-400 font-bold mb-1"> Without Dummy </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <code class="text-xs text-gray-400">

                                                    if (head == null) head = node; <br>

                                                    else prev.next = node;

</code>

    </div>

    <div class="bg-green-500/10 p-3 rounded border border-green-500/30">

        <div class="text-xs text-green-400 font-bold mb-1"> With Dummy </div>

            <code class="text-xs text-gray-400">

                prev.next = node; <br>

                    // Works even if list is empty!

                    </code>

                    </div>

                    </div>

                    </div>

                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                        <h3 class="text-xl font-bold text-white mb-4"> 2. Two Pointers(Runner) </h3>

                            <p class="text-gray-400 mb-4 text-sm">

                                Using pointers moving at different speeds or starting at different times.

                                        </p>

                                    <div class="relative h-24 bg-black/50 rounded-xl border border-white/5 flex items-center px-4">

                                        <div class="absolute left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs"> S </div>

                                            <div class="absolute left-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs"> F </div>

                                                <div class="w-full h-1 bg-gray-700 -z-10"> </div>

                                                    </div>

                                                    <p class="text-xs text-gray-500 mt-2"> Find Middle: When Fast reaches end, Slow is at middle.</p>

                                                        </div>

                                                        </div>

                                                        </div>

                                                            

            <div class="space-y-8 mt-12">

                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                    <div class="space-y-6">

                        <div>

                            <h4 class="text-lg font-bold text-purple-400 mb-2">Circular Linked List</h4>

                            <p class="text-gray-400 leading-relaxed">

                                The last node points back to the <strong>head</strong> instead of <code>NULL</code>. Can be Singly or Doubly circular.

                            </p>

                        </div>

                        <div>

                            <h4 class="text-lg font-bold text-blue-400 mb-2">Use Cases</h4>

                            <p class="text-gray-400 leading-relaxed">

                                Used in <strong>Process Scheduling</strong> (Round Robin), generic buffers, and multiplayer gaming turns.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">circular_check.cpp</span>

                </div>

                <div class="p-6 overflow-x-auto">

                     <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">bool</span> <span class="text-blue-400">isCircular</span>(Node* head) {

    <span class="text-purple-400">if</span> (!head) <span class="text-purple-400">return true</span>;

    Node* temp = head-&gt;next;

    <span class="text-purple-400">while</span> (temp != <span class="text-purple-400">nullptr</span> && temp != head) {

        temp = temp-&gt;next;

    }

    <span class="text-purple-400">return</span> (temp == head);

}</code></pre>

                </div>

            </div>

        `,

                        questions: [

                            {

                                id: "ll-4-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Important Patterns'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Important Patterns, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "ll-4-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "ll-4-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Important Patterns?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "ll-5",

                        title: "Fast & Slow Pointers",

                        duration: "60 min",

                        type: 'video',

                        content: `

                                                        <div class="space-y-12 text-gray-300 font-light">

                                                            <h2 class="text-4xl font-bold text-white mb-6"> The Tortoise & The Hare </h2>

                                                                <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                                                                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                                                                        <span class="text-green-500">🐢</span> Floyd's Cycle Detection Proof

                                                                            </h3>

                                                                            <div class="grid md:grid-cols-2 gap-8">

                                                                                <div class="relative h-48 bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">

                                                                                    <div class="absolute w-32 h-32 border-4 border-dashed border-gray-700 rounded-full"> </div>

                                                                                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xl shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-[spin_4s_linear_infinite] origin-[0_64px]">🐢</div>

                                                                                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xl shadow-[0_0_15px_rgba(168,85,247,0.5)] animate-[spin_2s_linear_infinite] origin-[0_64px]">🐇</div>

                                                                                                </div>

                                                                                                <div>

                                                                                                <h4 class="text-lg font-bold text-white mb-2"> Why do they meet ? </h4>

                                                                                                    <p class="text-sm text-gray-400 mb-4">

                                                                                                        Think of <strong> Relative Velocity </strong>.

                                                                                                            </p>

                                                                                                            <ul class="space-y-2 text-sm text-gray-400">

                                                                                                                <li>• Tortoise Speed = <span class="text-green-400"> v </span></li>

                                                                                                                    <li>• Hare Speed = <span class="text-purple-400"> 2v </span></li>

                                                                                                                        <li>• Relative Speed = <span class="text-white"> v </span></li>

                                                                                                                            </ul>

                                                                                                                            <div class="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded text-xs text-blue-300">

                                                                                                                                From the Hare's perspective, the Tortoise is standing still, and the Hare is approaching it at speed v.

                                                In a circle, they <strong> MUST </strong> collide.

    </div>

    </div>

    </div>

    </div>

    </div>

        

            <div class="space-y-8 mt-12">

                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                    <div class="space-y-6">

                        <div>

                            <h4 class="text-lg font-bold text-purple-400 mb-2">Insert & Delete</h4>

                            <p class="text-gray-400 leading-relaxed">

                                <strong>Insertion:</strong> Change pointers. New Node -> Next = Current -> Next; Current -> Next = New Node.<br>

                                <strong>Deletion:</strong> Bypass the target node. Previous -> Next = Target -> Next. <strong>Free memory!</strong>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">delete_node.cpp</span>

                </div>

                <div class="p-6 overflow-x-auto">

                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">void</span> <span class="text-blue-400">deleteNode</span>(Node*& head, <span class="text-purple-400">int</span> val) {

    <span class="text-purple-400">if</span> (!head) <span class="text-purple-400">return</span>;

    <span class="text-purple-400">if</span> (head-&gt;data == val) {

        Node* temp = head;

        head = head-&gt;next;

        <span class="text-purple-400">delete</span> temp;

        <span class="text-purple-400">return</span>;

    }

    Node* curr = head;

    <span class="text-purple-400">while</span> (curr-&gt;next && curr-&gt;next-&gt;data != val) {

        curr = curr-&gt;next;

    }

    <span class="text-purple-400">if</span> (curr-&gt;next) {

        Node* temp = curr-&gt;next;

        curr-&gt;next = curr-&gt;next-&gt;next;

        <span class="text-purple-400">delete</span> temp;

    }

}</code></pre>

                </div>

            </div>

        `,

                        questions: [

                            {

                                id: "ll-5-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Fast & Slow Pointers'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Fast & Slow Pointers, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "ll-5-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "ll-5-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Fast & Slow Pointers?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "ll-6",

                        title: "Reversing Linked Lists",

                        duration: "65 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> U - Turn </h2>

            <div class="grid md:grid-cols-2 gap-8">

                <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                    <h3 class="text-xl font-bold text-white mb-4"> Iterative(3 Pointers) </h3>

                        <p class="text-gray-400 mb-4 text-sm">

                            Standard O(N) Time, O(1) Space.

                                        </p>

                                <div class="bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-xs text-yellow-400">

                                    next = curr.next; <br>

                                        curr.next = prev; <br>

                                            prev = curr; <br>

                                                curr = next;

</div>

    </div>

    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

        <h3 class="text-xl font-bold text-white mb-4"> Recursive(The Stack) </h3>

            <p class="text-gray-400 mb-4 text-sm">

                Uses the Call Stack to reach the end, then rewires backwards.

                                        </p>

                    <div class="space-y-1">

                        <div class="h-6 bg-purple-500/10 border border-purple-500/30 rounded w-full"> </div>

                            <div class="h-6 bg-purple-500/20 border border-purple-500/40 rounded w-[90%] mx-auto"> </div>

                                <div class="h-6 bg-purple-500/30 border border-purple-500/50 rounded w-[80%] mx-auto"> </div>

                                    <div class="text-center text-xs text-purple-400 mt-1"> Stack Unwinding </div>

                                        </div>

                                        <code class="block mt-2 text-xs text-gray-500"> head.next.next = head; </code>

                                            </div>

                                            </div>

                                            <div class="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border border-white/10 mt-6">

                                                <h3 class="text-lg font-bold text-white mb-2"> Challenge: Reverse Nodes in k - Group </h3>

                                                    <p class="text-sm text-gray-400">

                                                        Reverse every k nodes.If k = 2: [1, 2, 3, 4] -> [2, 1, 4, 3].

                                        <br> Requires combining <strong> Reversal </strong> logic with <strong>Dummy Node</strong> and <strong> Pointer Management </strong>.

    </p>

    </div>

    </div>

        

            <div class="space-y-8 mt-12">

                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                    <div class="space-y-6">

                        <div>

                            <h4 class="text-lg font-bold text-purple-400 mb-2">Reversing a List</h4>

                            <p class="text-gray-400 leading-relaxed">

                                Classic Interview Problem. Requires 3 pointers: <code>prev</code>, <code>curr</code>, and <code>next</code>.

                                Iterate through the list, reversing the <code>next</code> pointer of the current node to point to <code>prev</code>.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">reverse_ll.cpp</span>

                </div>

                <div class="p-6 overflow-x-auto">

                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">Node*</span> <span class="text-blue-400">reverseList</span>(Node* head) {

    Node *prev = <span class="text-purple-400">nullptr</span>, *curr = head, *next = <span class="text-purple-400">nullptr</span>;

    <span class="text-purple-400">while</span> (curr != <span class="text-purple-400">nullptr</span>) {

        next = curr-&gt;next;  <span class="text-gray-500">// Save next</span>

        curr-&gt;next = prev;  <span class="text-gray-500">// Reverse link</span>

        prev = curr;        <span class="text-gray-500">// Move prev</span>

        curr = next;        <span class="text-gray-500">// Move curr</span>

    }

    <span class="text-purple-400">return</span> prev; <span class="text-gray-500">// New head</span>

}</code></pre>

                </div>

            </div>

        `,

                        questions: [

                            {

                                id: "ll-6-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Reversing Linked Lists'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Reversing Linked Lists, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "ll-6-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "ll-6-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Reversing Linked Lists?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "ll-7",

                        title: "Doubly Linked List",

                        duration: "50 min",

                        type: 'video',

                        content: `

    <div class="space-y-12 text-gray-300 font-light">

        <h2 class="text-4xl font-bold text-white mb-6"> Two - Way Street </h2>

            <p class="text-xl leading-relaxed text-gray-400">

                The backbone of the LRU Cache.

                                </p>

                    <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">

                            <span class="text-blue-500">💾</span> Real-World: LRU Cache

                                </h3>

                                <p class="text-gray-400 mb-6 text-sm">

                                    Least Recently Used Cache uses a <strong> HashMap </strong> for O(1) lookup and a <strong>Doubly Linked List</strong> for O(1) ordering.

                                    </p>

                                        <div class="flex gap-8 items-center">

                                        <div class="bg-gray-800 p-4 rounded border border-gray-600 w-1/3">

                                            <div class="text-xs text-center text-gray-400 mb-2"> HashMap </div>

                                                <div class="space-y-2 font-mono text-xs">

                                                    <div class="flex justify-between border-b border-gray-700 pb-1"> <span>"Key1" </span> <span>-> Node1</span> </div>

                                                        <div class="flex justify-between border-b border-gray-700 pb-1"> <span>"Key2" </span> <span>-> Node2</span> </div>

                                                            </div>

                                                            </div>

                                                            <div class="text-2xl text-gray-500">🔗</div>

                                                                <div class="flex flex-col gap-2 w-1/2">

                                                                    <div class="text-xs text-center text-gray-400"> Doubly Linked List </div>

                                                                        <div class="flex items-center gap-1 justify-center">

                                                                            <div class="w-16 h-8 bg-green-900/50 border border-green-500 rounded flex items-center justify-center text-xs text-green-400"> Head </div>

                                                                                <span>↔</span>

                                                                                    <div class="w-16 h-8 bg-blue-900/50 border border-blue-500 rounded flex items-center justify-center text-xs text-blue-400"> Node2 </div>

                                                                                        <span>↔</span>

                                                                                            <div class="w-16 h-8 bg-blue-900/50 border border-blue-500 rounded flex items-center justify-center text-xs text-blue-400"> Node1 </div>

                                                                                                <span>↔</span>

                                                                                                    <div class="w-16 h-8 bg-red-900/50 border border-red-500 rounded flex items-center justify-center text-xs text-red-400"> Tail </div>

                                                                                                        </div>

                                                                                                        <div class="text-center text-[10px] text-gray-500 mt-1"> Most Recently Used <span class="mx-2">...</span> Least Recently Used</div>

                                                                                                            </div>

                                                                                                            </div>

                                                                                                            </div>

                                                                                                            </div>

                                                                                                                

            <div class="space-y-8 mt-12">

                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                    <div class="space-y-6">

                        <div>

                            <h4 class="text-lg font-bold text-purple-400 mb-2">Cycle Detection (Floyd's Algorithm)</h4>

                            <p class="text-gray-400 leading-relaxed">

                                Use two pointers: <strong>Slow</strong> (moves 1 step) and <strong>Fast</strong> (moves 2 steps).

                                If there is a cycle, Fast will eventually lap Slow and they will meet. If Fast reaches <code>NULL</code>, no cycle.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">floyd_cycle.cpp</span>

                </div>

                <div class="p-6 overflow-x-auto">

                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">bool</span> <span class="text-blue-400">hasCycle</span>(Node* head) {

    <span class="text-purple-400">if</span> (!head) <span class="text-purple-400">return false</span>;

    Node *slow = head, *fast = head;

    <span class="text-purple-400">while</span> (fast && fast-&gt;next) {

        slow = slow-&gt;next;

        fast = fast-&gt;next-&gt;next;

        <span class="text-purple-400">if</span> (slow == fast) <span class="text-purple-400">return true</span>;

    }

    <span class="text-purple-400">return false</span>;

}</code></pre>

                </div>

            </div>

        `,

                        questions: [

                            {

                                id: "ll-7-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Doubly Linked List'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Doubly Linked List, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "ll-7-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "ll-7-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Doubly Linked List?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "ll-8",

                        title: "Circular Linked List",

                        duration: "45 min",

                        type: 'video',

                        content: `

                                                                                                            <div class="space-y-12 text-gray-300 font-light">

                                                                                                                <h2 class="text-4xl font-bold text-white mb-6"> The Infinite Loop </h2>

                                                                                                                    <div class="grid md:grid-cols-2 gap-8">

                                                                                                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                                                            <h3 class="text-xl font-bold text-white mb-4"> Josephus Problem </h3>

                                                                                                                                <p class="text-gray-400 mb-4 text-sm">

                                                                                                                                    N people in a circle.Kill every k - th person.Who survives ?

                                                                                                                                        </p>

                                                                                                                                        <div class="bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-xs text-purple-400">

                                                                                                                                            f(n, k) = (f(n - 1, k) + k) % n

                                                                                                                                                </div>

                                                                                                                                                <p class="text-xs text-gray-500 mt-2"> Recursive formula derived from re - indexing the circle.</p>

                                                                                                                                                    </div>

                                                                                                                                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                                                                                        <h3 class="text-xl font-bold text-white mb-4"> Round Robin Scheduler </h3>

                                                                                                                                                            <p class="text-gray-400 mb-4 text-sm">

                                                                                                                                                                CPU gives fixed time slice to each process in a loop.

                                        </p>

                                                                                                                                                                    <div class="relative w-24 h-24 mx-auto border-2 border-dashed border-gray-600 rounded-full animate-[spin_10s_linear_infinite]">

                                                                                                                                                                        <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"> </div>

                                                                                                                                                                            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-green-500 rounded-full"> </div>

                                                                                                                                                                                <div class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"> </div>

                                                                                                                                                                                    <div class="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full"> </div>

                                                                                                                                                                                        </div>

                                                                                                                                                                                        </div>

                                                                                                                                                                                        </div>

                                                                                                                                                                                        </div>

                                                                                                                                                                                            

            <div class="space-y-8 mt-12">

                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                    <div class="space-y-6">

                        <div>

                            <h4 class="text-lg font-bold text-purple-400 mb-2">Middle of Linked List</h4>

                            <p class="text-gray-400 leading-relaxed">

                                <strong>Tortoise and Hare approach:</strong> Move Slow pointer by 1 and Fast pointer by 2.

                                When Fast reaches the end, Slow will be exactly at the middle.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">middle_node.cpp</span>

                </div>

                <div class="p-6 overflow-x-auto">

                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">Node*</span> <span class="text-blue-400">middleNode</span>(Node* head) {

    Node *slow = head, *fast = head;

    <span class="text-purple-400">while</span> (fast && fast-&gt;next) {

        slow = slow-&gt;next;

        fast = fast-&gt;next-&gt;next;

    }

    <span class="text-purple-400">return</span> slow;

}</code></pre>

                </div>

            </div>

        `,

                        questions: [

                            {

                                id: "ll-8-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Circular Linked List'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Circular Linked List, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "ll-8-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "ll-8-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Circular Linked List?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "ll-9",

                        title: "Sorting & Merging",

                        duration: "55 min",

                        type: 'video',

                        content: `

                                                                                                                                                                                        <div class="space-y-12 text-gray-300 font-light">

                                                                                                                                                                                            <h2 class="text-4xl font-bold text-white mb-6"> Ordering Chaos </h2>

                                                                                                                                                                                                <p class="text-xl leading-relaxed text-gray-400">

                                                                                                                                                                                                    Why Merge Sort wins and Quicksort fails on Linked Lists.

                                </p>

                                                                                                                                                                                                        <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8">

                                                                                                                                                                                                            <h3 class="text-2xl font-bold text-white mb-6"> Algorithm Showdown </h3>

                                                                                                                                                                                                                <div class="grid grid-cols-2 gap-8">

                                                                                                                                                                                                                    <div>

                                                                                                                                                                                                                    <h4 class="text-red-400 font-bold mb-2"> Quicksort(Bad) </h4>

                                                                                                                                                                                                                        <ul class="text-sm text-gray-400 space-y-2">

                                                                                                                                                                                                                            <li>❌ Requires <strong> Random Access </strong> to pick pivot and partition efficiently.</li>

                                                                                                                                                                                                                                <li>❌ Pointer swapping is messy.</li>

                                                                                                                                                                                                                                    <li>❌ Cache performance is poor due to scattered nodes.</li>

                                                                                                                                                                                                                                        </ul>

                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                        <div>

                                                                                                                                                                                                                                        <h4 class="text-green-400 font-bold mb-2"> Merge Sort(Good) </h4>

                                                                                                                                                                                                                                            <ul class="text-sm text-gray-400 space-y-2">

                                                                                                                                                                                                                                                <li>✅ Works sequentially(Access Next).</li>

                                                                                                                                                                                                                                                    <li>✅ No random access needed.</li>

                                                                                                                                                                                                                                                        <li>✅ Can be implemented without extra space(unlike Arrays).</li>

                                                                                                                                                                                                                                                            </ul>

                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                

            <div class="space-y-8 mt-12">

                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                    <div class="space-y-6">

                        <div>

                            <h4 class="text-lg font-bold text-purple-400 mb-2">Merge Sorted Lists</h4>

                            <p class="text-gray-400 leading-relaxed">

                                Use a <strong>Dummy Node</strong> to simplify the edge cases (like handling the head).

                                Compare heads of both lists, attach smaller node to current, and advance pointers.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">merge_lists.cpp</span>

                </div>

                <div class="p-6 overflow-x-auto">

                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">Node*</span> <span class="text-blue-400">mergeTwoLists</span>(Node* list1, Node* list2) {

    Node dummy(0);

    Node* tail = &dummy;

    

    <span class="text-purple-400">while</span> (list1 && list2) {

        <span class="text-purple-400">if</span> (list1-&gt;data &lt; list2-&gt;data) {

            tail-&gt;next = list1;

            list1 = list1-&gt;next;

        } <span class="text-purple-400">else</span> {

            tail-&gt;next = list2;

            list2 = list2-&gt;next;

        }

        tail = tail-&gt;next;

    }

    <span class="text-purple-400">if</span> (list1) tail-&gt;next = list1;

    <span class="text-purple-400">else</span> tail-&gt;next = list2;

    

    <span class="text-purple-400">return</span> dummy.next;

}</code></pre>

                </div>

            </div>

        `,

                        questions: [

                            {

                                id: "ll-9-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Sorting & Merging'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Sorting & Merging, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "ll-9-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "ll-9-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Sorting & Merging?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "ll-10",

                        title: "Interview Concepts",

                        duration: "50 min",

                        type: 'video',

                        content: `

                                                                                                                                                                                                                                                            <div class="space-y-12 text-gray-300 font-light">

                                                                                                                                                                                                                                                                <h2 class="text-4xl font-bold text-white mb-6"> Advanced Concepts </h2>

                                                                                                                                                                                                                                                                    <div class="grid md:grid-cols-2 gap-8">

                                                                                                                                                                                                                                                                        <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                                                                                                                                                                                                            <h3 class="text-xl font-bold text-white mb-4"> Skip List </h3>

                                                                                                                                                                                                                                                                                <p class="text-gray-400 mb-4 text-sm">

                                                                                                                                                                                                                                                                                    <strong>Probabilistic Data Structure </strong>. Uses coin flips to build express lanes.

                                                                                                                                                                                                                                                                                        </p>

                                                                                                                                                                                                                                                                                        <div class="space-y-3">

                                                                                                                                                                                                                                                                                            <div class="flex items-center gap-2 text-xs text-gray-500">

                                                                                                                                                                                                                                                                                                <span class="w-12"> L3(Exp) </span>

                                                                                                                                                                                                                                                                                                    <div class="flex-1 h-0.5 bg-blue-500/50"> </div>

                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                        <div class="flex items-center gap-2 text-xs text-gray-500">

                                                                                                                                                                                                                                                                                                            <span class="w-12"> L2(Med) </span>

                                                                                                                                                                                                                                                                                                                <div class="flex-1 h-0.5 bg-blue-500/50"> </div>

                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                    <div class="flex items-center gap-2 text-xs text-gray-500">

                                                                                                                                                                                                                                                                                                                        <span class="w-12"> L1(Base) </span>

                                                                                                                                                                                                                                                                                                                            <div class="flex-1 h-0.5 bg-blue-500"> </div>

                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                <p class="text-xs text-green-400 mt-2"> Avg Search: O(log N) </p>

                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                    <div class="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">

                                                                                                                                                                                                                                                                                                                                        <h3 class="text-xl font-bold text-white mb-4"> XOR Linked List </h3>

                                                                                                                                                                                                                                                                                                                                            <p class="text-gray-400 mb-4 text-sm">

                                                                                                                                                                                                                                                                                                                                                Memory Hack: Store 1 pointer instead of 2 for Doubly Linked List.

                                        </p>

                                                                                                                                                                                                                                                                                                                                                    <div class="bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-xs text-purple-400">

                                                                                                                                                                                                                                                                                                                                                        Node.npx = Addr(Prev) ^ Addr(Next)

                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                            <p class="text-xs text-gray-500 mt-2">

                                                                                                                                                                                                                                                                                                                                                                To Traverse: Next = npx ^ Prev

                                                                                                                                                                                                                                                                                                                                                                    </p>

                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                        

            <div class="space-y-8 mt-12">

                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                    <div class="space-y-6">

                        <div>

                            <h4 class="text-lg font-bold text-purple-400 mb-2">Remove Nth Node From End</h4>

                            <p class="text-gray-400 leading-relaxed">

                                <strong>One Pass Solution:</strong> Use two pointers with a gap of <code>N</code>.

                                Move Fast pointer N steps ahead. Then move both Slow and Fast until Fast reaches the end.

                                Slow will be exactly at the node before the one to delete.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">remove_nth.cpp</span>

                </div>

                <div class="p-6 overflow-x-auto">

                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">Node*</span> <span class="text-blue-400">removeNthFromEnd</span>(Node* head, <span class="text-purple-400">int</span> n) {

    Node dummy(0);

    dummy.next = head;

    Node *first = &dummy, *second = &dummy;

    

    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = 0; i &lt;= n; i++) first = first-&gt;next;

    

    <span class="text-purple-400">while</span> (first != <span class="text-purple-400">nullptr</span>) {

        first = first-&gt;next;

        second = second-&gt;next;

    }

    

    Node* temp = second-&gt;next;

    second-&gt;next = second-&gt;next-&gt;next;

    <span class="text-purple-400">delete</span> temp;

    

    <span class="text-purple-400">return</span> dummy.next;

}</code></pre>

                </div>

            </div>

        `,

                        questions: [

                            {

                                id: "ll-10-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Interview Concepts'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Interview Concepts, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "ll-10-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "ll-10-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Interview Concepts?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    },

                    {

                        id: "ll-11",

                        title: "Bonus: Arrays vs Linked Lists",

                        duration: "40 min",

                        type: 'video',

                        content: `

                                                                                                                                                                                                                                                                                                                                                                    <div class="space-y-12 text-gray-300 font-light">

                                                                                                                                                                                                                                                                                                                                                                        <h2 class="text-4xl font-bold text-white mb-6"> The Ultimate Battle </h2>

                                                                                                                                                                                                                                                                                                                                                                            <p class="text-xl leading-relaxed text-gray-400">

                                                                                                                                                                                                                                                                                                                                                                                When to use what ? A side - by - side showdown.

                                </p>

                                                                                                                                                                                                                                                                                                                                                                                    <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden">

                                                                                                                                                                                                                                                                                                                                                                                        <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">

                                                                                                                                                                                                                                                                                                                                                                                            <span class="text-yellow-500">⚔️</span> Data Structure Showdown

                                                                                                                                                                                                                                                                                                                                                                                                </h3>

                                                                                                                                                                                                                                                                                                                                                                                                <div class="overflow-x-auto">

                                                                                                                                                                                                                                                                                                                                                                                                    <table class="w-full text-left border-collapse">

                                                                                                                                                                                                                                                                                                                                                                                                        <thead>

                                                                                                                                                                                                                                                                                                                                                                                                        <tr class="border-b border-white/10 text-gray-500 text-xs uppercase tracking-wider">

                                                                                                                                                                                                                                                                                                                                                                                                            <th class="p-4"> Metric </th>

                                                                                                                                                                                                                                                                                                                                                                                                                <th class="p-4 text-blue-400"> Array(Dynamic) </th>

                                                                                                                                                                                                                                                                                                                                                                                                                    <th class="p-4 text-green-400"> Linked List </th>

                                                                                                                                                                                                                                                                                                                                                                                                                        <th class="p-4"> Winner </th>

                                                                                                                                                                                                                                                                                                                                                                                                                            </tr>

                                                                                                                                                                                                                                                                                                                                                                                                                            </thead>

                                                                                                                                                                                                                                                                                                                                                                                                                            <tbody class="text-sm divide-y divide-white/5">

                                                                                                                                                                                                                                                                                                                                                                                                                                <tr class="hover:bg-white/5 transition-colors">

                                                                                                                                                                                                                                                                                                                                                                                                                                    <td class="p-4 font-bold text-white"> 1. Access Time </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                        <td class="p-4 font-mono text-blue-300"> O(1) <span class="text-gray-600 text-xs"> (Random) </span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                            <td class="p-4 font-mono text-red-400"> O(N) <span class="text-gray-600 text-xs"> (Sequential) </span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                <td class="p-4 text-blue-400 font-bold"> Array 🏆</td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                    </tr>

                                                                                                                                                                                                                                                                                                                                                                                                                                                    <tr class="hover:bg-white/5 transition-colors">

                                                                                                                                                                                                                                                                                                                                                                                                                                                        <td class="p-4 font-bold text-white"> 2. Insert at Head </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <td class="p-4 font-mono text-red-400"> O(N) <span class="text-gray-600 text-xs"> (Shift all)</span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                <td class="p-4 font-mono text-green-300"> O(1) <span class="text-gray-600 text-xs"> (Ptr swap)</span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td class="p-4 text-green-400 font-bold"> List 🏆</td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </tr>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <tr class="hover:bg-white/5 transition-colors">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <td class="p-4 font-bold text-white"> 3. Insert at Tail </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <td class="p-4 font-mono text-blue-300"> O(1) * <span class="text-gray-600 text-xs"> (Amortized) </span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td class="p-4 font-mono text-green-300"> O(1) <span class="text-gray-600 text-xs"> (w / Tail Ptr)</span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <td class="p-4 text-yellow-400 font-bold"> Tie 🤝</td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </tr>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <tr class="hover:bg-white/5 transition-colors">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <td class="p-4 font-bold text-white"> 4. Insert in Middle </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td class="p-4 font-mono text-red-400"> O(N) <span class="text-gray-600 text-xs"> (Shift) </span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <td class="p-4 font-mono text-green-300"> O(1) <span class="text-gray-600 text-xs"> (If ptr known)</span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <td class="p-4 text-green-400 font-bold"> List 🏆</td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </tr>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <tr class="hover:bg-white/5 transition-colors">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td class="p-4 font-bold text-white"> 5. Memory Overhead </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <td class="p-4 font-mono text-blue-300"> Low <span class="text-gray-600 text-xs"> (Just data)</span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <td class="p-4 font-mono text-red-400"> High <span class="text-gray-600 text-xs"> (Extra Pointers)</span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <td class="p-4 text-blue-400 font-bold"> Array 🏆</td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </tr>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <tr class="hover:bg-white/5 transition-colors">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <td class="p-4 font-bold text-white"> 6. Cache Locality </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <td class="p-4 font-mono text-blue-300"> Excellent <span class="text-gray-600 text-xs"> (Contiguous) </span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <td class="p-4 font-mono text-red-400"> Poor <span class="text-gray-600 text-xs"> (Scattered) </span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td class="p-4 text-blue-400 font-bold"> Array 🏆</td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </tr>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <tr class="hover:bg-white/5 transition-colors">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <td class="p-4 font-bold text-white"> 7. Dynamic Sizing </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <td class="p-4 font-mono text-yellow-400"> Good <span class="text-gray-600 text-xs"> (Resize cost)</span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td class="p-4 font-mono text-green-300"> Perfect <span class="text-gray-600 text-xs"> (Node by node)</span></td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <td class="p-4 text-green-400 font-bold"> List 🏆</td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </tr>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <tr class="hover:bg-white/5 transition-colors">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <td class="p-4 font-bold text-white"> 8. Stability </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td class="p-4 font-mono text-blue-300"> Stable Ref </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <td class="p-4 font-mono text-green-300"> Stable Ref </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <td class="p-4 text-yellow-400 font-bold"> Tie 🤝</td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </tr>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </tbody>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </table>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div class="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <h4 class="text-lg font-bold text-blue-400 mb-2">💡 Conclusion </h4>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <p class="text-sm text-gray-300">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Use <strong> Arrays </strong> for read-heavy apps (DB Indexing, Matrices).<br>

Use <strong> Linked Lists </strong> for write-heavy apps where size is unknown (Undo/Redo, Music Playlist).

</p>

    </div>

    </div>

    </div>

        

            <div class="space-y-8 mt-12">

                <div class="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">

                    <h3 class="text-2xl font-bold text-white mb-6">Concept Deep Dive</h3>

                    <div class="space-y-6">

                        <div>

                            <h4 class="text-lg font-bold text-purple-400 mb-2">Intersection of Two Linked Lists</h4>

                            <p class="text-gray-400 leading-relaxed">

                                <strong>Trick:</strong> Concatenate logic essentially. Pointer A traverses List A then List B. Pointer B traverses List B then List A.

                                They will meet exactly at the intersection point or at NULL (if no intersection) in the second pass.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        

            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl my-6">

                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">

                    <span class="text-sm font-mono text-gray-400 font-bold tracking-tight">intersection.cpp</span>

                </div>

                <div class="p-6 overflow-x-auto">

                 <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">Node*</span> <span class="text-blue-400">getIntersectionNode</span>(Node* headA, Node* headB) {

    <span class="text-purple-400">if</span> (!headA || !headB) <span class="text-purple-400">return nullptr</span>;

    Node *a = headA, *b = headB;

    <span class="text-purple-400">while</span> (a != b) {

        a = (a) ? a-&gt;next : headB;

        b = (b) ? b-&gt;next : headA;

    }

    <span class="text-purple-400">return</span> a;

}</code></pre>

                </div>

            </div>

        `,

                        questions: [

                            {

                                id: "ll-11-q1",

                                user: "StudentA",

                                avatar: "NJ",

                                time: "pinned",

                                content: "How does complexity apply to 'Bonus: Arrays vs Linked Lists'?",

                                likes: 50,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "In Bonus: Arrays vs Linked Lists, complexity is central because it simplifies the decision process."

                                }

                            },

                            {

                                id: "ll-11-q2",

                                user: "TimeLord",

                                avatar: "DS",

                                time: "3 hours ago",

                                content: "What is the time complexity drawback here?",

                                likes: 45,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Usually involves a trade-off. To optimize speed, we often sacrifice space."

                                }

                            },

                            {

                                id: "ll-11-q3",

                                user: "AnalogyBot",

                                avatar: "EX",

                                time: "4 hours ago",

                                content: "Real-world analogy for Bonus: Arrays vs Linked Lists?",

                                likes: 40,

                                replies: 1,

                                answer: {

                                    user: "Nikhil Jangid",

                                    avatar: "NJ",

                                    time: "Instructor",

                                    content: "Think of it like organizing a library or planning a route map. Algorithm is everywhere."

                                }

                            }],

                    }

                ]

            },
            {
                title: "5. Stacks & Queues",
                lessons: [
                    {
                        id: "sq-1",
                        title: "Stack: LIFO Mechanism",
                        duration: "45 min",
                        type: 'video',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">The Stack Data Structure</h2>
                            <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">
                                <h3 class="text-2xl font-bold text-white mb-4">LIFO (Last In First Out)</h3>
                                <p class="text-gray-400 mb-6">Think of a stack of plates. You can only add or remove from the top. Simple, yet powerful.</p>
                                <div class="grid grid-cols-2 gap-4 text-center">
                                    <div class="p-4 bg-gray-800 rounded-xl border border-gray-700">
                                        <div class="text-xl font-mono text-purple-400">push(x)</div>
                                        <div class="text-sm text-gray-500">Insert at top</div>
                                    </div>
                                    <div class="p-4 bg-gray-800 rounded-xl border border-gray-700">
                                        <div class="text-xl font-mono text-red-400">pop()</div>
                                        <div class="text-sm text-gray-500">Remove from top</div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">
                                    <span class="text-sm font-mono text-gray-400 font-bold">stack_impl.cpp</span>
                                </div>
                                <div class="p-6 overflow-x-auto">
                                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">class</span> Stack {
    <span class="text-purple-400">int</span> arr[100];
    <span class="text-purple-400">int</span> top;
<span class="text-purple-400">public</span>:
    Stack() { top = -1; }
    <span class="text-purple-400">void</span> push(<span class="text-purple-400">int</span> x) {
        <span class="text-purple-400">if</span> (top >= 99) <span class="text-purple-400">return</span>;
        arr[++top] = x;
    }
    <span class="text-purple-400">int</span> pop() {
        <span class="text-purple-400">if</span> (top < 0) <span class="text-purple-400">return</span> -1;
        <span class="text-purple-400">return</span> arr[top--];
    }
};</code></pre>
                                </div>
                            </div>
                        </div>`
                    },
                    {
                        id: "sq-2",
                        title: "Queue: FIFO Mechanism",
                        duration: "40 min",
                        type: 'video',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">The Queue Data Structure</h2>
                            <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">
                                <h3 class="text-2xl font-bold text-white mb-4">FIFO (First In First Out)</h3>
                                <p class="text-gray-400 mb-6">Like a ticket line. First person joins at the rear, first person leaves from the front.</p>
                                <div class="grid grid-cols-2 gap-4 text-center">
                                    <div class="p-4 bg-gray-800 rounded-xl border border-gray-700">
                                        <div class="text-xl font-mono text-blue-400">enqueue(x)</div>
                                        <div class="text-sm text-gray-500">Add to rear</div>
                                    </div>
                                    <div class="p-4 bg-gray-800 rounded-xl border border-gray-700">
                                        <div class="text-xl font-mono text-orange-400">dequeue()</div>
                                        <div class="text-sm text-gray-500">Remove from front</div>
                                    </div>
                                </div>
                            </div>
                        </div>`
                    },
                    {
                        id: "sq-3",
                        title: "Monotonic Stack (Next Greater Element)",
                        duration: "55 min",
                        type: 'article',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">Monotonic Stack</h2>
                            <p class="text-xl text-gray-400">A stack where elements are always sorted (increasing or decreasing).</p>
                            
                            <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">
                                <h3 class="text-2xl font-bold text-white mb-4">Problem: Next Greater Element</h3>
                                <p class="text-gray-400 mb-4">For each element, find the first greater element to its right.</p>
                                <div class="p-4 bg-purple-900/20 border border-purple-500/30 rounded-xl">
                                    <span class="text-purple-300 text-sm font-mono">Input: [2, 1, 5, 6, 2, 3]</span><br>
                                    <span class="text-white text-sm font-mono">Output: [5, 5, 6, -1, 3, -1]</span>
                                </div>
                            </div>

                            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">
                                    <span class="text-sm font-mono text-gray-400 font-bold">monotonic.cpp</span>
                                </div>
                                <div class="p-6 overflow-x-auto">
                                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">vector&lt;int&gt;</span> nextGreaterelements(<span class="text-purple-400">vector&lt;int&gt;</span>& nums) {
    <span class="text-purple-400">stack&lt;int&gt;</span> st;
    <span class="text-purple-400">vector&lt;int&gt;</span> res(nums.size());
    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = nums.size() - 1; i >= 0; i--) {
        <span class="text-purple-400">while</span> (!st.empty() && st.top() <= nums[i]) {
            st.pop();
        }
        res[i] = st.empty() ? -1 : st.top();
        st.push(nums[i]);
    }
    <span class="text-purple-400">return</span> res;
}</code></pre>
                                </div>
                            </div>
                        </div>`
                    }
                ]
            },
            {
                title: "6. Recursion & Backtracking",
                lessons: [
                    {
                        id: "rec-1",
                        title: "Thinking Recursively",
                        duration: "50 min",
                        type: 'video',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">The Art of Recursion</h2>
                            <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">
                                <h3 class="text-2xl font-bold text-white mb-4">Trust the Function</h3>
                                <p class="text-gray-400 mb-6">Recursion is not about tracing the stack. It's about mathematical induction.
                                    1. Base Case (Stop)
                                    2. Recursive Step (Trust)
                                </p>
                            </div>
                        </div>`
                    },
                    {
                        id: "rec-2",
                        title: "Backtracking: N-Queens",
                        duration: "65 min",
                        type: 'article',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">Backtracking</h2>
                            <p class="text-xl text-gray-400">Smart Recursion. If a path fails, go back and try another.</p>
                            
                            <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">
                                <h3 class="text-2xl font-bold text-white mb-4">N-Queens Problem</h3>
                                <p class="text-gray-400">Place N queens on an NxN chessboard so no two queens attack each other.</p>
                            </div>

                             <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">
                                    <span class="text-sm font-mono text-gray-400 font-bold">n_queens.cpp</span>
                                </div>
                                <div class="p-6 overflow-x-auto">
                                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">void</span> solve(<span class="text-purple-400">int</span> col, <span class="text-purple-400">vector&lt;string&gt;</span>& board) {
    <span class="text-purple-400">if</span> (col == n) {
        res.push_back(board);
        <span class="text-purple-400">return</span>;
    }
    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> row = 0; row < n; row++) {
        <span class="text-purple-400">if</span> (isSafe(row, col, board)) {
            board[row][col] = 'Q';
            solve(col + 1, board);
            board[row][col] = '.'; <span class="text-gray-500">// Backtrack</span>
        }
    }
}</code></pre>
                                </div>
                            </div>
                        </div>`
                    }
                ]
            },
            {
                title: "7. Trees (BST & Heap)",
                lessons: [
                    {
                        id: "tree-1",
                        title: "Binary Tree Traversals (BFS & DFS)",
                        duration: "65 min",
                        type: 'video',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">Tree Traversals</h2>
                            <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">
                                <h3 class="text-2xl font-bold text-white mb-4">Navigating Hierarchy</h3>
                                <p class="text-gray-400 mb-6">Unlike linear data structures, trees can be traversed in multiple ways.
                                    - BFS (Level Order): Breadth First
                                    - DFS (Pre, In, Post Order): Depth First
                                </p>
                            </div>

                             <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">
                                    <span class="text-sm font-mono text-gray-400 font-bold">inorder.cpp</span>
                                </div>
                                <div class="p-6 overflow-x-auto">
                                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">void</span> inorder(Node* root) {
    <span class="text-purple-400">if</span> (!root) <span class="text-purple-400">return</span>;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}</code></pre>
                                </div>
                            </div>
                        </div>`
                    },
                    {
                        id: "tree-2",
                        title: "Binary Search Tree (BST)",
                        duration: "50 min",
                        type: 'video',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">Binary Search Tree</h2>
                            <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">
                                <h3 class="text-2xl font-bold text-white mb-4">Ordered Hierarchy</h3>
                                <p class="text-gray-400 mb-6">Left < Root < Right. This property enables O(log n) search, insertion, and deletion (if balanced).</p>
                            </div>
                        </div>`
                    },
                    {
                        id: "tree-3",
                        title: "Intro to Heaps (Priority Queue)",
                        duration: "45 min",
                        type: 'article',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">Heaps</h2>
                            <p class="text-xl text-gray-400">A special tree-based structure. Max-Heap: Root is greatest. Min-Heap: Root is smallest.</p>
                            <div class="p-6 bg-blue-900/20 border border-blue-500/30 rounded-xl mt-4">
                                <p class="text-blue-300 mb-2"><strong>Use Case:</strong> K-th Largest Element, Median Finder</p>
                            </div>
                        </div>`
                    }
                ]
            },
            {
                title: "8. Graphs",
                lessons: [
                    {
                        id: "graph-1",
                        title: "Graph Representation & Traversal",
                        duration: "70 min",
                        type: 'video',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">Graph Theory</h2>
                            <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">
                                <h3 class="text-2xl font-bold text-white mb-4">The Web of Connections</h3>
                                <p class="text-gray-400 mb-6">Nodes connected by Edges. Can be Directed/Undirected, Weighted/Unweighted.</p>
                                <div class="grid grid-cols-2 gap-4 text-center">
                                    <div class="p-4 bg-gray-800 rounded-xl border border-gray-700">
                                        <div class="text-xl font-mono text-purple-400">Adjacency Matrix</div>
                                        <div class="text-sm text-gray-500">O(V²) space. Fast lookup.</div>
                                    </div>
                                    <div class="p-4 bg-gray-800 rounded-xl border border-gray-700">
                                        <div class="text-xl font-mono text-green-400">Adjacency List</div>
                                        <div class="text-sm text-gray-500">O(V+E) space. Standard.</div>
                                    </div>
                                </div>
                            </div>
                        </div>`
                    },
                    {
                        id: "graph-2",
                        title: "BFS vs DFS Problems",
                        duration: "60 min",
                        type: 'article',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">BFS vs DFS</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="p-6 bg-gray-900 rounded-2xl border border-gray-700">
                                    <h3 class="text-xl font-bold text-purple-400 mb-2">BFS (Level Order)</h3>
                                    <ul class="list-disc list-inside text-gray-400 space-y-2">
                                        <li>Shortest Path in Unweighted Graph</li>
                                        <li>Connected Components</li>
                                        <li>Uses Queue</li>
                                    </ul>
                                </div>
                                <div class="p-6 bg-gray-900 rounded-2xl border border-gray-700">
                                    <h3 class="text-xl font-bold text-blue-400 mb-2">DFS (Depth First)</h3>
                                    <ul class="list-disc list-inside text-gray-400 space-y-2">
                                        <li>Cycle Detection</li>
                                        <li>Path Finding (Maze)</li>
                                        <li>Topological Sort</li>
                                        <li>Uses Recursion/Stack</li>
                                    </ul>
                                </div>
                            </div>
                        </div>`
                    },
                    {
                        id: "graph-3",
                        title: "Dijkstra's Algorithm",
                        duration: "80 min",
                        type: 'video',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">Dijkstra's Algorithm</h2>
                            <p class="text-xl text-gray-400">Finding the shortest path in a weighted graph (non-negative weights).</p>
                             <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl mt-8">
                                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">
                                    <span class="text-sm font-mono text-gray-400 font-bold">dijkstra.cpp</span>
                                </div>
                                <div class="p-6 overflow-x-auto">
                                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-purple-400">priority_queue</span>&lt;pii, vector&lt;pii&gt;, greater&lt;pii&gt;&gt; pq;
pq.push({0, source});
dist[source] = 0;

<span class="text-purple-400">while</span> (!pq.empty()) {
    <span class="text-purple-400">int</span> u = pq.top().second;
    pq.pop();
    
    <span class="text-purple-400">for</span> (<span class="text-purple-400">auto</span>& edge : adj[u]) {
        <span class="text-purple-400">int</span> v = edge.first;
        <span class="text-purple-400">int</span> weight = edge.second;
        <span class="text-purple-400">if</span> (dist[u] + weight < dist[v]) {
            dist[v] = dist[u] + weight;
            pq.push({dist[v], v});
        }
    }
}</code></pre>
                                </div>
                            </div>
                        </div>`
                    }
                ]
            },
            {
                title: "9. Dynamic Programming",
                lessons: [
                    {
                        id: "dp-1",
                        title: "Introduction to DP",
                        duration: "90 min",
                        type: 'video',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">Dynamic Programming</h2>
                            <div class="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-8">
                                <h3 class="text-2xl font-bold text-white mb-4">Optimization Over Recursion</h3>
                                <p class="text-gray-400 mb-6">"Those who cannot remember the past are condemned to repeat it." <br>
                                DP = Recursion + Memoization (Caching) or Table Building (Iterative).</p>
                            </div>
                        </div>`
                    },
                    {
                        id: "dp-2",
                        title: "1D DP: Climbing Stairs",
                        duration: "45 min",
                        type: 'article',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">Climbing Stairs</h2>
                            <p class="text-xl text-gray-400">You can climb 1 or 2 steps. How many ways to reach top?</p>
                            <p class="text-gray-400">It's Fibonacci! f(n) = f(n-1) + f(n-2).</p>
                        </div>`
                    },
                    {
                        id: "dp-3",
                        title: "2D DP: Grid Unique Paths",
                        duration: "60 min",
                        type: 'article',
                        content: `
                        <div class="space-y-8 text-gray-300 font-light">
                            <h2 class="text-4xl font-bold text-white mb-6">Grid Paths</h2>
                            <p class="text-xl text-gray-400">Move only Down or Right. How many ways to reach bottom-right?</p>
                             <div class="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl mt-8">
                                <div class="bg-[#252525] px-4 py-3 border-b border-white/5 flex items-center gap-4">
                                    <span class="text-sm font-mono text-gray-400 font-bold">dp.cpp</span>
                                </div>
                                <div class="p-6 overflow-x-auto">
                                    <pre class="font-mono text-sm leading-relaxed text-gray-300"><code>dp[i][j] = dp[i-1][j] + dp[i][j-1];</code></pre>
                                </div>
                            </div>
                        </div>`
                    }
                ]
            },
        ]
    },







    cpp: cppCourse,

    java: {
        title: "Java 21 Masterclass: From Zero to Backend Architect",
        instructor: "Nikhil Jangid",
        description: "Master Java 21, Spring Boot 3, Microservices, and Cloud Native Development.",
        icon: Coffee,
        color: "text-orange-500",
        modules: javaCourseData
    },

    python: pythonCourse
};