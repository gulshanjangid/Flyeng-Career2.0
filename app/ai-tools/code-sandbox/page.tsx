import type { Metadata } from 'next'
import CodeSandboxClient from '@/components/code-sandbox-client'

export const metadata: Metadata = {
  title: 'Hostile AI Code Sandbox | Flyeng Career',
  description: 'Experience intense, real-time technical interviews with our brutal AI pair programmer. Write Javascript while being judged on every keystroke.',
}

export default function CodeSandboxPage() {
  return <CodeSandboxClient />
}
