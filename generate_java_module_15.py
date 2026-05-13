
def code_block(code, lang="java", filename="SecurityConfig.java"):
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

module_15_lessons = [
    {
        "title": "15.1 AuthN vs AuthZ: The Security Gatekeepers",
        "emoji": "🛡️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">The Fundamental Split</h3>
                <p class="leading-relaxed mb-6">
                    Security is often confused as one big blob, but it is actually two distinct phases: <strong>Authentication (AuthN)</strong> and <strong>Authorization (AuthZ)</strong>. 
                    Spring Security separates these concerns entirely.
                </p>

                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <div class="bg-blue-900/10 border border-blue-500/30 p-6 rounded-2xl">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">🆔</span>
                            <h4 class="text-blue-400 font-bold text-xl">Authentication (AuthN)</h4>
                        </div>
                        <p class="text-sm text-slate-400 italic mb-4">"Who are you?"</p>
                        <ul class="space-y-2 text-xs">
                            <li class="flex gap-2"><span class="text-blue-500">Goal:</span> Verify Identity.</li>
                            <li class="flex gap-2"><span class="text-blue-500">Input:</span> Username/Password, API Key, FaceID.</li>
                            <li class="flex gap-2"><span class="text-blue-500">Failure:</span> 401 Unauthorized.</li>
                        </ul>
                    </div>
                    <div class="bg-purple-900/10 border border-purple-500/30 p-6 rounded-2xl">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">🔑</span>
                            <h4 class="text-purple-400 font-bold text-xl">Authorization (AuthZ)</h4>
                        </div>
                        <p class="text-sm text-slate-400 italic mb-4">"What are you allowed to do?"</p>
                        <ul class="space-y-2 text-xs">
                            <li class="flex gap-2"><span class="text-purple-500">Goal:</span> Verify Permissions.</li>
                            <li class="flex gap-2"><span class="text-purple-500">Input:</span> Roles (ADMIN, USER), Scopes.</li>
                            <li class="flex gap-2"><span class="text-purple-500">Failure:</span> 403 Forbidden.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">The Servlet Filter Chain</h4>
                <p class="text-sm text-slate-400 mb-4">
                    Spring Security is implemented as a chain of standard Servlet Filters. 
                    A request must survive the entire gauntlet to reach your Controller.
                </p>
                
                <div class="flex flex-col gap-2 font-mono text-sm max-w-2xl mx-auto">
                    <div class="flex items-center gap-4">
                        <div class="w-24 text-right text-slate-500">Request ➡️</div>
                        <div class="p-3 bg-slate-800 border border-slate-600 rounded-lg w-full text-center">ChannelProcessingFilter (HTTPS?)</div>
                    </div>
                    <div class="flex justify-center text-slate-600">⬇️</div>
                    <div class="flex items-center gap-4">
                        <div class="w-24 text-right text-slate-500"></div>
                        <div class="p-3 bg-blue-900/30 border border-blue-500 rounded-lg w-full text-center text-blue-300">AuthenticationFilter (Login?)</div>
                    </div>
                    <div class="flex justify-center text-slate-600">⬇️</div>
                    <div class="flex items-center gap-4">
                        <div class="w-24 text-right text-slate-500"></div>
                        <div class="p-3 bg-purple-900/30 border border-purple-500 rounded-lg w-full text-center text-purple-300">FilterSecurityInterceptor (Role?)</div>
                    </div>
                    <div class="flex justify-center text-slate-600">⬇️</div>
                    <div class="flex items-center gap-4">
                        <div class="w-24 text-right text-green-500 font-bold">Success! ➡️</div>
                        <div class="p-3 bg-green-900/30 border border-green-500 rounded-lg w-full text-center text-green-300">Your Controller</div>
                    </div>
                </div>
            </section>

            {code_block("""
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    return http
        .csrf(AbstractHttpConfigurer::disable) // Disable CSRF for REST APIs
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/auth/**").permitAll() // Public Access
            .requestMatchers("/admin/**").hasRole("ADMIN") // AuthZ Check
            .anyRequest().authenticated() // AuthN Check
        )
        .build();
}
""", filename="SecurityConfig.java")}
        </div>
        """
    },
    {
        "title": "15.2 Anatomy of a JWT",
        "emoji": "🎫",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Stateless Authentication</h3>
                <p class="leading-relaxed mb-6">
                    In a Monolith, we used <strong>Sessions</strong> (Server memory). 
                    In Microservices, we use <strong>Tokens</strong> (Client property). 
                    The server doesn't remember you; it verifies your "Signature".
                </p>
                
                <h4 class="text-xl font-bold text-white mb-4">Structure of a JSON Web Token</h4>
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-700 font-mono text-sm break-all">
                    <span class="text-red-400">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>
                    <span class="text-slate-500">.</span>
                    <span class="text-purple-400">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9</span>
                    <span class="text-slate-500">.</span>
                    <span class="text-blue-400">TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ</span>
                </div>

                <div class="grid md:grid-cols-3 gap-4 mt-4 text-xs">
                    <div class="p-3 border-l-4 border-red-500 bg-red-900/10">
                        <div class="font-bold text-red-400 mb-1">1. Header</div>
                        <div>Algorithm & Token Type</div>
                        <div class="text-slate-500 mt-1">{{ "alg": "HS256", "typ": "JWT" }}</div>
                    </div>
                    <div class="p-3 border-l-4 border-purple-500 bg-purple-900/10">
                        <div class="font-bold text-purple-400 mb-1">2. Payload</div>
                        <div>Data (Claims)</div>
                        <div class="text-slate-500 mt-1">{{ "sub": "123", "role": "admin" }}</div>
                    </div>
                    <div class="p-3 border-l-4 border-blue-500 bg-blue-900/10">
                        <div class="font-bold text-blue-400 mb-1">3. Signature</div>
                        <div>Verification Hash</div>
                        <div class="text-slate-500 mt-1">HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)</div>
                    </div>
                </div>
            </section>

            {key_concept_card("The Security Guarantee", "The Client CAN read the token (it's essentially Base64 JSON). They CANNOT change it. If they change even one character, the server's signature check will fail.", "red")}

            {code_block("""
// Using JJWT Library
String token = Jwts.builder()
    .setSubject("user@example.com")
    .claim("role", "ADMIN")
    .setIssuedAt(new Date())
    .setExpiration(new Date(System.currentTimeMillis() + 3600000)) // 1 Hour
    .signWith(Keys.hmacShaKeyFor(SECRET.getBytes()))
    .compact();
""", filename="JwtProvider.java")}
        </div>
        """
    },
    {
        "title": "15.3 OAuth2 Login Flow",
        "emoji": "🕸️",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Delegated Authorization</h3>
                <p class="leading-relaxed mb-6">
                    Handling passwords is dangerous. OAuth2 allows you to say: 
                    "I don't want your password. Go tell Google you are who you say you are, and come back with a pass."
                </p>

                <h4 class="text-xl font-bold text-white mb-4">The Authorization Code Flow</h4>
                <div class="relative bg-slate-900 p-6 rounded-xl border border-slate-700">
                    <div class="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-700"></div>
                    
                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-slate-500 border-2 border-slate-900"></div>
                        <div class="font-bold text-slate-300">1. User Clicks "Login with GitHub"</div>
                        <div class="text-xs text-slate-500">Browser redirects to github.com/login...</div>
                    </div>
                    
                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-slate-900"></div>
                        <div class="font-bold text-blue-400">2. User Approves App</div>
                        <div class="text-xs text-slate-500">"Do you want to share your email with App?" -> Yes</div>
                    </div>

                    <div class="relative pl-8 mb-6">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-green-500 border-2 border-slate-900"></div>
                        <div class="font-bold text-green-400">3. GitHub Redirects Back</div>
                        <div class="text-xs text-slate-500">Callback URL: /login/oauth2/code/github?code=XYZ123</div>
                    </div>

                    <div class="relative pl-8">
                        <div class="absolute left-4 top-2 w-4 h-4 rounded-full bg-purple-500 border-2 border-slate-900"></div>
                        <div class="font-bold text-purple-400">4. Backend Swaps Code for Token</div>
                        <div class="text-xs text-slate-500">Server talks to GitHub API directly to get Access Token.</div>
                    </div>
                </div>
            </section>

            {code_block("""
spring:
  security:
    oauth2:
      client:
        registration:
          github:
            clientId: ${{GITHUB_CLIENT_ID}}
            clientSecret: ${{GITHUB_CLIENT_SECRET}}
            scope: read:user
""", filename="application.yml", lang="yaml")}
        </div>
        """
    },
    {
        "title": "15.4 Granular Protection: Method Security",
        "emoji": "🔒",
        "content": f"""
        <div class="space-y-8 text-slate-300">
            
            <section>
                <h3 class="text-2xl font-bold text-white mb-4">Defense in Depth</h3>
                <p class="leading-relaxed mb-4">
                    Securing the URL (`/admin/**`) is good, but securing the actual Service Method is better. 
                    This protects you even if a developer accidentally exposes the wrong endpoint.
                </p>
                <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 mb-6">
                    <code class="text-green-400">@EnableMethodSecurity</code> <span class="text-slate-400 text-sm">- Add this to your main config.</span>
                </div>
            </section>

            <section>
                <h4 class="text-xl font-bold text-white mb-4">Annotation Arsenal</h4>
                <div class="grid grid-cols-1 gap-4">
                    <div class="p-4 bg-slate-800 rounded border border-slate-600">
                        <div class="font-bold text-red-400">@PreAuthorize</div>
                        <div class="text-sm text-slate-400 mb-2">Checks logic <strong>BEFORE</strong> entering the method.</div>
                        <code class="text-xs bg-black p-1 rounded text-red-200">@PreAuthorize("hasRole('ADMIN') and #amt < 5000")</code>
                    </div>
                    <div class="p-4 bg-slate-800 rounded border border-slate-600">
                        <div class="font-bold text-blue-400">@PostAuthorize</div>
                        <div class="text-sm text-slate-400 mb-2">Checks logic <strong>AFTER</strong> execution (can verify return object).</div>
                        <code class="text-xs bg-black p-1 rounded text-blue-200">@PostAuthorize("returnObject.owner == authentication.name")</code>
                    </div>
                </div>
            </section>

            {code_block("""
@Service
public class PayrollService {

    // SpEL (Spring Expression Language) Power!
    @PreAuthorize("hasAuthority('APPROVE_PAYROLL')")
    public void approveBonus(String employeeId, double amount) {
        // Logic
    }

    // Only let users read their OWN salary info
    @PostAuthorize("returnObject.owner == authentication.name")
    public PaySlip getSlip(String id) {
        return repo.findById(id);
    }
}
""", filename="PayrollService.java")}
        </div>
        """
    },
    {
        "title": "15.5 Mini Project: Secure Banking API",
        "emoji": "🏦",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Goal: Secure the Money</h3>
            <p>A Login endpoint that issues JWTs, and a Balance endpoint that requires them.</p>

            {code_block("""
@RestController
@RequestMapping("/api")
class BankController {
    
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest req) {
        // 1. Manually authenticate via AuthenticationManager
        Authentication auth = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(req.user, req.pass)
        );
        
        // 2. If successful, generate JWT
        if (auth.isAuthenticated()) {
            return jwtUtil.generate(req.user);
        }
        throw new BadCredentialsException("Wrong pass");
    }

    @GetMapping("/balance")
    public String getBalance(Authentication auth) {
        // 3. Spring Security injects the authenticated user from the JWT Filter
        // If we are here, the JWT was valid!
        return "Hello " + auth.getName() + ", Balance: $5000";
    }
}
""", filename="SecureBank.java")}
            
            <p class="text-orange-400 font-bold mt-4">Try accessing /balance without the Header. "403 Forbidden"!</p>
        </div>
        """
    }
]
