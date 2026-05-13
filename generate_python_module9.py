
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_9_lessons = [
    {
        "title": "9.1 SQL Basics for Python Developers",
        "emoji": "🗄️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand Tables, Rows, and Columns.</li>
                <li>Write Raw SQL: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.</li>
                <li>Understand Primary Keys (PK) and Foreign Keys (FK).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Big 4 Commands (CRUD)</h3>
            <div class="overflow-x-auto">
                <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-6">
                    <thead><tr class="bg-slate-800 text-white"><th class="p-2">Action</th><th class="p-2">SQL Command</th><th class="p-2">Example</th></tr></thead>
                    <tbody>
                        <tr class="border-b border-slate-700"><td class="p-2">Create</td><td class="p-2"><code>INSERT INTO</code></td><td class="p-2">INSERT INTO users (name) VALUES ('Alice')</td></tr>
                        <tr class="border-b border-slate-700"><td class="p-2">Read</td><td class="p-2"><code>SELECT</code></td><td class="p-2">SELECT * FROM users WHERE id = 1</td></tr>
                        <tr class="border-b border-slate-700"><td class="p-2">Update</td><td class="p-2"><code>UPDATE</code></td><td class="p-2">UPDATE users SET name = 'Bob' WHERE id = 1</td></tr>
                        <tr class="border-b border-slate-700"><td class="p-2">Delete</td><td class="p-2"><code>DELETE</code></td><td class="p-2">DELETE FROM users WHERE id = 1</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
-- Create Table
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT UNIQUE
);

-- Query
SELECT username FROM users WHERE email LIKE '%@gmail.com';
""", filename="basics.sql", lang="sql")}
        </div>
        """
    },
    {
        "title": "9.2 Python's Built-in sqlite3 Module",
        "emoji": "🐿️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Connect to SQLite databases without installing anything.</li>
                <li>Use Cursors to execute queries.</li>
                <li>Prevent SQL Injection using Parameterized Queries (`?`).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Security Alert: SQL Injection</h3>
            <p>
                <strong>BAD:</strong> <code>f"SELECT * FROM users WHERE name = '{{user_input}}'"</code><br>
                <strong>GOOD:</strong> <code>cursor.execute("SELECT * FROM users WHERE name = ?", (user_input,))</code>
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
import sqlite3

# Connect (or create if not exists)
conn = sqlite3.connect("my_database.db")
cursor = conn.cursor()

# Create Table
cursor.execute("CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, task TEXT)")

# Insert (Safe Way)
task_name = "Learn Python"
cursor.execute("INSERT INTO todos (task) VALUES (?)", (task_name,))
conn.commit() # Save changes

# Read
cursor.execute("SELECT * FROM todos")
rows = cursor.fetchall()
print(rows) # [(1, 'Learn Python')]

conn.close()
""", filename="sqlite_demo.py")}
        </div>
        """
    },
    {
        "title": "9.3 SQLAlchemy: Core vs ORM",
        "emoji": "🛠️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand what an ORM (Object Relational Mapper) is.</li>
                <li>Setup SQLAlchemy Engine.</li>
                <li>Difference between Core (SQL-like) and ORM (Class-based).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory</h3>
            <p>
                <strong>Raw SQL:</strong> You speak the Database's language.<br>
                <strong>ORM:</strong> You speak Python (Classes/Objects), libraries translate it to SQL.
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
from sqlalchemy import create_engine, text

# 1. Create Engine (The Connection Hub)
# echo=True prints the generated SQL (Great for debugging)
engine = create_engine("sqlite:///example.db", echo=True)

# 2. Connect and Run Raw SQL (Core style)
with engine.connect() as conn:
    conn.execute(text("CREATE TABLE IF NOT EXISTS test (x int, y int)"))
    conn.execute(text("INSERT INTO test (x, y) VALUES (:x, :y)"), [{"x": 1, "y": 2}])
    conn.commit()
""", filename="sqlalchemy_setup.py")}
        </div>
        """
    },
    {
        "title": "9.4 Defining Models (Declarative Base)",
        "emoji": "📝",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Define Database Tables as Python Classes (`DeclarativeBase`).</li>
                <li>Map columns to types (`Mapped`, `mapped_column` - SQLAlchemy 2.0).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Modern SQLAlchemy (2.0+)</h3>
            <p>We use type hints for column definitions. It's cleaner and IDE-friendly.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import String

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "users"
    
    # Primary Key
    id: Mapped[int] = mapped_column(primary_key=True)
    
    # Columns
    name: Mapped[str] = mapped_column(String(30))
    email: Mapped[str] = mapped_column(String)

    def __repr__(self):
        return f"<User(name={self.name})>"
""", filename="models.py")}
        </div>
        """
    },
    {
        "title": "9.5 CRUD Operations with ORM (Session)",
        "emoji": "🔄",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Use `Session` to manage transactions.</li>
                <li>`add()`, `commit()`, `refresh()`.</li>
                <li>Querying with `select()`.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
from sqlalchemy.orm import Session
from sqlalchemy import select
from models import User, Base, engine 

# Create Tables
Base.metadata.create_all(engine)

with Session(engine) as session:
    # 1. Create
    new_user = User(name="Alice", email="alice@test.com")
    session.add(new_user)
    session.commit()
    
    # 2. Read
    stmt = select(User).where(User.name == "Alice")
    user = session.scalars(stmt).first()
    print(user) # <User(name=Alice)>
    
    # 3. Update
    user.email = "new@test.com"
    session.commit() # Auto-detects changes
    
    # 4. Delete
    session.delete(user)
    session.commit()
""", filename="orm_crud.py")}
        </div>
        """
    },
    {
        "title": "9.6 Relationships (One-to-Many)",
        "emoji": "🔗",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Link Tables using `ForeignKey` and `relationship()`.</li>
                <li>Access related data easily (`user.posts`).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "user_account"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    
    # One User has Many Addresses
    addresses: Mapped[list["Address"]] = relationship(back_populates="user")

class Address(Base):
    __tablename__ = "address"
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str]
    user_id: Mapped[int] = mapped_column(ForeignKey("user_account.id"))
    
    # Link back to User
    user: Mapped["User"] = relationship(back_populates="addresses")

# Usage
# u1 = User(name="Bob")
# a1 = Address(email="bob@mail.com", user=u1) 
# session.add_all([u1, a1])
""", filename="relationships.py")}
        </div>
        """
    },
    {
        "title": "9.7 Async Database Access (AsyncSQL)",
        "emoji": "⚡",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Why do we need Async DBs in FastAPI? (Don't block the loop).</li>
                <li>Using `AsyncEngine` and `AsyncSession`.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
# pip install aiosqlite
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

# Note the 'sqlite+aiosqlite://' scheme
engine = create_async_engine("sqlite+aiosqlite:///async_db.db")
AsyncSessionLocal = async_sessionmaker(engine)

async def get_users():
    async with AsyncSessionLocal() as session:
        result = await session.execute(select(User))
        return result.scalars().all()
""", filename="async_db.py")}
        </div>
        """
    },
    {
        "title": "9.8 Mini Project: Todo Database CLI",
        "emoji": "🗂️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Goal</h3>
            <p>Create a Persistent Todo App using SQLAlchemy 2.0 and SQLite.</p>

            <h3 class="text-2xl font-bold text-white mb-4">Complete Solution</h3>
            {code_block("""
import sys
from sqlalchemy import create_engine, select
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, Session

# 1. Config
engine = create_engine("sqlite:///todos.db")
class Base(DeclarativeBase): pass

class Todo(Base):
    __tablename__ = "todos"
    id: Mapped[int] = mapped_column(primary_key=True)
    task: Mapped[str]
    done: Mapped[bool] = mapped_column(default=False)

Base.metadata.create_all(engine)

# 2. Logic
def add(task):
    with Session(engine) as s:
        s.add(Todo(task=task))
        s.commit()
    print("Added!")

def list_todos():
    with Session(engine) as s:
        todos = s.scalars(select(Todo)).all()
        for t in todos:
            status = "[x]" if t.done else "[ ]"
            print(f"{t.id}. {status} {t.task}")

def complete(todo_id):
    with Session(engine) as s:
        t = s.get(Todo, todo_id)
        if t:
            t.done = True
            s.commit()
            print("Completed!")

# 3. Simple CLI
if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "list"
    if cmd == "add": add(sys.argv[2])
    elif cmd == "done": complete(int(sys.argv[2]))
    else: list_todos()
""", filename="todo_cli.py")}
        </div>
        """
    }
]
