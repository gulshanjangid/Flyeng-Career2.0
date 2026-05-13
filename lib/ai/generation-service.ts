import { GoogleGenerativeAI } from "@google/generative-ai";
import Groq from "groq-sdk";
import { SiteAssembler, WebsiteBlueprint } from "../components/assembler";
// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
// Initialize Groq
// Initialize Groq Lazily
const getGroqClient = () => new Groq({
    apiKey: process.env.GROQ_API_KEY || 'YOUR_GROQ_API_KEY'
});
const SYSTEM_PROMPT_V5 = `
[ROLE]
You are the Lead Frontend Architect for "FC Agent".
Your goal is to DESIGN a comprehensive, multi-page web application.

[OUTPUT FORMAT]
You must output a single valid JSON object strictly matching this schema:
{
  "settings": {
    "colorTheme": "neon" | "aurora" | "sunset" | "ocean",
    "font": "Inter" | "Plus Jakarta Sans"
  },
  "pages": [
    {
      "name": "Home",
      "route": "/",
      "sections": [
        { "id": "nav", "type": "navigation.navbar.premium", "content": {} },
        { "id": "hero", "type": "hero.fullScreen", "content": { "headline": "...", "subheadline": "..." } },
        { "id": "footer", "type": "footer.complete", "content": {} }
      ]
    },
    {
      "name": "Features",
      "route": "/features",
      "sections": [ ... ]
    }
  ]
}

[INSTRUCTIONS]
1. Analyze the user request. Break it down into logical pages (Home, Pricing, About, Contact).
2. ALWAYS include at least 3 pages unless requested otherwise.
4. Select premium components from the library. AVAILABLE TYPES:
   - Navigation: navigation.navbar.premium, navigation.navbar.minimal
   - Hero: hero.fullScreen, hero.minimal
   - Features: features.bentoGrid, features.list, features.alternating
   - Gallery: gallery.productGrid, gallery.masonry, gallery.carousel
   - Newsletter: newsletter.signup, newsletter.minimal
   - FAQ: faq.accordion
   - Blog: blog.grid
   - CTA: cta.fullWidth
   - Footer: footer.complete
5. Output strict JSON.
`;

// Helper to convert AsyncGenerator to ReadableStream
function generatorToStream(generator: AsyncGenerator<string>) {
    return new ReadableStream({
        async pull(controller) {
            try {
                const { value, done } = await generator.next();
                if (done) {
                    controller.close();
                } else {
                    controller.enqueue(new TextEncoder().encode(value));
                }
            } catch (e) {
                controller.error(e);
            }
        }
    });
}

// Unified Generation Function with Fallback
export async function generateWebsite(
    prompt: string,
    projectId: string,
    model: string = 'llama-3.3-70b-versatile',
    currentCode?: string
): Promise<ReadableStream> {

    // v5.5 Architecture: JSON Architect -> Assembler -> Stream
    async function* assemblerPipeline() {
        let jsonString = '';
        let groqFailed = false;

        // 1. Architect Phase (Get JSON Blueprint)
        try {
            console.log("Architecting with Groq (v5.5)...");
            const groqModel = (model.includes('gemini') || model === 'sem') ? 'llama-3.3-70b-versatile' : model;
            const groqGen = generateWithGroq(prompt, groqModel, SYSTEM_PROMPT_V5);
            for await (const chunk of groqGen) {
                jsonString += chunk; // Buffer the JSON
            }
        } catch (error) {
            console.warn("Groq Architect Failed. Switching to Gemini...", error);
            groqFailed = true;
        }

        if (groqFailed) {
            try {
                console.log("Architecting with Gemini Fallback (v5.5)...");
                const geminiGen = generateWithGemini(prompt, SYSTEM_PROMPT_V5);
                jsonString = ''; // Reset buffer
                for await (const chunk of geminiGen) {
                    jsonString += chunk;
                }
            } catch (geminiError) {
                console.warn("Gemini Architect Failed too.", geminiError);
                yield* generateMock(); // Absolute failure
                return;
            }
        }

        // 2. Sanitation Phase (Clean JSON)
        try {
            const cleanJson = jsonString.replace(/```json|```/g, '').trim();
            const start = cleanJson.indexOf('{');
            const end = cleanJson.lastIndexOf('}');
            const finalJson = cleanJson.substring(start, end + 1);

            console.log("Blueprint received:", finalJson.substring(0, 100) + "...");
            const blueprint = JSON.parse(finalJson) as WebsiteBlueprint;

            // 3. Assembly Phase
            const files = SiteAssembler.assemble(blueprint);
            const appCode = files['App.jsx'] || '';

            // 4. Streaming Phase
            // We stream the main App.jsx for visual feedback
            const chunkSize = 50;
            for (let i = 0; i < appCode.length; i += chunkSize) {
                yield appCode.slice(i, i + chunkSize);
                await new Promise(r => setTimeout(r, 1));
            }

            // 5. FILE PAYLOAD TRANSFER
            // We append a special delimiter and the JSON payload of ALL files
            // This is intercepted by the Next.js API route to build the file tree
            yield "\n/* |||FILES_START||| */\n";
            yield JSON.stringify(files); // Stream the huge JSON blob

        } catch (parseError) {
            console.error("Blueprint Parse Error:", parseError, "Raw:", jsonString);
            // Fallback to Mock if JSON is invalid
            yield* generateMock();
        }
    }

    return generatorToStream(assemblerPipeline());
}

async function* generateWithGemini(prompt: string, systemPrompt: string) {
    if (!process.env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY missing");
    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: systemPrompt
    });
    const result = await model.generateContentStream(prompt);
    for await (const chunk of result.stream) {
        yield chunk.text();
    }
}

async function* generateWithGroq(prompt: string, modelId: string, systemPrompt: string) {
    if (!process.env.GROQ_API_KEY) throw new Error("GROQ_API_KEY missing");
    const stream = await getGroqClient().chat.completions.create({
        messages: [{ role: "system", content: systemPrompt }, { role: "user", content: prompt }],
        model: modelId,
        stream: true,
        temperature: 0.1, // Low temp for valid JSON
        response_format: { type: "json_object" } // Force JSON
    });

    for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        if (content) yield content;
    }
}

async function* generateMock() {
    const mockCode = `
import React from 'react';
import { TriangleAlert } from 'lucide-react';

export default function App() { 
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0f] text-white p-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-12 flex flex-col items-center max-w-2xl text-center backdrop-blur-xl">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                    <TriangleAlert className="w-8 h-8 text-red-500" />
                </div>
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    Blueprint Failure
                </h1>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                   The architect could not generate a valid blueprint. 
                   System fallback engaged.
                </p>
                <button 
                    className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full font-medium transition-all hover:scale-105"
                    onClick={() => window.location.reload()}
                >
                    Retry Generation
                </button>
            </div>
        </div>
    );
}`;

    const tokens = mockCode.match(/.{1,5}/g) || [];
    for (const token of tokens) {
        await new Promise(r => setTimeout(r, 5));
        yield token;
    }
}
