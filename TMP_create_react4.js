const fs = require('fs');
const path = require('path');

const chunk = `
{
  title:"Day 9 — Data Fetching Patterns",
  sub:"API integration · Loading states · Error boundaries · React Query intro",
  concepts:[
    {
      name:"Complete data fetching pattern",
      desc:"The production-ready pattern for fetching data: abort controllers to cancel stale requests, proper error handling, and cleanup.",
      code:\`function UserList() {
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
}\`,
      tip:"The AbortController pattern prevents the 'setState on unmounted component' warning. When the component unmounts (or the effect re-runs), abort() cancels the in-flight request."
    },
    {
      name:"Lifting state up — shared state between siblings",
      desc:"When two sibling components need to share state, lift it to their common parent. The parent owns the state and passes it down as props.",
      code:\`// ❌ Problem: two siblings need to share state
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
}\`,
      tip:"'Where should state live?' As close to where it's used as possible, but high enough that all components that need it can access it. If two siblings need it, it belongs in their parent."
    }
  ],
  exercises:[
    {
      type:"Write Code", pts:25,
      q:"Build a complete product search: input that filters products fetched from an API. Show loading, error, and empty states.",
      code:\`// Fetch from: https://dummyjson.com/products
// Filter by name as user types (client-side after fetch)
// States: loading, error, empty results, results\`,
      kind:"text",
      answer:["usestate","useState","useeffect","useEffect","filter","onchange","onChange"],
      hint:"Fetch once in useEffect. Store all products. Filter locally using query state. Show 4 different UI states based on loading/error/filtered.length.",
      sol:\`function ProductSearch() {
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
}\`,
      explain:"Fetch once, filter client-side — efficient for small datasets. Four UI states cover all cases. The empty state is a common interview design question. This component combines: useEffect, useState, controlled input, conditional rendering, list rendering."
    },
    {
      type:"Multiple Choice", pts:15,
      q:"When should you lift state up?",
      code:\`// Component A needs 'searchQuery'
// Component B needs 'searchQuery'
// A and B are siblings (same parent)\`,
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
      code:\`// Q1: What is the Virtual DOM?
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
// useLayoutEffect: runs sync before paint (DOM measurements)\`,
      tip:"Prepare a 30-second answer for each of these. Practice saying them out loud. Interviewers don't want perfect sentences — they want to see you can articulate the concept clearly."
    },
    {
      name:"Common React patterns in one place",
      desc:"Patterns you'll use in every real project. Know when and why to use each.",
      code:\`// 1. Loading/Error/Data pattern:
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
<div className={\\\`card \\\${isActive ? 'active' : ''}\\\`}>\`,
      tip:"In interviews, when you write React code, use these patterns naturally. They signal production experience. The spread on list items ({...item}) is a clean shorthand for passing all item properties as props."
    }
  ],
  exercises:[
    {
      type:"Write Code", pts:25,
      q:"Build a complete mini app: fetch GitHub user by username. Input field, submit button, show avatar + name + followers. Handle all states.",
      code:\`// API: https://api.github.com/users/{username}
// Fields to show: avatar_url, name, followers
// States: idle (show prompt), loading, error, success\`,
      kind:"text",
      answer:["usestate","useState","useeffect","useEffect","fetch","avatar","followers","onsubmit","onSubmit","handlesubmit","handleSubmit"],
      hint:"4 states: idle/loading/error/success. Search on form submit. useEffect is NOT needed here — fetch inside handleSubmit directly (user-triggered, not on mount).",
      sol:\`function GitHubSearch() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(\\\`https://api.github.com/users/\\\${username}\\\`);
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
}\`,
      explain:"User-triggered fetches go in event handlers, not useEffect. The status string ('idle'|'loading'|'error'|'success') is cleaner than multiple booleans. This pattern covers: forms, async handlers, conditional rendering, and API integration."
    },
    {
      type:"Multiple Choice", pts:15,
      q:"When does a child component re-render?",
      code:\`function Parent() {
  const [count, setCount] = useState(0);
  return <Child name="Nikhil" />;  // name never changes
}

function Child({ name }) {
  return <p>{name}</p>;
}\`,
      kind:"mc",
      opts:["Only when its own props change","Only when its own state changes","Every time the parent re-renders (by default)","Only when explicitly told to"],
      correct:2,
      hint:"By default, when a parent renders, what happens to all its children?",
      explain:"By default, when a parent re-renders, ALL its children re-render too — even if their props haven't changed. This is why React.memo exists: it wraps a component so it only re-renders when props actually change."
    },
    {
      type:"Write Code", pts:25,
      q:"Write a useWindowSize custom hook that returns { width, height } and updates on resize. Clean up the event listener.",
      code:\`// const { width, height } = useWindowSize();
// Updates live as browser window is resized\`,
      kind:"text",
      answer:["usestate","useState","useeffect","useEffect","addeventlistener","addEventListener","removeeventlistener","removeEventListener","resize"],
      hint:"useState for { width, height } initialized with window dimensions. useEffect: add resize listener, update state on resize, return cleanup that removes the listener.",
      sol:\`function useWindowSize() {
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
}\`,
      explain:"Initialize state with current window size. The resize handler updates state on every resize. Cleanup removes the listener to prevent memory leaks. [] means add listener once. This is a textbook custom hook — encapsulates stateful logic, reusable anywhere."
    },
    {
      type:"Multiple Choice", pts:15,
      q:"Your project's ResumeRocket uses Gemini API inside a useEffect. Which pattern is correct?",
      code:\`// Option A:
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
}, [prompt]);\`,
      kind:"mc",
      opts:["Option A — async effects are fine","Option B — define async inside and call it","Both work identically","Neither works — useEffect can't handle async"],
      correct:1,
      hint:"What does an async function return? What does useEffect expect as a return value?",
      explain:"Option A: async function returns a Promise. useEffect would receive a Promise as the 'cleanup', which breaks cleanup logic. Option B: the inner async function is called immediately, useEffect itself stays synchronous. This is the correct pattern you're using (or should be using) in ResumeRocket."
    }
  ]
}
`;

const fileContents = fs.readFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/data.ts'), 'utf8');
const lines = fileContents.split('\\n');
lines.splice(lines.length - 2, 0, ',' + chunk);
fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/data.ts'), lines.join('\\n'));
