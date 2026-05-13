// Using built-in fetch

async function testApi() {
    try {
        const response = await fetch('http://localhost:3000/api/project-ideas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                topic: "Sustainability",
                difficulty: "Beginner",
                techStack: "React"
            }),
        });

        if (!response.ok) {
            console.error('API Error:', response.status, response.statusText);
            const text = await response.text();
            console.error('Body:', text);
            return;
        }

        const data = await response.json();
        console.log('API Success:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

testApi();
