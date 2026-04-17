import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const fullName = formData.f_name || "Unknown";
    const businessName = formData.f_bname || "Unknown";
    const email = formData.f_email || "Unknown";

    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from('onboarding_submissions')
      .insert([{ 
        full_name: fullName, 
        business_name: businessName, 
        email: email, 
        form_data: formData 
      }]);

    if (dbError) {
      console.error("Database error (Onboarding):", dbError);
    }

    // 2. Send Email via Resend
    const data = await resend.emails.send({
      from: 'Floxia Studio <onboarding@resend.dev>',
      to: 'floxiastudio@gmail.com',
      subject: `New Onboarding Submission: ${businessName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">Onboarding Questionnaire Received</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Business:</strong> ${businessName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;" />
          <h3 style="color: #555;">Summary of Key Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Project Type:</strong> ${formData.f_sitetype || "—"}</li>
            <li><strong>Launch Timeline:</strong> ${formData.f_launch || "—"}</li>
            <li><strong>Estimated Budget:</strong> ${formData.f_budget || "—"}</li>
          </ul>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px; font-size: 14px;">
            Check your Supabase dashboard or the project database for the full JSON submission.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
