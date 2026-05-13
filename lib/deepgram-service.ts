import { createClient, LiveTranscriptionEvents } from '@deepgram/sdk';

// Ensure the API key interacts with the client-side appropriately if used there
const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY || '');

export async function createLiveTranscription(onTranscript: (text: string, isFinal?: boolean) => void) {
    const connection = deepgram.listen.live({
        model: 'nova-2',
        language: 'en',
        smart_format: true,
        interim_results: true,
        endpointing: 500
    });

    let fullTranscript = '';
    let interimTranscript = '';

    connection.on(LiveTranscriptionEvents.Open, () => {
        console.log('✅ Deepgram connection open');
    });

    connection.on(LiveTranscriptionEvents.Transcript, (data: any) => {
        const transcript = data.channel.alternatives[0].transcript;
        if (transcript) {
            if (data.is_final) {
                fullTranscript += transcript + ' ';
                interimTranscript = '';
                onTranscript(fullTranscript.trim(), true);
            } else {
                interimTranscript = transcript;
                onTranscript(fullTranscript + interimTranscript, false);
            }
        }
    });

    return new Promise((resolve, reject) => {
        connection.on(LiveTranscriptionEvents.Open, () => {
            console.log('✅ Deepgram connection open');
            resolve(connection);
        });

        connection.on(LiveTranscriptionEvents.Error, (error: any) => {
            console.error('Deepgram error:', error);
            reject(error);
        });
    });
}

export async function streamAudioToDeepgram(connection: any, audioChunk: Blob) {
    // Send directly, assuming connection is open (since we await it now)
    // or rely on SDK buffering if slightly out of sync.
    // However, catching errors is good.
    try {
        if (connection.getReadyState() === 1) {
            connection.send(audioChunk);
        } else {
            console.warn("Deepgram not ready, dropping frame");
        }
    } catch (e) {
        console.error("Error sending audio to Deepgram:", e);
    }
}

export async function closeDeepgramConnection(connection: any) {
    if (connection) {
        connection.finish();
    }
}

// Aliases for v4.0 UI compatibility
export const setupDeepgramTranscription = async (
    onTranscript: (text: string, isFinal: boolean) => void,
    onError: (error: string) => void
) => {
    try {
        const connection = await createLiveTranscription((text, isFinal) => {
            onTranscript(text, isFinal || false);
        });
        return connection;
    } catch (e: any) {
        onError(e.message);
        return null;
    }
};

export const closeDeepgram = closeDeepgramConnection;
