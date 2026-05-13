const fs = require('fs');
const path = require('path');
const https = require('https');

// 1. Read .env.local manually
const envPath = path.join(process.cwd(), '.env.local');
let apiKey = '';

try {
    const content = fs.readFileSync(envPath, 'utf8');
    const match = content.match(/GEMINI_API_KEY=(.*)/);
    if (match && match[1]) {
        apiKey = match[1].trim();
        console.log('Found GEMINI_API_KEY in .env.local');
    } else {
        console.error('GEMINI_API_KEY not found in .env.local');
    }
} catch (e) {
    console.error('Could not read .env.local', e.message);
}

if (!apiKey) { 
    console.error('Aborting test due to missing API key.');
    process.exit(1);
}

// 2. Test Gemini API via raw HTTPS
const data = JSON.stringify({
    contents: [{
        parts: [{
            text: "Hello, are you working?"
        }]
    }]
});

const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

console.log('Sending request to Gemini API...');

const req = https.request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);

    let responseBody = '';

    res.on('data', (chunk) => {
        responseBody += chunk;
    });

    res.on('end', () => {
        if (res.statusCode === 200) {
            console.log('Success! API responded.');
            console.log('Response snippet:', responseBody.substring(0, 100) + '...');
        } else {
            console.error('API Error:', responseBody);
        }
    });
});

req.on('error', (error) => {
    console.error('Network Error:', error);
});

req.write(data);
req.end();
