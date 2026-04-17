import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

const FIELD_LABELS: Record<string, string> = {
  f_name: "Full Name",
  f_role: "Role",
  f_bname: "Business Name",
  f_industry: "Industry",
  f_email: "Email Address",
  f_phone: "Phone Number",
  f_website: "Existing Website",
  f_desc: "Business Description",
  f_audience: "Target Audience",
  f_sitetype: "Website Type",
  f_goals: "Primary Goals",
  f_pages: "Pages Needed",
  f_integrations: "Features & Integrations",
  f_launch: "Launch Timeline",
  f_budget: "Project Budget",
  f_haslogo: "Brand Assets Status",
  f_colors: "Preferred Colors",
  f_vibe: "Brand Vibe/Feeling",
  f_fonts: "Typography Preference",
  f_inspo: "Design Inspiration",
  f_avoid: "Things to Avoid",
  f_copy: "Copywriting Status",
  f_images: "Image Assets",
  f_video: "Video Content",
  f_blog: "Blog/Content Hub",
  f_seo: "SEO Strategy",
  f_languages: "Languages",
  f_addcontent: "Additional Content Info",
  f_platform: "Preferred Platform",
  f_hosting: "Hosting Status",
  f_domain: "Domain Status",
  f_maintain: "Maintenance Plan",
  f_competitors: "Top Competitors",
  f_anything: "Additional Project Info",
  f_hear: "How they found us",
};

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

    // 2. Generate Beautiful Email Rows
    const rows = Object.entries(formData)
      .filter(([key]) => !key.startsWith("__") && FIELD_LABELS[key])
      .map(([key, value]) => {
        const displayValue = Array.isArray(value) ? value.join(", ") : value;
        return `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; width: 180px; vertical-align: top;">
              <strong style="color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">${FIELD_LABELS[key]}</strong>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 15px; line-height: 1.5;">
              ${displayValue || "—"}
            </td>
          </tr>
        `;
      }).join("");

    // 3. Send Premium Designed Email via Resend
    const data = await resend.emails.send({
      from: 'Floxia Studio <onboarding@resend.dev>',
      to: 'floxiastudio@gmail.com',
      subject: `🚀 New Project: ${businessName} - Onboarding Submission`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9f9f9; }
              .container { max-width: 650px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #eee; }
              .header { background: #0a0a0a; padding: 40px; text-align: center; color: #fff; }
              .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.02em; }
              .header p { margin: 8px 0 0; opacity: 0.7; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; }
              .content { padding: 40px; }
              .summary-box { background: #fcfcfc; border: 1px solid #f0f0f0; border-radius: 12px; padding: 24px; margin-bottom: 32px; }
              .summary-box h3 { margin-top: 0; font-size: 18px; border-bottom: 1px solid #eee; padding-bottom: 12px; margin-bottom: 16px; }
              table { width: 100%; border-collapse: collapse; }
              .footer { background: #fafafa; padding: 24px; text-align: center; border-top: 1px solid #eee; }
              .footer p { margin: 0; font-size: 12px; color: #999; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <p>New Client Onboarding</p>
                <h1>Floxia Studio</h1>
              </div>
              <div class="content">
                <div class="summary-box">
                  <h3>Project Overview</h3>
                  <p style="margin: 0; font-size: 16px;"><strong>Client:</strong> ${fullName}</p>
                  <p style="margin: 4px 0 0; font-size: 16px;"><strong>Business:</strong> ${businessName}</p>
                  <p style="margin: 4px 0 0; font-size: 16px;"><strong>Email:</strong> ${email}</p>
                </div>

                <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 20px; color: #000;">Full Questionnaire Data</h3>
                <table>
                  ${rows}
                </table>

                <div style="margin-top: 40px; padding: 20px; background: #0a0a0a; color: #fff; border-radius: 12px; text-align: center;">
                  <p style="margin: 0; font-weight: 600;">Action Required: Review and Schedule Call</p>
                </div>
              </div>
              <div class="footer">
                <p>This is an automated notification from Floxia Studio.</p>
                <p>&copy; 2026 Floxia Studio. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
