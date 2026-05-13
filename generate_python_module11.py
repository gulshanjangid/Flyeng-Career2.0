
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_11_lessons = [
    {
        "title": "11.1 Sync vs Async: The Event Loop",
        "emoji": "🔄",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand Blocking (Sync) vs Non-blocking (Async) I/O.</li>
                <li>How the Node.js/Python Event Loop works conceptually.</li>
                <li>The `async` and `await` keywords.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Chef Analogy</h3>
            <p>
                <strong>Sync Chef:</strong> Puts pasta in water, stares at it for 10 mins (Blocking).<br>
                <strong>Async Chef:</strong> Puts pasta in water, cuts veggies while waiting (Non-blocking).
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
import asyncio
import time

# Sync (Blocking)
def make_coffee_sync():
    print("Start Coffee")
    time.sleep(2) # BLOCKS everything
    print("End Coffee")

# Async (Non-blocking)
async def make_coffee_async():
    print("Start Coffee")
    await asyncio.sleep(2) # Yields control back to loop
    print("End Coffee")

# Running it
async def main():
    await make_coffee_async()

if __name__ == "__main__":
    asyncio.run(main())
""", filename="basics_async.py")}
        </div>
        """
    },
    {
        "title": "11.2 Running Tasks Concurrently (`asyncio.gather`)",
        "emoji": "⚡",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Run multiple async functions AT THE SAME TIME.</li>
                <li>Understand Total Time = Max(Task Time) instead of Sum(Task Times).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Performance Check</h3>
            <p>If you have 3 API calls taking 2s each:<br><strong>Sync:</strong> 2+2+2 = 6s.<br><strong>Async:</strong> max(2,2,2) = 2s.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
import asyncio
import time

async def fetch_data(id):
    print(f"Fetching {id}...")
    await asyncio.sleep(2)
    return {"id": id, "data": "Success"}

async def main():
    start = time.time()
    
    # Run 3 fetches concurrently
    results = await asyncio.gather(
        fetch_data(1),
        fetch_data(2),
        fetch_data(3)
    )
    
    end = time.time()
    print(f"Results: {results}")
    print(f"Total Time: {end-start:.2f}s") # ~2.01s (Not 6s!)

if __name__ == "__main__":
    asyncio.run(main())
""", filename="concurrent.py")}
        </div>
        """
    },
    {
        "title": "11.3 Async HTTP Requests (aiohttp)",
        "emoji": "🌐",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Why `requests` library is dead in Async apps (It blocks!).</li>
                <li>Using `aiohttp` ClientSession.</li>
                <li>Scraping/Fetching 100 urls in seconds.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
import aiohttp
import asyncio

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.text()

async def main():
    urls = ["https://example.com", "https://python.org"]
    
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        pages = await asyncio.gather(*tasks)
        print(f"Downloaded {len(pages)} pages")

if __name__ == "__main__":
    asyncio.run(main())
""", filename="async_http.py")}
        </div>
        """
    },
    {
        "title": "11.4 Threading vs Multiprocessing vs AsyncIO",
        "emoji": "🧠",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li><strong>AsyncIO:</strong> Best for Network I/O (APIs, DBs). Single Thread.</li>
                <li><strong>Threading:</strong> Old school I/O. Limited by GIL (Global Interpreter Lock).</li>
                <li><strong>Multiprocessing:</strong> Best for CPU Bound (Data Science, Image Processing). Bypasses GIL.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Decision Matrix</h3>
            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-6">
                <thead><tr class="bg-slate-800 text-white"><th class="p-2">Task Type</th><th class="p-2">Recommendation</th><th class="p-2">Why?</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-2">Waiting for Web/DB</td><td class="p-2">AsyncIO</td><td class="p-2">Low overhead, high concurrency</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-2">Heavy Math/ML</td><td class="p-2">Multiprocessing</td><td class="p-2">Uses all CPU Cores</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-2">Legacy I/O</td><td class="p-2">Trending</td><td class="p-2">Simple, but heavy</td></tr>
                </tbody>
            </table>
        </div>
        """
    },
    {
        "title": "11.5 CPU Bound Tasks with ProcessPoolExecutor",
        "emoji": "🏋️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Offload heavy CPU work from the Async Event Loop.</li>
                <li>Use `run_in_executor` to combine Async with Multiprocessing.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Problem</h3>
            <p>If you calculate Primes inside an `async def`, you FREEZE the server. No other requests can be handled.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. The Solution</h3>
            {code_block("""
import asyncio
from concurrent.futures import ProcessPoolExecutor

# CPU Heavy Function (Blocking)
def get_prime_numbers(n):
    primes = []
    for num in range(2, n):
        if all(num % i != 0 for i in range(2, int(num**0.5) + 1)):
            primes.append(num)
    return len(primes)

async def main():
    loop = asyncio.get_running_loop()
    
    # Run in a separate PROCESS (True Parallelism)
    with ProcessPoolExecutor() as pool:
        # Non-blocking await!
        result = await loop.run_in_executor(pool, get_prime_numbers, 1000000)
        
    print(f"Found {result} primes")

if __name__ == "__main__":
    asyncio.run(main())
""", filename="cpu_bound.py")}
        </div>
        """
    },
    {
        "title": "11.6 Async Context Managers & Iterators",
        "emoji": "🔄",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Create objects usable with `async with`.</li>
                <li>Create iterators usable with `async for`.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
import asyncio

class AsyncDatabase:
    async def __aenter__(self):
        print("Connecting...")
        await asyncio.sleep(0.1)
        return self

    async def __aexit__(self, exc_type, exc, tb):
        print("Closing...")
        await asyncio.sleep(0.1)

    async def query(self):
        return "Data"

async def main():
    # Setup/Teardown is awaited automatically
    async with AsyncDatabase() as db:
        print(await db.query())

if __name__ == "__main__":
    asyncio.run(main())
""", filename="async_context.py")}
        </div>
        """
    },
    {
        "title": "11.7 Common Pitfalls & Best Practices",
        "emoji": "⚠️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Don't call blocking code (time.sleep, requests) in async functions.</li>
                <li>Avoid "Fire and Forget" tasks (garbage collected/exceptions lost).</li>
                <li>Use `asyncio.create_task` properly.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The "Blocking" Trap</h3>
            <p>One blocking call freezes the ENTIRE application for ALL users.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Correct Task Creation</h3>
            {code_block("""
import asyncio

async def background_job():
    print("Job started")
    await asyncio.sleep(1)
    print("Job done")
    return "OK"

async def main():
    # Schedule execution safely
    task = asyncio.create_task(background_job())
    
    # Do other things...
    print("Doing work...")
    
    # Wait for result
    res = await task
    print(res)

if __name__ == "__main__":
    asyncio.run(main())
""", filename="traps.py")}
        </div>
        """
    },
    {
        "title": "11.8 Mini Project: High-Speed Web Scraper",
        "emoji": "🕷️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Goal</h3>
            <p>Fetch titles from 20 websites concurrently using `aiohttp` and parse with `BeautifulSoup`.</p>

            <h3 class="text-2xl font-bold text-white mb-4">Complete Solution</h3>
            {code_block("""
import asyncio
import aiohttp
from bs4 import BeautifulSoup

# List of dummy targets
SITES = [
    "https://example.com",
    "https://python.org",
    "https://google.com",
    # ... imagine 20 URLs here
]

async def get_title(session, url):
    try:
        async with session.get(url, timeout=5) as resp:
            text = await resp.text()
            soup = BeautifulSoup(text, "html.parser")
            title = soup.title.string if soup.title else "No Title"
            return f"{url} -> {title.strip()}"
    except Exception as e:
        return f"{url} -> Error: {str(e)}"

async def main():
    async with aiohttp.ClientSession() as session:
        tasks = [get_title(session, url) for url in SITES]
        results = await asyncio.gather(*tasks)
        
        for res in results:
            print(res)

if __name__ == "__main__":
    # pip install aiohttp beautifulsoup4
    asyncio.run(main())
""", filename="scraper.py")}
        </div>
        """
    }
]
