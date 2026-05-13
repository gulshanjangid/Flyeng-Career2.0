import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import QRCode from 'qrcode';
import { supabase } from '@/lib/supabase';

const CERTIFICATE_SECRET = process.env.CERTIFICATE_SECRET_KEY || 'dev-secret-key';

function signCertificateData(data: any): string {
    const message = JSON.stringify(data);
    return crypto
        .createHmac('sha256', CERTIFICATE_SECRET)
        .update(message)
        .digest('hex');
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { userId, courseId, courseName, studentName, score, totalQuestions } = body;

        if (score < 16) { // Strict 80% Requirement
            // Allow for now for testing, or uncomment to enforce
            // return NextResponse.json({ error: 'Score too low for certification' }, { status: 400 });
        }

        if (!supabase) {
            return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
        }

        const certificateNumber = `CERT-${userId.substring(0, 5).toUpperCase()}-${courseId.toUpperCase().substring(0, 3)}-${Date.now().toString().substring(6)}`;
        const issuedDate = new Date().toISOString().split('T')[0];

        // Sign certificate
        const signature = signCertificateData({
            userId,
            courseId,
            studentName,
            score,
            issuedDate,
            certificateNumber
        });

        // Generate QR Code
        // In production, this URL should be the public domain
        const origin = req.headers.get('origin') || 'http://localhost:3000';
        const verificationUrl = `${origin}/verify/${certificateNumber}`;
        const qrCode = await QRCode.toDataURL(verificationUrl);

        // Store in Supabase
        const { data: cert, error: dbError } = await supabase
            .from('certificates')
            .insert({
                user_id: userId,
                course_id: courseId,
                course_name: courseName,
                student_name: studentName,
                score,
                total_questions: totalQuestions,
                certificate_number: certificateNumber,
                signature,
                qr_code_url: qrCode,
                issued_date: issuedDate,
                is_revoked: false,
            })
            .select()
            .single();

        if (dbError) {
            console.error('DB Error:', dbError);
            return NextResponse.json({ error: 'Failed to save certificate' }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            certificate: cert
        });

    } catch (error) {
        console.error('Certificate generation error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
