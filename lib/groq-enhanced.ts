import { INTERVIEW_PROMPTS } from './interview-prompts'

// Refactored to use Server-Side API Routes to prevent 401 Errors and hide API Keys

export async function generateEnhancedQuestion(
    role: string,
    level: string,
    round: number, 
    topic?: string, 
    history: any[] = [],
    persona: string = 'alex',
    interviewType: string = 'Technical',
    pace: string = 'normal',
    difficulty: string = 'standard',
    company: string = '',
    roundType: string = ''
): Promise<string> {
    try {
        const response = await fetch('/api/interview/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ role, level, round, topic, history, persona, interviewType, pace, difficulty, company, roundType })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        return data.question;
    } catch (error) {
        console.error('Error generating question:', error);
        return "Describe a challenging technical problem you solved recently.";
    }
}

export async function evaluateEnhancedResponse(
    question: string,
    answer: string,
    round: number,
    interviewType?: string,
    persona: string = 'alex',
    dominantEmotion: string = 'neutral',
    confidenceLevel: number = 50
): Promise<any> {
    try {
        const response = await fetch('/api/interview/evaluate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question, answer, round, interviewType, persona, dominantEmotion, confidenceLevel })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error evaluating response:', error);
        return {
            overallAssessment: "Good effort. Since the system is offline, I can't provide specific feedback, but you spoke clearly.",
            spokenFeedback: "Good effort. Let's keep going.",
            interviewerMood: "neutral",
            confidenceScore: 7,
            passedQuestion: true
        }; 
    }
} 

function getTopicsForRoundLocal(round: number): string[] {
    const topics: { [key: number]: string[] } = {
        1: ['React Basics', 'JavaScript Fundamentals', 'DOM APIs'],
        2: ['State Management', 'API Design', 'Database Queries'],
        3: ['System Design', 'Performance', 'Architecture']
    }
    return topics[round] || topics[1] 
}