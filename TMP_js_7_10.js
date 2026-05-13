const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'app/ai-tools/bootcamp/js-exercises/data.ts');
let content = fs.readFileSync(targetFile, 'utf8');

const updates = {
  "Day 7 — DOM Manipulation": `concepts: [
    {
      name: "Selecting Elements",
      desc: "How JS finds and interacts with HTML elements. querySelector is the modern standard for all selections.",
      code: \`// Select the first matching element
const btn = document.querySelector('.submit-btn');
const header = document.querySelector('#main-header');

// Select ALL matching elements (returns NodeList)
const allLinks = document.querySelectorAll('a');

// Convert NodeList to Array to use .map()
// Array.from(allLinks).map(link => ...)\`,
      tip: "If querySelector can't find an element, it returns null. Always check if the element exists before accessing its properties to avoid 'Cannot read properties of null' errors."
    },
    {
      name: "Handling Events",
      desc: "Listening for user interactions like clicks, typing, and form submissions.",
      code: \`const button = document.querySelector('#btn');

function handleClick(event) {
  // event object contains details about the interaction
  console.log('Clicked!', event.target);
}

// Add the listener (pass function reference, don't call it)
button.addEventListener('click', handleClick);

// Anonymous function approach:
button.addEventListener('click', (e) => {
  e.preventDefault(); // prevents form submit/link reload
});\`,
      tip: "Interview tip: Always use addEventListener instead of onclick. addEventListener allows multiple listeners on the same element; onclick overwrites previous listeners."
    },
    {
      name: "Event Delegation",
      desc: "Instead of adding listeners to 100 children, add ONE listener to their parent. The event 'bubbles up' from the child to the parent.",
      code: \`const ul = document.querySelector('#todo-list');

// Add ONE listener to the parent
ul.addEventListener('click', (e) => {
  // Check if the actual clicked element was a list item
  if (e.target.matches('li')) {
    console.log('You clicked:', e.target.textContent);
    e.target.classList.toggle('completed');
  }
});\`,
      tip: "Why use delegation? 1. Better performance (1 listener instead of 100). 2. It automatically works for new elements added to the DOM dynamically after page load."
    },
    {
      name: "localStorage & JSON",
      desc: "localStorage allows you to save string data in the browser that persists after the page is refreshed or closed.",
      code: \`const user = { name: 'A', score: 100 };

// ❌ Fails: only stores strings ("[object Object]")
localStorage.setItem('user', user);

// ✅ Correct: Convert object to JSON string first
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and convert back to object
const savedString = localStorage.getItem('user');
if (savedString) {
  const savedUser = JSON.parse(savedString);
}\`,
      tip: "localStorage is synchronous and blocks the main thread. Don't use it for huge data sets. For large or complex data, IndexedDB is preferred."
    }
  ],`,
  
  "Day 8 — Error Handling & Modules": `concepts: [
    {
      name: "try...catch...finally",
      desc: "The standard way to handle runtime errors without crashing the entire script. Often used with async/await and JSON parsing.",
      code: \`try {
  // Code that might throw an error
  const data = JSON.parse(badString);
} catch (error) {
  // Runs ONLY if an error occurred in the try block
  console.error("Parsing failed:", error.message);
} finally {
  // Runs ALWAYS, regardless of success or failure
  console.log("Cleanup code goes here");
}\`,
      tip: "If you catch an error but can't handle it properly at that level, you should 're-throw' it using \`throw error;\` so the calling function knows it failed."
    },
    {
      name: "Custom Errors",
      desc: "You can create specific error types by extending the built-in Error class. This allows you to handle different errors differently.",
      code: \`class APIError extends Error {
  constructor(message, statusCode) {
    super(message); // calls the parent Error constructor
    this.name = 'APIError';
    this.statusCode = statusCode;
  }
}

// Throwing the custom error:
if (!response.ok) {
  throw new APIError('Not Found', 404);
}\`,
      tip: "When extending Error, you MUST call super(message) before using 'this'. It sets the error message property correctly."
    },
    {
      name: "ES Modules (import / export)",
      desc: "JS files can export variables/functions and other files can import them. This splits code into reusable, maintainable pieces.",
      code: \`// --- utils.js ---
export const add = (a, b) => a + b; // Named export
export default function log(msg) {} // Default export

// --- main.js ---
// Import default AND named exports
import log, { add } from './utils.js';

// Import all named exports as an object
import * as Utils from './utils.js';
Utils.add(1, 2);\`,
      tip: "A file can have MULTIPLE named exports, but only ONE default export. Default exports can be renamed easily upon import; named exports require the 'as' keyword to rename."
    }
  ],`,
  
  "Day 9 — The Event Loop": `concepts: [
    {
      name: "The Call Stack",
      desc: "JS is single-threaded. It uses a Call Stack to keep track of what function is currently running. Functions are pushed onto the stack when called, and popped off when they return.",
      code: \`function multiply(a, b) { return a * b; }
function square(n) { return multiply(n, n); }
function printSquare(n) { console.log(square(n)); }

printSquare(4);
// Stack order:
// 1. printSquare(4) calls square(4)
// 2. square(4) calls multiply(4, 4)
// 3. multiply returns 16 (popped)
// 4. square returns 16 (popped)
// 5. console.log(16) runs (popped)
// 6. printSquare returns (popped)\`,
      tip: "If a function calls itself infinitely, the Call Stack fills up and the browser throws a 'Maximum call stack size exceeded' error (Stack Overflow)."
    },
    {
      name: "Macrotasks vs Microtasks",
      desc: "When async code finishes, its callback goes to a queue. The Event Loop prioritizes the Microtask queue over the Macrotask queue.",
      code: \`console.log('1. Sync');

// Macrotask
setTimeout(() => console.log('3. Macrotask'), 0);

// Microtask
Promise.resolve().then(() => console.log('2. Microtask'));

console.log('1. Sync (End)');

// Output order:
// 1. Sync
// 1. Sync (End)
// 2. Microtask
// 3. Macrotask\`,
      tip: "Microtasks (Promises, queueMicrotask) ALWAYS run before Macrotasks (setTimeout, setInterval). The Event Loop completely empties the Microtask queue before picking up the next Macrotask."
    },
    {
      name: "Debouncing",
      desc: "A technique to limit how often a function executes. It delays execution until a certain amount of silence (e.g., 300ms) has passed. Crucial for search inputs.",
      code: \`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    // Clear previous timer if called again
    clearTimeout(timer);
    
    // Start a new timer
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}\`,
      tip: "Debounce waits for a PAUSE in events. Throttle enforces a maximum frequency (e.g. once per second). Use Debounce for typing/search, use Throttle for scrolling/resizing."
    }
  ],`,
  
  "Day 10 — Review & Mixed Drills": `concepts: [
    {
      name: "Common Interview Question: Closures",
      desc: "A closure is a function that remembers the variables from the place where it was defined, regardless of where it is executed later.",
      code: \`function createCounter() {
  let count = 0; // 'private' variable
  
  return function() {
    count++; // It remembers 'count'
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

// A completely separate closure space:
const counter2 = createCounter(); 
console.log(counter2()); // 1\`,
      tip: "Closures are widely used in JS to emulate 'private' variables and in React Hooks (state is preserved across renders via closures)."
    },
    {
      name: "Common Pattern: Pipeline (Compose)",
      desc: "Threading a value through a series of functions. A classic functional programming interview question.",
      code: \`const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

// Applying manually:
// square(double(add1(3))) → 64

// Using reduce to create a pipeline:
const pipe = (...fns) => (initialValue) => 
  fns.reduce((acc, fn) => fn(acc), initialValue);

const transform = pipe(add1, double, square);
console.log(transform(3)); // 64\`,
      tip: "This pattern perfectly tests rest parameters, arrow functions, higher-order functions, and reduce all in one line. Highly requested in Senior interviews."
    },
    {
      name: "Removing Duplicates",
      desc: "The fastest and most modern way to remove duplicates from an array is using a Set (which only stores unique values) and the Spread operator.",
      code: \`const duplicated = [1, 2, 2, 3, 3, 4];

// The modern ES6 way:
const unique = [...new Set(duplicated)];
// [1, 2, 3, 4]

// The legacy indexOf way:
const uniqueLegacy = duplicated.filter(
  (val, index, array) => array.indexOf(val) === index
);\`,
      tip: "Always use the ES6 Set method in interviews. It is faster (O(n) time complexity) because Set lookups are O(1), whereas the indexOf approach is O(n^2)."
    }
  ],`
};

for (const [title, replacement] of Object.entries(updates)) {
  const searchRegex = new RegExp('title:\\\\s*"' + title + '",\\\\s*sub:.*?,\\\\s*concepts:\\\\s*\\\\[\\\\],', 's');
  content = content.replace(searchRegex, (match) => {
     let m = match;
     m = m.replace('concepts: [],', replacement);
     return m;
  });
}

fs.writeFileSync(targetFile, content);
console.log('Days 7-10 injected!');
