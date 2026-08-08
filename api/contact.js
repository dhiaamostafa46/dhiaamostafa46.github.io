const fs = require('fs');
const path = require('path');
let nodemailer = null;
try {
  nodemailer = require('nodemailer');
} catch (e) {
  // nodemailer will be installed in production deployment or fallback gracefully
}

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed. Please send a POST request.'
    });
  }

  try {
    // Parse body if needed
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (err) {
        // use raw body
      }
    }
    body = body || {};

    const contact = (body.contact || '').trim();
    const details = (body.details || '').trim();

    // Validation
    if (!contact || !details) {
      return res.status(400).json({
        success: false,
        message: 'يرجى إدخال جميع البيانات المطلوبة (بيانات التواصل وتفاصيل المشروع).'
      });
    }

    // Configurable Defaults from Environment Variables
    const defaultEmail = process.env.DEFAULT_EMAIL || 'dhiaamostafa46@gmail.com';
    const defaultPhone = process.env.DEFAULT_PHONE || '+966533166742';

    const timestamp = new Date().toISOString();
    const formattedDate = new Date().toLocaleString('ar-SA', {
      timeZone: 'Asia/Riyadh',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    const submissionRecord = {
      id: 'REQ-' + Date.now(),
      contact,
      details,
      targetEmail: defaultEmail,
      fallbackPhone: defaultPhone,
      timestamp,
      formattedDate,
      ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown'
    };

    // 1. Record Submission to Local Log / Database Store
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const submissionsFile = path.join(dataDir, 'intake_submissions.json');
      let existingSubmissions = [];
      if (fs.existsSync(submissionsFile)) {
        try {
          const content = fs.readFileSync(submissionsFile, 'utf8');
          existingSubmissions = JSON.parse(content);
        } catch (e) {
          existingSubmissions = [];
        }
      }
      existingSubmissions.unshift(submissionRecord);
      fs.writeFileSync(submissionsFile, JSON.stringify(existingSubmissions, null, 2), 'utf8');
    } catch (saveError) {
      console.error('Failed to log submission to disk:', saveError);
    }

    // 2. Email Transmission via Nodemailer (if SMTP credentials set)
    let emailSent = false;
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (nodemailer && smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || `"Operations Intake" <${smtpUser}>`,
        to: defaultEmail,
        replyTo: contact.includes('@') ? contact : undefined,
        subject: `[Operations Console] طلب مشروع جديد من: ${contact}`,
        text: `تفاصيل الطلب الجديد:\n\nبيانات التواصل: ${contact}\n\nنظرة عامة ومتطلبات المشروع:\n${details}\n\nتاريخ الطلب: ${formattedDate}\nالبريد المستلم الافتراضي: ${defaultEmail}\nرقم التواصل الاحتياطي: ${defaultPhone}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #10b981; border-radius: 8px; overflow: hidden; background-color: #0f172a; color: #f8fafc; padding: 24px;">
            <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px; margin-top: 0;">
              [ OPERATIONS_CONSOLE_INTAKE ]
            </h2>
            <p style="font-size: 16px; color: #94a3b8;">تم استلام طلب جديد من محفظة النظم والمشاريع:</p>
            
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 6px; margin: 15px 0;">
              <p style="margin: 5px 0;"><strong>الاسم / البريد / واتساب:</strong></p>
              <p style="color: #38bdf8; font-size: 16px; font-weight: bold; margin: 5px 0;">${contact}</p>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 6px; margin: 15px 0;">
              <p style="margin: 5px 0;"><strong>تفاصيل ومتطلبات المشروع:</strong></p>
              <p style="white-space: pre-wrap; color: #e2e8f0; line-height: 1.6; margin: 5px 0;">${details}</p>
            </div>

            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #334155; font-size: 12px; color: #64748b;">
              <p style="margin: 3px 0;"><strong>تاريخ ووقت الإرسال:</strong> ${formattedDate}</p>
              <p style="margin: 3px 0;"><strong>البريد الافتراضي:</strong> ${defaultEmail}</p>
              <p style="margin: 3px 0;"><strong>رقم الواتساب الافتراضي:</strong> ${defaultPhone}</p>
              <p style="margin: 3px 0;"><strong>معرف الطلب:</strong> ${submissionRecord.id}</p>
            </div>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
      emailSent = true;
    } else {
      console.log('Submission recorded locally. SMTP not fully configured in env, email skipped in dry-run mode.');
    }

    return res.status(200).json({
      success: true,
      message: 'تم الإرسال بنجاح! سيتم التواصل معك قريباً.',
      requestId: submissionRecord.id,
      emailSent
    });

  } catch (error) {
    console.error('Error processing intake submission:', error);
    return res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء معالجة الطلب في الخادم. يرجى المحاولة لاحقاً.'
    });
  }
};
