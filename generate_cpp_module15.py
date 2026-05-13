
module_15_lessons = [
    {
        "id": "cpp-15-1",
        "title": "15.1 Graph Representation: Adjacency List vs Matrix",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-[#0f1014] p-10 rounded-3xl border border-indigo-500/20">
        <h1 class="text-4xl font-extrabold text-white mb-6">Graphs in C++</h1>
        <p class="text-lg text-slate-400">
            A graph is just nodes and edges. How you store it determines your algorithm's speed.
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-blue-500/20">
             <h3 class="text-blue-400 font-bold mb-4">Adjacency Matrix</h3>
             <pre class="text-xs font-mono bg-black p-4 rounded text-slate-300">
int adj[N][N];
// adj[u][v] = 1 if edge exists.</pre>
             <p class="text-xs text-gray-500 mt-4">
                 <strong>Space:</strong> O(V^2). Bad for sparse graphs.<br>
                 <strong>Lookup:</strong> O(1). Fast.
             </p>
        </div>
        
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-green-500/20">
             <h3 class="text-green-400 font-bold mb-4">Adjacency List (Standard)</h3>
             <pre class="text-xs font-mono bg-black p-4 rounded text-slate-300">
vector&lt;int&gt; adj[N];
// adj[u] contains {v1, v2, ...}</pre>
             <p class="text-xs text-gray-500 mt-4">
                 <strong>Space:</strong> O(V + E). Perfect for CP.<br>
                 <strong>Lookup:</strong> O(Degree).
             </p>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-15-2",
        "title": "15.2 BFS & DFS Templates",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#111] p-6 rounded-xl border-t-4 border-yellow-500">
            <h3 class="text-yellow-400 font-bold mb-2">BFS (Breadth First)</h3>
            <p class="text-xs text-gray-500 mb-4 h-8">Shortest Path in unweighted graphs. Flood fill.</p>
            <div class="text-xs font-mono bg-black p-3 rounded text-yellow-300">
                queue&lt;int&gt; q;<br>
                vis[start] = true;<br>
                q.push(start);<br>
                while (!q.empty()) { ... }
            </div>
        </div>
         <div class="bg-[#111] p-6 rounded-xl border-t-4 border-purple-500">
            <h3 class="text-purple-400 font-bold mb-2">DFS (Depth First)</h3>
            <p class="text-xs text-gray-500 mb-4 h-8">Maze solving, Cycle detection, Topology.</p>
            <div class="text-xs font-mono bg-black p-3 rounded text-purple-300">
                void dfs(int u) {<br>
                &nbsp;&nbsp;vis[u] = true;<br>
                &nbsp;&nbsp;for (int v : adj[u]) dfs(v);<br>
                }
            </div>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-15-3",
        "title": "15.3 Dijkstra's Algorithm (Shortest Path)",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">The Priority Queue Trick</h2>
    </div>

    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
        <pre class="font-mono text-xs text-slate-300 leading-relaxed">
priority_queue&lt;pair&lt;int,int&gt;, vector&lt;pair&lt;int,int&gt;&gt;, greater&lt;&gt;&gt; pq;

dist[start] = 0;
pq.push({0, start});

while (!pq.empty()) {
    int d = pq.top().first;
    int u = pq.top().second;
    pq.pop();

    if (d > dist[u]) continue; <span class="text-gray-500">// Important Optimization</span>

    for (auto& edge : adj[u]) {
        if (dist[u] + weight < dist[v]) {
            dist[v] = dist[u] + weight;
            pq.push({dist[v], v});
        }
    }
}</pre>
        <div class="mt-4 p-4 bg-blue-900/10 text-xs text-blue-200 rounded">
            Uses <code>std::greater</code> to make it a Min-Heap (smallest distance on top).
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-15-4",
        "title": "15.4 Disjoint Set Union (DSU)",
        "duration": "50 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Union-Find</h2>
    <p class="text-slate-400 mb-6">
        The ultimate data structure for connectivity queries. "Are these two friends connected?" "Merge these two groups."
    </p>

    <div class="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 font-mono text-xs">
        <div class="mb-4">
             <div class="text-purple-400 font-bold">find(i):</div>
             <div class="text-gray-400">Path Compression (make all nodes point to root). O(alpha(N)).</div>
        </div>
        <div>
             <div class="text-purple-400 font-bold">union(i, j):</div>
             <div class="text-gray-400">Union by Rank/Size (attach small tree to big tree).</div>
        </div>
        
        <div class="mt-8 bg-black/50 p-4 border border-green-500/20 text-green-300">
            int find(int i) {
                if (parent[i] == i) return i;
                return parent[i] = find(parent[i]); // Recurse & Compress
            }
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-15-5",
        "title": "15.5 Dynamic Programming (DP) Patterns",
        "duration": "60 min",
        "type": "video",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#111] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-4">Memoization (Top-Down)</h3>
            <p class="text-xs text-gray-500 mb-4">Recursive + Table.</p>
            <pre class="bg-black/50 p-4 rounded text-xs text-gray-400 font-mono">
int fib(int n) {
    if (memo[n] != -1) return memo[n];
    return memo[n] = fib(n-1) + fib(n-2);
}</pre>
        </div>
        <div class="bg-[#111] p-6 rounded-xl border border-white/5">
            <h3 class="text-white font-bold mb-4">Tabulation (Bottom-Up)</h3>
            <p class="text-xs text-gray-500 mb-4">Iterative + Table. Better cache locality.</p>
            <pre class="bg-black/50 p-4 rounded text-xs text-gray-400 font-mono">
dp[0] = 0; dp[1] = 1;
for (int i=2; i<=n; ++i) {
    dp[i] = dp[i-1] + dp[i-2];
}</pre>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-15-6",
        "title": "15.6 Bit Manipulation for CP",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <h2 class="text-3xl font-bold text-white mb-6">Bitwise Magic</h2>
    
    <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 font-mono text-xs text-slate-300 space-y-4">
        <div class="flex justify-between border-b border-gray-700 pb-2">
            <span>Check if odd</span>
            <span class="text-blue-400">if (n & 1)</span>
        </div>
        <div class="flex justify-between border-b border-gray-700 pb-2">
            <span>Multiply by 2</span>
            <span class="text-blue-400">n << 1</span>
        </div>
        <div class="flex justify-between border-b border-gray-700 pb-2">
            <span>Divide by 2</span>
            <span class="text-blue-400">n >> 1</span>
        </div>
        <div class="flex justify-between border-b border-gray-700 pb-2">
            <span>Power of 2 check</span>
            <span class="text-blue-400">!(n & (n-1))</span>
        </div>
         <div class="flex justify-between">
            <span>Set bit K</span>
            <span class="text-blue-400">n | (1 << k)</span>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-15-7",
        "title": "15.7 Number Theory Snippets",
        "duration": "45 min",
        "type": "article",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-white font-bold mb-2">GCD (Euclid)</h3>
             <pre class="bg-black/50 p-4 rounded text-xs font-mono text-gray-300">
return b == 0 ? a : gcd(b, a % b);</pre>
             <p class="mt-2 text-[10px] text-gray-500">Built-in: <code>std::gcd</code> (C++17)</p>
        </div>
         <div class="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
             <h3 class="text-white font-bold mb-2">Modular Exponentiation</h3>
             <p class="text-xs text-gray-500 mb-2">Calculate (a^b) % m in O(log b).</p>
             <pre class="bg-black/50 p-4 rounded text-xs font-mono text-gray-300">
long long binpow(long long a, long long b) {
    long long res = 1;
    while (b > 0) {
        if (b & 1) res = res * a;
        a = a * a;
        b >>= 1;
    }
    return res;
}</pre>
        </div>
    </div>
</div>
"""
    },
    {
        "id": "cpp-15-8",
        "title": "15.8 Lab: Solving CSES Problems",
        "duration": "3 hours",
        "type": "project",
        "content": r"""
<div class="space-y-12 font-sans text-slate-200">
    <div class="bg-gradient-to-br from-green-800 to-green-900 p-8 rounded-3xl text-center shadow-2xl border border-white/10">
        <h1 class="text-3xl font-bold text-white mb-2">Lab: CSES Problem Set</h1>
        <p class="text-green-200">Apply your templates to real problems.</p>
    </div>

    <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Target Problems</h3>
        <ul class="space-y-4 text-sm text-slate-400">
            <li class="bg-[#111] p-4 rounded border-l-4 border-green-500">
                <strong class="text-white">1. Counting Rooms</strong> (Graph / Flood Fill)
            </li>
            <li class="bg-[#111] p-4 rounded border-l-4 border-yellow-500">
                <strong class="text-white">2. Dice Combinations</strong> (DP / Stairs)
            </li>
            <li class="bg-[#111] p-4 rounded border-l-4 border-blue-500">
                <strong class="text-white">3. Building Roads</strong> (DSU / Connectivity)
            </li>
        </ul>
        <p class="text-xs text-gray-500">
            Submit your solutions to <a href="https://cses.fi/problemset/" class="text-blue-400 underline">cses.fi</a> to verify correctness against secret test cases.
        </p>
    </div>
</div>
"""
    }
]
