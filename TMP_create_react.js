const fs = require('fs');
const path = require('path');

const dataTS = `export type Concept = {
    name: string
    desc: string
    code: string
    tip: string
}
export type Exercise = {
    type: string
    pts: number
    q: string
    code: string
    kind: 'mc' | 'text'
    opts?: string[]
    correct?: number
    answer?: string[]
    hint: string
    sol: string
    explain: string
}
export type DayData = {
    title: string
    sub: string
    concepts: Concept[]
    exercises: Exercise[]
}

export const DAYS: DayData[] = [
{
  title:"Day 1 — What is React & JSX",
  sub:"React fundamentals · JSX · Components · Rendering",
  concepts:[
    {
      name:"What React is and why it exists",
      desc:"React is a JavaScript library for building UIs. It solves the problem of keeping the DOM in sync with data using a virtual DOM and a component-based model.",
      code:\`// Without React — messy manual DOM updates:
const div = document.getElementById('count');
let count = 0;
button.onclick = () => { count++; div.textContent = count; };

// With React — declare WHAT you want, React handles HOW:
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
// React re-renders automatically when state changes\`,
      tip:"Interviewers ask: 'What is the Virtual DOM?' Answer: React keeps a lightweight copy of the DOM in memory. When state changes, it diffs the virtual DOM vs the real DOM and only updates what changed — this is efficient."
    },
    {
      name:"JSX — JavaScript + HTML syntax",
      desc:"JSX lets you write HTML-like syntax inside JavaScript. It compiles to React.createElement() calls. Every JSX element is just a function call under the hood.",
      code:\`// JSX you write:
const element = <h1 className="title">Hello, {name}!</h1>;

// What it compiles to:
const element = React.createElement('h1', { className:'title' }, 'Hello, ', name, '!');

// JSX rules:
// 1. Return ONE root element (or use a Fragment <>...</>)
// 2. Use className, not class
// 3. Use camelCase for attributes: onClick, onChange, htmlFor
// 4. Self-close empty tags: <img /> <input />
// 5. Expressions in {}, not statements\`,
      tip:"Common interview question: 'Why className instead of class?' Because class is a reserved word in JavaScript. JSX is JS, so it uses className."
    },
    {
      name:"Components — the building blocks",
      desc:"A component is a function that returns JSX. Components can be reused, composed, and nested. They always start with a capital letter.",
      code:\`// Functional component — the ONLY way you should write them now
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
// Outputs two different greetings — same component, different data\`,
      tip:"'What is a component?' A function that takes props and returns JSX. 'Why capital letter?' React treats lowercase as HTML elements, uppercase as components."
    },
    {
      name:"Fragment — returning multiple elements",
      desc:"React components must return one root element. Fragments let you group elements without adding extra DOM nodes.",
      code:\`// BAD — two root elements, throws error:
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
))\`,
      tip:"Interviewers check if you know Fragments. 'Why not just use a div?' Extra div adds a real DOM node that can break CSS layouts (especially flexbox/grid parents)."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"What does JSX compile to?",
      code:\`const element = <h1 className="title">Hello</h1>;\`,
      kind:"mc",
      opts:["Plain HTML string","React.createElement('h1', { className:'title' }, 'Hello')","document.createElement('h1')","A new HTML element directly in the DOM"],
      correct:1,
      hint:"JSX is syntactic sugar. Babel transforms it into function calls.",
      sol:\`React.createElement('h1', { className: 'title' }, 'Hello')\`,
      explain:"JSX is not HTML — it's syntactic sugar for React.createElement(type, props, ...children). Babel transforms every JSX element into this function call before the browser ever sees it."
    },
    {
      type:"Spot the Bug", pts:10,
      q:"This JSX has 3 bugs. Find them all.",
      code:\`function Card() {
  return (
    <div class="card">
      <img src="photo.jpg">
      <p onclick={handleClick}>Click me</p>
    </div>
  );
}\`,
      kind:"text",
      answer:["classname","className","onclick","onClick","img","self-clos"],
      hint:"JSX uses camelCase attributes. HTML elements like img must be self-closing. The class attribute has a different name in JSX.",
      sol:\`function Card() {
  return (
    <div className="card">      {/* class → className */}
      <img src="photo.jpg" />   {/* must self-close */}
      <p onClick={handleClick}>Click me</p>  {/* onclick → onClick */}
    </div>
  );
}\`,
      explain:"(1) class → className (class is reserved in JS). (2) img must be self-closed: <img />. (3) onclick → onClick (camelCase in JSX). These 3 trip up everyone moving from HTML to React."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a UserCard component that takes name, role, and avatarUrl as props and renders them.",
      code:\`// <UserCard name="Nikhil" role="Developer" avatarUrl="pic.jpg" />
// Should render: an img, the name as h3, and role as p\`,
      kind:"text",
      answer:["function usercard","function UserCard","const UserCard","const usercard","props","{ name"],
      hint:"function UserCard({ name, role, avatarUrl }) { return (...JSX...) }. Destructure props in the parameter.",
      sol:\`function UserCard({ name, role, avatarUrl }) {
  return (
    <div className="user-card">
      <img src={avatarUrl} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}\`,
      explain:"Destructure props in the parameter — cleaner than (props) and then props.name. Alt text on img is important for accessibility. Expressions in JSX use {}, not ''."
    },
    {
      type:"Multiple Choice", pts:10,
      q:"Why must React components start with a capital letter?",
      code:\`// This renders an HTML div:
const x = <div />;

// This renders the MyComponent component:
const y = <MyComponent />;\`,
      kind:"mc",
      opts:["It's just a style convention","React uses the capital letter to know it's a component, not an HTML element","JavaScript class syntax requires capitals","JSX only supports capital letters"],
      correct:1,
      hint:"React processes JSX tags differently based on their case.",
      explain:"React checks the tag name at compile time. Lowercase → HTML element (passes tag as a string to createElement). Uppercase → component (passes the function/class itself to createElement). <div> vs <Div> are completely different."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"This component tries to return two elements. What's wrong and how do you fix it?",
      code:\`function Header() {
  return (
    <nav>Menu</nav>
    <header>Title</header>
  );
}\`,
      kind:"text",
      answer:["fragment","<>","Fragment","wrap","one root","single root"],
      hint:"React components must return a single root element. What can you use to group elements without adding a real DOM node?",
      sol:\`function Header() {
  return (
    <>
      <nav>Menu</nav>
      <header>Title</header>
    </>
  );
}\`,
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
      code:\`// Parent passes props
function App() {
  return <Button color="blue" size="large" onClick={handleClick} />;
}

// Child receives and uses them
function Button({ color, size, onClick }) {
  return (
    <button
      className={\\\`btn btn-\\\${color} btn-\\\${size}\\\`}
      onClick={onClick}
    >
      Click
    </button>
  );
}

// Default props — inline with destructuring
function Button({ color = 'gray', size = 'medium', onClick }) {
  // ...
}\`,
      tip:"'Can a child modify its own props?' NO — props are read-only. If a child needs to change a value, it must call a callback function passed from the parent. This is the one-directional data flow principle."
    },
    {
      name:"children prop — component composition",
      desc:"children is a special prop. Whatever you put between component tags becomes children. This is how you build layout components like Card, Modal, and Container.",
      code:\`// children lets you compose components like HTML elements
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
</Card>\`,
      tip:"Interviewers ask: 'What is the children prop?' It's whatever content is placed between a component's opening and closing tags. This enables powerful composition patterns."
    },
    {
      name:"Conditional rendering",
      desc:"Render different UI based on conditions. Use ternary for if/else, && for optional content. Never use if/else directly in JSX return.",
      code:\`function Profile({ user, isLoading }) {
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
}\`,
      tip:"'Why not use if/else inside JSX?' Because JSX is an expression, not a statement. if/else is a statement. Use ternary (expression) instead. This is asked constantly."
    },
    {
      name:"Rendering lists with .map()",
      desc:"Use .map() to render arrays of data. Every list item needs a unique key prop — React uses it to efficiently update only changed items.",
      code:\`const students = [
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
// ✅ Use a stable unique ID from your data\`,
      tip:"'Why do we need key?' React uses keys to identify which list items changed, added, or removed. Without keys, React may re-render the entire list instead of only what changed."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"A child component needs to update data in the parent. How?",
      code:\`// Parent has: const [name, setName] = useState('Nikhil');
// Child is: <Input value={name} />
// How does Input update name?\`,
      kind:"mc",
      opts:["Directly modify the name prop inside Input","Parent passes setName as a prop; Input calls it","Use a global variable","Child can't communicate with parent"],
      correct:1,
      hint:"Props flow down. To communicate UP, the parent passes a callback function as a prop.",
      explain:"Props are read-only. To update parent state from a child, the parent passes a function (like setName or an onChange handler) as a prop. The child calls this function. This is React's one-directional data flow."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a Layout component that accepts a title prop and children, and wraps children in a styled container.",
      code:\`// Usage:
// <Layout title="Dashboard">
//   <p>Some content here</p>
//   <Button>Click me</Button>
// </Layout>\`,
      kind:"text",
      answer:["children","{ title","{ children"],
      hint:"function Layout({ title, children }) — the children prop receives whatever is placed between the opening and closing tags.",
      sol:\`function Layout({ title, children }) {
  return (
    <div className="layout">
      <h1>{title}</h1>
      <main>{children}</main>
    </div>
  );
}\`,
      explain:"The children prop is whatever you put between <Layout> and </Layout>. This enables composition — Layout doesn't know or care what children are. This pattern is how Modal, Card, Page, and Container components work."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"This list renders correctly but React logs a warning. Why?",
      code:\`const items = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
  return (
    <ul>
      {items.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}\`,
      kind:"text",
      answer:["index","key","stable","id","unique"],
      hint:"No error, but using index as key is considered bad practice. What happens if items are reordered or items are deleted from the middle?",
      sol:\`// If the list is static and never reordered, index is acceptable.
// For dynamic lists, use a stable unique ID:
const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
];

{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}\`,
      explain:"Using index as key causes bugs when items are reordered or deleted from the middle. React matches old and new items by key — if keys shift with reordering, React may update the wrong DOM nodes. Always use stable unique IDs."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a UserBadge component. If user.isAdmin is true, show '(Admin)' in red next to the name. If user.verified, show a ✓ checkmark.",
      code:\`// user = { name: 'Nikhil', isAdmin: true, verified: true }
// Should render: Nikhil (Admin) ✓\`,
      kind:"text",
      answer:["isadmin","isAdmin","verified","&&","ternary","?"],
      hint:"Use && for the optional admin badge and verified checkmark — they're only shown when the value is true.",
      sol:\`function UserBadge({ user }) {
  return (
    <span>
      {user.name}
      {user.isAdmin && <span style={{ color: 'red' }}> (Admin)</span>}
      {user.verified && <span> ✓</span>}
    </span>
  );
}\`,
      explain:"&& is the 'optional rendering' pattern. If user.isAdmin is false/undefined, nothing renders. If true, the span renders. This is cleaner than a ternary when you only want to show something for the 'true' case."
    }
  ]
}
// WE TRUNCATED FOR MEMORY. 
];
`;

fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/data.ts'), dataTS);
