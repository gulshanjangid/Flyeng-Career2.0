
def code_block(code, lang="java", filename="Main.java"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8 shadow-2xl">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400 border-l border-b border-slate-700">{filename}</div>
    <div class="absolute top-0 left-0 p-2 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
    </div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto mt-4 leading-relaxed"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

def key_concept_card(title, content, color="blue"):
    colors = {
        "blue": "border-blue-500/30 bg-blue-900/10 text-blue-400",
        "green": "border-green-500/30 bg-green-900/10 text-green-400",
        "orange": "border-orange-500/30 bg-orange-900/10 text-orange-400",
        "purple": "border-purple-500/30 bg-purple-900/10 text-purple-400",
        "red": "border-red-500/30 bg-red-900/10 text-red-400",
    }
    style = colors.get(color, colors["blue"])
    return f"""
    <div class="p-6 rounded-2xl border {style} mb-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-current opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <h4 class="text-lg font-bold mb-2 flex items-center gap-2">
            <span class="w-2 h-8 rounded-full bg-current"></span>
            {title}
        </h4>
        <div class="text-sm text-slate-300 leading-relaxed pl-4">{content}</div>
    </div>
    """

module_16_lessons = [
    {
        "title": "16.1 The Distributed Dilemma: Monolith vs Microservices",
        "emoji": "🏙️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">No Free Lunch</h3>
                <p class="leading-relaxed mb-6">
                    Microservices are not "better" than Monoliths; they are a <strong>trade-off</strong>. 
                    You trade <strong>Complexity of Code</strong> (Monolith) for <strong>Complexity of Infrastructure</strong> (Microservices).
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div class="bg-slate-900 border border-slate-700 p-6 rounded-xl">
                        <div class="font-bold text-white mb-4 text-center">🗿 Monolith</div>
                        <ul class="text-sm text-slate-400 list-disc list-inside space-y-2">
                            <li>✅ ACID Transactions (Easy).</li>
                            <li>✅ Simple Deployment (1 JAR).</li>
                            <li>❌ Scaling limits (Replicate entire app).</li>
                            <li>❌ Tight coupling (Spaghetti code).</li>
                        </ul>
                    </div>
                    <div class="bg-slate-900 border border-slate-700 p-6 rounded-xl">
                        <div class="font-bold text-blue-400 mb-4 text-center">🐝 Microservices</div>
                        <ul class="text-sm text-slate-400 list-disc list-inside space-y-2">
                            <li>✅ Independent Scaling (Scale only Payments).</li>
                            <li>✅ Tech Agnostic (Java + Go + Python).</li>
                            <li>❌ Distributed Transactions (Base/Saga).</li>
                            <li>❌ Network Latency & Failure.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">The CAP Theorem</h4>
                <p class="text-sm text-slate-400 mb-4">In a Distributed System, you can only pick 2 of 3:</p>
                <div class="flex flex-wrap gap-4 justify-center">
                    <div class="p-4 bg-green-900/20 border border-green-500 rounded-full w-32 text-center text-green-400 font-bold">Consistency</div>
                    <div class="p-4 bg-blue-900/20 border border-blue-500 rounded-full w-32 text-center text-blue-400 font-bold">Availability</div>
                    <div class="p-4 bg-red-900/20 border border-red-500 rounded-full w-32 text-center text-red-400 font-bold">Partition Tolerance</div>
                </div>
                <p class="mt-4 text-xs text-center text-slate-500">
                    Microservices MUST support Partition Tolerance (Network failure). So you typically choose between <strong>CP</strong> (Data is correct, simpler) or <strong>AP</strong> (System is up, data might be stale).
                </p>
            </section>

        </div>
        """
    },
    {
        "title": "16.2 Service Discovery: The Phonebook (Eureka)",
        "emoji": "🗺️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Dynamic Address Problem</h3>
            <p>In the Cloud (AWS/K8s), servers die and restart with new IP addresses every minute. Hardcoding `localhost:8081` is impossible.</p>
            
            <div class="bg-slate-900 p-6 rounded-xl border border-slate-700 mb-6 font-mono text-sm">
                <div class="flex items-center gap-4 mb-4">
                    <div class="p-2 border border-green-500 text-green-400 rounded">Service A</div>
                    <div class="text-slate-500">"I am up at 10.0.0.5!"</div>
                    <div class="text-slate-500">➡️</div>
                    <div class="p-2 border border-purple-500 text-purple-400 rounded">Eureka Server</div>
                </div>
                <div class="flex items-center gap-4">
                    <div class="p-2 border border-blue-500 text-blue-400 rounded">Service B</div>
                    <div class="text-slate-500">"Where is Service A?"</div>
                    <div class="text-slate-500">➡️</div>
                    <div class="p-2 border border-purple-500 text-purple-400 rounded">Eureka Server</div>
                </div>
            </div>

            {code_block("""
@SpringBootApplication
@EnableEurekaServer // Run this heavily available server
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}
""", filename="EurekaServer.java")}

            {code_block("""
# Client Config
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
""", filename="application.yml", lang="yaml")}
        </div>
        """
    },
    {
        "title": "16.3 API Gateway: The Digital Doorman",
        "emoji": "🚪",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Unified Entry Point</h3>
            <p>Clients (Mobile, Web) should ONLY talk to one server: The API Gateway. It handles Routing, Security, and Rate Limiting.</p>

            {code_block("""
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://USER-SERVICE # lb = Load Balance via Eureka
          predicates:
            - Path=/users/**
          filters:
            - AddRequestHeader=X-Source, Gateway
            - name: RequestRateLimiter # Prevent DDOS
                args:
                  redis-rate-limiter.replenishRate: 10
                  redis-rate-limiter.burstCapacity: 20
""", filename="gateway.yml", lang="yaml")}
        </div>
        """
    },
    {
        "title": "16.4 Resilience4j: Circuit Breaker Pattern",
        "emoji": "⚡",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Preventing Cascading Failures</h3>
                <p>If the Inventory Service is slow/down, the Order Service shouldn't hang and die. It should <strong>Fail Fast</strong> and return a default response.</p>
                
                <div class="flex gap-4 justify-center my-6">
                    <div class="flex flex-col items-center">
                        <div class="p-4 border-2 border-green-500 rounded-full text-green-400 font-bold mb-2">CLOSED</div>
                        <div class="text-[10px] text-slate-400 text-center">Normal. Calls pass through.</div>
                    </div>
                    <div class="flex flex-col items-center justify-center text-slate-600 font-bold">➡️ Errors > 50% ➡️</div>
                    <div class="flex flex-col items-center">
                        <div class="p-4 border-2 border-red-500 rounded-full text-red-400 font-bold mb-2">OPEN</div>
                        <div class="text-[10px] text-slate-400 text-center">Blocked. Instant Fallback.</div>
                    </div>
                    <div class="flex flex-col items-center justify-center text-slate-600 font-bold">➡️ Wait 5s ➡️</div>
                    <div class="flex flex-col items-center">
                        <div class="p-4 border-2 border-yellow-500 rounded-full text-yellow-400 font-bold mb-2">HALF-OPEN</div>
                        <div class="text-[10px] text-slate-400 text-center">Test a few requests.</div>
                    </div>
                </div>
            </section>

            {code_block("""
@CircuitBreaker(name = "inventory", fallbackMethod = "checkLocalCache")
public String getInventory(String id) {
    // Risky Network Call
    return restTemplate.getForObject("http://inventory-service/" + id, String.class);
}

// Fallback logic (No Exception thrown to user!)
public String checkLocalCache(String id, Exception e) {
    log.error("Inventory down, returning cached data");
    return "Available (Cached)";
}
""", filename="OrderService.java")}
        </div>
        """
    },
    {
        "title": "16.5 Distributed Transactions: The SAGA Pattern",
        "emoji": "🔄",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">ACID is Dead. Long live SAGA.</h3>
                <p class="leading-relaxed mb-6">
                    You cannot have a database transaction across two different microservices. 
                    Instead, we use a <strong>Sequence of Local Transactions</strong>. 
                    If one fails, we execute <strong>Compensating Transactions</strong> (Undo actions) to roll back.
                </p>

                <h4 class="text-xl font-bold text-white mb-4">Visualizing a Failure Scenario</h4>
                <div class="relative bg-slate-900 p-6 rounded-xl border border-slate-700 font-mono text-xs">
                    <div class="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-600"></div>
                    
                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-green-500"></div>
                        <div class="font-bold text-green-400">1. Order Service</div>
                        <div>Create Order (PENDING) ✅</div>
                    </div>
                    
                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-green-500"></div>
                        <div class="font-bold text-green-400">2. Payment Service</div>
                        <div>Charge User $50 ✅</div>
                    </div>

                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
                        <div class="font-bold text-red-400">3. Inventory Service</div>
                        <div>Reserve Item... FAILED! (Out of Stock) ❌</div>
                        <div class="text-yellow-400 mt-1">TRIGGER COMPENSATING TRANSACTIONS</div>
                    </div>

                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-yellow-500"></div>
                        <div class="font-bold text-yellow-400">4. Payment Service (Undo)</div>
                        <div>Refund User $50 ↩️</div>
                    </div>

                    <div class="relative pl-8">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-yellow-500"></div>
                        <div class="font-bold text-yellow-400">5. Order Service (Undo)</div>
                        <div>Update Order Status (FAILED) ↩️</div>
                    </div>
                </div>
            </section>

             {key_concept_card("Choreography vs Orchestration", "In **Choreography**, services talk to each other directly via Events. In **Orchestration**, a central 'Conductor' service tells everyone what to do. Orchestration is safer for complex Sagas.", "purple")}

        </div>
        """
    }
]
