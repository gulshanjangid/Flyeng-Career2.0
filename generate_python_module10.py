
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_10_lessons = [
    {
        "title": "10.1 The Importance of Automated Testing",
        "emoji": "🛡️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand "Confidence Code": Why tests let you refactor safely.</li>
                <li>Learn the Testing Pyramid: Unit vs Integration vs E2E.</li>
                <li>Write your first assertion.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The "It Works on My Machine" Syndrome</h3>
            <p>Manual testing is slow, error-prone, and boring. Automated tests run in milliseconds and never forget to check an edge case.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
def add(a, b):
    return a + b

# Manual Test (Bad)
print(add(2, 3)) # User has to look and verify '5'

# Automated Test (Good)
# If this passes, silence. If it fails, CRASH.
assert add(2, 3) == 5, "Math is broken!"
assert add(-1, 1) == 0
print("All tests passed!") 
""", filename="first_test.py")}
        </div>
        """
    },
    {
        "title": "10.2 Unit Testing with Pytest",
        "emoji": "🧪",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Install and run `pytest`.</li>
                <li>Write test functions (`test_...`).</li>
                <li>Understand Test Discovery.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Why Not 'unittest'?</h3>
            <p>Python's built-in `unittest` requires Classes. `pytest` uses simple functions and powerful asserts. It is the industry standard in 2026.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
# app_code.py
def divide(a, b):
    if b == 0: raise ValueError("Cannot divide by zero")
    return a / b

# test_app.py
import pytest
from app_code import divide

def test_divide_normal():
    assert divide(10, 2) == 5

def test_divide_zero_raises_error():
    # Assert that a specific Error is raised
    with pytest.raises(ValueError):
        divide(10, 0)

# Run in terminal: pytest
""", filename="test_app.py")}
        </div>
        """
    },
    {
        "title": "10.3 Test Fixtures & Setup",
        "emoji": "🏗️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Use `@pytest.fixture` to prepare data/connections.</li>
                <li>Share setup code across multiple tests.</li>
                <li>Understand setup/teardown (yield fixtures).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
import pytest

class Database:
    def connect(self): print("Connected DB")
    def close(self): print("Closed DB")

# Fixture: Runs BEFORE test, yields data, runs AFTER test
@pytest.fixture
def db_conn():
    db = Database()
    db.connect()
    yield db # Test runs here
    db.close() # Teardown

def test_database_insert(db_conn):
    # db_conn is automatically passed
    assert db_conn is not None
""", filename="fixtures.py")}
        </div>
        """
    },
    {
        "title": "10.4 Mocking External Dependencies",
        "emoji": "🎭",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Why Mock? (Don't hit real APIs/Credit Cards in tests).</li>
                <li>Use `unittest.mock.MagicMock`.</li>
                <li>Patching functions with `@patch`.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory</h3>
            <p>A "Mock" is a fake object that tracks how it was called. It lies and says "I worked!" without actually doing anything.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
from unittest.mock import MagicMock

# 1. Simple Mock
fake_api = MagicMock()
fake_api.get_user.return_value = {"name": "Alice"}

print(fake_api.get_user(1)) # {'name': 'Alice'}
fake_api.get_user.assert_called_with(1) # Verified!

# 2. Patching a real import
# Assume 'payment_gateway.charge' calls a bank
from unittest.mock import patch
import payment_gateway

@patch("payment_gateway.charge")
def test_pay(mock_charge):
    mock_charge.return_value = True
    
    # Code that calls payment_gateway.charge()
    result = payment_gateway.charge("123", 100)
    
    assert result is True
    # Ensure real bank was NOT charged
    mock_charge.assert_called_once()
""", filename="mocking_demo.py")}
        </div>
        """
    },
    {
        "title": "10.5 Debugging Like a Pro (PDB & IDE)",
        "emoji": "🐛",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Stop using `print()` for everything.</li>
                <li>Use `breakpoint()` (Python 3.7+).</li>
                <li>Inspect variables, step over/into code.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Breakpoint</h3>
            <p>
                When code hits `breakpoint()`, execution pauses. You get a terminal (pdb) to type variable names and see their values AT THAT MOMENT.
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
def complicated_math(x):
    y = x * 2
    z = y + 5
    # Debug here
    breakpoint() 
    return z / 0 # Error

measure = complicated_math(10)

# Commands in PDB:
# n (next line)
# c (continue)
# p variable (print variable)
# q (quit)
""", filename="debug_session.py")}
        </div>
        """
    },
    {
        "title": "10.6 Linting & Formatting (Ruff & Black)",
        "emoji": "✨",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Difference between Linter (Errors) and Formatter (Style).</li>
                <li>Using `Ruff` (The ultra-fast modern standard).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Before vs After</h3>
            {code_block("""
# Before (Ugly & Buggy)
import sys  # Unused import
def fn( x ): return x+1 # Bad spacing

# After (Ruff/Black)
def fn(x):
    return x + 1
""", filename="style.py")}
        </div>
        """
    },
    {
        "title": "10.7 Logging Strategies",
        "emoji": "📜",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Why `print()` is bad for production (Can't filter/save).</li>
                <li>Using standard `logging` module.</li>
                <li>Levels: DEBUG, INFO, WARNING, ERROR, CRITICAL.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
import logging

# Config basics
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

logging.debug("Detailed variable dump... (Hidden)")
logging.info("Server started on port 8000")
logging.warning("Disk space low")
logging.error("Database connection failed!")
""", filename="logger.py")}
        </div>
        """
    },
    {
        "title": "10.8 Mini Project: TDD (Test Driven Development)",
        "emoji": "🔁",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Goal</h3>
            <p>Write tests FIRST for a 'Bank Account' class, then implement the code to make them pass.</p>

            <h3 class="text-2xl font-bold text-white mb-4">1. The Test (Write This First)</h3>
            {code_block("""
import pytest
from bank import Account

def test_deposit():
    acct = Account(balance=100)
    acct.deposit(50)
    assert acct.balance == 150

def test_withdraw_error():
    acct = Account(balance=50)
    with pytest.raises(ValueError):
        acct.withdraw(100) # Should fail
""", filename="test_bank.py")}

            <h3 class="text-2xl font-bold text-white mb-4">2. The Implementation (To Pass Tests)</h3>
            {code_block("""
class Account:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0: raise ValueError("Must be positive")
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
""", filename="bank.py")}
        </div>
        """
    }
]
