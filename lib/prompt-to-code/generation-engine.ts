import Groq from 'groq-sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { z } from 'zod';
import { buildPrompt, PromptRequest } from './prompt-builder';

// Define the schema for the generated site response
const GeneratedSiteSchema = z.object({
    pageMeta: z.object({
        title: z.string().max(60),
        description: z.string().max(160),
        keywords: z.array(z.string()).min(1),
        ogTitle: z.string().optional(),
        ogDescription: z.string().optional(),
        ogImage: z.string().optional(),
    }),
    files: z.record(z.string().min(1)), // File path → content
    sections: z.array(z.object({
        type: z.string(),
        // variant: z.string().optional(), // Made optional as prompt might not strictly enforce it
        props: z.record(z.any()),
    })),
    notes: z.string(),
});

export type GeneratedSite = z.infer<typeof GeneratedSiteSchema>;

export class PromptToCodeEngine {
    private groq: Groq;
    private gemini: GoogleGenerativeAI;

    constructor(groqKey: string, geminiKey: string) {
        this.groq = new Groq({ apiKey: groqKey, dangerouslyAllowBrowser: true }); // Allow browser for demo if needed, but intended for server
        this.gemini = new GoogleGenerativeAI(geminiKey);
    }

    async generate(request: PromptRequest): Promise<{ success: boolean; source: 'groq' | 'gemini'; latency: number; data: GeneratedSite }> {
        const prompt = buildPrompt(request);
        const startTime = Date.now();

        try {
            // Try Groq first (faster, cheaper - using Llama 3 70b)
            console.log('🚀 Starting Groq generation...');
            return await this.generateWithGroq(prompt, startTime);

        } catch (groqError) {
            const groqTime = Date.now() - startTime;
            console.warn(`⚠️ Groq failed after ${groqTime}ms:`, groqError);
            console.log('🔄 Falling back to Gemini...');

            try {
                return await this.generateWithGemini(prompt, startTime);
            } catch (geminiError: any) {
                console.error('❌ Both Groq and Gemini failed:', geminiError);
                throw new Error('Code generation failed. Please try again. System is overloaded.');
            }
        }
    }

    private async generateWithGroq(prompt: string, startTime: number) {
        let fullResponse = '';

        const completion = await this.groq.chat.completions.create({
            model: 'llama3-70b-8192', // Using standard Groq model ID
            messages: [{ role: 'system', content: prompt }], // System prompt is better for Llama 3
            temperature: 0.2, // Low temp for JSON consistency
            max_tokens: 8192,
            response_format: { type: 'json_object' }, // Enforce JSON
            stream: false, // For simplicity in this v1, strict request/response. Streaming can be added later.
        });

        fullResponse = completion.choices[0]?.message?.content || '';

        const latency = Date.now() - startTime;
        console.log(`✅ Groq generation complete: ${latency}ms`);

        return this.validateAndReturn(fullResponse, 'groq', latency);
    }

    private async generateWithGemini(prompt: string, startTime: number) {
        const model = this.gemini.getGenerativeModel({ model: 'gemini-1.5-flash', generationConfig: { responseMimeType: "application/json" } });
        const result = await model.generateContent(prompt);
        const fullResponse = result.response.text();

        const latency = Date.now() - startTime;
        console.log(`✅ Gemini generation complete: ${latency}ms`);

        return this.validateAndReturn(fullResponse, 'gemini', latency);
    }

    private validateAndReturn(response: string, source: 'groq' | 'gemini', latency: number) {
        try {
            // Robust JSON extraction
            let jsonStr = response;
            // Sometimes models wrap in markdown ```json ... ```
            const markdownMatch = response.match(/```json\s*([\s\S]*?)\s*```/);
            if (markdownMatch) {
                jsonStr = markdownMatch[1];
            } else {
                // Or generic curly braces finder
                const braceMatch = response.match(/\{[\s\S]*\}/);
                if (braceMatch) jsonStr = braceMatch[0];
            }

            const parsed = JSON.parse(jsonStr);
            const validated = GeneratedSiteSchema.parse(parsed);

            return {
                success: true,
                source,
                latency,
                data: validated,
                generatedAt: new Date().toISOString(),
            };

        } catch (error: any) {
            console.error('❌ Validation error:', error);
            console.error('Raw Response:', response);
            throw new Error(`Code generation validation failed: ${error.message}`);
        }
    }
}
