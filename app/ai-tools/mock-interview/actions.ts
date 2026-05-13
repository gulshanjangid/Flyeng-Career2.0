'use server'

export async function checkApiConfig() {
  // This runs on the server, so it can access private env vars
  return {
    groq: !!process.env.GROQ_API_KEY,
    elevenlabs: !!process.env.ELEVENLABS_API_KEY,
    deepgram: !!(process.env.DEEPGRAM_API_KEY || process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY)
  }
}
