import { Algorithm, VisualizationState, GraphNode, GraphEdge } from './types';

export const graphAlgorithms: Algorithm[] = [
    {
        id: "graph-bfs",
        name: "Breadth First Search (BFS)",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Breadth First Search (BFS) is a graph traversal algorithm that explores all the vertices of a graph at the current depth level before moving on to the vertices at the next depth level.

### Complexity Analysis
- Time Complexity: O(V + E).
- Space Complexity: O(V).`,
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)",
        code: {
            cpp: `void bfs(int start, vector<vector<int>>& adj, int V) {
    vector<bool> visited(V, false);
    queue<int> q;
    visited[start] = true;
    q.push(start);
    while(!q.empty()) {
        int u = q.front(); q.pop();
        cout << u << " ";
        for(int v : adj[u]) {
            if(!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}`,
            java: `void bfs(int start, List<List<Integer>> adj, int V) {
    boolean[] visited = new boolean[V];
    Queue<Integer> q = new LinkedList<>();
    visited[start] = true;
    q.add(start);
    while(!q.isEmpty()) {
        int u = q.poll();
        System.out.print(u + " ");
        for(int v : adj.get(u)) {
            if(!visited[v]) {
                visited[v] = true;
                q.add(v);
            }
        }
    }
}`,
            python: `def bfs(start, adj):
    visited = set()
    q = [start]
    visited.add(start)
    while q:
        u = q.pop(0)
        print(u, end=" ")
        for v in adj[u]:
            if v not in visited:
                visited.add(v)
                q.append(v)`,
            javascript: `function bfs(start, adj) {
  const visited = new Set();
  const q = [start];
  visited.add(start);
  while (q.length > 0) {
    const u = q.shift();
    console.log(u);
    for (const v of adj[u]) {
      if (!visited.has(v)) {
        visited.add(v);
        q.push(v);
      }
    }
  }
}`
        },
        run: function* () {
            // Graph structure: 0->1, 0->2, 1->3, 1->4, 2->5, 2->6
            const nodes: GraphNode[] = [
                { id: '0', value: 0, x: 300, y: 50 },
                { id: '1', value: 1, x: 150, y: 150 },
                { id: '2', value: 2, x: 450, y: 150 },
                { id: '3', value: 3, x: 75, y: 250 },
                { id: '4', value: 4, x: 225, y: 250 },
                { id: '5', value: 5, x: 375, y: 250 },
                { id: '6', value: 6, x: 525, y: 250 }
            ];
            const edges: GraphEdge[] = [
                { source: '0', target: '1' }, { source: '0', target: '2' },
                { source: '1', target: '3' }, { source: '1', target: '4' },
                { source: '2', target: '5' }, { source: '2', target: '6' }
            ];
            const adj: Record<string, string[]> = {
                '0': ['1', '2'], '1': ['3', '4'], '2': ['5', '6'],
                '3': [], '4': [], '5': [], '6': []
            };

            yield {
                type: 'graph',
                nodes: nodes,
                edges: edges,
                isDirected: true,
                description: "Starting BFS from Node 0"
            };

            const queue: string[] = ['0'];
            const visited = new Set<string>();
            visited.add('0');

            // Highlight start node
            yield {
                type: 'graph',
                nodes: nodes.map(n => n.id === '0' ? { ...n, highlight: 'active' } : n),
                edges: edges,
                isDirected: true,
                description: "Queue: [0]. Visited: {0}"
            };

            while (queue.length > 0) {
                const u = queue.shift()!;

                yield {
                    type: 'graph',
                    nodes: nodes.map(n => n.id === u ? { ...n, highlight: 'active' } : visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                    edges: edges,
                    isDirected: true,
                    description: `Processing Node ${u}`
                };

                for (const v of adj[u]) {
                    if (!visited.has(v)) {
                        visited.add(v);
                        queue.push(v);
                        yield {
                            type: 'graph',
                            nodes: nodes.map(n => n.id === v ? { ...n, highlight: 'match' } : n.id === u ? { ...n, highlight: 'active' } : visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                            edges: edges.map(e => (e.source === u && e.target === v) ? { ...e, highlight: 'active' } : e),
                            isDirected: true,
                            description: `Visiting neighbor ${v}, adding to queue.`
                        };
                    }
                }

                // Mark u as fully processed (visited)
                yield {
                    type: 'graph',
                    nodes: nodes.map(n => visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                    edges: edges,
                    isDirected: true,
                    description: `Finished processing Node ${u}. Queue: [${queue.join(', ')}]`
                };
            }

            yield {
                type: 'graph',
                nodes: nodes.map(n => ({ ...n, highlight: 'visited' })),
                edges: edges,
                isDirected: true,
                description: "BFS Traversal Complete"
            };
        }
    },
    {
        id: "graph-dfs",
        name: "Depth First Search (DFS)",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Depth First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking.

### Complexity Analysis
- Time Complexity: O(V + E).
- Space Complexity: O(V).`,
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)",
        code: {
            cpp: `void dfs(int u, vector<vector<int>>& adj, vector<bool>& visited) {
    visited[u] = true;
    cout << u << " ";
    for(int v : adj[u]) {
        if(!visited[v]) {
            dfs(v, adj, visited);
        }
    }
}`,
            java: `void dfs(int u, List<List<Integer>> adj, boolean[] visited) {
    visited[u] = true;
    System.out.print(u + " ");
    for(int v : adj.get(u)) {
        if(!visited[v]) {
            dfs(v, adj, visited);
        }
    }
}`,
            python: `def dfs(u, adj, visited):
    visited.add(u)
    print(u, end=" ")
    for v in adj[u]:
        if v not in visited:
            dfs(v, adj, visited)`,
            javascript: `function dfs(u, adj, visited) {
  visited.add(u);
  console.log(u);
  for (const v of adj[u]) {
    if (!visited.has(v)) {
      dfs(v, adj, visited);
    }
  }
}`
        },
        run: function* () {
            const nodes: GraphNode[] = [
                { id: '0', value: 0, x: 300, y: 50 },
                { id: '1', value: 1, x: 150, y: 150 },
                { id: '2', value: 2, x: 450, y: 150 },
                { id: '3', value: 3, x: 75, y: 250 },
                { id: '4', value: 4, x: 225, y: 250 },
                { id: '5', value: 5, x: 375, y: 250 },
                { id: '6', value: 6, x: 525, y: 250 }
            ];
            const edges: GraphEdge[] = [
                { source: '0', target: '1' }, { source: '0', target: '2' },
                { source: '1', target: '3' }, { source: '1', target: '4' },
                { source: '2', target: '5' }, { source: '2', target: '6' }
            ];
            const adj: Record<string, string[]> = {
                '0': ['1', '2'], '1': ['3', '4'], '2': ['5', '6'],
                '3': [], '4': [], '5': [], '6': []
            };

            yield {
                type: 'graph',
                nodes: nodes,
                edges: edges,
                isDirected: true,
                description: "Starting DFS from Node 0"
            };

            const visited = new Set<string>();
            const stack: string[] = ['0'];

            while (stack.length > 0) {
                const u = stack.pop()!;

                if (!visited.has(u)) {
                    visited.add(u);
                    yield {
                        type: 'graph',
                        nodes: nodes.map(n => n.id === u ? { ...n, highlight: 'active' } : visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                        edges: edges,
                        isDirected: true,
                        description: `Visiting Node ${u}`
                    };

                    // Add neighbors to stack (reverse order to visit left first if desired, but standard stack is fine)
                    const neighbors = adj[u] || [];
                    for (let i = neighbors.length - 1; i >= 0; i--) {
                        const v = neighbors[i];
                        if (!visited.has(v)) {
                            stack.push(v);
                            yield {
                                type: 'graph',
                                nodes: nodes.map(n => n.id === v ? { ...n, highlight: 'match' } : visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                                edges: edges.map(e => (e.source === u && e.target === v) ? { ...e, highlight: 'active' } : e),
                                isDirected: true,
                                description: `Pushing neighbor ${v} to stack`
                            };
                        }
                    }
                }
            }

            yield {
                type: 'graph',
                nodes: nodes.map(n => ({ ...n, highlight: 'visited' })),
                edges: edges,
                isDirected: true,
                description: "DFS Traversal Complete"
            };
        }
    },
    {
        id: "graph-dijkstra",
        name: "Dijkstra's Algorithm",
        type: "data-structure", // Using graph visualization
        category: "popular",
        description: `### Definition
Dijkstra's algorithm finds the shortest path from a starting node to all other nodes in a weighted graph.

### Complexity Analysis
- Time Complexity: O(E + V log V).
- Space Complexity: O(V).`,
        timeComplexity: "O(E + V log V)",
        spaceComplexity: "O(V)",
        code: {
            cpp: `vector<int> dijkstra(int V, vector<vector<pair<int, int>>>& adj, int S) {
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    vector<int> dist(V, 1e9);
    dist[S] = 0;
    pq.push({0, S});
    while (!pq.empty()) {
        int dis = pq.top().first;
        int node = pq.top().second;
        pq.pop();
        if (dis > dist[node]) continue;
        for (auto it : adj[node]) {
            int v = it.first;
            int w = it.second;
            if (dis + w < dist[v]) {
                dist[v] = dis + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}`,
            java: `class Solution {
    static int[] dijkstra(int V, ArrayList<ArrayList<ArrayList<Integer>>> adj, int S) {
        PriorityQueue<Pair> pq = new PriorityQueue<Pair>((x,y) -> x.distance - y.distance);
        int[] dist = new int[V];
        Arrays.fill(dist, (int)1e9);
        dist[S] = 0;
        pq.add(new Pair(0, S));
        while(pq.size() != 0) {
            int dis = pq.peek().distance;
            int node = pq.peek().node;
            pq.remove();
            for(int i = 0; i < adj.get(node).size(); i++) {
                int edgeWeight = adj.get(node).get(i).get(1);
                int adjNode = adj.get(node).get(i).get(0);
                if(dis + edgeWeight < dist[adjNode]) {
                    dist[adjNode] = dis + edgeWeight;
                    pq.add(new Pair(dist[adjNode], adjNode));
                }
            }
        }
        return dist;
    }
}`,
            python: `import heapq
def dijkstra(V, adj, S):
    pq = []
    heapq.heappush(pq, (0, S))
    dist = [float('inf')] * V
    dist[S] = 0
    while pq:
        d, node = heapq.heappop(pq)
        if d > dist[node]: continue
        for neighbor, weight in adj[node]:
            if dist[node] + weight < dist[neighbor]:
                dist[neighbor] = dist[node] + weight
                heapq.heappush(pq, (dist[neighbor], neighbor))
    return dist`,
            javascript: `function dijkstra(V, adj, S) {
    let dist = new Array(V).fill(Infinity);
    dist[S] = 0;
    let pq = [[0, S]];
    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        let [d, u] = pq.shift();
        if (d > dist[u]) continue;
        for (let [v, w] of adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push([dist[v], v]);
            }
        }
    }
    return dist;
}`
        },
        run: function* () {
            const nodes: GraphNode[] = [
                { id: 'A', value: 'A', x: 100, y: 150 },
                { id: 'B', value: 'B', x: 300, y: 50 },
                { id: 'C', value: 'C', x: 300, y: 250 },
                { id: 'D', value: 'D', x: 500, y: 150 }
            ];
            const edges: GraphEdge[] = [
                { source: 'A', target: 'B', weight: 4 },
                { source: 'A', target: 'C', weight: 2 },
                { source: 'B', target: 'C', weight: 5 },
                { source: 'B', target: 'D', weight: 10 },
                { source: 'C', target: 'D', weight: 3 }
            ];

            const adj: any = {
                'A': [['B', 4], ['C', 2]],
                'B': [['C', 5], ['D', 10]],
                'C': [['D', 3]],
                'D': []
            };

            yield {
                type: 'graph',
                nodes: nodes,
                edges: edges,
                isDirected: true,
                description: "Starting Dijkstra from Node A"
            };

            const dist: any = { 'A': 0, 'B': Infinity, 'C': Infinity, 'D': Infinity };
            const visited = new Set<string>();

            while (visited.size < nodes.length) {
                let u: string | null = null;
                let minDist = Infinity;
                for (const node of nodes) {
                    if (!visited.has(node.id) && dist[node.id] < minDist) {
                        minDist = dist[node.id];
                        u = node.id;
                    }
                }

                if (u === null) break;

                visited.add(u);
                yield {
                    type: 'graph',
                    nodes: nodes.map(n => n.id === u ? { ...n, highlight: 'active', value: `${n.id}:${dist[n.id]}` } : visited.has(n.id) ? { ...n, highlight: 'visited', value: `${n.id}:${dist[n.id]}` } : { ...n, value: `${n.id}:${dist[n.id] === Infinity ? 'Inf' : dist[n.id]}` }),
                    edges: edges,
                    isDirected: true,
                    description: `Processing Node ${u} (Dist: ${dist[u]})`
                };

                for (const [v, w] of adj[u]) {
                    if (!visited.has(v)) {
                        yield {
                            type: 'graph',
                            nodes: nodes.map(n => n.id === v ? { ...n, highlight: 'match', value: `${n.id}:${dist[n.id] === Infinity ? 'Inf' : dist[n.id]}` } : n.id === u ? { ...n, highlight: 'active', value: `${n.id}:${dist[n.id]}` } : visited.has(n.id) ? { ...n, highlight: 'visited', value: `${n.id}:${dist[n.id]}` } : { ...n, value: `${n.id}:${dist[n.id] === Infinity ? 'Inf' : dist[n.id]}` }),
                            edges: edges.map(e => (e.source === u && e.target === v) ? { ...e, highlight: 'active' } : e),
                            isDirected: true,
                            description: `Checking neighbor ${v} with weight ${w}`
                        };

                        if (dist[u] + w < dist[v]) {
                            dist[v] = dist[u] + w;
                            yield {
                                type: 'graph',
                                nodes: nodes.map(n => n.id === v ? { ...n, highlight: 'match', value: `${n.id}:${dist[v]}` } : n.id === u ? { ...n, highlight: 'active', value: `${n.id}:${dist[n.id]}` } : visited.has(n.id) ? { ...n, highlight: 'visited', value: `${n.id}:${dist[n.id]}` } : { ...n, value: `${n.id}:${dist[n.id] === Infinity ? 'Inf' : dist[n.id]}` }),
                                edges: edges,
                                isDirected: true,
                                description: `Updated distance for ${v} to ${dist[v]}`
                            };
                        }
                    }
                }
            }

            yield {
                type: 'graph',
                nodes: nodes.map(n => ({ ...n, highlight: 'visited', value: `${n.id}:${dist[n.id]}` })),
                edges: edges,
                isDirected: true,
                description: "Shortest paths calculated."
            };
        }
    },
    {
        id: "topological-sort",
        name: "Topological Sort",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Topological Sort is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge u -> v, vertex u comes before v in the ordering.

### Real-World Example
Task scheduling with dependencies. If Task A must be done before Task B, A comes before B in the topological sort.

### Complexity Analysis
- Time Complexity: O(V + E).
- Space Complexity: O(V).`,
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)",
        code: {
            cpp: `void topologicalSortUtil(int v, bool visited[], stack<int>& Stack) {
    visited[v] = true;
    for (auto i = adj[v].begin(); i != adj[v].end(); ++i)
        if (!visited[*i])
            topologicalSortUtil(*i, visited, Stack);
    Stack.push(v);
}`,
            java: `void topologicalSortUtil(int v, boolean visited[], Stack<Integer> stack) {
    visited[v] = true;
    for (Integer i : adj.get(v))
        if (!visited[i])
            topologicalSortUtil(i, visited, stack);
    stack.push(v);
}`,
            python: `def topologicalSortUtil(v, visited, stack):
    visited[v] = True
    for i in adj[v]:
        if visited[i] == False:
            topologicalSortUtil(i, visited, stack)
    stack.insert(0, v)`,
            javascript: `function topologicalSortUtil(v, visited, stack) {
  visited[v] = true;
  for (let i of adj[v]) {
    if (!visited[i]) topologicalSortUtil(i, visited, stack);
  }
  stack.push(v);
}`
        },
        run: function* () {
            // Graph setup (DAG)
            const nodes: GraphNode[] = [
                { id: '0', value: '0', x: 100, y: 100 },
                { id: '1', value: '1', x: 300, y: 100 },
                { id: '2', value: '2', x: 100, y: 200 },
                { id: '3', value: '3', x: 300, y: 200 },
                { id: '4', value: '4', x: 500, y: 150 },
                { id: '5', value: '5', x: 200, y: 50 },
            ];
            const edges: GraphEdge[] = [
                { source: '5', target: '0' },
                { source: '5', target: '2' },
                { source: '4', target: '0' },
                { source: '4', target: '1' },
                { source: '2', target: '3' },
                { source: '3', target: '1' },
            ];

            const adj: Record<string, string[]> = {
                '0': [], '1': [], '2': ['3'], '3': ['1'], '4': ['0', '1'], '5': ['0', '2']
            };
            const visited = new Set<string>();
            const stack: string[] = [];

            yield {
                type: 'graph',
                nodes: nodes,
                edges: edges,
                isDirected: true,
                description: "Initial DAG. Starting Topological Sort (DFS based)."
            };

            function* dfs(u: string): Generator<VisualizationState> {
                visited.add(u);
                yield {
                    type: 'graph',
                    nodes: nodes.map(n => ({ ...n, highlight: n.id === u ? 'active' : visited.has(n.id) ? 'visited' : 'none' })),
                    edges: edges,
                    isDirected: true,
                    description: `Visiting ${u}`
                };

                const neighbors = adj[u] || [];
                for (const v of neighbors) {
                    if (!visited.has(v)) {
                        yield* dfs(v);
                    }
                }

                stack.push(u);
                yield {
                    type: 'graph',
                    nodes: nodes.map(n => ({ ...n, highlight: visited.has(n.id) ? 'visited' : 'none' })),
                    edges: edges,
                    isDirected: true,
                    description: `Finished ${u}. Pushed to Stack: [${stack.join(', ')}]`
                };
            }

            for (const node of nodes) {
                if (!visited.has(node.id)) {
                    yield* dfs(node.id);
                }
            }

            yield {
                type: 'graph',
                nodes: nodes.map(n => ({ ...n, highlight: 'visited' })),
                edges: edges,
                isDirected: true,
                description: `Topological Sort Completed: ${stack.reverse().join(' -> ')}`
            };
        }
    },
    {
        id: "flood-fill",
        name: "Flood Fill",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Flood fill, also called seed fill, is an algorithm that determines and connects the area that is connected to a given node in a multi-dimensional array.

### Complexity Analysis
- Time Complexity: O(N*M).
- Space Complexity: O(N*M).`,
        timeComplexity: "O(N*M)",
        spaceComplexity: "O(N*M)",
        code: {
            cpp: `void floodFill(int r, int c, int newColor) {
    if (r<0 || r>=rows || c<0 || c>=cols) return;
    if (image[r][c] != startColor) return;
    image[r][c] = newColor;
    floodFill(r-1, c, newColor);
    floodFill(r+1, c, newColor);
    floodFill(r, c-1, newColor);
    floodFill(r, c+1, newColor);
}`,
            java: `void floodFill(int r, int c, int newColor) {
    if (r<0 || r>=rows || c<0 || c>=cols) return;
    if (image[r][c] != startColor) return;
    image[r][c] = newColor;
    floodFill(r-1, c, newColor);
    floodFill(r+1, c, newColor);
    floodFill(r, c-1, newColor);
    floodFill(r, c+1, newColor);
}`,
            python: `def flood_fill(r, c, new_color):
    if r<0 or r>=rows or c<0 or c>=cols: return
    if image[r][c] != start_color: return
    image[r][c] = new_color
    flood_fill(r-1, c, new_color)
    flood_fill(r+1, c, new_color)
    flood_fill(r, c-1, new_color)
    flood_fill(r, c+1, new_color)`,
            javascript: `function floodFill(r, c, newColor) {
    if (r<0 || r>=rows || c<0 || c>=cols) return;
    if (image[r][c] !== startColor) return;
    image[r][c] = newColor;
    floodFill(r-1, c, newColor);
    floodFill(r+1, c, newColor);
    floodFill(r, c-1, newColor);
    floodFill(r, c+1, newColor);
}`
        },
        run: function* () {
            const image = [
                [1, 1, 1],
                [1, 1, 0],
                [1, 0, 1]
            ];
            const sr = 1, sc = 1, newColor = 2;
            const rows = image.length;
            const cols = image[0].length;
            const startColor = image[sr][sc];

            const formatGrid = (r: number, c: number) => {
                const highlights: { row: number; col: number; color: 'active' | 'match' | 'mismatch' | 'none' }[] = [];
                highlights.push({ row: r, col: c, color: 'active' });
                return { grid: image, highlights };
            };

            if (startColor === newColor) return;

            function* dfs(r: number, c: number): Generator<any> {
                if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== startColor) {
                    return;
                }

                image[r][c] = newColor;
                const { grid, highlights } = formatGrid(r, c);
                yield {
                    type: 'grid',
                    rows: rows,
                    cols: cols,
                    grid: grid.map(row => [...row]),
                    highlights: highlights,
                    description: `Filling (${r}, ${c}) with color ${newColor}`
                };

                yield* dfs(r - 1, c);
                yield* dfs(r + 1, c);
                yield* dfs(r, c - 1);
                yield* dfs(r, c + 1);
            }

            yield* dfs(sr, sc);
            yield {
                type: 'grid',
                rows: rows,
                cols: cols,
                grid: image,
                highlights: [],
                description: "Flood Fill Complete!"
            };
        }
    },
    {
        id: "rat-in-maze",
        name: "Rat in a Maze",
        type: "data-structure", 
        category: "popular",
        description: `### Definition
Find a path from source (0,0) to destination (N-1, N-1) in a maze.

### Complexity Analysis
- Time Complexity: O(2^(N^2)).
- Space Complexity: O(N^2).`,
        timeComplexity: "O(2^(N^2))",
        spaceComplexity: "O(N^2)",
        code: {
            cpp: `bool solve(int r, int c) {
    if (r == N-1 && c == N-1) return true;
    if (isSafe(r, c)) {
        sol[r][c] = 1;
        if (solve(r+1, c)) return true;
        if (solve(r, c+1)) return true;
        sol[r][c] = 0; // Backtrack
        return false;
    }
    return false;
}`,
            java: `boolean solve(int r, int c) {
    if (r == N-1 && c == N-1) return true;
    if (isSafe(r, c)) {
        sol[r][c] = 1;
        if (solve(r+1, c)) return true;
        if (solve(r, c+1)) return true;
        sol[r][c] = 0; // Backtrack
        return false;
    }
    return false;
}`,
            python: `def solve(r, c):
    if r == N-1 and c == N-1: return True
    if is_safe(r, c):
        sol[r][c] = 1
        if solve(r+1, c): return True
        if solve(r, c+1): return True
        sol[r][c] = 0 # Backtrack
        return False
    return False`,
            javascript: `function solve(r, c) {
    if (r === N-1 && c === N-1) return true;
    if (isSafe(r, c)) {
        sol[r][c] = 1;
        if (solve(r+1, c)) return true;
        if (solve(r, c+1)) return true;
        sol[r][c] = 0; // Backtrack
        return false;
    }
    return false;
}`
        },
        run: function* () {
            const maze = [
                [1, 0, 0, 0],
                [1, 1, 0, 1],
                [0, 1, 0, 0],
                [1, 1, 1, 1]
            ];
            const n = maze.length;
            const sol = Array(n).fill(0).map(() => Array(n).fill(0));

            const formatGrid = (currentR: number, currentC: number) => {
                const displayGrid = maze.map((row, r) => row.map((val, c) => val === 0 ? 'W' : ' '));
                const highlights: { row: number; col: number; color: 'active' | 'match' | 'mismatch' | 'none' }[] = [];

                for (let r = 0; r < n; r++) {
                    for (let c = 0; c < n; c++) {
                        if (sol[r][c] === 1) highlights.push({ row: r, col: c, color: 'match' });
                        else if (maze[r][c] === 0) highlights.push({ row: r, col: c, color: 'mismatch' });
                    }
                }
                highlights.push({ row: currentR, col: currentC, color: 'active' });
                return { grid: displayGrid, highlights };
            };

            function* solve(r: number, c: number): Generator<any> {
                if (r === n - 1 && c === n - 1 && maze[r][c] === 1) {
                    sol[r][c] = 1;
                    const { grid, highlights } = formatGrid(r, c);
                    yield {
                        type: 'grid',
                        rows: n,
                        cols: n,
                        grid: grid,
                        highlights: highlights,
                        description: "Destination Reached!"
                    };
                    return true;
                }

                if (r >= 0 && r < n && c >= 0 && c < n && maze[r][c] === 1 && sol[r][c] === 0) {
                    sol[r][c] = 1;
                    const { grid, highlights } = formatGrid(r, c);
                    yield {
                        type: 'grid',
                        rows: n,
                        cols: n,
                        grid: grid,
                        highlights: highlights,
                        description: `Moving to (${r}, ${c})`
                    };

                    if (yield* solve(r + 1, c)) return true;
                    if (yield* solve(r, c + 1)) return true;

                    sol[r][c] = 0; // Backtrack
                    const { grid: grid2, highlights: highlights2 } = formatGrid(r, c);
                    yield {
                        type: 'grid',
                        rows: n,
                        cols: n,
                        grid: grid2,
                        highlights: highlights2,
                        description: `Backtracking from (${r}, ${c})`
                    };
                    return false;
                }
                return false;
            }

            yield* solve(0, 0);
        }
    }
];
