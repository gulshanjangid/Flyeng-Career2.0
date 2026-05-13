import { redirect } from 'next/navigation';

export default function LegacyMockInterviewAppPage() {
    redirect('/interview/config');
}
