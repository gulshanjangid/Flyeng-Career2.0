
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_4_lessons = [
    {
        "title": "4.1 Classes and Objects: The Blueprint",
        "emoji": "🏗️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Define Classes (Blueprints) and Objects (Instances).</li>
                <li>Master the `__init__` constructor methods.</li>
                <li>Understand `self` (The current instance).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory: Blueprint vs House</h3>
            <p>
                <strong>Class:</strong> The architectural drawing of a house. (Requires no materials/memory).
                <br><strong>Object:</strong> The actual house built from the drawing. (Takes up land/memory).
                <br>You can build 100 <em>different</em> houses from 1 blueprint.
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
class Car:
    # Constructor (Initializer)
    def __init__(self, model, color):
        self.model = model  # Attribute
        self.color = color
        self.speed = 0

    def drive(self):
        self.speed += 10
        print(f"{self.model} is going {self.speed} km/h")

# Creating Instances
tesla = Car("Model 3", "Red")
ford = Car("Mustang", "Blue")

tesla.drive() # Model 3 is going 10 km/h
""", filename="basics_oop.py")}
        </div>
        """
    },
    {
        "title": "4.2 Methods: Instance vs Class vs Static",
        "emoji": "⚙️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Distinguish between Instance (`self`), Class (`cls`), and Static methods.</li>
                <li>Use `@classmethod` for alternative constructors.</li>
                <li>Use `@staticmethod` for utility functions inside a class.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Comparison Table</h3>
             <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-6">
                <thead><tr class="bg-slate-800 text-white"><th class="p-2">Type</th><th class="p-2">Decorator</th><th class="p-2">First Arg</th><th class="p-2">Access</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-2">Instance</td><td class="p-2">None</td><td class="p-2"><code>self</code></td><td class="p-2">The Object</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-2">Class</td><td class="p-2"><code>@classmethod</code></td><td class="p-2"><code>cls</code></td><td class="p-2">The Class itself</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-2">Static</td><td class="p-2"><code>@staticmethod</code></td><td class="p-2">None</td><td class="p-2">Nothing (Namespace only)</td></tr>
                </tbody>
            </table>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
class Date:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day

    # Alternative Constructor
    @classmethod
    def from_string(cls, date_str):
        # "2026-01-01" -> 2026, 1, 1
        year, month, day = map(int, date_str.split("-"))
        return cls(year, month, day)

    # Utility (No access to instance/class state)
    @staticmethod
    def is_valid_year(year):
        return 1900 <= year <= 3000

# Usage
d1 = Date(2026, 1, 1)
d2 = Date.from_string("2024-12-25")
print(Date.is_valid_year(2026)) # True
""", filename="methods.py")}
        </div>
        """
    },
    {
        "title": "4.3 Encapsulation & Properties",
        "emoji": "🔒",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Implement Private variables with `_` and `__`.</li>
                <li>Use `@property` for Getters and Setters (Pythonic Encapsulation).</li>
                <li>Avoid Java-style `get_x()` and `set_x()`.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory: No True Privacy</h3>
            <p>
                Python assumes "We are all consenting adults". 
                <br><code>_variable</code>: Please don't touch (Convention).
                <br><code>__variable</code>: Name Munging (Harder to touch, but possible).
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
class BankAccount:
    def __init__(self, balance):
        self._balance = balance # "Protected"

    @property
    def balance(self):
        # Getter
        print("Log: Checking balance")
        return self._balance

    @balance.setter
    def balance(self, value):
        # Setter w/ Validation
        if value < 0:
            raise ValueError("Balance cannot be negative")
        self._balance = value

acc = BankAccount(100)
acc.balance = 50   # Calls setter
print(acc.balance) # Calls getter -> 50
# acc.balance = -10 -> ValueError
""", filename="encapsulation.py")}
        </div>
        """
    },
    {
        "title": "4.4 Inheritance & super()",
        "emoji": "👨‍👦",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Create Child classes that Inherit from Parent classes.</li>
                <li>Override methods to change behavior.</li>
                <li>Use `super()` to reuse parent logic.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass # Abstract in spirit

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def __init__(self, name, color):
        # Call Parent Constructor
        super().__init__(name) 
        self.color = color

    def speak(self):
        return "Meow!"

pets = [Dog("Buddy"), Cat("Luna", "Black")]
for p in pets:
    print(f"{p.name}: {p.speak()}")
""", filename="inheritance.py")}
        </div>
        """
    },
    {
        "title": "4.5 Polymorphism & Duck Typing",
        "emoji": "🦆",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand "If it walks like a duck...".</li>
                <li>Write functions that accept <em>interfaces</em>, not specific types.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory</h3>
            <p>
                In Java/C++, you must define interfaces. In Python, you just call the method. 
                If the object has the method, it works. If not, it crashes (AttributeError).
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
class PDFParser:
    def parse(self):
        print("Parsing PDF...")

class HTMLParser:
    def parse(self):
        print("Parsing HTML...")

class Car:
    def drive(self): pass

def run_parser(parser):
    # Does not care if it is PDF or HTML
    # As long as it has .parse(), it works
    parser.parse()

run_parser(PDFParser())  # Works
run_parser(HTMLParser()) # Works
# run_parser(Car())      # AttributeError: 'Car' object has no attribute 'parse'
""", filename="polymorphism.py")}
        </div>
        """
    },
    {
        "title": "4.6 Special (Dunder) Methods",
        "emoji": "✨",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Customize object String representation (`__str__`, `__repr__`).</li>
                <li>Enable Operator Overloading (`__add__`, `__eq__`, `__len__`).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Essential Dunders</h3>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-sm">
                    <thead><tr class="border-b border-indigo-500"><th class="p-2">Method</th><th class="p-2">Trigger</th><th class="p-2">Purpose</th></tr></thead>
                    <tbody>
                        <tr class="bg-slate-900/50"><td class="p-2"><code>__str__</code></td><td class="p-2"><code>print(obj)</code></td><td class="p-2">User-friendly string</td></tr>
                        <tr><td class="p-2"><code>__repr__</code></td><td class="p-2">REPL / Debug</td><td class="p-2">Dev-friendly string</td></tr>
                        <tr class="bg-slate-900/50"><td class="p-2"><code>__eq__</code></td><td class="p-2"><code>a == b</code></td><td class="p-2">Equality check</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">3. Worked Example: Vector Class</h3>
            {code_block("""
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        # Enables v1 + v2
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

v1 = Vector(2, 4)
v2 = Vector(1, 2)
v3 = v1 + v2

print(v3) # (3, 6)
print(v3 == Vector(3, 6)) # True
""", filename="vector.py")}
        </div>
        """
    },
    {
        "title": "4.7 Design Patterns: Strategy (Function-Based)",
        "emoji": "🧠",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Implement the Strategy Pattern using First-Class Functions (No extra classes needed).</li>
                <li>Understand Dependency Injection basics.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Pythonic Twist</h3>
            <p>In Java, Strategy requires an Interface and implementing Classes. In Python, you just pass functions.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Code: Payment System</h3>
            {code_block("""
# Strategies (Just functions)
def pay_via_paypal(amount):
    print(f"Paying ${amount} using PayPal")

def pay_via_stripe(amount):
    print(f"Paying ${amount} using Stripe")

class PaymentProcessor:
    def process(self, amount, strategy):
        # Strategy Injection
        strategy(amount)

# Usage
p = PaymentProcessor()
p.process(100, pay_via_paypal)
p.process(200, pay_via_stripe)
""", filename="strategy.py")}
        </div>
        """
    },
    {
        "title": "4.8 Mini Project: Library Management (LLD)",
        "emoji": "📚",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Goal</h3>
            <p>Design a Low-Level System for a Library with `Book`, `Member`, and `Library` classes.</p>

            <h3 class="text-2xl font-bold text-white mb-4">Complete Solution</h3>
            {code_block("""
class Book:
    def __init__(self, isbn, title, author):
        self.isbn = isbn
        self.title = title
        self.author = author
        self.is_available = True

    def __str__(self):
        status = "Available" if self.is_available else "Checked Out"
        return f"[{self.isbn}] {self.title} - {status}"

class Member:
    def __init__(self, member_id, name):
        self.member_id = member_id
        self.name = name
        self.borrowed_books = []

class Library:
    def __init__(self):
        self.books = {}   # isbn -> Book
        self.members = {} # id -> Member

    def add_book(self, book):
        self.books[book.isbn] = book

    def register_member(self, member):
        self.members[member.member_id] = member

    def borrow_book(self, isbn, member_id):
        book = self.books.get(isbn)
        member = self.members.get(member_id)

        if not book or not member:
            print("Invalid Book or Member ID")
            return

        if not book.is_available:
            print("Book not available")
            return

        book.is_available = False
        member.borrowed_books.append(book)
        print(f"Success: {member.name} borrowed {book.title}")

    def return_book(self, isbn, member_id):
        # Implementation left as exercise
        pass

# Simulation
lib = Library()
b1 = Book("101", "Python Crash Course", "Eric Matthes")
lib.add_book(b1)

m1 = Member("M01", "Alice")
lib.register_member(m1)

lib.borrow_book("101", "M01")
lib.borrow_book("101", "M01") # Should fail
""", filename="library_system.py")}
        </div>
        """
    }
]
