export const INTERVIEW_PROMPTS = {
    // System message for AI interviewer
    systemPrompt: `You are an expert technical interviewer conducting a professional interview for a Full Stack Engineer position. Your expertise includes:

- React, Node.js, TypeScript, JavaScript
- Database design (SQL & NoSQL)
- System design and scalability
- REST APIs and web architecture
- Testing, CI/CD, DevOps basics
- Performance optimization
- Security best practices

Your interview approach:
1. Ask progressive questions from fundamentals to advanced
2. Listen for clarity, correctness, and problem-solving approach
3. Provide encouraging but honest feedback
4. Follow up to understand depth of knowledge
5. Adapt based on candidate responses

For each answer, provide:
- Brief feedback (2-3 sentences)
- Highlight one strength
- Suggest one area for improvement (if applicable)
- Be constructive and supportive

Keep feedback concise and actionable.`,

    // Round-specific difficulty levels
    roundConfig: {
        1: {
            difficulty: 'FUNDAMENTAL',
            description: 'Warm-up questions to assess basics',
            minQuestionLength: 30,
            maxQuestionLength: 100
        },
        2: {
            difficulty: 'INTERMEDIATE',
            description: 'Practical application and problem-solving',
            minQuestionLength: 50,
            maxQuestionLength: 150
        },
        3: {
            difficulty: 'ADVANCED',
            description: 'System design and architecture thinking',
            minQuestionLength: 70,
            maxQuestionLength: 200
        }
    },

    // Topic database
    topics: {
        react: [
            'Explain React hooks and their purpose',
            'What is the difference between controlled and uncontrolled components?',
            'How would you optimize a React component for performance?',
            'Describe the component lifecycle in React',
            'What are the benefits of using context API vs Redux?'
        ],
        nodejs: [
            'Explain the event loop in Node.js',
            'What are streams and when would you use them?',
            'How do you handle errors in async/await?',
            'Describe middleware in Express.js',
            'What is the difference between process.on and process.once?'
        ],
        database: [
            'Design a database schema for a social media platform',
            'Explain normalization and denormalization',
            'What are database indexes and how do they impact performance?',
            'Compare SQL and NoSQL databases',
            'How would you handle large-scale data pagination?'
        ],
        systemdesign: [
            'Design a URL shortener service',
            'How would you design a real-time chat application?',
            'Explain horizontal vs vertical scaling',
            'Design a rate limiting system',
            'How would you implement caching in a web application?'
        ],
        performance: [
            'What are Core Web Vitals and why are they important?',
            'How would you optimize bundle size in a React application?',
            'Explain lazy loading and code splitting',
            'What are the strategies for optimizing database queries?',
            'How do you approach performance profiling?'
        ]
    },

    // Feedback templates
    feedbackTemplates: {
        excellent: {
            prefix: '✅ Excellent answer!',
            suffix: 'Your understanding of this concept is clear and comprehensive.'
        },
        good: {
            prefix: '👍 Good response.',
            suffix: 'You covered the main points well.'
        },
        acceptable: {
            prefix: '⚠️ Acceptable answer.',
            suffix: 'There are some areas we could improve upon.'
        },
        needsWork: {
            prefix: '📝 Let me clarify this concept.',
            suffix: 'This is an important area to strengthen.'
        }
    },

    // Evaluation criteria
    evaluationCriteria: {
        correctness: 'Is the answer technically accurate?',
        completeness: 'Does it cover all important aspects?',
        clarity: 'Is it explained clearly and understandably?',
        depth: 'Does it show deep understanding?',
        communication: 'Is the communication effective?'
    }
}

export const generateFeedback = (
    score: number,
    correctParts: string[],
    improvements: string[]
): string => {
    let feedback = ''

    if (score >= 80) {
        feedback = '✅ Excellent answer! '
    } else if (score >= 60) {
        feedback = '👍 Good response. '
    } else if (score >= 40) {
        feedback = '⚠️ Acceptable answer. '
    } else {
        feedback = '📝 Let me provide some clarification. '
    }

    feedback += `You did well on: ${correctParts.join(', ')}. `

    if (improvements.length > 0) {
        feedback += `Next time, focus on: ${improvements.join(', ')}.`
    }

    return feedback
}

export const getTopicsForRound = (round: number): string[] => {
    const allTopics = Object.values(INTERVIEW_PROMPTS.topics).flat()

    // Shuffle and return topics based on round
    return allTopics.sort(() => Math.random() - 0.5).slice(0, 2)
}
