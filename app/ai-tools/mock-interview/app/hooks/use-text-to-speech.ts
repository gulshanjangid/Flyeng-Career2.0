import { useState, useCallback } from "react";

export const useTextToSpeech = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;

    const speak = useCallback((text: string) => {
        if (!synth) return;
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        const voices = synth.getVoices();
        const preferredVoice = voices.find(v => v.name.includes("Google UK English Female")) ||
            voices.find(v => v.name.includes("Google US English"));
        if (preferredVoice) utterance.voice = preferredVoice;
        setIsSpeaking(true);
        synth.speak(utterance);
    }, [synth]);

    const stopSpeaking = useCallback(() => {
        if (synth) {
            synth.cancel();
            setIsSpeaking(false);
        }
    }, [synth]);
    return { isSpeaking, speak, stopSpeaking };
};
