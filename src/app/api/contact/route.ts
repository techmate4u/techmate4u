import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/lib/schemas';

// Sanitize input to prevent XSS and HTML injection
function sanitize(input: string): string {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

// Strip newlines to prevent email header injection
function stripNewlines(input: string): string {
    return input.replace(/[\r\n]/g, ' ').trim();
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Server-side Zod validation matching client-side schema exactly
        const validationResult = contactFormSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json({ 
                error: 'Validation failed', 
                details: validationResult.error.flatten().fieldErrors 
            }, { status: 400 });
        }

        const { name, email, phone, company, service, message } = validationResult.data;

        // Strip headers for safety and sanitize values for XSS
        const safeName = sanitize(stripNewlines(name));
        const safeEmail = sanitize(stripNewlines(email));
        const safePhone = sanitize(stripNewlines(phone));
        const safeCompany = company ? sanitize(stripNewlines(company)) : 'Not provided';
        const safeService = sanitize(stripNewlines(service));
        const safeMessage = message ? sanitize(message) : 'No details provided.';

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@techmate4u.com',
            replyTo: safeEmail,
            subject: `New Lead: [${safeService.toUpperCase()}] Inquiry from ${safeName}`,
            text: `New Project Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || 'Not provided'}\nService: ${service}\n\nProject Details:\n${message || 'No details provided.'}`,
            html: `
                <h3>New Project Inquiry</h3>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Phone:</strong> ${safePhone}</p>
                <p><strong>Company:</strong> ${safeCompany}</p>
                <p><strong>Service:</strong> ${safeService}</p>
                <h4>Project Details:</h4>
                <p>${safeMessage.replace(/\n/g, '<br>')}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
