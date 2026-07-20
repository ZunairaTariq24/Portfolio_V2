import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load env variables
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Initialize Resend
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY || 're_GLDuQb7D_PDUDkD9mqzvPQwmUuiqr8ymP';
  return new Resend(apiKey);
};

// API Endpoint for Contact Form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const resend = getResendClient();

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'zunairatariq985@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #4f46e5; margin-bottom: 20px; border-bottom: 2px solid #f4f4f5; padding-bottom: 10px;">New Contact Message Received</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-weight: bold; width: 120px;">From:</td>
              <td style="padding: 8px 0; color: #18181b;">${name} &lt;${email}&gt;</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-weight: bold;">Subject:</td>
              <td style="padding: 8px 0; color: #18181b;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-weight: bold;">Timestamp:</td>
              <td style="padding: 8px 0; color: #18181b; font-size: 13px;">${new Date().toLocaleString()}</td>
            </tr>
          </table>

          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #f3f4f6; margin-top: 10px;">
            <p style="margin: 0; font-weight: bold; color: #4b5563; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message Body:</p>
            <p style="margin: 0; color: #1f2937; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${message}</p>
          </div>

          <div style="margin-top: 30px; text-align: center; color: #a1a1aa; font-size: 11px;">
            This email was sent securely from the Portfolio Contact API.
          </div>
        </div>
      `,
    });

    if (response.error) {
      console.error('Resend API Error:', response.error);
      return res.status(500).json({ error: response.error.message || 'Failed to send email.' });
    }

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Contact Form backend error:', error);
    res.status(500).json({ error: error.message || 'An unexpected error occurred while sending email.' });
  }
});

// Vite middleware and serving logic
async function setupVite() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

setupVite();
