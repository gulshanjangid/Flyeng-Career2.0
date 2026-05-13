
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_7_lessons = [
    {
        "title": "7.1 NumPy Basics: Arrays vs Lists",
        "emoji": "🔢",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand why NumPy is faster than Lists (Contiguous Memory).</li>
                <li>Create Arrays (`np.array`, `np.zeros`, `np.arange`).</li>
                <li>Perform Vectorized Operations.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Performance Check</h3>
            <p>
                <strong>Lists:</strong> Store pointers to objects scattered in memory.<br>
                <strong>NumPy Arrays:</strong> Store raw data packed continuously (C-Level speed).
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
import numpy as np
import time

# Create Arrays
arr = np.array([1, 2, 3, 4, 5])
zeros = np.zeros(5) # [0., 0., 0., 0., 0.]

# Vectorization (No loops!)
# Python List: [x * 2 for x in nums]
# NumPy: nums * 2
arr_doubled = arr * 2 
print(arr_doubled) # [ 2  4  6  8 10]

# Speed Test
size = 1_000_000
l1 = list(range(size))
n1 = np.arange(size)

t0 = time.time()
l2 = [x ** 2 for x in l1]
print(f"List time: {time.time()-t0:.4f}s") # ~0.3s

t0 = time.time()
n2 = n1 ** 2
print(f"NumPy time: {time.time()-t0:.4f}s") # ~0.003s (100x Faster)
""", filename="numpy_basics.py")}
        </div>
        """
    },
    {
        "title": "7.2 Array Manipulation & Broadcasting",
        "emoji": "📶",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Reshape arrays (`reshape`, `flatten`).</li>
                <li>Understand Broadcasting rules (adding 1D to 2D).</li>
                <li>Slice arrays efficiently.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Broadcasting Magic</h3>
            <p>NumPy "stretches" smaller arrays to match larger ones during math operations, without copying data.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
import numpy as np

# Reshaping
grid = np.arange(1, 10).reshape(3, 3)
print(grid)
# [[1 2 3]
#  [4 5 6]
#  [7 8 9]]

# Broadcasting
# Add [1, 2, 3] to EVERY row
result = grid + np.array([1, 2, 3])
print(result)
# [[ 2  4  6]
#  [ 5  7  9]
#  [ 8 10 12]]

# 4. Slicing
# First 2 rows, Column 1
print(grid[:2, 1]) # [2 5]
""", filename="broadcasting.py")}
        </div>
        """
    },
    {
        "title": "7.3 Pandas Series & DataFrames",
        "emoji": "🐼",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Create DataFrames from Dictionaries and Lists.</li>
                <li>Inspect data (`head()`, `info()`, `describe()`).</li>
                <li>Select Columns and Rows (`loc`, `iloc`).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory</h3>
            <p>
                <strong>Series:</strong> A column with labels (Index).
                <br><strong>DataFrame:</strong> A table made of multiple Series sharing an Index.
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
import pandas as pd

data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [25, 30, 35],
    "Role": ["Dev", "Manager", "Analyst"]
}

df = pd.DataFrame(data)

# Inspection
print(df.head(2)) # Top 2 rows
print(df.info())  # Data types & Memory usage

# Selection
print(df["Name"]) # Column -> Series
print(df.iloc[0]) # First Row -> Series
print(df.loc[df["Age"] > 25]) # Filtering
""", filename="pandas_intro.py")}
        </div>
        """
    },
    {
        "title": "7.4 Data Cleaning (Nulls & Duplicates)",
        "emoji": "🧹",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Detect Missing Values (`isna()`).</li>
                <li>Handle Missing Values (`fillna`, `dropna`).</li>
                <li>Remove Duplicates (`drop_duplicates`).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Real World Strategy</h3>
            <p>
                <strong>Drop:</strong> If rows are few or critical data is missing.<br>
                <strong>Fill:</strong> Use Mean/Median (Numbers) or "Unknown" (Text).
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "A": [1, 2, np.nan, 4],
    "B": [5, np.nan, np.nan, 8],
    "C": ["x", "y", "x", "z"]
})

# Detect
print(df.isna().sum()) # Count nulls per column

# 1. Fill Nulls
df["A"] = df["A"].fillna(df["A"].mean()) # Fill with Average

# 2. Drop Rows with ANY nulls
# df_clean = df.dropna()

# 3. Remove Duplicates
df = df.drop_duplicates(subset=["C"])
""", filename="cleaning.py")}
        </div>
        """
    },
    {
        "title": "7.5 Filtering & Conditional Logic",
        "emoji": "🔍",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Filter rows using Boolean Masking.</li>
                <li>Combine conditions (`&`, `|`, `~`).</li>
                <li>Use `.query()` for cleaner syntax.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
df = pd.DataFrame({
    "Product": ["Apple", "Banana", "Cherry", "Date"],
    "Price": [1.5, 0.5, 2.0, 3.0],
    "Category": ["Fruit", "Fruit", "Fruit", "Dried"]
})

# Boolean Masking
# Get Fruits cheaper than $2
cheap_fruits = df[ (df["Category"] == "Fruit") & (df["Price"] < 2.0) ]

# Query Method (SQL-like)
expensive = df.query("Price > 2.0")

# String Operation
starts_with_a = df[ df["Product"].str.startswith("A") ]
""", filename="filtering.py")}
        </div>
        """
    },
    {
        "title": "7.6 Grouping & Aggregation",
        "emoji": "📊",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Master `groupby()` for categorical analysis.</li>
                <li>Apply multiple aggregates (`sum`, `mean`, `count`).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Split-Apply-Combine</h3>
            <p>1. <strong>Split</strong> data into groups based on keys.<br>2. <strong>Apply</strong> a function to each group.<br>3. <strong>Combine</strong> results into a new DataFrame.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
df = pd.DataFrame({
    "Dept": ["Sales", "Sales", "HR", "HR", "IT"],
    "Emp": ["Alice", "Bob", "Charlie", "Dave", "Eve"],
    "Salary": [5000, 6000, 4000, 4500, 7000]
})

# Average Salary per Department
avg_sal = df.groupby("Dept")["Salary"].mean()
print(avg_sal)

# Detailed Stats
stats = df.groupby("Dept").agg({
    "Salary": ["mean", "max", "min", "count"]
})
print(stats)
""", filename="groupby.py")}
        </div>
        """
    },
    {
        "title": "7.7 Merging & Joining Datasets",
        "emoji": "🔗",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Use `pd.merge()` for SQL-style Joins.</li>
                <li>Understand Inner, Left, Right, and Outer joins.</li>
                <li>Use `pd.concat()` to stack tables.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Visual Guide</h3>
            <p>
                <strong>Inner:</strong> Only matching keys.<br>
                <strong>Left:</strong> All from Left, matches from Right.<br>
                <strong>Concat:</strong> Glueing tables together (top-to-bottom).
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
users = pd.DataFrame({"id": [1, 2], "name": ["Alice", "Bob"]})
orders = pd.DataFrame({"id": [1, 2], "amount": [100, 200], "user_id": [1, 2]})

# SQL: SELECT * FROM users JOIN orders ON users.id = orders.user_id
merged = pd.merge(users, orders, left_on="id", right_on="user_id", how="inner")

print(merged)
#    id_x   name  id_y  amount  user_id
# 0     1  Alice     1     100        1
# 1     2    Bob     2     200        2
""", filename="merging.py")}
        </div>
        """
    },
    {
        "title": "7.8 Mini Project: Sales Data Analysis",
        "emoji": "💼",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Goal</h3>
            <p>Analyze a sales dataset to find Top Products, Monthly Trends, and Clean bad data.</p>

            <h3 class="text-2xl font-bold text-white mb-4">Complete Solution</h3>
            {code_block("""
import pandas as pd
import io

# Mock Data (CSV Format)
csv_data = \"\"\"Date,Product,Revenue,Region
2026-01-01,Laptop,1000,US
2026-01-02,Mouse,20,EU
2026-01-05,Laptop,1000,US
2026-02-01,Phone,500,EU
2026-02-10,Phone,NaN,EU
\"\"\"

# 1. Load Data
df = pd.read_csv(io.StringIO(csv_data))

# 2. Clean Data (Drop rows with missing Revenue)
df.dropna(subset=["Revenue"], inplace=True)

# 3. Convert Types
df["Date"] = pd.to_datetime(df["Date"])
df["Revenue"] = df["Revenue"].astype(float)

# 4. Extract Month
df["Month"] = df["Date"].dt.month_name()

# 5. Analysis: Total Revenue by Region
region_rev = df.groupby("Region")["Revenue"].sum()
print("Rev by Region:\\n", region_rev)

# 6. Analysis: Top Product
top_prod = df.groupby("Product")["Revenue"].sum().idxmax()
print(f"Top Product: {top_prod}")
# Output:
# Rev by Region:
# EU      520.0
# US     2000.0
# Top Product: Laptop
""", filename="sales_analysis.py")}
        </div>
        """
    }
]
