const fs = require('fs');
const path = require('path');
const envPath = path.join(process.cwd(), '.env.local');

const content = `NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-ABCDEF
GEMINI_API_KEY=YOUR_GEMINI_KEY
GROQ_API_KEY=YOUR_GROQ_KEY
`;

try {
    fs.writeFileSync(envPath, content, { encoding: 'utf8' });
    console.log('Successfully rewrote .env.local with clean content.');
} catch (err) {
    console.error('Failed to write .env.local:', err);
    process.exit(1);
}
