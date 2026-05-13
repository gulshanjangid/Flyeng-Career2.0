
module_3_lessons = [
    {
        "id": "cpp-3-1",
        "title": "3.1 Stack vs Heap: Theoretical Foundations",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-indigo-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">Memory Models & Layouts</h1>
        <div class="space-y-6 text-lg text-slate-400">
            <p>
                <strong>The Process Address Space:</strong> When a program runs, the OS allocates a virtual address space. This is divided into segments:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Text Segment:</strong> Read-only executable code instructions.</li>
                <li><strong>Data/BSS:</strong> Global and static variables.</li>
                <li><strong>Stack:</strong> Local variables, function return addresses (Grows Downwards).</li>
                <li><strong>Heap:</strong> Dynamic memory, managed by allocators (Grows Upwards).</li>
            </ul>
        </div>
    </div>

    <!-- STACK VS HEAP VISUAL -->
    <div class="grid md:grid-cols-2 gap-12">
        <!-- STACK -->
        <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-green-500/30 relative overflow-hidden">
            <h3 class="text-2xl font-bold text-green-500 mb-4">The Stack (LIFO)</h3>
            <p class="text-xs text-gray-500 mb-4 w-full"><strong>Mechanism:</strong> Managed by the CPU's Stack Pointer (SP) register. Allocation is a simple subtraction (SP -= size). Deallocation is addition (SP += size).</p>
            
            <div class="space-y-2 font-mono text-xs z-10 relative">
                <div class="bg-gray-800 p-2 rounded text-center border border-gray-600">
                    <span class="text-purple-400">0x7FFF0008</span>: Return Addr
                </div>
                <div class="bg-gray-800 p-2 rounded text-center border border-gray-600">
                    <span class="text-green-400">0x7FFF0004</span>: int x = 10
                </div>
                <div class="bg-gray-800 p-2 rounded text-center border border-gray-600">
                    <span class="text-green-400">0x7FFF0000</span>: int y = 20
                </div>
                <div class="p-2 text-center text-green-400 animate-pulse">
                    ⬆ Stack Pointer (SP) ⬇
                </div>
            </div>
            <div class="mt-6 text-sm text-gray-400">
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Cache Locality:</strong> Excellent (Contiguous).</li>
                    <li><strong>Thread Safety:</strong> Implicit (Thread-Local).</li>
                    <li><strong>Limit:</strong> ~8MB (Stack Overflow if exceeded).</li>
                </ul>
            </div>
            <div class="absolute -right-10 -bottom-10 text-9xl text-green-900/20 font-black select-none">S</div>
        </div>

        <!-- HEAP -->
        <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-red-500/30 relative overflow-hidden">
            <h3 class="text-2xl font-bold text-red-500 mb-4">The Heap (Free Store)</h3>
            <p class="text-xs text-gray-500 mb-4"><strong>Mechanism:</strong> Managed by the Runtime (malloc/free). Requires navigating a Linked List of free blocks (Free List) to find space.</p>
            
            <div class="grid grid-cols-4 gap-1 font-mono text-[10px] z-10 relative opacity-70">
                <div class="bg-gray-700 h-6">0x1000</div>
                <div class="bg-red-600 h-6 text-white text-center pt-1">Obj</div>
                <div class="bg-gray-700 h-6">0x1008</div>
                <div class="bg-gray-700 h-6"></div>
                <div class="bg-red-600 h-6 text-white text-center pt-1">Obj</div>
                <div class="bg-red-600 h-6 text-white text-center pt-1">Obj</div>
                <div class="bg-gray-700 h-6"></div>
                <div class="bg-red-600 h-6 text-white text-center pt-1">Obj</div>
            </div>
            <div class="mt-8 text-sm text-gray-400">
                 <ul class="list-disc list-inside space-y-2">
                    <li><strong>fragmentation:</strong> Holes appear over time.</li>
                    <li><strong>Cost:</strong> Expensive (Syscalls like <code>brk</code> or <code>mmap</code>).</li>
                    <li><strong>Thread Safety:</strong> Requires Locks (Mutex).</li>
                </ul>
            </div>
            <div class="absolute -right-10 -bottom-10 text-9xl text-red-900/20 font-black select-none">H</div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-3-2",
        "title": "3.2 Review: Pointers & References",
        "duration": "50 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Indirection Essentials</h2>
        <p class="text-slate-400">Formal definitions and memory mechanics.</p>
    </div>

    <!-- COMPARISON TABLE -->
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <table class="w-full text-left border-collapse font-mono text-sm">
            <thead>
                <tr class="bg-gray-800 text-white">
                    <th class="p-4 border border-gray-700">Property</th>
                    <th class="p-4 border border-gray-700 text-blue-400">Pointer (T*)</th>
                    <th class="p-4 border border-gray-700 text-purple-400">Reference (T&)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-4 border border-gray-700">Definition</td>
                    <td class="p-4 border border-gray-700">A variable holding a memory address.</td>
                    <td class="p-4 border border-gray-700">An alias for an existing object.</td>
                </tr>
                <tr>
                    <td class="p-4 border border-gray-700">Nullability</td>
                    <td class="p-4 border border-gray-700">Can be <code>nullptr</code>.</td>
                    <td class="p-4 border border-gray-700 text-green-400">Must be valid upon initialization.</td>
                </tr>
                <tr>
                    <td class="p-4 border border-gray-700">Arithmetic</td>
                    <td class="p-4 border border-gray-700">Supported (ptr + 1 moves sizeof(T)).</td>
                    <td class="p-4 border border-gray-700 text-red-400">Not Supported.</td>
                </tr>
                <tr>
                    <td class="p-4 border border-gray-700">Reassignment</td>
                    <td class="p-4 border border-gray-700">Can point to new targets.</td>
                    <td class="p-4 border border-gray-700">Cannot be rebound.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- POINTER ARITHMETIC -->
    <div class="bg-black/50 p-8 rounded-xl border border-white/5">
         <h4 class="text-blue-400 font-bold mb-4">Deep Dive: Pointer Arithmetic</h4>
         <div class="font-mono text-xs text-slate-300">
             <p>If <code>int* p = 0x1000</code> and <code>sizeof(int) == 4</code>:</p>
             <ul class="list-disc ml-6 mt-2 space-y-1">
                 <li><code>p + 1</code> is NOT <code>0x1001</code>.</li>
                 <li><code>p + 1</code> IS <code>0x1004</code> (Base + 1 * sizeof(int)).</li>
             </ul>
         </div>
         <div class="mt-4 flex gap-2">
             <div class="bg-blue-900 border border-blue-500 w-24 h-8 flex items-center justify-center text-white text-xs">0x1000</div>
             <div class="bg-blue-900 border border-blue-500 w-24 h-8 flex items-center justify-center text-white text-xs">0x1004</div>
             <div class="bg-blue-900 border border-blue-500 w-24 h-8 flex items-center justify-center text-white text-xs">0x1008</div>
         </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-3-3",
        "title": "3.3 C-Style Arrays & The Danger Zone",
        "duration": "55 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-red-900/10 border border-red-500/30 p-8 rounded-2xl">
        <h2 class="text-2xl font-bold text-red-500 mb-4">The Buffer Overflow</h2>
        <p class="text-slate-300 text-sm">
            C-style arrays decay into raw pointers. They do not know their own size. This is the #1 cause of security vulnerabilities in history.
        </p>
        <div class="bg-black p-4 mt-4 rounded font-mono text-xs">
            <span class="text-blue-300">int</span> arr[3] = {1, 2, 3};<br>
            arr[100] = 999; <span class="text-red-500">// CRIMINALLY DANGEROUS</span>
        </div>
        <p class="text-xs text-gray-500 mt-2">
            The compiler allows this! You are overwriting other secrets in RAM.
        </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-2">Decay to Pointer</h3>
            <p class="text-xs text-gray-400 mb-4">When passed to a function, an array loses its safety.</p>
            <pre class="bg-black/50 p-4 rounded text-xs text-gray-300">
void func(int arr[]) {
    // sizeof(arr) is NOT array size!
    // It is sizeof(int*) = 8 bytes.
}</pre>
        </div>
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h3 class="text-green-400 font-bold mb-2">Modern Fix: std::array</h3>
            <p class="text-xs text-gray-400 mb-4">Zero-overhead wrapper that knows its size.</p>
            <pre class="bg-black/50 p-4 rounded text-xs text-gray-300">
#include &lt;array&gt;
void func(std::array&lt;int, 3&gt;& arr) {
    // Safe. Size is baked into type.
}</pre>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-3-4",
        "title": "3.4 Const Correctness: The Engineer's Contract",
        "duration": "50 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Read-Only Safety</h2>
        <p class="text-slate-400"><code>const</code> is not just for variables. It is for <strong>API Design</strong>.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 font-mono text-xs">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-blue-300 font-bold mb-2">const Data</h3>
             <code class="block bg-black p-2 rounded mb-2">const int x = 5;</code>
             <p class="text-gray-500">I promise not to change x.</p>
             <p class="text-red-400 mt-2">x = 6; // Error</p>
        </div>
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-purple-300 font-bold mb-2">const Pointer</h3>
             <code class="block bg-black p-2 rounded mb-2">const int* p;</code>
             <p class="text-gray-500">I promise not to change <strong>what I point to</strong>.</p>
             <p class="text-red-400 mt-2">*p = 6; // Error</p>
        </div>
         <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-green-300 font-bold mb-2">const Method</h3>
             <code class="block bg-black p-2 rounded mb-2">int get() const;</code>
             <p class="text-gray-500">I promise this function won't change <strong>the object</strong>.</p>
        </div>
    </div>

    <div class="bg-blue-900/10 p-6 rounded-xl border-l-4 border-blue-500">
        <p class="text-sm text-blue-200">
            <strong>Pro Tip:</strong> Read declarations from Right-to-Left.
            <br><code>int const * p</code> -> "p is a pointer to an integer that is constant."
        </p>
    </div>
</div>
"""
    },
    {
        "id": "cpp-3-5",
        "title": "3.5 Dynamic Memory (new/delete) vs RAII",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">The Old World vs The New World</h2>

    <div class="grid md:grid-cols-2 gap-8 text-sm">
        <!-- MANUAL -->
        <div class="bg-[#111] p-6 rounded-xl border border-red-500/20">
            <h3 class="text-red-400 font-bold mb-4">Manual Management (C++98)</h3>
            <pre class="bg-black/50 p-4 rounded text-gray-400 font-mono text-xs">
void oldWay() {
    <span class="text-blue-300">int</span>* p = <span class="text-purple-400">new</span> int(5);
    
    <span class="text-yellow-500">if (error) return; // MEMORY LEAK!</span>
    
    <span class="text-purple-400">delete</span> p;
}</pre>
            <p class="mt-4 text-xs text-slate-500">
                You must remember to delete on EVERY exit path. This is impossible in large systems.
            </p>
        </div>

        <!-- RAII -->
        <div class="bg-[#111] p-6 rounded-xl border border-green-500/20">
             <h3 class="text-green-400 font-bold mb-4">RAII (Modern C++)</h3>
             <pre class="bg-black/50 p-4 rounded text-gray-400 font-mono text-xs">
void newWay() {
    <span class="text-blue-300">std::unique_ptr</span>&lt;int&gt; p = 
         <span class="text-purple-400">std::make_unique</span>&lt;int&gt;(5);
    
    <span class="text-green-400">if (error) return; // SAFE.</span>
    
    <span class="text-gray-600">// Destructor called auto-magically.</span>
}</pre>
             <p class="mt-4 text-xs text-slate-500">
                The resource is tied to the scope. When the scope ends (for any reason), cleanup happens.
            </p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-3-6",
        "title": "3.6 Unique Ownership: std::unique_ptr",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
     <!-- UNIQUE_PTR VISUAL -->
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 text-center">
        <h3 class="text-xl font-bold text-white mb-8">std::unique_ptr&lt;T&gt;</h3>
        
        <div class="flex justify-center items-center gap-12">
            <!-- SCOPE 1 -->
            <div class="bg-gray-800 p-6 rounded-xl border border-gray-600 relative">
                <div class="text-xs text-gray-500 absolute top-2 left-2">Scope A</div>
                <div class="bg-blue-600 w-32 h-12 flex items-center justify-center text-white font-bold rounded shadow-[0_0_20px_blue]">
                    Ptr
                </div>
                <div class="h-8 w-0.5 bg-gray-500 mx-auto my-2"></div>
                <div class="bg-green-900/50 w-32 h-12 flex items-center justify-center text-green-300 font-mono rounded border border-green-500">
                    0xHeapData
                </div>
            </div>

            <div class="text-3xl text-gray-600">➝</div>

            <!-- SCOPE 2 (MOVE) -->
            <div class="bg-gray-800 p-6 rounded-xl border border-gray-600 relative">
                <div class="text-xs text-gray-500 absolute top-2 left-2">Scope B</div>
                 <div class="bg-blue-600 w-32 h-12 flex items-center justify-center text-white font-bold rounded shadow-[0_0_20px_blue]">
                    Ptr (Moved)
                </div>
                <div class="h-8 w-0.5 bg-gray-500 mx-auto my-2"></div>
                <div class="bg-green-900/50 w-32 h-12 flex items-center justify-center text-green-300 font-mono rounded border border-green-500">
                    0xHeapData
                </div>
            </div>
        </div>

        <div class="mt-8 bg-red-900/20 p-4 rounded text-xs text-red-200 border border-red-500/50 inline-block">
            <strong>Copy Semantics Deleted:</strong><br>
            <code>unique_ptr(const unique_ptr&) = delete;</code>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-3-7",
        "title": "3.7 Shared Ownership: std::shared_ptr",
        "duration": "55 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Reference Counting Architecture</h2>
        <p class="text-slate-400">Understanding the <strong>Control Block</strong>.</p>
    </div>

    <!-- SHARED_PTR VISUAL -->
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <div class="flex flex-col items-center gap-8">
            <!-- CONTROL BLOCK -->
            <div class="bg-purple-900/20 p-6 rounded-xl border border-purple-500 text-center w-80 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                <h4 class="text-purple-300 font-bold mb-4 uppercase tracking-widest text-xs">Control Block (Heap)</h4>
                
                <div class="grid grid-cols-2 gap-4 text-left font-mono text-xs">
                     <div class="bg-black/50 p-2 rounded">
                         <div class="text-gray-500">strong_ref</div>
                         <div class="text-white text-xl font-bold">3</div>
                     </div>
                     <div class="bg-black/50 p-2 rounded">
                         <div class="text-gray-500">weak_ref</div>
                         <div class="text-white text-xl font-bold">0</div>
                     </div>
                     <div class="col-span-2 bg-black/50 p-2 rounded">
                         <div class="text-gray-500">deleter</div>
                         <div class="text-blue-300">default_delete</div>
                     </div>
                </div>
            </div>

            <!-- POINTERS -->
            <div class="flex gap-4">
                <div class="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white/20">P1</div>
                <div class="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white/20">P2</div>
                 <div class="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white/20">P3</div>
            </div>
            
            <div class="text-xs text-gray-500">
                All 3 pointers simulate ownership of the same resource.
            </div>
        </div>

        <div class="mt-8 p-4 bg-yellow-900/10 border-l-4 border-yellow-500 text-xs text-yellow-200">
            <strong>Critical Performance Note:</strong><br>
            Incrementing the reference count is <strong>Atomic</strong> (Thread-Safe). This introduces a small overhead compared to raw pointers or <code>unique_ptr</code>.
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-3-8",
        "title": "3.8 Lab: Build 'SmartPtr' (Academic)",
        "duration": "2 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-br from-green-900 to-emerald-900 p-8 rounded-3xl text-center shadow-2xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: Implement SmartPtr</h1>
        <p class="text-emerald-200">Master the Rule of Five and Move Semantics.</p>
    </div>

    <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Project Specification</h3>
        <p class="text-slate-400 text-sm">
            You will implement a simplified <code>std::unique_ptr</code>. This requires understanding how to manage ownership transfer and prevent resource leaks.
        </p>

        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
            <h4 class="text-green-400 font-bold mb-4">Required Features</h4>
            <ul class="space-y-4 text-slate-300">
                <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">1. Template T</span>
                    <span>Class must accept any type: <code>SmartPtr&lt;int&gt;</code>, <code>SmartPtr&lt;Player&gt;</code>.</span>
                </li>
                <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">2. Copy Construction (Delete!)</span>
                    <span><code>SmartPtr(const SmartPtr&) = delete;</code>.</span>
                </li>
                 <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">3. Move Semantics</span>
                    <span>Implement Move Constructor and Move Assignment Operator.</span>
                </li>
            </ul>
        </div>
        
        <div class="bg-black/50 p-6 rounded-xl border border-green-500/20 mt-6 overflow-x-auto">
             <h4 class="text-green-400 font-bold mb-2">Starter Code</h4>
             <pre class="text-xs text-gray-400">
template &lt;typename T&gt;
class UniquePtr {
private:
    T* ptr;
public:
    explicit UniquePtr(T* p = nullptr) : ptr(p) {}
    
    // Destructor
    ~UniquePtr() { delete ptr; }

    // 1. DISABLE COPY
    UniquePtr(const UniquePtr&) = delete;
    UniquePtr& operator=(const UniquePtr&) = delete;

    // 2. ENABLE MOVE (Transfer Ownership)
    UniquePtr(UniquePtr&& other) noexcept : ptr(other.ptr) {
        other.ptr = nullptr;
    }
};
             </pre>
        </div>
    </div>
</div>
"""
    }
]
