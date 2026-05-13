export const DAYS = [
    {
      title: "Day 1 — Variables & Scope",
      sub: "var vs let vs const · Hoisting · Closures",
      concepts: [
        {
          title: "The Birth of let and const",
          text: "Before ES6 (2015), `var` was the only way to declare variables. However, `var` is function-scoped and hoists strangely, leading to unpredictable bugs. `let` and `const` were introduced to bring predictable, block-level scoping to JavaScript.",
          code: "// var leaks out of blocks (if, for, while)\nif (true) {\n  var oldWay = 'leaky';\n}\nconsole.log(oldWay); // 'leaky'\n\n// let stays contained\nif (true) {\n  let newWay = 'safe';\n}\nconsole.log(newWay); // ReferenceError"
        },
        {
          title: "Understanding Closures",
          text: "A closure is simply a function that remembers the variables in its outer scope even after that outer function has finished executing. It's like a memory backpack the function carries around.",
          code: "function createCounter() {\n  let count = 0; // The hidden state\n  return function() {\n    count++;\n    return count;\n  }\n}\n\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2"
        }
      ],
      exercises: [
        {
          type: "Predict Output", pts: 10,
          q: "What does this print? Write the exact output, one value per line.",
          code: `console.log(a);\nvar a = 5;\nconsole.log(a);\n\nconsole.log(b);\nlet b = 10;`,
          kind: "text",
          answer: ["undefined", "5", "referenceerror"],
          hint: "var declarations are hoisted but NOT their values. let lives in a 'temporal dead zone' until declared — accessing it throws.",
          sol: `undefined\n5\nReferenceError: Cannot access 'b' before initialization`,
          explain: "var a is hoisted so the first log sees undefined. After assignment it's 5. let b is in a temporal dead zone — accessing it before declaration throws a ReferenceError."
        },
        {
          type: "Spot the Bug", pts: 10,
          q: "This should make message block-scoped to the if block (inaccessible outside). What single keyword change fixes it?",
          code: `function test() {\n  if (true) {\n    var message = 'hello';\n  }\n  // message should NOT be accessible here\n  console.log(message);\n}\ntest();`,
          kind: "text",
          answer: ["let", "const"],
          hint: "var is function-scoped so it leaks outside the if block. Which keyword creates block scope?",
          sol: `Change 'var' to 'let' (or 'const').\n\nfunction test() {\n  if (true) {\n    let message = 'hello';\n  }\n  console.log(message); // ReferenceError — correctly block-scoped\n}`,
          explain: "var is function-scoped — it leaks out of any block (if, for, while). let and const are block-scoped, so they only exist inside the { } they were declared in."
        },
        {
          type: "Multiple Choice", pts: 15,
          q: "What does this closure code print?",
          code: `function outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nconst fn = outer();\nconsole.log(fn());\nconsole.log(fn());\nconsole.log(fn());`,
          kind: "mc",
          opts: ["0, 0, 0", "1, 1, 1", "1, 2, 3", "undefined × 3"],
          correct: 2,
          hint: "inner closes over count. Each call to fn() modifies the SAME count variable in outer's scope — it's not reset between calls.",
          explain: "outer() runs once and returns inner. inner closes over count. Every call to fn() increments the same count variable. It doesn't reset because the closure keeps outer's scope alive."
        },
        {
          type: "Write Code", pts: 20,
          q: "Write makeMultiplier(x) that returns a function. The returned function takes y and returns x * y. Use closures.",
          code: `// const double = makeMultiplier(2);\n// double(5) → 10\n// double(8) → 16\n\n// const triple = makeMultiplier(3);\n// triple(4) → 12`,
          kind: "text",
          answer: ["makeMultiplier", "return function", "return ("],
          hint: "The outer function takes x and returns an inner function that takes y. The inner function has access to x via closure.",
          sol: `function makeMultiplier(x) {\n  return function(y) {\n    return x * y;\n  };\n}\n\n// Arrow version:\nconst makeMultiplier = x => y => x * y;`,
          explain: "makeMultiplier(2) runs and returns a new function that remembers x=2. Every call to double(y) uses that remembered x. This is a closure — the inner function carries outer's variable in its scope."
        },
        {
          type: "Classic Trap", pts: 15,
          q: "This is one of the most famous JS interview questions. What does it print?",
          code: `for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}`,
          kind: "mc",
          opts: ["0, 1, 2", "1, 2, 3", "3, 3, 3", "0, 0, 0"],
          correct: 2,
          hint: "var is function-scoped — all 3 iterations share ONE i. By the time setTimeout fires, what is the value of i?",
          explain: "var i is shared across all iterations. The loop finishes (i becomes 3) before any setTimeout fires. All 3 callbacks reference the same i, which is now 3. Fix: change var to let (each iteration gets its own i)."
        },
        {
          type: "Fix It", pts: 15,
          q: "Fix the loop above to print 0, 1, 2. Write the corrected single line.",
          code: `// Fix this to print 0, 1, 2:\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}`,
          kind: "text",
          answer: ["let i", "let"],
          hint: "One word change. let creates a new binding per iteration, so each callback closes over its own i.",
          sol: `for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n// Prints: 0, 1, 2`,
          explain: "Changing var to let makes i block-scoped to each loop iteration. Each iteration creates a new i binding. Each setTimeout callback closes over its own unique copy of i."
        }
      ]
    },
    {
      title: "Day 2 — Functions & Arrow Functions",
      sub: "Declarations · Expressions · this · rest/spread",
      concepts: [
        {
          title: "Arrow Functions & Lexical 'this'",
          text: "Arrow functions (`() => {}`) aren't just shorter syntax. Unlike regular functions, they do not have their own `this` binding. Instead, they inherit `this` from the parent scope at the time they are defined.",
          code: "const user = {\n  name: 'Nikhil',\n  // Regular function binds 'this' to the caller (user)\n  regular: function() { \n    console.log(this.name); \n  },\n  // Arrow function inherits 'this' from the outer global scope\n  arrow: () => { \n    console.log(this.name); \n  }\n};\n\nuser.regular(); // 'Nikhil'\nuser.arrow();   // undefined"
        },
        {
          title: "Rest Parameters",
          text: "The rest parameter syntax (`...args`) allows a function to accept an indefinite number of arguments as an array. It must always be the last parameter in the function definition.",
          code: "function sum(first, ...remaining) {\n  console.log('First:', first); // 1\n  console.log('Rest:', remaining); // [2, 3, 4]\n  return first + remaining.reduce((a, b) => a + b, 0);\n}\n\nsum(1, 2, 3, 4); // Returns 10"
        }
      ],
      exercises: [
        {
          type: "Predict Output", pts: 15,
          q: "What does this print? Focus on how 'this' behaves.",
          code: `const obj = {\n  name: 'Nikhil',\n  regular: function() { return this.name; },\n  arrow: () => { return this.name; }\n};\nconsole.log(obj.regular());\nconsole.log(obj.arrow());`,
          kind: "mc",
          opts: ["Nikhil, Nikhil", "Nikhil, undefined", "undefined, Nikhil", "undefined, undefined"],
          correct: 1,
          hint: "Regular functions get 'this' from how they're called. Arrow functions inherit 'this' from where they were DEFINED (not called).",
          explain: "obj.regular() — 'this' is obj, so this.name = 'Nikhil'. obj.arrow() — arrow was defined in the outer scope where 'this' is not obj. this.name is undefined. This is the #1 'this' interview trap."
        },
        {
          type: "Write Code", pts: 20,
          q: "Write a function sum() that accepts ANY number of arguments using rest parameters and returns their total.",
          code: `// sum(1, 2, 3) → 6\n// sum(10, 20)   → 30\n// sum(5)        → 5\n// sum()         → 0`,
          kind: "text",
          answer: ["...args", "...num", "rest", "reduce"],
          hint: "Use ...args in the params to collect all arguments into an array. Then reduce to sum them with initial value 0.",
          sol: `function sum(...args) {\n  return args.reduce((total, n) => total + n, 0);\n}`,
          explain: "...args (rest parameter) collects all arguments into an array. reduce sums them starting from 0. If no args are passed, reduce returns the initial value 0."
        },
        {
          type: "Spot the Bug", pts: 10,
          q: "This should double every number. What's the bug?",
          code: `const nums = [1, 2, 3, 4];\nconst doubled = nums.map(function(n) {\n  n * 2;\n});\nconsole.log(doubled); // Expected: [2, 4, 6, 8]`,
          kind: "text",
          answer: ["return"],
          hint: "When using { } braces in a function body, what keyword is needed to send back a value?",
          sol: `const doubled = nums.map(function(n) {\n  return n * 2; // missing 'return'!\n});\n// Or cleaner:\nconst doubled = nums.map(n => n * 2);`,
          explain: "Without return in a { } function body, the function returns undefined. So doubled = [undefined, undefined, undefined, undefined]. Arrow functions with no braces have implicit return: n => n * 2 works without return."
        },
        {
          type: "Multiple Choice", pts: 10,
          q: "Which code can be called BEFORE it's defined?",
          code: `hello();\nconst hello = () => console.log('Hi');\n\n// vs.\n\ngreet();\nfunction greet() { console.log('Hi'); }`,
          kind: "mc",
          opts: ["Both work", "Only the arrow function (hello)", "Only the declaration (greet)", "Neither works"],
          correct: 2,
          hint: "Function declarations are fully hoisted. Arrow functions assigned to const/let are in a temporal dead zone.",
          explain: "Function declarations are fully hoisted — the entire function body is available before the line it appears. Arrow functions assigned to const/let are NOT hoisted — accessing before declaration throws a ReferenceError."
        },
        {
          type: "Write Code", pts: 20,
          q: "Write greetAll(greeting, ...names) that returns each name greeted. Use template literals.",
          code: `// greetAll('Hello', 'Nikhil', 'Riya', 'Arjun')\n// → 'Hello Nikhil! Hello Riya! Hello Arjun!'`,
          kind: "text",
          answer: ["...names", "map", "join"],
          hint: "First param is greeting. ...names collects the rest. Use .map() to build each greeting string. Use .join(' ') to combine them.",
          sol: `function greetAll(greeting, ...names) {\n  return names.map(name => \`\${greeting} \${name}!\`).join(' ');\n}`,
          explain: "greeting is the first named param. ...names collects all remaining args. .map() builds each greeting. .join(' ') combines into one string with spaces between."
        }
      ]
    },
    {
      title: "Day 3 — Array Methods",
      sub: "map · filter · reduce · find · forEach",
      concepts: [],
      exercises: [
        {
          type: "Write Code", pts: 10,
          q: "Use map to extract just the names from the students array.",
          code: `const students = [\n  { name: 'Nikhil', score: 85 },\n  { name: 'Riya',   score: 72 },\n  { name: 'Arjun',  score: 91 }\n];\n// Expected: ['Nikhil', 'Riya', 'Arjun']`,
          kind: "text",
          answer: ["map", ".name"],
          hint: "map transforms each element. Access the name property inside the callback: s => s.name",
          sol: `const names = students.map(s => s.name);\n// ['Nikhil', 'Riya', 'Arjun']`,
          explain: "map returns a new array of the same length. The callback runs for each element and its return value becomes the new element."
        },
        {
          type: "Write Code", pts: 15,
          q: "Chain filter and map: get names of students who scored above 80.",
          code: `const students = [\n  { name: 'Nikhil', score: 85 },\n  { name: 'Riya',   score: 72 },\n  { name: 'Arjun',  score: 91 }\n];\n// Expected: ['Nikhil', 'Arjun']`,
          kind: "text",
          answer: ["filter", "map"],
          hint: "filter first (keep students with score > 80), then map (extract just the name). Chain them: .filter(...).map(...)",
          sol: `const topStudents = students\n  .filter(s => s.score > 80)\n  .map(s => s.name);\n// ['Nikhil', 'Arjun']`,
          explain: "filter keeps elements where the callback returns true. Chaining .map() transforms the filtered result. This pattern is everywhere in React — filter your data, then map it to JSX."
        },
        {
          type: "Write Code", pts: 20,
          q: "Use reduce to find the average score of all students.",
          code: `const students = [\n  { name: 'Nikhil', score: 85 },\n  { name: 'Riya',   score: 72 },\n  { name: 'Arjun',  score: 91 }\n];\n// Expected: 82.67 (approximately)`,
          kind: "text",
          answer: ["reduce", "length"],
          hint: "reduce to sum all scores (initial value 0), then divide by students.length. acc + s.score is your accumulator step.",
          sol: `const avg = students.reduce((sum, s) => sum + s.score, 0) / students.length;\n// 82.67`,
          explain: "reduce accumulates scores into a total starting from 0. Dividing by length gives the average. The initial value (0) is the second argument to reduce."
        },
        {
          type: "Multiple Choice", pts: 15,
          q: "What is the key difference between .map() and .forEach()?",
          code: `const nums = [1, 2, 3];\nconst a = nums.map(n => n * 2);\nconst b = nums.forEach(n => n * 2);\n\nconsole.log(a); // ?\nconsole.log(b); // ?`,
          kind: "mc",
          opts: ["Both return [2, 4, 6]", "a = [2,4,6], b = undefined", "a = undefined, b = [2,4,6]", "Both return undefined"],
          correct: 1,
          hint: "map always returns a new array. forEach is for side effects and always returns undefined.",
          explain: "map returns a new transformed array. forEach runs for side effects (logging, updating DOM) and always returns undefined. If you need a new array, use map. If you're just doing something for each item, use forEach."
        },
        {
          type: "Predict Output", pts: 15,
          q: "What does this reduce call return? (Write as a JS object)",
          code: `const words = ['a', 'b', 'a', 'c', 'b', 'a'];\n\nconst result = words.reduce((acc, word) => {\n  acc[word] = (acc[word] || 0) + 1;\n  return acc;\n}, {});\n\nconsole.log(result);`,
          kind: "text",
          answer: ["{a:3", "a: 3", "a:3"],
          hint: "The accumulator starts as {}. For each word, it increments acc[word] by 1. If the key doesn't exist yet, acc[word] || 0 gives 0.",
          sol: `{ a: 3, b: 2, c: 1 }`,
          explain: "This is the frequency counter pattern — counting occurrences of each value. acc[word] || 0 handles the first occurrence (key doesn't exist yet). This pattern is extremely common in interview problems."
        }
      ]
    },
    {
      title: "Day 4 — Destructuring & Spread",
      sub: "Object · Array destructuring · Spread · Optional chaining",
      concepts: [],
      exercises: [
        {
          type: "Predict Output", pts: 10,
          q: "What are the values of a, b, and rest?",
          code: `const [a, b, ...rest] = [10, 20, 30, 40, 50];\nconsole.log(a);\nconsole.log(b);\nconsole.log(rest);`,
          kind: "text",
          answer: ["10", "20", "[30"],
          hint: "Array destructuring assigns by position. ...rest collects everything remaining into a new array.",
          sol: `10\n20\n[30, 40, 50]`,
          explain: "a gets 10 (1st position), b gets 20 (2nd position), ...rest collects the remaining elements [30,40,50] into a new array."
        },
        {
          type: "Write Code", pts: 20,
          q: "Write getFullName that DESTRUCTURES a user object in its parameter (not inside the body) and returns 'firstName lastName'.",
          code: `// getFullName({ firstName: 'Nikhil', lastName: 'Jangid', age: 22 })\n// → 'Nikhil Jangid'`,
          kind: "text",
          answer: ["{ firstname", "{ firstName", "{firstName"],
          hint: "Destructure in the parameter itself: function getFullName({ firstName, lastName }) — not inside the function body.",
          sol: `function getFullName({ firstName, lastName }) {\n  return \`\${firstName} \${lastName}\`;\n}`,
          explain: "Destructuring in parameters is extremely common in React component props and Node.js handlers. It's cleaner than function getFullName(user) { return user.firstName + ' ' + user.lastName; }"
        },
        {
          type: "Spot the Bug", pts: 15,
          q: "This should merge defaults with user overrides (user settings win). Find the bug.",
          code: `const defaults = { theme: 'light', lang: 'en', fontSize: 14 };\nconst userPrefs = { theme: 'dark', fontSize: 16 };\n\nconst merged = { userPrefs, ...defaults };\nconsole.log(merged.theme); // Should be 'dark', but isn't`,
          kind: "text",
          answer: ["order", "...userprefs", "...user", "defaults, ...user"],
          hint: "With spread, later keys overwrite earlier ones. Also, { userPrefs } without spread creates a nested object, not a merge.",
          sol: `const merged = { ...defaults, ...userPrefs };\n// { theme: 'dark', lang: 'en', fontSize: 16 }`,
          explain: "Two bugs: (1) { userPrefs } creates a nested property, not a spread merge — needs ...userPrefs. (2) Order matters: later keys win. ...defaults last would overwrite user settings. Correct: { ...defaults, ...userPrefs }."
        },
        {
          type: "Multiple Choice", pts: 10,
          q: "What does optional chaining return here?",
          code: `const user = { profile: null };\nconsole.log(user?.profile?.avatar?.url);`,
          kind: "mc",
          opts: ["Throws TypeError", "null", "undefined", "Empty string ''"],
          correct: 2,
          hint: "Optional chaining short-circuits when it encounters null or undefined — it returns undefined instead of throwing.",
          explain: "user.profile is null. Without ?., accessing .avatar on null throws TypeError. With ?., the chain short-circuits at null and returns undefined safely. This is why ?. is essential for working with API response data."
        },
        {
          type: "Write Code", pts: 20,
          q: "Write mergeSettings(defaults, overrides) using spread. Overrides win. Add a merged_at: Date.now() field to the result.",
          code: `// mergeSettings({theme:'light',lang:'en'}, {theme:'dark'})\n// → { theme:'dark', lang:'en', merged_at: <timestamp> }`,
          kind: "text",
          answer: ["...defaults", "...override", "merged_at"],
          hint: "Spread defaults first, then overrides (so overrides win), then add merged_at: Date.now()",
          sol: `function mergeSettings(defaults, overrides) {\n  return {\n    ...defaults,\n    ...overrides,\n    merged_at: Date.now()\n  };\n}`,
          explain: "Spread order matters: ...defaults first gives base values. ...overrides after lets them win. merged_at is added last as a literal property. This is exactly how React state updates work."
        }
      ]
    },
    {
      title: "Day 5 — Promises & Async/Await",
      sub: "Promises · async/await · fetch · error handling",
      concepts: [],
      exercises: [
        {
          type: "Predict Output", pts: 15,
          q: "What is the order of logs? Write A, B, C in the correct order.",
          code: `async function getData() {\n  console.log('A');\n  const result = await Promise.resolve('data');\n  console.log('C');\n}\n\nconsole.log('before');\ngetData();\nconsole.log('B');`,
          kind: "mc",
          opts: ["before, A, B, C", "before, A, C, B", "A, B, C, before", "before, B, A, C"],
          correct: 0,
          hint: "Async functions run synchronously until the first await. Then they pause and control returns to the caller.",
          explain: "'before' logs first (sync). getData() starts and logs 'A' (sync, before the await). await pauses getData() — control returns to caller — logs 'B'. Then the microtask queue resumes getData() — logs 'C'."
        },
        {
          type: "Spot the Bug", pts: 15,
          q: "This fetch function has a very common bug. Find it.",
          code: `async function getUser(id) {\n  const data = await fetch(\`/api/users/\${id}\`).json();\n  return data;\n}`,
          kind: "text",
          answer: ["await", "two await", "second await", "await response"],
          hint: "fetch() returns a Promise. .json() ALSO returns a Promise. How many awaits do you actually need?",
          sol: `async function getUser(id) {\n  const response = await fetch(\`/api/users/\${id}\`);\n  const data = await response.json(); // second await!\n  return data;\n}`,
          explain: "fetch() returns Promise<Response>. You await that to get the Response object. Then .json() ALSO returns a Promise — you need a second await for the actual data. This is the #1 fetch mistake."
        },
        {
          type: "Write Code", pts: 20,
          q: "Write fetchPosts() that gets https://jsonplaceholder.typicode.com/posts, returns only the first 3, and handles errors with try/catch.",
          code: `// Returns array of first 3 post objects\n// Handles errors gracefully (console.error + re-throw)`,
          kind: "text",
          answer: ["async", "try", "catch", "slice"],
          hint: "async function, try block: await fetch, check response.ok, await .json(), .slice(0,3). Catch block: log error, re-throw.",
          sol: `async function fetchPosts() {\n  try {\n    const res = await fetch('https://jsonplaceholder.typicode.com/posts');\n    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);\n    const posts = await res.json();\n    return posts.slice(0, 3);\n  } catch (err) {\n    console.error('Failed:', err.message);\n    throw err;\n  }\n}`,
          explain: "Always check res.ok — a 404 doesn't trigger catch! Always re-throw after catching (don't silently swallow errors). .slice(0,3) gets elements at index 0, 1, 2."
        },
        {
          type: "Multiple Choice", pts: 10,
          q: "When should you use Promise.all() instead of sequential awaits?",
          code: `// Sequential (A waits for B to finish):\nconst user  = await fetchUser(id);\nconst posts = await fetchPosts(id);\n\n// Parallel:\nconst [user, posts] = await Promise.all([\n  fetchUser(id),\n  fetchPosts(id)\n]);`,
          kind: "mc",
          opts: ["Always use sequential, it's safer", "Use Promise.all when requests don't depend on each other", "Use Promise.all only for 5+ requests", "They perform identically"],
          correct: 1,
          hint: "If each request takes 1s, how long does sequential take vs parallel?",
          explain: "Sequential: 2s total (1s + 1s). Promise.all: ~1s total (both run at the same time). Use Promise.all when requests are independent. Use sequential only when request B needs data from request A."
        },
        {
          type: "Write Code", pts: 20,
          q: "Write a function delay(ms) that returns a Promise that resolves after ms milliseconds. Then write a sleep(ms) async function that uses it.",
          code: `// await sleep(1000); // pauses for 1 second\n// delay(500).then(() => console.log('done'));`,
          kind: "text",
          answer: ["new Promise", "settimeout", "setTimeout", "resolve"],
          hint: "delay() wraps setTimeout in a new Promise. sleep() is just: async function sleep(ms) { await delay(ms); }",
          sol: `function delay(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function sleep(ms) {\n  await delay(ms);\n}`,
          explain: "new Promise wraps callback-style code into a Promise. setTimeout is callback-based, so we wrap it. resolve is called when the timer fires, fulfilling the Promise. This is a classic interview question."
        }
      ]
    },
    {
      title: "Day 6 — Objects & Classes",
      sub: "Methods · Object.keys/values/entries · Classes",
      concepts: [],
      exercises: [
        {
          type: "Write Code", pts: 20,
          q: "Create a BankAccount class. deposit, withdraw, getBalance methods. Throw 'Insufficient funds' if withdrawal exceeds balance.",
          code: `// const acc = new BankAccount(100);\n// acc.deposit(50)    → balance: 150\n// acc.withdraw(30)   → balance: 120\n// acc.getBalance()   → 120\n// acc.withdraw(200)  → throws Error`,
          kind: "text",
          answer: ["class", "constructor", "this.balance"],
          hint: "class BankAccount { constructor(initial) { this.balance = initial; } }. deposit adds. withdraw checks first. getBalance returns.",
          sol: `class BankAccount {\n  constructor(initial = 0) {\n    this.balance = initial;\n  }\n  deposit(amount) {\n    this.balance += amount;\n    return this;\n  }\n  withdraw(amount) {\n    if (amount > this.balance) throw new Error('Insufficient funds');\n    this.balance -= amount;\n    return this;\n  }\n  getBalance() {\n    return this.balance;\n  }\n}`,
          explain: "return this enables method chaining. The guard clause throws before modifying state. In interviews, always mention: 'I added return this for method chaining.'"
        },
        {
          type: "Predict Output", pts: 15,
          q: "What does this print?",
          code: `const scores = { alice: 90, bob: 75, carol: 88 };\n\nconst result = Object.entries(scores)\n  .filter(([name, score]) => score >= 80)\n  .map(([name]) => name);\n\nconsole.log(result);`,
          kind: "text",
          answer: ["['alice','carol']", `["alice","carol"]`, "alice", "carol"],
          hint: "Object.entries gives [[key,val],...]. Destructure [name, score] in filter callback. Map extracts just the name.",
          sol: `['alice', 'carol']`,
          explain: "Object.entries converts object to [[key,val],...]. filter keeps pairs where score >= 80. map extracts just the name using array destructuring. Result: ['alice', 'carol']."
        },
        {
          type: "Multiple Choice", pts: 10,
          q: "What is the difference between instance and static methods?",
          code: `class MathHelper {\n  square(n) { return n * n; }        // instance\n  static cube(n) { return n ** 3; }  // static\n}\n\nconst m = new MathHelper();\nm.square(4);        // ?\nMathHelper.cube(3); // ?`,
          kind: "mc",
          opts: ["Both need an instance (new)", "Instance methods need new, static methods call on the class directly", "Static methods are faster always", "They're identical"],
          correct: 1,
          hint: "Notice cube is called on MathHelper directly, not on an instance.",
          explain: "Instance methods: called on an object created with new. Static methods: called directly on the class itself, no instance needed. Use static for utilities/factories that don't depend on object state."
        },
        {
          type: "Write Code", pts: 20,
          q: "Write a function filterObject(obj, predicate) that returns a new object with only the key-value pairs where predicate(value) is true.",
          code: `// filterObject({a:1, b:5, c:2, d:8}, v => v > 3)\n// → { b: 5, d: 8 }`,
          kind: "text",
          answer: ["Object.entries", "Object.fromEntries", "filter"],
          hint: "Object.entries → filter → Object.fromEntries. The predicate receives the value.",
          sol: `function filterObject(obj, predicate) {\n  return Object.fromEntries(\n    Object.entries(obj).filter(([key, val]) => predicate(val))\n  );\n}`,
          explain: "Object.entries converts object to array of [key,val] pairs. filter keeps pairs where predicate(val) is true. Object.fromEntries converts back to an object. This chain is elegant and shows strong JS knowledge."
        }
      ]
    },
    {
      title: "Day 7 — DOM Manipulation",
      sub: "querySelector · Events · Delegation · localStorage",
      concepts: [],
      exercises: [
        {
          type: "Spot the Bug", pts: 15,
          q: "This should save and retrieve a user object from localStorage. Find both bugs.",
          code: `const user = { name: 'Nikhil', role: 'admin' };\n\nlocalStorage.setItem('user', user);\n\nconst saved = localStorage.getItem('user');\nconsole.log(saved.name); // Expected: 'Nikhil'`,
          kind: "text",
          answer: ["json.stringify", "JSON.stringify", "json.parse", "JSON.parse"],
          hint: "localStorage only stores strings. What happens when you store an object directly without converting it?",
          sol: `localStorage.setItem('user', JSON.stringify(user));\n\nconst saved = JSON.parse(localStorage.getItem('user'));\nconsole.log(saved.name); // 'Nikhil'`,
          explain: "Without JSON.stringify, the object becomes '[object Object]' string. Without JSON.parse, saved is still a string (not an object). Always JSON.stringify before storing, JSON.parse after retrieving."
        },
        {
          type: "Multiple Choice", pts: 10,
          q: "Why is event delegation better than adding a listener to each child?",
          code: `// A — individual listeners:\ndocument.querySelectorAll('.btn').forEach(btn => {\n  btn.addEventListener('click', handleClick);\n});\n\n// B — delegation on parent:\ndocument.querySelector('#container').addEventListener('click', e => {\n  if (e.target.matches('.btn')) handleClick(e);\n});`,
          kind: "mc",
          opts: ["A is more precise and better", "B works for dynamically added elements too, and uses less memory", "They're completely identical", "B is slower because it checks every click"],
          correct: 1,
          hint: "What happens in approach A if you add new .btn elements to the DOM dynamically after the page loads?",
          explain: "Approach A: dynamically added .btn elements won't have listeners. Approach B: the parent listener catches all clicks including future children. Also 1 listener vs N listeners uses less memory."
        },
        {
          type: "Write Code", pts: 20,
          q: "Write toggleTheme() that toggles a 'dark' class on document.body and saves the preference to localStorage.",
          code: `// Call once → adds 'dark' class, saves 'dark'\n// Call again → removes 'dark', saves 'light'\n// Also write the restore-on-load code`,
          kind: "text",
          answer: ["classlist.toggle", "classList.toggle", "localstorage", "localStorage"],
          hint: "classList.toggle returns true if class was added, false if removed. Use that boolean to decide what to save.",
          sol: `function toggleTheme() {\n  const isDark = document.body.classList.toggle('dark');\n  localStorage.setItem('theme', isDark ? 'dark' : 'light');\n}\n\n// Restore on load:\nconst saved = localStorage.getItem('theme');\nif (saved === 'dark') document.body.classList.add('dark');`,
          explain: "classList.toggle adds the class if absent, removes if present, and returns a boolean. Using that boolean directly is cleaner than classList.contains() afterwards."
        },
        {
          type: "Write Code", pts: 20,
          q: "Write a function createElement(tag, text, className) that creates a DOM element, sets its text and class, and returns it.",
          code: `// createElement('p', 'Hello!', 'greeting')\n// → <p class="greeting">Hello!</p>`,
          kind: "text",
          answer: ["createElement", "textContent", "className"],
          hint: "document.createElement(tag) creates the element. Set .textContent and .className on it. Return the element.",
          sol: `function createElement(tag, text, className) {\n  const el = document.createElement(tag);\n  el.textContent = text;\n  el.className = className;\n  return el;\n}`,
          explain: "document.createElement creates a detached DOM element. You set properties directly on it. Return it so the caller can appendChild it wherever they want."
        }
      ]
    },
    {
      title: "Day 8 — Error Handling & Modules",
      sub: "try/catch · Custom errors · import/export",
      concepts: [],
      exercises: [
        {
          type: "Spot the Bug", pts: 20,
          q: "This error handling has a critical flaw. What happens when loadUser fails?",
          code: `async function loadUser(id) {\n  try {\n    const res = await fetch(\`/api/users/\${id}\`);\n    return await res.json();\n  } catch (error) {\n    console.log('Error occurred');\n    // function ends here, returns undefined\n  }\n}\n\nconst user = await loadUser(999);\nconsole.log(user.name); // crashes here`,
          kind: "text",
          answer: ["throw", "re-throw", "rethrow"],
          hint: "The catch block runs but what does the function return? What does the caller get back when it does loadUser(999)?",
          sol: `async function loadUser(id) {\n  try {\n    const res = await fetch(\`/api/users/\${id}\`);\n    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);\n    return await res.json();\n  } catch (error) {\n    console.error('Failed to load user:', error.message);\n    throw error; // re-throw — don't swallow errors!\n  }\n}`,
          explain: "The catch block logs but doesn't re-throw. Function returns undefined. Caller does undefined.name and crashes with a confusing error far from the root cause. Always re-throw (or return a safe fallback like null)."
        },
        {
          type: "Multiple Choice", pts: 10,
          q: "Which import is correct to get both multiply (default) and add (named) from math.js?",
          code: `// math.js:\nexport const add = (a,b) => a+b;\nexport default function multiply(a,b) { return a*b; }`,
          kind: "mc",
          opts: ["import multiply, add from './math.js'", "import multiply, { add } from './math.js'", "import { multiply }, add from './math.js'", "import { multiply, add } from './math.js'"],
          correct: 1,
          hint: "Default exports don't use curly braces. Named exports do.",
          explain: "Default export (multiply) is imported without braces. Named exports (add) need braces. You can mix: import defaultExport, { namedExport } from './file.js'"
        },
        {
          type: "Write Code", pts: 20,
          q: "Write a custom APIError class extending Error with message and statusCode. Then write fetchData that throws it for non-ok responses.",
          code: `// new APIError('Not found', 404)\n// err.message    → 'Not found'\n// err.statusCode → 404\n// err instanceof APIError → true`,
          kind: "text",
          answer: ["extends Error", "extends error", "super(message)", "super(msg)"],
          hint: "class APIError extends Error { constructor(message, statusCode) { super(message); this.statusCode = statusCode; } }",
          sol: `class APIError extends Error {\n  constructor(message, statusCode) {\n    super(message);    // sets this.message\n    this.name = 'APIError';\n    this.statusCode = statusCode;\n  }\n}\n\nasync function fetchData(url) {\n  const res = await fetch(url);\n  if (!res.ok) throw new APIError('Request failed', res.status);\n  return res.json();\n}`,
          explain: "super(message) calls the parent Error constructor which sets this.message. Setting this.name helps with logging. Custom errors let you handle different error types differently in catch blocks."
        },
        {
          type: "Write Code", pts: 15,
          q: "Write a safeJSON(str) function that parses a JSON string. Returns the parsed object on success, or null on failure (never throws).",
          code: `// safeJSON('{"name":"Nikhil"}') → { name: 'Nikhil' }\n// safeJSON('not valid json')   → null\n// safeJSON(undefined)          → null`,
          kind: "text",
          answer: ["try", "catch", "json.parse", "JSON.parse", "return null"],
          hint: "try { return JSON.parse(str) } catch { return null }. Handle the case where str is falsy too.",
          sol: `function safeJSON(str) {\n  try {\n    return JSON.parse(str);\n  } catch {\n    return null;\n  }\n}`,
          explain: "JSON.parse throws on invalid input. Wrapping in try/catch and returning null instead gives a safe, predictable API. This pattern is used everywhere that deals with external data."
        }
      ]
    },
    {
      title: "Day 9 — The Event Loop",
      sub: "Call stack · Microtasks · Macrotasks · Debounce",
      concepts: [],
      exercises: [
        {
          type: "Predict Output", pts: 20,
          q: "THE classic event loop question. Write the exact output (one per line).",
          code: `console.log('1');\n\nsetTimeout(() => console.log('2'), 0);\n\nPromise.resolve().then(() => console.log('3'));\n\nconsole.log('4');`,
          kind: "text",
          answer: ["1\n4\n3\n2", "1, 4, 3, 2"],
          hint: "Sync runs first (1, 4). Then microtasks (Promise .then → 3). Then macrotasks (setTimeout → 2). Microtasks ALWAYS before macrotasks.",
          sol: `1\n4\n3\n2`,
          explain: "Call stack runs sync: 1, then 4. setTimeout goes to macrotask queue. Promise.then goes to microtask queue. When stack is empty: microtasks drain first (3), then macrotasks (2). This order is fixed and predictable."
        },
        {
          type: "Write Code", pts: 20,
          q: "Implement debounce(fn, wait) from scratch. The function should only fire after 'wait' ms of silence (no new calls).",
          code: `// const search = debounce(query => fetch('/api?q='+query), 300);\n// User types fast → fetch only fires 300ms after they stop`,
          kind: "text",
          answer: ["settimeout", "setTimeout", "clearTimeout", "cleartimeout"],
          hint: "Store a timer variable outside. On each call: clearTimeout(timer), then timer = setTimeout(fn, wait). The function only fires when no new call arrives in time.",
          sol: `function debounce(fn, wait) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      fn.apply(this, args);\n    }, wait);\n  };\n}`,
          explain: "Each call clears the previous timer and starts fresh. Only when 'wait' ms pass without another call does fn execute. clearTimeout on undefined/null is safe (no error). ...args passes all arguments through."
        },
        {
          type: "Multiple Choice", pts: 10,
          q: "Why is JS non-blocking despite being single-threaded?",
          code: `// This doesn't freeze the browser for 3 seconds:\nfetch('https://api.example.com/big-data')\n  .then(r => r.json())\n  .then(data => render(data));\n\n// The UI stays interactive while fetching`,
          kind: "mc",
          opts: ["JS creates hidden threads for async ops", "The browser handles I/O in background; JS processes results via the event loop when ready", "fetch is synchronous but very fast", "The event loop runs on a separate thread from JS"],
          correct: 1,
          hint: "The JS engine is single-threaded. But who actually makes the network request?",
          explain: "JS delegates async work (network, timers, file I/O) to the browser/Node.js runtime. The runtime handles it in the background. When done, it pushes a callback to the event queue. The event loop picks it up when the call stack is empty."
        },
        {
          type: "Write Code", pts: 15,
          q: "Implement throttle(fn, interval) — limits how often fn can be called. It fires immediately on first call, then at most once per interval.",
          code: `// const scroll = throttle(updatePosition, 100);\n// Even if scroll fires 1000 times/sec, updatePosition fires max 10/sec`,
          kind: "text",
          answer: ["date.now", "Date.now", "lastRun", "interval"],
          hint: "Track lastRun timestamp. On each call: if Date.now() - lastRun >= interval, run fn and update lastRun. Otherwise skip.",
          sol: `function throttle(fn, interval) {\n  let lastRun = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - lastRun >= interval) {\n      lastRun = now;\n      fn.apply(this, args);\n    }\n  };\n}`,
          explain: "throttle: fires immediately, then at most once per interval. debounce: fires only after silence. Know both — they're both common interview questions. Throttle = rate limit. Debounce = wait for silence."
        }
      ]
    },
    {
      title: "Day 10 — Review & Mixed Drills",
      sub: "All concepts combined — real interview style",
      concepts: [],
      exercises: [
        {
          type: "Write Code", pts: 25,
          q: "Combine everything: fetch multiple GitHub users in parallel, filter those with 100+ followers, return names sorted A-Z.",
          code: `// fetchTopUsers(['nikhil', 'riya', 'arjun'])\n// → fetches all 3 in parallel\n// → filters followers > 100\n// → returns sorted names array`,
          kind: "text",
          answer: ["promise.all", "Promise.all", "filter", "sort"],
          hint: "Promise.all() with .map() to fetch all in parallel. Then .filter() by followers. Then .map() for names. Then .sort().",
          sol: `async function fetchTopUsers(usernames) {\n  try {\n    const users = await Promise.all(\n      usernames.map(name =>\n        fetch(\`https://api.github.com/users/\${name}\`).then(r => r.json())\n      )\n    );\n    return users\n      .filter(u => u.followers > 100)\n      .map(u => u.login)\n      .sort();\n  } catch (err) {\n    console.error('Failed:', err.message);\n    throw err;\n  }\n}`,
          explain: "This tests: async/await, Promise.all (parallel), .map() inside async, .filter(), chained .map(), .sort(), and error handling. This is exactly the complexity of a real interview coding question."
        },
        {
          type: "Predict Output", pts: 15,
          q: "Closure + let loop. What prints?",
          code: `const funcs = [];\nfor (let i = 0; i < 3; i++) {\n  funcs.push(() => i);\n}\nconsole.log(funcs[0]());\nconsole.log(funcs[1]());\nconsole.log(funcs[2]());`,
          kind: "mc",
          opts: ["3, 3, 3", "0, 1, 2", "undefined × 3", "0, 0, 0"],
          correct: 1,
          hint: "This uses let. Each loop iteration creates a new i binding. Each arrow function closes over its own unique i.",
          explain: "With let, each iteration creates a NEW binding of i. Each function closes over its own unique copy (0, 1, 2). With var, all three would return 3 (same shared variable)."
        },
        {
          type: "Write Code", pts: 25,
          q: "Implement pipe(...fns) — takes functions, returns a new function that applies them left-to-right to a value.",
          code: `// const add1  = x => x + 1;\n// const double = x => x * 2;\n// const square = x => x * x;\n\n// const transform = pipe(add1, double, square);\n// transform(3) → square(double(add1(3))) → square(double(4)) → square(8) → 64`,
          kind: "text",
          answer: ["reduce", "...fns", "rest"],
          hint: "pipe takes ...fns. Returns a function that takes value. Use reduce to thread the value through each function: fns.reduce((acc, fn) => fn(acc), value)",
          sol: `function pipe(...fns) {\n  return function(value) {\n    return fns.reduce((acc, fn) => fn(acc), value);\n  };\n}\n\n// Arrow version:\nconst pipe = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);`,
          explain: "pipe is a functional programming pattern. reduce threads the value through each function. The initial accumulator is the input value. Tests: closures, rest params, reduce, higher-order functions — all at once."
        },
        {
          type: "Multiple Choice", pts: 15,
          q: "Which correctly removes duplicates from an array?",
          code: `const arr = [1, 2, 2, 3, 3, 3, 4];`,
          kind: "mc",
          opts: ["arr.filter((v,i) => arr.indexOf(v) === i)", "[...new Set(arr)]", "Both A and B work correctly", "arr.unique() built-in method"],
          correct: 2,
          hint: "There's more than one valid way to remove duplicates in JS.",
          explain: "Both work! [...new Set(arr)] is cleanest and fastest. The filter approach keeps only the first occurrence of each value (indexOf returns the first match's index). Know both — interviewers ask you to implement each."
        }
      ]
    }
  ];
