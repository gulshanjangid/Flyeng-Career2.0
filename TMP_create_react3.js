const fs = require('fs');
const path = require('path');

const chunk = `
{
  title:"Day 6 — useRef & useContext",
  sub:"useRef · DOM refs · useContext · Global state",
  concepts:[
    {
      name:"useRef — persisting values without re-render",
      desc:"useRef creates a mutable object that persists across renders WITHOUT causing re-renders when changed. Used for DOM references and storing previous values.",
      code:\`import { useRef } from 'react';

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
}\`,
      tip:"'Difference between useRef and useState?' useRef changes don't cause re-renders. useState changes do. Use useRef for DOM access and for storing values that should NOT affect the UI."
    },
    {
      name:"useContext — sharing state without prop drilling",
      desc:"Context lets you pass data through the component tree without passing props at every level. Solves the prop drilling problem.",
      code:\`import { createContext, useContext, useState } from 'react';

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
}\`,
      tip:"'When to use Context vs props?' For global data: auth user, theme, language — use Context. For local component data — use props. Context is not a state management solution for complex state (use Zustand or Redux for that)."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"When does changing useRef's .current value trigger a re-render?",
      code:\`const countRef = useRef(0);
countRef.current = countRef.current + 1; // does this re-render?\`,
      kind:"mc",
      opts:["Always","Never — useRef changes don't trigger re-renders","Only if the value is used in JSX","Only on the first change"],
      correct:1,
      hint:"This is the key difference between useRef and useState.",
      explain:"useRef changes NEVER trigger re-renders. This is the entire point — it's a mutable container that persists across renders without causing them. Use it for values that need to persist but don't affect the UI."
    },
    {
      type:"Write Code", pts:20,
      q:"Create a ThemeContext that provides 'theme' (light/dark) and a toggleTheme function. Write the Provider and a consumer Button component.",
      code:\`// ThemeContext used by Button to toggle and display current theme
// App wraps everything in ThemeContext.Provider\`,
      kind:"text",
      answer:["createcontext","createContext","usecontext","useContext","provider","Provider"],
      hint:"createContext() → Provider with value prop → useContext(ThemeContext) in consumer. The value object should contain both theme and toggleTheme.",
      sol:\`const ThemeContext = createContext(null);

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
}\`,
      explain:"createContext creates the context. Provider makes the value available to all descendants. useContext subscribes to the context — the component re-renders whenever the context value changes."
    },
    {
      type:"Write Code", pts:20,
      q:"Use useRef to auto-focus an email input when the component mounts.",
      code:\`// On mount: email input should be focused automatically
// No user interaction needed\`,
      kind:"text",
      answer:["useref","useRef","inputref","inputRef",".current.focus","current.focus"],
      hint:"useRef(null) for the input. Attach ref={inputRef} to the input element. In useEffect with [], call inputRef.current.focus().",
      sol:\`function EmailForm() {
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus(); // focus on mount
  }, []);

  return <input ref={emailRef} type="email" placeholder="Enter email" />;
}\`,
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
      code:\`// Custom hook — extract the fetch logic:
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
  const { data: user, loading, error } = useFetch(\\\`/api/users/\\\${id}\\\`);
  if (loading) return <Spinner />;
  return <div>{user?.name}</div>;
}\`,
      tip:"'What is a custom hook?' A function that starts with 'use' and reuses stateful logic. 'When to create one?' When you find yourself copying useEffect/useState logic into multiple components."
    },
    {
      name:"useMemo & useCallback — performance optimization",
      desc:"useMemo caches computed values. useCallback caches function references. Both only recompute when dependencies change.",
      code:\`// useMemo — expensive computation cached between renders
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
// unnecessary re-renders of the child.\`,
      tip:"'When to use useMemo?' For expensive calculations (filtering/sorting large arrays). NOT for every variable — premature optimization. Rule: first make it work, then profile, then optimize."
    }
  ],
  exercises:[
    {
      type:"Write Code", pts:25,
      q:"Write a useLocalStorage custom hook. It should work like useState but persist the value in localStorage.",
      code:\`// const [name, setName] = useLocalStorage('username', '');
// Reads from localStorage on init, saves on every change\`,
      kind:"text",
      answer:["function uselocal","function useLocal","const useLocal","() => {","json.parse","JSON.parse","localstorage","localStorage"],
      hint:"useState but initialize from localStorage. On change, JSON.stringify and save. Handle missing key with fallback to initialValue.",
      sol:\`function useLocalStorage(key, initialValue) {
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
}\`,
      explain:"useState accepts a lazy initializer (function) — runs once on mount. JSON.parse converts the stored string back to a value. The custom setter updates both state and localStorage. try/catch handles corrupted localStorage data."
    },
    {
      type:"Multiple Choice", pts:10,
      q:"What is the naming rule for custom hooks and why does it matter?",
      code:\`// Valid custom hook?
function fetchData() { const [d, setD] = useState(null); ... }

// Valid custom hook?
function useFetchData() { const [d, setD] = useState(null); ... }\`,
      kind:"mc",
      opts:["Just a convention, no actual difference","The 'use' prefix is required — React's linter uses it to enforce hooks rules","Custom hooks must start with 'use' or they crash at runtime","Only matters for TypeScript"],
      correct:1,
      hint:"React's ESLint plugin has the 'rules of hooks' — hooks can only be called inside components or other hooks. How does the linter know something is a hook?",
      explain:"The 'use' prefix is how React's linter identifies hooks and enforces the rules of hooks. Without 'use', the linter won't know it's a hook and won't warn you if you call it conditionally or in a loop."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a useDebounce hook that returns a debounced version of a value after a delay.",
      code:\`// const debouncedQuery = useDebounce(searchQuery, 500);
// Only triggers re-renders 500ms after searchQuery stops changing\`,
      kind:"text",
      answer:["usestate","useState","useeffect","useEffect","settimeout","setTimeout","cleartimeout","clearTimeout"],
      hint:"useState to hold the debounced value. useEffect with [value, delay] deps: set a timer to update debounced value, clean up timer on change.",
      sol:\`function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}\`,
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
      code:\`import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

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
}\`,
      tip:"'What is client-side routing?' The browser URL changes but no HTTP request is made for a new page. React Router intercepts the navigation and swaps components based on the URL."
    },
    {
      name:"URL params and navigation hooks",
      desc:"useParams reads dynamic URL segments. useNavigate programmatically navigates. useLocation reads the current URL.",
      code:\`// Reading URL params:
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
}\`,
      tip:"'How do you redirect after login?' useNavigate hook: const navigate = useNavigate(); then navigate('/dashboard'). The replace: true option replaces the current history entry so the user can't go 'back' to the login page."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"What is the difference between <Link> and <a> in React Router?",
      code:\`<a href="/about">About</a>
<Link to="/about">About</Link>\`,
      kind:"mc",
      opts:["They're identical","<Link> prevents page reload and uses client-side routing. <a> triggers a full page reload","<Link> is faster to type","<a> doesn't work in React"],
      correct:1,
      hint:"What happens when you click a regular HTML <a> tag?",
      explain:"<a href=...> triggers a full browser navigation — new HTTP request, page reload, all React state lost. <Link to=...> intercepts the click, updates the URL using the History API, and React Router swaps components without reloading."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a basic React Router setup with 3 routes: / (Home), /about (About), /users/:id (UserProfile). Include a nav with Links.",
      code:\`// Use BrowserRouter, Routes, Route, Link, useParams
// UserProfile should display the id from the URL\`,
      kind:"text",
      answer:["BrowserRouter","browserrouter","Routes","routes","Route","route","Link","link","useParams","useparams"],
      hint:"Wrap in BrowserRouter. Nav with Link tags. Routes with Route elements. UserProfile uses useParams() to get id.",
      sol:\`function App() {
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
}\`,
      explain:"BrowserRouter provides routing context. Routes renders only the first matching Route. :id is a URL parameter — useParams() reads it. The * catch-all handles unknown URLs."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a ProtectedRoute component that redirects to /login if user is not logged in.",
      code:\`// Usage: <ProtectedRoute user={user}><Dashboard /></ProtectedRoute>
// If user is null/undefined → redirect to /login
// If user exists → render children\`,
      kind:"text",
      answer:["navigate","Navigate","redirect","Redirect","children","!user","user =="],
      hint:"Import Navigate from react-router-dom. If !user, return <Navigate to='/login' replace />. Otherwise return children.",
      sol:\`import { Navigate } from 'react-router-dom';

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
} />\`,
      explain:"Navigate is the declarative way to redirect. replace means it replaces the current history entry (user can't go 'back' to dashboard after logout). This pattern protects any route — just wrap the element."
    }
  ]
}
`;

const fileContents = fs.readFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/data.ts'), 'utf8');
const lines = fileContents.split('\\n');
lines.splice(lines.length - 2, 0, ',' + chunk);
fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/data.ts'), lines.join('\\n'));
