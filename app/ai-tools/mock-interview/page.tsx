import { redirect } from 'next/navigation';

export default function LegacyMockInterviewPage() {
    redirect('/interview/config');
}
