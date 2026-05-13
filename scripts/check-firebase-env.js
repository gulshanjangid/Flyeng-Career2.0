const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
function checkEnv() {
    const envLocalPath = path.join(process.cwd(), '.env.local');
    const envPath = path.join(process.cwd(), '.env');

    let envVars = {};

    if (fs.existsSync(envLocalPath)) {
        console.log('.env.local found.');
        const localConfig = dotenv.parse(fs.readFileSync(envLocalPath));
        envVars = { ...envVars, ...localConfig };
    } else {
        console.log('.env.local NOT found.');
    }

    if (fs.existsSync(envPath)) {
        console.log('.env found.');
        const config = dotenv.parse(fs.readFileSync(envPath));
        envVars = { ...config, ...envVars }; // .env.local overrides .env usually, but here we just want to see if they exist
    } else {
        console.log('.env NOT found.');
    }

    const requiredKeys = [
        'NEXT_PUBLIC_FIREBASE_API_KEY',
        'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
        'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
        'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
        'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
        'NEXT_PUBLIC_FIREBASE_APP_ID'
    ];

    const missing = [];
    const present = [];

    requiredKeys.forEach(key => {
        if (envVars[key]) {
            present.push(key);
        } else {
            missing.push(key);
        }
    });

    console.log('\n--- Environment Variable Check ---');
    if (present.length > 0) {
        console.log('Present keys:');
        present.forEach(k => console.log(`  ${k}`));
    }

    if (missing.length > 0) {
        console.log('\nMissing keys:');
        missing.forEach(k => console.log(`  ${k}`));
    } else {
        console.log('\nAll required Firebase keys are present.');
    }
}

checkEnv();
