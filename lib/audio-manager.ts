export class AudioManager {
    private static instance: AudioManager;
    private audioContext: AudioContext | null = null;
    private currentSource: AudioBufferSourceNode | null = null;
    private onPlayStateChange: ((isPlaying: boolean) => void) | null = null;

    private constructor() { }

    public static getInstance(): AudioManager {
        if (!AudioManager.instance) {
            AudioManager.instance = new AudioManager();
        }
        return AudioManager.instance;
    }

    public setpOnPlayStateChange(callback: (isPlaying: boolean) => void) {
        this.onPlayStateChange = callback;
    }

    public resume() {
        this.initContext();
    }

    private initContext() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }

    public async playStream(stream: ReadableStream<Uint8Array>) {
        this.stop();
        if (this.onPlayStateChange) this.onPlayStateChange(true);

        const mediaSource = new MediaSource();
        const audio = new Audio();
        audio.src = URL.createObjectURL(mediaSource);
        
        // Cleanup function
        const cleanup = () => {
             audio.pause();
             audio.removeAttribute('src');
             if (this.onPlayStateChange) this.onPlayStateChange(false);
        };

        this.currentSource = { stop: cleanup } as any; // Hack to fit interface

        return new Promise<void>((resolve, reject) => {
             mediaSource.addEventListener('sourceopen', async () => {
                try {
                    const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');
                    const reader = stream.getReader();
                    const queue: Uint8Array[] = [];
                    let isUpdating = false;

                    const processQueue = () => {
                        if (!isUpdating && queue.length > 0) {
                            const chunk = queue.shift();
                            if (chunk) {
                                try {
                                    sourceBuffer.appendBuffer(chunk as unknown as BufferSource);
                                    isUpdating = true;
                                } catch (e) {
                                    console.error("SourceBuffer Append Error", e);
                                }
                            }
                        }
                    };

                    sourceBuffer.addEventListener('updateend', () => {
                        isUpdating = false;
                        processQueue();
                        if (queue.length === 0 && isDone && !sourceBuffer.updating) {
                             if (mediaSource.readyState === 'open') mediaSource.endOfStream();
                        }
                    });

                    let isDone = false;
                    audio.play().catch(e => console.error("Auto-play failed", e));

                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) {
                            isDone = true;
                            if (!isUpdating && queue.length === 0 && mediaSource.readyState === 'open') {
                                mediaSource.endOfStream();
                            }
                            break;
                        }
                        if (value) {
                            queue.push(value);
                            processQueue();
                        }
                    }
                } catch (e) {
                    console.error("Stream Error", e);
                    reject(e);
                }
             });

             audio.onended = () => {
                 cleanup();
                 resolve();
             };

             audio.onerror = (e) => {
                 console.error("Audio Element Error", e);
                 cleanup();
                 reject(e);
             };
        });
    }

    public async play(audioBuffer: ArrayBuffer) {
        // Legacy support calling playBuffer
        return this.playBuffer(audioBuffer);
    }

    public async playBuffer(audioBuffer: ArrayBuffer) {
        this.stop(); // Critical: Stop previous audio
        this.initContext();

        if (!this.audioContext) return;

        try {
            const buffer = await this.audioContext.decodeAudioData(audioBuffer.slice(0));

            const source = this.audioContext.createBufferSource();
            source.buffer = buffer;
            source.connect(this.audioContext.destination);

            source.start(0);
            this.currentSource = source;

            if (this.onPlayStateChange) this.onPlayStateChange(true);

            return new Promise<void>((resolve) => {
                source.onended = () => {
                    this.currentSource = null;
                    if (this.onPlayStateChange) this.onPlayStateChange(false);
                    resolve();
                };
            });
        } catch (error) {
            console.error("Audio Playback Error:", error);
            if (this.onPlayStateChange) this.onPlayStateChange(false);
        }
    }

    public stop() {
        if (this.currentSource) {
            try {
                if ((this.currentSource as any).stop) (this.currentSource as any).stop();
                else this.currentSource.stop();
            } catch (e) {
                // Ignore errors if already stopped
            }
            this.currentSource = null;
            if (this.onPlayStateChange) this.onPlayStateChange(false);
        }
    }
}

export const audioManager = AudioManager.getInstance();
