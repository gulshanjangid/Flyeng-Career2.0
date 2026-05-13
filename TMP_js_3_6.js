const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'app/ai-tools/bootcamp/js-exercises/data.ts');
let content = fs.readFileSync(targetFile, 'utf8');

// Mapping titles to concepts arrays
const updates = {
  "Day 3 — Array Methods": `concepts: [
    {
      name: "map() — Transforming elements",
      desc: "Creates a new array by calling a function on every element of the original array. It never changes the original array.",
      code: \`const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
// [2, 4, 6]

const users = [{ name: 'A' }, { name: 'B' }];
const names = users.map(u => u.name);
// ['A', 'B']\`,
      tip: "Interviewers ask: 'What does map return?' Answer: Always a new array of the exact same length as the original."
    },
    {
      name: "filter() — Selecting elements",
      desc: "Creates a new array with all elements that pass the test implemented by the provided function. Returns true to keep, false to discard.",
      code: \`const scores = [85, 72, 91, 60, 100];
const topA = scores.filter(score => score >= 90);
// [91, 100]

// Filtering out falsy values:
const mixed = [0, 1, false, 2, '', 3];
const truthy = mixed.filter(Boolean);
// [1, 2, 3]\`,
      tip: "If no elements pass the condition, filter() returns an empty array [], NOT undefined."
    },
    {
      name: "reduce() — Accumulating a single value",
      desc: "Executes a reducer function on each element, resulting in single output value (like a sum, average, or object).",
      code: \`const nums = [1, 2, 3, 4];
// sum starts at 0 (the initial value)
const sum = nums.reduce((acc, current) => acc + current, 0); 
// 10

// Creating an object tally (Frequency counter):
const letters = ['a', 'b', 'a'];
const count = letters.reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
// { a: 2, b: 1 }\`,
      tip: "Always provide the initial value (second argument to reduce). If omitted, it uses the first element of the array, which causes bugs with empty arrays or object arrays."
    },
    {
      name: "forEach() vs map()",
      desc: "forEach iterates for side effects and returns undefined. map iterates to transform and returns a new array.",
      code: \`const nums = [1, 2, 3];

// ❌ WRONG — map result ignored, used for side effect
nums.map(n => console.log(n));

// ✅ CORRECT — for side effects
nums.forEach(n => console.log(n));

// ❌ WRONG — forEach doesn't return anything
const doubled = nums.forEach(n => n * 2); 
// doubled is undefined!\`,
      tip: "If you need a new array, use map. If you want to modify DOM elements, log to console, or save to DB, use forEach."
    }
  ],`,
  
  "Day 4 — Destructuring & Spread": `concepts: [
    {
      name: "Object Destructuring",
      desc: "Extract properties from objects and bind them to variables. Extremely common in React props.",
      code: \`const user = { name: 'Nikhil', age: 22, role: 'dev' };

// Extract existing props:
const { name, role } = user;

// Rename variables:
const { name: fullName } = user; 
console.log(fullName); // 'Nikhil'

// Default values (if prop is undefined):
const { status = 'active' } = user;\`,
      tip: "Destructuring only creates local variables. It does NOT remove properties from the original object."
    },
    {
      name: "Array Destructuring",
      desc: "Extract values from arrays based on position (index), not property names.",
      code: \`const rgb = [255, 128, 0];

// Bind by position:
const [red, green, blue] = rgb;

// Skip elements using commas:
const [, , blueOnly] = rgb;

// React useState uses this:
// const [value, setValue] = useState(0);\`,
      tip: "Array destructuring cares about order. Object destructuring cares about property names (keys)."
    },
    {
      name: "Spread Syntax (...)",
      desc: "Expands iterables (arrays, strings) into individual elements or object properties into key-value pairs. Used for shallow copies and merging.",
      code: \`const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const user = { name: 'A', age: 20 };
// Clone and override properties:
const updatedUser = { ...user, age: 21, role: 'admin' };
// { name: 'A', age: 21, role: 'admin' }\`,
      tip: "Spread order matters! Properties added AFTER the spread will overwrite properties from the spread. { ...defaults, ...overrides } is the safe pattern."
    },
    {
      name: "Rest Parameters (...)",
      desc: "Looks identical to spread, but does the exact opposite: condenses multiple elements into a single array. Used in function parameters and destructuring.",
      code: \`// Gathering remaining elements:
const [first, ...others] = [10, 20, 30, 40];
// first = 10, others = [20, 30, 40]

// Gathering remaining properties:
const { name, ...details } = { name: 'A', age: 20, city: 'NY' };
// details = { age: 20, city: 'NY' }

// In functions:
function sum(...numbers) {
  // numbers is an array
  return numbers.reduce((a, b) => a + b, 0);
}\`,
      tip: "Spread 'unpacks' elements. Rest 'packs' elements into a new array/object. Rest must always be the LAST variable in destructuring or parameters."
    }
  ],`,
  
  "Day 5 — Promises & Async/Await": `concepts: [
    {
      name: "The Event Loop Basics",
      desc: "JS is single-threaded but non-blocking. Asynchronous tasks (timers, API calls) run outside the main thread, and their callbacks are queued via the Event Loop when done.",
      code: \`console.log('1. Start');

setTimeout(() => {
  console.log('3. Timer done');
}, 0); // 0ms doesn't mean immediate!

console.log('2. End');

// Output:
// 1. Start
// 2. End
// 3. Timer done\`,
      tip: "Even with a 0ms delay, setTimeout pushes the callback to the Task Queue. It must wait until the Call Stack is completely empty before executing."
    },
    {
      name: "Promises — then/catch",
      desc: "A Promise represents a value that might be available now, later, or never. It has three states: pending, fulfilled (resolved), or rejected.",
      code: \`const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) resolve("Data loaded");
    else reject("Network error");
  }, 1000);
});

fetchData
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log('Finished'));\`,
      tip: "A Promise can only settle ONCE. Once resolved or rejected, subsequent calls to resolve/reject are ignored."
    },
    {
      name: "Async / Await syntactic sugar",
      desc: "async makes a function return a Promise. await pauses the function's execution until the Promise settles. Makes async code look synchronous.",
      code: \`async function getUser() {
  try {
    // Execution pauses here until fetch completes
    const response = await fetch('/api/user');
    
    // Pauses again to parse JSON
    const data = await response.json(); 
    return data;
  } catch (err) {
    console.error('Fetch failed', err);
  }
}\`,
      tip: "You MUST use try/catch block to handle rejections with async/await. Without it, a rejected promise will cause an unhandled promise rejection error."
    },
    {
      name: "Promise.all for parallel execution",
      desc: "When multiple async operations don't depend on each other, use Promise.all to run them concurrently instead of sequentially.",
      code: \`// ❌ Sequential (Slow: 1s + 1s = 2s)
const user = await fetchUser();
const posts = await fetchPosts();

// ✅ Parallel (Fast: max(1s, 1s) = 1s)
const [user, posts] = await Promise.all([
  fetchUser(),
  fetchPosts()
]);\`,
      tip: "Promise.all fails fast! If even ONE promise rejects, the entire Promise.all rejects immediately. If you need some to succeed even if others fail, use Promise.allSettled()."
    }
  ],`,
  
  "Day 6 — Objects & Classes": `concepts: [
    {
      name: "Object Methods (keys, values, entries)",
      desc: "Tools to iterate over Objects. Objects themselves are not technically iterable (you can't run .map on an object directly).",
      code: \`const user = { a: 1, b: 2 };

// Get array of keys
Object.keys(user);   // ['a', 'b']

// Get array of values
Object.values(user); // [1, 2]

// Get array of [key, value] pairs
Object.entries(user); // [['a', 1], ['b', 2]]

// Common pattern: map over entries
Object.entries(user).map(([key, val]) => {
  console.log(key, val);
});\`,
      tip: "Object.entries combined with array destructuring is the cleanest way to iterate over keys and values concurrently in JS."
    },
    {
      name: "The 'this' Keyword",
      desc: "'this' refers to the object that is executing the current function. It depends on HOW the function is called, not where it is written.",
      code: \`const obj = {
  name: 'Nikhil',
  greet: function() {
    console.log(this.name);
  },
  // Arrow functions don't have their own 'this'!
  greetArrow: () => {
    console.log(this.name); 
  }
};

obj.greet(); // 'Nikhil' (this = obj)
obj.greetArrow(); // undefined (this = window/global)\`,
      tip: "Arrow functions bind 'this' lexically — they inherit 'this' from the enclosing scope. Never use an arrow function as an object method if you need access to 'this'!"
    },
    {
      name: "ES6 Classes",
      desc: "Syntactic sugar over JS's prototype-based inheritance. Makes object-oriented programming cleaner.",
      code: \`class User {
  // Runs when user is instantiated with 'new'
  constructor(name) {
    this.name = name; 
  }

  // Instance method (shared on prototype)
  login() {
    console.log(this.name + ' logged in');
  }

  // Static method (called on Class, not instance)
  static isValid(user) {
    return !!user.name;
  }
}

const u = new User('Nikhil');
u.login();
User.isValid(u);\`,
      tip: "If you forget the 'new' keyword when calling a class constructor, JS will throw a TypeError."
    },
    {
      name: "Class Inheritance (extends & super)",
      desc: "Classes can inherit properties and methods from other classes. super() must be called in the child constructor before using 'this'.",
      code: \`class Admin extends User {
  constructor(name, permissions) {
    super(name); // Calls parent (User) constructor
    this.permissions = permissions; // Now 'this' is safe to use
  }

  // Method overriding
  login() {
    super.login(); // Call parent logic
    console.log('Admin dashboard unlocked');
  }
}\`,
      tip: "In a class constructor using 'extends', you absolutely MUST call super() before accessing 'this', or JavaScript throws a ReferenceError."
    }
  ],`
};

for (const [title, replacement] of Object.entries(updates)) {
  const searchRegex = new RegExp('title:\\\\s*"' + title + '",\\\\s*sub:.*?,\\\\s*concepts:\\\\s*\\\\[\\\\],', 's');
  // Match `title: "...", sub: "...", concepts: [],` up to concepts end
  content = content.replace(searchRegex, (match) => {
     let m = match;
     m = m.replace('concepts: [],', replacement);
     return m;
  });
}

fs.writeFileSync(targetFile, content);
console.log('Days 3-6 injected!');
