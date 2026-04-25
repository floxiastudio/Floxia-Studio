"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLandingLead(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const practice = formData.get("practice") as string;
  const specialty = formData.get("specialty") as string;
  const hasWebsite = formData.get("hasWebsite") as string;
  const challenge = formData.get("challenge") as string;
  const notes = formData.get("notes") as string;

  if (!email || !name) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    const data = await resend.emails.send({
      from: 'Floxia Studio <onboarding@resend.dev>',
      to: 'floxiastudio@gmail.com',
      subject: `New Landing Page Lead: ${name} (${specialty})`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; color: #333;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">New Practice Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Practice:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${practice || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Specialty:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${specialty}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Has Website:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${hasWebsite}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Main Challenge:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${challenge}</td>
            </tr>
          </table>

          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #eee;">
            <p style="margin-top: 0; font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Context & Vision</p>
            <p style="white-space: pre-wrap; margin-bottom: 0; line-height: 1.6;">${notes || 'No additional context provided.'}</p>
          </div>

          <p style="font-size: 11px; color: #999; margin-top: 30px; text-align: center;">
            This application was submitted via the Floxia Studio niche landing page.
          </p>
        </div>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: (error as Error).message };
  }
}
