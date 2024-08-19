import { EmailTemplate } from '../../../Components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: 'roza.allafi@siyeso.com',
        subject: 'Hello test',
        react: EmailTemplate({ firstName: 'John' }),
      });
  
      if (error) {
        console.error('Resend API error:', error);
        return new Response(JSON.stringify({ error }), { status: 500 });
      }
  
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Unexpected error:', (error as Error).message || error);
      return new Response(JSON.stringify({ error: (error as Error).message || 'Internal Server Error' }), { status: 500 });
    }
  }
  
