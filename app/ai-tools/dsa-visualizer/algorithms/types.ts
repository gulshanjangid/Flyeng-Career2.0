export type AlgorithmType = "sorting" | "searching" | "data-structure";
export type VisualizationType =
  | "array"
  | "linked-list"
  | "stack"
  | "queue"
  | "tree"
  | "graph"
  | "heap"
  | "string"
  | "grid"
  | "hanoi";

export interface BaseVisualizationState {
  description: string;
  type: VisualizationType;
}

export interface ArrayVisualizationState extends BaseVisualizationState {
  type: "array";
  array: number[];
  activeIndices: number[]; // Indices being compared
  swapIndices: number[]; // Indices being swapped
  sortedIndices: number[]; // Indices that are sorted
  pivotIndex?: number; // For Quick Sort
}

export interface LinkedListNode {
  id: string;
  value: number;
  nextId: string | null;
  highlight?: "active" | "visited" | "found" | "none" | "match" | "mismatch";
}

export interface LinkedListVisualizationState extends BaseVisualizationState {
  type: "linked-list";
  nodes: LinkedListNode[];
  headId: string | null;
  activeId?: string | null;
}

export interface StackVisualizationState extends BaseVisualizationState {
  type: "stack";
  stack: (number | string)[];
  highlightIndex?: number;
  operation?: "push" | "pop" | "peek" | "none";
}

export interface QueueVisualizationState extends BaseVisualizationState {
  type: "queue";
  queue: number[];
  highlightIndex?: number;
  operation?: "enqueue" | "dequeue" | "peek" | "none";
}

export interface TreeNode {
  id: string;
  value: number;
  leftId: string | null;
  rightId: string | null;
  x: number;
  y: number;
  highlight?: "active" | "visited" | "found" | "none";
}

export interface TreeVisualizationState extends BaseVisualizationState {
  type: "tree";
  nodes: TreeNode[];
  rootId: string | null;
  activeId?: string | null;
  message?: string;
}

export interface GraphNode {
  id: string;
  value: string | number;
  x: number;
  y: number;
  highlight?: "active" | "visited" | "found" | "none" | "match" | "mismatch";
}

export interface GraphEdge {
  source: string;
  target: string;
  weight?: number;
  highlight?: "active" | "visited" | "none";
}

export interface GraphVisualizationState extends BaseVisualizationState {
  type: "graph";
  nodes: GraphNode[];
  edges: GraphEdge[];
  isDirected: boolean;
  message?: string;
}

export interface HeapVisualizationState extends BaseVisualizationState {
  type: "heap";
  tree: TreeVisualizationState; // Reuse Tree state for visualization
  array: number[]; // Underlying array representation
  message?: string;
}

export interface StringVisualizationState extends BaseVisualizationState {
  type: "string";
  value: string;
  indices: {
    index: number;
    highlight: "active" | "match" | "mismatch" | "none";
  }[];
  message?: string;
}

export interface GridVisualizationState extends BaseVisualizationState {
  type: "grid";
  grid: (number | string)[][];
  rows: number;
  cols: number;
  highlights: {
    row: number;
    col: number;
    color: "active" | "match" | "mismatch" | "none" | "found";
  }[];
  message?: string;
}

export interface HanoiVisualizationState extends BaseVisualizationState {
  type: "hanoi";
  rods: number[][]; // 3 rods, each containing disk sizes
  move?: { disk: number; from: number; to: number };
  message?: string;
}

export type VisualizationState =
  | ArrayVisualizationState
  | LinkedListVisualizationState
  | StackVisualizationState
  | QueueVisualizationState
  | TreeVisualizationState
  | GraphVisualizationState
  | HeapVisualizationState
  | StringVisualizationState
  | GridVisualizationState
  | HanoiVisualizationState;

export interface Algorithm {
  id: string;
  name: string;
  type: AlgorithmType;
  category?: "popular" | "data-structure";
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  code: {
    cpp: string;
    java: string;
    python: string;
    javascript: string;
  };
  run: (data?: any) => Generator<VisualizationState>;
}
