import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { auditFormSchema } from '@/lib/schemas';
import { sendMetaCapiLeadEvent } from '@/lib/metaCapi';

function sanitize(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

function stripNewlines(input: string): string {
  return input.replace(/[\r\n]/g, ' ').trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validationResult = auditFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, websiteUrl, comments } = validationResult.data;
    const utm = body.utm;
    const eventId = body.eventId;

    // Extract client signals for Meta CAPI matching
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      undefined;
    const userAgent = request.headers.get('user-agent') || undefined;
    const referer = request.headers.get('referer') || 'https://techmate4u.com';

    const cookieHeader = request.headers.get('cookie') || '';
    const fbpMatch = cookieHeader.match(/_fbp=([^;]+)/);
    const fbcMatch = cookieHeader.match(/_fbc=([^;]+)/);
    const fbp = fbpMatch ? fbpMatch[1] : undefined;
    const fbc = fbcMatch ? fbcMatch[1] : undefined;

    // Trigger Meta Conversions API (CAPI) event asynchronously
    sendMetaCapiLeadEvent({
      name,
      email,
      phone: '', // Audit form doesn't take phone
      service: 'Technical SEO Audit',
      channel: 'email',
      eventId,
      utm,
      clientIp,
      userAgent,
      fbp,
      fbc,
      sourceUrl: referer,
    }).catch((err) => {
      console.error('[Meta CAPI Background Execution Error]', err instanceof Error ? err.message : err);
    });

    const safeName = sanitize(stripNewlines(name));
    const safeEmail = sanitize(stripNewlines(email));
    const safeWebsiteUrl = sanitize(stripNewlines(websiteUrl));
    const safeComments = comments ? sanitize(comments) : 'No additional comments.';

    const safeUtmSource = utm?.utm_source ? sanitize(stripNewlines(utm.utm_source)) : 'N/A';
    const safeUtmMedium = utm?.utm_medium ? sanitize(stripNewlines(utm.utm_medium)) : 'N/A';
    const safeUtmCampaign = utm?.utm_campaign ? sanitize(stripNewlines(utm.utm_campaign)) : 'N/A';
    const safeUtmContent = utm?.utm_content ? sanitize(stripNewlines(utm.utm_content)) : 'N/A';
    const safeUtmTerm = utm?.utm_term ? sanitize(stripNewlines(utm.utm_term)) : 'N/A';
    const safeFbclid = utm?.fbclid ? sanitize(stripNewlines(utm.fbclid)) : 'N/A';

    // Flexible email transporter configuration (supports Resend, custom SMTP, or Gmail)
    const resendKey =
      process.env.RESEND_API_KEY ||
      (process.env.EMAIL_PASS?.startsWith('re_') ? process.env.EMAIL_PASS : undefined);
    const smtpHost = process.env.SMTP_HOST;

    let transporter;
    let fromAddress = process.env.EMAIL_FROM || process.env.EMAIL_USER || 'info@techmate4u.com';

    if (resendKey) {
      transporter = nodemailer.createTransport({
        host: 'smtp.resend.com',
        port: 465,
        secure: true,
        auth: {
          user: 'resend',
          pass: resendKey,
        },
      });
      fromAddress = process.env.EMAIL_FROM || 'TechMate4u Audits <onboarding@resend.dev>';
    } else if (smtpHost) {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: process.env.SMTP_SECURE !== 'false',
        auth: {
          user: process.env.SMTP_USER || process.env.EMAIL_USER,
          pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
        },
      });
    } else {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    }

    const mailOptions = {
      from: fromAddress,
      to: process.env.EMAIL_TO || 'info@techmate4u.com',
      replyTo: safeEmail,
      subject: `New Free Website Audit Request from ${safeName}`,
      text: `New Website Audit Request\n\nName: ${name}\nEmail: ${email}\nWebsite URL: ${websiteUrl}\nComments: ${comments || 'None'}\n\n--- Campaign Attribution ---\nUTM Source: ${safeUtmSource}\nUTM Medium: ${safeUtmMedium}\nUTM Campaign: ${safeUtmCampaign}\nUTM Content: ${safeUtmContent}\nUTM Term: ${safeUtmTerm}\nFBCLID: ${safeFbclid}`,
      html: `
        <h3>New Free Website Audit Request</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Website URL:</strong> <a href="${safeWebsiteUrl}">${safeWebsiteUrl}</a></p>
        <p><strong>Comments:</strong> ${safeComments.replace(/\n/g, '<br>')}</p>
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

    return NextResponse.json({ success: true, message: 'Audit request sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing audit request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
