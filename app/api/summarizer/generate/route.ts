import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import * as pdfjsLib from 'pdfjs-dist';
import mammoth from 'mammoth';



export async function POST(req: Request) {
    try {
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || 'YOUR_GROQ_API_KEY' });
        const formData = await req.formData();
        const file = formData.get('file') as File | null;
        const textInput = formData.get('text') as string | null;
        const length = formData.get('length') as string || 'medium';
        const format = formData.get('format') as string || 'bullet';

        let textToSummarize = '';

        if (file) {
            // BACKEND ENFORCEMENT: 2MB Limit
            if (file.size > 2 * 1024 * 1024) {
                return NextResponse.json(
                    { error: 'File is too large! Please upload a document strictly under 2MB.' },
                    { status: 413 }
                );
            }

            if (file.type === 'application/pdf') {
                try {
                    const arrayBuffer = await file.arrayBuffer();
                    const typedArray = new Uint8Array(arrayBuffer);
                    
                    // Use pdfjs-dist to extract text
                    const pdfDoc = await pdfjsLib.getDocument({ data: typedArray }).promise;
                    const textParts: string[] = [];
                    
                    for (let i = 1; i <= pdfDoc.numPages; i++) {
                        const page = await pdfDoc.getPage(i);
                        const textContent = await page.getTextContent();
                        const pageText = textContent.items
                            .map((item: any) => item.str || '')
                            .join(' ');
                        textParts.push(pageText);
                    }
                    
                    textToSummarize = textParts.join('\n\n');
                } catch (pdfError) {
                    console.error('PDF parsing error:', pdfError);
                    return NextResponse.json(
                        { error: 'Failed to parse PDF. Please try a .txt or .docx file.' },
                        { status: 400 }
                    );
                }
            } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.name.endsWith('.docx')) {
                try {
                    const arrayBuffer = await file.arrayBuffer();
                    const buffer = Buffer.from(arrayBuffer);
                    const result = await mammoth.extractRawText({ buffer });
                    textToSummarize = result.value;
                } catch (docxError) {
                    console.error('DOCX parsing error:', docxError);
                    return NextResponse.json(
                        { error: 'Failed to parse Document. Please ensure it is a valid .docx file.' },
                        { status: 400 }
                    );
                }
            } else if (file.type === 'text/plain') {
                textToSummarize = await file.text();
            } else {
                return NextResponse.json(
                    { error: 'Unsupported file type. Please use PDF, DOCX, or TXT files.' },
                    { status: 400 }
                );
            }
        } else if (textInput) {
            textToSummarize = textInput;
        } else {
            return NextResponse.json(
                { error: 'Text or File is required' },
                { status: 400 }
            );
        }

        if (!textToSummarize.trim()) {
            return NextResponse.json(
                { error: 'Could not extract text from the provided input.' },
                { status: 400 }
            );
        }

        // Truncate if too long (Groq limit approx 12k tokens per minute for free tier)
        // 12000 chars is roughly 3000-4000 tokens, well within limits.
        if (textToSummarize.length > 12000) {
            textToSummarize = textToSummarize.slice(0, 12000) + '... [TRUNCATED]';
        }

        let lengthPrompt = '';
        switch (length) {
            case 'short':
                lengthPrompt = 'Keep it very concise, under 100 words.';
                break;
            case 'medium':
                lengthPrompt = 'Provide a balanced summary, around 200-300 words.';
                break;
            case 'long':
                lengthPrompt = 'Provide a detailed summary, capturing all key nuances, around 500 words.';
                break;
        }

        let formatPrompt = '';
        switch (format) {
            case 'bullet':
                formatPrompt = 'Use bullet points for key takeaways.';
                break;
            case 'paragraph':
                formatPrompt = 'Write in coherent paragraphs.';
                break;
        }

        const prompt = `
        You are an expert summarizer. Your task is to summarize the following text.
        
        INSTRUCTIONS:
        1. ${lengthPrompt}
        2. ${formatPrompt}
        3. Capture the main ideas and critical details.
        4. Ignore irrelevant filler.
        5. Use a professional, objective tone.
        
        TEXT TO SUMMARIZE:
        ${textToSummarize}
        
        OUTPUT:
        Return ONLY the summary. Do not include any conversational filler.
        `;

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.5,
            max_tokens: 1024,
        });

        const content = completion.choices[0]?.message?.content || '';

        return NextResponse.json({ content });

    } catch (error) {
        console.error('Error generating summary:', error);
        return NextResponse.json(
            { error: 'Failed to generate summary' },
            { status: 500 }
        );
    }
}
