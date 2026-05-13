
module_16_lessons = [
    {
        "id": "cpp-16-1",
        "title": "16.1 The Build Pipeline: From Code to Binary",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-indigo-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">De-Mystifying the Linker</h1>
        <div class="space-y-6 text-lg text-slate-400">
            <p>
                <strong>The Process:</strong> Compilation is a multi-stage pipeline. Errors can happen at any stage, and their error messages look completely different.
            </p>
            <div class="grid md:grid-cols-4 gap-4 font-mono text-xs">
                 <div class="bg-[#1a1a1a] p-4 rounded-xl border border-gray-700">
                     <h4 class="text-gray-400 font-bold mb-2">1. Preprocessor</h4>
                     <p>Text Replacement.</p>
                     <p class="text-xs text-gray-500">#include, #define</p>
                 </div>
                 <div class="bg-[#1a1a1a] p-4 rounded-xl border border-blue-500/30">
                     <h4 class="text-blue-400 font-bold mb-2">2. Compiler</h4>
                     <p>Code -> ASM.</p>
                     <p class="text-xs text-gray-500">Syntax Errors, Type Check.</p>
                 </div>
                 <div class="bg-[#1a1a1a] p-4 rounded-xl border border-purple-500/30">
                     <h4 class="text-purple-400 font-bold mb-2">3. Assembler</h4>
                     <p>ASM -> Object (.o)</p>
                     <p class="text-xs text-gray-500">Machine Code Generation.</p>
                 </div>
                 <div class="bg-[#1a1a1a] p-4 rounded-xl border border-red-500/30">
                     <h4 class="text-red-400 font-bold mb-2">4. Linker</h4>
                     <p>Combine .o -> Exe</p>
                     <p class="text-xs text-gray-500">Unresolved Symbols.</p>
                 </div>
            </div>
        </div>
    </div>

    <!-- LINKER VISUAL -->
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-8">Symbol Resolution</h3>
        
        <div class="flex flex-col md:flex-row gap-12 items-center justify-center">
            <!-- OBJ A -->
            <div class="bg-gray-800 p-4 rounded relative border border-gray-600">
                <div class="absolute -top-3 left-2 bg-black px-1 text-xs text-gray-400">main.o</div>
                <div class="space-y-1 font-mono text-xs">
                    <div class="text-white">main()</div>
                    <div class="text-red-400">CALL _Z3fooV (Unknown)</div>
                </div>
            </div>

            <div class="text-2xl text-gray-600">+</div>

            <!-- OBJ B -->
             <div class="bg-gray-800 p-4 rounded relative border border-gray-600">
                <div class="absolute -top-3 left-2 bg-black px-1 text-xs text-gray-400">utils.o</div>
                <div class="space-y-1 font-mono text-xs">
                    <div class="text-green-400 text-bold">_Z3fooV: (Address 0x100)</div>
                    <div class="text-gray-500">...instructions...</div>
                </div>
            </div>

            <div class="text-2xl text-gray-600">➜</div>

            <!-- EXE -->
             <div class="bg-gray-800 p-6 rounded-xl border border-green-500 shadow-[0_0_20px_green]">
                 <div class="absolute -top-3 left-2 bg-black px-1 text-xs text-green-400 font-bold">app.exe</div>
                 <div class="font-mono text-xs text-white">
                     CALL 0x100
                 </div>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-16-2",
        "title": "16.2 CMake Basics: Targets & Properties",
        "duration": "55 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h2 class="text-3xl font-bold text-white mb-6">Modern CMake Philosophy</h2>
        <p class="text-slate-400 mb-6">
            Stop thinking in terms of directories and flags. Think in terms of <strong>Targets</strong> (Executables and Libraries) and <strong>Requirements</strong>.
        </p>

        <div class="grid md:grid-cols-2 gap-8 font-mono text-xs">
            <div class="bg-black/50 p-6 rounded border border-red-500/20">
                <div class="text-red-400 font-bold mb-2">Old CMake (Avoid)</div>
                <div class="text-gray-500">include_directories(include)</div>
                <div class="text-gray-500">link_libraries(math)</div>
                <div class="mt-4 text-[10px] text-red-300">
                    Globals are bad. This applies flags to EVERYTHING, even tests that don't need them.
                </div>
            </div>

            <div class="bg-black/50 p-6 rounded border border-green-500/20">
                <div class="text-green-400 font-bold mb-2">Modern CMake (Good)</div>
                <div class="text-white">add_library(math src/math.cpp)</div>
                <div class="text-white">target_include_directories(math PUBLIC include)</div>
                <div class="mt-4 text-[10px] text-green-300">
                    Encapsulation. Anyone who links 'math' automatically gets the include path.
                </div>
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-16-3",
        "title": "16.3 Static (.a) vs Shared (.so/.dll) Libraries",
        "duration": "50 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-12">
        <div class="bg-[#111] p-8 rounded-2xl border-t-4 border-blue-500">
             <h3 class="text-blue-400 font-bold text-xl mb-4">Static Library (.a / .lib)</h3>
             <p class="text-xs text-slate-400 mb-4 h-12">
                 Code is copied directly into your executable at compile time.
             </p>
             <ul class="text-xs space-y-2 text-gray-300">
                 <li>✅ No "DLL missing" errors.</li>
                 <li>✅ Faster execution (Link Time Optimization).</li>
                 <li>❌ Large executable size.</li>
                 <li>❌ Must recompile app to update library.</li>
             </ul>
        </div>
        
        <div class="bg-[#111] p-8 rounded-2xl border-t-4 border-purple-500">
             <h3 class="text-purple-400 font-bold text-xl mb-4">Shared Library (.so / .dll)</h3>
             <p class="text-xs text-slate-400 mb-4 h-12">
                 Code sits in a separate file. Loaded by OS at runtime.
             </p>
             <ul class="text-xs space-y-2 text-gray-300">
                 <li>✅ Small executable size.</li>
                 <li>✅ Plugins (swap DLLs without recompiling).</li>
                 <li>❌ "DLL Hell" (Version conflicts).</li>
                 <li>❌ Slower startup (Dynamic Loader overhead).</li>
             </ul>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-16-4",
        "title": "16.4 Dependency Management: Vcpkg & Conan",
        "duration": "45 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-r from-yellow-700/20 to-orange-700/20 p-8 rounded-3xl border border-orange-500/20">
        <h2 class="text-3xl font-bold text-white mb-4">The Package Manager Revolution</h2>
        <p class="text-slate-400 text-sm">
            For 30 years, C++ had no <code>npm install</code>. You had to download zips and build them manually. 
            Now we have <strong>vcpkg</strong> (Microsoft) and <strong>Conan</strong>.
        </p>
    </div>

    <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 font-mono text-xs">
        <div class="text-gray-500 mb-2"># Converting a project to vcpkg</div>
        <div class="text-blue-300">vcpkg install fmt</div>
        <div class="mt-4 text-gray-400">// In CMakeLists.txt</div>
        <div class="text-white">find_package(fmt CONFIG REQUIRED)</div>
        <div class="text-white">target_link_libraries(main PRIVATE fmt::fmt)</div>
        
        <div class="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded text-green-200">
            Works across Windows, Linux, and Mac. No more "It works on my machine".
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-16-5",
        "title": "16.5 C++ Interop: Python & C APIs",
        "duration": "50 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Speaking to Aliens</h2>
    
    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold text-white mb-4">extern "C"</h3>
        <p class="text-sm text-slate-400 mb-6">
            C++ mangles names (e.g., <code>_Z3fooi</code>) to support overloading. C does not.
            To call C++ from C (or Python/Rust), you must disable mangling.
        </p>
        
        <pre class="bg-black/50 p-4 rounded text-xs text-gray-300 font-mono">
#ifdef __cplusplus
extern "C" {
#endif

    // This function name will stay "calculate" in the binary
    void calculate(int x);

#ifdef __cplusplus
}
#endif</pre>
    </div>
</div>
"""
    },
    {
        "id": "cpp-16-6",
        "title": "16.6 Lab: Modern CMake Project",
        "duration": "2 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-br from-indigo-900 to-blue-900 p-8 rounded-3xl text-center shadow-2xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: Professional Build System</h1>
        <p class="text-indigo-200">Structure a project like a Senior Engineer.</p>
    </div>

    <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Project Specification</h3>
        <p class="text-slate-400 text-sm">
            Structure a multi-library project using "Modern CMake" (Target-Based) philosophy.
        </p>

        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs">
            <h4 class="text-blue-400 font-bold mb-4">Directory Layout</h4>
            <pre class="text-gray-400">
root/
├── CMakeLists.txt
├── app/
│   ├── CMakeLists.txt
│   └── main.cpp
├── core/
│   ├── CMakeLists.txt
│   ├── include/math.h
│   └── src/math.cpp
└── tests/
    ├── CMakeLists.txt
    └── test_main.cpp</pre>
        </div>
        
        <div class="bg-black/50 p-6 rounded-xl border border-blue-500/20 mt-6 overflow-x-auto">
             <h4 class="text-blue-400 font-bold mb-2">Target-Centered Design</h4>
             <pre class="text-xs text-gray-400">
# core/CMakeLists.txt
add_library(core STATIC src/math.cpp)
target_include_directories(core PUBLIC include)

# app/CMakeLists.txt
add_executable(app main.cpp)
target_link_libraries(app PRIVATE core)</pre>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-16-7",
        "title": "16.7 The Ecosystem: Where C++ is King",
        "duration": "40 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-[#111] p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 class="text-white font-bold mb-1">High Frequency Trading (HFT)</h3>
            <p class="text-xs text-gray-500">Low latency is money. C++ is the only choice.</p>
        </div>
        <div class="bg-[#111] p-6 rounded-xl border-l-4 border-red-500">
            <h3 class="text-white font-bold mb-1">Game Engines (Unreal)</h3>
            <p class="text-xs text-gray-500">Graphics rendering requires manual memory control.</p>
        </div>
         <div class="bg-[#111] p-6 rounded-xl border-l-4 border-blue-500">
            <h3 class="text-white font-bold mb-1">AI Infrastructure (PyTorch)</h3>
            <p class="text-xs text-gray-500">Python is the steering wheel. C++ is the engine.</p>
        </div>
         <div class="bg-[#111] p-6 rounded-xl border-l-4 border-green-500">
            <h3 class="text-white font-bold mb-1">Browsers (Chrome/V8)</h3>
            <p class="text-xs text-gray-500">Executing JS fast requires C++ JIT compilers.</p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-16-8",
        "title": "16.8 Final Capstone: Choose Your Path",
        "duration": "1 week",
        "type": "star",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center p-12">
        <h1 class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">Class Dismissed.</h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto">
            You now possess the knowledge of the Ancients and the Moderns. You can manage memory, optimize algorithms, and build systems that run the world.
        </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 hover:border-blue-500 transition group cursor-pointer">
            <div class="text-4xl mb-4 group-hover:scale-110 transition">⚡</div>
            <h3 class="text-xl font-bold text-white mb-2">Systems Track</h3>
            <p class="text-sm text-slate-400">Build a Database, a HTTP Server, or a Text Editor from scratch.</p>
        </div>
         <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 hover:border-green-500 transition group cursor-pointer">
            <div class="text-4xl mb-4 group-hover:scale-110 transition">🎮</div>
            <h3 class="text-xl font-bold text-white mb-2">Graphics Track</h3>
            <p class="text-sm text-slate-400">Learn OpenGL/Vulkan, write a Raytracer, or make a Game Engine.</p>
        </div>
         <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 hover:border-purple-500 transition group cursor-pointer">
            <div class="text-4xl mb-4 group-hover:scale-110 transition">🧠</div>
            <h3 class="text-xl font-bold text-white mb-2">HFT/AI Track</h3>
            <p class="text-sm text-slate-400">Implement Neural Networks in raw C++ or write an Order Matching Engine.</p>
        </div>
    </div>
</div>
"""
    }
]
