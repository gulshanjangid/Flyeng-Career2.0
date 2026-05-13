
module_7_lessons = [
    {
        "id": "cpp-7-1",
        "title": "7.1 Classes vs Structs: Encapsulation",
        "duration": "50 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-indigo-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">The Blueprint of Objects</h1>
        <p class="text-lg text-slate-400">
            <strong>Encapsulation</strong> is bundling data and methods that operate on that data.
        </p>

        <div class="mt-8 grid md:grid-cols-2 gap-8 text-xs font-mono">
            <div class="bg-[#1a1a1a] p-6 rounded-xl border border-blue-500/20">
                 <h4 class="text-blue-400 font-bold mb-4">struct (Default: Public)</h4>
                 <div class="text-gray-400">
                     struct Point {<br>
                     &nbsp;&nbsp;int x; <span class="text-green-400">// Public by default</span><br>
                     };
                 </div>
                 <p class="mt-4 text-[10px] text-gray-500">Use for "Data Bags" (PODs).</p>
            </div>
            <div class="bg-[#1a1a1a] p-6 rounded-xl border border-purple-500/20">
                 <h4 class="text-purple-400 font-bold mb-4">class (Default: Private)</h4>
                 <div class="text-gray-400">
                     class Player {<br>
                     &nbsp;&nbsp;int hp; <span class="text-red-400">// Private by default</span><br>
                     public:<br>
                     &nbsp;&nbsp;void heal();<br>
                     };
                 </div>
                 <p class="mt-4 text-[10px] text-gray-500">Use for "Invariant Management".</p>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-7-2",
        "title": "7.2 Constructors, Destructors & The Rule of Zero",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">The Lifecycle</h2>
    
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <div class="space-y-4 font-mono text-xs">
             <div class="flex gap-4 items-center">
                 <div class="w-24 text-green-400 font-bold">Ctor()</div>
                 <div class="bg-black/50 p-2 rounded flex-1">Called when object is born. Initialize invariants here.</div>
             </div>
             <div class="flex gap-4 items-center">
                 <div class="w-24 text-red-400 font-bold">~Dtor()</div>
                 <div class="bg-black/50 p-2 rounded flex-1">Called when object dies (Scope exit). Cleanup resources.</div>
             </div>
        </div>
        
        <div class="mt-8 bg-blue-900/10 p-6 rounded-xl border-l-4 border-blue-500">
             <h3 class="text-blue-300 font-bold mb-2">The Rule of Zero</h3>
             <p class="text-sm text-slate-400">
                 If your class just holds values (int, string, vector, unique_ptr), you <strong>DO NOT</strong> need to write a destructor, copy constructor, or move constructor. The compiler generates them perfectly.
                 <br><br>
                 <strong>Only write destructors if you are managing a raw resource (like a specific OS handle).</strong>
             </p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-7-3",
        "title": "7.3 Member Initializer Lists",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-xl">
             <h3 class="text-red-400 font-bold mb-4">Assignment (Inefficient)</h3>
             <pre class="bg-black p-4 rounded text-xs text-gray-400">
class Entity {
    string name;
    Entity(string n) {
        name = n; 
        // 1. name Default Constructed ""
        // 2. name Assigned "n" (Copy)
    }
};</pre>
        </div>
        <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-xl">
             <h3 class="text-green-400 font-bold mb-4">Initialization List (Efficient)</h3>
             <pre class="bg-black p-4 rounded text-xs text-gray-400">
class Entity {
    string name;
    Entity(string n) : name(n) {
        // 1. name Constructed with "n"
        // No extra step.
    }
};</pre>
        </div>
    </div>
    <div class="text-center text-xs text-slate-500">
        Always use Initializer Lists. It is mandatory for references and const members.
    </div>
</div>
"""
    },
    {
        "id": "cpp-7-4",
        "title": "7.4 This, Const Methods & Mutable",
        "duration": "50 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-6">Const Correctness in Classes</h3>
        <p class="text-slate-400 text-sm mb-6">
            If a method does not change the internal state, mark it <code>const</code>. This allows it to be called on const objects.
        </p>

        <div class="bg-black/50 p-6 rounded font-mono text-xs">
            class Server {<br>
            &nbsp;&nbsp;int port;<br>
            &nbsp;&nbsp;<span class="text-purple-400">mutable</span> int debugCount;<br>
            public:<br>
            &nbsp;&nbsp;int getPort() <span class="text-green-400">const</span> {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;debugCount++; <span class="text-gray-500">// OK because mutable</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;return port;<br>
            &nbsp;&nbsp;}<br>
            };
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-7-5",
        "title": "7.5 Static Members & The Singleton Trap",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Shared State</h2>
    
    <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
         <h3 class="text-white font-bold mb-2">Static Members</h3>
         <p class="text-xs text-gray-400 mb-4">They belong to the Class, not the Object. Like a global variable, but namespaced.</p>
         
         <div class="bg-black/50 p-4 text-xs font-mono text-gray-300">
             class User {<br>
             &nbsp;&nbsp;static int userCount;<br>
             };<br><br>
             int User::userCount = 0; <span class="text-gray-500">// Define in .cpp</span>
         </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-7-6",
        "title": "7.6 Operator Overloading: Math Vectors",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-r from-purple-900 to-indigo-900 p-8 rounded-3xl shadow-xl">
        <h2 class="text-3xl font-bold text-white mb-4">Making Types behave like Primitives</h2>
        <p class="text-purple-200 text-sm">
            C++ allows you to define <code>+</code>, <code>-</code>, <code>*</code>, <code>==</code>, and even <code>&lt;&lt;</code> for your classes.
        </p>
    </div>

    <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs mt-6">
        <div class="text-gray-400 text-xs mb-2">// Vector Addition</div>
        <pre class="bg-black p-4 rounded text-blue-300">
Vec2 operator+(const Vec2& lhs, const Vec2& rhs) {
    return Vec2(lhs.x + rhs.x, lhs.y + rhs.y);
}</pre>
        
        <div class="text-gray-400 text-xs mt-6 mb-2">// Stream Insertion</div>
        <pre class="bg-black p-4 rounded text-green-300">
std::ostream& operator<<(std::ostream& os, const Vec2& v) {
    os << "(" << v.x << ", " << v.y << ")";
    return os;
}</pre>
    </div>
</div>
"""
    },
    {
        "id": "cpp-7-7",
        "title": "7.7 Friend Classes & Encapsulation Leaks",
        "duration": "40 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-yellow-900/10 p-6 rounded-xl border-l-4 border-yellow-500">
        <h3 class="text-yellow-400 font-bold mb-2">Friends with Benefits (and Risks)</h3>
        <p class="text-sm text-gray-300">
            A <code>friend</code> declaration grants full access to private members.
            Use sparingly. Useful for:
        </p>
        <ul class="list-disc list-inside mt-2 text-xs text-gray-400">
            <li>Unit Tests (accessing internals).</li>
            <li>Closely related classes (Node and LinkedList).</li>
            <li>Operator overloading (accessing private data).</li>
        </ul>
    </div>
</div>
"""
    },
    {
        "id": "cpp-7-8",
        "title": "7.8 Lab: RPG Character System",
        "duration": "2 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-br from-red-900 to-orange-900 p-8 rounded-3xl text-center shadow-2xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: RPG Character</h1>
        <p class="text-red-200">Encapsulating Stats, Inventory, and Combat Logic.</p>
    </div>

    <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Project Specification</h3>
        <p class="text-slate-400 text-sm">
            Design a class <code>Character</code> that manages HP, MP, and a list of <code>Item</code> objects.
        </p>

        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
            <h4 class="text-orange-400 font-bold mb-4">Requirements</h4>
            <ul class="space-y-4 text-slate-300">
                <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">1. Invariants</span>
                    <span>HP cannot exceed MaxHP. HP cannot be negative. Implement <code>takeDamage(int)</code>.</span>
                </li>
                <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">2. Operator Overloading</span>
                    <span>Overload <code><<</code> to print character stats card.</span>
                </li>
                  <li class="flex gap-4">
                    <span class="text-blue-500 font-bold">3. Rule of Zero</span>
                    <span>Use <code>std::vector&lt;Item&gt;</code> for inventory so you don't need manual destructors.</span>
                </li>
            </ul>
        </div>
    </div>
</div>
"""
    }
]
