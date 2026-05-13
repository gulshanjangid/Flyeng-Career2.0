
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_8_lessons = [
    {
        "title": "8.1 FastAPI vs Flask vs Django: Why FastAPI?",
        "emoji": "⚡",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand the shift to Asynchronous Python (`async`/`await`).</li>
                <li>Compare Micro-frameworks (Flask/FastAPI) vs Batteries-included (Django).</li>
                <li>Why companies are migrating to FastAPI in 2026 (Performance + Typing).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Performance Comparison</h3>
            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-6">
                <thead><tr class="bg-slate-800 text-white"><th class="p-2">Framework</th><th class="p-2">Speed</th><th class="p-2">Type Safety</th><th class="p-2">Best For</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-2">Django</td><td class="p-2">Slow</td><td class="p-2">Optional</td><td class="p-2">Monoliths, CMS</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-2">Flask</td><td class="p-2">Medium</td><td class="p-2">No</td><td class="p-2">Simple scripts</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-2"><strong>FastAPI</strong></td><td class="p-2"><strong>Very High</strong></td><td class="p-2"><strong>Built-in</strong></td><td class="p-2"><strong>High-load APIs, AI</strong></td></tr>
                </tbody>
            </table>

            <h3 class="text-2xl font-bold text-white mb-4">3. Hello World</h3>
            {code_block("""
# pip install fastapi uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    # Automatically returns JSON
    return {"message": "Hello World"}
    
# Run with: uvicorn main:app --reload
""", filename="main.py")}
        </div>
        """
    },
    {
        "title": "8.2 Path Parameters & Type Validation",
        "emoji": "🛣️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Capture dynamic values from URL.</li>
                <li>Automatic data conversion (Str -> Int).</li>
                <li>Automatic Error Handling (422 Validation Error).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory</h3>
            <p>If you define `item_id: int`, FastAPI will try to convert the URL part to an integer. If I visit `/items/foo`, it fails strictly and safely.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
from fastapi import FastAPI

app = FastAPI()

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    # item_id is guaranteed to be an INT here
    return {"item_id": item_id, "square": item_id ** 2}

# Usage:
# GET /items/5   -> 200 OK {"item_id": 5, "square": 25}
# GET /items/foo -> 422 Unprocessable Entity
""", filename="path_params.py")}
        </div>
        """
    },
    {
        "title": "8.3 Query Parameters & Validation",
        "emoji": "❓",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Handle optional parameters `?skip=0&limit=10`.</li>
                <li>Set default values and optional types (`Optional[str]`).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
from fastapi import FastAPI
from typing import Optional

app = FastAPI()

# URL: /items/?skip=0&limit=10&q=python
@app.get("/items/")
async def read_items(
    skip: int = 0, 
    limit: int = 10, 
    q: Optional[str] = None
):
    return {
        "skip": skip, 
        "limit": limit, 
        "search_query": q
    }
""", filename="query_params.py")}
        </div>
        """
    },
    {
        "title": "8.4 Pydantic Models (Request Body)",
        "emoji": "📦",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Define Data Schemas using Pydantic `BaseModel`.</li>
                <li>Accept JSON bodies in POST requests.</li>
                <li>Automatic JSON validation and documentation (Swagger UI).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The "Shape" of Data</h3>
            <p>Pydantic enforces that the data sent by the frontend MATCHES the class definition. No more manual `if 'name' not in data` checks.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
from fastapi import FastAPI
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None

app = FastAPI()

@app.post("/items/")
async def create_item(item: Item):
    # 'item' is a python object here
    return {
        "name": item.name, 
        "price_with_tax": item.price * 1.2
    }
""", filename="request_body.py")}
        </div>
        """
    },
    {
        "title": "8.5 Response Models & Status Codes",
        "emoji": "📤",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Restrict what data is sent back (Hide passwords).</li>
                <li>Return proper HTTP codes (201 Created, 204 No Content).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
from fastapi import FastAPI, status
from pydantic import BaseModel

class UserIn(BaseModel):
    username: str
    password: str

class UserOut(BaseModel):
    username: str
    # password is NOT here

app = FastAPI()

@app.post("/users/", status_code=status.HTTP_201_CREATED, response_model=UserOut)
async def create_user(user: UserIn):
    # Save to DB...
    return user # Pydantic filters out 'password' automatically
""", filename="response_model.py")}
        </div>
        """
    },
    {
        "title": "8.6 Error Handling & Custom Exceptions",
        "emoji": "🚨",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Raise `HTTPException` to stop execution.</li>
                <li>Return consistent error JSON structure.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
from fastapi import FastAPI, HTTPException

app = FastAPI()

items = {"foo": "The Foo Item"}

@app.get("/items/{item_id}")
async def read_item(item_id: str):
    if item_id not in items:
        raise HTTPException(
            status_code=404, 
            detail="Item not found"
        )
    return {"item": items[item_id]}
""", filename="errors.py")}
        </div>
        """
    },
    {
        "title": "8.7 Dependency Injection (The Superpower)",
        "emoji": "💉",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Use `Depends` to share logic (Auth, DB connections).</li>
                <li>Create reusable components.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory</h3>
            <p>Instead of importing a global DB variable, you ask FastAPI to "Please give me a database session". This makes testing easier.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
from fastapi import Depends, FastAPI

def get_db():
    db = "Database Connection"
    try:
        yield db
    finally:
        print("DB Closed")

app = FastAPI()

@app.get("/users/")
async def read_users(db = Depends(get_db)):
    return {"db_status": db}
""", filename="dependencies.py")}
        </div>
        """
    },
    {
        "title": "8.8 Mini Project: Todo API (CRUD)",
        "emoji": "📝",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Goal</h3>
            <p>Build a full CRUD (Create, Read, Update, Delete) API for managing Todos using In-Memory storage.</p>

            <h3 class="text-2xl font-bold text-white mb-4">Complete Solution</h3>
            {code_block("""
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from uuid import uuid4

app = FastAPI()

# Model
class Todo(BaseModel):
    id: Optional[str] = None
    title: str
    completed: bool = False

# Database (In-Memory)
todos_db = []

@app.post("/todos/", response_model=Todo, status_code=201)
async def create_todo(todo: Todo):
    todo.id = str(uuid4())
    todos_db.append(todo)
    return todo

@app.get("/todos/", response_model=List[Todo])
async def get_todos():
    return todos_db

@app.get("/todos/{todo_id}", response_model=Todo)
async def get_todo(todo_id: str):
    for todo in todos_db:
        if todo.id == todo_id:
            return todo
    raise HTTPException(status_code=404, detail="Not found")

@app.delete("/todos/{todo_id}", status_code=204)
async def delete_todo(todo_id: str):
    for index, todo in enumerate(todos_db):
        if todo.id == todo_id:
            todos_db.pop(index)
            return
    raise HTTPException(status_code=404, detail="Not found")
""", filename="todo_api.py")}
        </div>
        """
    }
]
