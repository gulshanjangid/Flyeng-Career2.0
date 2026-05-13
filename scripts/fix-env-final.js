const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');

const content = `NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyD-rykwh05ITaYu8p-vr4qwU-fpePlIWlU
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=my-firebase-project-6a01d.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=my-firebase-project-6a01d
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=my-firebase-project-6a01d.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=556309382965
NEXT_PUBLIC_FIREBASE_APP_ID=1:556309382965:web:cb6d682cdce09cb7362e7c
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-5DCKYF08GK
GEMINI_API_KEY=AIzaSyAHHsw44sybtES9Z8eRfK54C-6aotWbAkk
`;

try {
    fs.writeFileSync(envPath, content, { encoding: 'utf8' });
    console.log('Successfully rewrote .env.local with clean content.');
} catch (err) {
    console.error('Failed to write .env.local:', err);
    process.exit(1);
}
