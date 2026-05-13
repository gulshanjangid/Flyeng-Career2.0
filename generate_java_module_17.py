
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

module_17_lessons = [
    {
        "title": "17.1 System Design: Architecture of a Ride-Hailing App",
        "emoji": "🏗️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Requirements</h3>
                <p class="mb-4">We are building a simplified Uber. The key engineering challenges are:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-slate-900 p-4 rounded-xl border border-slate-700">
                        <div class="font-bold text-green-400 mb-2">Functional</div>
                        <ul class="list-disc list-inside text-sm text-slate-400">
                            <li>Riders request rides.</li>
                            <li>Drivers get matched (Proximity).</li>
                            <li>Real-time Location Updates.</li>
                        </ul>
                    </div>
                    <div class="bg-slate-900 p-4 rounded-xl border border-slate-700">
                        <div class="font-bold text-red-400 mb-2">Non-Functional</div>
                        <ul class="list-disc list-inside text-sm text-slate-400">
                            <li>Latency: &lt; 200ms for updates.</li>
                            <li>Availability: 99.99%.</li>
                            <li>Consistency: Eventually Consistent (Location), Strong (Payment).</li>
                        </ul>
                    </div>
                </div>
            </section>

             <section>
                <h4 class="text-xl font-bold text-white mb-4">High Level Design</h4>
                 <div class="flex flex-col gap-2 font-mono text-xs bg-slate-900 p-6 rounded-xl border border-slate-700">
                    <div class="flex justify-between px-10">
                         <div class="p-2 border border-slate-500 rounded">Driver App (WebSocket)</div>
                         <div class="p-2 border border-slate-500 rounded">Rider App (HTTP/WS)</div>
                    </div>
                    <div class="text-center my-2 text-2xl">⬇️</div>
                    <div class="p-4 border-2 border-purple-500 rounded text-center text-purple-400 font-bold bg-purple-900/10">API GATEWAY / LOAD BALANCER</div>
                    <div class="text-center my-2 text-2xl">⬇️</div>
                    <div class="grid grid-cols-3 gap-4 text-center">
                        <div class="p-3 border border-blue-500 rounded bg-blue-900/10">Location Service (Redis)</div>
                        <div class="p-3 border border-green-500 rounded bg-green-900/10">Payment Service (SQL)</div>
                        <div class="p-3 border border-yellow-500 rounded bg-yellow-900/10">Trip Service (Kafka)</div>
                    </div>
                 </div>
            </section>
        </div>
        """
    },
    {
        "title": "17.2 Geospatial Theory: How 'Nearby' Works",
        "emoji": "📡",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Math Behind the Map</h3>
                <p class="leading-relaxed mb-6">
                    A naive SQL query `SELECT * FROM drivers WHERE sqrt((x-x2)^2 + (y-y2)^2) < 5` is O(N) and too slow for millions of drivers. 
                    We need Spatial Indexing.
                </p>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
                        <h4 class="font-bold text-indigo-400 mb-2">QuadTrees</h4>
                        <p class="text-sm text-slate-400 mb-4">Recursively divide the map into 4 quadrants.</p>
                        <div class="grid grid-cols-2 grid-rows-2 w-32 h-32 border border-slate-600 mx-auto">
                            <div class="border border-slate-700 flex items-center justify-center">A</div>
                            <div class="border border-slate-700 flex items-center justify-center">B</div>
                            <div class="border border-slate-700 flex items-center justify-center">C</div>
                            <div class="border border-slate-700 grid grid-cols-2 grid-rows-2 w-full h-full">
                                <div class="border border-slate-800"></div>
                                <div class="border border-slate-800 bg-green-500/50">Driver</div>
                                <div class="border border-slate-800"></div>
                                <div class="border border-slate-800"></div>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 bg-slate-900 border border-slate-700 rounded-xl">
                        <h4 class="font-bold text-pink-400 mb-2">GeoHashing (We use this!)</h4>
                        <p class="text-sm text-slate-400 mb-4">Convert 2D coords into a 1D string. Nearby points share prefixes.</p>
                        <ul class="text-xs font-mono space-y-2">
                            <li>User: (37.7, -122.4) -> <span class="text-green-400">9q8yy</span>123</li>
                            <li>Driver: (37.7, -122.5) -> <span class="text-green-400">9q8yy</span>abc</li>
                            <li class="text-slate-500">Prefix match = Proximity!</li>
                        </ul>
                    </div>
                </div>
            </section>

             {key_concept_card("Why Redis?", "Redis has built-in `GEOADD` and `GEORADIUS` commands implemented using GeoHashing on Sorted Sets (ZSET). It gives O(log N) performance.", "red")}

            {code_block("""
// Spring Data Redis
redis.opsForGeo().add("drivers", new Point(-122.4194, 37.7749), "driver_1");

// "Find drivers within 5km"
GeoResults<Constraint> results = redis.opsForGeo().radius("drivers", 
    new Circle(new Point(-122.41, 37.77), new Distance(5, KILOMETERS))
);
""", filename="GeoService.java")}
        </div>
        """
    },
    {
        "title": "17.3 Database Sharding & Partitioning",
        "emoji": "💾",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Scaling the Write Volume</h3>
                <p class="leading-relaxed mb-6">
                    A single PostgreSQL instance cannot handle 1 million GPS writes per second. We need to split the data.
                </p>

                <h4 class="text-xl font-bold text-white mb-4">Sharding Strategies</h4>
                <div class="grid grid-cols-1 gap-4 text-sm">
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-blue-400">Range Based</div>
                        <p class="text-slate-400">Users A-M in DB1, N-Z in DB2.</p>
                        <p class="text-red-400 text-xs">⚠️ Hotspot Issue (What if everyone is named Steve?)</p>
                    </div>
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-green-400">Hash Based (Consistent Hashing)</div>
                        <p class="text-slate-400">DB = hash(user_id) % num_servers.</p>
                        <p class="text-green-400 text-xs">✅ Uniform distribution.</p>
                    </div>
                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                        <div class="font-bold text-yellow-400">Geo Based</div>
                        <p class="text-slate-400">US-West in DB1, Europe in DB2.</p>
                        <p class="text-green-400 text-xs">✅ Data locality (Low latency).</p>
                    </div>
                </div>
            </section>
        </div>
        """
    },
    {
        "title": "17.4 Event Driven Matching (Kafka)",
        "emoji": "🧠",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Decoupling with Events</h3>
            <p>Matching is complex. We don't want the Booking REST API to hang while we calculate matches. We dump the request into Kafka and process it asynchronously.</p>

            {code_block("""
// 1. Producer (Rider Service)
kafkaTemplate.send("ride_request_topic", new RideRequestEvent(userId, lat, lon));

// 2. Consumer (Matching Service)
@KafkaListener(topics = "ride_request_topic")
public void match(RideRequestEvent event) {
    // Heavy Algo:
    // 1. Query Redis for drivers
    // 2. Filter by Rating/Vehicle
    // 3. Send WebSocket Push to Driver
}
""", filename="AsyncMatch.java")}
        </div>
        """
    },
    {
        "title": "17.5 Deployment: Infrastructure as Code",
        "emoji": "🚢",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Docker Compose</h3>
            <p>We spin up the entire ecosystem locally.</p>
            
            {code_block("""
version: '3.8'
services:
  redis:
    image: redis:alpine
    ports: ["6379:6379"]
    
  kafka:
    image: confluentinc/cp-kafka
    depends_on: [zookeeper]
    
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: rides_db
      
  matching-service:
    build: ./matching-service
    environment:
      - KAFKA_HOST=kafka:9092
      - REDIS_HOST=redis
""", filename="docker-compose.yml", lang="yaml")}
        </div>
        """
    }
]
