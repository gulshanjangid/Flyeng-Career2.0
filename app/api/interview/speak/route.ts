
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { text, voiceId } = await req.json();

        if (!text) {
            return NextResponse.json({ error: 'Text is required' }, { status: 400 });
        }

        const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
        const VOICE_ID = voiceId || '21m00Tcm4TlvDq8ikWAM'; // Default to Sarah

        console.log('[TTS Route] voiceId:', VOICE_ID, 'keyPresent:', !!ELEVENLABS_API_KEY, 'keyPrefix:', ELEVENLABS_API_KEY?.substring(0, 8));

        if (!ELEVENLABS_API_KEY) {
            console.error('[TTS Route] ELEVENLABS_API_KEY is missing from env!');
            return NextResponse.json({ error: 'API key missing' }, { status: 500 });
        }

        const response = await fetch(
            `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/stream?optimize_streaming_latency=3`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'audio/mpeg',
                    'Content-Type': 'application/json',
                    'xi-api-key': ELEVENLABS_API_KEY,
                },
                body: JSON.stringify({
                    text,
                    model_id: 'eleven_multilingual_v2',
                    voice_settings: {
                        stability: 0.5,
                        similarity_boost: 0.75,
                    },
                }),
            }
        );

        if (!response.ok) {
            const error = await response.text();
            console.error('ElevenLabs API Error:', error);
            return NextResponse.json({ error: 'TTS Failed', details: error }, { status: response.status });
        }

        // Return the raw stream directly to the client
        return new NextResponse(response.body, {
            headers: {
                'Content-Type': 'audio/mpeg',
            },
        });

    } catch (error: any) {
        console.error('Stream Route Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
