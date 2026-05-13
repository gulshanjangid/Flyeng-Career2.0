
module_8_lessons = [
    {
        "id": "cpp-8-1",
        "title": "8.1 Inheritance Hierarchy & Access",
        "duration": "50 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#222] p-8 rounded-3xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-4">The IS-A Relationship</h1>
        <p class="text-slate-400">
            Inheritance allows a class to derive features from a base class.
        </p>
        <div class="mt-4 grid md:grid-cols-3 gap-4 text-center font-mono text-xs">
            <div class="bg-green-900/20 p-4 rounded border border-green-500/20">
                <span class="text-green-400">public:</span>
                <p class="text-gray-500">Accessible by everyone.</p>
            </div>
            <div class="bg-yellow-900/20 p-4 rounded border border-yellow-500/20">
                <span class="text-yellow-400">protected:</span>
                <p class="text-gray-500">Accessible by children.</p>
            </div>
             <div class="bg-red-900/20 p-4 rounded border border-red-500/20">
                <span class="text-red-400">private:</span>
                <p class="text-gray-500">Accessible by NO ONE (except self).</p>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-8-2",
        "title": "8.2 Virtual Functions & Runtime Polymorphism",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">The Dynamic Dispatch</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-white font-bold mb-4">Without Virtual</h3>
             <pre class="bg-black/50 p-4 rounded text-xs text-gray-400">
Base* b = new Derived();
b->speak(); // Calls Base::speak()!</pre>
            <p class="text-xs text-red-400 mt-2">Static Binding (Compile Time).</p>
        </div>
        
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-white font-bold mb-4">With Virtual</h3>
             <pre class="bg-black/50 p-4 rounded text-xs text-gray-400">
class Base {
  virtual void speak();
};
b->speak(); // Calls Derived::speak()!</pre>
             <p class="text-xs text-green-400 mt-2">Dynamic Binding (Runtime).</p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-8-3",
        "title": "8.3 The V-Table: Under the Hood",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-pink-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">The Hidden Pointer</h1>
        <p class="text-lg text-slate-400">
            How does the computer know which function to call? It adds a secret pointer to every object: <strong>vptr</strong>.
        </p>
    </div>

    <!-- VTABLE VISUAL -->
    <div class="flex flex-col md:flex-row gap-12 justify-center items-start mt-8">
        <!-- OBJECT MEMORY -->
        <div class="bg-gray-800 p-6 rounded-xl border border-gray-600 w-64">
             <h4 class="text-gray-400 font-bold mb-4 text-xs text-center">Object (Heap)</h4>
             <div class="bg-pink-900 border border-pink-500 p-2 text-center text-pink-300 font-mono text-xs mb-1">
                 vptr -> 0x5000
             </div>
             <div class="bg-gray-700 p-2 text-center text-gray-400 font-mono text-xs">
                 int data = 42;
             </div>
        </div>

        <!-- VTABLE -->
        <div class="bg-gray-800 p-6 rounded-xl border border-gray-600 w-80">
             <h4 class="text-gray-400 font-bold mb-4 text-xs text-center">V-Table (Static Memory)</h4>
             <div class="font-mono text-xs">
                 <div class="flex">
                    <div class="p-2 border border-gray-600 text-gray-500 w-24">0x5000</div>
                    <div class="p-2 border border-gray-600 text-green-400 flex-1">Shape::draw()</div>
                 </div>
                 <div class="flex">
                    <div class="p-2 border border-gray-600 text-gray-500 w-24">0x5008</div>
                    <div class="p-2 border border-gray-600 text-green-400 flex-1">Shape::area()</div>
                 </div>
             </div>
        </div>
    </div>
    
    <div class="text-center text-xs text-slate-500 mt-4">
        Calling a virtual function requires: 1. Fetch vptr. 2. Look up function address. 3. Jump.
        This is slightly slower than a normal call (Direct Jump).
    </div>
</div>
"""
    },
    {
        "id": "cpp-8-4",
        "title": "8.4 Abstract Classes & Interfaces",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-4">Pure Virtual Functions</h3>
        <p class="text-slate-400 text-sm mb-6">
            If a class has at least one pure virtual function, it is <strong>Abstract</strong>. You cannot instantiate it.
        </p>
        
        <pre class="bg-black/50 p-6 rounded-xl text-xs font-mono text-slate-300">
class IShape {
public:
    <span class="text-pink-400">virtual void draw() = 0;</span> // Must be implemented by children
    
    virtual ~IShape() {} // Always virtual destructor!
};</pre>
        
        <div class="mt-4 text-xs text-gray-500">
            This behaves like an <code>interface</code> in Java or C#.
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-8-5",
        "title": "8.5 Virtual Destructors (Critical)",
        "duration": "40 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-red-900/10 border border-red-500/30 p-8 rounded-2xl">
        <h2 class="text-2xl font-bold text-red-500 mb-4">The Memory Leak Trap</h2>
        <p class="text-slate-300 text-sm">
            If you delete a Derived object through a Base pointer, and the Base destructor is NOT virtual... <strong>The Derived destructor never runs.</strong>
        </p>
        <div class="bg-black p-4 mt-4 rounded font-mono text-xs opacity-70">
            Base* b = new Derived();<br>
            delete b;<br>
            <span class="text-red-500">// ~Base() called.</span><br>
            <span class="text-red-500">// ~Derived() NOT called! Memory Leak!</span>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-8-6",
        "title": "8.6 Casting: dynamic_cast & static_cast",
        "duration": "50 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#111] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-2">static_cast</h3>
             <ul class="text-xs text-gray-400 list-disc ml-4">
                 <li>Compile-time check.</li>
                 <li>Fast (0 overhead).</li>
                 <li>Unsafe for Downcasting (Base -> Derived) if you aren't 100% sure.</li>
             </ul>
        </div>
        <div class="bg-[#111] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-2">dynamic_cast</h3>
             <ul class="text-xs text-gray-400 list-disc ml-4">
                 <li>Runtime check (RTTI).</li>
                 <li>Slow (Traverses inheritance tree).</li>
                 <li>Returns <code>nullptr</code> if cast fails.</li>
             </ul>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-8-7",
        "title": "8.7 Multiple Inheritance & Diamond Problem",
        "duration": "45 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">The Diamond of Death</h2>
    
    <div class="flex justify-center">
        <div class="relative w-64 h-64 font-mono text-xs text-center">
             <div class="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-800 p-2 rounded border border-gray-600">Grandparent</div>
             
             <div class="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 p-2 rounded border border-gray-600">Parent A</div>
             <div class="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 p-2 rounded border border-gray-600">Parent B</div>
             
             <div class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-800 p-2 rounded border border-gray-600">Child</div>
             
             <!-- Lines would be here in a real SVG but implied by position -->
        </div>
    </div>
    
    <p class="text-center text-sm text-slate-400 mt-4">
        Child has TWO copies of Grandparent. Solved by <code>virtual inheritance</code>.
    </p>
</div>
"""
    },
    {
        "id": "cpp-8-8",
        "title": "8.8 Lab: Entity Component System (ECS)",
        "duration": "2.5 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-br from-teal-800 to-cyan-900 p-8 rounded-3xl text-center shadow-2xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: Entity Component System</h1>
        <p class="text-teal-200">Composition over Inheritance.</p>
    </div>

    <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Project Specification</h3>
        <p class="text-slate-400 text-sm">
            Deep inheritance trees are bad for game development. Instead, we use Composition.
            Build a system where an <code>Entity</code> is just an ID, and <code>Components</code> (Position, Sprite, Health) are attached to it.
        </p>

        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
            <h4 class="text-cyan-400 font-bold mb-4">Core Architecture</h4>
            <ul class="space-y-4 text-slate-300">
                <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">Base Component</span>
                    <span><code>struct Component { virtual ~Component() = default; };</code></span>
                </li>
                <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">Storage</span>
                    <span><code>std::vector&lt;unique_ptr&lt;Component&gt;&gt;</code> attached to Entity.</span>
                </li>
                 <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">Dynamic Cast</span>
                    <span>Use <code>dynamic_cast</code> or `typeid` to retrieve specific components (e.g., <code>getComponent&lt;Health&gt;()</code>).</span>
                </li>
            </ul>
        </div>
    </div>
</div>
"""
    }
]
