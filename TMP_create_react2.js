const fs = require('fs');
const path = require('path');

const chunk = `
{
  title:"Day 3 — useState Hook",
  sub:"useState · State updates · Immutability · Derived state",
  concepts:[
    {
      name:"useState — adding memory to components",
      desc:"useState lets a component remember values between renders. When state changes, React re-renders the component with the new value.",
      code:\`import { useState } from 'react';

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
}\`,
      tip:"'What triggers a re-render?' Calling the setter function from useState. React re-runs the component function with the new state value. Mutating state directly (count++ instead of setCount) does NOT trigger a re-render."
    },
    {
      name:"State updates are asynchronous",
      desc:"setState doesn't update the value immediately — it schedules a re-render. If you need to update based on the previous value, use the functional update form.",
      code:\`// BAD — stale state problem:
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
};\`,
      tip:"'When should you use the functional form of setState?' Whenever your new state depends on the previous state. setCount(prev => prev + 1) instead of setCount(count + 1). This avoids stale closure bugs."
    },
    {
      name:"State with objects — immutability",
      desc:"Never mutate state objects directly. Always create a new object. React uses reference equality to detect changes — same object reference = no re-render.",
      code:\`const [user, setUser] = useState({ name: 'Nikhil', age: 22 });

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
setItems(items.map(i => i === 'a' ? 'A' : i)); // update\`,
      tip:"'Why not mutate state directly?' React compares old and new state by reference. If you mutate the same object, React sees the same reference and skips re-rendering. Always create new objects/arrays."
    },
    {
      name:"Multiple state variables vs object state",
      desc:"Use multiple useState for independent values. Group related values into one state object. Know when to use each.",
      code:\`// Multiple independent state variables — simpler, preferred:
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
// ❌ Don't: const [count, setCount] = useState(items.length)\`,
      tip:"'What is derived state?' A value you can compute from existing state — don't store it as its own state variable, just compute it during render. Storing derived state leads to sync bugs."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"What happens when you call: user.name = 'Riya'; setUser(user);",
      code:\`const [user, setUser] = useState({ name: 'Nikhil', age: 22 });
user.name = 'Riya';
setUser(user);\`,
      kind:"mc",
      opts:["Component re-renders and shows 'Riya'","Component does NOT re-render — same object reference","Throws a TypeError","React auto-detects the mutation and re-renders"],
      correct:1,
      hint:"React compares old state and new state by reference. What is the reference when you mutate the same object?",
      explain:"Mutating the object and passing the same reference means React sees old === new (same object) and skips the re-render. Always create a new object: setUser({ ...user, name: 'Riya' })."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"This increment function is supposed to add 3 to count. It only adds 1. Fix it.",
      code:\`function Counter() {
  const [count, setCount] = useState(0);

  const addThree = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={addThree}>{count}</button>;
}\`,
      kind:"text",
      answer:["prev","prev =>","functional","setCount(prev"],
      hint:"All 3 setCount calls use the same stale 'count' from this render. Use the functional update form to get the latest value.",
      sol:\`const addThree = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
};\`,
      explain:"All 3 calls capture the same 'count' from the closure. React batches them and the net result is count+1. Using prev => prev+1, each update gets the actual latest value, so it correctly adds 3."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a toggle hook: a component with a button that toggles between 'Show' and 'Hide'. When 'Hide', show a secret message. When 'Show', hide it.",
      code:\`// Button text alternates: 'Hide' ↔ 'Show'
// When visible: <p>This is the secret!</p> is shown\`,
      kind:"text",
      answer:["usestate","useState","setvisible","setVisible","isvisible","isVisible","!isVisible","!isvisible"],
      hint:"const [isVisible, setIsVisible] = useState(false). Toggle: setIsVisible(prev => !prev). Conditional render with &&.",
      sol:\`function SecretToggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(prev => !prev)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>This is the secret!</p>}
    </div>
  );
}\`,
      explain:"useState(false) starts hidden. setIsVisible(prev => !prev) toggles. The button text uses a ternary. The secret uses &&. This small component tests: useState, functional update, conditional rendering, event handling."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a form with name and email fields. Store both in ONE state object. Show a live preview below the form.",
      code:\`// One useState object with { name: '', email: '' }
// Live preview: "Name: Nikhil | Email: n@example.com"\`,
      kind:"text",
      answer:["...form","...prev","setform","setForm","onchange","onChange"],
      hint:"useState({ name:'', email:'' }). On change: setForm(prev => ({ ...prev, [e.target.name]: e.target.value })). Use name attribute on inputs to target the right field.",
      sol:\`function ContactForm() {
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
}\`,
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
      code:\`import { useEffect } from 'react';

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
}\`,
      tip:"The 3 forms of useEffect: no deps (every render), [] (once on mount), [deps] (when deps change). Interviewers ALWAYS ask about the dependency array."
    },
    {
      name:"Fetching data in useEffect",
      desc:"The most common useEffect pattern. Fetch data after mount, handle loading/error states, and display the result.",
      code:\`function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(\\\`/api/users/\\\${userId}\\\`)
      .then(r => r.json())
      .then(data => { setUser(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [userId]); // refetch when userId changes

  if (loading) return <Spinner />;
  if (error)   return <Error message={error} />;
  return <div>{user.name}</div>;
}\`,
      tip:"'Why can't useEffect's callback be async?' An async function returns a Promise, but useEffect expects either nothing or a cleanup function. Workaround: define async function inside and call it."
    },
    {
      name:"Cleanup — preventing memory leaks",
      desc:"Return a cleanup function from useEffect. React calls it before the next effect runs and before the component unmounts. Prevents memory leaks from subscriptions and timers.",
      code:\`useEffect(() => {
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
}, []);\`,
      tip:"'What happens without cleanup?' Memory leaks. If a component unmounts while a timer is running, it'll still try to call setState on an unmounted component. The cleanup function prevents this."
    },
    {
      name:"Common useEffect mistakes",
      desc:"Missing dependencies, infinite loops, and async patterns. Know these before your interview.",
      code:\`// ❌ INFINITE LOOP — object created fresh each render
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
}, []);\`,
      tip:"Infinite loop from useEffect is one of the most common React bugs. Cause: a dependency that gets a new reference every render (objects, arrays, functions defined in render body)."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"How do you run a useEffect ONLY once, after the first render?",
      code:\`useEffect(() => {
  fetchInitialData();
  // what goes here?
});\`,
      kind:"mc",
      opts:["Don't pass a second argument","Pass an empty array []","Pass null","Pass [false]"],
      correct:1,
      hint:"The dependency array controls when the effect re-runs. What array value means 'no dependencies, never re-run'?",
      explain:"[] means 'this effect has no dependencies'. React runs it once after the first render and never again. No second argument means 'run after every render'. [dep] means 'run when dep changes'."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"This component creates a memory leak. Find it.",
      code:\`function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}\`,
      kind:"text",
      answer:["return","cleanup","clearInterval","clearinterval"],
      hint:"What happens to the interval when this component unmounts from the DOM?",
      sol:\`useEffect(() => {
  const id = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(id); // cleanup!
}, []);\`,
      explain:"Without cleanup, the interval keeps running even after Clock unmounts. It tries to call setTime on an unmounted component — React warns about this and it's a memory leak. Always return a cleanup function for timers and subscriptions."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a component that fetches a post from jsonplaceholder when a postId prop changes. Show loading, error, and data states.",
      code:\`// URL: https://jsonplaceholder.typicode.com/posts/{postId}
// Props: { postId }
// States needed: post, loading, error\`,
      kind:"text",
      answer:["useeffect","useEffect","setloading","setLoading","postid","postId","[postId]","[postid]"],
      hint:"useState for post/loading/error. useEffect with [postId] dep. fetch inside effect. Handle .ok check. try/catch or .catch().",
      sol:\`function Post({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(\\\`https://jsonplaceholder.typicode.com/posts/\\\${postId}\\\`)
      .then(r => { if (!r.ok) throw new Error('Failed'); return r.json(); })
      .then(data => { setPost(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [postId]);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error: {error}</p>;
  return <h2>{post?.title}</h2>;
}\`,
      explain:"setLoading(true) and setError(null) at the top of the effect resets state for each new fetch. [postId] means re-fetch whenever postId changes. The optional chain post?.title handles the moment between loading=false and post being set."
    },
    {
      type:"Multiple Choice", pts:15,
      q:"Why can't you make a useEffect callback directly async?",
      code:\`// This is wrong:
useEffect(async () => {
  const data = await fetchData();
  setData(data);
}, []);\`,
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
      code:\`function Button() {
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
<button onClick={() => handleClick(id)}>// arrow wrapper (for args)\`,
      tip:"The most common event mistake: onClick={handleClick()} runs the function during render. onClick={handleClick} passes the function as a reference to be called on click."
    },
    {
      name:"Controlled inputs — React owns the value",
      desc:"A controlled input has its value driven by React state. React is the single source of truth. Every keystroke updates state, which updates the input.",
      code:\`function SearchBox() {
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
// Access value: inputRef.current.value (not in React state)\`,
      tip:"'What is a controlled component?' An input whose value is controlled by React state via the value prop. 'Why use it?' React is the single source of truth — you always know the current value."
    },
    {
      name:"Form handling patterns",
      desc:"The standard React form pattern: controlled inputs, one onChange handler, preventDefault on submit, and submit validation.",
      code:\`function LoginForm() {
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
}\`,
      tip:"e.preventDefault() in handleSubmit is critical — without it, the form causes a page reload. This clears all React state. Always preventDefault in form submit handlers."
    }
  ],
  exercises:[
    {
      type:"Spot the Bug", pts:15,
      q:"This button handler has a bug — it runs immediately on render instead of on click.",
      code:\`function App() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={setCount(count + 1)}>
      Count: {count}
    </button>
  );
}\`,
      kind:"text",
      answer:["arrow","() =>","() => setCount","reference","function"],
      hint:"onClick expects a function reference, not a function call result. How do you pass a function that will be called with an argument?",
      sol:\`<button onClick={() => setCount(count + 1)}>
  Count: {count}
</button>\`,
      explain:"setCount(count + 1) runs immediately during render and returns undefined. onClick={undefined} means no handler. Wrap in an arrow: () => setCount(count + 1) passes a function that runs on click."
    },
    {
      type:"Write Code", pts:20,
      q:"Build a controlled search input that filters a list of names as you type. Case-insensitive.",
      code:\`const names = ['Nikhil', 'Riya', 'Arjun', 'Priya', 'Rahul'];
// As user types, list updates live\`,
      kind:"text",
      answer:["usestate","useState","filter","onchange","onChange","value={query","value={search"],
      hint:"useState for the query. Filter names array using query with .toLowerCase(). Render filtered array with .map(). Controlled input with value and onChange.",
      sol:\`function SearchFilter() {
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
}\`,
      explain:"query drives both the input value and the filter. Every keystroke: setQuery → re-render → filtered recalculated → list updates. This is React's declarative model — you declare the relationship and React handles updates."
    },
    {
      type:"Multiple Choice", pts:10,
      q:"What does e.preventDefault() do in a form submit handler?",
      code:\`const handleSubmit = (e) => {
  e.preventDefault();
  // handle form...
};
<form onSubmit={handleSubmit}>...\`,
      kind:"mc",
      opts:["Prevents validation from running","Prevents the default browser behavior (page reload on submit)","Prevents React from re-rendering","Prevents the event from firing at all"],
      correct:1,
      hint:"What does a browser do when you submit an HTML form by default?",
      explain:"By default, submitting an HTML form reloads the page (sends a GET/POST request). This destroys all React state. e.preventDefault() stops this default behavior, letting React handle the submit via JavaScript."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a LoginForm with email and password fields. Validate on submit: email must not be empty, password must be 8+ chars. Show errors below each field.",
      code:\`// On submit: validate → show errors OR call onLogin(form)
// Props: { onLogin }\`,
      kind:"text",
      answer:["preventdefault","preventDefault","setErrors","seterrors","password.length","email"],
      hint:"State: { email:'', password:'' } and { email:'', password:'' } for errors. Validate in handleSubmit. If errors, setErrors and return early. Otherwise call onLogin(form).",
      sol:\`function LoginForm({ onLogin }) {
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
}\`,
      explain:"The [e.target.name] trick lets one handler update any field. Object.keys(errs).length checks if there are any errors. Returning early from handleSubmit skips the onLogin call when validation fails."
    }
  ]
}
`;

const fileContents = fs.readFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/data.ts'), 'utf8');
const lines = fileContents.split('\\n');
lines.splice(lines.length - 2, 0, ',' + chunk);
fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/data.ts'), lines.join('\\n'));
