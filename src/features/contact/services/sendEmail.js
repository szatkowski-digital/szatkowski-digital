import nodemailer from "nodemailer";

// Optymalizacja produkcji: Inicjalizujemy transporter poza funkcją,
// aby Next.js mógł reużywać połączenie TCP między zapytaniami.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true", // Zmienna środowiskowa steruje SSL/TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // Na produkcji ustaw TLS na true (rejection), chyba że używasz self-signed certs
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === "production",
  },
});

// Prosta funkcja czyszcząca HTML, zapobiegająca wstrzykiwaniu skryptów (XSS)
const sanitize = (text) =>
  text?.replace(/</g, "&lt;").replace(/>/g, "&gt;") || "";

export async function sendEmail({ name, company, email, message, locale }) {
  const isEn = locale === "en";

  const subject = isEn
    ? "New Inquiry from BlitzForm"
    : "Zapytanie ze strony BlitzForm";

  const cleanName = sanitize(name);
  const cleanCompany = sanitize(company) || "-";
  const cleanMessage = sanitize(message).replace(/\n/g, "<br/>");

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; color: #333;">
      <h2>${subject}</h2>
      <hr style="border: 0; border-top: 1px solid #eee;" />
      <p><strong>${isEn ? "Name" : "Imię i nazwisko"}:</strong> ${cleanName}</p>
      <p><strong>${isEn ? "Company" : "Firma"}:</strong> ${cleanCompany}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>${isEn ? "Message" : "Wiadomość"}:</strong></p>
      <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #00f0ff;">
        ${cleanMessage}
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"BlitzForm Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO,
    replyTo: email,
    subject: subject,
    html: htmlContent,
  };

  // Wysyłka
  await transporter.sendMail(mailOptions);
}
