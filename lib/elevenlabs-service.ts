import axios from 'axios';

export async function generatePremiumVoice(
    text: string,
    voiceId: string = '21m00Tcm4TlvDq8ikWAM' // Default (Sarah) if not provided
): Promise<ArrayBuffer> {
    try {
        const response = await fetch('/api/interview/speak', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, voiceId })
        });

        if (!response.ok) {
            throw new Error(`TTS Error: ${response.statusText}`);
        }

        return await response.arrayBuffer();
    } catch (error) {
        console.error('ElevenLabs error:', error);
        throw error;
    }
}

export async function playAudioStream(audioBuffer: ArrayBuffer) {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const audioData = await audioContext.decodeAudioData(audioBuffer.slice(0));
    const source = audioContext.createBufferSource();
    source.buffer = audioData;
    source.connect(audioContext.destination);
    source.start();
}

// Aliases for v4.0 UI compatibility
// Stream support
export async function generateVoiceStream(
    text: string,
    voiceId: string = '21m00Tcm4TlvDq8ikWAM'
): Promise<ReadableStream<Uint8Array>> {
     try {
        const response = await fetch('/api/interview/speak', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, voiceId })
        });

        if (!response.ok || !response.body) {
            throw new Error(`TTS Error: ${response.statusText}`);
        }

        return response.body;
    } catch (error) {
        console.error('ElevenLabs Stream error:', error);
        throw error;
    }
}

export const generateSpeech = generatePremiumVoice;
export const playAudio = playAudioStream;
export const streamSpeech = generateVoiceStream;
