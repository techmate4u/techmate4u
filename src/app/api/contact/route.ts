import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, mobile, service, message } = await request.json();

        // Validate
        if (!name || !email || !mobile) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const projectDetails = message?.trim() || "No additional details provided.";

        // Create a Nodemailer transporter
        // Add SMTP credentials to your .env.local file:
        // EMAIL_USER=your-email@gmail.com
        // EMAIL_PASS=your-app-password
        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can change this to your SMTP provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@techmate4u.com', // Where you want to receive emails
            replyTo: email,
            subject: `New Lead: ${service.toUpperCase()} inquiry from ${name}`,
            text: `
You have received a new project inquiry from your landing page.

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Service Category: ${service}

Project Details:
${projectDetails}
            `,
            html: `
                <h3>New Project Inquiry</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>Service:</strong> ${service}</p>
                <h4>Project Details:</h4>
                <p>${projectDetails.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
