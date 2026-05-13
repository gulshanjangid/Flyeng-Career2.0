import * as faceapi from '@vladmandic/face-api';

// Configuration for models
const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/';

let modelsLoaded = false;

export async function loadFaceDetectionModel() {
    if (modelsLoaded) return true;

    try {
        console.log("Loading Face API models...");
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
        ]);
        modelsLoaded = true;
        console.log("Face API models loaded successfully");
        return true;
    } catch (e) {
        console.error("Error loading face models:", e);
        return false;
    }
}

export interface FaceAnalysisResult {
    isFaceDetected: boolean;
    expressions?: faceapi.FaceExpressions;
    dominantEmotion?: string;
    confidenceScore?: number; // 0-100
}

// Queue for smoothing confidence scores (Rolling Average)
const confidenceQueue: number[] = [];
const QUEUE_SIZE = 10;

export async function analyzeFace(videoElement: HTMLVideoElement): Promise<FaceAnalysisResult> {
    if (!modelsLoaded) {
        const success = await loadFaceDetectionModel();
        if (!success) return { isFaceDetected: false };
    }

    try {
        // Use Tiny Face Detector for performance
        const detection = await faceapi.detectSingleFace(
            videoElement, 
            new faceapi.TinyFaceDetectorOptions({ inputSize: 224, scoreThreshold: 0.3 })
        ).withFaceExpressions();

        if (!detection) {
            return { isFaceDetected: false };
        }

        const expressions = detection.expressions;
        
        // Determine dominant emotion
        const sorted = Object.entries(expressions).sort((a, b) => b[1] - a[1]);
        const dominantEmotion = sorted[0][0];

        // Calculate Confidence Score
        // Formula: Base 50 + (Happy * 50) + (Neutral * 30) - (Fearful * 30) - (Sad * 30)
        // Clamped between 0 and 100
        let rawScore = 50;
        if (expressions) {
            rawScore += (expressions.happy || 0) * 50;
            rawScore += (expressions.neutral || 0) * 30;
            rawScore -= (expressions.fearful || 0) * 30;
            rawScore -= (expressions.sad || 0) * 30;
            rawScore -= (expressions.disgusted || 0) * 20;
        }

        // Clamp
        const clampedScore = Math.min(Math.max(rawScore, 0), 100);

        // Add to Queue
        confidenceQueue.push(clampedScore);
        if (confidenceQueue.length > QUEUE_SIZE) {
            confidenceQueue.shift();
        }

        // Calculate Average
        const avgScore = Math.round(confidenceQueue.reduce((a, b) => a + b, 0) / confidenceQueue.length);

        return {
            isFaceDetected: true,
            expressions,
            dominantEmotion,
            confidenceScore: avgScore
        };

    } catch (e) {
        console.error("Face analysis error:", e);
        return { isFaceDetected: false }; 
    }
}
