"use client"

import { useState, useEffect, useRef } from "react"
import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { NeonGridBackground } from "@/components/neon-grid-background"
import { motion, AnimatePresence } from "framer-motion"
import { Play, SquareTerminal, MessageSquareWarning, Timer, Flame, RefreshCcw, Zap, Code2, ChevronRight, Activity, Command, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Oswald, Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import Editor from '@monaco-editor/react'
import { safeEvaluateResult } from "@/lib/code-evaluator"

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "700"] });
const inter = Inter({ subsets: ["latin"] });

const PERSONAS = [
    { id: "faang", title: "The Gatekeeper (FAANG)", bg: "bg-red-500/10", border: "border-red-500/50", text: "text-red-500", glow: "shadow-[0_0_15px_rgba(239,68,68,0.5)]", icon: Flame, desc: "Brutally obsessed with Big O notation and flawless syntax. Cold, calculated, and intimidating." },
    { id: "startup", title: "The Chaotic CTO", bg: "bg-emerald-500/10", border: "border-emerald-500/50", text: "text-emerald-500", glow: "shadow-[0_0_15px_rgba(16,185,129,0.5)]", icon: Zap, desc: "Wants it shipped yesterday. Hates over-engineering. Fast, aggressive, values scrappiness." },
    { id: "purist", title: "The Clean Code Zealot", bg: "bg-purple-500/10", border: "border-purple-500/50", text: "text-purple-500", glow: "shadow-[0_0_15px_rgba(168,85,247,0.5)]", icon: Code2, desc: "A seasoned veteran who will end the interview if you use 'var' or name a variable 'x'." },
    { id: "anxious", title: "The Anxious Junior", bg: "bg-blue-500/10", border: "border-blue-500/50", text: "text-blue-500", glow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]", icon: Activity, desc: "Constantly second-guessing your code. Nervous, asks too many 'what if' questions, easily confused." },
    { id: "hacker", title: "The Rogue Hacker", bg: "bg-yellow-500/10", border: "border-yellow-500/50", text: "text-yellow-500", glow: "shadow-[0_0_15px_rgba(234,179,8,0.5)]", icon: Terminal, desc: "Loves cryptic one-liners, bitwise operations, and raw performance. Disdains standard conventions." }
];

const LANGUAGES = [
    { id: "javascript", name: "JavaScript", type: "javascript" },
    { id: "python", name: "Python 3", type: "python" },
    { id: "java", name: "Java", type: "java" },
    { id: "cpp", name: "C++", type: "cpp" },
    { id: "react", name: "React (JSX)", type: "javascript" },
    { id: "html", name: "HTML/CSS", type: "html" },
    { id: "css", name: "CSS", type: "css" },
    { id: "nodejs", name: "Node.js", type: "javascript" },
    { id: "mysql", name: "SQL", type: "sql" }
];

const CATEGORIES = ['All', 'DSA Based', 'HTML Structure', 'CSS Layout', 'JavaScript Core', 'React Components', 'Node.js Backend', 'MySQL Database'];
const DIFFICULTIES = ['All', 'Easy', 'Medium', 'Hard'];

const PROBLEMS = [
    // DSA Based
    // Easy
    { id: "reverse-array", title: "Reverse Array In-Place", category: "DSA Based", diffHex: "text-green-400", difficulty: "Easy", description: "Write `reverseArray(arr)` that reverses the given array in-place. Do not create a new array. Return the array.", initialCode: "function reverseArray(arr) {\n  \n}\n\n// Python: def reverse_array(arr):\n// Java/C++: void reverseArray(int[] arr) {}", testCases: [ { input: "[1, 2, 3]", expected: "[3, 2, 1]" }, { input: "[5]", expected: "[5]" } ] },
    { id: "two-sum", title: "Two Sum", category: "DSA Based", diffHex: "text-green-400", difficulty: "Easy", description: "Write `twoSum(nums, target)` returning indices of the two numbers such that they add up to target.", initialCode: "function twoSum(nums, target) {\n  \n}\n\n// Python: def two_sum(nums, target):", testCases: [ { input: "[[2,7,11,15], 9]", expected: "[0, 1]" }, { input: "[[3,2,4], 6]", expected: "[1, 2]" } ] },
    { id: "valid-palindrome", title: "Valid Palindrome", category: "DSA Based", diffHex: "text-green-400", difficulty: "Easy", description: "Given a string `s`, return true if it is a palindrome, considering only alphanumeric characters and ignoring cases.", initialCode: "function isPalindrome(s) {\n  \n}", testCases: [ { input: "'A man, a plan, a canal: Panama'", expected: "true" }, { input: "'race a car'", expected: "false" } ] },
    { id: "contains-duplicate", title: "Contains Duplicate", category: "DSA Based", diffHex: "text-green-400", difficulty: "Easy", description: "Given an integer array `nums`, return true if any value appears at least twice in the array.", initialCode: "function containsDuplicate(nums) {\n  \n}", testCases: [ { input: "[1,2,3,1]", expected: "true" }, { input: "[1,2,3,4]", expected: "false" } ] },
    { id: "fizzbuzz", title: "FizzBuzz", category: "DSA Based", diffHex: "text-green-400", difficulty: "Easy", description: "Given an integer `n`, return a string array answer where answer[i] is 'FizzBuzz' if i is divisible by 3 and 5.", initialCode: "function fizzBuzz(n) {\n  \n}", testCases: [ { input: "15", expected: "['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']" } ] },
    // Medium
    { id: "valid-parentheses", title: "Valid Parentheses", category: "DSA Based", diffHex: "text-yellow-400", difficulty: "Medium", description: "Write `isValid(s)` to determine if the input string has valid matching parentheses.", initialCode: "function isValid(s) {\n  \n}\n", testCases: [ { input: "'()[]{}'", expected: "true" }, { input: "'(]'", expected: "false" } ] },
    { id: "group-anagrams", title: "Group Anagrams", category: "DSA Based", diffHex: "text-yellow-400", difficulty: "Medium", description: "Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.", initialCode: "function groupAnagrams(strs) {\n  \n}", testCases: [ ] },
    { id: "top-k-frequent", title: "Top K Frequent Elements", category: "DSA Based", diffHex: "text-yellow-400", difficulty: "Medium", description: "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.", initialCode: "function topKFrequent(nums, k) {\n  \n}", testCases: [ { input: "[[1,1,1,2,2,3], 2]", expected: "[1,2]" } ] },
    { id: "longest-substring", title: "Longest Substring No Repeats", category: "DSA Based", diffHex: "text-yellow-400", difficulty: "Medium", description: "Given a string `s`, find the length of the longest substring without repeating characters.", initialCode: "function lengthOfLongestSubstring(s) {\n  \n}", testCases: [ { input: "'abcabcbb'", expected: "3" }, { input: "'bbbbb'", expected: "1" } ] },
    { id: "merge-intervals", title: "Merge Intervals", category: "DSA Based", diffHex: "text-yellow-400", difficulty: "Medium", description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.", initialCode: "function mergeIntervals(intervals) {\n  \n}\n", testCases: [ ] },
    { id: "word-search", title: "Word Search Grid", category: "DSA Based", diffHex: "text-yellow-400", difficulty: "Medium", description: "Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.", initialCode: "function exist(board, word) {\n  \n}\n\n// Python: def exist(board, word):", testCases: [ ] },
    // Hard
    { id: "trapping-rain", title: "Trapping Rain Water", category: "DSA Based", diffHex: "text-red-500", difficulty: "Hard", description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.", initialCode: "function trap(height) {\n  \n}\n", testCases: [ { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", expected: "6" } ] },
    { id: "merge-k-lists", title: "Merge k Sorted Lists", category: "DSA Based", diffHex: "text-red-500", difficulty: "Hard", description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all into one.", initialCode: "function mergeKLists(lists) {\n  \n}\n", testCases: [ ] },
    { id: "sudoku-solver", title: "Sudoku Solver", category: "DSA Based", diffHex: "text-red-500", difficulty: "Hard", description: "Write a program to solve a Sudoku puzzle.", initialCode: "function solveSudoku(board) {\n  \n}\n\n// Python: def solve_sudoku(board):", testCases: [ ] },

    // HTML Structure
    { id: "html-resume", title: "Basic Resume Page", category: "HTML Structure", diffHex: "text-green-400", difficulty: "Easy", description: "Create a basic resume page using only semantic tags like header, section, article.", initialCode: "<!-- HTML -->\n<header>\n  <h1>John Doe</h1>\n</header>\n<section>\n  <h2>Experience</h2>\n</section>", testCases: [] },
    { id: "html-semantic-blog", title: "Semantic Blog Layout", category: "HTML Structure", diffHex: "text-green-400", difficulty: "Easy", description: "Structure a blog post layout using `<article>`, `<time>`, `<figure>`, and `<figcaption>`.", initialCode: "<main>\n  <!-- Your blog here -->\n</main>", testCases: [] },
    { id: "html-table-data", title: "Table Data Display", category: "HTML Structure", diffHex: "text-green-400", difficulty: "Easy", description: "Build an accessible HTML table for student marks using `<thead>`, `<tbody>`, `<th>`, and `scope` attributes.", initialCode: "<!-- Build your table -->", testCases: [] },
    { id: "html-form", title: "Form-Heavy Page", category: "HTML Structure", diffHex: "text-yellow-400", difficulty: "Medium", description: "Build a form with inputs for text, email, radio, checkbox, file upload, and proper labels + accessibility.", initialCode: "<!-- Form Structure -->\n<form>\n  \n</form>", testCases: [] },
    { id: "html-nav-multi", title: "Multi-page Semantic Nav", category: "HTML Structure", diffHex: "text-yellow-400", difficulty: "Medium", description: "Build an interconnected navigation semantic structure with nested unordered lists and skip links.", initialCode: "<nav>\n  <!-- Nested lists here -->\n</nav>", testCases: [] },
    { id: "html-a11y", title: "Accessibility-Focused Page", category: "HTML Structure", diffHex: "text-red-500", difficulty: "Hard", description: "Create a fully accessible UI component with proper ARIA roles, alt text, listbox schemas, and heading hierarchy.", initialCode: "<!-- Accessible Component -->", testCases: [] },

    // CSS Layout
    { id: "css-box-model", title: "Box Model Playground", category: "CSS Layout", diffHex: "text-green-400", difficulty: "Easy", description: "Write CSS to create a perfect square box of 200px width/height including 10px padding and 5px border.", initialCode: ".box {\n  /* Your CSS Here */\n}", testCases: [] },
    { id: "css-centering", title: "Absolute Centering", category: "CSS Layout", diffHex: "text-green-400", difficulty: "Easy", description: "Center a child `<div>` perfectly both horizontally and vertically inside a parent container using CSS Flexbox.", initialCode: ".parent {\n  \n}\n.child {\n  \n}", testCases: [] },
    { id: "css-flexbox", title: "Flexbox Navbar", category: "CSS Layout", diffHex: "text-yellow-400", difficulty: "Medium", description: "Create a responsive flexbox navbar with a left-aligned logo and right-aligned links.", initialCode: ".navbar {\n  display: flex;\n  /* Your CSS */\n}", testCases: [] },
    { id: "css-grid", title: "Responsive Grid Dashboard", category: "CSS Layout", diffHex: "text-yellow-400", difficulty: "Medium", description: "Create a 3-column CSS Grid layout that collapses to a 1-column stack on mobile devices. Use `grid-template-columns`.", initialCode: ".dashboard {\n  display: grid;\n  /* Auto-fit magic */\n}", testCases: [] },
    { id: "css-pure-components", title: "Pure CSS Dropdown", category: "CSS Layout", diffHex: "text-red-500", difficulty: "Hard", description: "Implement a hover-activated dropdown menu entirely in CSS without a single line of JS.", initialCode: "/* Dropdown styles */\n.dropdown:hover .menu {\n  \n}", testCases: [] },

    // JavaScript Core
    { id: "js-counter", title: "Counter Logic", category: "JavaScript Core", diffHex: "text-green-400", difficulty: "Easy", description: "Implement a function `createCounter()` that returns an object with `increment()`, `decrement()`, and `getValue()` methods.", initialCode: "function createCounter(initialValue = 0) {\n  \n}", testCases: [] },
    { id: "js-array-methods", title: "Array Filter Map Chain", category: "JavaScript Core", diffHex: "text-green-400", difficulty: "Easy", description: "Given an array of user objects, use `.filter()` and `.map()` to return an array of just the names of users strictly older than 18.", initialCode: "function getAdultNames(users) {\n  \n}", testCases: [] },
    { id: "js-debounce", title: "Debounced Search", category: "JavaScript Core", diffHex: "text-yellow-400", difficulty: "Medium", description: "Implement `debounce(func, wait)` that delays invoking `func` until after `wait` milliseconds.", initialCode: "function debounce(func, wait) {\n  \n}", testCases: [] },
    { id: "js-deep-clone", title: "Deep Clone Object", category: "JavaScript Core", diffHex: "text-yellow-400", difficulty: "Medium", description: "Write a function `deepClone(obj)` that returns a completely independent deep copy of a nested JS object.", initialCode: "function deepClone(obj) {\n  \n}", testCases: [] },
    { id: "js-virtual-scroll", title: "Virtual Infinite Scroll", category: "JavaScript Core", diffHex: "text-red-500", difficulty: "Hard", description: "Design a Virtualized Scroll handler for 100k list items conceptually. Explain how to compute visible indexes based on scrollTop.", initialCode: "// Concept code for Virtual Scroll\nfunction getVisibleRange(scrollTop, viewportHeight, itemHeight) {\n  \n}", testCases: [] },

    // React
    { id: "react-props-card", title: "Static Props Card", category: "React Components", diffHex: "text-green-400", difficulty: "Easy", description: "Create a reusable `<ProfileCard name, title, bio />` component.", initialCode: "export default function ProfileCard(props) {\n  return <div></div>;\n}", testCases: [] },
    { id: "react-counter", title: "Stateful Counter", category: "React Components", diffHex: "text-green-400", difficulty: "Easy", description: "Create a button that tracks click counts using `useState`.", initialCode: "import { useState } from 'react';\n\nexport default function ClickCounter() {\n  return <button>Clicks: 0</button>;\n}", testCases: [] },
    { id: "react-search-filter", title: "Search Filter App", category: "React Components", diffHex: "text-yellow-400", difficulty: "Medium", description: "Create a component with an input field that filters a static list of users based on their name.", initialCode: "import { useState } from 'react';\n\nexport default function FilterList({ items }) {\n  return <div></div>;\n}", testCases: [] },
    { id: "react-todo-state", title: "To-Do List State", category: "React Components", diffHex: "text-yellow-400", difficulty: "Medium", description: "Implement a To-Do list UI where users can add items using a text input, and delete items via an integrated delete button.", initialCode: "import { useState } from 'react';\n\nexport default function TodoList() {\n  \n}", testCases: [] },
    { id: "react-global-state", title: "Global Context API", category: "React Components", diffHex: "text-red-500", difficulty: "Hard", description: "Implement a complex `ThemeProvider` using React Context with `useReducer` for state dispatching.", initialCode: "import { createContext, useReducer } from 'react';\n\nconst ThemeContext = createContext();\n\nexport function ThemeProvider({ children }) {\n  \n}", testCases: [] },

    // Node.js Backend
    { id: "node-http", title: "Basic HTTP Server", category: "Node.js Backend", diffHex: "text-green-400", difficulty: "Easy", description: "Use native `http` module to respond with 'Hello World' on port 3000.", initialCode: "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  \n});", testCases: [] },
    { id: "node-file-reader", title: "Async File Reader", category: "Node.js Backend", diffHex: "text-green-400", difficulty: "Easy", description: "Use `fs.promises.readFile` to asynchronously read a JSON file and parse it gracefully.", initialCode: "const fs = require('fs/promises');\n\nasync function readData() {\n  \n}", testCases: [] },
    { id: "node-rest-api", title: "REST API CRUD", category: "Node.js Backend", diffHex: "text-yellow-400", difficulty: "Medium", description: "Write an Express.js POST route to create a new User and validate the JSON body.", initialCode: "const express = require('express');\nconst app = express();\n\napp.post('/users', (req, res) => {\n  \n});", testCases: [] },
    { id: "node-jwt-auth", title: "JWT Auth Middleware", category: "Node.js Backend", diffHex: "text-yellow-400", difficulty: "Medium", description: "Write an Express middleware to extract a Bearer token from the `Authorization` header and verify it using `jsonwebtoken`.", initialCode: "const jwt = require('jsonwebtoken');\n\nfunction requireAuth(req, res, next) {\n  \n}", testCases: [] },
    { id: "node-rate-limit", title: "Scalable Rate Limiter", category: "Node.js Backend", diffHex: "text-red-500", difficulty: "Hard", description: "Implement an Express middleware `rateLimiter(limit, window)` using a caching strategy.", initialCode: "function rateLimiter(limit, windowMs) {\n  return (req, res, next) => {\n    // Logic here\n  };\n}", testCases: [] },

    // MySQL Database
    { id: "sql-create", title: "Create Tables", category: "MySQL Database", diffHex: "text-green-400", difficulty: "Easy", description: "Write SQL statements to create a `Users` table and a `Products` table with primary keys.", initialCode: "-- SQL Query Here\nCREATE TABLE Users (\n  \n);", testCases: [] },
    { id: "sql-select-where", title: "Filtering with WHERE", category: "MySQL Database", diffHex: "text-green-400", difficulty: "Easy", description: "Write a SQL query to fetch all users from the `employees` table who work in 'Sales' and have a salary above 50000.", initialCode: "SELECT * FROM employees \nWHERE ...", testCases: [] },
    { id: "sql-joins", title: "Complex Joins", category: "MySQL Database", diffHex: "text-yellow-400", difficulty: "Medium", description: "Write a query to get User Names and their Total Order Amount using an INNER JOIN and GROUP BY.", initialCode: "/* \nUsers(id, name)\nOrders(id, user_id, amount) \n*/\nSELECT ... ", testCases: [] },
    { id: "sql-group-by", title: "GROUP BY Aggregations", category: "MySQL Database", diffHex: "text-yellow-400", difficulty: "Medium", description: "Find the total revenue generated by each `department_id` in the `sales` table, ordered by highest revenue.", initialCode: "SELECT department_id, SUM(amount) \nFROM sales\nGROUP BY ...", testCases: [] },
    { id: "sql-indexing", title: "Indexing + Transactions", category: "MySQL Database", diffHex: "text-red-500", difficulty: "Hard", description: "Design an ACID-compliant transaction transferring $100 from Account A to Account B, rolling back on failure.", initialCode: "START TRANSACTION;\n-- Your Queries Here\nCOMMIT;", testCases: [] }
];

type ChatMessage = {
    role: "ai" | "user" | "system";
    content: string;
};

const getInitialCode = (problem: any, langId: string) => {
    if (problem.category === 'React Based' || problem.category === 'HTML/CSS Based' || problem.category === 'System Design') {
        return problem.initialCode;
    }
    const funcMatch = problem.initialCode.match(/function\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)/);
    if (!funcMatch) return problem.initialCode;
    
    const funcName = funcMatch[1];
    const args = funcMatch[2];
    
    if (langId === 'python') {
        const pyName = funcName.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
        return `def ${pyName}(${args}):\n    # Write your Python 3 solution here\n    pass\n\n# Test your code below\nprint(${pyName}())`;
    }
    if (langId === 'java') {
        return `public class Main {\n    public static void main(String[] args) {\n        // Write your Java solution here\n        System.out.println("Hello Java");\n    }\n}`;
    }
    if (langId === 'cpp') {
        return `#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    cout << "Hello C++" << endl;\n    return 0;\n}`;
    }
    return problem.initialCode;
};

export default function CodeSandboxClient() {
    const [mode, setMode] = useState<"setup" | "interview">("setup");
    const [selectedPersona, setSelectedPersona] = useState(PERSONAS[0]);
    const [selectedProblem, setSelectedProblem] = useState(PROBLEMS[0]);
    const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);
    const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
    const [selectedDifficulty, setSelectedDifficulty] = useState(DIFFICULTIES[0]);

    const filteredProblems = PROBLEMS.filter(p => {
        const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
        const diffMatch = selectedDifficulty === 'All' || p.difficulty === selectedDifficulty;
        return catMatch && diffMatch;
    });

    useEffect(() => {
        if (!filteredProblems.find(p => p.id === selectedProblem.id)) {
            setSelectedProblem(filteredProblems[0] || PROBLEMS[0]);
        }
    }, [selectedCategory, selectedDifficulty]);

    const [code, setCode] = useState("");
    const [outputLogs, setOutputLogs] = useState<{ type: 'log' | 'error' | 'success' | 'info', text: string }[]>([]);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [finalVerdict, setFinalVerdict] = useState<"HIRED" | "REJECTED" | null>(null);
    const [finalVerdictMessage, setFinalVerdictMessage] = useState("");
    const [timeLeft, setTimeLeft] = useState(15 * 60);

    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, mode]);

    useEffect(() => {
        let timer: any;
        if (mode === "interview" && !isFinished && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && !isFinished && mode === "interview" && !isEvaluating) {
           handleSubmitFinal(true);
        }
        return () => clearInterval(timer);
    }, [mode, isFinished, timeLeft, isEvaluating]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const handleStart = () => {
        let currentLang = selectedLanguage;
        
        // Auto-correct language based on problem category restrictions
        if (selectedProblem.category === 'React Components') currentLang = LANGUAGES.find(l => l.id === 'react') || currentLang;
        else if (selectedProblem.category === 'CSS Layout') currentLang = LANGUAGES.find(l => l.id === 'css') || currentLang;
        else if (selectedProblem.category === 'HTML Structure') currentLang = LANGUAGES.find(l => l.id === 'html') || currentLang;
        else if (selectedProblem.category === 'Node.js Backend') currentLang = LANGUAGES.find(l => l.id === 'nodejs') || currentLang;
        else if (selectedProblem.category === 'MySQL Database') currentLang = LANGUAGES.find(l => l.id === 'mysql') || currentLang;
        else if (['DSA Based', 'JavaScript Core'].includes(selectedProblem.category)) {
            if (!['javascript', 'python', 'cpp', 'java'].includes(currentLang.id)) {
                currentLang = LANGUAGES.find(l => l.id === 'javascript') || currentLang;
            }
        }
        
        setSelectedLanguage(currentLang);
        setCode(getInitialCode(selectedProblem, currentLang.id));
        setTimeLeft(15 * 60);
        setIsFinished(false);
        setFinalVerdict(null);
        setFinalVerdictMessage("");
        setMessages([{ role: "ai", content: `I'm your interviewer today. I see you want to solve ${selectedProblem.title}. We have 15 minutes. Start coding, and don't disappoint me.` }]);
        setMode("interview");
    };

    const handleRunCode = async () => {
        if (['react', 'html', 'css'].includes(selectedLanguage.id) || selectedProblem.testCases.length === 0) {
            setOutputLogs([{ type: 'info', text: 'Evaluation bypassed. Submitting logic directly to AI for Review...' }]);
            setIsEvaluating(true);
            setTimeout(async () => {
                await evaluateWithAPI(true, [{ type: 'info', text: 'Bypassed Sandbox Execution. Awaiting AI judgment.' }]);
                setIsEvaluating(false);
            }, 1000);
            return;
        }

        setIsEvaluating(true);
        setOutputLogs([{ type: 'log', text: `Executing secure sandbox environment for ${selectedLanguage.name}...` }]);

        try {
            const functionName = selectedProblem.initialCode.split('function ')[1]?.split('(')[0] || 'solution';
            const result = await safeEvaluateResult(code, functionName, selectedProblem.testCases, selectedLanguage.id);
            
            setOutputLogs(result.logs);
            if (result.success) setOutputLogs(prev => [...prev, { type: 'success', text: 'Successfully compiled and passed constraints!' }]);

            await evaluateWithAPI(result.success, result.logs);
        } catch (error: any) {
            setOutputLogs(prev => [...prev, { type: 'error', text: error.message }]);
            setMessages(prev => [...prev, { role: "ai", content: "A syntax error? Really? We don't have time for this." }]);
        } finally {
            setIsEvaluating(false);
        }
    };

    const handleSubmitFinal = async (isTimeOut = false) => {
        if (isTimeOut) {
            setMessages(prev => [...prev, { role: "system", content: "TIME IS UP! Auto-submitting your final code to the AI..." }]);
        }

        if (['react', 'html', 'css'].includes(selectedLanguage.id) || selectedProblem.testCases.length === 0) {
            setOutputLogs([{ type: 'info', text: 'Evaluation bypassed. Submitting logic directly to AI for FINAL Review...' }]);
            setIsEvaluating(true);
            setTimeout(async () => {
                await evaluateWithAPI(true, [{ type: 'info', text: 'Bypassed Sandbox Execution. Awaiting AI judgment.' }], true);
                setIsEvaluating(false);
            }, 1000);
            return;
        }

        setIsEvaluating(true);
        setOutputLogs([{ type: 'log', text: isTimeOut ? `TIME'S UP! Auto-submitting secure sandbox environment for ${selectedLanguage.name}...` : `Executing FINAL secure sandbox environment for ${selectedLanguage.name}...` }]);

        try {
            const functionName = selectedProblem.initialCode.split('function ')[1]?.split('(')[0] || 'solution';
            const result = await safeEvaluateResult(code, functionName, selectedProblem.testCases, selectedLanguage.id);
            
            setOutputLogs(result.logs);
            if (result.success) setOutputLogs(prev => [...prev, { type: 'success', text: 'Successfully compiled and passed constraints!' }]);

            await evaluateWithAPI(result.success, result.logs, true);
        } catch (error: any) {
            setOutputLogs(prev => [...prev, { type: 'error', text: error.message }]);
            await evaluateWithAPI(false, [{ type: 'error', text: error.message }], true);
        } finally {
            setIsEvaluating(false);
        }
    };

    const evaluateWithAPI = async (success: boolean, logs: any[], isFinalSubmission: boolean = false) => {
        if (isFinished) return; // Prevent re-evaluation if a verdict has already been reached
        setMessages(prev => [...prev, { role: "system", content: isFinalSubmission ? "AI is reviewing your final submission..." : "AI is reviewing your code..." }]);
        try {
            const apiRes = await fetch('/api/hostile-interviewer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    problem: selectedProblem, 
                    code, 
                    logs,
                    persona: selectedPersona.id,
                    language: selectedLanguage.name,
                    isFinalSubmission
                })
            });
            const data = await apiRes.json();
            
            setMessages(prev => prev.filter(msg => msg.role !== "system"));
            if (data.reply) {
                let cleanedReply = data.reply;
                let verdictResult = null;
                if (cleanedReply.includes("[VERDICT: HIRED]")) {
                    verdictResult = "HIRED";
                    cleanedReply = cleanedReply.replace("[VERDICT: HIRED]", "").trim();
                } else if (cleanedReply.includes("[VERDICT: REJECTED]")) {
                    verdictResult = "REJECTED";
                    cleanedReply = cleanedReply.replace("[VERDICT: REJECTED]", "").trim();
                }

                if (isFinalSubmission || verdictResult) {
                    setFinalVerdict(verdictResult as any || "REJECTED"); // Default to rejected if AI fails to return the exact string
                    setFinalVerdictMessage(cleanedReply);
                    setIsFinished(true);
                }

                setMessages(prev => [...prev, { role: "ai", content: cleanedReply }]);
            }
        } catch (err) {
             setMessages(prev => prev.filter(msg => msg.role !== "system"));
             setMessages(prev => [...prev, { role: "ai", content: "Your code was so catastrophic it broke my evaluation engine." }]);
        }
    }

    return (
        <NeonGridBackground className="min-h-screen font-sans text-slate-950 pb-0 overflow-x-hidden max-w-[100vw] flex flex-col">
            <SiteHeader />
            
            <main className={cn("relative z-10 flex-1 flex flex-col pt-24 pb-12 container mx-auto px-4 xl:px-8", inter.className)}>
                <AnimatePresence mode="wait">
                    
                    {/* --- SETUP MODE --- */}
                    {mode === "setup" && (
                        <motion.div 
                            key="setup"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full max-w-6xl mx-auto flex flex-col items-center mt-10"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-500 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                <Activity className="w-4 h-4" />
                                LIVE CODE EVALUATION
                            </div>
                            <h1 className={cn("text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 text-white", oswald.className)}>
                                Live <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Interview</span> Setup
                            </h1>
                            <p className="text-white/50 text-center max-w-2xl mb-12 font-light">Select your evaluation parameters. Choose an interviewer persona, your preferred programming language, and a coding problem to begin.</p>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
                                {/* Persona Selection */}
                                <div className="lg:col-span-5 bg-black/40 p-6 rounded-3xl border border-white/5 backdrop-blur-md">
                                    <h2 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <Command className="w-4 h-4" /> 1. Select Persona
                                    </h2>
                                    <div className="flex flex-col gap-4">
                                        {PERSONAS.map(p => {
                                            const Icon = p.icon;
                                            const isSelected = selectedPersona.id === p.id;
                                            return (
                                                <div 
                                                    key={p.id}
                                                    onClick={() => setSelectedPersona(p)}
                                                    className={cn(
                                                        "cursor-pointer rounded-2xl p-4 border transition-all duration-300 relative overflow-hidden group",
                                                        isSelected ? p.border + " bg-[#0a0a0a]/90 scale-[1.02] " + p.glow : "border-white/10 bg-black/40 hover:bg-white/5"
                                                    )}
                                                >
                                                    {isSelected && <div className={cn("absolute inset-0 blur-2xl opacity-20 pointer-events-none", p.bg)} />}
                                                    <div className="flex gap-4 items-center relative z-10">
                                                        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center border", isSelected ? p.border : "border-white/10", p.bg)}>
                                                            <Icon className={cn("w-6 h-6", isSelected ? p.text : "text-white/40")} />
                                                        </div>
                                                        <div>
                                                            <h3 className={cn("font-bold text-lg mb-1", isSelected ? p.text : "text-white", oswald.className)}>{p.title}</h3>
                                                            <p className="text-xs text-white/50 leading-relaxed font-light">{p.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Problem Selection Takes Full Width on Right */}
                                <div className="lg:col-span-7 flex flex-col gap-6 lg:h-[700px] min-h-[500px]">
                                    <div className="bg-black/40 p-6 rounded-3xl border border-white/5 backdrop-blur-md flex-1 flex flex-col shadow-2xl overflow-hidden relative">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] pointer-events-none" />
                                        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-6 gap-4 relative z-10 w-full">
                                            <h2 className="text-sm font-bold text-white/40 uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                                                <Code2 className="w-4 h-4" /> 3. Select Problem
                                            </h2>
                                            
                                            {/* Category Tabs */}
                                            <div className="flex flex-col sm:flex-row gap-2 w-full xl:w-auto overflow-x-auto pb-1 custom-scrollbar">
                                                <div className="flex flex-wrap items-center gap-1.5 bg-black/50 border border-white/10 rounded-xl p-1.5 shadow-inner">
                                                    {CATEGORIES.map(cat => (
                                                        <button
                                                            key={cat}
                                                            onClick={() => setSelectedCategory(cat)}
                                                            className={cn(
                                                                "relative flex-1 md:flex-none px-2 lg:px-3 py-1.5 text-[9px] lg:text-[10px] font-black uppercase tracking-widest rounded-lg transition-all whitespace-nowrap overflow-hidden",
                                                                selectedCategory === cat 
                                                                    ? "text-black shadow-md bg-white border border-white/20" 
                                                                    : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
                                                            )}
                                                        >
                                                            <span className="relative z-10">{cat}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="flex flex-wrap items-center gap-1.5 bg-black/50 border border-white/10 rounded-xl p-1.5 shadow-inner">
                                                    {DIFFICULTIES.map(diff => (
                                                        <button
                                                            key={diff}
                                                            onClick={() => setSelectedDifficulty(diff)}
                                                            className={cn(
                                                                "relative flex-1 md:flex-none px-2 py-1.5 text-[9px] lg:text-[10px] font-black uppercase tracking-widest rounded-lg transition-all whitespace-nowrap",
                                                                selectedDifficulty === diff 
                                                                    ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30" 
                                                                    : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
                                                            )}
                                                        >
                                                            {diff}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4 flex-1 min-h-0 overflow-y-auto custom-scrollbar p-2 mt-2">
                                            <AnimatePresence mode="popLayout">
                                            {filteredProblems.map((prob, idx) => {
                                                const isSelected = selectedProblem.id === prob.id;
                                                return (
                                                    <motion.div 
                                                        layout
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                        transition={{ duration: 0.2 }}
                                                        key={prob.id}
                                                        onClick={() => setSelectedProblem(prob)}
                                                        className={cn(
                                                            "flex-shrink-0 cursor-pointer rounded-2xl p-4 border transition-all duration-300 relative overflow-hidden group",
                                                            isSelected ? "border-cyan-500/50 bg-[#0a0a0a] shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-[1.02] z-10" : "border-white/10 bg-black/40 hover:bg-white/5"
                                                        )}
                                                    >
                                                        {isSelected && (
                                                            <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                                                        )}
                                                        <div className="flex items-center justify-between w-full">
                                                            <div className="flex items-center gap-4 flex-1 min-w-0 pr-4">
                                                                <div className={cn(
                                                                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-colors duration-300",
                                                                    isSelected ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-white/40 group-hover:bg-white/10"
                                                                )}>
                                                                    {idx + 1}
                                                                </div>
                                                                <div className="flex flex-col flex-1 min-w-0">
                                                                    <h3 className={cn(
                                                                        "text-lg font-bold transition-colors duration-300 truncate w-full",
                                                                        isSelected ? "text-cyan-400" : "text-white/80 group-hover:text-white"
                                                                    )}>
                                                                        {prob.title}
                                                                    </h3>
                                                                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                                                                        <span className="flex-shrink-0 text-[8px] sm:text-[9px] uppercase tracking-widest text-white/40 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                                                            {prob.category}
                                                                        </span>
                                                                        {prob.testCases.length === 0 && (
                                                                            <span className="flex-shrink-0 text-[8px] sm:text-[9px] uppercase tracking-widest text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 font-bold">
                                                                                ✦ Conceptual Review
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className={cn(
                                                                "flex-shrink-0 text-[9px] sm:text-[10px] uppercase font-black tracking-widest px-2 py-1 rounded shadow-inner",
                                                                prob.difficulty === 'Easy' ? "text-green-400 bg-green-400/10 border border-green-400/20" : 
                                                                prob.difficulty === 'Medium' ? "text-yellow-400 bg-yellow-400/10 border border-yellow-400/20" : 
                                                                "text-red-400 bg-red-400/10 border border-red-400/20"
                                                            )}>
                                                                {prob.difficulty}
                                                            </span>
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                            </AnimatePresence>
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-white/10">
                                            <Button 
                                                onClick={handleStart}
                                                className="w-full h-14 bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-widest text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                                            >
                                                BEGIN EVALUATION <ChevronRight className="w-5 h-5 ml-2" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* --- INTERVIEW MODE --- */}
                    {mode === "interview" && (
                        <motion.div 
                            key="interview"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] min-h-[700px] w-full mt-8"
                        >
                            {/* LEFT PANE: EDITOR & PROBLEM */}
                            <div className="flex-[3] flex flex-col gap-4 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative h-full overflow-y-auto custom-scrollbar">
                                <div className="flex justify-between items-start mb-2 flex-shrink-0">
                                    <div className="flex-1 pr-4">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                           <span className="text-[10px] uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-2 py-0.5 border border-cyan-400/20 rounded font-bold shadow-inner">
                                              {selectedProblem.category}
                                           </span>
                                           
                                           {/* In-Interview Language Selector Filtered */}
                                           <div className="flex gap-1 bg-black/60 border border-white/10 rounded overflow-hidden shadow-inner">
                                              {LANGUAGES.filter((l) => {
                                                  if (selectedProblem.category === 'React Components') return l.id === 'react';
                                                  if (selectedProblem.category === 'CSS Layout') return l.id === 'css';
                                                  if (['HTML Structure'].includes(selectedProblem.category)) return ['html'].includes(l.id);
                                                  if (selectedProblem.category === 'Node.js Backend') return l.id === 'nodejs';
                                                  if (selectedProblem.category === 'MySQL Database') return l.id === 'mysql';
                                                  if (['DSA Based', 'JavaScript Core'].includes(selectedProblem.category)) return ['javascript', 'python', 'cpp', 'java'].includes(l.id);
                                                  return true;
                                              }).map(lang => (
                                                  <button
                                                      key={lang.id}
                                                      onClick={() => {
                                                          setSelectedLanguage(lang);
                                                          setCode(getInitialCode(selectedProblem, lang.id));
                                                          setOutputLogs([{ type: 'log', text: `Switched language to ${lang.name}. Boilerplate updated.` }]);
                                                      }}
                                                      className={cn(
                                                          "text-[9px] uppercase tracking-widest px-2.5 py-1 transition-all font-mono",
                                                          selectedLanguage.id === lang.id ? "bg-cyan-500/20 text-cyan-400 font-bold shadow-[inset_0_0_8px_rgba(6,182,212,0.3)]" : "text-white/40 hover:text-white hover:bg-white/5"
                                                      )}
                                                  >
                                                      {lang.name}
                                                  </button>
                                              ))}
                                           </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <h1 className={cn("text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white drop-shadow-md", oswald.className)}>
                                                {selectedProblem.title}
                                            </h1>
                                            {selectedProblem.testCases.length === 0 && (
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] uppercase tracking-widest font-black bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] animate-pulse">
                                                    ✦ AI Conceptual Review
                                                </span>
                                            )}
                                            <button 
                                                onClick={() => setCode(getInitialCode(selectedProblem, selectedLanguage.id))}
                                                className="ml-auto text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white flex items-center gap-1.5 transition-all border border-white/10 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:border-white/20 hover:shadow-lg active:scale-95"
                                            >
                                                <RefreshCcw className="w-3 h-3" /> Reset Code
                                            </button>
                                        </div>
                                        <p className="text-white/60 text-sm md:text-base leading-relaxed mt-2 p-4 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                                            {selectedProblem.description.split('`').map((part: string, i: number) => 
                                                i % 2 === 1 
                                                ? <code key={i} className="bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded text-[13px] font-mono border border-cyan-500/30">{part}</code> 
                                                : part
                                            )}
                                        </p>
                                    </div>
                                    <div className={cn(
                                        "flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-colors duration-500",
                                        timeLeft < 180 ? "bg-red-500/20 border border-red-500/50 text-red-500 animate-pulse" : "bg-black/50 border border-white/10 text-white/70"
                                    )}>
                                        <Timer className="w-5 h-5" />
                                        {formatTime(timeLeft)}
                                    </div>
                                </div>

                                {/* MONACO EDITOR & LIVE PREVIEW SPLIT */}
                                <div className="flex-1 min-h-[400px] flex flex-col lg:flex-row gap-4">
                                    <div className="flex-1 lg:flex-[1.2] min-h-[250px] border border-cyan-500/20 rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(6,182,212,0.05)] bg-[#1e1e1e] z-10">
                                        <div className="absolute inset-0 pointer-events-none">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50 z-20" />
                                        </div>
                                        <Editor
                                            height="100%"
                                            defaultLanguage={selectedLanguage.type}
                                            language={selectedLanguage.type}
                                            theme="vs-dark"
                                            value={code}
                                            onChange={(val) => setCode(val || "")}
                                            options={{
                                                minimap: { enabled: false },
                                                fontSize: 15,
                                                padding: { top: 20 },
                                                scrollBeyondLastLine: false,
                                                contextmenu: false,
                                                fontFamily: 'monospace',
                                                smoothScrolling: true,
                                                renderLineHighlight: "all",
                                                fixedOverflowWidgets: true
                                            }}
                                        />
                                    </div>

                                    {/* LIVE HTML PREVIEW */}
                                    {['html', 'css'].includes(selectedLanguage.id) && (
                                        <div className="flex-1 min-h-[250px] flex flex-col border border-white/20 rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/5">
                                            <div className="flex items-center gap-2 px-4 py-3 flex-shrink-0 bg-[#0a0a0a] border-b border-white/10 relative z-10 font-mono text-xs text-white/50 tracking-widest font-bold">
                                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" /> 
                                                LIVE BROWSER OUTPUT
                                            </div>
                                            <div className="flex-1 bg-white relative">
                                                <iframe 
                                                    srcDoc={
                                                        selectedProblem.category === 'CSS Layout' 
                                                        ? `<!DOCTYPE html>
                                                           <html>
                                                           <head>
                                                           <style>
                                                               body { padding: 20px; font-family: system-ui, sans-serif; background: white; color: black; }
                                                               .parent, .dashboard, .navbar, .dropdown, .box, .child, .menu {
                                                                   border: 2px dashed #ccc;
                                                                   min-height: 50px;
                                                                   min-width: 50px;
                                                                   margin: 10px;
                                                                   padding: 10px;
                                                               }
                                                           </style>
                                                           <style>${code}</style>
                                                           </head>
                                                           <body>
                                                               <div class="parent dashboard navbar dropdown">
                                                                   <div class="box child menu text-content"></div>
                                                               </div>
                                                           </body>
                                                           </html>`
                                                        : code
                                                    } 
                                                    title="Live Preview" 
                                                    sandbox="allow-scripts allow-same-origin"
                                                    className="absolute inset-0 w-full h-full border-none" 
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* ACTIONS & TERMINAL */}
                                <div className="mt-2 flex flex-col gap-4 flex-shrink-0">
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                        <Button 
                                            onClick={() => handleRunCode()}
                                            disabled={isEvaluating || isFinished}
                                            className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold uppercase tracking-widest px-8 h-14 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] text-lg flex-1 sm:flex-none"
                                        >
                                            {isEvaluating ? <RefreshCcw className="w-5 h-5 mr-3 animate-spin" /> : <Play className="w-5 h-5 mr-3" />}
                                            Run & Validate
                                        </Button>
                                        <Button
                                            onClick={() => handleSubmitFinal()}
                                            disabled={isEvaluating || isFinished}
                                            className="bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-bold uppercase tracking-widest px-8 h-14 rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] text-lg border border-cyan-400/50 flex-1 sm:flex-none"
                                        >
                                            Submit & End
                                        </Button>
                                    </div>

                                    {/* OUTPUT CONSOLE */}
                                    {outputLogs.length > 0 && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            className="bg-black/80 border border-white/10 rounded-xl p-4 font-mono text-sm max-h-48 overflow-y-auto custom-scrollbar"
                                        >
                                            <div className="flex items-center gap-2 text-white/40 mb-2 border-b border-white/10 pb-2 sticky top-0 bg-black/80 z-10">
                                                <SquareTerminal className="w-4 h-4" /> Output Console
                                            </div>
                                            <div className="space-y-1.5">
                                                {outputLogs.map((log, i) => (
                                                    <div key={i} className={cn(
                                                        "break-words font-light flex items-start gap-2",
                                                        log.type === 'error' && "text-red-400",
                                                        log.type === 'success' && "text-emerald-400",
                                                        log.type === 'info' && "text-cyan-400",
                                                        log.type === 'log' && "text-white/70"
                                                    )}>
                                                        {log.type === 'log' ? <span className="text-white/30 shrink-0">{'>'}</span> : 
                                                         (log.type === 'error' ? "❌ " : (log.type === 'info' ? "ℹ️ " : "✅ "))}
                                                        <span className="whitespace-pre-wrap">{log.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            {/* RIGHT PANE: HOSTILE AI INTERVIEWER */}
                            <div className={cn(
                                "flex-[1.5] flex flex-col bg-[#0a0a0a]/50 backdrop-blur-3xl border rounded-3xl overflow-hidden transition-all duration-300 h-full max-h-full",
                                selectedPersona.border,
                                `shadow-[inset_0_0_40px_${selectedPersona.border.split('-')[1]}]`
                            )}>
                                
                                {/* HOSTILE HEADER */}
                                <div className={cn("p-5 flex items-center gap-4 border-b bg-black/40", selectedPersona.border)}>
                                    <div className={cn("w-14 h-14 rounded-full flex flex-shrink-0 items-center justify-center border relative", selectedPersona.bg, selectedPersona.border)}>
                                        <selectedPersona.icon className={cn("w-7 h-7", selectedPersona.text)} />
                                        <div className={cn("absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-black animate-pulse", selectedPersona.bg.replace('/10', ''))} />
                                    </div>
                                    <div>
                                        <h3 className={cn("text-white font-bold tracking-wider text-lg uppercase", oswald.className)}>{selectedPersona.title}</h3>
                                        <p className={cn("text-xs font-mono opacity-80", selectedPersona.text)}>Status: Live Monitoring</p>
                                    </div>
                                </div>

                                {/* CHAT AREA */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar relative">
                                    <AnimatePresence>
                                        {messages.map((msg, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: msg.role === 'ai' ? 20 : -20, scale: 0.95 }}
                                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                                className={cn(
                                                    "max-w-[90%] rounded-2xl p-4 text-[15px] leading-relaxed relative isolate shadow-lg",
                                                    msg.role === "ai" 
                                                        ? cn("bg-black/60 border text-white/90 rounded-tl-sm self-start", selectedPersona.border) 
                                                        : cn("border text-white/90 rounded-tr-sm self-end ml-auto", selectedPersona.bg, selectedPersona.border)
                                                )}
                                            >
                                                {msg.role === "ai" && (
                                                    <div className="absolute -left-3 -top-3 w-7 h-7 rounded-full bg-black border border-white/20 flex items-center justify-center z-10 shadow-lg">
                                                        <MessageSquareWarning className={cn("w-3.5 h-3.5", selectedPersona.text)} />
                                                    </div>
                                                )}
                                                {msg.content}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                    <div ref={chatEndRef} className="h-4" />
                                </div>

                                {/* ACTIONS */}
                                <div className="p-5 border-t border-white/5 bg-black/60">
                                    <div className="flex justify-between items-center mb-4 px-1">
                                         <p className="text-xs text-white/30 font-mono tracking-widest flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" /> AI is Active
                                         </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button 
                                            onClick={() => evaluateWithAPI(false, [{type: 'info', text: 'Candidate requested an explanation approach.'}])}
                                            variant="outline" 
                                            className="flex-1 bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white text-xs h-12 uppercase tracking-widest font-bold"
                                        >
                                            Explain Approach
                                        </Button>
                                        <Button 
                                            onClick={() => evaluateWithAPI(false, [{type: 'info', text: 'Candidate begged for a hint. Deducting 30 points of respect.'}])}
                                            variant="outline" 
                                            className={cn("flex-1 text-xs h-12 uppercase tracking-widest font-bold border transition-colors", selectedPersona.bg, selectedPersona.border, selectedPersona.text)}
                                            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                                        >
                                            Ask Hint
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* FINAL VERDICT MODAL */}
                <AnimatePresence>
                    {isFinished && finalVerdict && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl px-4"
                        >
                            <motion.div 
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl w-full flex flex-col items-center text-center relative overflow-hidden shadow-2xl"
                            >
                                <div className={cn("absolute inset-0 opacity-20 blur-3xl", finalVerdict === 'HIRED' ? 'bg-emerald-500' : 'bg-red-500')} />
                                
                                <div className="relative z-10 w-full">
                                    <h2 className={cn(
                                        "text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6",
                                        finalVerdict === 'HIRED' ? 'text-emerald-400 drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]' : 'text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]',
                                        oswald.className
                                    )}>
                                        {finalVerdict}
                                    </h2>
                                    
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-8">
                                        <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
                                            "{finalVerdictMessage}"
                                        </p>
                                    </div>

                                    <Button
                                        onClick={() => {
                                            setMode("setup");
                                            setIsFinished(false);
                                            setFinalVerdict(null);
                                            setFinalVerdictMessage("");
                                            setCode("");
                                            setOutputLogs([]);
                                        }}
                                        className="bg-white text-black hover:bg-white/90 font-bold uppercase tracking-widest px-10 h-14 rounded-xl transition-all text-lg w-full sm:w-auto"
                                    >
                                        Return to Lobby <ChevronRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </NeonGridBackground>
    )
}
