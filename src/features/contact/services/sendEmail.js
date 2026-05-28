import { getTranslations } from "next-intl/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sanitize = (text) =>
  text?.replace(/</g, "&lt;").replace(/>/g, "&gt;") || "";

export async function sendEmail({ name, service, email, message, locale }) {
  // 1. Automatyczne pobranie tłumaczeń backendowych dla danego języka
  const t = await getTranslations({ locale, namespace: "contact.email" });

  // 2. Czyszczenie danych wejściowych
  const cleanName = sanitize(name);
  const cleanService = sanitize(service) || "-";
  const cleanMessage = sanitize(message).replace(/\n/g, "<br/>");

  // 3. Budowanie HTML bez żadnych warunków isEn - czysty, czytelny kod
  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
      <h2>${t("subject")}</h2>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
      <p><strong>${t("labelName")}:</strong> ${cleanName}</p>
      <p><strong>${t("labelService")}:</strong> ${cleanService}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>${t("labelMessage")}:</strong></p>
      <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #00f0ff; margin-top: 10px;">
        ${cleanMessage}
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Szatkowski Digital" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO,
    replyTo: email,
    subject: t("subject"),
    html: htmlContent,
  };

  // 4. Wysyłka poczty
  await transporter.sendMail(mailOptions);
}
