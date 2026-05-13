import { supabase } from '@/lib/supabase';
import crypto from 'crypto';
import { notFound } from 'next/navigation';
import { BadgeCheck, XCircle, Calendar, User, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CertificateTemplate } from '@/components/certificate-template';


const CERTIFICATE_SECRET = process.env.CERTIFICATE_SECRET_KEY || 'dev-secret-key';

async function getCertificate(certId: string) {
    if (!supabase) return null;

    const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .eq('certificate_number', certId)
        .single();

    if (error || !data) return null;
    return data;
}

function verifySignature(cert: any) {
    try {
        const expectedSignature = crypto
            .createHmac('sha256', CERTIFICATE_SECRET)
            .update(JSON.stringify({
                userId: cert.user_id,
                courseId: cert.course_id,
                studentName: cert.student_name,
                score: cert.score,
                issuedDate: cert.issued_date,
                certificateNumber: cert.certificate_number,
            }))
            .digest('hex');

        // Constant-time comparison to prevent timing attacks
        return crypto.timingSafeEqual(
            Buffer.from(cert.signature),
            Buffer.from(expectedSignature)
        );
    } catch (e) {
        console.error("Verification failed", e);
        return false;
    }
}

export default async function VerifyPage({ params }: { params: { certificateId: string } }) {
    const cert = await getCertificate(params.certificateId);

    if (!cert) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">
                    <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold">Certificate Not Found</h1>
                    <p className="text-white/60 mt-2">The certificate ID provided does not exist.</p>
                </div>
            </div>
        )
    }

    const isValid = verifySignature(cert);

    return (
        <div className="min-h-screen bg-[#030014] p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <div className="mb-8 flex items-center justify-between">
                    <Link href="/" className="text-white/60 hover:text-white transition-colors">← Back to Flyeng Career</Link>
                    <div className={`px-4 py-2 rounded-full border flex items-center gap-2 ${isValid ? 'bg-green-500/10 border-green-500/50 text-green-400' : 'bg-red-500/10 border-red-500/50 text-red-400'}`}>
                        {isValid ? <BadgeCheck className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                        {isValid ? 'Officially Verified & Valid' : 'Invalid Signature / Tampered'}
                    </div>
                </div>

                {/* Certificate Preview Card */}
                {/* Certificate Preview Card */}
                <div id="certificate-view" className="w-full">
                    <CertificateTemplate
                        studentName={cert.student_name}
                        courseName={cert.course_name}
                        score={cert.score}
                        totalQuestions={cert.total_questions}
                        issuedDate={cert.issued_date}
                        certificateId={cert.certificate_number}
                        qrCodeUrl={cert.qr_code_url}
                    />
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-4 mt-8">
                    <Button className="bg-white text-black hover:bg-gray-200" onClick={() => window.print()}>
                        Download PDF
                    </Button>
                </div>
            </div>
        </div>
    )
}
