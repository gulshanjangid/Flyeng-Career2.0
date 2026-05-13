import { 
    Terminal, 
    BookOpen, 
    Code, 
    Cpu, 
    Globe, 
    Zap, 
    Layout, 
    Server, 
    Database, 
    Lock, 
    Box, 
    Layers, 
    Repeat, 
    GitBranch,
    Activity,
    Shield
} from "lucide-react";

export interface Lesson {
    id: string;
    title: string;
    duration: string;
    type: "video" | "interactive" | "quiz";
    content: string;
}

export interface Module {
    id: string;
    title: string;
    lessons: Lesson[];
}

export const javaCourseData: Module[] = [
  {
    id: "1",
    title: "Java Foundations & Tooling",
    lessons: [
      {
        id: "1.1",
        title: "1.1 The Java Landscape 2026: Why It Matters",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-12 text-slate-300 font-light">
            
            <!-- Hero Section -->
            <div class="relative rounded-3xl overflow-hidden border border-orange-500/20 p-8 md:p-12 mb-12">
                <div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black"></div>
                <div class="absolute right-0 top-0 p-12 opacity-20 transform translate-x-1/2 -translate-y-1/2">
                    <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-2h2V7h-2z"/></svg>
                </div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">Ecosystem Report</span>
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">The Titan of Backend</h2>
                    <p class="text-xl text-slate-400 max-w-2xl leading-relaxed">
                        Java is not a "legacy" language. It is the operating system of the Enterprise. 
                        In 2026, <strong class="text-white">55 Billion devices</strong> run Java, from AWS Lambda to Android phones to Mars rovers.
                    </p>
                </div>
            </div>

            <!-- VS Comparison -->
            <div>
                <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <span class="text-3xl">⚔️</span> The Great Comparison
                </h3>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-all group">
                        <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🐍</div>
                        <h4 class="text-xl font-bold text-yellow-400 mb-2">Python</h4>
                        <div class="text-xs font-mono text-slate-500 mb-4 bg-slate-900 p-2 rounded">Dynamic • Interpreted</div>
                        <p class="text-sm">King of AI & Scripts. Fast to write, slow to run (GIL). Great for prototyping, bad for high-concurrency systems.</p>
                    </div>
                    
                    <div class="bg-[#111] p-6 rounded-2xl border border-orange-500/50 relative transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
                        <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">Our Focus</div>
                        <div class="text-4xl mb-4 text-center">☕</div>
                        <h4 class="text-xl font-bold text-orange-400 mb-2 text-center">Java</h4>
                        <div class="text-xs font-mono text-slate-500 mb-4 bg-slate-900 p-2 rounded text-center">Static • JIT Compiled</div>
                        <p class="text-sm text-center">King of Enterprise. Balances dev speed with raw performance. Massive ecosystem (Spring). Truly multi-threaded.</p>
                    </div>

                    <div class="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
                        <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚙️</div>
                        <h4 class="text-xl font-bold text-blue-400 mb-2">C++ / Rust</h4>
                        <div class="text-xs font-mono text-slate-500 mb-4 bg-slate-900 p-2 rounded">Static • Native</div>
                        <p class="text-sm">King of Hardware. Manual memory management. Maximum performance, but dangerous (Segfaults) and slow to develop.</p>
                    </div>
                </div>
            </div>

            <!-- Key Concepts -->
            <div>
                <h3 class="text-2xl font-bold text-white mb-8">Why Java won the Enterprise?</h3>
                
    <div class="p-6 rounded-2xl border border-green-500/30 bg-green-900/10 text-green-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Memory Safety
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">No pointer arithmetic. The Garbage Collector (GC) runs in the background, reclaiming memory so you don't have to use \`malloc\` and \`free\`. This eliminates 70% of security vulnerabilities.</div>
    </div>
    
                
    <div class="p-6 rounded-2xl border border-blue-500/30 bg-blue-900/10 text-blue-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            WORA (Write Once, Run Anywhere)
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Java compiles to **Bytecode**, not Machine Code. This Bytecode runs on the **JVM** (Java Virtual Machine). You write code on Windows, commit it, and it runs on a Linux Server without recompiling.</div>
    </div>
    
                
    <div class="p-6 rounded-2xl border border-purple-500/30 bg-purple-900/10 text-purple-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            LTS (Long Term Support)
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Companies crave stability. Java releases new features every 6 months, but an **LTS** version (like 17, 21, 25) comes every 2 years with 5+ years of support. Moden Backends use Java 21.</div>
    </div>
    
            </div>

        </div>
        `
      },
      {
        id: "1.2",
        title: "1.2 Theory: Inside the JVM (Deep Dive)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-12 text-slate-300 font-light">
            
            <div class="bg-[#0f1014] p-8 rounded-3xl border border-slate-800">
                <h2 class="text-3xl font-bold text-white mb-6">The Ghost in the Machine</h2>
                <p class="text-lg text-slate-400 mb-8">
                    When you run \`java Main\`, you aren't talking to the OS. You are talking to a virtual computer (JVM) created inside your RAM.
                </p>

                <!-- Architecture Diagram -->
                <div class="grid grid-cols-1 md:grid-cols-5 gap-4 text-center font-mono text-xs">
                    
                    <!-- Col 1: Source -->
                    <div class="md:col-span-1 flex flex-col justify-center items-center gap-2">
                        <div class="p-4 bg-slate-800 rounded-lg border border-slate-700 w-full">Main.java</div>
                        <div class="text-xl">⬇️ javac</div>
                        <div class="p-4 bg-slate-800 rounded-lg border border-slate-700 w-full">Main.class</div>
                        <div class="text-slate-500">(Bytecode)</div>
                    </div>

                    <!-- Arrow -->
                    <div class="md:col-span-1 flex justify-center items-center text-3xl text-slate-600">➡️</div>

                    <!-- Col 3: JVM Internal -->
                    <div class="md:col-span-3 border-2 border-dashed border-slate-600 rounded-xl p-4 relative">
                        <div class="absolute -top-3 left-4 bg-[#0f1014] px-2 text-slate-400 font-bold">JVM Runtime</div>
                        
                        <div class="grid grid-cols-2 gap-4 h-full">
                            <!-- Classloader -->
                            <div class="bg-blue-900/20 border border-blue-500/30 rounded p-2 flex items-center justify-center col-span-2">
                                ClassLoader Subsystem
                            </div>

                            <!-- Memory -->
                            <div class="bg-green-900/20 border border-green-500/30 rounded p-4 flex flex-col gap-2">
                                <span class="text-green-400 font-bold">Runtime Data Areas</span>
                                <div class="bg-black/50 p-2 rounded border border-green-500/10">Method Area</div>
                                <div class="bg-black/50 p-2 rounded border border-green-500/10">Heap (Objects)</div>
                                <div class="bg-black/50 p-2 rounded border border-green-500/10">Stack (Methods)</div>
                            </div>

                            <!-- Execution -->
                            <div class="bg-red-900/20 border border-red-500/30 rounded p-4 flex flex-col gap-2">
                                <span class="text-red-400 font-bold">Execution Engine</span>
                                <div class="bg-black/50 p-2 rounded border border-red-500/10">Interpreter</div>
                                <div class="bg-black/50 p-2 rounded border border-red-500/10">JIT Compiler</div>
                                <div class="bg-black/50 p-2 rounded border border-red-500/10">Garbage Collector</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Detailed Breakdown -->
            <div class="space-y-8">
                
    <div class="p-6 rounded-2xl border border-blue-500/30 bg-blue-900/10 text-blue-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            1. ClassLoader
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Dynamically loads class files. It follows a hierarchy: Bootstrap (Core Java) -> Platform (Extensions) -> Application (Your Code). Usually lazy-loaded (only loaded when first used).</div>
    </div>
    
                
                
    <div class="p-6 rounded-2xl border border-red-500/30 bg-red-900/10 text-red-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            2. JIT (Just-In-Time) Compiler
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">This is Java's secret weapon. The JVM interprets bytecode initially (slow). But it **profiles** your code as it runs. If a method is called often ('Hot'), the JIT compiles it to optimized Native Machine Code. This is why Java servers get faster the longer they run ('Warmup').</div>
    </div>
    

                
    <div class="p-6 rounded-2xl border border-green-500/30 bg-green-900/10 text-green-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            3. Garbage Collector (GC)
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">A daemon thread that watches the Heap. It looks for 'Unreachable Objects' (orphans with no references) and deletes them to free memory. Algorithms: G1GC (Default), ZGC (Low latency).</div>
    </div>
    
            </div>

        </div>
        `
      },
      {
        id: "1.3",
        title: "1.3 Setup: The Pro Workflow (SDKMAN)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Stop Downloading ZIPs!</h3>
            <p>Real engineers use Version Managers. You might work on a Legacy project (Java 8) and a Modern Microservice (Java 21) on the same day.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">terminal</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-bash"># 1. Install SDKMAN (Linux/Mac/WSL)
curl -s "https://get.sdkman.io" | bash

# 2. List available Java versions (Amazon Corretto, Temurin, GraalVM)
sdk list java

# 3. Install the specific version we need
sdk install java 21.0.2-tem

# 4. Switch context instantly
sdk use java 21.0.2-tem

# 5. Check
java -version</code></pre>
</div>


            <h3 class="text-2xl font-bold text-white mt-8 mb-4">IntelliJ IDEA Shortcuts</h3>
            <p>Memorize these. You will never type full boilerplate again.</p>
            <div class="grid grid-cols-2 gap-4 font-mono text-sm">
                <div class="bg-[#1a1a1a] p-4 rounded border border-white/10 flex justify-between">
                    <span class="text-orange-400">psvm</span>
                    <span class="text-slate-500">public static void main...</span>
                </div>
                <div class="bg-[#1a1a1a] p-4 rounded border border-white/10 flex justify-between">
                    <span class="text-orange-400">sout</span>
                    <span class="text-slate-500">System.out.println()</span>
                </div>
                <div class="bg-[#1a1a1a] p-4 rounded border border-white/10 flex justify-between">
                    <span class="text-orange-400">Ctrl + Alt + L</span>
                    <span class="text-slate-500">Reformat Code</span>
                </div>
                <div class="bg-[#1a1a1a] p-4 rounded border border-white/10 flex justify-between">
                    <span class="text-orange-400">Ctrl + D</span>
                    <span class="text-slate-500">Duplicate Line</span>
                </div>
            </div>
        </div>
        `
      },
      {
        id: "1.4",
        title: "1.4 Anatomy of an Entry Point",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <p>Every Java application starts here. Let's dissect every keyword.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Main.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">package com.flyeng.core; // 1. Namespace

import java.util.Date;   // 2. Dependencies

// 3. Class Definition
public class Main {

    // 4. The Entry Point
    public static void main(String[] args) {
    
        System.out.println("Hello World");
        
    }
}</code></pre>
</div>


            <div class="space-y-4">
                <div class="flex gap-4 items-start">
                    <div class="min-w-[4rem] text-right font-mono text-orange-400">public</div>
                    <div class="text-sm">The access modifier. We want the JVM (which is outside our package) to be able to call this method.</div>
                </div>
                <div class="flex gap-4 items-start">
                    <div class="min-w-[4rem] text-right font-mono text-orange-400">static</div>
                    <div class="text-sm">Critical. It means <strong>"Belongs to the Class, not an Instance"</strong>. The JVM calls \`main\` <em>before</em> creating any objects. If it weren't static, the JVM would have to guess how to construct your class (constructor args?).</div>
                </div>
                <div class="flex gap-4 items-start">
                    <div class="min-w-[4rem] text-right font-mono text-orange-400">void</div>
                    <div class="text-sm">The method returns nothing. If the program ends without error, it implies exit code 0.</div>
                </div>
                <div class="flex gap-4 items-start">
                    <div class="min-w-[4rem] text-right font-mono text-orange-400">String[]</div>
                    <div class="text-sm">Command line arguments. \`java Main arg1 arg2\` becomes \`["arg1", "arg2"]\`.</div>
                </div>
            </div>

        </div>
        `
      },
      {
        id: "1.5",
        title: "1.5 Type System: The Stack vs The Heap",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            
    <div class="p-6 rounded-2xl border border-blue-500/30 bg-blue-900/10 text-blue-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Java is Strongly Typed
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">You must declare types. This constraint frees the compiler to optimize recklessly and prevents you from assigning a \`User\` object to a \`tax_rate\` variable.</div>
    </div>
    

            <div class="grid md:grid-cols-2 gap-8">
                <!-- Stack -->
                <div class="bg-[#0f1014] p-6 rounded-2xl border border-slate-800">
                    <h4 class="text-xl font-bold text-yellow-400 mb-4">The Stack 🥞</h4>
                    <p class="text-sm mb-4">Fast, temporary, thread-local memory. Stores <strong>Primitives</strong> and <strong>References</strong>.</p>
                    <ul class="space-y-2 text-sm font-mono text-slate-400">
                        <li class="p-2 bg-slate-900 rounded border-l-2 border-yellow-500">int x = 10;</li>
                        <li class="p-2 bg-slate-900 rounded border-l-2 border-yellow-500">boolean active = true;</li>
                        <li class="p-2 bg-slate-900 rounded border-l-2 border-yellow-500">User u = [0x1234];</li>
                    </ul>
                </div>

                <!-- Heap -->
                <div class="bg-[#0f1014] p-6 rounded-2xl border border-slate-800">
                    <h4 class="text-xl font-bold text-green-400 mb-4">The Heap 🏟️</h4>
                    <p class="text-sm mb-4">Massive, shared memory area. Stores actual <strong>Objects</strong>. Managed by GC.</p>
                    <div class="p-4 bg-slate-900 rounded border border-green-900/50 aspect-square flex items-center justify-center relative">
                        <div class="absolute inset-0 bg-green-500/5 pulse"></div>
                        <div class="bg-slate-800 p-2 rounded border border-green-500">
                            <div class="text-xs text-slate-500">0x1234</div>
                            <div class="font-bold text-white">User Object</div>
                            <div class="text-xs">{"name": "Alice"}</div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Data Types Cheatsheet</h3>
            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700">
                <thead><tr class="bg-slate-800 text-white"><th class="p-4">Type</th><th class="p-4">Size</th><th class="p-4">Use Case</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700 hover:bg-slate-800/50 transition"><td class="p-4 font-mono text-orange-400">byte</td><td class="p-4">8-bit</td><td class="p-4">Binary streams, image processing</td></tr>
                    <tr class="border-b border-slate-700 hover:bg-slate-800/50 transition"><td class="p-4 font-mono text-orange-400">int</td><td class="p-4">32-bit</td><td class="p-4">Default for numbers (+/- 2 Billion)</td></tr>
                    <tr class="border-b border-slate-700 hover:bg-slate-800/50 transition"><td class="p-4 font-mono text-orange-400">long</td><td class="p-4">64-bit</td><td class="p-4">Timestamps, IDs, Big Data (\`L\` suffix)</td></tr>
                    <tr class="border-b border-slate-700 hover:bg-slate-800/50 transition"><td class="p-4 font-mono text-orange-400">double</td><td class="p-4">64-bit</td><td class="p-4">Scientific calc (15 decimal precision)</td></tr>
                    <tr class="border-b border-slate-700 hover:bg-slate-800/50 transition"><td class="p-4 font-mono text-orange-400">boolean</td><td class="p-4">1-bit*</td><td class="p-4">Flags (true/false)</td></tr>
                </tbody>
            </table>
        </div>
        `
      },
      {
        id: "1.6",
        title: "1.6 Operators & Bitwise Magic",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Beyond the Basics</h3>
            <p>You know \`+\` and \`-\`. Let's look at what Interviews ask.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Short Circuit -->
                <div class="space-y-4">
                     <h4 class="font-bold text-blue-400">1. Short-Circuit Logic</h4>
                     <p class="text-sm">Why \`&&\` is safer than \`&\`.</p>
                     
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Logic.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">String s = null;
// Safe: Check s != null first. 
// If false, the right side is NEVER executed.
if (s != null && s.length() > 0) {
    print("Safe");
}</code></pre>
</div>

                </div>

                <!-- Bitwise -->
                <div class="space-y-4">
                     <h4 class="font-bold text-purple-400">2. Bitwise Tricks (Interview Fav)</h4>
                     <p class="text-sm">Manipulating raw binary bits.</p>
                     
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Bitwise.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">int x = 5;  // 0101
int y = 3;  // 0011

// AND
print(x & y); // 1 (0001)

// XOR (Difference)
print(x ^ y); // 6 (0110)

// Left Shift (Multiply by 2^n)
print(x << 1); // 10 (1010)</code></pre>
</div>

                </div>
            </div>
        </div>
        `
      },
      {
        id: "1.7",
        title: "1.7 The `var` Keyword & Type Inference",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            
    <div class="p-6 rounded-2xl border border-orange-500/30 bg-orange-900/10 text-orange-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Boilerplate Killer
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Introduced in Java 10. The compiler knows the type from the right-hand side, so why type it again? This is NOT dynamic typing. The type is still locked at compile time.</div>
    </div>
    
            
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Inference.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// The Old Way (Repetitive)
URLConnection conn = new URLConnection();
ArrayList<String> names = new ArrayList<String>();

// The New Way (Java 10+)
var conn = new URLConnection();
var names = new ArrayList<String>();

// Rules:
// 1. Must initialize immediately
// var x; // ERROR

// 2. Cannot use for function arguments/returns (Safety)
// void do(var x) // ERROR</code></pre>
</div>

        </div>
        `
      },
      {
        id: "1.8",
        title: "1.8 Mini Project: CLI Mortgage Calculator",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Build a real financial tool using \`Scanner\` and \`NumberFormat\`. Put it all together.</p>

            <div class="space-y-4">
                <h4 class="font-bold text-white">Formula</h4>
                <div class="p-4 bg-slate-800 rounded font-mono text-center">
                    M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
                </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">MortgageCalc.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.text.NumberFormat;
import java.util.Scanner;

public class MortgageCalc {
    public static void main(String[] args) {
        final byte MONTHS_IN_YEAR = 12;
        final byte PERCENT = 100;

        Scanner scanner = new Scanner(System.in);

        System.out.print("Principal ($1K - $1M): ");
        int principal = scanner.nextInt();

        System.out.print("Annual Interest Rate: ");
        float annualInterest = scanner.nextFloat();
        float monthlyInterest = annualInterest / PERCENT / MONTHS_IN_YEAR;

        System.out.print("Period (Years): ");
        byte years = scanner.nextByte();
        int numberOfPayments = years * MONTHS_IN_YEAR;

        double mortgage = principal
                * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

        String mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage);
        System.out.println("Mortgage: " + mortgageFormatted);
    }
}</code></pre>
</div>

        </div>
        `
      },
    ]
  },
  {
    id: "2",
    title: "Control Flow & Basic OOP",
    lessons: [
      {
        id: "2.1",
        title: "2.1 Control Flow Evolution: From Java 1 to 21",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Death of \`if-else\`?</h3>
            <p>Modern Java avoids deeply nested logic using enhanced Switch Expressions and Pattern Matching.</p>

            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 class="font-bold text-red-400 mb-2">Old School (Imperative)</h4>
                    
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Old.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">String type;
if (day == "SAT" || day == "SUN") {
    type = "Weekend";
} else if (day == "WED") {
    type = "Midweek";
} else {
    type = "Workday";
}</code></pre>
</div>

                </div>
                <div>
                    <h4 class="font-bold text-green-400 mb-2">Modern Java (Declarative)</h4>
                    
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Modern.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">String type = switch(day) {
    case "SAT", "SUN" -> "Weekend";
    case "WED"        -> "Midweek";
    default           -> "Workday";
};</code></pre>
</div>

                </div>
            </div>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Advanced: Yielding Values</h3>
            <p>Sometimes you need multiline logic inside a switch expression. Use \`yield\`.</p>
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">YieldDemo.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">int score = switch(performance) {
    case "A" -> 100;
    case "B" -> {
        System.out.println("Good effort!");
        yield 80; // Return value
    }
    default -> 0;
};</code></pre>
</div>

        </div>
        `
      },
      {
        id: "2.2",
        title: "2.2 Looping Like a Pro",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <div class="p-6 bg-[#111] border border-slate-800 rounded-2xl mb-8">
                 <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span class="text-yellow-500">⚡</span> Performance Note
                 </h3>
                 <p class="text-sm text-slate-400">
                    In Java, enhanced for-loops (\`for(Ob o : list)\`) rely on \`Iterator\`. 
                    For primitive arrays (\`int[]\`), standard \`for(int i=0...)\` is technically faster (no object allocation), 
                    but the JIT compiler often optimizes both to the same assembly code. 
                    <strong>Prioritize Readability.</strong>
                 </p>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">Labels and Complex Breaks</h3>
            <p>Did you know you can break out of <em>outer</em> loops from an <em>inner</em> loop?</p>
            
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Labels.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">outerLoop:
for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
        if (i * j > 6) {
            System.out.println("Breaking both loops!");
            break outerLoop; // Exits EVERYTHING
        }
    }
}</code></pre>
</div>


            <h3 class="text-2xl font-bold text-white mb-4">Do-While (The "At Least Once" Loop)</h3>
            <p>Rare, but perfect for User Input Menus.</p>
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Menu.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">Scanner sc = new Scanner(System.in);
int choice;
do {
    System.out.print("Enter 0 to quit: ");
    choice = sc.nextInt();
} while(choice != 0);</code></pre>
</div>


        </div>
        `
      },
      {
        id: "2.3",
        title: "2.3 The Stack & Methods Deep Dive",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <h3 class="text-2xl font-bold text-white mb-4">Visualizing the Stack Frame</h3>
            <p>Every time you call a method, Java pushes a "Frame" onto the Thread Stack. When the method returns, the Frame is "Popped" (destroyed).</p>

            <div class="relative h-64 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden flex flex-col-reverse p-4 gap-2">
                 <div class="w-full bg-red-900/30 border border-red-500 text-center py-2 text-red-200 rounded animate-pulse">
                    main() Frame [ args, result ]
                 </div>
                 <div class="w-full bg-blue-900/30 border border-blue-500 text-center py-2 text-blue-200 rounded transform translate-y-0 transition-transform">
                    calculate() Frame [ a=10, b=20 ]
                 </div>
                 <div class="absolute top-2 right-2 text-xs text-slate-500 font-mono">Stack Memory</div>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                     <h4 class="font-bold text-white mb-2">Recursive Danger</h4>
                     <p class="text-sm text-slate-400 mb-4">If you call a method infinitely, the Stack fills up.</p>
                     
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Danger.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">void recursive() {
    recursive(); // Pushes forever
}
// Error: StackOverflowError 💥</code></pre>
</div>

                </div>
                <div>
                     <h4 class="font-bold text-white mb-2">Variable Scope</h4>
                     <p class="text-sm text-slate-400 mb-4">Variables in a method ONLY exist within that Frame.</p>
                     
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Scope.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">void add() {
    int x = 10;
}
void print() {
    // System.out.println(x); 
    // ERROR: 'x' died when add() finished
}</code></pre>
</div>

                </div>
            </div>

        </div>
        `
      },
      {
        id: "2.4",
        title: "2.4 The Holy Trinity: Classes, Objects, References",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <h3 class="text-2xl font-bold text-white mb-4">The Blueprint vs The Building</h3>
            
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="p-6 border border-dashed border-slate-500 rounded-2xl bg-slate-900/50">
                    <div class="text-center text-4xl mb-4">📐</div>
                    <h4 class="text-xl font-bold text-center text-white mb-2">Class (Blueprint)</h4>
                    <p class="text-sm text-center text-slate-400">Exists once (Code). Contains definition.</p>
                    <div class="mt-4 font-mono text-xs bg-black p-2 rounded text-slate-300">
                        class Tesla {<br>
                        &nbsp;&nbsp;String color;<br>
                        }
                    </div>
                </div>
                
                <div class="space-y-4">
                    <div class="p-4 border border-green-500/50 rounded-xl bg-green-900/10 flex items-center gap-4">
                        <div class="text-2xl">🚗</div>
                        <div>
                            <h5 class="font-bold text-white">Object 1 (Heap)</h5>
                            <div class="text-xs text-slate-400">Memory: 0x1A2B, Color: Red</div>
                        </div>
                    </div>
                    <div class="p-4 border border-green-500/50 rounded-xl bg-green-900/10 flex items-center gap-4">
                        <div class="text-2xl">🚙</div>
                        <div>
                            <h5 class="font-bold text-white">Object 2 (Heap)</h5>
                            <div class="text-xs text-slate-400">Memory: 0x9Z8Y, Color: Blue</div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">The \`this\` Keyword Visualized</h3>
            <p>\`this\` is a hidden pointer passed to every non-static method.</p>
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">ThisDemo.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">class Person {
    String name;

    void introduce() {
        // "Who am I?" 
        // 'this' points to the specific object calling introduce()
        System.out.println("Hi, I am " + this.name);
    }
}

Person p1 = new Person(); p1.name = "Alice";
Person p2 = new Person(); p2.name = "Bob";

p1.introduce(); // 'this' is p1 (Alice)
p2.introduce(); // 'this' is p2 (Bob)</code></pre>
</div>


        </div>
        `
      },
      {
        id: "2.5",
        title: "2.5 Constructors & Initialization Blocks",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            
    <div class="p-6 rounded-2xl border border-purple-500/30 bg-purple-900/10 text-purple-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            The 3 Rules of Constructors
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">1. Name must match Class name exactly.\n2. No return type (not even void).\n3. Code runs BEFORE the object is assigned to a reference.</div>
    </div>
    

            <h3 class="text-2xl font-bold text-white mb-4">Constructor Chaining (\`this()\`)</h3>
            <p>Don't repeat code. Let one constructor call another.</p>
            
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">User.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">public class User {
    String name;
    String role;

    // 1. Master Constructor
    public User(String name, String role) {
        this.name = name;
        this.role = role;
        System.out.println("User Created");
    }

    // 2. Default (Guest)
    public User() {
        this("Guest", "Visitor"); // Delegates to Master
    }

    // 3. Just Name
    public User(String name) {
        this(name, "User"); // Delegates to Master
    }
}</code></pre>
</div>


            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Static Initializer Blocks</h3>
            <p>Code that runs ONCE when the class is loaded (not when object is created).</p>
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">StaticBlock.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">class Config {
    static double PI;

    // Runs once per application life
    static {
        System.out.println("Loading Config...");
        PI = 3.14159;
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "2.6",
        title: "2.6 Garbage Collection & NullPointerException",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Billion Dollar Mistake (NPE)</h3>
            <p>What happens when a reference points to nothing?</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">NPE.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">String s = null;
// System.out.println(s.toUpperCase()); 
// CRASH! NullPointerException.
// You cannot call methods on 'null'.

if (s != null) {
    System.out.println(s.toUpperCase()); // Safe
}</code></pre>
</div>


            <h3 class="text-2xl font-bold text-white mt-8 mb-4">How GC Works (Simplified)</h3>
            <ul class="list-disc list-inside space-y-4">
                <li><strong>Roots:</strong> Active variables in the Stack, Static variables.</li>
                <li><strong>Reachability:</strong> The GC starts at Roots and follows references.</li>
                <li><strong>Sweep:</strong> Anything NOT reachable is deleted.</li>
            </ul>
        </div>
        `
      },
      {
        id: "2.7",
        title: "2.7 Mini Project: Bank Account System",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Create a class with Encapsulation (Private fields) and logic.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">BankAccount.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">public class BankAccount {
    // 1. Data Hiding (Private)
    private String owner;
    private double balance;

    // 2. Constructor
    public BankAccount(String owner, double initialDeposit) {
        this.owner = owner;
        if (initialDeposit < 0) {
            System.out.println("Error: Negative input");
            this.balance = 0;
        } else {
            this.balance = initialDeposit;
        }
    }

    // 3. Business Logic
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        }
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Insufficient Funds!");
        }
    }

    // 4. Getter (Read Only)
    public double getBalance() {
        return balance;
    }
}</code></pre>
</div>


            <h3 class="text-xl font-bold text-white mt-6">Usage</h3>
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Main.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">public class Main {
    public static void main(String[] args) {
        var acc = new BankAccount("Nikhil", 500);
        acc.deposit(200);
        acc.withdraw(1000); // Fail
        System.out.println(acc.getBalance()); // 700.0
    }
}</code></pre>
</div>

        </div>
        `
      },
    ]
  },
  {
    id: "3",
    title: "Core OOP Concepts",
    lessons: [
      {
        id: "3.1",
        title: "3.1 OOP Pillar 1: Encapsulation (The Shield)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Protecting Your State</h3>
            <p>Encapsulation is not just about \`private\`. It's about maintaining INVARIANTS (rules that must always be true).</p>

            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                    <h4 class="text-red-400 font-bold mb-2">❌ Bad Code (Open)</h4>
                    <p class="text-sm mb-4">Direct access allows invalid states.</p>
                    
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Bad.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">class User {
    public int age;
}
User u = new User();
u.age = -500; // Impossible but allowed!</code></pre>
</div>

                </div>
                <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl">
                    <h4 class="text-green-400 font-bold mb-2">✅ Good Code (Encapsulated)</h4>
                    <p class="text-sm mb-4">Setters enforce logic.</p>
                    
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Good.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">class User {
    private int age;
    public void setAge(int a) {
        if(a > 0 && a < 120) this.age = a;
        else throw new IllegalArgumentException();
    }
}</code></pre>
</div>

                </div>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">Immutable Objects (The Holy Grail)</h3>
            <p>If an object CANNOT change after creation, it is inherently thread-safe. Java \`Records\` (Java 14+) make this easy.</p>
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Point.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// A Record is implicitly final, immutable, and has equals/hashCode/toString
public record Point(int x, int y) {}

var p = new Point(10, 20);
// p.x = 30; // ERROR! Cannot change.
System.out.println(p.x()); // Accessor (no 'get')</code></pre>
</div>


        </div>
        `
      },
      {
        id: "3.2",
        title: "3.2 OOP Pillar 2: Inheritance (The Family Tree)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <h3 class="text-2xl font-bold text-white mb-4">Modeling IS-A Relationships</h3>
            <p>Inheritance is for code reuse and polymorphism. Do not abuse it.</p>

            <h4 class="text-xl font-bold text-blue-400 mb-4">Types of Inheritance</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-center">
                    <div class="font-bold text-white mb-2">Single</div>
                    <div class="text-xs text-slate-400">A -> B</div>
                    <div class="mt-2 text-[10px] text-slate-500">Standard parent-child.</div>
                </div>
                <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-center">
                    <div class="font-bold text-white mb-2">Multilevel</div>
                    <div class="text-xs text-slate-400">A -> B -> C</div>
                    <div class="mt-2 text-[10px] text-slate-500">Grandparents pass traits down.</div>
                </div>
                <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-center">
                    <div class="font-bold text-white mb-2">Hierarchical</div>
                    <div class="text-xs text-slate-400">A -> B, A -> C</div>
                    <div class="mt-2 text-[10px] text-slate-500">One parent, many children.</div>
                </div>
            </div>
            
            <div class="bg-red-900/10 border border-red-500/30 p-4 rounded-xl mb-6">
                 <h5 class="text-red-400 font-bold flex items-center gap-2">❌ Multiple Inheritance?</h5>
                 <p class="text-sm text-slate-300 mt-1">Java classes CANNOT extend multiple classes (to avoid the Diamond Problem). However, they CAN implement multiple interfaces.</p>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">Modern Control: Sealed Classes (Java 17)</h3>
            <p>Sometimes you want inheritance, but only for a specific set of classes. You want to <strong>Restrict</strong> the hierarchy.</p>
            
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Sealed.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// Logic: A Payment MUST be one of these three. Nothing else.
public abstract sealed class Payment 
    permits CreditCard, PayPal, Crypto {}

final class CreditCard extends Payment {}
final class PayPal extends Payment {}
final class Crypto extends Payment {}
// class Cash extends Payment {} // COMPILER ERROR!</code></pre>
</div>


            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Dog.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">public class Dog extends Animal {
    
    // Explicitly calling Parent Constructor
    public Dog(String name) {
        super(name); // Must be first line
        System.out.println("Dog Created");
    }

    @Override
    public void eat() {
        super.eat(); // Optional: Run parent logic first
        System.out.println("Dog eating kibble");
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "3.3",
        title: "3.3 OOP Pillar 3: Polymorphism (The Shapeshifter)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">One Interface, Many Behaviors</h3>
            <p>This is the most powerful concept in Java. It allows you to write code that works on types <em>that don't even exist yet</em>.</p>

            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="space-y-4">
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <code class="text-blue-400">Animal</code> <code class="text-white">a</code> = <code class="text-green-400">new Dog();</code>
                    </div>
                    <ul class="list-disc list-inside text-sm text-slate-400">
                        <li><strong>Reference Type (Animal):</strong> Determines <em>what</em> methods you can call.</li>
                        <li><strong>Object Type (Dog):</strong> Determines <em>which</em> implementation runs.</li>
                    </ul>
                </div>
                <div class="p-4 bg-slate-900/50 border border-dashed border-slate-700 rounded-lg text-center text-sm font-mono">
                    Runtime: <br>
                    Does \`a\` point to Dog? -> Run Dog.eat() <br>
                    Does \`a\` point to Cat? -> Run Cat.eat()
                </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">ZooKeeper.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// The Power of Polymorphism
// This method works for ANY Animal (Cat, Dog, Bird...)
public void feedAnimal(Animal a) {
    System.out.println("Feeding...");
    a.eat(); // Dynamic Dispatch selects the right method
}</code></pre>
</div>

            
            <h4 class="font-bold text-white mt-6">Safety Check: \`instanceof\`</h4>
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">PatternMatching.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">if (a instanceof Dog d) {
    // Variable 'd' is automatically casted to Dog (Java 14+)
    d.bark();
}</code></pre>
</div>


        </div>
        `
      },
      {
        id: "3.4",
        title: "3.4 OOP Pillar 4: Abstraction (Abstract vs Interface)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Designing Contracts</h3>
            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-8">
                <thead><tr class="bg-slate-800 text-white"><th class="p-4">Feature</th><th class="p-4">Abstract Class</th><th class="p-4">Interface</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-4">State</td><td class="p-4">Can have instance variables</td><td class="p-4">Only constants (static final)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4">Inheritance</td><td class="p-4">Single (extends)</td><td class="p-4">Multiple (implements)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4">Use Case</td><td class="p-4">Shared Code / Identity</td><td class="p-4">Capabilities / Contracts</td></tr>
                </tbody>
            </table>

            
    <div class="p-6 rounded-2xl border border-blue-500/30 bg-blue-900/10 text-blue-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Interface Default Methods
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Since Java 8, Interfaces can have method bodies (\`default\`). This allows you to add new methods to an interface WITHOUT breaking existing classes that implement it.</div>
    </div>
    

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Payments.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">interface PaymentProcessor {
    void process(double amount); // Abstract

    // Default implementation
    default void refund(double amount) {
        System.out.println("Default refund logic...");
    }
}

class Stripe implements PaymentProcessor {
    public void process(double amt) { System.out.println("Paying via Stripe"); }
    // Inherits refund() for free!
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "3.5",
        title: "3.5 Composition over Inheritance",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Golden Rule of Design</h3>
            <p>Inheritance creates tight coupling. If the Parent changes, the Child breaks. Composition is flexible.</p>

            <div class="grid md:grid-cols-2 gap-8">
                <div>
                     <h4 class="font-bold text-red-400 mb-2">Inheritance (Is-A)</h4>
                     <p class="text-sm text-slate-400 mb-2">Rigid. Use only for true hierarchy.</p>
                     <p class="font-mono text-xs bg-slate-900 p-2 border border-red-900 rounded">class Tesla extends Car</p>
                </div>
                <div>
                     <h4 class="font-bold text-green-400 mb-2">Composition (Has-A)</h4>
                     <p class="text-sm text-slate-400 mb-2">Flexible. Assemble parts.</p>
                     <p class="font-mono text-xs bg-slate-900 p-2 border border-green-900 rounded">class Tesla has-a Battery</p>
                </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Composition.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">class Engine {
    void start() { System.out.println("Vroom"); }
}

class Car {
    private final Engine engine; // Dependency

    // Dependency Injection via Constructor
    public Car(Engine e) {
        this.engine = e;
    }

    void drive() {
        engine.start(); // Delegation
        System.out.println("Driving...");
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "3.6",
        title: "3.6 The Object Class: The Mother of All",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Every Class extends Object</h3>
            <p>Even if you don't say it, your class extends \`java.lang.Object\`. This gives you critical methods.</p>

            
    <div class="p-6 rounded-2xl border border-red-500/30 bg-red-900/10 text-red-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            The Equal/Hash Contract
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">If you override \`equals()\`, you MUST override \`hashCode()\`. If two objects are 'equal', they must have the same hash code. If you break this, HashMaps will lose your data.</div>
    </div>
    

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">ObjectMethods.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.util.Objects;

class User {
    String id;
    String name;

    @Override
    public String toString() {
        return "User[id=" + id + "]";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true; // Same memory address?
        if (!(o instanceof User user)) return false; // Is it a User?
        return Objects.equals(id, user.id); // Check ID
    }

    @Override
    public int hashCode() {
        return Objects.hash(id); // Hash based on ID
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "3.7",
        title: "3.7 Mini Project: Library Management LLD",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal: Low Level Design (LLD)</h3>
            <p>Design a system with \`Book\`, \`Member\`, and \`Librarian\` using all OOP principles.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">LibrarySystem.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// Abstraction
abstract class User {
    protected String name;
    public User(String n) { this.name = n; }
}

// Inheritance
class Member extends User {
    public Member(String n) { super(n); }
}

class Book {
    private String title;
    private boolean isAvailable = true; // Encapsulation
    
    public Book(String t) { this.title = t; }

    public boolean borrow() {
        if (isAvailable) {
            isAvailable = false;
            return true;
        }
        return false;
    }
}

// Composition
class Library {
    public void processBorrow(User user, Book book) {
        if (book.borrow()) {
            System.out.println(user.name + " borrowed " + book.title);
        } else {
            System.out.println("Book unavailable.");
        }
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "3.8",
        title: "3.8 Advanced Generics: The Hard Parts",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Type Erasure & Wildcards</h3>
            <p>Generics exist ONLY at compile time. At runtime, \`List&lt;String&gt;\` becomes just \`List\` (Raw Type). This is called <strong>Type Erasure</strong>.</p>

            <div class="bg-purple-900/10 border border-purple-500/30 p-6 rounded-2xl mb-8">
                 <h4 class="text-purple-400 font-bold mb-4">The PECS Rule (Producer Extends, Consumer Super)</h4>
                 <div class="grid md:grid-cols-2 gap-4">
                     <div>
                        <div class="text-xs text-slate-400 mb-1">Producer (Read-Only)</div>
                        
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Producer.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// ? extends T: We can READ from it
public void print(List<? extends Number> list) {
    Number n = list.get(0); // Safe
    // list.add(10); // ERROR!
}</code></pre>
</div>

                     </div>
                     <div>
                        <div class="text-xs text-slate-400 mb-1">Consumer (Write-Only)</div>
                        
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Consumer.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// ? super T: We can WRITE to it
public void addIntegers(List<? super Integer> list) {
    list.add(10); // Safe
    // Number n = list.get(0); // Error! Could be Object
}</code></pre>
</div>

                     </div>
                 </div>
            </div>

            
    <div class="p-6 rounded-2xl border border-blue-500/30 bg-blue-900/10 text-blue-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Why Erasure?
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Backward Compatibility. Java 5 (Generics) needed to run on Java 1.4 JVMs. So key generic info is erased to ensure old code keeps working.</div>
    </div>
    
        </div>
        `
      },
    ]
  },
  {
    id: "4",
    title: "Strings & Collections Framework",
    lessons: [
      {
        id: "4.1",
        title: "4.1 String Ecology: Heap vs Pool",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Why is String special?</h3>
            <p>In Java, \`String\` is immutable. To save memory, Java uses a special area in the Heap called the <strong>String Pool</strong>.</p>

            <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div class="bg-[#0f1014] p-6 rounded-2xl border border-slate-800">
                    <div class="text-center font-mono text-xs text-slate-500 mb-2">Code Analysis</div>
                    
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Memory.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">String s1 = "Java";
String s2 = "Java";
String s3 = new String("Java");</code></pre>
</div>

                </div>
                
                <div class="relative h-64 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden p-4">
                     <div class="absolute top-2 right-2 text-xs text-green-500 font-bold">HEAP Memory</div>
                     
                     <!-- Pool -->
                     <div class="absolute bottom-4 left-4 right-4 h-32 bg-blue-900/20 border border-blue-500/50 rounded-lg p-2">
                        <div class="text-xs text-blue-400 mb-2">String Pool</div>
                        <div class="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs shadow-lg title="0x11">"Java"</div>
                     </div>

                     <!-- Pointers -->
                     <div class="absolute top-10 left-10 text-xs">s1 ⬇️ (Points to Pool)</div>
                     <div class="absolute top-10 left-32 text-xs">s2 ⬇️ (Points to Pool)</div>
                     
                     <!-- Heap Object -->
                     <div class="absolute top-20 right-10 bg-slate-800 border border-slate-600 px-2 py-1 rounded text-xs">
                        Object (0x22)
                        <div class="text-[10px] text-slate-500">value: "Java"</div>
                     </div>
                     <div class="absolute top-10 right-10 text-xs">s3 ⬇️</div>
                </div>
            </div>

            
    <div class="p-6 rounded-2xl border border-orange-500/30 bg-orange-900/10 text-orange-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Performance Tip
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Always prefer \`String s = "Text"\` (Literal). Avoid \`new String("Text")\` as it creates a duplicate object on the Heap AND the Pool.</div>
    </div>
    
        </div>
        `
      },
      {
        id: "4.2",
        title: "4.2 StringBuilder: The Performance Optimization",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The "+" Operator Trap</h3>
            <p>Concatenating strings in a loop is a performance disaster (O(N²)).</p>

            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                    <h4 class="text-red-400 font-bold mb-2">❌ Slow (O(N²))</h4>
                    
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Slow.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">String s = "";
for(int i=0; i<1000; i++) {
    // Creates 1000 temporary objects!
    s += i; 
}</code></pre>
</div>

                </div>
                <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl">
                    <h4 class="text-green-400 font-bold mb-2">✅ Fast (O(N))</h4>
                    
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Fast.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">StringBuilder sb = new StringBuilder();
for(int i=0; i<1000; i++) {
    // Modifies the SAME internal array
    sb.append(i);
}
String s = sb.toString();</code></pre>
</div>

                </div>
            </div>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Text Blocks (Java 15+)</h3>
            <p>Stop using \`\n\` for SQL or JSON.</p>
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">ModernJSON.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">String json = """
{
    "name": "Nikhil",
    "role": "Developer"
}
""";</code></pre>
</div>

        </div>
        `
      },
      {
        id: "4.3",
        title: "4.3 collections Architecture: The Big Picture",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <h3 class="text-2xl font-bold text-white mb-4">The Hierarchy Map</h3>
            <p class="text-slate-400">Everything implements \`Iterable\`. This is why for-each loops work.</p>

            <div class="p-8 bg-slate-900/50 border border-slate-700 rounded-2xl overflow-x-auto">
                <div class="flex flex-col items-center gap-6 min-w-[600px]">
                    
                    <!-- Root -->
                    <div class="p-3 bg-purple-900/30 border border-purple-500 rounded text-purple-200 font-bold w-48 text-center text-sm">Iterable (Interface)</div>
                    <div class="h-4 w-0.5 bg-slate-600"></div>
                    <div class="p-3 bg-blue-900/30 border border-blue-500 rounded text-blue-200 font-bold w-48 text-center text-sm">Collection (Interface)</div>
                    
                    <!-- Branches -->
                    <div class="grid grid-cols-3 gap-4 w-full text-center">
                        <div class="flex flex-col items-center gap-2">
                             <div class="h-4 w-0.5 bg-slate-600"></div>
                             <div class="p-2 border border-slate-500 rounded w-full font-bold">List</div>
                             <div class="text-[10px] text-slate-400">Ordered, Duplicates</div>
                             <div class="flex flex-col gap-1 w-full text-xs">
                                <span class="bg-slate-800 p-1 rounded">ArrayList</span>
                                <span class="bg-slate-800 p-1 rounded">LinkedList</span>
                             </div>
                        </div>
                        <div class="flex flex-col items-center gap-2">
                             <div class="h-4 w-0.5 bg-slate-600"></div>
                             <div class="p-2 border border-slate-500 rounded w-full font-bold">Queue</div>
                             <div class="text-[10px] text-slate-400">FIFO Order</div>
                             <div class="flex flex-col gap-1 w-full text-xs">
                                <span class="bg-slate-800 p-1 rounded">PriorityQueue</span>
                                <span class="bg-slate-800 p-1 rounded">ArrayDeque</span>
                             </div>
                        </div>
                        <div class="flex flex-col items-center gap-2">
                             <div class="h-4 w-0.5 bg-slate-600"></div>
                             <div class="p-2 border border-slate-500 rounded w-full font-bold">Set</div>
                             <div class="text-[10px] text-slate-400">Unique Only</div>
                             <div class="flex flex-col gap-1 w-full text-xs">
                                <span class="bg-slate-800 p-1 rounded">HashSet</span>
                                <span class="bg-slate-800 p-1 rounded">TreeSet</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-yellow-900/10 border border-yellow-500/30 p-4 rounded-xl flex items-start gap-3">
                <span class="text-2xl">⚠️</span>
                <div>
                    <h4 class="font-bold text-yellow-400">Where is Map?</h4>
                    <p class="text-sm text-slate-300">\`Map\` does NOT extend Collection. It is a separate hierarchy because it iterates over Keys, Values, or Entries, not single elements.</p>
                </div>
            </div>

        </div>
        `
      },
      {
        id: "4.4",
        title: "4.4 List Wars: ArrayList vs LinkedList",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Memory Layout Deep Dive</h3>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                     <h4 class="font-bold text-blue-400 mb-2">ArrayList (Dynamic Array)</h4>
                     <p class="text-sm mb-4">Contiguous memory. CPU Cache friendly.</p>
                     <div class="flex gap-1">
                        <div class="w-8 h-8 bg-blue-600 text-white flex items-center justify-center text-xs">0</div>
                        <div class="w-8 h-8 bg-blue-600 text-white flex items-center justify-center text-xs">1</div>
                        <div class="w-8 h-8 bg-blue-600 text-white flex items-center justify-center text-xs">2</div>
                        <div class="w-8 h-8 bg-slate-800 border border-slate-600"></div>
                     </div>
                     <ul class="mt-4 text-xs font-mono space-y-1 text-slate-400">
                        <li>get(i) -> O(1) ⚡</li>
                        <li>add(x) -> O(1) (Amortized)</li>
                        <li>remove(0) -> O(N) (Shift!)</li>
                     </ul>
                </div>

                <div>
                     <h4 class="font-bold text-purple-400 mb-2">LinkedList (Node Chain)</h4>
                     <p class="text-sm mb-4">Scattered memory. Frequent pointer hopping.</p>
                     <div class="flex gap-2 text-xs">
                        <div class="bg-purple-900/50 p-1 border border-purple-500 rounded">[Data|Next]</div>
                        <span>➡️</span>
                        <div class="bg-purple-900/50 p-1 border border-purple-500 rounded">[Data|Next]</div>
                     </div>
                     <ul class="mt-4 text-xs font-mono space-y-1 text-slate-400">
                        <li>get(i) -> O(N) 🐢</li>
                        <li>addFirst() -> O(1) ⚡</li>
                        <li>removeFirst() -> O(1) ⚡</li>
                     </ul>
                </div>
            </div>
            
            
    <div class="p-6 rounded-2xl border border-green-500/30 bg-green-900/10 text-green-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Verdict
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Use **ArrayList** 99% of the time. Modern CPUs hate LinkedLists because of Cache Misses.</div>
    </div>
    
        </div>
        `
      },
      {
        id: "4.5",
        title: "4.5 HashMap Internals (Interview Gold)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">How does \`get(key)\` work?</h3>
            <p>HashMap uses an Array of Buckets. Each bucket contains a Linked List (or Red-Black Tree in Java 8+ if crowded).</p>

            <div class="space-y-2 font-mono text-sm bg-slate-900 p-4 rounded-xl border border-slate-700">
                <div class="text-slate-500">// 1. Calculate Hash</div>
                <div>int hash = key.hashCode();</div>
                
                <div class="text-slate-500 mt-2">// 2. Calculate Index</div>
                <div>int index = hash % arrayLength;</div>
                
                <div class="text-slate-500 mt-2">// 3. Go to Bucket</div>
                <div>Bucket b = array[index];</div>
                
                <div class="text-slate-500 mt-2">// 4. Traverse List (Collision Handling)</div>
                <div>while(node != null) { if(node.key.equals(key)) return node.val; ... }</div>
            </div>

            
    <div class="p-6 rounded-2xl border border-red-500/30 bg-red-900/10 text-red-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            The Collision Problem
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">If two keys have the same hash (Collision), they end up in the same bucket. In Java 7, this degraded performance to O(N). In Java 8, if a bucket has > 8 items, it transforms into a Tree (O(log N)).</div>
    </div>
    
            
            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Thread Safety: ConcurrentHashMap</h3>
            <p>Regular \`HashMap\` dies in multi-threaded environments. \`ConcurrentHashMap\` uses <strong>Bucket-Level Locking</strong> (Segment Locking) so multiple threads can write simultaneously if they are in different buckets.</p>
            
             
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">AdvancedMaps.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// Thread Check
Map<String, String> map = new ConcurrentHashMap<>();
map.put("key", "val"); // Safe!

// Java 9+ Immutable Maps (Unmodifiable)
Map<String, String> config = Map.of(
    "host", "localhost",
    "port", "8080"
);
// config.put("new", "val"); // CRASH! UnsupportedOperationException</code></pre>
</div>


        </div>
        `
      },
      {
        id: "4.6",
        title: "4.6 Sets and Ordering",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <p>Set is just a Map where the Value is a dummy object. It exists solely for Uniqueness.</p>
            
            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-8">
                <thead><tr class="bg-slate-800 text-white"><th class="p-4">Impl</th><th class="p-4">Behavior</th><th class="p-4">Speed</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-4 font-bold text-orange-400">HashSet</td><td class="p-4">Random Order</td><td class="p-4">O(1)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-bold text-orange-400">LinkedHashSet</td><td class="p-4">Insertion Order</td><td class="p-4">O(1) (Slower)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-bold text-orange-400">TreeSet</td><td class="p-4">Sorted (Natural/Comparator)</td><td class="p-4">O(log N)</td></tr>
                </tbody>
            </table>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Dedupe.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// Removing duplicates while keeping order
List<String> raw = List.of("A", "B", "A", "C");
Set<String> unique = new LinkedHashSet<>(raw);
// Result: [A, B, C]</code></pre>
</div>

        </div>
        `
      },
      {
        id: "4.7",
        title: "4.7 Mini Project: Frequency Analyzer",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Process a massive text block and find the most frequent word using HashMap.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Analyzer.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.util.*;

public class FrequencyAnalyzer {
    public static void main(String[] args) {
        String text = "java python java c++ python java rust go rust";
        String[] words = text.split(" ");
        
        Map<String, Integer> freq = new HashMap<>();

        // 1. Count
        for (String w : words) {
            // merge() (Java 8): shorter than containsKey check
            freq.merge(w, 1, Integer::sum);
        }

        // 2. Find Max
        String mostFrequent = "";
        int maxCount = 0;

        for (var entry : freq.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                mostFrequent = entry.getKey();
            }
        }

        System.out.println("Winner: " + mostFrequent + " (" + maxCount + ")");
    }
}</code></pre>
</div>

        </div>
        `
      },
    ]
  },
  {
    id: "5",
    title: "Exceptions & File I/O (NIO.2)",
    lessons: [
      {
        id: "5.1",
        title: "5.1 The Exception Hierarchy",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">When Things Go Wrong</h3>
            
            <div class="flex flex-col items-center gap-4 mb-8">
                <div class="p-4 bg-red-900/80 border border-red-500 rounded-xl w-64 text-center font-bold text-white shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                    Throwable
                </div>
                
                <div class="flex gap-8 w-full justify-center">
                     <!-- Left Branch -->
                     <div class="flex flex-col items-center gap-2">
                        <div class="h-8 w-0.5 bg-slate-600"></div>
                        <div class="p-4 bg-orange-900/50 border border-orange-500 rounded-xl w-48 text-center font-bold text-orange-200">
                            Error
                        </div>
                        <p class="text-[10px] text-slate-400 max-w-[150px] text-center">JVM Errors: StackOverflow, OutOfMemory. <br> <span class="text-red-400 font-bold">Unrecoverable.</span></p>
                     </div>

                     <!-- Right Branch -->
                     <div class="flex flex-col items-center gap-2">
                        <div class="h-8 w-0.5 bg-slate-600"></div>
                        <div class="p-4 bg-blue-900/50 border border-blue-500 rounded-xl w-48 text-center font-bold text-blue-200">
                            Exception
                        </div>
                        
                         <div class="flex gap-4 mt-2">
                             <div class="text-xs bg-slate-800 p-2 rounded border border-slate-600 w-32">
                                <span class="block text-green-400 font-bold">Checked</span>
                                IOException, SQLException. <br> Compiler forces catch.
                             </div>
                             <div class="text-xs bg-slate-800 p-2 rounded border border-slate-600 w-32">
                                <span class="block text-yellow-400 font-bold">Unchecked</span>
                                RuntimeException. NullPointer, IndexOutOfBounds.
                             </div>
                         </div>
                     </div>
                </div>
            </div>

            
    <div class="p-6 rounded-2xl border border-purple-500/30 bg-purple-900/10 text-purple-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            The 'Catch or Specify' Rule
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">For Checked Exceptions, you MUST either wrap the code in try-catch OR add \`throws Exception\` to your method signature. Unchecked exceptions are ignored by the compiler.</div>
    </div>
    
        </div>
        `
      },
      {
        id: "5.2",
        title: "5.2 Automated Resource Management",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The \`finally\` Age is Over</h3>
            <p>Forgetting to close a file or database connection leaks memory. In Java 7+, we use <strong>Try-With-Resources</strong>.</p>

            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                    <h4 class="text-red-400 font-bold mb-2">❌ The Ugly Way</h4>
                    
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Legacy.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">FileReader fr = null;
try {
    fr = new FileReader("test.txt");
    // read...
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (fr != null) {
        try { fr.close(); } 
        catch (IOException e) {} // Ugh
    }
}</code></pre>
</div>

                </div>
                <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl">
                    <h4 class="text-green-400 font-bold mb-2">✅ The Modern Way</h4>
                    
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Modern.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// Calls .close() automatically
// even if exception occurs!
try (var fr = new FileReader("test.txt")) {
    int i = fr.read();
} catch (IOException e) {
    e.printStackTrace();
}</code></pre>
</div>

                </div>
            </div>
            
            <p class="text-sm text-slate-400 mt-4">This works for any class implementing the \`AutoCloseable\` interface.</p>
        </div>
        `
      },
      {
        id: "5.3",
        title: "5.3 Creating Custom Exceptions",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Expressing Business Failures</h3>
            <p>Don't throw generic exceptions. Create Semantic exceptions so your calling code knows EXACTLY what went wrong.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">BankLogic.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// 1. Define the Exception
public class InsufficientFundsException extends RuntimeException {
    public InsufficientFundsException(String msg) {
        super(msg);
    }
}

// 2. Throw it
public void withdraw(double amount) {
    if (amount > balance) {
        // Clear and semantic!
        throw new InsufficientFundsException("Need " + amount + " but have " + balance);
    }
    balance -= amount;
}</code></pre>
</div>


            
    <div class="p-6 rounded-2xl border border-blue-500/30 bg-blue-900/10 text-blue-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Checked or Unchecked?
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Modern convention (Spring Framework, Clean Code) prefers **Unchecked** (RuntimeException) for most things. Checked exceptions often lead to empty catch blocks.</div>
    </div>
    

        </div>
        `
      },
      {
        id: "5.4",
        title: "5.4 Modern I/O: NIO.2 (Files & Paths)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goodbye \`java.io.File\`</h3>
            <p>Java 7 introduced NIO.2 (New I/O). It's non-blocking, faster, and uses \`Path\` instead of \`File\`.</p>

            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-8">
                <thead><tr class="bg-slate-800 text-white"><th class="p-4">Action</th><th class="p-4">Old (Avoid)</th><th class="p-4">New (NIO.2)</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-4">Reference</td><td class="p-4 font-mono text-red-400">new File("a.txt")</td><td class="p-4 font-mono text-green-400">Path.of("a.txt")</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4">Read Text</td><td class="p-4">BufferedReader loop</td><td class="p-4 font-mono text-green-400">Files.readString(path)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4">Write Text</td><td class="p-4">FileWriter</td><td class="p-4 font-mono text-green-400">Files.writeString(path, txt)</td></tr>
                </tbody>
            </table>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">NioDemo.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.nio.file.*;

public class FileManager {
    public static void main(String[] args) throws IOException {
        Path path = Path.of("config/settings.json");
        
        // Create directory if missing
        if (!Files.exists(path.getParent())) {
            Files.createDirectories(path.getParent());
        }

        // Write
        Files.writeString(path, "{ "theme": "dark" }");

        // Read
        String content = Files.readString(path);
        System.out.println(content);
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "5.5",
        title: "5.5 Serialization & Defensive Coding",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Saving Objects to Files</h3>
            <p>Serialization converts an Object into a Byte Stream. <strong>Warning:</strong> Security risk if deserializing untrusted data.</p>
            
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">SaveSystem.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.io.*;

// Must implement Serializable marker interface
record Player(String name, int score) implements Serializable {}

public class GameSave {
    public static void save(Player p) throws IOException {
        try (var out = new ObjectOutputStream(new FileOutputStream("save.dat"))) {
            out.writeObject(p);
        }
    }

    public static Player load() throws IOException, ClassNotFoundException {
        try (var in = new ObjectInputStream(new FileInputStream("save.dat"))) {
            return (Player) in.readObject();
        }
    }
}</code></pre>
</div>


            
    <div class="p-6 rounded-2xl border border-orange-500/30 bg-orange-900/10 text-orange-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            transient Keyword
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">If a field is marked \`transient\`, it is ignored during Serialization. Useful for passwords or temporary data.</div>
    </div>
    
        </div>
        `
      },
      {
        id: "5.6",
        title: "5.6 Mini Project: Error Log Parser",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Read a massive server log, filter lines by "ERROR", and write a report. Use Streams for speed.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">LogParser.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.nio.file.*;
import java.util.stream.Stream;
import java.io.IOException;

public class LogParser {
    public static void main(String[] args) {
        Path input = Path.of("server.log");
        Path output = Path.of("error-report.txt");

        // Stream (Lazy Loading): Good for 10GB files!
        try (Stream<String> lines = Files.lines(input)) {
            
            List<String> errors = lines
                .filter(line -> line.contains("[ERROR]"))
                .map(line -> line.trim())
                .toList();
            
            Files.write(output, errors);
            System.out.println("Found " + errors.size() + " errors.");

        } catch (IOException e) {
            System.err.println("Failed to process logs: " + e.getMessage());
        }
    }
}</code></pre>
</div>

            
            <p>Note how we used \`Files.lines()\` which returns a <strong>Stream</strong>. This reads the file lazily line-by-line, meaning it won't crash your RAM even with a 50GB log file.</p>
        </div>
        `
      },
    ]
  },
  {
    id: "6",
    title: "Functional Programming (Streams/Lambdas)",
    lessons: [
      {
        id: "6.1",
        title: "6.1 Lambda Expressions: The Revolution",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Why do we need Lambdas?</h3>
                <p class="leading-relaxed mb-4">
                    For 20 years (Java 1.0 to 1.7), Java was purely an <strong>Object-Oriented</strong> language. 
                    If you wanted to pass "behavior" (code) to a function, you couldn't just pass a function. 
                    You had to wrap it in an Object (Anonymous Inner Class). This was verbose, ugly, and conceptually heavy.
                </p>
                <p class="leading-relaxed mb-6">
                    Java 8 introduced <strong>Lambda Expressions</strong>, bringing <strong>Functional Programming</strong> capabilities to the JVM. 
                    This allows you to treat code as data, passing behavior around as easily as you pass strings or integers.
                </p>
            </section>

            <section>
                <h4 class="text-xl font-bold text-blue-400 mb-4">Evolution of Behavior Parameterization</h4>
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                        <h5 class="text-red-400 font-bold mb-2">🐢 Pre-Java 8 (Anonymous Class)</h5>
                        <p class="text-xs text-slate-400 mb-2">Notice the "Ceremony" code (new Interface... @Override...)</p>
                        
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Old.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// 5 lines for a simple print!
button.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.println("Clicked");
    }
});</code></pre>
</div>

                    </div>
                    <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl">
                        <h5 class="text-green-400 font-bold mb-2">🚀 Java 8+ (Lambda)</h5>
                        <p class="text-xs text-slate-400 mb-2">Focus purely on the logic.</p>
                        
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">New.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// (Params) -> { Body }
button.addActionListener(e -> System.out.println("Clicked"));</code></pre>
</div>

                    </div>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">Key Characteristics of Lambdas</h4>
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
                    <ul class="space-y-4 text-sm">
                        <li class="flex gap-3">
                            <span class="text-green-400 font-bold min-w-[120px]">1. Anonymous</span>
                            <span class="text-slate-400">It has no name. It is defined right where it is used.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-green-400 font-bold min-w-[120px]">2. Function</span>
                            <span class="text-slate-400">It doesn't belong to a class (conceptually). It has a parameter list, body, and return type.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-green-400 font-bold min-w-[120px]">3. Passed Around</span>
                            <span class="text-slate-400">It can be passed as an argument or stored in a variable.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-green-400 font-bold min-w-[120px]">4. Lexical Scoping</span>
                            <span class="text-slate-400">Unlike Anonymous Classes, \`this\` inside a lambda refers to the <strong>enclosing class</strong>, not the lambda itself.</span>
                        </li>
                    </ul>
                </div>
            </section>

            
    <div class="p-6 rounded-2xl border border-purple-500/30 bg-purple-900/10 text-purple-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Target Type Inference
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">How does Java know what \`e\` is? It looks at the method signature (Context). If \`ActionListener\` expects an \`ActionEvent\`, Java infers that \`e\` is of type \`ActionEvent\`.</div>
    </div>
    

        </div>
        `
      },
      {
        id: "6.2",
        title: "6.2 Functional Interfaces: The Contract",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Rules of Engagement</h3>
                <p class="leading-relaxed mb-4">
                    A Lambda Expression is not magic. It is basically an implementation of a <strong>Functional Interface</strong>.
                </p>
                <div class="bg-slate-900 border-l-4 border-blue-500 p-4 mb-6">
                    <p class="font-bold text-white">Definition:</p>
                    <p class="text-slate-400 text-sm mt-1">
                        A Functional Interface is an interface that specifies <strong>EXACTLY ONE</strong> abstract method. 
                        (It can have many \`default\` or \`static\` methods, but only ONE abstract method).
                    </p>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">The \`@FunctionalInterface\` Annotation</h4>
                <p class="text-sm text-slate-400 mb-2">This annotation is optional, but highly recommended as it forces the compiler to check your contract.</p>
                
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Calculator.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">@FunctionalInterface
public interface Calculator {
    // The ONE abstract method (The Contract)
    int calculate(int a, int b);

    // Default methods make it flexible, but don't break the rule
    default void printInfo() { 
        System.out.println("I am a calculator"); 
    }
}</code></pre>
</div>

            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">The "Big 4" Standard Interfaces</h4>
                <p class="text-sm text-slate-400 mb-4">Java provides \`java.util.function\` so you don't have to write your own interfaces.</p>
                
                <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700">
                    <thead>
                        <tr class="bg-slate-800 text-white">
                            <th class="p-4 border-b border-slate-600">Interface</th>
                            <th class="p-4 border-b border-slate-600">Signature</th>
                            <th class="p-4 border-b border-slate-600">Role</th>
                            <th class="p-4 border-b border-slate-600">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-slate-900/50">
                            <td class="p-4 border-b border-slate-700 font-mono text-green-400">Predicate&lt;T&gt;</td>
                            <td class="p-4 border-b border-slate-700 font-mono">T -> boolean</td>
                            <td class="p-4 border-b border-slate-700">Filter/Test</td>
                            <td class="p-4 border-b border-slate-700"><code class="bg-black p-1 rounded">x -> x > 10</code></td>
                        </tr>
                        <tr>
                            <td class="p-4 border-b border-slate-700 font-mono text-blue-400">Consumer&lt;T&gt;</td>
                            <td class="p-4 border-b border-slate-700 font-mono">T -> void</td>
                            <td class="p-4 border-b border-slate-700">Action/Print</td>
                            <td class="p-4 border-b border-slate-700"><code class="bg-black p-1 rounded">s -> System.out.println(s)</code></td>
                        </tr>
                        <tr class="bg-slate-900/50">
                            <td class="p-4 border-b border-slate-700 font-mono text-yellow-400">Function&lt;T,R&gt;</td>
                            <td class="p-4 border-b border-slate-700 font-mono">T -> R</td>
                            <td class="p-4 border-b border-slate-700">Transform/Map</td>
                            <td class="p-4 border-b border-slate-700"><code class="bg-black p-1 rounded">s -> s.length()</code></td>
                        </tr>
                        <tr>
                            <td class="p-4 border-b border-slate-700 font-mono text-purple-400">Supplier&lt;T&gt;</td>
                            <td class="p-4 border-b border-slate-700 font-mono">() -> T</td>
                            <td class="p-4 border-b border-slate-700">Factory/Generate</td>
                            <td class="p-4 border-b border-slate-700"><code class="bg-black p-1 rounded">() -> Math.random()</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>

        </div>
        `
      },
      {
        id: "6.3",
        title: "6.3 Stream API: Internal vs External Iteration",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">A Paradigm Shift in Loops</h3>
                <p class="leading-relaxed mb-6">
                    Before Java 8, we managed loops manually. This is called <strong>External Iteration</strong>. 
                    You control the flow, the index, and the checks. 
                    Streams introduced <strong>Internal Iteration</strong>, where you tell Java <em>what</em> needs to be done, and the library handles the traversal (including parallelization!).
                </p>

                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <div class="border border-slate-700 p-6 rounded-xl bg-slate-900">
                        <h4 class="font-bold text-slate-300 mb-2">External Iteration</h4>
                        <div class="text-xs text-slate-500 mb-4">We are the manager. "Get next. Is it null? Process."</div>
                        
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">ForLoop.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">List<String> names = new ArrayList<>();
for(User u : users) {
    if(u.age > 18) {
        names.add(u.name);
    }
}</code></pre>
</div>

                    </div>
                    <div class="border border-green-500/30 p-6 rounded-xl bg-green-900/10">
                        <h4 class="font-bold text-green-400 mb-2">Internal Iteration</h4>
                        <div class="text-xs text-slate-500 mb-4">We are the client. "Here is the logic, you run it."</div>
                        
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Stream.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">List<String> names = users.stream()
    .filter(u -> u.age > 18)
    .map(u -> u.name)
    .toList();</code></pre>
</div>

                    </div>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">Deep Dive: Lazy Evaluation</h4>
                <p class="text-sm text-slate-400 mb-4">
                    Streams are NOT collections. They are views that compute on demand.
                </p>
                <div class="relative p-6 bg-slate-900 border border-slate-700 rounded-xl overflow-x-auto mb-8">
                     <div class="flex items-center gap-6 text-sm font-mono min-w-[700px]">
                        <div class="p-2 border border-slate-500 rounded bg-slate-800">Source (List)</div>
                        <div>➡️</div>
                        <div class="p-2 border border-blue-500 rounded bg-blue-900/20 text-blue-300">Op: Filter (Lazy)</div>
                        <div>➡️</div>
                        <div class="p-2 border border-blue-500 rounded bg-blue-900/20 text-blue-300">Op: Map (Lazy)</div>
                        <div>➡️</div>
                        <div class="p-2 border border-green-500 rounded bg-green-900/20 text-green-300 animate-pulse">Terminal: Collect (Eager)</div>
                     </div>
                     <p class="mt-4 text-xs text-slate-400">
                        <strong>Performance Concept:</strong> Java fuses \`filter\` and \`map\` into a SINGLE pass over the data. 
                        It does not create intermediate lists. This is called <strong>Loop Fusion</strong>.
                     </p>
                </div>
            </section>

            
    <div class="p-6 rounded-2xl border border-red-500/30 bg-red-900/10 text-red-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Streams are Once-Off
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">A Stream cannot be reused! Once the terminal operation triggers, the stream is closed. If you try to use it again, you get an \`IllegalStateException\`.</div>
    </div>
    

        </div>
        `
      },
      {
        id: "6.4",
        title: "6.4 Collectors & Methodology",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Aggregation Powerhouse</h3>
                <p class="leading-relaxed mb-4">
                    The \`collect()\` method is a generic strategy for reducing a stream into a mutable result container. 
                    The \`Collectors\` utility class provides factories for common reductions.
                </p>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">Common Collection Strategies</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-green-400">Accumulation</div>
                        <div class="text-xs text-slate-500 mb-2">toList, toSet, toCollection</div>
                        <code class="text-xs text-slate-300">.collect(Collectors.toSet())</code>
                    </div>
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-blue-400">Join</div>
                        <div class="text-xs text-slate-500 mb-2">Concatenate Strings</div>
                        <code class="text-xs text-slate-300">.collect(Collectors.joining(", "))</code>
                    </div>
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-purple-400">Math</div>
                        <div class="text-xs text-slate-500 mb-2">Summarizing Int/Double</div>
                        <code class="text-xs text-slate-300">.collect(Collectors.summarizingInt(x -> x))</code>
                    </div>
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-orange-400">Grouping</div>
                        <div class="text-xs text-slate-500 mb-2">SQL 'GROUP BY' equivalent</div>
                        <code class="text-xs text-slate-300">.collect(Collectors.groupingBy(...))</code>
                    </div>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">Complex Grouping Example</h4>
                
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Report.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.util.stream.Collectors;

// Goal: Group Transactions by Currency, and sum the amounts.
Map<String, Double> revenueByCurrency = transactions.stream()
    .collect(Collectors.groupingBy(
        Transaction::getCurrency,              // Key Mapper
        Collectors.summingDouble(Transaction::getAmount) // Value Mapper (Downstream)
    ));

// Goal: Partition into High vs Low value
Map<Boolean, List<Transaction>> partitioned = transactions.stream()
    .collect(Collectors.partitioningBy(t -> t.getAmount() > 1000));</code></pre>
</div>

            </section>

        </div>
        `
      },
      {
        id: "6.5",
        title: "6.5 Optional: The Null-Safety Container",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Solution to NullPointerExceptions</h3>
                <p class="leading-relaxed mb-4">
                    Tony Hoare, the inventor of the Null Reference, calls it his "Billion Dollar Mistake". 
                    \`Optional&lt;T&gt;\` is a container object used to contain not-null objects. 
                    It forces the API user to think: "What if this is empty?"
                </p>
                
                <div class="flex gap-8 mb-8 justify-center">
                    <div class="bg-slate-900 border border-green-500/50 p-4 rounded-xl text-center w-32">
                        <div class="text-2xl mb-2">📦</div>
                        <div class="font-bold text-green-400">Optional.of(val)</div>
                        <div class="text-[10px] text-slate-400">Contains Value</div>
                    </div>
                    <div class="bg-slate-900 border border-slate-700 p-4 rounded-xl text-center w-32 opacity-50">
                        <div class="text-2xl mb-2">💨</div>
                        <div class="font-bold text-slate-400">Optional.empty()</div>
                        <div class="text-[10px] text-slate-500">Contains Nothing</div>
                    </div>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">Best Practices Checklist</h4>
                <ul class="space-y-2 text-sm text-slate-400 bg-slate-900 p-6 rounded-xl border border-slate-700">
                    <li class="flex items-center gap-2">✅ <strong>Do:</strong> Use it as a return type for methods that might not find a result.</li>
                    <li class="flex items-center gap-2">❌ <strong>Don't:</strong> Use it as a field in a class (Not Serializable).</li>
                    <li class="flex items-center gap-2">❌ <strong>Don't:</strong> Use it as a parameter for methods (Just overload the method).</li>
                    <li class="flex items-center gap-2">✅ <strong>Do:</strong> Use \`map\`, \`flatMap\`, and \`orElse\` instead of \`if(opt.isPresent())\`.</li>
                </ul>
            </section>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">SafeCode.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// The Functional Way
public String getUserName(int id) {
    return findUserById(id)          // Returns Optional<User>
        .map(User::getName)          // If user exists, get name
        .filter(n -> !n.isEmpty())   // If name is not empty
        .orElse("Anonymous");        // Else default
}</code></pre>
</div>


        </div>
        `
      },
    ]
  },
  {
    id: "7",
    title: "Multithreading & Concurrency",
    lessons: [
      {
        id: "7.1",
        title: "7.1 Threads vs Processes: The OS View",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">You are already multi-tasking</h3>
            <p>Your OS runs many <strong>Processes</strong> (Apps). Each Process can run many <strong>Threads</strong>.</p>
            
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
                    <div class="absolute top-0 right-0 bg-slate-800 p-1 text-[10px] text-slate-400 rounded-bl">Process</div>
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 bg-blue-900 rounded-xl border border-blue-500 flex items-center justify-center text-2xl">☕</div>
                        <div>
                            <div class="font-bold text-white">JVM</div>
                            <div class="text-xs text-slate-400">Own Memory Space (Heap)</div>
                        </div>
                    </div>
                </div>

                <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
                     <div class="absolute top-0 right-0 bg-slate-800 p-1 text-[10px] text-slate-400 rounded-bl">Threads</div>
                     <div class="flex flex-col gap-2">
                        <div class="h-2 w-full bg-gradient-to-r from-green-500 to-transparent rounded"></div>
                        <div class="h-2 w-3/4 bg-gradient-to-r from-purple-500 to-transparent rounded"></div>
                        <div class="h-2 w-1/2 bg-gradient-to-r from-orange-500 to-transparent rounded"></div>
                        <div class="text-xs text-slate-400 text-right mt-1">Shared Memory (Dangerous!)</div>
                     </div>
                </div>
            </div>

            
    <div class="p-6 rounded-2xl border border-red-500/30 bg-red-900/10 text-red-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Context Switching Cost
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Switching between threads takes time (saving registers, cache flushing). Having 10,000 threads on a 4-core CPU is typically SLOWER than 10 threads because of this overhead.</div>
    </div>
    
        </div>
        `
      },
      {
        id: "7.2",
        title: "7.2 The Thread Lifecycle",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Born, Run, Die</h3>
            
            <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-900 mb-8 overflow-x-auto">
                
                <div class="bg-blue-400 p-4 rounded-xl text-center w-24">NEW</div>
                <div class="text-slate-500 text-xl">➡️</div>
                
                <div class="bg-green-400 p-4 rounded-xl text-center w-24 relative group">
                    RUNNABLE
                    <div class="absolute -top-8 left-0 w-full text-slate-400 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Waiting for CPU Time Slice</div>
                </div>

                <div class="flex flex-col items-center">
                    <div class="text-slate-500 text-xl">⬇️ ⬆️</div>
                    <div class="bg-red-400 p-4 rounded-xl text-center w-24">BLOCKED</div>
                </div>

                <div class="text-slate-500 text-xl">➡️</div>
                <div class="bg-slate-400 p-4 rounded-xl text-center w-24">DEAD</div>

            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Lifecycle.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">Thread t = new Thread(() -> {
    System.out.println("Processing...");
});

// State: NEW
t.start(); 
// State: RUNNABLE (OS decides when to run)
t.join(); 
// State: TERMINATED (Dead)</code></pre>
</div>

        </div>
        `
      },
      {
        id: "7.3",
        title: "7.3 Synchronization: The Bathroom Key",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Race Condition</h3>
            
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="bg-slate-900 p-6 rounded-2xl border border-slate-700">
                    <h4 class="font-bold text-white mb-2">Without Lock 🔓</h4>
                    <div class="space-y-2 text-sm font-mono">
                        <div class="text-red-400">Thread A: Read count (0)</div>
                        <div class="text-blue-400">Thread B: Read count (0)</div>
                        <div class="text-red-400">Thread A: Write 1</div>
                        <div class="text-blue-400">Thread B: Write 1</div>
                        <div class="text-white border-t border-slate-600 pt-2">Result: 1 (Should be 2!)</div>
                    </div>
                </div>

                <div class="bg-slate-900 p-6 rounded-2xl border border-green-500/50">
                    <h4 class="font-bold text-white mb-2">With Lock 🔒</h4>
                    <div class="space-y-2 text-sm font-mono">
                        <div class="text-red-400">Thread A: Has Key. Read 0. Write 1.</div>
                        <div class="text-blue-400 opacity-50">Thread B: WAITING...</div>
                        <div class="text-red-400">Thread A: Return Key.</div>
                        <div class="text-blue-400">Thread B: Has Key. Read 1. Write 2.</div>
                        <div class="text-white border-t border-slate-600 pt-2">Result: 2 ✅</div>
                    </div>
                </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">SafeCounter.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">class Counter {
    private int count = 0;
    
    // Only ONE thread can enter this method at a time
    public synchronized void increment() {
        count++;
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "7.4",
        title: "7.4 ExecutorService: Thread Pools",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Stop using \`new Thread()\`</h3>
            <p>Creating a thread interacts with the OS kernel. It is expensive. Solution? Reuse threads.</p>

            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-8">
                <thead><tr class="bg-slate-800 text-white"><th class="p-4">Pool Type</th><th class="p-4">Use Case</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-4 font-mono text-purple-400">FixedThreadPool(n)</td><td class="p-4">Stable server load. CPU core count.</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-mono text-purple-400">CachedThreadPool()</td><td class="p-4">Bursty short tasks. Spawns unlimited threads!</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-mono text-purple-400">SingleThreadExecutor()</td><td class="p-4">Sequential tasks.</td></tr>
                </tbody>
            </table>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">PoolParty.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.util.concurrent.*;

ExecutorService pool = Executors.newFixedThreadPool(2);

// Submit Tasks
pool.submit(() -> System.out.println("Job 1"));
pool.submit(() -> System.out.println("Job 2"));
pool.submit(() -> System.out.println("Job 3")); 
// Job 3 waits until a thread is free

pool.shutdown(); // Don't forget this!</code></pre>
</div>

        </div>
        `
      },
      {
        id: "7.5",
        title: "7.5 CompletableFuture: Modern Async",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Promise-based Concurrency</h3>
            <p>Combine multiple async tasks without "Callback Hell".</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">AsyncFlow.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">CompletableFuture.supplyAsync(() -> {
    return fetchUserData(userId); // Runs in ForkJoinPool
})
.thenApply(user -> {
    return fetchOrders(user); // Runs when user is ready
})
.thenAccept(orders -> {
    System.out.println("Got " + orders.size() + " orders");
})
.exceptionally(ex -> {
    System.err.println("Something went wrong: " + ex);
    return null;
});</code></pre>
</div>


            
    <div class="p-6 rounded-2xl border border-green-500/30 bg-green-900/10 text-green-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Blocking vs Non-Blocking
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Calling \`.get()\` on a Future BLOCKS the main thread. Using \`.thenAccept()\` is NON-BLOCKING (Reactive).</div>
    </div>
    
        </div>
        `
      },
      {
        id: "7.6",
        title: "7.6 Mini Project: Concurrency Stock Fetcher",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Fetch stock prices for 5 companies in PARALLEL using a Thread Pool.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">WallStreet.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.util.concurrent.*;
import java.util.*;

record Stock(String name, double price) {}

public class StockFetcher {
    public static void main(String[] args) throws Exception {
        var pool = Executors.newFixedThreadPool(3);
        var tickers = List.of("AAPL", "GOOG", "AMZN", "MSFT", "TSLA");
        
        List<Future<Stock>> futures = new ArrayList<>();

        // 1. Submit all tasks
        for (String ticker : tickers) {
            Callable<Stock> task = () -> {
                System.out.println("Fetching " + ticker + "...");
                Thread.sleep(1000); // Simulate Network Delay
                return new Stock(ticker, Math.random() * 100);
            };
            futures.add(pool.submit(task));
        }

        // 2. Gather Results
        for (var f : futures) {
            Stock s = f.get(); // Blocks until specific task is done
            System.out.println("Got price: " + s);
        }

        pool.shutdown();
    }
}</code></pre>
</div>

            
            <p>Notice how 5 stocks take ~2 seconds (with pool size 3) instead of 5 seconds sequentially!</p>
        </div>
        `
      },
    ]
  },
  {
    id: "8",
    title: "JVM Internals & Memory Management",
    lessons: [
      {
        id: "8.1",
        title: "8.1 Reflection: The Dark Arts",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Code inspecting Code</h3>
            <p>Reflection allows Java code to inspect and modify classes, fields, and methods <strong>at runtime</strong>, even if they are \`private\`.</p>

            <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div class="space-y-4">
                     <p>Usually, you write code like this:</p>
                     <div class="bg-slate-900 p-4 border border-slate-700 rounded-xl font-mono text-xs">
                        User u = new User();<br>
                        u.setName("Alice");
                     </div>
                     <p>With Reflection, you can do this:</p>
                     <div class="bg-purple-900/20 p-4 border border-purple-500/30 rounded-xl font-mono text-xs text-purple-300">
                        Class<?> c = Class.forName("com.app.User");<br>
                        Method m = c.getMethod("setName", String.class);<br>
                        m.invoke(obj, "Alice");
                     </div>
                </div>
                
                <div class="bg-slate-800 p-6 rounded-2xl border border-slate-600">
                    <h4 class="font-bold text-white mb-2">Power vs Compilers</h4>
                    <p class="text-sm text-slate-400">The compiler cannot check Reflection code. If you make a typo ("setNmae"), your code crashes at Runtime.</p>
                </div>
            </div>

            
    <div class="p-6 rounded-2xl border border-purple-500/30 bg-purple-900/10 text-purple-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Why use it?
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Frameworks like Spring, Hibernate, and JUnit run on Reflection. They don't know your class names ahead of time, so they inspect them dynamically to inject dependencies or run tests.</div>
    </div>
    

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Hacker.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.lang.reflect.*;

class Secret {
    private String code = "TopSecret";
}

public class Hacker {
    public static void main(String[] args) throws Exception {
        Secret s = new Secret();
        
        // s.code; // ERROR: private access
        
        // The Dark Arts 🪄
        Field f = s.getClass().getDeclaredField("code");
        f.setAccessible(true); // Break Encapsulation!
        
        String stolen = (String) f.get(s);
        System.out.println("Stolen: " + stolen);
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "8.2",
        title: "8.2 Creating Custom Annotations",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Metadata for your Code</h3>
            <p>Annotations (\`@Overide\`, \`@Test\`) are just metadata. They do NOTHING on their own. You need Reflection to read and act on them.</p>
            
            <div class="flex flex-col md:flex-row gap-4 mb-6">
                 <div class="flex-1 bg-slate-900 p-4 rounded-xl border border-slate-700">
                    <h5 class="text-blue-400 font-bold mb-2">1. Define</h5>
                    <div class="font-mono text-xs text-slate-300">
                        @Retention(RUNTIME)<br>
                        @Target(METHOD)<br>
                        public @interface LogMe {}
                    </div>
                 </div>
                 <div class="flex-1 bg-slate-900 p-4 rounded-xl border border-slate-700">
                    <h5 class="text-green-400 font-bold mb-2">2. Annotate</h5>
                    <div class="font-mono text-xs text-slate-300">
                        @LogMe<br>
                        void deleteUser() Ellipsis
                    </div>
                 </div>
                 <div class="flex-1 bg-slate-900 p-4 rounded-xl border border-slate-700">
                    <h5 class="text-purple-400 font-bold mb-2">3. Process</h5>
                    <div class="font-mono text-xs text-slate-300">
                        if (m.isAnnotationPresent(LogMe.class))<br>
                        print("Logging...");
                    </div>
                 </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Important.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
// This is an Annotation Definition
public @interface Important {
    String priority() default "Low";
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "8.3",
        title: "8.3 Dynamic Proxies (AOP)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Intercepting Method Calls</h3>
            <p>How does Spring's \`@Transactional\` work? It creates a <strong>Proxy</strong> object that sits between you and the real object.</p>

            <div class="relative p-8 bg-slate-900 border border-slate-700 rounded-xl mb-8">
                <div class="flex items-center gap-4 justify-center">
                    <div class="p-3 bg-red-900/30 border border-red-500 rounded text-center">
                        <div class="text-xs text-red-200">Main</div>
                        <div class="text-[10px] text-slate-400">Caller</div>
                    </div>
                    
                    <div class="text-slate-500">➡️</div>
                    
                    <div class="p-3 bg-purple-900/50 border border-purple-500 rounded text-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        <div class="font-bold text-purple-200">Proxy</div>
                        <div class="text-[10px] text-purple-300">"I will start a DB txn"</div>
                    </div>
                    
                    <div class="text-slate-500">➡️</div>

                    <div class="p-3 bg-green-900/30 border border-green-500 rounded text-center">
                        <div class="text-xs text-green-200">Service</div>
                        <div class="text-[10px] text-slate-400">Target</div>
                    </div>
                </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Middleware.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.lang.reflect.*;

interface Service { void work(); }

public class ProxyDemo {
    public static void main(String[] args) {
        Service real = () -> System.out.println("Working...");

        // Create Proxy Interceptor
        Service proxy = (Service) Proxy.newProxyInstance(
            Service.class.getClassLoader(),
            new Class[]{Service.class},
            (obj, method, params) -> {
                System.out.println(">>> Log Before");
                Object res = method.invoke(real, params);
                System.out.println("<<< Log After");
                return res;
            }
        );
        
        proxy.work(); 
        // Output:
        // >>> Log Before
        // Working...
        // <<< Log After
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "8.4",
        title: "8.4 Mini Project: DIY Dependency Injection",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal: Build 'TinySpring'</h3>
            <p>Create a framework that automatically creates objects and injects dependencies using \`@Inject\`.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">TinySpring.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// 1. The Annotation
@Retention(RetentionPolicy.RUNTIME) 
@interface Inject {}

// 2. The Service
class Database {
    void connect() { System.out.println("DB Connected"); }
}

class UserService {
    @Inject Database db; // Needs Injection!
    
    void save() {
        db.connect();
        System.out.println("User Saved");
    }
}

// 3. The Framework (TinySpring)
class Context {
    public static <T> T getBean(Class<T> clazz) throws Exception {
        T obj = clazz.getDeclaredConstructor().newInstance();
        
        // Scan fields for @Inject
        for (Field f : clazz.getDeclaredFields()) {
            if (f.isAnnotationPresent(Inject.class)) {
                Object dep = f.getType().getDeclaredConstructor().newInstance();
                f.setAccessible(true);
                f.set(obj, dep); // Inject dependency!
            }
        }
        return obj;
    }
}

// 4. Usage
public class Main {
    public static void main(String[] args) throws Exception {
        // Magic! We never created 'new Database()' manually
        UserService service = Context.getBean(UserService.class);
        service.save(); 
    }
}</code></pre>
</div>

            
            <p>You just built the core logic of Spring Boot!</p>
        </div>
        `
      },
    ]
  },
  {
    id: "9",
    title: "Unit Testing with JUnit 5 & Mockito",
    lessons: [
      {
        id: "9.1",
        title: "9.1 JVM Architecture: Under the Hood",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">How Java Runs</h3>
            <p>"Write Once, Run Anywhere" is possible because of the JVM (Java Virtual Machine).</p>

            <div class="grid md:grid-cols-3 gap-4 mb-8">
                <div class="bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/30 text-center">
                    <div class="text-4xl mb-2">📥</div>
                    <div class="font-bold text-indigo-300">Class Loader</div>
                    <div class="text-xs text-slate-400 mt-2">Loads .class files from disk into memory.</div>
                </div>
                <div class="bg-purple-900/20 p-4 rounded-xl border border-purple-500/30 text-center">
                    <div class="text-4xl mb-2">💾</div>
                    <div class="font-bold text-purple-300">Runtime Data</div>
                    <div class="text-xs text-slate-400 mt-2">Heap, Stack, Metaspace (Memory).</div>
                </div>
                <div class="bg-green-900/20 p-4 rounded-xl border border-green-500/30 text-center">
                    <div class="text-4xl mb-2">⚙️</div>
                    <div class="font-bold text-green-300">Execution Engine</div>
                    <div class="text-xs text-slate-400 mt-2">Interpreter + JIT Compiler + GC.</div>
                </div>
            </div>

            
    <div class="p-6 rounded-2xl border border-orange-500/30 bg-orange-900/10 text-orange-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            The JIT (Just-In-Time) Compiler
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Java starts slow (Interpreted) but gets faster! The JIT compiler watches your code. If a method is called often ('Hot Spot'), it compiles it to Native Machine Code for C++ level speed.</div>
    </div>
    
        </div>
        `
      },
      {
        id: "9.2",
        title: "9.2 Memory Areas: Stack vs Heap vs Metaspace",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Where does data live?</h3>
            
            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-8">
                <thead><tr class="bg-slate-800 text-white"><th class="p-4">Area</th><th class="p-4">Scope</th><th class="p-4">Stores</th><th class="p-4">Cleanup</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-4 font-bold text-green-400">Stack</td><td class="p-4">Thread-Local</td><td class="p-4">Primitives, References, Methods</td><td class="p-4">Auto (Pop)</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-bold text-blue-400">Heap</td><td class="p-4">Global (Shared)</td><td class="p-4">Objects (\`new ...\`)</td><td class="p-4">Garbage Collector</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-bold text-purple-400">Metaspace</td><td class="p-4">Global</td><td class="p-4">Class Metadata (static)</td><td class="p-4">GC (Rarely)</td></tr>
                </tbody>
            </table>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">MemoryScope.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">public void method() {
    int age = 25;           // Stack
    User u = new User();    // 'u' reference is Stack. Object is Heap.
} // 'age' and 'u' popped. Object stays in Heap until GC runs.</code></pre>
</div>

        </div>
        `
      },
      {
        id: "9.3",
        title: "9.3 Garbage Collection Algorithms",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Janitor of Java</h3>
            <p>GC deletes objects that are no longer reachable (Unreferenced).</p>

            <div class="space-y-4 mb-8">
                <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl">
                    <h5 class="text-yellow-400 font-bold">1. Parallel GC</h5>
                    <p class="text-sm text-slate-400">Freezes the app ("Stop The World") to clean. High throughput, but noticeable pauses.</p>
                </div>
                <div class="p-4 bg-slate-900 border border-blue-500/50 rounded-xl">
                    <h5 class="text-blue-400 font-bold">2. G1 GC (Garbage First) - DEFAULT</h5>
                    <p class="text-sm text-slate-400">Splits heap into regions. Cleans indiscriminately. Good balance of latency/throughput.</p>
                </div>
                <div class="p-4 bg-slate-900 border border-green-500/50 rounded-xl">
                    <h5 class="text-green-400 font-bold">3. ZGC (Java 15+)</h5>
                    <p class="text-sm text-slate-400"><strong>Sub-millisecond pauses!</strong> Can handle Terabytes of heap without lagging. The future.</p>
                </div>
            </div>

            
    <div class="p-6 rounded-2xl border border-red-500/30 bg-red-900/10 text-red-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            System.gc()
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">NEVER call this manually. It's just a suggestion to the JVM options. You cannot force GC to run.</div>
    </div>
    
        </div>
        `
      },
      {
        id: "9.4",
        title: "9.4 Mini Project: Memory Leak Simulator",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Intentionally crash the JVM with an <code>OutOfMemoryError</code> to understand leaks.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">LeakyBucket.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.util.*;

public class MemoryLeak {
    // static keeps references alive FOREVER!
    private static List<Double> leak = new ArrayList<>();

    public static void main(String[] args) throws InterruptedException {
        System.out.println("Starting leak...");
        
        while (true) {
            // Allocating 1M doubles continuously
            Double[] data = new Double[100000]; 
            leak.add(1.0); // Holding reference!
            
            Thread.sleep(10);
        }
        // Result: Exception in thread "main" java.lang.OutOfMemoryError: Java heap space
    }
}</code></pre>
</div>

            
            <p><strong>Fix:</strong> Don't use \`static\` lists for temporary data. Or verify you \`remove()\` items when done.</p>
        </div>
        `
      },
    ]
  },
  {
    id: "10",
    title: "Build Tools (Maven/Gradle)",
    lessons: [
      {
        id: "10.1",
        title: "10.1 Why Unit Testing Matters",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">No Tests = Legacy Code</h3>
            <p>If you don't test your code, you are afraid to change it. If you are afraid to change it, it rots.</p>

            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                    <h4 class="text-red-400 font-bold mb-2">❌ Manual Testing</h4>
                    <p class="text-xs text-slate-400">Run App > Login > Click Button > Check Logs.</p>
                    <p class="text-sm mt-4">Slow, error-prone, humans get bored.</p>
                </div>
                <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl">
                    <h4 class="text-green-400 font-bold mb-2">✅ Automated Testing</h4>
                    <p class="text-xs text-slate-400">Run <code>mvn test</code>.</p>
                    <p class="text-sm mt-4">Fast (ms), repeatable, runs on every commit.</p>
                </div>
            </div>

            
    <div class="p-6 rounded-2xl border border-purple-500/30 bg-purple-900/10 text-purple-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            JUnit 5
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">The standard testing library. We use **Jupiter** (the new engine). Annotations live in \`org.junit.jupiter.api\`.</div>
    </div>
    

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">FirstTest.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    
    @Test
    void shouldAddTwoNumbers() {
        Calculator c = new Calculator();
        int result = c.add(2, 3);
        
        // Expectation, Actual, Message
        assertEquals(5, result, "2 + 3 should be 5");
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "10.2",
        title: "10.2 The Test Lifecycle",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Setup and Teardown</h3>
            <p>Don't copy-paste setup code in every test method.</p>
            
            <div class="flex flex-col gap-2 mb-8 text-sm font-mono">
                <div class="bg-blue-900/30 p-3 rounded border-l-4 border-blue-500">
                    <span class="text-blue-300 font-bold">@BeforeAll</span> 
                    <span class="text-slate-500 ml-4">// Run ONCE before all tests (Static)</span>
                </div>
                <div class="bg-green-900/30 p-3 rounded border-l-4 border-green-500 ml-8">
                    <span class="text-green-300 font-bold">@BeforeEach</span> 
                    <span class="text-slate-500 ml-4">// Run before EACH test method</span>
                </div>
                <div class="bg-slate-800 p-3 rounded border-l-4 border-slate-500 ml-16">
                    <span class="text-white font-bold">@Test</span> 
                    <span class="text-slate-500 ml-4">// The actual test logic</span>
                </div>
                <div class="bg-orange-900/30 p-3 rounded border-l-4 border-orange-500 ml-8">
                    <span class="text-orange-300 font-bold">@AfterEach</span> 
                    <span class="text-slate-500 ml-4">// Cleanup after EACH test</span>
                </div>
                <div class="bg-red-900/30 p-3 rounded border-l-4 border-red-500">
                    <span class="text-red-300 font-bold">@AfterAll</span> 
                    <span class="text-slate-500 ml-4">// Run ONCE after all tests</span>
                </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">LifecycleTest.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">class DatabaseTest {
    static DBServer db;

    @BeforeAll
    static void initDB() {
        db = new DBServer();
        db.start();
    }

    @BeforeEach
    void clearTable() {
        db.truncate("users"); // Clean state for every test!
    }

    @Test
    void testInsert() { ... }

    @AfterAll
    static void stopDB() {
        db.stop();
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "10.3",
        title: "10.3 Mocking Dependencies (Mockito)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Fake it 'til you make it</h3>
            <p>Unit tests should be ISOLATED. If your \`UserService\` talks to a real DB, it's an Integration Test, not a Unit Test.</p>
            <p>We use <strong>Mockito</strong> to create fake (mock) objects.</p>

            <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl mb-6">
                <div class="flex items-center gap-4">
                    <div class="p-3 bg-green-500 text-black font-bold rounded">UserService</div>
                    <div class="text-slate-500">calls ➡️</div>
                    <div class="p-3 bg-purple-900/50 border border-dashed border-purple-500 text-purple-200 rounded">
                        MockRepository inside Mockito
                        <div class="text-[10px] text-purple-400 mt-1">"I pretend to be the DB"</div>
                    </div>
                </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">MockTest.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import static org.mockito.Mockito.*;

// 1. Create the Mock
UserRepository mockRepo = mock(UserRepository.class);

// 2. Define Behavior (Stubbing)
// "When findById(1) is called, return 'Alice'"
when(mockRepo.findById(1)).thenReturn(new User("Alice"));

// 3. Inject Mock into System Under Test
UserService service = new UserService(mockRepo);

// 4. Run Logic
String name = service.getUserName(1);

// 5. Verify & Assert
assertEquals("Alice", name);
verify(mockRepo).findById(1); // Ensure DB was actually called</code></pre>
</div>

        </div>
        `
      },
      {
        id: "10.4",
        title: "10.4 TDD: Red-Green-Refactor",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Clean Code Workflow</h3>
            <p>Don't write the code first. Write the test first.</p>

            <div class="flex flex-col md:flex-row gap-6 mb-8 text-center">
                 <div class="flex-1 p-6 bg-red-900/20 border border-red-500 rounded-2xl">
                    <div class="text-2xl mb-2">🔴 Red</div>
                    <div class="text-sm text-slate-300">Write a test that fails (because the code doesn't exist yet).</div>
                 </div>
                 <div class="flex-1 p-6 bg-green-900/20 border border-green-500 rounded-2xl">
                    <div class="text-2xl mb-2">🟢 Green</div>
                    <div class="text-sm text-slate-300">Write the *silliest*, simplest code to pass the test.</div>
                 </div>
                 <div class="flex-1 p-6 bg-blue-900/20 border border-blue-500 rounded-2xl">
                    <div class="text-2xl mb-2">🔵 Refactor</div>
                    <div class="text-sm text-slate-300">Clean up the code safely (test protects you).</div>
                 </div>
            </div>
        </div>
        `
      },
      {
        id: "10.5",
        title: "10.5 Mini Project: TDD Bank Account",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal</h3>
            <p>Implement a \`BankAccount\` class using pure TDD. Requirements:</p>
            <ul class="list-disc list-inside text-sm text-slate-400 mb-4">
                <li>Deposit logic.</li>
                <li>Withdraw logic (prevent overdraft).</li>
            </ul>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">BankAccountTest.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class BankAccountTest {
    BankAccount account;

    @BeforeEach
    void setup() {
        account = new BankAccount();
    }

    @Test
    void shouldDepositMoney() {
        account.deposit(100);
        assertEquals(100, account.getBalance());
    }

    @Test
    void shouldWithdrawMoney() {
        account.deposit(100);
        account.withdraw(40);
        assertEquals(60, account.getBalance());
    }

    @Test
    void shouldPreventOverdraft() {
        account.deposit(50);
        
        // Assert Exception is Thrown
        assertThrows(IllegalArgumentException.class, () -> {
            account.withdraw(100);
        });
    }
}</code></pre>
</div>

            
            <p class="text-green-400 font-bold mt-4">Achievement Unlocked: Confidence in Code.</p>
        </div>
        `
      },
    ]
  },
  {
    id: "11",
    title: "Database Access (JDBC, JPA, Hibernate)",
    lessons: [
      {
        id: "11.1",
        title: "11.1 Maven vs Gradle: The Battle",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">How do we run this thing?</h3>
            <p>You can compile with \`javac\`, but for big projects you need a Build Tool to handle libraries, testing, and packaging.</p>

            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                    <h4 class="text-red-400 font-bold mb-2">Maven (The Elder)</h4>
                    <ul class="list-disc list-inside text-sm text-slate-400 space-y-2">
                        <li>Uses <strong>XML</strong> (\`pom.xml\`).</li>
                        <li>Strict standards "Convention over Configuration".</li>
                        <li>Huge ecosystem.</li>
                        <li>Slower than Gradle.</li>
                    </ul>
                </div>
                <div class="bg-blue-900/10 border border-blue-500/30 p-6 rounded-2xl">
                    <h4 class="text-blue-400 font-bold mb-2">Gradle (The Challenger)</h4>
                    <ul class="list-disc list-inside text-sm text-slate-400 space-y-2">
                        <li>Uses <strong>Groovy/Kotlin</strong> DSL.</li>
                        <li>Extremely flexible.</li>
                        <li>Standard for <strong>Android</strong>.</li>
                        <li>Faster (Incremental builds).</li>
                    </ul>
                </div>
            </div>

            
    <div class="p-6 rounded-2xl border border-purple-500/30 bg-purple-900/10 text-purple-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Which one?
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">If you want structure and stability: **Maven**. If you need flexibility and speed: **Gradle**. In this course, we focus on Maven as it's still the enterprise king.</div>
    </div>
    
        </div>
        `
      },
      {
        id: "11.2",
        title: "11.2 Anatomy of pom.xml",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Project Object Model</h3>
            <p>Every Maven project has a \`pom.xml\` at its root. It tells Maven <strong>WHAT</strong> to build.</p>

            <div class="flex flex-col gap-4 text-sm font-mono mb-6">
                 <div class="bg-slate-900 p-4 border-l-4 border-orange-500 rounded">
                    <span class="text-orange-400 font-bold">GAV Coordinates</span><br>
                    <span class="text-slate-400">GroupId, ArtifactId, Version. Ideally unique worldwide.</span>
                 </div>
                 <div class="bg-slate-900 p-4 border-l-4 border-blue-500 rounded">
                    <span class="text-blue-400 font-bold">Dependencies</span><br>
                    <span class="text-slate-400">The JARs your project needs (JUnit, Spring, Jackson).</span>
                 </div>
                 <div class="bg-slate-900 p-4 border-l-4 border-green-500 rounded">
                    <span class="text-green-400 font-bold">Plugins</span><br>
                    <span class="text-slate-400">Extensions to the build process (Compiler version, Shade jar, Tests).</span>
                 </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">pom.xml</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-xml"><project>
    <groupId>com.flyeng</groupId>
    <artifactId>awesome-app</artifactId>
    <version>1.0.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>21</maven.compiler.source>
    </properties>

    <dependencies>
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>2.10.1</version>
        </dependency>
    </dependencies>
</project></code></pre>
</div>

        </div>
        `
      },
      {
        id: "11.3",
        title: "11.3 Dependency Management (Scopes)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Not all JARs are equal</h3>
            <p>When you add a dependency, you can specify a <strong>Scope</strong>.</p>

            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-8">
                <thead><tr class="bg-slate-800 text-white"><th class="p-4">Scope</th><th class="p-4">Use Case</th><th class="p-4">Example</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-4 font-bold text-blue-400">compile</td><td class="p-4">Needed everywhere (Default).</td><td class="p-4">Jackson, StringUtils</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-bold text-green-400">test</td><td class="p-4">Only for \`src/test\`. Not in final JAR.</td><td class="p-4">JUnit, Mockito</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-bold text-orange-400">provided</td><td class="p-4">Needed to compile, but Server has it at runtime.</td><td class="p-4">Servlet API (Tomcat has it)</td></tr>
                </tbody>
            </table>

            
    <div class="p-6 rounded-2xl border border-red-500/30 bg-red-900/10 text-red-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Transitive Dependencies
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">If you depend on **Spring Boot**, Maven automatically downloads **everything Spring needs** (Logging, YAML parser, etc.). This is convenient but can lead to 'JARDLL Hell' if versions conflict.</div>
    </div>
    
        </div>
        `
      },
      {
        id: "11.4",
        title: "11.4 Mini Project: Multi-Module Build",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal: Modular Monolith</h3>
            <p>Split a large project into smaller, reusable sub-modules managed by a Parent POM.</p>
            
            <div class="font-mono text-sm bg-slate-900 p-6 rounded-xl border border-slate-700 mb-6">
                my-app (Parent)<br>
                ├── pom.xml (Modules: core, api)<br>
                │<br>
                ├── core (Library)<br>
                │   └── pom.xml (Logic)<br>
                │<br>
                └── api (Web Service)<br>
                    └── pom.xml (Depends on: core)
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">structure.xml</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-xml"><!-- Parent POM -->
<modules>
    <module>core</module>
    <module>api</module>
</modules>

<!-- API POM -->
<dependencies>
    <dependency>
        <groupId>com.myapp</groupId>
        <artifactId>core</artifactId>
        <version>\${project.version}</version>
    </dependency>
</dependencies></code></pre>
</div>


            <p>Run <code>mvn install</code> on the Parent, and it builds everything in the correct order!</p>
        </div>
        `
      },
      {
        id: "11.5",
        title: "11.5 The Java Module System (JPMS)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Strong Encapsulation (Java 9+)</h3>
            <p>Before Java 9, \`public\` meant "public to the world". JPMS allows you to make classes \`public\` to other classes in your module, but <strong>hidden</strong> from the outside world.</p>

            <div class="grid md:grid-cols-2 gap-8 items-center mb-6">
                 <div>
                    <h5 class="text-blue-400 font-bold mb-2">Why?</h5>
                    <ul class="list-disc list-inside text-sm text-slate-400 space-y-2">
                        <li><strong>Security:</strong> Hide internal implementation details (like \`sun.misc.Unsafe\`).</li>
                        <li><strong>Performance:</strong> Faster startup by loading only needed modules.</li>
                    </ul>
                 </div>
                 <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl">
                    <div class="text-[10px] text-slate-500 mb-1">module-info.java</div>
                    
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">module-info.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-xml">module com.myapp.core {
    // Only export this package
    exports com.myapp.core.api;
    
    // Require other modules
    requires java.sql;
    requires com.google.gson;
}</code></pre>
</div>

                 </div>
            </div>
            
    <div class="p-6 rounded-2xl border border-green-500/30 bg-green-900/10 text-green-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            The Unnamed Module
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">If you don't use \`module-info.java\`, everything goes into the 'Unnamed Module' which behaves like old Java (everything is exported). This ensures backward compatibility.</div>
    </div>
    
        </div>
        `
      },
    ]
  },
  {
    id: "12",
    title: "Design Patterns in Java",
    lessons: [
      {
        id: "12.1",
        title: "12.1 JDBC: The Foundation",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Talking to Databases</h3>
            <p>JDBC (Java Database Connectivity) is the standard API. Every higher-level tool (Hibernate, Spring Data) uses JDBC under the hood.</p>
            
            <div class="flex flex-col gap-4 text-sm font-mono mb-6">
                <div class="p-4 border-l-4 border-blue-500 bg-slate-900 shadow">
                    <span class="text-blue-400 font-bold">1. Driver</span> Manager sends request to Driver (Postgres, MySQL).
                </div>
                <div class="p-4 border-l-4 border-green-500 bg-slate-900 shadow">
                    <span class="text-green-400 font-bold">2. Connection</span> TCP Socket is opened. Expensive!
                </div>
                <div class="p-4 border-l-4 border-yellow-500 bg-slate-900 shadow">
                    <span class="text-yellow-400 font-bold">3. Statement</span> SQL is sent to the DB.
                </div>
                <div class="p-4 border-l-4 border-purple-500 bg-slate-900 shadow">
                    <span class="text-purple-400 font-bold">4. ResultSet</span> Rows are returned.
                </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">RawJDBC.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.sql.*;

String url = "jdbc:postgresql://localhost:5432/mydb";
try (Connection conn = DriverManager.getConnection(url, "user", "pass")) {
    System.out.println("Connected to DB!");
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "12.2",
        title: "12.2 SQL Injection & PreparedStatements",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Don't Get Hacked</h3>
            <p>NEVER concatenate strings into your SQL. It allows hackers to run arbitary commands.</p>

            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
                    <h4 class="text-red-400 font-bold mb-2">❌ Vulnerable</h4>
                    <pre class="text-xs text-red-200">"SELECT * FROM users WHERE name = '" + input + "'";</pre>
                    <p class="text-xs text-slate-400 mt-2">Input: <code>' OR '1'='1</code> dumps entire DB.</p>
                </div>
                <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl">
                    <h4 class="text-green-400 font-bold mb-2">✅ Safe (Prepared)</h4>
                    <pre class="text-xs text-green-200">"SELECT * FROM users WHERE name = ?";</pre>
                    <p class="text-xs text-slate-400 mt-2">The DB treats input strictly as data, never as code.</p>
                </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">SafeInsert.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">String sql = "INSERT INTO users (name, email) VALUES (?, ?)";

// PreparedStatement pre-compiles the SQL
try (PreparedStatement stmt = conn.prepareStatement(sql)) {
    stmt.setString(1, "Alice");
    stmt.setString(2, "alice@example.com");
    
    int rowsAffected = stmt.executeUpdate();
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "12.3",
        title: "12.3 JPA & Hibernate (The ORM Magic)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Stop Writing SQL</h3>
            <p><strong>ORM (Object-Relational Mapping)</strong> maps Java Classes to DB Tables automatically.</p>
            <ul class="list-disc list-inside text-slate-400 mb-6 space-y-2">
                <li><strong>JPA (Java Persistence API):</strong> The Interface (Specification).</li>
                <li><strong>Hibernate:</strong> The Implementation (The Engine).</li>
            </ul>

            <div class="grid md:grid-cols-2 gap-4">
                 <div class="bg-slate-900 p-4 rounded-xl border border-slate-700">
                    <p class="text-center font-bold text-white mb-2">Java Class</p>
                    
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">User.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">@Entity
@Table(name="users")
class User {
    @Id
    Long id;
    String name;
}</code></pre>
</div>

                 </div>
                 <div class="flex items-center justify-center">
                    <p class="text-2xl">➡️ Maps To ➡️</p>
                 </div>
                 <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 col-span-2 md:col-span-1">
                    <p class="text-center font-bold text-white mb-2">DB Table</p>
                    <div class="font-mono text-xs text-green-400 p-4 bg-black rounded h-full">
                        CREATE TABLE users (<br>
                        &nbsp;&nbsp;id BIGINT PRIMARY KEY,<br>
                        &nbsp;&nbsp;name VARCHAR(255)<br>
                        );
                    </div>
                 </div>
            </div>
        </div>
        `
      },
      {
        id: "12.4",
        title: "12.4 Mini Project: Transactional Bank",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal: ACID Transactions</h3>
            <p>Ensure that transferring money is Atomic. If the deposit fails, the withdrawal MUST rollback.</p>

            
    <div class="p-6 rounded-2xl border border-orange-500/30 bg-orange-900/10 text-orange-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            ACID
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Atomicity (All or Nothing), Consistency (Valid State), Isolation (Concurrency), Durability (Saved forever).</div>
    </div>
    

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Transaction.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">import java.sql.*;

public class BankService {
    public void transfer(Connection conn, int fromId, int toId, double amount) throws SQLException {
        try {
            // 1. Disable Auto-Commit (Start Transaction)
            conn.setAutoCommit(false);

            // 2. Withdraw
            withdraw(conn, fromId, amount);

            // 3. Simulate Crash?
            if (amount > 1000) throw new RuntimeException("Server Crash!");

            // 4. Deposit
            deposit(conn, toId, amount);

            // 5. Commit (Save Everything)
            conn.commit();
            System.out.println("Transfer Success!");

        } catch (Exception e) {
            // 6. Rollback (Undo Everything)
            conn.rollback();
            System.err.println("Transfer Failed. Money Restored.");
        } finally {
            conn.setAutoCommit(true);
        }
    }
}</code></pre>
</div>

        </div>
        `
      },
    ]
  },
  {
    id: "13",
    title: "Spring Boot Basics",
    lessons: [
      {
        id: "13.1",
        title: "13.1 Singleton: The One & Only",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Problem</h3>
            <p>You need exactly ONE instance of a class (e.g., Database Connection Pool, Logger, Config Loader).</p>

            <div class="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl mb-6">
                <h4 class="text-red-400 font-bold mb-2">❌ The Wrong Way (Lazy Loading)</h4>
                <p class="text-xs text-slate-400">Not thread-safe! Two threads can enter the <code>if (instance == null)</code> block at the same time.</p>
            </div>

            <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl mb-8">
                <h4 class="text-green-400 font-bold mb-2">✅ The Best Way (Enums)</h4>
                <p class="text-xs text-slate-400">Joshua Bloch (Author of Effective Java) recommends this. It handles Thread Safety + Serialization automatically.</p>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Database.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">public enum Database {
    INSTANCE; // The Single Instance
    
    // Your methods
    public void connect() {
        System.out.println("Connected to DB!");
    }
}

// Usage
Database.INSTANCE.connect();</code></pre>
</div>

        </div>
        `
      },
      {
        id: "13.2",
        title: "13.2 Factory & Builder: Construction",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Factory Pattern</h3>
            <p>Don't call <code>new</code> directly. Delegate creation to a factory method. Allows switching implementations without changing client code.</p>
            
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Factory.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// Factory Method
Shape s1 = ShapeFactory.create("CIRCLE");
Shape s2 = ShapeFactory.create("SQUARE");</code></pre>
</div>

            
            <h3 class="text-2xl font-bold text-white mb-4 mt-8">Builder Pattern</h3>
            <p>Constructors with 10 parameters are ugly and error-prone. Use a Builder.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Builder.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// Clean & Readable
User user = new User.Builder()
    .firstName("Alice")
    .lastName("Smith")
    .email("alice@mail.com")
    .isActive(true)
    .build();</code></pre>
</div>

            
            
    <div class="p-6 rounded-2xl border border-purple-500/30 bg-purple-900/10 text-purple-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Lombok @Builder
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">In real life, don't write Builders manually. Just annotate your class with \`@Builder\` from Project Lombok.</div>
    </div>
    
        </div>
        `
      },
      {
        id: "13.3",
        title: "13.3 Observer: Event Listeners",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Don't Call Me, I'll Call You</h3>
            <p>One object (Subject) notifies a list of dependents (Observers) automatically when state changes. Used in UI (OnClick) and YouTube (Subscribers).</p>

            <div class="flex items-center gap-4 justify-center mb-8">
                <div class="p-4 bg-orange-500 text-black font-bold rounded-full">Channel</div>
                <div class="h-1 w-16 bg-slate-600"></div>
                <div class="flex flex-col gap-2">
                    <div class="p-2 bg-blue-900 border border-blue-500 rounded text-xs">Subscriber 1</div>
                    <div class="p-2 bg-blue-900 border border-blue-500 rounded text-xs">Subscriber 2</div>
                    <div class="p-2 bg-blue-900 border border-blue-500 rounded text-xs">Subscriber 3</div>
                </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">YouTube.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">interface Observer { void update(String news); }

class Channel {
    private List<Observer> subs = new ArrayList<>();
    
    void subscribe(Observer o) { subs.add(o); }
    
    void uploadVideo(String title) {
        for (Observer sub : subs) {
            sub.update("New Video: " + title);
        }
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "13.4",
        title: "13.4 Strategy: Swappable Logic",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">No More massive 'if-else' chains</h3>
            <p>Define a family of algorithms, encapsulate each one, and make them interchangeable at runtime.</p>
            
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Payment.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// The Interface
interface PayStrategy { void pay(int amount); }

// The Strategies
class CreditCard implements PayStrategy { ... }
class PayPal implements PayStrategy { ... }
class Crypto implements PayStrategy { ... }

// The Context
class Cart {
    void checkout(PayStrategy method) {
        method.pay(total); // Polymorphism doing the work!
    }
}

// Usage: Swap behavior instantly
cart.checkout(new PayPal());
cart.checkout(new Crypto());</code></pre>
</div>

        </div>
        `
      },
      {
        id: "13.5",
        title: "13.5 Mini Project: Pattern-Based Notification",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal: Notification System</h3>
            <p>Combine <strong>Factory</strong> (to create notifiers) and <strong>Singleton</strong> (for config).</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">System.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">enum Config { INSTANCE; String apiKey = "SECRET"; }

interface Notifier { void send(String msg); }

class EMS implements Notifier { 
    public void send(String m) { System.out.println("Email: " + m); }
}

class SMS implements Notifier { 
    public void send(String m) { System.out.println("SMS: " + m); }
}

class NotifierFactory {
    public static Notifier get(String type) {
        return switch(type) {
            case "EMAIL" -> new EMS();
            case "SMS" -> new SMS();
            default -> throw new IllegalArgumentException();
        };
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Using Key: " + Config.INSTANCE.apiKey);
        
        Notifier n = NotifierFactory.get("SMS");
        n.send("Hello Patterns!");
    }
}</code></pre>
</div>

        </div>
        `
      },
    ]
  },
  {
    id: "14",
    title: "REST APIs with Spring Web",
    lessons: [
      {
        id: "14.1",
        title: "14.1 Spring vs Spring Boot",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Why Boot?</h3>
            <p><strong>Spring Framework</strong> is the engine. It provides Dependency Injection, Transaction Management, etc. But setting it up requires XML or heavy config.</p>
            <p><strong>Spring Boot</strong> is the "Convention over Configuration" layer. It autoconfigures everything.</p>

            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
                    <h4 class="text-slate-400 font-bold mb-2">Old Spring</h4>
                    <p class="text-xs text-slate-500">1. Download Tomcat.<br>2. Configure \`web.xml\`.<br>3. Configure \`dispatcher-servlet.xml\`.<br>4. Deploy WAR.</p>
                </div>
                <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-2xl">
                    <h4 class="text-green-400 font-bold mb-2">Spring Boot</h4>
                    <p class="text-xs text-slate-400">1. Run \`main()\` method.<br>2. Embedded Tomcat starts.<br>3. App is live.</p>
                </div>
            </div>

            
    <div class="p-6 rounded-2xl border border-green-500/30 bg-green-900/10 text-green-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Auto-Configuration
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Spring Boot scans your classpath. Found 'H2'? Configures an in-memory DB. Found 'Spring Web'? Configures Tomcat on port 8080.</div>
    </div>
    
        </div>
        `
      },
      {
        id: "14.2",
        title: "14.2 Dependency Injection (IoC)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Inversion of Control</h3>
            <p>You don't call <code>new Service()</code>. You ask Spring to give you the instance.</p>
            
            <div class="flex flex-col gap-4 text-sm font-mono mb-6">
                <div class="p-4 border-l-4 border-blue-500 bg-slate-900 shadow">
                    <span class="text-blue-400 font-bold">@Component</span> "Hey Spring, manage this class as a Bean."
                </div>
                <div class="p-4 border-l-4 border-purple-500 bg-slate-900 shadow">
                    <span class="text-purple-400 font-bold">@Autowired</span> "Hey Spring, inject a Bean here." (Prefer Constructor Injection though!)
                </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">DI.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">@Service // Special type of @Component
class UserService {
    public void register() { ... }
}

@RestController
class UserController {
    private final UserService service;

    // Spring sees this constructor and injects UserService automatically!
    public UserController(UserService service) {
        this.service = service;
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "14.3",
        title: "14.3 Building REST APIs",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Talking to the World</h3>
            <p>Expose your Java Logic as JSON endpoints.</p>

            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-8">
                <thead><tr class="bg-slate-800 text-white"><th class="p-4">Annotation</th><th class="p-4">HTTP Method</th><th class="p-4">Use Case</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-4 font-mono text-blue-400">@GetMapping</td><td class="p-4">GET</td><td class="p-4">Read Data</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-mono text-green-400">@PostMapping</td><td class="p-4">POST</td><td class="p-4">Create Data</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-mono text-orange-400">@PutMapping</td><td class="p-4">PUT</td><td class="p-4">Update Data</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-4 font-mono text-red-400">@DeleteMapping</td><td class="p-4">DELETE</td><td class="p-4">Remove Data</td></tr>
                </tbody>
            </table>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">StudentController.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">@RestController
@RequestMapping("/api/students")
class StudentController {

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Long id) {
        return new Student(id, "Alice"); // Automatically converts to JSON!
    }
    
    @PostMapping
    public Student create(@RequestBody Student s) {
        // Save to DB...
        return s;
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "14.4",
        title: "14.4 Validation & Exceptions",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Defensive API Design</h3>
            <p>Never trust client input. Use Bean Validation (Hibernate Validator).</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Validation.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">record StudentDTO(
    @NotBlank String name,
    @Min(18) int age,
    @Email String email
) {}

@PostMapping
public void create(@Valid @RequestBody StudentDTO dto) {
    // Only runs if DTO is valid
}</code></pre>
</div>


            <h3 class="text-2xl font-bold text-white mb-4 mt-8">Global Exception Handling</h3>
            <p>Don't let stack traces leak to the client. Use <code>@ControllerAdvice</code>.</p>
            
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">GlobalExceptionHandler.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">@RestControllerAdvice
class GlobalExceptionHandler {
    
    @ExceptionHandler(StudentNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handle404(Exception e) {
        return new ErrorResponse("OOPS", e.getMessage());
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "14.5",
        title: "14.5 Mini Project: Student Management",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal: Production-Ready API</h3>
            <p>Combine <strong>Repository</strong>, <strong>Service</strong>, and <strong>Controller</strong> layers.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">FullApp.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// 1. DATA
@Entity
class Student { @Id Long id; String name; }

// 2. REPO
interface StudentRepo extends JpaRepository<Student, Long> {}

// 3. SERVICE (Business Logic)
@Service
class StudentService {
    private final StudentRepo repo;
    public StudentService(StudentRepo repo) { this.repo = repo; }
    
    public List<Student> getAll() { return repo.findAll(); }
}

// 4. CONTROLLER (API)
@RestController
@RequestMapping("/v1/students")
class StudentAPI {
    private final StudentService service;
    public StudentAPI(StudentService service) { this.service = service; }

    @GetMapping
    public List<Student> list() { return service.getAll(); }
}</code></pre>
</div>

            
            <p class="text-blue-400 font-bold mt-4">Run this, and you have a full CRUD backend with one file!</p>
        </div>
        `
      },
    ]
  },
  {
    id: "15",
    title: "Advanced Spring Security (JWT, OAuth2)",
    lessons: [
      {
        id: "15.1",
        title: "15.1 AuthN vs AuthZ: The Security Gatekeepers",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Fundamental Split</h3>
                <p class="leading-relaxed mb-6">
                    Security is often confused as one big blob, but it is actually two distinct phases: <strong>Authentication (AuthN)</strong> and <strong>Authorization (AuthZ)</strong>. 
                    Spring Security separates these concerns entirely.
                </p>

                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <div class="bg-blue-900/10 border border-blue-500/30 p-6 rounded-2xl">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">🆔</span>
                            <h4 class="text-blue-400 font-bold text-xl">Authentication (AuthN)</h4>
                        </div>
                        <p class="text-sm text-slate-400 italic mb-4">"Who are you?"</p>
                        <ul class="space-y-2 text-xs">
                            <li class="flex gap-2"><span class="text-blue-500">Goal:</span> Verify Identity.</li>
                            <li class="flex gap-2"><span class="text-blue-500">Input:</span> Username/Password, API Key, FaceID.</li>
                            <li class="flex gap-2"><span class="text-blue-500">Failure:</span> 401 Unauthorized.</li>
                        </ul>
                    </div>
                    <div class="bg-purple-900/10 border border-purple-500/30 p-6 rounded-2xl">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">🔑</span>
                            <h4 class="text-purple-400 font-bold text-xl">Authorization (AuthZ)</h4>
                        </div>
                        <p class="text-sm text-slate-400 italic mb-4">"What are you allowed to do?"</p>
                        <ul class="space-y-2 text-xs">
                            <li class="flex gap-2"><span class="text-purple-500">Goal:</span> Verify Permissions.</li>
                            <li class="flex gap-2"><span class="text-purple-500">Input:</span> Roles (ADMIN, USER), Scopes.</li>
                            <li class="flex gap-2"><span class="text-purple-500">Failure:</span> 403 Forbidden.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">The Servlet Filter Chain</h4>
                <p class="text-sm text-slate-400 mb-4">
                    Spring Security is implemented as a chain of standard Servlet Filters. 
                    A request must survive the entire gauntlet to reach your Controller.
                </p>
                
                <div class="flex flex-col gap-2 font-mono text-sm max-w-2xl mx-auto">
                    <div class="flex items-center gap-4">
                        <div class="w-24 text-right text-slate-500">Request ➡️</div>
                        <div class="p-3 bg-slate-800 border border-slate-600 rounded-lg w-full text-center">ChannelProcessingFilter (HTTPS?)</div>
                    </div>
                    <div class="flex justify-center text-slate-600">⬇️</div>
                    <div class="flex items-center gap-4">
                        <div class="w-24 text-right text-slate-500"></div>
                        <div class="p-3 bg-blue-900/30 border border-blue-500 rounded-lg w-full text-center text-blue-300">AuthenticationFilter (Login?)</div>
                    </div>
                    <div class="flex justify-center text-slate-600">⬇️</div>
                    <div class="flex items-center gap-4">
                        <div class="w-24 text-right text-slate-500"></div>
                        <div class="p-3 bg-purple-900/30 border border-purple-500 rounded-lg w-full text-center text-purple-300">FilterSecurityInterceptor (Role?)</div>
                    </div>
                    <div class="flex justify-center text-slate-600">⬇️</div>
                    <div class="flex items-center gap-4">
                        <div class="w-24 text-right text-green-500 font-bold">Success! ➡️</div>
                        <div class="p-3 bg-green-900/30 border border-green-500 rounded-lg w-full text-center text-green-300">Your Controller</div>
                    </div>
                </div>
            </section>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">SecurityConfig.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    return http
        .csrf(AbstractHttpConfigurer::disable) // Disable CSRF for REST APIs
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/auth/**").permitAll() // Public Access
            .requestMatchers("/admin/**").hasRole("ADMIN") // AuthZ Check
            .anyRequest().authenticated() // AuthN Check
        )
        .build();
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "15.2",
        title: "15.2 Anatomy of a JWT",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Stateless Authentication</h3>
                <p class="leading-relaxed mb-6">
                    In a Monolith, we used <strong>Sessions</strong> (Server memory). 
                    In Microservices, we use <strong>Tokens</strong> (Client property). 
                    The server doesn't remember you; it verifies your "Signature".
                </p>
                
                <h4 class="text-xl font-bold text-white mb-4">Structure of a JSON Web Token</h4>
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-700 font-mono text-sm break-all">
                    <span class="text-red-400">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>
                    <span class="text-slate-500">.</span>
                    <span class="text-purple-400">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9</span>
                    <span class="text-slate-500">.</span>
                    <span class="text-blue-400">TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ</span>
                </div>

                <div class="grid md:grid-cols-3 gap-4 mt-4 text-xs">
                    <div class="p-3 border-l-4 border-red-500 bg-red-900/10">
                        <div class="font-bold text-red-400 mb-1">1. Header</div>
                        <div>Algorithm & Token Type</div>
                        <div class="text-slate-500 mt-1">{ "alg": "HS256", "typ": "JWT" }</div>
                    </div>
                    <div class="p-3 border-l-4 border-purple-500 bg-purple-900/10">
                        <div class="font-bold text-purple-400 mb-1">2. Payload</div>
                        <div>Data (Claims)</div>
                        <div class="text-slate-500 mt-1">{ "sub": "123", "role": "admin" }</div>
                    </div>
                    <div class="p-3 border-l-4 border-blue-500 bg-blue-900/10">
                        <div class="font-bold text-blue-400 mb-1">3. Signature</div>
                        <div>Verification Hash</div>
                        <div class="text-slate-500 mt-1">HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)</div>
                    </div>
                </div>
            </section>

            
    <div class="p-6 rounded-2xl border border-red-500/30 bg-red-900/10 text-red-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            The Security Guarantee
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">The Client CAN read the token (it's essentially Base64 JSON). They CANNOT change it. If they change even one character, the server's signature check will fail.</div>
    </div>
    

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">JwtProvider.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// Using JJWT Library
String token = Jwts.builder()
    .setSubject("user@example.com")
    .claim("role", "ADMIN")
    .setIssuedAt(new Date())
    .setExpiration(new Date(System.currentTimeMillis() + 3600000)) // 1 Hour
    .signWith(Keys.hmacShaKeyFor(SECRET.getBytes()))
    .compact();</code></pre>
</div>

        </div>
        `
      },
      {
        id: "15.3",
        title: "15.3 OAuth2 Login Flow",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Delegated Authorization</h3>
                <p class="leading-relaxed mb-6">
                    Handling passwords is dangerous. OAuth2 allows you to say: 
                    "I don't want your password. Go tell Google you are who you say you are, and come back with a pass."
                </p>

                <h4 class="text-xl font-bold text-white mb-4">The Authorization Code Flow</h4>
                <div class="relative bg-slate-900 p-6 rounded-xl border border-slate-700">
                    <div class="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-700"></div>
                    
                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-slate-500 border-2 border-slate-900"></div>
                        <div class="font-bold text-slate-300">1. User Clicks "Login with GitHub"</div>
                        <div class="text-xs text-slate-500">Browser redirects to github.com/login...</div>
                    </div>
                    
                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-slate-900"></div>
                        <div class="font-bold text-blue-400">2. User Approves App</div>
                        <div class="text-xs text-slate-500">"Do you want to share your email with App?" -> Yes</div>
                    </div>

                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-green-500 border-2 border-slate-900"></div>
                        <div class="font-bold text-green-400">3. GitHub Redirects Back</div>
                        <div class="text-xs text-slate-500">Callback URL: /login/oauth2/code/github?code=XYZ123</div>
                    </div>

                    <div class="relative pl-8">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-purple-500 border-2 border-slate-900"></div>
                        <div class="font-bold text-purple-400">4. Backend Swaps Code for Token</div>
                        <div class="text-xs text-slate-500">Server talks to GitHub API directly to get Access Token.</div>
                    </div>
                </div>
            </section>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">application.yml</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-yaml">spring:
  security:
    oauth2:
      client:
        registration:
          github:
            clientId: \${{GITHUB_CLIENT_ID}}
            clientSecret: \${{GITHUB_CLIENT_SECRET}}
            scope: read:user</code></pre>
</div>

        </div>
        `
      },
      {
        id: "15.4",
        title: "15.4 Granular Protection: Method Security",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Defense in Depth</h3>
                <p class="leading-relaxed mb-4">
                    Securing the URL (\`/admin/**\`) is good, but securing the actual Service Method is better. 
                    This protects you even if a developer accidentally exposes the wrong endpoint.
                </p>
                <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 mb-6">
                    <code class="text-green-400">@EnableMethodSecurity</code> <span class="text-slate-400 text-sm">- Add this to your main config.</span>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">Annotation Arsenal</h4>
                <div class="grid grid-cols-1 gap-4">
                    <div class="p-4 bg-slate-800 rounded border border-slate-600">
                        <div class="font-bold text-red-400">@PreAuthorize</div>
                        <div class="text-sm text-slate-400 mb-2">Checks logic <strong>BEFORE</strong> entering the method.</div>
                        <code class="text-xs bg-black p-1 rounded text-red-200">@PreAuthorize("hasRole('ADMIN') and #amt < 5000")</code>
                    </div>
                    <div class="p-4 bg-slate-800 rounded border border-slate-600">
                        <div class="font-bold text-blue-400">@PostAuthorize</div>
                        <div class="text-sm text-slate-400 mb-2">Checks logic <strong>AFTER</strong> execution (can verify return object).</div>
                        <code class="text-xs bg-black p-1 rounded text-blue-200">@PostAuthorize("returnObject.owner == authentication.name")</code>
                    </div>
                </div>
            </section>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">PayrollService.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">@Service
public class PayrollService {

    // SpEL (Spring Expression Language) Power!
    @PreAuthorize("hasAuthority('APPROVE_PAYROLL')")
    public void approveBonus(String employeeId, double amount) {
        // Logic
    }

    // Only let users read their OWN salary info
    @PostAuthorize("returnObject.owner == authentication.name")
    public PaySlip getSlip(String id) {
        return repo.findById(id);
    }
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "15.5",
        title: "15.5 Mini Project: Secure Banking API",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal: Secure the Money</h3>
            <p>A Login endpoint that issues JWTs, and a Balance endpoint that requires them.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">SecureBank.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">@RestController
@RequestMapping("/api")
class BankController {
    
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest req) {
        // 1. Manually authenticate via AuthenticationManager
        Authentication auth = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(req.user, req.pass)
        );
        
        // 2. If successful, generate JWT
        if (auth.isAuthenticated()) {
            return jwtUtil.generate(req.user);
        }
        throw new BadCredentialsException("Wrong pass");
    }

    @GetMapping("/balance")
    public String getBalance(Authentication auth) {
        // 3. Spring Security injects the authenticated user from the JWT Filter
        // If we are here, the JWT was valid!
        return "Hello " + auth.getName() + ", Balance: $5000";
    }
}</code></pre>
</div>

            
            <p class="text-orange-400 font-bold mt-4">Try accessing /balance without the Header. "403 Forbidden"!</p>
        </div>
        `
      },
    ]
  },
  {
    id: "16",
    title: "Microservices Architecture",
    lessons: [
      {
        id: "16.1",
        title: "16.1 The Distributed Dilemma: Monolith vs Microservices",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">No Free Lunch</h3>
                <p class="leading-relaxed mb-6">
                    Microservices are not "better" than Monoliths; they are a <strong>trade-off</strong>. 
                    You trade <strong>Complexity of Code</strong> (Monolith) for <strong>Complexity of Infrastructure</strong> (Microservices).
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div class="bg-slate-900 border border-slate-700 p-6 rounded-xl">
                        <div class="font-bold text-white mb-4 text-center">🗿 Monolith</div>
                        <ul class="text-sm text-slate-400 list-disc list-inside space-y-2">
                            <li>✅ ACID Transactions (Easy).</li>
                            <li>✅ Simple Deployment (1 JAR).</li>
                            <li>❌ Scaling limits (Replicate entire app).</li>
                            <li>❌ Tight coupling (Spaghetti code).</li>
                        </ul>
                    </div>
                    <div class="bg-slate-900 border border-slate-700 p-6 rounded-xl">
                        <div class="font-bold text-blue-400 mb-4 text-center">🐝 Microservices</div>
                        <ul class="text-sm text-slate-400 list-disc list-inside space-y-2">
                            <li>✅ Independent Scaling (Scale only Payments).</li>
                            <li>✅ Tech Agnostic (Java + Go + Python).</li>
                            <li>❌ Distributed Transactions (Base/Saga).</li>
                            <li>❌ Network Latency & Failure.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">The CAP Theorem</h4>
                <p class="text-sm text-slate-400 mb-4">In a Distributed System, you can only pick 2 of 3:</p>
                <div class="flex flex-wrap gap-4 justify-center">
                    <div class="p-4 bg-green-900/20 border border-green-500 rounded-full w-32 text-center text-green-400 font-bold">Consistency</div>
                    <div class="p-4 bg-blue-900/20 border border-blue-500 rounded-full w-32 text-center text-blue-400 font-bold">Availability</div>
                    <div class="p-4 bg-red-900/20 border border-red-500 rounded-full w-32 text-center text-red-400 font-bold">Partition Tolerance</div>
                </div>
                <p class="mt-4 text-xs text-center text-slate-500">
                    Microservices MUST support Partition Tolerance (Network failure). So you typically choose between <strong>CP</strong> (Data is correct, simpler) or <strong>AP</strong> (System is up, data might be stale).
                </p>
            </section>

        </div>
        `
      },
      {
        id: "16.2",
        title: "16.2 Service Discovery: The Phonebook (Eureka)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Dynamic Address Problem</h3>
            <p>In the Cloud (AWS/K8s), servers die and restart with new IP addresses every minute. Hardcoding \`localhost:8081\` is impossible.</p>
            
            <div class="bg-slate-900 p-6 rounded-xl border border-slate-700 mb-6 font-mono text-sm">
                <div class="flex items-center gap-4 mb-4">
                    <div class="p-2 border border-green-500 text-green-400 rounded">Service A</div>
                    <div class="text-slate-500">"I am up at 10.0.0.5!"</div>
                    <div class="text-slate-500">➡️</div>
                    <div class="p-2 border border-purple-500 text-purple-400 rounded">Eureka Server</div>
                </div>
                <div class="flex items-center gap-4">
                    <div class="p-2 border border-blue-500 text-blue-400 rounded">Service B</div>
                    <div class="text-slate-500">"Where is Service A?"</div>
                    <div class="text-slate-500">➡️</div>
                    <div class="p-2 border border-purple-500 text-purple-400 rounded">Eureka Server</div>
                </div>
            </div>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">EurekaServer.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">@SpringBootApplication
@EnableEurekaServer // Run this heavily available server
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}</code></pre>
</div>


            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">application.yml</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-yaml"># Client Config
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/</code></pre>
</div>

        </div>
        `
      },
      {
        id: "16.3",
        title: "16.3 API Gateway: The Digital Doorman",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Unified Entry Point</h3>
            <p>Clients (Mobile, Web) should ONLY talk to one server: The API Gateway. It handles Routing, Security, and Rate Limiting.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">gateway.yml</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-yaml">spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://USER-SERVICE # lb = Load Balance via Eureka
          predicates:
            - Path=/users/**
          filters:
            - AddRequestHeader=X-Source, Gateway
            - name: RequestRateLimiter # Prevent DDOS
                args:
                  redis-rate-limiter.replenishRate: 10
                  redis-rate-limiter.burstCapacity: 20</code></pre>
</div>

        </div>
        `
      },
      {
        id: "16.4",
        title: "16.4 Resilience4j: Circuit Breaker Pattern",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Preventing Cascading Failures</h3>
                <p>If the Inventory Service is slow/down, the Order Service shouldn't hang and die. It should <strong>Fail Fast</strong> and return a default response.</p>
                
                <div class="flex gap-4 justify-center my-6">
                    <div class="flex flex-col items-center">
                        <div class="p-4 border-2 border-green-500 rounded-full text-green-400 font-bold mb-2">CLOSED</div>
                        <div class="text-[10px] text-slate-400 text-center">Normal. Calls pass through.</div>
                    </div>
                    <div class="flex flex-col items-center justify-center text-slate-600 font-bold">➡️ Errors > 50% ➡️</div>
                    <div class="flex flex-col items-center">
                        <div class="p-4 border-2 border-red-500 rounded-full text-red-400 font-bold mb-2">OPEN</div>
                        <div class="text-[10px] text-slate-400 text-center">Blocked. Instant Fallback.</div>
                    </div>
                    <div class="flex flex-col items-center justify-center text-slate-600 font-bold">➡️ Wait 5s ➡️</div>
                    <div class="flex flex-col items-center">
                        <div class="p-4 border-2 border-yellow-500 rounded-full text-yellow-400 font-bold mb-2">HALF-OPEN</div>
                        <div class="text-[10px] text-slate-400 text-center">Test a few requests.</div>
                    </div>
                </div>
            </section>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">OrderService.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">@CircuitBreaker(name = "inventory", fallbackMethod = "checkLocalCache")
public String getInventory(String id) {
    // Risky Network Call
    return restTemplate.getForObject("http://inventory-service/" + id, String.class);
}

// Fallback logic (No Exception thrown to user!)
public String checkLocalCache(String id, Exception e) {
    log.error("Inventory down, returning cached data");
    return "Available (Cached)";
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "16.5",
        title: "16.5 Distributed Transactions: The SAGA Pattern",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">ACID is Dead. Long live SAGA.</h3>
                <p class="leading-relaxed mb-6">
                    You cannot have a database transaction across two different microservices. 
                    Instead, we use a <strong>Sequence of Local Transactions</strong>. 
                    If one fails, we execute <strong>Compensating Transactions</strong> (Undo actions) to roll back.
                </p>

                <h4 class="text-xl font-bold text-white mb-4">Visualizing a Failure Scenario</h4>
                <div class="relative bg-slate-900 p-6 rounded-xl border border-slate-700 font-mono text-xs">
                    <div class="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-600"></div>
                    
                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-green-500"></div>
                        <div class="font-bold text-green-400">1. Order Service</div>
                        <div>Create Order (PENDING) ✅</div>
                    </div>
                    
                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-green-500"></div>
                        <div class="font-bold text-green-400">2. Payment Service</div>
                        <div>Charge User $50 ✅</div>
                    </div>

                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
                        <div class="font-bold text-red-400">3. Inventory Service</div>
                        <div>Reserve Item... FAILED! (Out of Stock) ❌</div>
                        <div class="text-yellow-400 mt-1">TRIGGER COMPENSATING TRANSACTIONS</div>
                    </div>

                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-yellow-500"></div>
                        <div class="font-bold text-yellow-400">4. Payment Service (Undo)</div>
                        <div>Refund User $50 ↩️</div>
                    </div>

                    <div class="relative pl-8">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-yellow-500"></div>
                        <div class="font-bold text-yellow-400">5. Order Service (Undo)</div>
                        <div>Update Order Status (FAILED) ↩️</div>
                    </div>
                </div>
            </section>

             
    <div class="p-6 rounded-2xl border border-purple-500/30 bg-purple-900/10 text-purple-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Choreography vs Orchestration
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">In **Choreography**, services talk to each other directly via Events. In **Orchestration**, a central 'Conductor' service tells everyone what to do. Orchestration is safer for complex Sagas.</div>
    </div>
    

        </div>
        `
      },
    ]
  },
  {
    id: "17",
    title: "Capstone: Distributed Ride-Hailing Cloud",
    lessons: [
      {
        id: "17.1",
        title: "17.1 System Design: Architecture of a Ride-Hailing App",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Requirements</h3>
                <p class="mb-4">We are building a simplified Uber. The key engineering challenges are:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-slate-900 p-4 rounded-xl border border-slate-700">
                        <div class="font-bold text-green-400 mb-2">Functional</div>
                        <ul class="list-disc list-inside text-sm text-slate-400">
                            <li>Riders request rides.</li>
                            <li>Drivers get matched (Proximity).</li>
                            <li>Real-time Location Updates.</li>
                        </ul>
                    </div>
                    <div class="bg-slate-900 p-4 rounded-xl border border-slate-700">
                        <div class="font-bold text-red-400 mb-2">Non-Functional</div>
                        <ul class="list-disc list-inside text-sm text-slate-400">
                            <li>Latency: &lt; 200ms for updates.</li>
                            <li>Availability: 99.99%.</li>
                            <li>Consistency: Eventually Consistent (Location), Strong (Payment).</li>
                        </ul>
                    </div>
                </div>
            </section>

             <section>
                <h4 class="text-xl font-bold text-white mb-4">High Level Design</h4>
                 <div class="flex flex-col gap-2 font-mono text-xs bg-slate-900 p-6 rounded-xl border border-slate-700">
                    <div class="flex justify-between px-10">
                         <div class="p-2 border border-slate-500 rounded">Driver App (WebSocket)</div>
                         <div class="p-2 border border-slate-500 rounded">Rider App (HTTP/WS)</div>
                    </div>
                    <div class="text-center my-2 text-2xl">⬇️</div>
                    <div class="p-4 border-2 border-purple-500 rounded text-center text-purple-400 font-bold bg-purple-900/10">API GATEWAY / LOAD BALANCER</div>
                    <div class="text-center my-2 text-2xl">⬇️</div>
                    <div class="grid grid-cols-3 gap-4 text-center">
                        <div class="p-3 border border-blue-500 rounded bg-blue-900/10">Location Service (Redis)</div>
                        <div class="p-3 border border-green-500 rounded bg-green-900/10">Payment Service (SQL)</div>
                        <div class="p-3 border border-yellow-500 rounded bg-yellow-900/10">Trip Service (Kafka)</div>
                    </div>
                 </div>
            </section>
        </div>
        `
      },
      {
        id: "17.2",
        title: "17.2 Geospatial Theory: How 'Nearby' Works",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Math Behind the Map</h3>
                <p class="leading-relaxed mb-6">
                    A naive SQL query \`SELECT * FROM drivers WHERE sqrt((x-x2)^2 + (y-y2)^2) < 5\` is O(N) and too slow for millions of drivers. 
                    We need Spatial Indexing.
                </p>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
                        <h4 class="font-bold text-indigo-400 mb-2">QuadTrees</h4>
                        <p class="text-sm text-slate-400 mb-4">Recursively divide the map into 4 quadrants.</p>
                        <div class="grid grid-cols-2 grid-rows-2 w-32 h-32 border border-slate-600 mx-auto">
                            <div class="border border-slate-700 flex items-center justify-center">A</div>
                            <div class="border border-slate-700 flex items-center justify-center">B</div>
                            <div class="border border-slate-700 flex items-center justify-center">C</div>
                            <div class="border border-slate-700 grid grid-cols-2 grid-rows-2 w-full h-full">
                                <div class="border border-slate-800"></div>
                                <div class="border border-slate-800 bg-green-500/50">Driver</div>
                                <div class="border border-slate-800"></div>
                                <div class="border border-slate-800"></div>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
                        <h4 class="font-bold text-pink-400 mb-2">GeoHashing (We use this!)</h4>
                        <p class="text-sm text-slate-400 mb-4">Convert 2D coords into a 1D string. Nearby points share prefixes.</p>
                        <ul class="text-xs font-mono space-y-2">
                            <li>User: (37.7, -122.4) -> <span class="text-green-400">9q8yy</span>123</li>
                            <li>Driver: (37.7, -122.5) -> <span class="text-green-400">9q8yy</span>abc</li>
                            <li class="text-slate-500">Prefix match = Proximity!</li>
                        </ul>
                    </div>
                </div>
            </section>

             
    <div class="p-6 rounded-2xl border border-red-500/30 bg-red-900/10 text-red-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            Why Redis?
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">Redis has built-in \`GEOADD\` and \`GEORADIUS\` commands implemented using GeoHashing on Sorted Sets (ZSET). It gives O(log N) performance.</div>
    </div>
    

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">GeoService.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// Spring Data Redis
redis.opsForGeo().add("drivers", new Point(-122.4194, 37.7749), "driver_1");

// "Find drivers within 5km"
GeoResults<Constraint> results = redis.opsForGeo().radius("drivers", 
    new Circle(new Point(-122.41, 37.77), new Distance(5, KILOMETERS))
);</code></pre>
</div>

        </div>
        `
      },
      {
        id: "17.3",
        title: "17.3 Database Sharding & Partitioning",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Scaling the Write Volume</h3>
                <p class="leading-relaxed mb-6">
                    A single PostgreSQL instance cannot handle 1 million GPS writes per second. We need to split the data.
                </p>

                <h4 class="text-xl font-bold text-white mb-4">Sharding Strategies</h4>
                <div class="grid grid-cols-1 gap-4 text-sm">
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-blue-400">Range Based</div>
                        <p class="text-slate-400">Users A-M in DB1, N-Z in DB2.</p>
                        <p class="text-red-400 text-xs">⚠️ Hotspot Issue (What if everyone is named Steve?)</p>
                    </div>
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-green-400">Hash Based (Consistent Hashing)</div>
                        <p class="text-slate-400">DB = hash(user_id) % num_servers.</p>
                        <p class="text-green-400 text-xs">✅ Uniform distribution.</p>
                    </div>
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-yellow-400">Geo Based</div>
                        <p class="text-slate-400">US-West in DB1, Europe in DB2.</p>
                        <p class="text-green-400 text-xs">✅ Data locality (Low latency).</p>
                    </div>
                </div>
            </section>
        </div>
        `
      },
      {
        id: "17.4",
        title: "17.4 Event Driven Matching (Kafka)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Decoupling with Events</h3>
            <p>Matching is complex. We don't want the Booking REST API to hang while we calculate matches. We dump the request into Kafka and process it asynchronously.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">AsyncMatch.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// 1. Producer (Rider Service)
kafkaTemplate.send("ride_request_topic", new RideRequestEvent(userId, lat, lon));

// 2. Consumer (Matching Service)
@KafkaListener(topics = "ride_request_topic")
public void match(RideRequestEvent event) {
    // Heavy Algo:
    // 1. Query Redis for drivers
    // 2. Filter by Rating/Vehicle
    // 3. Send WebSocket Push to Driver
}</code></pre>
</div>

        </div>
        `
      },
      {
        id: "17.5",
        title: "17.5 Deployment: Infrastructure as Code",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Docker Compose</h3>
            <p>We spin up the entire ecosystem locally.</p>
            
            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">docker-compose.yml</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-yaml">version: '3.8'
services:
  redis:
    image: redis:alpine
    ports: ["6379:6379"]
    
  kafka:
    image: confluentinc/cp-kafka
    depends_on: [zookeeper]
    
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: rides_db
      
  matching-service:
    build: ./matching-service
    environment:
      - KAFKA_HOST=kafka:9092
      - REDIS_HOST=redis</code></pre>
</div>

        </div>
        `
      },
    ]
  },
  {
    id: "18",
    title: "Bonus: Java in the Age of AI",
    lessons: [
      {
        id: "18.1",
        title: "18.1 Spring AI: LLM Theory & Tokens",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">How Large Language Models Work</h3>
                <p class="leading-relaxed mb-6">
                    LLMs (GPT-4, Claude) are "Stateless Predictors". They take a list of integers (Tokens) and predict the next integer.
                    They do NOT "think". They "complete".
                </p>

                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
                        <h4 class="font-bold text-blue-400 mb-2">Tokenization</h4>
                        <p class="text-sm text-slate-400 mb-2">Text is broken into chunks.</p>
                        <div class="font-mono text-xs bg-black p-2 rounded text-green-400">
                            "Java is cool" -> [1532, 318, 4321]
                        </div>
                        <p class="text-xs text-slate-500 mt-2">1 Token ≈ 0.75 words.</p>
                    </div>
                    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700">
                        <h4 class="font-bold text-purple-400 mb-2">Context Window</h4>
                        <p class="text-sm text-slate-400 mb-2">The limited memory of the model.</p>
                        <div class="w-full bg-slate-800 h-2 rounded-full mt-2">
                            <div class="bg-purple-500 h-2 rounded-full w-3/4"></div>
                        </div>
                        <p class="text-xs text-slate-500 mt-2">If you send too much text, the beginning is forgotten (Truncated).</p>
                    </div>
                </div>
            </section>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">SpringAI.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">// Spring AI abstracts the HTTP calls
ChatClient client = new ChatClient(openAiService);

String response = client.prompt()
    .user("Explain Dependency Injection")
    .system("You are a Senior Java Architect. Be concise.") // Context
    .call()
    .content();</code></pre>
</div>

        </div>
        `
      },
      {
        id: "18.2",
        title: "18.2 RAG: Vector Embeddings & Math",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Semantic Search</h3>
                <p class="leading-relaxed mb-6">
                    How do we search for "Payment Issues" and find documents about "Billing Errors"? 
                    Keywords don't match. We use <strong>Vectors</strong>.
                </p>
                
                <h4 class="text-xl font-bold text-white mb-4">Embeddings</h4>
                <p class="text-sm text-slate-400 mb-4">An Embedding Model converts text into a fixed-size list of numbers (e.g., 1536 dimensions) representing its "Meaning".</p>

                <div class="bg-slate-900 p-6 rounded-xl border border-slate-700 font-mono text-xs mb-6">
                    <div class="mb-2"><span class="text-green-400">"King"</span> -> [0.9, 0.2, 0.5]</div>
                    <div class="mb-2"><span class="text-green-400">"Queen"</span> -> [0.9, 0.2, 0.9]</div>
                    <div class="mb-2"><span class="text-green-400">"Apple"</span> -> [0.1, 0.8, -0.2]</div>
                </div>
                
                <h4 class="text-xl font-bold text-white mb-4">Cosine Similarity</h4>
                <p class="text-sm text-slate-400">We calculate the angle between two vectors. Small angle = Similar meaning.</p>
            </section>
            
            
    <div class="p-6 rounded-2xl border border-purple-500/30 bg-purple-900/10 text-purple-400 mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            RAG Architecture
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">1. User asks question. <br> 2. Convert question to Vector. <br> 3. Find top 3 nearest vectors in DB. <br> 4. Feed those documents + Question to GPT-4.</div>
    </div>
    
        </div>
        `
      },
      {
        id: "18.3",
        title: "18.3 LangChain4j: Building Agents",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Give AI Tools</h3>
            <p>An Agent is an LLM that has access to "Functions" (Tools) and can decide when to call them.</p>

            
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">Agent.java</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-java">interface MathAgent {
    String chat(String msg);
}

class Tools {
    @Tool("Calculates square root")
    double sqrt(double x) { return Math.sqrt(x); }
}

MathAgent agent = AiServices.builder(MathAgent.class)
    .chatLanguageModel(model)
    .tools(new Tools()) // Give it tools!
    .build();

// LLM: "I need to calc sqrt of 25. Calling tool..."
// Tool: 5.0
// LLM: "The answer is 5.0"
agent.chat("What is sq root of 25?");</code></pre>
</div>

        </div>
        `
      },
      {
        id: "18.4",
        title: "18.4 Final Project: Jarvis (CLI Assistant)",
        duration: "15 min",
        type: "interactive",
        content: `
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Putting it all together</h3>
            <p>We build a CLI that indexes your source code into a Vector DB (PGVector) and lets you chat with it.</p>
            
            <div class="flex flex-col gap-2 font-mono text-sm bg-black p-6 rounded-xl border border-slate-800">
                <div class="text-green-400">$ jarvis ingest ./src</div>
                <div class="text-slate-500">Scanning 42 files...</div>
                <div class="text-slate-500">Generating Embeddings (OpenAI ada-002)...</div>
                <div class="text-slate-500">Stored 350 vectors in Postgres.</div>
                <br>
                <div class="text-green-400">$ jarvis "How does the Login work?"</div>
                <div class="text-slate-500">Searching... Found 3 relevant classes (AuthController.java, ...)</div>
                <div class="text-blue-400">Jarvis: The login flow uses JWTs. Specifically, the AuthController verifies credentials...</div>
            </div>
        </div>
        `
      },
    ]
  },
];
