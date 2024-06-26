import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import { EmailTemplate } from '@/components/contact/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        // Check if the email is valid
        if (!name || !email || !message) {
            return Response.json({ error: 'Please fill in all fields' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',              // TODO: Fix from domain errors on Resend
            to: ['hire.sreeharsha@gmail.com'],
            subject: 'Contact Form Submission from My Portfolio',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            react: EmailTemplate({ name, email, message }),
        });

        if (error) {
            return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }
}

