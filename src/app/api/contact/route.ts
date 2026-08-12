import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/lib/schemas';
import { sendMetaCapiLeadEvent } from '@/lib/metaCapi';

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

        const { name, email, phone, company, service, message, utm, eventId, channel } = validationResult.data;

        // Extract client signals for Meta CAPI matching
        const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || undefined;
        const userAgent = request.headers.get("user-agent") || undefined;
        const referer = request.headers.get("referer") || "https://techmate4u.com";

        const cookieHeader = request.headers.get("cookie") || "";
        const fbpMatch = cookieHeader.match(/_fbp=([^;]+)/);
        const fbcMatch = cookieHeader.match(/_fbc=([^;]+)/);
        const fbp = fbpMatch ? fbpMatch[1] : undefined;
        const fbc = fbcMatch ? fbcMatch[1] : undefined;

        // Trigger Meta Conversions API (CAPI) event asynchronously (non-blocking)
        sendMetaCapiLeadEvent({
            name,
            email,
            phone,
            service,
            channel: channel || "email",
            eventId,
            utm,
            clientIp,
            userAgent,
            fbp,
            fbc,
            sourceUrl: referer,
        }).catch((err) => {
            console.error("[Meta CAPI Background Execution Error]", err instanceof Error ? err.message : err);
        });

        // Strip headers for safety and sanitize values for XSS
        const safeName = sanitize(stripNewlines(name));
        const safeEmail = sanitize(stripNewlines(email));
        const safePhone = sanitize(stripNewlines(phone));
        const safeCompany = company ? sanitize(stripNewlines(company)) : 'Not provided';
        const safeService = sanitize(stripNewlines(service));
        const safeMessage = message ? sanitize(message) : 'No details provided.';

        const safeUtmSource = utm?.utm_source ? sanitize(stripNewlines(utm.utm_source)) : 'N/A';
        const safeUtmMedium = utm?.utm_medium ? sanitize(stripNewlines(utm.utm_medium)) : 'N/A';
        const safeUtmCampaign = utm?.utm_campaign ? sanitize(stripNewlines(utm.utm_campaign)) : 'N/A';
        const safeUtmContent = utm?.utm_content ? sanitize(stripNewlines(utm.utm_content)) : 'N/A';
        const safeUtmTerm = utm?.utm_term ? sanitize(stripNewlines(utm.utm_term)) : 'N/A';
        const safeFbclid = utm?.fbclid ? sanitize(stripNewlines(utm.fbclid)) : 'N/A';

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
            text: `New Project Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || 'Not provided'}\nService: ${service}\n\nProject Details:\n${message || 'No details provided.'}\n\n--- Campaign Attribution ---\nUTM Source: ${safeUtmSource}\nUTM Medium: ${safeUtmMedium}\nUTM Campaign: ${safeUtmCampaign}\nUTM Content: ${safeUtmContent}\nUTM Term: ${safeUtmTerm}\nFBCLID: ${safeFbclid}`,
            html: `
                <h3>New Project Inquiry</h3>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Phone:</strong> ${safePhone}</p>
                <p><strong>Company:</strong> ${safeCompany}</p>
                <p><strong>Service:</strong> ${safeService}</p>
                <h4>Project Details:</h4>
                <p>${safeMessage.replace(/\n/g, '<br>')}</p>
                <hr style="border:0;border-top:1px solid #eee;margin:20px 0;">
                <h4>Campaign Attribution:</h4>
                <ul>
                    <li><strong>Source:</strong> ${safeUtmSource}</li>
                    <li><strong>Medium:</strong> ${safeUtmMedium}</li>
                    <li><strong>Campaign:</strong> ${safeUtmCampaign}</li>
                    <li><strong>Content:</strong> ${safeUtmContent}</li>
                    <li><strong>Term:</strong> ${safeUtmTerm}</li>
                    <li><strong>FBCLID:</strong> ${safeFbclid}</li>
                </ul>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
