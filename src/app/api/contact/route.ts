import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Sanitize input to prevent XSS and injection attacks
function sanitize(input: string): string {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

// Strip all HTML tags for plain text
function stripTags(input: string): string {
    return input.replace(/<[^>]*>/g, '');
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const name = stripTags(String(body.name || '').trim());
        const email = stripTags(String(body.email || '').trim());
        const countryCode = stripTags(String(body.countryCode || '').trim());
        const mobile = stripTags(String(body.mobile || '').trim());
        const service = stripTags(String(body.service || '').trim());
        const rawMessage = stripTags(String(body.message || '').trim());

        // Validate required fields
        if (!name || name.length < 2 || name.length > 100) {
            return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email) || email.length > 254) {
            return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
        }

        // Mobile is optional, but if provided must be 10 digits
        if (mobile && !/^\d{10}$/.test(mobile)) {
            return NextResponse.json({ error: 'Phone must be exactly 10 digits' }, { status: 400 });
        }

        const validServices = ['website', 'seo', 'automation', 'mobile', 'marketing', 'other'];
        if (!validServices.includes(service)) {
            return NextResponse.json({ error: 'Invalid service type' }, { status: 400 });
        }

        if (rawMessage.length > 2000) {
            return NextResponse.json({ error: 'Message too long' }, { status: 400 });
        }

        // Strip newlines for headers to prevent injection
        const stripNewlines = (s: string) => s.replace(/[\r\n]/g, ' ');

        // Sanitize for HTML email
        const safeName = sanitize(name);
        const safeEmail = sanitize(email);
        const safePhone = mobile ? sanitize(`${countryCode} ${mobile}`) : 'Not provided';
        const safeService = sanitize(service);
        const safeMessage = rawMessage ? sanitize(rawMessage) : 'No additional details provided.';

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
            replyTo: email,
            subject: `New Lead: ${stripNewlines(safeService).toUpperCase()} inquiry from ${stripNewlines(safeName)}`,
            text: `New Project Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${safePhone}\nService: ${service}\n\nProject Details:\n${rawMessage || 'No additional details provided.'}`,
            html: `
                <h3>New Project Inquiry</h3>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Phone/WhatsApp:</strong> ${safePhone}</p>
                <p><strong>Service:</strong> ${safeService}</p>
                <h4>Project Details:</h4>
                <p>${safeMessage.replace(/\n/g, '<br>')}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
