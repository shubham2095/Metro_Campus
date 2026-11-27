import nodemailer from 'nodemailer'

let transporter

// Created on first use so the .env values are loaded by then.
// For Gmail: use an App Password (not your normal password).
function getTransporter() {
  const port = Number(process.env.SMTP_PORT) || 465

  transporter ??= nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure: port === 465, // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  return transporter
}

// Submitted text goes into an HTML email, so it must be escaped first.
function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Keep user input out of subject lines as a single clean line.
const singleLine = (value) => value.replace(/[\r\n]+/g, ' ')

export async function sendContactEmail({ name, email, phone, message }) {
  await getTransporter().sendMail({
    from: `"Metro Campus Living Website" <${process.env.SMTP_USER}>`,
    to: process.env.TO_EMAIL || process.env.SMTP_USER,
    replyTo: email,
    subject: `New Enquiry from ${singleLine(name)} - Metro Campus Living`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; color:#333;">
        <h2 style="color:#3F7D1D;">New PG Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#f5f5f5;padding:12px;border-radius:8px;">${escapeHtml(message).replace(/\r?\n/g, '<br>')}</p>
        <hr/>
        <small>Sent from the Metro Campus Living website contact form.</small>
      </div>
    `,
  })
}
