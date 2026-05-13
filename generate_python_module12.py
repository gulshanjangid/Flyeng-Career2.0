
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_12_lessons = [
    {
        "title": "12.1 AI/ML Landscape: A High-Level Overview",
        "emoji": "🤖",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Difference between AI (Broad), ML (Pattern Learning), and DL (Neural Nets).</li>
                <li>Supervised vs Unsupervised Learning.</li>
                <li>Generative AI (LLMs) vs Discriminative AI (Classifiers).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The "Box" Analogy</h3>
            <p>
                <strong>Traditional Coding:</strong> You write rules + Data -> Output.<br>
                <strong>Machine Learning:</strong> Data + Output -> Evaluation -> Rules.
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
# Traditional (Rule Based)
def detect_spam_rules(text):
    if "free money" in text: return True
    return False

# ML (Concept)
# model.train(dataset_of_emails, labels)
# prediction = model.predict("Check this out")
""", filename="concept.py")}
        </div>
        """
    },
    {
        "title": "12.2 Scikit-Learn: Your First ML Model",
        "emoji": "📊",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Install `scikit-learn`.</li>
                <li>Prepare Data (Features `X` and Target `y`).</li>
                <li>Train a Linear Regression model.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
# pip install scikit-learn numpy
import numpy as np
from sklearn.linear_model import LinearRegression

# 1. Data (House Size vs Price)
X = np.array([[1000], [1500], [2000], [2500]]) # Features (2D)
y = np.array([300, 450, 600, 750]) # Target (1D)

# 2. Model
model = LinearRegression()
model.fit(X, y)

# 3. Predict
new_house = np.array([[1200]])
price = model.predict(new_house)
print(f"Predicted Price: ${price[0]:.2f}")
""", filename="linear_regression.py")}
        </div>
        """
    },
    {
        "title": "12.3 Classification with Logistic Regression",
        "emoji": "🎯",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Regression (Predict Number) vs Classification (Predict Label).</li>
                <li>Using `LogisticRegression` for Yes/No problems.</li>
                <li>Train/Test Split concept to avoid overfitting.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Data: [Hours Studied, Hours Slept] -> Pass(1)/Fail(0)
X = [[2, 9], [1, 5], [10, 8], [9, 7], [1, 1]]
y = [0, 0, 1, 1, 0]

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train
clf = LogisticRegression()
clf.fit(X_train, y_train)

# accurate?
preds = clf.predict(X_test)
print("Accuracy:", accuracy_score(y_test, preds))
""", filename="classifier.py")}
        </div>
        """
    },
    {
        "title": "12.4 Introduction to LLMs (OpenAI API)",
        "emoji": "🧠",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>What is an API Wrapper? (`openai` python package).</li>
                <li>Roles: System, User, Assistant.</li>
                <li>Making your first call to GPT-4o-mini.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
# pip install openai
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain Recursion in one sentence."}
    ]
)

print(response.choices[0].message.content)
""", filename="hello_llm.py")}
        </div>
        """
    },
    {
        "title": "12.5 Prompt Engineering in Python",
        "emoji": "💬",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Templating Prompts using f-strings (Basic).</li>
                <li>Providing "Few-Shot" examples to guide output format.</li>
                <li>Structured Output (JSON mode).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
def extract_data(email_text):
    prompt = f\"\"\"
    Extract the date and amount from this email. return JSON.
    Email: {email_text}
    \"\"\"
    
    # ... call API with response_format={"type": "json_object"}
    # This ensures the output is ALWAYS valid JSON, ready for Python parsing.
    pass
""", filename="prompting.py")}
        </div>
        """
    },
    {
        "title": "12.6 RAG Concept: Embeddings & Vector Stores",
        "emoji": "🔍",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>What is an Embedding? (Text -> List of Numbers).</li>
                <li>Semantic Search (Finding meaning, not keywords).</li>
                <li>RAG (Retrieval Augmented Generation): Giving the LLM your own data.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory</h3>
            <p>"King" - "Man" + "Woman" ≈ "Queen". Vectors represent meaning. Close vectors = Similar meaning.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
# Pseudo-code for RAG flow
query = "How do I fix the login bug?"
query_vector = embed(query)

# Find relevant docs in database (Vector DB)
nearby_docs = database.search(query_vector)

# Send to LLM
full_prompt = f"Answer using these docs: {nearby_docs}. Question: {query}"
llm.predict(full_prompt)
""", filename="rag_logic.py")}
        </div>
        """
    },
    {
        "title": "12.7 Building AI Agents (Function Calling)",
        "emoji": "🕵️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Give LLMs "Hands": Allowing them to run Python functions.</li>
                <li>Defining Tools (Schemas).</li>
                <li>The Agent Loop: Think -> Act -> Observe -> Answer.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
# OpenAI Function Calling (Simplified)
tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "parameters": {"type": "object", "properties": {"location": {"type": "string"}}}
    }
}]

# If user asks "Weather in London",
# API returns: call `get_weather(location='London')`
# You run it, give result back to LLM.
""", filename="agent_schema.py")}
        </div>
        """
    },
    {
        "title": "12.8 Mini Project: CLI Travel Assistant",
        "emoji": "✈️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Goal</h3>
            <p>Build a CLI Chatbot that uses OpenAI to plan a trip, returning the itinerary as structured text.</p>

            <h3 class="text-2xl font-bold text-white mb-4">Complete Solution</h3>
            {code_block("""
import os
from openai import OpenAI

# Mock Client setup
client = OpenAI(api_key="your-key-here")

def plan_trip(destination):
    print(f"Planning trip to {destination}...")
    
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a travel agent. Give a day-by-day bullet list."},
            {"role": "user", "content": f"Plan a 3-day trip to {destination}"}
        ]
    )
    
    return response.choices[0].message.content

if __name__ == "__main__":
    # In real life, ensure API KEY is set in env
    try:
        dest = input("Where do you want to go? ")
        print(plan_trip(dest))
    except Exception as e:
        print("API Key missing or error:", e)
""", filename="travel_agent.py")}
        </div>
        """
    }
]
