export type Concept = {
    name: string;
    desc: string;
    code: string;
    tip: string;
}
export type Exercise = {
    type: string;
    pts: number;
    q: string;
    code: string;
    kind: 'mc' | 'text';
    opts?: string[];
    correct?: number;
    answer?: string[];
    hint: string;
    sol: string;
    explain: string;
}
export type DayData = {
    title: string;
    sub: string;
    concepts: Concept[];
    exercises: Exercise[];
}
export const DAYS: DayData[] = [
{
  title:"Day 1 — What is React & JSX",
  sub:"React fundamentals · JSX · Components · Rendering",
  concepts:[
    {
      name:"What React is and why it exists",
      desc:"React is a JavaScript library for building UIs. It solves the problem of keeping the DOM in sync with data using a virtual DOM and a component-based model.",
      code:`// Without React — messy manual DOM updates:
const div = document.getElementById('count');
let count = 0;
button.onclick = () => { count++; div.textContent = count; };

// With React — declare WHAT you want, React handles HOW:
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
// React re-renders automatically when state changes`,
      tip:"Interviewers ask: 'What is the Virtual DOM?' Answer: React keeps a lightweight copy of the DOM in memory. When state changes, it diffs the virtual DOM vs the real DOM and only updates what changed — this is efficient."
    },
    {
      name:"JSX — JavaScript + HTML syntax",
      desc:"JSX lets you write HTML-like syntax inside JavaScript. It compiles to React.createElement() calls. Every JSX element is just a function call under the hood.",
      code:`// JSX you write:
const element = <h1 className="title">Hello, {name}!</h1>;

// What it compiles to:
const element = React.createElement('h1', { className:'title' }, 'Hello, ', name, '!');

// JSX rules:
// 1. Return ONE root element (or use a Fragment <>...</>)
// 2. Use className, not class
// 3. Use camelCase for attributes: onClick, onChange, htmlFor
// 4. Self-close empty tags: <img /> <input />
// 5. Expressions in {}, not statements`,
      tip:"Common interview question: 'Why className instead of class?' Because class is a reserved word in JavaScript. JSX is JS, so it uses className."
    },
    {
      name:"Components — the building blocks",
      desc:"A component is a function that returns JSX. Components can be reused, composed, and nested. They always start with a capital letter.",
      code:`// Functional component — the ONLY way you should write them now
function Greeting({ name }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Welcome to React.</p>
    </div>
  );
}

// Using it — looks like an HTML tag
function App() {
  return (
    <>
      <Greeting name="Nikhil" />
      <Greeting name="Riya" />
    </>
  );
}
// Outputs two different greetings — same component, different data`,
      tip:"'What is a component?' A function that takes props and returns JSX. 'Why capital letter?' React treats lowercase as HTML elements, uppercase as components."
    },
    {
      name:"Fragment — returning multiple elements",
      desc:"React components must return one root element. Fragments let you group elements without adding extra DOM nodes.",
      code:`// BAD — two root elements, throws error:
function Bad() {
  return (
    <h1>Title</h1>
    <p>Content</p>
  );
}

// GOOD — wrap in a Fragment:
function Good() {
  return (
    <>
      <h1>Title</h1>
      <p>Content</p>
    </>
  );
}

// Long form (when you need a key prop on the Fragment):
import { Fragment } from 'react';
items.map(item => (
  <Fragment key={item.id}>
    <dt>{item.term}</dt>
    <dd>{item.def}</dd>
  </Fragment>
))`,
      tip:"Interviewers check if you know Fragments. 'Why not just use a div?' Extra div adds a real DOM node that can break CSS layouts (especially flexbox/grid parents)."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"What does JSX compile to?",
      code:`const element = <h1 className="title">Hello</h1>;`,
      kind:"mc",
      opts:["Plain HTML string","React.createElement('h1', { className:'title' }, 'Hello')","document.createElement('h1')","A new HTML element directly in the DOM"],
      correct:1,
      hint:"JSX is syntactic sugar. Babel transforms it into function calls.",
      sol:`React.createElement('h1', { className: 'title' }, 'Hello')`,
      explain:"JSX is not HTML — it's syntactic sugar for React.createElement(type, props, ...children). Babel transforms every JSX element into this function call before the browser ever sees it."
    },
    {
      type:"Spot the Bug", pts:10,
      q:"This JSX has 3 bugs. Find them all.",
      code:`function Card() {
  return (
    <div class="card">
      <img src="photo.jpg">
      <p onclick={handleClick}>Click me</p>
    </div>
  );
}`,
      kind:"text",
      answer:["classname","className","onclick","onClick","img","self-clos"],
      hint:"JSX uses camelCase attributes. HTML elements like img must be self-closing. The class attribute has a different name in JSX.",
      sol:`function Card() {
  return (
    <div className="card">      {/* class → className */}
      <img src="photo.jpg" />   {/* must self-close */}
      <p onClick={handleClick}>Click me</p>  {/* onclick → onClick */}
    </div>
  );
}`,
      explain:"(1) class → className (class is reserved in JS). (2) img must be self-closed: <img />. (3) onclick → onClick (camelCase in JSX). These 3 trip up everyone moving from HTML to React."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a UserCard component that takes name, role, and avatarUrl as props and renders them.",
      code:`// <UserCard name="Nikhil" role="Developer" avatarUrl="pic.jpg" />
// Should render: an img, the name as h3, and role as p`,
      kind:"text",
      answer:["function usercard","function UserCard","const UserCard","const usercard","props","{ name"],
      hint:"function UserCard({ name, role, avatarUrl }) { return (...JSX...) }. Destructure props in the parameter.",
      sol:`function UserCard({ name, role, avatarUrl }) {
  return (
    <div className="user-card">
      <img src={avatarUrl} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}`,
      explain:"Destructure props in the parameter — cleaner than (props) and then props.name. Alt text on img is important for accessibility. Expressions in JSX use {}, not ''."
    },
    {
      type:"Multiple Choice", pts:10,
      q:"Why must React components start with a capital letter?",
      code:`// This renders an HTML div:
const x = <div />;

// This renders the MyComponent component:
const y = <MyComponent />;`,
      kind:"mc",
      opts:["It's just a style convention","React uses the capital letter to know it's a component, not an HTML element","JavaScript class syntax requires capitals","JSX only supports capital letters"],
      correct:1,
      hint:"React processes JSX tags differently based on their case.",
      explain:"React checks the tag name at compile time. Lowercase → HTML element (passes tag as a string to createElement). Uppercase → component (passes the function/class itself to createElement). <div> vs <Div> are completely different."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"This component tries to return two elements. What's wrong and how do you fix it?",
      code:`function Header() {
  return (
    <nav>Menu</nav>
    <header>Title</header>
  );
}`,
      kind:"text",
      answer:["fragment","<>","Fragment","wrap","one root","single root"],
      hint:"React components must return a single root element. What can you use to group elements without adding a real DOM node?",
      sol:`function Header() {
  return (
    <>
      <nav>Menu</nav>
      <header>Title</header>
    </>
  );
}`,
      explain:"Components must return one root element. Wrap in a Fragment (<>...</>) to avoid adding an extra DOM node. Using <div> would work but adds an unnecessary element to the DOM."
    }
  ]
},
{
  title:"Day 2 — Props & Composition",
  sub:"Props · PropTypes · Component composition · Children",
  concepts:[
    {
      name:"Props — passing data to components",
      desc:"Props are how you pass data from parent to child. They are read-only — a component must never modify its own props.",
      code:`// Parent passes props
function App() {
  return <Button color="blue" size="large" onClick={handleClick} />;
}

// Child receives and uses them
function Button({ color, size, onClick }) {
  return (
    <button
      className={\\\`btn btn-\${color} btn-\${size}\\\`}
      onClick={onClick}
    >
      Click
    </button>
  );
}

// Default props — inline with destructuring
function Button({ color = 'gray', size = 'medium', onClick }) {
  // ...
}`,
      tip:"'Can a child modify its own props?' NO — props are read-only. If a child needs to change a value, it must call a callback function passed from the parent. This is the one-directional data flow principle."
    },
    {
      name:"children prop — component composition",
      desc:"children is a special prop. Whatever you put between component tags becomes children. This is how you build layout components like Card, Modal, and Container.",
      code:`// children lets you compose components like HTML elements
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage — whatever goes between the tags is children:
<Card title="My Profile">
  <img src="avatar.jpg" alt="me" />
  <p>Hello from inside the card!</p>
  <Button>Edit Profile</Button>
</Card>`,
      tip:"Interviewers ask: 'What is the children prop?' It's whatever content is placed between a component's opening and closing tags. This enables powerful composition patterns."
    },
    {
      name:"Conditional rendering",
      desc:"Render different UI based on conditions. Use ternary for if/else, && for optional content. Never use if/else directly in JSX return.",
      code:`function Profile({ user, isLoading }) {
  // Method 1: Early return
  if (isLoading) return <Spinner />;

  // Method 2: Ternary in JSX (if/else)
  return (
    <div>
      {user ? <UserInfo user={user} /> : <LoginPrompt />}

      {/* Method 3: && for optional content */}
      {user.isAdmin && <AdminPanel />}

      {/* Method 4: nullish coalescing for fallback */}
      <p>{user.bio ?? 'No bio yet'}</p>
    </div>
  );
}`,
      tip:"'Why not use if/else inside JSX?' Because JSX is an expression, not a statement. if/else is a statement. Use ternary (expression) instead. This is asked constantly."
    },
    {
      name:"Rendering lists with .map()",
      desc:"Use .map() to render arrays of data. Every list item needs a unique key prop — React uses it to efficiently update only changed items.",
      code:`const students = [
  { id: 1, name: 'Nikhil', score: 85 },
  { id: 2, name: 'Riya', score: 92 },
];

function StudentList() {
  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>         {/* key must be unique! */}
          {student.name} — {student.score}
        </li>
      ))}
    </ul>
  );
}
// ❌ Don't use index as key (unless list is static and never reorders)
// ✅ Use a stable unique ID from your data`,
      tip:"'Why do we need key?' React uses keys to identify which list items changed, added, or removed. Without keys, React may re-render the entire list instead of only what changed."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"A child component needs to update data in the parent. How?",
      code:`// Parent has: const [name, setName] = useState('Nikhil');
// Child is: <Input value={name} />
// How does Input update name?`,
      kind:"mc",
      opts:["Directly modify the name prop inside Input","Parent passes setName as a prop; Input calls it","Use a global variable","Child can't communicate with parent"],
      correct:1,
      hint:"Props flow down. To communicate UP, the parent passes a callback function as a prop.",
      explain:"Props are read-only. To update parent state from a child, the parent passes a function (like setName or an onChange handler) as a prop. The child calls this function. This is React's one-directional data flow."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a Layout component that accepts a title prop and children, and wraps children in a styled container.",
      code:`// Usage:
// <Layout title="Dashboard">
//   <p>Some content here</p>
//   <Button>Click me</Button>
// </Layout>`,
      kind:"text",
      answer:["children","{ title","{ children"],
      hint:"function Layout({ title, children }) — the children prop receives whatever is placed between the opening and closing tags.",
      sol:`function Layout({ title, children }) {
  return (
    <div className="layout">
      <h1>{title}</h1>
      <main>{children}</main>
    </div>
  );
}`,
      explain:"The children prop is whatever you put between <Layout> and </Layout>. This enables composition — Layout doesn't know or care what children are. This pattern is how Modal, Card, Page, and Container components work."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"This list renders correctly but React logs a warning. Why?",
      code:`const items = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
  return (
    <ul>
      {items.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}`,
      kind:"text",
      answer:["index","key","stable","id","unique"],
      hint:"No error, but using index as key is considered bad practice. What happens if items are reordered or items are deleted from the middle?",
      sol:`// If the list is static and never reordered, index is acceptable.
// For dynamic lists, use a stable unique ID:
const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
];

{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}`,
      explain:"Using index as key causes bugs when items are reordered or deleted from the middle. React matches old and new items by key — if keys shift with reordering, React may update the wrong DOM nodes. Always use stable unique IDs."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a UserBadge component. If user.isAdmin is true, show '(Admin)' in red next to the name. If user.verified, show a ✓ checkmark.",
      code:`// user = { name: 'Nikhil', isAdmin: true, verified: true }
// Should render: Nikhil (Admin) ✓`,
      kind:"text",
      answer:["isadmin","isAdmin","verified","&&","ternary","?"],
      hint:"Use && for the optional admin badge and verified checkmark — they're only shown when the value is true.",
      sol:`function UserBadge({ user }) {
  return (
    <span>
      {user.name}
      {user.isAdmin && <span style={{ color: 'red' }}> (Admin)</span>}
      {user.verified && <span> ✓</span>}
    </span>
  );
}`,
      explain:"&& is the 'optional rendering' pattern. If user.isAdmin is false/undefined, nothing renders. If true, the span renders. This is cleaner than a ternary when you only want to show something for the 'true' case."
    }
  ]
},
{
  title:"Day 3 — useState Hook",
  sub:"useState · State updates · Immutability · Derived state",
  concepts:[
    {
      name:"useState — adding memory to components",
      desc:"useState lets a component remember values between renders. When state changes, React re-renders the component with the new value.",
      code:`import { useState } from 'react';

function Counter() {
  // [currentValue, setterFunction] = useState(initialValue)
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`,
      tip:"'What triggers a re-render?' Calling the setter function from useState. React re-runs the component function with the new state value. Mutating state directly (count++ instead of setCount) does NOT trigger a re-render."
    },
    {
      name:"State updates are asynchronous",
      desc:"setState doesn't update the value immediately — it schedules a re-render. If you need to update based on the previous value, use the functional update form.",
      code:`// BAD — stale state problem:
function Counter() {
  const [count, setCount] = useState(0);

  const increment3Times = () => {
    setCount(count + 1); // all 3 use same stale 'count'
    setCount(count + 1);
    setCount(count + 1); // only increments by 1!
  };
}

// GOOD — functional update, always gets latest state:
const increment3Times = () => {
  setCount(prev => prev + 1); // prev is always current
  setCount(prev => prev + 1);
  setCount(prev => prev + 1); // correctly increments by 3!
};`,
      tip:"'When should you use the functional form of setState?' Whenever your new state depends on the previous state. setCount(prev => prev + 1) instead of setCount(count + 1). This avoids stale closure bugs."
    },
    {
      name:"State with objects — immutability",
      desc:"Never mutate state objects directly. Always create a new object. React uses reference equality to detect changes — same object reference = no re-render.",
      code:`const [user, setUser] = useState({ name: 'Nikhil', age: 22 });

// ❌ WRONG — mutates the existing object, no re-render!
user.name = 'Riya';
setUser(user);

// ✅ CORRECT — create a new object with spread:
setUser({ ...user, name: 'Riya' });

// ❌ WRONG — mutates array:
const [items, setItems] = useState(['a', 'b', 'c']);
items.push('d');
setItems(items);

// ✅ CORRECT — create new array:
setItems([...items, 'd']);         // add
setItems(items.filter(i => i !== 'b')); // remove
setItems(items.map(i => i === 'a' ? 'A' : i)); // update`,
      tip:"'Why not mutate state directly?' React compares old and new state by reference. If you mutate the same object, React sees the same reference and skips re-rendering. Always create new objects/arrays."
    },
    {
      name:"Multiple state variables vs object state",
      desc:"Use multiple useState for independent values. Group related values into one state object. Know when to use each.",
      code:`// Multiple independent state variables — simpler, preferred:
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [isLoading, setIsLoading] = useState(false);

// Object state — for tightly coupled values:
const [form, setForm] = useState({ name: '', email: '' });
const updateForm = (field, value) => {
  setForm(prev => ({ ...prev, [field]: value }));
};

// Derived state — compute from state, don't store separately:
const [items, setItems] = useState([...]);
const count = items.length;        // ✅ derived
const total = items.reduce(...);   // ✅ derived
// ❌ Don't: const [count, setCount] = useState(items.length)`,
      tip:"'What is derived state?' A value you can compute from existing state — don't store it as its own state variable, just compute it during render. Storing derived state leads to sync bugs."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"What happens when you call: user.name = 'Riya'; setUser(user);",
      code:`const [user, setUser] = useState({ name: 'Nikhil', age: 22 });
user.name = 'Riya';
setUser(user);`,
      kind:"mc",
      opts:["Component re-renders and shows 'Riya'","Component does NOT re-render — same object reference","Throws a TypeError","React auto-detects the mutation and re-renders"],
      correct:1,
      hint:"React compares old state and new state by reference. What is the reference when you mutate the same object?",
      explain:"Mutating the object and passing the same reference means React sees old === new (same object) and skips the re-render. Always create a new object: setUser({ ...user, name: 'Riya' })."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"This increment function is supposed to add 3 to count. It only adds 1. Fix it.",
      code:`function Counter() {
  const [count, setCount] = useState(0);

  const addThree = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={addThree}>{count}</button>;
}`,
      kind:"text",
      answer:["prev","prev =>","functional","setCount(prev"],
      hint:"All 3 setCount calls use the same stale 'count' from this render. Use the functional update form to get the latest value.",
      sol:`const addThree = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
};`,
      explain:"All 3 calls capture the same 'count' from the closure. React batches them and the net result is count+1. Using prev => prev+1, each update gets the actual latest value, so it correctly adds 3."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a toggle hook: a component with a button that toggles between 'Show' and 'Hide'. When 'Hide', show a secret message. When 'Show', hide it.",
      code:`// Button text alternates: 'Hide' ↔ 'Show'
// When visible: <p>This is the secret!</p> is shown`,
      kind:"text",
      answer:["usestate","useState","setvisible","setVisible","isvisible","isVisible","!isVisible","!isvisible"],
      hint:"const [isVisible, setIsVisible] = useState(false). Toggle: setIsVisible(prev => !prev). Conditional render with &&.",
      sol:`function SecretToggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(prev => !prev)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>This is the secret!</p>}
    </div>
  );
}`,
      explain:"useState(false) starts hidden. setIsVisible(prev => !prev) toggles. The button text uses a ternary. The secret uses &&. This small component tests: useState, functional update, conditional rendering, event handling."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a form with name and email fields. Store both in ONE state object. Show a live preview below the form.",
      code:`// One useState object with { name: '', email: '' }
// Live preview: "Name: Nikhil | Email: n@example.com"`,
      kind:"text",
      answer:["...form","...prev","setform","setForm","onchange","onChange"],
      hint:"useState({ name:'', email:'' }). On change: setForm(prev => ({ ...prev, [e.target.name]: e.target.value })). Use name attribute on inputs to target the right field.",
      sol:`function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <p>Name: {form.name} | Email: {form.email}</p>
    </div>
  );
}`,
      explain:"[e.target.name] is a computed property — it uses the input's name attribute as the key. This one handler updates both fields. Spreading ...prev preserves the other field's value."
    }
  ]
},
{
  title:"Day 4 — useEffect Hook",
  sub:"Side effects · Dependencies · Cleanup · Data fetching",
  concepts:[
    {
      name:"useEffect — running code after render",
      desc:"useEffect runs after the component renders. Use it for side effects: API calls, subscriptions, timers, and DOM manipulation.",
      code:`import { useEffect } from 'react';

function App() {
  // Runs after EVERY render (rarely what you want):
  useEffect(() => {
    console.log('rendered!');
  });

  // Runs ONCE after first render (like componentDidMount):
  useEffect(() => {
    fetchData();
  }, []); // empty dependency array

  // Runs when 'userId' changes:
  useEffect(() => {
    fetchUser(userId);
  }, [userId]); // re-runs when userId changes

  return <div>App</div>;
}`,
      tip:"The 3 forms of useEffect: no deps (every render), [] (once on mount), [deps] (when deps change). Interviewers ALWAYS ask about the dependency array."
    },
    {
      name:"Fetching data in useEffect",
      desc:"The most common useEffect pattern. Fetch data after mount, handle loading/error states, and display the result.",
      code:`function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(\\\`/api/users/\${userId}\\\`)
      .then(r => r.json())
      .then(data => { setUser(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [userId]); // refetch when userId changes

  if (loading) return <Spinner />;
  if (error)   return <Error message={error} />;
  return <div>{user.name}</div>;
}`,
      tip:"'Why can't useEffect's callback be async?' An async function returns a Promise, but useEffect expects either nothing or a cleanup function. Workaround: define async function inside and call it."
    },
    {
      name:"Cleanup — preventing memory leaks",
      desc:"Return a cleanup function from useEffect. React calls it before the next effect runs and before the component unmounts. Prevents memory leaks from subscriptions and timers.",
      code:`useEffect(() => {
  // Setup: create subscription/timer/listener
  const interval = setInterval(() => {
    setTime(new Date());
  }, 1000);

  // Cleanup: returned function runs on unmount
  // or before the next effect if deps changed
  return () => clearInterval(interval);
}, []); // only once

// Event listener example:
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, []);`,
      tip:"'What happens without cleanup?' Memory leaks. If a component unmounts while a timer is running, it'll still try to call setState on an unmounted component. The cleanup function prevents this."
    },
    {
      name:"Common useEffect mistakes",
      desc:"Missing dependencies, infinite loops, and async patterns. Know these before your interview.",
      code:`// ❌ INFINITE LOOP — object created fresh each render
// causes endless effect → setState → render → effect...
useEffect(() => {
  fetchUser(config); // config is a new object each render
}, [config]);  // React sees new reference every time → infinite loop

// ✅ FIX — move object inside effect or use useMemo:
useEffect(() => {
  const config = { timeout: 3000 }; // stable inside effect
  fetchUser(config);
}, []);

// ❌ BAD — can't make the callback async directly:
useEffect(async () => { ... }); // returns Promise, not cleanup!

// ✅ CORRECT — define async inside:
useEffect(() => {
  async function load() {
    const data = await fetchData();
    setData(data);
  }
  load();
}, []);`,
      tip:"Infinite loop from useEffect is one of the most common React bugs. Cause: a dependency that gets a new reference every render (objects, arrays, functions defined in render body)."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"How do you run a useEffect ONLY once, after the first render?",
      code:`useEffect(() => {
  fetchInitialData();
  // what goes here?
});`,
      kind:"mc",
      opts:["Don't pass a second argument","Pass an empty array []","Pass null","Pass [false]"],
      correct:1,
      hint:"The dependency array controls when the effect re-runs. What array value means 'no dependencies, never re-run'?",
      explain:"[] means 'this effect has no dependencies'. React runs it once after the first render and never again. No second argument means 'run after every render'. [dep] means 'run when dep changes'."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"This component creates a memory leak. Find it.",
      code:`function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}`,
      kind:"text",
      answer:["return","cleanup","clearInterval","clearinterval"],
      hint:"What happens to the interval when this component unmounts from the DOM?",
      sol:`useEffect(() => {
  const id = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(id); // cleanup!
}, []);`,
      explain:"Without cleanup, the interval keeps running even after Clock unmounts. It tries to call setTime on an unmounted component — React warns about this and it's a memory leak. Always return a cleanup function for timers and subscriptions."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a component that fetches a post from jsonplaceholder when a postId prop changes. Show loading, error, and data states.",
      code:`// URL: https://jsonplaceholder.typicode.com/posts/{postId}
// Props: { postId }
// States needed: post, loading, error`,
      kind:"text",
      answer:["useeffect","useEffect","setloading","setLoading","postid","postId","[postId]","[postid]"],
      hint:"useState for post/loading/error. useEffect with [postId] dep. fetch inside effect. Handle .ok check. try/catch or .catch().",
      sol:`function Post({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(\\\`https://jsonplaceholder.typicode.com/posts/\${postId}\\\`)
      .then(r => { if (!r.ok) throw new Error('Failed'); return r.json(); })
      .then(data => { setPost(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [postId]);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error: {error}</p>;
  return <h2>{post?.title}</h2>;
}`,
      explain:"setLoading(true) and setError(null) at the top of the effect resets state for each new fetch. [postId] means re-fetch whenever postId changes. The optional chain post?.title handles the moment between loading=false and post being set."
    },
    {
      type:"Multiple Choice", pts:15,
      q:"Why can't you make a useEffect callback directly async?",
      code:`// This is wrong:
useEffect(async () => {
  const data = await fetchData();
  setData(data);
}, []);`,
      kind:"mc",
      opts:["async/await isn't supported in React","An async function returns a Promise, but useEffect expects a cleanup function or undefined","useEffect doesn't support Promises","This actually works fine"],
      correct:1,
      hint:"What does an async function always return? What does useEffect expect as a return value?",
      explain:"async functions always return a Promise. useEffect expects its callback to return either nothing (undefined) or a cleanup function. Returning a Promise confuses React's cleanup logic. Fix: define async function inside and call it immediately."
    }
  ]
},
{
  title:"Day 5 — Events & Controlled Forms",
  sub:"Event handling · Controlled inputs · Form submission · Validation",
  concepts:[
    {
      name:"Event handling in React",
      desc:"Events in React use camelCase and pass functions, not strings. The event object is synthetic — a cross-browser wrapper around the native event.",
      code:`function Button() {
  // ✅ Correct:
  const handleClick = (e) => {
    e.preventDefault();      // prevent form submit/link follow
    e.stopPropagation();     // stop event bubbling to parents
    console.log(e.target);  // the element that was clicked
  };

  return (
    <button onClick={handleClick}>Click</button>
  );
}

// ❌ Wrong — calling the function immediately:
<button onClick={handleClick()}>  // runs on render, not click!

// ✅ Pass a reference or arrow wrapper:
<button onClick={handleClick}>          // reference
<button onClick={() => handleClick(id)}>// arrow wrapper (for args)`,
      tip:"The most common event mistake: onClick={handleClick()} runs the function during render. onClick={handleClick} passes the function as a reference to be called on click."
    },
    {
      name:"Controlled inputs — React owns the value",
      desc:"A controlled input has its value driven by React state. React is the single source of truth. Every keystroke updates state, which updates the input.",
      code:`function SearchBox() {
  const [query, setQuery] = useState('');

  return (
    <input
      type="text"
      value={query}              // React controls the value
      onChange={e => setQuery(e.target.value)} // update state on change
      placeholder="Search..."
    />
  );
}

// Uncontrolled (not recommended) — DOM owns the value:
const inputRef = useRef();
<input ref={inputRef} />
// Access value: inputRef.current.value (not in React state)`,
      tip:"'What is a controlled component?' An input whose value is controlled by React state via the value prop. 'Why use it?' React is the single source of truth — you always know the current value."
    },
    {
      name:"Form handling patterns",
      desc:"The standard React form pattern: controlled inputs, one onChange handler, preventDefault on submit, and submit validation.",
      code:`function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh!

    // Validate
    const newErrors = {};
    if (!form.email) newErrors.email = 'Email required';
    if (form.password.length < 6) newErrors.password = 'Min 6 chars';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Submit to API...
    login(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={form.email} onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}
      <button type="submit">Login</button>
    </form>
  );
}`,
      tip:"e.preventDefault() in handleSubmit is critical — without it, the form causes a page reload. This clears all React state. Always preventDefault in form submit handlers."
    }
  ],
  exercises:[
    {
      type:"Spot the Bug", pts:15,
      q:"This button handler has a bug — it runs immediately on render instead of on click.",
      code:`function App() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
      kind:"text",
      answer:["arrow","() =>","() => setCount","reference","function"],
      hint:"onClick expects a function reference, not a function call result. How do you pass a function that will be called with an argument?",
      sol:`<button onClick={() => setCount(count + 1)}>
  Count: {count}
</button>`,
      explain:"setCount(count + 1) runs immediately during render and returns undefined. onClick={undefined} means no handler. Wrap in an arrow: () => setCount(count + 1) passes a function that runs on click."
    },
    {
      type:"Write Code", pts:20,
      q:"Build a controlled search input that filters a list of names as you type. Case-insensitive.",
      code:`const names = ['Nikhil', 'Riya', 'Arjun', 'Priya', 'Rahul'];
// As user types, list updates live`,
      kind:"text",
      answer:["usestate","useState","filter","onchange","onChange","value={query","value={search"],
      hint:"useState for the query. Filter names array using query with .toLowerCase(). Render filtered array with .map(). Controlled input with value and onChange.",
      sol:`function SearchFilter() {
  const [query, setQuery] = useState('');

  const filtered = names.filter(n =>
    n.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filtered.map(name => <li key={name}>{name}</li>)}
      </ul>
    </div>
  );
}`,
      explain:"query drives both the input value and the filter. Every keystroke: setQuery → re-render → filtered recalculated → list updates. This is React's declarative model — you declare the relationship and React handles updates."
    },
    {
      type:"Multiple Choice", pts:10,
      q:"What does e.preventDefault() do in a form submit handler?",
      code:`const handleSubmit = (e) => {
  e.preventDefault();
  // handle form...
};
<form onSubmit={handleSubmit}>...`,
      kind:"mc",
      opts:["Prevents validation from running","Prevents the default browser behavior (page reload on submit)","Prevents React from re-rendering","Prevents the event from firing at all"],
      correct:1,
      hint:"What does a browser do when you submit an HTML form by default?",
      explain:"By default, submitting an HTML form reloads the page (sends a GET/POST request). This destroys all React state. e.preventDefault() stops this default behavior, letting React handle the submit via JavaScript."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a LoginForm with email and password fields. Validate on submit: email must not be empty, password must be 8+ chars. Show errors below each field.",
      code:`// On submit: validate → show errors OR call onLogin(form)
// Props: { onLogin }`,
      kind:"text",
      answer:["preventdefault","preventDefault","setErrors","seterrors","password.length","email"],
      hint:"State: { email:'', password:'' } and { email:'', password:'' } for errors. Validate in handleSubmit. If errors, setErrors and return early. Otherwise call onLogin(form).",
      sol:`function LoginForm({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.email) errs.email = 'Email is required';
    if (form.password.length < 8) errs.password = 'Min 8 characters';
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onLogin(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={form.email} onChange={handleChange} />
      {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
      <input name="password" type="password" value={form.password} onChange={handleChange} />
      {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
      <button type="submit">Login</button>
    </form>
  );
}`,
      explain:"The [e.target.name] trick lets one handler update any field. Object.keys(errs).length checks if there are any errors. Returning early from handleSubmit skips the onLogin call when validation fails."
    }
  ]
},
{
  title:"Day 6 — useRef & useContext",
  sub:"useRef · DOM refs · useContext · Global state",
  concepts:[
    {
      name:"useRef — persisting values without re-render",
      desc:"useRef creates a mutable object that persists across renders WITHOUT causing re-renders when changed. Used for DOM references and storing previous values.",
      code:`import { useRef } from 'react';

// Use 1: DOM references
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // direct DOM access
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

// Use 2: Store values without triggering re-render
function Timer() {
  const intervalRef = useRef(null); // stores interval ID

  const start = () => {
    intervalRef.current = setInterval(() => {
      // ...
    }, 1000);
  };

  const stop = () => clearInterval(intervalRef.current);
}`,
      tip:"'Difference between useRef and useState?' useRef changes don't cause re-renders. useState changes do. Use useRef for DOM access and for storing values that should NOT affect the UI."
    },
    {
      name:"useContext — sharing state without prop drilling",
      desc:"Context lets you pass data through the component tree without passing props at every level. Solves the prop drilling problem.",
      code:`import { createContext, useContext, useState } from 'react';

// 1. Create context:
const ThemeContext = createContext('light');

// 2. Provide it at a high level:
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />      {/* Page doesn't need theme prop */}
    </ThemeContext.Provider>
  );
}

// 3. Consume anywhere in the tree:
function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button className={theme} onClick={() => setTheme('dark')}>
      Toggle
    </button>
  );
}`,
      tip:"'When to use Context vs props?' For global data: auth user, theme, language — use Context. For local component data — use props. Context is not a state management solution for complex state (use Zustand or Redux for that)."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"When does changing useRef's .current value trigger a re-render?",
      code:`const countRef = useRef(0);
countRef.current = countRef.current + 1; // does this re-render?`,
      kind:"mc",
      opts:["Always","Never — useRef changes don't trigger re-renders","Only if the value is used in JSX","Only on the first change"],
      correct:1,
      hint:"This is the key difference between useRef and useState.",
      explain:"useRef changes NEVER trigger re-renders. This is the entire point — it's a mutable container that persists across renders without causing them. Use it for values that need to persist but don't affect the UI."
    },
    {
      type:"Write Code", pts:20,
      q:"Create a ThemeContext that provides 'theme' (light/dark) and a toggleTheme function. Write the Provider and a consumer Button component.",
      code:`// ThemeContext used by Button to toggle and display current theme
// App wraps everything in ThemeContext.Provider`,
      kind:"text",
      answer:["createcontext","createContext","usecontext","useContext","provider","Provider"],
      hint:"createContext() → Provider with value prop → useContext(ThemeContext) in consumer. The value object should contain both theme and toggleTheme.",
      sol:`const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
}`,
      explain:"createContext creates the context. Provider makes the value available to all descendants. useContext subscribes to the context — the component re-renders whenever the context value changes."
    },
    {
      type:"Write Code", pts:20,
      q:"Use useRef to auto-focus an email input when the component mounts.",
      code:`// On mount: email input should be focused automatically
// No user interaction needed`,
      kind:"text",
      answer:["useref","useRef","inputref","inputRef",".current.focus","current.focus"],
      hint:"useRef(null) for the input. Attach ref={inputRef} to the input element. In useEffect with [], call inputRef.current.focus().",
      sol:`function EmailForm() {
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus(); // focus on mount
  }, []);

  return <input ref={emailRef} type="email" placeholder="Enter email" />;
}`,
      explain:"useRef(null) creates a ref container. Attaching it to the input via ref={emailRef} fills emailRef.current with the DOM node after mount. useEffect([]) runs after mount, so calling .focus() then gives the input focus automatically."
    }
  ]
},
{
  title:"Day 7 — Custom Hooks",
  sub:"useMemo · useCallback · Custom hooks · Performance",
  concepts:[
    {
      name:"Custom Hooks — reusable logic",
      desc:"A custom hook is a function that starts with 'use' and calls other hooks. It lets you extract and reuse stateful logic across components.",
      code:`// Custom hook — extract the fetch logic:
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(e => { setError(e.message); setLoading(false); });
  }, [url]);

  return { data, loading, error };
}

// Now reuse it anywhere:
function UserProfile({ id }) {
  const { data: user, loading, error } = useFetch(\\\`/api/users/\${id}\\\`);
  if (loading) return <Spinner />;
  return <div>{user?.name}</div>;
}`,
      tip:"'What is a custom hook?' A function that starts with 'use' and reuses stateful logic. 'When to create one?' When you find yourself copying useEffect/useState logic into multiple components."
    },
    {
      name:"useMemo & useCallback — performance optimization",
      desc:"useMemo caches computed values. useCallback caches function references. Both only recompute when dependencies change.",
      code:`// useMemo — expensive computation cached between renders
const expensiveResult = useMemo(() => {
  return items.filter(i => i.active).sort((a,b) => b.score - a.score);
}, [items]); // only recalculates when items changes

// Without useMemo, this runs on EVERY render.
// With useMemo, it only runs when items changes.

// useCallback — stable function reference
const handleClick = useCallback((id) => {
  deleteItem(id);
}, [deleteItem]); // only recreated when deleteItem changes

// Why? When passing callbacks to child components wrapped in
// React.memo, a new function reference each render causes
// unnecessary re-renders of the child.`,
      tip:"'When to use useMemo?' For expensive calculations (filtering/sorting large arrays). NOT for every variable — premature optimization. Rule: first make it work, then profile, then optimize."
    }
  ],
  exercises:[
    {
      type:"Write Code", pts:25,
      q:"Write a useLocalStorage custom hook. It should work like useState but persist the value in localStorage.",
      code:`// const [name, setName] = useLocalStorage('username', '');
// Reads from localStorage on init, saves on every change`,
      kind:"text",
      answer:["function uselocal","function useLocal","const useLocal","() => {","json.parse","JSON.parse","localstorage","localStorage"],
      hint:"useState but initialize from localStorage. On change, JSON.stringify and save. Handle missing key with fallback to initialValue.",
      sol:`function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch { return initialValue; }
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}`,
      explain:"useState accepts a lazy initializer (function) — runs once on mount. JSON.parse converts the stored string back to a value. The custom setter updates both state and localStorage. try/catch handles corrupted localStorage data."
    },
    {
      type:"Multiple Choice", pts:10,
      q:"What is the naming rule for custom hooks and why does it matter?",
      code:`// Valid custom hook?
function fetchData() { const [d, setD] = useState(null); ... }

// Valid custom hook?
function useFetchData() { const [d, setD] = useState(null); ... }`,
      kind:"mc",
      opts:["Just a convention, no actual difference","The 'use' prefix is required — React's linter uses it to enforce hooks rules","Custom hooks must start with 'use' or they crash at runtime","Only matters for TypeScript"],
      correct:1,
      hint:"React's ESLint plugin has the 'rules of hooks' — hooks can only be called inside components or other hooks. How does the linter know something is a hook?",
      explain:"The 'use' prefix is how React's linter identifies hooks and enforces the rules of hooks. Without 'use', the linter won't know it's a hook and won't warn you if you call it conditionally or in a loop."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a useDebounce hook that returns a debounced version of a value after a delay.",
      code:`// const debouncedQuery = useDebounce(searchQuery, 500);
// Only triggers re-renders 500ms after searchQuery stops changing`,
      kind:"text",
      answer:["usestate","useState","useeffect","useEffect","settimeout","setTimeout","cleartimeout","clearTimeout"],
      hint:"useState to hold the debounced value. useEffect with [value, delay] deps: set a timer to update debounced value, clean up timer on change.",
      sol:`function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}`,
      explain:"Every time value changes, the effect re-runs. clearTimeout cancels the previous timer. Only when value stops changing for 'delay' ms does setTimeout fire and update the debounced value. Clean, reusable, under 10 lines."
    }
  ]
},
{
  title:"Day 8 — React Router Basics",
  sub:"Routes · Navigation · URL params · Nested routes",
  concepts:[
    {
      name:"React Router — client-side navigation",
      desc:"React Router lets you build single-page apps with multiple 'pages'. URL changes don't reload the page — React swaps components instead.",
      code:`import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>       {/* Like <a> but no page reload */}
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} /> {/* Dynamic */}
        <Route path="*" element={<NotFound />} />    {/* 404 catch-all */}
      </Routes>
    </BrowserRouter>
  );
}`,
      tip:"'What is client-side routing?' The browser URL changes but no HTTP request is made for a new page. React Router intercepts the navigation and swaps components based on the URL."
    },
    {
      name:"URL params and navigation hooks",
      desc:"useParams reads dynamic URL segments. useNavigate programmatically navigates. useLocation reads the current URL.",
      code:`// Reading URL params:
function UserProfile() {
  const { id } = useParams(); // from /users/:id
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(id).then(setUser);
  }, [id]);

  return <div>{user?.name}</div>;
}

// Programmatic navigation:
function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credentials);
    navigate('/dashboard'); // redirect after login
    // navigate(-1) — go back
    // navigate('/login', { replace: true }) — replace history
  };
}`,
      tip:"'How do you redirect after login?' useNavigate hook: const navigate = useNavigate(); then navigate('/dashboard'). The replace: true option replaces the current history entry so the user can't go 'back' to the login page."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"What is the difference between <Link> and <a> in React Router?",
      code:`<a href="/about">About</a>
<Link to="/about">About</Link>`,
      kind:"mc",
      opts:["They're identical","<Link> prevents page reload and uses client-side routing. <a> triggers a full page reload","<Link> is faster to type","<a> doesn't work in React"],
      correct:1,
      hint:"What happens when you click a regular HTML <a> tag?",
      explain:"<a href=...> triggers a full browser navigation — new HTTP request, page reload, all React state lost. <Link to=...> intercepts the click, updates the URL using the History API, and React Router swaps components without reloading."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a basic React Router setup with 3 routes: / (Home), /about (About), /users/:id (UserProfile). Include a nav with Links.",
      code:`// Use BrowserRouter, Routes, Route, Link, useParams
// UserProfile should display the id from the URL`,
      kind:"text",
      answer:["BrowserRouter","browserrouter","Routes","routes","Route","route","Link","link","useParams","useparams"],
      hint:"Wrap in BrowserRouter. Nav with Link tags. Routes with Route elements. UserProfile uses useParams() to get id.",
      sol:`function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

function UserProfile() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}`,
      explain:"BrowserRouter provides routing context. Routes renders only the first matching Route. :id is a URL parameter — useParams() reads it. The * catch-all handles unknown URLs."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a ProtectedRoute component that redirects to /login if user is not logged in.",
      code:`// Usage: <ProtectedRoute user={user}><Dashboard /></ProtectedRoute>
// If user is null/undefined → redirect to /login
// If user exists → render children`,
      kind:"text",
      answer:["navigate","Navigate","redirect","Redirect","children","!user","user =="],
      hint:"Import Navigate from react-router-dom. If !user, return <Navigate to='/login' replace />. Otherwise return children.",
      sol:`import { Navigate } from 'react-router-dom';

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Usage in routes:
<Route path="/dashboard" element={
  <ProtectedRoute user={currentUser}>
    <Dashboard />
  </ProtectedRoute>
} />`,
      explain:"Navigate is the declarative way to redirect. replace means it replaces the current history entry (user can't go 'back' to dashboard after logout). This pattern protects any route — just wrap the element."
    }
  ]
},
{
  title:"Day 9 — Data Fetching Patterns",
  sub:"API integration · Loading states · Error boundaries · React Query intro",
  concepts:[
    {
      name:"Complete data fetching pattern",
      desc:"The production-ready pattern for fetching data: abort controllers to cancel stale requests, proper error handling, and cleanup.",
      code:`function UserList() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('idle'); // idle|loading|error|success

  useEffect(() => {
    const controller = new AbortController(); // cancel stale requests

    setStatus('loading');
    fetch('/api/users', { signal: controller.signal })
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(data => { setUsers(data); setStatus('success'); })
      .catch(err => {
        if (err.name === 'AbortError') return; // ignore cancelled requests
        setStatus('error');
      });

    return () => controller.abort(); // cleanup: cancel on unmount
  }, []);

  if (status === 'loading') return <Spinner />;
  if (status === 'error')   return <ErrorMessage />;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}`,
      tip:"The AbortController pattern prevents the 'setState on unmounted component' warning. When the component unmounts (or the effect re-runs), abort() cancels the in-flight request."
    },
    {
      name:"Lifting state up — shared state between siblings",
      desc:"When two sibling components need to share state, lift it to their common parent. The parent owns the state and passes it down as props.",
      code:`// ❌ Problem: two siblings need to share state
function SearchBox() { const [q, setQ] = useState(''); } // isolated
function Results() { /* can't access q! */ }

// ✅ Solution: lift state to parent
function Page() {
  const [query, setQuery] = useState(''); // owned by parent

  return (
    <>
      <SearchBox query={query} onSearch={setQuery} />
      <Results query={query} />
    </>
  );
}

function SearchBox({ query, onSearch }) {
  return <input value={query} onChange={e => onSearch(e.target.value)} />;
}

function Results({ query }) {
  // Now has access to query
}`,
      tip:"'Where should state live?' As close to where it's used as possible, but high enough that all components that need it can access it. If two siblings need it, it belongs in their parent."
    }
  ],
  exercises:[
    {
      type:"Write Code", pts:25,
      q:"Build a complete product search: input that filters products fetched from an API. Show loading, error, and empty states.",
      code:`// Fetch from: https://dummyjson.com/products
// Filter by name as user types (client-side after fetch)
// States: loading, error, empty results, results`,
      kind:"text",
      answer:["usestate","useState","useeffect","useEffect","filter","onchange","onChange"],
      hint:"Fetch once in useEffect. Store all products. Filter locally using query state. Show 4 different UI states based on loading/error/filtered.length.",
      sol:`function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(r => r.json())
      .then(d => { setProducts(d.products); setLoading(false); })
      .catch(e => { setError(e.message); setLoading(false); });
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products..." />
      {filtered.length === 0 ? (
        <p>No results for \\"{\`query\`}\\"</p>
      ) : (
        <ul>{filtered.map(p => <li key={p.id}>{p.title}</li>)}</ul>
      )}
    </div>
  );
}`,
      explain:"Fetch once, filter client-side — efficient for small datasets. Four UI states cover all cases. The empty state is a common interview design question. This component combines: useEffect, useState, controlled input, conditional rendering, list rendering."
    },
    {
      type:"Multiple Choice", pts:15,
      q:"When should you lift state up?",
      code:`// Component A needs 'searchQuery'
// Component B needs 'searchQuery'
// A and B are siblings (same parent)`,
      kind:"mc",
      opts:["Never — use localStorage to share","Move the state to the common parent of A and B","Keep state in A and pass to B via props","Use global state always"],
      correct:1,
      hint:"React data flows down. For siblings to share state, who is the natural owner?",
      explain:"Lift state to the lowest common ancestor — the parent of both A and B. The parent owns the state and passes it down as props. This is React's composition model. Global state (Context/Redux) is only needed when the 'ancestor' is very far up the tree."
    }
  ]
},
{
  title:"Day 10 — Review & Interview Drills",
  sub:"All concepts together · Common interview questions · Real patterns",
  concepts:[
    {
      name:"The 10 most asked React interview questions",
      desc:"These come up in 90% of React interviews. Know every answer cold.",
      code:`// Q1: What is the Virtual DOM?
// Lightweight JS copy of real DOM. React diffs old vs new virtual DOM
// and only updates what changed. More efficient than full DOM updates.

// Q2: Controlled vs Uncontrolled components?
// Controlled: value driven by React state (value + onChange)
// Uncontrolled: DOM owns the value (useRef to read it)

// Q3: What are keys in lists?
// Unique identifiers React uses to track list items between renders.
// Without keys, React may re-render the entire list unnecessarily.

// Q4: What causes a re-render?
// 1. setState called (useState setter)
// 2. Parent re-renders (child re-renders by default)
// 3. Context value changes
// 4. Custom hook's state changes

// Q5: Difference between useEffect and useLayoutEffect?
// useEffect: runs async after paint (most cases)
// useLayoutEffect: runs sync before paint (DOM measurements)`,
      tip:"Prepare a 30-second answer for each of these. Practice saying them out loud. Interviewers don't want perfect sentences — they want to see you can articulate the concept clearly."
    },
    {
      name:"Common React patterns in one place",
      desc:"Patterns you'll use in every real project. Know when and why to use each.",
      code:`// 1. Loading/Error/Data pattern:
if (loading) return <Spinner />;
if (error) return <Error msg={error} />;
return <DataView data={data} />;

// 2. Controlled form with single handler:
const [form, setForm] = useState({});
const handleChange = e =>
  setForm(p => ({ ...p, [e.target.name]: e.target.value }));

// 3. List with key:
items.map(item => <Card key={item.id} {...item} />)

// 4. Context + custom hook pattern:
const useTheme = () => useContext(ThemeContext);
// Usage: const { theme, toggle } = useTheme();

// 5. Optional chaining in JSX:
<p>{user?.profile?.bio ?? 'No bio'}</p>

// 6. Conditional class:
<div className={\\\`card \${isActive ? 'active' : ''}\\\`}>`,
      tip:"In interviews, when you write React code, use these patterns naturally. They signal production experience. The spread on list items ({...item}) is a clean shorthand for passing all item properties as props."
    }
  ],
  exercises:[
    {
      type:"Write Code", pts:25,
      q:"Build a complete mini app: fetch GitHub user by username. Input field, submit button, show avatar + name + followers. Handle all states.",
      code:`// API: https://api.github.com/users/{username}
// Fields to show: avatar_url, name, followers
// States: idle (show prompt), loading, error, success`,
      kind:"text",
      answer:["usestate","useState","useeffect","useEffect","fetch","avatar","followers","onsubmit","onSubmit","handlesubmit","handleSubmit"],
      hint:"4 states: idle/loading/error/success. Search on form submit. useEffect is NOT needed here — fetch inside handleSubmit directly (user-triggered, not on mount).",
      sol:`function GitHubSearch() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(\\\`https://api.github.com/users/\${username}\\\`);
      if (!res.ok) throw new Error('User not found');
      const data = await res.json();
      setUser(data);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="GitHub username" />
        <button type="submit">Search</button>
      </form>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>User not found!</p>}
      {status === 'success' && (
        <div>
          <img src={user.avatar_url} width={80} alt={user.name} />
          <h2>{user.name}</h2>
          <p>Followers: {user.followers}</p>
        </div>
      )}
    </div>
  );
}`,
      explain:"User-triggered fetches go in event handlers, not useEffect. The status string ('idle'|'loading'|'error'|'success') is cleaner than multiple booleans. This pattern covers: forms, async handlers, conditional rendering, and API integration."
    },
    {
      type:"Multiple Choice", pts:15,
      q:"When does a child component re-render?",
      code:`function Parent() {
  const [count, setCount] = useState(0);
  return <Child name="Nikhil" />;  // name never changes
}

function Child({ name }) {
  return <p>{name}</p>;
}`,
      kind:"mc",
      opts:["Only when its own props change","Only when its own state changes","Every time the parent re-renders (by default)","Only when explicitly told to"],
      correct:2,
      hint:"By default, when a parent renders, what happens to all its children?",
      explain:"By default, when a parent re-renders, ALL its children re-render too — even if their props haven't changed. This is why React.memo exists: it wraps a component so it only re-renders when props actually change."
    },
    {
      type:"Write Code", pts:25,
      q:"Write a useWindowSize custom hook that returns { width, height } and updates on resize. Clean up the event listener.",
      code:`// const { width, height } = useWindowSize();
// Updates live as browser window is resized`,
      kind:"text",
      answer:["usestate","useState","useeffect","useEffect","addeventlistener","addEventListener","removeeventlistener","removeEventListener","resize"],
      hint:"useState for { width, height } initialized with window dimensions. useEffect: add resize listener, update state on resize, return cleanup that removes the listener.",
      sol:`function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}`,
      explain:"Initialize state with current window size. The resize handler updates state on every resize. Cleanup removes the listener to prevent memory leaks. [] means add listener once. This is a textbook custom hook — encapsulates stateful logic, reusable anywhere."
    },
    {
      type:"Multiple Choice", pts:15,
      q:"Your project's ResumeRocket uses Gemini API inside a useEffect. Which pattern is correct?",
      code:`// Option A:
useEffect(async () => {
  const result = await callGemini(prompt);
  setResult(result);
}, [prompt]);

// Option B:
useEffect(() => {
  async function generate() {
    const result = await callGemini(prompt);
    setResult(result);
  }
  generate();
}, [prompt]);`,
      kind:"mc",
      opts:["Option A — async effects are fine","Option B — define async inside and call it","Both work identically","Neither works — useEffect can't handle async"],
      correct:1,
      hint:"What does an async function return? What does useEffect expect as a return value?",
      explain:"Option A: async function returns a Promise. useEffect would receive a Promise as the 'cleanup', which breaks cleanup logic. Option B: the inner async function is called immediately, useEffect itself stays synchronous. This is the correct pattern you're using (or should be using) in ResumeRocket."
    }
  ]
}
];
