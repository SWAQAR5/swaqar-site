import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { organisation, representative, email, category, inquiry } = body;

    if (!organisation || !representative || !email || !category || !inquiry) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Email 1 — Notification to SWAQAR
    await resend.emails.send({
      from: 'SWAQAR Institutional Intake <support@swaqar.com>',
      to: ['support@swaqar.com'],
      subject: `Institutional Inquiry — ${category} — ${organisation}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #FAFAF6; border-top: 3px solid #CEA437;">
          <div style="margin-bottom: 32px;">
            <div style="font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #CEA437; margin-bottom: 8px;">SWAQAR GROUP — INSTITUTIONAL INQUIRY</div>
            <div style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #535256;">Governance Intake System · Phase I Foundation Stage</div>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #D4D0CA;">
              <td style="padding: 14px 0; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #535256; width: 40%;">Organisation</td>
              <td style="padding: 14px 0; font-size: 14px; color: #1A1A1A; font-weight: 600;">${organisation}</td>
            </tr>
            <tr style="border-bottom: 1px solid #D4D0CA;">
              <td style="padding: 14px 0; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #535256;">Representative</td>
              <td style="padding: 14px 0; font-size: 14px; color: #1A1A1A;">${representative}</td>
            </tr>
            <tr style="border-bottom: 1px solid #D4D0CA;">
              <td style="padding: 14px 0; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #535256; width: 40%;">Email</td>
              <td style="padding: 14px 0; font-size: 14px; color: #1A1A1A;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #D4D0CA;">
              <td style="padding: 14px 0; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #535256;">Category</td>
              <td style="padding: 14px 0; font-size: 14px; color: #CEA437; font-weight: 600;">${category}</td>
            </tr>
            <tr>
              <td style="padding: 14px 0; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #535256; vertical-align: top;">Nature of Inquiry</td>
              <td style="padding: 14px 0; font-size: 14px; color: #1A1A1A; line-height: 1.7;">${inquiry}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; padding: 16px 20px; background: #EDEBE4; border-left: 2px solid #CEA437;">
            <div style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #535256;">Governance Note</div>
            <div style="font-size: 12px; color: #3D3C41; margin-top: 6px; line-height: 1.6;">This inquiry has entered SWAQAR's institutional review queue. Review against counterparty eligibility criteria before any response is issued.</div>
          </div>
          <div style="margin-top: 32px; font-size: 10px; color: #535256; letter-spacing: 1px;">SWAQAR Group · Jeddah, Kingdom of Saudi Arabia · support@swaqar.com</div>
        </div>
      `,
    });

    // Email 2 — Auto-acknowledgement to submitter
    await resend.emails.send({
      from: 'SWAQAR Group <support@swaqar.com>',
      to: [email],
      subject: 'SWAQAR Group — Institutional Inquiry Received',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #FAFAF6; border-top: 3px solid #CEA437;">
          <div style="margin-bottom: 32px;">
            <div style="font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #CEA437; margin-bottom: 8px;">SWAQAR GROUP</div>
            <div style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #535256;">Corridors of Trust · Institutional Acknowledgement</div>
          </div>
          <p style="font-size: 15px; color: #1A1A1A; line-height: 1.8; margin-bottom: 24px;">Your institutional inquiry has been received and entered into SWAQAR Group's review queue.</p>
          <div style="padding: 20px 24px; background: #EDEBE4; border-left: 2px solid #CEA437; margin-bottom: 24px;">
            <div style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #CEA437; margin-bottom: 12px;">What Happens Next</div>
            <div style="font-size: 13px; color: #3D3C41; line-height: 1.75;">
              <div style="margin-bottom: 10px;"><strong style="color: #1A1A1A;">01 — Eligibility review.</strong> Your inquiry will be assessed against SWAQAR's counterparty eligibility criteria and engagement category requirements.</div>
              <div style="margin-bottom: 10px;"><strong style="color: #1A1A1A;">02 — Qualification gate.</strong> Eligible counterparties will be invited to begin the Partner Qualification Gate process under SWAQAR's governance framework.</div>
              <div><strong style="color: #1A1A1A;">03 — Written outcome.</strong> All outcomes are communicated in writing. SWAQAR does not proceed without a confirmed governance-compliant engagement framework in place.</div>
            </div>
          </div>
          <p style="font-size: 12px; color: #535256; line-height: 1.75; margin-bottom: 24px;">This acknowledgement confirms receipt only. It does not initiate an engagement, create contractual obligation, or constitute regulated advice of any kind. SWAQAR Group is currently in Phase I — Foundation Stage and is not yet operationally active.</p>
          <div style="border-top: 1px solid #D4D0CA; padding-top: 20px; font-size: 10px; color: #535256; letter-spacing: 1px;">
            SWAQAR Group · Jeddah, Kingdom of Saudi Arabia<br/>
            support@swaqar.com · swaqar.com<br/>
            Governance-Led · Verification-First · Non-Custodial
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
