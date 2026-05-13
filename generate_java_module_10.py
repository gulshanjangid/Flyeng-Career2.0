
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

module_10_lessons = [
    {
        "title": "10.1 The Test Pyramid",
        "emoji": "🔺",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Why Unit Tests?</h3>
            <p>We want fast feedback. Testing a single function takes milliseconds. Deploying to test a UI takes minutes.</p>
            
            <div class="flex justify-center my-8">
                <div class="flex flex-col items-center gap-1 w-64">
                    <div class="w-20 text-center bg-red-900/50 border border-red-500 text-xs py-1 rounded-t">E2E (Slow)</div>
                    <div class="w-40 text-center bg-orange-900/50 border border-orange-500 text-xs py-2">Integration</div>
                    <div class="w-64 text-center bg-green-900/50 border border-green-500 text-sm font-bold py-4 rounded-b">Unit Tests (Fast)</div>
                </div>
            </div>
            {key_concept_card("Assertion", "The core of any test. Expect Actual == Expected. If not, blow up.", "green")}
        </div>
        """
    },
    {
        "title": "10.2 JUnit 5 Lifecycle",
        "emoji": "⏳",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Test Runner</h3>
            <p>The `@Test` method is not the only thing that runs.</p>

            {code_block("""
class CalculatorTest {

    @BeforeAll // Static. Runs once before any tests.
    static void initDB() { ... }

    @BeforeEach // Runs before EVERY test method
    void setup() { ... }

    @Test
    void shouldAddNumbers() {
        assertEquals(4, 2+2);
    }
    
    @AfterEach // Cleanup
    void tearDown() { ... }
}
""", filename="Lifecycle.java")}
        </div>
        """
    },
    {
        "title": "10.3 Mocking with Mockito",
        "emoji": "🎭",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Fake it 'til you make it</h3>
            <p>Unit tests should NOT hit a real Database or API. We **Mock** those dependencies.</p>

            {code_block("""
// Create a fake object
UserRepository mockRepo = Mockito.mock(UserRepository.class);

// Train the fake
when(mockRepo.findById(1)).thenReturn(new User("Alice"));

// Run logic that uses the fake
UserService service = new UserService(mockRepo);
String name = service.getUserName(1);

// Verify logic
assertEquals("Alice", name);
""", filename="MockitoTest.java")}
        </div>
        """
    }
]
